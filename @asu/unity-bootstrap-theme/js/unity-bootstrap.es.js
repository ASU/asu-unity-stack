import * as k from "chart.js";
const at = () => window.jQuery && !document.body.hasAttribute("data-bs-no-jquery") ? window.jQuery : null, st = /[^.]*(?=\..*)\.|.*/, rt = /\..*/, it = /::\d+$/, D = {};
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
function R(o, t) {
  return t && `${t}::${H++}` || o.uidEvent || H++;
}
function V(o) {
  const t = R(o);
  return o.uidEvent = t, D[t] = D[t] || {}, D[t];
}
function lt(o, t) {
  return function s(a) {
    return N(a, { delegateTarget: o }), s.oneOff && m.off(o, a.type, t), t.apply(o, [a]);
  };
}
function dt(o, t, s) {
  return function a(l) {
    const n = o.querySelectorAll(t);
    for (let { target: e } = l; e && e !== this; e = e.parentNode)
      for (const r of n)
        if (r === e)
          return N(l, { delegateTarget: e }), a.oneOff && m.off(o, l.type, t, s), s.apply(e, [l]);
  };
}
function Y(o, t, s = null) {
  return Object.values(o).find((a) => a.callable === t && a.delegationSelector === s);
}
function W(o, t, s) {
  const a = typeof t == "string", l = a ? s : t || s;
  let n = F(o);
  return ct.has(n) || (n = o), [a, l, n];
}
function P(o, t, s, a, l) {
  if (typeof t != "string" || !o)
    return;
  let [n, e, r] = W(t, s, a);
  t in q && (e = ((y) => function(h) {
    if (!h.relatedTarget || h.relatedTarget !== h.delegateTarget && !h.delegateTarget.contains(h.relatedTarget))
      return y.call(this, h);
  })(e));
  const i = V(o), c = i[r] || (i[r] = {}), d = Y(c, e, n ? s : null);
  if (d) {
    d.oneOff = d.oneOff && l;
    return;
  }
  const f = R(e, t.replace(st, "")), g = n ? dt(o, s, e) : lt(o, e);
  g.delegationSelector = n ? s : null, g.callable = e, g.oneOff = l, g.uidEvent = f, c[f] = g, o.addEventListener(r, g, n);
}
function O(o, t, s, a, l) {
  const n = Y(t[s], a, l);
  n && (o.removeEventListener(s, n, !!l), delete t[s][n.uidEvent]);
}
function ut(o, t, s, a) {
  const l = t[s] || {};
  for (const [n, e] of Object.entries(l))
    n.includes(a) && O(o, t, s, e.callable, e.delegationSelector);
}
function F(o) {
  return o = o.replace(rt, ""), q[o] || o;
}
const m = {
  on(o, t, s, a) {
    P(o, t, s, a, !1);
  },
  one(o, t, s, a) {
    P(o, t, s, a, !0);
  },
  off(o, t, s, a) {
    if (typeof t != "string" || !o)
      return;
    const [l, n, e] = W(t, s, a), r = e !== t, i = V(o), c = i[e] || {}, d = t.startsWith(".");
    if (typeof n < "u") {
      if (!Object.keys(c).length)
        return;
      O(o, i, e, n, l ? s : null);
      return;
    }
    if (d)
      for (const f of Object.keys(i))
        ut(o, i, f, t.slice(1));
    for (const [f, g] of Object.entries(c)) {
      const p = f.replace(it, "");
      (!r || t.includes(p)) && O(o, i, e, g.callable, g.delegationSelector);
    }
  },
  trigger(o, t, s) {
    if (typeof t != "string" || !o)
      return null;
    const a = at(), l = F(t), n = t !== l;
    let e = null, r = !0, i = !0, c = !1;
    n && a && (e = a.Event(t, s), a(o).trigger(e), r = !e.isPropagationStopped(), i = !e.isImmediatePropagationStopped(), c = e.isDefaultPrevented());
    const d = N(new Event(t, { bubbles: r, cancelable: !0 }), s);
    return c && d.preventDefault(), i && o.dispatchEvent(d), d.defaultPrevented && e && e.preventDefault(), d;
  }
};
function N(o, t = {}) {
  for (const [s, a] of Object.entries(t))
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
function z() {
  const t = ["asu-header", "asuHeader"].find((w) => document.getElementById(w));
  if (t === void 0)
    return;
  const s = document.getElementById(t), a = document.getElementById("uds-anchor-menu"), l = a.parentNode, n = a.nextSibling, e = a.getElementsByClassName("nav-link"), r = /* @__PURE__ */ new Map();
  let i = window.scrollY, c = !1;
  const d = document.body;
  let f = document.getElementById("toolbar-bar"), g = document.getElementById(
    "toolbar-item-administration-tray"
  ), p = f ? f.offsetHeight : 0, y = g ? g.offsetHeight : 0, h = p + y;
  const u = a.getBoundingClientRect().top + window.scrollY - h;
  for (let w of e) {
    const L = w.getAttribute("href").replace("#", ""), v = document.getElementById(L);
    r.set(w, v);
  }
  new bootstrap.ScrollSpy(d, {
    target: "#uds-anchor-menu nav",
    rootMargin: "20%"
  }), window.scrollY > u && (s.appendChild(a), c = !0, a.classList.add("uds-anchor-menu-attached")), window.addEventListener(
    "scroll",
    function() {
      const w = a.getBoundingClientRect().top, L = s.classList.contains("scrolled") ? s.offsetHeight - 32 : s.offsetHeight;
      window.scrollY > i && w > 0 && w < L && (c || (s.appendChild(a), c = !0, a.classList.add("uds-anchor-menu-attached")), i = window.scrollY), window.scrollY < i && window.scrollY <= u && c && (l.insertBefore(a, n), c = !1, a.classList.remove("uds-anchor-menu-attached")), i = window.scrollY;
    },
    { passive: !0 }
  );
  for (let [w, L] of r)
    w.addEventListener("click", function(v) {
      v.preventDefault();
      let S = L.getBoundingClientRect().top - a.offsetHeight;
      window.scrollY === 0 && (S += 65), a.classList.contains("uds-anchor-menu-sticky") || (window.scrollY > 0 && (S += 24), S -= s.offsetHeight), window.scrollBy({
        top: S,
        behavior: "smooth"
      });
      const x = a.querySelector(".nav-link.active");
      x && x.classList.remove("active"), v.target.classList.add("active");
    });
}
m.on(window, "load.uds.anchor-menu", z);
function j() {
  const o = document.querySelectorAll('mark[class^="pen-"]'), t = new IntersectionObserver(
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
    t.observe(s);
  });
}
m.on(
  window,
  "load.uds.blockquote-animation",
  j
);
function G() {
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
  ], t = [
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
  }, n = (i, c) => {
    const d = /* @__PURE__ */ new Date(), f = [], g = new Date(i, c).getDay(), p = new Date(i, c + 1, 0).getDate(), y = new Date(i, c, 0).getDate();
    for (let h = 1; h <= g; h++) {
      const u = y - g + h, E = new Date(
        l.year,
        l.month - 1,
        u
      ).toLocaleString();
      f.push({ key: E, date: u, monthClass: "prev" });
    }
    for (let h = 1; h <= p; h++) {
      const u = new Date(l.year, l.month, h).toLocaleString();
      h === d.getDate() && l.month === d.getMonth() && l.year === d.getFullYear() ? f.push({
        key: u,
        date: h,
        monthClass: "current",
        todayClass: "today"
      }) : f.push({ key: u, date: h, monthClass: "current" });
    }
    if (f.length < 42) {
      const h = 42 - f.length;
      for (let u = 1; u <= h; u++) {
        const E = new Date(l.year, l.month + 1, u).toLocaleString();
        f.push({ key: E, date: u, monthClass: "next" });
      }
    }
    return f;
  }, e = () => {
    const i = document.getElementById("calendar");
    i && (i.innerHTML = `
      <h2><span class="highlight-black">${o[l.month]} ${l.year}</span></h2>
      <div class="calendar-grid">
        <div class="heading desktop">
          ${t.map((c) => `<p>${c}</p>`).join("")}
        </div>
        <div class="heading mobile">
          ${s.map((c) => `<p>${c}</p>`).join("")}
        </div>
        <div class="body">
          ${n(l.year, l.month).map(
      (c) => `<h3 id="${c.key}" class="calendar-item ${c.monthClass}" ${c.todayClass ? `aria-label="${c.todayClass[0].toUpperCase()}${c.todayClass.slice(
        1
      )}"` : ""}>
                  <span class="${c.todayClass ? c.todayClass : ""}">${c.date}</span>
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
  ((i) => {
    var c = new Date(l.year, l.month + i);
    l.year = c.getFullYear(), l.month = c.getMonth(), e();
  })(0);
}
m.on(window, "load.uds.calendar", G);
function $() {
  document.querySelectorAll(".card-body").forEach((t, s) => {
    const a = t.querySelector("div p"), l = a.textContent, n = window.getComputedStyle(t), e = parseInt(n.webkitLineClamp || n.lineClamp), r = parseFloat(n.lineHeight), i = parseFloat(n.fontSize), c = isNaN(r) ? parseFloat(n.lineHeight) * i : r, d = e * c;
    if (a.offsetHeight >= d) {
      let f = "";
      const g = l.split(" ");
      let p = 0, y = "";
      for (; p < g.length && ft(
        y + (y ? " " : "") + g[p],
        a
      ) <= d; )
        y += (y ? " " : "") + g[p], p++;
      f = y + "...";
      const h = `visible-text-${Math.random().toString(36).substring(7)}`, u = document.createElement("div");
      u.id = h, u.textContent = f, u.style.position = "absolute", u.style.top = `${a.offsetTop}px`, u.style.left = `${a.offsetLeft}px`, u.style.width = `${a.offsetWidth}px`, u.style.height = `${a.offsetHeight}px`, u.style.opacity = "0", u.style.pointerEvents = "none", u.style.zIndex = "1", t.appendChild(u), a.setAttribute("aria-describedby", h), a.setAttribute("aria-hidden", "true");
    }
  });
}
function ft(o, t) {
  const s = document.createElement(t.tagName);
  s.style.font = window.getComputedStyle(t).font, s.style.width = window.getComputedStyle(t).width, s.style.whiteSpace = "pre-wrap", s.textContent = o, document.body.appendChild(s);
  const a = s.offsetHeight;
  return document.body.removeChild(s), a;
}
m.on(window, "load.uds.card-bodies", $);
function K() {
  const o = document.querySelector(".info-layer"), t = document.getElementById("dispatch");
  m.on(t, "click", function() {
    o == null || o.classList.toggle("active");
  });
}
m.on(window, "load.uds.ranking-card", K);
function U() {
  k.Chart.register(...k.registerables);
  const o = 50;
  var t = document.getElementById("uds-donut");
  if (!t)
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
  new k.Chart(t, s);
}
m.on(window, "load.uds.chart", U);
function I() {
  var t, s, a, l;
  const o = (n) => {
    window.dataLayer = window.dataLayer || [];
    const { dataLayer: e } = window;
    e && e.push(n);
  };
  (t = document.querySelectorAll("[data-ga-header]")) == null || t.forEach(
    (n) => n.addEventListener("click", () => {
      const e = n.getAttribute("data-ga-header-event") || "link";
      let r = n.getAttribute("data-ga-header-action") || "click";
      const i = n.getAttribute("aria-expanded");
      i && (r = i === "false" ? "open" : "close");
      const c = n.getAttribute("data-ga-header-type") || "internal link", d = n.getAttribute("data-ga-header-section") || "main navbar", f = n.getAttribute("data-ga-header") || "", g = n.getAttribute("data-ga-header-component");
      o({
        name: "onclick",
        event: e.toLowerCase(),
        action: r.toLowerCase(),
        type: c.toLowerCase(),
        section: d.toLowerCase(),
        region: "navbar",
        text: f.toLowerCase(),
        ...g && {
          component: g.toLowerCase()
        }
      });
    })
  ), (s = document.querySelectorAll("[data-ga-input-header-event]")) == null || s.forEach(
    (n) => n.addEventListener("change", (e) => {
      const r = n.getAttribute("data-ga-input-header-event") || "", i = e.target.value || "";
      o({
        name: "onenter",
        action: "type",
        type: "main search",
        section: "topbar",
        region: "navbar",
        text: i.toLowerCase(),
        event: r.toLowerCase()
      });
    })
  ), (a = document.querySelectorAll("[data-ga]")) == null || a.forEach(
    (n) => n.addEventListener("click", () => {
      const e = n.getAttribute("data-ga-name") || "", r = n.getAttribute("data-ga-event") || "";
      let i = n.getAttribute("data-ga-action") || "";
      const c = n.getAttribute("aria-expanded");
      c && (i = c === "false" ? "open" : "close");
      const d = n.getAttribute("data-ga-type") || "", f = n.getAttribute("data-ga-section") || "", g = n.getAttribute("data-ga-region") || "", p = n.getAttribute("data-ga") || "", y = n.getAttribute("data-ga-component") || "";
      o({
        name: e.toLowerCase(),
        event: r.toLowerCase(),
        action: i.toLowerCase(),
        type: d.toLowerCase(),
        section: f.toLowerCase(),
        region: g.toLowerCase(),
        text: p.toLowerCase(),
        component: y.toLowerCase()
      });
    })
  ), (l = document.querySelectorAll("[data-ga-input]")) == null || l.forEach(
    (n) => n.addEventListener("change", (e) => {
      const r = n.getAttribute("data-ga-input-name") || "", i = n.getAttribute("data-ga-input-action") || "", c = n.getAttribute("data-ga-input") || "", d = n.getAttribute("data-ga-input-region") || "", f = n.getAttribute("data-ga-input-section") || "";
      let g = n.getAttribute("data-ga-input-event") || "", p;
      switch (c) {
        case "checkbox":
          p = e.target.labels[0].textContent || "", g = e.target.checked ? g : "deselect";
          break;
        case "radio button":
          p = e.target.labels[0].textContent || "";
          break;
        case "blur":
          p = e.target.value.toLowerCase() || "";
          break;
        default:
          p = [...e.target.selectedOptions].map((y) => y.value).join(",") || "";
          break;
      }
      o({
        name: r.toLowerCase(),
        event: g.toLowerCase(),
        action: i.toLowerCase(),
        type: c.toLowerCase(),
        section: f.toLowerCase(),
        region: d.toLowerCase(),
        text: p.toLowerCase()
      });
    })
  ), document.querySelectorAll("[data-ga-footer]").forEach(
    (n) => n.addEventListener("focus", () => {
      const e = {
        type: n.getAttribute("data-ga-footer-type").toLowerCase(),
        section: n.getAttribute("data-ga-footer-section").toLowerCase(),
        text: n.getAttribute("data-ga-footer").toLowerCase()
      };
      o({
        event: "link",
        action: "click",
        name: "onclick",
        region: "footer",
        ...e
      });
    })
  );
}
window.initDataLayer = window.initDataLayer || I;
m.on(window, "load.uds.data-layer", I);
const B = () => {
  const o = () => {
    const t = document.getElementById("asu-header");
    window.scrollY > (t == null ? void 0 : t.getBoundingClientRect().top) ? t == null || t.classList.add("scrolled") : t == null || t.classList.remove("scrolled");
  };
  m.on(window, "scroll.uds.header", o);
};
window.initGlobalHeader = window.initGlobalHeader || B;
m.on(window, "load.uds.global-header", B);
function X() {
  const o = "video", t = "#playHeroVid", s = "#pauseHeroVid", a = "click", l = "block", n = "none", e = document.querySelector(o), r = document.querySelector(t), i = document.querySelector(s);
  function c(p) {
    p.paused ? p.play() : p.pause();
  }
  function d(p, y) {
    getComputedStyle(p).display === n ? (y.style.display = n, p.style.display = l, p.focus()) : (p.style.display = n, y.style.display = l, y.focus());
  }
  function f(p) {
    p.stopPropagation(), d(r, i), c(e);
  }
  function g(p) {
    p.stopPropagation(), d(r, i), c(e);
  }
  i == null || i.addEventListener(a, f), r == null || r.addEventListener(a, g);
}
m.on(window, "load.uds.heroes-video", X);
const Q = () => {
  const t = () => {
    document.querySelectorAll(".parallax-container").forEach((e) => {
      const r = e.querySelector("img"), i = e.offsetHeight - r.height * 1.2, c = r.dataset.parallaxType === "scroll-to" ? window.innerHeight : window.innerHeight + e.offsetHeight, d = e.getBoundingClientRect().top, g = (window.innerHeight - d) / c;
      if (g < 0)
        r.style.top = i + "px";
      else if (g > 1)
        r.style.top = "0";
      else {
        const p = i * (1 - g);
        r.style.top = p + "px";
      }
    });
  }, s = (e) => {
    const r = e.parentNode, i = e.width, c = e.height;
    let d = r.offsetWidth / i, f = 0, g = c * d, p = i * d;
    const y = +e.dataset.parallaxFactor || 1.2;
    !e.dataset.noScale && g < r.offsetHeight * y && (d = r.offsetHeight * y / g, g *= d, p *= d, f = (p - r.offsetWidth) / 2 * -1), e.style.height = g + "px", e.style.left = f + "px";
  }, a = () => {
    document.querySelectorAll(".parallax-container img").forEach((e, r) => {
      e.complete ? s(e) : e.onload = () => s(e);
    });
  }, l = (e) => {
    const { dataLayer: r } = window, i = {
      event: "link",
      action: "click",
      name: "onclick",
      type: "internal link",
      region: "main content",
      ...e
    };
    r && r.push(i);
  };
  document.querySelectorAll("[data-ga-image-parallax]").forEach(
    (e) => m.on(e, "focus.uds.image-parallax", () => {
      const r = {
        section: e.getAttribute("data-ga-image-parallax-section").toLowerCase(),
        text: e.getAttribute("data-ga-image-parallax").toLowerCase()
      };
      l(r);
    })
  ), a(), m.on(window, "resize.uds.image-parallax", a), m.on(window, "scroll.uds.image-parallax", t);
};
m.on(window, "load.uds.image-parallax", Q);
function J() {
  var o, t;
  (o = document.getElementById("openModalButton")) == null || o.addEventListener("click", function() {
    document.getElementById("uds-modal").classList.add("open");
  }), (t = document.getElementById("closeModalButton")) == null || t.addEventListener("click", function() {
    document.getElementById("uds-modal").classList.remove("open");
  });
}
m.on(window, "load.uds.modals", J);
function Z() {
  const o = "a", t = "button", s = ".nav-tabs", a = ".nav-item", l = ".uds-tabbed-panels", n = ".scroll-control-prev", e = ".scroll-control-next", r = "click", i = "scroll", c = "focus", d = "none", f = "block", y = (h) => {
    [o, t].includes(h.target.localName) && h.target.focus();
  };
  document.querySelectorAll(l).forEach((h) => {
    const u = h.querySelector(s), E = h.querySelectorAll(a), w = h.querySelector(
      n
    ), L = h.querySelector(
      e
    );
    let v = 0;
    h.addEventListener(r, function(b) {
      y(b);
    });
    const S = (b, C, _) => {
      C.preventDefault();
      const nt = getComputedStyle(u).left.replace("px", "");
      let T = parseInt(nt, 10);
      _ === 1 && v > 0 && (v -= 1), v < E.length - 1 && _ == -1 && (v += 1), u.dataset.scrollPosition = v, T = 0;
      for (var A = 0; A < v; A++)
        T += E[A].offsetWidth + parseInt(getComputedStyle(E[A]).marginLeft, 10) + parseInt(getComputedStyle(E[A]).marginRight, 10);
      u.scrollLeft = T, M(b, T);
    }, M = (b, C) => {
      const _ = u.scrollWidth - C;
      v == 0 ? w.style.display = d : w.style.display = f, _ <= h.offsetWidth ? L.style.display = d : L.style.display = f;
    };
    u.addEventListener(i, (b) => {
      const C = b.target.scrollLeft, _ = u.offsetWidth + C + 10 >= u.scrollWidth;
      w.style.display = C < 10 ? d : f, L.style.display = _ ? d : f;
    }), E.forEach((b) => {
      b.addEventListener(c, function(C) {
        b.scrollIntoView();
      });
    }), L.addEventListener(r, function(b) {
      window.innerWidth > 992 && S(this, b, -1);
    }), w.addEventListener(r, function(b) {
      window.innerWidth > 992 && S(this, b, 1);
    }), w.style.display = d;
    const x = u.scrollWidth, ot = h.offsetWidth;
    x <= ot && (L.style.display = d);
  });
}
m.on(window, "load.uds.tabs", Z);
function tt() {
  function o() {
    const a = ".uds-table-fixed-wrapper", l = ".uds-table.uds-table-fixed table", n = ".scroll-control.previous";
    document.querySelectorAll(a).forEach((r, i) => {
      const c = r.querySelector(l);
      c.setAttribute("id", "uds-table-" + i);
      const d = c.querySelector("tbody tr > *"), f = r.querySelector(n);
      f.style.left = d.offsetWidth + "px";
    });
  }
  function t() {
    const a = ".uds-table-fixed", l = ".uds-table-fixed-wrapper", n = ".scroll-control.previous", e = ".scroll-control.next";
    document.querySelectorAll(l).forEach((i, c) => {
      const d = i.querySelector(a), f = i.querySelector(n), g = i.querySelector(e);
      ["click", "focus"].forEach((p) => {
        m.on(f, p, function() {
          d.scrollLeft -= 100;
        }), m.on(g, p, function() {
          d.scrollLeft += 100;
        });
      });
    });
  }
  function s(a, l) {
    let n;
    return (...e) => {
      clearTimeout(n), n = setTimeout(() => {
        a.apply(this, e);
      }, l);
    };
  }
  o(), t(), m.on(window, "resize", function() {
    s(o, 100)();
  });
}
m.on(window, "load.uds.fixed-table", tt);
function et() {
  const o = "video", t = ".uds-video-btn-play", s = ".uds-video-overlay", a = "click", l = "ended", n = "flex", e = "none", r = document.querySelector(o), i = document.querySelector(s), c = document.querySelector(t);
  function d(u) {
    u.style.display === e ? u.style.display = n : u.style.display = e;
  }
  function f(u) {
    u.paused ? u.play() : u.pause();
  }
  function g(u) {
    f(this), d(this.nextElementSibling);
  }
  function p(u) {
    u.stopPropagation();
    const E = this.parentNode;
    d(E), f(r);
  }
  function y(u) {
    d(this), f(r);
  }
  function h(u) {
    d(i);
  }
  r == null || r.addEventListener(a, g), c == null || c.addEventListener(a, p), i == null || i.addEventListener(a, y), r == null || r.addEventListener(l, h);
}
m.on(window, "load.uds.video", et);
const pt = {
  // Banner, // code updated to use bootstrap alert so we don't need this
  initAnchorMenu: z,
  initBlockquoteAnimation: j,
  initCalendar: G,
  initChart: U,
  initDataLayer: I,
  initFixedTable: tt,
  initGlobalHeader: B,
  initHeroesVideo: X,
  initImageParallax: Q,
  initModals: J,
  initRankingCard: K,
  initTabbedPanels: Z,
  initVideo: et,
  initCardBodies: $
};
export {
  pt as default
};
//# sourceMappingURL=unity-bootstrap.es.js.map
