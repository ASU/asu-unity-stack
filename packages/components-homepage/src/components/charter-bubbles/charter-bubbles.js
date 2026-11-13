// Progressive-enhancement controller foundation — WWWCMS-238

const ROOT_SELECTOR = "[data-charter-bubbles]";
const ITEM_SELECTOR = "[data-charter-bubble-item]";
const OPEN_SELECTOR = "[data-charter-bubble-open]";
const PANEL_SELECTOR = "[data-charter-bubble-panel]";
const CLOSE_SELECTOR = "[data-charter-bubble-close]";
const CLUSTER_SELECTOR = "[data-charter-bubble-cluster]";
const STAGE_SELECTOR = "[data-charter-bubble-cluster-stage]";
const CAROUSEL_SELECTOR = "[data-charter-bubble-carousel]";
const VIEWPORT_SELECTOR = "[data-charter-bubble-viewport]";
const TRACK_SELECTOR = "[data-charter-bubble-track]";
const LIST_SELECTOR = "[data-charter-bubble-list]";
const NAV_SELECTOR = "[data-charter-bubble-nav]";
const PREVIOUS_SELECTOR = "[data-charter-bubble-previous]";
const NEXT_SELECTOR = "[data-charter-bubble-next]";
const FOCUSABLE_SELECTOR =
  'a[href], button, input, select, textarea, [tabindex], [contenteditable="true"]';
const CAROUSEL_MEDIA_QUERY = "(max-width: 768px)";
const REDUCED_MOTION_MEDIA_QUERY = "(prefers-reduced-motion: reduce)";
const SCROLL_IDLE_MS = 150;
const WHEEL_SESSION_IDLE_MS = 240;
const DESKTOP_OPEN_SIZE = 454;
const DESKTOP_CLOSED_SIZE = 180;
const DESKTOP_EDGE_GAP = 16;
const DESKTOP_NEIGHBOR_GAP = 16;
const DESKTOP_OPEN_BOTTOM_ALLOWANCE = 192;
const DESKTOP_RELAXATION_PASSES = 60;
const controllers = new WeakMap();
const ignore = () => {};

const readAttribute = (element, name) => ({
  present: element.hasAttribute(name),
  value: element.getAttribute(name),
});

const readClass = (element, name) => element.classList.contains(name);

const readStyle = (element, name) => {
  const present = Array.from(element.style).includes(name);
  return {
    present,
    value: element.style.getPropertyValue(name),
    priority: element.style.getPropertyPriority(name),
  };
};

const sameAttribute = (left, right) =>
  left.present === right.present && left.value === right.value;

const sameStyle = (left, right) =>
  left.present === right.present &&
  left.value === right.value &&
  left.priority === right.priority;

const restoreAttribute = (element, name, state) => {
  if (state.present) element.setAttribute(name, state.value ?? "");
  else element.removeAttribute(name);
};

const restoreStyle = (element, name, state) => {
  if (state.present) {
    element.style.setProperty(name, state.value, state.priority);
  } else {
    element.style.removeProperty(name);
  }
};

/**
 * Finds component roots without assuming the supplied scope is a Document.
 *
 * @param {unknown} scope
 * @returns {HTMLElement[]}
 */
export const findCharterBubbles = scope => {
  if (!scope || typeof scope !== "object") return [];

  const roots = new Set();

  try {
    if (typeof scope.matches === "function" && scope.matches(ROOT_SELECTOR)) {
      roots.add(scope);
    }

    if (typeof scope.querySelectorAll === "function") {
      scope.querySelectorAll(ROOT_SELECTOR).forEach(root => roots.add(root));
    }
  } catch {
    return [];
  }

  return Array.from(roots);
};

/**
 * Creates the mutation/listener ledger used by later behavior tasks.
 *
 * @param {HTMLElement} root
 */
const createController = root => {
  const attributeLog = new Map();
  const classLog = new Map();
  const styleLog = new Map();
  const cleanups = new Set();
  let active = true;

  const logFor = (ledger, element) => {
    let entries = ledger.get(element);
    if (!entries) {
      entries = new Map();
      ledger.set(element, entries);
    }
    return entries;
  };

  const setAttribute = (element, name, value) => {
    if (
      !active ||
      !element ||
      typeof element.setAttribute !== "function" ||
      typeof name !== "string" ||
      !name
    ) {
      return;
    }

    const before = readAttribute(element, name);
    const wanted =
      value == null
        ? { present: false, value: null }
        : { present: true, value: String(value) };
    if (sameAttribute(before, wanted)) return;

    const entries = logFor(attributeLog, element);
    if (!entries.has(name)) {
      entries.set(name, { previous: before, applied: wanted });
    }

    if (wanted.present) element.setAttribute(name, wanted.value);
    else element.removeAttribute(name);
    entries.get(name).applied = readAttribute(element, name);
  };

  const setClass = (element, name, enabled) => {
    if (
      !active ||
      !element ||
      !element.classList ||
      typeof name !== "string" ||
      !name
    ) {
      return;
    }

    const before = readClass(element, name);
    const wanted = Boolean(enabled);
    if (before === wanted) return;

    const entries = logFor(classLog, element);
    if (!entries.has(name)) {
      entries.set(name, { previous: before, applied: wanted });
    }

    element.classList.toggle(name, wanted);
    entries.get(name).applied = readClass(element, name);
  };

  const releaseAttribute = (element, name) => {
    const entries = attributeLog.get(element);
    const entry = entries?.get(name);
    if (!active || !entry) return false;

    if (sameAttribute(readAttribute(element, name), entry.applied)) {
      restoreAttribute(element, name, entry.previous);
    }
    entries.delete(name);
    if (!entries.size) attributeLog.delete(element);
    return true;
  };

  const setStyle = (element, name, value, priority = "") => {
    if (
      !active ||
      !element ||
      !element.style ||
      typeof name !== "string" ||
      !name
    ) {
      return;
    }

    const before = readStyle(element, name);
    const wanted =
      value == null
        ? { present: false, value: "", priority: "" }
        : { present: true, value: String(value), priority };
    if (sameStyle(before, wanted)) return;

    const entries = logFor(styleLog, element);
    if (!entries.has(name)) {
      entries.set(name, { previous: before, applied: wanted });
    }

    if (wanted.present) {
      element.style.setProperty(name, wanted.value, wanted.priority);
    } else {
      element.style.removeProperty(name);
    }
    entries.get(name).applied = readStyle(element, name);
  };

  const addCleanup = cleanup => {
    if (!active || typeof cleanup !== "function") return ignore;

    let pending = true;
    const run = () => {
      if (!pending) return;
      pending = false;
      cleanups.delete(run);
      cleanup();
    };
    cleanups.add(run);
    return run;
  };

  const listen = (target, type, listener, options) => {
    if (
      !active ||
      !target ||
      typeof target.addEventListener !== "function" ||
      typeof listener !== "function"
    ) {
      return ignore;
    }

    target.addEventListener(type, listener, options);
    return addCleanup(() =>
      target.removeEventListener(type, listener, options)
    );
  };

  const trackObserver = observer => {
    if (observer && typeof observer.disconnect === "function") {
      addCleanup(() => observer.disconnect());
    }
    return observer;
  };

  const teardown = () => {
    if (!active) return;
    active = false;

    Array.from(cleanups)
      .reverse()
      .forEach(cleanup => {
        try {
          cleanup();
        } catch {
          // One third-party cleanup must not prevent the remaining restoration.
        }
      });

    styleLog.forEach((entries, element) => {
      entries.forEach((entry, name) => {
        if (sameStyle(readStyle(element, name), entry.applied)) {
          restoreStyle(element, name, entry.previous);
        }
      });
    });

    classLog.forEach((entries, element) => {
      entries.forEach((entry, name) => {
        if (readClass(element, name) === entry.applied) {
          element.classList.toggle(name, entry.previous);
        }
      });
    });

    attributeLog.forEach((entries, element) => {
      entries.forEach((entry, name) => {
        if (sameAttribute(readAttribute(element, name), entry.applied)) {
          restoreAttribute(element, name, entry.previous);
        }
      });
    });

    attributeLog.clear();
    classLog.clear();
    styleLog.clear();
    controllers.delete(root);
  };

  return {
    root,
    get active() {
      return active;
    },
    query: selector => {
      if (!active || typeof selector !== "string") return null;
      try {
        return root.querySelector(selector);
      } catch {
        return null;
      }
    },
    setAttribute,
    releaseAttribute,
    setClass,
    setStyle,
    listen,
    trackObserver,
    addCleanup,
    teardown,
  };
};

