import * as be from "chart.js";
const wo = () => window.jQuery && !document.body.hasAttribute("data-bs-no-jquery") ? window.jQuery : null, So = /[^.]*(?=\..*)\.|.*/, vo = /\..*/, Ro = /::\d+$/, _e = {};
let pn = 1;
const Fn = {
  mouseenter: "mouseover",
  mouseleave: "mouseout"
}, Lo = /* @__PURE__ */ new Set([
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
function Un(e, n) {
  return n && `${n}::${pn++}` || e.uidEvent || pn++;
}
function Bn(e) {
  const n = Un(e);
  return e.uidEvent = n, _e[n] = _e[n] || {}, _e[n];
}
function Co(e, n) {
  return function o(r) {
    return Fe(r, { delegateTarget: e }), o.oneOff && N.off(e, r.type, n), n.apply(e, [r]);
  };
}
function Oo(e, n, o) {
  return function r(i) {
    const s = e.querySelectorAll(n);
    for (let { target: c } = i; c && c !== this; c = c.parentNode)
      for (const d of s)
        if (d === c)
          return Fe(i, { delegateTarget: c }), r.oneOff && N.off(e, i.type, n, o), o.apply(c, [i]);
  };
}
function qn(e, n, o = null) {
  return Object.values(e).find((r) => r.callable === n && r.delegationSelector === o);
}
function zn(e, n, o) {
  const r = typeof n == "string", i = r ? o : n || o;
  let s = Wn(e);
  return Lo.has(s) || (s = e), [r, i, s];
}
function mn(e, n, o, r, i) {
  if (typeof n != "string" || !e)
    return;
  let [s, c, d] = zn(n, o, r);
  n in Fn && (c = ((w) => function(S) {
    if (!S.relatedTarget || S.relatedTarget !== S.delegateTarget && !S.delegateTarget.contains(S.relatedTarget))
      return w.call(this, S);
  })(c));
  const u = Bn(e), f = u[d] || (u[d] = {}), T = qn(f, c, s ? o : null);
  if (T) {
    T.oneOff = T.oneOff && i;
    return;
  }
  const b = Un(c, n.replace(So, "")), g = s ? Oo(e, o, c) : Co(e, c);
  g.delegationSelector = s ? o : null, g.callable = c, g.oneOff = i, g.uidEvent = b, f[b] = g, e.addEventListener(d, g, s);
}
function Ie(e, n, o, r, i) {
  const s = qn(n[o], r, i);
  s && (e.removeEventListener(o, s, !!i), delete n[o][s.uidEvent]);
}
function No(e, n, o, r) {
  const i = n[o] || {};
  for (const [s, c] of Object.entries(i))
    s.includes(r) && Ie(e, n, o, c.callable, c.delegationSelector);
}
function Wn(e) {
  return e = e.replace(vo, ""), Fn[e] || e;
}
const N = {
  on(e, n, o, r) {
    mn(e, n, o, r, !1);
  },
  one(e, n, o, r) {
    mn(e, n, o, r, !0);
  },
  off(e, n, o, r) {
    if (typeof n != "string" || !e)
      return;
    const [i, s, c] = zn(n, o, r), d = c !== n, u = Bn(e), f = u[c] || {}, T = n.startsWith(".");
    if (typeof s < "u") {
      if (!Object.keys(f).length)
        return;
      Ie(e, u, c, s, i ? o : null);
      return;
    }
    if (T)
      for (const b of Object.keys(u))
        No(e, u, b, n.slice(1));
    for (const [b, g] of Object.entries(f)) {
      const A = b.replace(Ro, "");
      (!d || n.includes(A)) && Ie(e, u, c, g.callable, g.delegationSelector);
    }
  },
  trigger(e, n, o) {
    if (typeof n != "string" || !e)
      return null;
    const r = wo(), i = Wn(n), s = n !== i;
    let c = null, d = !0, u = !0, f = !1;
    s && r && (c = r.Event(n, o), r(e).trigger(c), d = !c.isPropagationStopped(), u = !c.isImmediatePropagationStopped(), f = c.isDefaultPrevented());
    const T = Fe(new Event(n, { bubbles: d, cancelable: !0 }), o);
    return f && T.preventDefault(), u && e.dispatchEvent(T), T.defaultPrevented && c && c.preventDefault(), T;
  }
};
function Fe(e, n = {}) {
  for (const [o, r] of Object.entries(n))
    try {
      e[o] = r;
    } catch {
      Object.defineProperty(e, o, {
        configurable: !0,
        get() {
          return r;
        }
      });
    }
  return e;
}
function Do(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ae = { exports: {} }, L = {}, hn;
function Io() {
  if (hn) return L;
  hn = 1;
  var e = { env: { NODE_ENV: "production" } };
  /**
   * @license React
   * react.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var n = Symbol.for("react.transitional.element"), o = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), c = Symbol.for("react.consumer"), d = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), T = Symbol.for("react.memo"), b = Symbol.for("react.lazy"), g = Symbol.for("react.activity"), A = Symbol.iterator;
  function w(a) {
    return a === null || typeof a != "object" ? null : (a = A && a[A] || a["@@iterator"], typeof a == "function" ? a : null);
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
  }, M = Object.assign, C = {};
  function K(a, p, R) {
    this.props = a, this.context = p, this.refs = C, this.updater = R || S;
  }
  K.prototype.isReactComponent = {}, K.prototype.setState = function(a, p) {
    if (typeof a != "object" && typeof a != "function" && a != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, a, p, "setState");
  }, K.prototype.forceUpdate = function(a) {
    this.updater.enqueueForceUpdate(this, a, "forceUpdate");
  };
  function dt() {
  }
  dt.prototype = K.prototype;
  function z(a, p, R) {
    this.props = a, this.context = p, this.refs = C, this.updater = R || S;
  }
  var Q = z.prototype = new dt();
  Q.constructor = z, M(Q, K.prototype), Q.isPureReactComponent = !0;
  var W = Array.isArray;
  function y() {
  }
  var _ = { H: null, A: null, T: null, S: null }, P = Object.prototype.hasOwnProperty;
  function U(a, p, R) {
    var v = R.ref;
    return {
      $$typeof: n,
      type: a,
      key: p,
      ref: v !== void 0 ? v : null,
      props: R
    };
  }
  function B(a, p) {
    return U(a.type, p, a.props);
  }
  function $(a) {
    return typeof a == "object" && a !== null && a.$$typeof === n;
  }
  function Dt(a) {
    var p = { "=": "=0", ":": "=2" };
    return "$" + a.replace(/[=:]/g, function(R) {
      return p[R];
    });
  }
  var bt = /\/+/g;
  function st(a, p) {
    return typeof a == "object" && a !== null && a.key != null ? Dt("" + a.key) : p.toString(36);
  }
  function pt(a) {
    switch (a.status) {
      case "fulfilled":
        return a.value;
      case "rejected":
        throw a.reason;
      default:
        switch (typeof a.status == "string" ? a.then(y, y) : (a.status = "pending", a.then(
          function(p) {
            a.status === "pending" && (a.status = "fulfilled", a.value = p);
          },
          function(p) {
            a.status === "pending" && (a.status = "rejected", a.reason = p);
          }
        )), a.status) {
          case "fulfilled":
            return a.value;
          case "rejected":
            throw a.reason;
        }
    }
    throw a;
  }
  function ct(a, p, R, v, I) {
    var k = typeof a;
    (k === "undefined" || k === "boolean") && (a = null);
    var H = !1;
    if (a === null) H = !0;
    else
      switch (k) {
        case "bigint":
        case "string":
        case "number":
          H = !0;
          break;
        case "object":
          switch (a.$$typeof) {
            case n:
            case o:
              H = !0;
              break;
            case b:
              return H = a._init, ct(
                H(a._payload),
                p,
                R,
                v,
                I
              );
          }
      }
    if (H)
      return I = I(a), H = v === "" ? "." + st(a, 0) : v, W(I) ? (R = "", H != null && (R = H.replace(bt, "$&/") + "/"), ct(I, p, R, "", function(q) {
        return q;
      })) : I != null && ($(I) && (I = B(
        I,
        R + (I.key == null || a && a.key === I.key ? "" : ("" + I.key).replace(
          bt,
          "$&/"
        ) + "/") + H
      )), p.push(I)), 1;
    H = 0;
    var lt = v === "" ? "." : v + ":";
    if (W(a))
      for (var tt = 0; tt < a.length; tt++)
        v = a[tt], k = lt + st(v, tt), H += ct(
          v,
          p,
          R,
          k,
          I
        );
    else if (tt = w(a), typeof tt == "function")
      for (a = tt.call(a), tt = 0; !(v = a.next()).done; )
        v = v.value, k = lt + st(v, tt++), H += ct(
          v,
          p,
          R,
          k,
          I
        );
    else if (k === "object") {
      if (typeof a.then == "function")
        return ct(
          pt(a),
          p,
          R,
          v,
          I
        );
      throw p = String(a), Error(
        "Objects are not valid as a React child (found: " + (p === "[object Object]" ? "object with keys {" + Object.keys(a).join(", ") + "}" : p) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return H;
  }
  function Tt(a, p, R) {
    if (a == null) return a;
    var v = [], I = 0;
    return ct(a, v, "", "", function(k) {
      return p.call(R, k, I++);
    }), v;
  }
  function Ut(a) {
    if (a._status === -1) {
      var p = a._result;
      p = p(), p.then(
        function(R) {
          (a._status === 0 || a._status === -1) && (a._status = 1, a._result = R);
        },
        function(R) {
          (a._status === 0 || a._status === -1) && (a._status = 2, a._result = R);
        }
      ), a._status === -1 && (a._status = 0, a._result = p);
    }
    if (a._status === 1) return a._result.default;
    throw a._result;
  }
  var Lt = typeof reportError == "function" ? reportError : function(a) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var p = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof a == "object" && a !== null && typeof a.message == "string" ? String(a.message) : String(a),
        error: a
      });
      if (!window.dispatchEvent(p)) return;
    } else if (typeof e == "object" && typeof e.emit == "function") {
      e.emit("uncaughtException", a);
      return;
    }
    console.error(a);
  }, F = {
    map: Tt,
    forEach: function(a, p, R) {
      Tt(
        a,
        function() {
          p.apply(this, arguments);
        },
        R
      );
    },
    count: function(a) {
      var p = 0;
      return Tt(a, function() {
        p++;
      }), p;
    },
    toArray: function(a) {
      return Tt(a, function(p) {
        return p;
      }) || [];
    },
    only: function(a) {
      if (!$(a))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return a;
    }
  };
  return L.Activity = g, L.Children = F, L.Component = K, L.Fragment = r, L.Profiler = s, L.PureComponent = z, L.StrictMode = i, L.Suspense = f, L.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = _, L.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(a) {
      return _.H.useMemoCache(a);
    }
  }, L.cache = function(a) {
    return function() {
      return a.apply(null, arguments);
    };
  }, L.cacheSignal = function() {
    return null;
  }, L.cloneElement = function(a, p, R) {
    if (a == null)
      throw Error(
        "The argument must be a React element, but you passed " + a + "."
      );
    var v = M({}, a.props), I = a.key;
    if (p != null)
      for (k in p.key !== void 0 && (I = "" + p.key), p)
        !P.call(p, k) || k === "key" || k === "__self" || k === "__source" || k === "ref" && p.ref === void 0 || (v[k] = p[k]);
    var k = arguments.length - 2;
    if (k === 1) v.children = R;
    else if (1 < k) {
      for (var H = Array(k), lt = 0; lt < k; lt++)
        H[lt] = arguments[lt + 2];
      v.children = H;
    }
    return U(a.type, I, v);
  }, L.createContext = function(a) {
    return a = {
      $$typeof: d,
      _currentValue: a,
      _currentValue2: a,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, a.Provider = a, a.Consumer = {
      $$typeof: c,
      _context: a
    }, a;
  }, L.createElement = function(a, p, R) {
    var v, I = {}, k = null;
    if (p != null)
      for (v in p.key !== void 0 && (k = "" + p.key), p)
        P.call(p, v) && v !== "key" && v !== "__self" && v !== "__source" && (I[v] = p[v]);
    var H = arguments.length - 2;
    if (H === 1) I.children = R;
    else if (1 < H) {
      for (var lt = Array(H), tt = 0; tt < H; tt++)
        lt[tt] = arguments[tt + 2];
      I.children = lt;
    }
    if (a && a.defaultProps)
      for (v in H = a.defaultProps, H)
        I[v] === void 0 && (I[v] = H[v]);
    return U(a, k, I);
  }, L.createRef = function() {
    return { current: null };
  }, L.forwardRef = function(a) {
    return { $$typeof: u, render: a };
  }, L.isValidElement = $, L.lazy = function(a) {
    return {
      $$typeof: b,
      _payload: { _status: -1, _result: a },
      _init: Ut
    };
  }, L.memo = function(a, p) {
    return {
      $$typeof: T,
      type: a,
      compare: p === void 0 ? null : p
    };
  }, L.startTransition = function(a) {
    var p = _.T, R = {};
    _.T = R;
    try {
      var v = a(), I = _.S;
      I !== null && I(R, v), typeof v == "object" && v !== null && typeof v.then == "function" && v.then(y, Lt);
    } catch (k) {
      Lt(k);
    } finally {
      p !== null && R.types !== null && (p.types = R.types), _.T = p;
    }
  }, L.unstable_useCacheRefresh = function() {
    return _.H.useCacheRefresh();
  }, L.use = function(a) {
    return _.H.use(a);
  }, L.useActionState = function(a, p, R) {
    return _.H.useActionState(a, p, R);
  }, L.useCallback = function(a, p) {
    return _.H.useCallback(a, p);
  }, L.useContext = function(a) {
    return _.H.useContext(a);
  }, L.useDebugValue = function() {
  }, L.useDeferredValue = function(a, p) {
    return _.H.useDeferredValue(a, p);
  }, L.useEffect = function(a, p) {
    return _.H.useEffect(a, p);
  }, L.useEffectEvent = function(a) {
    return _.H.useEffectEvent(a);
  }, L.useId = function() {
    return _.H.useId();
  }, L.useImperativeHandle = function(a, p, R) {
    return _.H.useImperativeHandle(a, p, R);
  }, L.useInsertionEffect = function(a, p) {
    return _.H.useInsertionEffect(a, p);
  }, L.useLayoutEffect = function(a, p) {
    return _.H.useLayoutEffect(a, p);
  }, L.useMemo = function(a, p) {
    return _.H.useMemo(a, p);
  }, L.useOptimistic = function(a, p) {
    return _.H.useOptimistic(a, p);
  }, L.useReducer = function(a, p, R) {
    return _.H.useReducer(a, p, R);
  }, L.useRef = function(a) {
    return _.H.useRef(a);
  }, L.useState = function(a) {
    return _.H.useState(a);
  }, L.useSyncExternalStore = function(a, p, R) {
    return _.H.useSyncExternalStore(
      a,
      p,
      R
    );
  }, L.useTransition = function() {
    return _.H.useTransition();
  }, L.version = "19.2.6", L;
}
var gn;
function xo() {
  return gn || (gn = 1, Ae.exports = Io()), Ae.exports;
}
xo();
/*! @license DOMPurify 3.4.11 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.4.11/LICENSE */
function yn(e, n) {
  (n == null || n > e.length) && (n = e.length);
  for (var o = 0, r = Array(n); o < n; o++) r[o] = e[o];
  return r;
}
function Mo(e) {
  if (Array.isArray(e)) return e;
}
function ko(e, n) {
  var o = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (o != null) {
    var r, i, s, c, d = [], u = !0, f = !1;
    try {
      if (s = (o = o.call(e)).next, n !== 0) for (; !(u = (r = s.call(o)).done) && (d.push(r.value), d.length !== n); u = !0) ;
    } catch (T) {
      f = !0, i = T;
    } finally {
      try {
        if (!u && o.return != null && (c = o.return(), Object(c) !== c)) return;
      } finally {
        if (f) throw i;
      }
    }
    return d;
  }
}
function Po() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ho(e, n) {
  return Mo(e) || ko(e, n) || Fo(e, n) || Po();
}
function Fo(e, n) {
  if (e) {
    if (typeof e == "string") return yn(e, n);
    var o = {}.toString.call(e).slice(8, -1);
    return o === "Object" && e.constructor && (o = e.constructor.name), o === "Map" || o === "Set" ? Array.from(e) : o === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o) ? yn(e, n) : void 0;
  }
}
const Gn = Object.entries, Tn = Object.setPrototypeOf, Uo = Object.isFrozen, Bo = Object.getPrototypeOf, qo = Object.getOwnPropertyDescriptor;
let nt = Object.freeze, ot = Object.seal, Ft = Object.create, jn = typeof Reflect < "u" && Reflect, xe = jn.apply, Me = jn.construct;
nt || (nt = function(n) {
  return n;
});
ot || (ot = function(n) {
  return n;
});
xe || (xe = function(n, o) {
  for (var r = arguments.length, i = new Array(r > 2 ? r - 2 : 0), s = 2; s < r; s++)
    i[s - 2] = arguments[s];
  return n.apply(o, i);
});
Me || (Me = function(n) {
  for (var o = arguments.length, r = new Array(o > 1 ? o - 1 : 0), i = 1; i < o; i++)
    r[i - 1] = arguments[i];
  return new n(...r);
});
const Gt = X(Array.prototype.forEach), zo = X(Array.prototype.lastIndexOf), En = X(Array.prototype.pop), Ht = X(Array.prototype.push), Wo = X(Array.prototype.splice), Rt = Array.isArray, $t = X(String.prototype.toLowerCase), we = X(String.prototype.toString), bn = X(String.prototype.match), jt = X(String.prototype.replace), _n = X(String.prototype.indexOf), Go = X(String.prototype.trim), jo = X(Number.prototype.toString), Yo = X(Boolean.prototype.toString), An = typeof BigInt > "u" ? null : X(BigInt.prototype.toString), wn = typeof Symbol > "u" ? null : X(Symbol.prototype.toString), J = X(Object.prototype.hasOwnProperty), Yt = X(Object.prototype.toString), et = X(RegExp.prototype.test), Nt = $o(TypeError);
function X(e) {
  return function(n) {
    n instanceof RegExp && (n.lastIndex = 0);
    for (var o = arguments.length, r = new Array(o > 1 ? o - 1 : 0), i = 1; i < o; i++)
      r[i - 1] = arguments[i];
    return xe(e, n, r);
  };
}
function $o(e) {
  return function() {
    for (var n = arguments.length, o = new Array(n), r = 0; r < n; r++)
      o[r] = arguments[r];
    return Me(e, o);
  };
}
function D(e, n) {
  let o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : $t;
  if (Tn && Tn(e, null), !Rt(n))
    return e;
  let r = n.length;
  for (; r--; ) {
    let i = n[r];
    if (typeof i == "string") {
      const s = o(i);
      s !== i && (Uo(n) || (n[r] = s), i = s);
    }
    e[i] = !0;
  }
  return e;
}
function Vo(e) {
  for (let n = 0; n < e.length; n++)
    J(e, n) || (e[n] = null);
  return e;
}
function it(e) {
  const n = Ft(null);
  for (const r of Gn(e)) {
    var o = Ho(r, 2);
    const i = o[0], s = o[1];
    J(e, i) && (Rt(s) ? n[i] = Vo(s) : s && typeof s == "object" && s.constructor === Object ? n[i] = it(s) : n[i] = s);
  }
  return n;
}
function Xo(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return jo(e);
    case "boolean":
      return Yo(e);
    case "bigint":
      return An ? An(e) : "0";
    case "symbol":
      return wn ? wn(e) : "Symbol()";
    case "undefined":
      return Yt(e);
    case "function":
    case "object": {
      if (e === null)
        return Yt(e);
      const n = e, o = yt(n, "toString");
      if (typeof o == "function") {
        const r = o(n);
        return typeof r == "string" ? r : Yt(r);
      }
      return Yt(e);
    }
    default:
      return Yt(e);
  }
}
function yt(e, n) {
  for (; e !== null; ) {
    const r = qo(e, n);
    if (r) {
      if (r.get)
        return X(r.get);
      if (typeof r.value == "function")
        return X(r.value);
    }
    e = Bo(e);
  }
  function o() {
    return null;
  }
  return o;
}
function Ko(e) {
  try {
    return et(e, ""), !0;
  } catch {
    return !1;
  }
}
const Sn = nt(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Se = nt(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), ve = nt(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Qo = nt(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), Re = nt(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), Zo = nt(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), vn = nt(["#text"]), Rn = nt(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), Le = nt(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Ln = nt(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), ne = nt(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), Jo = ot(/{{[\w\W]*|^[\w\W]*}}/g), tr = ot(/<%[\w\W]*|^[\w\W]*%>/g), er = ot(/\${[\w\W]*/g), nr = ot(/^data-[\-\w.\u00B7-\uFFFF]+$/), or = ot(/^aria-[\-\w]+$/), Cn = ot(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), rr = ot(/^(?:\w+script|data):/i), ir = ot(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), ar = ot(/^html$/i), sr = ot(/^[a-z][.\w]*(-[.\w]+)+$/i), On = ot(/<[/\w!]/g), cr = ot(/<[/\w]/g), lr = ot(/<\/no(script|embed|frames)/i), ur = ot(/\/>/i), gt = {
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
}, fr = function(n, o) {
  if (typeof n != "object" || typeof n.createPolicy != "function")
    return null;
  let r = null;
  const i = "data-tt-policy-suffix";
  o && o.hasAttribute(i) && (r = o.getAttribute(i));
  const s = "dompurify" + (r ? "#" + r : "");
  try {
    return n.createPolicy(s, {
      createHTML(c) {
        return c;
      },
      createScriptURL(c) {
        return c;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + s + " could not be created."), null;
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
}, St = function(n, o, r, i) {
  return J(n, o) && Rt(n[o]) ? D(i.base ? it(i.base) : {}, n[o], i.transform) : r;
};
function Yn() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : dr();
  const n = (h) => Yn(h);
  if (n.version = "3.4.11", n.removed = [], !e || !e.document || e.document.nodeType !== gt.document || !e.Element)
    return n.isSupported = !1, n;
  let o = e.document;
  const r = o, i = r.currentScript;
  e.DocumentFragment;
  const s = e.HTMLTemplateElement, c = e.Node, d = e.Element, u = e.NodeFilter, f = e.NamedNodeMap;
  f === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const T = e.DOMParser, b = e.trustedTypes, g = d.prototype, A = yt(g, "cloneNode"), w = yt(g, "remove"), S = yt(g, "nextSibling"), M = yt(g, "childNodes"), C = yt(g, "parentNode"), K = yt(g, "shadowRoot"), dt = yt(g, "attributes"), z = c && c.prototype ? yt(c.prototype, "nodeType") : null, Q = c && c.prototype ? yt(c.prototype, "nodeName") : null;
  if (typeof s == "function") {
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
    return P || (_ = fr(b, i), P = !0), _;
  }, st = o, pt = st.implementation, ct = st.createNodeIterator, Tt = st.createDocumentFragment, Ut = st.getElementsByTagName, Lt = r.importNode;
  let F = Nn();
  n.isSupported = typeof Gn == "function" && typeof C == "function" && pt && pt.createHTMLDocument !== void 0;
  const a = Jo, p = tr, R = er, v = nr, I = or, k = rr, H = ir, lt = sr;
  let tt = Cn, q = null;
  const ze = D({}, [...Sn, ...Se, ...ve, ...Re, ...vn]);
  let G = null;
  const We = D({}, [...Rn, ...Le, ...Ln, ...ne]);
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
  let je = !0, oe = !0, Ye = !1, $e = !0, At = !1, qt = !0, Ct = !1, re = !1, ie = null, ae = null, se = !1, It = !1, Xt = !1, Kt = !1, Ve = !0, Xe = !1;
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
  let Mt = ht, fe = !1, pe = null;
  const ao = D({}, [Qt, Zt, ht], we), tn = nt(["mi", "mo", "mn", "ms", "mtext"]);
  let me = D({}, tn);
  const en = nt(["annotation-xml"]);
  let he = D({}, en);
  const so = D({}, ["title", "style", "font", "a", "script"]);
  let zt = null;
  const co = ["application/xhtml+xml", "text/html"], lo = "text/html";
  let Y = null, kt = null;
  const uo = o.createElement("form"), nn = function(t) {
    return t instanceof RegExp || t instanceof Function;
  }, ge = function() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (kt && kt === t)
      return;
    (!t || typeof t != "object") && (t = {}), t = it(t), zt = // eslint-disable-next-line unicorn/prefer-includes
    co.indexOf(t.PARSER_MEDIA_TYPE) === -1 ? lo : t.PARSER_MEDIA_TYPE, Y = zt === "application/xhtml+xml" ? we : $t, q = St(t, "ALLOWED_TAGS", ze, {
      transform: Y
    }), G = St(t, "ALLOWED_ATTR", We, {
      transform: Y
    }), pe = St(t, "ALLOWED_NAMESPACES", ao, {
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
    }), xt = J(t, "USE_PROFILES") ? t.USE_PROFILES && typeof t.USE_PROFILES == "object" ? it(t.USE_PROFILES) : t.USE_PROFILES : !1, je = t.ALLOW_ARIA_ATTR !== !1, oe = t.ALLOW_DATA_ATTR !== !1, Ye = t.ALLOW_UNKNOWN_PROTOCOLS || !1, $e = t.ALLOW_SELF_CLOSE_IN_ATTR !== !1, At = t.SAFE_FOR_TEMPLATES || !1, qt = t.SAFE_FOR_XML !== !1, Ct = t.WHOLE_DOCUMENT || !1, It = t.RETURN_DOM || !1, Xt = t.RETURN_DOM_FRAGMENT || !1, Kt = t.RETURN_TRUSTED_TYPE || !1, se = t.FORCE_BODY || !1, Ve = t.SANITIZE_DOM !== !1, Xe = t.SANITIZE_NAMED_PROPS || !1, ce = t.KEEP_CONTENT !== !1, le = t.IN_PLACE || !1, tt = Ko(t.ALLOWED_URI_REGEXP) ? t.ALLOWED_URI_REGEXP : Cn, Mt = typeof t.NAMESPACE == "string" ? t.NAMESPACE : ht, me = J(t, "MATHML_TEXT_INTEGRATION_POINTS") && t.MATHML_TEXT_INTEGRATION_POINTS && typeof t.MATHML_TEXT_INTEGRATION_POINTS == "object" ? it(t.MATHML_TEXT_INTEGRATION_POINTS) : D({}, tn), he = J(t, "HTML_INTEGRATION_POINTS") && t.HTML_INTEGRATION_POINTS && typeof t.HTML_INTEGRATION_POINTS == "object" ? it(t.HTML_INTEGRATION_POINTS) : D({}, en);
    const l = J(t, "CUSTOM_ELEMENT_HANDLING") && t.CUSTOM_ELEMENT_HANDLING && typeof t.CUSTOM_ELEMENT_HANDLING == "object" ? it(t.CUSTOM_ELEMENT_HANDLING) : Ft(null);
    if (j = Ft(null), J(l, "tagNameCheck") && nn(l.tagNameCheck) && (j.tagNameCheck = l.tagNameCheck), J(l, "attributeNameCheck") && nn(l.attributeNameCheck) && (j.attributeNameCheck = l.attributeNameCheck), J(l, "allowCustomizedBuiltInElements") && typeof l.allowCustomizedBuiltInElements == "boolean" && (j.allowCustomizedBuiltInElements = l.allowCustomizedBuiltInElements), ot(j), At && (oe = !1), Xt && (It = !0), xt && (q = D({}, vn), G = Ft(null), xt.html === !0 && (D(q, Sn), D(G, Rn)), xt.svg === !0 && (D(q, Se), D(G, Le), D(G, ne)), xt.svgFilters === !0 && (D(q, ve), D(G, Le), D(G, ne)), xt.mathMl === !0 && (D(q, Re), D(G, Ln), D(G, ne))), _t.tagCheck = null, _t.attributeCheck = null, J(t, "ADD_TAGS") && (typeof t.ADD_TAGS == "function" ? _t.tagCheck = t.ADD_TAGS : Rt(t.ADD_TAGS) && (q === ze && (q = it(q)), D(q, t.ADD_TAGS, Y))), J(t, "ADD_ATTR") && (typeof t.ADD_ATTR == "function" ? _t.attributeCheck = t.ADD_ATTR : Rt(t.ADD_ATTR) && (G === We && (G = it(G)), D(G, t.ADD_ATTR, Y))), J(t, "ADD_URI_SAFE_ATTR") && Rt(t.ADD_URI_SAFE_ATTR) && D(de, t.ADD_URI_SAFE_ATTR, Y), J(t, "FORBID_CONTENTS") && Rt(t.FORBID_CONTENTS) && (mt === ue && (mt = it(mt)), D(mt, t.FORBID_CONTENTS, Y)), J(t, "ADD_FORBID_CONTENTS") && Rt(t.ADD_FORBID_CONTENTS) && (mt === ue && (mt = it(mt)), D(mt, t.ADD_FORBID_CONTENTS, Y)), ce && (q["#text"] = !0), Ct && D(q, ["html", "head", "body"]), q.table && (D(q, ["tbody"]), delete Bt.tbody), t.TRUSTED_TYPES_POLICY) {
      if (typeof t.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw Nt('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof t.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw Nt('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const m = W;
      W = t.TRUSTED_TYPES_POLICY;
      try {
        y = $("");
      } catch (E) {
        throw W = m, E;
      }
    } else t.TRUSTED_TYPES_POLICY === null ? (W = void 0, y = "") : (W === void 0 && (W = bt()), W && typeof y == "string" && (y = $("")));
    nt && nt(t), kt = t;
  }, on = D({}, [...Se, ...ve, ...Qo]), rn = D({}, [...Re, ...Zo]), fo = function(t, l, m) {
    return l.namespaceURI === ht ? t === "svg" : l.namespaceURI === Qt ? t === "svg" && (m === "annotation-xml" || me[m]) : !!on[t];
  }, po = function(t, l, m) {
    return l.namespaceURI === ht ? t === "math" : l.namespaceURI === Zt ? t === "math" && he[m] : !!rn[t];
  }, mo = function(t, l, m) {
    return l.namespaceURI === Zt && !he[m] || l.namespaceURI === Qt && !me[m] ? !1 : !rn[t] && (so[t] || !on[t]);
  }, ho = function(t) {
    let l = C(t);
    (!l || !l.tagName) && (l = {
      namespaceURI: Mt,
      tagName: "template"
    });
    const m = $t(t.tagName), E = $t(l.tagName);
    return pe[t.namespaceURI] ? t.namespaceURI === Zt ? fo(m, l, E) : t.namespaceURI === Qt ? po(m, l, E) : t.namespaceURI === ht ? mo(m, l, E) : !!(zt === "application/xhtml+xml" && pe[t.namespaceURI]) : !1;
  }, wt = function(t) {
    Ht(n.removed, {
      element: t
    });
    try {
      C(t).removeChild(t);
    } catch {
      if (w(t), !C(t))
        throw Nt("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, an = function(t) {
    const l = M(t);
    if (l) {
      const E = [];
      Gt(l, (O) => {
        Ht(E, O);
      }), Gt(E, (O) => {
        try {
          w(O);
        } catch {
        }
      });
    }
    const m = dt(t);
    if (m)
      for (let E = m.length - 1; E >= 0; --E) {
        const O = m[E], x = O && O.name;
        if (typeof x == "string")
          try {
            t.removeAttribute(x);
          } catch {
          }
      }
  }, Ot = function(t, l) {
    try {
      Ht(n.removed, {
        attribute: l.getAttributeNode(t),
        from: l
      });
    } catch {
      Ht(n.removed, {
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
        const E = l[m], O = E && E.name;
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
      const O = M(m);
      if (O)
        for (let x = O.length - 1; x >= 0; --x)
          l.push(O[x]);
    }
  }, sn = function(t) {
    let l = null, m = null;
    if (se)
      t = "<remove></remove>" + t;
    else {
      const x = bn(t, /^[\r\n\t ]+/);
      m = x && x[0];
    }
    zt === "application/xhtml+xml" && Mt === ht && (t = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + t + "</body></html>");
    const E = W ? $(t) : t;
    if (Mt === ht)
      try {
        l = new T().parseFromString(E, zt);
      } catch {
      }
    if (!l || !l.documentElement) {
      l = pt.createDocument(Mt, "template", null);
      try {
        l.documentElement.innerHTML = fe ? y : E;
      } catch {
      }
    }
    const O = l.body || l.documentElement;
    return t && m && O.insertBefore(o.createTextNode(m), O.childNodes[0] || null), Mt === ht ? Ut.call(l, Ct ? "html" : "body")[0] : Ct ? l.documentElement : O;
  }, cn = function(t) {
    return ct.call(
      t.ownerDocument || t,
      t,
      // eslint-disable-next-line no-bitwise
      u.SHOW_ELEMENT | u.SHOW_COMMENT | u.SHOW_TEXT | u.SHOW_PROCESSING_INSTRUCTION | u.SHOW_CDATA_SECTION,
      null
    );
  }, Jt = function(t) {
    return t = jt(t, a, " "), t = jt(t, p, " "), t = jt(t, R, " "), t;
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
    let E = m.nextNode();
    for (; E; )
      E.data = Jt(E.data), E = m.nextNode();
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
    t.childNodes !== M(t);
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
  function Et(h, t, l) {
    h.length !== 0 && Gt(h, (m) => {
      m.call(n, t, l, kt);
    });
  }
  const To = function(t, l) {
    return !!(qt && t.hasChildNodes() && !Wt(t.firstElementChild) && et(On, t.textContent) && et(On, t.innerHTML) || qt && t.namespaceURI === ht && l === "style" && Wt(t.firstElementChild) || t.nodeType === gt.processingInstruction || qt && t.nodeType === gt.comment && et(cr, t.data));
  }, Eo = function(t, l) {
    if (!Bt[l] && dn(l) && (j.tagNameCheck instanceof RegExp && et(j.tagNameCheck, l) || j.tagNameCheck instanceof Function && j.tagNameCheck(l)))
      return !1;
    if (ce && !mt[l]) {
      const m = C(t), E = M(t);
      if (E && m) {
        const O = E.length;
        for (let x = O - 1; x >= 0; --x) {
          const Z = le ? E[x] : A(E[x], !0);
          m.insertBefore(Z, S(t));
        }
      }
    }
    return wt(t), !0;
  }, ln = function(t) {
    if (Et(F.beforeSanitizeElements, t, null), te(t))
      return wt(t), !0;
    const l = Y(Q ? Q(t) : t.nodeName);
    if (Et(F.uponSanitizeElement, t, {
      tagName: l,
      allowedTags: q
    }), To(t, l))
      return wt(t), !0;
    if (Bt[l] || !(_t.tagCheck instanceof Function && _t.tagCheck(l)) && !q[l])
      return Eo(t, l);
    if ((z ? z(t) : t.nodeType) === gt.element && !ho(t) || (l === "noscript" || l === "noembed" || l === "noframes") && et(lr, t.innerHTML))
      return wt(t), !0;
    if (At && t.nodeType === gt.text) {
      const E = Jt(t.textContent);
      t.textContent !== E && (Ht(n.removed, {
        element: t.cloneNode()
      }), t.textContent = E);
    }
    return Et(F.afterSanitizeElements, t, null), !1;
  }, un = function(t, l, m) {
    if (Ge[l] || Ve && (l === "id" || l === "name") && (m in o || m in uo))
      return !1;
    const E = G[l] || _t.attributeCheck instanceof Function && _t.attributeCheck(l, t);
    if (!(oe && et(v, l))) {
      if (!(je && et(I, l))) {
        if (E) {
          if (!de[l]) {
            if (!et(tt, jt(m, H, ""))) {
              if (!((l === "src" || l === "xlink:href" || l === "href") && t !== "script" && _n(m, "data:") === 0 && Qe[t])) {
                if (!(Ye && !et(k, jt(m, H, "")))) {
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
  }, _o = function(t, l, m, E) {
    if (W && typeof b == "object" && typeof b.getAttributeType == "function" && !m)
      switch (b.getAttributeType(t, l)) {
        case "TrustedHTML":
          return $(E);
        case "TrustedScriptURL":
          return Dt(E);
      }
    return E;
  }, Ao = function(t, l, m, E) {
    try {
      m ? t.setAttributeNS(m, l, E) : t.setAttribute(l, E), te(t) ? wt(t) : En(n.removed);
    } catch {
      Ot(l, t);
    }
  }, fn = function(t) {
    Et(F.beforeSanitizeAttributes, t, null);
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
    let E = l.length;
    const O = Y(t.nodeName);
    for (; E--; ) {
      const x = l[E], Z = x.name, V = x.namespaceURI, ut = x.value, ft = Y(Z), Ee = ut;
      let rt = Z === "value" ? Ee : Go(Ee);
      if (m.attrName = ft, m.attrValue = rt, m.keepAttr = !0, m.forceKeepAttr = void 0, Et(F.uponSanitizeAttribute, t, m), rt = m.attrValue, Xe && (ft === "id" || ft === "name") && _n(rt, Ke) !== 0 && (Ot(Z, t), rt = Ke + rt), qt && et(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, rt)) {
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
        rt = _o(O, ft, V, rt), rt !== Ee && Ao(t, Z, V, rt);
      }
    }
    Et(F.afterSanitizeAttributes, t, null);
  }, ee = function(t) {
    let l = null;
    const m = cn(t);
    for (Et(F.beforeSanitizeShadowDOM, t, null); l = m.nextNode(); )
      if (Et(F.uponSanitizeShadowNode, l, null), ln(l), fn(l), Pt(l.content) && ee(l.content), (z ? z(l) : l.nodeType) === gt.element) {
        const O = K(l);
        Pt(O) && (Te(O), ee(O));
      }
    Et(F.afterSanitizeShadowDOM, t, null);
  }, Te = function(t) {
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
      const E = m.node, x = (z ? z(E) : E.nodeType) === gt.element, Z = M(E);
      if (Z)
        for (let V = Z.length - 1; V >= 0; --V)
          l.push({
            node: Z[V],
            shadow: null
          });
      if (x) {
        const V = Q ? Q(E) : null;
        if (typeof V == "string" && Y(V) === "template") {
          const ut = E.content;
          Pt(ut) && l.push({
            node: ut,
            shadow: null
          });
        }
      }
      if (x) {
        const V = K(E);
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
  return n.sanitize = function(h) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, l = null, m = null, E = null, O = null;
    if (fe = !h, fe && (h = "<!-->"), typeof h != "string" && !Wt(h) && (h = Xo(h), typeof h != "string"))
      throw Nt("dirty is not a string, aborting");
    if (!n.isSupported)
      return h;
    re ? (q = ie, G = ae) : ge(t), (F.uponSanitizeElement.length > 0 || F.uponSanitizeAttribute.length > 0) && (q = it(q)), F.uponSanitizeAttribute.length > 0 && (G = it(G)), n.removed = [];
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
        Te(h);
      } catch (ft) {
        throw an(h), ft;
      }
    } else if (Wt(h))
      l = sn("<!---->"), m = l.ownerDocument.importNode(h, !0), m.nodeType === gt.element && m.nodeName === "BODY" || m.nodeName === "HTML" ? l = m : l.appendChild(m), Te(m);
    else {
      if (!It && !At && !Ct && // eslint-disable-next-line unicorn/prefer-includes
      h.indexOf("<") === -1)
        return W && Kt ? $(h) : h;
      if (l = sn(h), !l)
        return It ? null : Kt ? y : "";
    }
    l && se && wt(l.firstChild);
    const Z = cn(x ? h : l);
    try {
      for (; E = Z.nextNode(); )
        ln(E), fn(E), Pt(E.content) && ee(E.content);
    } catch (ut) {
      throw x && an(h), ut;
    }
    if (x)
      return Gt(n.removed, (ut) => {
        ut.element && yo(ut.element);
      }), At && ye(h), h;
    if (It) {
      if (At && ye(l), Xt)
        for (O = Tt.call(l.ownerDocument); l.firstChild; )
          O.appendChild(l.firstChild);
      else
        O = l;
      return (G.shadowroot || G.shadowrootmode) && (O = Lt.call(r, O, !0)), O;
    }
    let V = Ct ? l.outerHTML : l.innerHTML;
    return Ct && q["!doctype"] && l.ownerDocument && l.ownerDocument.doctype && l.ownerDocument.doctype.name && et(ar, l.ownerDocument.doctype.name) && (V = "<!DOCTYPE " + l.ownerDocument.doctype.name + `>
` + V), At && (V = Jt(V)), W && Kt ? $(V) : V;
  }, n.setConfig = function() {
    let h = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    ge(h), re = !0, ie = q, ae = G;
  }, n.clearConfig = function() {
    kt = null, re = !1, ie = null, ae = null, W = _, y = "";
  }, n.isValidAttribute = function(h, t, l) {
    kt || ge({});
    const m = Y(h), E = Y(t);
    return un(m, E, l);
  }, n.addHook = function(h, t) {
    typeof t == "function" && J(F, h) && Ht(F[h], t);
  }, n.removeHook = function(h, t) {
    if (J(F, h)) {
      if (t !== void 0) {
        const l = zo(F[h], t);
        return l === -1 ? void 0 : Wo(F[h], l, 1)[0];
      }
      return En(F[h]);
    }
  }, n.removeHooks = function(h) {
    J(F, h) && (F[h] = []);
  }, n.removeAllHooks = function() {
    F = Nn();
  }, n;
}
Yn();
function pr(e) {
  if (e && typeof e.getBoundingClientRect == "function") {
    const { bottom: n, top: o } = e.getBoundingClientRect(), { offsetTop: r } = e;
    if (o < 0 && n > 0) {
      const i = e.style;
      e.style = `${i};transition: height 0s !important; overflow:hidden; height:${n}px!important;max-height:${n}px!important`, window.scrollTo({ behavior: "instant", top: r }), setTimeout(() => {
        e.style = i, window.scrollTo({
          behavior: "smooth",
          top: e.offsetTop - n / 2
        });
      }, 50);
    }
  }
}
var Ce = { exports: {} }, Oe, Dn;
function mr() {
  if (Dn) return Oe;
  Dn = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Oe = e, Oe;
}
var Ne, In;
function hr() {
  if (In) return Ne;
  In = 1;
  var e = /* @__PURE__ */ mr();
  function n() {
  }
  function o() {
  }
  return o.resetWarningCache = n, Ne = function() {
    function r(c, d, u, f, T, b) {
      if (b !== e) {
        var g = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw g.name = "Invariant Violation", g;
      }
    }
    r.isRequired = r;
    function i() {
      return r;
    }
    var s = {
      array: r,
      bigint: r,
      bool: r,
      func: r,
      number: r,
      object: r,
      string: r,
      symbol: r,
      any: r,
      arrayOf: i,
      element: r,
      elementType: r,
      instanceOf: i,
      node: r,
      objectOf: i,
      oneOf: i,
      oneOfType: i,
      shape: i,
      exact: i,
      checkPropTypes: o,
      resetWarningCache: n
    };
    return s.PropTypes = s, s;
  }, Ne;
}
var xn;
function gr() {
  return xn || (xn = 1, Ce.exports = /* @__PURE__ */ hr()()), Ce.exports;
}
var yr = /* @__PURE__ */ gr();
const at = /* @__PURE__ */ Do(yr);
at.shape({
  event: at.string,
  action: at.string,
  name: at.string,
  region: at.string,
  section: at.string,
  component: at.string,
  type: at.string,
  text: at.string
});
const Vt = ({ children: e }) => /* @__PURE__ */ React.createElement(React.Fragment, null, e);
Vt.propTypes = {
  children: at.oneOfType([
    at.arrayOf(at.node),
    at.node,
    at.string
  ])
};
var De = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var Mn;
function Tr() {
  return Mn || (Mn = 1, (function(e) {
    (function() {
      var n = {}.hasOwnProperty;
      function o() {
        for (var s = "", c = 0; c < arguments.length; c++) {
          var d = arguments[c];
          d && (s = i(s, r(d)));
        }
        return s;
      }
      function r(s) {
        if (typeof s == "string" || typeof s == "number")
          return s;
        if (typeof s != "object")
          return "";
        if (Array.isArray(s))
          return o.apply(null, s);
        if (s.toString !== Object.prototype.toString && !s.toString.toString().includes("[native code]"))
          return s.toString();
        var c = "";
        for (var d in s)
          n.call(s, d) && s[d] && (c = i(c, d));
        return c;
      }
      function i(s, c) {
        return c ? s ? s + " " + c : s + c : s;
      }
      e.exports ? (o.default = o, e.exports = o) : window.classNames = o;
    })();
  })(De)), De.exports;
}
Tr();
({
  ...Vt.propTypes
});
const $n = ({ children: e, className: n = "container", ...o }) => /* @__PURE__ */ React.createElement("div", { className: n, ...o }, /* @__PURE__ */ React.createElement("div", { className: "row" }, e));
$n.propTypes = {
  children: Vt.propTypes.children
};
({
  ...$n.propTypes
});
Vt.propTypes.children, at.oneOf(["0", "3", "4", "6", "8", "9", "12"]);
Vt.propTypes.children;
function Vn() {
  var Q, W;
  const o = ["asu-header", "asuHeader"].find((y) => document.getElementById(y)), r = document.getElementById(o), i = document.getElementById("uds-anchor-menu");
  if (!i || !r || Array.from(i.classList).some((y) => y.startsWith("sc-")))
    return;
  const s = Array.from(i.getElementsByClassName("nav-link")), c = /* @__PURE__ */ new Map();
  let d = !1;
  const u = () => Math.max(r.getBoundingClientRect().bottom, 0), f = () => {
    i.style.setProperty(
      "--uds-anchor-menu-top",
      u() + "px"
    ), i.classList.add("uds-anchor-menu-attached"), d = !0;
  }, T = () => {
    i.classList.remove("uds-anchor-menu-attached"), i.style.removeProperty("--uds-anchor-menu-top"), d = !1;
  }, b = ((Q = document.getElementById("toolbar-bar")) == null ? void 0 : Q.offsetHeight) || 0, g = ((W = document.getElementById("toolbar-item-administration-tray")) == null ? void 0 : W.offsetHeight) || 0, A = b + g, w = i.getBoundingClientRect().top + window.scrollY - A;
  for (let y of s) {
    const _ = y.getAttribute("href");
    if (!_ || !_.startsWith("#"))
      continue;
    const P = _.replace("#", ""), U = document.getElementById(P);
    U && c.set(y, U);
  }
  window.scrollY >= w - u() && f();
  function M(y, _ = 0) {
    if (!y || _ > 10)
      return 0;
    if (y.offsetHeight === 0 || y.offsetWidth === 0)
      return M(y.parentElement, _ + 1);
    const P = y.getBoundingClientRect(), U = window.innerHeight || document.documentElement.clientHeight, B = window.innerWidth || document.documentElement.clientWidth, $ = P.bottom - P.top, Dt = P.right - P.left, bt = $ * Dt, st = Math.min(U, P.bottom) - Math.max(0, P.top), pt = Math.min(B, P.right) - Math.max(0, P.left);
    return st * pt / bt * 100;
  }
  const C = function() {
    let y = 0, _ = null;
    if (s.forEach((U) => {
      const B = c.get(U);
      if (!B)
        return;
      const $ = M(B);
      $ > 0 && $ > y && (y = $, _ = B.id);
    }), _) {
      const U = document.querySelector(
        '[href="#' + _ + '"]'
      );
      U && U.classList.add("active"), i.querySelectorAll(
        'a.nav-link:not([href="#' + _ + '"])'
      ).forEach(function(B) {
        B.classList.remove("active");
      });
    }
    const P = w - u();
    !d && window.scrollY >= P ? f() : d && window.scrollY < P ? T() : d && i.style.setProperty(
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
      if (y === s[0]) {
        const ct = r.getBoundingClientRect().bottom, Tt = i.offsetHeight, Ut = ct + Tt, Lt = _.getBoundingClientRect().top, F = window.innerHeight / 2;
        if (Lt >= Ut && Lt <= F) {
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
      const st = i.querySelector(".nav-link.active");
      st && st.classList.remove("active"), P.target.classList.add("active");
      const pt = y.getAttribute("href");
      pt && history.replaceState(null, "", pt), z(_);
    });
  function z(y) {
    y.hasAttribute("tabindex") || (y.setAttribute("tabindex", "-1"), y.style.outline = "none"), y.focus({ preventScroll: !0 });
  }
}
N.on(window, "load.uds.anchor-menu", Vn);
function Xn() {
  const e = document.querySelectorAll('mark[class^="pen-"]'), n = new IntersectionObserver(
    (o) => {
      o.forEach((r) => {
        r.isIntersecting ? r.target.classList.add("animate-bg-in-scroll") : r.target.classList.remove("animate-bg-in-scroll");
      });
    },
    {
      threshold: 0.1
    }
  );
  e.forEach((o) => {
    n.observe(o);
  });
}
N.on(
  window,
  "load.uds.blockquote-animation",
  Xn
);
function Kn() {
  const e = [
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
  ], n = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ], o = ["Su", "M", "Tu", "W", "Th", "F", "Sa"], i = {
    month: (/* @__PURE__ */ new Date()).getMonth(),
    year: (/* @__PURE__ */ new Date()).getFullYear()
  }, s = (u, f) => {
    const T = /* @__PURE__ */ new Date(), b = [], g = new Date(u, f).getDay(), A = new Date(u, f + 1, 0).getDate(), w = new Date(u, f, 0).getDate();
    for (let S = 1; S <= g; S++) {
      const M = w - g + S, C = new Date(
        i.year,
        i.month - 1,
        M
      ).toLocaleString();
      b.push({ key: C, date: M, monthClass: "prev" });
    }
    for (let S = 1; S <= A; S++) {
      const M = new Date(i.year, i.month, S).toLocaleString();
      S === T.getDate() && i.month === T.getMonth() && i.year === T.getFullYear() ? b.push({
        key: M,
        date: S,
        monthClass: "current",
        todayClass: "today"
      }) : b.push({ key: M, date: S, monthClass: "current" });
    }
    if (b.length < 42) {
      const S = 42 - b.length;
      for (let M = 1; M <= S; M++) {
        const C = new Date(i.year, i.month + 1, M).toLocaleString();
        b.push({ key: C, date: M, monthClass: "next" });
      }
    }
    return b;
  }, c = () => {
    const u = document.getElementById("calendar");
    u && (u.innerHTML = `
      <h2><span class="highlight-black">${e[i.month]} ${i.year}</span></h2>
      <div class="calendar-grid">
        <div class="heading desktop">
          ${n.map((f) => `<p>${f}</p>`).join("")}
        </div>
        <div class="heading mobile">
          ${o.map((f) => `<p>${f}</p>`).join("")}
        </div>
        <div class="body">
          ${s(i.year, i.month).map(
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
    var f = new Date(i.year, i.month + u);
    i.year = f.getFullYear(), i.month = f.getMonth(), c();
  })(0);
}
N.on(window, "load.uds.calendar", Kn);
function Ue() {
  const e = document.querySelectorAll(".card-body");
  if (e.length === 0 && 0 < 3) {
    setTimeout(() => Ue(), 500);
    return;
  }
  if (e.length === 0) {
    console.warn("No .card-body found after 3 retries.");
    return;
  }
  e.forEach((o, r) => {
    const i = o.querySelector("div p"), s = i.textContent, c = window.getComputedStyle(o), d = parseInt(c.webkitLineClamp || c.lineClamp), u = parseFloat(c.lineHeight), f = parseFloat(c.fontSize), T = isNaN(u) ? parseFloat(c.lineHeight) * f : u, b = d * T;
    if (i.offsetHeight >= b) {
      let g = "";
      const A = s.split(" ");
      let w = 0, S = "";
      for (; w < A.length && Er(
        S + (S ? " " : "") + A[w],
        i
      ) <= b; )
        S += (S ? " " : "") + A[w], w++;
      g = S + "...";
      const M = `visible-text-${Math.random().toString(36).substring(7)}`, C = document.createElement("div");
      C.id = M, C.textContent = g, C.style.position = "absolute", C.style.top = `${i.offsetTop}px`, C.style.left = `${i.offsetLeft}px`, C.style.width = `${i.offsetWidth}px`, C.style.height = `${i.offsetHeight}px`, C.style.opacity = "0", C.style.pointerEvents = "none", C.style.zIndex = "1", o.appendChild(C), i.setAttribute("aria-describedby", M), i.setAttribute("aria-hidden", "true");
    }
  });
}
function Er(e, n) {
  const o = document.createElement(n.tagName);
  o.style.font = window.getComputedStyle(n).font, o.style.width = window.getComputedStyle(n).width, o.style.whiteSpace = "pre-wrap", o.textContent = e, document.body.appendChild(o);
  const r = o.offsetHeight;
  return document.body.removeChild(o), r;
}
N.on(window, "load.uds.card-bodies", Ue);
function Qn() {
  const e = document.querySelector(".info-layer"), n = document.getElementById("dispatch");
  N.on(n, "click", function() {
    e == null || e.classList.toggle("active");
  });
}
N.on(window, "load.uds.ranking-card", Qn);
function Zn() {
  be.Chart.register(...be.registerables);
  const e = 50;
  var n = document.getElementById("uds-donut");
  if (!n)
    return;
  document.getElementById("percentage-display").innerHTML = e + "%";
  const o = {
    type: "doughnut",
    data: {
      datasets: [
        {
          data: [e, 100 - e],
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
  new be.Chart(n, o);
}
N.on(window, "load.uds.chart", Zn);
function Jn() {
  function e({ target: o }) {
    const r = o.getAttribute("href");
    o.getAttribute("data-bs-toggle") !== "collapse" || !r || !r.includes("#") || pr(
      document.querySelector(".collapsing")
    );
  }
  function n(o) {
    const { target: r, key: i } = o;
    i !== " " && i !== "Spacebar" || r.tagName !== "A" || r.getAttribute("data-bs-toggle") !== "collapse" || (o.preventDefault(), r.click());
  }
  N.on(document, "click.uds.collapse", e), N.on(document, "keydown.uds.collapse", n);
}
N.on(window, "load.uds.collapse", Jn);
function Be() {
  var n, o, r, i;
  const e = (s) => {
    window.dataLayer = window.dataLayer || [];
    const { dataLayer: c } = window;
    c && c.push(s);
  };
  (n = document.querySelectorAll("[data-ga-header]")) == null || n.forEach(
    (s) => s.addEventListener("click", () => {
      const c = s.getAttribute("data-ga-header-event") || "link";
      let d = s.getAttribute("data-ga-header-action") || "click";
      const u = s.getAttribute("aria-expanded");
      u && (d = u === "false" ? "open" : "close");
      const f = s.getAttribute("data-ga-header-type") || "internal link", T = s.getAttribute("data-ga-header-section") || "main navbar", b = s.getAttribute("data-ga-header") || "", g = s.getAttribute("data-ga-header-component");
      e({
        name: "onclick",
        event: c.toLowerCase(),
        action: d.toLowerCase(),
        type: f.toLowerCase(),
        section: T.toLowerCase(),
        region: "navbar",
        text: b.toLowerCase(),
        ...g && {
          component: g.toLowerCase()
        }
      });
    })
  ), (o = document.querySelectorAll("[data-ga-input-header-event]")) == null || o.forEach(
    (s) => s.addEventListener("change", (c) => {
      const d = s.getAttribute("data-ga-input-header-event") || "", u = c.target.value || "";
      e({
        name: "onenter",
        action: "type",
        type: "main search",
        section: "topbar",
        region: "navbar",
        text: u.toLowerCase(),
        event: d.toLowerCase()
      });
    })
  ), (r = document.querySelectorAll("[data-ga]")) == null || r.forEach(
    (s) => s.addEventListener("click", () => {
      const c = {};
      Array.from(s.attributes).forEach((u) => {
        if (u.name.startsWith("data-ga-")) {
          const f = u.name.replace("data-ga-", ""), T = u.value;
          T && (c[f] = T.toLowerCase());
        } else if (u.name === "data-ga") {
          const f = u.value;
          f && (c.text = f.toLowerCase());
        }
      });
      const d = s.getAttribute("aria-expanded");
      d && (c.action = d === "false" ? "open" : "close"), e(c);
    })
  ), (i = document.querySelectorAll("[data-ga-input]")) == null || i.forEach(
    (s) => s.addEventListener("change", (c) => {
      const d = s.getAttribute("data-ga-input-name") || "", u = s.getAttribute("data-ga-input-action") || "", f = s.getAttribute("data-ga-input") || "", T = s.getAttribute("data-ga-input-region") || "", b = s.getAttribute("data-ga-input-section") || "";
      let g = s.getAttribute("data-ga-input-event") || "", A;
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
      e({
        name: d.toLowerCase(),
        event: g.toLowerCase(),
        action: u.toLowerCase(),
        type: f.toLowerCase(),
        section: b.toLowerCase(),
        region: T.toLowerCase(),
        text: A.toLowerCase()
      });
    })
  ), document.querySelectorAll("[data-ga-footer]").forEach(
    (s) => s.addEventListener("focus", () => {
      const c = {
        type: s.getAttribute("data-ga-footer-type").toLowerCase(),
        section: s.getAttribute("data-ga-footer-section").toLowerCase(),
        text: s.getAttribute("data-ga-footer").toLowerCase()
      };
      e({
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
  const e = () => {
    const o = document.getElementById("asu-header");
    window.scrollY > (o == null ? void 0 : o.getBoundingClientRect().top) ? o == null || o.classList.add("scrolled") : o == null || o.classList.remove("scrolled");
  };
  N.on(window, "scroll.uds.header", e), document.querySelectorAll(
    ".uds-header-v2 .header-top-search .search-button"
  ).forEach((o) => {
    o.addEventListener("click", () => {
      const r = o.closest(".header-top-search");
      if (r) {
        r.classList.add("open");
        const i = r.querySelector(".search-input");
        i && i.focus();
      }
    });
  }), document.querySelectorAll(".uds-header-v2 .navbar-mobile-search input[type=search]").forEach((o) => {
    o.addEventListener("input", () => {
      const r = o.closest(".navbar-mobile-search");
      r && (o.value.length > 0 ? r.classList.add("has-value") : r.classList.remove("has-value"));
    });
  }), document.querySelectorAll(".uds-header-v2 .header-top-search .search-input").forEach((o) => {
    o.addEventListener("blur", () => {
      if (!o.value) {
        const r = o.closest(".header-top-search");
        r && setTimeout(() => r.classList.remove("open"), 200);
      }
    });
  });
};
window.initGlobalHeader = window.initGlobalHeader || qe;
N.on(window, "load.uds.global-header", qe);
function to() {
  const e = ".uds-video-hero", n = e + " video", o = e + " #playHeroVid", r = e + " #pauseHeroVid", i = "click", s = "block", c = "none", d = document.querySelector(n), u = document.querySelector(o), f = document.querySelector(r);
  function T(w) {
    w.paused ? w.play() : w.pause();
  }
  function b(w, S) {
    getComputedStyle(w).display === c ? (S.style.display = c, w.style.display = s, w.focus()) : (w.style.display = c, S.style.display = s, S.focus());
  }
  function g(w) {
    w.stopPropagation(), b(u, f), T(d);
  }
  function A(w) {
    w.stopPropagation(), b(u, f), T(d);
  }
  f == null || f.addEventListener(i, g), u == null || u.addEventListener(i, A);
}
N.on(window, "load.uds.heroes-video", to);
const eo = () => {
  const n = () => {
    document.querySelectorAll(".parallax-container").forEach((c) => {
      const d = c.querySelector("img"), u = c.offsetHeight - d.height * 1.2, f = d.dataset.parallaxType === "scroll-to" ? window.innerHeight : window.innerHeight + c.offsetHeight, T = c.getBoundingClientRect().top, g = (window.innerHeight - T) / f;
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
    let T = d.offsetWidth / u, b = 0, g = f * T, A = u * T;
    const w = +c.dataset.parallaxFactor || 1.2;
    !c.dataset.noScale && g < d.offsetHeight * w && (T = d.offsetHeight * w / g, g *= T, A *= T, b = (A - d.offsetWidth) / 2 * -1), c.style.height = g + "px", c.style.left = b + "px";
  }, r = () => {
    document.querySelectorAll(".parallax-container img").forEach((c, d) => {
      c.complete ? o(c) : c.onload = () => o(c);
    });
  }, i = (c) => {
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
      i(d);
    })
  ), r(), N.on(window, "resize.uds.image-parallax", r), N.on(window, "scroll.uds.image-parallax", n);
};
N.on(window, "load.uds.image-parallax", eo);
function no() {
  var e, n;
  (e = document.getElementById("openModalButton")) == null || e.addEventListener("click", function() {
    document.getElementById("uds-modal").classList.add("open");
  }), (n = document.getElementById("closeModalButton")) == null || n.addEventListener("click", function() {
    document.getElementById("uds-modal").classList.remove("open");
  });
}
N.on(window, "load.uds.modals", no);
let kn = !1;
const Pn = 282;
function br(e, n) {
  const o = getComputedStyle(n), r = parseFloat(o.columnGap || o.gap) || 8, i = n.querySelector(".more-dropdown-button"), s = i ? Math.round(i.getBoundingClientRect().width) : 83;
  return { tabGap: r, moreBtnWidth: s };
}
function _r(e, n) {
  let o = e.querySelector(".uds-more-dropdown");
  if (!o) {
    o = document.createElement("div"), o.className = "uds-more-dropdown";
    const r = document.createElement("button");
    r.type = "button", r.className = "uds-tab more-dropdown-button", r.setAttribute("aria-haspopup", "true"), r.setAttribute("aria-expanded", "false"), r.setAttribute("aria-controls", "more-dropdown-menu"), r.innerHTML = '<span class="more-dropdown-button-inner"><span aria-hidden="true">More</span><i aria-hidden="true" class="fas fa-chevron-down more-dropdown-icon"></i></span><span class="more-dropdown-button-indicator" aria-hidden="true"></span>';
    const i = document.createElement("ul");
    i.id = "more-dropdown-menu", i.className = "more-dropdown-menu uds-more-dropdown-list", i.setAttribute("role", "menu"), i.setAttribute("aria-label", "More tabs"), i.setAttribute("aria-hidden", "true"), o.appendChild(r), o.appendChild(i), e.appendChild(o);
  }
  if (!o.hasAttribute("data-uds-events-wired")) {
    o.setAttribute("data-uds-events-wired", "true");
    const r = o.querySelector(".more-dropdown-button"), i = o.querySelector(".more-dropdown-menu");
    Ar(o, r, i);
  }
  return {
    wrapper: o,
    button: o.querySelector(".more-dropdown-button"),
    menu: o.querySelector(".more-dropdown-menu")
  };
}
function Ar(e, n, o) {
  N.on(n, "click.uds.tabbed-panels-v2", (i) => {
    i.preventDefault();
    const s = n.getAttribute("aria-expanded") !== "true";
    vt(n, o, s);
  }), N.on(n, "keydown.uds.tabbed-panels-v2", (i) => {
    var d, u;
    const s = n.getAttribute("aria-expanded") === "true", c = Array.from(o.querySelectorAll('[role="menuitem"]'));
    switch (i.key) {
      case "Enter":
      case " ":
        i.preventDefault(), s ? vt(n, o, !1) : (vt(n, o, !0), requestAnimationFrame(() => {
          var f;
          return (f = c[0]) == null ? void 0 : f.focus();
        }));
        break;
      case "ArrowDown":
        s && (i.preventDefault(), (d = c[0]) == null || d.focus());
        break;
      case "ArrowUp":
        s && (i.preventDefault(), (u = c[c.length - 1]) == null || u.focus());
        break;
      case "Escape":
        s && (i.preventDefault(), vt(n, o, !1), n.focus());
        break;
    }
  });
  const r = (i) => {
    e.contains(i.target) || vt(n, o, !1);
  };
  N.on(document, "mousedown.uds.tabbed-panels-v2", r), N.on(document, "touchstart.uds.tabbed-panels-v2", r), N.on(o, "keydown.uds.tabbed-panels-v2", (i) => {
    var d, u;
    const s = Array.from(o.querySelectorAll('[role="menuitem"]')), c = s.indexOf(document.activeElement);
    switch (i.key) {
      case "ArrowDown":
        i.preventDefault(), (s[c + 1] ?? s[0]).focus();
        break;
      case "ArrowUp":
        i.preventDefault(), (s[c - 1] ?? s[s.length - 1]).focus();
        break;
      case "Home":
        i.preventDefault(), (d = s[0]) == null || d.focus();
        break;
      case "End":
        i.preventDefault(), (u = s[s.length - 1]) == null || u.focus();
        break;
      case "Escape":
        i.preventDefault(), vt(n, o, !1), n.focus();
        break;
      case "Tab":
        vt(n, o, !1);
        break;
    }
  });
}
function vt(e, n, o) {
  e.setAttribute("aria-expanded", String(o)), n.setAttribute("aria-hidden", String(!o)), n.classList.toggle("open", o);
}
function Hn(e) {
  if (e.hasAttribute("data-react")) return;
  const n = e.querySelector(".nav.nav-tabs");
  if (!n) return;
  const o = Array.from(n.querySelectorAll("button.nav-link"));
  if (o.length === 0) return;
  e.classList.contains("uds-tabbed-panels-dark");
  const { wrapper: r, button: i, menu: s } = _r(n);
  o.forEach((y) => {
    y.style.display = "", y.removeAttribute("aria-hidden"), y.removeAttribute("tabindex"), y.removeAttribute("inert");
  });
  const c = n.clientWidth, { moreBtnWidth: d, tabGap: u } = br(e, n), f = o.map((y) => y.getBoundingClientRect().width || 80), T = [], b = [];
  let g = 0;
  for (let y = 0; y < o.length; y++) {
    const _ = f[y];
    if (g + _ + d > c) {
      for (let P = y; P < o.length; P++)
        b.push(o[P].id);
      break;
    }
    T.push(o[y].id), g += _ + u;
  }
  if (o.forEach((y) => {
    b.includes(y.id) && (y.style.display = "none", y.setAttribute("tabindex", "-1"), y.setAttribute("aria-hidden", "true"), y.setAttribute("inert", ""));
  }), b.length === 0) {
    r.classList.add("uds-more-dropdown-hidden"), r.setAttribute("aria-hidden", "true");
    return;
  }
  r.classList.remove("uds-more-dropdown-hidden"), r.removeAttribute("aria-hidden");
  const A = r.getBoundingClientRect(), w = A.left + Pn <= window.innerWidth, S = A.left + Pn <= 1200, C = e.getBoundingClientRect().width < 1200;
  r.classList.toggle(
    "dropdown-open-right",
    C && w && S
  );
  const K = n.querySelector("button.nav-link.active"), dt = (K == null ? void 0 : K.id) ?? "", z = b.includes(dt);
  i.classList.toggle("active", z);
  const Q = b.length;
  i.setAttribute(
    "aria-label",
    `More, ${Q} additional tab${Q !== 1 ? "s" : ""}`
  );
  const W = z ? T[0] : dt;
  o.forEach((y) => {
    b.includes(y.id) || y.setAttribute("tabindex", y.id === W ? "0" : "-1");
  }), s.innerHTML = "", b.forEach((y) => {
    const _ = n.querySelector(`#${CSS.escape(y)}`);
    if (!_) return;
    const P = y === dt, U = document.createElement("li");
    U.setAttribute("role", "none");
    const B = document.createElement("button");
    B.type = "button", B.setAttribute("role", "menuitem"), B.setAttribute("tabindex", "-1"), B.className = "more-dropdown-item", B.dataset.tabId = y, P && B.setAttribute("aria-current", "true"), B.textContent = _.textContent.trim(), N.on(B, "click.uds.tabbed-panels-v2", ($) => {
      $.preventDefault(), vt(i, s, !1), i.focus(), ke(e, y), Pe(n, y, i, s);
    }), U.appendChild(B), s.appendChild(U);
  });
}
function ke(e, n) {
  var d, u;
  const o = e.querySelector(".nav.nav-tabs"), r = ((d = e.closest("div")) == null ? void 0 : d.querySelector(".tab-content")) ?? ((u = e.parentElement) == null ? void 0 : u.querySelector(".tab-content"));
  o.querySelectorAll("button.nav-link").forEach((f) => {
    f.classList.remove("active"), f.setAttribute("aria-selected", "false");
  }), r == null || r.querySelectorAll(".tab-pane").forEach((f) => {
    f.classList.remove("show", "active");
  });
  const i = o.querySelector(`#${CSS.escape(n)}`);
  i == null || i.classList.add("active"), i == null || i.setAttribute("aria-selected", "true");
  const s = `nav-${n}`, c = r == null ? void 0 : r.querySelector(`#${CSS.escape(s)}`);
  c == null || c.classList.add("show", "active");
}
function Pe(e, n, o, r) {
  const i = Array.from(r.querySelectorAll('[role="menuitem"]'));
  i.forEach((c) => {
    c.dataset.tabId === n ? c.setAttribute("aria-current", "true") : c.removeAttribute("aria-current");
  });
  const s = i.some(
    (c) => c.hasAttribute("aria-current")
  );
  o.classList.toggle("active", s);
}
function wr(e) {
  const n = e.querySelector(".nav.nav-tabs");
  if (!n) return;
  function o(r) {
    var u;
    if (((u = r.target) == null ? void 0 : u.getAttribute("role")) !== "tab" || !["ArrowRight", "ArrowLeft", "Home", "End"].includes(r.key)) return;
    r.preventDefault(), r.stopImmediatePropagation();
    const s = Array.from(
      n.querySelectorAll("button.nav-link")
    ).filter((f) => f.style.display !== "none"), c = s.indexOf(r.target);
    if (c === -1) return;
    let d = null;
    if (r.key === "ArrowRight" ? d = s[c + 1] ?? s[0] : r.key === "ArrowLeft" ? d = s[c - 1] ?? s[s.length - 1] : r.key === "Home" ? d = s[0] : r.key === "End" && (d = s[s.length - 1]), d && d !== r.target) {
      r.target.setAttribute("tabindex", "-1"), d.setAttribute("tabindex", "0"), d.focus(), ke(e, d.id);
      const f = n.querySelector(".more-dropdown-button"), T = n.querySelector(".more-dropdown-menu");
      f && T && Pe(n, d.id, f, T);
    }
  }
  n.addEventListener("keydown", o, !0), N.on(n, "click.uds.tabbed-panels-v2", (r) => {
    var d;
    const i = (d = r.target) == null ? void 0 : d.closest("button.nav-link");
    if (!i || i.style.display === "none") return;
    r.preventDefault(), ke(e, i.id);
    const s = n.querySelector(".more-dropdown-button"), c = n.querySelector(".more-dropdown-menu");
    s && c && Pe(n, i.id, s, c);
  });
}
function He() {
  if (document.querySelectorAll(
    ".uds-tabbed-panels:not([data-react]):not([data-uds-v2-init])"
  ).forEach((n) => {
    n.setAttribute("data-uds-v2-init", "true"), Hn(n), wr(n);
  }), !kn) {
    kn = !0;
    let n;
    N.on(window, "resize.uds.tabbed-panels-v2", () => {
      clearTimeout(n), n = setTimeout(() => {
        document.querySelectorAll(".uds-tabbed-panels:not([data-react])").forEach(Hn);
      }, 100);
    });
  }
}
document.readyState === "complete" ? setTimeout(He, 0) : N.on(window, "load.uds.tabbed-panels-v2", He);
function oo() {
  function e() {
    const r = ".uds-table-fixed-wrapper", i = ".uds-table.uds-table-fixed table", s = ".scroll-control.previous";
    document.querySelectorAll(r).forEach((d, u) => {
      const f = d.querySelector(i);
      f.setAttribute("id", "uds-table-" + u);
      const T = f.querySelector("tbody tr > *"), b = d.querySelector(s);
      b.style.left = T.offsetWidth + "px";
    });
  }
  function n() {
    const r = ".uds-table-fixed", i = ".uds-table-fixed-wrapper", s = ".scroll-control.previous", c = ".scroll-control.next";
    document.querySelectorAll(i).forEach((u, f) => {
      const T = u.querySelector(r), b = u.querySelector(s), g = u.querySelector(c);
      ["click", "focus"].forEach((A) => {
        N.on(b, A, function() {
          T.scrollLeft -= 100;
        }), N.on(g, A, function() {
          T.scrollLeft += 100;
        });
      });
    });
  }
  function o(r, i) {
    let s;
    return (...c) => {
      clearTimeout(s), s = setTimeout(() => {
        r.apply(this, c);
      }, i);
    };
  }
  e(), n(), N.on(window, "resize", function() {
    o(e, 100)();
  });
}
N.on(window, "load.uds.fixed-table", oo);
function ro() {
  const o = ".uds-tooltip-container", i = "[aria-describedby]", d = document.querySelectorAll(
    `${o} > ${i} + [role=tooltip]`
  );
  function u() {
    document.querySelectorAll(
      `${i}[aria-expanded="true"]`
    ).forEach((A) => {
      A.setAttribute("aria-expanded", "false");
    });
  }
  function f(g) {
    let A = g.target.querySelector(`${o} ${i}`) || g.target, w = A.nextElementSibling;
    g.type === "keydown" && g.key !== " " || (u(), A.getBoundingClientRect().right + 288 > window.innerWidth ? w.classList.add("bottom-placement") : w.classList.remove("bottom-placement"), A.setAttribute("aria-expanded", "true"));
  }
  function T(g) {
    let A = g.target.querySelector(`${o} ${i}`) || g.target;
    g.type === "mouseleave" && A === document.activeElement || A.setAttribute("aria-expanded", "false");
  }
  function b(g) {
    g.key === "Escape" && T(g);
  }
  [...d].map((g) => {
    const A = new AbortController(), { signal: w } = A, S = g.previousElementSibling, M = S.parentElement;
    return S.addEventListener("mouseenter", f, { signal: w }), S.addEventListener("focus", f, { signal: w }), S.addEventListener("keydown", f, { signal: w }), S.addEventListener("blur", T, { signal: w }), S.addEventListener("keydown", b, { signal: w }), M.addEventListener("mouseleave", T, { signal: w }), A;
  });
}
N.on(window, "load.uds.tooltips", ro);
function io() {
  const e = ".uds-video-player", n = e + " video", o = e + " .uds-video-btn-play", r = e + " .uds-video-overlay", i = "click", s = "ended", c = "flex", d = "none", u = document.querySelector(n), f = document.querySelector(r), T = document.querySelector(o);
  function b(C) {
    C.style.display === d ? C.style.display = c : C.style.display = d;
  }
  function g(C) {
    C.paused ? C.play() : C.pause();
  }
  function A(C) {
    g(this), b(this.nextElementSibling);
  }
  function w(C) {
    C.stopPropagation();
    const K = this.parentNode;
    b(K), g(u);
  }
  function S(C) {
    b(this), g(u);
  }
  function M(C) {
    b(f);
  }
  u == null || u.addEventListener(i, A), T == null || T.addEventListener(i, w), f == null || f.addEventListener(i, S), u == null || u.addEventListener(s, M);
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
