import * as ne from "chart.js";
const kn = () => window.jQuery && !document.body.hasAttribute("data-bs-no-jquery") ? window.jQuery : null, Pn = /[^.]*(?=\..*)\.|.*/, Hn = /\..*/, Fn = /::\d+$/, oe = {};
let We = 1;
const on = {
  mouseenter: "mouseover",
  mouseleave: "mouseout"
}, Bn = /* @__PURE__ */ new Set([
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
function rn(n, e) {
  return e && `${e}::${We++}` || n.uidEvent || We++;
}
function an(n) {
  const e = rn(n);
  return n.uidEvent = e, oe[e] = oe[e] || {}, oe[e];
}
function Un(n, e) {
  return function a(i) {
    return Ee(i, { delegateTarget: n }), a.oneOff && M.off(n, i.type, e), e.apply(n, [i]);
  };
}
function Wn(n, e, a) {
  return function i(r) {
    const l = n.querySelectorAll(e);
    for (let { target: s } = r; s && s !== this; s = s.parentNode)
      for (const p of l)
        if (p === s)
          return Ee(r, { delegateTarget: s }), i.oneOff && M.off(n, r.type, e, a), a.apply(s, [r]);
  };
}
function sn(n, e, a = null) {
  return Object.values(n).find((i) => i.callable === e && i.delegationSelector === a);
}
function ln(n, e, a) {
  const i = typeof e == "string", r = i ? a : e || a;
  let l = cn(n);
  return Bn.has(l) || (l = n), [i, r, l];
}
function ze(n, e, a, i, r) {
  if (typeof e != "string" || !n)
    return;
  let [l, s, p] = ln(e, a, i);
  e in on && (s = ((_) => function(y) {
    if (!y.relatedTarget || y.relatedTarget !== y.delegateTarget && !y.delegateTarget.contains(y.relatedTarget))
      return _.call(this, y);
  })(s));
  const u = an(n), d = u[p] || (u[p] = {}), m = sn(d, s, l ? a : null);
  if (m) {
    m.oneOff = m.oneOff && r;
    return;
  }
  const T = rn(s, e.replace(Pn, "")), g = l ? Wn(n, a, s) : Un(n, s);
  g.delegationSelector = l ? a : null, g.callable = s, g.oneOff = r, g.uidEvent = T, d[T] = g, n.addEventListener(p, g, l);
}
function ge(n, e, a, i, r) {
  const l = sn(e[a], i, r);
  l && (n.removeEventListener(a, l, !!r), delete e[a][l.uidEvent]);
}
function zn(n, e, a, i) {
  const r = e[a] || {};
  for (const [l, s] of Object.entries(r))
    l.includes(i) && ge(n, e, a, s.callable, s.delegationSelector);
}
function cn(n) {
  return n = n.replace(Hn, ""), on[n] || n;
}
const M = {
  on(n, e, a, i) {
    ze(n, e, a, i, !1);
  },
  one(n, e, a, i) {
    ze(n, e, a, i, !0);
  },
  off(n, e, a, i) {
    if (typeof e != "string" || !n)
      return;
    const [r, l, s] = ln(e, a, i), p = s !== e, u = an(n), d = u[s] || {}, m = e.startsWith(".");
    if (typeof l < "u") {
      if (!Object.keys(d).length)
        return;
      ge(n, u, s, l, r ? a : null);
      return;
    }
    if (m)
      for (const T of Object.keys(u))
        zn(n, u, T, e.slice(1));
    for (const [T, g] of Object.entries(d)) {
      const A = T.replace(Fn, "");
      (!p || e.includes(A)) && ge(n, u, s, g.callable, g.delegationSelector);
    }
  },
  trigger(n, e, a) {
    if (typeof e != "string" || !n)
      return null;
    const i = kn(), r = cn(e), l = e !== r;
    let s = null, p = !0, u = !0, d = !1;
    l && i && (s = i.Event(e, a), i(n).trigger(s), p = !s.isPropagationStopped(), u = !s.isImmediatePropagationStopped(), d = s.isDefaultPrevented());
    const m = Ee(new Event(e, { bubbles: p, cancelable: !0 }), a);
    return d && m.preventDefault(), u && n.dispatchEvent(m), m.defaultPrevented && s && s.preventDefault(), m;
  }
};
function Ee(n, e = {}) {
  for (const [a, i] of Object.entries(e))
    try {
      n[a] = i;
    } catch {
      Object.defineProperty(n, a, {
        configurable: !0,
        get() {
          return i;
        }
      });
    }
  return n;
}
function qn(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var re = { exports: {} }, L = {}, qe;
function Gn() {
  if (qe) return L;
  qe = 1;
  /**
   * @license React
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var n = Symbol.for("react.element"), e = Symbol.for("react.portal"), a = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), r = Symbol.for("react.profiler"), l = Symbol.for("react.provider"), s = Symbol.for("react.context"), p = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), d = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), T = Symbol.iterator;
  function g(o) {
    return o === null || typeof o != "object" ? null : (o = T && o[T] || o["@@iterator"], typeof o == "function" ? o : null);
  }
  var A = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, _ = Object.assign, y = {};
  function v(o, f, b) {
    this.props = o, this.context = f, this.refs = y, this.updater = b || A;
  }
  v.prototype.isReactComponent = {}, v.prototype.setState = function(o, f) {
    if (typeof o != "object" && typeof o != "function" && o != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, o, f, "setState");
  }, v.prototype.forceUpdate = function(o) {
    this.updater.enqueueForceUpdate(this, o, "forceUpdate");
  };
  function w() {
  }
  w.prototype = v.prototype;
  function $(o, f, b) {
    this.props = o, this.context = f, this.refs = y, this.updater = b || A;
  }
  var Q = $.prototype = new w();
  Q.constructor = $, _(Q, v.prototype), Q.isPureReactComponent = !0;
  var N = Array.isArray, ot = Object.prototype.hasOwnProperty, it = { current: null }, R = { key: !0, ref: !0, __self: !0, __source: !0 };
  function P(o, f, b) {
    var I, S = {}, k = null, H = null;
    if (f != null) for (I in f.ref !== void 0 && (H = f.ref), f.key !== void 0 && (k = "" + f.key), f) ot.call(f, I) && !R.hasOwnProperty(I) && (S[I] = f[I]);
    var x = arguments.length - 2;
    if (x === 1) S.children = b;
    else if (1 < x) {
      for (var F = Array(x), Z = 0; Z < x; Z++) F[Z] = arguments[Z + 2];
      S.children = F;
    }
    if (o && o.defaultProps) for (I in x = o.defaultProps, x) S[I] === void 0 && (S[I] = x[I]);
    return { $$typeof: n, type: o, key: k, ref: H, props: S, _owner: it.current };
  }
  function O(o, f) {
    return { $$typeof: n, type: o.type, key: f, ref: o.ref, props: o.props, _owner: o._owner };
  }
  function W(o) {
    return typeof o == "object" && o !== null && o.$$typeof === n;
  }
  function D(o) {
    var f = { "=": "=0", ":": "=2" };
    return "$" + o.replace(/[=:]/g, function(b) {
      return f[b];
    });
  }
  var V = /\/+/g;
  function z(o, f) {
    return typeof o == "object" && o !== null && o.key != null ? D("" + o.key) : f.toString(36);
  }
  function U(o, f, b, I, S) {
    var k = typeof o;
    (k === "undefined" || k === "boolean") && (o = null);
    var H = !1;
    if (o === null) H = !0;
    else switch (k) {
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
    if (H) return H = o, S = S(H), o = I === "" ? "." + z(H, 0) : I, N(S) ? (b = "", o != null && (b = o.replace(V, "$&/") + "/"), U(S, f, b, "", function(Z) {
      return Z;
    })) : S != null && (W(S) && (S = O(S, b + (!S.key || H && H.key === S.key ? "" : ("" + S.key).replace(V, "$&/") + "/") + o)), f.push(S)), 1;
    if (H = 0, I = I === "" ? "." : I + ":", N(o)) for (var x = 0; x < o.length; x++) {
      k = o[x];
      var F = I + z(k, x);
      H += U(k, f, b, F, S);
    }
    else if (F = g(o), typeof F == "function") for (o = F.call(o), x = 0; !(k = o.next()).done; ) k = k.value, F = I + z(k, x++), H += U(k, f, b, F, S);
    else if (k === "object") throw f = String(o), Error("Objects are not valid as a React child (found: " + (f === "[object Object]" ? "object with keys {" + Object.keys(o).join(", ") + "}" : f) + "). If you meant to render a collection of children, use an array instead.");
    return H;
  }
  function j(o, f, b) {
    if (o == null) return o;
    var I = [], S = 0;
    return U(o, I, "", "", function(k) {
      return f.call(b, k, S++);
    }), I;
  }
  function gt(o) {
    if (o._status === -1) {
      var f = o._result;
      f = f(), f.then(function(b) {
        (o._status === 0 || o._status === -1) && (o._status = 1, o._result = b);
      }, function(b) {
        (o._status === 0 || o._status === -1) && (o._status = 2, o._result = b);
      }), o._status === -1 && (o._status = 0, o._result = f);
    }
    if (o._status === 1) return o._result.default;
    throw o._result;
  }
  var q = { current: null }, ut = { transition: null }, Lt = { ReactCurrentDispatcher: q, ReactCurrentBatchConfig: ut, ReactCurrentOwner: it };
  function ht() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return L.Children = { map: j, forEach: function(o, f, b) {
    j(o, function() {
      f.apply(this, arguments);
    }, b);
  }, count: function(o) {
    var f = 0;
    return j(o, function() {
      f++;
    }), f;
  }, toArray: function(o) {
    return j(o, function(f) {
      return f;
    }) || [];
  }, only: function(o) {
    if (!W(o)) throw Error("React.Children.only expected to receive a single React element child.");
    return o;
  } }, L.Component = v, L.Fragment = a, L.Profiler = r, L.PureComponent = $, L.StrictMode = i, L.Suspense = u, L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Lt, L.act = ht, L.cloneElement = function(o, f, b) {
    if (o == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + o + ".");
    var I = _({}, o.props), S = o.key, k = o.ref, H = o._owner;
    if (f != null) {
      if (f.ref !== void 0 && (k = f.ref, H = it.current), f.key !== void 0 && (S = "" + f.key), o.type && o.type.defaultProps) var x = o.type.defaultProps;
      for (F in f) ot.call(f, F) && !R.hasOwnProperty(F) && (I[F] = f[F] === void 0 && x !== void 0 ? x[F] : f[F]);
    }
    var F = arguments.length - 2;
    if (F === 1) I.children = b;
    else if (1 < F) {
      x = Array(F);
      for (var Z = 0; Z < F; Z++) x[Z] = arguments[Z + 2];
      I.children = x;
    }
    return { $$typeof: n, type: o.type, key: S, ref: k, props: I, _owner: H };
  }, L.createContext = function(o) {
    return o = { $$typeof: s, _currentValue: o, _currentValue2: o, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, o.Provider = { $$typeof: l, _context: o }, o.Consumer = o;
  }, L.createElement = P, L.createFactory = function(o) {
    var f = P.bind(null, o);
    return f.type = o, f;
  }, L.createRef = function() {
    return { current: null };
  }, L.forwardRef = function(o) {
    return { $$typeof: p, render: o };
  }, L.isValidElement = W, L.lazy = function(o) {
    return { $$typeof: m, _payload: { _status: -1, _result: o }, _init: gt };
  }, L.memo = function(o, f) {
    return { $$typeof: d, type: o, compare: f === void 0 ? null : f };
  }, L.startTransition = function(o) {
    var f = ut.transition;
    ut.transition = {};
    try {
      o();
    } finally {
      ut.transition = f;
    }
  }, L.unstable_act = ht, L.useCallback = function(o, f) {
    return q.current.useCallback(o, f);
  }, L.useContext = function(o) {
    return q.current.useContext(o);
  }, L.useDebugValue = function() {
  }, L.useDeferredValue = function(o) {
    return q.current.useDeferredValue(o);
  }, L.useEffect = function(o, f) {
    return q.current.useEffect(o, f);
  }, L.useId = function() {
    return q.current.useId();
  }, L.useImperativeHandle = function(o, f, b) {
    return q.current.useImperativeHandle(o, f, b);
  }, L.useInsertionEffect = function(o, f) {
    return q.current.useInsertionEffect(o, f);
  }, L.useLayoutEffect = function(o, f) {
    return q.current.useLayoutEffect(o, f);
  }, L.useMemo = function(o, f) {
    return q.current.useMemo(o, f);
  }, L.useReducer = function(o, f, b) {
    return q.current.useReducer(o, f, b);
  }, L.useRef = function(o) {
    return q.current.useRef(o);
  }, L.useState = function(o) {
    return q.current.useState(o);
  }, L.useSyncExternalStore = function(o, f, b) {
    return q.current.useSyncExternalStore(o, f, b);
  }, L.useTransition = function() {
    return q.current.useTransition();
  }, L.version = "18.3.1", L;
}
var Ge;
function $n() {
  return Ge || (Ge = 1, re.exports = Gn()), re.exports;
}
$n();
/*! @license DOMPurify 3.4.0 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.4.0/LICENSE */
const {
  entries: un,
  setPrototypeOf: $e,
  isFrozen: Vn,
  getPrototypeOf: Yn,
  getOwnPropertyDescriptor: jn
} = Object;
let {
  freeze: et,
  seal: st,
  create: kt
} = Object, {
  apply: he,
  construct: ye
} = typeof Reflect < "u" && Reflect;
et || (et = function(e) {
  return e;
});
st || (st = function(e) {
  return e;
});
he || (he = function(e, a) {
  for (var i = arguments.length, r = new Array(i > 2 ? i - 2 : 0), l = 2; l < i; l++)
    r[l - 2] = arguments[l];
  return e.apply(a, r);
});
ye || (ye = function(e) {
  for (var a = arguments.length, i = new Array(a > 1 ? a - 1 : 0), r = 1; r < a; r++)
    i[r - 1] = arguments[r];
  return new e(...i);
});
const Dt = nt(Array.prototype.forEach), Xn = nt(Array.prototype.lastIndexOf), Ve = nt(Array.prototype.pop), Nt = nt(Array.prototype.push), Kn = nt(Array.prototype.splice), Gt = nt(String.prototype.toLowerCase), ae = nt(String.prototype.toString), ie = nt(String.prototype.match), wt = nt(String.prototype.replace), Qn = nt(String.prototype.indexOf), Zn = nt(String.prototype.trim), ct = nt(Object.prototype.hasOwnProperty), J = nt(RegExp.prototype.test), xt = Jn(TypeError);
function nt(n) {
  return function(e) {
    e instanceof RegExp && (e.lastIndex = 0);
    for (var a = arguments.length, i = new Array(a > 1 ? a - 1 : 0), r = 1; r < a; r++)
      i[r - 1] = arguments[r];
    return he(n, e, i);
  };
}
function Jn(n) {
  return function() {
    for (var e = arguments.length, a = new Array(e), i = 0; i < e; i++)
      a[i] = arguments[i];
    return ye(n, a);
  };
}
function C(n, e) {
  let a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Gt;
  $e && $e(n, null);
  let i = e.length;
  for (; i--; ) {
    let r = e[i];
    if (typeof r == "string") {
      const l = a(r);
      l !== r && (Vn(e) || (e[i] = l), r = l);
    }
    n[r] = !0;
  }
  return n;
}
function to(n) {
  for (let e = 0; e < n.length; e++)
    ct(n, e) || (n[e] = null);
  return n;
}
function pt(n) {
  const e = kt(null);
  for (const [a, i] of un(n))
    ct(n, a) && (Array.isArray(i) ? e[a] = to(i) : i && typeof i == "object" && i.constructor === Object ? e[a] = pt(i) : e[a] = i);
  return e;
}
function It(n, e) {
  for (; n !== null; ) {
    const i = jn(n, e);
    if (i) {
      if (i.get)
        return nt(i.get);
      if (typeof i.value == "function")
        return nt(i.value);
    }
    n = Yn(n);
  }
  function a() {
    return null;
  }
  return a;
}
const Ye = et(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), se = et(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), le = et(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), eo = et(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), ce = et(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), no = et(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), je = et(["#text"]), Xe = et(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]), ue = et(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Ke = et(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), qt = et(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), oo = st(/\{\{[\w\W]*|[\w\W]*\}\}/gm), ro = st(/<%[\w\W]*|[\w\W]*%>/gm), ao = st(/\$\{[\w\W]*/gm), io = st(/^data-[\-\w.\u00B7-\uFFFF]+$/), so = st(/^aria-[\-\w]+$/), fn = st(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), lo = st(/^(?:\w+script|data):/i), co = st(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), dn = st(/^html$/i), uo = st(/^[a-z][.\w]*(-[.\w]+)+$/i);
var Qe = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ARIA_ATTR: so,
  ATTR_WHITESPACE: co,
  CUSTOM_ELEMENT: uo,
  DATA_ATTR: io,
  DOCTYPE_NAME: dn,
  ERB_EXPR: ro,
  IS_ALLOWED_URI: fn,
  IS_SCRIPT_OR_DATA: lo,
  MUSTACHE_EXPR: oo,
  TMPLIT_EXPR: ao
});
const Mt = {
  element: 1,
  text: 3,
  // Deprecated
  progressingInstruction: 7,
  comment: 8,
  document: 9
}, fo = function() {
  return typeof window > "u" ? null : window;
}, po = function(e, a) {
  if (typeof e != "object" || typeof e.createPolicy != "function")
    return null;
  let i = null;
  const r = "data-tt-policy-suffix";
  a && a.hasAttribute(r) && (i = a.getAttribute(r));
  const l = "dompurify" + (i ? "#" + i : "");
  try {
    return e.createPolicy(l, {
      createHTML(s) {
        return s;
      },
      createScriptURL(s) {
        return s;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + l + " could not be created."), null;
  }
}, Ze = function() {
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
function pn() {
  let n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : fo();
  const e = (E) => pn(E);
  if (e.version = "3.4.0", e.removed = [], !n || !n.document || n.document.nodeType !== Mt.document || !n.Element)
    return e.isSupported = !1, e;
  let {
    document: a
  } = n;
  const i = a, r = i.currentScript, {
    DocumentFragment: l,
    HTMLTemplateElement: s,
    Node: p,
    Element: u,
    NodeFilter: d,
    NamedNodeMap: m = n.NamedNodeMap || n.MozNamedAttrMap,
    HTMLFormElement: T,
    DOMParser: g,
    trustedTypes: A
  } = n, _ = u.prototype, y = It(_, "cloneNode"), v = It(_, "remove"), w = It(_, "nextSibling"), $ = It(_, "childNodes"), Q = It(_, "parentNode");
  if (typeof s == "function") {
    const E = a.createElement("template");
    E.content && E.content.ownerDocument && (a = E.content.ownerDocument);
  }
  let N, ot = "";
  const {
    implementation: it,
    createNodeIterator: R,
    createDocumentFragment: P,
    getElementsByTagName: O
  } = a, {
    importNode: W
  } = i;
  let D = Ze();
  e.isSupported = typeof un == "function" && typeof Q == "function" && it && it.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: V,
    ERB_EXPR: z,
    TMPLIT_EXPR: U,
    DATA_ATTR: j,
    ARIA_ATTR: gt,
    IS_SCRIPT_OR_DATA: q,
    ATTR_WHITESPACE: ut,
    CUSTOM_ELEMENT: Lt
  } = Qe;
  let {
    IS_ALLOWED_URI: ht
  } = Qe, o = null;
  const f = C({}, [...Ye, ...se, ...le, ...ce, ...je]);
  let b = null;
  const I = C({}, [...Xe, ...ue, ...Ke, ...qt]);
  let S = Object.seal(kt(null, {
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
  })), k = null, H = null;
  const x = Object.seal(kt(null, {
    tagCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    attributeCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    }
  }));
  let F = !0, Z = !0, be = !1, Se = !0, Et = !1, Ct = !0, Tt = !1, $t = !1, Vt = !1, At = !1, Ht = !1, Ft = !1, ve = !0, we = !1;
  const Rn = "user-content-";
  let Yt = !0, Rt = !1, bt = {}, ft = null;
  const jt = C({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let Le = null;
  const Ce = C({}, ["audio", "video", "img", "source", "image", "track"]);
  let Xt = null;
  const Re = C({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), Bt = "http://www.w3.org/1998/Math/MathML", Ut = "http://www.w3.org/2000/svg", dt = "http://www.w3.org/1999/xhtml";
  let St = dt, Kt = !1, Qt = null;
  const On = C({}, [Bt, Ut, dt], ae);
  let Wt = C({}, ["mi", "mo", "mn", "ms", "mtext"]), zt = C({}, ["annotation-xml"]);
  const Dn = C({}, ["title", "style", "font", "a", "script"]);
  let Ot = null;
  const Nn = ["application/xhtml+xml", "text/html"], xn = "text/html";
  let Y = null, vt = null;
  const In = a.createElement("form"), Oe = function(t) {
    return t instanceof RegExp || t instanceof Function;
  }, Zt = function() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!(vt && vt === t)) {
      if ((!t || typeof t != "object") && (t = {}), t = pt(t), Ot = // eslint-disable-next-line unicorn/prefer-includes
      Nn.indexOf(t.PARSER_MEDIA_TYPE) === -1 ? xn : t.PARSER_MEDIA_TYPE, Y = Ot === "application/xhtml+xml" ? ae : Gt, o = ct(t, "ALLOWED_TAGS") ? C({}, t.ALLOWED_TAGS, Y) : f, b = ct(t, "ALLOWED_ATTR") ? C({}, t.ALLOWED_ATTR, Y) : I, Qt = ct(t, "ALLOWED_NAMESPACES") ? C({}, t.ALLOWED_NAMESPACES, ae) : On, Xt = ct(t, "ADD_URI_SAFE_ATTR") ? C(pt(Re), t.ADD_URI_SAFE_ATTR, Y) : Re, Le = ct(t, "ADD_DATA_URI_TAGS") ? C(pt(Ce), t.ADD_DATA_URI_TAGS, Y) : Ce, ft = ct(t, "FORBID_CONTENTS") ? C({}, t.FORBID_CONTENTS, Y) : jt, k = ct(t, "FORBID_TAGS") ? C({}, t.FORBID_TAGS, Y) : pt({}), H = ct(t, "FORBID_ATTR") ? C({}, t.FORBID_ATTR, Y) : pt({}), bt = ct(t, "USE_PROFILES") ? t.USE_PROFILES : !1, F = t.ALLOW_ARIA_ATTR !== !1, Z = t.ALLOW_DATA_ATTR !== !1, be = t.ALLOW_UNKNOWN_PROTOCOLS || !1, Se = t.ALLOW_SELF_CLOSE_IN_ATTR !== !1, Et = t.SAFE_FOR_TEMPLATES || !1, Ct = t.SAFE_FOR_XML !== !1, Tt = t.WHOLE_DOCUMENT || !1, At = t.RETURN_DOM || !1, Ht = t.RETURN_DOM_FRAGMENT || !1, Ft = t.RETURN_TRUSTED_TYPE || !1, Vt = t.FORCE_BODY || !1, ve = t.SANITIZE_DOM !== !1, we = t.SANITIZE_NAMED_PROPS || !1, Yt = t.KEEP_CONTENT !== !1, Rt = t.IN_PLACE || !1, ht = t.ALLOWED_URI_REGEXP || fn, St = t.NAMESPACE || dt, Wt = t.MATHML_TEXT_INTEGRATION_POINTS || Wt, zt = t.HTML_INTEGRATION_POINTS || zt, S = t.CUSTOM_ELEMENT_HANDLING || kt(null), t.CUSTOM_ELEMENT_HANDLING && Oe(t.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (S.tagNameCheck = t.CUSTOM_ELEMENT_HANDLING.tagNameCheck), t.CUSTOM_ELEMENT_HANDLING && Oe(t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (S.attributeNameCheck = t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), t.CUSTOM_ELEMENT_HANDLING && typeof t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (S.allowCustomizedBuiltInElements = t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), Et && (Z = !1), Ht && (At = !0), bt && (o = C({}, je), b = kt(null), bt.html === !0 && (C(o, Ye), C(b, Xe)), bt.svg === !0 && (C(o, se), C(b, ue), C(b, qt)), bt.svgFilters === !0 && (C(o, le), C(b, ue), C(b, qt)), bt.mathMl === !0 && (C(o, ce), C(b, Ke), C(b, qt))), x.tagCheck = null, x.attributeCheck = null, t.ADD_TAGS && (typeof t.ADD_TAGS == "function" ? x.tagCheck = t.ADD_TAGS : (o === f && (o = pt(o)), C(o, t.ADD_TAGS, Y))), t.ADD_ATTR && (typeof t.ADD_ATTR == "function" ? x.attributeCheck = t.ADD_ATTR : (b === I && (b = pt(b)), C(b, t.ADD_ATTR, Y))), t.ADD_URI_SAFE_ATTR && C(Xt, t.ADD_URI_SAFE_ATTR, Y), t.FORBID_CONTENTS && (ft === jt && (ft = pt(ft)), C(ft, t.FORBID_CONTENTS, Y)), t.ADD_FORBID_CONTENTS && (ft === jt && (ft = pt(ft)), C(ft, t.ADD_FORBID_CONTENTS, Y)), Yt && (o["#text"] = !0), Tt && C(o, ["html", "head", "body"]), o.table && (C(o, ["tbody"]), delete k.tbody), t.TRUSTED_TYPES_POLICY) {
        if (typeof t.TRUSTED_TYPES_POLICY.createHTML != "function")
          throw xt('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof t.TRUSTED_TYPES_POLICY.createScriptURL != "function")
          throw xt('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        N = t.TRUSTED_TYPES_POLICY, ot = N.createHTML("");
      } else
        N === void 0 && (N = po(A, r)), N !== null && typeof ot == "string" && (ot = N.createHTML(""));
      et && et(t), vt = t;
    }
  }, De = C({}, [...se, ...le, ...eo]), Ne = C({}, [...ce, ...no]), Mn = function(t) {
    let c = Q(t);
    (!c || !c.tagName) && (c = {
      namespaceURI: St,
      tagName: "template"
    });
    const h = Gt(t.tagName), B = Gt(c.tagName);
    return Qt[t.namespaceURI] ? t.namespaceURI === Ut ? c.namespaceURI === dt ? h === "svg" : c.namespaceURI === Bt ? h === "svg" && (B === "annotation-xml" || Wt[B]) : !!De[h] : t.namespaceURI === Bt ? c.namespaceURI === dt ? h === "math" : c.namespaceURI === Ut ? h === "math" && zt[B] : !!Ne[h] : t.namespaceURI === dt ? c.namespaceURI === Ut && !zt[B] || c.namespaceURI === Bt && !Wt[B] ? !1 : !Ne[h] && (Dn[h] || !De[h]) : !!(Ot === "application/xhtml+xml" && Qt[t.namespaceURI]) : !1;
  }, lt = function(t) {
    Nt(e.removed, {
      element: t
    });
    try {
      Q(t).removeChild(t);
    } catch {
      v(t);
    }
  }, _t = function(t, c) {
    try {
      Nt(e.removed, {
        attribute: c.getAttributeNode(t),
        from: c
      });
    } catch {
      Nt(e.removed, {
        attribute: null,
        from: c
      });
    }
    if (c.removeAttribute(t), t === "is")
      if (At || Ht)
        try {
          lt(c);
        } catch {
        }
      else
        try {
          c.setAttribute(t, "");
        } catch {
        }
  }, xe = function(t) {
    let c = null, h = null;
    if (Vt)
      t = "<remove></remove>" + t;
    else {
      const G = ie(t, /^[\r\n\t ]+/);
      h = G && G[0];
    }
    Ot === "application/xhtml+xml" && St === dt && (t = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + t + "</body></html>");
    const B = N ? N.createHTML(t) : t;
    if (St === dt)
      try {
        c = new g().parseFromString(B, Ot);
      } catch {
      }
    if (!c || !c.documentElement) {
      c = it.createDocument(St, "template", null);
      try {
        c.documentElement.innerHTML = Kt ? ot : B;
      } catch {
      }
    }
    const K = c.body || c.documentElement;
    return t && h && K.insertBefore(a.createTextNode(h), K.childNodes[0] || null), St === dt ? O.call(c, Tt ? "html" : "body")[0] : Tt ? c.documentElement : K;
  }, Ie = function(t) {
    return R.call(
      t.ownerDocument || t,
      t,
      // eslint-disable-next-line no-bitwise
      d.SHOW_ELEMENT | d.SHOW_COMMENT | d.SHOW_TEXT | d.SHOW_PROCESSING_INSTRUCTION | d.SHOW_CDATA_SECTION,
      null
    );
  }, Jt = function(t) {
    return t instanceof T && (typeof t.nodeName != "string" || typeof t.textContent != "string" || typeof t.removeChild != "function" || !(t.attributes instanceof m) || typeof t.removeAttribute != "function" || typeof t.setAttribute != "function" || typeof t.namespaceURI != "string" || typeof t.insertBefore != "function" || typeof t.hasChildNodes != "function");
  }, te = function(t) {
    return typeof p == "function" && t instanceof p;
  };
  function mt(E, t, c) {
    Dt(E, (h) => {
      h.call(e, t, c, vt);
    });
  }
  const Me = function(t) {
    let c = null;
    if (mt(D.beforeSanitizeElements, t, null), Jt(t))
      return lt(t), !0;
    const h = Y(t.nodeName);
    if (mt(D.uponSanitizeElement, t, {
      tagName: h,
      allowedTags: o
    }), Ct && t.hasChildNodes() && !te(t.firstElementChild) && J(/<[/\w!]/g, t.innerHTML) && J(/<[/\w!]/g, t.textContent) || Ct && t.namespaceURI === dt && h === "style" && te(t.firstElementChild) || t.nodeType === Mt.progressingInstruction || Ct && t.nodeType === Mt.comment && J(/<[/\w]/g, t.data))
      return lt(t), !0;
    if (k[h] || !(x.tagCheck instanceof Function && x.tagCheck(h)) && !o[h]) {
      if (!k[h] && Pe(h) && (S.tagNameCheck instanceof RegExp && J(S.tagNameCheck, h) || S.tagNameCheck instanceof Function && S.tagNameCheck(h)))
        return !1;
      if (Yt && !ft[h]) {
        const B = Q(t) || t.parentNode, K = $(t) || t.childNodes;
        if (K && B) {
          const G = K.length;
          for (let rt = G - 1; rt >= 0; --rt) {
            const at = y(K[rt], !0);
            at.__removalCount = (t.__removalCount || 0) + 1, B.insertBefore(at, w(t));
          }
        }
      }
      return lt(t), !0;
    }
    return t instanceof u && !Mn(t) || (h === "noscript" || h === "noembed" || h === "noframes") && J(/<\/no(script|embed|frames)/i, t.innerHTML) ? (lt(t), !0) : (Et && t.nodeType === Mt.text && (c = t.textContent, Dt([V, z, U], (B) => {
      c = wt(c, B, " ");
    }), t.textContent !== c && (Nt(e.removed, {
      element: t.cloneNode()
    }), t.textContent = c)), mt(D.afterSanitizeElements, t, null), !1);
  }, ke = function(t, c, h) {
    if (H[c] || ve && (c === "id" || c === "name") && (h in a || h in In))
      return !1;
    if (!(Z && !H[c] && J(j, c))) {
      if (!(F && J(gt, c))) {
        if (!(x.attributeCheck instanceof Function && x.attributeCheck(c, t))) {
          if (!b[c] || H[c]) {
            if (
              // First condition does a very basic check if a) it's basically a valid custom element tagname AND
              // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
              // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
              !(Pe(t) && (S.tagNameCheck instanceof RegExp && J(S.tagNameCheck, t) || S.tagNameCheck instanceof Function && S.tagNameCheck(t)) && (S.attributeNameCheck instanceof RegExp && J(S.attributeNameCheck, c) || S.attributeNameCheck instanceof Function && S.attributeNameCheck(c, t)) || // Alternative, second condition checks if it's an `is`-attribute, AND
              // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
              c === "is" && S.allowCustomizedBuiltInElements && (S.tagNameCheck instanceof RegExp && J(S.tagNameCheck, h) || S.tagNameCheck instanceof Function && S.tagNameCheck(h)))
            ) return !1;
          } else if (!Xt[c]) {
            if (!J(ht, wt(h, ut, ""))) {
              if (!((c === "src" || c === "xlink:href" || c === "href") && t !== "script" && Qn(h, "data:") === 0 && Le[t])) {
                if (!(be && !J(q, wt(h, ut, "")))) {
                  if (h)
                    return !1;
                }
              }
            }
          }
        }
      }
    }
    return !0;
  }, Pe = function(t) {
    return t !== "annotation-xml" && ie(t, Lt);
  }, He = function(t) {
    mt(D.beforeSanitizeAttributes, t, null);
    const {
      attributes: c
    } = t;
    if (!c || Jt(t))
      return;
    const h = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: b,
      forceKeepAttr: void 0
    };
    let B = c.length;
    for (; B--; ) {
      const K = c[B], {
        name: G,
        namespaceURI: rt,
        value: at
      } = K, yt = Y(G), ee = at;
      let X = G === "value" ? ee : Zn(ee);
      if (h.attrName = yt, h.attrValue = X, h.keepAttr = !0, h.forceKeepAttr = void 0, mt(D.uponSanitizeAttribute, t, h), X = h.attrValue, we && (yt === "id" || yt === "name") && (_t(G, t), X = Rn + X), Ct && J(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, X)) {
        _t(G, t);
        continue;
      }
      if (yt === "attributename" && ie(X, "href")) {
        _t(G, t);
        continue;
      }
      if (h.forceKeepAttr)
        continue;
      if (!h.keepAttr) {
        _t(G, t);
        continue;
      }
      if (!Se && J(/\/>/i, X)) {
        _t(G, t);
        continue;
      }
      Et && Dt([V, z, U], (Ue) => {
        X = wt(X, Ue, " ");
      });
      const Be = Y(t.nodeName);
      if (!ke(Be, yt, X)) {
        _t(G, t);
        continue;
      }
      if (N && typeof A == "object" && typeof A.getAttributeType == "function" && !rt)
        switch (A.getAttributeType(Be, yt)) {
          case "TrustedHTML": {
            X = N.createHTML(X);
            break;
          }
          case "TrustedScriptURL": {
            X = N.createScriptURL(X);
            break;
          }
        }
      if (X !== ee)
        try {
          rt ? t.setAttributeNS(rt, G, X) : t.setAttribute(G, X), Jt(t) ? lt(t) : Ve(e.removed);
        } catch {
          _t(G, t);
        }
    }
    mt(D.afterSanitizeAttributes, t, null);
  }, Fe = function(t) {
    let c = null;
    const h = Ie(t);
    for (mt(D.beforeSanitizeShadowDOM, t, null); c = h.nextNode(); )
      mt(D.uponSanitizeShadowNode, c, null), Me(c), He(c), c.content instanceof l && Fe(c.content);
    mt(D.afterSanitizeShadowDOM, t, null);
  };
  return e.sanitize = function(E) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, c = null, h = null, B = null, K = null;
    if (Kt = !E, Kt && (E = "<!-->"), typeof E != "string" && !te(E))
      if (typeof E.toString == "function") {
        if (E = E.toString(), typeof E != "string")
          throw xt("dirty is not a string, aborting");
      } else
        throw xt("toString is not a function");
    if (!e.isSupported)
      return E;
    if ($t || Zt(t), e.removed = [], typeof E == "string" && (Rt = !1), Rt) {
      if (E.nodeName) {
        const at = Y(E.nodeName);
        if (!o[at] || k[at])
          throw xt("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (E instanceof p)
      c = xe("<!---->"), h = c.ownerDocument.importNode(E, !0), h.nodeType === Mt.element && h.nodeName === "BODY" || h.nodeName === "HTML" ? c = h : c.appendChild(h);
    else {
      if (!At && !Et && !Tt && // eslint-disable-next-line unicorn/prefer-includes
      E.indexOf("<") === -1)
        return N && Ft ? N.createHTML(E) : E;
      if (c = xe(E), !c)
        return At ? null : Ft ? ot : "";
    }
    c && Vt && lt(c.firstChild);
    const G = Ie(Rt ? E : c);
    for (; B = G.nextNode(); )
      Me(B), He(B), B.content instanceof l && Fe(B.content);
    if (Rt)
      return E;
    if (At) {
      if (Et) {
        c.normalize();
        let at = c.innerHTML;
        Dt([V, z, U], (yt) => {
          at = wt(at, yt, " ");
        }), c.innerHTML = at;
      }
      if (Ht)
        for (K = P.call(c.ownerDocument); c.firstChild; )
          K.appendChild(c.firstChild);
      else
        K = c;
      return (b.shadowroot || b.shadowrootmode) && (K = W.call(i, K, !0)), K;
    }
    let rt = Tt ? c.outerHTML : c.innerHTML;
    return Tt && o["!doctype"] && c.ownerDocument && c.ownerDocument.doctype && c.ownerDocument.doctype.name && J(dn, c.ownerDocument.doctype.name) && (rt = "<!DOCTYPE " + c.ownerDocument.doctype.name + `>
` + rt), Et && Dt([V, z, U], (at) => {
      rt = wt(rt, at, " ");
    }), N && Ft ? N.createHTML(rt) : rt;
  }, e.setConfig = function() {
    let E = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Zt(E), $t = !0;
  }, e.clearConfig = function() {
    vt = null, $t = !1;
  }, e.isValidAttribute = function(E, t, c) {
    vt || Zt({});
    const h = Y(E), B = Y(t);
    return ke(h, B, c);
  }, e.addHook = function(E, t) {
    typeof t == "function" && Nt(D[E], t);
  }, e.removeHook = function(E, t) {
    if (t !== void 0) {
      const c = Xn(D[E], t);
      return c === -1 ? void 0 : Kn(D[E], c, 1)[0];
    }
    return Ve(D[E]);
  }, e.removeHooks = function(E) {
    D[E] = [];
  }, e.removeAllHooks = function() {
    D = Ze();
  }, e;
}
pn();
function mo(n) {
  if (n && typeof n.getBoundingClientRect == "function") {
    const { bottom: e, top: a } = n.getBoundingClientRect(), { offsetTop: i } = n;
    if (a < 0 && e > 0) {
      const r = n.style;
      n.style = `${r};transition: height 0s !important; overflow:hidden; height:${e}px!important;max-height:${e}px!important`, window.scrollTo({ behavior: "instant", top: i }), setTimeout(() => {
        n.style = r, window.scrollTo({
          behavior: "smooth",
          top: n.offsetTop - e / 2
        });
      }, 50);
    }
  }
}
var fe = { exports: {} }, de, Je;
function go() {
  if (Je) return de;
  Je = 1;
  var n = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return de = n, de;
}
var pe, tn;
function ho() {
  if (tn) return pe;
  tn = 1;
  var n = /* @__PURE__ */ go();
  function e() {
  }
  function a() {
  }
  return a.resetWarningCache = e, pe = function() {
    function i(s, p, u, d, m, T) {
      if (T !== n) {
        var g = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw g.name = "Invariant Violation", g;
      }
    }
    i.isRequired = i;
    function r() {
      return i;
    }
    var l = {
      array: i,
      bigint: i,
      bool: i,
      func: i,
      number: i,
      object: i,
      string: i,
      symbol: i,
      any: i,
      arrayOf: r,
      element: i,
      elementType: i,
      instanceOf: r,
      node: i,
      objectOf: r,
      oneOf: r,
      oneOfType: r,
      shape: r,
      exact: r,
      checkPropTypes: a,
      resetWarningCache: e
    };
    return l.PropTypes = l, l;
  }, pe;
}
var en;
function yo() {
  return en || (en = 1, fe.exports = /* @__PURE__ */ ho()()), fe.exports;
}
var Eo = /* @__PURE__ */ yo();
const tt = /* @__PURE__ */ qn(Eo);
tt.shape({
  event: tt.string,
  action: tt.string,
  name: tt.string,
  region: tt.string,
  section: tt.string,
  component: tt.string,
  type: tt.string,
  text: tt.string
});
const Pt = ({ children: n }) => /* @__PURE__ */ React.createElement(React.Fragment, null, n);
Pt.propTypes = {
  children: tt.oneOfType([
    tt.arrayOf(tt.node),
    tt.node,
    tt.string
  ])
};
var me = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var nn;
function To() {
  return nn || (nn = 1, function(n) {
    (function() {
      var e = {}.hasOwnProperty;
      function a() {
        for (var l = "", s = 0; s < arguments.length; s++) {
          var p = arguments[s];
          p && (l = r(l, i(p)));
        }
        return l;
      }
      function i(l) {
        if (typeof l == "string" || typeof l == "number")
          return l;
        if (typeof l != "object")
          return "";
        if (Array.isArray(l))
          return a.apply(null, l);
        if (l.toString !== Object.prototype.toString && !l.toString.toString().includes("[native code]"))
          return l.toString();
        var s = "";
        for (var p in l)
          e.call(l, p) && l[p] && (s = r(s, p));
        return s;
      }
      function r(l, s) {
        return s ? l ? l + " " + s : l + s : l;
      }
      n.exports ? (a.default = a, n.exports = a) : window.classNames = a;
    })();
  }(me)), me.exports;
}
To();
({
  ...Pt.propTypes
});
const mn = ({ children: n, className: e = "container", ...a }) => /* @__PURE__ */ React.createElement("div", { className: e, ...a }, /* @__PURE__ */ React.createElement("div", { className: "row" }, n));
mn.propTypes = {
  children: Pt.propTypes.children
};
({
  ...mn.propTypes
});
Pt.propTypes.children, tt.oneOf(["0", "3", "4", "6", "8", "9", "12"]);
Pt.propTypes.children;
function gn() {
  var ot, it;
  const a = ["asu-header", "asuHeader"].find((R) => document.getElementById(R)), i = document.getElementById(a), r = document.getElementById("uds-anchor-menu");
  if (!r || !i || Array.from(r.classList).some((R) => R.startsWith("sc-")))
    return;
  const l = r.parentNode, s = r.nextSibling, p = Array.from(r.getElementsByClassName("nav-link")), u = /* @__PURE__ */ new Map();
  let d = window.scrollY, m = !1;
  const T = ((ot = document.getElementById("toolbar-bar")) == null ? void 0 : ot.offsetHeight) || 0, g = ((it = document.getElementById("toolbar-item-administration-tray")) == null ? void 0 : it.offsetHeight) || 0, A = T + g, _ = r.getBoundingClientRect().top + window.scrollY - A;
  for (let R of p) {
    const P = R.getAttribute("href");
    if (!P || !P.startsWith("#"))
      continue;
    const O = P.replace("#", ""), W = document.getElementById(O);
    W && u.set(R, W);
  }
  window.scrollY > _ && (i.appendChild(r), m = !0, r.classList.add("uds-anchor-menu-attached"));
  function v(R, P = 0) {
    if (!R || P > 10)
      return 0;
    if (R.offsetHeight === 0 || R.offsetWidth === 0)
      return v(R.parentElement, P + 1);
    const O = R.getBoundingClientRect(), W = window.innerHeight || document.documentElement.clientHeight, D = window.innerWidth || document.documentElement.clientWidth, V = O.bottom - O.top, z = O.right - O.left, U = V * z, j = Math.min(W, O.bottom) - Math.max(0, O.top), gt = Math.min(D, O.right) - Math.max(0, O.left);
    return j * gt / U * 100;
  }
  const w = function() {
    let R = 0, P = null;
    if (p.forEach((V) => {
      const z = u.get(V);
      if (!z)
        return;
      const U = v(z);
      U > 0 && U > R && (R = U, P = z.id);
    }), P) {
      const V = document.querySelector(
        '[href="#' + P + '"]'
      );
      V && V.classList.add("active"), r.querySelectorAll(
        'a.nav-link:not([href="#' + P + '"])'
      ).forEach(function(z) {
        z.classList.remove("active");
      });
    }
    const O = r.getBoundingClientRect().top, W = i.getBoundingClientRect().bottom, D = window.scrollY > d;
    if (D && W >= O && (m || (i.appendChild(r), m = !0, r.classList.add("uds-anchor-menu-attached"))), !D && m) {
      const V = i.getBoundingClientRect().bottom, z = r.getBoundingClientRect().top;
      (window.scrollY <= _ || V < z) && (l.insertBefore(r, s), m = !1, r.classList.remove("uds-anchor-menu-attached"));
    }
    d = window.scrollY;
  };
  let $;
  $ = (() => {
    let R = !1;
    return () => {
      R || (R = !0, w(), setTimeout(() => {
        R = !1;
      }, 100));
    };
  })(), window.addEventListener("scroll", $, { passive: !0 });
  for (let [R, P] of u)
    R.addEventListener("click", function(O) {
      if (O.preventDefault(), !P || !document.body.contains(P)) {
        console.warn("Anchor target no longer exists in DOM");
        return;
      }
      if (R === p[0]) {
        const q = i.getBoundingClientRect().bottom, ut = r.offsetHeight, Lt = q + ut, ht = P.getBoundingClientRect().top, o = window.innerHeight / 2;
        if (ht >= Lt && ht <= o) {
          history.replaceState(null, "", R.getAttribute("href")), N(P);
          return;
        }
      }
      const D = window.innerHeight, V = Math.round(D * 0.35);
      let U = P.getBoundingClientRect().top + window.scrollY - V;
      window.scrollTo({
        top: U,
        behavior: "smooth"
      });
      const j = r.querySelector(".nav-link.active");
      j && j.classList.remove("active"), O.target.classList.add("active");
      const gt = R.getAttribute("href");
      gt && history.replaceState(null, "", gt), N(P);
    });
  function N(R) {
    R.hasAttribute("tabindex") || (R.setAttribute("tabindex", "-1"), R.style.outline = "none"), R.focus({ preventScroll: !0 });
  }
}
M.on(window, "load.uds.anchor-menu", gn);
function hn() {
  const n = document.querySelectorAll('mark[class^="pen-"]'), e = new IntersectionObserver(
    (a) => {
      a.forEach((i) => {
        i.isIntersecting ? i.target.classList.add("animate-bg-in-scroll") : i.target.classList.remove("animate-bg-in-scroll");
      });
    },
    {
      threshold: 0.1
    }
  );
  n.forEach((a) => {
    e.observe(a);
  });
}
M.on(
  window,
  "load.uds.blockquote-animation",
  hn
);
function yn() {
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
  ], a = ["Su", "M", "Tu", "W", "Th", "F", "Sa"], r = {
    month: (/* @__PURE__ */ new Date()).getMonth(),
    year: (/* @__PURE__ */ new Date()).getFullYear()
  }, l = (u, d) => {
    const m = /* @__PURE__ */ new Date(), T = [], g = new Date(u, d).getDay(), A = new Date(u, d + 1, 0).getDate(), _ = new Date(u, d, 0).getDate();
    for (let y = 1; y <= g; y++) {
      const v = _ - g + y, w = new Date(
        r.year,
        r.month - 1,
        v
      ).toLocaleString();
      T.push({ key: w, date: v, monthClass: "prev" });
    }
    for (let y = 1; y <= A; y++) {
      const v = new Date(r.year, r.month, y).toLocaleString();
      y === m.getDate() && r.month === m.getMonth() && r.year === m.getFullYear() ? T.push({
        key: v,
        date: y,
        monthClass: "current",
        todayClass: "today"
      }) : T.push({ key: v, date: y, monthClass: "current" });
    }
    if (T.length < 42) {
      const y = 42 - T.length;
      for (let v = 1; v <= y; v++) {
        const w = new Date(r.year, r.month + 1, v).toLocaleString();
        T.push({ key: w, date: v, monthClass: "next" });
      }
    }
    return T;
  }, s = () => {
    const u = document.getElementById("calendar");
    u && (u.innerHTML = `
      <h2><span class="highlight-black">${n[r.month]} ${r.year}</span></h2>
      <div class="calendar-grid">
        <div class="heading desktop">
          ${e.map((d) => `<p>${d}</p>`).join("")}
        </div>
        <div class="heading mobile">
          ${a.map((d) => `<p>${d}</p>`).join("")}
        </div>
        <div class="body">
          ${l(r.year, r.month).map(
      (d) => `<h3 id="${d.key}" class="calendar-item ${d.monthClass}" ${d.todayClass ? `aria-label="${d.todayClass[0].toUpperCase()}${d.todayClass.slice(
        1
      )}"` : ""}>
                  <span class="${d.todayClass ? d.todayClass : ""}">${d.date}</span>
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
  ((u) => {
    var d = new Date(r.year, r.month + u);
    r.year = d.getFullYear(), r.month = d.getMonth(), s();
  })(0);
}
M.on(window, "load.uds.calendar", yn);
function Te() {
  const n = document.querySelectorAll(".card-body");
  if (n.length === 0 && 0 < 3) {
    setTimeout(() => Te(), 500);
    return;
  }
  if (n.length === 0) {
    console.warn("No .card-body found after 3 retries.");
    return;
  }
  n.forEach((a, i) => {
    const r = a.querySelector("div p"), l = r.textContent, s = window.getComputedStyle(a), p = parseInt(s.webkitLineClamp || s.lineClamp), u = parseFloat(s.lineHeight), d = parseFloat(s.fontSize), m = isNaN(u) ? parseFloat(s.lineHeight) * d : u, T = p * m;
    if (r.offsetHeight >= T) {
      let g = "";
      const A = l.split(" ");
      let _ = 0, y = "";
      for (; _ < A.length && _o(
        y + (y ? " " : "") + A[_],
        r
      ) <= T; )
        y += (y ? " " : "") + A[_], _++;
      g = y + "...";
      const v = `visible-text-${Math.random().toString(36).substring(7)}`, w = document.createElement("div");
      w.id = v, w.textContent = g, w.style.position = "absolute", w.style.top = `${r.offsetTop}px`, w.style.left = `${r.offsetLeft}px`, w.style.width = `${r.offsetWidth}px`, w.style.height = `${r.offsetHeight}px`, w.style.opacity = "0", w.style.pointerEvents = "none", w.style.zIndex = "1", a.appendChild(w), r.setAttribute("aria-describedby", v), r.setAttribute("aria-hidden", "true");
    }
  });
}
function _o(n, e) {
  const a = document.createElement(e.tagName);
  a.style.font = window.getComputedStyle(e).font, a.style.width = window.getComputedStyle(e).width, a.style.whiteSpace = "pre-wrap", a.textContent = n, document.body.appendChild(a);
  const i = a.offsetHeight;
  return document.body.removeChild(a), i;
}
M.on(window, "load.uds.card-bodies", Te);
function En() {
  const n = document.querySelector(".info-layer"), e = document.getElementById("dispatch");
  M.on(e, "click", function() {
    n == null || n.classList.toggle("active");
  });
}
M.on(window, "load.uds.ranking-card", En);
function Tn() {
  ne.Chart.register(...ne.registerables);
  const n = 50;
  var e = document.getElementById("uds-donut");
  if (!e)
    return;
  document.getElementById("percentage-display").innerHTML = n + "%";
  const a = {
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
  new ne.Chart(e, a);
}
M.on(window, "load.uds.chart", Tn);
function _n() {
  function n({ target: e }) {
    const a = e.getAttribute("href");
    e.getAttribute("data-bs-toggle") !== "collapse" || !a || !a.includes("#") || mo(
      document.querySelector(".collapsing")
    );
  }
  M.on(document, "click.uds.collapse", n);
}
M.on(window, "load.uds.collapse", _n);
function _e() {
  var e, a, i, r;
  const n = (l) => {
    window.dataLayer = window.dataLayer || [];
    const { dataLayer: s } = window;
    s && s.push(l);
  };
  (e = document.querySelectorAll("[data-ga-header]")) == null || e.forEach(
    (l) => l.addEventListener("click", () => {
      const s = l.getAttribute("data-ga-header-event") || "link";
      let p = l.getAttribute("data-ga-header-action") || "click";
      const u = l.getAttribute("aria-expanded");
      u && (p = u === "false" ? "open" : "close");
      const d = l.getAttribute("data-ga-header-type") || "internal link", m = l.getAttribute("data-ga-header-section") || "main navbar", T = l.getAttribute("data-ga-header") || "", g = l.getAttribute("data-ga-header-component");
      n({
        name: "onclick",
        event: s.toLowerCase(),
        action: p.toLowerCase(),
        type: d.toLowerCase(),
        section: m.toLowerCase(),
        region: "navbar",
        text: T.toLowerCase(),
        ...g && {
          component: g.toLowerCase()
        }
      });
    })
  ), (a = document.querySelectorAll("[data-ga-input-header-event]")) == null || a.forEach(
    (l) => l.addEventListener("change", (s) => {
      const p = l.getAttribute("data-ga-input-header-event") || "", u = s.target.value || "";
      n({
        name: "onenter",
        action: "type",
        type: "main search",
        section: "topbar",
        region: "navbar",
        text: u.toLowerCase(),
        event: p.toLowerCase()
      });
    })
  ), (i = document.querySelectorAll("[data-ga]")) == null || i.forEach(
    (l) => l.addEventListener("click", () => {
      const s = {};
      Array.from(l.attributes).forEach((u) => {
        if (u.name.startsWith("data-ga-")) {
          const d = u.name.replace("data-ga-", ""), m = u.value;
          m && (s[d] = m.toLowerCase());
        } else if (u.name === "data-ga") {
          const d = u.value;
          d && (s.text = d.toLowerCase());
        }
      });
      const p = l.getAttribute("aria-expanded");
      p && (s.action = p === "false" ? "open" : "close"), n(s);
    })
  ), (r = document.querySelectorAll("[data-ga-input]")) == null || r.forEach(
    (l) => l.addEventListener("change", (s) => {
      const p = l.getAttribute("data-ga-input-name") || "", u = l.getAttribute("data-ga-input-action") || "", d = l.getAttribute("data-ga-input") || "", m = l.getAttribute("data-ga-input-region") || "", T = l.getAttribute("data-ga-input-section") || "";
      let g = l.getAttribute("data-ga-input-event") || "", A;
      switch (d) {
        case "checkbox":
          A = s.target.labels[0].textContent || "", g = s.target.checked ? g : "deselect";
          break;
        case "radio button":
          A = s.target.labels[0].textContent || "";
          break;
        case "blur":
          A = s.target.value.toLowerCase() || "";
          break;
        default:
          A = [...s.target.selectedOptions].map((_) => _.value).join(",") || "";
          break;
      }
      n({
        name: p.toLowerCase(),
        event: g.toLowerCase(),
        action: u.toLowerCase(),
        type: d.toLowerCase(),
        section: T.toLowerCase(),
        region: m.toLowerCase(),
        text: A.toLowerCase()
      });
    })
  ), document.querySelectorAll("[data-ga-footer]").forEach(
    (l) => l.addEventListener("focus", () => {
      const s = {
        type: l.getAttribute("data-ga-footer-type").toLowerCase(),
        section: l.getAttribute("data-ga-footer-section").toLowerCase(),
        text: l.getAttribute("data-ga-footer").toLowerCase()
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
window.initDataLayer = window.initDataLayer || _e;
M.on(window, "load.uds.data-layer", _e);
const Ae = () => {
  const n = () => {
    const e = document.getElementById("asu-header");
    window.scrollY > (e == null ? void 0 : e.getBoundingClientRect().top) ? e == null || e.classList.add("scrolled") : e == null || e.classList.remove("scrolled");
  };
  M.on(window, "scroll.uds.header", n);
};
window.initGlobalHeader = window.initGlobalHeader || Ae;
M.on(window, "load.uds.global-header", Ae);
function An() {
  const n = ".uds-video-hero", e = n + " video", a = n + " #playHeroVid", i = n + " #pauseHeroVid", r = "click", l = "block", s = "none", p = document.querySelector(e), u = document.querySelector(a), d = document.querySelector(i);
  function m(_) {
    _.paused ? _.play() : _.pause();
  }
  function T(_, y) {
    getComputedStyle(_).display === s ? (y.style.display = s, _.style.display = l, _.focus()) : (_.style.display = s, y.style.display = l, y.focus());
  }
  function g(_) {
    _.stopPropagation(), T(u, d), m(p);
  }
  function A(_) {
    _.stopPropagation(), T(u, d), m(p);
  }
  d == null || d.addEventListener(r, g), u == null || u.addEventListener(r, A);
}
M.on(window, "load.uds.heroes-video", An);
const bn = () => {
  const e = () => {
    document.querySelectorAll(".parallax-container").forEach((s) => {
      const p = s.querySelector("img"), u = s.offsetHeight - p.height * 1.2, d = p.dataset.parallaxType === "scroll-to" ? window.innerHeight : window.innerHeight + s.offsetHeight, m = s.getBoundingClientRect().top, g = (window.innerHeight - m) / d;
      if (g < 0)
        p.style.top = u + "px";
      else if (g > 1)
        p.style.top = "0";
      else {
        const A = u * (1 - g);
        p.style.top = A + "px";
      }
    });
  }, a = (s) => {
    const p = s.parentNode, u = s.width, d = s.height;
    let m = p.offsetWidth / u, T = 0, g = d * m, A = u * m;
    const _ = +s.dataset.parallaxFactor || 1.2;
    !s.dataset.noScale && g < p.offsetHeight * _ && (m = p.offsetHeight * _ / g, g *= m, A *= m, T = (A - p.offsetWidth) / 2 * -1), s.style.height = g + "px", s.style.left = T + "px";
  }, i = () => {
    document.querySelectorAll(".parallax-container img").forEach((s, p) => {
      s.complete ? a(s) : s.onload = () => a(s);
    });
  }, r = (s) => {
    const { dataLayer: p } = window, u = {
      event: "link",
      action: "click",
      name: "onclick",
      type: "internal link",
      region: "main content",
      ...s
    };
    p && p.push(u);
  };
  document.querySelectorAll("[data-ga-image-parallax]").forEach(
    (s) => M.on(s, "focus.uds.image-parallax", () => {
      const p = {
        section: s.getAttribute("data-ga-image-parallax-section").toLowerCase(),
        text: s.getAttribute("data-ga-image-parallax").toLowerCase()
      };
      r(p);
    })
  ), i(), M.on(window, "resize.uds.image-parallax", i), M.on(window, "scroll.uds.image-parallax", e);
};
M.on(window, "load.uds.image-parallax", bn);
function Sn() {
  var n, e;
  (n = document.getElementById("openModalButton")) == null || n.addEventListener("click", function() {
    document.getElementById("uds-modal").classList.add("open");
  }), (e = document.getElementById("closeModalButton")) == null || e.addEventListener("click", function() {
    document.getElementById("uds-modal").classList.remove("open");
  });
}
M.on(window, "load.uds.modals", Sn);
function vn() {
  const n = "a", e = "button", a = ".nav-tabs", i = ".nav-item", r = ".uds-tabbed-panels", l = ".scroll-control-prev", s = ".scroll-control-next", p = "click", u = "scroll", d = "focus", m = "none", T = "block", A = (y) => {
    [n, e].includes(y.target.localName) && y.target.focus();
  }, _ = (y) => {
    const v = y.parentElement, w = y.offsetLeft + y.offsetWidth, $ = v.scrollLeft + v.offsetWidth;
    v.scrollLeft > y.offsetLeft && (v.scrollLeft = y.offsetLeft), $ < w && (v.scrollLeft += w - $);
  };
  document.querySelectorAll(r).forEach((y) => {
    const v = y.querySelector(a), w = y.querySelectorAll(i), $ = y.querySelector(
      l
    ), Q = y.querySelector(
      s
    );
    let N = 0;
    y.addEventListener(p, function(O) {
      A(O);
    });
    const ot = (O, W, D) => {
      W.preventDefault();
      const z = getComputedStyle(v).left.replace("px", "");
      let U = parseInt(z, 10);
      D === 1 && N > 0 && (N -= 1), N < w.length - 1 && D == -1 && (N += 1), v.dataset.scrollPosition = N, U = 0;
      for (var j = 0; j < N; j++)
        U += w[j].offsetWidth + parseInt(getComputedStyle(w[j]).marginLeft, 10) + parseInt(getComputedStyle(w[j]).marginRight, 10);
      v.scrollLeft = U, it(O, U);
    }, it = (O, W) => {
      const D = v.scrollWidth - W;
      N == 0 ? $.style.display = m : $.style.display = T, D <= y.offsetWidth ? Q.style.display = m : Q.style.display = T;
    };
    v.addEventListener(u, (O) => {
      const W = O.target.scrollLeft, D = v.offsetWidth + W + 10 >= v.scrollWidth;
      $.style.display = W < 10 ? m : T, Q.style.display = D ? m : T;
    }), w.forEach((O) => {
      O.addEventListener(d, function(W) {
        _(O);
      });
    }), Q.addEventListener(p, function(O) {
      ot(this, O, -1);
    }), $.addEventListener(p, function(O) {
      ot(this, O, 1);
    }), $.style.display = m;
    const R = v.scrollWidth, P = y.offsetWidth;
    R <= P && (Q.style.display = m);
  });
}
M.on(window, "load.uds.tabs", vn);
function wn() {
  function n() {
    const i = ".uds-table-fixed-wrapper", r = ".uds-table.uds-table-fixed table", l = ".scroll-control.previous";
    document.querySelectorAll(i).forEach((p, u) => {
      const d = p.querySelector(r);
      d.setAttribute("id", "uds-table-" + u);
      const m = d.querySelector("tbody tr > *"), T = p.querySelector(l);
      T.style.left = m.offsetWidth + "px";
    });
  }
  function e() {
    const i = ".uds-table-fixed", r = ".uds-table-fixed-wrapper", l = ".scroll-control.previous", s = ".scroll-control.next";
    document.querySelectorAll(r).forEach((u, d) => {
      const m = u.querySelector(i), T = u.querySelector(l), g = u.querySelector(s);
      ["click", "focus"].forEach((A) => {
        M.on(T, A, function() {
          m.scrollLeft -= 100;
        }), M.on(g, A, function() {
          m.scrollLeft += 100;
        });
      });
    });
  }
  function a(i, r) {
    let l;
    return (...s) => {
      clearTimeout(l), l = setTimeout(() => {
        i.apply(this, s);
      }, r);
    };
  }
  n(), e(), M.on(window, "resize", function() {
    a(n, 100)();
  });
}
M.on(window, "load.uds.fixed-table", wn);
function Ln() {
  const a = ".uds-tooltip-container", r = "[aria-describedby]", p = document.querySelectorAll(
    `${a} > ${r} + [role=tooltip]`
  );
  function u() {
    document.querySelectorAll(
      `${r}[aria-expanded="true"]`
    ).forEach((A) => {
      A.setAttribute("aria-expanded", "false");
    });
  }
  function d(g) {
    let A = g.target.querySelector(`${a} ${r}`) || g.target, _ = A.nextElementSibling;
    g.type === "keydown" && g.key !== " " || (u(), A.getBoundingClientRect().right + 288 > window.innerWidth ? _.classList.add("bottom-placement") : _.classList.remove("bottom-placement"), A.setAttribute("aria-expanded", "true"));
  }
  function m(g) {
    let A = g.target.querySelector(`${a} ${r}`) || g.target;
    g.type === "mouseleave" && A === document.activeElement || A.setAttribute("aria-expanded", "false");
  }
  function T(g) {
    g.key === "Escape" && m(g);
  }
  [...p].map((g) => {
    const A = new AbortController(), { signal: _ } = A, y = g.previousElementSibling, v = y.parentElement;
    return y.addEventListener("mouseenter", d, { signal: _ }), y.addEventListener("focus", d, { signal: _ }), y.addEventListener("keydown", d, { signal: _ }), y.addEventListener("blur", m, { signal: _ }), y.addEventListener("keydown", T, { signal: _ }), v.addEventListener("mouseleave", m, { signal: _ }), A;
  });
}
M.on(window, "load.uds.tooltips", Ln);
function Cn() {
  const n = ".uds-video-player", e = n + " video", a = n + " .uds-video-btn-play", i = n + " .uds-video-overlay", r = "click", l = "ended", s = "flex", p = "none", u = document.querySelector(e), d = document.querySelector(i), m = document.querySelector(a);
  function T(w) {
    w.style.display === p ? w.style.display = s : w.style.display = p;
  }
  function g(w) {
    w.paused ? w.play() : w.pause();
  }
  function A(w) {
    g(this), T(this.nextElementSibling);
  }
  function _(w) {
    w.stopPropagation();
    const $ = this.parentNode;
    T($), g(u);
  }
  function y(w) {
    T(this), g(u);
  }
  function v(w) {
    T(d);
  }
  u == null || u.addEventListener(r, A), m == null || m.addEventListener(r, _), d == null || d.addEventListener(r, y), u == null || u.addEventListener(l, v);
}
M.on(window, "load.uds.video", Cn);
const Ao = {
  // Banner, // code updated to use bootstrap alert so we don't need this
  initAnchorMenu: gn,
  initBlockquoteAnimation: hn,
  initCalendar: yn,
  initCollapse: _n,
  initChart: Tn,
  initDataLayer: _e,
  initFixedTable: wn,
  initGlobalHeader: Ae,
  initHeroesVideo: An,
  initImageParallax: bn,
  initModals: Sn,
  initRankingCard: En,
  initTabbedPanels: vn,
  initTooltips: Ln,
  initVideo: Cn,
  initCardBodies: Te
};
export {
  Ao as default
};
//# sourceMappingURL=unity-bootstrap.es.js.map