const closestElement = target => {
  if (target?.nodeType === 1) return target;
  return target?.parentElement ?? null;
};

const belongsToRoot = (element, root) =>
  element?.closest?.(ROOT_SELECTOR) === root;

const belongsToItem = (element, item) =>
  element?.closest?.(ITEM_SELECTOR) === item;

const discoverBubbleItems = root => {
  const seenIds = new Set();
  const seenDomIds = new Set();
  const records = [];

  root.querySelectorAll(ITEM_SELECTOR).forEach(item => {
    if (!belongsToRoot(item, root)) return;

    const id = item.getAttribute("data-charter-bubble-id")?.trim();
    const front = item.querySelector(OPEN_SELECTOR);
    const panel = item.querySelector(PANEL_SELECTOR);
    const close = panel?.querySelector(CLOSE_SELECTOR);
    const headingId = panel?.getAttribute("aria-labelledby")?.trim();
    const heading = headingId
      ? Array.from(panel.querySelectorAll("[id]")).find(
          element => element.id === headingId
        )
      : null;
    const link = panel?.querySelector("a.hp-charter-bubble__link[href]");
    const validRelationships =
      id &&
      !seenIds.has(id) &&
      front &&
      panel &&
      close &&
      belongsToItem(front, item) &&
      belongsToItem(panel, item) &&
      belongsToItem(close, item) &&
      front.parentElement === item &&
      panel.parentElement === item &&
      close.parentElement === panel &&
      front.tagName === "BUTTON" &&
      close.tagName === "BUTTON" &&
      front.getAttribute("type") === "button" &&
      close.getAttribute("type") === "button" &&
      Boolean(close.getAttribute("aria-label")?.trim()) &&
      ["true", "false"].includes(front.getAttribute("aria-expanded")) &&
      ["open", "closed"].includes(
        item.getAttribute("data-charter-bubble-state")
      ) &&
      front.id &&
      !seenDomIds.has(front.id) &&
      item.querySelectorAll(OPEN_SELECTOR).length === 1 &&
      item.querySelectorAll(PANEL_SELECTOR).length === 1 &&
      panel.querySelectorAll(CLOSE_SELECTOR).length === 1 &&
      panel.id &&
      !seenDomIds.has(panel.id) &&
      front.getAttribute("aria-controls") === panel.id &&
      heading &&
      heading.id &&
      !seenDomIds.has(heading.id) &&
      belongsToItem(heading, item) &&
      heading.parentElement === panel &&
      link &&
      belongsToItem(link, item) &&
      link.parentElement === panel;

    if (!validRelationships) return;

    seenIds.add(id);
    seenDomIds.add(front.id);
    seenDomIds.add(panel.id);
    seenDomIds.add(heading.id);
    records.push({ id, item, front, panel, close, index: records.length });
  });

  return records;
};

/**
 * Verifies the complete progressive-enhancement contract before any mutation
 * or listener is installed. Invalid CMS fragments keep the no-script view.
 *
 * @param {HTMLElement} root
 * @returns {boolean}
 */
const hasCompleteCharterBubblesContract = root => {
  const items = Array.from(root.querySelectorAll(ITEM_SELECTOR)).filter(item =>
    belongsToRoot(item, root)
  );
  const records = discoverBubbleItems(root);
  if (items.length !== 5 || records.length !== 5) return false;

  const cluster = root.querySelector(CLUSTER_SELECTOR);
  const stage = root.querySelector(STAGE_SELECTOR);
  const carousel = root.querySelector(CAROUSEL_SELECTOR);
  const viewport = root.querySelector(VIEWPORT_SELECTOR);
  const track = root.querySelector(TRACK_SELECTOR);
  const list = root.querySelector(LIST_SELECTOR);
  const navigation = root.querySelector(NAV_SELECTOR);
  const previous = root.querySelector(PREVIOUS_SELECTOR);
  const next = root.querySelector(NEXT_SELECTOR);

  return Boolean(
    root.getAttribute("data-charter-bubbles-instance")?.trim() &&
    cluster &&
    stage?.parentElement === cluster &&
    carousel?.parentElement === stage &&
    viewport?.parentElement === carousel &&
    track?.parentElement === viewport &&
    list?.parentElement === track &&
    list.tagName === "OL" &&
    Boolean(list.getAttribute("aria-label")?.trim()) &&
    items.every(item => item.parentElement === list) &&
    navigation?.parentElement === carousel &&
    navigation.getAttribute("role") === "group" &&
    Boolean(navigation.getAttribute("aria-label")?.trim()) &&
    previous?.parentElement === navigation &&
    next?.parentElement === navigation &&
    previous.tagName === "BUTTON" &&
    next.tagName === "BUTTON" &&
    previous.getAttribute("type") === "button" &&
    next.getAttribute("type") === "button" &&
    Boolean(previous.getAttribute("aria-label")?.trim()) &&
    Boolean(next.getAttribute("aria-label")?.trim()) &&
    root.querySelectorAll(CLUSTER_SELECTOR).length === 1 &&
    root.querySelectorAll(STAGE_SELECTOR).length === 1 &&
    root.querySelectorAll(CAROUSEL_SELECTOR).length === 1 &&
    root.querySelectorAll(VIEWPORT_SELECTOR).length === 1 &&
    root.querySelectorAll(TRACK_SELECTOR).length === 1 &&
    root.querySelectorAll(LIST_SELECTOR).length === 1 &&
    root.querySelectorAll(NAV_SELECTOR).length === 1 &&
    root.querySelectorAll(PREVIOUS_SELECTOR).length === 1 &&
    root.querySelectorAll(NEXT_SELECTOR).length === 1
  );
};

const canReceiveFocus = element =>
  element?.isConnected &&
  !element.disabled &&
  !element.hidden &&
  element.getAttribute("aria-hidden") !== "true";

const focusSafely = element => {
  if (!canReceiveFocus(element)) return;
  try {
    element.focus({ preventScroll: true });
  } catch {
    element.focus();
  }
};

