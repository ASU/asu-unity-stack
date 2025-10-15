import * as Zt from "chart.js";
const On = () => window.jQuery && !document.body.hasAttribute("data-bs-no-jquery") ? window.jQuery : null, Rn = /[^.]*(?=\..*)\.|.*/, Dn = /\..*/, Nn = /::\d+$/, Jt = {};
let Me = 1;
const $e = {
  mouseenter: "mouseover",
  mouseleave: "mouseout"
}, In = /* @__PURE__ */ new Set([
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
function Xe(n, e) {
  return e && `${e}::${Me++}` || n.uidEvent || Me++;
}
function Ke(n) {
  const e = Xe(n);
  return n.uidEvent = e, Jt[e] = Jt[e] || {}, Jt[e];
}
function xn(n, e) {
  return function r(a) {
    return fe(a, { delegateTarget: n }), r.oneOff && M.off(n, a.type, e), e.apply(n, [a]);
  };
}
function Mn(n, e, r) {
  return function a(l) {
    const i = n.querySelectorAll(e);
    for (let { target: s } = l; s && s !== this; s = s.parentNode)
      for (const u of i)
        if (u === s)
          return fe(l, { delegateTarget: s }), a.oneOff && M.off(n, l.type, e, r), r.apply(s, [l]);
  };
}
function Qe(n, e, r = null) {
  return Object.values(n).find((a) => a.callable === e && a.delegationSelector === r);
}
function Ze(n, e, r) {
  const a = typeof e == "string", l = a ? r : e || r;
  let i = Je(n);
  return In.has(i) || (i = n), [a, l, i];
}
function ke(n, e, r, a, l) {
  if (typeof e != "string" || !n)
    return;
  let [i, s, u] = Ze(e, r, a);
  e in $e && (s = ((C) => function(S) {
    if (!S.relatedTarget || S.relatedTarget !== S.delegateTarget && !S.delegateTarget.contains(S.relatedTarget))
      return C.call(this, S);
  })(s));
  const d = Ke(n), p = d[u] || (d[u] = {}), m = Qe(p, s, i ? r : null);
  if (m) {
    m.oneOff = m.oneOff && l;
    return;
  }
  const y = Xe(s, e.replace(Rn, "")), _ = i ? Mn(n, r, s) : xn(n, s);
  _.delegationSelector = i ? r : null, _.callable = s, _.oneOff = l, _.uidEvent = y, p[y] = _, n.addEventListener(u, _, i);
}
function le(n, e, r, a, l) {
  const i = Qe(e[r], a, l);
  i && (n.removeEventListener(r, i, !!l), delete e[r][i.uidEvent]);
}
function kn(n, e, r, a) {
  const l = e[r] || {};
  for (const [i, s] of Object.entries(l))
    i.includes(a) && le(n, e, r, s.callable, s.delegationSelector);
}
function Je(n) {
  return n = n.replace(Dn, ""), $e[n] || n;
}
const M = {
  on(n, e, r, a) {
    ke(n, e, r, a, !1);
  },
  one(n, e, r, a) {
    ke(n, e, r, a, !0);
  },
  off(n, e, r, a) {
    if (typeof e != "string" || !n)
      return;
    const [l, i, s] = Ze(e, r, a), u = s !== e, d = Ke(n), p = d[s] || {}, m = e.startsWith(".");
    if (typeof i < "u") {
      if (!Object.keys(p).length)
        return;
      le(n, d, s, i, l ? r : null);
      return;
    }
    if (m)
      for (const y of Object.keys(d))
        kn(n, d, y, e.slice(1));
    for (const [y, _] of Object.entries(p)) {
      const E = y.replace(Nn, "");
      (!u || e.includes(E)) && le(n, d, s, _.callable, _.delegationSelector);
    }
  },
  trigger(n, e, r) {
    if (typeof e != "string" || !n)
      return null;
    const a = On(), l = Je(e), i = e !== l;
    let s = null, u = !0, d = !0, p = !1;
    i && a && (s = a.Event(e, r), a(n).trigger(s), u = !s.isPropagationStopped(), d = !s.isImmediatePropagationStopped(), p = s.isDefaultPrevented());
    const m = fe(new Event(e, { bubbles: u, cancelable: !0 }), r);
    return p && m.preventDefault(), d && n.dispatchEvent(m), m.defaultPrevented && s && s.preventDefault(), m;
  }
};
function fe(n, e = {}) {
  for (const [r, a] of Object.entries(e))
    try {
      n[r] = a;
    } catch {
      Object.defineProperty(n, r, {
        configurable: !0,
        get() {
          return a;
        }
      });
    }
  return n;
}
function Pn(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var v = {}, Pe;
function Hn() {
  if (Pe) return v;
  Pe = 1;
  /**
   * @license React
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var n = Symbol.for("react.element"), e = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), l = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), s = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), p = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), y = Symbol.iterator;
  function _(o) {
    return o === null || typeof o != "object" ? null : (o = y && o[y] || o["@@iterator"], typeof o == "function" ? o : null);
  }
  var E = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, C = Object.assign, S = {};
  function T(o, f, A) {
    this.props = o, this.context = f, this.refs = S, this.updater = A || E;
  }
  T.prototype.isReactComponent = {}, T.prototype.setState = function(o, f) {
    if (typeof o != "object" && typeof o != "function" && o != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, o, f, "setState");
  }, T.prototype.forceUpdate = function(o) {
    this.updater.enqueueForceUpdate(this, o, "forceUpdate");
  };
  function R() {
  }
  R.prototype = T.prototype;
  function Q(o, f, A) {
    this.props = o, this.context = f, this.refs = S, this.updater = A || E;
  }
  var z = Q.prototype = new R();
  z.constructor = Q, C(z, T.prototype), z.isPureReactComponent = !0;
  var w = Array.isArray, D = Object.prototype.hasOwnProperty, U = { current: null }, ot = { key: !0, ref: !0, __self: !0, __source: !0 };
  function et(o, f, A) {
    var N, b = {}, x = null, H = null;
    if (f != null) for (N in f.ref !== void 0 && (H = f.ref), f.key !== void 0 && (x = "" + f.key), f) D.call(f, N) && !ot.hasOwnProperty(N) && (b[N] = f[N]);
    var F = arguments.length - 2;
    if (F === 1) b.children = A;
    else if (1 < F) {
      for (var k = Array(F), J = 0; J < F; J++) k[J] = arguments[J + 2];
      b.children = k;
    }
    if (o && o.defaultProps) for (N in F = o.defaultProps, F) b[N] === void 0 && (b[N] = F[N]);
    return { $$typeof: n, type: o, key: x, ref: H, props: b, _owner: U.current };
  }
  function I(o, f) {
    return { $$typeof: n, type: o.type, key: f, ref: o.ref, props: o.props, _owner: o._owner };
  }
  function B(o) {
    return typeof o == "object" && o !== null && o.$$typeof === n;
  }
  function O(o) {
    var f = { "=": "=0", ":": "=2" };
    return "$" + o.replace(/[=:]/g, function(A) {
      return f[A];
    });
  }
  var nt = /\/+/g;
  function st(o, f) {
    return typeof o == "object" && o !== null && o.key != null ? O("" + o.key) : f.toString(36);
  }
  function Z(o, f, A, N, b) {
    var x = typeof o;
    (x === "undefined" || x === "boolean") && (o = null);
    var H = !1;
    if (o === null) H = !0;
    else switch (x) {
      case "string":
      case "number":
        H = !0;
        break;
      case "object":
        switch (o.$$typeof) {
          case n:
          case e:
            H = !0;
        }
    }
    if (H) return H = o, b = b(H), o = N === "" ? "." + st(H, 0) : N, w(b) ? (A = "", o != null && (A = o.replace(nt, "$&/") + "/"), Z(b, f, A, "", function(J) {
      return J;
    })) : b != null && (B(b) && (b = I(b, A + (!b.key || H && H.key === b.key ? "" : ("" + b.key).replace(nt, "$&/") + "/") + o)), f.push(b)), 1;
    if (H = 0, N = N === "" ? "." : N + ":", w(o)) for (var F = 0; F < o.length; F++) {
      x = o[F];
      var k = N + st(x, F);
      H += Z(x, f, A, k, b);
    }
    else if (k = _(o), typeof k == "function") for (o = k.call(o), F = 0; !(x = o.next()).done; ) x = x.value, k = N + st(x, F++), H += Z(x, f, A, k, b);
    else if (x === "object") throw f = String(o), Error("Objects are not valid as a React child (found: " + (f === "[object Object]" ? "object with keys {" + Object.keys(o).join(", ") + "}" : f) + "). If you meant to render a collection of children, use an array instead.");
    return H;
  }
  function rt(o, f, A) {
    if (o == null) return o;
    var N = [], b = 0;
    return Z(o, N, "", "", function(x) {
      return f.call(A, x, b++);
    }), N;
  }
  function Wt(o) {
    if (o._status === -1) {
      var f = o._result;
      f = f(), f.then(function(A) {
        (o._status === 0 || o._status === -1) && (o._status = 1, o._result = A);
      }, function(A) {
        (o._status === 0 || o._status === -1) && (o._status = 2, o._result = A);
      }), o._status === -1 && (o._status = 0, o._result = f);
    }
    if (o._status === 1) return o._result.default;
    throw o._result;
  }
  var q = { current: null }, dt = { transition: null }, zt = { ReactCurrentDispatcher: q, ReactCurrentBatchConfig: dt, ReactCurrentOwner: U };
  function At() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return v.Children = { map: rt, forEach: function(o, f, A) {
    rt(o, function() {
      f.apply(this, arguments);
    }, A);
  }, count: function(o) {
    var f = 0;
    return rt(o, function() {
      f++;
    }), f;
  }, toArray: function(o) {
    return rt(o, function(f) {
      return f;
    }) || [];
  }, only: function(o) {
    if (!B(o)) throw Error("React.Children.only expected to receive a single React element child.");
    return o;
  } }, v.Component = T, v.Fragment = r, v.Profiler = l, v.PureComponent = Q, v.StrictMode = a, v.Suspense = d, v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = zt, v.act = At, v.cloneElement = function(o, f, A) {
    if (o == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + o + ".");
    var N = C({}, o.props), b = o.key, x = o.ref, H = o._owner;
    if (f != null) {
      if (f.ref !== void 0 && (x = f.ref, H = U.current), f.key !== void 0 && (b = "" + f.key), o.type && o.type.defaultProps) var F = o.type.defaultProps;
      for (k in f) D.call(f, k) && !ot.hasOwnProperty(k) && (N[k] = f[k] === void 0 && F !== void 0 ? F[k] : f[k]);
    }
    var k = arguments.length - 2;
    if (k === 1) N.children = A;
    else if (1 < k) {
      F = Array(k);
      for (var J = 0; J < k; J++) F[J] = arguments[J + 2];
      N.children = F;
    }
    return { $$typeof: n, type: o.type, key: b, ref: x, props: N, _owner: H };
  }, v.createContext = function(o) {
    return o = { $$typeof: s, _currentValue: o, _currentValue2: o, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, o.Provider = { $$typeof: i, _context: o }, o.Consumer = o;
  }, v.createElement = et, v.createFactory = function(o) {
    var f = et.bind(null, o);
    return f.type = o, f;
  }, v.createRef = function() {
    return { current: null };
  }, v.forwardRef = function(o) {
    return { $$typeof: u, render: o };
  }, v.isValidElement = B, v.lazy = function(o) {
    return { $$typeof: m, _payload: { _status: -1, _result: o }, _init: Wt };
  }, v.memo = function(o, f) {
    return { $$typeof: p, type: o, compare: f === void 0 ? null : f };
  }, v.startTransition = function(o) {
    var f = dt.transition;
    dt.transition = {};
    try {
      o();
    } finally {
      dt.transition = f;
    }
  }, v.unstable_act = At, v.useCallback = function(o, f) {
    return q.current.useCallback(o, f);
  }, v.useContext = function(o) {
    return q.current.useContext(o);
  }, v.useDebugValue = function() {
  }, v.useDeferredValue = function(o) {
    return q.current.useDeferredValue(o);
  }, v.useEffect = function(o, f) {
    return q.current.useEffect(o, f);
  }, v.useId = function() {
    return q.current.useId();
  }, v.useImperativeHandle = function(o, f, A) {
    return q.current.useImperativeHandle(o, f, A);
  }, v.useInsertionEffect = function(o, f) {
    return q.current.useInsertionEffect(o, f);
  }, v.useLayoutEffect = function(o, f) {
    return q.current.useLayoutEffect(o, f);
  }, v.useMemo = function(o, f) {
    return q.current.useMemo(o, f);
  }, v.useReducer = function(o, f, A) {
    return q.current.useReducer(o, f, A);
  }, v.useRef = function(o) {
    return q.current.useRef(o);
  }, v.useState = function(o) {
    return q.current.useState(o);
  }, v.useSyncExternalStore = function(o, f, A) {
    return q.current.useSyncExternalStore(o, f, A);
  }, v.useTransition = function() {
    return q.current.useTransition();
  }, v.version = "18.3.1", v;
}
Hn();
/*! @license DOMPurify 3.2.4 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.2.4/LICENSE */
const {
  entries: tn,
  setPrototypeOf: He,
  isFrozen: Fn,
  getPrototypeOf: Bn,
  getOwnPropertyDescriptor: Un
} = Object;
let {
  freeze: X,
  seal: at,
  create: en
} = Object, {
  apply: ce,
  construct: ue
} = typeof Reflect < "u" && Reflect;
X || (X = function(e) {
  return e;
});
at || (at = function(e) {
  return e;
});
ce || (ce = function(e, r, a) {
  return e.apply(r, a);
});
ue || (ue = function(e, r) {
  return new e(...r);
});
const Ft = K(Array.prototype.forEach), Wn = K(Array.prototype.lastIndexOf), Fe = K(Array.prototype.pop), vt = K(Array.prototype.push), zn = K(Array.prototype.splice), Ut = K(String.prototype.toLowerCase), te = K(String.prototype.toString), Be = K(String.prototype.match), Lt = K(String.prototype.replace), qn = K(String.prototype.indexOf), Gn = K(String.prototype.trim), it = K(Object.prototype.hasOwnProperty), j = K(RegExp.prototype.test), Ct = Vn(TypeError);
function K(n) {
  return function(e) {
    for (var r = arguments.length, a = new Array(r > 1 ? r - 1 : 0), l = 1; l < r; l++)
      a[l - 1] = arguments[l];
    return ce(n, e, a);
  };
}
function Vn(n) {
  return function() {
    for (var e = arguments.length, r = new Array(e), a = 0; a < e; a++)
      r[a] = arguments[a];
    return ue(n, r);
  };
}
function L(n, e) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Ut;
  He && He(n, null);
  let a = e.length;
  for (; a--; ) {
    let l = e[a];
    if (typeof l == "string") {
      const i = r(l);
      i !== l && (Fn(e) || (e[a] = i), l = i);
    }
    n[l] = !0;
  }
  return n;
}
function Yn(n) {
  for (let e = 0; e < n.length; e++)
    it(n, e) || (n[e] = null);
  return n;
}
function mt(n) {
  const e = en(null);
  for (const [r, a] of tn(n))
    it(n, r) && (Array.isArray(a) ? e[r] = Yn(a) : a && typeof a == "object" && a.constructor === Object ? e[r] = mt(a) : e[r] = a);
  return e;
}
function Ot(n, e) {
  for (; n !== null; ) {
    const a = Un(n, e);
    if (a) {
      if (a.get)
        return K(a.get);
      if (typeof a.value == "function")
        return K(a.value);
    }
    n = Bn(n);
  }
  function r() {
    return null;
  }
  return r;
}
const Ue = X(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), ee = X(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), ne = X(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), jn = X(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), oe = X(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), $n = X(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), We = X(["#text"]), ze = X(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]), re = X(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), qe = X(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Bt = X(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), Xn = at(/\{\{[\w\W]*|[\w\W]*\}\}/gm), Kn = at(/<%[\w\W]*|[\w\W]*%>/gm), Qn = at(/\$\{[\w\W]*/gm), Zn = at(/^data-[\-\w.\u00B7-\uFFFF]+$/), Jn = at(/^aria-[\-\w]+$/), nn = at(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), to = at(/^(?:\w+script|data):/i), eo = at(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), on = at(/^html$/i), no = at(/^[a-z][.\w]*(-[.\w]+)+$/i);
var Ge = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ARIA_ATTR: Jn,
  ATTR_WHITESPACE: eo,
  CUSTOM_ELEMENT: no,
  DATA_ATTR: Zn,
  DOCTYPE_NAME: on,
  ERB_EXPR: Kn,
  IS_ALLOWED_URI: nn,
  IS_SCRIPT_OR_DATA: to,
  MUSTACHE_EXPR: Xn,
  TMPLIT_EXPR: Qn
});
const Rt = {
  element: 1,
  text: 3,
  // Deprecated
  progressingInstruction: 7,
  comment: 8,
  document: 9
}, oo = function() {
  return typeof window > "u" ? null : window;
}, ro = function(e, r) {
  if (typeof e != "object" || typeof e.createPolicy != "function")
    return null;
  let a = null;
  const l = "data-tt-policy-suffix";
  r && r.hasAttribute(l) && (a = r.getAttribute(l));
  const i = "dompurify" + (a ? "#" + a : "");
  try {
    return e.createPolicy(i, {
      createHTML(s) {
        return s;
      },
      createScriptURL(s) {
        return s;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + i + " could not be created."), null;
  }
}, Ve = function() {
  return {
    afterSanitizeAttributes: [],
    afterSanitizeElements: [],
    afterSanitizeShadowDOM: [],
    beforeSanitizeAttributes: [],
    beforeSanitizeElements: [],
    beforeSanitizeShadowDOM: [],
    uponSanitizeAttribute: [],
    uponSanitizeElement: [],
    uponSanitizeShadowNode: []
  };
};
function rn() {
  let n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : oo();
  const e = (h) => rn(h);
  if (e.version = "3.2.4", e.removed = [], !n || !n.document || n.document.nodeType !== Rt.document || !n.Element)
    return e.isSupported = !1, e;
  let {
    document: r
  } = n;
  const a = r, l = a.currentScript, {
    DocumentFragment: i,
    HTMLTemplateElement: s,
    Node: u,
    Element: d,
    NodeFilter: p,
    NamedNodeMap: m = n.NamedNodeMap || n.MozNamedAttrMap,
    HTMLFormElement: y,
    DOMParser: _,
    trustedTypes: E
  } = n, C = d.prototype, S = Ot(C, "cloneNode"), T = Ot(C, "remove"), R = Ot(C, "nextSibling"), Q = Ot(C, "childNodes"), z = Ot(C, "parentNode");
  if (typeof s == "function") {
    const h = r.createElement("template");
    h.content && h.content.ownerDocument && (r = h.content.ownerDocument);
  }
  let w, D = "";
  const {
    implementation: U,
    createNodeIterator: ot,
    createDocumentFragment: et,
    getElementsByTagName: I
  } = r, {
    importNode: B
  } = a;
  let O = Ve();
  e.isSupported = typeof tn == "function" && typeof z == "function" && U && U.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: nt,
    ERB_EXPR: st,
    TMPLIT_EXPR: Z,
    DATA_ATTR: rt,
    ARIA_ATTR: Wt,
    IS_SCRIPT_OR_DATA: q,
    ATTR_WHITESPACE: dt,
    CUSTOM_ELEMENT: zt
  } = Ge;
  let {
    IS_ALLOWED_URI: At
  } = Ge, o = null;
  const f = L({}, [...Ue, ...ee, ...ne, ...oe, ...We]);
  let A = null;
  const N = L({}, [...ze, ...re, ...qe, ...Bt]);
  let b = Object.seal(en(null, {
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
  })), x = null, H = null, F = !0, k = !0, J = !1, ge = !0, gt = !1, qt = !0, pt = !1, Gt = !1, Vt = !1, ht = !1, Nt = !1, It = !1, he = !0, ye = !1;
  const Tn = "user-content-";
  let Yt = !0, bt = !1, yt = {}, Et = null;
  const Ee = L({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let _e = null;
  const Te = L({}, ["audio", "video", "img", "source", "image", "track"]);
  let jt = null;
  const Ae = L({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), xt = "http://www.w3.org/1998/Math/MathML", Mt = "http://www.w3.org/2000/svg", ut = "http://www.w3.org/1999/xhtml";
  let _t = ut, $t = !1, Xt = null;
  const An = L({}, [xt, Mt, ut], te);
  let kt = L({}, ["mi", "mo", "mn", "ms", "mtext"]), Pt = L({}, ["annotation-xml"]);
  const bn = L({}, ["title", "style", "font", "a", "script"]);
  let St = null;
  const Sn = ["application/xhtml+xml", "text/html"], wn = "text/html";
  let W = null, Tt = null;
  const vn = r.createElement("form"), be = function(t) {
    return t instanceof RegExp || t instanceof Function;
  }, Kt = function() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!(Tt && Tt === t)) {
      if ((!t || typeof t != "object") && (t = {}), t = mt(t), St = // eslint-disable-next-line unicorn/prefer-includes
      Sn.indexOf(t.PARSER_MEDIA_TYPE) === -1 ? wn : t.PARSER_MEDIA_TYPE, W = St === "application/xhtml+xml" ? te : Ut, o = it(t, "ALLOWED_TAGS") ? L({}, t.ALLOWED_TAGS, W) : f, A = it(t, "ALLOWED_ATTR") ? L({}, t.ALLOWED_ATTR, W) : N, Xt = it(t, "ALLOWED_NAMESPACES") ? L({}, t.ALLOWED_NAMESPACES, te) : An, jt = it(t, "ADD_URI_SAFE_ATTR") ? L(mt(Ae), t.ADD_URI_SAFE_ATTR, W) : Ae, _e = it(t, "ADD_DATA_URI_TAGS") ? L(mt(Te), t.ADD_DATA_URI_TAGS, W) : Te, Et = it(t, "FORBID_CONTENTS") ? L({}, t.FORBID_CONTENTS, W) : Ee, x = it(t, "FORBID_TAGS") ? L({}, t.FORBID_TAGS, W) : {}, H = it(t, "FORBID_ATTR") ? L({}, t.FORBID_ATTR, W) : {}, yt = it(t, "USE_PROFILES") ? t.USE_PROFILES : !1, F = t.ALLOW_ARIA_ATTR !== !1, k = t.ALLOW_DATA_ATTR !== !1, J = t.ALLOW_UNKNOWN_PROTOCOLS || !1, ge = t.ALLOW_SELF_CLOSE_IN_ATTR !== !1, gt = t.SAFE_FOR_TEMPLATES || !1, qt = t.SAFE_FOR_XML !== !1, pt = t.WHOLE_DOCUMENT || !1, ht = t.RETURN_DOM || !1, Nt = t.RETURN_DOM_FRAGMENT || !1, It = t.RETURN_TRUSTED_TYPE || !1, Vt = t.FORCE_BODY || !1, he = t.SANITIZE_DOM !== !1, ye = t.SANITIZE_NAMED_PROPS || !1, Yt = t.KEEP_CONTENT !== !1, bt = t.IN_PLACE || !1, At = t.ALLOWED_URI_REGEXP || nn, _t = t.NAMESPACE || ut, kt = t.MATHML_TEXT_INTEGRATION_POINTS || kt, Pt = t.HTML_INTEGRATION_POINTS || Pt, b = t.CUSTOM_ELEMENT_HANDLING || {}, t.CUSTOM_ELEMENT_HANDLING && be(t.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (b.tagNameCheck = t.CUSTOM_ELEMENT_HANDLING.tagNameCheck), t.CUSTOM_ELEMENT_HANDLING && be(t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (b.attributeNameCheck = t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), t.CUSTOM_ELEMENT_HANDLING && typeof t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (b.allowCustomizedBuiltInElements = t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), gt && (k = !1), Nt && (ht = !0), yt && (o = L({}, We), A = [], yt.html === !0 && (L(o, Ue), L(A, ze)), yt.svg === !0 && (L(o, ee), L(A, re), L(A, Bt)), yt.svgFilters === !0 && (L(o, ne), L(A, re), L(A, Bt)), yt.mathMl === !0 && (L(o, oe), L(A, qe), L(A, Bt))), t.ADD_TAGS && (o === f && (o = mt(o)), L(o, t.ADD_TAGS, W)), t.ADD_ATTR && (A === N && (A = mt(A)), L(A, t.ADD_ATTR, W)), t.ADD_URI_SAFE_ATTR && L(jt, t.ADD_URI_SAFE_ATTR, W), t.FORBID_CONTENTS && (Et === Ee && (Et = mt(Et)), L(Et, t.FORBID_CONTENTS, W)), Yt && (o["#text"] = !0), pt && L(o, ["html", "head", "body"]), o.table && (L(o, ["tbody"]), delete x.tbody), t.TRUSTED_TYPES_POLICY) {
        if (typeof t.TRUSTED_TYPES_POLICY.createHTML != "function")
          throw Ct('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof t.TRUSTED_TYPES_POLICY.createScriptURL != "function")
          throw Ct('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        w = t.TRUSTED_TYPES_POLICY, D = w.createHTML("");
      } else
        w === void 0 && (w = ro(E, l)), w !== null && typeof D == "string" && (D = w.createHTML(""));
      X && X(t), Tt = t;
    }
  }, Se = L({}, [...ee, ...ne, ...jn]), we = L({}, [...oe, ...$n]), Ln = function(t) {
    let c = z(t);
    (!c || !c.tagName) && (c = {
      namespaceURI: _t,
      tagName: "template"
    });
    const g = Ut(t.tagName), P = Ut(c.tagName);
    return Xt[t.namespaceURI] ? t.namespaceURI === Mt ? c.namespaceURI === ut ? g === "svg" : c.namespaceURI === xt ? g === "svg" && (P === "annotation-xml" || kt[P]) : !!Se[g] : t.namespaceURI === xt ? c.namespaceURI === ut ? g === "math" : c.namespaceURI === Mt ? g === "math" && Pt[P] : !!we[g] : t.namespaceURI === ut ? c.namespaceURI === Mt && !Pt[P] || c.namespaceURI === xt && !kt[P] ? !1 : !we[g] && (bn[g] || !Se[g]) : !!(St === "application/xhtml+xml" && Xt[t.namespaceURI]) : !1;
  }, lt = function(t) {
    vt(e.removed, {
      element: t
    });
    try {
      z(t).removeChild(t);
    } catch {
      T(t);
    }
  }, Ht = function(t, c) {
    try {
      vt(e.removed, {
        attribute: c.getAttributeNode(t),
        from: c
      });
    } catch {
      vt(e.removed, {
        attribute: null,
        from: c
      });
    }
    if (c.removeAttribute(t), t === "is")
      if (ht || Nt)
        try {
          lt(c);
        } catch {
        }
      else
        try {
          c.setAttribute(t, "");
        } catch {
        }
  }, ve = function(t) {
    let c = null, g = null;
    if (Vt)
      t = "<remove></remove>" + t;
    else {
      const G = Be(t, /^[\r\n\t ]+/);
      g = G && G[0];
    }
    St === "application/xhtml+xml" && _t === ut && (t = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + t + "</body></html>");
    const P = w ? w.createHTML(t) : t;
    if (_t === ut)
      try {
        c = new _().parseFromString(P, St);
      } catch {
      }
    if (!c || !c.documentElement) {
      c = U.createDocument(_t, "template", null);
      try {
        c.documentElement.innerHTML = $t ? D : P;
      } catch {
      }
    }
    const V = c.body || c.documentElement;
    return t && g && V.insertBefore(r.createTextNode(g), V.childNodes[0] || null), _t === ut ? I.call(c, pt ? "html" : "body")[0] : pt ? c.documentElement : V;
  }, Le = function(t) {
    return ot.call(
      t.ownerDocument || t,
      t,
      // eslint-disable-next-line no-bitwise
      p.SHOW_ELEMENT | p.SHOW_COMMENT | p.SHOW_TEXT | p.SHOW_PROCESSING_INSTRUCTION | p.SHOW_CDATA_SECTION,
      null
    );
  }, Qt = function(t) {
    return t instanceof y && (typeof t.nodeName != "string" || typeof t.textContent != "string" || typeof t.removeChild != "function" || !(t.attributes instanceof m) || typeof t.removeAttribute != "function" || typeof t.setAttribute != "function" || typeof t.namespaceURI != "string" || typeof t.insertBefore != "function" || typeof t.hasChildNodes != "function");
  }, Ce = function(t) {
    return typeof u == "function" && t instanceof u;
  };
  function ft(h, t, c) {
    Ft(h, (g) => {
      g.call(e, t, c, Tt);
    });
  }
  const Oe = function(t) {
    let c = null;
    if (ft(O.beforeSanitizeElements, t, null), Qt(t))
      return lt(t), !0;
    const g = W(t.nodeName);
    if (ft(O.uponSanitizeElement, t, {
      tagName: g,
      allowedTags: o
    }), t.hasChildNodes() && !Ce(t.firstElementChild) && j(/<[/\w]/g, t.innerHTML) && j(/<[/\w]/g, t.textContent) || t.nodeType === Rt.progressingInstruction || qt && t.nodeType === Rt.comment && j(/<[/\w]/g, t.data))
      return lt(t), !0;
    if (!o[g] || x[g]) {
      if (!x[g] && De(g) && (b.tagNameCheck instanceof RegExp && j(b.tagNameCheck, g) || b.tagNameCheck instanceof Function && b.tagNameCheck(g)))
        return !1;
      if (Yt && !Et[g]) {
        const P = z(t) || t.parentNode, V = Q(t) || t.childNodes;
        if (V && P) {
          const G = V.length;
          for (let tt = G - 1; tt >= 0; --tt) {
            const ct = S(V[tt], !0);
            ct.__removalCount = (t.__removalCount || 0) + 1, P.insertBefore(ct, R(t));
          }
        }
      }
      return lt(t), !0;
    }
    return t instanceof d && !Ln(t) || (g === "noscript" || g === "noembed" || g === "noframes") && j(/<\/no(script|embed|frames)/i, t.innerHTML) ? (lt(t), !0) : (gt && t.nodeType === Rt.text && (c = t.textContent, Ft([nt, st, Z], (P) => {
      c = Lt(c, P, " ");
    }), t.textContent !== c && (vt(e.removed, {
      element: t.cloneNode()
    }), t.textContent = c)), ft(O.afterSanitizeElements, t, null), !1);
  }, Re = function(t, c, g) {
    if (he && (c === "id" || c === "name") && (g in r || g in vn))
      return !1;
    if (!(k && !H[c] && j(rt, c))) {
      if (!(F && j(Wt, c))) {
        if (!A[c] || H[c]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(De(t) && (b.tagNameCheck instanceof RegExp && j(b.tagNameCheck, t) || b.tagNameCheck instanceof Function && b.tagNameCheck(t)) && (b.attributeNameCheck instanceof RegExp && j(b.attributeNameCheck, c) || b.attributeNameCheck instanceof Function && b.attributeNameCheck(c)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            c === "is" && b.allowCustomizedBuiltInElements && (b.tagNameCheck instanceof RegExp && j(b.tagNameCheck, g) || b.tagNameCheck instanceof Function && b.tagNameCheck(g)))
          ) return !1;
        } else if (!jt[c]) {
          if (!j(At, Lt(g, dt, ""))) {
            if (!((c === "src" || c === "xlink:href" || c === "href") && t !== "script" && qn(g, "data:") === 0 && _e[t])) {
              if (!(J && !j(q, Lt(g, dt, "")))) {
                if (g)
                  return !1;
              }
            }
          }
        }
      }
    }
    return !0;
  }, De = function(t) {
    return t !== "annotation-xml" && Be(t, zt);
  }, Ne = function(t) {
    ft(O.beforeSanitizeAttributes, t, null);
    const {
      attributes: c
    } = t;
    if (!c || Qt(t))
      return;
    const g = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: A,
      forceKeepAttr: void 0
    };
    let P = c.length;
    for (; P--; ) {
      const V = c[P], {
        name: G,
        namespaceURI: tt,
        value: ct
      } = V, wt = W(G);
      let Y = G === "value" ? ct : Gn(ct);
      if (g.attrName = wt, g.attrValue = Y, g.keepAttr = !0, g.forceKeepAttr = void 0, ft(O.uponSanitizeAttribute, t, g), Y = g.attrValue, ye && (wt === "id" || wt === "name") && (Ht(G, t), Y = Tn + Y), qt && j(/((--!?|])>)|<\/(style|title)/i, Y)) {
        Ht(G, t);
        continue;
      }
      if (g.forceKeepAttr || (Ht(G, t), !g.keepAttr))
        continue;
      if (!ge && j(/\/>/i, Y)) {
        Ht(G, t);
        continue;
      }
      gt && Ft([nt, st, Z], (xe) => {
        Y = Lt(Y, xe, " ");
      });
      const Ie = W(t.nodeName);
      if (Re(Ie, wt, Y)) {
        if (w && typeof E == "object" && typeof E.getAttributeType == "function" && !tt)
          switch (E.getAttributeType(Ie, wt)) {
            case "TrustedHTML": {
              Y = w.createHTML(Y);
              break;
            }
            case "TrustedScriptURL": {
              Y = w.createScriptURL(Y);
              break;
            }
          }
        try {
          tt ? t.setAttributeNS(tt, G, Y) : t.setAttribute(G, Y), Qt(t) ? lt(t) : Fe(e.removed);
        } catch {
        }
      }
    }
    ft(O.afterSanitizeAttributes, t, null);
  }, Cn = function h(t) {
    let c = null;
    const g = Le(t);
    for (ft(O.beforeSanitizeShadowDOM, t, null); c = g.nextNode(); )
      ft(O.uponSanitizeShadowNode, c, null), Oe(c), Ne(c), c.content instanceof i && h(c.content);
    ft(O.afterSanitizeShadowDOM, t, null);
  };
  return e.sanitize = function(h) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, c = null, g = null, P = null, V = null;
    if ($t = !h, $t && (h = "<!-->"), typeof h != "string" && !Ce(h))
      if (typeof h.toString == "function") {
        if (h = h.toString(), typeof h != "string")
          throw Ct("dirty is not a string, aborting");
      } else
        throw Ct("toString is not a function");
    if (!e.isSupported)
      return h;
    if (Gt || Kt(t), e.removed = [], typeof h == "string" && (bt = !1), bt) {
      if (h.nodeName) {
        const ct = W(h.nodeName);
        if (!o[ct] || x[ct])
          throw Ct("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (h instanceof u)
      c = ve("<!---->"), g = c.ownerDocument.importNode(h, !0), g.nodeType === Rt.element && g.nodeName === "BODY" || g.nodeName === "HTML" ? c = g : c.appendChild(g);
    else {
      if (!ht && !gt && !pt && // eslint-disable-next-line unicorn/prefer-includes
      h.indexOf("<") === -1)
        return w && It ? w.createHTML(h) : h;
      if (c = ve(h), !c)
        return ht ? null : It ? D : "";
    }
    c && Vt && lt(c.firstChild);
    const G = Le(bt ? h : c);
    for (; P = G.nextNode(); )
      Oe(P), Ne(P), P.content instanceof i && Cn(P.content);
    if (bt)
      return h;
    if (ht) {
      if (Nt)
        for (V = et.call(c.ownerDocument); c.firstChild; )
          V.appendChild(c.firstChild);
      else
        V = c;
      return (A.shadowroot || A.shadowrootmode) && (V = B.call(a, V, !0)), V;
    }
    let tt = pt ? c.outerHTML : c.innerHTML;
    return pt && o["!doctype"] && c.ownerDocument && c.ownerDocument.doctype && c.ownerDocument.doctype.name && j(on, c.ownerDocument.doctype.name) && (tt = "<!DOCTYPE " + c.ownerDocument.doctype.name + `>
` + tt), gt && Ft([nt, st, Z], (ct) => {
      tt = Lt(tt, ct, " ");
    }), w && It ? w.createHTML(tt) : tt;
  }, e.setConfig = function() {
    let h = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Kt(h), Gt = !0;
  }, e.clearConfig = function() {
    Tt = null, Gt = !1;
  }, e.isValidAttribute = function(h, t, c) {
    Tt || Kt({});
    const g = W(h), P = W(t);
    return Re(g, P, c);
  }, e.addHook = function(h, t) {
    typeof t == "function" && vt(O[h], t);
  }, e.removeHook = function(h, t) {
    if (t !== void 0) {
      const c = Wn(O[h], t);
      return c === -1 ? void 0 : zn(O[h], c, 1)[0];
    }
    return Fe(O[h]);
  }, e.removeHooks = function(h) {
    O[h] = [];
  }, e.removeAllHooks = function() {
    O = Ve();
  }, e;
}
rn();
let ae = !1;
const ao = (n, e) => {
  ae || (ae = !0, setTimeout(() => {
    n(), ae = !1;
  }, e));
};
function io(n) {
  if (n && typeof n.getBoundingClientRect == "function") {
    const { bottom: e, top: r } = n.getBoundingClientRect(), { offsetTop: a } = n;
    if (r < 0 && e > 0) {
      const l = n.style;
      n.style = `${l};transition: height 0s !important; overflow:hidden; height:${e}px!important;max-height:${e}px!important`, window.scrollTo({ behavior: "instant", top: a }), setTimeout(() => {
        n.style = l, window.scrollTo({
          behavior: "smooth",
          top: n.offsetTop - e / 2
        });
      }, 50);
    }
  }
}
var an = { exports: {} }, ie, Ye;
function so() {
  if (Ye) return ie;
  Ye = 1;
  var n = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return ie = n, ie;
}
var se, je;
function lo() {
  if (je) return se;
  je = 1;
  var n = so();
  function e() {
  }
  function r() {
  }
  return r.resetWarningCache = e, se = function() {
    function a(s, u, d, p, m, y) {
      if (y !== n) {
        var _ = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw _.name = "Invariant Violation", _;
      }
    }
    a.isRequired = a;
    function l() {
      return a;
    }
    var i = {
      array: a,
      bigint: a,
      bool: a,
      func: a,
      number: a,
      object: a,
      string: a,
      symbol: a,
      any: a,
      arrayOf: l,
      element: a,
      elementType: a,
      instanceOf: l,
      node: a,
      objectOf: l,
      oneOf: l,
      oneOfType: l,
      shape: l,
      exact: l,
      checkPropTypes: r,
      resetWarningCache: e
    };
    return i.PropTypes = i, i;
  }, se;
}
an.exports = lo()();
var co = an.exports;
const $ = /* @__PURE__ */ Pn(co);
$.shape({
  event: $.string,
  action: $.string,
  name: $.string,
  region: $.string,
  section: $.string,
  component: $.string,
  type: $.string,
  text: $.string
});
const Dt = ({ children: n }) => /* @__PURE__ */ React.createElement(React.Fragment, null, n);
Dt.propTypes = {
  children: $.oneOfType([
    $.arrayOf($.node),
    $.node,
    $.string
  ])
};
var uo = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(n) {
  (function() {
    var e = {}.hasOwnProperty;
    function r() {
      for (var i = "", s = 0; s < arguments.length; s++) {
        var u = arguments[s];
        u && (i = l(i, a(u)));
      }
      return i;
    }
    function a(i) {
      if (typeof i == "string" || typeof i == "number")
        return i;
      if (typeof i != "object")
        return "";
      if (Array.isArray(i))
        return r.apply(null, i);
      if (i.toString !== Object.prototype.toString && !i.toString.toString().includes("[native code]"))
        return i.toString();
      var s = "";
      for (var u in i)
        e.call(i, u) && i[u] && (s = l(s, u));
      return s;
    }
    function l(i, s) {
      return s ? i ? i + " " + s : i + s : i;
    }
    n.exports ? (r.default = r, n.exports = r) : window.classNames = r;
  })();
})(uo);
({
  ...Dt.propTypes
});
const sn = ({ children: n, className: e = "container", ...r }) => /* @__PURE__ */ React.createElement("div", { className: e, ...r }, /* @__PURE__ */ React.createElement("div", { className: "row" }, n));
sn.propTypes = {
  children: Dt.propTypes.children
};
({
  ...sn.propTypes
});
Dt.propTypes.children, $.oneOf(["0", "3", "4", "6", "8", "9", "12"]);
Dt.propTypes.children;
function ln() {
  var Q, z;
  const r = ["asu-header", "asuHeader"].find((w) => document.getElementById(w)), a = document.getElementById(r), l = document.getElementById("uds-anchor-menu"), i = l.parentNode, s = l.nextSibling, u = l.getElementsByClassName("nav-link"), d = /* @__PURE__ */ new Map();
  let p = window.scrollY, m = !1;
  const y = ((Q = document.getElementById("toolbar-bar")) == null ? void 0 : Q.offsetHeight) || 0, _ = ((z = document.getElementById("toolbar-item-administration-tray")) == null ? void 0 : z.offsetHeight) || 0, E = y + _, C = l.getBoundingClientRect().top + window.scrollY - E;
  for (let w of u) {
    const D = w.getAttribute("href").replace("#", ""), U = document.getElementById(D);
    d.set(w, U);
  }
  window.scrollY > C && (a.appendChild(l), m = !0, l.classList.add("uds-anchor-menu-attached"));
  function T(w) {
    if (w.offsetHeight === 0 || w.offsetWidth === 0)
      return T(w.parentElement);
    const D = w.getBoundingClientRect(), U = window.innerHeight || document.documentElement.clientHeight, ot = window.innerWidth || document.documentElement.clientWidth, et = D.bottom - D.top, I = D.right - D.left, B = et * I, O = Math.min(U, D.bottom) - Math.max(0, D.top), nt = Math.min(ot, D.right) - Math.max(0, D.left);
    return O * nt / B * 100;
  }
  const R = function() {
    let w = 0, D = null;
    Array.from(u).forEach((I) => {
      let B = I.getAttribute("href").replace("#", ""), O = document.getElementById(B);
      const nt = T(O);
      nt > 0 && nt > w && (w = nt, D = O.id);
    }), D && (document.querySelector('[href="#' + D + '"]').classList.add("active"), l.querySelectorAll(
      'nav > a.nav-link:not([href="#' + D + '"])'
    ).forEach(function(I) {
      I.classList.remove("active");
    }));
    const U = l.getBoundingClientRect().top, ot = a.getBoundingClientRect().bottom, et = window.scrollY > p;
    if (et && ot >= U && (m || (a.appendChild(l), m = !0, l.classList.add("uds-anchor-menu-attached"))), !et && m) {
      const I = a.getBoundingClientRect().bottom, B = l.getBoundingClientRect().top;
      (window.scrollY <= C || I < B) && (i.insertBefore(l, s), m = !1, l.classList.remove("uds-anchor-menu-attached"));
    }
    p = window.scrollY;
  };
  window.addEventListener(
    "scroll",
    () => ao(R, 100),
    { passive: !0 }
  );
  for (let [w, D] of d)
    w.addEventListener("click", function(U) {
      U.preventDefault();
      const ot = window.innerHeight, et = Math.round(ot * 0.25);
      let B = D.getBoundingClientRect().top + window.scrollY - et;
      window.scrollTo({
        top: B,
        behavior: "smooth"
      });
      const O = l.querySelector(".nav-link.active");
      O && O.classList.remove("active"), U.target.classList.add("active");
    });
}
M.on(window, "load.uds.anchor-menu", ln);
function cn() {
  const n = document.querySelectorAll('mark[class^="pen-"]'), e = new IntersectionObserver(
    (r) => {
      r.forEach((a) => {
        a.isIntersecting ? a.target.classList.add("animate-bg-in-scroll") : a.target.classList.remove("animate-bg-in-scroll");
      });
    },
    {
      threshold: 0.1
    }
  );
  n.forEach((r) => {
    e.observe(r);
  });
}
M.on(
  window,
  "load.uds.blockquote-animation",
  cn
);
function un() {
  const n = [
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
  ], r = ["Su", "M", "Tu", "W", "Th", "F", "Sa"], l = {
    month: (/* @__PURE__ */ new Date()).getMonth(),
    year: (/* @__PURE__ */ new Date()).getFullYear()
  }, i = (d, p) => {
    const m = /* @__PURE__ */ new Date(), y = [], _ = new Date(d, p).getDay(), E = new Date(d, p + 1, 0).getDate(), C = new Date(d, p, 0).getDate();
    for (let S = 1; S <= _; S++) {
      const T = C - _ + S, R = new Date(
        l.year,
        l.month - 1,
        T
      ).toLocaleString();
      y.push({ key: R, date: T, monthClass: "prev" });
    }
    for (let S = 1; S <= E; S++) {
      const T = new Date(l.year, l.month, S).toLocaleString();
      S === m.getDate() && l.month === m.getMonth() && l.year === m.getFullYear() ? y.push({
        key: T,
        date: S,
        monthClass: "current",
        todayClass: "today"
      }) : y.push({ key: T, date: S, monthClass: "current" });
    }
    if (y.length < 42) {
      const S = 42 - y.length;
      for (let T = 1; T <= S; T++) {
        const R = new Date(l.year, l.month + 1, T).toLocaleString();
        y.push({ key: R, date: T, monthClass: "next" });
      }
    }
    return y;
  }, s = () => {
    const d = document.getElementById("calendar");
    d && (d.innerHTML = `
      <h2><span class="highlight-black">${n[l.month]} ${l.year}</span></h2>
      <div class="calendar-grid">
        <div class="heading desktop">
          ${e.map((p) => `<p>${p}</p>`).join("")}
        </div>
        <div class="heading mobile">
          ${r.map((p) => `<p>${p}</p>`).join("")}
        </div>
        <div class="body">
          ${i(l.year, l.month).map(
      (p) => `<h3 id="${p.key}" class="calendar-item ${p.monthClass}" ${p.todayClass ? `aria-label="${p.todayClass[0].toUpperCase()}${p.todayClass.slice(
        1
      )}"` : ""}>
                  <span class="${p.todayClass ? p.todayClass : ""}">${p.date}</span>
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
  ((d) => {
    var p = new Date(l.year, l.month + d);
    l.year = p.getFullYear(), l.month = p.getMonth(), s();
  })(0);
}
M.on(window, "load.uds.calendar", un);
function de() {
  const n = document.querySelectorAll(".card-body");
  if (n.length === 0 && 0 < 3) {
    setTimeout(() => de(), 500);
    return;
  }
  if (n.length === 0) {
    console.warn("No .card-body found after 3 retries.");
    return;
  }
  n.forEach((r, a) => {
    const l = r.querySelector("div p"), i = l.textContent, s = window.getComputedStyle(r), u = parseInt(s.webkitLineClamp || s.lineClamp), d = parseFloat(s.lineHeight), p = parseFloat(s.fontSize), m = isNaN(d) ? parseFloat(s.lineHeight) * p : d, y = u * m;
    if (l.offsetHeight >= y) {
      let _ = "";
      const E = i.split(" ");
      let C = 0, S = "";
      for (; C < E.length && fo(
        S + (S ? " " : "") + E[C],
        l
      ) <= y; )
        S += (S ? " " : "") + E[C], C++;
      _ = S + "...";
      const T = `visible-text-${Math.random().toString(36).substring(7)}`, R = document.createElement("div");
      R.id = T, R.textContent = _, R.style.position = "absolute", R.style.top = `${l.offsetTop}px`, R.style.left = `${l.offsetLeft}px`, R.style.width = `${l.offsetWidth}px`, R.style.height = `${l.offsetHeight}px`, R.style.opacity = "0", R.style.pointerEvents = "none", R.style.zIndex = "1", r.appendChild(R), l.setAttribute("aria-describedby", T), l.setAttribute("aria-hidden", "true");
    }
  });
}
function fo(n, e) {
  const r = document.createElement(e.tagName);
  r.style.font = window.getComputedStyle(e).font, r.style.width = window.getComputedStyle(e).width, r.style.whiteSpace = "pre-wrap", r.textContent = n, document.body.appendChild(r);
  const a = r.offsetHeight;
  return document.body.removeChild(r), a;
}
M.on(window, "load.uds.card-bodies", de);
function fn() {
  const n = document.querySelector(".info-layer"), e = document.getElementById("dispatch");
  M.on(e, "click", function() {
    n == null || n.classList.toggle("active");
  });
}
M.on(window, "load.uds.ranking-card", fn);
function dn() {
  Zt.Chart.register(...Zt.registerables);
  const n = 50;
  var e = document.getElementById("uds-donut");
  if (!e)
    return;
  document.getElementById("percentage-display").innerHTML = n + "%";
  const r = {
    type: "doughnut",
    data: {
      datasets: [
        {
          data: [n, 100 - n],
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
  new Zt.Chart(e, r);
}
M.on(window, "load.uds.chart", dn);
function pn() {
  function n({ target: e }) {
    const r = e.getAttribute("href");
    e.getAttribute("data-bs-toggle") !== "collapse" || !r || !r.includes("#") || io(
      document.querySelector(".collapsing")
    );
  }
  M.on(document, "click.uds.collapse", n);
}
M.on(window, "load.uds.collapse", pn);
function pe() {
  var e, r, a, l;
  const n = (i) => {
    window.dataLayer = window.dataLayer || [];
    const { dataLayer: s } = window;
    s && s.push(i);
  };
  (e = document.querySelectorAll("[data-ga-header]")) == null || e.forEach(
    (i) => i.addEventListener("click", () => {
      const s = i.getAttribute("data-ga-header-event") || "link";
      let u = i.getAttribute("data-ga-header-action") || "click";
      const d = i.getAttribute("aria-expanded");
      d && (u = d === "false" ? "open" : "close");
      const p = i.getAttribute("data-ga-header-type") || "internal link", m = i.getAttribute("data-ga-header-section") || "main navbar", y = i.getAttribute("data-ga-header") || "", _ = i.getAttribute("data-ga-header-component");
      n({
        name: "onclick",
        event: s.toLowerCase(),
        action: u.toLowerCase(),
        type: p.toLowerCase(),
        section: m.toLowerCase(),
        region: "navbar",
        text: y.toLowerCase(),
        ..._ && {
          component: _.toLowerCase()
        }
      });
    })
  ), (r = document.querySelectorAll("[data-ga-input-header-event]")) == null || r.forEach(
    (i) => i.addEventListener("change", (s) => {
      const u = i.getAttribute("data-ga-input-header-event") || "", d = s.target.value || "";
      n({
        name: "onenter",
        action: "type",
        type: "main search",
        section: "topbar",
        region: "navbar",
        text: d.toLowerCase(),
        event: u.toLowerCase()
      });
    })
  ), (a = document.querySelectorAll("[data-ga]")) == null || a.forEach(
    (i) => i.addEventListener("click", () => {
      const s = i.getAttribute("data-ga-name") || "", u = i.getAttribute("data-ga-event") || "";
      let d = i.getAttribute("data-ga-action") || "";
      const p = i.getAttribute("aria-expanded");
      p && (d = p === "false" ? "open" : "close");
      const m = i.getAttribute("data-ga-type") || "", y = i.getAttribute("data-ga-section") || "", _ = i.getAttribute("data-ga-region") || "", E = i.getAttribute("data-ga") || "", C = i.getAttribute("data-ga-component") || "";
      n({
        name: s.toLowerCase(),
        event: u.toLowerCase(),
        action: d.toLowerCase(),
        type: m.toLowerCase(),
        section: y.toLowerCase(),
        region: _.toLowerCase(),
        text: E.toLowerCase(),
        component: C.toLowerCase()
      });
    })
  ), (l = document.querySelectorAll("[data-ga-input]")) == null || l.forEach(
    (i) => i.addEventListener("change", (s) => {
      const u = i.getAttribute("data-ga-input-name") || "", d = i.getAttribute("data-ga-input-action") || "", p = i.getAttribute("data-ga-input") || "", m = i.getAttribute("data-ga-input-region") || "", y = i.getAttribute("data-ga-input-section") || "";
      let _ = i.getAttribute("data-ga-input-event") || "", E;
      switch (p) {
        case "checkbox":
          E = s.target.labels[0].textContent || "", _ = s.target.checked ? _ : "deselect";
          break;
        case "radio button":
          E = s.target.labels[0].textContent || "";
          break;
        case "blur":
          E = s.target.value.toLowerCase() || "";
          break;
        default:
          E = [...s.target.selectedOptions].map((C) => C.value).join(",") || "";
          break;
      }
      n({
        name: u.toLowerCase(),
        event: _.toLowerCase(),
        action: d.toLowerCase(),
        type: p.toLowerCase(),
        section: y.toLowerCase(),
        region: m.toLowerCase(),
        text: E.toLowerCase()
      });
    })
  ), document.querySelectorAll("[data-ga-footer]").forEach(
    (i) => i.addEventListener("focus", () => {
      const s = {
        type: i.getAttribute("data-ga-footer-type").toLowerCase(),
        section: i.getAttribute("data-ga-footer-section").toLowerCase(),
        text: i.getAttribute("data-ga-footer").toLowerCase()
      };
      n({
        event: "link",
        action: "click",
        name: "onclick",
        region: "footer",
        ...s
      });
    })
  );
}
window.initDataLayer = window.initDataLayer || pe;
M.on(window, "load.uds.data-layer", pe);
const me = () => {
  const n = () => {
    const e = document.getElementById("asu-header");
    window.scrollY > (e == null ? void 0 : e.getBoundingClientRect().top) ? e == null || e.classList.add("scrolled") : e == null || e.classList.remove("scrolled");
  };
  M.on(window, "scroll.uds.header", n);
};
window.initGlobalHeader = window.initGlobalHeader || me;
M.on(window, "load.uds.global-header", me);
function mn() {
  const n = "video", e = "#playHeroVid", r = "#pauseHeroVid", a = "click", l = "block", i = "none", s = document.querySelector(n), u = document.querySelector(e), d = document.querySelector(r);
  function p(E) {
    E.paused ? E.play() : E.pause();
  }
  function m(E, C) {
    getComputedStyle(E).display === i ? (C.style.display = i, E.style.display = l, E.focus()) : (E.style.display = i, C.style.display = l, C.focus());
  }
  function y(E) {
    E.stopPropagation(), m(u, d), p(s);
  }
  function _(E) {
    E.stopPropagation(), m(u, d), p(s);
  }
  d == null || d.addEventListener(a, y), u == null || u.addEventListener(a, _);
}
M.on(window, "load.uds.heroes-video", mn);
const gn = () => {
  const e = () => {
    document.querySelectorAll(".parallax-container").forEach((s) => {
      const u = s.querySelector("img"), d = s.offsetHeight - u.height * 1.2, p = u.dataset.parallaxType === "scroll-to" ? window.innerHeight : window.innerHeight + s.offsetHeight, m = s.getBoundingClientRect().top, _ = (window.innerHeight - m) / p;
      if (_ < 0)
        u.style.top = d + "px";
      else if (_ > 1)
        u.style.top = "0";
      else {
        const E = d * (1 - _);
        u.style.top = E + "px";
      }
    });
  }, r = (s) => {
    const u = s.parentNode, d = s.width, p = s.height;
    let m = u.offsetWidth / d, y = 0, _ = p * m, E = d * m;
    const C = +s.dataset.parallaxFactor || 1.2;
    !s.dataset.noScale && _ < u.offsetHeight * C && (m = u.offsetHeight * C / _, _ *= m, E *= m, y = (E - u.offsetWidth) / 2 * -1), s.style.height = _ + "px", s.style.left = y + "px";
  }, a = () => {
    document.querySelectorAll(".parallax-container img").forEach((s, u) => {
      s.complete ? r(s) : s.onload = () => r(s);
    });
  }, l = (s) => {
    const { dataLayer: u } = window, d = {
      event: "link",
      action: "click",
      name: "onclick",
      type: "internal link",
      region: "main content",
      ...s
    };
    u && u.push(d);
  };
  document.querySelectorAll("[data-ga-image-parallax]").forEach(
    (s) => M.on(s, "focus.uds.image-parallax", () => {
      const u = {
        section: s.getAttribute("data-ga-image-parallax-section").toLowerCase(),
        text: s.getAttribute("data-ga-image-parallax").toLowerCase()
      };
      l(u);
    })
  ), a(), M.on(window, "resize.uds.image-parallax", a), M.on(window, "scroll.uds.image-parallax", e);
};
M.on(window, "load.uds.image-parallax", gn);
function hn() {
  var n, e;
  (n = document.getElementById("openModalButton")) == null || n.addEventListener("click", function() {
    document.getElementById("uds-modal").classList.add("open");
  }), (e = document.getElementById("closeModalButton")) == null || e.addEventListener("click", function() {
    document.getElementById("uds-modal").classList.remove("open");
  });
}
M.on(window, "load.uds.modals", hn);
function yn() {
  const n = "a", e = "button", r = ".nav-tabs", a = ".nav-item", l = ".uds-tabbed-panels", i = ".scroll-control-prev", s = ".scroll-control-next", u = "click", d = "scroll", p = "focus", m = "none", y = "block", C = (S) => {
    [n, e].includes(S.target.localName) && S.target.focus();
  };
  document.querySelectorAll(l).forEach((S) => {
    const T = S.querySelector(r), R = S.querySelectorAll(a), Q = S.querySelector(
      i
    ), z = S.querySelector(
      s
    );
    let w = 0;
    S.addEventListener(u, function(I) {
      C(I);
    });
    const D = (I, B, O) => {
      B.preventDefault();
      const st = getComputedStyle(T).left.replace("px", "");
      let Z = parseInt(st, 10);
      O === 1 && w > 0 && (w -= 1), w < R.length - 1 && O == -1 && (w += 1), T.dataset.scrollPosition = w, Z = 0;
      for (var rt = 0; rt < w; rt++)
        Z += R[rt].offsetWidth + parseInt(getComputedStyle(R[rt]).marginLeft, 10) + parseInt(getComputedStyle(R[rt]).marginRight, 10);
      T.scrollLeft = Z, U(I, Z);
    }, U = (I, B) => {
      const O = T.scrollWidth - B;
      w == 0 ? Q.style.display = m : Q.style.display = y, O <= S.offsetWidth ? z.style.display = m : z.style.display = y;
    };
    T.addEventListener(d, (I) => {
      const B = I.target.scrollLeft, O = T.offsetWidth + B + 10 >= T.scrollWidth;
      Q.style.display = B < 10 ? m : y, z.style.display = O ? m : y;
    }), R.forEach((I) => {
      I.addEventListener(p, function(B) {
        I.scrollIntoView();
      });
    }), z.addEventListener(u, function(I) {
      window.innerWidth > 992 && D(this, I, -1);
    }), Q.addEventListener(u, function(I) {
      window.innerWidth > 992 && D(this, I, 1);
    }), Q.style.display = m;
    const ot = T.scrollWidth, et = S.offsetWidth;
    ot <= et && (z.style.display = m);
  });
}
M.on(window, "load.uds.tabs", yn);
function En() {
  function n() {
    const a = ".uds-table-fixed-wrapper", l = ".uds-table.uds-table-fixed table", i = ".scroll-control.previous";
    document.querySelectorAll(a).forEach((u, d) => {
      const p = u.querySelector(l);
      p.setAttribute("id", "uds-table-" + d);
      const m = p.querySelector("tbody tr > *"), y = u.querySelector(i);
      y.style.left = m.offsetWidth + "px";
    });
  }
  function e() {
    const a = ".uds-table-fixed", l = ".uds-table-fixed-wrapper", i = ".scroll-control.previous", s = ".scroll-control.next";
    document.querySelectorAll(l).forEach((d, p) => {
      const m = d.querySelector(a), y = d.querySelector(i), _ = d.querySelector(s);
      ["click", "focus"].forEach((E) => {
        M.on(y, E, function() {
          m.scrollLeft -= 100;
        }), M.on(_, E, function() {
          m.scrollLeft += 100;
        });
      });
    });
  }
  function r(a, l) {
    let i;
    return (...s) => {
      clearTimeout(i), i = setTimeout(() => {
        a.apply(this, s);
      }, l);
    };
  }
  n(), e(), M.on(window, "resize", function() {
    r(n, 100)();
  });
}
M.on(window, "load.uds.fixed-table", En);
function _n() {
  const n = "video", e = ".uds-video-btn-play", r = ".uds-video-overlay", a = "click", l = "ended", i = "flex", s = "none", u = document.querySelector(n), d = document.querySelector(r), p = document.querySelector(e);
  function m(T) {
    T.style.display === s ? T.style.display = i : T.style.display = s;
  }
  function y(T) {
    T.paused ? T.play() : T.pause();
  }
  function _(T) {
    y(this), m(this.nextElementSibling);
  }
  function E(T) {
    T.stopPropagation();
    const R = this.parentNode;
    m(R), y(u);
  }
  function C(T) {
    m(this), y(u);
  }
  function S(T) {
    m(d);
  }
  u == null || u.addEventListener(a, _), p == null || p.addEventListener(a, E), d == null || d.addEventListener(a, C), u == null || u.addEventListener(l, S);
}
M.on(window, "load.uds.video", _n);
const po = {
  // Banner, // code updated to use bootstrap alert so we don't need this
  initAnchorMenu: ln,
  initBlockquoteAnimation: cn,
  initCalendar: un,
  initCollapse: pn,
  initChart: dn,
  initDataLayer: pe,
  initFixedTable: En,
  initGlobalHeader: me,
  initHeroesVideo: mn,
  initImageParallax: gn,
  initModals: hn,
  initRankingCard: fn,
  initTabbedPanels: yn,
  initVideo: _n,
  initCardBodies: de
};
export {
  po as default
};
//# sourceMappingURL=unity-bootstrap.es.js.map
