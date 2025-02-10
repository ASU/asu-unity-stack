import yt, { useState as qr, useEffect as Jr } from "react";
import Qr from "react-dom";
function Vr(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ga, ia = Qr;
Ga = ia.createRoot, ia.hydrateRoot;
var Ya = { exports: {} }, Ye = {};
var sa;
function Kr() {
  if (sa) return Ye;
  sa = 1;
  var e = yt, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), a = Object.prototype.hasOwnProperty, r = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, o = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(l, c, u) {
    var p, y = {}, v = null, T = null;
    u !== void 0 && (v = "" + u), c.key !== void 0 && (v = "" + c.key), c.ref !== void 0 && (T = c.ref);
    for (p in c) a.call(c, p) && !o.hasOwnProperty(p) && (y[p] = c[p]);
    if (l && l.defaultProps) for (p in c = l.defaultProps, c) y[p] === void 0 && (y[p] = c[p]);
    return { $$typeof: t, type: l, key: v, ref: T, props: y, _owner: r.current };
  }
  return Ye.Fragment = n, Ye.jsx = s, Ye.jsxs = s, Ye;
}
Ya.exports = Kr();
var d = Ya.exports, qa = { exports: {} }, Gt, la;
function Zr() {
  if (la) return Gt;
  la = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Gt = e, Gt;
}
var Yt, ca;
function _r() {
  if (ca) return Yt;
  ca = 1;
  var e = Zr();
  function t() {
  }
  function n() {
  }
  return n.resetWarningCache = t, Yt = function() {
    function a(s, l, c, u, p, y) {
      if (y !== e) {
        var v = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw v.name = "Invariant Violation", v;
      }
    }
    a.isRequired = a;
    function r() {
      return a;
    }
    var o = {
      array: a,
      bigint: a,
      bool: a,
      func: a,
      number: a,
      object: a,
      string: a,
      symbol: a,
      any: a,
      arrayOf: r,
      element: a,
      elementType: a,
      instanceOf: r,
      node: a,
      objectOf: r,
      oneOf: r,
      oneOfType: r,
      shape: r,
      exact: r,
      checkPropTypes: n,
      resetWarningCache: t
    };
    return o.PropTypes = o, o;
  }, Yt;
}
qa.exports = _r()();
var G = qa.exports;
const g = /* @__PURE__ */ Vr(G);
function $r({
  packageName: e = "",
  component: t = "",
  type: n = "",
  configuration: a = {}
}) {
  if (!e || !t) {
    console.error("trackReactComponent: Missing required arguments.");
    return;
  }
  window.uds = window.uds || {}, window.uds.package = window.uds.package || {}, window.uds.package[e] = {
    component: t,
    type: n,
    configuration: a
  };
}
const eo = {
  prefix: "fas",
  iconName: "chevron-up",
  icon: [512, 512, [], "f077", "M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"]
};
var to = { env: { NODE_ENV: "production" } };
const fa = () => {
};
let Cn = {}, Ja = {}, Qa = null, Va = {
  mark: fa,
  measure: fa
};
try {
  typeof window < "u" && (Cn = window), typeof document < "u" && (Ja = document), typeof MutationObserver < "u" && (Qa = MutationObserver), typeof performance < "u" && (Va = performance);
} catch {
}
const {
  userAgent: ua = ""
} = Cn.navigator || {}, de = Cn, O = Ja, ma = Qa, ct = Va;
de.document;
const le = !!O.documentElement && !!O.head && typeof O.addEventListener == "function" && typeof O.createElement == "function", Ka = ~ua.indexOf("MSIE") || ~ua.indexOf("Trident/");
var x = "classic", Za = "duotone", Y = "sharp", q = "sharp-duotone", no = [x, Za, Y, q], ao = {
  classic: {
    900: "fas",
    400: "far",
    normal: "far",
    300: "fal",
    100: "fat"
  },
  sharp: {
    900: "fass",
    400: "fasr",
    300: "fasl",
    100: "fast"
  },
  "sharp-duotone": {
    900: "fasds"
  }
}, da = {
  kit: {
    fak: "kit",
    "fa-kit": "kit"
  },
  "kit-duotone": {
    fakd: "kit-duotone",
    "fa-kit-duotone": "kit-duotone"
  }
}, ro = ["kit"], oo = /fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/, io = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i, so = {
  "Font Awesome 5 Free": {
    900: "fas",
    400: "far"
  },
  "Font Awesome 5 Pro": {
    900: "fas",
    400: "far",
    normal: "far",
    300: "fal"
  },
  "Font Awesome 5 Brands": {
    400: "fab",
    normal: "fab"
  },
  "Font Awesome 5 Duotone": {
    900: "fad"
  }
}, lo = {
  "Font Awesome 6 Free": {
    900: "fas",
    400: "far"
  },
  "Font Awesome 6 Pro": {
    900: "fas",
    400: "far",
    normal: "far",
    300: "fal",
    100: "fat"
  },
  "Font Awesome 6 Brands": {
    400: "fab",
    normal: "fab"
  },
  "Font Awesome 6 Duotone": {
    900: "fad"
  },
  "Font Awesome 6 Sharp": {
    900: "fass",
    400: "fasr",
    normal: "fasr",
    300: "fasl",
    100: "fast"
  },
  "Font Awesome 6 Sharp Duotone": {
    900: "fasds"
  }
}, co = {
  classic: {
    "fa-brands": "fab",
    "fa-duotone": "fad",
    "fa-light": "fal",
    "fa-regular": "far",
    "fa-solid": "fas",
    "fa-thin": "fat"
  },
  sharp: {
    "fa-solid": "fass",
    "fa-regular": "fasr",
    "fa-light": "fasl",
    "fa-thin": "fast"
  },
  "sharp-duotone": {
    "fa-solid": "fasds"
  }
}, fo = {
  classic: ["fas", "far", "fal", "fat"],
  sharp: ["fass", "fasr", "fasl", "fast"],
  "sharp-duotone": ["fasds"]
}, uo = {
  classic: {
    fab: "fa-brands",
    fad: "fa-duotone",
    fal: "fa-light",
    far: "fa-regular",
    fas: "fa-solid",
    fat: "fa-thin"
  },
  sharp: {
    fass: "fa-solid",
    fasr: "fa-regular",
    fasl: "fa-light",
    fast: "fa-thin"
  },
  "sharp-duotone": {
    fasds: "fa-solid"
  }
}, mo = {
  classic: {
    solid: "fas",
    regular: "far",
    light: "fal",
    thin: "fat",
    duotone: "fad",
    brands: "fab"
  },
  sharp: {
    solid: "fass",
    regular: "fasr",
    light: "fasl",
    thin: "fast"
  },
  "sharp-duotone": {
    solid: "fasds"
  }
}, _a = {
  classic: {
    fa: "solid",
    fas: "solid",
    "fa-solid": "solid",
    far: "regular",
    "fa-regular": "regular",
    fal: "light",
    "fa-light": "light",
    fat: "thin",
    "fa-thin": "thin",
    fad: "duotone",
    "fa-duotone": "duotone",
    fab: "brands",
    "fa-brands": "brands"
  },
  sharp: {
    fa: "solid",
    fass: "solid",
    "fa-solid": "solid",
    fasr: "regular",
    "fa-regular": "regular",
    fasl: "light",
    "fa-light": "light",
    fast: "thin",
    "fa-thin": "thin"
  },
  "sharp-duotone": {
    fa: "solid",
    fasds: "solid",
    "fa-solid": "solid"
  }
}, po = ["solid", "regular", "light", "thin", "duotone", "brands"], $a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], go = $a.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), Ve = {
  GROUP: "duotone-group",
  SWAP_OPACITY: "swap-opacity",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, Ao = [...Object.keys(fo), ...po, "2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", Ve.GROUP, Ve.SWAP_OPACITY, Ve.PRIMARY, Ve.SECONDARY].concat($a.map((e) => "".concat(e, "x"))).concat(go.map((e) => "w-".concat(e))), ho = {
  "Font Awesome Kit": {
    400: "fak",
    normal: "fak"
  },
  "Font Awesome Kit Duotone": {
    400: "fakd",
    normal: "fakd"
  }
}, vo = {
  kit: {
    "fa-kit": "fak"
  },
  "kit-duotone": {
    "fa-kit-duotone": "fakd"
  }
}, bo = {
  kit: {
    fak: "fa-kit"
  },
  "kit-duotone": {
    fakd: "fa-kit-duotone"
  }
}, pa = {
  kit: {
    kit: "fak"
  },
  "kit-duotone": {
    "kit-duotone": "fakd"
  }
};
const ie = "___FONT_AWESOME___", rn = 16, er = "fa", tr = "svg-inline--fa", xe = "data-fa-i2svg", on = "data-fa-pseudo-element", yo = "data-fa-pseudo-element-pending", En = "data-prefix", Pn = "data-icon", ga = "fontawesome-i2svg", wo = "async", To = ["HTML", "HEAD", "STYLE", "SCRIPT"], nr = (() => {
  try {
    return to.env.NODE_ENV === "production";
  } catch {
    return !1;
  }
})(), ar = [x, Y, q];
function tt(e) {
  return new Proxy(e, {
    get(t, n) {
      return n in t ? t[n] : t[x];
    }
  });
}
const rr = {
  ..._a
};
rr[x] = {
  ..._a[x],
  ...da.kit,
  ...da["kit-duotone"]
};
const Te = tt(rr), sn = {
  ...mo
};
sn[x] = {
  ...sn[x],
  ...pa.kit,
  ...pa["kit-duotone"]
};
const $e = tt(sn), ln = {
  ...uo
};
ln[x] = {
  ...ln[x],
  ...bo.kit
};
const Oe = tt(ln), cn = {
  ...co
};
cn[x] = {
  ...cn[x],
  ...vo.kit
};
const Oo = tt(cn), xo = oo, or = "fa-layers-text", Co = io, Eo = {
  ...ao
};
tt(Eo);
const Po = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"], qt = Ve, je = /* @__PURE__ */ new Set();
Object.keys($e[x]).map(je.add.bind(je));
Object.keys($e[Y]).map(je.add.bind(je));
Object.keys($e[q]).map(je.add.bind(je));
const No = [...ro, ...Ao], Ze = de.FontAwesomeConfig || {};
function So(e) {
  var t = O.querySelector("script[" + e + "]");
  if (t)
    return t.getAttribute(e);
}
function Lo(e) {
  return e === "" ? !0 : e === "false" ? !1 : e === "true" ? !0 : e;
}
O && typeof O.querySelector == "function" && [["data-family-prefix", "familyPrefix"], ["data-css-prefix", "cssPrefix"], ["data-family-default", "familyDefault"], ["data-style-default", "styleDefault"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-auto-a11y", "autoA11y"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]].forEach((t) => {
  let [n, a] = t;
  const r = Lo(So(n));
  r != null && (Ze[a] = r);
});
const ir = {
  styleDefault: "solid",
  familyDefault: "classic",
  cssPrefix: er,
  replacementClass: tr,
  autoReplaceSvg: !0,
  autoAddCss: !0,
  autoA11y: !0,
  searchPseudoElements: !1,
  observeMutations: !0,
  mutateApproach: "async",
  keepOriginalSource: !0,
  measurePerformance: !1,
  showMissingIcons: !0
};
Ze.familyPrefix && (Ze.cssPrefix = Ze.familyPrefix);
const ze = {
  ...ir,
  ...Ze
};
ze.autoReplaceSvg || (ze.observeMutations = !1);
const A = {};
Object.keys(ir).forEach((e) => {
  Object.defineProperty(A, e, {
    enumerable: !0,
    set: function(t) {
      ze[e] = t, _e.forEach((n) => n(A));
    },
    get: function() {
      return ze[e];
    }
  });
});
Object.defineProperty(A, "familyPrefix", {
  enumerable: !0,
  set: function(e) {
    ze.cssPrefix = e, _e.forEach((t) => t(A));
  },
  get: function() {
    return ze.cssPrefix;
  }
});
de.FontAwesomeConfig = A;
const _e = [];
function Do(e) {
  return _e.push(e), () => {
    _e.splice(_e.indexOf(e), 1);
  };
}
const ce = rn, te = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: !1,
  flipY: !1
};
function ko(e) {
  if (!e || !le)
    return;
  const t = O.createElement("style");
  t.setAttribute("type", "text/css"), t.innerHTML = e;
  const n = O.head.childNodes;
  let a = null;
  for (let r = n.length - 1; r > -1; r--) {
    const o = n[r], s = (o.tagName || "").toUpperCase();
    ["STYLE", "LINK"].indexOf(s) > -1 && (a = o);
  }
  return O.head.insertBefore(t, a), e;
}
const Bo = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function et() {
  let e = 12, t = "";
  for (; e-- > 0; )
    t += Bo[Math.random() * 62 | 0];
  return t;
}
function Xe(e) {
  const t = [];
  for (let n = (e || []).length >>> 0; n--; )
    t[n] = e[n];
  return t;
}
function Nn(e) {
  return e.classList ? Xe(e.classList) : (e.getAttribute("class") || "").split(" ").filter((t) => t);
}
function sr(e) {
  return "".concat(e).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function Fo(e) {
  return Object.keys(e || {}).reduce((t, n) => t + "".concat(n, '="').concat(sr(e[n]), '" '), "").trim();
}
function wt(e) {
  return Object.keys(e || {}).reduce((t, n) => t + "".concat(n, ": ").concat(e[n].trim(), ";"), "");
}
function Sn(e) {
  return e.size !== te.size || e.x !== te.x || e.y !== te.y || e.rotate !== te.rotate || e.flipX || e.flipY;
}
function Mo(e) {
  let {
    transform: t,
    containerWidth: n,
    iconWidth: a
  } = e;
  const r = {
    transform: "translate(".concat(n / 2, " 256)")
  }, o = "translate(".concat(t.x * 32, ", ").concat(t.y * 32, ") "), s = "scale(".concat(t.size / 16 * (t.flipX ? -1 : 1), ", ").concat(t.size / 16 * (t.flipY ? -1 : 1), ") "), l = "rotate(".concat(t.rotate, " 0 0)"), c = {
    transform: "".concat(o, " ").concat(s, " ").concat(l)
  }, u = {
    transform: "translate(".concat(a / 2 * -1, " -256)")
  };
  return {
    outer: r,
    inner: c,
    path: u
  };
}
function Io(e) {
  let {
    transform: t,
    width: n = rn,
    height: a = rn,
    startCentered: r = !1
  } = e, o = "";
  return r && Ka ? o += "translate(".concat(t.x / ce - n / 2, "em, ").concat(t.y / ce - a / 2, "em) ") : r ? o += "translate(calc(-50% + ".concat(t.x / ce, "em), calc(-50% + ").concat(t.y / ce, "em)) ") : o += "translate(".concat(t.x / ce, "em, ").concat(t.y / ce, "em) "), o += "scale(".concat(t.size / ce * (t.flipX ? -1 : 1), ", ").concat(t.size / ce * (t.flipY ? -1 : 1), ") "), o += "rotate(".concat(t.rotate, "deg) "), o;
}
var Ro = `:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;
function lr() {
  const e = er, t = tr, n = A.cssPrefix, a = A.replacementClass;
  let r = Ro;
  if (n !== e || a !== t) {
    const o = new RegExp("\\.".concat(e, "\\-"), "g"), s = new RegExp("\\--".concat(e, "\\-"), "g"), l = new RegExp("\\.".concat(t), "g");
    r = r.replace(o, ".".concat(n, "-")).replace(s, "--".concat(n, "-")).replace(l, ".".concat(a));
  }
  return r;
}
let Aa = !1;
function Jt() {
  A.autoAddCss && !Aa && (ko(lr()), Aa = !0);
}
var Ho = {
  mixout() {
    return {
      dom: {
        css: lr,
        insertCss: Jt
      }
    };
  },
  hooks() {
    return {
      beforeDOMElementCreation() {
        Jt();
      },
      beforeI2svg() {
        Jt();
      }
    };
  }
};
const se = de || {};
se[ie] || (se[ie] = {});
se[ie].styles || (se[ie].styles = {});
se[ie].hooks || (se[ie].hooks = {});
se[ie].shims || (se[ie].shims = []);
var ne = se[ie];
const cr = [], fr = function() {
  O.removeEventListener("DOMContentLoaded", fr), At = 1, cr.map((e) => e());
};
let At = !1;
le && (At = (O.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(O.readyState), At || O.addEventListener("DOMContentLoaded", fr));
function jo(e) {
  le && (At ? setTimeout(e, 0) : cr.push(e));
}
function nt(e) {
  const {
    tag: t,
    attributes: n = {},
    children: a = []
  } = e;
  return typeof e == "string" ? sr(e) : "<".concat(t, " ").concat(Fo(n), ">").concat(a.map(nt).join(""), "</").concat(t, ">");
}
function ha(e, t, n) {
  if (e && e[t] && e[t][n])
    return {
      prefix: t,
      iconName: n,
      icon: e[t][n]
    };
}
var Qt = function(t, n, a, r) {
  var o = Object.keys(t), s = o.length, l = n, c, u, p;
  for (a === void 0 ? (c = 1, p = t[o[0]]) : (c = 0, p = a); c < s; c++)
    u = o[c], p = l(p, t[u], u, t);
  return p;
};
function zo(e) {
  const t = [];
  let n = 0;
  const a = e.length;
  for (; n < a; ) {
    const r = e.charCodeAt(n++);
    if (r >= 55296 && r <= 56319 && n < a) {
      const o = e.charCodeAt(n++);
      (o & 64512) == 56320 ? t.push(((r & 1023) << 10) + (o & 1023) + 65536) : (t.push(r), n--);
    } else
      t.push(r);
  }
  return t;
}
function fn(e) {
  const t = zo(e);
  return t.length === 1 ? t[0].toString(16) : null;
}
function Xo(e, t) {
  const n = e.length;
  let a = e.charCodeAt(t), r;
  return a >= 55296 && a <= 56319 && n > t + 1 && (r = e.charCodeAt(t + 1), r >= 56320 && r <= 57343) ? (a - 55296) * 1024 + r - 56320 + 65536 : a;
}
function va(e) {
  return Object.keys(e).reduce((t, n) => {
    const a = e[n];
    return !!a.icon ? t[a.iconName] = a.icon : t[n] = a, t;
  }, {});
}
function un(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const {
    skipHooks: a = !1
  } = n, r = va(t);
  typeof ne.hooks.addPack == "function" && !a ? ne.hooks.addPack(e, va(t)) : ne.styles[e] = {
    ...ne.styles[e] || {},
    ...r
  }, e === "fas" && un("fa", t);
}
const {
  styles: we,
  shims: Wo
} = ne, Uo = {
  [x]: Object.values(Oe[x]),
  [Y]: Object.values(Oe[Y]),
  [q]: Object.values(Oe[q])
};
let Ln = null, ur = {}, mr = {}, dr = {}, pr = {}, gr = {};
const Go = {
  [x]: Object.keys(Te[x]),
  [Y]: Object.keys(Te[Y]),
  [q]: Object.keys(Te[q])
};
function Yo(e) {
  return ~No.indexOf(e);
}
function qo(e, t) {
  const n = t.split("-"), a = n[0], r = n.slice(1).join("-");
  return a === e && r !== "" && !Yo(r) ? r : null;
}
const Ar = () => {
  const e = (a) => Qt(we, (r, o, s) => (r[s] = Qt(o, a, {}), r), {});
  ur = e((a, r, o) => (r[3] && (a[r[3]] = o), r[2] && r[2].filter((l) => typeof l == "number").forEach((l) => {
    a[l.toString(16)] = o;
  }), a)), mr = e((a, r, o) => (a[o] = o, r[2] && r[2].filter((l) => typeof l == "string").forEach((l) => {
    a[l] = o;
  }), a)), gr = e((a, r, o) => {
    const s = r[2];
    return a[o] = o, s.forEach((l) => {
      a[l] = o;
    }), a;
  });
  const t = "far" in we || A.autoFetchSvg, n = Qt(Wo, (a, r) => {
    const o = r[0];
    let s = r[1];
    const l = r[2];
    return s === "far" && !t && (s = "fas"), typeof o == "string" && (a.names[o] = {
      prefix: s,
      iconName: l
    }), typeof o == "number" && (a.unicodes[o.toString(16)] = {
      prefix: s,
      iconName: l
    }), a;
  }, {
    names: {},
    unicodes: {}
  });
  dr = n.names, pr = n.unicodes, Ln = Tt(A.styleDefault, {
    family: A.familyDefault
  });
};
Do((e) => {
  Ln = Tt(e.styleDefault, {
    family: A.familyDefault
  });
});
Ar();
function Dn(e, t) {
  return (ur[e] || {})[t];
}
function Jo(e, t) {
  return (mr[e] || {})[t];
}
function me(e, t) {
  return (gr[e] || {})[t];
}
function hr(e) {
  return dr[e] || {
    prefix: null,
    iconName: null
  };
}
function Qo(e) {
  const t = pr[e], n = Dn("fas", e);
  return t || (n ? {
    prefix: "fas",
    iconName: n
  } : null) || {
    prefix: null,
    iconName: null
  };
}
function pe() {
  return Ln;
}
const kn = () => ({
  prefix: null,
  iconName: null,
  rest: []
});
function Tt(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    family: n = x
  } = t, a = Te[n][e], r = $e[n][e] || $e[n][a], o = e in ne.styles ? e : null;
  return r || o || null;
}
const Vo = {
  [x]: Object.keys(Oe[x]),
  [Y]: Object.keys(Oe[Y]),
  [q]: Object.keys(Oe[q])
};
function Ot(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    skipLookups: n = !1
  } = t, a = {
    [x]: "".concat(A.cssPrefix, "-").concat(x),
    [Y]: "".concat(A.cssPrefix, "-").concat(Y),
    [q]: "".concat(A.cssPrefix, "-").concat(q)
  };
  let r = null, o = x;
  const s = no.filter((c) => c !== Za);
  s.forEach((c) => {
    (e.includes(a[c]) || e.some((u) => Vo[c].includes(u))) && (o = c);
  });
  const l = e.reduce((c, u) => {
    const p = qo(A.cssPrefix, u);
    if (we[u] ? (u = Uo[o].includes(u) ? Oo[o][u] : u, r = u, c.prefix = u) : Go[o].indexOf(u) > -1 ? (r = u, c.prefix = Tt(u, {
      family: o
    })) : p ? c.iconName = p : u !== A.replacementClass && !s.some((y) => u === a[y]) && c.rest.push(u), !n && c.prefix && c.iconName) {
      const y = r === "fa" ? hr(c.iconName) : {}, v = me(c.prefix, c.iconName);
      y.prefix && (r = null), c.iconName = y.iconName || v || c.iconName, c.prefix = y.prefix || c.prefix, c.prefix === "far" && !we.far && we.fas && !A.autoFetchSvg && (c.prefix = "fas");
    }
    return c;
  }, kn());
  return (e.includes("fa-brands") || e.includes("fab")) && (l.prefix = "fab"), (e.includes("fa-duotone") || e.includes("fad")) && (l.prefix = "fad"), !l.prefix && o === Y && (we.fass || A.autoFetchSvg) && (l.prefix = "fass", l.iconName = me(l.prefix, l.iconName) || l.iconName), !l.prefix && o === q && (we.fasds || A.autoFetchSvg) && (l.prefix = "fasds", l.iconName = me(l.prefix, l.iconName) || l.iconName), (l.prefix === "fa" || r === "fa") && (l.prefix = pe() || "fas"), l;
}
class Ko {
  constructor() {
    this.definitions = {};
  }
  add() {
    for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++)
      n[a] = arguments[a];
    const r = n.reduce(this._pullDefinitions, {});
    Object.keys(r).forEach((o) => {
      this.definitions[o] = {
        ...this.definitions[o] || {},
        ...r[o]
      }, un(o, r[o]);
      const s = Oe[x][o];
      s && un(s, r[o]), Ar();
    });
  }
  reset() {
    this.definitions = {};
  }
  _pullDefinitions(t, n) {
    const a = n.prefix && n.iconName && n.icon ? {
      0: n
    } : n;
    return Object.keys(a).map((r) => {
      const {
        prefix: o,
        iconName: s,
        icon: l
      } = a[r], c = l[2];
      t[o] || (t[o] = {}), c.length > 0 && c.forEach((u) => {
        typeof u == "string" && (t[o][u] = l);
      }), t[o][s] = l;
    }), t;
  }
}
let ba = [], Ie = {};
const He = {}, Zo = Object.keys(He);
function _o(e, t) {
  let {
    mixoutsTo: n
  } = t;
  return ba = e, Ie = {}, Object.keys(He).forEach((a) => {
    Zo.indexOf(a) === -1 && delete He[a];
  }), ba.forEach((a) => {
    const r = a.mixout ? a.mixout() : {};
    if (Object.keys(r).forEach((o) => {
      typeof r[o] == "function" && (n[o] = r[o]), typeof r[o] == "object" && Object.keys(r[o]).forEach((s) => {
        n[o] || (n[o] = {}), n[o][s] = r[o][s];
      });
    }), a.hooks) {
      const o = a.hooks();
      Object.keys(o).forEach((s) => {
        Ie[s] || (Ie[s] = []), Ie[s].push(o[s]);
      });
    }
    a.provides && a.provides(He);
  }), n;
}
function mn(e, t) {
  for (var n = arguments.length, a = new Array(n > 2 ? n - 2 : 0), r = 2; r < n; r++)
    a[r - 2] = arguments[r];
  return (Ie[e] || []).forEach((s) => {
    t = s.apply(null, [t, ...a]);
  }), t;
}
function Ce(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++)
    n[a - 1] = arguments[a];
  (Ie[e] || []).forEach((o) => {
    o.apply(null, n);
  });
}
function ge() {
  const e = arguments[0], t = Array.prototype.slice.call(arguments, 1);
  return He[e] ? He[e].apply(null, t) : void 0;
}
function dn(e) {
  e.prefix === "fa" && (e.prefix = "fas");
  let {
    iconName: t
  } = e;
  const n = e.prefix || pe();
  if (t)
    return t = me(n, t) || t, ha(vr.definitions, n, t) || ha(ne.styles, n, t);
}
const vr = new Ko(), $o = () => {
  A.autoReplaceSvg = !1, A.observeMutations = !1, Ce("noAuto");
}, ei = {
  i2svg: function() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return le ? (Ce("beforeI2svg", e), ge("pseudoElements2svg", e), ge("i2svg", e)) : Promise.reject(new Error("Operation requires a DOM of some kind."));
  },
  watch: function() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const {
      autoReplaceSvgRoot: t
    } = e;
    A.autoReplaceSvg === !1 && (A.autoReplaceSvg = !0), A.observeMutations = !0, jo(() => {
      ni({
        autoReplaceSvgRoot: t
      }), Ce("watch", e);
    });
  }
}, ti = {
  icon: (e) => {
    if (e === null)
      return null;
    if (typeof e == "object" && e.prefix && e.iconName)
      return {
        prefix: e.prefix,
        iconName: me(e.prefix, e.iconName) || e.iconName
      };
    if (Array.isArray(e) && e.length === 2) {
      const t = e[1].indexOf("fa-") === 0 ? e[1].slice(3) : e[1], n = Tt(e[0]);
      return {
        prefix: n,
        iconName: me(n, t) || t
      };
    }
    if (typeof e == "string" && (e.indexOf("".concat(A.cssPrefix, "-")) > -1 || e.match(xo))) {
      const t = Ot(e.split(" "), {
        skipLookups: !0
      });
      return {
        prefix: t.prefix || pe(),
        iconName: me(t.prefix, t.iconName) || t.iconName
      };
    }
    if (typeof e == "string") {
      const t = pe();
      return {
        prefix: t,
        iconName: me(t, e) || e
      };
    }
  }
}, J = {
  noAuto: $o,
  config: A,
  dom: ei,
  parse: ti,
  library: vr,
  findIconDefinition: dn,
  toHtml: nt
}, ni = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const {
    autoReplaceSvgRoot: t = O
  } = e;
  (Object.keys(ne.styles).length > 0 || A.autoFetchSvg) && le && A.autoReplaceSvg && J.dom.i2svg({
    node: t
  });
};
function xt(e, t) {
  return Object.defineProperty(e, "abstract", {
    get: t
  }), Object.defineProperty(e, "html", {
    get: function() {
      return e.abstract.map((n) => nt(n));
    }
  }), Object.defineProperty(e, "node", {
    get: function() {
      if (!le) return;
      const n = O.createElement("div");
      return n.innerHTML = e.html, n.children;
    }
  }), e;
}
function ai(e) {
  let {
    children: t,
    main: n,
    mask: a,
    attributes: r,
    styles: o,
    transform: s
  } = e;
  if (Sn(s) && n.found && !a.found) {
    const {
      width: l,
      height: c
    } = n, u = {
      x: l / c / 2,
      y: 0.5
    };
    r.style = wt({
      ...o,
      "transform-origin": "".concat(u.x + s.x / 16, "em ").concat(u.y + s.y / 16, "em")
    });
  }
  return [{
    tag: "svg",
    attributes: r,
    children: t
  }];
}
function ri(e) {
  let {
    prefix: t,
    iconName: n,
    children: a,
    attributes: r,
    symbol: o
  } = e;
  const s = o === !0 ? "".concat(t, "-").concat(A.cssPrefix, "-").concat(n) : o;
  return [{
    tag: "svg",
    attributes: {
      style: "display: none;"
    },
    children: [{
      tag: "symbol",
      attributes: {
        ...r,
        id: s
      },
      children: a
    }]
  }];
}
function Bn(e) {
  const {
    icons: {
      main: t,
      mask: n
    },
    prefix: a,
    iconName: r,
    transform: o,
    symbol: s,
    title: l,
    maskId: c,
    titleId: u,
    extra: p,
    watchable: y = !1
  } = e, {
    width: v,
    height: T
  } = n.found ? n : t, k = a === "fak", U = [A.replacementClass, r ? "".concat(A.cssPrefix, "-").concat(r) : ""].filter((z) => p.classes.indexOf(z) === -1).filter((z) => z !== "" || !!z).concat(p.classes).join(" ");
  let C = {
    children: [],
    attributes: {
      ...p.attributes,
      "data-prefix": a,
      "data-icon": r,
      class: U,
      role: p.attributes.role || "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 ".concat(v, " ").concat(T)
    }
  };
  const S = k && !~p.classes.indexOf("fa-fw") ? {
    width: "".concat(v / T * 16 * 0.0625, "em")
  } : {};
  y && (C.attributes[xe] = ""), l && (C.children.push({
    tag: "title",
    attributes: {
      id: C.attributes["aria-labelledby"] || "title-".concat(u || et())
    },
    children: [l]
  }), delete C.attributes.title);
  const E = {
    ...C,
    prefix: a,
    iconName: r,
    main: t,
    mask: n,
    maskId: c,
    transform: o,
    symbol: s,
    styles: {
      ...S,
      ...p.styles
    }
  }, {
    children: L,
    attributes: P
  } = n.found && t.found ? ge("generateAbstractMask", E) || {
    children: [],
    attributes: {}
  } : ge("generateAbstractIcon", E) || {
    children: [],
    attributes: {}
  };
  return E.children = L, E.attributes = P, s ? ri(E) : ai(E);
}
function ya(e) {
  const {
    content: t,
    width: n,
    height: a,
    transform: r,
    title: o,
    extra: s,
    watchable: l = !1
  } = e, c = {
    ...s.attributes,
    ...o ? {
      title: o
    } : {},
    class: s.classes.join(" ")
  };
  l && (c[xe] = "");
  const u = {
    ...s.styles
  };
  Sn(r) && (u.transform = Io({
    transform: r,
    startCentered: !0,
    width: n,
    height: a
  }), u["-webkit-transform"] = u.transform);
  const p = wt(u);
  p.length > 0 && (c.style = p);
  const y = [];
  return y.push({
    tag: "span",
    attributes: c,
    children: [t]
  }), o && y.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [o]
  }), y;
}
function oi(e) {
  const {
    content: t,
    title: n,
    extra: a
  } = e, r = {
    ...a.attributes,
    ...n ? {
      title: n
    } : {},
    class: a.classes.join(" ")
  }, o = wt(a.styles);
  o.length > 0 && (r.style = o);
  const s = [];
  return s.push({
    tag: "span",
    attributes: r,
    children: [t]
  }), n && s.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [n]
  }), s;
}
const {
  styles: Vt
} = ne;
function pn(e) {
  const t = e[0], n = e[1], [a] = e.slice(4);
  let r = null;
  return Array.isArray(a) ? r = {
    tag: "g",
    attributes: {
      class: "".concat(A.cssPrefix, "-").concat(qt.GROUP)
    },
    children: [{
      tag: "path",
      attributes: {
        class: "".concat(A.cssPrefix, "-").concat(qt.SECONDARY),
        fill: "currentColor",
        d: a[0]
      }
    }, {
      tag: "path",
      attributes: {
        class: "".concat(A.cssPrefix, "-").concat(qt.PRIMARY),
        fill: "currentColor",
        d: a[1]
      }
    }]
  } : r = {
    tag: "path",
    attributes: {
      fill: "currentColor",
      d: a
    }
  }, {
    found: !0,
    width: t,
    height: n,
    icon: r
  };
}
const ii = {
  found: !1,
  width: 512,
  height: 512
};
function si(e, t) {
  !nr && !A.showMissingIcons && e && console.error('Icon with name "'.concat(e, '" and prefix "').concat(t, '" is missing.'));
}
function gn(e, t) {
  let n = t;
  return t === "fa" && A.styleDefault !== null && (t = pe()), new Promise((a, r) => {
    if (n === "fa") {
      const o = hr(e) || {};
      e = o.iconName || e, t = o.prefix || t;
    }
    if (e && t && Vt[t] && Vt[t][e]) {
      const o = Vt[t][e];
      return a(pn(o));
    }
    si(e, t), a({
      ...ii,
      icon: A.showMissingIcons && e ? ge("missingIconAbstract") || {} : {}
    });
  });
}
const wa = () => {
}, An = A.measurePerformance && ct && ct.mark && ct.measure ? ct : {
  mark: wa,
  measure: wa
}, Ke = 'FA "6.6.0"', li = (e) => (An.mark("".concat(Ke, " ").concat(e, " begins")), () => br(e)), br = (e) => {
  An.mark("".concat(Ke, " ").concat(e, " ends")), An.measure("".concat(Ke, " ").concat(e), "".concat(Ke, " ").concat(e, " begins"), "".concat(Ke, " ").concat(e, " ends"));
};
var Fn = {
  begin: li,
  end: br
};
const mt = () => {
};
function Ta(e) {
  return typeof (e.getAttribute ? e.getAttribute(xe) : null) == "string";
}
function ci(e) {
  const t = e.getAttribute ? e.getAttribute(En) : null, n = e.getAttribute ? e.getAttribute(Pn) : null;
  return t && n;
}
function fi(e) {
  return e && e.classList && e.classList.contains && e.classList.contains(A.replacementClass);
}
function ui() {
  return A.autoReplaceSvg === !0 ? dt.replace : dt[A.autoReplaceSvg] || dt.replace;
}
function mi(e) {
  return O.createElementNS("http://www.w3.org/2000/svg", e);
}
function di(e) {
  return O.createElement(e);
}
function yr(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    ceFn: n = e.tag === "svg" ? mi : di
  } = t;
  if (typeof e == "string")
    return O.createTextNode(e);
  const a = n(e.tag);
  return Object.keys(e.attributes || []).forEach(function(o) {
    a.setAttribute(o, e.attributes[o]);
  }), (e.children || []).forEach(function(o) {
    a.appendChild(yr(o, {
      ceFn: n
    }));
  }), a;
}
function pi(e) {
  let t = " ".concat(e.outerHTML, " ");
  return t = "".concat(t, "Font Awesome fontawesome.com "), t;
}
const dt = {
  replace: function(e) {
    const t = e[0];
    if (t.parentNode)
      if (e[1].forEach((n) => {
        t.parentNode.insertBefore(yr(n), t);
      }), t.getAttribute(xe) === null && A.keepOriginalSource) {
        let n = O.createComment(pi(t));
        t.parentNode.replaceChild(n, t);
      } else
        t.remove();
  },
  nest: function(e) {
    const t = e[0], n = e[1];
    if (~Nn(t).indexOf(A.replacementClass))
      return dt.replace(e);
    const a = new RegExp("".concat(A.cssPrefix, "-.*"));
    if (delete n[0].attributes.id, n[0].attributes.class) {
      const o = n[0].attributes.class.split(" ").reduce((s, l) => (l === A.replacementClass || l.match(a) ? s.toSvg.push(l) : s.toNode.push(l), s), {
        toNode: [],
        toSvg: []
      });
      n[0].attributes.class = o.toSvg.join(" "), o.toNode.length === 0 ? t.removeAttribute("class") : t.setAttribute("class", o.toNode.join(" "));
    }
    const r = n.map((o) => nt(o)).join(`
`);
    t.setAttribute(xe, ""), t.innerHTML = r;
  }
};
function Oa(e) {
  e();
}
function wr(e, t) {
  const n = typeof t == "function" ? t : mt;
  if (e.length === 0)
    n();
  else {
    let a = Oa;
    A.mutateApproach === wo && (a = de.requestAnimationFrame || Oa), a(() => {
      const r = ui(), o = Fn.begin("mutate");
      e.map(r), o(), n();
    });
  }
}
let Mn = !1;
function Tr() {
  Mn = !0;
}
function hn() {
  Mn = !1;
}
let ht = null;
function xa(e) {
  if (!ma || !A.observeMutations)
    return;
  const {
    treeCallback: t = mt,
    nodeCallback: n = mt,
    pseudoElementsCallback: a = mt,
    observeMutationsRoot: r = O
  } = e;
  ht = new ma((o) => {
    if (Mn) return;
    const s = pe();
    Xe(o).forEach((l) => {
      if (l.type === "childList" && l.addedNodes.length > 0 && !Ta(l.addedNodes[0]) && (A.searchPseudoElements && a(l.target), t(l.target)), l.type === "attributes" && l.target.parentNode && A.searchPseudoElements && a(l.target.parentNode), l.type === "attributes" && Ta(l.target) && ~Po.indexOf(l.attributeName))
        if (l.attributeName === "class" && ci(l.target)) {
          const {
            prefix: c,
            iconName: u
          } = Ot(Nn(l.target));
          l.target.setAttribute(En, c || s), u && l.target.setAttribute(Pn, u);
        } else fi(l.target) && n(l.target);
    });
  }), le && ht.observe(r, {
    childList: !0,
    attributes: !0,
    characterData: !0,
    subtree: !0
  });
}
function gi() {
  ht && ht.disconnect();
}
function Ai(e) {
  const t = e.getAttribute("style");
  let n = [];
  return t && (n = t.split(";").reduce((a, r) => {
    const o = r.split(":"), s = o[0], l = o.slice(1);
    return s && l.length > 0 && (a[s] = l.join(":").trim()), a;
  }, {})), n;
}
function hi(e) {
  const t = e.getAttribute("data-prefix"), n = e.getAttribute("data-icon"), a = e.innerText !== void 0 ? e.innerText.trim() : "";
  let r = Ot(Nn(e));
  return r.prefix || (r.prefix = pe()), t && n && (r.prefix = t, r.iconName = n), r.iconName && r.prefix || (r.prefix && a.length > 0 && (r.iconName = Jo(r.prefix, e.innerText) || Dn(r.prefix, fn(e.innerText))), !r.iconName && A.autoFetchSvg && e.firstChild && e.firstChild.nodeType === Node.TEXT_NODE && (r.iconName = e.firstChild.data)), r;
}
function vi(e) {
  const t = Xe(e.attributes).reduce((r, o) => (r.name !== "class" && r.name !== "style" && (r[o.name] = o.value), r), {}), n = e.getAttribute("title"), a = e.getAttribute("data-fa-title-id");
  return A.autoA11y && (n ? t["aria-labelledby"] = "".concat(A.replacementClass, "-title-").concat(a || et()) : (t["aria-hidden"] = "true", t.focusable = "false")), t;
}
function bi() {
  return {
    iconName: null,
    title: null,
    titleId: null,
    prefix: null,
    transform: te,
    symbol: !1,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    extra: {
      classes: [],
      styles: {},
      attributes: {}
    }
  };
}
function Ca(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    styleParser: !0
  };
  const {
    iconName: n,
    prefix: a,
    rest: r
  } = hi(e), o = vi(e), s = mn("parseNodeAttributes", {}, e);
  let l = t.styleParser ? Ai(e) : [];
  return {
    iconName: n,
    title: e.getAttribute("title"),
    titleId: e.getAttribute("data-fa-title-id"),
    prefix: a,
    transform: te,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    symbol: !1,
    extra: {
      classes: r,
      styles: l,
      attributes: o
    },
    ...s
  };
}
const {
  styles: yi
} = ne;
function Or(e) {
  const t = A.autoReplaceSvg === "nest" ? Ca(e, {
    styleParser: !1
  }) : Ca(e);
  return ~t.extra.classes.indexOf(or) ? ge("generateLayersText", e, t) : ge("generateSvgReplacementMutation", e, t);
}
let ae = /* @__PURE__ */ new Set();
ar.map((e) => {
  ae.add("fa-".concat(e));
});
Object.keys(Te[x]).map(ae.add.bind(ae));
Object.keys(Te[Y]).map(ae.add.bind(ae));
Object.keys(Te[q]).map(ae.add.bind(ae));
ae = [...ae];
function Ea(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!le) return Promise.resolve();
  const n = O.documentElement.classList, a = (p) => n.add("".concat(ga, "-").concat(p)), r = (p) => n.remove("".concat(ga, "-").concat(p)), o = A.autoFetchSvg ? ae : ar.map((p) => "fa-".concat(p)).concat(Object.keys(yi));
  o.includes("fa") || o.push("fa");
  const s = [".".concat(or, ":not([").concat(xe, "])")].concat(o.map((p) => ".".concat(p, ":not([").concat(xe, "])"))).join(", ");
  if (s.length === 0)
    return Promise.resolve();
  let l = [];
  try {
    l = Xe(e.querySelectorAll(s));
  } catch {
  }
  if (l.length > 0)
    a("pending"), r("complete");
  else
    return Promise.resolve();
  const c = Fn.begin("onTree"), u = l.reduce((p, y) => {
    try {
      const v = Or(y);
      v && p.push(v);
    } catch (v) {
      nr || v.name === "MissingIcon" && console.error(v);
    }
    return p;
  }, []);
  return new Promise((p, y) => {
    Promise.all(u).then((v) => {
      wr(v, () => {
        a("active"), a("complete"), r("pending"), typeof t == "function" && t(), c(), p();
      });
    }).catch((v) => {
      c(), y(v);
    });
  });
}
function wi(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  Or(e).then((n) => {
    n && wr([n], t);
  });
}
function Ti(e) {
  return function(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const a = (t || {}).icon ? t : dn(t || {});
    let {
      mask: r
    } = n;
    return r && (r = (r || {}).icon ? r : dn(r || {})), e(a, {
      ...n,
      mask: r
    });
  };
}
const Oi = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    transform: n = te,
    symbol: a = !1,
    mask: r = null,
    maskId: o = null,
    title: s = null,
    titleId: l = null,
    classes: c = [],
    attributes: u = {},
    styles: p = {}
  } = t;
  if (!e) return;
  const {
    prefix: y,
    iconName: v,
    icon: T
  } = e;
  return xt({
    type: "icon",
    ...e
  }, () => (Ce("beforeDOMElementCreation", {
    iconDefinition: e,
    params: t
  }), A.autoA11y && (s ? u["aria-labelledby"] = "".concat(A.replacementClass, "-title-").concat(l || et()) : (u["aria-hidden"] = "true", u.focusable = "false")), Bn({
    icons: {
      main: pn(T),
      mask: r ? pn(r.icon) : {
        found: !1,
        width: null,
        height: null,
        icon: {}
      }
    },
    prefix: y,
    iconName: v,
    transform: {
      ...te,
      ...n
    },
    symbol: a,
    title: s,
    maskId: o,
    titleId: l,
    extra: {
      attributes: u,
      styles: p,
      classes: c
    }
  })));
};
var xi = {
  mixout() {
    return {
      icon: Ti(Oi)
    };
  },
  hooks() {
    return {
      mutationObserverCallbacks(e) {
        return e.treeCallback = Ea, e.nodeCallback = wi, e;
      }
    };
  },
  provides(e) {
    e.i2svg = function(t) {
      const {
        node: n = O,
        callback: a = () => {
        }
      } = t;
      return Ea(n, a);
    }, e.generateSvgReplacementMutation = function(t, n) {
      const {
        iconName: a,
        title: r,
        titleId: o,
        prefix: s,
        transform: l,
        symbol: c,
        mask: u,
        maskId: p,
        extra: y
      } = n;
      return new Promise((v, T) => {
        Promise.all([gn(a, s), u.iconName ? gn(u.iconName, u.prefix) : Promise.resolve({
          found: !1,
          width: 512,
          height: 512,
          icon: {}
        })]).then((k) => {
          let [U, C] = k;
          v([t, Bn({
            icons: {
              main: U,
              mask: C
            },
            prefix: s,
            iconName: a,
            transform: l,
            symbol: c,
            maskId: p,
            title: r,
            titleId: o,
            extra: y,
            watchable: !0
          })]);
        }).catch(T);
      });
    }, e.generateAbstractIcon = function(t) {
      let {
        children: n,
        attributes: a,
        main: r,
        transform: o,
        styles: s
      } = t;
      const l = wt(s);
      l.length > 0 && (a.style = l);
      let c;
      return Sn(o) && (c = ge("generateAbstractTransformGrouping", {
        main: r,
        transform: o,
        containerWidth: r.width,
        iconWidth: r.width
      })), n.push(c || r.icon), {
        children: n,
        attributes: a
      };
    };
  }
}, Ci = {
  mixout() {
    return {
      layer(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          classes: n = []
        } = t;
        return xt({
          type: "layer"
        }, () => {
          Ce("beforeDOMElementCreation", {
            assembler: e,
            params: t
          });
          let a = [];
          return e((r) => {
            Array.isArray(r) ? r.map((o) => {
              a = a.concat(o.abstract);
            }) : a = a.concat(r.abstract);
          }), [{
            tag: "span",
            attributes: {
              class: ["".concat(A.cssPrefix, "-layers"), ...n].join(" ")
            },
            children: a
          }];
        });
      }
    };
  }
}, Ei = {
  mixout() {
    return {
      counter(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          title: n = null,
          classes: a = [],
          attributes: r = {},
          styles: o = {}
        } = t;
        return xt({
          type: "counter",
          content: e
        }, () => (Ce("beforeDOMElementCreation", {
          content: e,
          params: t
        }), oi({
          content: e.toString(),
          title: n,
          extra: {
            attributes: r,
            styles: o,
            classes: ["".concat(A.cssPrefix, "-layers-counter"), ...a]
          }
        })));
      }
    };
  }
}, Pi = {
  mixout() {
    return {
      text(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          transform: n = te,
          title: a = null,
          classes: r = [],
          attributes: o = {},
          styles: s = {}
        } = t;
        return xt({
          type: "text",
          content: e
        }, () => (Ce("beforeDOMElementCreation", {
          content: e,
          params: t
        }), ya({
          content: e,
          transform: {
            ...te,
            ...n
          },
          title: a,
          extra: {
            attributes: o,
            styles: s,
            classes: ["".concat(A.cssPrefix, "-layers-text"), ...r]
          }
        })));
      }
    };
  },
  provides(e) {
    e.generateLayersText = function(t, n) {
      const {
        title: a,
        transform: r,
        extra: o
      } = n;
      let s = null, l = null;
      if (Ka) {
        const c = parseInt(getComputedStyle(t).fontSize, 10), u = t.getBoundingClientRect();
        s = u.width / c, l = u.height / c;
      }
      return A.autoA11y && !a && (o.attributes["aria-hidden"] = "true"), Promise.resolve([t, ya({
        content: t.innerHTML,
        width: s,
        height: l,
        transform: r,
        title: a,
        extra: o,
        watchable: !0
      })]);
    };
  }
};
const Ni = new RegExp('"', "ug"), Pa = [1105920, 1112319], Na = {
  FontAwesome: {
    normal: "fas",
    400: "fas"
  },
  ...lo,
  ...so,
  ...ho
}, vn = Object.keys(Na).reduce((e, t) => (e[t.toLowerCase()] = Na[t], e), {}), Si = Object.keys(vn).reduce((e, t) => {
  const n = vn[t];
  return e[t] = n[900] || [...Object.entries(n)][0][1], e;
}, {});
function Li(e) {
  const t = e.replace(Ni, ""), n = Xo(t, 0), a = n >= Pa[0] && n <= Pa[1], r = t.length === 2 ? t[0] === t[1] : !1;
  return {
    value: fn(r ? t[0] : t),
    isSecondary: a || r
  };
}
function Di(e, t) {
  const n = e.replace(/^['"]|['"]$/g, "").toLowerCase(), a = parseInt(t), r = isNaN(a) ? "normal" : a;
  return (vn[n] || {})[r] || Si[n];
}
function Sa(e, t) {
  const n = "".concat(yo).concat(t.replace(":", "-"));
  return new Promise((a, r) => {
    if (e.getAttribute(n) !== null)
      return a();
    const s = Xe(e.children).filter((v) => v.getAttribute(on) === t)[0], l = de.getComputedStyle(e, t), c = l.getPropertyValue("font-family"), u = c.match(Co), p = l.getPropertyValue("font-weight"), y = l.getPropertyValue("content");
    if (s && !u)
      return e.removeChild(s), a();
    if (u && y !== "none" && y !== "") {
      const v = l.getPropertyValue("content");
      let T = Di(c, p);
      const {
        value: k,
        isSecondary: U
      } = Li(v), C = u[0].startsWith("FontAwesome");
      let S = Dn(T, k), E = S;
      if (C) {
        const L = Qo(k);
        L.iconName && L.prefix && (S = L.iconName, T = L.prefix);
      }
      if (S && !U && (!s || s.getAttribute(En) !== T || s.getAttribute(Pn) !== E)) {
        e.setAttribute(n, E), s && e.removeChild(s);
        const L = bi(), {
          extra: P
        } = L;
        P.attributes[on] = t, gn(S, T).then((z) => {
          const Ee = Bn({
            ...L,
            icons: {
              main: z,
              mask: kn()
            },
            prefix: T,
            iconName: E,
            extra: P,
            watchable: !0
          }), Ae = O.createElementNS("http://www.w3.org/2000/svg", "svg");
          t === "::before" ? e.insertBefore(Ae, e.firstChild) : e.appendChild(Ae), Ae.outerHTML = Ee.map((Pt) => nt(Pt)).join(`
`), e.removeAttribute(n), a();
        }).catch(r);
      } else
        a();
    } else
      a();
  });
}
function ki(e) {
  return Promise.all([Sa(e, "::before"), Sa(e, "::after")]);
}
function Bi(e) {
  return e.parentNode !== document.head && !~To.indexOf(e.tagName.toUpperCase()) && !e.getAttribute(on) && (!e.parentNode || e.parentNode.tagName !== "svg");
}
function La(e) {
  if (le)
    return new Promise((t, n) => {
      const a = Xe(e.querySelectorAll("*")).filter(Bi).map(ki), r = Fn.begin("searchPseudoElements");
      Tr(), Promise.all(a).then(() => {
        r(), hn(), t();
      }).catch(() => {
        r(), hn(), n();
      });
    });
}
var Fi = {
  hooks() {
    return {
      mutationObserverCallbacks(e) {
        return e.pseudoElementsCallback = La, e;
      }
    };
  },
  provides(e) {
    e.pseudoElements2svg = function(t) {
      const {
        node: n = O
      } = t;
      A.searchPseudoElements && La(n);
    };
  }
};
let Da = !1;
var Mi = {
  mixout() {
    return {
      dom: {
        unwatch() {
          Tr(), Da = !0;
        }
      }
    };
  },
  hooks() {
    return {
      bootstrap() {
        xa(mn("mutationObserverCallbacks", {}));
      },
      noAuto() {
        gi();
      },
      watch(e) {
        const {
          observeMutationsRoot: t
        } = e;
        Da ? hn() : xa(mn("mutationObserverCallbacks", {
          observeMutationsRoot: t
        }));
      }
    };
  }
};
const ka = (e) => {
  let t = {
    size: 16,
    x: 0,
    y: 0,
    flipX: !1,
    flipY: !1,
    rotate: 0
  };
  return e.toLowerCase().split(" ").reduce((n, a) => {
    const r = a.toLowerCase().split("-"), o = r[0];
    let s = r.slice(1).join("-");
    if (o && s === "h")
      return n.flipX = !0, n;
    if (o && s === "v")
      return n.flipY = !0, n;
    if (s = parseFloat(s), isNaN(s))
      return n;
    switch (o) {
      case "grow":
        n.size = n.size + s;
        break;
      case "shrink":
        n.size = n.size - s;
        break;
      case "left":
        n.x = n.x - s;
        break;
      case "right":
        n.x = n.x + s;
        break;
      case "up":
        n.y = n.y - s;
        break;
      case "down":
        n.y = n.y + s;
        break;
      case "rotate":
        n.rotate = n.rotate + s;
        break;
    }
    return n;
  }, t);
};
var Ii = {
  mixout() {
    return {
      parse: {
        transform: (e) => ka(e)
      }
    };
  },
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const n = t.getAttribute("data-fa-transform");
        return n && (e.transform = ka(n)), e;
      }
    };
  },
  provides(e) {
    e.generateAbstractTransformGrouping = function(t) {
      let {
        main: n,
        transform: a,
        containerWidth: r,
        iconWidth: o
      } = t;
      const s = {
        transform: "translate(".concat(r / 2, " 256)")
      }, l = "translate(".concat(a.x * 32, ", ").concat(a.y * 32, ") "), c = "scale(".concat(a.size / 16 * (a.flipX ? -1 : 1), ", ").concat(a.size / 16 * (a.flipY ? -1 : 1), ") "), u = "rotate(".concat(a.rotate, " 0 0)"), p = {
        transform: "".concat(l, " ").concat(c, " ").concat(u)
      }, y = {
        transform: "translate(".concat(o / 2 * -1, " -256)")
      }, v = {
        outer: s,
        inner: p,
        path: y
      };
      return {
        tag: "g",
        attributes: {
          ...v.outer
        },
        children: [{
          tag: "g",
          attributes: {
            ...v.inner
          },
          children: [{
            tag: n.icon.tag,
            children: n.icon.children,
            attributes: {
              ...n.icon.attributes,
              ...v.path
            }
          }]
        }]
      };
    };
  }
};
const Kt = {
  x: 0,
  y: 0,
  width: "100%",
  height: "100%"
};
function Ba(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return e.attributes && (e.attributes.fill || t) && (e.attributes.fill = "black"), e;
}
function Ri(e) {
  return e.tag === "g" ? e.children : [e];
}
var Hi = {
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const n = t.getAttribute("data-fa-mask"), a = n ? Ot(n.split(" ").map((r) => r.trim())) : kn();
        return a.prefix || (a.prefix = pe()), e.mask = a, e.maskId = t.getAttribute("data-fa-mask-id"), e;
      }
    };
  },
  provides(e) {
    e.generateAbstractMask = function(t) {
      let {
        children: n,
        attributes: a,
        main: r,
        mask: o,
        maskId: s,
        transform: l
      } = t;
      const {
        width: c,
        icon: u
      } = r, {
        width: p,
        icon: y
      } = o, v = Mo({
        transform: l,
        containerWidth: p,
        iconWidth: c
      }), T = {
        tag: "rect",
        attributes: {
          ...Kt,
          fill: "white"
        }
      }, k = u.children ? {
        children: u.children.map(Ba)
      } : {}, U = {
        tag: "g",
        attributes: {
          ...v.inner
        },
        children: [Ba({
          tag: u.tag,
          attributes: {
            ...u.attributes,
            ...v.path
          },
          ...k
        })]
      }, C = {
        tag: "g",
        attributes: {
          ...v.outer
        },
        children: [U]
      }, S = "mask-".concat(s || et()), E = "clip-".concat(s || et()), L = {
        tag: "mask",
        attributes: {
          ...Kt,
          id: S,
          maskUnits: "userSpaceOnUse",
          maskContentUnits: "userSpaceOnUse"
        },
        children: [T, C]
      }, P = {
        tag: "defs",
        children: [{
          tag: "clipPath",
          attributes: {
            id: E
          },
          children: Ri(y)
        }, L]
      };
      return n.push(P, {
        tag: "rect",
        attributes: {
          fill: "currentColor",
          "clip-path": "url(#".concat(E, ")"),
          mask: "url(#".concat(S, ")"),
          ...Kt
        }
      }), {
        children: n,
        attributes: a
      };
    };
  }
}, ji = {
  provides(e) {
    let t = !1;
    de.matchMedia && (t = de.matchMedia("(prefers-reduced-motion: reduce)").matches), e.missingIconAbstract = function() {
      const n = [], a = {
        fill: "currentColor"
      }, r = {
        attributeType: "XML",
        repeatCount: "indefinite",
        dur: "2s"
      };
      n.push({
        tag: "path",
        attributes: {
          ...a,
          d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
        }
      });
      const o = {
        ...r,
        attributeName: "opacity"
      }, s = {
        tag: "circle",
        attributes: {
          ...a,
          cx: "256",
          cy: "364",
          r: "28"
        },
        children: []
      };
      return t || s.children.push({
        tag: "animate",
        attributes: {
          ...r,
          attributeName: "r",
          values: "28;14;28;28;14;28;"
        }
      }, {
        tag: "animate",
        attributes: {
          ...o,
          values: "1;0;1;1;0;1;"
        }
      }), n.push(s), n.push({
        tag: "path",
        attributes: {
          ...a,
          opacity: "1",
          d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
        },
        children: t ? [] : [{
          tag: "animate",
          attributes: {
            ...o,
            values: "1;0;0;0;0;1;"
          }
        }]
      }), t || n.push({
        tag: "path",
        attributes: {
          ...a,
          opacity: "0",
          d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
        },
        children: [{
          tag: "animate",
          attributes: {
            ...o,
            values: "0;0;1;1;0;0;"
          }
        }]
      }), {
        tag: "g",
        attributes: {
          class: "missing"
        },
        children: n
      };
    };
  }
}, zi = {
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const n = t.getAttribute("data-fa-symbol"), a = n === null ? !1 : n === "" ? !0 : n;
        return e.symbol = a, e;
      }
    };
  }
}, Xi = [Ho, xi, Ci, Ei, Pi, Fi, Mi, Ii, Hi, ji, zi];
_o(Xi, {
  mixoutsTo: J
});
J.noAuto;
J.config;
J.library;
J.dom;
const bn = J.parse;
J.findIconDefinition;
J.toHtml;
const Wi = J.icon;
J.layer;
J.text;
J.counter;
var Ui = { env: { NODE_ENV: "production" } };
function Fa(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    t && (a = a.filter(function(r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), n.push.apply(n, a);
  }
  return n;
}
function ee(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Fa(Object(n), !0).forEach(function(a) {
      Re(e, a, n[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Fa(Object(n)).forEach(function(a) {
      Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(n, a));
    });
  }
  return e;
}
function vt(e) {
  "@babel/helpers - typeof";
  return vt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, vt(e);
}
function Re(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function Gi(e, t) {
  if (e == null) return {};
  var n = {}, a = Object.keys(e), r, o;
  for (o = 0; o < a.length; o++)
    r = a[o], !(t.indexOf(r) >= 0) && (n[r] = e[r]);
  return n;
}
function Yi(e, t) {
  if (e == null) return {};
  var n = Gi(e, t), a, r;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++)
      a = o[r], !(t.indexOf(a) >= 0) && Object.prototype.propertyIsEnumerable.call(e, a) && (n[a] = e[a]);
  }
  return n;
}
function yn(e) {
  return qi(e) || Ji(e) || Qi(e) || Vi();
}
function qi(e) {
  if (Array.isArray(e)) return wn(e);
}
function Ji(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Qi(e, t) {
  if (e) {
    if (typeof e == "string") return wn(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return wn(e, t);
  }
}
function wn(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
  return a;
}
function Vi() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ki(e) {
  var t, n = e.beat, a = e.fade, r = e.beatFade, o = e.bounce, s = e.shake, l = e.flash, c = e.spin, u = e.spinPulse, p = e.spinReverse, y = e.pulse, v = e.fixedWidth, T = e.inverse, k = e.border, U = e.listItem, C = e.flip, S = e.size, E = e.rotation, L = e.pull, P = (t = {
    "fa-beat": n,
    "fa-fade": a,
    "fa-beat-fade": r,
    "fa-bounce": o,
    "fa-shake": s,
    "fa-flash": l,
    "fa-spin": c,
    "fa-spin-reverse": p,
    "fa-spin-pulse": u,
    "fa-pulse": y,
    "fa-fw": v,
    "fa-inverse": T,
    "fa-border": k,
    "fa-li": U,
    "fa-flip": C === !0,
    "fa-flip-horizontal": C === "horizontal" || C === "both",
    "fa-flip-vertical": C === "vertical" || C === "both"
  }, Re(t, "fa-".concat(S), typeof S < "u" && S !== null), Re(t, "fa-rotate-".concat(E), typeof E < "u" && E !== null && E !== 0), Re(t, "fa-pull-".concat(L), typeof L < "u" && L !== null), Re(t, "fa-swap-opacity", e.swapOpacity), t);
  return Object.keys(P).map(function(z) {
    return P[z] ? z : null;
  }).filter(function(z) {
    return z;
  });
}
function Zi(e) {
  return e = e - 0, e === e;
}
function xr(e) {
  return Zi(e) ? e : (e = e.replace(/[\-_\s]+(.)?/g, function(t, n) {
    return n ? n.toUpperCase() : "";
  }), e.substr(0, 1).toLowerCase() + e.substr(1));
}
var _i = ["style"];
function $i(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function es(e) {
  return e.split(";").map(function(t) {
    return t.trim();
  }).filter(function(t) {
    return t;
  }).reduce(function(t, n) {
    var a = n.indexOf(":"), r = xr(n.slice(0, a)), o = n.slice(a + 1).trim();
    return r.startsWith("webkit") ? t[$i(r)] = o : t[r] = o, t;
  }, {});
}
function Cr(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof t == "string")
    return t;
  var a = (t.children || []).map(function(c) {
    return Cr(e, c);
  }), r = Object.keys(t.attributes || {}).reduce(function(c, u) {
    var p = t.attributes[u];
    switch (u) {
      case "class":
        c.attrs.className = p, delete t.attributes.class;
        break;
      case "style":
        c.attrs.style = es(p);
        break;
      default:
        u.indexOf("aria-") === 0 || u.indexOf("data-") === 0 ? c.attrs[u.toLowerCase()] = p : c.attrs[xr(u)] = p;
    }
    return c;
  }, {
    attrs: {}
  }), o = n.style, s = o === void 0 ? {} : o, l = Yi(n, _i);
  return r.attrs.style = ee(ee({}, r.attrs.style), s), e.apply(void 0, [t.tag, ee(ee({}, r.attrs), l)].concat(yn(a)));
}
var Er = !1;
try {
  Er = Ui.env.NODE_ENV === "production";
} catch {
}
function ts() {
  if (!Er && console && typeof console.error == "function") {
    var e;
    (e = console).error.apply(e, arguments);
  }
}
function Ma(e) {
  if (e && vt(e) === "object" && e.prefix && e.iconName && e.icon)
    return e;
  if (bn.icon)
    return bn.icon(e);
  if (e === null)
    return null;
  if (e && vt(e) === "object" && e.prefix && e.iconName)
    return e;
  if (Array.isArray(e) && e.length === 2)
    return {
      prefix: e[0],
      iconName: e[1]
    };
  if (typeof e == "string")
    return {
      prefix: "fas",
      iconName: e
    };
}
function Zt(e, t) {
  return Array.isArray(t) && t.length > 0 || !Array.isArray(t) && t ? Re({}, e, t) : {};
}
var Ia = {
  border: !1,
  className: "",
  mask: null,
  maskId: null,
  fixedWidth: !1,
  inverse: !1,
  flip: !1,
  icon: null,
  listItem: !1,
  pull: null,
  pulse: !1,
  rotation: null,
  size: null,
  spin: !1,
  spinPulse: !1,
  spinReverse: !1,
  beat: !1,
  fade: !1,
  beatFade: !1,
  bounce: !1,
  shake: !1,
  symbol: !1,
  title: "",
  titleId: null,
  transform: null,
  swapOpacity: !1
}, fe = /* @__PURE__ */ yt.forwardRef(function(e, t) {
  var n = ee(ee({}, Ia), e), a = n.icon, r = n.mask, o = n.symbol, s = n.className, l = n.title, c = n.titleId, u = n.maskId, p = Ma(a), y = Zt("classes", [].concat(yn(Ki(n)), yn((s || "").split(" ")))), v = Zt("transform", typeof n.transform == "string" ? bn.transform(n.transform) : n.transform), T = Zt("mask", Ma(r)), k = Wi(p, ee(ee(ee(ee({}, y), v), T), {}, {
    symbol: o,
    title: l,
    titleId: c,
    maskId: u
  }));
  if (!k)
    return ts("Could not find icon", p), null;
  var U = k.abstract, C = {
    ref: t
  };
  return Object.keys(n).forEach(function(S) {
    Ia.hasOwnProperty(S) || (C[S] = n[S]);
  }), ns(U[0], C);
});
fe.displayName = "FontAwesomeIcon";
fe.propTypes = {
  beat: g.bool,
  border: g.bool,
  beatFade: g.bool,
  bounce: g.bool,
  className: g.string,
  fade: g.bool,
  flash: g.bool,
  mask: g.oneOfType([g.object, g.array, g.string]),
  maskId: g.string,
  fixedWidth: g.bool,
  inverse: g.bool,
  flip: g.oneOf([!0, !1, "horizontal", "vertical", "both"]),
  icon: g.oneOfType([g.object, g.array, g.string]),
  listItem: g.bool,
  pull: g.oneOf(["right", "left"]),
  pulse: g.bool,
  rotation: g.oneOf([0, 90, 180, 270]),
  shake: g.bool,
  size: g.oneOf(["2xs", "xs", "sm", "lg", "xl", "2xl", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"]),
  spin: g.bool,
  spinPulse: g.bool,
  spinReverse: g.bool,
  symbol: g.oneOfType([g.bool, g.string]),
  title: g.string,
  titleId: g.string,
  transform: g.oneOfType([g.string, g.object]),
  swapOpacity: g.bool
};
var ns = Cr.bind(null, yt.createElement);
const Pr = ({ columnIndex: e, column: { title: t, links: n } }) => {
  const [a, r] = qr(!1);
  return /* @__PURE__ */ d.jsx("div", { className: "col-xl flex-footer testname-column", children: /* @__PURE__ */ d.jsxs("div", { className: "card accordion-item desktop-disable-xl", children: [
    /* @__PURE__ */ d.jsx(
      "div",
      {
        className: "accordion-header",
        role: "button",
        onClick: () => r(!a),
        onKeyDown: () => r(!a),
        tabIndex: 0,
        "data-bs-toggle": "collapse",
        children: /* @__PURE__ */ d.jsx("div", { className: "h5", children: /* @__PURE__ */ d.jsxs(
          "a",
          {
            id: `footlink-header-${e}`,
            className: "collapsed",
            href: `#footlink-${e}`,
            role: "button",
            children: [
              t,
              /* @__PURE__ */ d.jsx(fe, { icon: eo })
            ]
          }
        ) })
      }
    ),
    /* @__PURE__ */ d.jsx(
      "div",
      {
        id: `footlink-${e}`,
        className: `collapse accordion-body ${a ? "show" : ""}`,
        children: n.map((o) => /* @__PURE__ */ d.jsx(
          "a",
          {
            className: "nav-link",
            href: o.url,
            title: o.title,
            children: o.text
          },
          `footlink-${t}-link-${o.text}`
        ))
      }
    )
  ] }) });
};
Pr.propTypes = {
  columnIndex: g.number.isRequired,
  column: G.shape({
    title: g.string,
    links: G.arrayOf(
      G.shape({
        url: g.string.isRequired,
        title: g.string,
        text: g.string.isRequired
      })
    )
  })
};
const Ct = ({
  contact: { title: e, contactLink: t, contributionLink: n, columns: a }
}) => /* @__PURE__ */ d.jsx("div", { className: "wrapper", id: "wrapper-footer-columns", "data-testid": "contact", children: /* @__PURE__ */ d.jsx("div", { className: "container", id: "footer-columns", children: /* @__PURE__ */ d.jsxs("div", { className: "row", "data-testid": "columns-container", children: [
  /* @__PURE__ */ d.jsxs("div", { className: "col-xl-3", id: "info-column", children: [
    /* @__PURE__ */ d.jsx("div", { className: "h5", children: e }),
    t && /* @__PURE__ */ d.jsx("p", { className: "contact-link", children: /* @__PURE__ */ d.jsx("a", { href: t, children: "Contact Us" }) }),
    n && /* @__PURE__ */ d.jsx(
      "p",
      {
        className: "contribute-button",
        "data-testid": "contact-contribution-link",
        children: /* @__PURE__ */ d.jsx("a", { href: n, className: "btn btn-small btn-gold", children: "Support ASU" })
      }
    )
  ] }),
  a && a.length && /* @__PURE__ */ d.jsx(d.Fragment, { children: a.map((r, o) => /* @__PURE__ */ d.jsx(
    Pr,
    {
      columnIndex: o,
      column: r
    },
    `footlink-${r.title}`
  )) })
] }) }) });
Ct.propTypes = {
  contact: G.shape({
    title: g.string.isRequired,
    contactLink: g.string.isRequired,
    contributionLink: g.string,
    columns: G.arrayOf(
      G.shape({
        title: g.string,
        links: G.arrayOf(
          G.shape({
            url: g.string.isRequired,
            title: g.string,
            text: g.string.isRequired
          })
        )
      })
    )
  })
};
Ct.defaultProps = {
  contact: {
    title: "",
    contactLink: "",
    contributionLink: ""
  }
};
function ue(e) {
  "@babel/helpers - typeof";
  return ue = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ue(e);
}
function Tn(e, t) {
  return Tn = Object.setPrototypeOf || function(a, r) {
    return a.__proto__ = r, a;
  }, Tn(e, t);
}
function as() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function pt(e, t, n) {
  return as() ? pt = Reflect.construct : pt = function(r, o, s) {
    var l = [null];
    l.push.apply(l, o);
    var c = Function.bind.apply(r, l), u = new c();
    return s && Tn(u, s.prototype), u;
  }, pt.apply(null, arguments);
}
function _(e) {
  return rs(e) || os(e) || is(e) || ss();
}
function rs(e) {
  if (Array.isArray(e)) return On(e);
}
function os(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function is(e, t) {
  if (e) {
    if (typeof e == "string") return On(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return On(e, t);
  }
}
function On(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
  return a;
}
function ss() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var ls = Object.hasOwnProperty, Ra = Object.setPrototypeOf, cs = Object.isFrozen, fs = Object.getPrototypeOf, us = Object.getOwnPropertyDescriptor, X = Object.freeze, V = Object.seal, ms = Object.create, Nr = typeof Reflect < "u" && Reflect, bt = Nr.apply, xn = Nr.construct;
bt || (bt = function(t, n, a) {
  return t.apply(n, a);
});
X || (X = function(t) {
  return t;
});
V || (V = function(t) {
  return t;
});
xn || (xn = function(t, n) {
  return pt(t, _(n));
});
var ds = K(Array.prototype.forEach), Ha = K(Array.prototype.pop), qe = K(Array.prototype.push), gt = K(String.prototype.toLowerCase), _t = K(String.prototype.toString), ja = K(String.prototype.match), Z = K(String.prototype.replace), ps = K(String.prototype.indexOf), gs = K(String.prototype.trim), R = K(RegExp.prototype.test), $t = As(TypeError);
function K(e) {
  return function(t) {
    for (var n = arguments.length, a = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
      a[r - 1] = arguments[r];
    return bt(e, t, a);
  };
}
function As(e) {
  return function() {
    for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++)
      n[a] = arguments[a];
    return xn(e, n);
  };
}
function b(e, t, n) {
  var a;
  n = (a = n) !== null && a !== void 0 ? a : gt, Ra && Ra(e, null);
  for (var r = t.length; r--; ) {
    var o = t[r];
    if (typeof o == "string") {
      var s = n(o);
      s !== o && (cs(t) || (t[r] = s), o = s);
    }
    e[o] = !0;
  }
  return e;
}
function ye(e) {
  var t = ms(null), n;
  for (n in e)
    bt(ls, e, [n]) === !0 && (t[n] = e[n]);
  return t;
}
function ft(e, t) {
  for (; e !== null; ) {
    var n = us(e, t);
    if (n) {
      if (n.get)
        return K(n.get);
      if (typeof n.value == "function")
        return K(n.value);
    }
    e = fs(e);
  }
  function a(r) {
    return console.warn("fallback value for", r), null;
  }
  return a;
}
var za = X(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), en = X(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), tn = X(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), hs = X(["animate", "color-profile", "cursor", "discard", "fedropshadow", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), nn = X(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover"]), vs = X(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Xa = X(["#text"]), Wa = X(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"]), an = X(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Ua = X(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), ut = X(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), bs = V(/\{\{[\w\W]*|[\w\W]*\}\}/gm), ys = V(/<%[\w\W]*|[\w\W]*%>/gm), ws = V(/\${[\w\W]*}/gm), Ts = V(/^data-[\-\w.\u00B7-\uFFFF]/), Os = V(/^aria-[\-\w]+$/), xs = V(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), Cs = V(/^(?:\w+script|data):/i), Es = V(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Ps = V(/^html$/i), Ns = V(/^[a-z][.\w]*(-[.\w]+)+$/i), Ss = function() {
  return typeof window > "u" ? null : window;
}, Ls = function(t, n) {
  if (ue(t) !== "object" || typeof t.createPolicy != "function")
    return null;
  var a = null, r = "data-tt-policy-suffix";
  n.currentScript && n.currentScript.hasAttribute(r) && (a = n.currentScript.getAttribute(r));
  var o = "dompurify" + (a ? "#" + a : "");
  try {
    return t.createPolicy(o, {
      createHTML: function(l) {
        return l;
      },
      createScriptURL: function(l) {
        return l;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + o + " could not be created."), null;
  }
};
function Sr() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Ss(), t = function(i) {
    return Sr(i);
  };
  if (t.version = "2.5.7", t.removed = [], !e || !e.document || e.document.nodeType !== 9)
    return t.isSupported = !1, t;
  var n = e.document, a = e.document, r = e.DocumentFragment, o = e.HTMLTemplateElement, s = e.Node, l = e.Element, c = e.NodeFilter, u = e.NamedNodeMap, p = u === void 0 ? e.NamedNodeMap || e.MozNamedAttrMap : u, y = e.HTMLFormElement, v = e.DOMParser, T = e.trustedTypes, k = l.prototype, U = ft(k, "cloneNode"), C = ft(k, "nextSibling"), S = ft(k, "childNodes"), E = ft(k, "parentNode");
  if (typeof o == "function") {
    var L = a.createElement("template");
    L.content && L.content.ownerDocument && (a = L.content.ownerDocument);
  }
  var P = Ls(T, n), z = P ? P.createHTML("") : "", Ee = a, Ae = Ee.implementation, Pt = Ee.createNodeIterator, Dr = Ee.createDocumentFragment, kr = Ee.getElementsByTagName, Br = n.importNode, In = {};
  try {
    In = ye(a).documentMode ? a.documentMode : {};
  } catch {
  }
  var $ = {};
  t.isSupported = typeof E == "function" && Ae && Ae.createHTMLDocument !== void 0 && In !== 9;
  var Nt = bs, St = ys, Lt = ws, Fr = Ts, Mr = Os, Ir = Cs, Rn = Es, Rr = Ns, Dt = xs, B = null, Hn = b({}, [].concat(_(za), _(en), _(tn), _(nn), _(Xa))), F = null, jn = b({}, [].concat(_(Wa), _(an), _(Ua), _(ut))), N = Object.seal(Object.create(null, {
    tagNameCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    attributeNameCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    allowCustomizedBuiltInElements: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: !1
    }
  })), We = null, kt = null, zn = !0, Bt = !0, Xn = !1, Wn = !0, Pe = !1, Ft = !0, he = !1, Mt = !1, It = !1, Ne = !1, at = !1, rt = !1, Un = !0, Gn = !1, Hr = "user-content-", Rt = !0, Ue = !1, Se = {}, Le = null, Yn = b({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]), qn = null, Jn = b({}, ["audio", "video", "img", "source", "image", "track"]), Ht = null, Qn = b({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), ot = "http://www.w3.org/1998/Math/MathML", it = "http://www.w3.org/2000/svg", re = "http://www.w3.org/1999/xhtml", De = re, jt = !1, zt = null, jr = b({}, [ot, it, re], _t), ve, zr = ["application/xhtml+xml", "text/html"], Xr = "text/html", M, ke = null, Wr = a.createElement("form"), Vn = function(i) {
    return i instanceof RegExp || i instanceof Function;
  }, Xt = function(i) {
    ke && ke === i || ((!i || ue(i) !== "object") && (i = {}), i = ye(i), ve = // eslint-disable-next-line unicorn/prefer-includes
    zr.indexOf(i.PARSER_MEDIA_TYPE) === -1 ? ve = Xr : ve = i.PARSER_MEDIA_TYPE, M = ve === "application/xhtml+xml" ? _t : gt, B = "ALLOWED_TAGS" in i ? b({}, i.ALLOWED_TAGS, M) : Hn, F = "ALLOWED_ATTR" in i ? b({}, i.ALLOWED_ATTR, M) : jn, zt = "ALLOWED_NAMESPACES" in i ? b({}, i.ALLOWED_NAMESPACES, _t) : jr, Ht = "ADD_URI_SAFE_ATTR" in i ? b(
      ye(Qn),
      // eslint-disable-line indent
      i.ADD_URI_SAFE_ATTR,
      // eslint-disable-line indent
      M
      // eslint-disable-line indent
    ) : Qn, qn = "ADD_DATA_URI_TAGS" in i ? b(
      ye(Jn),
      // eslint-disable-line indent
      i.ADD_DATA_URI_TAGS,
      // eslint-disable-line indent
      M
      // eslint-disable-line indent
    ) : Jn, Le = "FORBID_CONTENTS" in i ? b({}, i.FORBID_CONTENTS, M) : Yn, We = "FORBID_TAGS" in i ? b({}, i.FORBID_TAGS, M) : {}, kt = "FORBID_ATTR" in i ? b({}, i.FORBID_ATTR, M) : {}, Se = "USE_PROFILES" in i ? i.USE_PROFILES : !1, zn = i.ALLOW_ARIA_ATTR !== !1, Bt = i.ALLOW_DATA_ATTR !== !1, Xn = i.ALLOW_UNKNOWN_PROTOCOLS || !1, Wn = i.ALLOW_SELF_CLOSE_IN_ATTR !== !1, Pe = i.SAFE_FOR_TEMPLATES || !1, Ft = i.SAFE_FOR_XML !== !1, he = i.WHOLE_DOCUMENT || !1, Ne = i.RETURN_DOM || !1, at = i.RETURN_DOM_FRAGMENT || !1, rt = i.RETURN_TRUSTED_TYPE || !1, It = i.FORCE_BODY || !1, Un = i.SANITIZE_DOM !== !1, Gn = i.SANITIZE_NAMED_PROPS || !1, Rt = i.KEEP_CONTENT !== !1, Ue = i.IN_PLACE || !1, Dt = i.ALLOWED_URI_REGEXP || Dt, De = i.NAMESPACE || re, N = i.CUSTOM_ELEMENT_HANDLING || {}, i.CUSTOM_ELEMENT_HANDLING && Vn(i.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (N.tagNameCheck = i.CUSTOM_ELEMENT_HANDLING.tagNameCheck), i.CUSTOM_ELEMENT_HANDLING && Vn(i.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (N.attributeNameCheck = i.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), i.CUSTOM_ELEMENT_HANDLING && typeof i.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (N.allowCustomizedBuiltInElements = i.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), Pe && (Bt = !1), at && (Ne = !0), Se && (B = b({}, _(Xa)), F = [], Se.html === !0 && (b(B, za), b(F, Wa)), Se.svg === !0 && (b(B, en), b(F, an), b(F, ut)), Se.svgFilters === !0 && (b(B, tn), b(F, an), b(F, ut)), Se.mathMl === !0 && (b(B, nn), b(F, Ua), b(F, ut))), i.ADD_TAGS && (B === Hn && (B = ye(B)), b(B, i.ADD_TAGS, M)), i.ADD_ATTR && (F === jn && (F = ye(F)), b(F, i.ADD_ATTR, M)), i.ADD_URI_SAFE_ATTR && b(Ht, i.ADD_URI_SAFE_ATTR, M), i.FORBID_CONTENTS && (Le === Yn && (Le = ye(Le)), b(Le, i.FORBID_CONTENTS, M)), Rt && (B["#text"] = !0), he && b(B, ["html", "head", "body"]), B.table && (b(B, ["tbody"]), delete We.tbody), X && X(i), ke = i);
  }, Kn = b({}, ["mi", "mo", "mn", "ms", "mtext"]), Zn = b({}, ["annotation-xml"]), Ur = b({}, ["title", "style", "font", "a", "script"]), st = b({}, en);
  b(st, tn), b(st, hs);
  var Wt = b({}, nn);
  b(Wt, vs);
  var Gr = function(i) {
    var f = E(i);
    (!f || !f.tagName) && (f = {
      namespaceURI: De,
      tagName: "template"
    });
    var m = gt(i.tagName), w = gt(f.tagName);
    return zt[i.namespaceURI] ? i.namespaceURI === it ? f.namespaceURI === re ? m === "svg" : f.namespaceURI === ot ? m === "svg" && (w === "annotation-xml" || Kn[w]) : !!st[m] : i.namespaceURI === ot ? f.namespaceURI === re ? m === "math" : f.namespaceURI === it ? m === "math" && Zn[w] : !!Wt[m] : i.namespaceURI === re ? f.namespaceURI === it && !Zn[w] || f.namespaceURI === ot && !Kn[w] ? !1 : !Wt[m] && (Ur[m] || !st[m]) : !!(ve === "application/xhtml+xml" && zt[i.namespaceURI]) : !1;
  }, Q = function(i) {
    qe(t.removed, {
      element: i
    });
    try {
      i.parentNode.removeChild(i);
    } catch {
      try {
        i.outerHTML = z;
      } catch {
        i.remove();
      }
    }
  }, lt = function(i, f) {
    try {
      qe(t.removed, {
        attribute: f.getAttributeNode(i),
        from: f
      });
    } catch {
      qe(t.removed, {
        attribute: null,
        from: f
      });
    }
    if (f.removeAttribute(i), i === "is" && !F[i])
      if (Ne || at)
        try {
          Q(f);
        } catch {
        }
      else
        try {
          f.setAttribute(i, "");
        } catch {
        }
  }, _n = function(i) {
    var f, m;
    if (It)
      i = "<remove></remove>" + i;
    else {
      var w = ja(i, /^[\r\n\t ]+/);
      m = w && w[0];
    }
    ve === "application/xhtml+xml" && De === re && (i = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + i + "</body></html>");
    var W = P ? P.createHTML(i) : i;
    if (De === re)
      try {
        f = new v().parseFromString(W, ve);
      } catch {
      }
    if (!f || !f.documentElement) {
      f = Ae.createDocument(De, "template", null);
      try {
        f.documentElement.innerHTML = jt ? z : W;
      } catch {
      }
    }
    var j = f.body || f.documentElement;
    return i && m && j.insertBefore(a.createTextNode(m), j.childNodes[0] || null), De === re ? kr.call(f, he ? "html" : "body")[0] : he ? f.documentElement : j;
  }, $n = function(i) {
    return Pt.call(
      i.ownerDocument || i,
      i,
      // eslint-disable-next-line no-bitwise
      c.SHOW_ELEMENT | c.SHOW_COMMENT | c.SHOW_TEXT | c.SHOW_PROCESSING_INSTRUCTION | c.SHOW_CDATA_SECTION,
      null,
      !1
    );
  }, ea = function(i) {
    return i instanceof y && (typeof i.nodeName != "string" || typeof i.textContent != "string" || typeof i.removeChild != "function" || !(i.attributes instanceof p) || typeof i.removeAttribute != "function" || typeof i.setAttribute != "function" || typeof i.namespaceURI != "string" || typeof i.insertBefore != "function" || typeof i.hasChildNodes != "function");
  }, Ge = function(i) {
    return ue(s) === "object" ? i instanceof s : i && ue(i) === "object" && typeof i.nodeType == "number" && typeof i.nodeName == "string";
  }, oe = function(i, f, m) {
    $[i] && ds($[i], function(w) {
      w.call(t, f, m, ke);
    });
  }, ta = function(i) {
    var f;
    if (oe("beforeSanitizeElements", i, null), ea(i) || R(/[\u0080-\uFFFF]/, i.nodeName))
      return Q(i), !0;
    var m = M(i.nodeName);
    if (oe("uponSanitizeElement", i, {
      tagName: m,
      allowedTags: B
    }), i.hasChildNodes() && !Ge(i.firstElementChild) && (!Ge(i.content) || !Ge(i.content.firstElementChild)) && R(/<[/\w]/g, i.innerHTML) && R(/<[/\w]/g, i.textContent) || m === "select" && R(/<template/i, i.innerHTML) || i.nodeType === 7 || Ft && i.nodeType === 8 && R(/<[/\w]/g, i.data))
      return Q(i), !0;
    if (!B[m] || We[m]) {
      if (!We[m] && aa(m) && (N.tagNameCheck instanceof RegExp && R(N.tagNameCheck, m) || N.tagNameCheck instanceof Function && N.tagNameCheck(m)))
        return !1;
      if (Rt && !Le[m]) {
        var w = E(i) || i.parentNode, W = S(i) || i.childNodes;
        if (W && w)
          for (var j = W.length, I = j - 1; I >= 0; --I) {
            var be = U(W[I], !0);
            be.__removalCount = (i.__removalCount || 0) + 1, w.insertBefore(be, C(i));
          }
      }
      return Q(i), !0;
    }
    return i instanceof l && !Gr(i) || (m === "noscript" || m === "noembed" || m === "noframes") && R(/<\/no(script|embed|frames)/i, i.innerHTML) ? (Q(i), !0) : (Pe && i.nodeType === 3 && (f = i.textContent, f = Z(f, Nt, " "), f = Z(f, St, " "), f = Z(f, Lt, " "), i.textContent !== f && (qe(t.removed, {
      element: i.cloneNode()
    }), i.textContent = f)), oe("afterSanitizeElements", i, null), !1);
  }, na = function(i, f, m) {
    if (Un && (f === "id" || f === "name") && (m in a || m in Wr))
      return !1;
    if (!(Bt && !kt[f] && R(Fr, f))) {
      if (!(zn && R(Mr, f))) {
        if (!F[f] || kt[f]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(aa(i) && (N.tagNameCheck instanceof RegExp && R(N.tagNameCheck, i) || N.tagNameCheck instanceof Function && N.tagNameCheck(i)) && (N.attributeNameCheck instanceof RegExp && R(N.attributeNameCheck, f) || N.attributeNameCheck instanceof Function && N.attributeNameCheck(f)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            f === "is" && N.allowCustomizedBuiltInElements && (N.tagNameCheck instanceof RegExp && R(N.tagNameCheck, m) || N.tagNameCheck instanceof Function && N.tagNameCheck(m)))
          ) return !1;
        } else if (!Ht[f]) {
          if (!R(Dt, Z(m, Rn, ""))) {
            if (!((f === "src" || f === "xlink:href" || f === "href") && i !== "script" && ps(m, "data:") === 0 && qn[i])) {
              if (!(Xn && !R(Ir, Z(m, Rn, "")))) {
                if (m)
                  return !1;
              }
            }
          }
        }
      }
    }
    return !0;
  }, aa = function(i) {
    return i !== "annotation-xml" && ja(i, Rr);
  }, ra = function(i) {
    var f, m, w, W;
    oe("beforeSanitizeAttributes", i, null);
    var j = i.attributes;
    if (j) {
      var I = {
        attrName: "",
        attrValue: "",
        keepAttr: !0,
        allowedAttributes: F
      };
      for (W = j.length; W--; ) {
        f = j[W];
        var be = f, D = be.name, Ut = be.namespaceURI;
        if (m = D === "value" ? f.value : gs(f.value), w = M(D), I.attrName = w, I.attrValue = m, I.keepAttr = !0, I.forceKeepAttr = void 0, oe("uponSanitizeAttribute", i, I), m = I.attrValue, !I.forceKeepAttr && (lt(D, i), !!I.keepAttr)) {
          if (!Wn && R(/\/>/i, m)) {
            lt(D, i);
            continue;
          }
          Pe && (m = Z(m, Nt, " "), m = Z(m, St, " "), m = Z(m, Lt, " "));
          var oa = M(i.nodeName);
          if (na(oa, w, m)) {
            if (Gn && (w === "id" || w === "name") && (lt(D, i), m = Hr + m), Ft && R(/((--!?|])>)|<\/(style|title)/i, m)) {
              lt(D, i);
              continue;
            }
            if (P && ue(T) === "object" && typeof T.getAttributeType == "function" && !Ut)
              switch (T.getAttributeType(oa, w)) {
                case "TrustedHTML": {
                  m = P.createHTML(m);
                  break;
                }
                case "TrustedScriptURL": {
                  m = P.createScriptURL(m);
                  break;
                }
              }
            try {
              Ut ? i.setAttributeNS(Ut, D, m) : i.setAttribute(D, m), ea(i) ? Q(i) : Ha(t.removed);
            } catch {
            }
          }
        }
      }
      oe("afterSanitizeAttributes", i, null);
    }
  }, Yr = function h(i) {
    var f, m = $n(i);
    for (oe("beforeSanitizeShadowDOM", i, null); f = m.nextNode(); )
      oe("uponSanitizeShadowNode", f, null), !ta(f) && (f.content instanceof r && h(f.content), ra(f));
    oe("afterSanitizeShadowDOM", i, null);
  };
  return t.sanitize = function(h) {
    var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, f, m, w, W, j;
    if (jt = !h, jt && (h = "<!-->"), typeof h != "string" && !Ge(h))
      if (typeof h.toString == "function") {
        if (h = h.toString(), typeof h != "string")
          throw $t("dirty is not a string, aborting");
      } else
        throw $t("toString is not a function");
    if (!t.isSupported) {
      if (ue(e.toStaticHTML) === "object" || typeof e.toStaticHTML == "function") {
        if (typeof h == "string")
          return e.toStaticHTML(h);
        if (Ge(h))
          return e.toStaticHTML(h.outerHTML);
      }
      return h;
    }
    if (Mt || Xt(i), t.removed = [], typeof h == "string" && (Ue = !1), Ue) {
      if (h.nodeName) {
        var I = M(h.nodeName);
        if (!B[I] || We[I])
          throw $t("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (h instanceof s)
      f = _n("<!---->"), m = f.ownerDocument.importNode(h, !0), m.nodeType === 1 && m.nodeName === "BODY" || m.nodeName === "HTML" ? f = m : f.appendChild(m);
    else {
      if (!Ne && !Pe && !he && // eslint-disable-next-line unicorn/prefer-includes
      h.indexOf("<") === -1)
        return P && rt ? P.createHTML(h) : h;
      if (f = _n(h), !f)
        return Ne ? null : rt ? z : "";
    }
    f && It && Q(f.firstChild);
    for (var be = $n(Ue ? h : f); w = be.nextNode(); )
      w.nodeType === 3 && w === W || ta(w) || (w.content instanceof r && Yr(w.content), ra(w), W = w);
    if (W = null, Ue)
      return h;
    if (Ne) {
      if (at)
        for (j = Dr.call(f.ownerDocument); f.firstChild; )
          j.appendChild(f.firstChild);
      else
        j = f;
      return (F.shadowroot || F.shadowrootmod) && (j = Br.call(n, j, !0)), j;
    }
    var D = he ? f.outerHTML : f.innerHTML;
    return he && B["!doctype"] && f.ownerDocument && f.ownerDocument.doctype && f.ownerDocument.doctype.name && R(Ps, f.ownerDocument.doctype.name) && (D = "<!DOCTYPE " + f.ownerDocument.doctype.name + `>
` + D), Pe && (D = Z(D, Nt, " "), D = Z(D, St, " "), D = Z(D, Lt, " ")), P && rt ? P.createHTML(D) : D;
  }, t.setConfig = function(h) {
    Xt(h), Mt = !0;
  }, t.clearConfig = function() {
    ke = null, Mt = !1;
  }, t.isValidAttribute = function(h, i, f) {
    ke || Xt({});
    var m = M(h), w = M(i);
    return na(m, w, f);
  }, t.addHook = function(h, i) {
    typeof i == "function" && ($[h] = $[h] || [], qe($[h], i));
  }, t.removeHook = function(h) {
    if ($[h])
      return Ha($[h]);
  }, t.removeHooks = function(h) {
    $[h] && ($[h] = []);
  }, t.removeAllHooks = function() {
    $ = {};
  }, t;
}
Sr();
g.shape({
  event: g.string,
  action: g.string,
  name: g.string,
  region: g.string,
  section: g.string,
  component: g.string,
  type: g.string,
  text: g.string
});
const H = ({
  event: e = "",
  action: t = "",
  name: n = "",
  type: a = "",
  section: r = "",
  text: o = "",
  region: s = "",
  component: l = ""
}) => {
  const { dataLayer: c } = window, u = {
    event: e.toLowerCase(),
    action: t.toLowerCase(),
    name: n.toLowerCase(),
    type: a.toLowerCase(),
    region: s.toLowerCase(),
    section: r.toLowerCase(),
    text: o.toLowerCase(),
    component: l.toLowerCase()
  };
  c && c.push(u);
}, Ds = "data:image/png;base64,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", Be = {
  MAPS_AND_LOCATIONS: "https://www.asu.edu/about/locations-maps",
  JOBS: "https://cfo.asu.edu/applicant",
  DIRECTORY: "https://search.asu.edu/?search-tabs=web_dir_faculty_staff",
  CONTACT_ASU: "https://www.asu.edu/about/contact",
  MY_ASU: "https://my.asu.edu/",
  RANKINGS: "https://www.asu.edu/rankings"
}, Je = {
  COPYRIGHT_AND_TRADEMARK: "https://www.asu.edu/about/copyright-trademark",
  ACCESSIBILITY_REPORT: "https://accessibility.asu.edu/report",
  PRIVACY: "https://www.asu.edu/about/privacy",
  TERMS_OF_USE: "https://www.asu.edu/about/terms-of-use",
  EMERGENCY: "https://www.asu.edu/emergency/"
}, Fe = {
  type: "internal link",
  section: "secondary footer"
}, ks = () => /* @__PURE__ */ d.jsx(
  "div",
  {
    className: "wrapper",
    id: "wrapper-footer-innovation",
    "data-testid": "innovation",
    children: /* @__PURE__ */ d.jsx("div", { className: "container", id: "footer-innovation", children: /* @__PURE__ */ d.jsx("div", { className: "row", children: /* @__PURE__ */ d.jsx("div", { className: "col", children: /* @__PURE__ */ d.jsxs("div", { className: "d-flex footer-innovation-links", children: [
      /* @__PURE__ */ d.jsxs("nav", { className: "nav", "aria-label": "University Services", children: [
        /* @__PURE__ */ d.jsx(
          "a",
          {
            className: "nav-link",
            href: Be.MAPS_AND_LOCATIONS,
            onFocus: () => H({
              ...Fe,
              text: "maps and locations"
            }),
            children: "Maps and Locations"
          }
        ),
        /* @__PURE__ */ d.jsx(
          "a",
          {
            className: "nav-link",
            href: Be.JOBS,
            onFocus: () => H({
              ...Fe,
              text: "jobs"
            }),
            children: "Jobs"
          }
        ),
        /* @__PURE__ */ d.jsx(
          "a",
          {
            className: "nav-link",
            href: Be.DIRECTORY,
            onFocus: () => H({
              ...Fe,
              text: "directory"
            }),
            children: "Directory"
          }
        ),
        /* @__PURE__ */ d.jsx(
          "a",
          {
            className: "nav-link",
            href: Be.CONTACT_ASU,
            onFocus: () => H({
              ...Fe,
              text: "contact asu"
            }),
            children: "Contact ASU"
          }
        ),
        /* @__PURE__ */ d.jsx(
          "a",
          {
            className: "nav-link",
            href: Be.MY_ASU,
            onFocus: () => H({
              ...Fe,
              text: "my asu"
            }),
            children: "My ASU"
          }
        )
      ] }),
      /* @__PURE__ */ d.jsx(
        "a",
        {
          className: "img-link",
          href: Be.RANKINGS,
          onFocus: () => H({
            ...Fe,
            text: "#1 in the u.s. for innovation"
          }),
          children: /* @__PURE__ */ d.jsx(
            "img",
            {
              src: Ds,
              alt: "Repeatedly ranked #1 in innovation (ASU ahead of MIT and Stanford), sustainability (ASU ahead of Stanford and UC Berkeley), and global impact (ASU ahead of MIT and Penn State)",
              width: "459",
              height: "100",
              loading: "lazy",
              decoding: "async"
            }
          )
        }
      )
    ] }) }) }) })
  }
), Qe = {
  type: "internal link",
  section: "tertiary footer"
}, Bs = () => {
  function e() {
    try {
      return window.location.href;
    } catch (t) {
      return console.error(t), "";
    }
  }
  return /* @__PURE__ */ d.jsx("div", { className: "wrapper", id: "wrapper-footer-colophon", "data-testid": "legal", children: /* @__PURE__ */ d.jsx("div", { className: "container", id: "footer-colophon", children: /* @__PURE__ */ d.jsx("div", { className: "row", children: /* @__PURE__ */ d.jsx("div", { className: "col", children: /* @__PURE__ */ d.jsxs(
    "nav",
    {
      className: "nav colophon",
      "aria-label": "University Legal and Compliance",
      children: [
        /* @__PURE__ */ d.jsx(
          "a",
          {
            className: "nav-link",
            href: Je.COPYRIGHT_AND_TRADEMARK,
            onFocus: () => H({
              ...Qe,
              text: "copyright and trademark"
            }),
            children: "Copyright and Trademark"
          }
        ),
        /* @__PURE__ */ d.jsx(
          "a",
          {
            className: "nav-link",
            href: `${Je.ACCESSIBILITY_REPORT}?a11yref=${e()}`,
            onFocus: () => H({
              ...Qe,
              text: "accessibility"
            }),
            children: "Accessibility"
          }
        ),
        /* @__PURE__ */ d.jsx(
          "a",
          {
            className: "nav-link",
            href: Je.PRIVACY,
            onFocus: () => H({
              ...Qe,
              text: "privacy"
            }),
            children: "Privacy"
          }
        ),
        /* @__PURE__ */ d.jsx(
          "a",
          {
            className: "nav-link",
            href: Je.TERMS_OF_USE,
            onFocus: () => H({
              ...Qe,
              text: "terms of use"
            }),
            children: "Terms of Use"
          }
        ),
        /* @__PURE__ */ d.jsx(
          "a",
          {
            className: "nav-link",
            href: Je.EMERGENCY,
            onFocus: () => H({
              ...Qe,
              text: "emergency"
            }),
            children: "Emergency"
          }
        )
      ]
    }
  ) }) }) }) });
}, Fs = {
  prefix: "fab",
  iconName: "square-instagram",
  icon: [448, 512, ["instagram-square"], "e055", "M194.4 211.7a53.3 53.3 0 1 0 59.3 88.7 53.3 53.3 0 1 0 -59.3-88.7zm142.3-68.4c-5.2-5.2-11.5-9.3-18.4-12c-18.1-7.1-57.6-6.8-83.1-6.5c-4.1 0-7.9 .1-11.2 .1c-3.3 0-7.2 0-11.4-.1c-25.5-.3-64.8-.7-82.9 6.5c-6.9 2.7-13.1 6.8-18.4 12s-9.3 11.5-12 18.4c-7.1 18.1-6.7 57.7-6.5 83.2c0 4.1 .1 7.9 .1 11.1s0 7-.1 11.1c-.2 25.5-.6 65.1 6.5 83.2c2.7 6.9 6.8 13.1 12 18.4s11.5 9.3 18.4 12c18.1 7.1 57.6 6.8 83.1 6.5c4.1 0 7.9-.1 11.2-.1c3.3 0 7.2 0 11.4 .1c25.5 .3 64.8 .7 82.9-6.5c6.9-2.7 13.1-6.8 18.4-12s9.3-11.5 12-18.4c7.2-18 6.8-57.4 6.5-83c0-4.2-.1-8.1-.1-11.4s0-7.1 .1-11.4c.3-25.5 .7-64.9-6.5-83l0 0c-2.7-6.9-6.8-13.1-12-18.4zm-67.1 44.5A82 82 0 1 1 178.4 324.2a82 82 0 1 1 91.1-136.4zm29.2-1.3c-3.1-2.1-5.6-5.1-7.1-8.6s-1.8-7.3-1.1-11.1s2.6-7.1 5.2-9.8s6.1-4.5 9.8-5.2s7.6-.4 11.1 1.1s6.5 3.9 8.6 7s3.2 6.8 3.2 10.6c0 2.5-.5 5-1.4 7.3s-2.4 4.4-4.1 6.2s-3.9 3.2-6.2 4.2s-4.8 1.5-7.3 1.5l0 0c-3.8 0-7.5-1.1-10.6-3.2zM448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96zM357 389c-18.7 18.7-41.4 24.6-67 25.9c-26.4 1.5-105.6 1.5-132 0c-25.6-1.3-48.3-7.2-67-25.9s-24.6-41.4-25.8-67c-1.5-26.4-1.5-105.6 0-132c1.3-25.6 7.1-48.3 25.8-67s41.5-24.6 67-25.8c26.4-1.5 105.6-1.5 132 0c25.6 1.3 48.3 7.1 67 25.8s24.6 41.4 25.8 67c1.5 26.3 1.5 105.4 0 131.9c-1.3 25.6-7.1 48.3-25.8 67z"]
}, Ms = Fs, Is = {
  prefix: "fab",
  iconName: "square-youtube",
  icon: [448, 512, [61798, "youtube-square"], "f431", "M282 256.2l-95.2-54.1V310.3L282 256.2zM384 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm14.4 136.1c7.6 28.6 7.6 88.2 7.6 88.2s0 59.6-7.6 88.1c-4.2 15.8-16.5 27.7-32.2 31.9C337.9 384 224 384 224 384s-113.9 0-142.2-7.6c-15.7-4.2-28-16.1-32.2-31.9C42 315.9 42 256.3 42 256.3s0-59.7 7.6-88.2c4.2-15.8 16.5-28.2 32.2-32.4C110.1 128 224 128 224 128s113.9 0 142.2 7.7c15.7 4.2 28 16.6 32.2 32.4z"]
}, Rs = Is, Hs = {
  prefix: "fab",
  iconName: "square-facebook",
  icon: [448, 512, ["facebook-square"], "f082", "M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64h98.2V334.2H109.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H255V480H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"]
}, js = Hs, zs = {
  prefix: "fab",
  iconName: "linkedin",
  icon: [448, 512, [], "f08c", "M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"]
}, Xs = {
  prefix: "fab",
  iconName: "square-x-twitter",
  icon: [448, 512, [], "e61a", "M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm297.1 84L257.3 234.6 379.4 396H283.8L209 298.1 123.3 396H75.8l111-126.9L69.7 116h98l67.7 89.5L313.6 116h47.5zM323.3 367.6L153.4 142.9H125.1L296.9 367.6h26.3z"]
}, Ws = "data:image/png;base64,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", Me = {
  type: "external link",
  section: "primary footer"
}, Et = ({ social: { logoUrl: e, unitLogo: t, mediaLinks: n } }) => /* @__PURE__ */ d.jsx("div", { className: "wrapper", id: "wrapper-endorsed-footer", "data-testid": "social", children: /* @__PURE__ */ d.jsx("div", { className: "container", id: "endorsed-footer", children: /* @__PURE__ */ d.jsxs("div", { className: "row", children: [
  /* @__PURE__ */ d.jsx("div", { className: "col-md", id: "endorsed-logo", children: /* @__PURE__ */ d.jsx(
    "a",
    {
      href: e,
      onFocus: () => H({
        ...Me,
        type: "internal link",
        text: "asu logo"
      }),
      children: /* @__PURE__ */ d.jsx(
        "img",
        {
          src: t,
          alt: "ASU University Technology Office Arizona State University."
        }
      )
    }
  ) }),
  n && /* @__PURE__ */ d.jsx("div", { className: "col-md", id: "social-media", children: /* @__PURE__ */ d.jsxs("nav", { className: "nav", "aria-label": "Social Media", children: [
    n.facebook && /* @__PURE__ */ d.jsx(
      "a",
      {
        className: "nav-link",
        href: n.facebook,
        "data-testid": "facebook",
        onFocus: () => H({
          ...Me,
          text: "facebook icon"
        }),
        children: /* @__PURE__ */ d.jsx(
          fe,
          {
            title: "Facebook Social Media Icon",
            icon: js
          }
        )
      }
    ),
    n.twitter && /* @__PURE__ */ d.jsx(
      "a",
      {
        className: "nav-link",
        href: n.twitter,
        "data-testid": "twitter",
        onFocus: () => H({
          ...Me,
          text: "twitter icon"
        }),
        children: /* @__PURE__ */ d.jsx(
          fe,
          {
            title: "Twitter Social Media Icon",
            icon: Xs
          }
        )
      }
    ),
    n.instagram && /* @__PURE__ */ d.jsx(
      "a",
      {
        className: "nav-link",
        href: n.instagram,
        "data-testid": "instagram",
        onFocus: () => H({
          ...Me,
          text: "instagram icon"
        }),
        children: /* @__PURE__ */ d.jsx(
          fe,
          {
            title: "Instagram Social Media Icon",
            icon: Ms
          }
        )
      }
    ),
    n.youtube && /* @__PURE__ */ d.jsx(
      "a",
      {
        className: "nav-link",
        href: n.youtube,
        "data-testid": "youtube",
        onFocus: () => H({
          ...Me,
          text: "youtube icon"
        }),
        children: /* @__PURE__ */ d.jsx(
          fe,
          {
            title: "YouTube Social Media Icon",
            icon: Rs
          }
        )
      }
    ),
    n.linkedIn && /* @__PURE__ */ d.jsx(
      "a",
      {
        className: "nav-link",
        href: n.linkedIn,
        "data-testid": "linkedin",
        onFocus: () => H({
          ...Me,
          text: "linkedin icon"
        }),
        children: /* @__PURE__ */ d.jsx(
          fe,
          {
            title: "LinkedIn Social Media Icon",
            icon: zs
          }
        )
      }
    )
  ] }) })
] }) }) });
Et.propTypes = {
  social: G.shape({
    unitLogo: g.string.isRequired,
    mediaLinks: G.shape({
      facebook: g.string,
      twitter: g.string,
      linkedIn: g.string,
      instagram: g.string,
      youtube: g.string
    })
  })
};
Et.defaultProps = {
  social: {
    unitLogo: Ws,
    mediaLinks: {
      facebook: "",
      twitter: "",
      linkedIn: "",
      instagram: "",
      youtube: ""
    }
  }
};
const Us = () => /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
  /* @__PURE__ */ d.jsx(ks, {}),
  /* @__PURE__ */ d.jsx(Bs, {})
] }), Lr = ({ social: e, contact: t }) => (Jr(() => {
  typeof window < "u" && $r({
    packageName: "component-footer",
    component: "Component Footer",
    type: "NA",
    configuration: {
      social: e,
      contact: t
    }
  });
}, []), /* @__PURE__ */ d.jsxs("footer", { role: "contentinfo", children: [
  e && /* @__PURE__ */ d.jsx(Et, { social: e }),
  t && /* @__PURE__ */ d.jsx(Ct, { contact: t }),
  /* @__PURE__ */ d.jsx(Us, {})
] }));
Lr.propTypes = {
  social: G.shape(Et.propTypes),
  contact: G.shape(Ct.propTypes)
};
const Gs = (e, t, n) => {
  Ga(n).render(yt.createElement(e, t));
}, Qs = ({ targetSelector: e, props: t }) => {
  Gs(Lr, t, document.querySelector(e));
};
export {
  Lr as ASUFooter,
  Qs as initASUFooter
};