const bindBubbleTransitions = controller => {
  const { root } = controller;
  const records = discoverBubbleItems(root);
  const byId = new Map(records.map(record => [record.id, record]));
  const byFront = new Map(records.map(record => [record.front, record]));
  const byClose = new Map(records.map(record => [record.close, record]));
  const cluster = controller.query(CLUSTER_SELECTOR);
  const stage = controller.query(STAGE_SELECTOR);
  const list = controller.query(LIST_SELECTOR);
  const ownerDocument = root.ownerDocument;
  const view = ownerDocument?.defaultView;
  const supportsInert = Boolean(
    view?.HTMLElement && "inert" in view.HTMLElement.prototype
  );
  let openId = null;

  const clearDesktopGeometry = () => {
    records.forEach(record => {
      controller.setStyle(record.item, "--hp-charter-translate-x", null);
      controller.setStyle(record.item, "--hp-charter-translate-y", null);
      controller.setStyle(record.item, "transition", null);
    });
  };

  const applyDesktopGeometry = () => {
    clearDesktopGeometry();
    if (!stage || !list || openId == null || (view?.innerWidth ?? 0) <= 768) {
      return;
    }

    const active = byId.get(openId);
    if (!active) return;

    const listRect = list.getBoundingClientRect();
    const scaleX = list.offsetWidth ? listRect.width / list.offsetWidth : 1;
    const scaleY = list.offsetHeight ? listRect.height / list.offsetHeight : 1;
    if (
      !Number.isFinite(scaleX) ||
      scaleX <= 0 ||
      !Number.isFinite(scaleY) ||
      scaleY <= 0
    ) {
      return;
    }
    const scale = Math.min(scaleX, scaleY);

    // Use each item's untransformed layout anchor. Reading a front's client
    // rect here makes an open-to-open transition inherit the previous
    // bubble's animated position, so the next layout is calculated from the
    // wrong state.
    const homes = records.map(record => {
      return {
        record,
        x: listRect.left + record.item.offsetLeft * scaleX,
        y: listRect.top + record.item.offsetTop * scaleY,
        dx: 0,
        dy: 0,
      };
    });
    const selected = homes.find(point => point.record === active);
    if (!selected) return;

    const edge = DESKTOP_EDGE_GAP;
    const viewportWidth =
      view?.innerWidth ?? ownerDocument.documentElement.clientWidth;
    const viewportHeight =
      view?.innerHeight ?? ownerDocument.documentElement.clientHeight;
    const clusterRect = cluster?.getBoundingClientRect();
    const hasMeasuredClusterBounds =
      Number.isFinite(clusterRect?.width) && clusterRect.width > 0;
    const clusterLeft = hasMeasuredClusterBounds
      ? Math.max(0, clusterRect.left)
      : 0;
    const clusterRight = hasMeasuredClusterBounds
      ? Math.min(viewportWidth, clusterRect.right)
      : viewportWidth;
    const precedingBoundary = root.getBoundingClientRect().top;
    const openBottomLimit = precedingBoundary + DESKTOP_OPEN_BOTTOM_ALLOWANCE;
    const openRadius = (DESKTOP_OPEN_SIZE * scale) / 2;
    const closedRadius = (DESKTOP_CLOSED_SIZE * scale) / 2;
    // The allowance below the preceding section is a preferred boundary, not
    // a collision constraint. Once scrolling leaves less vertical room than
    // an open bubble needs, use the full viewport so neighbors can still
    // spread out instead of being compressed into overlapping positions.
    const canHonorOpenBottomLimit = openBottomLimit - edge >= openRadius * 2;
    const effectiveOpenBottomLimit = canHonorOpenBottomLimit
      ? openBottomLimit
      : viewportHeight - edge;
    const neighborGap = DESKTOP_NEIGHBOR_GAP * scale;
    const minOpenDistance = openRadius + closedRadius + neighborGap;
    const minNeighborDistance = closedRadius * 2 + neighborGap;
    const clamp = (value, minimum, maximum) =>
      Math.min(Math.max(value, minimum), maximum);

    selected.dx =
      clamp(
        selected.x,
        clusterLeft + edge + openRadius,
        clusterRight - edge - openRadius
      ) - selected.x;
    const minimumOpenY = edge + openRadius;
    const maximumOpenY = Math.max(
      minimumOpenY,
      Math.min(
        viewportHeight - edge - openRadius,
        effectiveOpenBottomLimit - openRadius
      )
    );
    selected.dy = clamp(selected.y, minimumOpenY, maximumOpenY) - selected.y;
    const openX = selected.x + selected.dx;
    const openY = selected.y + selected.dy;
    const neighbors = homes.filter(point => point !== selected);
    const minimumClosedX = clusterLeft + edge + closedRadius;
    const maximumClosedX = clusterRight - edge - closedRadius;
    const minimumClosedY = edge + closedRadius;
    const maximumClosedY = Math.max(
      minimumClosedY,
      Math.min(
        viewportHeight - edge - closedRadius,
        effectiveOpenBottomLimit - closedRadius
      )
    );

    const keepOutsideOpenBubble = (point, index) => {
      const currentX = point.x + point.dx;
      const currentY = point.y + point.dy;
      let deltaX = currentX - openX;
      let deltaY = currentY - openY;
      let distance = Math.hypot(deltaX, deltaY);
      if (distance >= minOpenDistance) return;

      if (distance < 0.01) {
        const angle = (index / neighbors.length) * Math.PI * 2;
        deltaX = Math.cos(angle);
        deltaY = Math.sin(angle);
        distance = 1;
      }

      const candidates = [];
      const addCandidate = (x, y) => {
        if (
          x < minimumClosedX - 0.01 ||
          x > maximumClosedX + 0.01 ||
          y < minimumClosedY - 0.01 ||
          y > maximumClosedY + 0.01 ||
          Math.hypot(x - openX, y - openY) < minOpenDistance - 0.01
        ) {
          return;
        }
        candidates.push({
          x,
          y,
          score: (x - currentX) ** 2 + (y - currentY) ** 2,
        });
      };

      addCandidate(
        openX + (deltaX / distance) * minOpenDistance,
        openY + (deltaY / distance) * minOpenDistance
      );

      [minimumClosedX, maximumClosedX].forEach(x => {
        const squaredY = minOpenDistance ** 2 - Math.abs(x - openX) ** 2;
        if (squaredY < 0) return;
        const y = Math.sqrt(squaredY);
        addCandidate(x, openY + y);
        addCandidate(x, openY - y);
      });

      [minimumClosedY, maximumClosedY].forEach(y => {
        const squaredX = minOpenDistance ** 2 - Math.abs(y - openY) ** 2;
        if (squaredX < 0) return;
        const x = Math.sqrt(squaredX);
        addCandidate(openX + x, y);
        addCandidate(openX - x, y);
      });

      if (!candidates.length) return;
      const best = candidates.reduce((closest, candidate) =>
        candidate.score < closest.score ? candidate : closest
      );
      point.dx = best.x - point.x;
      point.dy = best.y - point.y;
    };

    for (let pass = 0; pass < DESKTOP_RELAXATION_PASSES; pass += 1) {
      neighbors.forEach((point, index) => {
        let x = point.x + point.dx;
        let y = point.y + point.dy;
        let deltaX = x - openX;
        let deltaY = y - openY;
        let distance = Math.hypot(deltaX, deltaY);
        if (distance < minOpenDistance) {
          if (distance < 0.01) {
            const angle = (index / neighbors.length) * Math.PI * 2;
            deltaX = Math.cos(angle);
            deltaY = Math.sin(angle);
            distance = 1;
          }
          const push = minOpenDistance - distance;
          point.dx += (deltaX / distance) * push;
          point.dy += (deltaY / distance) * push;
        }
      });

      for (let first = 0; first < neighbors.length; first += 1) {
        for (let second = first + 1; second < neighbors.length; second += 1) {
          const a = neighbors[first];
          const b = neighbors[second];
          let deltaX = b.x + b.dx - (a.x + a.dx);
          let deltaY = b.y + b.dy - (a.y + a.dy);
          let distance = Math.hypot(deltaX, deltaY);
          if (distance >= minNeighborDistance) continue;
          if (distance < 0.01) {
            deltaX = 1;
            deltaY = 0;
            distance = 1;
          }
          const push = (minNeighborDistance - distance) / 2;
          const pushX = (deltaX / distance) * push;
          const pushY = (deltaY / distance) * push;
          a.dx -= pushX;
          a.dy -= pushY;
          b.dx += pushX;
          b.dy += pushY;
        }
      }

      neighbors.forEach((point, index) => {
        const x = clamp(point.x + point.dx, minimumClosedX, maximumClosedX);
        const y = clamp(point.y + point.dy, minimumClosedY, maximumClosedY);
        point.dx = x - point.x;
        point.dy = y - point.y;
        keepOutsideOpenBubble(point, index);
      });
    }

    const neighborsOverlap = () =>
      neighbors.some((point, first) =>
        neighbors
          .slice(first + 1)
          .some(
            other =>
              Math.hypot(
                point.x + point.dx - (other.x + other.dx),
                point.y + point.dy - (other.y + other.dy)
              ) <
              minNeighborDistance - 0.01
          )
      );

    if (neighborsOverlap()) {
      const searchStep = Math.max(12, minNeighborDistance / 8);
      const buildAxis = (minimum, maximum) => {
        const values = [];
        const steps = Math.floor((maximum - minimum) / searchStep);
        for (let index = 0; index <= steps; index += 1) {
          values.push(minimum + index * searchStep);
        }
        if (maximum - values.at(-1) > 0.01) values.push(maximum);
        return values;
      };
      const candidatePool = [];
      const candidateXs = buildAxis(minimumClosedX, maximumClosedX);
      const candidateYs = buildAxis(minimumClosedY, maximumClosedY);

      candidateXs.forEach(x => {
        candidateYs.forEach(y => candidatePool.push({ x, y }));
      });
      for (let degrees = 0; degrees < 360; degrees += 5) {
        const angle = (degrees / 180) * Math.PI;
        candidatePool.push({
          x: openX + Math.cos(angle) * minOpenDistance,
          y: openY + Math.sin(angle) * minOpenDistance,
        });
      }

      const candidateLists = new Map(
        neighbors.map(point => {
          const currentX = point.x + point.dx;
          const currentY = point.y + point.dy;
          const candidates = [{ x: currentX, y: currentY }, ...candidatePool]
            .filter(
              candidate =>
                candidate.x >= minimumClosedX - 0.01 &&
                candidate.x <= maximumClosedX + 0.01 &&
                candidate.y >= minimumClosedY - 0.01 &&
                candidate.y <= maximumClosedY + 0.01 &&
                Math.hypot(candidate.x - openX, candidate.y - openY) >=
                  minOpenDistance - 0.01
            )
            .map(candidate => ({
              ...candidate,
              score:
                (candidate.x - currentX) ** 2 + (candidate.y - currentY) ** 2,
            }))
            .sort((left, right) => left.score - right.score);
          return [point, candidates];
        })
      );

      let bestPlacement = null;
      const searchPlacements = (remaining, placed, positions, score) => {
        if (bestPlacement && score >= bestPlacement.score) return;
        if (!remaining.length) {
          bestPlacement = { score, positions: new Map(positions) };
          return;
        }

        remaining.forEach((point, pointIndex) => {
          let alternatives = 0;
          for (const candidate of candidateLists.get(point)) {
            if (
              placed.some(
                other =>
                  Math.hypot(candidate.x - other.x, candidate.y - other.y) <
                  minNeighborDistance - 0.01
              )
            ) {
              continue;
            }

            positions.set(point, candidate);
            searchPlacements(
              remaining.filter((_, index) => index !== pointIndex),
              [...placed, candidate],
              positions,
              score + candidate.score
            );
            positions.delete(point);

            alternatives += 1;
            if (alternatives >= 4) break;
          }
        });
      };

      searchPlacements(neighbors, [], new Map(), 0);
      bestPlacement?.positions.forEach((position, point) => {
        point.dx = position.x - point.x;
        point.dy = position.y - point.y;
      });
    }

    homes.forEach(point => {
      controller.setStyle(
        point.record.item,
        "--hp-charter-translate-x",
        `${point.dx / scaleX}px`
      );
      controller.setStyle(
        point.record.item,
        "--hp-charter-translate-y",
        `${point.dy / scaleY}px`
      );
      if (point !== selected) {
        controller.setStyle(
          point.record.item,
          "transition",
          "transform 660ms cubic-bezier(0.34, 1.3, 0.64, 1)"
        );
      }
    });
  };

  const fallbackFocusables = record =>
    Array.from(record.panel.querySelectorAll(FOCUSABLE_SELECTOR)).filter(
      element => belongsToRoot(element, root)
    );

  const syncRecord = (record, isOpen) => {
    controller.setClass(record.item, "is-open", isOpen);
    controller.setAttribute(
      record.item,
      "data-charter-bubble-state",
      isOpen ? "open" : "closed"
    );
    controller.setAttribute(
      record.front,
      "aria-expanded",
      isOpen ? "true" : "false"
    );

    if (isOpen) {
      controller.setAttribute(record.front, "aria-hidden", "true");
      controller.setAttribute(record.front, "tabindex", "-1");
    } else {
      if (!controller.releaseAttribute(record.front, "aria-hidden")) {
        controller.setAttribute(record.front, "aria-hidden", null);
      }
      if (!controller.releaseAttribute(record.front, "tabindex")) {
        controller.setAttribute(record.front, "tabindex", null);
      }
    }

    controller.setAttribute(
      record.panel,
      "aria-hidden",
      isOpen ? "false" : "true"
    );
    controller.setAttribute(record.panel, "inert", isOpen ? null : "");

    if (!supportsInert) {
      fallbackFocusables(record).forEach(element => {
        if (isOpen) controller.releaseAttribute(element, "tabindex");
        else controller.setAttribute(element, "tabindex", "-1");
      });
    }
  };

  const syncRoot = () => {
    const active = openId == null ? null : byId.get(openId);
    controller.setAttribute(root, "data-open-id", active?.id ?? null);

    if (cluster) {
      controller.setClass(cluster, "has-open-bubble", Boolean(active));
      controller.setAttribute(
        cluster,
        "data-open-slot",
        active ? active.index + 1 : null
      );
    }
  };

  const transitionTo = (
    nextId,
    { focusClose = false, returnFocus = false, allowCarouselEmpty = false } = {}
  ) => {
    if (nextId != null && !byId.has(nextId)) return false;
    if (
      nextId == null &&
      controller.layout?.getMode?.() === "carousel" &&
      !allowCarouselEmpty
    ) {
      return false;
    }

    const previous = openId == null ? null : byId.get(openId);
    const shouldReturnFocus = Boolean(
      returnFocus &&
      previous &&
      ownerDocument?.activeElement &&
      previous.item.contains(ownerDocument.activeElement)
    );

    openId = nextId;
    records.forEach(record => syncRecord(record, record.id === openId));
    syncRoot();
    applyDesktopGeometry();

    const active = openId == null ? null : byId.get(openId);
    if (focusClose && active) focusSafely(active.close);
    else if (shouldReturnFocus && previous) focusSafely(previous.front);

    return true;
  };

  const initialOpen = records.find(
    record =>
      record.item.classList.contains("is-open") ||
      record.item.getAttribute("data-charter-bubble-state") === "open" ||
      record.front.getAttribute("aria-expanded") === "true"
  );
  transitionTo(initialOpen?.id ?? null);

  const onRootClick = event => {
    const target = closestElement(event.target);
    if (!target || !belongsToRoot(target, root)) return;

    const close = target.closest(CLOSE_SELECTOR);
    const closeRecord = byClose.get(close);
    if (closeRecord && closeRecord.id === openId) {
      if (controller.layout?.getMode?.() === "carousel") return;
      transitionTo(null, { returnFocus: true });
      return;
    }

    const front = target.closest(OPEN_SELECTOR);
    const frontRecord = byFront.get(front);
    if (frontRecord) {
      if (controller.layout?.getMode?.() === "carousel") {
        controller.carousel?.selectItem?.(frontRecord.item, {
          focusPanel: true,
        });
        return;
      }
      transitionTo(frontRecord.id, { focusClose: true });
      return;
    }

    const panel = target.closest(PANEL_SELECTOR);
    if (
      panel &&
      openId != null &&
      controller.layout?.getMode?.() !== "carousel" &&
      !target.closest("a") &&
      !target.closest(CLOSE_SELECTOR)
    ) {
      transitionTo(null, { returnFocus: true });
    }
  };

  const onRootKeyDown = event => {
    const target = closestElement(event.target);
    if (
      event.key !== "Escape" ||
      openId == null ||
      controller.layout?.getMode?.() === "carousel" ||
      !target ||
      !belongsToRoot(target, root)
    ) {
      return;
    }

    event.stopPropagation();
    transitionTo(null, { returnFocus: true });
  };

  const onDocumentOutside = event => {
    const target = closestElement(event.target);
    if (
      openId == null ||
      controller.layout?.getMode?.() === "carousel" ||
      !target ||
      root.contains(target)
    ) {
      return;
    }
    transitionTo(null, { returnFocus: true });
  };

  controller.listen(root, "click", onRootClick);
  controller.listen(root, "keydown", onRootKeyDown);
  controller.listen(ownerDocument, "pointerdown", onDocumentOutside);
  controller.listen(ownerDocument, "click", onDocumentOutside);
  controller.listen(view, "resize", applyDesktopGeometry, { passive: true });

  controller.bubbles = {
    getOpenId: () => openId,
    getFirstId: () => records[0]?.id ?? null,
    getOpenItem: () =>
      openId == null ? null : (byId.get(openId)?.item ?? null),
    setOpenId: (nextId, options) => transitionTo(nextId, options),
    reflow: applyDesktopGeometry,
  };
  controller.addCleanup(() => {
    controller.bubbles = null;
  });
};

