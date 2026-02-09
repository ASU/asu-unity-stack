import * as Zt from "chart.js";
const Cn = () => window.jQuery && !document.body.hasAttribute("data-bs-no-jquery") ? window.jQuery : null, On = /[^.]*(?=\..*)\.|.*/, Rn = /\..*/, Dn = /::\d+$/, Jt = {};
let xe = 1;
const je = {
  mouseenter: "mouseover",
  mouseleave: "mouseout"
}, Nn = /* @__PURE__ */ new Set([
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
function $e(n, e) {
  return e && `${e}::${xe++}` || n.uidEvent || xe++;
}
function Xe(n) {
  const e = $e(n);
  return n.uidEvent = e, Jt[e] = Jt[e] || {}, Jt[e];
}
function In(n, e) {
  return function r(a) {
    return ue(a, { delegateTarget: n }), r.oneOff && M.off(n, a.type, e), e.apply(n, [a]);
  };
}
function xn(n, e, r) {
  return function a(c) {
    const i = n.querySelectorAll(e);
    for (let { target: s } = c; s && s !== this; s = s.parentNode)
      for (const p of i)
        if (p === s)
          return ue(c, { delegateTarget: s }), a.oneOff && M.off(n, c.type, e, r), r.apply(s, [c]);
  };
}
function Ke(n, e, r = null) {
  return Object.values(n).find((a) => a.callable === e && a.delegationSelector === r);
}
function Qe(n, e, r) {
  const a = typeof e == "string", c = a ? r : e || r;
  let i = Ze(n);
  return Nn.has(i) || (i = n), [a, c, i];
}
function Me(n, e, r, a, c) {
  if (typeof e != "string" || !n)
    return;
  let [i, s, p] = Qe(e, r, a);
  e in je && (s = ((b) => function(_) {
    if (!_.relatedTarget || _.relatedTarget !== _.delegateTarget && !_.delegateTarget.contains(_.relatedTarget))
      return b.call(this, _);
  })(s));
  const f = Xe(n), d = f[p] || (f[p] = {}), m = Ke(d, s, i ? r : null);
  if (m) {
    m.oneOff = m.oneOff && c;
    return;
  }
  const y = $e(s, e.replace(On, "")), E = i ? xn(n, r, s) : In(n, s);
  E.delegationSelector = i ? r : null, E.callable = s, E.oneOff = c, E.uidEvent = y, d[y] = E, n.addEventListener(p, E, i);
}
function se(n, e, r, a, c) {
  const i = Ke(e[r], a, c);
  i && (n.removeEventListener(r, i, !!c), delete e[r][i.uidEvent]);
}
function Mn(n, e, r, a) {
  const c = e[r] || {};
  for (const [i, s] of Object.entries(c))
    i.includes(a) && se(n, e, r, s.callable, s.delegationSelector);
}
function Ze(n) {
  return n = n.replace(Rn, ""), je[n] || n;
}
const M = {
  on(n, e, r, a) {
    Me(n, e, r, a, !1);
  },
  one(n, e, r, a) {
    Me(n, e, r, a, !0);
  },
  off(n, e, r, a) {
    if (typeof e != "string" || !n)
      return;
    const [c, i, s] = Qe(e, r, a), p = s !== e, f = Xe(n), d = f[s] || {}, m = e.startsWith(".");
    if (typeof i < "u") {
      if (!Object.keys(d).length)
        return;
      se(n, f, s, i, c ? r : null);
      return;
    }
    if (m)
      for (const y of Object.keys(f))
        Mn(n, f, y, e.slice(1));
    for (const [y, E] of Object.entries(d)) {
      const w = y.replace(Dn, "");
      (!p || e.includes(w)) && se(n, f, s, E.callable, E.delegationSelector);
    }
  },
  trigger(n, e, r) {
    if (typeof e != "string" || !n)
      return null;
    const a = Cn(), c = Ze(e), i = e !== c;
    let s = null, p = !0, f = !0, d = !1;
    i && a && (s = a.Event(e, r), a(n).trigger(s), p = !s.isPropagationStopped(), f = !s.isImmediatePropagationStopped(), d = s.isDefaultPrevented());
    const m = ue(new Event(e, { bubbles: p, cancelable: !0 }), r);
    return d && m.preventDefault(), f && n.dispatchEvent(m), m.defaultPrevented && s && s.preventDefault(), m;
  }
};
function ue(n, e = {}) {
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
function kn(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var L = {}, ke;
function Pn() {
  if (ke) return L;
  ke = 1;
  /**
   * @license React
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var n = Symbol.for("react.element"), e = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), c = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), s = Symbol.for("react.context"), p = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), d = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), y = Symbol.iterator;
  function E(o) {
    return o === null || typeof o != "object" ? null : (o = y && o[y] || o["@@iterator"], typeof o == "function" ? o : null);
  }
  var w = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, b = Object.assign, _ = {};
  function v(o, u, T) {
    this.props = o, this.context = u, this.refs = _, this.updater = T || w;
  }
  v.prototype.isReactComponent = {}, v.prototype.setState = function(o, u) {
    if (typeof o != "object" && typeof o != "function" && o != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, o, u, "setState");
  }, v.prototype.forceUpdate = function(o) {
    this.updater.enqueueForceUpdate(this, o, "forceUpdate");
  };
  function S() {
  }
  S.prototype = v.prototype;
  function j(o, u, T) {
    this.props = o, this.context = u, this.refs = _, this.updater = T || w;
  }
  var X = j.prototype = new S();
  X.constructor = j, b(X, v.prototype), X.isPureReactComponent = !0;
  var R = Array.isArray, nt = Object.prototype.hasOwnProperty, D = { current: null }, U = { key: !0, ref: !0, __self: !0, __source: !0 };
  function H(o, u, T) {
    var N, A = {}, x = null, F = null;
    if (u != null) for (N in u.ref !== void 0 && (F = u.ref), u.key !== void 0 && (x = "" + u.key), u) nt.call(u, N) && !U.hasOwnProperty(N) && (A[N] = u[N]);
    var B = arguments.length - 2;
    if (B === 1) A.children = T;
    else if (1 < B) {
      for (var k = Array(B), rt = 0; rt < B; rt++) k[rt] = arguments[rt + 2];
      A.children = k;
    }
    if (o && o.defaultProps) for (N in B = o.defaultProps, B) A[N] === void 0 && (A[N] = B[N]);
    return { $$typeof: n, type: o, key: x, ref: F, props: A, _owner: D.current };
  }
  function I(o, u) {
    return { $$typeof: n, type: o.type, key: u, ref: o.ref, props: o.props, _owner: o._owner };
  }
  function W(o) {
    return typeof o == "object" && o !== null && o.$$typeof === n;
  }
  function O(o) {
    var u = { "=": "=0", ":": "=2" };
    return "$" + o.replace(/[=:]/g, function(T) {
      return u[T];
    });
  }
  var z = /\/+/g;
  function q(o, u) {
    return typeof o == "object" && o !== null && o.key != null ? O("" + o.key) : u.toString(36);
  }
  function K(o, u, T, N, A) {
    var x = typeof o;
    (x === "undefined" || x === "boolean") && (o = null);
    var F = !1;
    if (o === null) F = !0;
    else switch (x) {
      case "string":
      case "number":
        F = !0;
        break;
      case "object":
        switch (o.$$typeof) {
          case n:
          case e:
            F = !0;
        }
    }
    if (F) return F = o, A = A(F), o = N === "" ? "." + q(F, 0) : N, R(A) ? (T = "", o != null && (T = o.replace(z, "$&/") + "/"), K(A, u, T, "", function(rt) {
      return rt;
    })) : A != null && (W(A) && (A = I(A, T + (!A.key || F && F.key === A.key ? "" : ("" + A.key).replace(z, "$&/") + "/") + o)), u.push(A)), 1;
    if (F = 0, N = N === "" ? "." : N + ":", R(o)) for (var B = 0; B < o.length; B++) {
      x = o[B];
      var k = N + q(x, B);
      F += K(x, u, T, k, A);
    }
    else if (k = E(o), typeof k == "function") for (o = k.call(o), B = 0; !(x = o.next()).done; ) x = x.value, k = N + q(x, B++), F += K(x, u, T, k, A);
    else if (x === "object") throw u = String(o), Error("Objects are not valid as a React child (found: " + (u === "[object Object]" ? "object with keys {" + Object.keys(o).join(", ") + "}" : u) + "). If you meant to render a collection of children, use an array instead.");
    return F;
  }
  function ot(o, u, T) {
    if (o == null) return o;
    var N = [], A = 0;
    return K(o, N, "", "", function(x) {
      return u.call(T, x, A++);
    }), N;
  }
  function Nt(o) {
    if (o._status === -1) {
      var u = o._result;
      u = u(), u.then(function(T) {
        (o._status === 0 || o._status === -1) && (o._status = 1, o._result = T);
      }, function(T) {
        (o._status === 0 || o._status === -1) && (o._status = 2, o._result = T);
      }), o._status === -1 && (o._status = 0, o._result = u);
    }
    if (o._status === 1) return o._result.default;
    throw o._result;
  }
  var G = { current: null }, dt = { transition: null }, zt = { ReactCurrentDispatcher: G, ReactCurrentBatchConfig: dt, ReactCurrentOwner: D };
  function At() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return L.Children = { map: ot, forEach: function(o, u, T) {
    ot(o, function() {
      u.apply(this, arguments);
    }, T);
  }, count: function(o) {
    var u = 0;
    return ot(o, function() {
      u++;
    }), u;
  }, toArray: function(o) {
    return ot(o, function(u) {
      return u;
    }) || [];
  }, only: function(o) {
    if (!W(o)) throw Error("React.Children.only expected to receive a single React element child.");
    return o;
  } }, L.Component = v, L.Fragment = r, L.Profiler = c, L.PureComponent = j, L.StrictMode = a, L.Suspense = f, L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = zt, L.act = At, L.cloneElement = function(o, u, T) {
    if (o == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + o + ".");
    var N = b({}, o.props), A = o.key, x = o.ref, F = o._owner;
    if (u != null) {
      if (u.ref !== void 0 && (x = u.ref, F = D.current), u.key !== void 0 && (A = "" + u.key), o.type && o.type.defaultProps) var B = o.type.defaultProps;
      for (k in u) nt.call(u, k) && !U.hasOwnProperty(k) && (N[k] = u[k] === void 0 && B !== void 0 ? B[k] : u[k]);
    }
    var k = arguments.length - 2;
    if (k === 1) N.children = T;
    else if (1 < k) {
      B = Array(k);
      for (var rt = 0; rt < k; rt++) B[rt] = arguments[rt + 2];
      N.children = B;
    }
    return { $$typeof: n, type: o.type, key: A, ref: x, props: N, _owner: F };
  }, L.createContext = function(o) {
    return o = { $$typeof: s, _currentValue: o, _currentValue2: o, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, o.Provider = { $$typeof: i, _context: o }, o.Consumer = o;
  }, L.createElement = H, L.createFactory = function(o) {
    var u = H.bind(null, o);
    return u.type = o, u;
  }, L.createRef = function() {
    return { current: null };
  }, L.forwardRef = function(o) {
    return { $$typeof: p, render: o };
  }, L.isValidElement = W, L.lazy = function(o) {
    return { $$typeof: m, _payload: { _status: -1, _result: o }, _init: Nt };
  }, L.memo = function(o, u) {
    return { $$typeof: d, type: o, compare: u === void 0 ? null : u };
  }, L.startTransition = function(o) {
    var u = dt.transition;
    dt.transition = {};
    try {
      o();
    } finally {
      dt.transition = u;
    }
  }, L.unstable_act = At, L.useCallback = function(o, u) {
    return G.current.useCallback(o, u);
  }, L.useContext = function(o) {
    return G.current.useContext(o);
  }, L.useDebugValue = function() {
  }, L.useDeferredValue = function(o) {
    return G.current.useDeferredValue(o);
  }, L.useEffect = function(o, u) {
    return G.current.useEffect(o, u);
  }, L.useId = function() {
    return G.current.useId();
  }, L.useImperativeHandle = function(o, u, T) {
    return G.current.useImperativeHandle(o, u, T);
  }, L.useInsertionEffect = function(o, u) {
    return G.current.useInsertionEffect(o, u);
  }, L.useLayoutEffect = function(o, u) {
    return G.current.useLayoutEffect(o, u);
  }, L.useMemo = function(o, u) {
    return G.current.useMemo(o, u);
  }, L.useReducer = function(o, u, T) {
    return G.current.useReducer(o, u, T);
  }, L.useRef = function(o) {
    return G.current.useRef(o);
  }, L.useState = function(o) {
    return G.current.useState(o);
  }, L.useSyncExternalStore = function(o, u, T) {
    return G.current.useSyncExternalStore(o, u, T);
  }, L.useTransition = function() {
    return G.current.useTransition();
  }, L.version = "18.3.1", L;
}
Pn();
/*! @license DOMPurify 3.2.5 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.2.5/LICENSE */
const {
  entries: Je,
  setPrototypeOf: Pe,
  isFrozen: Hn,
  getPrototypeOf: Fn,
  getOwnPropertyDescriptor: Bn
} = Object;
let {
  freeze: tt,
  seal: it,
  create: tn
} = Object, {
  apply: ce,
  construct: le
} = typeof Reflect < "u" && Reflect;
tt || (tt = function(e) {
  return e;
});
it || (it = function(e) {
  return e;
});
ce || (ce = function(e, r, a) {
  return e.apply(r, a);
});
le || (le = function(e, r) {
  return new e(...r);
});
const Bt = et(Array.prototype.forEach), Un = et(Array.prototype.lastIndexOf), He = et(Array.prototype.pop), vt = et(Array.prototype.push), Wn = et(Array.prototype.splice), Wt = et(String.prototype.toLowerCase), te = et(String.prototype.toString), Fe = et(String.prototype.match), Lt = et(String.prototype.replace), zn = et(String.prototype.indexOf), qn = et(String.prototype.trim), st = et(Object.prototype.hasOwnProperty), Z = et(RegExp.prototype.test), Ct = Gn(TypeError);
function et(n) {
  return function(e) {
    e instanceof RegExp && (e.lastIndex = 0);
    for (var r = arguments.length, a = new Array(r > 1 ? r - 1 : 0), c = 1; c < r; c++)
      a[c - 1] = arguments[c];
    return ce(n, e, a);
  };
}
function Gn(n) {
  return function() {
    for (var e = arguments.length, r = new Array(e), a = 0; a < e; a++)
      r[a] = arguments[a];
    return le(n, r);
  };
}
function C(n, e) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Wt;
  Pe && Pe(n, null);
  let a = e.length;
  for (; a--; ) {
    let c = e[a];
    if (typeof c == "string") {
      const i = r(c);
      i !== c && (Hn(e) || (e[a] = i), c = i);
    }
    n[c] = !0;
  }
  return n;
}
function Vn(n) {
  for (let e = 0; e < n.length; e++)
    st(n, e) || (n[e] = null);
  return n;
}
function mt(n) {
  const e = tn(null);
  for (const [r, a] of Je(n))
    st(n, r) && (Array.isArray(a) ? e[r] = Vn(a) : a && typeof a == "object" && a.constructor === Object ? e[r] = mt(a) : e[r] = a);
  return e;
}
function Ot(n, e) {
  for (; n !== null; ) {
    const a = Bn(n, e);
    if (a) {
      if (a.get)
        return et(a.get);
      if (typeof a.value == "function")
        return et(a.value);
    }
    n = Fn(n);
  }
  function r() {
    return null;
  }
  return r;
}
const Be = tt(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), ee = tt(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), ne = tt(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Yn = tt(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), oe = tt(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), jn = tt(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Ue = tt(["#text"]), We = tt(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]), re = tt(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), ze = tt(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Ut = tt(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), $n = it(/\{\{[\w\W]*|[\w\W]*\}\}/gm), Xn = it(/<%[\w\W]*|[\w\W]*%>/gm), Kn = it(/\$\{[\w\W]*/gm), Qn = it(/^data-[\-\w.\u00B7-\uFFFF]+$/), Zn = it(/^aria-[\-\w]+$/), en = it(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), Jn = it(/^(?:\w+script|data):/i), to = it(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), nn = it(/^html$/i), eo = it(/^[a-z][.\w]*(-[.\w]+)+$/i);
var qe = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ARIA_ATTR: Zn,
  ATTR_WHITESPACE: to,
  CUSTOM_ELEMENT: eo,
  DATA_ATTR: Qn,
  DOCTYPE_NAME: nn,
  ERB_EXPR: Xn,
  IS_ALLOWED_URI: en,
  IS_SCRIPT_OR_DATA: Jn,
  MUSTACHE_EXPR: $n,
  TMPLIT_EXPR: Kn
});
const Rt = {
  element: 1,
  text: 3,
  // Deprecated
  progressingInstruction: 7,
  comment: 8,
  document: 9
}, no = function() {
  return typeof window > "u" ? null : window;
}, oo = function(e, r) {
  if (typeof e != "object" || typeof e.createPolicy != "function")
    return null;
  let a = null;
  const c = "data-tt-policy-suffix";
  r && r.hasAttribute(c) && (a = r.getAttribute(c));
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
}, Ge = function() {
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
function on() {
  let n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : no();
  const e = (h) => on(h);
  if (e.version = "3.2.5", e.removed = [], !n || !n.document || n.document.nodeType !== Rt.document || !n.Element)
    return e.isSupported = !1, e;
  let {
    document: r
  } = n;
  const a = r, c = a.currentScript, {
    DocumentFragment: i,
    HTMLTemplateElement: s,
    Node: p,
    Element: f,
    NodeFilter: d,
    NamedNodeMap: m = n.NamedNodeMap || n.MozNamedAttrMap,
    HTMLFormElement: y,
    DOMParser: E,
    trustedTypes: w
  } = n, b = f.prototype, _ = Ot(b, "cloneNode"), v = Ot(b, "remove"), S = Ot(b, "nextSibling"), j = Ot(b, "childNodes"), X = Ot(b, "parentNode");
  if (typeof s == "function") {
    const h = r.createElement("template");
    h.content && h.content.ownerDocument && (r = h.content.ownerDocument);
  }
  let R, nt = "";
  const {
    implementation: D,
    createNodeIterator: U,
    createDocumentFragment: H,
    getElementsByTagName: I
  } = r, {
    importNode: W
  } = a;
  let O = Ge();
  e.isSupported = typeof Je == "function" && typeof X == "function" && D && D.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: z,
    ERB_EXPR: q,
    TMPLIT_EXPR: K,
    DATA_ATTR: ot,
    ARIA_ATTR: Nt,
    IS_SCRIPT_OR_DATA: G,
    ATTR_WHITESPACE: dt,
    CUSTOM_ELEMENT: zt
  } = qe;
  let {
    IS_ALLOWED_URI: At
  } = qe, o = null;
  const u = C({}, [...Be, ...ee, ...ne, ...oe, ...Ue]);
  let T = null;
  const N = C({}, [...We, ...re, ...ze, ...Ut]);
  let A = Object.seal(tn(null, {
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
  })), x = null, F = null, B = !0, k = !0, rt = !1, me = !0, gt = !1, qt = !0, pt = !1, Gt = !1, Vt = !1, ht = !1, It = !1, xt = !1, ge = !0, he = !1;
  const _n = "user-content-";
  let Yt = !0, bt = !1, yt = {}, Et = null;
  const ye = C({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let Ee = null;
  const _e = C({}, ["audio", "video", "img", "source", "image", "track"]);
  let jt = null;
  const Te = C({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), Mt = "http://www.w3.org/1998/Math/MathML", kt = "http://www.w3.org/2000/svg", ut = "http://www.w3.org/1999/xhtml";
  let _t = ut, $t = !1, Xt = null;
  const Tn = C({}, [Mt, kt, ut], te);
  let Pt = C({}, ["mi", "mo", "mn", "ms", "mtext"]), Ht = C({}, ["annotation-xml"]);
  const An = C({}, ["title", "style", "font", "a", "script"]);
  let St = null;
  const bn = ["application/xhtml+xml", "text/html"], Sn = "text/html";
  let V = null, Tt = null;
  const wn = r.createElement("form"), Ae = function(t) {
    return t instanceof RegExp || t instanceof Function;
  }, Kt = function() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!(Tt && Tt === t)) {
      if ((!t || typeof t != "object") && (t = {}), t = mt(t), St = // eslint-disable-next-line unicorn/prefer-includes
      bn.indexOf(t.PARSER_MEDIA_TYPE) === -1 ? Sn : t.PARSER_MEDIA_TYPE, V = St === "application/xhtml+xml" ? te : Wt, o = st(t, "ALLOWED_TAGS") ? C({}, t.ALLOWED_TAGS, V) : u, T = st(t, "ALLOWED_ATTR") ? C({}, t.ALLOWED_ATTR, V) : N, Xt = st(t, "ALLOWED_NAMESPACES") ? C({}, t.ALLOWED_NAMESPACES, te) : Tn, jt = st(t, "ADD_URI_SAFE_ATTR") ? C(mt(Te), t.ADD_URI_SAFE_ATTR, V) : Te, Ee = st(t, "ADD_DATA_URI_TAGS") ? C(mt(_e), t.ADD_DATA_URI_TAGS, V) : _e, Et = st(t, "FORBID_CONTENTS") ? C({}, t.FORBID_CONTENTS, V) : ye, x = st(t, "FORBID_TAGS") ? C({}, t.FORBID_TAGS, V) : {}, F = st(t, "FORBID_ATTR") ? C({}, t.FORBID_ATTR, V) : {}, yt = st(t, "USE_PROFILES") ? t.USE_PROFILES : !1, B = t.ALLOW_ARIA_ATTR !== !1, k = t.ALLOW_DATA_ATTR !== !1, rt = t.ALLOW_UNKNOWN_PROTOCOLS || !1, me = t.ALLOW_SELF_CLOSE_IN_ATTR !== !1, gt = t.SAFE_FOR_TEMPLATES || !1, qt = t.SAFE_FOR_XML !== !1, pt = t.WHOLE_DOCUMENT || !1, ht = t.RETURN_DOM || !1, It = t.RETURN_DOM_FRAGMENT || !1, xt = t.RETURN_TRUSTED_TYPE || !1, Vt = t.FORCE_BODY || !1, ge = t.SANITIZE_DOM !== !1, he = t.SANITIZE_NAMED_PROPS || !1, Yt = t.KEEP_CONTENT !== !1, bt = t.IN_PLACE || !1, At = t.ALLOWED_URI_REGEXP || en, _t = t.NAMESPACE || ut, Pt = t.MATHML_TEXT_INTEGRATION_POINTS || Pt, Ht = t.HTML_INTEGRATION_POINTS || Ht, A = t.CUSTOM_ELEMENT_HANDLING || {}, t.CUSTOM_ELEMENT_HANDLING && Ae(t.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (A.tagNameCheck = t.CUSTOM_ELEMENT_HANDLING.tagNameCheck), t.CUSTOM_ELEMENT_HANDLING && Ae(t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (A.attributeNameCheck = t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), t.CUSTOM_ELEMENT_HANDLING && typeof t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (A.allowCustomizedBuiltInElements = t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), gt && (k = !1), It && (ht = !0), yt && (o = C({}, Ue), T = [], yt.html === !0 && (C(o, Be), C(T, We)), yt.svg === !0 && (C(o, ee), C(T, re), C(T, Ut)), yt.svgFilters === !0 && (C(o, ne), C(T, re), C(T, Ut)), yt.mathMl === !0 && (C(o, oe), C(T, ze), C(T, Ut))), t.ADD_TAGS && (o === u && (o = mt(o)), C(o, t.ADD_TAGS, V)), t.ADD_ATTR && (T === N && (T = mt(T)), C(T, t.ADD_ATTR, V)), t.ADD_URI_SAFE_ATTR && C(jt, t.ADD_URI_SAFE_ATTR, V), t.FORBID_CONTENTS && (Et === ye && (Et = mt(Et)), C(Et, t.FORBID_CONTENTS, V)), Yt && (o["#text"] = !0), pt && C(o, ["html", "head", "body"]), o.table && (C(o, ["tbody"]), delete x.tbody), t.TRUSTED_TYPES_POLICY) {
        if (typeof t.TRUSTED_TYPES_POLICY.createHTML != "function")
          throw Ct('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof t.TRUSTED_TYPES_POLICY.createScriptURL != "function")
          throw Ct('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        R = t.TRUSTED_TYPES_POLICY, nt = R.createHTML("");
      } else
        R === void 0 && (R = oo(w, c)), R !== null && typeof nt == "string" && (nt = R.createHTML(""));
      tt && tt(t), Tt = t;
    }
  }, be = C({}, [...ee, ...ne, ...Yn]), Se = C({}, [...oe, ...jn]), vn = function(t) {
    let l = X(t);
    (!l || !l.tagName) && (l = {
      namespaceURI: _t,
      tagName: "template"
    });
    const g = Wt(t.tagName), P = Wt(l.tagName);
    return Xt[t.namespaceURI] ? t.namespaceURI === kt ? l.namespaceURI === ut ? g === "svg" : l.namespaceURI === Mt ? g === "svg" && (P === "annotation-xml" || Pt[P]) : !!be[g] : t.namespaceURI === Mt ? l.namespaceURI === ut ? g === "math" : l.namespaceURI === kt ? g === "math" && Ht[P] : !!Se[g] : t.namespaceURI === ut ? l.namespaceURI === kt && !Ht[P] || l.namespaceURI === Mt && !Pt[P] ? !1 : !Se[g] && (An[g] || !be[g]) : !!(St === "application/xhtml+xml" && Xt[t.namespaceURI]) : !1;
  }, ct = function(t) {
    vt(e.removed, {
      element: t
    });
    try {
      X(t).removeChild(t);
    } catch {
      v(t);
    }
  }, Ft = function(t, l) {
    try {
      vt(e.removed, {
        attribute: l.getAttributeNode(t),
        from: l
      });
    } catch {
      vt(e.removed, {
        attribute: null,
        from: l
      });
    }
    if (l.removeAttribute(t), t === "is")
      if (ht || It)
        try {
          ct(l);
        } catch {
        }
      else
        try {
          l.setAttribute(t, "");
        } catch {
        }
  }, we = function(t) {
    let l = null, g = null;
    if (Vt)
      t = "<remove></remove>" + t;
    else {
      const Y = Fe(t, /^[\r\n\t ]+/);
      g = Y && Y[0];
    }
    St === "application/xhtml+xml" && _t === ut && (t = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + t + "</body></html>");
    const P = R ? R.createHTML(t) : t;
    if (_t === ut)
      try {
        l = new E().parseFromString(P, St);
      } catch {
      }
    if (!l || !l.documentElement) {
      l = D.createDocument(_t, "template", null);
      try {
        l.documentElement.innerHTML = $t ? nt : P;
      } catch {
      }
    }
    const $ = l.body || l.documentElement;
    return t && g && $.insertBefore(r.createTextNode(g), $.childNodes[0] || null), _t === ut ? I.call(l, pt ? "html" : "body")[0] : pt ? l.documentElement : $;
  }, ve = function(t) {
    return U.call(
      t.ownerDocument || t,
      t,
      // eslint-disable-next-line no-bitwise
      d.SHOW_ELEMENT | d.SHOW_COMMENT | d.SHOW_TEXT | d.SHOW_PROCESSING_INSTRUCTION | d.SHOW_CDATA_SECTION,
      null
    );
  }, Qt = function(t) {
    return t instanceof y && (typeof t.nodeName != "string" || typeof t.textContent != "string" || typeof t.removeChild != "function" || !(t.attributes instanceof m) || typeof t.removeAttribute != "function" || typeof t.setAttribute != "function" || typeof t.namespaceURI != "string" || typeof t.insertBefore != "function" || typeof t.hasChildNodes != "function");
  }, Le = function(t) {
    return typeof p == "function" && t instanceof p;
  };
  function ft(h, t, l) {
    Bt(h, (g) => {
      g.call(e, t, l, Tt);
    });
  }
  const Ce = function(t) {
    let l = null;
    if (ft(O.beforeSanitizeElements, t, null), Qt(t))
      return ct(t), !0;
    const g = V(t.nodeName);
    if (ft(O.uponSanitizeElement, t, {
      tagName: g,
      allowedTags: o
    }), t.hasChildNodes() && !Le(t.firstElementChild) && Z(/<[/\w!]/g, t.innerHTML) && Z(/<[/\w!]/g, t.textContent) || t.nodeType === Rt.progressingInstruction || qt && t.nodeType === Rt.comment && Z(/<[/\w]/g, t.data))
      return ct(t), !0;
    if (!o[g] || x[g]) {
      if (!x[g] && Re(g) && (A.tagNameCheck instanceof RegExp && Z(A.tagNameCheck, g) || A.tagNameCheck instanceof Function && A.tagNameCheck(g)))
        return !1;
      if (Yt && !Et[g]) {
        const P = X(t) || t.parentNode, $ = j(t) || t.childNodes;
        if ($ && P) {
          const Y = $.length;
          for (let at = Y - 1; at >= 0; --at) {
            const lt = _($[at], !0);
            lt.__removalCount = (t.__removalCount || 0) + 1, P.insertBefore(lt, S(t));
          }
        }
      }
      return ct(t), !0;
    }
    return t instanceof f && !vn(t) || (g === "noscript" || g === "noembed" || g === "noframes") && Z(/<\/no(script|embed|frames)/i, t.innerHTML) ? (ct(t), !0) : (gt && t.nodeType === Rt.text && (l = t.textContent, Bt([z, q, K], (P) => {
      l = Lt(l, P, " ");
    }), t.textContent !== l && (vt(e.removed, {
      element: t.cloneNode()
    }), t.textContent = l)), ft(O.afterSanitizeElements, t, null), !1);
  }, Oe = function(t, l, g) {
    if (ge && (l === "id" || l === "name") && (g in r || g in wn))
      return !1;
    if (!(k && !F[l] && Z(ot, l))) {
      if (!(B && Z(Nt, l))) {
        if (!T[l] || F[l]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(Re(t) && (A.tagNameCheck instanceof RegExp && Z(A.tagNameCheck, t) || A.tagNameCheck instanceof Function && A.tagNameCheck(t)) && (A.attributeNameCheck instanceof RegExp && Z(A.attributeNameCheck, l) || A.attributeNameCheck instanceof Function && A.attributeNameCheck(l)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            l === "is" && A.allowCustomizedBuiltInElements && (A.tagNameCheck instanceof RegExp && Z(A.tagNameCheck, g) || A.tagNameCheck instanceof Function && A.tagNameCheck(g)))
          ) return !1;
        } else if (!jt[l]) {
          if (!Z(At, Lt(g, dt, ""))) {
            if (!((l === "src" || l === "xlink:href" || l === "href") && t !== "script" && zn(g, "data:") === 0 && Ee[t])) {
              if (!(rt && !Z(G, Lt(g, dt, "")))) {
                if (g)
                  return !1;
              }
            }
          }
        }
      }
    }
    return !0;
  }, Re = function(t) {
    return t !== "annotation-xml" && Fe(t, zt);
  }, De = function(t) {
    ft(O.beforeSanitizeAttributes, t, null);
    const {
      attributes: l
    } = t;
    if (!l || Qt(t))
      return;
    const g = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: T,
      forceKeepAttr: void 0
    };
    let P = l.length;
    for (; P--; ) {
      const $ = l[P], {
        name: Y,
        namespaceURI: at,
        value: lt
      } = $, wt = V(Y);
      let Q = Y === "value" ? lt : qn(lt);
      if (g.attrName = wt, g.attrValue = Q, g.keepAttr = !0, g.forceKeepAttr = void 0, ft(O.uponSanitizeAttribute, t, g), Q = g.attrValue, he && (wt === "id" || wt === "name") && (Ft(Y, t), Q = _n + Q), qt && Z(/((--!?|])>)|<\/(style|title)/i, Q)) {
        Ft(Y, t);
        continue;
      }
      if (g.forceKeepAttr || (Ft(Y, t), !g.keepAttr))
        continue;
      if (!me && Z(/\/>/i, Q)) {
        Ft(Y, t);
        continue;
      }
      gt && Bt([z, q, K], (Ie) => {
        Q = Lt(Q, Ie, " ");
      });
      const Ne = V(t.nodeName);
      if (Oe(Ne, wt, Q)) {
        if (R && typeof w == "object" && typeof w.getAttributeType == "function" && !at)
          switch (w.getAttributeType(Ne, wt)) {
            case "TrustedHTML": {
              Q = R.createHTML(Q);
              break;
            }
            case "TrustedScriptURL": {
              Q = R.createScriptURL(Q);
              break;
            }
          }
        try {
          at ? t.setAttributeNS(at, Y, Q) : t.setAttribute(Y, Q), Qt(t) ? ct(t) : He(e.removed);
        } catch {
        }
      }
    }
    ft(O.afterSanitizeAttributes, t, null);
  }, Ln = function h(t) {
    let l = null;
    const g = ve(t);
    for (ft(O.beforeSanitizeShadowDOM, t, null); l = g.nextNode(); )
      ft(O.uponSanitizeShadowNode, l, null), Ce(l), De(l), l.content instanceof i && h(l.content);
    ft(O.afterSanitizeShadowDOM, t, null);
  };
  return e.sanitize = function(h) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, l = null, g = null, P = null, $ = null;
    if ($t = !h, $t && (h = "<!-->"), typeof h != "string" && !Le(h))
      if (typeof h.toString == "function") {
        if (h = h.toString(), typeof h != "string")
          throw Ct("dirty is not a string, aborting");
      } else
        throw Ct("toString is not a function");
    if (!e.isSupported)
      return h;
    if (Gt || Kt(t), e.removed = [], typeof h == "string" && (bt = !1), bt) {
      if (h.nodeName) {
        const lt = V(h.nodeName);
        if (!o[lt] || x[lt])
          throw Ct("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (h instanceof p)
      l = we("<!---->"), g = l.ownerDocument.importNode(h, !0), g.nodeType === Rt.element && g.nodeName === "BODY" || g.nodeName === "HTML" ? l = g : l.appendChild(g);
    else {
      if (!ht && !gt && !pt && // eslint-disable-next-line unicorn/prefer-includes
      h.indexOf("<") === -1)
        return R && xt ? R.createHTML(h) : h;
      if (l = we(h), !l)
        return ht ? null : xt ? nt : "";
    }
    l && Vt && ct(l.firstChild);
    const Y = ve(bt ? h : l);
    for (; P = Y.nextNode(); )
      Ce(P), De(P), P.content instanceof i && Ln(P.content);
    if (bt)
      return h;
    if (ht) {
      if (It)
        for ($ = H.call(l.ownerDocument); l.firstChild; )
          $.appendChild(l.firstChild);
      else
        $ = l;
      return (T.shadowroot || T.shadowrootmode) && ($ = W.call(a, $, !0)), $;
    }
    let at = pt ? l.outerHTML : l.innerHTML;
    return pt && o["!doctype"] && l.ownerDocument && l.ownerDocument.doctype && l.ownerDocument.doctype.name && Z(nn, l.ownerDocument.doctype.name) && (at = "<!DOCTYPE " + l.ownerDocument.doctype.name + `>
` + at), gt && Bt([z, q, K], (lt) => {
      at = Lt(at, lt, " ");
    }), R && xt ? R.createHTML(at) : at;
  }, e.setConfig = function() {
    let h = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Kt(h), Gt = !0;
  }, e.clearConfig = function() {
    Tt = null, Gt = !1;
  }, e.isValidAttribute = function(h, t, l) {
    Tt || Kt({});
    const g = V(h), P = V(t);
    return Oe(g, P, l);
  }, e.addHook = function(h, t) {
    typeof t == "function" && vt(O[h], t);
  }, e.removeHook = function(h, t) {
    if (t !== void 0) {
      const l = Un(O[h], t);
      return l === -1 ? void 0 : Wn(O[h], l, 1)[0];
    }
    return He(O[h]);
  }, e.removeHooks = function(h) {
    O[h] = [];
  }, e.removeAllHooks = function() {
    O = Ge();
  }, e;
}
on();
function ro(n) {
  if (n && typeof n.getBoundingClientRect == "function") {
    const { bottom: e, top: r } = n.getBoundingClientRect(), { offsetTop: a } = n;
    if (r < 0 && e > 0) {
      const c = n.style;
      n.style = `${c};transition: height 0s !important; overflow:hidden; height:${e}px!important;max-height:${e}px!important`, window.scrollTo({ behavior: "instant", top: a }), setTimeout(() => {
        n.style = c, window.scrollTo({
          behavior: "smooth",
          top: n.offsetTop - e / 2
        });
      }, 50);
    }
  }
}
var rn = { exports: {} }, ae, Ve;
function ao() {
  if (Ve) return ae;
  Ve = 1;
  var n = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return ae = n, ae;
}
var ie, Ye;
function io() {
  if (Ye) return ie;
  Ye = 1;
  var n = ao();
  function e() {
  }
  function r() {
  }
  return r.resetWarningCache = e, ie = function() {
    function a(s, p, f, d, m, y) {
      if (y !== n) {
        var E = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw E.name = "Invariant Violation", E;
      }
    }
    a.isRequired = a;
    function c() {
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
      arrayOf: c,
      element: a,
      elementType: a,
      instanceOf: c,
      node: a,
      objectOf: c,
      oneOf: c,
      oneOfType: c,
      shape: c,
      exact: c,
      checkPropTypes: r,
      resetWarningCache: e
    };
    return i.PropTypes = i, i;
  }, ie;
}
rn.exports = io()();
var so = rn.exports;
const J = /* @__PURE__ */ kn(so);
J.shape({
  event: J.string,
  action: J.string,
  name: J.string,
  region: J.string,
  section: J.string,
  component: J.string,
  type: J.string,
  text: J.string
});
const Dt = ({ children: n }) => /* @__PURE__ */ React.createElement(React.Fragment, null, n);
Dt.propTypes = {
  children: J.oneOfType([
    J.arrayOf(J.node),
    J.node,
    J.string
  ])
};
var co = { exports: {} };
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
        var p = arguments[s];
        p && (i = c(i, a(p)));
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
      for (var p in i)
        e.call(i, p) && i[p] && (s = c(s, p));
      return s;
    }
    function c(i, s) {
      return s ? i ? i + " " + s : i + s : i;
    }
    n.exports ? (r.default = r, n.exports = r) : window.classNames = r;
  })();
})(co);
({
  ...Dt.propTypes
});
const an = ({ children: n, className: e = "container", ...r }) => /* @__PURE__ */ React.createElement("div", { className: e, ...r }, /* @__PURE__ */ React.createElement("div", { className: "row" }, n));
an.propTypes = {
  children: Dt.propTypes.children
};
({
  ...an.propTypes
});
Dt.propTypes.children, J.oneOf(["0", "3", "4", "6", "8", "9", "12"]);
Dt.propTypes.children;
function sn() {
  var R, nt;
  const r = ["asu-header", "asuHeader"].find((D) => document.getElementById(D)), a = document.getElementById(r), c = document.getElementById("uds-anchor-menu");
  if (!c || !a) {
    console.warn(
      "Anchor menu initialization failed: required elements not found"
    );
    return;
  }
  const i = c.parentNode, s = c.nextSibling, p = Array.from(c.getElementsByClassName("nav-link")), f = /* @__PURE__ */ new Map();
  let d = window.scrollY, m = !1;
  const y = ((R = document.getElementById("toolbar-bar")) == null ? void 0 : R.offsetHeight) || 0, E = ((nt = document.getElementById("toolbar-item-administration-tray")) == null ? void 0 : nt.offsetHeight) || 0, w = y + E, b = c.getBoundingClientRect().top + window.scrollY - w;
  for (let D of p) {
    const U = D.getAttribute("href");
    if (!U || !U.startsWith("#"))
      continue;
    const H = U.replace("#", ""), I = document.getElementById(H);
    I ? f.set(D, I) : console.warn(`Anchor menu: target element "${H}" not found`);
  }
  window.scrollY > b && (a.appendChild(c), m = !0, c.classList.add("uds-anchor-menu-attached"));
  function v(D, U = 0) {
    if (!D || U > 10)
      return 0;
    if (D.offsetHeight === 0 || D.offsetWidth === 0)
      return v(D.parentElement, U + 1);
    const H = D.getBoundingClientRect(), I = window.innerHeight || document.documentElement.clientHeight, W = window.innerWidth || document.documentElement.clientWidth, O = H.bottom - H.top, z = H.right - H.left, q = O * z, K = Math.min(I, H.bottom) - Math.max(0, H.top), ot = Math.min(W, H.right) - Math.max(0, H.left);
    return K * ot / q * 100;
  }
  const S = function() {
    let D = 0, U = null;
    if (p.forEach((O) => {
      const z = f.get(O);
      if (!z)
        return;
      const q = v(z);
      q > 0 && q > D && (D = q, U = z.id);
    }), U) {
      const O = document.querySelector(
        '[href="#' + U + '"]'
      );
      O && O.classList.add("active"), c.querySelectorAll(
        'a.nav-link:not([href="#' + U + '"])'
      ).forEach(function(z) {
        z.classList.remove("active");
      });
    }
    const H = c.getBoundingClientRect().top, I = a.getBoundingClientRect().bottom, W = window.scrollY > d;
    if (W && I >= H && (m || (a.appendChild(c), m = !0, c.classList.add("uds-anchor-menu-attached"))), !W && m) {
      const O = a.getBoundingClientRect().bottom, z = c.getBoundingClientRect().top;
      (window.scrollY <= b || O < z) && (i.insertBefore(c, s), m = !1, c.classList.remove("uds-anchor-menu-attached"));
    }
    d = window.scrollY;
  };
  let j;
  j = (() => {
    let D = !1;
    return () => {
      D || (D = !0, S(), setTimeout(() => {
        D = !1;
      }, 100));
    };
  })(), window.addEventListener("scroll", j, { passive: !0 });
  for (let [D, U] of f)
    D.addEventListener("click", function(H) {
      if (H.preventDefault(), !U || !document.body.contains(U)) {
        console.warn("Anchor target no longer exists in DOM");
        return;
      }
      const I = window.innerHeight, W = Math.round(I * 0.25);
      let z = U.getBoundingClientRect().top + window.scrollY - W;
      window.scrollTo({
        top: z,
        behavior: "smooth"
      });
      const q = c.querySelector(".nav-link.active");
      q && q.classList.remove("active"), H.target.classList.add("active");
    });
}
M.on(window, "load.uds.anchor-menu", sn);
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
function ln() {
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
  ], r = ["Su", "M", "Tu", "W", "Th", "F", "Sa"], c = {
    month: (/* @__PURE__ */ new Date()).getMonth(),
    year: (/* @__PURE__ */ new Date()).getFullYear()
  }, i = (f, d) => {
    const m = /* @__PURE__ */ new Date(), y = [], E = new Date(f, d).getDay(), w = new Date(f, d + 1, 0).getDate(), b = new Date(f, d, 0).getDate();
    for (let _ = 1; _ <= E; _++) {
      const v = b - E + _, S = new Date(
        c.year,
        c.month - 1,
        v
      ).toLocaleString();
      y.push({ key: S, date: v, monthClass: "prev" });
    }
    for (let _ = 1; _ <= w; _++) {
      const v = new Date(c.year, c.month, _).toLocaleString();
      _ === m.getDate() && c.month === m.getMonth() && c.year === m.getFullYear() ? y.push({
        key: v,
        date: _,
        monthClass: "current",
        todayClass: "today"
      }) : y.push({ key: v, date: _, monthClass: "current" });
    }
    if (y.length < 42) {
      const _ = 42 - y.length;
      for (let v = 1; v <= _; v++) {
        const S = new Date(c.year, c.month + 1, v).toLocaleString();
        y.push({ key: S, date: v, monthClass: "next" });
      }
    }
    return y;
  }, s = () => {
    const f = document.getElementById("calendar");
    f && (f.innerHTML = `
      <h2><span class="highlight-black">${n[c.month]} ${c.year}</span></h2>
      <div class="calendar-grid">
        <div class="heading desktop">
          ${e.map((d) => `<p>${d}</p>`).join("")}
        </div>
        <div class="heading mobile">
          ${r.map((d) => `<p>${d}</p>`).join("")}
        </div>
        <div class="body">
          ${i(c.year, c.month).map(
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
  ((f) => {
    var d = new Date(c.year, c.month + f);
    c.year = d.getFullYear(), c.month = d.getMonth(), s();
  })(0);
}
M.on(window, "load.uds.calendar", ln);
function fe() {
  const n = document.querySelectorAll(".card-body");
  if (n.length === 0 && 0 < 3) {
    setTimeout(() => fe(), 500);
    return;
  }
  if (n.length === 0) {
    console.warn("No .card-body found after 3 retries.");
    return;
  }
  n.forEach((r, a) => {
    const c = r.querySelector("div p"), i = c.textContent, s = window.getComputedStyle(r), p = parseInt(s.webkitLineClamp || s.lineClamp), f = parseFloat(s.lineHeight), d = parseFloat(s.fontSize), m = isNaN(f) ? parseFloat(s.lineHeight) * d : f, y = p * m;
    if (c.offsetHeight >= y) {
      let E = "";
      const w = i.split(" ");
      let b = 0, _ = "";
      for (; b < w.length && lo(
        _ + (_ ? " " : "") + w[b],
        c
      ) <= y; )
        _ += (_ ? " " : "") + w[b], b++;
      E = _ + "...";
      const v = `visible-text-${Math.random().toString(36).substring(7)}`, S = document.createElement("div");
      S.id = v, S.textContent = E, S.style.position = "absolute", S.style.top = `${c.offsetTop}px`, S.style.left = `${c.offsetLeft}px`, S.style.width = `${c.offsetWidth}px`, S.style.height = `${c.offsetHeight}px`, S.style.opacity = "0", S.style.pointerEvents = "none", S.style.zIndex = "1", r.appendChild(S), c.setAttribute("aria-describedby", v), c.setAttribute("aria-hidden", "true");
    }
  });
}
function lo(n, e) {
  const r = document.createElement(e.tagName);
  r.style.font = window.getComputedStyle(e).font, r.style.width = window.getComputedStyle(e).width, r.style.whiteSpace = "pre-wrap", r.textContent = n, document.body.appendChild(r);
  const a = r.offsetHeight;
  return document.body.removeChild(r), a;
}
M.on(window, "load.uds.card-bodies", fe);
function un() {
  const n = document.querySelector(".info-layer"), e = document.getElementById("dispatch");
  M.on(e, "click", function() {
    n == null || n.classList.toggle("active");
  });
}
M.on(window, "load.uds.ranking-card", un);
function fn() {
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
M.on(window, "load.uds.chart", fn);
function dn() {
  function n({ target: e }) {
    const r = e.getAttribute("href");
    e.getAttribute("data-bs-toggle") !== "collapse" || !r || !r.includes("#") || ro(
      document.querySelector(".collapsing")
    );
  }
  M.on(document, "click.uds.collapse", n);
}
M.on(window, "load.uds.collapse", dn);
function de() {
  var e, r, a, c;
  const n = (i) => {
    window.dataLayer = window.dataLayer || [];
    const { dataLayer: s } = window;
    s && s.push(i);
  };
  (e = document.querySelectorAll("[data-ga-header]")) == null || e.forEach(
    (i) => i.addEventListener("click", () => {
      const s = i.getAttribute("data-ga-header-event") || "link";
      let p = i.getAttribute("data-ga-header-action") || "click";
      const f = i.getAttribute("aria-expanded");
      f && (p = f === "false" ? "open" : "close");
      const d = i.getAttribute("data-ga-header-type") || "internal link", m = i.getAttribute("data-ga-header-section") || "main navbar", y = i.getAttribute("data-ga-header") || "", E = i.getAttribute("data-ga-header-component");
      n({
        name: "onclick",
        event: s.toLowerCase(),
        action: p.toLowerCase(),
        type: d.toLowerCase(),
        section: m.toLowerCase(),
        region: "navbar",
        text: y.toLowerCase(),
        ...E && {
          component: E.toLowerCase()
        }
      });
    })
  ), (r = document.querySelectorAll("[data-ga-input-header-event]")) == null || r.forEach(
    (i) => i.addEventListener("change", (s) => {
      const p = i.getAttribute("data-ga-input-header-event") || "", f = s.target.value || "";
      n({
        name: "onenter",
        action: "type",
        type: "main search",
        section: "topbar",
        region: "navbar",
        text: f.toLowerCase(),
        event: p.toLowerCase()
      });
    })
  ), (a = document.querySelectorAll("[data-ga]")) == null || a.forEach(
    (i) => i.addEventListener("click", () => {
      const s = i.getAttribute("data-ga-name") || "", p = i.getAttribute("data-ga-event") || "";
      let f = i.getAttribute("data-ga-action") || "";
      const d = i.getAttribute("aria-expanded");
      d && (f = d === "false" ? "open" : "close");
      const m = i.getAttribute("data-ga-type") || "", y = i.getAttribute("data-ga-section") || "", E = i.getAttribute("data-ga-region") || "", w = i.getAttribute("data-ga") || "", b = i.getAttribute("data-ga-component") || "";
      n({
        name: s.toLowerCase(),
        event: p.toLowerCase(),
        action: f.toLowerCase(),
        type: m.toLowerCase(),
        section: y.toLowerCase(),
        region: E.toLowerCase(),
        text: w.toLowerCase(),
        component: b.toLowerCase()
      });
    })
  ), (c = document.querySelectorAll("[data-ga-input]")) == null || c.forEach(
    (i) => i.addEventListener("change", (s) => {
      const p = i.getAttribute("data-ga-input-name") || "", f = i.getAttribute("data-ga-input-action") || "", d = i.getAttribute("data-ga-input") || "", m = i.getAttribute("data-ga-input-region") || "", y = i.getAttribute("data-ga-input-section") || "";
      let E = i.getAttribute("data-ga-input-event") || "", w;
      switch (d) {
        case "checkbox":
          w = s.target.labels[0].textContent || "", E = s.target.checked ? E : "deselect";
          break;
        case "radio button":
          w = s.target.labels[0].textContent || "";
          break;
        case "blur":
          w = s.target.value.toLowerCase() || "";
          break;
        default:
          w = [...s.target.selectedOptions].map((b) => b.value).join(",") || "";
          break;
      }
      n({
        name: p.toLowerCase(),
        event: E.toLowerCase(),
        action: f.toLowerCase(),
        type: d.toLowerCase(),
        section: y.toLowerCase(),
        region: m.toLowerCase(),
        text: w.toLowerCase()
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
window.initDataLayer = window.initDataLayer || de;
M.on(window, "load.uds.data-layer", de);
const pe = () => {
  const n = () => {
    const e = document.getElementById("asu-header");
    window.scrollY > (e == null ? void 0 : e.getBoundingClientRect().top) ? e == null || e.classList.add("scrolled") : e == null || e.classList.remove("scrolled");
  };
  M.on(window, "scroll.uds.header", n);
};
window.initGlobalHeader = window.initGlobalHeader || pe;
M.on(window, "load.uds.global-header", pe);
function pn() {
  const n = ".uds-video-hero", e = n + " video", r = n + " #playHeroVid", a = n + " #pauseHeroVid", c = "click", i = "block", s = "none", p = document.querySelector(e), f = document.querySelector(r), d = document.querySelector(a);
  function m(b) {
    b.paused ? b.play() : b.pause();
  }
  function y(b, _) {
    getComputedStyle(b).display === s ? (_.style.display = s, b.style.display = i, b.focus()) : (b.style.display = s, _.style.display = i, _.focus());
  }
  function E(b) {
    b.stopPropagation(), y(f, d), m(p);
  }
  function w(b) {
    b.stopPropagation(), y(f, d), m(p);
  }
  d == null || d.addEventListener(c, E), f == null || f.addEventListener(c, w);
}
M.on(window, "load.uds.heroes-video", pn);
const mn = () => {
  const e = () => {
    document.querySelectorAll(".parallax-container").forEach((s) => {
      const p = s.querySelector("img"), f = s.offsetHeight - p.height * 1.2, d = p.dataset.parallaxType === "scroll-to" ? window.innerHeight : window.innerHeight + s.offsetHeight, m = s.getBoundingClientRect().top, E = (window.innerHeight - m) / d;
      if (E < 0)
        p.style.top = f + "px";
      else if (E > 1)
        p.style.top = "0";
      else {
        const w = f * (1 - E);
        p.style.top = w + "px";
      }
    });
  }, r = (s) => {
    const p = s.parentNode, f = s.width, d = s.height;
    let m = p.offsetWidth / f, y = 0, E = d * m, w = f * m;
    const b = +s.dataset.parallaxFactor || 1.2;
    !s.dataset.noScale && E < p.offsetHeight * b && (m = p.offsetHeight * b / E, E *= m, w *= m, y = (w - p.offsetWidth) / 2 * -1), s.style.height = E + "px", s.style.left = y + "px";
  }, a = () => {
    document.querySelectorAll(".parallax-container img").forEach((s, p) => {
      s.complete ? r(s) : s.onload = () => r(s);
    });
  }, c = (s) => {
    const { dataLayer: p } = window, f = {
      event: "link",
      action: "click",
      name: "onclick",
      type: "internal link",
      region: "main content",
      ...s
    };
    p && p.push(f);
  };
  document.querySelectorAll("[data-ga-image-parallax]").forEach(
    (s) => M.on(s, "focus.uds.image-parallax", () => {
      const p = {
        section: s.getAttribute("data-ga-image-parallax-section").toLowerCase(),
        text: s.getAttribute("data-ga-image-parallax").toLowerCase()
      };
      c(p);
    })
  ), a(), M.on(window, "resize.uds.image-parallax", a), M.on(window, "scroll.uds.image-parallax", e);
};
M.on(window, "load.uds.image-parallax", mn);
function gn() {
  var n, e;
  (n = document.getElementById("openModalButton")) == null || n.addEventListener("click", function() {
    document.getElementById("uds-modal").classList.add("open");
  }), (e = document.getElementById("closeModalButton")) == null || e.addEventListener("click", function() {
    document.getElementById("uds-modal").classList.remove("open");
  });
}
M.on(window, "load.uds.modals", gn);
function hn() {
  const n = "a", e = "button", r = ".nav-tabs", a = ".nav-item", c = ".uds-tabbed-panels", i = ".scroll-control-prev", s = ".scroll-control-next", p = "click", f = "scroll", d = "focus", m = "none", y = "block", b = (_) => {
    [n, e].includes(_.target.localName) && _.target.focus();
  };
  document.querySelectorAll(c).forEach((_) => {
    const v = _.querySelector(r), S = _.querySelectorAll(a), j = _.querySelector(
      i
    ), X = _.querySelector(
      s
    );
    let R = 0;
    _.addEventListener(p, function(I) {
      b(I);
    });
    const nt = (I, W, O) => {
      W.preventDefault();
      const q = getComputedStyle(v).left.replace("px", "");
      let K = parseInt(q, 10);
      O === 1 && R > 0 && (R -= 1), R < S.length - 1 && O == -1 && (R += 1), v.dataset.scrollPosition = R, K = 0;
      for (var ot = 0; ot < R; ot++)
        K += S[ot].offsetWidth + parseInt(getComputedStyle(S[ot]).marginLeft, 10) + parseInt(getComputedStyle(S[ot]).marginRight, 10);
      v.scrollLeft = K, D(I, K);
    }, D = (I, W) => {
      const O = v.scrollWidth - W;
      R == 0 ? j.style.display = m : j.style.display = y, O <= _.offsetWidth ? X.style.display = m : X.style.display = y;
    };
    v.addEventListener(f, (I) => {
      const W = I.target.scrollLeft, O = v.offsetWidth + W + 10 >= v.scrollWidth;
      j.style.display = W < 10 ? m : y, X.style.display = O ? m : y;
    }), S.forEach((I) => {
      I.addEventListener(d, function(W) {
        I.scrollIntoView();
      });
    }), X.addEventListener(p, function(I) {
      window.innerWidth > 992 && nt(this, I, -1);
    }), j.addEventListener(p, function(I) {
      window.innerWidth > 992 && nt(this, I, 1);
    }), j.style.display = m;
    const U = v.scrollWidth, H = _.offsetWidth;
    U <= H && (X.style.display = m);
  });
}
M.on(window, "load.uds.tabs", hn);
function yn() {
  function n() {
    const a = ".uds-table-fixed-wrapper", c = ".uds-table.uds-table-fixed table", i = ".scroll-control.previous";
    document.querySelectorAll(a).forEach((p, f) => {
      const d = p.querySelector(c);
      d.setAttribute("id", "uds-table-" + f);
      const m = d.querySelector("tbody tr > *"), y = p.querySelector(i);
      y.style.left = m.offsetWidth + "px";
    });
  }
  function e() {
    const a = ".uds-table-fixed", c = ".uds-table-fixed-wrapper", i = ".scroll-control.previous", s = ".scroll-control.next";
    document.querySelectorAll(c).forEach((f, d) => {
      const m = f.querySelector(a), y = f.querySelector(i), E = f.querySelector(s);
      ["click", "focus"].forEach((w) => {
        M.on(y, w, function() {
          m.scrollLeft -= 100;
        }), M.on(E, w, function() {
          m.scrollLeft += 100;
        });
      });
    });
  }
  function r(a, c) {
    let i;
    return (...s) => {
      clearTimeout(i), i = setTimeout(() => {
        a.apply(this, s);
      }, c);
    };
  }
  n(), e(), M.on(window, "resize", function() {
    r(n, 100)();
  });
}
M.on(window, "load.uds.fixed-table", yn);
function En() {
  const n = ".uds-video-player", e = n + " video", r = n + " .uds-video-btn-play", a = n + " .uds-video-overlay", c = "click", i = "ended", s = "flex", p = "none", f = document.querySelector(e), d = document.querySelector(a), m = document.querySelector(r);
  function y(S) {
    S.style.display === p ? S.style.display = s : S.style.display = p;
  }
  function E(S) {
    S.paused ? S.play() : S.pause();
  }
  function w(S) {
    E(this), y(this.nextElementSibling);
  }
  function b(S) {
    S.stopPropagation();
    const j = this.parentNode;
    y(j), E(f);
  }
  function _(S) {
    y(this), E(f);
  }
  function v(S) {
    y(d);
  }
  f == null || f.addEventListener(c, w), m == null || m.addEventListener(c, b), d == null || d.addEventListener(c, _), f == null || f.addEventListener(i, v);
}
M.on(window, "load.uds.video", En);
const uo = {
  // Banner, // code updated to use bootstrap alert so we don't need this
  initAnchorMenu: sn,
  initBlockquoteAnimation: cn,
  initCalendar: ln,
  initCollapse: dn,
  initChart: fn,
  initDataLayer: de,
  initFixedTable: yn,
  initGlobalHeader: pe,
  initHeroesVideo: pn,
  initImageParallax: mn,
  initModals: gn,
  initRankingCard: un,
  initTabbedPanels: hn,
  initVideo: En,
  initCardBodies: fe
};
export {
  uo as default
};
//# sourceMappingURL=unity-bootstrap.es.js.map
