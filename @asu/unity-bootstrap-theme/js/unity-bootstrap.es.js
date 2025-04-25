import * as O from "chart.js";
const nt = () => window.jQuery && !document.body.hasAttribute("data-bs-no-jquery") ? window.jQuery : null, at = /[^.]*(?=\..*)\.|.*/, st = /\..*/, rt = /::\d+$/, x = {};
let H = 1;
const q = {
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
function R(o, e) {
  return e && `${e}::${H++}` || o.uidEvent || H++;
}
function V(o) {
  const e = R(o);
  return o.uidEvent = e, x[e] = x[e] || {}, x[e];
}
function it(o, e) {
  return function s(a) {
    return N(a, { delegateTarget: o }), s.oneOff && y.off(o, a.type, e), e.apply(o, [a]);
  };
}
function lt(o, e, s) {
  return function a(l) {
    const n = o.querySelectorAll(e);
    for (let { target: t } = l; t && t !== this; t = t.parentNode)
      for (const r of n)
        if (r === t)
          return N(l, { delegateTarget: t }), a.oneOff && y.off(o, l.type, e, s), s.apply(t, [l]);
  };
}
function Y(o, e, s = null) {
  return Object.values(o).find((a) => a.callable === e && a.delegationSelector === s);
}
function W(o, e, s) {
  const a = typeof e == "string", l = a ? s : e || s;
  let n = F(o);
  return ct.has(n) || (n = o), [a, l, n];
}
function P(o, e, s, a, l) {
  if (typeof e != "string" || !o)
    return;
  let [n, t, r] = W(e, s, a);
  e in q && (t = ((m) => function(h) {
    if (!h.relatedTarget || h.relatedTarget !== h.delegateTarget && !h.delegateTarget.contains(h.relatedTarget))
      return m.call(this, h);
  })(t));
  const c = V(o), i = c[r] || (c[r] = {}), d = Y(i, t, n ? s : null);
  if (d) {
    d.oneOff = d.oneOff && l;
    return;
  }
  const u = R(t, e.replace(at, "")), f = n ? lt(o, s, t) : it(o, t);
  f.delegationSelector = n ? s : null, f.callable = t, f.oneOff = l, f.uidEvent = u, i[u] = f, o.addEventListener(r, f, n);
}
function T(o, e, s, a, l) {
  const n = Y(e[s], a, l);
  n && (o.removeEventListener(s, n, !!l), delete e[s][n.uidEvent]);
}
function dt(o, e, s, a) {
  const l = e[s] || {};
  for (const [n, t] of Object.entries(l))
    n.includes(a) && T(o, e, s, t.callable, t.delegationSelector);
}
function F(o) {
  return o = o.replace(st, ""), q[o] || o;
}
const y = {
  on(o, e, s, a) {
    P(o, e, s, a, !1);
  },
  one(o, e, s, a) {
    P(o, e, s, a, !0);
  },
  off(o, e, s, a) {
    if (typeof e != "string" || !o)
      return;
    const [l, n, t] = W(e, s, a), r = t !== e, c = V(o), i = c[t] || {}, d = e.startsWith(".");
    if (typeof n < "u") {
      if (!Object.keys(i).length)
        return;
      T(o, c, t, n, l ? s : null);
      return;
    }
    if (d)
      for (const u of Object.keys(c))
        dt(o, c, u, e.slice(1));
    for (const [u, f] of Object.entries(i)) {
      const g = u.replace(rt, "");
      (!r || e.includes(g)) && T(o, c, t, f.callable, f.delegationSelector);
    }
  },
  trigger(o, e, s) {
    if (typeof e != "string" || !o)
      return null;
    const a = nt(), l = F(e), n = e !== l;
    let t = null, r = !0, c = !0, i = !1;
    n && a && (t = a.Event(e, s), a(o).trigger(t), r = !t.isPropagationStopped(), c = !t.isImmediatePropagationStopped(), i = t.isDefaultPrevented());
    const d = N(new Event(e, { bubbles: r, cancelable: !0 }), s);
    return i && d.preventDefault(), c && o.dispatchEvent(d), d.defaultPrevented && t && t.preventDefault(), d;
  }
};
function N(o, e = {}) {
  for (const [s, a] of Object.entries(e))
    try {
      o[s] = a;
    } catch {
      Object.defineProperty(o, s, {
        configurable: !0,
        get() {
          return a;
        }
      });
    }
  return o;
}
function j() {
  const e = ["asu-header", "asuHeader"].find((w) => document.getElementById(w));
  if (e === void 0)
    return;
  const s = document.getElementById(e), a = document.getElementById("uds-anchor-menu"), l = a.parentNode, n = a.nextSibling, t = a.getElementsByClassName("nav-link"), r = /* @__PURE__ */ new Map();
  let c = window.scrollY, i = !1;
  const d = document.body;
  let u = document.getElementById("toolbar-bar"), f = document.getElementById("toolbar-item-administration-tray"), g = u ? u.offsetHeight : 0, m = f ? f.offsetHeight : 0, h = g + m;
  const p = a.getBoundingClientRect().top + window.scrollY - h;
  for (let w of t) {
    const v = w.getAttribute("href").replace("#", ""), L = document.getElementById(v);
    r.set(w, L);
  }
  new bootstrap.ScrollSpy(d, {
    target: "#uds-anchor-menu nav",
    rootMargin: "20%"
  }), window.scrollY > p && (s.appendChild(a), i = !0, a.classList.add("uds-anchor-menu-attached")), window.addEventListener("scroll", function() {
    const w = a.getBoundingClientRect().top, v = s.classList.contains("scrolled") ? s.offsetHeight - 32 : s.offsetHeight;
    window.scrollY > c && w > 0 && w < v && (i || (s.appendChild(a), i = !0, a.classList.add("uds-anchor-menu-attached")), c = window.scrollY), window.scrollY < c && window.scrollY <= p && i && (l.insertBefore(a, n), i = !1, a.classList.remove("uds-anchor-menu-attached")), c = window.scrollY;
  }, { passive: !0 });
  for (let [w, v] of r)
    w.addEventListener("click", function(L) {
      L.preventDefault();
      let _ = v.getBoundingClientRect().top - a.offsetHeight;
      window.scrollY === 0 && (_ += 65), a.classList.contains("uds-anchor-menu-sticky") || (window.scrollY > 0 && (_ += 24), _ -= s.offsetHeight), window.scrollBy({
        top: _,
        behavior: "smooth"
      });
      const D = a.querySelector(".nav-link.active");
      D && D.classList.remove("active"), L.target.classList.add("active");
    });
}
y.on(window, "load.uds.anchor-menu", j);
function G() {
  const o = document.querySelectorAll('mark[class^="pen-"]'), e = new IntersectionObserver(
    (s) => {
      s.forEach((a) => {
        a.isIntersecting ? a.target.classList.add("animate-bg-in-scroll") : a.target.classList.remove("animate-bg-in-scroll");
      });
    },
    {
      threshold: 0.1
    }
  );
  o.forEach((s) => {
    e.observe(s);
  });
}
y.on(window, "load.uds.blockquote-animation", G);
function z() {
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
  ], s = ["Su", "M", "Tu", "W", "Th", "F", "Sa"], l = {
    month: (/* @__PURE__ */ new Date()).getMonth(),
    year: (/* @__PURE__ */ new Date()).getFullYear()
  }, n = (c, i) => {
    const d = /* @__PURE__ */ new Date(), u = [], f = new Date(c, i).getDay(), g = new Date(c, i + 1, 0).getDate(), m = new Date(c, i, 0).getDate();
    for (let h = 1; h <= f; h++) {
      const p = m - f + h, b = new Date(
        l.year,
        l.month - 1,
        p
      ).toLocaleString();
      u.push({ key: b, date: p, monthClass: "prev" });
    }
    for (let h = 1; h <= g; h++) {
      const p = new Date(l.year, l.month, h).toLocaleString();
      h === d.getDate() && l.month === d.getMonth() && l.year === d.getFullYear() ? u.push({
        key: p,
        date: h,
        monthClass: "current",
        todayClass: "today"
      }) : u.push({ key: p, date: h, monthClass: "current" });
    }
    if (u.length < 42) {
      const h = 42 - u.length;
      for (let p = 1; p <= h; p++) {
        const b = new Date(l.year, l.month + 1, p).toLocaleString();
        u.push({ key: b, date: p, monthClass: "next" });
      }
    }
    return u;
  }, t = () => {
    const c = document.getElementById("calendar");
    c && (c.innerHTML = `
      <h2><span class="highlight-black">${o[l.month]} ${l.year}</span></h2>
      <div class="calendar-grid">
        <div class="heading desktop">
          ${e.map((i) => `<p>${i}</p>`).join("")}
        </div>
        <div class="heading mobile">
          ${s.map((i) => `<p>${i}</p>`).join("")}
        </div>
        <div class="body">
          ${n(l.year, l.month).map(
      (i) => `<h3 id="${i.key}" class="calendar-item ${i.monthClass}" ${i.todayClass ? `aria-label="${i.todayClass[0].toUpperCase()}${i.todayClass.slice(
        1
      )}"` : ""}>
                  <span class="${i.todayClass ? i.todayClass : ""}">${i.date}</span>
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
    var i = new Date(l.year, l.month + c);
    l.year = i.getFullYear(), l.month = i.getMonth(), t();
  })(0);
}
y.on(window, "load.uds.calendar", z);
function K() {
  const o = document.querySelector(".info-layer"), e = document.getElementById("dispatch");
  y.on(e, "click", function() {
    o == null || o.classList.toggle("active");
  });
}
y.on(window, "load.uds.ranking-card", K);
function U() {
  O.Chart.register(...O.registerables);
  const o = 50;
  var e = document.getElementById("uds-donut");
  if (!e)
    return;
  document.getElementById("percentage-display").innerHTML = o + "%";
  const s = {
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
  new O.Chart(e, s);
}
y.on(window, "load.uds.chart", U);
function I() {
  var e, s, a, l;
  const o = (n) => {
    window.dataLayer = window.dataLayer || [];
    const { dataLayer: t } = window;
    t && t.push(n);
  };
  (e = document.querySelectorAll("[data-ga-header]")) == null || e.forEach(
    (n) => n.addEventListener("click", () => {
      const t = n.getAttribute("data-ga-header-event") || "link";
      let r = n.getAttribute("data-ga-header-action") || "click";
      const c = n.getAttribute("aria-expanded");
      c && (r = c === "false" ? "open" : "close");
      const i = n.getAttribute("data-ga-header-type") || "internal link", d = n.getAttribute("data-ga-header-section") || "main navbar", u = n.getAttribute("data-ga-header") || "", f = n.getAttribute("data-ga-header-component");
      o({
        name: "onclick",
        event: t.toLowerCase(),
        action: r.toLowerCase(),
        type: i.toLowerCase(),
        section: d.toLowerCase(),
        region: "navbar",
        text: u.toLowerCase(),
        ...f && {
          component: f.toLowerCase()
        }
      });
    })
  ), (s = document.querySelectorAll("[data-ga-input-header-event]")) == null || s.forEach(
    (n) => n.addEventListener("change", (t) => {
      const r = n.getAttribute("data-ga-input-header-event") || "", c = t.target.value || "";
      o({
        name: "onenter",
        action: "type",
        type: "main search",
        section: "topbar",
        region: "navbar",
        text: c.toLowerCase(),
        event: r.toLowerCase()
      });
    })
  ), (a = document.querySelectorAll("[data-ga]")) == null || a.forEach(
    (n) => n.addEventListener("click", () => {
      const t = n.getAttribute("data-ga-name") || "", r = n.getAttribute("data-ga-event") || "";
      let c = n.getAttribute("data-ga-action") || "";
      const i = n.getAttribute("aria-expanded");
      i && (c = i === "false" ? "open" : "close");
      const d = n.getAttribute("data-ga-type") || "", u = n.getAttribute("data-ga-section") || "", f = n.getAttribute("data-ga-region") || "", g = n.getAttribute("data-ga") || "", m = n.getAttribute("data-ga-component") || "";
      o({
        name: t.toLowerCase(),
        event: r.toLowerCase(),
        action: c.toLowerCase(),
        type: d.toLowerCase(),
        section: u.toLowerCase(),
        region: f.toLowerCase(),
        text: g.toLowerCase(),
        component: m.toLowerCase()
      });
    })
  ), (l = document.querySelectorAll("[data-ga-input]")) == null || l.forEach(
    (n) => n.addEventListener("change", (t) => {
      const r = n.getAttribute("data-ga-input-name") || "", c = n.getAttribute("data-ga-input-action") || "", i = n.getAttribute("data-ga-input") || "", d = n.getAttribute("data-ga-input-region") || "", u = n.getAttribute("data-ga-input-section") || "";
      let f = n.getAttribute("data-ga-input-event") || "", g;
      switch (i) {
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
          g = [...t.target.selectedOptions].map((m) => m.value).join(",") || "";
          break;
      }
      o({
        name: r.toLowerCase(),
        event: f.toLowerCase(),
        action: c.toLowerCase(),
        type: i.toLowerCase(),
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
window.initDataLayer = window.initDataLayer || I;
y.on(window, "load.uds.data-layer", I);
const B = () => {
  const o = () => {
    const e = document.getElementById("asu-header");
    window.scrollY > (e == null ? void 0 : e.getBoundingClientRect().top) ? e == null || e.classList.add("scrolled") : e == null || e.classList.remove("scrolled");
  };
  y.on(window, "scroll.uds.header", o);
};
window.initGlobalHeader = window.initGlobalHeader || B;
y.on(window, "load.uds.global-header", B);
function $() {
  const o = "video", e = "#playHeroVid", s = "#pauseHeroVid", a = "click", l = "block", n = "none", t = document.querySelector(o), r = document.querySelector(e), c = document.querySelector(s);
  function i(g) {
    g.paused ? g.play() : g.pause();
  }
  function d(g, m) {
    getComputedStyle(g).display === n ? (m.style.display = n, g.style.display = l, g.focus()) : (g.style.display = n, m.style.display = l, m.focus());
  }
  function u(g) {
    g.stopPropagation(), d(r, c), i(t);
  }
  function f(g) {
    g.stopPropagation(), d(r, c), i(t);
  }
  c == null || c.addEventListener(a, u), r == null || r.addEventListener(a, f);
}
y.on(window, "load.uds.heroes-video", $);
const X = () => {
  const e = () => {
    document.querySelectorAll(".parallax-container").forEach((t) => {
      const r = t.querySelector("img"), c = t.offsetHeight - r.height * 1.2, i = r.dataset.parallaxType === "scroll-to" ? window.innerHeight : window.innerHeight + t.offsetHeight, d = t.getBoundingClientRect().top, f = (window.innerHeight - d) / i;
      if (f < 0)
        r.style.top = c + "px";
      else if (f > 1)
        r.style.top = "0";
      else {
        const g = c * (1 - f);
        r.style.top = g + "px";
      }
    });
  }, s = (t) => {
    const r = t.parentNode, c = t.width, i = t.height;
    let d = r.offsetWidth / c, u = 0, f = i * d, g = c * d;
    const m = +t.dataset.parallaxFactor || 1.2;
    !t.dataset.noScale && f < r.offsetHeight * m && (d = r.offsetHeight * m / f, f *= d, g *= d, u = (g - r.offsetWidth) / 2 * -1), t.style.height = f + "px", t.style.left = u + "px";
  }, a = () => {
    document.querySelectorAll(".parallax-container img").forEach((t, r) => {
      t.complete ? s(t) : t.onload = () => s(t);
    });
  }, l = (t) => {
    const { dataLayer: r } = window, c = {
      event: "link",
      action: "click",
      name: "onclick",
      type: "internal link",
      region: "main content",
      ...t
    };
    r && r.push(c);
  };
  document.querySelectorAll("[data-ga-image-parallax]").forEach(
    (t) => y.on(t, "focus.uds.image-parallax", () => {
      const r = {
        section: t.getAttribute("data-ga-image-parallax-section").toLowerCase(),
        text: t.getAttribute("data-ga-image-parallax").toLowerCase()
      };
      l(r);
    })
  ), a(), y.on(window, "resize.uds.image-parallax", a), y.on(window, "scroll.uds.image-parallax", e);
};
y.on(window, "load.uds.image-parallax", X);
function Q() {
  var o, e;
  (o = document.getElementById("openModalButton")) == null || o.addEventListener("click", function() {
    document.getElementById("uds-modal").classList.add("open");
  }), (e = document.getElementById("closeModalButton")) == null || e.addEventListener("click", function() {
    document.getElementById("uds-modal").classList.remove("open");
  });
}
y.on(window, "load.uds.modals", Q);
function J() {
  const o = "a", e = "button", s = ".nav-tabs", a = ".nav-item", l = ".uds-tabbed-panels", n = ".scroll-control-prev", t = ".scroll-control-next", r = "click", c = "scroll", i = "focus", d = "none", u = "block", m = (h) => {
    [o, e].includes(h.target.localName) && h.target.focus();
  };
  document.querySelectorAll(l).forEach((h) => {
    const p = h.querySelector(s), b = h.querySelectorAll(a), w = h.querySelector(
      n
    ), v = h.querySelector(
      t
    );
    let L = 0;
    h.addEventListener(r, function(E) {
      m(E);
    });
    const _ = (E, S, A) => {
      S.preventDefault();
      const ot = getComputedStyle(p).left.replace("px", "");
      let k = parseInt(ot, 10);
      A === 1 && L > 0 && (L -= 1), L < b.length - 1 && A == -1 && (L += 1), p.dataset.scrollPosition = L, k = 0;
      for (var C = 0; C < L; C++)
        k += b[C].offsetWidth + parseInt(getComputedStyle(b[C]).marginLeft, 10) + parseInt(getComputedStyle(b[C]).marginRight, 10);
      p.scrollLeft = k, M(E, k);
    }, M = (E, S) => {
      const A = p.scrollWidth - S;
      L == 0 ? w.style.display = d : w.style.display = u, A <= h.offsetWidth ? v.style.display = d : v.style.display = u;
    };
    p.addEventListener(c, (E) => {
      const S = E.target.scrollLeft, A = p.offsetWidth + S + 10 >= p.scrollWidth;
      w.style.display = S < 10 ? d : u, v.style.display = A ? d : u;
    }), b.forEach((E) => {
      E.addEventListener(i, function(S) {
        E.scrollIntoView();
      });
    }), v.addEventListener(r, function(E) {
      window.innerWidth > 992 && _(this, E, -1);
    }), w.addEventListener(r, function(E) {
      window.innerWidth > 992 && _(this, E, 1);
    }), w.style.display = d;
    const D = p.scrollWidth, et = h.offsetWidth;
    D <= et && (v.style.display = d);
  });
}
y.on(window, "load.uds.tabs", J);
function Z() {
  function o() {
    const a = ".uds-table-fixed-wrapper", l = ".uds-table.uds-table-fixed table", n = ".scroll-control.previous";
    document.querySelectorAll(a).forEach((r, c) => {
      const i = r.querySelector(l);
      i.setAttribute("id", "uds-table-" + c);
      const d = i.querySelector("tbody tr > *"), u = r.querySelector(n);
      u.style.left = d.offsetWidth + "px";
    });
  }
  function e() {
    const a = ".uds-table-fixed", l = ".uds-table-fixed-wrapper", n = ".scroll-control.previous", t = ".scroll-control.next";
    document.querySelectorAll(l).forEach((c, i) => {
      const d = c.querySelector(a), u = c.querySelector(n), f = c.querySelector(t);
      ["click", "focus"].forEach((g) => {
        y.on(u, g, function() {
          d.scrollLeft -= 100;
        }), y.on(f, g, function() {
          d.scrollLeft += 100;
        });
      });
    });
  }
  function s(a, l) {
    let n;
    return (...t) => {
      clearTimeout(n), n = setTimeout(() => {
        a.apply(this, t);
      }, l);
    };
  }
  o(), e(), y.on(window, "resize", function() {
    s(o, 100)();
  });
}
y.on(window, "load.uds.fixed-table", Z);
function tt() {
  const o = "video", e = ".uds-video-btn-play", s = ".uds-video-overlay", a = "click", l = "ended", n = "flex", t = "none", r = document.querySelector(o), c = document.querySelector(s), i = document.querySelector(e);
  function d(p) {
    p.style.display === t ? p.style.display = n : p.style.display = t;
  }
  function u(p) {
    p.paused ? p.play() : p.pause();
  }
  function f(p) {
    u(this), d(this.nextElementSibling);
  }
  function g(p) {
    p.stopPropagation();
    const b = this.parentNode;
    d(b), u(r);
  }
  function m(p) {
    d(this), u(r);
  }
  function h(p) {
    d(c);
  }
  r == null || r.addEventListener(a, f), i == null || i.addEventListener(a, g), c == null || c.addEventListener(a, m), r == null || r.addEventListener(l, h);
}
y.on(window, "load.uds.video", tt);
const ft = {
  // Banner, // code updated to use bootstrap alert so we don't need this
  initAnchorMenu: j,
  initBlockquoteAnimation: G,
  initCalendar: z,
  initChart: U,
  initDataLayer: I,
  initFixedTable: Z,
  initGlobalHeader: B,
  initHeroesVideo: $,
  initImageParallax: X,
  initModals: Q,
  initRankingCard: K,
  initTabbedPanels: J,
  initVideo: tt
};
export {
  ft as default
};
//# sourceMappingURL=unity-bootstrap.es.js.map