const bindResponsiveVisibility = controller => {
  const { root } = controller;
  const ownerDocument = root.ownerDocument;
  const view = ownerDocument?.defaultView;
  const subscribers = new Set();
  let mode = null;

  const scrollOpenItemIntoView = () => {
    const item = controller.bubbles?.getOpenItem();
    if (!item || typeof item.scrollIntoView !== "function") return;

    try {
      item.scrollIntoView({
        behavior: "auto",
        block: "nearest",
        inline: "center",
      });
    } catch {
      // Layout still switches when an older browser rejects scroll options.
    }
  };

  const setMode = nextMode => {
    if (nextMode !== "carousel" && nextMode !== "cluster") return;

    const previousMode = mode;
    mode = nextMode;
    controller.setAttribute(root, "data-layout", mode);
    controller.setClass(root, "is-carousel", mode === "carousel");
    controller.setClass(root, "is-cluster", mode === "cluster");

    if (mode === "carousel" && previousMode !== "carousel") {
      if (controller.bubbles?.getOpenId?.() == null) {
        controller.bubbles?.setOpenId?.(controller.bubbles.getFirstId());
      }
      scrollOpenItemIntoView();
    }

    if (previousMode !== mode) {
      subscribers.forEach(subscriber => {
        try {
          subscriber(mode, previousMode);
        } catch {
          // A consumer callback must not break the component mode authority.
        }
      });
      controller.bubbles?.reflow?.();
    }
  };

  let mediaQuery = null;
  let syncMode = null;
  if (typeof view?.matchMedia === "function") {
    try {
      mediaQuery = view.matchMedia(CAROUSEL_MEDIA_QUERY);
    } catch {
      mediaQuery = null;
    }
  }

  if (mediaQuery) {
    syncMode = () => setMode(mediaQuery.matches ? "carousel" : "cluster");
    syncMode();

    if (typeof mediaQuery.addEventListener === "function") {
      controller.listen(mediaQuery, "change", syncMode);
    } else if (typeof mediaQuery.addListener === "function") {
      mediaQuery.addListener(syncMode);
      controller.addCleanup(() => mediaQuery.removeListener?.(syncMode));
    }
  } else {
    syncMode = () =>
      setMode((view?.innerWidth ?? 769) <= 768 ? "carousel" : "cluster");
    syncMode();
  }

  const syncRootState = () => {
    if (!controller.active) return;
    controller.setClass(root, "is-enhanced", true);
    controller.setAttribute(root, "data-enhanced", "true");
    syncMode?.();
  };
  controller.listen(view, "resize", syncRootState, { passive: true });

  const IntersectionObserverConstructor = view?.IntersectionObserver;
  if (typeof IntersectionObserverConstructor === "function") {
    try {
      const observer = new IntersectionObserverConstructor(
        entries => {
          if (
            !controller.active ||
            ownerDocument.visibilityState !== "visible"
          ) {
            return;
          }

          const openItem = controller.bubbles?.getOpenItem();
          if (
            controller.layout?.getMode?.() !== "carousel" &&
            openItem &&
            entries.some(
              entry =>
                entry.target === openItem && entry.intersectionRatio === 0
            )
          ) {
            controller.bubbles.setOpenId(null, { returnFocus: false });
          }
        },
        { threshold: [0] }
      );

      root.querySelectorAll(ITEM_SELECTOR).forEach(item => {
        if (!belongsToRoot(item, root)) return;
        try {
          observer.observe(item);
        } catch {
          // A malformed item must not disable observation for valid siblings.
        }
      });
      controller.trackObserver(observer);
    } catch {
      // Explicit close paths remain available without IntersectionObserver.
    }
  }

  controller.layout = {
    getMode: () => mode,
    sync: syncRootState,
    subscribe: subscriber => {
      if (typeof subscriber !== "function") return ignore;
      subscribers.add(subscriber);
      return () => subscribers.delete(subscriber);
    },
  };
  controller.addCleanup(() => {
    subscribers.clear();
    controller.layout = null;
  });

  const MutationObserverConstructor = view?.MutationObserver;
  if (typeof MutationObserverConstructor === "function") {
    try {
      const observer = new MutationObserverConstructor(records => {
        if (
          records.some(record =>
            ["class", "data-enhanced", "data-layout"].includes(
              record.attributeName
            )
          )
        ) {
          syncRootState();
        }
      });
      observer.observe(root, {
        attributes: true,
        attributeFilter: ["class", "data-enhanced", "data-layout"],
      });
      controller.trackObserver(observer);
    } catch {
      // Resize and React commit synchronization remain available.
    }
  }
};

