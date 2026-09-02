import * as be from "chart.js";
const wo = () => window.jQuery && !document.body.hasAttribute("data-bs-no-jquery") ? window.jQuery : null, So = /[^.]*(?=\..*)\.|.*/, vo = /\..*/, Lo = /::\d+$/, _e = {};
let pn = 1;
const Fn = {
  mouseenter: "mouseover",
  mouseleave: "mouseout"
}, Ro = /* @__PURE__ */ new Set([
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
function Un(n, e) {
  return e && `${e}::${pn++}` || n.uidEvent || pn++;
}
function Bn(n) {
  const e = Un(n);
  return n.uidEvent = e, _e[e] = _e[e] || {}, _e[e];
}
function Co(n, e) {
  return function o(i) {
    return Fe(i, { delegateTarget: n }), o.oneOff && N.off(n, i.type, e), e.apply(n, [i]);
  };
}
function Oo(n, e, o) {
  return function i(r) {
    const a = n.querySelectorAll(e);
    for (let { target: c } = r; c && c !== this; c = c.parentNode)
      for (const d of a)
        if (d === c)
          return Fe(r, { delegateTarget: c }), i.oneOff && N.off(n, r.type, e, o), o.apply(c, [r]);
  };
}
function qn(n, e, o = null) {
  return Object.values(n).find((i) => i.callable === e && i.delegationSelector === o);
}
function zn(n, e, o) {
  const i = typeof e == "string", r = i ? o : e || o;
  let a = Wn(n);
  return Ro.has(a) || (a = n), [i, r, a];
}
function mn(n, e, o, i, r) {
  if (typeof e != "string" || !n)
    return;
  let [a, c, d] = zn(e, o, i);
  e in Fn && (c = ((w) => function(S) {
    if (!S.relatedTarget || S.relatedTarget !== S.delegateTarget && !S.delegateTarget.contains(S.relatedTarget))
      return w.call(this, S);
  })(c));
  const u = Bn(n), f = u[d] || (u[d] = {}), E = qn(f, c, a ? o : null);
  if (E) {
    E.oneOff = E.oneOff && r;
    return;
  }
  const T = Un(c, e.replace(So, "")), g = a ? Oo(n, o, c) : Co(n, c);
  g.delegationSelector = a ? o : null, g.callable = c, g.oneOff = r, g.uidEvent = T, f[T] = g, n.addEventListener(d, g, a);
}
function Ie(n, e, o, i, r) {
  const a = qn(e[o], i, r);
  a && (n.removeEventListener(o, a, !!r), delete e[o][a.uidEvent]);
}
function No(n, e, o, i) {
  const r = e[o] || {};
  for (const [a, c] of Object.entries(r))
    a.includes(i) && Ie(n, e, o, c.callable, c.delegationSelector);
}
function Wn(n) {
  return n = n.replace(vo, ""), Fn[n] || n;
}
const N = {
  on(n, e, o, i) {
    mn(n, e, o, i, !1);
  },
  one(n, e, o, i) {
    mn(n, e, o, i, !0);
  },
  off(n, e, o, i) {
    if (typeof e != "string" || !n)
      return;
    const [r, a, c] = zn(e, o, i), d = c !== e, u = Bn(n), f = u[c] || {}, E = e.startsWith(".");
    if (typeof a < "u") {
      if (!Object.keys(f).length)
        return;
      Ie(n, u, c, a, r ? o : null);
      return;
    }
    if (E)
      for (const T of Object.keys(u))
        No(n, u, T, e.slice(1));
    for (const [T, g] of Object.entries(f)) {
      const A = T.replace(Lo, "");
      (!d || e.includes(A)) && Ie(n, u, c, g.callable, g.delegationSelector);
    }
  },
  trigger(n, e, o) {
    if (typeof e != "string" || !n)
      return null;
    const i = wo(), r = Wn(e), a = e !== r;
    let c = null, d = !0, u = !0, f = !1;
    a && i && (c = i.Event(e, o), i(n).trigger(c), d = !c.isPropagationStopped(), u = !c.isImmediatePropagationStopped(), f = c.isDefaultPrevented());
    const E = Fe(new Event(e, { bubbles: d, cancelable: !0 }), o);
    return f && E.preventDefault(), u && n.dispatchEvent(E), E.defaultPrevented && c && c.preventDefault(), E;
  }
};
function Fe(n, e = {}) {
  for (const [o, i] of Object.entries(e))
    try {
      n[o] = i;
    } catch {
      Object.defineProperty(n, o, {
        configurable: !0,
        get() {
          return i;
        }
      });
    }
  return n;
}
function Do(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var Ae = { exports: {} }, R = {}, hn;
function Io() {
  if (hn) return R;
  hn = 1;
  var n = { env: { NODE_ENV: "production" } };
  /**
   * @license React
   * react.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var e = Symbol.for("react.transitional.element"), o = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), c = Symbol.for("react.consumer"), d = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), E = Symbol.for("react.memo"), T = Symbol.for("react.lazy"), g = Symbol.for("react.activity"), A = Symbol.iterator;
  function w(s) {
    return s === null || typeof s != "object" ? null : (s = A && s[A] || s["@@iterator"], typeof s == "function" ? s : null);
  }
  var S = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, k = Object.assign, C = {};
  function K(s, p, L) {
    this.props = s, this.context = p, this.refs = C, this.updater = L || S;
  }
  K.prototype.isReactComponent = {}, K.prototype.setState = function(s, p) {
    if (typeof s != "object" && typeof s != "function" && s != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, s, p, "setState");
  }, K.prototype.forceUpdate = function(s) {
    this.updater.enqueueForceUpdate(this, s, "forceUpdate");
  };
  function dt() {
  }
  dt.prototype = K.prototype;
  function z(s, p, L) {
    this.props = s, this.context = p, this.refs = C, this.updater = L || S;
  }
  var Q = z.prototype = new dt();
  Q.constructor = z, k(Q, K.prototype), Q.isPureReactComponent = !0;
  var W = Array.isArray;
  function y() {
  }
  var _ = { H: null, A: null, T: null, S: null }, P = Object.prototype.hasOwnProperty;
  function U(s, p, L) {
    var v = L.ref;
    return {
      $$typeof: e,
      type: s,
      key: p,
      ref: v !== void 0 ? v : null,
      props: L
    };
  }
  function B(s, p) {
    return U(s.type, p, s.props);
  }
  function $(s) {
    return typeof s == "object" && s !== null && s.$$typeof === e;
  }
  function Dt(s) {
    var p = { "=": "=0", ":": "=2" };
    return "$" + s.replace(/[=:]/g, function(L) {
      return p[L];
    });
  }
  var bt = /\/+/g;
  function at(s, p) {
    return typeof s == "object" && s !== null && s.key != null ? Dt("" + s.key) : p.toString(36);
  }
  function pt(s) {
    switch (s.status) {
      case "fulfilled":
        return s.value;
      case "rejected":
        throw s.reason;
      default:
        switch (typeof s.status == "string" ? s.then(y, y) : (s.status = "pending", s.then(
          function(p) {
            s.status === "pending" && (s.status = "fulfilled", s.value = p);
          },
          function(p) {
            s.status === "pending" && (s.status = "rejected", s.reason = p);
          }
        )), s.status) {
          case "fulfilled":
            return s.value;
          case "rejected":
            throw s.reason;
        }
    }
    throw s;
  }
  function ct(s, p, L, v, I) {
    var M = typeof s;
    (M === "undefined" || M === "boolean") && (s = null);
    var H = !1;
    if (s === null) H = !0;
    else
      switch (M) {
        case "bigint":
        case "string":
        case "number":
          H = !0;
          break;
        case "object":
          switch (s.$$typeof) {
            case e:
            case o:
              H = !0;
              break;
            case T:
              return H = s._init, ct(
                H(s._payload),
                p,
                L,
                v,
                I
              );
          }
      }
    if (H)
      return I = I(s), H = v === "" ? "." + at(s, 0) : v, W(I) ? (L = "", H != null && (L = H.replace(bt, "$&/") + "/"), ct(I, p, L, "", function(q) {
        return q;
      })) : I != null && ($(I) && (I = B(
        I,
        L + (I.key == null || s && s.key === I.key ? "" : ("" + I.key).replace(
          bt,
          "$&/"
        ) + "/") + H
      )), p.push(I)), 1;
    H = 0;
    var lt = v === "" ? "." : v + ":";
    if (W(s))
      for (var tt = 0; tt < s.length; tt++)
        v = s[tt], M = lt + at(v, tt), H += ct(
          v,
          p,
          L,
          M,
          I
        );
    else if (tt = w(s), typeof tt == "function")
      for (s = tt.call(s), tt = 0; !(v = s.next()).done; )
        v = v.value, M = lt + at(v, tt++), H += ct(
          v,
          p,
          L,
          M,
          I
        );
    else if (M === "object") {
      if (typeof s.then == "function")
        return ct(
          pt(s),
          p,
          L,
          v,
          I
        );
      throw p = String(s), Error(
        "Objects are not valid as a React child (found: " + (p === "[object Object]" ? "object with keys {" + Object.keys(s).join(", ") + "}" : p) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return H;
  }
  function Et(s, p, L) {
    if (s == null) return s;
    var v = [], I = 0;
    return ct(s, v, "", "", function(M) {
      return p.call(L, M, I++);
    }), v;
  }
  function Ut(s) {
    if (s._status === -1) {
      var p = s._result;
      p = p(), p.then(
        function(L) {
          (s._status === 0 || s._status === -1) && (s._status = 1, s._result = L);
        },
        function(L) {
          (s._status === 0 || s._status === -1) && (s._status = 2, s._result = L);
        }
      ), s._status === -1 && (s._status = 0, s._result = p);
    }
    if (s._status === 1) return s._result.default;
    throw s._result;
  }
  var Rt = typeof reportError == "function" ? reportError : function(s) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var p = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof s == "object" && s !== null && typeof s.message == "string" ? String(s.message) : String(s),
        error: s
      });
      if (!window.dispatchEvent(p)) return;
    } else if (typeof n == "object" && typeof n.emit == "function") {
      n.emit("uncaughtException", s);
      return;
    }
    console.error(s);
  }, F = {
    map: Et,
    forEach: function(s, p, L) {
      Et(
        s,
        function() {
          p.apply(this, arguments);
        },
        L
      );
    },
    count: function(s) {
      var p = 0;
      return Et(s, function() {
        p++;
      }), p;
    },
    toArray: function(s) {
      return Et(s, function(p) {
        return p;
      }) || [];
    },
    only: function(s) {
      if (!$(s))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return s;
    }
  };
  return R.Activity = g, R.Children = F, R.Component = K, R.Fragment = i, R.Profiler = a, R.PureComponent = z, R.StrictMode = r, R.Suspense = f, R.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = _, R.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(s) {
      return _.H.useMemoCache(s);
    }
  }, R.cache = function(s) {
    return function() {
      return s.apply(null, arguments);
    };
  }, R.cacheSignal = function() {
    return null;
  }, R.cloneElement = function(s, p, L) {
    if (s == null)
      throw Error(
        "The argument must be a React element, but you passed " + s + "."
      );
    var v = k({}, s.props), I = s.key;
    if (p != null)
      for (M in p.key !== void 0 && (I = "" + p.key), p)
        !P.call(p, M) || M === "key" || M === "__self" || M === "__source" || M === "ref" && p.ref === void 0 || (v[M] = p[M]);
    var M = arguments.length - 2;
    if (M === 1) v.children = L;
    else if (1 < M) {
      for (var H = Array(M), lt = 0; lt < M; lt++)
        H[lt] = arguments[lt + 2];
      v.children = H;
    }
    return U(s.type, I, v);
  }, R.createContext = function(s) {
    return s = {
      $$typeof: d,
      _currentValue: s,
      _currentValue2: s,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, s.Provider = s, s.Consumer = {
      $$typeof: c,
      _context: s
    }, s;
  }, R.createElement = function(s, p, L) {
    var v, I = {}, M = null;
    if (p != null)
      for (v in p.key !== void 0 && (M = "" + p.key), p)
        P.call(p, v) && v !== "key" && v !== "__self" && v !== "__source" && (I[v] = p[v]);
    var H = arguments.length - 2;
    if (H === 1) I.children = L;
    else if (1 < H) {
      for (var lt = Array(H), tt = 0; tt < H; tt++)
        lt[tt] = arguments[tt + 2];
      I.children = lt;
    }
    if (s && s.defaultProps)
      for (v in H = s.defaultProps, H)
        I[v] === void 0 && (I[v] = H[v]);
    return U(s, M, I);
  }, R.createRef = function() {
    return { current: null };
  }, R.forwardRef = function(s) {
    return { $$typeof: u, render: s };
  }, R.isValidElement = $, R.lazy = function(s) {
    return {
      $$typeof: T,
      _payload: { _status: -1, _result: s },
      _init: Ut
    };
  }, R.memo = function(s, p) {
    return {
      $$typeof: E,
      type: s,
      compare: p === void 0 ? null : p
    };
  }, R.startTransition = function(s) {
    var p = _.T, L = {};
    _.T = L;
    try {
      var v = s(), I = _.S;
      I !== null && I(L, v), typeof v == "object" && v !== null && typeof v.then == "function" && v.then(y, Rt);
    } catch (M) {
      Rt(M);
    } finally {
      p !== null && L.types !== null && (p.types = L.types), _.T = p;
    }
  }, R.unstable_useCacheRefresh = function() {
    return _.H.useCacheRefresh();
  }, R.use = function(s) {
    return _.H.use(s);
  }, R.useActionState = function(s, p, L) {
    return _.H.useActionState(s, p, L);
  }, R.useCallback = function(s, p) {
    return _.H.useCallback(s, p);
  }, R.useContext = function(s) {
    return _.H.useContext(s);
  }, R.useDebugValue = function() {
  }, R.useDeferredValue = function(s, p) {
    return _.H.useDeferredValue(s, p);
  }, R.useEffect = function(s, p) {
    return _.H.useEffect(s, p);
  }, R.useEffectEvent = function(s) {
    return _.H.useEffectEvent(s);
  }, R.useId = function() {
    return _.H.useId();
  }, R.useImperativeHandle = function(s, p, L) {
    return _.H.useImperativeHandle(s, p, L);
  }, R.useInsertionEffect = function(s, p) {
    return _.H.useInsertionEffect(s, p);
  }, R.useLayoutEffect = function(s, p) {
    return _.H.useLayoutEffect(s, p);
  }, R.useMemo = function(s, p) {
    return _.H.useMemo(s, p);
  }, R.useOptimistic = function(s, p) {
    return _.H.useOptimistic(s, p);
  }, R.useReducer = function(s, p, L) {
    return _.H.useReducer(s, p, L);
  }, R.useRef = function(s) {
    return _.H.useRef(s);
  }, R.useState = function(s) {
    return _.H.useState(s);
  }, R.useSyncExternalStore = function(s, p, L) {
    return _.H.useSyncExternalStore(
      s,
      p,
      L
    );
  }, R.useTransition = function() {
    return _.H.useTransition();
  }, R.version = "19.2.6", R;
}
var gn;
function xo() {
  return gn || (gn = 1, Ae.exports = Io()), Ae.exports;
}
xo();
/*! @license DOMPurify 3.4.11 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.4.11/LICENSE */
function yn(n, e) {
  (e == null || e > n.length) && (e = n.length);
  for (var o = 0, i = Array(e); o < e; o++) i[o] = n[o];
  return i;
}
function ko(n) {
  if (Array.isArray(n)) return n;
}
function Mo(n, e) {
  var o = n == null ? null : typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
  if (o != null) {
    var i, r, a, c, d = [], u = !0, f = !1;
    try {
      if (a = (o = o.call(n)).next, e !== 0) for (; !(u = (i = a.call(o)).done) && (d.push(i.value), d.length !== e); u = !0) ;
    } catch (E) {
      f = !0, r = E;
    } finally {
      try {
        if (!u && o.return != null && (c = o.return(), Object(c) !== c)) return;
      } finally {
        if (f) throw r;
      }
    }
    return d;
  }
}
function Po() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ho(n, e) {
  return ko(n) || Mo(n, e) || Fo(n, e) || Po();
}
function Fo(n, e) {
  if (n) {
    if (typeof n == "string") return yn(n, e);
    var o = {}.toString.call(n).slice(8, -1);
    return o === "Object" && n.constructor && (o = n.constructor.name), o === "Map" || o === "Set" ? Array.from(n) : o === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o) ? yn(n, e) : void 0;
  }
}
const Gn = Object.entries, En = Object.setPrototypeOf, Uo = Object.isFrozen, Bo = Object.getPrototypeOf, qo = Object.getOwnPropertyDescriptor;
let nt = Object.freeze, ot = Object.seal, Ft = Object.create, jn = typeof Reflect < "u" && Reflect, xe = jn.apply, ke = jn.construct;
nt || (nt = function(e) {
  return e;
});
ot || (ot = function(e) {
  return e;
});
xe || (xe = function(e, o) {
  for (var i = arguments.length, r = new Array(i > 2 ? i - 2 : 0), a = 2; a < i; a++)
    r[a - 2] = arguments[a];
  return e.apply(o, r);
});
ke || (ke = function(e) {
  for (var o = arguments.length, i = new Array(o > 1 ? o - 1 : 0), r = 1; r < o; r++)
    i[r - 1] = arguments[r];
  return new e(...i);
});
const Gt = X(Array.prototype.forEach), zo = X(Array.prototype.lastIndexOf), Tn = X(Array.prototype.pop), Ht = X(Array.prototype.push), Wo = X(Array.prototype.splice), Lt = Array.isArray, $t = X(String.prototype.toLowerCase), we = X(String.prototype.toString), bn = X(String.prototype.match), jt = X(String.prototype.replace), _n = X(String.prototype.indexOf), Go = X(String.prototype.trim), jo = X(Number.prototype.toString), Yo = X(Boolean.prototype.toString), An = typeof BigInt > "u" ? null : X(BigInt.prototype.toString), wn = typeof Symbol > "u" ? null : X(Symbol.prototype.toString), J = X(Object.prototype.hasOwnProperty), Yt = X(Object.prototype.toString), et = X(RegExp.prototype.test), Nt = $o(TypeError);
function X(n) {
  return function(e) {
    e instanceof RegExp && (e.lastIndex = 0);
    for (var o = arguments.length, i = new Array(o > 1 ? o - 1 : 0), r = 1; r < o; r++)
      i[r - 1] = arguments[r];
    return xe(n, e, i);
  };
}
function $o(n) {
  return function() {
    for (var e = arguments.length, o = new Array(e), i = 0; i < e; i++)
      o[i] = arguments[i];
    return ke(n, o);
  };
}
function D(n, e) {
  let o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : $t;
  if (En && En(n, null), !Lt(e))
    return n;
  let i = e.length;
  for (; i--; ) {
    let r = e[i];
    if (typeof r == "string") {
      const a = o(r);
      a !== r && (Uo(e) || (e[i] = a), r = a);
    }
    n[r] = !0;
  }
  return n;
}
function Vo(n) {
  for (let e = 0; e < n.length; e++)
    J(n, e) || (n[e] = null);
  return n;
}
function it(n) {
  const e = Ft(null);
  for (const i of Gn(n)) {
    var o = Ho(i, 2);
    const r = o[0], a = o[1];
    J(n, r) && (Lt(a) ? e[r] = Vo(a) : a && typeof a == "object" && a.constructor === Object ? e[r] = it(a) : e[r] = a);
  }
  return e;
}
function Xo(n) {
  switch (typeof n) {
    case "string":
      return n;
    case "number":
      return jo(n);
    case "boolean":
      return Yo(n);
    case "bigint":
      return An ? An(n) : "0";
    case "symbol":
      return wn ? wn(n) : "Symbol()";
    case "undefined":
      return Yt(n);
    case "function":
    case "object": {
      if (n === null)
        return Yt(n);
      const e = n, o = yt(e, "toString");
      if (typeof o == "function") {
        const i = o(e);
        return typeof i == "string" ? i : Yt(i);
      }
      return Yt(n);
    }
    default:
      return Yt(n);
  }
}
function yt(n, e) {
  for (; n !== null; ) {
    const i = qo(n, e);
    if (i) {
      if (i.get)
        return X(i.get);
      if (typeof i.value == "function")
        return X(i.value);
    }
    n = Bo(n);
  }
  function o() {
    return null;
  }
  return o;
}
function Ko(n) {
  try {
    return et(n, ""), !0;
  } catch {
    return !1;
  }
}
const Sn = nt(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Se = nt(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), ve = nt(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Qo = nt(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), Le = nt(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), Zo = nt(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), vn = nt(["#text"]), Ln = nt(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), Re = nt(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Rn = nt(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), ne = nt(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), Jo = ot(/{{[\w\W]*|^[\w\W]*}}/g), tr = ot(/<%[\w\W]*|^[\w\W]*%>/g), er = ot(/\${[\w\W]*/g), nr = ot(/^data-[\-\w.\u00B7-\uFFFF]+$/), or = ot(/^aria-[\-\w]+$/), Cn = ot(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), rr = ot(/^(?:\w+script|data):/i), ir = ot(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), sr = ot(/^html$/i), ar = ot(/^[a-z][.\w]*(-[.\w]+)+$/i), On = ot(/<[/\w!]/g), cr = ot(/<[/\w]/g), lr = ot(/<\/no(script|embed|frames)/i), ur = ot(/\/>/i), gt = {
  element: 1,
  attribute: 2,
  text: 3,
  cdataSection: 4,
  entityReference: 5,
  // Deprecated
  entityNode: 6,
  // Deprecated
  processingInstruction: 7,
  comment: 8,
  document: 9,
  documentType: 10,
  documentFragment: 11,
  notation: 12
  // Deprecated
}, dr = function() {
  return typeof window > "u" ? null : window;
}, fr = function(e, o) {
  if (typeof e != "object" || typeof e.createPolicy != "function")
    return null;
  let i = null;
  const r = "data-tt-policy-suffix";
  o && o.hasAttribute(r) && (i = o.getAttribute(r));
  const a = "dompurify" + (i ? "#" + i : "");
  try {
    return e.createPolicy(a, {
      createHTML(c) {
        return c;
      },
      createScriptURL(c) {
        return c;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + a + " could not be created."), null;
  }
}, Nn = function() {
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
}, St = function(e, o, i, r) {
  return J(e, o) && Lt(e[o]) ? D(r.base ? it(r.base) : {}, e[o], r.transform) : i;
};
function Yn() {
  let n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : dr();
  const e = (h) => Yn(h);
  if (e.version = "3.4.11", e.removed = [], !n || !n.document || n.document.nodeType !== gt.document || !n.Element)
    return e.isSupported = !1, e;
  let o = n.document;
  const i = o, r = i.currentScript;
  n.DocumentFragment;
  const a = n.HTMLTemplateElement, c = n.Node, d = n.Element, u = n.NodeFilter, f = n.NamedNodeMap;
  f === void 0 && (n.NamedNodeMap || n.MozNamedAttrMap), n.HTMLFormElement;
  const E = n.DOMParser, T = n.trustedTypes, g = d.prototype, A = yt(g, "cloneNode"), w = yt(g, "remove"), S = yt(g, "nextSibling"), k = yt(g, "childNodes"), C = yt(g, "parentNode"), K = yt(g, "shadowRoot"), dt = yt(g, "attributes"), z = c && c.prototype ? yt(c.prototype, "nodeType") : null, Q = c && c.prototype ? yt(c.prototype, "nodeName") : null;
  if (typeof a == "function") {
    const h = o.createElement("template");
    h.content && h.content.ownerDocument && (o = h.content.ownerDocument);
  }
  let W, y = "", _, P = !1, U = 0;
  const B = function() {
    if (U > 0)
      throw Nt('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, $ = function(t) {
    B(), U++;
    try {
      return W.createHTML(t);
    } finally {
      U--;
    }
  }, Dt = function(t) {
    B(), U++;
    try {
      return W.createScriptURL(t);
    } finally {
      U--;
    }
  }, bt = function() {
    return P || (_ = fr(T, r), P = !0), _;
  }, at = o, pt = at.implementation, ct = at.createNodeIterator, Et = at.createDocumentFragment, Ut = at.getElementsByTagName, Rt = i.importNode;
  let F = Nn();
  e.isSupported = typeof Gn == "function" && typeof C == "function" && pt && pt.createHTMLDocument !== void 0;
  const s = Jo, p = tr, L = er, v = nr, I = or, M = rr, H = ir, lt = ar;
  let tt = Cn, q = null;
  const ze = D({}, [...Sn, ...Se, ...ve, ...Le, ...vn]);
  let G = null;
  const We = D({}, [...Ln, ...Re, ...Rn, ...ne]);
  let j = Object.seal(Ft(null, {
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
  })), Bt = null, Ge = null;
  const _t = Object.seal(Ft(null, {
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
  let je = !0, oe = !0, Ye = !1, $e = !0, At = !1, qt = !0, Ct = !1, re = !1, ie = null, se = null, ae = !1, It = !1, Xt = !1, Kt = !1, Ve = !0, Xe = !1;
  const Ke = "user-content-";
  let ce = !0, le = !1, xt = {}, mt = null;
  const ue = D({}, [
    "annotation-xml",
    "audio",
    "colgroup",
    "desc",
    "foreignobject",
    "head",
    "iframe",
    "math",
    "mi",
    "mn",
    "mo",
    "ms",
    "mtext",
    "noembed",
    "noframes",
    "noscript",
    "plaintext",
    "script",
    // <selectedcontent> mirrors the selected <option>'s subtree, cloned by
    // the UA (customizable <select>) — including any on* handlers — and the
    // engine re-mirrors synchronously whenever a removal changes which
    // option/selectedcontent is current, even inside DOMPurify's inert
    // DOMParser document. Hoisting its children on removal re-inserts a fresh
    // mirror target ahead of the walk, which the engine refills, looping
    // forever (DoS) and amplifying output. Dropping its content on removal
    // (rather than hoisting) breaks that cascade; the content is a duplicate
    // of the option, which is sanitized on its own. See campaign-3 F1/F6.
    "selectedcontent",
    "style",
    "svg",
    "template",
    "thead",
    "title",
    "video",
    "xmp"
  ]);
  let Qe = null;
  const Ze = D({}, ["audio", "video", "img", "source", "image", "track"]);
  let de = null;
  const Je = D({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), Qt = "http://www.w3.org/1998/Math/MathML", Zt = "http://www.w3.org/2000/svg", ht = "http://www.w3.org/1999/xhtml";
  let kt = ht, fe = !1, pe = null;
  const so = D({}, [Qt, Zt, ht], we), tn = nt(["mi", "mo", "mn", "ms", "mtext"]);
  let me = D({}, tn);
  const en = nt(["annotation-xml"]);
  let he = D({}, en);
  const ao = D({}, ["title", "style", "font", "a", "script"]);
  let zt = null;
  const co = ["application/xhtml+xml", "text/html"], lo = "text/html";
  let Y = null, Mt = null;
  const uo = o.createElement("form"), nn = function(t) {
    return t instanceof RegExp || t instanceof Function;
  }, ge = function() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (Mt && Mt === t)
      return;
    (!t || typeof t != "object") && (t = {}), t = it(t), zt = // eslint-disable-next-line unicorn/prefer-includes
    co.indexOf(t.PARSER_MEDIA_TYPE) === -1 ? lo : t.PARSER_MEDIA_TYPE, Y = zt === "application/xhtml+xml" ? we : $t, q = St(t, "ALLOWED_TAGS", ze, {
      transform: Y
    }), G = St(t, "ALLOWED_ATTR", We, {
      transform: Y
    }), pe = St(t, "ALLOWED_NAMESPACES", so, {
      transform: we
    }), de = St(t, "ADD_URI_SAFE_ATTR", Je, {
      transform: Y,
      base: Je
    }), Qe = St(t, "ADD_DATA_URI_TAGS", Ze, {
      transform: Y,
      base: Ze
    }), mt = St(t, "FORBID_CONTENTS", ue, {
      transform: Y
    }), Bt = St(t, "FORBID_TAGS", it({}), {
      transform: Y
    }), Ge = St(t, "FORBID_ATTR", it({}), {
      transform: Y
    }), xt = J(t, "USE_PROFILES") ? t.USE_PROFILES && typeof t.USE_PROFILES == "object" ? it(t.USE_PROFILES) : t.USE_PROFILES : !1, je = t.ALLOW_ARIA_ATTR !== !1, oe = t.ALLOW_DATA_ATTR !== !1, Ye = t.ALLOW_UNKNOWN_PROTOCOLS || !1, $e = t.ALLOW_SELF_CLOSE_IN_ATTR !== !1, At = t.SAFE_FOR_TEMPLATES || !1, qt = t.SAFE_FOR_XML !== !1, Ct = t.WHOLE_DOCUMENT || !1, It = t.RETURN_DOM || !1, Xt = t.RETURN_DOM_FRAGMENT || !1, Kt = t.RETURN_TRUSTED_TYPE || !1, ae = t.FORCE_BODY || !1, Ve = t.SANITIZE_DOM !== !1, Xe = t.SANITIZE_NAMED_PROPS || !1, ce = t.KEEP_CONTENT !== !1, le = t.IN_PLACE || !1, tt = Ko(t.ALLOWED_URI_REGEXP) ? t.ALLOWED_URI_REGEXP : Cn, kt = typeof t.NAMESPACE == "string" ? t.NAMESPACE : ht, me = J(t, "MATHML_TEXT_INTEGRATION_POINTS") && t.MATHML_TEXT_INTEGRATION_POINTS && typeof t.MATHML_TEXT_INTEGRATION_POINTS == "object" ? it(t.MATHML_TEXT_INTEGRATION_POINTS) : D({}, tn), he = J(t, "HTML_INTEGRATION_POINTS") && t.HTML_INTEGRATION_POINTS && typeof t.HTML_INTEGRATION_POINTS == "object" ? it(t.HTML_INTEGRATION_POINTS) : D({}, en);
    const l = J(t, "CUSTOM_ELEMENT_HANDLING") && t.CUSTOM_ELEMENT_HANDLING && typeof t.CUSTOM_ELEMENT_HANDLING == "object" ? it(t.CUSTOM_ELEMENT_HANDLING) : Ft(null);
    if (j = Ft(null), J(l, "tagNameCheck") && nn(l.tagNameCheck) && (j.tagNameCheck = l.tagNameCheck), J(l, "attributeNameCheck") && nn(l.attributeNameCheck) && (j.attributeNameCheck = l.attributeNameCheck), J(l, "allowCustomizedBuiltInElements") && typeof l.allowCustomizedBuiltInElements == "boolean" && (j.allowCustomizedBuiltInElements = l.allowCustomizedBuiltInElements), ot(j), At && (oe = !1), Xt && (It = !0), xt && (q = D({}, vn), G = Ft(null), xt.html === !0 && (D(q, Sn), D(G, Ln)), xt.svg === !0 && (D(q, Se), D(G, Re), D(G, ne)), xt.svgFilters === !0 && (D(q, ve), D(G, Re), D(G, ne)), xt.mathMl === !0 && (D(q, Le), D(G, Rn), D(G, ne))), _t.tagCheck = null, _t.attributeCheck = null, J(t, "ADD_TAGS") && (typeof t.ADD_TAGS == "function" ? _t.tagCheck = t.ADD_TAGS : Lt(t.ADD_TAGS) && (q === ze && (q = it(q)), D(q, t.ADD_TAGS, Y))), J(t, "ADD_ATTR") && (typeof t.ADD_ATTR == "function" ? _t.attributeCheck = t.ADD_ATTR : Lt(t.ADD_ATTR) && (G === We && (G = it(G)), D(G, t.ADD_ATTR, Y))), J(t, "ADD_URI_SAFE_ATTR") && Lt(t.ADD_URI_SAFE_ATTR) && D(de, t.ADD_URI_SAFE_ATTR, Y), J(t, "FORBID_CONTENTS") && Lt(t.FORBID_CONTENTS) && (mt === ue && (mt = it(mt)), D(mt, t.FORBID_CONTENTS, Y)), J(t, "ADD_FORBID_CONTENTS") && Lt(t.ADD_FORBID_CONTENTS) && (mt === ue && (mt = it(mt)), D(mt, t.ADD_FORBID_CONTENTS, Y)), ce && (q["#text"] = !0), Ct && D(q, ["html", "head", "body"]), q.table && (D(q, ["tbody"]), delete Bt.tbody), t.TRUSTED_TYPES_POLICY) {
      if (typeof t.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw Nt('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof t.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw Nt('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const m = W;
      W = t.TRUSTED_TYPES_POLICY;
      try {
        y = $("");
      } catch (b) {
        throw W = m, b;
      }
    } else t.TRUSTED_TYPES_POLICY === null ? (W = void 0, y = "") : (W === void 0 && (W = bt()), W && typeof y == "string" && (y = $("")));
    nt && nt(t), Mt = t;
  }, on = D({}, [...Se, ...ve, ...Qo]), rn = D({}, [...Le, ...Zo]), fo = function(t, l, m) {
    return l.namespaceURI === ht ? t === "svg" : l.namespaceURI === Qt ? t === "svg" && (m === "annotation-xml" || me[m]) : !!on[t];
  }, po = function(t, l, m) {
    return l.namespaceURI === ht ? t === "math" : l.namespaceURI === Zt ? t === "math" && he[m] : !!rn[t];
  }, mo = function(t, l, m) {
    return l.namespaceURI === Zt && !he[m] || l.namespaceURI === Qt && !me[m] ? !1 : !rn[t] && (ao[t] || !on[t]);
  }, ho = function(t) {
    let l = C(t);
    (!l || !l.tagName) && (l = {
      namespaceURI: kt,
      tagName: "template"
    });
    const m = $t(t.tagName), b = $t(l.tagName);
    return pe[t.namespaceURI] ? t.namespaceURI === Zt ? fo(m, l, b) : t.namespaceURI === Qt ? po(m, l, b) : t.namespaceURI === ht ? mo(m, l, b) : !!(zt === "application/xhtml+xml" && pe[t.namespaceURI]) : !1;
  }, wt = function(t) {
    Ht(e.removed, {
      element: t
    });
    try {
      C(t).removeChild(t);
    } catch {
      if (w(t), !C(t))
        throw Nt("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, sn = function(t) {
    const l = k(t);
    if (l) {
      const b = [];
      Gt(l, (O) => {
        Ht(b, O);
      }), Gt(b, (O) => {
        try {
          w(O);
        } catch {
        }
      });
    }
    const m = dt(t);
    if (m)
      for (let b = m.length - 1; b >= 0; --b) {
        const O = m[b], x = O && O.name;
        if (typeof x == "string")
          try {
            t.removeAttribute(x);
          } catch {
          }
      }
  }, Ot = function(t, l) {
    try {
      Ht(e.removed, {
        attribute: l.getAttributeNode(t),
        from: l
      });
    } catch {
      Ht(e.removed, {
        attribute: null,
        from: l
      });
    }
    if (l.removeAttribute(t), t === "is")
      if (It || Xt)
        try {
          wt(l);
        } catch {
        }
      else
        try {
          l.setAttribute(t, "");
        } catch {
        }
  }, go = function(t) {
    const l = dt(t);
    if (l)
      for (let m = l.length - 1; m >= 0; --m) {
        const b = l[m], O = b && b.name;
        if (!(typeof O != "string" || G[Y(O)]))
          try {
            t.removeAttribute(O);
          } catch {
          }
      }
  }, yo = function(t) {
    const l = [t];
    for (; l.length > 0; ) {
      const m = l.pop();
      (z ? z(m) : m.nodeType) === gt.element && go(m);
      const O = k(m);
      if (O)
        for (let x = O.length - 1; x >= 0; --x)
          l.push(O[x]);
    }
  }, an = function(t) {
    let l = null, m = null;
    if (ae)
      t = "<remove></remove>" + t;
    else {
      const x = bn(t, /^[\r\n\t ]+/);
      m = x && x[0];
    }
    zt === "application/xhtml+xml" && kt === ht && (t = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + t + "</body></html>");
    const b = W ? $(t) : t;
    if (kt === ht)
      try {
        l = new E().parseFromString(b, zt);
      } catch {
      }
    if (!l || !l.documentElement) {
      l = pt.createDocument(kt, "template", null);
      try {
        l.documentElement.innerHTML = fe ? y : b;
      } catch {
      }
    }
    const O = l.body || l.documentElement;
    return t && m && O.insertBefore(o.createTextNode(m), O.childNodes[0] || null), kt === ht ? Ut.call(l, Ct ? "html" : "body")[0] : Ct ? l.documentElement : O;
  }, cn = function(t) {
    return ct.call(
      t.ownerDocument || t,
      t,
      // eslint-disable-next-line no-bitwise
      u.SHOW_ELEMENT | u.SHOW_COMMENT | u.SHOW_TEXT | u.SHOW_PROCESSING_INSTRUCTION | u.SHOW_CDATA_SECTION,
      null
    );
  }, Jt = function(t) {
    return t = jt(t, s, " "), t = jt(t, p, " "), t = jt(t, L, " "), t;
  }, ye = function(t) {
    var l;
    t.normalize();
    const m = ct.call(
      t.ownerDocument || t,
      t,
      // eslint-disable-next-line no-bitwise
      u.SHOW_TEXT | u.SHOW_COMMENT | u.SHOW_CDATA_SECTION | u.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let b = m.nextNode();
    for (; b; )
      b.data = Jt(b.data), b = m.nextNode();
    const O = (l = t.querySelectorAll) === null || l === void 0 ? void 0 : l.call(t, "template");
    O && Gt(O, (x) => {
      Pt(x.content) && ye(x.content);
    });
  }, te = function(t) {
    const l = Q ? Q(t) : null;
    return typeof l != "string" || Y(l) !== "form" ? !1 : typeof t.nodeName != "string" || typeof t.textContent != "string" || typeof t.removeChild != "function" || // Realm-safe NamedNodeMap detection: equality against the cached
    // prototype getter. Clobbered .attributes (e.g. <input name="attributes">)
    // makes the direct read diverge from the cached read; a clean form
    // (same-realm OR foreign-realm) has both reads pointing at the same
    // canonical NamedNodeMap.
    t.attributes !== dt(t) || typeof t.removeAttribute != "function" || typeof t.setAttribute != "function" || typeof t.namespaceURI != "string" || typeof t.insertBefore != "function" || typeof t.hasChildNodes != "function" || // NodeType clobbering probe. Cached Node.prototype.nodeType getter
    // returns the integer 1 for any Element regardless of realm; direct
    // read on a clobbered form (e.g. <input name="nodeType">) returns
    // the named child element. Cheap addition — nodeType is read from
    // an internal slot, no serialization cost — and removes a residual
    // clobbering surface used by several mXSS / PI / comment branches
    // in _sanitizeElements that compare currentNode.nodeType directly.
    t.nodeType !== z(t) || // HTMLFormElement has [LegacyOverrideBuiltIns]: a descendant named
    // "childNodes" shadows the prototype getter. Direct reads of
    // form.childNodes from a clobbered form return the named child
    // instead of the real NodeList, so any walk that reads it directly
    // skips the form's real children. Compare the direct read to the
    // cached Node.prototype getter — when the form's named-property
    // getter intercepts the read, the two values differ and we flag
    // the form. This catches every clobbering child type (input,
    // select, etc.) regardless of whether the named child happens to
    // carry a numeric .length, which a typeof-based probe would miss
    // (e.g. HTMLSelectElement.length is a defined unsigned-long).
    t.childNodes !== k(t);
  }, Pt = function(t) {
    if (!z || typeof t != "object" || t === null)
      return !1;
    try {
      return z(t) === gt.documentFragment;
    } catch {
      return !1;
    }
  }, Wt = function(t) {
    if (!z || typeof t != "object" || t === null)
      return !1;
    try {
      return typeof z(t) == "number";
    } catch {
      return !1;
    }
  };
  function Tt(h, t, l) {
    h.length !== 0 && Gt(h, (m) => {
      m.call(e, t, l, Mt);
    });
  }
  const Eo = function(t, l) {
    return !!(qt && t.hasChildNodes() && !Wt(t.firstElementChild) && et(On, t.textContent) && et(On, t.innerHTML) || qt && t.namespaceURI === ht && l === "style" && Wt(t.firstElementChild) || t.nodeType === gt.processingInstruction || qt && t.nodeType === gt.comment && et(cr, t.data));
  }, To = function(t, l) {
    if (!Bt[l] && dn(l) && (j.tagNameCheck instanceof RegExp && et(j.tagNameCheck, l) || j.tagNameCheck instanceof Function && j.tagNameCheck(l)))
      return !1;
    if (ce && !mt[l]) {
      const m = C(t), b = k(t);
      if (b && m) {
        const O = b.length;
        for (let x = O - 1; x >= 0; --x) {
          const Z = le ? b[x] : A(b[x], !0);
          m.insertBefore(Z, S(t));
        }
      }
    }
    return wt(t), !0;
  }, ln = function(t) {
    if (Tt(F.beforeSanitizeElements, t, null), te(t))
      return wt(t), !0;
    const l = Y(Q ? Q(t) : t.nodeName);
    if (Tt(F.uponSanitizeElement, t, {
      tagName: l,
      allowedTags: q
    }), Eo(t, l))
      return wt(t), !0;
    if (Bt[l] || !(_t.tagCheck instanceof Function && _t.tagCheck(l)) && !q[l])
      return To(t, l);
    if ((z ? z(t) : t.nodeType) === gt.element && !ho(t) || (l === "noscript" || l === "noembed" || l === "noframes") && et(lr, t.innerHTML))
      return wt(t), !0;
    if (At && t.nodeType === gt.text) {
      const b = Jt(t.textContent);
      t.textContent !== b && (Ht(e.removed, {
        element: t.cloneNode()
      }), t.textContent = b);
    }
    return Tt(F.afterSanitizeElements, t, null), !1;
  }, un = function(t, l, m) {
    if (Ge[l] || Ve && (l === "id" || l === "name") && (m in o || m in uo))
      return !1;
    const b = G[l] || _t.attributeCheck instanceof Function && _t.attributeCheck(l, t);
    if (!(oe && et(v, l))) {
      if (!(je && et(I, l))) {
        if (b) {
          if (!de[l]) {
            if (!et(tt, jt(m, H, ""))) {
              if (!((l === "src" || l === "xlink:href" || l === "href") && t !== "script" && _n(m, "data:") === 0 && Qe[t])) {
                if (!(Ye && !et(M, jt(m, H, "")))) {
                  if (m)
                    return !1;
                }
              }
            }
          }
        } else if (
          // First condition does a very basic check if a) it's basically a valid custom element tagname AND
          // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
          !(dn(t) && (j.tagNameCheck instanceof RegExp && et(j.tagNameCheck, t) || j.tagNameCheck instanceof Function && j.tagNameCheck(t)) && (j.attributeNameCheck instanceof RegExp && et(j.attributeNameCheck, l) || j.attributeNameCheck instanceof Function && j.attributeNameCheck(l, t)) || // Alternative, second condition checks if it's an `is`-attribute, AND
          // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          l === "is" && j.allowCustomizedBuiltInElements && (j.tagNameCheck instanceof RegExp && et(j.tagNameCheck, m) || j.tagNameCheck instanceof Function && j.tagNameCheck(m)))
        ) return !1;
      }
    }
    return !0;
  }, bo = D({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), dn = function(t) {
    return !bo[$t(t)] && et(lt, t);
  }, _o = function(t, l, m, b) {
    if (W && typeof T == "object" && typeof T.getAttributeType == "function" && !m)
      switch (T.getAttributeType(t, l)) {
        case "TrustedHTML":
          return $(b);
        case "TrustedScriptURL":
          return Dt(b);
      }
    return b;
  }, Ao = function(t, l, m, b) {
    try {
      m ? t.setAttributeNS(m, l, b) : t.setAttribute(l, b), te(t) ? wt(t) : Tn(e.removed);
    } catch {
      Ot(l, t);
    }
  }, fn = function(t) {
    Tt(F.beforeSanitizeAttributes, t, null);
    const l = t.attributes;
    if (!l || te(t))
      return;
    const m = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: G,
      forceKeepAttr: void 0
    };
    let b = l.length;
    const O = Y(t.nodeName);
    for (; b--; ) {
      const x = l[b], Z = x.name, V = x.namespaceURI, ut = x.value, ft = Y(Z), Te = ut;
      let rt = Z === "value" ? Te : Go(Te);
      if (m.attrName = ft, m.attrValue = rt, m.keepAttr = !0, m.forceKeepAttr = void 0, Tt(F.uponSanitizeAttribute, t, m), rt = m.attrValue, Xe && (ft === "id" || ft === "name") && _n(rt, Ke) !== 0 && (Ot(Z, t), rt = Ke + rt), qt && et(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, rt)) {
        Ot(Z, t);
        continue;
      }
      if (ft === "attributename" && bn(rt, "href")) {
        Ot(Z, t);
        continue;
      }
      if (!m.forceKeepAttr) {
        if (!m.keepAttr) {
          Ot(Z, t);
          continue;
        }
        if (!$e && et(ur, rt)) {
          Ot(Z, t);
          continue;
        }
        if (At && (rt = Jt(rt)), !un(O, ft, rt)) {
          Ot(Z, t);
          continue;
        }
        rt = _o(O, ft, V, rt), rt !== Te && Ao(t, Z, V, rt);
      }
    }
    Tt(F.afterSanitizeAttributes, t, null);
  }, ee = function(t) {
    let l = null;
    const m = cn(t);
    for (Tt(F.beforeSanitizeShadowDOM, t, null); l = m.nextNode(); )
      if (Tt(F.uponSanitizeShadowNode, l, null), ln(l), fn(l), Pt(l.content) && ee(l.content), (z ? z(l) : l.nodeType) === gt.element) {
        const O = K(l);
        Pt(O) && (Ee(O), ee(O));
      }
    Tt(F.afterSanitizeShadowDOM, t, null);
  }, Ee = function(t) {
    const l = [{
      node: t,
      shadow: null
    }];
    for (; l.length > 0; ) {
      const m = l.pop();
      if (m.shadow) {
        ee(m.shadow);
        continue;
      }
      const b = m.node, x = (z ? z(b) : b.nodeType) === gt.element, Z = k(b);
      if (Z)
        for (let V = Z.length - 1; V >= 0; --V)
          l.push({
            node: Z[V],
            shadow: null
          });
      if (x) {
        const V = Q ? Q(b) : null;
        if (typeof V == "string" && Y(V) === "template") {
          const ut = b.content;
          Pt(ut) && l.push({
            node: ut,
            shadow: null
          });
        }
      }
      if (x) {
        const V = K(b);
        Pt(V) && l.push({
          node: null,
          shadow: V
        }, {
          node: V,
          shadow: null
        });
      }
    }
  };
  return e.sanitize = function(h) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, l = null, m = null, b = null, O = null;
    if (fe = !h, fe && (h = "<!-->"), typeof h != "string" && !Wt(h) && (h = Xo(h), typeof h != "string"))
      throw Nt("dirty is not a string, aborting");
    if (!e.isSupported)
      return h;
    re ? (q = ie, G = se) : ge(t), (F.uponSanitizeElement.length > 0 || F.uponSanitizeAttribute.length > 0) && (q = it(q)), F.uponSanitizeAttribute.length > 0 && (G = it(G)), e.removed = [];
    const x = le && typeof h != "string" && Wt(h);
    if (x) {
      const ut = Q ? Q(h) : h.nodeName;
      if (typeof ut == "string") {
        const ft = Y(ut);
        if (!q[ft] || Bt[ft])
          throw Nt("root node is forbidden and cannot be sanitized in-place");
      }
      if (te(h))
        throw Nt("root node is clobbered and cannot be sanitized in-place");
      try {
        Ee(h);
      } catch (ft) {
        throw sn(h), ft;
      }
    } else if (Wt(h))
      l = an("<!---->"), m = l.ownerDocument.importNode(h, !0), m.nodeType === gt.element && m.nodeName === "BODY" || m.nodeName === "HTML" ? l = m : l.appendChild(m), Ee(m);
    else {
      if (!It && !At && !Ct && // eslint-disable-next-line unicorn/prefer-includes
      h.indexOf("<") === -1)
        return W && Kt ? $(h) : h;
      if (l = an(h), !l)
        return It ? null : Kt ? y : "";
    }
    l && ae && wt(l.firstChild);
    const Z = cn(x ? h : l);
    try {
      for (; b = Z.nextNode(); )
        ln(b), fn(b), Pt(b.content) && ee(b.content);
    } catch (ut) {
      throw x && sn(h), ut;
    }
    if (x)
      return Gt(e.removed, (ut) => {
        ut.element && yo(ut.element);
      }), At && ye(h), h;
    if (It) {
      if (At && ye(l), Xt)
        for (O = Et.call(l.ownerDocument); l.firstChild; )
          O.appendChild(l.firstChild);
      else
        O = l;
      return (G.shadowroot || G.shadowrootmode) && (O = Rt.call(i, O, !0)), O;
    }
    let V = Ct ? l.outerHTML : l.innerHTML;
    return Ct && q["!doctype"] && l.ownerDocument && l.ownerDocument.doctype && l.ownerDocument.doctype.name && et(sr, l.ownerDocument.doctype.name) && (V = "<!DOCTYPE " + l.ownerDocument.doctype.name + `>
` + V), At && (V = Jt(V)), W && Kt ? $(V) : V;
  }, e.setConfig = function() {
    let h = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    ge(h), re = !0, ie = q, se = G;
  }, e.clearConfig = function() {
    Mt = null, re = !1, ie = null, se = null, W = _, y = "";
  }, e.isValidAttribute = function(h, t, l) {
    Mt || ge({});
    const m = Y(h), b = Y(t);
    return un(m, b, l);
  }, e.addHook = function(h, t) {
    typeof t == "function" && J(F, h) && Ht(F[h], t);
  }, e.removeHook = function(h, t) {
    if (J(F, h)) {
      if (t !== void 0) {
        const l = zo(F[h], t);
        return l === -1 ? void 0 : Wo(F[h], l, 1)[0];
      }
      return Tn(F[h]);
    }
  }, e.removeHooks = function(h) {
    J(F, h) && (F[h] = []);
  }, e.removeAllHooks = function() {
    F = Nn();
  }, e;
}
Yn();
function pr(n) {
  if (n && typeof n.getBoundingClientRect == "function") {
    const { bottom: e, top: o } = n.getBoundingClientRect(), { offsetTop: i } = n;
    if (o < 0 && e > 0) {
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
var Ce = { exports: {} }, Oe, Dn;
function mr() {
  if (Dn) return Oe;
  Dn = 1;
  var n = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Oe = n, Oe;
}
var Ne, In;
function hr() {
  if (In) return Ne;
  In = 1;
  var n = /* @__PURE__ */ mr();
  function e() {
  }
  function o() {
  }
  return o.resetWarningCache = e, Ne = function() {
    function i(c, d, u, f, E, T) {
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
    var a = {
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
      checkPropTypes: o,
      resetWarningCache: e
    };
    return a.PropTypes = a, a;
  }, Ne;
}
var xn;
function gr() {
  return xn || (xn = 1, Ce.exports = /* @__PURE__ */ hr()()), Ce.exports;
}
var yr = /* @__PURE__ */ gr();
const st = /* @__PURE__ */ Do(yr);
st.shape({
  event: st.string,
  action: st.string,
  name: st.string,
  region: st.string,
  section: st.string,
  component: st.string,
  type: st.string,
  text: st.string
});
const Vt = ({ children: n }) => /* @__PURE__ */ React.createElement(React.Fragment, null, n);
Vt.propTypes = {
  children: st.oneOfType([
    st.arrayOf(st.node),
    st.node,
    st.string
  ])
};
var De = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var kn;
function Er() {
  return kn || (kn = 1, (function(n) {
    (function() {
      var e = {}.hasOwnProperty;
      function o() {
        for (var a = "", c = 0; c < arguments.length; c++) {
          var d = arguments[c];
          d && (a = r(a, i(d)));
        }
        return a;
      }
      function i(a) {
        if (typeof a == "string" || typeof a == "number")
          return a;
        if (typeof a != "object")
          return "";
        if (Array.isArray(a))
          return o.apply(null, a);
        if (a.toString !== Object.prototype.toString && !a.toString.toString().includes("[native code]"))
          return a.toString();
        var c = "";
        for (var d in a)
          e.call(a, d) && a[d] && (c = r(c, d));
        return c;
      }
      function r(a, c) {
        return c ? a ? a + " " + c : a + c : a;
      }
      n.exports ? (o.default = o, n.exports = o) : window.classNames = o;
    })();
  })(De)), De.exports;
}
Er();
({
  ...Vt.propTypes
});
const $n = ({ children: n, className: e = "container", ...o }) => /* @__PURE__ */ React.createElement("div", { className: e, ...o }, /* @__PURE__ */ React.createElement("div", { className: "row" }, n));
$n.propTypes = {
  children: Vt.propTypes.children
};
({
  ...$n.propTypes
});
Vt.propTypes.children, st.oneOf(["0", "3", "4", "6", "8", "9", "12"]);
Vt.propTypes.children;
function Vn() {
  var Q, W;
  const o = ["asu-header", "asuHeader"].find((y) => document.getElementById(y)), i = document.getElementById(o), r = document.getElementById("uds-anchor-menu");
  if (!r || !i || Array.from(r.classList).some((y) => y.startsWith("sc-")))
    return;
  const a = Array.from(r.getElementsByClassName("nav-link")), c = /* @__PURE__ */ new Map();
  let d = !1;
  const u = () => Math.max(i.getBoundingClientRect().bottom, 0), f = () => {
    r.style.setProperty(
      "--uds-anchor-menu-top",
      u() + "px"
    ), r.classList.add("uds-anchor-menu-attached"), d = !0;
  }, E = () => {
    r.classList.remove("uds-anchor-menu-attached"), r.style.removeProperty("--uds-anchor-menu-top"), d = !1;
  }, T = ((Q = document.getElementById("toolbar-bar")) == null ? void 0 : Q.offsetHeight) || 0, g = ((W = document.getElementById("toolbar-item-administration-tray")) == null ? void 0 : W.offsetHeight) || 0, A = T + g, w = r.getBoundingClientRect().top + window.scrollY - A;
  for (let y of a) {
    const _ = y.getAttribute("href");
    if (!_ || !_.startsWith("#"))
      continue;
    const P = _.replace("#", ""), U = document.getElementById(P);
    U && c.set(y, U);
  }
  window.scrollY >= w - u() && f();
  function k(y, _ = 0) {
    if (!y || _ > 10)
      return 0;
    if (y.offsetHeight === 0 || y.offsetWidth === 0)
      return k(y.parentElement, _ + 1);
    const P = y.getBoundingClientRect(), U = window.innerHeight || document.documentElement.clientHeight, B = window.innerWidth || document.documentElement.clientWidth, $ = P.bottom - P.top, Dt = P.right - P.left, bt = $ * Dt, at = Math.min(U, P.bottom) - Math.max(0, P.top), pt = Math.min(B, P.right) - Math.max(0, P.left);
    return at * pt / bt * 100;
  }
  const C = function() {
    let y = 0, _ = null;
    if (a.forEach((U) => {
      const B = c.get(U);
      if (!B)
        return;
      const $ = k(B);
      $ > 0 && $ > y && (y = $, _ = B.id);
    }), _) {
      const U = document.querySelector(
        '[href="#' + _ + '"]'
      );
      U && U.classList.add("active"), r.querySelectorAll(
        'a.nav-link:not([href="#' + _ + '"])'
      ).forEach(function(B) {
        B.classList.remove("active");
      });
    }
    const P = w - u();
    !d && window.scrollY >= P ? f() : d && window.scrollY < P ? E() : d && r.style.setProperty(
      "--uds-anchor-menu-top",
      u() + "px"
    );
  };
  let K;
  K = (() => {
    let y = !1;
    return () => {
      y || (y = !0, C(), setTimeout(() => {
        y = !1;
      }, 100));
    };
  })(), window.addEventListener("scroll", K, { passive: !0 });
  for (let [y, _] of c)
    y.addEventListener("click", function(P) {
      if (P.preventDefault(), !_ || !document.body.contains(_)) {
        console.warn("Anchor target no longer exists in DOM");
        return;
      }
      if (y === a[0]) {
        const ct = i.getBoundingClientRect().bottom, Et = r.offsetHeight, Ut = ct + Et, Rt = _.getBoundingClientRect().top, F = window.innerHeight / 2;
        if (Rt >= Ut && Rt <= F) {
          history.replaceState(null, "", y.getAttribute("href")), z(_);
          return;
        }
      }
      const B = window.innerHeight, $ = Math.round(B * 0.35);
      let bt = _.getBoundingClientRect().top + window.scrollY - $;
      window.scrollTo({
        top: bt,
        behavior: "smooth"
      });
      const at = r.querySelector(".nav-link.active");
      at && at.classList.remove("active"), P.target.classList.add("active");
      const pt = y.getAttribute("href");
      pt && history.replaceState(null, "", pt), z(_);
    });
  function z(y) {
    y.hasAttribute("tabindex") || (y.setAttribute("tabindex", "-1"), y.style.outline = "none"), y.focus({ preventScroll: !0 });
  }
}
N.on(window, "load.uds.anchor-menu", Vn);
function Xn() {
  const n = document.querySelectorAll('mark[class^="pen-"]'), e = new IntersectionObserver(
    (o) => {
      o.forEach((i) => {
        i.isIntersecting ? i.target.classList.add("animate-bg-in-scroll") : i.target.classList.remove("animate-bg-in-scroll");
      });
    },
    {
      threshold: 0.1
    }
  );
  n.forEach((o) => {
    e.observe(o);
  });
}
N.on(
  window,
  "load.uds.blockquote-animation",
  Xn
);
function Kn() {
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
  ], o = ["Su", "M", "Tu", "W", "Th", "F", "Sa"], r = {
    month: (/* @__PURE__ */ new Date()).getMonth(),
    year: (/* @__PURE__ */ new Date()).getFullYear()
  }, a = (u, f) => {
    const E = /* @__PURE__ */ new Date(), T = [], g = new Date(u, f).getDay(), A = new Date(u, f + 1, 0).getDate(), w = new Date(u, f, 0).getDate();
    for (let S = 1; S <= g; S++) {
      const k = w - g + S, C = new Date(
        r.year,
        r.month - 1,
        k
      ).toLocaleString();
      T.push({ key: C, date: k, monthClass: "prev" });
    }
    for (let S = 1; S <= A; S++) {
      const k = new Date(r.year, r.month, S).toLocaleString();
      S === E.getDate() && r.month === E.getMonth() && r.year === E.getFullYear() ? T.push({
        key: k,
        date: S,
        monthClass: "current",
        todayClass: "today"
      }) : T.push({ key: k, date: S, monthClass: "current" });
    }
    if (T.length < 42) {
      const S = 42 - T.length;
      for (let k = 1; k <= S; k++) {
        const C = new Date(r.year, r.month + 1, k).toLocaleString();
        T.push({ key: C, date: k, monthClass: "next" });
      }
    }
    return T;
  }, c = () => {
    const u = document.getElementById("calendar");
    u && (u.innerHTML = `
      <h2><span class="highlight-black">${n[r.month]} ${r.year}</span></h2>
      <div class="calendar-grid">
        <div class="heading desktop">
          ${e.map((f) => `<p>${f}</p>`).join("")}
        </div>
        <div class="heading mobile">
          ${o.map((f) => `<p>${f}</p>`).join("")}
        </div>
        <div class="body">
          ${a(r.year, r.month).map(
      (f) => `<h3 id="${f.key}" class="calendar-item ${f.monthClass}" ${f.todayClass ? `aria-label="${f.todayClass[0].toUpperCase()}${f.todayClass.slice(
        1
      )}"` : ""}>
                  <span class="${f.todayClass ? f.todayClass : ""}">${f.date}</span>
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
    var f = new Date(r.year, r.month + u);
    r.year = f.getFullYear(), r.month = f.getMonth(), c();
  })(0);
}
N.on(window, "load.uds.calendar", Kn);
function Ue() {
  const n = document.querySelectorAll(".card-body");
  if (n.length === 0 && 0 < 3) {
    setTimeout(() => Ue(), 500);
    return;
  }
  if (n.length === 0) {
    console.warn("No .card-body found after 3 retries.");
    return;
  }
  n.forEach((o, i) => {
    const r = o.querySelector("div p"), a = r.textContent, c = window.getComputedStyle(o), d = parseInt(c.webkitLineClamp || c.lineClamp), u = parseFloat(c.lineHeight), f = parseFloat(c.fontSize), E = isNaN(u) ? parseFloat(c.lineHeight) * f : u, T = d * E;
    if (r.offsetHeight >= T) {
      let g = "";
      const A = a.split(" ");
      let w = 0, S = "";
      for (; w < A.length && Tr(
        S + (S ? " " : "") + A[w],
        r
      ) <= T; )
        S += (S ? " " : "") + A[w], w++;
      g = S + "...";
      const k = `visible-text-${Math.random().toString(36).substring(7)}`, C = document.createElement("div");
      C.id = k, C.textContent = g, C.style.position = "absolute", C.style.top = `${r.offsetTop}px`, C.style.left = `${r.offsetLeft}px`, C.style.width = `${r.offsetWidth}px`, C.style.height = `${r.offsetHeight}px`, C.style.opacity = "0", C.style.pointerEvents = "none", C.style.zIndex = "1", o.appendChild(C), r.setAttribute("aria-describedby", k), r.setAttribute("aria-hidden", "true");
    }
  });
}
function Tr(n, e) {
  const o = document.createElement(e.tagName);
  o.style.font = window.getComputedStyle(e).font, o.style.width = window.getComputedStyle(e).width, o.style.whiteSpace = "pre-wrap", o.textContent = n, document.body.appendChild(o);
  const i = o.offsetHeight;
  return document.body.removeChild(o), i;
}
N.on(window, "load.uds.card-bodies", Ue);
function Qn() {
  const n = document.querySelector(".info-layer"), e = document.getElementById("dispatch");
  N.on(e, "click", function() {
    n == null || n.classList.toggle("active");
  });
}
N.on(window, "load.uds.ranking-card", Qn);
function Zn() {
  be.Chart.register(...be.registerables);
  const n = 50;
  var e = document.getElementById("uds-donut");
  if (!e)
    return;
  document.getElementById("percentage-display").innerHTML = n + "%";
  const o = {
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
  new be.Chart(e, o);
}
N.on(window, "load.uds.chart", Zn);
function Jn() {
  function n({ target: o }) {
    const i = o.getAttribute("href");
    o.getAttribute("data-bs-toggle") !== "collapse" || !i || !i.includes("#") || pr(
      document.querySelector(".collapsing")
    );
  }
  function e(o) {
    const { target: i, key: r } = o;
    r !== " " && r !== "Spacebar" || i.tagName !== "A" || i.getAttribute("data-bs-toggle") !== "collapse" || (o.preventDefault(), i.click());
  }
  N.on(document, "click.uds.collapse", n), N.on(document, "keydown.uds.collapse", e);
}
N.on(window, "load.uds.collapse", Jn);
function Be() {
  var e, o, i, r;
  const n = (a) => {
    window.dataLayer = window.dataLayer || [];
    const { dataLayer: c } = window;
    c && c.push(a);
  };
  (e = document.querySelectorAll("[data-ga-header]")) == null || e.forEach(
    (a) => a.addEventListener("click", () => {
      const c = a.getAttribute("data-ga-header-event") || "link";
      let d = a.getAttribute("data-ga-header-action") || "click";
      const u = a.getAttribute("aria-expanded");
      u && (d = u === "false" ? "open" : "close");
      const f = a.getAttribute("data-ga-header-type") || "internal link", E = a.getAttribute("data-ga-header-section") || "main navbar", T = a.getAttribute("data-ga-header") || "", g = a.getAttribute("data-ga-header-component");
      n({
        name: "onclick",
        event: c.toLowerCase(),
        action: d.toLowerCase(),
        type: f.toLowerCase(),
        section: E.toLowerCase(),
        region: "navbar",
        text: T.toLowerCase(),
        ...g && {
          component: g.toLowerCase()
        }
      });
    })
  ), (o = document.querySelectorAll("[data-ga-input-header-event]")) == null || o.forEach(
    (a) => a.addEventListener("change", (c) => {
      const d = a.getAttribute("data-ga-input-header-event") || "", u = c.target.value || "";
      n({
        name: "onenter",
        action: "type",
        type: "main search",
        section: "topbar",
        region: "navbar",
        text: u.toLowerCase(),
        event: d.toLowerCase()
      });
    })
  ), (i = document.querySelectorAll("[data-ga]")) == null || i.forEach(
    (a) => a.addEventListener("click", () => {
      const c = {};
      Array.from(a.attributes).forEach((u) => {
        if (u.name.startsWith("data-ga-")) {
          const f = u.name.replace("data-ga-", ""), E = u.value;
          E && (c[f] = E.toLowerCase());
        } else if (u.name === "data-ga") {
          const f = u.value;
          f && (c.text = f.toLowerCase());
        }
      });
      const d = a.getAttribute("aria-expanded");
      d && (c.action = d === "false" ? "open" : "close"), n(c);
    })
  ), (r = document.querySelectorAll("[data-ga-input]")) == null || r.forEach(
    (a) => a.addEventListener("change", (c) => {
      const d = a.getAttribute("data-ga-input-name") || "", u = a.getAttribute("data-ga-input-action") || "", f = a.getAttribute("data-ga-input") || "", E = a.getAttribute("data-ga-input-region") || "", T = a.getAttribute("data-ga-input-section") || "";
      let g = a.getAttribute("data-ga-input-event") || "", A;
      switch (f) {
        case "checkbox":
          A = c.target.labels[0].textContent || "", g = c.target.checked ? g : "deselect";
          break;
        case "radio button":
          A = c.target.labels[0].textContent || "";
          break;
        case "blur":
          A = c.target.value.toLowerCase() || "";
          break;
        default:
          A = [...c.target.selectedOptions].map((w) => w.value).join(",") || "";
          break;
      }
      n({
        name: d.toLowerCase(),
        event: g.toLowerCase(),
        action: u.toLowerCase(),
        type: f.toLowerCase(),
        section: T.toLowerCase(),
        region: E.toLowerCase(),
        text: A.toLowerCase()
      });
    })
  ), document.querySelectorAll("[data-ga-footer]").forEach(
    (a) => a.addEventListener("focus", () => {
      const c = {
        type: a.getAttribute("data-ga-footer-type").toLowerCase(),
        section: a.getAttribute("data-ga-footer-section").toLowerCase(),
        text: a.getAttribute("data-ga-footer").toLowerCase()
      };
      n({
        event: "link",
        action: "click",
        name: "onclick",
        region: "footer",
        ...c
      });
    })
  );
}
window.initDataLayer = window.initDataLayer || Be;
N.on(window, "load.uds.data-layer", Be);
const qe = () => {
  const n = () => {
    const o = document.getElementById("asu-header");
    window.scrollY > (o == null ? void 0 : o.getBoundingClientRect().top) ? o == null || o.classList.add("scrolled") : o == null || o.classList.remove("scrolled");
  };
  N.on(window, "scroll.uds.header", n), document.querySelectorAll(
    ".uds-header-v2 .header-top-search .search-button"
  ).forEach((o) => {
    o.addEventListener("click", () => {
      const i = o.closest(".header-top-search");
      if (i) {
        i.classList.add("open");
        const r = i.querySelector(".search-input");
        r && r.focus();
      }
    });
  }), document.querySelectorAll(".uds-header-v2 .navbar-mobile-search input[type=search]").forEach((o) => {
    o.addEventListener("input", () => {
      const i = o.closest(".navbar-mobile-search");
      i && (o.value.length > 0 ? i.classList.add("has-value") : i.classList.remove("has-value"));
    });
  }), document.querySelectorAll(".uds-header-v2 .header-top-search .search-input").forEach((o) => {
    o.addEventListener("blur", () => {
      if (!o.value) {
        const i = o.closest(".header-top-search");
        i && setTimeout(() => i.classList.remove("open"), 200);
      }
    });
  });
};
window.initGlobalHeader = window.initGlobalHeader || qe;
N.on(window, "load.uds.global-header", qe);
function to() {
  const n = ".uds-video-hero", e = n + " video", o = n + " #playHeroVid", i = n + " #pauseHeroVid", r = "click", a = "block", c = "none", d = document.querySelector(e), u = document.querySelector(o), f = document.querySelector(i);
  function E(w) {
    w.paused ? w.play() : w.pause();
  }
  function T(w, S) {
    getComputedStyle(w).display === c ? (S.style.display = c, w.style.display = a, w.focus()) : (w.style.display = c, S.style.display = a, S.focus());
  }
  function g(w) {
    w.stopPropagation(), T(u, f), E(d);
  }
  function A(w) {
    w.stopPropagation(), T(u, f), E(d);
  }
  f == null || f.addEventListener(r, g), u == null || u.addEventListener(r, A);
}
N.on(window, "load.uds.heroes-video", to);
const eo = () => {
  const e = () => {
    document.querySelectorAll(".parallax-container").forEach((c) => {
      const d = c.querySelector("img"), u = c.offsetHeight - d.height * 1.2, f = d.dataset.parallaxType === "scroll-to" ? window.innerHeight : window.innerHeight + c.offsetHeight, E = c.getBoundingClientRect().top, g = (window.innerHeight - E) / f;
      if (g < 0)
        d.style.top = u + "px";
      else if (g > 1)
        d.style.top = "0";
      else {
        const A = u * (1 - g);
        d.style.top = A + "px";
      }
    });
  }, o = (c) => {
    const d = c.parentNode, u = c.width, f = c.height;
    let E = d.offsetWidth / u, T = 0, g = f * E, A = u * E;
    const w = +c.dataset.parallaxFactor || 1.2;
    !c.dataset.noScale && g < d.offsetHeight * w && (E = d.offsetHeight * w / g, g *= E, A *= E, T = (A - d.offsetWidth) / 2 * -1), c.style.height = g + "px", c.style.left = T + "px";
  }, i = () => {
    document.querySelectorAll(".parallax-container img").forEach((c, d) => {
      c.complete ? o(c) : c.onload = () => o(c);
    });
  }, r = (c) => {
    const { dataLayer: d } = window, u = {
      event: "link",
      action: "click",
      name: "onclick",
      type: "internal link",
      region: "main content",
      ...c
    };
    d && d.push(u);
  };
  document.querySelectorAll("[data-ga-image-parallax]").forEach(
    (c) => N.on(c, "focus.uds.image-parallax", () => {
      const d = {
        section: c.getAttribute("data-ga-image-parallax-section").toLowerCase(),
        text: c.getAttribute("data-ga-image-parallax").toLowerCase()
      };
      r(d);
    })
  ), i(), N.on(window, "resize.uds.image-parallax", i), N.on(window, "scroll.uds.image-parallax", e);
};
N.on(window, "load.uds.image-parallax", eo);
function no() {
  const n = document.getElementById("uds-modal");
  if (!n) return null;
  const e = document.getElementById("uds-modal-backdrop");
  if (!e) return null;
  const o = document.getElementById("openModalButton");
  if (!o) return null;
  const i = document.getElementById("closeModalButton");
  if (!i) return null;
  const r = n.querySelector(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  let a = null;
  function c(f) {
    n.contains(f.relatedTarget) || r == null || r.focus();
  }
  function d() {
    a = document.activeElement, n.classList.add("open"), e.classList.add("open"), e.addEventListener("focusout", c), e.addEventListener("click", u, !0), document.addEventListener("keydown", u), setTimeout(() => {
      r == null || r.focus();
    }, 200);
  }
  function u({ type: f, target: E, key: T } = {}) {
    // escape key pressed
    (f === "keydown" && T === "Escape" || // click on close button
    f === "click" && E === i || // click on backdrop
    f === "click" && E === e) && (n.classList.remove("open"), e.classList.remove("open"), e.removeEventListener("focusout", c), e.removeEventListener("click", u, !0), document.removeEventListener("keydown", u), a == null || a.focus());
  }
  o.addEventListener("click", d);
}
N.on(window, "load.uds.modals", no);
let Mn = !1;
const Pn = 282;
function br(n, e) {
  const o = getComputedStyle(e), i = parseFloat(o.columnGap || o.gap) || 8, r = e.querySelector(".more-dropdown-button"), a = r ? Math.round(r.getBoundingClientRect().width) : 83;
  return { tabGap: i, moreBtnWidth: a };
}
function _r(n, e) {
  let o = n.querySelector(".uds-more-dropdown");
  if (!o) {
    o = document.createElement("div"), o.className = "uds-more-dropdown";
    const i = document.createElement("button");
    i.type = "button", i.className = "uds-tab more-dropdown-button", i.setAttribute("aria-haspopup", "true"), i.setAttribute("aria-expanded", "false"), i.setAttribute("aria-controls", "more-dropdown-menu"), i.innerHTML = '<span class="more-dropdown-button-inner"><span aria-hidden="true">More</span><i aria-hidden="true" class="fas fa-chevron-down more-dropdown-icon"></i></span><span class="more-dropdown-button-indicator" aria-hidden="true"></span>';
    const r = document.createElement("ul");
    r.id = "more-dropdown-menu", r.className = "more-dropdown-menu uds-more-dropdown-list", r.setAttribute("role", "menu"), r.setAttribute("aria-label", "More tabs"), r.setAttribute("aria-hidden", "true"), o.appendChild(i), o.appendChild(r), n.appendChild(o);
  }
  if (!o.hasAttribute("data-uds-events-wired")) {
    o.setAttribute("data-uds-events-wired", "true");
    const i = o.querySelector(".more-dropdown-button"), r = o.querySelector(".more-dropdown-menu");
    Ar(o, i, r);
  }
  return {
    wrapper: o,
    button: o.querySelector(".more-dropdown-button"),
    menu: o.querySelector(".more-dropdown-menu")
  };
}
function Ar(n, e, o) {
  N.on(e, "click.uds.tabbed-panels-v2", (r) => {
    r.preventDefault();
    const a = e.getAttribute("aria-expanded") !== "true";
    vt(e, o, a);
  }), N.on(e, "keydown.uds.tabbed-panels-v2", (r) => {
    var d, u;
    const a = e.getAttribute("aria-expanded") === "true", c = Array.from(o.querySelectorAll('[role="menuitem"]'));
    switch (r.key) {
      case "Enter":
      case " ":
        r.preventDefault(), a ? vt(e, o, !1) : (vt(e, o, !0), requestAnimationFrame(() => {
          var f;
          return (f = c[0]) == null ? void 0 : f.focus();
        }));
        break;
      case "ArrowDown":
        a && (r.preventDefault(), (d = c[0]) == null || d.focus());
        break;
      case "ArrowUp":
        a && (r.preventDefault(), (u = c[c.length - 1]) == null || u.focus());
        break;
      case "Escape":
        a && (r.preventDefault(), vt(e, o, !1), e.focus());
        break;
    }
  });
  const i = (r) => {
    n.contains(r.target) || vt(e, o, !1);
  };
  N.on(document, "mousedown.uds.tabbed-panels-v2", i), N.on(document, "touchstart.uds.tabbed-panels-v2", i), N.on(o, "keydown.uds.tabbed-panels-v2", (r) => {
    var d, u;
    const a = Array.from(o.querySelectorAll('[role="menuitem"]')), c = a.indexOf(document.activeElement);
    switch (r.key) {
      case "ArrowDown":
        r.preventDefault(), (a[c + 1] ?? a[0]).focus();
        break;
      case "ArrowUp":
        r.preventDefault(), (a[c - 1] ?? a[a.length - 1]).focus();
        break;
      case "Home":
        r.preventDefault(), (d = a[0]) == null || d.focus();
        break;
      case "End":
        r.preventDefault(), (u = a[a.length - 1]) == null || u.focus();
        break;
      case "Escape":
        r.preventDefault(), vt(e, o, !1), e.focus();
        break;
      case "Tab":
        vt(e, o, !1);
        break;
    }
  });
}
function vt(n, e, o) {
  n.setAttribute("aria-expanded", String(o)), e.setAttribute("aria-hidden", String(!o)), e.classList.toggle("open", o);
}
function Hn(n) {
  if (n.hasAttribute("data-react")) return;
  const e = n.querySelector(".nav.nav-tabs");
  if (!e) return;
  const o = Array.from(e.querySelectorAll("button.nav-link"));
  if (o.length === 0) return;
  n.classList.contains("uds-tabbed-panels-dark");
  const { wrapper: i, button: r, menu: a } = _r(e);
  o.forEach((y) => {
    y.style.display = "", y.removeAttribute("aria-hidden"), y.removeAttribute("tabindex"), y.removeAttribute("inert");
  });
  const c = e.clientWidth, { moreBtnWidth: d, tabGap: u } = br(n, e), f = o.map((y) => y.getBoundingClientRect().width || 80), E = [], T = [];
  let g = 0;
  for (let y = 0; y < o.length; y++) {
    const _ = f[y];
    if (g + _ + d > c) {
      for (let P = y; P < o.length; P++)
        T.push(o[P].id);
      break;
    }
    E.push(o[y].id), g += _ + u;
  }
  if (o.forEach((y) => {
    T.includes(y.id) && (y.style.display = "none", y.setAttribute("tabindex", "-1"), y.setAttribute("aria-hidden", "true"), y.setAttribute("inert", ""));
  }), T.length === 0) {
    i.classList.add("uds-more-dropdown-hidden"), i.setAttribute("aria-hidden", "true");
    return;
  }
  i.classList.remove("uds-more-dropdown-hidden"), i.removeAttribute("aria-hidden");
  const A = i.getBoundingClientRect(), w = A.left + Pn <= window.innerWidth, S = A.left + Pn <= 1200, C = n.getBoundingClientRect().width < 1200;
  i.classList.toggle(
    "dropdown-open-right",
    C && w && S
  );
  const K = e.querySelector("button.nav-link.active"), dt = (K == null ? void 0 : K.id) ?? "", z = T.includes(dt);
  r.classList.toggle("active", z);
  const Q = T.length;
  r.setAttribute(
    "aria-label",
    `More, ${Q} additional tab${Q !== 1 ? "s" : ""}`
  );
  const W = z ? E[0] : dt;
  o.forEach((y) => {
    T.includes(y.id) || y.setAttribute("tabindex", y.id === W ? "0" : "-1");
  }), a.innerHTML = "", T.forEach((y) => {
    const _ = e.querySelector(`#${CSS.escape(y)}`);
    if (!_) return;
    const P = y === dt, U = document.createElement("li");
    U.setAttribute("role", "none");
    const B = document.createElement("button");
    B.type = "button", B.setAttribute("role", "menuitem"), B.setAttribute("tabindex", "-1"), B.className = "more-dropdown-item", B.dataset.tabId = y, P && B.setAttribute("aria-current", "true"), B.textContent = _.textContent.trim(), N.on(B, "click.uds.tabbed-panels-v2", ($) => {
      $.preventDefault(), vt(r, a, !1), r.focus(), Me(n, y), Pe(e, y, r, a);
    }), U.appendChild(B), a.appendChild(U);
  });
}
function Me(n, e) {
  var d, u;
  const o = n.querySelector(".nav.nav-tabs"), i = ((d = n.closest("div")) == null ? void 0 : d.querySelector(".tab-content")) ?? ((u = n.parentElement) == null ? void 0 : u.querySelector(".tab-content"));
  o.querySelectorAll("button.nav-link").forEach((f) => {
    f.classList.remove("active"), f.setAttribute("aria-selected", "false");
  }), i == null || i.querySelectorAll(".tab-pane").forEach((f) => {
    f.classList.remove("show", "active");
  });
  const r = o.querySelector(`#${CSS.escape(e)}`);
  r == null || r.classList.add("active"), r == null || r.setAttribute("aria-selected", "true");
  const a = `nav-${e}`, c = i == null ? void 0 : i.querySelector(`#${CSS.escape(a)}`);
  c == null || c.classList.add("show", "active");
}
function Pe(n, e, o, i) {
  const r = Array.from(i.querySelectorAll('[role="menuitem"]'));
  r.forEach((c) => {
    c.dataset.tabId === e ? c.setAttribute("aria-current", "true") : c.removeAttribute("aria-current");
  });
  const a = r.some(
    (c) => c.hasAttribute("aria-current")
  );
  o.classList.toggle("active", a);
}
function wr(n) {
  const e = n.querySelector(".nav.nav-tabs");
  if (!e) return;
  function o(i) {
    var u;
    if (((u = i.target) == null ? void 0 : u.getAttribute("role")) !== "tab" || !["ArrowRight", "ArrowLeft", "Home", "End"].includes(i.key)) return;
    i.preventDefault(), i.stopImmediatePropagation();
    const a = Array.from(
      e.querySelectorAll("button.nav-link")
    ).filter((f) => f.style.display !== "none"), c = a.indexOf(i.target);
    if (c === -1) return;
    let d = null;
    if (i.key === "ArrowRight" ? d = a[c + 1] ?? a[0] : i.key === "ArrowLeft" ? d = a[c - 1] ?? a[a.length - 1] : i.key === "Home" ? d = a[0] : i.key === "End" && (d = a[a.length - 1]), d && d !== i.target) {
      i.target.setAttribute("tabindex", "-1"), d.setAttribute("tabindex", "0"), d.focus(), Me(n, d.id);
      const f = e.querySelector(".more-dropdown-button"), E = e.querySelector(".more-dropdown-menu");
      f && E && Pe(e, d.id, f, E);
    }
  }
  e.addEventListener("keydown", o, !0), N.on(e, "click.uds.tabbed-panels-v2", (i) => {
    var d;
    const r = (d = i.target) == null ? void 0 : d.closest("button.nav-link");
    if (!r || r.style.display === "none") return;
    i.preventDefault(), Me(n, r.id);
    const a = e.querySelector(".more-dropdown-button"), c = e.querySelector(".more-dropdown-menu");
    a && c && Pe(e, r.id, a, c);
  });
}
function He() {
  if (document.querySelectorAll(
    ".uds-tabbed-panels:not([data-react]):not([data-uds-v2-init])"
  ).forEach((e) => {
    e.setAttribute("data-uds-v2-init", "true"), Hn(e), wr(e);
  }), !Mn) {
    Mn = !0;
    let e;
    N.on(window, "resize.uds.tabbed-panels-v2", () => {
      clearTimeout(e), e = setTimeout(() => {
        document.querySelectorAll(".uds-tabbed-panels:not([data-react])").forEach(Hn);
      }, 100);
    });
  }
}
document.readyState === "complete" ? setTimeout(He, 0) : N.on(window, "load.uds.tabbed-panels-v2", He);
function oo() {
  function n() {
    const i = ".uds-table-fixed-wrapper", r = ".uds-table.uds-table-fixed table", a = ".scroll-control.previous";
    document.querySelectorAll(i).forEach((d, u) => {
      const f = d.querySelector(r);
      f.setAttribute("id", "uds-table-" + u);
      const E = f.querySelector("tbody tr > *"), T = d.querySelector(a);
      T.style.left = E.offsetWidth + "px";
    });
  }
  function e() {
    const i = ".uds-table-fixed", r = ".uds-table-fixed-wrapper", a = ".scroll-control.previous", c = ".scroll-control.next";
    document.querySelectorAll(r).forEach((u, f) => {
      const E = u.querySelector(i), T = u.querySelector(a), g = u.querySelector(c);
      ["click", "focus"].forEach((A) => {
        N.on(T, A, function() {
          E.scrollLeft -= 100;
        }), N.on(g, A, function() {
          E.scrollLeft += 100;
        });
      });
    });
  }
  function o(i, r) {
    let a;
    return (...c) => {
      clearTimeout(a), a = setTimeout(() => {
        i.apply(this, c);
      }, r);
    };
  }
  n(), e(), N.on(window, "resize", function() {
    o(n, 100)();
  });
}
N.on(window, "load.uds.fixed-table", oo);
function ro() {
  const o = ".uds-tooltip-container", r = "[aria-describedby]", d = document.querySelectorAll(
    `${o} > ${r} + [role=tooltip]`
  );
  function u() {
    document.querySelectorAll(
      `${r}[aria-expanded="true"]`
    ).forEach((A) => {
      A.setAttribute("aria-expanded", "false");
    });
  }
  function f(g) {
    let A = g.target.querySelector(`${o} ${r}`) || g.target, w = A.nextElementSibling;
    g.type === "keydown" && g.key !== " " || (u(), A.getBoundingClientRect().right + 288 > window.innerWidth ? w.classList.add("bottom-placement") : w.classList.remove("bottom-placement"), A.setAttribute("aria-expanded", "true"));
  }
  function E(g) {
    let A = g.target.querySelector(`${o} ${r}`) || g.target;
    g.type === "mouseleave" && A === document.activeElement || A.setAttribute("aria-expanded", "false");
  }
  function T(g) {
    g.key === "Escape" && E(g);
  }
  [...d].map((g) => {
    const A = new AbortController(), { signal: w } = A, S = g.previousElementSibling, k = S.parentElement;
    return S.addEventListener("mouseenter", f, { signal: w }), S.addEventListener("focus", f, { signal: w }), S.addEventListener("keydown", f, { signal: w }), S.addEventListener("blur", E, { signal: w }), S.addEventListener("keydown", T, { signal: w }), k.addEventListener("mouseleave", E, { signal: w }), A;
  });
}
N.on(window, "load.uds.tooltips", ro);
function io() {
  const n = ".uds-video-player", e = n + " video", o = n + " .uds-video-btn-play", i = n + " .uds-video-overlay", r = "click", a = "ended", c = "flex", d = "none", u = document.querySelector(e), f = document.querySelector(i), E = document.querySelector(o);
  function T(C) {
    C.style.display === d ? C.style.display = c : C.style.display = d;
  }
  function g(C) {
    C.paused ? C.play() : C.pause();
  }
  function A(C) {
    g(this), T(this.nextElementSibling);
  }
  function w(C) {
    C.stopPropagation();
    const K = this.parentNode;
    T(K), g(u);
  }
  function S(C) {
    T(this), g(u);
  }
  function k(C) {
    T(f);
  }
  u == null || u.addEventListener(r, A), E == null || E.addEventListener(r, w), f == null || f.addEventListener(r, S), u == null || u.addEventListener(a, k);
}
N.on(window, "load.uds.video", io);
const Sr = {
  // Banner, // code updated to use bootstrap alert so we don't need this
  initAnchorMenu: Vn,
  initBlockquoteAnimation: Xn,
  initCalendar: Kn,
  initCollapse: Jn,
  initChart: Zn,
  initDataLayer: Be,
  initFixedTable: oo,
  initGlobalHeader: qe,
  initHeroesVideo: to,
  initImageParallax: eo,
  initModals: no,
  initRankingCard: Qn,
  initTabbedPanelsV2: He,
  initTooltips: ro,
  initVideo: io,
  initCardBodies: Ue
};
export {
  Sr as default
};
//# sourceMappingURL=unity-bootstrap.es.js.map
