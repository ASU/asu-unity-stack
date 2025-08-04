import * as k from "chart.js";
const at = () => window.jQuery && !document.body.hasAttribute("data-bs-no-jquery") ? window.jQuery : null, st = /[^.]*(?=\..*)\.|.*/, rt = /\..*/, it = /::\d+$/, D = {};
let P = 1;
const R = {
  mouseenter: "mouseover",
  mouseleave: "mouseout"
}, ct = /* @__PURE__ */ new Set([
  "click",
  "dblclick",
  "mouseup",
  "mousedown",
  "contextmenu",
  "mousewheel",
  "DOMMouseScroll",
  "mouseover",
  "mouseout",
  "mousemove",
  "selectstart",
  "selectend",
  "keydown",
  "keypress",
  "keyup",
  "orientationchange",
  "touchstart",
  "touchmove",
  "touchend",
  "touchcancel",
  "pointerdown",
  "pointermove",
  "pointerup",
  "pointerleave",
  "pointercancel",
  "gesturestart",
  "gesturechange",
  "gestureend",
  "focus",
  "blur",
  "change",
  "reset",
  "select",
  "submit",
  "focusin",
  "focusout",
  "load",
  "unload",
  "beforeunload",
  "resize",
  "move",
  "DOMContentLoaded",
  "readystatechange",
  "error",
  "abort",
  "scroll"
]);
function V(o, e) {
  return e && `${e}::${P++}` || o.uidEvent || P++;
}
function Y(o) {
  const e = V(o);
  return o.uidEvent = e, D[e] = D[e] || {}, D[e];
}
function lt(o, e) {
  return function a(s) {
    return N(s, { delegateTarget: o }), a.oneOff && w.off(o, s.type, e), e.apply(o, [s]);
  };
}
function dt(o, e, a) {
  return function s(r) {
    const n = o.querySelectorAll(e);
    for (let { target: t } = r; t && t !== this; t = t.parentNode)
      for (const i of n)
        if (i === t)
          return N(r, { delegateTarget: t }), s.oneOff && w.off(o, r.type, e, a), a.apply(t, [r]);
  };
}
function W(o, e, a = null) {
  return Object.values(o).find((s) => s.callable === e && s.delegationSelector === a);
}
function F(o, e, a) {
  const s = typeof e == "string", r = s ? a : e || a;
  let n = z(o);
  return ct.has(n) || (n = o), [s, r, n];
}
function q(o, e, a, s, r) {
  if (typeof e != "string" || !o)
    return;
  let [n, t, i] = F(e, a, s);
  e in R && (t = ((y) => function(p) {
    if (!p.relatedTarget || p.relatedTarget !== p.delegateTarget && !p.delegateTarget.contains(p.relatedTarget))
      return y.call(this, p);
  })(t));
  const c = Y(o), l = c[i] || (c[i] = {}), d = W(l, t, n ? a : null);
  if (d) {
    d.oneOff = d.oneOff && r;
    return;
  }
  const u = V(t, e.replace(st, "")), f = n ? dt(o, a, t) : lt(o, t);
  f.delegationSelector = n ? a : null, f.callable = t, f.oneOff = r, f.uidEvent = u, l[u] = f, o.addEventListener(i, f, n);
}
function O(o, e, a, s, r) {
  const n = W(e[a], s, r);
  n && (o.removeEventListener(a, n, !!r), delete e[a][n.uidEvent]);
}
function ut(o, e, a, s) {
  const r = e[a] || {};
  for (const [n, t] of Object.entries(r))
    n.includes(s) && O(o, e, a, t.callable, t.delegationSelector);
}
function z(o) {
  return o = o.replace(rt, ""), R[o] || o;
}
const w = {
  on(o, e, a, s) {
    q(o, e, a, s, !1);
  },
  one(o, e, a, s) {
    q(o, e, a, s, !0);
  },
  off(o, e, a, s) {
    if (typeof e != "string" || !o)
      return;
    const [r, n, t] = F(e, a, s), i = t !== e, c = Y(o), l = c[t] || {}, d = e.startsWith(".");
    if (typeof n < "u") {
      if (!Object.keys(l).length)
        return;
      O(o, c, t, n, r ? a : null);
      return;
    }
    if (d)
      for (const u of Object.keys(c))
        ut(o, c, u, e.slice(1));
    for (const [u, f] of Object.entries(l)) {
      const g = u.replace(it, "");
      (!i || e.includes(g)) && O(o, c, t, f.callable, f.delegationSelector);
    }
  },
  trigger(o, e, a) {
    if (typeof e != "string" || !o)
      return null;
    const s = at(), r = z(e), n = e !== r;
    let t = null, i = !0, c = !0, l = !1;
    n && s && (t = s.Event(e, a), s(o).trigger(t), i = !t.isPropagationStopped(), c = !t.isImmediatePropagationStopped(), l = t.isDefaultPrevented());
    const d = N(new Event(e, { bubbles: i, cancelable: !0 }), a);
    return l && d.preventDefault(), c && o.dispatchEvent(d), d.defaultPrevented && t && t.preventDefault(), d;
  }
};
function N(o, e = {}) {
  for (const [a, s] of Object.entries(e))
    try {
      o[a] = s;
    } catch {
      Object.defineProperty(o, a, {
        configurable: !0,
        get() {
          return s;
        }
      });
    }
  return o;
}
function j() {
  const e = ["asu-header", "asuHeader"].find((b) => document.getElementById(b));
  if (e === void 0)
    return;
  const a = document.getElementById(e), s = document.getElementById("uds-anchor-menu"), r = s.parentNode, n = s.nextSibling, t = s.getElementsByClassName("nav-link"), i = /* @__PURE__ */ new Map();
  let c = window.scrollY, l = !1;
  const d = document.body;
  let u = document.getElementById("toolbar-bar"), f = document.getElementById(
    "toolbar-item-administration-tray"
  ), g = u ? u.offsetHeight : 0, y = f ? f.offsetHeight : 0, p = g + y;
  const h = s.getBoundingClientRect().top + window.scrollY - p;
  for (let b of t) {
    const L = b.getAttribute("href").replace("#", ""), v = document.getElementById(L);
    i.set(b, v);
  }
  new bootstrap.ScrollSpy(d, {
    target: "#uds-anchor-menu nav",
    rootMargin: "20%"
  }), window.scrollY > h && (a.appendChild(s), l = !0, s.classList.add("uds-anchor-menu-attached")), window.addEventListener(
    "scroll",
    function() {
      const b = s.getBoundingClientRect().top, L = a.classList.contains("scrolled") ? a.offsetHeight - 32 : a.offsetHeight;
      window.scrollY > c && b > 0 && b < L && (l || (a.appendChild(s), l = !0, s.classList.add("uds-anchor-menu-attached")), c = window.scrollY), window.scrollY < c && window.scrollY <= h && l && (r.insertBefore(s, n), l = !1, s.classList.remove("uds-anchor-menu-attached")), c = window.scrollY;
    },
    { passive: !0 }
  );
  for (let [b, L] of i)
    b.addEventListener("click", function(v) {
      v.preventDefault();
      let C = L.getBoundingClientRect().top - s.offsetHeight;
      window.scrollY === 0 && (C += 65), s.classList.contains("uds-anchor-menu-sticky") || (window.scrollY > 0 && (C += 24), C -= a.offsetHeight), window.scrollBy({
        top: C,
        behavior: "smooth"
      });
      const x = s.querySelector(".nav-link.active");
      x && x.classList.remove("active"), v.target.classList.add("active");
    });
}
w.on(window, "load.uds.anchor-menu", j);
function G() {
  const o = document.querySelectorAll('mark[class^="pen-"]'), e = new IntersectionObserver(
    (a) => {
      a.forEach((s) => {
        s.isIntersecting ? s.target.classList.add("animate-bg-in-scroll") : s.target.classList.remove("animate-bg-in-scroll");
      });
    },
    {
      threshold: 0.1
    }
  );
  o.forEach((a) => {
    e.observe(a);
  });
}
w.on(
  window,
  "load.uds.blockquote-animation",
  G
);
function $() {
  const o = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ], e = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ], a = ["Su", "M", "Tu", "W", "Th", "F", "Sa"], r = {
    month: (/* @__PURE__ */ new Date()).getMonth(),
    year: (/* @__PURE__ */ new Date()).getFullYear()
  }, n = (c, l) => {
    const d = /* @__PURE__ */ new Date(), u = [], f = new Date(c, l).getDay(), g = new Date(c, l + 1, 0).getDate(), y = new Date(c, l, 0).getDate();
    for (let p = 1; p <= f; p++) {
      const h = y - f + p, m = new Date(
        r.year,
        r.month - 1,
        h
      ).toLocaleString();
      u.push({ key: m, date: h, monthClass: "prev" });
    }
    for (let p = 1; p <= g; p++) {
      const h = new Date(r.year, r.month, p).toLocaleString();
      p === d.getDate() && r.month === d.getMonth() && r.year === d.getFullYear() ? u.push({
        key: h,
        date: p,
        monthClass: "current",
        todayClass: "today"
      }) : u.push({ key: h, date: p, monthClass: "current" });
    }
    if (u.length < 42) {
      const p = 42 - u.length;
      for (let h = 1; h <= p; h++) {
        const m = new Date(r.year, r.month + 1, h).toLocaleString();
        u.push({ key: m, date: h, monthClass: "next" });
      }
    }
    return u;
  }, t = () => {
    const c = document.getElementById("calendar");
    c && (c.innerHTML = `
      <h2><span class="highlight-black">${o[r.month]} ${r.year}</span></h2>
      <div class="calendar-grid">
        <div class="heading desktop">
          ${e.map((l) => `<p>${l}</p>`).join("")}
        </div>
        <div class="heading mobile">
          ${a.map((l) => `<p>${l}</p>`).join("")}
        </div>
        <div class="body">
          ${n(r.year, r.month).map(
      (l) => `<h3 id="${l.key}" class="calendar-item ${l.monthClass}" ${l.todayClass ? `aria-label="${l.todayClass[0].toUpperCase()}${l.todayClass.slice(
        1
      )}"` : ""}>
                  <span class="${l.todayClass ? l.todayClass : ""}">${l.date}</span>
                </h3>`
    ).join("")}
        </div>
      </div>
      <div class="calendar-nav">
        <button
          id="prev-month"
          aria-label="Previous month"
          data-ga-event="select"
          data-ga-action="click"
          data-ga-name="onclick"
          data-ga-type="carousel"
          data-ga-region="main content"
          data-ga-section="calendar"
          data-ga="left chevron"
        >
          <span class="fas fa-angle-left"></span>
        </button>
        <button
          id="next-month"
          aria-label="Next month"
          data-ga-event="select"
          data-ga-action="click"
          data-ga-name="onclick"
          data-ga-type="carousel"
          data-ga-region="main content"
          data-ga-section="calendar"
          data-ga="right chevron"
        >
          <span class="fas fa-angle-right"></span>
        </button>
      </div>
  `);
  };
  ((c) => {
    var l = new Date(r.year, r.month + c);
    r.year = l.getFullYear(), r.month = l.getMonth(), t();
  })(0);
}
w.on(window, "load.uds.calendar", $);
function I() {
  const o = document.querySelectorAll(".card-body");
  if (o.length === 0 && 0 < 3) {
    setTimeout(() => I(), 500);
    return;
  }
  if (o.length === 0) {
    console.warn("No .card-body found after 3 retries.");
    return;
  }
  o.forEach((a, s) => {
    const r = a.querySelector("div p"), n = r.textContent, t = window.getComputedStyle(a), i = parseInt(t.webkitLineClamp || t.lineClamp), c = parseFloat(t.lineHeight), l = parseFloat(t.fontSize), d = isNaN(c) ? parseFloat(t.lineHeight) * l : c, u = i * d;
    if (r.offsetHeight >= u) {
      let f = "";
      const g = n.split(" ");
      let y = 0, p = "";
      for (; y < g.length && ft(
        p + (p ? " " : "") + g[y],
        r
      ) <= u; )
        p += (p ? " " : "") + g[y], y++;
      f = p + "...";
      const h = `visible-text-${Math.random().toString(36).substring(7)}`, m = document.createElement("div");
      m.id = h, m.textContent = f, m.style.position = "absolute", m.style.top = `${r.offsetTop}px`, m.style.left = `${r.offsetLeft}px`, m.style.width = `${r.offsetWidth}px`, m.style.height = `${r.offsetHeight}px`, m.style.opacity = "0", m.style.pointerEvents = "none", m.style.zIndex = "1", a.appendChild(m), r.setAttribute("aria-describedby", h), r.setAttribute("aria-hidden", "true");
    }
  });
}
function ft(o, e) {
  const a = document.createElement(e.tagName);
  a.style.font = window.getComputedStyle(e).font, a.style.width = window.getComputedStyle(e).width, a.style.whiteSpace = "pre-wrap", a.textContent = o, document.body.appendChild(a);
  const s = a.offsetHeight;
  return document.body.removeChild(a), s;
}
w.on(window, "load.uds.card-bodies", I);
function K() {
  const o = document.querySelector(".info-layer"), e = document.getElementById("dispatch");
  w.on(e, "click", function() {
    o == null || o.classList.toggle("active");
  });
}
w.on(window, "load.uds.ranking-card", K);
function U() {
  k.Chart.register(...k.registerables);
  const o = 50;
  var e = document.getElementById("uds-donut");
  if (!e)
    return;
  document.getElementById("percentage-display").innerHTML = o + "%";
  const a = {
    type: "doughnut",
    data: {
      datasets: [
        {
          data: [o, 100 - o],
          backgroundColor: ["#ffc627", "#fafafa"]
        }
      ]
    },
    options: {
      cutout: "70%",
      //responsive: false, // remove if want static size
      tooltips: { enabled: !1 },
      events: []
      //maintainAspectRatio: false, // remove if want static size
    }
  };
  new k.Chart(e, a);
}
w.on(window, "load.uds.chart", U);
function M() {
  var e, a, s, r;
  const o = (n) => {
    window.dataLayer = window.dataLayer || [];
    const { dataLayer: t } = window;
    t && t.push(n);
  };
  (e = document.querySelectorAll("[data-ga-header]")) == null || e.forEach(
    (n) => n.addEventListener("click", () => {
      const t = n.getAttribute("data-ga-header-event") || "link";
      let i = n.getAttribute("data-ga-header-action") || "click";
      const c = n.getAttribute("aria-expanded");
      c && (i = c === "false" ? "open" : "close");
      const l = n.getAttribute("data-ga-header-type") || "internal link", d = n.getAttribute("data-ga-header-section") || "main navbar", u = n.getAttribute("data-ga-header") || "", f = n.getAttribute("data-ga-header-component");
      o({
        name: "onclick",
        event: t.toLowerCase(),
        action: i.toLowerCase(),
        type: l.toLowerCase(),
        section: d.toLowerCase(),
        region: "navbar",
        text: u.toLowerCase(),
        ...f && {
          component: f.toLowerCase()
        }
      });
    })
  ), (a = document.querySelectorAll("[data-ga-input-header-event]")) == null || a.forEach(
    (n) => n.addEventListener("change", (t) => {
      const i = n.getAttribute("data-ga-input-header-event") || "", c = t.target.value || "";
      o({
        name: "onenter",
        action: "type",
        type: "main search",
        section: "topbar",
        region: "navbar",
        text: c.toLowerCase(),
        event: i.toLowerCase()
      });
    })
  ), (s = document.querySelectorAll("[data-ga]")) == null || s.forEach(
    (n) => n.addEventListener("click", () => {
      const t = n.getAttribute("data-ga-name") || "", i = n.getAttribute("data-ga-event") || "";
      let c = n.getAttribute("data-ga-action") || "";
      const l = n.getAttribute("aria-expanded");
      l && (c = l === "false" ? "open" : "close");
      const d = n.getAttribute("data-ga-type") || "", u = n.getAttribute("data-ga-section") || "", f = n.getAttribute("data-ga-region") || "", g = n.getAttribute("data-ga") || "", y = n.getAttribute("data-ga-component") || "";
      o({
        name: t.toLowerCase(),
        event: i.toLowerCase(),
        action: c.toLowerCase(),
        type: d.toLowerCase(),
        section: u.toLowerCase(),
        region: f.toLowerCase(),
        text: g.toLowerCase(),
        component: y.toLowerCase()
      });
    })
  ), (r = document.querySelectorAll("[data-ga-input]")) == null || r.forEach(
    (n) => n.addEventListener("change", (t) => {
      const i = n.getAttribute("data-ga-input-name") || "", c = n.getAttribute("data-ga-input-action") || "", l = n.getAttribute("data-ga-input") || "", d = n.getAttribute("data-ga-input-region") || "", u = n.getAttribute("data-ga-input-section") || "";
      let f = n.getAttribute("data-ga-input-event") || "", g;
      switch (l) {
        case "checkbox":
          g = t.target.labels[0].textContent || "", f = t.target.checked ? f : "deselect";
          break;
        case "radio button":
          g = t.target.labels[0].textContent || "";
          break;
        case "blur":
          g = t.target.value.toLowerCase() || "";
          break;
        default:
          g = [...t.target.selectedOptions].map((y) => y.value).join(",") || "";
          break;
      }
      o({
        name: i.toLowerCase(),
        event: f.toLowerCase(),
        action: c.toLowerCase(),
        type: l.toLowerCase(),
        section: u.toLowerCase(),
        region: d.toLowerCase(),
        text: g.toLowerCase()
      });
    })
  ), document.querySelectorAll("[data-ga-footer]").forEach(
    (n) => n.addEventListener("focus", () => {
      const t = {
        type: n.getAttribute("data-ga-footer-type").toLowerCase(),
        section: n.getAttribute("data-ga-footer-section").toLowerCase(),
        text: n.getAttribute("data-ga-footer").toLowerCase()
      };
      o({
        event: "link",
        action: "click",
        name: "onclick",
        region: "footer",
        ...t
      });
    })
  );
}
window.initDataLayer = window.initDataLayer || M;
w.on(window, "load.uds.data-layer", M);
const B = () => {
  const o = () => {
    const e = document.getElementById("asu-header");
    window.scrollY > (e == null ? void 0 : e.getBoundingClientRect().top) ? e == null || e.classList.add("scrolled") : e == null || e.classList.remove("scrolled");
  };
  w.on(window, "scroll.uds.header", o);
};
window.initGlobalHeader = window.initGlobalHeader || B;
w.on(window, "load.uds.global-header", B);
function X() {
  const o = "video", e = "#playHeroVid", a = "#pauseHeroVid", s = "click", r = "block", n = "none", t = document.querySelector(o), i = document.querySelector(e), c = document.querySelector(a);
  function l(g) {
    g.paused ? g.play() : g.pause();
  }
  function d(g, y) {
    getComputedStyle(g).display === n ? (y.style.display = n, g.style.display = r, g.focus()) : (g.style.display = n, y.style.display = r, y.focus());
  }
  function u(g) {
    g.stopPropagation(), d(i, c), l(t);
  }
  function f(g) {
    g.stopPropagation(), d(i, c), l(t);
  }
  c == null || c.addEventListener(s, u), i == null || i.addEventListener(s, f);
}
w.on(window, "load.uds.heroes-video", X);
const Q = () => {
  const e = () => {
    document.querySelectorAll(".parallax-container").forEach((t) => {
      const i = t.querySelector("img"), c = t.offsetHeight - i.height * 1.2, l = i.dataset.parallaxType === "scroll-to" ? window.innerHeight : window.innerHeight + t.offsetHeight, d = t.getBoundingClientRect().top, f = (window.innerHeight - d) / l;
      if (f < 0)
        i.style.top = c + "px";
      else if (f > 1)
        i.style.top = "0";
      else {
        const g = c * (1 - f);
        i.style.top = g + "px";
      }
    });
  }, a = (t) => {
    const i = t.parentNode, c = t.width, l = t.height;
    let d = i.offsetWidth / c, u = 0, f = l * d, g = c * d;
    const y = +t.dataset.parallaxFactor || 1.2;
    !t.dataset.noScale && f < i.offsetHeight * y && (d = i.offsetHeight * y / f, f *= d, g *= d, u = (g - i.offsetWidth) / 2 * -1), t.style.height = f + "px", t.style.left = u + "px";
  }, s = () => {
    document.querySelectorAll(".parallax-container img").forEach((t, i) => {
      t.complete ? a(t) : t.onload = () => a(t);
    });
  }, r = (t) => {
    const { dataLayer: i } = window, c = {
      event: "link",
      action: "click",
      name: "onclick",
      type: "internal link",
      region: "main content",
      ...t
    };
    i && i.push(c);
  };
  document.querySelectorAll("[data-ga-image-parallax]").forEach(
    (t) => w.on(t, "focus.uds.image-parallax", () => {
      const i = {
        section: t.getAttribute("data-ga-image-parallax-section").toLowerCase(),
        text: t.getAttribute("data-ga-image-parallax").toLowerCase()
      };
      r(i);
    })
  ), s(), w.on(window, "resize.uds.image-parallax", s), w.on(window, "scroll.uds.image-parallax", e);
};
w.on(window, "load.uds.image-parallax", Q);
function J() {
  var o, e;
  (o = document.getElementById("openModalButton")) == null || o.addEventListener("click", function() {
    document.getElementById("uds-modal").classList.add("open");
  }), (e = document.getElementById("closeModalButton")) == null || e.addEventListener("click", function() {
    document.getElementById("uds-modal").classList.remove("open");
  });
}
w.on(window, "load.uds.modals", J);
function Z() {
  const o = "a", e = "button", a = ".nav-tabs", s = ".nav-item", r = ".uds-tabbed-panels", n = ".scroll-control-prev", t = ".scroll-control-next", i = "click", c = "scroll", l = "focus", d = "none", u = "block", y = (p) => {
    [o, e].includes(p.target.localName) && p.target.focus();
  };
  document.querySelectorAll(r).forEach((p) => {
    const h = p.querySelector(a), m = p.querySelectorAll(s), b = p.querySelector(
      n
    ), L = p.querySelector(
      t
    );
    let v = 0;
    p.addEventListener(i, function(E) {
      y(E);
    });
    const C = (E, S, _) => {
      S.preventDefault();
      const nt = getComputedStyle(h).left.replace("px", "");
      let T = parseInt(nt, 10);
      _ === 1 && v > 0 && (v -= 1), v < m.length - 1 && _ == -1 && (v += 1), h.dataset.scrollPosition = v, T = 0;
      for (var A = 0; A < v; A++)
        T += m[A].offsetWidth + parseInt(getComputedStyle(m[A]).marginLeft, 10) + parseInt(getComputedStyle(m[A]).marginRight, 10);
      h.scrollLeft = T, H(E, T);
    }, H = (E, S) => {
      const _ = h.scrollWidth - S;
      v == 0 ? b.style.display = d : b.style.display = u, _ <= p.offsetWidth ? L.style.display = d : L.style.display = u;
    };
    h.addEventListener(c, (E) => {
      const S = E.target.scrollLeft, _ = h.offsetWidth + S + 10 >= h.scrollWidth;
      b.style.display = S < 10 ? d : u, L.style.display = _ ? d : u;
    }), m.forEach((E) => {
      E.addEventListener(l, function(S) {
        E.scrollIntoView();
      });
    }), L.addEventListener(i, function(E) {
      window.innerWidth > 992 && C(this, E, -1);
    }), b.addEventListener(i, function(E) {
      window.innerWidth > 992 && C(this, E, 1);
    }), b.style.display = d;
    const x = h.scrollWidth, ot = p.offsetWidth;
    x <= ot && (L.style.display = d);
  });
}
w.on(window, "load.uds.tabs", Z);
function tt() {
  function o() {
    const s = ".uds-table-fixed-wrapper", r = ".uds-table.uds-table-fixed table", n = ".scroll-control.previous";
    document.querySelectorAll(s).forEach((i, c) => {
      const l = i.querySelector(r);
      l.setAttribute("id", "uds-table-" + c);
      const d = l.querySelector("tbody tr > *"), u = i.querySelector(n);
      u.style.left = d.offsetWidth + "px";
    });
  }
  function e() {
    const s = ".uds-table-fixed", r = ".uds-table-fixed-wrapper", n = ".scroll-control.previous", t = ".scroll-control.next";
    document.querySelectorAll(r).forEach((c, l) => {
      const d = c.querySelector(s), u = c.querySelector(n), f = c.querySelector(t);
      ["click", "focus"].forEach((g) => {
        w.on(u, g, function() {
          d.scrollLeft -= 100;
        }), w.on(f, g, function() {
          d.scrollLeft += 100;
        });
      });
    });
  }
  function a(s, r) {
    let n;
    return (...t) => {
      clearTimeout(n), n = setTimeout(() => {
        s.apply(this, t);
      }, r);
    };
  }
  o(), e(), w.on(window, "resize", function() {
    a(o, 100)();
  });
}
w.on(window, "load.uds.fixed-table", tt);
function et() {
  const o = "video", e = ".uds-video-btn-play", a = ".uds-video-overlay", s = "click", r = "ended", n = "flex", t = "none", i = document.querySelector(o), c = document.querySelector(a), l = document.querySelector(e);
  function d(h) {
    h.style.display === t ? h.style.display = n : h.style.display = t;
  }
  function u(h) {
    h.paused ? h.play() : h.pause();
  }
  function f(h) {
    u(this), d(this.nextElementSibling);
  }
  function g(h) {
    h.stopPropagation();
    const m = this.parentNode;
    d(m), u(i);
  }
  function y(h) {
    d(this), u(i);
  }
  function p(h) {
    d(c);
  }
  i == null || i.addEventListener(s, f), l == null || l.addEventListener(s, g), c == null || c.addEventListener(s, y), i == null || i.addEventListener(r, p);
}
w.on(window, "load.uds.video", et);
const pt = {
  // Banner, // code updated to use bootstrap alert so we don't need this
  initAnchorMenu: j,
  initBlockquoteAnimation: G,
  initCalendar: $,
  initChart: U,
  initDataLayer: M,
  initFixedTable: tt,
  initGlobalHeader: B,
  initHeroesVideo: X,
  initImageParallax: Q,
  initModals: J,
  initRankingCard: K,
  initTabbedPanels: Z,
  initVideo: et,
  initCardBodies: I
};
export {
  pt as default
};
//# sourceMappingURL=unity-bootstrap.es.js.map