const bindCarouselGeometry = controller => {
  const { root } = controller;
  const ownerDocument = root.ownerDocument;
  const view = ownerDocument?.defaultView;
  const viewport = controller.query(VIEWPORT_SELECTOR);
  const track = controller.query(TRACK_SELECTOR);
  const list = controller.query(LIST_SELECTOR);
  const previous = controller.query(PREVIOUS_SELECTOR);
  const next = controller.query(NEXT_SELECTOR);
  if (!viewport || !track || !list || !previous || !next) return;

  let pendingScroll = false;
  let pendingFocusItem = null;
  let recentring = false;
  let gestureActive = false;
  let gestureMoved = false;
  let deferredSelection = false;
  let selectionOriginId = null;
  let preferredSelectionItem = null;
  let pendingSelectionItem = null;
  let scrollIdleTimer = null;
  let wheelSessionTimer = null;
  let wheelSessionActive = false;
  let syncFrame = null;
  let state = {
    atStart: true,
    atEnd: false,
    hasOverflow: true,
  };

  const setDisabled = (button, disabled) => {
    controller.setClass(button, "is-disabled", disabled);
    controller.setAttribute(button, "disabled", disabled ? "" : null);
    controller.setAttribute(
      button,
      "aria-disabled",
      disabled ? "true" : "false"
    );
  };

  const getItems = () =>
    Array.from(track.querySelectorAll(ITEM_SELECTOR)).filter(item =>
      belongsToRoot(item, root)
    );

  const getItemIndex = (items, id) =>
    items.findIndex(item => item.getAttribute("data-charter-bubble-id") === id);

  const getAdjacentItem = (id, direction) => {
    const items = getItems();
    const index = getItemIndex(items, id);
    if (index < 0) return null;
    return items[index + (direction < 0 ? -1 : 1)] ?? null;
  };

  const constrainToNeighbor = item => {
    if (!item || selectionOriginId == null) return item;
    const items = getItems();
    const originIndex = getItemIndex(items, selectionOriginId);
    const targetIndex = items.indexOf(item);
    if (originIndex < 0 || targetIndex < 0) return item;
    const distance = targetIndex - originIndex;
    if (Math.abs(distance) <= 1) return item;
    return items[originIndex + Math.sign(distance)] ?? item;
  };

  const getNearestItem = () => {
    const items = getItems();
    if (!items.length) return null;

    const viewportRect = viewport.getBoundingClientRect?.();
    const hasViewportRect =
      Number.isFinite(viewportRect?.width) && viewportRect.width > 0;
    const viewportCenter = hasViewportRect
      ? viewportRect.left + viewportRect.width / 2
      : viewport.scrollLeft + viewport.clientWidth / 2;
    const distanceFromCenter = item => {
      const itemRect = item.getBoundingClientRect?.();
      if (
        hasViewportRect &&
        Number.isFinite(itemRect?.width) &&
        itemRect.width > 0
      ) {
        return Math.abs(itemRect.left + itemRect.width / 2 - viewportCenter);
      }
      return Math.abs(item.offsetLeft + item.offsetWidth / 2 - viewportCenter);
    };

    return items.reduce((closest, item) => {
      const closestDistance = distanceFromCenter(closest);
      const itemDistance = distanceFromCenter(item);
      return itemDistance < closestDistance ? item : closest;
    }, items[0]);
  };

  const reducedMotion = () => {
    if (typeof view?.matchMedia !== "function") return false;
    try {
      return view.matchMedia(REDUCED_MOTION_MEDIA_QUERY).matches;
    } catch {
      return false;
    }
  };

  const cssLengthToPixels = value => {
    const numeric = Number.parseFloat(value);
    if (!Number.isFinite(numeric)) return 0;
    if (value.trim().endsWith("rem")) {
      const rootFontSize = Number.parseFloat(
        view?.getComputedStyle?.(ownerDocument.documentElement)?.fontSize
      );
      return numeric * (Number.isFinite(rootFontSize) ? rootFontSize : 16);
    }
    return numeric;
  };

  const getExpandedTargetLeft = item => {
    const items = getItems();
    const index = items.indexOf(item);
    if (index < 0 || typeof view?.getComputedStyle !== "function") return null;

    const rootStyle = view.getComputedStyle(root);
    const listStyle = view.getComputedStyle(list);
    const closedSize = cssLengthToPixels(
      rootStyle.getPropertyValue("--hp-charter-mobile-cell")
    );
    const configuredOpenSize = cssLengthToPixels(
      rootStyle.getPropertyValue("--hp-charter-mobile-open")
    );
    const openSize = Math.min(
      configuredOpenSize,
      Math.max(0, viewport.clientWidth - 64)
    );
    const gap = Number.parseFloat(listStyle.columnGap || listStyle.gap) || 0;
    const paddingStart = Number.parseFloat(listStyle.paddingInlineStart) || 0;
    if (!closedSize || !openSize) return null;

    const targetCenter =
      paddingStart + index * (closedSize + gap) + openSize / 2;
    const finalTrackWidth =
      paddingStart * 2 +
      openSize +
      Math.max(0, items.length - 1) * closedSize +
      Math.max(0, items.length - 1) * gap;
    const maxScroll = Math.max(0, finalTrackWidth - viewport.clientWidth);
    return Math.min(
      maxScroll,
      Math.max(0, targetCenter - viewport.clientWidth / 2)
    );
  };

  const scrollToItem = (
    item,
    behavior = "auto",
    { expandedTarget = false } = {}
  ) => {
    if (!item) return false;
    const viewportRect = viewport.getBoundingClientRect?.();
    const itemRect = item.getBoundingClientRect?.();
    const hasRects =
      Number.isFinite(viewportRect?.width) &&
      viewportRect.width > 0 &&
      Number.isFinite(itemRect?.width) &&
      itemRect.width > 0;
    const expandedLeft = expandedTarget ? getExpandedTargetLeft(item) : null;
    const left =
      expandedLeft ??
      (hasRects
        ? viewport.scrollLeft +
          itemRect.left +
          itemRect.width / 2 -
          (viewportRect.left + viewportRect.width / 2)
        : item.offsetLeft - (viewport.clientWidth - item.offsetWidth) / 2);

    try {
      if (typeof viewport.scrollTo === "function") {
        viewport.scrollTo({ left, behavior });
      } else {
        viewport.scrollLeft = left;
      }
    } catch {
      viewport.scrollLeft = left;
    }
    return true;
  };

  const getActiveCarouselItem = () =>
    pendingSelectionItem ??
    preferredSelectionItem ??
    controller.bubbles?.getOpenItem?.() ??
    null;

  const centerActiveBubble = (
    behavior = "auto",
    { useFinalLayout = false } = {}
  ) => {
    const item = getActiveCarouselItem();
    if (!item) return false;
    return scrollToItem(item, behavior, {
      expandedTarget: useFinalLayout && !item.classList.contains("is-open"),
    });
  };

  const sync = () => {
    if (!controller.active) return state;

    const maxScroll = Math.max(0, viewport.scrollWidth - viewport.clientWidth);
    const scrollLeft = Math.max(0, viewport.scrollLeft);
    const hasOverflow = maxScroll > 1;
    const atStart = !hasOverflow || scrollLeft <= 1;
    const atEnd = !hasOverflow || maxScroll - scrollLeft <= 1;

    state = { atStart, atEnd, hasOverflow };
    setDisabled(previous, atStart);
    setDisabled(next, atEnd);
    controller.setClass(root, "hp-charter-bubbles--no-overflow", !hasOverflow);
    controller.setAttribute(
      root,
      "data-carousel-position",
      !hasOverflow ? "none" : atStart ? "start" : atEnd ? "end" : "middle"
    );
    return state;
  };

  const queueSync = () => {
    if (syncFrame != null || !controller.active) return;

    if (typeof view?.requestAnimationFrame === "function") {
      syncFrame = view.requestAnimationFrame(() => {
        syncFrame = null;
        sync();
      });
    } else {
      sync();
    }
  };

  const clearIdleTimer = () => {
    if (scrollIdleTimer == null) return;
    if (view) view.clearTimeout(scrollIdleTimer);
    else clearTimeout(scrollIdleTimer);
    scrollIdleTimer = null;
  };

  const clearWheelSessionTimer = () => {
    if (wheelSessionTimer == null) return;
    if (view) view.clearTimeout(wheelSessionTimer);
    else clearTimeout(wheelSessionTimer);
    wheelSessionTimer = null;
  };

  const scheduleWheelSessionEnd = () => {
    clearWheelSessionTimer();
    wheelSessionTimer = view
      ? view.setTimeout(() => {
          wheelSessionTimer = null;
          wheelSessionActive = false;
        }, WHEEL_SESSION_IDLE_MS)
      : setTimeout(() => {
          wheelSessionTimer = null;
          wheelSessionActive = false;
        }, WHEEL_SESSION_IDLE_MS);
  };

  const alignSelectedItem = () => {
    const align = () => {
      if (!controller.active || controller.layout?.getMode?.() !== "carousel") {
        return;
      }
      recentring = true;
      pendingScroll = true;
      centerActiveBubble("auto");
      sync();
      schedulePendingFallback();
    };

    if (typeof view?.requestAnimationFrame === "function") {
      view.requestAnimationFrame(align);
    } else {
      align();
    }
  };

  const targetEdgeHasReachedCenter = item => {
    const front = item?.querySelector(OPEN_SELECTOR);
    const viewportRect = viewport.getBoundingClientRect?.();
    const frontRect = front?.getBoundingClientRect?.();
    if (
      !frontRect ||
      !viewportRect ||
      !Number.isFinite(frontRect.width) ||
      frontRect.width <= 0 ||
      !Number.isFinite(viewportRect.width) ||
      viewportRect.width <= 0
    ) {
      return false;
    }

    const viewportCenter = viewportRect.left + viewportRect.width / 2;
    const targetCenter = frontRect.left + frontRect.width / 2;
    return Math.abs(targetCenter - viewportCenter) <= frontRect.width / 2;
  };

  const startCorrection = item => {
    if (!item) return false;
    pendingSelectionItem = item;
    preferredSelectionItem = null;
    deferredSelection = false;
    pendingScroll = true;
    controller.setClass(root, "is-correcting", true);
    centerActiveBubble(reducedMotion() ? "auto" : "smooth", {
      useFinalLayout: true,
    });
    schedulePendingFallback();
    queueSync();
    return true;
  };

  const activatePendingSelection = () => {
    const item = pendingSelectionItem;
    if (!item || !targetEdgeHasReachedCenter(item)) return false;

    pendingSelectionItem = null;
    const id = item.getAttribute("data-charter-bubble-id");
    if (id) controller.bubbles?.setOpenId?.(id);
    recentring = true;
    if (pendingFocusItem === item) {
      pendingFocusItem = null;
      focusSafely(item.querySelector(".hp-charter-bubble__link"));
    }
    sync();
    return true;
  };

  const selectItem = (item, { focusPanel = false } = {}) => {
    if (
      !item ||
      !belongsToRoot(item, root) ||
      controller.layout?.getMode?.() !== "carousel"
    ) {
      return false;
    }

    if (focusPanel) pendingFocusItem = item;
    deferredSelection = false;
    selectionOriginId = null;
    preferredSelectionItem = null;
    return startCorrection(item);
  };

  const commitNearestSelection = () => {
    if (controller.layout?.getMode?.() !== "carousel") return;
    const item = getNearestItem();
    const id = item?.getAttribute("data-charter-bubble-id");
    if (!item || !id) return;

    const changed = controller.bubbles?.getOpenId?.() !== id;
    if (changed) controller.bubbles?.setOpenId?.(id);
    alignSelectedItem();

    if (pendingFocusItem === item) {
      pendingFocusItem = null;
      focusSafely(item.querySelector(".hp-charter-bubble__link"));
    }
  };

  const finishPending = () => {
    clearIdleTimer();
    if (gestureActive) {
      pendingScroll = true;
      return;
    }
    if (deferredSelection) {
      deferredSelection = false;
      const item = constrainToNeighbor(
        preferredSelectionItem ?? getNearestItem()
      );
      selectionOriginId = null;
      preferredSelectionItem = null;
      const id = item?.getAttribute("data-charter-bubble-id");
      if (!item || !id || controller.bubbles?.getOpenId?.() === id) {
        pendingScroll = false;
        sync();
        return;
      }

      const shift = () => {
        if (
          !controller.active ||
          controller.layout?.getMode?.() !== "carousel"
        ) {
          return;
        }
        startCorrection(item);
      };
      if (typeof view?.requestAnimationFrame === "function") {
        view.requestAnimationFrame(shift);
      } else {
        shift();
      }
      return;
    }
    if (pendingSelectionItem) {
      if (!activatePendingSelection()) {
        centerActiveBubble(reducedMotion() ? "auto" : "smooth", {
          useFinalLayout: true,
        });
        schedulePendingFallback();
      }
      return;
    }
    pendingScroll = false;
    if (recentring) {
      recentring = false;
      controller.setClass(root, "is-correcting", false);
      centerActiveBubble("auto");
      sync();
      return;
    }
    commitNearestSelection();
    sync();
  };

  const schedulePendingFallback = () => {
    clearIdleTimer();
    scrollIdleTimer = view
      ? view.setTimeout(finishPending, SCROLL_IDLE_MS)
      : setTimeout(finishPending, SCROLL_IDLE_MS);
  };

  const move = direction => {
    if (pendingScroll) return false;
    const current = sync();
    if (
      !current.hasOverflow ||
      (direction < 0 && current.atStart) ||
      (direction > 0 && current.atEnd)
    ) {
      return false;
    }

    const items = getItems();
    const openId = controller.bubbles?.getOpenId?.();
    const currentIndex = Math.max(
      0,
      items.findIndex(
        item => item.getAttribute("data-charter-bubble-id") === openId
      )
    );
    const target = items[currentIndex + (direction < 0 ? -1 : 1)];
    if (!target) return false;

    return startCorrection(target);
  };

  const beginGesture = () => {
    if (controller.layout?.getMode?.() !== "carousel") return;
    recentring = false;
    selectionOriginId = controller.bubbles?.getOpenId?.() ?? null;
    preferredSelectionItem = null;
    gestureActive = true;
    gestureMoved = false;
    clearIdleTimer();
  };

  const endGesture = () => {
    if (!gestureActive) return;
    gestureActive = false;
    if (!gestureMoved) return;

    gestureMoved = false;
    deferredSelection = true;
    pendingScroll = true;
    queueSync();
    schedulePendingFallback();
  };

  const onPointerDown = event => {
    if (event.pointerType === "touch") return;
    beginGesture();
  };

  const onPointerEnd = event => {
    if (event.pointerType === "touch") return;
    endGesture();
  };

  const onScroll = () => {
    if (controller.layout?.getMode?.() !== "carousel") return;
    if (gestureActive) {
      gestureMoved = true;
      pendingScroll = true;
      clearIdleTimer();
      queueSync();
      return;
    }
    if (pendingSelectionItem) {
      activatePendingSelection();
      queueSync();
      schedulePendingFallback();
      return;
    }
    if (recentring) {
      queueSync();
      schedulePendingFallback();
      return;
    }
    if (controller.bubbles?.getOpenId?.() != null) {
      if (!deferredSelection) {
        selectionOriginId = controller.bubbles.getOpenId();
      }
      deferredSelection = true;
    }
    pendingScroll = true;
    queueSync();
    schedulePendingFallback();
  };

  const onWheel = event => {
    if (controller.layout?.getMode?.() !== "carousel") return;
    const delta =
      Math.abs(event.deltaX) > Math.abs(event.deltaY)
        ? event.deltaX
        : event.deltaY;
    if (!delta) return;

    const maxScroll = Math.max(0, viewport.scrollWidth - viewport.clientWidth);
    const canMove =
      (delta < 0 && viewport.scrollLeft > 1) ||
      (delta > 0 && viewport.scrollLeft < maxScroll - 1);
    if (!canMove) return;

    event.preventDefault();
    if (wheelSessionActive) {
      scheduleWheelSessionEnd();
      return;
    }
    if (deferredSelection || pendingSelectionItem || gestureActive) return;
    const openId = controller.bubbles?.getOpenId?.();
    const target = getAdjacentItem(openId, delta);
    if (!openId || !target) return;

    selectionOriginId = openId;
    wheelSessionActive = true;
    scheduleWheelSessionEnd();
    startCorrection(target);
  };

  const onItemSizeTransitionEnd = event => {
    if (
      controller.layout?.getMode?.() !== "carousel" ||
      root.classList.contains("is-correcting") ||
      !["flex-basis", "width", "min-width"].includes(event.propertyName) ||
      !closestElement(event.target)?.closest(ITEM_SELECTOR)
    ) {
      return;
    }

    if (controller.bubbles?.getOpenItem?.()) alignSelectedItem();
  };

  controller.listen(previous, "click", () => move(-1));
  controller.listen(next, "click", () => move(1));
  controller.listen(viewport, "pointerdown", onPointerDown, { passive: true });
  controller.listen(viewport, "touchstart", beginGesture, { passive: true });
  controller.listen(view, "pointerup", onPointerEnd, { passive: true });
  controller.listen(view, "pointercancel", onPointerEnd, { passive: true });
  controller.listen(view, "touchend", endGesture, { passive: true });
  controller.listen(view, "touchcancel", endGesture, { passive: true });
  controller.listen(viewport, "scroll", onScroll, { passive: true });
  controller.listen(viewport, "wheel", onWheel, { passive: false });
  controller.listen(viewport, "scrollend", finishPending);
  controller.listen(track, "transitionend", onItemSizeTransitionEnd);
  controller.listen(view, "resize", queueSync, { passive: true });

  const unsubscribeLayout = controller.layout?.subscribe(() => sync());
  controller.addCleanup(unsubscribeLayout);

  const ResizeObserverConstructor = view?.ResizeObserver;
  if (typeof ResizeObserverConstructor === "function") {
    try {
      const observer = new ResizeObserverConstructor(() => {
        queueSync();
        if (
          gestureActive ||
          root.classList.contains("is-correcting") ||
          controller.layout?.getMode?.() !== "carousel" ||
          !getActiveCarouselItem()
        ) {
          return;
        }
        recentring = true;
        pendingScroll = true;
        centerActiveBubble("auto", { useFinalLayout: true });
        schedulePendingFallback();
      });
      observer.observe(viewport);
      observer.observe(track);
      controller.trackObserver(observer);
    } catch {
      // Window resize and scroll listeners continue to synchronize state.
    }
  }

  const fontsReady = ownerDocument?.fonts?.ready;
  if (fontsReady && typeof fontsReady.then === "function") {
    Promise.resolve(fontsReady).then(queueSync).catch(ignore);
  }

  controller.addCleanup(() => {
    clearIdleTimer();
    clearWheelSessionTimer();
    pendingFocusItem = null;
    recentring = false;
    gestureActive = false;
    gestureMoved = false;
    deferredSelection = false;
    selectionOriginId = null;
    preferredSelectionItem = null;
    pendingSelectionItem = null;
    wheelSessionActive = false;
    controller.setClass(root, "is-correcting", false);
    if (syncFrame != null && typeof view?.cancelAnimationFrame === "function") {
      view.cancelAnimationFrame(syncFrame);
    }
    syncFrame = null;
    controller.carousel = null;
  });

  controller.carousel = {
    sync,
    move,
    selectItem,
    getState: () => ({ ...state, pendingScroll }),
  };
  sync();
};

