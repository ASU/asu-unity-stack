import * as Te from "chart.js";
const yo = () => window.jQuery && !document.body.hasAttribute("data-bs-no-jquery") ? window.jQuery : null, Eo = /[^.]*(?=\..*)\.|.*/, To = /\..*/, _o = /::\d+$/, _e = {};
let ln = 1;
const In = {
  mouseenter: "mouseover",
  mouseleave: "mouseout"
}, Ao = /* @__PURE__ */ new Set([
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
function Dn(e, n) {
  return n && `${n}::${ln++}` || e.uidEvent || ln++;
}
function Mn(e) {
  const n = Dn(e);
  return e.uidEvent = n, _e[n] = _e[n] || {}, _e[n];
}
function bo(e, n) {
  return function r(s) {
    return xe(s, { delegateTarget: e }), r.oneOff && F.off(e, s.type, n), n.apply(e, [s]);
  };
}
function So(e, n, r) {
  return function s(a) {
    const l = e.querySelectorAll(n);
    for (let { target: c } = a; c && c !== this; c = c.parentNode)
      for (const h of l)
        if (h === c)
          return xe(a, { delegateTarget: c }), s.oneOff && F.off(e, a.type, n, r), r.apply(c, [a]);
  };
}
function xn(e, n, r = null) {
  return Object.values(e).find((s) => s.callable === n && s.delegationSelector === r);
}
function Pn(e, n, r) {
  const s = typeof n == "string", a = s ? r : n || r;
  let l = kn(e);
  return Ao.has(l) || (l = e), [s, a, l];
}
function un(e, n, r, s, a) {
  if (typeof n != "string" || !e)
    return;
  let [l, c, h] = Pn(n, r, s);
  n in In && (c = ((b) => function(E) {
    if (!E.relatedTarget || E.relatedTarget !== E.delegateTarget && !E.delegateTarget.contains(E.relatedTarget))
      return b.call(this, E);
  })(c));
  const u = Mn(e), m = u[h] || (u[h] = {}), y = xn(m, c, l ? r : null);
  if (y) {
    y.oneOff = y.oneOff && a;
    return;
  }
  const _ = Dn(c, n.replace(Eo, "")), g = l ? So(e, r, c) : bo(e, c);
  g.delegationSelector = l ? r : null, g.callable = c, g.oneOff = a, g.uidEvent = _, m[_] = g, e.addEventListener(h, g, l);
}
function Ie(e, n, r, s, a) {
  const l = xn(n[r], s, a);
  l && (e.removeEventListener(r, l, !!a), delete n[r][l.uidEvent]);
}
function wo(e, n, r, s) {
  const a = n[r] || {};
  for (const [l, c] of Object.entries(a))
    l.includes(s) && Ie(e, n, r, c.callable, c.delegationSelector);
}
function kn(e) {
  return e = e.replace(To, ""), In[e] || e;
}
const F = {
  on(e, n, r, s) {
    un(e, n, r, s, !1);
  },
  one(e, n, r, s) {
    un(e, n, r, s, !0);
  },
  off(e, n, r, s) {
    if (typeof n != "string" || !e)
      return;
    const [a, l, c] = Pn(n, r, s), h = c !== n, u = Mn(e), m = u[c] || {}, y = n.startsWith(".");
    if (typeof l < "u") {
      if (!Object.keys(m).length)
        return;
      Ie(e, u, c, l, a ? r : null);
      return;
    }
    if (y)
      for (const _ of Object.keys(u))
        wo(e, u, _, n.slice(1));
    for (const [_, g] of Object.entries(m)) {
      const w = _.replace(_o, "");
      (!h || n.includes(w)) && Ie(e, u, c, g.callable, g.delegationSelector);
    }
  },
  trigger(e, n, r) {
    if (typeof n != "string" || !e)
      return null;
    const s = yo(), a = kn(n), l = n !== a;
    let c = null, h = !0, u = !0, m = !1;
    l && s && (c = s.Event(n, r), s(e).trigger(c), h = !c.isPropagationStopped(), u = !c.isImmediatePropagationStopped(), m = c.isDefaultPrevented());
    const y = xe(new Event(n, { bubbles: h, cancelable: !0 }), r);
    return m && y.preventDefault(), u && e.dispatchEvent(y), y.defaultPrevented && c && c.preventDefault(), y;
  }
};
function xe(e, n = {}) {
  for (const [r, s] of Object.entries(n))
    try {
      e[r] = s;
    } catch {
      Object.defineProperty(e, r, {
        configurable: !0,
        get() {
          return s;
        }
      });
    }
  return e;
}
function vo(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ae = { exports: {} }, O = {}, fn;
function Lo() {
  if (fn) return O;
  fn = 1;
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
  var n = Symbol.for("react.transitional.element"), r = Symbol.for("react.portal"), s = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), l = Symbol.for("react.profiler"), c = Symbol.for("react.consumer"), h = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), m = Symbol.for("react.suspense"), y = Symbol.for("react.memo"), _ = Symbol.for("react.lazy"), g = Symbol.for("react.activity"), w = Symbol.iterator;
  function b(o) {
    return o === null || typeof o != "object" ? null : (o = w && o[w] || o["@@iterator"], typeof o == "function" ? o : null);
  }
  var E = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, v = Object.assign, S = {};
  function W(o, f, R) {
    this.props = o, this.context = f, this.refs = S, this.updater = R || E;
  }
  W.prototype.isReactComponent = {}, W.prototype.setState = function(o, f) {
    if (typeof o != "object" && typeof o != "function" && o != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, o, f, "setState");
  }, W.prototype.forceUpdate = function(o) {
    this.updater.enqueueForceUpdate(this, o, "forceUpdate");
  };
  function ut() {
  }
  ut.prototype = W.prototype;
  function k(o, f, R) {
    this.props = o, this.context = f, this.refs = S, this.updater = R || E;
  }
  var Q = k.prototype = new ut();
  Q.constructor = k, v(Q, W.prototype), Q.isPureReactComponent = !0;
  var Y = Array.isArray;
  function C() {
  }
  var A = { H: null, A: null, T: null, S: null }, I = Object.prototype.hasOwnProperty;
  function U(o, f, R) {
    var L = R.ref;
    return {
      $$typeof: n,
      type: o,
      key: f,
      ref: L !== void 0 ? L : null,
      props: R
    };
  }
  function Z(o, f) {
    return U(o.type, f, o.props);
  }
  function q(o) {
    return typeof o == "object" && o !== null && o.$$typeof === n;
  }
  function st(o) {
    var f = { "=": "=0", ":": "=2" };
    return "$" + o.replace(/[=:]/g, function(R) {
      return f[R];
    });
  }
  var et = /\/+/g;
  function K(o, f) {
    return typeof o == "object" && o !== null && o.key != null ? st("" + o.key) : f.toString(36);
  }
  function ht(o) {
    switch (o.status) {
      case "fulfilled":
        return o.value;
      case "rejected":
        throw o.reason;
      default:
        switch (typeof o.status == "string" ? o.then(C, C) : (o.status = "pending", o.then(
          function(f) {
            o.status === "pending" && (o.status = "fulfilled", o.value = f);
          },
          function(f) {
            o.status === "pending" && (o.status = "rejected", o.reason = f);
          }
        )), o.status) {
          case "fulfilled":
            return o.value;
          case "rejected":
            throw o.reason;
        }
    }
    throw o;
  }
  function ft(o, f, R, L, M) {
    var P = typeof o;
    (P === "undefined" || P === "boolean") && (o = null);
    var H = !1;
    if (o === null) H = !0;
    else
      switch (P) {
        case "bigint":
        case "string":
        case "number":
          H = !0;
          break;
        case "object":
          switch (o.$$typeof) {
            case n:
            case r:
              H = !0;
              break;
            case _:
              return H = o._init, ft(
                H(o._payload),
                f,
                R,
                L,
                M
              );
          }
      }
    if (H)
      return M = M(o), H = L === "" ? "." + K(o, 0) : L, Y(M) ? (R = "", H != null && (R = H.replace(et, "$&/") + "/"), ft(M, f, R, "", function(z) {
        return z;
      })) : M != null && (q(M) && (M = Z(
        M,
        R + (M.key == null || o && o.key === M.key ? "" : ("" + M.key).replace(
          et,
          "$&/"
        ) + "/") + H
      )), f.push(M)), 1;
    H = 0;
    var dt = L === "" ? "." : L + ":";
    if (Y(o))
      for (var nt = 0; nt < o.length; nt++)
        L = o[nt], P = dt + K(L, nt), H += ft(
          L,
          f,
          R,
          P,
          M
        );
    else if (nt = b(o), typeof nt == "function")
      for (o = nt.call(o), nt = 0; !(L = o.next()).done; )
        L = L.value, P = dt + K(L, nt++), H += ft(
          L,
          f,
          R,
          P,
          M
        );
    else if (P === "object") {
      if (typeof o.then == "function")
        return ft(
          ht(o),
          f,
          R,
          L,
          M
        );
      throw f = String(o), Error(
        "Objects are not valid as a React child (found: " + (f === "[object Object]" ? "object with keys {" + Object.keys(o).join(", ") + "}" : f) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return H;
  }
  function _t(o, f, R) {
    if (o == null) return o;
    var L = [], M = 0;
    return ft(o, L, "", "", function(P) {
      return f.call(R, P, M++);
    }), L;
  }
  function Ft(o) {
    if (o._status === -1) {
      var f = o._result;
      f = f(), f.then(
        function(R) {
          (o._status === 0 || o._status === -1) && (o._status = 1, o._result = R);
        },
        function(R) {
          (o._status === 0 || o._status === -1) && (o._status = 2, o._result = R);
        }
      ), o._status === -1 && (o._status = 0, o._result = f);
    }
    if (o._status === 1) return o._result.default;
    throw o._result;
  }
  var Rt = typeof reportError == "function" ? reportError : function(o) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var f = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof o == "object" && o !== null && typeof o.message == "string" ? String(o.message) : String(o),
        error: o
      });
      if (!window.dispatchEvent(f)) return;
    } else if (typeof e == "object" && typeof e.emit == "function") {
      e.emit("uncaughtException", o);
      return;
    }
    console.error(o);
  }, B = {
    map: _t,
    forEach: function(o, f, R) {
      _t(
        o,
        function() {
          f.apply(this, arguments);
        },
        R
      );
    },
    count: function(o) {
      var f = 0;
      return _t(o, function() {
        f++;
      }), f;
    },
    toArray: function(o) {
      return _t(o, function(f) {
        return f;
      }) || [];
    },
    only: function(o) {
      if (!q(o))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return o;
    }
  };
  return O.Activity = g, O.Children = B, O.Component = W, O.Fragment = s, O.Profiler = l, O.PureComponent = k, O.StrictMode = a, O.Suspense = m, O.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = A, O.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(o) {
      return A.H.useMemoCache(o);
    }
  }, O.cache = function(o) {
    return function() {
      return o.apply(null, arguments);
    };
  }, O.cacheSignal = function() {
    return null;
  }, O.cloneElement = function(o, f, R) {
    if (o == null)
      throw Error(
        "The argument must be a React element, but you passed " + o + "."
      );
    var L = v({}, o.props), M = o.key;
    if (f != null)
      for (P in f.key !== void 0 && (M = "" + f.key), f)
        !I.call(f, P) || P === "key" || P === "__self" || P === "__source" || P === "ref" && f.ref === void 0 || (L[P] = f[P]);
    var P = arguments.length - 2;
    if (P === 1) L.children = R;
    else if (1 < P) {
      for (var H = Array(P), dt = 0; dt < P; dt++)
        H[dt] = arguments[dt + 2];
      L.children = H;
    }
    return U(o.type, M, L);
  }, O.createContext = function(o) {
    return o = {
      $$typeof: h,
      _currentValue: o,
      _currentValue2: o,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, o.Provider = o, o.Consumer = {
      $$typeof: c,
      _context: o
    }, o;
  }, O.createElement = function(o, f, R) {
    var L, M = {}, P = null;
    if (f != null)
      for (L in f.key !== void 0 && (P = "" + f.key), f)
        I.call(f, L) && L !== "key" && L !== "__self" && L !== "__source" && (M[L] = f[L]);
    var H = arguments.length - 2;
    if (H === 1) M.children = R;
    else if (1 < H) {
      for (var dt = Array(H), nt = 0; nt < H; nt++)
        dt[nt] = arguments[nt + 2];
      M.children = dt;
    }
    if (o && o.defaultProps)
      for (L in H = o.defaultProps, H)
        M[L] === void 0 && (M[L] = H[L]);
    return U(o, P, M);
  }, O.createRef = function() {
    return { current: null };
  }, O.forwardRef = function(o) {
    return { $$typeof: u, render: o };
  }, O.isValidElement = q, O.lazy = function(o) {
    return {
      $$typeof: _,
      _payload: { _status: -1, _result: o },
      _init: Ft
    };
  }, O.memo = function(o, f) {
    return {
      $$typeof: y,
      type: o,
      compare: f === void 0 ? null : f
    };
  }, O.startTransition = function(o) {
    var f = A.T, R = {};
    A.T = R;
    try {
      var L = o(), M = A.S;
      M !== null && M(R, L), typeof L == "object" && L !== null && typeof L.then == "function" && L.then(C, Rt);
    } catch (P) {
      Rt(P);
    } finally {
      f !== null && R.types !== null && (f.types = R.types), A.T = f;
    }
  }, O.unstable_useCacheRefresh = function() {
    return A.H.useCacheRefresh();
  }, O.use = function(o) {
    return A.H.use(o);
  }, O.useActionState = function(o, f, R) {
    return A.H.useActionState(o, f, R);
  }, O.useCallback = function(o, f) {
    return A.H.useCallback(o, f);
  }, O.useContext = function(o) {
    return A.H.useContext(o);
  }, O.useDebugValue = function() {
  }, O.useDeferredValue = function(o, f) {
    return A.H.useDeferredValue(o, f);
  }, O.useEffect = function(o, f) {
    return A.H.useEffect(o, f);
  }, O.useEffectEvent = function(o) {
    return A.H.useEffectEvent(o);
  }, O.useId = function() {
    return A.H.useId();
  }, O.useImperativeHandle = function(o, f, R) {
    return A.H.useImperativeHandle(o, f, R);
  }, O.useInsertionEffect = function(o, f) {
    return A.H.useInsertionEffect(o, f);
  }, O.useLayoutEffect = function(o, f) {
    return A.H.useLayoutEffect(o, f);
  }, O.useMemo = function(o, f) {
    return A.H.useMemo(o, f);
  }, O.useOptimistic = function(o, f) {
    return A.H.useOptimistic(o, f);
  }, O.useReducer = function(o, f, R) {
    return A.H.useReducer(o, f, R);
  }, O.useRef = function(o) {
    return A.H.useRef(o);
  }, O.useState = function(o) {
    return A.H.useState(o);
  }, O.useSyncExternalStore = function(o, f, R) {
    return A.H.useSyncExternalStore(
      o,
      f,
      R
    );
  }, O.useTransition = function() {
    return A.H.useTransition();
  }, O.version = "19.2.6", O;
}
var dn;
function Ro() {
  return dn || (dn = 1, Ae.exports = Lo()), Ae.exports;
}
Ro();
/*! @license DOMPurify 3.4.11 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.4.11/LICENSE */
function pn(e, n) {
  (n == null || n > e.length) && (n = e.length);
  for (var r = 0, s = Array(n); r < n; r++) s[r] = e[r];
  return s;
}
function Oo(e) {
  if (Array.isArray(e)) return e;
}
function Co(e, n) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var s, a, l, c, h = [], u = !0, m = !1;
    try {
      if (l = (r = r.call(e)).next, n !== 0) for (; !(u = (s = l.call(r)).done) && (h.push(s.value), h.length !== n); u = !0) ;
    } catch (y) {
      m = !0, a = y;
    } finally {
      try {
        if (!u && r.return != null && (c = r.return(), Object(c) !== c)) return;
      } finally {
        if (m) throw a;
      }
    }
    return h;
  }
}
function No() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Io(e, n) {
  return Oo(e) || Co(e, n) || Do(e, n) || No();
}
function Do(e, n) {
  if (e) {
    if (typeof e == "string") return pn(e, n);
    var r = {}.toString.call(e).slice(8, -1);
    return r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? pn(e, n) : void 0;
  }
}
const Hn = Object.entries, mn = Object.setPrototypeOf, Mo = Object.isFrozen, xo = Object.getPrototypeOf, Po = Object.getOwnPropertyDescriptor;
let rt = Object.freeze, it = Object.seal, Ht = Object.create, Fn = typeof Reflect < "u" && Reflect, De = Fn.apply, Me = Fn.construct;
rt || (rt = function(n) {
  return n;
});
it || (it = function(n) {
  return n;
});
De || (De = function(n, r) {
  for (var s = arguments.length, a = new Array(s > 2 ? s - 2 : 0), l = 2; l < s; l++)
    a[l - 2] = arguments[l];
  return n.apply(r, a);
});
Me || (Me = function(n) {
  for (var r = arguments.length, s = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
    s[a - 1] = arguments[a];
  return new n(...s);
});
const Yt = X(Array.prototype.forEach), ko = X(Array.prototype.lastIndexOf), hn = X(Array.prototype.pop), kt = X(Array.prototype.push), Ho = X(Array.prototype.splice), Lt = Array.isArray, Gt = X(String.prototype.toLowerCase), be = X(String.prototype.toString), gn = X(String.prototype.match), qt = X(String.prototype.replace), yn = X(String.prototype.indexOf), Fo = X(String.prototype.trim), Uo = X(Number.prototype.toString), Bo = X(Boolean.prototype.toString), En = typeof BigInt > "u" ? null : X(BigInt.prototype.toString), Tn = typeof Symbol > "u" ? null : X(Symbol.prototype.toString), tt = X(Object.prototype.hasOwnProperty), jt = X(Object.prototype.toString), ot = X(RegExp.prototype.test), Nt = zo(TypeError);
function X(e) {
  return function(n) {
    n instanceof RegExp && (n.lastIndex = 0);
    for (var r = arguments.length, s = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
      s[a - 1] = arguments[a];
    return De(e, n, s);
  };
}
function zo(e) {
  return function() {
    for (var n = arguments.length, r = new Array(n), s = 0; s < n; s++)
      r[s] = arguments[s];
    return Me(e, r);
  };
}
function D(e, n) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Gt;
  if (mn && mn(e, null), !Lt(n))
    return e;
  let s = n.length;
  for (; s--; ) {
    let a = n[s];
    if (typeof a == "string") {
      const l = r(a);
      l !== a && (Mo(n) || (n[s] = l), a = l);
    }
    e[a] = !0;
  }
  return e;
}
function Wo(e) {
  for (let n = 0; n < e.length; n++)
    tt(e, n) || (e[n] = null);
  return e;
}
function ct(e) {
  const n = Ht(null);
  for (const s of Hn(e)) {
    var r = Io(s, 2);
    const a = r[0], l = r[1];
    tt(e, a) && (Lt(l) ? n[a] = Wo(l) : l && typeof l == "object" && l.constructor === Object ? n[a] = ct(l) : n[a] = l);
  }
  return n;
}
function Yo(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return Uo(e);
    case "boolean":
      return Bo(e);
    case "bigint":
      return En ? En(e) : "0";
    case "symbol":
      return Tn ? Tn(e) : "Symbol()";
    case "undefined":
      return jt(e);
    case "function":
    case "object": {
      if (e === null)
        return jt(e);
      const n = e, r = Tt(n, "toString");
      if (typeof r == "function") {
        const s = r(n);
        return typeof s == "string" ? s : jt(s);
      }
      return jt(e);
    }
    default:
      return jt(e);
  }
}
function Tt(e, n) {
  for (; e !== null; ) {
    const s = Po(e, n);
    if (s) {
      if (s.get)
        return X(s.get);
      if (typeof s.value == "function")
        return X(s.value);
    }
    e = xo(e);
  }
  function r() {
    return null;
  }
  return r;
}
function qo(e) {
  try {
    return ot(e, ""), !0;
  } catch {
    return !1;
  }
}
const _n = rt(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Se = rt(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), we = rt(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), jo = rt(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), ve = rt(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), Go = rt(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), An = rt(["#text"]), bn = rt(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), Le = rt(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Sn = rt(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), ee = rt(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), $o = it(/{{[\w\W]*|^[\w\W]*}}/g), Vo = it(/<%[\w\W]*|^[\w\W]*%>/g), Xo = it(/\${[\w\W]*/g), Ko = it(/^data-[\-\w.\u00B7-\uFFFF]+$/), Qo = it(/^aria-[\-\w]+$/), wn = it(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), Zo = it(/^(?:\w+script|data):/i), Jo = it(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), tr = it(/^html$/i), er = it(/^[a-z][.\w]*(-[.\w]+)+$/i), vn = it(/<[/\w!]/g), nr = it(/<[/\w]/g), or = it(/<\/no(script|embed|frames)/i), rr = it(/\/>/i), Et = {
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
}, ir = function() {
  return typeof window > "u" ? null : window;
}, sr = function(n, r) {
  if (typeof n != "object" || typeof n.createPolicy != "function")
    return null;
  let s = null;
  const a = "data-tt-policy-suffix";
  r && r.hasAttribute(a) && (s = r.getAttribute(a));
  const l = "dompurify" + (s ? "#" + s : "");
  try {
    return n.createPolicy(l, {
      createHTML(c) {
        return c;
      },
      createScriptURL(c) {
        return c;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + l + " could not be created."), null;
  }
}, Ln = function() {
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
}, vt = function(n, r, s, a) {
  return tt(n, r) && Lt(n[r]) ? D(a.base ? ct(a.base) : {}, n[r], a.transform) : s;
};
function Un() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ir();
  const n = (p) => Un(p);
  if (n.version = "3.4.11", n.removed = [], !e || !e.document || e.document.nodeType !== Et.document || !e.Element)
    return n.isSupported = !1, n;
  let r = e.document;
  const s = r, a = s.currentScript;
  e.DocumentFragment;
  const l = e.HTMLTemplateElement, c = e.Node, h = e.Element, u = e.NodeFilter, m = e.NamedNodeMap;
  m === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const y = e.DOMParser, _ = e.trustedTypes, g = h.prototype, w = Tt(g, "cloneNode"), b = Tt(g, "remove"), E = Tt(g, "nextSibling"), v = Tt(g, "childNodes"), S = Tt(g, "parentNode"), W = Tt(g, "shadowRoot"), ut = Tt(g, "attributes"), k = c && c.prototype ? Tt(c.prototype, "nodeType") : null, Q = c && c.prototype ? Tt(c.prototype, "nodeName") : null;
  if (typeof l == "function") {
    const p = r.createElement("template");
    p.content && p.content.ownerDocument && (r = p.content.ownerDocument);
  }
  let Y, C = "", A, I = !1, U = 0;
  const Z = function() {
    if (U > 0)
      throw Nt('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, q = function(t) {
    Z(), U++;
    try {
      return Y.createHTML(t);
    } finally {
      U--;
    }
  }, st = function(t) {
    Z(), U++;
    try {
      return Y.createScriptURL(t);
    } finally {
      U--;
    }
  }, et = function() {
    return I || (A = sr(_, a), I = !0), A;
  }, K = r, ht = K.implementation, ft = K.createNodeIterator, _t = K.createDocumentFragment, Ft = K.getElementsByTagName, Rt = s.importNode;
  let B = Ln();
  n.isSupported = typeof Hn == "function" && typeof S == "function" && ht && ht.createHTMLDocument !== void 0;
  const o = $o, f = Vo, R = Xo, L = Ko, M = Qo, P = Zo, H = Jo, dt = er;
  let nt = wn, z = null;
  const Fe = D({}, [..._n, ...Se, ...we, ...ve, ...An]);
  let j = null;
  const Ue = D({}, [...bn, ...Le, ...Sn, ...ee]);
  let G = Object.seal(Ht(null, {
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
  })), Ut = null, Be = null;
  const bt = Object.seal(Ht(null, {
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
  let ze = !0, ne = !0, We = !1, Ye = !0, St = !1, Bt = !0, Ot = !1, oe = !1, re = null, ie = null, se = !1, It = !1, Vt = !1, Xt = !1, qe = !0, je = !1;
  const Ge = "user-content-";
  let ae = !0, ce = !1, Dt = {}, gt = null;
  const le = D({}, [
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
  let $e = null;
  const Ve = D({}, ["audio", "video", "img", "source", "image", "track"]);
  let ue = null;
  const Xe = D({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), Kt = "http://www.w3.org/1998/Math/MathML", Qt = "http://www.w3.org/2000/svg", yt = "http://www.w3.org/1999/xhtml";
  let Mt = yt, fe = !1, de = null;
  const to = D({}, [Kt, Qt, yt], be), Ke = rt(["mi", "mo", "mn", "ms", "mtext"]);
  let pe = D({}, Ke);
  const Qe = rt(["annotation-xml"]);
  let me = D({}, Qe);
  const eo = D({}, ["title", "style", "font", "a", "script"]);
  let zt = null;
  const no = ["application/xhtml+xml", "text/html"], oo = "text/html";
  let $ = null, xt = null;
  const ro = r.createElement("form"), Ze = function(t) {
    return t instanceof RegExp || t instanceof Function;
  }, he = function() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (xt && xt === t)
      return;
    (!t || typeof t != "object") && (t = {}), t = ct(t), zt = // eslint-disable-next-line unicorn/prefer-includes
    no.indexOf(t.PARSER_MEDIA_TYPE) === -1 ? oo : t.PARSER_MEDIA_TYPE, $ = zt === "application/xhtml+xml" ? be : Gt, z = vt(t, "ALLOWED_TAGS", Fe, {
      transform: $
    }), j = vt(t, "ALLOWED_ATTR", Ue, {
      transform: $
    }), de = vt(t, "ALLOWED_NAMESPACES", to, {
      transform: be
    }), ue = vt(t, "ADD_URI_SAFE_ATTR", Xe, {
      transform: $,
      base: Xe
    }), $e = vt(t, "ADD_DATA_URI_TAGS", Ve, {
      transform: $,
      base: Ve
    }), gt = vt(t, "FORBID_CONTENTS", le, {
      transform: $
    }), Ut = vt(t, "FORBID_TAGS", ct({}), {
      transform: $
    }), Be = vt(t, "FORBID_ATTR", ct({}), {
      transform: $
    }), Dt = tt(t, "USE_PROFILES") ? t.USE_PROFILES && typeof t.USE_PROFILES == "object" ? ct(t.USE_PROFILES) : t.USE_PROFILES : !1, ze = t.ALLOW_ARIA_ATTR !== !1, ne = t.ALLOW_DATA_ATTR !== !1, We = t.ALLOW_UNKNOWN_PROTOCOLS || !1, Ye = t.ALLOW_SELF_CLOSE_IN_ATTR !== !1, St = t.SAFE_FOR_TEMPLATES || !1, Bt = t.SAFE_FOR_XML !== !1, Ot = t.WHOLE_DOCUMENT || !1, It = t.RETURN_DOM || !1, Vt = t.RETURN_DOM_FRAGMENT || !1, Xt = t.RETURN_TRUSTED_TYPE || !1, se = t.FORCE_BODY || !1, qe = t.SANITIZE_DOM !== !1, je = t.SANITIZE_NAMED_PROPS || !1, ae = t.KEEP_CONTENT !== !1, ce = t.IN_PLACE || !1, nt = qo(t.ALLOWED_URI_REGEXP) ? t.ALLOWED_URI_REGEXP : wn, Mt = typeof t.NAMESPACE == "string" ? t.NAMESPACE : yt, pe = tt(t, "MATHML_TEXT_INTEGRATION_POINTS") && t.MATHML_TEXT_INTEGRATION_POINTS && typeof t.MATHML_TEXT_INTEGRATION_POINTS == "object" ? ct(t.MATHML_TEXT_INTEGRATION_POINTS) : D({}, Ke), me = tt(t, "HTML_INTEGRATION_POINTS") && t.HTML_INTEGRATION_POINTS && typeof t.HTML_INTEGRATION_POINTS == "object" ? ct(t.HTML_INTEGRATION_POINTS) : D({}, Qe);
    const i = tt(t, "CUSTOM_ELEMENT_HANDLING") && t.CUSTOM_ELEMENT_HANDLING && typeof t.CUSTOM_ELEMENT_HANDLING == "object" ? ct(t.CUSTOM_ELEMENT_HANDLING) : Ht(null);
    if (G = Ht(null), tt(i, "tagNameCheck") && Ze(i.tagNameCheck) && (G.tagNameCheck = i.tagNameCheck), tt(i, "attributeNameCheck") && Ze(i.attributeNameCheck) && (G.attributeNameCheck = i.attributeNameCheck), tt(i, "allowCustomizedBuiltInElements") && typeof i.allowCustomizedBuiltInElements == "boolean" && (G.allowCustomizedBuiltInElements = i.allowCustomizedBuiltInElements), it(G), St && (ne = !1), Vt && (It = !0), Dt && (z = D({}, An), j = Ht(null), Dt.html === !0 && (D(z, _n), D(j, bn)), Dt.svg === !0 && (D(z, Se), D(j, Le), D(j, ee)), Dt.svgFilters === !0 && (D(z, we), D(j, Le), D(j, ee)), Dt.mathMl === !0 && (D(z, ve), D(j, Sn), D(j, ee))), bt.tagCheck = null, bt.attributeCheck = null, tt(t, "ADD_TAGS") && (typeof t.ADD_TAGS == "function" ? bt.tagCheck = t.ADD_TAGS : Lt(t.ADD_TAGS) && (z === Fe && (z = ct(z)), D(z, t.ADD_TAGS, $))), tt(t, "ADD_ATTR") && (typeof t.ADD_ATTR == "function" ? bt.attributeCheck = t.ADD_ATTR : Lt(t.ADD_ATTR) && (j === Ue && (j = ct(j)), D(j, t.ADD_ATTR, $))), tt(t, "ADD_URI_SAFE_ATTR") && Lt(t.ADD_URI_SAFE_ATTR) && D(ue, t.ADD_URI_SAFE_ATTR, $), tt(t, "FORBID_CONTENTS") && Lt(t.FORBID_CONTENTS) && (gt === le && (gt = ct(gt)), D(gt, t.FORBID_CONTENTS, $)), tt(t, "ADD_FORBID_CONTENTS") && Lt(t.ADD_FORBID_CONTENTS) && (gt === le && (gt = ct(gt)), D(gt, t.ADD_FORBID_CONTENTS, $)), ae && (z["#text"] = !0), Ot && D(z, ["html", "head", "body"]), z.table && (D(z, ["tbody"]), delete Ut.tbody), t.TRUSTED_TYPES_POLICY) {
      if (typeof t.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw Nt('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof t.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw Nt('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const d = Y;
      Y = t.TRUSTED_TYPES_POLICY;
      try {
        C = q("");
      } catch (T) {
        throw Y = d, T;
      }
    } else t.TRUSTED_TYPES_POLICY === null ? (Y = void 0, C = "") : (Y === void 0 && (Y = et()), Y && typeof C == "string" && (C = q("")));
    rt && rt(t), xt = t;
  }, Je = D({}, [...Se, ...we, ...jo]), tn = D({}, [...ve, ...Go]), io = function(t, i, d) {
    return i.namespaceURI === yt ? t === "svg" : i.namespaceURI === Kt ? t === "svg" && (d === "annotation-xml" || pe[d]) : !!Je[t];
  }, so = function(t, i, d) {
    return i.namespaceURI === yt ? t === "math" : i.namespaceURI === Qt ? t === "math" && me[d] : !!tn[t];
  }, ao = function(t, i, d) {
    return i.namespaceURI === Qt && !me[d] || i.namespaceURI === Kt && !pe[d] ? !1 : !tn[t] && (eo[t] || !Je[t]);
  }, co = function(t) {
    let i = S(t);
    (!i || !i.tagName) && (i = {
      namespaceURI: Mt,
      tagName: "template"
    });
    const d = Gt(t.tagName), T = Gt(i.tagName);
    return de[t.namespaceURI] ? t.namespaceURI === Qt ? io(d, i, T) : t.namespaceURI === Kt ? so(d, i, T) : t.namespaceURI === yt ? ao(d, i, T) : !!(zt === "application/xhtml+xml" && de[t.namespaceURI]) : !1;
  }, wt = function(t) {
    kt(n.removed, {
      element: t
    });
    try {
      S(t).removeChild(t);
    } catch {
      if (b(t), !S(t))
        throw Nt("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, en = function(t) {
    const i = v(t);
    if (i) {
      const T = [];
      Yt(i, (N) => {
        kt(T, N);
      }), Yt(T, (N) => {
        try {
          b(N);
        } catch {
        }
      });
    }
    const d = ut(t);
    if (d)
      for (let T = d.length - 1; T >= 0; --T) {
        const N = d[T], x = N && N.name;
        if (typeof x == "string")
          try {
            t.removeAttribute(x);
          } catch {
          }
      }
  }, Ct = function(t, i) {
    try {
      kt(n.removed, {
        attribute: i.getAttributeNode(t),
        from: i
      });
    } catch {
      kt(n.removed, {
        attribute: null,
        from: i
      });
    }
    if (i.removeAttribute(t), t === "is")
      if (It || Vt)
        try {
          wt(i);
        } catch {
        }
      else
        try {
          i.setAttribute(t, "");
        } catch {
        }
  }, lo = function(t) {
    const i = ut(t);
    if (i)
      for (let d = i.length - 1; d >= 0; --d) {
        const T = i[d], N = T && T.name;
        if (!(typeof N != "string" || j[$(N)]))
          try {
            t.removeAttribute(N);
          } catch {
          }
      }
  }, uo = function(t) {
    const i = [t];
    for (; i.length > 0; ) {
      const d = i.pop();
      (k ? k(d) : d.nodeType) === Et.element && lo(d);
      const N = v(d);
      if (N)
        for (let x = N.length - 1; x >= 0; --x)
          i.push(N[x]);
    }
  }, nn = function(t) {
    let i = null, d = null;
    if (se)
      t = "<remove></remove>" + t;
    else {
      const x = gn(t, /^[\r\n\t ]+/);
      d = x && x[0];
    }
    zt === "application/xhtml+xml" && Mt === yt && (t = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + t + "</body></html>");
    const T = Y ? q(t) : t;
    if (Mt === yt)
      try {
        i = new y().parseFromString(T, zt);
      } catch {
      }
    if (!i || !i.documentElement) {
      i = ht.createDocument(Mt, "template", null);
      try {
        i.documentElement.innerHTML = fe ? C : T;
      } catch {
      }
    }
    const N = i.body || i.documentElement;
    return t && d && N.insertBefore(r.createTextNode(d), N.childNodes[0] || null), Mt === yt ? Ft.call(i, Ot ? "html" : "body")[0] : Ot ? i.documentElement : N;
  }, on = function(t) {
    return ft.call(
      t.ownerDocument || t,
      t,
      // eslint-disable-next-line no-bitwise
      u.SHOW_ELEMENT | u.SHOW_COMMENT | u.SHOW_TEXT | u.SHOW_PROCESSING_INSTRUCTION | u.SHOW_CDATA_SECTION,
      null
    );
  }, Zt = function(t) {
    return t = qt(t, o, " "), t = qt(t, f, " "), t = qt(t, R, " "), t;
  }, ge = function(t) {
    var i;
    t.normalize();
    const d = ft.call(
      t.ownerDocument || t,
      t,
      // eslint-disable-next-line no-bitwise
      u.SHOW_TEXT | u.SHOW_COMMENT | u.SHOW_CDATA_SECTION | u.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let T = d.nextNode();
    for (; T; )
      T.data = Zt(T.data), T = d.nextNode();
    const N = (i = t.querySelectorAll) === null || i === void 0 ? void 0 : i.call(t, "template");
    N && Yt(N, (x) => {
      Pt(x.content) && ge(x.content);
    });
  }, Jt = function(t) {
    const i = Q ? Q(t) : null;
    return typeof i != "string" || $(i) !== "form" ? !1 : typeof t.nodeName != "string" || typeof t.textContent != "string" || typeof t.removeChild != "function" || // Realm-safe NamedNodeMap detection: equality against the cached
    // prototype getter. Clobbered .attributes (e.g. <input name="attributes">)
    // makes the direct read diverge from the cached read; a clean form
    // (same-realm OR foreign-realm) has both reads pointing at the same
    // canonical NamedNodeMap.
    t.attributes !== ut(t) || typeof t.removeAttribute != "function" || typeof t.setAttribute != "function" || typeof t.namespaceURI != "string" || typeof t.insertBefore != "function" || typeof t.hasChildNodes != "function" || // NodeType clobbering probe. Cached Node.prototype.nodeType getter
    // returns the integer 1 for any Element regardless of realm; direct
    // read on a clobbered form (e.g. <input name="nodeType">) returns
    // the named child element. Cheap addition — nodeType is read from
    // an internal slot, no serialization cost — and removes a residual
    // clobbering surface used by several mXSS / PI / comment branches
    // in _sanitizeElements that compare currentNode.nodeType directly.
    t.nodeType !== k(t) || // HTMLFormElement has [LegacyOverrideBuiltIns]: a descendant named
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
    t.childNodes !== v(t);
  }, Pt = function(t) {
    if (!k || typeof t != "object" || t === null)
      return !1;
    try {
      return k(t) === Et.documentFragment;
    } catch {
      return !1;
    }
  }, Wt = function(t) {
    if (!k || typeof t != "object" || t === null)
      return !1;
    try {
      return typeof k(t) == "number";
    } catch {
      return !1;
    }
  };
  function At(p, t, i) {
    p.length !== 0 && Yt(p, (d) => {
      d.call(n, t, i, xt);
    });
  }
  const fo = function(t, i) {
    return !!(Bt && t.hasChildNodes() && !Wt(t.firstElementChild) && ot(vn, t.textContent) && ot(vn, t.innerHTML) || Bt && t.namespaceURI === yt && i === "style" && Wt(t.firstElementChild) || t.nodeType === Et.processingInstruction || Bt && t.nodeType === Et.comment && ot(nr, t.data));
  }, po = function(t, i) {
    if (!Ut[i] && an(i) && (G.tagNameCheck instanceof RegExp && ot(G.tagNameCheck, i) || G.tagNameCheck instanceof Function && G.tagNameCheck(i)))
      return !1;
    if (ae && !gt[i]) {
      const d = S(t), T = v(t);
      if (T && d) {
        const N = T.length;
        for (let x = N - 1; x >= 0; --x) {
          const J = ce ? T[x] : w(T[x], !0);
          d.insertBefore(J, E(t));
        }
      }
    }
    return wt(t), !0;
  }, rn = function(t) {
    if (At(B.beforeSanitizeElements, t, null), Jt(t))
      return wt(t), !0;
    const i = $(Q ? Q(t) : t.nodeName);
    if (At(B.uponSanitizeElement, t, {
      tagName: i,
      allowedTags: z
    }), fo(t, i))
      return wt(t), !0;
    if (Ut[i] || !(bt.tagCheck instanceof Function && bt.tagCheck(i)) && !z[i])
      return po(t, i);
    if ((k ? k(t) : t.nodeType) === Et.element && !co(t) || (i === "noscript" || i === "noembed" || i === "noframes") && ot(or, t.innerHTML))
      return wt(t), !0;
    if (St && t.nodeType === Et.text) {
      const T = Zt(t.textContent);
      t.textContent !== T && (kt(n.removed, {
        element: t.cloneNode()
      }), t.textContent = T);
    }
    return At(B.afterSanitizeElements, t, null), !1;
  }, sn = function(t, i, d) {
    if (Be[i] || qe && (i === "id" || i === "name") && (d in r || d in ro))
      return !1;
    const T = j[i] || bt.attributeCheck instanceof Function && bt.attributeCheck(i, t);
    if (!(ne && ot(L, i))) {
      if (!(ze && ot(M, i))) {
        if (T) {
          if (!ue[i]) {
            if (!ot(nt, qt(d, H, ""))) {
              if (!((i === "src" || i === "xlink:href" || i === "href") && t !== "script" && yn(d, "data:") === 0 && $e[t])) {
                if (!(We && !ot(P, qt(d, H, "")))) {
                  if (d)
                    return !1;
                }
              }
            }
          }
        } else if (
          // First condition does a very basic check if a) it's basically a valid custom element tagname AND
          // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
          !(an(t) && (G.tagNameCheck instanceof RegExp && ot(G.tagNameCheck, t) || G.tagNameCheck instanceof Function && G.tagNameCheck(t)) && (G.attributeNameCheck instanceof RegExp && ot(G.attributeNameCheck, i) || G.attributeNameCheck instanceof Function && G.attributeNameCheck(i, t)) || // Alternative, second condition checks if it's an `is`-attribute, AND
          // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          i === "is" && G.allowCustomizedBuiltInElements && (G.tagNameCheck instanceof RegExp && ot(G.tagNameCheck, d) || G.tagNameCheck instanceof Function && G.tagNameCheck(d)))
        ) return !1;
      }
    }
    return !0;
  }, mo = D({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), an = function(t) {
    return !mo[Gt(t)] && ot(dt, t);
  }, ho = function(t, i, d, T) {
    if (Y && typeof _ == "object" && typeof _.getAttributeType == "function" && !d)
      switch (_.getAttributeType(t, i)) {
        case "TrustedHTML":
          return q(T);
        case "TrustedScriptURL":
          return st(T);
      }
    return T;
  }, go = function(t, i, d, T) {
    try {
      d ? t.setAttributeNS(d, i, T) : t.setAttribute(i, T), Jt(t) ? wt(t) : hn(n.removed);
    } catch {
      Ct(i, t);
    }
  }, cn = function(t) {
    At(B.beforeSanitizeAttributes, t, null);
    const i = t.attributes;
    if (!i || Jt(t))
      return;
    const d = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: j,
      forceKeepAttr: void 0
    };
    let T = i.length;
    const N = $(t.nodeName);
    for (; T--; ) {
      const x = i[T], J = x.name, V = x.namespaceURI, pt = x.value, mt = $(J), Ee = pt;
      let at = J === "value" ? Ee : Fo(Ee);
      if (d.attrName = mt, d.attrValue = at, d.keepAttr = !0, d.forceKeepAttr = void 0, At(B.uponSanitizeAttribute, t, d), at = d.attrValue, je && (mt === "id" || mt === "name") && yn(at, Ge) !== 0 && (Ct(J, t), at = Ge + at), Bt && ot(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, at)) {
        Ct(J, t);
        continue;
      }
      if (mt === "attributename" && gn(at, "href")) {
        Ct(J, t);
        continue;
      }
      if (!d.forceKeepAttr) {
        if (!d.keepAttr) {
          Ct(J, t);
          continue;
        }
        if (!Ye && ot(rr, at)) {
          Ct(J, t);
          continue;
        }
        if (St && (at = Zt(at)), !sn(N, mt, at)) {
          Ct(J, t);
          continue;
        }
        at = ho(N, mt, V, at), at !== Ee && go(t, J, V, at);
      }
    }
    At(B.afterSanitizeAttributes, t, null);
  }, te = function(t) {
    let i = null;
    const d = on(t);
    for (At(B.beforeSanitizeShadowDOM, t, null); i = d.nextNode(); )
      if (At(B.uponSanitizeShadowNode, i, null), rn(i), cn(i), Pt(i.content) && te(i.content), (k ? k(i) : i.nodeType) === Et.element) {
        const N = W(i);
        Pt(N) && (ye(N), te(N));
      }
    At(B.afterSanitizeShadowDOM, t, null);
  }, ye = function(t) {
    const i = [{
      node: t,
      shadow: null
    }];
    for (; i.length > 0; ) {
      const d = i.pop();
      if (d.shadow) {
        te(d.shadow);
        continue;
      }
      const T = d.node, x = (k ? k(T) : T.nodeType) === Et.element, J = v(T);
      if (J)
        for (let V = J.length - 1; V >= 0; --V)
          i.push({
            node: J[V],
            shadow: null
          });
      if (x) {
        const V = Q ? Q(T) : null;
        if (typeof V == "string" && $(V) === "template") {
          const pt = T.content;
          Pt(pt) && i.push({
            node: pt,
            shadow: null
          });
        }
      }
      if (x) {
        const V = W(T);
        Pt(V) && i.push({
          node: null,
          shadow: V
        }, {
          node: V,
          shadow: null
        });
      }
    }
  };
  return n.sanitize = function(p) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = null, d = null, T = null, N = null;
    if (fe = !p, fe && (p = "<!-->"), typeof p != "string" && !Wt(p) && (p = Yo(p), typeof p != "string"))
      throw Nt("dirty is not a string, aborting");
    if (!n.isSupported)
      return p;
    oe ? (z = re, j = ie) : he(t), (B.uponSanitizeElement.length > 0 || B.uponSanitizeAttribute.length > 0) && (z = ct(z)), B.uponSanitizeAttribute.length > 0 && (j = ct(j)), n.removed = [];
    const x = ce && typeof p != "string" && Wt(p);
    if (x) {
      const pt = Q ? Q(p) : p.nodeName;
      if (typeof pt == "string") {
        const mt = $(pt);
        if (!z[mt] || Ut[mt])
          throw Nt("root node is forbidden and cannot be sanitized in-place");
      }
      if (Jt(p))
        throw Nt("root node is clobbered and cannot be sanitized in-place");
      try {
        ye(p);
      } catch (mt) {
        throw en(p), mt;
      }
    } else if (Wt(p))
      i = nn("<!---->"), d = i.ownerDocument.importNode(p, !0), d.nodeType === Et.element && d.nodeName === "BODY" || d.nodeName === "HTML" ? i = d : i.appendChild(d), ye(d);
    else {
      if (!It && !St && !Ot && // eslint-disable-next-line unicorn/prefer-includes
      p.indexOf("<") === -1)
        return Y && Xt ? q(p) : p;
      if (i = nn(p), !i)
        return It ? null : Xt ? C : "";
    }
    i && se && wt(i.firstChild);
    const J = on(x ? p : i);
    try {
      for (; T = J.nextNode(); )
        rn(T), cn(T), Pt(T.content) && te(T.content);
    } catch (pt) {
      throw x && en(p), pt;
    }
    if (x)
      return Yt(n.removed, (pt) => {
        pt.element && uo(pt.element);
      }), St && ge(p), p;
    if (It) {
      if (St && ge(i), Vt)
        for (N = _t.call(i.ownerDocument); i.firstChild; )
          N.appendChild(i.firstChild);
      else
        N = i;
      return (j.shadowroot || j.shadowrootmode) && (N = Rt.call(s, N, !0)), N;
    }
    let V = Ot ? i.outerHTML : i.innerHTML;
    return Ot && z["!doctype"] && i.ownerDocument && i.ownerDocument.doctype && i.ownerDocument.doctype.name && ot(tr, i.ownerDocument.doctype.name) && (V = "<!DOCTYPE " + i.ownerDocument.doctype.name + `>
` + V), St && (V = Zt(V)), Y && Xt ? q(V) : V;
  }, n.setConfig = function() {
    let p = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    he(p), oe = !0, re = z, ie = j;
  }, n.clearConfig = function() {
    xt = null, oe = !1, re = null, ie = null, Y = A, C = "";
  }, n.isValidAttribute = function(p, t, i) {
    xt || he({});
    const d = $(p), T = $(t);
    return sn(d, T, i);
  }, n.addHook = function(p, t) {
    typeof t == "function" && tt(B, p) && kt(B[p], t);
  }, n.removeHook = function(p, t) {
    if (tt(B, p)) {
      if (t !== void 0) {
        const i = ko(B[p], t);
        return i === -1 ? void 0 : Ho(B[p], i, 1)[0];
      }
      return hn(B[p]);
    }
  }, n.removeHooks = function(p) {
    tt(B, p) && (B[p] = []);
  }, n.removeAllHooks = function() {
    B = Ln();
  }, n;
}
Un();
function ar(e) {
  if (e && typeof e.getBoundingClientRect == "function") {
    const { bottom: n, top: r } = e.getBoundingClientRect(), { offsetTop: s } = e;
    if (r < 0 && n > 0) {
      const a = e.style;
      e.style = `${a};transition: height 0s !important; overflow:hidden; height:${n}px!important;max-height:${n}px!important`, window.scrollTo({ behavior: "instant", top: s }), setTimeout(() => {
        e.style = a, window.scrollTo({
          behavior: "smooth",
          top: e.offsetTop - n / 2
        });
      }, 50);
    }
  }
}
var Re = { exports: {} }, Oe, Rn;
function cr() {
  if (Rn) return Oe;
  Rn = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Oe = e, Oe;
}
var Ce, On;
function lr() {
  if (On) return Ce;
  On = 1;
  var e = /* @__PURE__ */ cr();
  function n() {
  }
  function r() {
  }
  return r.resetWarningCache = n, Ce = function() {
    function s(c, h, u, m, y, _) {
      if (_ !== e) {
        var g = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw g.name = "Invariant Violation", g;
      }
    }
    s.isRequired = s;
    function a() {
      return s;
    }
    var l = {
      array: s,
      bigint: s,
      bool: s,
      func: s,
      number: s,
      object: s,
      string: s,
      symbol: s,
      any: s,
      arrayOf: a,
      element: s,
      elementType: s,
      instanceOf: a,
      node: s,
      objectOf: a,
      oneOf: a,
      oneOfType: a,
      shape: a,
      exact: a,
      checkPropTypes: r,
      resetWarningCache: n
    };
    return l.PropTypes = l, l;
  }, Ce;
}
var Cn;
function ur() {
  return Cn || (Cn = 1, Re.exports = /* @__PURE__ */ lr()()), Re.exports;
}
var fr = /* @__PURE__ */ ur();
const lt = /* @__PURE__ */ vo(fr);
lt.shape({
  event: lt.string,
  action: lt.string,
  name: lt.string,
  region: lt.string,
  section: lt.string,
  component: lt.string,
  type: lt.string,
  text: lt.string
});
const $t = ({ children: e }) => /* @__PURE__ */ React.createElement(React.Fragment, null, e);
$t.propTypes = {
  children: lt.oneOfType([
    lt.arrayOf(lt.node),
    lt.node,
    lt.string
  ])
};
var Ne = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var Nn;
function dr() {
  return Nn || (Nn = 1, (function(e) {
    (function() {
      var n = {}.hasOwnProperty;
      function r() {
        for (var l = "", c = 0; c < arguments.length; c++) {
          var h = arguments[c];
          h && (l = a(l, s(h)));
        }
        return l;
      }
      function s(l) {
        if (typeof l == "string" || typeof l == "number")
          return l;
        if (typeof l != "object")
          return "";
        if (Array.isArray(l))
          return r.apply(null, l);
        if (l.toString !== Object.prototype.toString && !l.toString.toString().includes("[native code]"))
          return l.toString();
        var c = "";
        for (var h in l)
          n.call(l, h) && l[h] && (c = a(c, h));
        return c;
      }
      function a(l, c) {
        return c ? l ? l + " " + c : l + c : l;
      }
      e.exports ? (r.default = r, e.exports = r) : window.classNames = r;
    })();
  })(Ne)), Ne.exports;
}
dr();
({
  ...$t.propTypes
});
const Bn = ({ children: e, className: n = "container", ...r }) => /* @__PURE__ */ React.createElement("div", { className: n, ...r }, /* @__PURE__ */ React.createElement("div", { className: "row" }, e));
Bn.propTypes = {
  children: $t.propTypes.children
};
({
  ...Bn.propTypes
});
$t.propTypes.children, lt.oneOf(["0", "3", "4", "6", "8", "9", "12"]);
$t.propTypes.children;
function zn() {
  var Q, Y;
  const r = ["asu-header", "asuHeader"].find((C) => document.getElementById(C)), s = document.getElementById(r), a = document.getElementById("uds-anchor-menu");
  if (!a || !s || Array.from(a.classList).some((C) => C.startsWith("sc-")))
    return;
  const l = a.parentNode, c = a.nextSibling, h = Array.from(a.getElementsByClassName("nav-link")), u = /* @__PURE__ */ new Map();
  let m = window.scrollY, y = !1;
  const _ = ((Q = document.getElementById("toolbar-bar")) == null ? void 0 : Q.offsetHeight) || 0, g = ((Y = document.getElementById("toolbar-item-administration-tray")) == null ? void 0 : Y.offsetHeight) || 0, w = _ + g, b = a.getBoundingClientRect().top + window.scrollY - w;
  for (let C of h) {
    const A = C.getAttribute("href");
    if (!A || !A.startsWith("#"))
      continue;
    const I = A.replace("#", ""), U = document.getElementById(I);
    U && u.set(C, U);
  }
  window.scrollY > b && (s.appendChild(a), y = !0, a.classList.add("uds-anchor-menu-attached"));
  function v(C, A = 0) {
    if (!C || A > 10)
      return 0;
    if (C.offsetHeight === 0 || C.offsetWidth === 0)
      return v(C.parentElement, A + 1);
    const I = C.getBoundingClientRect(), U = window.innerHeight || document.documentElement.clientHeight, Z = window.innerWidth || document.documentElement.clientWidth, q = I.bottom - I.top, st = I.right - I.left, et = q * st, K = Math.min(U, I.bottom) - Math.max(0, I.top), ht = Math.min(Z, I.right) - Math.max(0, I.left);
    return K * ht / et * 100;
  }
  const S = function() {
    let C = 0, A = null;
    if (h.forEach((q) => {
      const st = u.get(q);
      if (!st)
        return;
      const et = v(st);
      et > 0 && et > C && (C = et, A = st.id);
    }), A) {
      const q = document.querySelector(
        '[href="#' + A + '"]'
      );
      q && q.classList.add("active"), a.querySelectorAll(
        'a.nav-link:not([href="#' + A + '"])'
      ).forEach(function(st) {
        st.classList.remove("active");
      });
    }
    const I = a.getBoundingClientRect().top, U = s.getBoundingClientRect().bottom, Z = window.scrollY > m;
    if (Z && U >= I && (y || (s.appendChild(a), y = !0, a.classList.add("uds-anchor-menu-attached"))), !Z && y) {
      const q = s.getBoundingClientRect().bottom, st = a.getBoundingClientRect().top;
      (window.scrollY <= b || q < st) && (l.insertBefore(a, c), y = !1, a.classList.remove("uds-anchor-menu-attached"));
    }
    m = window.scrollY;
  };
  let W;
  W = (() => {
    let C = !1;
    return () => {
      C || (C = !0, S(), setTimeout(() => {
        C = !1;
      }, 100));
    };
  })(), window.addEventListener("scroll", W, { passive: !0 });
  for (let [C, A] of u)
    C.addEventListener("click", function(I) {
      if (I.preventDefault(), !A || !document.body.contains(A)) {
        console.warn("Anchor target no longer exists in DOM");
        return;
      }
      if (C === h[0]) {
        const ft = s.getBoundingClientRect().bottom, _t = a.offsetHeight, Ft = ft + _t, Rt = A.getBoundingClientRect().top, B = window.innerHeight / 2;
        if (Rt >= Ft && Rt <= B) {
          history.replaceState(null, "", C.getAttribute("href")), k(A);
          return;
        }
      }
      const Z = window.innerHeight, q = Math.round(Z * 0.35);
      let et = A.getBoundingClientRect().top + window.scrollY - q;
      window.scrollTo({
        top: et,
        behavior: "smooth"
      });
      const K = a.querySelector(".nav-link.active");
      K && K.classList.remove("active"), I.target.classList.add("active");
      const ht = C.getAttribute("href");
      ht && history.replaceState(null, "", ht), k(A);
    });
  function k(C) {
    C.hasAttribute("tabindex") || (C.setAttribute("tabindex", "-1"), C.style.outline = "none"), C.focus({ preventScroll: !0 });
  }
}
F.on(window, "load.uds.anchor-menu", zn);
function Wn() {
  const e = document.querySelectorAll('mark[class^="pen-"]'), n = new IntersectionObserver(
    (r) => {
      r.forEach((s) => {
        s.isIntersecting ? s.target.classList.add("animate-bg-in-scroll") : s.target.classList.remove("animate-bg-in-scroll");
      });
    },
    {
      threshold: 0.1
    }
  );
  e.forEach((r) => {
    n.observe(r);
  });
}
F.on(
  window,
  "load.uds.blockquote-animation",
  Wn
);
function Yn() {
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
  ], r = ["Su", "M", "Tu", "W", "Th", "F", "Sa"], a = {
    month: (/* @__PURE__ */ new Date()).getMonth(),
    year: (/* @__PURE__ */ new Date()).getFullYear()
  }, l = (u, m) => {
    const y = /* @__PURE__ */ new Date(), _ = [], g = new Date(u, m).getDay(), w = new Date(u, m + 1, 0).getDate(), b = new Date(u, m, 0).getDate();
    for (let E = 1; E <= g; E++) {
      const v = b - g + E, S = new Date(
        a.year,
        a.month - 1,
        v
      ).toLocaleString();
      _.push({ key: S, date: v, monthClass: "prev" });
    }
    for (let E = 1; E <= w; E++) {
      const v = new Date(a.year, a.month, E).toLocaleString();
      E === y.getDate() && a.month === y.getMonth() && a.year === y.getFullYear() ? _.push({
        key: v,
        date: E,
        monthClass: "current",
        todayClass: "today"
      }) : _.push({ key: v, date: E, monthClass: "current" });
    }
    if (_.length < 42) {
      const E = 42 - _.length;
      for (let v = 1; v <= E; v++) {
        const S = new Date(a.year, a.month + 1, v).toLocaleString();
        _.push({ key: S, date: v, monthClass: "next" });
      }
    }
    return _;
  }, c = () => {
    const u = document.getElementById("calendar");
    u && (u.innerHTML = `
      <h2><span class="highlight-black">${e[a.month]} ${a.year}</span></h2>
      <div class="calendar-grid">
        <div class="heading desktop">
          ${n.map((m) => `<p>${m}</p>`).join("")}
        </div>
        <div class="heading mobile">
          ${r.map((m) => `<p>${m}</p>`).join("")}
        </div>
        <div class="body">
          ${l(a.year, a.month).map(
      (m) => `<h3 id="${m.key}" class="calendar-item ${m.monthClass}" ${m.todayClass ? `aria-label="${m.todayClass[0].toUpperCase()}${m.todayClass.slice(
        1
      )}"` : ""}>
                  <span class="${m.todayClass ? m.todayClass : ""}">${m.date}</span>
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
    var m = new Date(a.year, a.month + u);
    a.year = m.getFullYear(), a.month = m.getMonth(), c();
  })(0);
}
F.on(window, "load.uds.calendar", Yn);
function Pe() {
  const e = document.querySelectorAll(".card-body");
  if (e.length === 0 && 0 < 3) {
    setTimeout(() => Pe(), 500);
    return;
  }
  if (e.length === 0) {
    console.warn("No .card-body found after 3 retries.");
    return;
  }
  e.forEach((r, s) => {
    const a = r.querySelector("div p"), l = a.textContent, c = window.getComputedStyle(r), h = parseInt(c.webkitLineClamp || c.lineClamp), u = parseFloat(c.lineHeight), m = parseFloat(c.fontSize), y = isNaN(u) ? parseFloat(c.lineHeight) * m : u, _ = h * y;
    if (a.offsetHeight >= _) {
      let g = "";
      const w = l.split(" ");
      let b = 0, E = "";
      for (; b < w.length && pr(
        E + (E ? " " : "") + w[b],
        a
      ) <= _; )
        E += (E ? " " : "") + w[b], b++;
      g = E + "...";
      const v = `visible-text-${Math.random().toString(36).substring(7)}`, S = document.createElement("div");
      S.id = v, S.textContent = g, S.style.position = "absolute", S.style.top = `${a.offsetTop}px`, S.style.left = `${a.offsetLeft}px`, S.style.width = `${a.offsetWidth}px`, S.style.height = `${a.offsetHeight}px`, S.style.opacity = "0", S.style.pointerEvents = "none", S.style.zIndex = "1", r.appendChild(S), a.setAttribute("aria-describedby", v), a.setAttribute("aria-hidden", "true");
    }
  });
}
function pr(e, n) {
  const r = document.createElement(n.tagName);
  r.style.font = window.getComputedStyle(n).font, r.style.width = window.getComputedStyle(n).width, r.style.whiteSpace = "pre-wrap", r.textContent = e, document.body.appendChild(r);
  const s = r.offsetHeight;
  return document.body.removeChild(r), s;
}
F.on(window, "load.uds.card-bodies", Pe);
function qn() {
  const e = document.querySelector(".info-layer"), n = document.getElementById("dispatch");
  F.on(n, "click", function() {
    e == null || e.classList.toggle("active");
  });
}
F.on(window, "load.uds.ranking-card", qn);
function jn() {
  Te.Chart.register(...Te.registerables);
  const e = 50;
  var n = document.getElementById("uds-donut");
  if (!n)
    return;
  document.getElementById("percentage-display").innerHTML = e + "%";
  const r = {
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
  new Te.Chart(n, r);
}
F.on(window, "load.uds.chart", jn);
function Gn() {
  function e({ target: r }) {
    const s = r.getAttribute("href");
    r.getAttribute("data-bs-toggle") !== "collapse" || !s || !s.includes("#") || ar(
      document.querySelector(".collapsing")
    );
  }
  function n(r) {
    const { target: s, key: a } = r;
    a !== " " && a !== "Spacebar" || s.tagName !== "A" || s.getAttribute("data-bs-toggle") !== "collapse" || (r.preventDefault(), s.click());
  }
  F.on(document, "click.uds.collapse", e), F.on(document, "keydown.uds.collapse", n);
}
F.on(window, "load.uds.collapse", Gn);
function ke() {
  var n, r, s, a;
  const e = (l) => {
    window.dataLayer = window.dataLayer || [];
    const { dataLayer: c } = window;
    c && c.push(l);
  };
  (n = document.querySelectorAll("[data-ga-header]")) == null || n.forEach(
    (l) => l.addEventListener("click", () => {
      const c = l.getAttribute("data-ga-header-event") || "link";
      let h = l.getAttribute("data-ga-header-action") || "click";
      const u = l.getAttribute("aria-expanded");
      u && (h = u === "false" ? "open" : "close");
      const m = l.getAttribute("data-ga-header-type") || "internal link", y = l.getAttribute("data-ga-header-section") || "main navbar", _ = l.getAttribute("data-ga-header") || "", g = l.getAttribute("data-ga-header-component");
      e({
        name: "onclick",
        event: c.toLowerCase(),
        action: h.toLowerCase(),
        type: m.toLowerCase(),
        section: y.toLowerCase(),
        region: "navbar",
        text: _.toLowerCase(),
        ...g && {
          component: g.toLowerCase()
        }
      });
    })
  ), (r = document.querySelectorAll("[data-ga-input-header-event]")) == null || r.forEach(
    (l) => l.addEventListener("change", (c) => {
      const h = l.getAttribute("data-ga-input-header-event") || "", u = c.target.value || "";
      e({
        name: "onenter",
        action: "type",
        type: "main search",
        section: "topbar",
        region: "navbar",
        text: u.toLowerCase(),
        event: h.toLowerCase()
      });
    })
  ), (s = document.querySelectorAll("[data-ga]")) == null || s.forEach(
    (l) => l.addEventListener("click", () => {
      const c = {};
      Array.from(l.attributes).forEach((u) => {
        if (u.name.startsWith("data-ga-")) {
          const m = u.name.replace("data-ga-", ""), y = u.value;
          y && (c[m] = y.toLowerCase());
        } else if (u.name === "data-ga") {
          const m = u.value;
          m && (c.text = m.toLowerCase());
        }
      });
      const h = l.getAttribute("aria-expanded");
      h && (c.action = h === "false" ? "open" : "close"), e(c);
    })
  ), (a = document.querySelectorAll("[data-ga-input]")) == null || a.forEach(
    (l) => l.addEventListener("change", (c) => {
      const h = l.getAttribute("data-ga-input-name") || "", u = l.getAttribute("data-ga-input-action") || "", m = l.getAttribute("data-ga-input") || "", y = l.getAttribute("data-ga-input-region") || "", _ = l.getAttribute("data-ga-input-section") || "";
      let g = l.getAttribute("data-ga-input-event") || "", w;
      switch (m) {
        case "checkbox":
          w = c.target.labels[0].textContent || "", g = c.target.checked ? g : "deselect";
          break;
        case "radio button":
          w = c.target.labels[0].textContent || "";
          break;
        case "blur":
          w = c.target.value.toLowerCase() || "";
          break;
        default:
          w = [...c.target.selectedOptions].map((b) => b.value).join(",") || "";
          break;
      }
      e({
        name: h.toLowerCase(),
        event: g.toLowerCase(),
        action: u.toLowerCase(),
        type: m.toLowerCase(),
        section: _.toLowerCase(),
        region: y.toLowerCase(),
        text: w.toLowerCase()
      });
    })
  ), document.querySelectorAll("[data-ga-footer]").forEach(
    (l) => l.addEventListener("focus", () => {
      const c = {
        type: l.getAttribute("data-ga-footer-type").toLowerCase(),
        section: l.getAttribute("data-ga-footer-section").toLowerCase(),
        text: l.getAttribute("data-ga-footer").toLowerCase()
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
window.initDataLayer = window.initDataLayer || ke;
F.on(window, "load.uds.data-layer", ke);
const He = () => {
  const e = () => {
    const r = document.getElementById("asu-header");
    window.scrollY > (r == null ? void 0 : r.getBoundingClientRect().top) ? r == null || r.classList.add("scrolled") : r == null || r.classList.remove("scrolled");
  };
  F.on(window, "scroll.uds.header", e), document.querySelectorAll(
    ".uds-header-v2 .header-top-search .search-button"
  ).forEach((r) => {
    r.addEventListener("click", () => {
      const s = r.closest(".header-top-search");
      if (s) {
        s.classList.add("open");
        const a = s.querySelector(".search-input");
        a && a.focus();
      }
    });
  }), document.querySelectorAll(".uds-header-v2 .navbar-mobile-search input[type=search]").forEach((r) => {
    r.addEventListener("input", () => {
      const s = r.closest(".navbar-mobile-search");
      s && (r.value.length > 0 ? s.classList.add("has-value") : s.classList.remove("has-value"));
    });
  }), document.querySelectorAll(".uds-header-v2 .header-top-search .search-input").forEach((r) => {
    r.addEventListener("blur", () => {
      if (!r.value) {
        const s = r.closest(".header-top-search");
        s && setTimeout(() => s.classList.remove("open"), 200);
      }
    });
  });
};
window.initGlobalHeader = window.initGlobalHeader || He;
F.on(window, "load.uds.global-header", He);
function $n() {
  const e = ".uds-video-hero", n = e + " video", r = e + " #playHeroVid", s = e + " #pauseHeroVid", a = "click", l = "block", c = "none", h = document.querySelector(n), u = document.querySelector(r), m = document.querySelector(s);
  function y(b) {
    b.paused ? b.play() : b.pause();
  }
  function _(b, E) {
    getComputedStyle(b).display === c ? (E.style.display = c, b.style.display = l, b.focus()) : (b.style.display = c, E.style.display = l, E.focus());
  }
  function g(b) {
    b.stopPropagation(), _(u, m), y(h);
  }
  function w(b) {
    b.stopPropagation(), _(u, m), y(h);
  }
  m == null || m.addEventListener(a, g), u == null || u.addEventListener(a, w);
}
F.on(window, "load.uds.heroes-video", $n);
const Vn = () => {
  const n = () => {
    document.querySelectorAll(".parallax-container").forEach((c) => {
      const h = c.querySelector("img"), u = c.offsetHeight - h.height * 1.2, m = h.dataset.parallaxType === "scroll-to" ? window.innerHeight : window.innerHeight + c.offsetHeight, y = c.getBoundingClientRect().top, g = (window.innerHeight - y) / m;
      if (g < 0)
        h.style.top = u + "px";
      else if (g > 1)
        h.style.top = "0";
      else {
        const w = u * (1 - g);
        h.style.top = w + "px";
      }
    });
  }, r = (c) => {
    const h = c.parentNode, u = c.width, m = c.height;
    let y = h.offsetWidth / u, _ = 0, g = m * y, w = u * y;
    const b = +c.dataset.parallaxFactor || 1.2;
    !c.dataset.noScale && g < h.offsetHeight * b && (y = h.offsetHeight * b / g, g *= y, w *= y, _ = (w - h.offsetWidth) / 2 * -1), c.style.height = g + "px", c.style.left = _ + "px";
  }, s = () => {
    document.querySelectorAll(".parallax-container img").forEach((c, h) => {
      c.complete ? r(c) : c.onload = () => r(c);
    });
  }, a = (c) => {
    const { dataLayer: h } = window, u = {
      event: "link",
      action: "click",
      name: "onclick",
      type: "internal link",
      region: "main content",
      ...c
    };
    h && h.push(u);
  };
  document.querySelectorAll("[data-ga-image-parallax]").forEach(
    (c) => F.on(c, "focus.uds.image-parallax", () => {
      const h = {
        section: c.getAttribute("data-ga-image-parallax-section").toLowerCase(),
        text: c.getAttribute("data-ga-image-parallax").toLowerCase()
      };
      a(h);
    })
  ), s(), F.on(window, "resize.uds.image-parallax", s), F.on(window, "scroll.uds.image-parallax", n);
};
F.on(window, "load.uds.image-parallax", Vn);
function Xn() {
  var e, n;
  (e = document.getElementById("openModalButton")) == null || e.addEventListener("click", function() {
    document.getElementById("uds-modal").classList.add("open");
  }), (n = document.getElementById("closeModalButton")) == null || n.addEventListener("click", function() {
    document.getElementById("uds-modal").classList.remove("open");
  });
}
F.on(window, "load.uds.modals", Xn);
function Kn() {
  const n = "button", r = ".nav-tabs", s = ".nav-item", a = ".uds-tabbed-panels", l = ".scroll-control-prev", c = ".scroll-control-next", h = "click", u = "scroll", m = "focus", y = "none", _ = "block", w = (E) => {
    ["a", n].includes(E.target.localName) && E.target.focus();
  }, b = (E) => {
    const v = E.parentElement, S = E.offsetLeft + E.offsetWidth, W = v.scrollLeft + v.offsetWidth;
    v.scrollLeft > E.offsetLeft && (v.scrollLeft = E.offsetLeft), W < S && (v.scrollLeft += S - W);
  };
  document.querySelectorAll(a).forEach((E) => {
    const v = E.querySelector(r), S = E.querySelectorAll(s), W = E.querySelector(
      l
    ), ut = E.querySelector(
      c
    );
    let k = 0;
    E.addEventListener(h, function(I) {
      w(I);
    });
    const Q = (I, U, Z) => {
      U.preventDefault();
      const st = getComputedStyle(v).left.replace("px", "");
      let et = parseInt(st, 10);
      Z === 1 && k > 0 && (k -= 1), k < S.length - 1 && Z == -1 && (k += 1), v.dataset.scrollPosition = k, et = 0;
      for (var K = 0; K < k; K++)
        et += S[K].offsetWidth + parseInt(getComputedStyle(S[K]).marginLeft, 10) + parseInt(getComputedStyle(S[K]).marginRight, 10);
      v.scrollLeft = et, Y(I, et);
    }, Y = (I, U) => {
      const Z = v.scrollWidth - U;
      k == 0 ? W.style.display = y : W.style.display = _, Z <= E.offsetWidth ? ut.style.display = y : ut.style.display = _;
    };
    v.addEventListener(u, (I) => {
      const U = I.target.scrollLeft, Z = v.offsetWidth + U + 10 >= v.scrollWidth;
      W.style.display = U < 10 ? y : _, ut.style.display = Z ? y : _;
    }), S.forEach((I) => {
      I.addEventListener(m, function(U) {
        b(I);
      });
    }), ut.addEventListener(h, function(I) {
      Q(this, I, -1);
    }), W.addEventListener(h, function(I) {
      Q(this, I, 1);
    }), W.style.display = y;
    const C = v.scrollWidth, A = E.offsetWidth;
    C <= A && (ut.style.display = y);
  });
}
F.on(window, "load.uds.tabs", Kn);
function Qn() {
  function e() {
    const s = ".uds-table-fixed-wrapper", a = ".uds-table.uds-table-fixed table", l = ".scroll-control.previous";
    document.querySelectorAll(s).forEach((h, u) => {
      const m = h.querySelector(a);
      m.setAttribute("id", "uds-table-" + u);
      const y = m.querySelector("tbody tr > *"), _ = h.querySelector(l);
      _.style.left = y.offsetWidth + "px";
    });
  }
  function n() {
    const s = ".uds-table-fixed", a = ".uds-table-fixed-wrapper", l = ".scroll-control.previous", c = ".scroll-control.next";
    document.querySelectorAll(a).forEach((u, m) => {
      const y = u.querySelector(s), _ = u.querySelector(l), g = u.querySelector(c);
      ["click", "focus"].forEach((w) => {
        F.on(_, w, function() {
          y.scrollLeft -= 100;
        }), F.on(g, w, function() {
          y.scrollLeft += 100;
        });
      });
    });
  }
  function r(s, a) {
    let l;
    return (...c) => {
      clearTimeout(l), l = setTimeout(() => {
        s.apply(this, c);
      }, a);
    };
  }
  e(), n(), F.on(window, "resize", function() {
    r(e, 100)();
  });
}
F.on(window, "load.uds.fixed-table", Qn);
function Zn() {
  const r = ".uds-tooltip-container", a = "[aria-describedby]", h = document.querySelectorAll(
    `${r} > ${a} + [role=tooltip]`
  );
  function u() {
    document.querySelectorAll(
      `${a}[aria-expanded="true"]`
    ).forEach((w) => {
      w.setAttribute("aria-expanded", "false");
    });
  }
  function m(g) {
    let w = g.target.querySelector(`${r} ${a}`) || g.target, b = w.nextElementSibling;
    g.type === "keydown" && g.key !== " " || (u(), w.getBoundingClientRect().right + 288 > window.innerWidth ? b.classList.add("bottom-placement") : b.classList.remove("bottom-placement"), w.setAttribute("aria-expanded", "true"));
  }
  function y(g) {
    let w = g.target.querySelector(`${r} ${a}`) || g.target;
    g.type === "mouseleave" && w === document.activeElement || w.setAttribute("aria-expanded", "false");
  }
  function _(g) {
    g.key === "Escape" && y(g);
  }
  [...h].map((g) => {
    const w = new AbortController(), { signal: b } = w, E = g.previousElementSibling, v = E.parentElement;
    return E.addEventListener("mouseenter", m, { signal: b }), E.addEventListener("focus", m, { signal: b }), E.addEventListener("keydown", m, { signal: b }), E.addEventListener("blur", y, { signal: b }), E.addEventListener("keydown", _, { signal: b }), v.addEventListener("mouseleave", y, { signal: b }), w;
  });
}
F.on(window, "load.uds.tooltips", Zn);
function Jn() {
  const e = ".uds-video-player", n = e + " video", r = e + " .uds-video-btn-play", s = e + " .uds-video-overlay", a = "click", l = "ended", c = "flex", h = "none", u = document.querySelector(n), m = document.querySelector(s), y = document.querySelector(r);
  function _(S) {
    S.style.display === h ? S.style.display = c : S.style.display = h;
  }
  function g(S) {
    S.paused ? S.play() : S.pause();
  }
  function w(S) {
    g(this), _(this.nextElementSibling);
  }
  function b(S) {
    S.stopPropagation();
    const W = this.parentNode;
    _(W), g(u);
  }
  function E(S) {
    _(this), g(u);
  }
  function v(S) {
    _(m);
  }
  u == null || u.addEventListener(a, w), y == null || y.addEventListener(a, b), m == null || m.addEventListener(a, E), u == null || u.addEventListener(l, v);
}
F.on(window, "load.uds.video", Jn);
const mr = {
  // Banner, // code updated to use bootstrap alert so we don't need this
  initAnchorMenu: zn,
  initBlockquoteAnimation: Wn,
  initCalendar: Yn,
  initCollapse: Gn,
  initChart: jn,
  initDataLayer: ke,
  initFixedTable: Qn,
  initGlobalHeader: He,
  initHeroesVideo: $n,
  initImageParallax: Vn,
  initModals: Xn,
  initRankingCard: qn,
  initTabbedPanels: Kn,
  initTooltips: Zn,
  initVideo: Jn,
  initCardBodies: Pe
};
export {
  mr as default
};
//# sourceMappingURL=unity-bootstrap.es.js.map