/**
 * Returns the live controller for a component root, if initialized.
 * This is an internal integration seam and is not part of the package export.
 *
 * @param {HTMLElement} root
 */
export const getCharterBubblesController = root => controllers.get(root);

/**
 * Initializes every Charter Bubbles root in `scope` without replacing markup.
 * Repeated initialization of one root returns the same teardown function.
 *
 * @param {Document|DocumentFragment|HTMLElement|null} [scope]
 * @returns {() => void}
 */
export const initCharterBubbles = (
  scope = typeof document === "undefined" ? null : document
) => {
  const roots = findCharterBubbles(scope);
  if (!roots.length) return ignore;

  const initialized = roots.flatMap(root => {
    let controller = controllers.get(root);
    if (!controller) {
      if (!hasCompleteCharterBubblesContract(root)) return [];
      controller = createController(root);
      bindBubbleTransitions(controller);
      bindResponsiveVisibility(controller);
      bindCarouselGeometry(controller);
      controller.setClass(root, "is-enhanced", true);
      controller.setAttribute(root, "data-enhanced", "true");
      controllers.set(root, controller);
    } else {
      controller.setClass(root, "is-enhanced", true);
      controller.setAttribute(root, "data-enhanced", "true");
      controller.layout?.sync?.();
    }
    return [controller];
  });

  if (!initialized.length) return ignore;

  if (initialized.length === 1) return initialized[0].teardown;

  let active = true;
  return () => {
    if (!active) return;
    active = false;
    initialized.forEach(controller => controller.teardown());
  };
};
