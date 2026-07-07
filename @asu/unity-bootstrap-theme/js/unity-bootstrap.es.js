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
  return function r(i) {
    return xe(i, { delegateTarget: e }), r.oneOff && U.off(e, i.type, n), n.apply(e, [i]);
  };
}
function So(e, n, r) {
  return function i(a) {
    const l = e.querySelectorAll(n);
    for (let { target: c } = a; c && c !== this; c = c.parentNode)
      for (const m of l)
        if (m === c)
          return xe(a, { delegateTarget: c }), i.oneOff && U.off(e, a.type, n, r), r.apply(c, [a]);
  };
}
function xn(e, n, r = null) {
  return Object.values(e).find((i) => i.callable === n && i.delegationSelector === r);
}
function Pn(e, n, r) {
  const i = typeof n == "string", a = i ? r : n || r;
  let l = kn(e);
  return Ao.has(l) || (l = e), [i, a, l];
}
function un(e, n, r, i, a) {
  if (typeof n != "string" || !e)
    return;
  let [l, c, m] = Pn(n, r, i);
  n in In && (c = ((b) => function(E) {
    if (!E.relatedTarget || E.relatedTarget !== E.delegateTarget && !E.delegateTarget.contains(E.relatedTarget))
      return b.call(this, E);
  })(c));
  const u = Mn(e), h = u[m] || (u[m] = {}), y = xn(h, c, l ? r : null);
  if (y) {
    y.oneOff = y.oneOff && a;
    return;
  }
  const _ = Dn(c, n.replace(Eo, "")), g = l ? So(e, r, c) : bo(e, c);
  g.delegationSelector = l ? r : null, g.callable = c, g.oneOff = a, g.uidEvent = _, h[_] = g, e.addEventListener(m, g, l);
}
function Ie(e, n, r, i, a) {
  const l = xn(n[r], i, a);
  l && (e.removeEventListener(r, l, !!a), delete n[r][l.uidEvent]);
}
function wo(e, n, r, i) {
  const a = n[r] || {};
  for (const [l, c] of Object.entries(a))
    l.includes(i) && Ie(e, n, r, c.callable, c.delegationSelector);
}
function kn(e) {
  return e = e.replace(To, ""), In[e] || e;
}
const U = {
  on(e, n, r, i) {
    un(e, n, r, i, !1);
  },
  one(e, n, r, i) {
    un(e, n, r, i, !0);
  },
  off(e, n, r, i) {
    if (typeof n != "string" || !e)
      return;
    const [a, l, c] = Pn(n, r, i), m = c !== n, u = Mn(e), h = u[c] || {}, y = n.startsWith(".");
    if (typeof l < "u") {
      if (!Object.keys(h).length)
        return;
      Ie(e, u, c, l, a ? r : null);
      return;
    }
    if (y)
      for (const _ of Object.keys(u))
        wo(e, u, _, n.slice(1));
    for (const [_, g] of Object.entries(h)) {
      const w = _.replace(_o, "");
      (!m || n.includes(w)) && Ie(e, u, c, g.callable, g.delegationSelector);
    }
  },
  trigger(e, n, r) {
    if (typeof n != "string" || !e)
      return null;
    const i = yo(), a = kn(n), l = n !== a;
    let c = null, m = !0, u = !0, h = !1;
    l && i && (c = i.Event(n, r), i(e).trigger(c), m = !c.isPropagationStopped(), u = !c.isImmediatePropagationStopped(), h = c.isDefaultPrevented());
    const y = xe(new Event(n, { bubbles: m, cancelable: !0 }), r);
    return h && y.preventDefault(), u && e.dispatchEvent(y), y.defaultPrevented && c && c.preventDefault(), y;
  }
};
function xe(e, n = {}) {
  for (const [r, i] of Object.entries(n))
    try {
      e[r] = i;
    } catch {
      Object.defineProperty(e, r, {
        configurable: !0,
        get() {
          return i;
        }
      });
    }
  return e;
}
function vo(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ae = { exports: {} }, R = {}, fn;
function Lo() {
  if (fn) return R;
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
  var n = Symbol.for("react.transitional.element"), r = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), l = Symbol.for("react.profiler"), c = Symbol.for("react.consumer"), m = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), y = Symbol.for("react.memo"), _ = Symbol.for("react.lazy"), g = Symbol.for("react.activity"), w = Symbol.iterator;
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
  function W(o, f, O) {
    this.props = o, this.context = f, this.refs = S, this.updater = O || E;
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
  function ct() {
  }
  ct.prototype = W.prototype;
  function k(o, f, O) {
    this.props = o, this.context = f, this.refs = S, this.updater = O || E;
  }
  var Z = k.prototype = new ct();
  Z.constructor = k, v(Z, W.prototype), Z.isPureReactComponent = !0;
  var q = Array.isArray;
  function C() {
  }
  var A = { H: null, A: null, T: null, S: null }, I = Object.prototype.hasOwnProperty;
  function H(o, f, O) {
    var L = O.ref;
    return {
      $$typeof: n,
      type: o,
      key: f,
      ref: L !== void 0 ? L : null,
      props: O
    };
  }
  function $(o, f) {
    return H(o.type, f, o.props);
  }
  function K(o) {
    return typeof o == "object" && o !== null && o.$$typeof === n;
  }
  function At(o) {
    var f = { "=": "=0", ":": "=2" };
    return "$" + o.replace(/[=:]/g, function(O) {
      return f[O];
    });
  }
  var lt = /\/+/g;
  function Q(o, f) {
    return typeof o == "object" && o !== null && o.key != null ? At("" + o.key) : f.toString(36);
  }
  function mt(o) {
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
  function ut(o, f, O, L, M) {
    var P = typeof o;
    (P === "undefined" || P === "boolean") && (o = null);
    var F = !1;
    if (o === null) F = !0;
    else
      switch (P) {
        case "bigint":
        case "string":
        case "number":
          F = !0;
          break;
        case "object":
          switch (o.$$typeof) {
            case n:
            case r:
              F = !0;
              break;
            case _:
              return F = o._init, ut(
                F(o._payload),
                f,
                O,
                L,
                M
              );
          }
      }
    if (F)
      return M = M(o), F = L === "" ? "." + Q(o, 0) : L, q(M) ? (O = "", F != null && (O = F.replace(lt, "$&/") + "/"), ut(M, f, O, "", function(z) {
        return z;
      })) : M != null && (K(M) && (M = $(
        M,
        O + (M.key == null || o && o.key === M.key ? "" : ("" + M.key).replace(
          lt,
          "$&/"
        ) + "/") + F
      )), f.push(M)), 1;
    F = 0;
    var ft = L === "" ? "." : L + ":";
    if (q(o))
      for (var et = 0; et < o.length; et++)
        L = o[et], P = ft + Q(L, et), F += ut(
          L,
          f,
          O,
          P,
          M
        );
    else if (et = b(o), typeof et == "function")
      for (o = et.call(o), et = 0; !(L = o.next()).done; )
        L = L.value, P = ft + Q(L, et++), F += ut(
          L,
          f,
          O,
          P,
          M
        );
    else if (P === "object") {
      if (typeof o.then == "function")
        return ut(
          mt(o),
          f,
          O,
          L,
          M
        );
      throw f = String(o), Error(
        "Objects are not valid as a React child (found: " + (f === "[object Object]" ? "object with keys {" + Object.keys(o).join(", ") + "}" : f) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return F;
  }
  function Tt(o, f, O) {
    if (o == null) return o;
    var L = [], M = 0;
    return ut(o, L, "", "", function(P) {
      return f.call(O, P, M++);
    }), L;
  }
  function Ft(o) {
    if (o._status === -1) {
      var f = o._result;
      f = f(), f.then(
        function(O) {
          (o._status === 0 || o._status === -1) && (o._status = 1, o._result = O);
        },
        function(O) {
          (o._status === 0 || o._status === -1) && (o._status = 2, o._result = O);
        }
      ), o._status === -1 && (o._status = 0, o._result = f);
    }
    if (o._status === 1) return o._result.default;
    throw o._result;
  }
  var Ot = typeof reportError == "function" ? reportError : function(o) {
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
    map: Tt,
    forEach: function(o, f, O) {
      Tt(
        o,
        function() {
          f.apply(this, arguments);
        },
        O
      );
    },
    count: function(o) {
      var f = 0;
      return Tt(o, function() {
        f++;
      }), f;
    },
    toArray: function(o) {
      return Tt(o, function(f) {
        return f;
      }) || [];
    },
    only: function(o) {
      if (!K(o))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return o;
    }
  };
  return R.Activity = g, R.Children = B, R.Component = W, R.Fragment = i, R.Profiler = l, R.PureComponent = k, R.StrictMode = a, R.Suspense = h, R.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = A, R.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(o) {
      return A.H.useMemoCache(o);
    }
  }, R.cache = function(o) {
    return function() {
      return o.apply(null, arguments);
    };
  }, R.cacheSignal = function() {
    return null;
  }, R.cloneElement = function(o, f, O) {
    if (o == null)
      throw Error(
        "The argument must be a React element, but you passed " + o + "."
      );
    var L = v({}, o.props), M = o.key;
    if (f != null)
      for (P in f.key !== void 0 && (M = "" + f.key), f)
        !I.call(f, P) || P === "key" || P === "__self" || P === "__source" || P === "ref" && f.ref === void 0 || (L[P] = f[P]);
    var P = arguments.length - 2;
    if (P === 1) L.children = O;
    else if (1 < P) {
      for (var F = Array(P), ft = 0; ft < P; ft++)
        F[ft] = arguments[ft + 2];
      L.children = F;
    }
    return H(o.type, M, L);
  }, R.createContext = function(o) {
    return o = {
      $$typeof: m,
      _currentValue: o,
      _currentValue2: o,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, o.Provider = o, o.Consumer = {
      $$typeof: c,
      _context: o
    }, o;
  }, R.createElement = function(o, f, O) {
    var L, M = {}, P = null;
    if (f != null)
      for (L in f.key !== void 0 && (P = "" + f.key), f)
        I.call(f, L) && L !== "key" && L !== "__self" && L !== "__source" && (M[L] = f[L]);
    var F = arguments.length - 2;
    if (F === 1) M.children = O;
    else if (1 < F) {
      for (var ft = Array(F), et = 0; et < F; et++)
        ft[et] = arguments[et + 2];
      M.children = ft;
    }
    if (o && o.defaultProps)
      for (L in F = o.defaultProps, F)
        M[L] === void 0 && (M[L] = F[L]);
    return H(o, P, M);
  }, R.createRef = function() {
    return { current: null };
  }, R.forwardRef = function(o) {
    return { $$typeof: u, render: o };
  }, R.isValidElement = K, R.lazy = function(o) {
    return {
      $$typeof: _,
      _payload: { _status: -1, _result: o },
      _init: Ft
    };
  }, R.memo = function(o, f) {
    return {
      $$typeof: y,
      type: o,
      compare: f === void 0 ? null : f
    };
  }, R.startTransition = function(o) {
    var f = A.T, O = {};
    A.T = O;
    try {
      var L = o(), M = A.S;
      M !== null && M(O, L), typeof L == "object" && L !== null && typeof L.then == "function" && L.then(C, Ot);
    } catch (P) {
      Ot(P);
    } finally {
      f !== null && O.types !== null && (f.types = O.types), A.T = f;
    }
  }, R.unstable_useCacheRefresh = function() {
    return A.H.useCacheRefresh();
  }, R.use = function(o) {
    return A.H.use(o);
  }, R.useActionState = function(o, f, O) {
    return A.H.useActionState(o, f, O);
  }, R.useCallback = function(o, f) {
    return A.H.useCallback(o, f);
  }, R.useContext = function(o) {
    return A.H.useContext(o);
  }, R.useDebugValue = function() {
  }, R.useDeferredValue = function(o, f) {
    return A.H.useDeferredValue(o, f);
  }, R.useEffect = function(o, f) {
    return A.H.useEffect(o, f);
  }, R.useEffectEvent = function(o) {
    return A.H.useEffectEvent(o);
  }, R.useId = function() {
    return A.H.useId();
  }, R.useImperativeHandle = function(o, f, O) {
    return A.H.useImperativeHandle(o, f, O);
  }, R.useInsertionEffect = function(o, f) {
    return A.H.useInsertionEffect(o, f);
  }, R.useLayoutEffect = function(o, f) {
    return A.H.useLayoutEffect(o, f);
  }, R.useMemo = function(o, f) {
    return A.H.useMemo(o, f);
  }, R.useOptimistic = function(o, f) {
    return A.H.useOptimistic(o, f);
  }, R.useReducer = function(o, f, O) {
    return A.H.useReducer(o, f, O);
  }, R.useRef = function(o) {
    return A.H.useRef(o);
  }, R.useState = function(o) {
    return A.H.useState(o);
  }, R.useSyncExternalStore = function(o, f, O) {
    return A.H.useSyncExternalStore(
      o,
      f,
      O
    );
  }, R.useTransition = function() {
    return A.H.useTransition();
  }, R.version = "19.2.6", R;
}
var dn;
function Oo() {
  return dn || (dn = 1, Ae.exports = Lo()), Ae.exports;
}
Oo();
/*! @license DOMPurify 3.4.11 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.4.11/LICENSE */
function pn(e, n) {
  (n == null || n > e.length) && (n = e.length);
  for (var r = 0, i = Array(n); r < n; r++) i[r] = e[r];
  return i;
}
function Ro(e) {
  if (Array.isArray(e)) return e;
}
function Co(e, n) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var i, a, l, c, m = [], u = !0, h = !1;
    try {
      if (l = (r = r.call(e)).next, n !== 0) for (; !(u = (i = l.call(r)).done) && (m.push(i.value), m.length !== n); u = !0) ;
    } catch (y) {
      h = !0, a = y;
    } finally {
      try {
        if (!u && r.return != null && (c = r.return(), Object(c) !== c)) return;
      } finally {
        if (h) throw a;
      }
    }
    return m;
  }
}
function No() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Io(e, n) {
  return Ro(e) || Co(e, n) || Do(e, n) || No();
}
function Do(e, n) {
  if (e) {
    if (typeof e == "string") return pn(e, n);
    var r = {}.toString.call(e).slice(8, -1);
    return r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? pn(e, n) : void 0;
  }
}
const Hn = Object.entries, mn = Object.setPrototypeOf, Mo = Object.isFrozen, xo = Object.getPrototypeOf, Po = Object.getOwnPropertyDescriptor;
let ot = Object.freeze, rt = Object.seal, Ht = Object.create, Fn = typeof Reflect < "u" && Reflect, De = Fn.apply, Me = Fn.construct;
ot || (ot = function(n) {
  return n;
});
rt || (rt = function(n) {
  return n;
});
De || (De = function(n, r) {
  for (var i = arguments.length, a = new Array(i > 2 ? i - 2 : 0), l = 2; l < i; l++)
    a[l - 2] = arguments[l];
  return n.apply(r, a);
});
Me || (Me = function(n) {
  for (var r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
    i[a - 1] = arguments[a];
  return new n(...i);
});
const qt = X(Array.prototype.forEach), ko = X(Array.prototype.lastIndexOf), hn = X(Array.prototype.pop), kt = X(Array.prototype.push), Ho = X(Array.prototype.splice), Lt = Array.isArray, Yt = X(String.prototype.toLowerCase), be = X(String.prototype.toString), gn = X(String.prototype.match), jt = X(String.prototype.replace), yn = X(String.prototype.indexOf), Fo = X(String.prototype.trim), Uo = X(Number.prototype.toString), Bo = X(Boolean.prototype.toString), En = typeof BigInt > "u" ? null : X(BigInt.prototype.toString), Tn = typeof Symbol > "u" ? null : X(Symbol.prototype.toString), tt = X(Object.prototype.hasOwnProperty), Gt = X(Object.prototype.toString), nt = X(RegExp.prototype.test), Nt = zo(TypeError);
function X(e) {
  return function(n) {
    n instanceof RegExp && (n.lastIndex = 0);
    for (var r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
      i[a - 1] = arguments[a];
    return De(e, n, i);
  };
}
function zo(e) {
  return function() {
    for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
      r[i] = arguments[i];
    return Me(e, r);
  };
}
function D(e, n) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Yt;
  if (mn && mn(e, null), !Lt(n))
    return e;
  let i = n.length;
  for (; i--; ) {
    let a = n[i];
    if (typeof a == "string") {
      const l = r(a);
      l !== a && (Mo(n) || (n[i] = l), a = l);
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
function it(e) {
  const n = Ht(null);
  for (const i of Hn(e)) {
    var r = Io(i, 2);
    const a = r[0], l = r[1];
    tt(e, a) && (Lt(l) ? n[a] = Wo(l) : l && typeof l == "object" && l.constructor === Object ? n[a] = it(l) : n[a] = l);
  }
  return n;
}
function qo(e) {
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
      return Gt(e);
    case "function":
    case "object": {
      if (e === null)
        return Gt(e);
      const n = e, r = Et(n, "toString");
      if (typeof r == "function") {
        const i = r(n);
        return typeof i == "string" ? i : Gt(i);
      }
      return Gt(e);
    }
    default:
      return Gt(e);
  }
}
function Et(e, n) {
  for (; e !== null; ) {
    const i = Po(e, n);
    if (i) {
      if (i.get)
        return X(i.get);
      if (typeof i.value == "function")
        return X(i.value);
    }
    e = xo(e);
  }
  function r() {
    return null;
  }
  return r;
}
function jo(e) {
  try {
    return nt(e, ""), !0;
  } catch {
    return !1;
  }
}
const _n = ot(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Se = ot(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), we = ot(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Go = ot(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), ve = ot(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), Yo = ot(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), An = ot(["#text"]), bn = ot(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), Le = ot(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Sn = ot(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), ee = ot(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), $o = rt(/{{[\w\W]*|^[\w\W]*}}/g), Vo = rt(/<%[\w\W]*|^[\w\W]*%>/g), Xo = rt(/\${[\w\W]*/g), Ko = rt(/^data-[\-\w.\u00B7-\uFFFF]+$/), Qo = rt(/^aria-[\-\w]+$/), wn = rt(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), Zo = rt(/^(?:\w+script|data):/i), Jo = rt(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), tr = rt(/^html$/i), er = rt(/^[a-z][.\w]*(-[.\w]+)+$/i), vn = rt(/<[/\w!]/g), nr = rt(/<[/\w]/g), or = rt(/<\/no(script|embed|frames)/i), rr = rt(/\/>/i), yt = {
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
}, sr = function() {
  return typeof window > "u" ? null : window;
}, ir = function(n, r) {
  if (typeof n != "object" || typeof n.createPolicy != "function")
    return null;
  let i = null;
  const a = "data-tt-policy-suffix";
  r && r.hasAttribute(a) && (i = r.getAttribute(a));
  const l = "dompurify" + (i ? "#" + i : "");
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
}, vt = function(n, r, i, a) {
  return tt(n, r) && Lt(n[r]) ? D(a.base ? it(a.base) : {}, n[r], a.transform) : i;
};
function Un() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : sr();
  const n = (p) => Un(p);
  if (n.version = "3.4.11", n.removed = [], !e || !e.document || e.document.nodeType !== yt.document || !e.Element)
    return n.isSupported = !1, n;
  let r = e.document;
  const i = r, a = i.currentScript;
  e.DocumentFragment;
  const l = e.HTMLTemplateElement, c = e.Node, m = e.Element, u = e.NodeFilter, h = e.NamedNodeMap;
  h === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const y = e.DOMParser, _ = e.trustedTypes, g = m.prototype, w = Et(g, "cloneNode"), b = Et(g, "remove"), E = Et(g, "nextSibling"), v = Et(g, "childNodes"), S = Et(g, "parentNode"), W = Et(g, "shadowRoot"), ct = Et(g, "attributes"), k = c && c.prototype ? Et(c.prototype, "nodeType") : null, Z = c && c.prototype ? Et(c.prototype, "nodeName") : null;
  if (typeof l == "function") {
    const p = r.createElement("template");
    p.content && p.content.ownerDocument && (r = p.content.ownerDocument);
  }
  let q, C = "", A, I = !1, H = 0;
  const $ = function() {
    if (H > 0)
      throw Nt('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, K = function(t) {
    $(), H++;
    try {
      return q.createHTML(t);
    } finally {
      H--;
    }
  }, At = function(t) {
    $(), H++;
    try {
      return q.createScriptURL(t);
    } finally {
      H--;
    }
  }, lt = function() {
    return I || (A = ir(_, a), I = !0), A;
  }, Q = r, mt = Q.implementation, ut = Q.createNodeIterator, Tt = Q.createDocumentFragment, Ft = Q.getElementsByTagName, Ot = i.importNode;
  let B = Ln();
  n.isSupported = typeof Hn == "function" && typeof S == "function" && mt && mt.createHTMLDocument !== void 0;
  const o = $o, f = Vo, O = Xo, L = Ko, M = Qo, P = Zo, F = Jo, ft = er;
  let et = wn, z = null;
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
  let ze = !0, ne = !0, We = !1, qe = !0, St = !1, Bt = !0, Rt = !1, oe = !1, re = null, se = null, ie = !1, It = !1, Vt = !1, Xt = !1, je = !0, Ge = !1;
  const Ye = "user-content-";
  let ae = !0, ce = !1, Dt = {}, ht = null;
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
  const Xe = D({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), Kt = "http://www.w3.org/1998/Math/MathML", Qt = "http://www.w3.org/2000/svg", gt = "http://www.w3.org/1999/xhtml";
  let Mt = gt, fe = !1, de = null;
  const to = D({}, [Kt, Qt, gt], be), Ke = ot(["mi", "mo", "mn", "ms", "mtext"]);
  let pe = D({}, Ke);
  const Qe = ot(["annotation-xml"]);
  let me = D({}, Qe);
  const eo = D({}, ["title", "style", "font", "a", "script"]);
  let zt = null;
  const no = ["application/xhtml+xml", "text/html"], oo = "text/html";
  let Y = null, xt = null;
  const ro = r.createElement("form"), Ze = function(t) {
    return t instanceof RegExp || t instanceof Function;
  }, he = function() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (xt && xt === t)
      return;
    (!t || typeof t != "object") && (t = {}), t = it(t), zt = // eslint-disable-next-line unicorn/prefer-includes
    no.indexOf(t.PARSER_MEDIA_TYPE) === -1 ? oo : t.PARSER_MEDIA_TYPE, Y = zt === "application/xhtml+xml" ? be : Yt, z = vt(t, "ALLOWED_TAGS", Fe, {
      transform: Y
    }), j = vt(t, "ALLOWED_ATTR", Ue, {
      transform: Y
    }), de = vt(t, "ALLOWED_NAMESPACES", to, {
      transform: be
    }), ue = vt(t, "ADD_URI_SAFE_ATTR", Xe, {
      transform: Y,
      base: Xe
    }), $e = vt(t, "ADD_DATA_URI_TAGS", Ve, {
      transform: Y,
      base: Ve
    }), ht = vt(t, "FORBID_CONTENTS", le, {
      transform: Y
    }), Ut = vt(t, "FORBID_TAGS", it({}), {
      transform: Y
    }), Be = vt(t, "FORBID_ATTR", it({}), {
      transform: Y
    }), Dt = tt(t, "USE_PROFILES") ? t.USE_PROFILES && typeof t.USE_PROFILES == "object" ? it(t.USE_PROFILES) : t.USE_PROFILES : !1, ze = t.ALLOW_ARIA_ATTR !== !1, ne = t.ALLOW_DATA_ATTR !== !1, We = t.ALLOW_UNKNOWN_PROTOCOLS || !1, qe = t.ALLOW_SELF_CLOSE_IN_ATTR !== !1, St = t.SAFE_FOR_TEMPLATES || !1, Bt = t.SAFE_FOR_XML !== !1, Rt = t.WHOLE_DOCUMENT || !1, It = t.RETURN_DOM || !1, Vt = t.RETURN_DOM_FRAGMENT || !1, Xt = t.RETURN_TRUSTED_TYPE || !1, ie = t.FORCE_BODY || !1, je = t.SANITIZE_DOM !== !1, Ge = t.SANITIZE_NAMED_PROPS || !1, ae = t.KEEP_CONTENT !== !1, ce = t.IN_PLACE || !1, et = jo(t.ALLOWED_URI_REGEXP) ? t.ALLOWED_URI_REGEXP : wn, Mt = typeof t.NAMESPACE == "string" ? t.NAMESPACE : gt, pe = tt(t, "MATHML_TEXT_INTEGRATION_POINTS") && t.MATHML_TEXT_INTEGRATION_POINTS && typeof t.MATHML_TEXT_INTEGRATION_POINTS == "object" ? it(t.MATHML_TEXT_INTEGRATION_POINTS) : D({}, Ke), me = tt(t, "HTML_INTEGRATION_POINTS") && t.HTML_INTEGRATION_POINTS && typeof t.HTML_INTEGRATION_POINTS == "object" ? it(t.HTML_INTEGRATION_POINTS) : D({}, Qe);
    const s = tt(t, "CUSTOM_ELEMENT_HANDLING") && t.CUSTOM_ELEMENT_HANDLING && typeof t.CUSTOM_ELEMENT_HANDLING == "object" ? it(t.CUSTOM_ELEMENT_HANDLING) : Ht(null);
    if (G = Ht(null), tt(s, "tagNameCheck") && Ze(s.tagNameCheck) && (G.tagNameCheck = s.tagNameCheck), tt(s, "attributeNameCheck") && Ze(s.attributeNameCheck) && (G.attributeNameCheck = s.attributeNameCheck), tt(s, "allowCustomizedBuiltInElements") && typeof s.allowCustomizedBuiltInElements == "boolean" && (G.allowCustomizedBuiltInElements = s.allowCustomizedBuiltInElements), rt(G), St && (ne = !1), Vt && (It = !0), Dt && (z = D({}, An), j = Ht(null), Dt.html === !0 && (D(z, _n), D(j, bn)), Dt.svg === !0 && (D(z, Se), D(j, Le), D(j, ee)), Dt.svgFilters === !0 && (D(z, we), D(j, Le), D(j, ee)), Dt.mathMl === !0 && (D(z, ve), D(j, Sn), D(j, ee))), bt.tagCheck = null, bt.attributeCheck = null, tt(t, "ADD_TAGS") && (typeof t.ADD_TAGS == "function" ? bt.tagCheck = t.ADD_TAGS : Lt(t.ADD_TAGS) && (z === Fe && (z = it(z)), D(z, t.ADD_TAGS, Y))), tt(t, "ADD_ATTR") && (typeof t.ADD_ATTR == "function" ? bt.attributeCheck = t.ADD_ATTR : Lt(t.ADD_ATTR) && (j === Ue && (j = it(j)), D(j, t.ADD_ATTR, Y))), tt(t, "ADD_URI_SAFE_ATTR") && Lt(t.ADD_URI_SAFE_ATTR) && D(ue, t.ADD_URI_SAFE_ATTR, Y), tt(t, "FORBID_CONTENTS") && Lt(t.FORBID_CONTENTS) && (ht === le && (ht = it(ht)), D(ht, t.FORBID_CONTENTS, Y)), tt(t, "ADD_FORBID_CONTENTS") && Lt(t.ADD_FORBID_CONTENTS) && (ht === le && (ht = it(ht)), D(ht, t.ADD_FORBID_CONTENTS, Y)), ae && (z["#text"] = !0), Rt && D(z, ["html", "head", "body"]), z.table && (D(z, ["tbody"]), delete Ut.tbody), t.TRUSTED_TYPES_POLICY) {
      if (typeof t.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw Nt('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof t.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw Nt('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const d = q;
      q = t.TRUSTED_TYPES_POLICY;
      try {
        C = K("");
      } catch (T) {
        throw q = d, T;
      }
    } else t.TRUSTED_TYPES_POLICY === null ? (q = void 0, C = "") : (q === void 0 && (q = lt()), q && typeof C == "string" && (C = K("")));
    ot && ot(t), xt = t;
  }, Je = D({}, [...Se, ...we, ...Go]), tn = D({}, [...ve, ...Yo]), so = function(t, s, d) {
    return s.namespaceURI === gt ? t === "svg" : s.namespaceURI === Kt ? t === "svg" && (d === "annotation-xml" || pe[d]) : !!Je[t];
  }, io = function(t, s, d) {
    return s.namespaceURI === gt ? t === "math" : s.namespaceURI === Qt ? t === "math" && me[d] : !!tn[t];
  }, ao = function(t, s, d) {
    return s.namespaceURI === Qt && !me[d] || s.namespaceURI === Kt && !pe[d] ? !1 : !tn[t] && (eo[t] || !Je[t]);
  }, co = function(t) {
    let s = S(t);
    (!s || !s.tagName) && (s = {
      namespaceURI: Mt,
      tagName: "template"
    });
    const d = Yt(t.tagName), T = Yt(s.tagName);
    return de[t.namespaceURI] ? t.namespaceURI === Qt ? so(d, s, T) : t.namespaceURI === Kt ? io(d, s, T) : t.namespaceURI === gt ? ao(d, s, T) : !!(zt === "application/xhtml+xml" && de[t.namespaceURI]) : !1;
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
    const s = v(t);
    if (s) {
      const T = [];
      qt(s, (N) => {
        kt(T, N);
      }), qt(T, (N) => {
        try {
          b(N);
        } catch {
        }
      });
    }
    const d = ct(t);
    if (d)
      for (let T = d.length - 1; T >= 0; --T) {
        const N = d[T], x = N && N.name;
        if (typeof x == "string")
          try {
            t.removeAttribute(x);
          } catch {
          }
      }
  }, Ct = function(t, s) {
    try {
      kt(n.removed, {
        attribute: s.getAttributeNode(t),
        from: s
      });
    } catch {
      kt(n.removed, {
        attribute: null,
        from: s
      });
    }
    if (s.removeAttribute(t), t === "is")
      if (It || Vt)
        try {
          wt(s);
        } catch {
        }
      else
        try {
          s.setAttribute(t, "");
        } catch {
        }
  }, lo = function(t) {
    const s = ct(t);
    if (s)
      for (let d = s.length - 1; d >= 0; --d) {
        const T = s[d], N = T && T.name;
        if (!(typeof N != "string" || j[Y(N)]))
          try {
            t.removeAttribute(N);
          } catch {
          }
      }
  }, uo = function(t) {
    const s = [t];
    for (; s.length > 0; ) {
      const d = s.pop();
      (k ? k(d) : d.nodeType) === yt.element && lo(d);
      const N = v(d);
      if (N)
        for (let x = N.length - 1; x >= 0; --x)
          s.push(N[x]);
    }
  }, nn = function(t) {
    let s = null, d = null;
    if (ie)
      t = "<remove></remove>" + t;
    else {
      const x = gn(t, /^[\r\n\t ]+/);
      d = x && x[0];
    }
    zt === "application/xhtml+xml" && Mt === gt && (t = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + t + "</body></html>");
    const T = q ? K(t) : t;
    if (Mt === gt)
      try {
        s = new y().parseFromString(T, zt);
      } catch {
      }
    if (!s || !s.documentElement) {
      s = mt.createDocument(Mt, "template", null);
      try {
        s.documentElement.innerHTML = fe ? C : T;
      } catch {
      }
    }
    const N = s.body || s.documentElement;
    return t && d && N.insertBefore(r.createTextNode(d), N.childNodes[0] || null), Mt === gt ? Ft.call(s, Rt ? "html" : "body")[0] : Rt ? s.documentElement : N;
  }, on = function(t) {
    return ut.call(
      t.ownerDocument || t,
      t,
      // eslint-disable-next-line no-bitwise
      u.SHOW_ELEMENT | u.SHOW_COMMENT | u.SHOW_TEXT | u.SHOW_PROCESSING_INSTRUCTION | u.SHOW_CDATA_SECTION,
      null
    );
  }, Zt = function(t) {
    return t = jt(t, o, " "), t = jt(t, f, " "), t = jt(t, O, " "), t;
  }, ge = function(t) {
    var s;
    t.normalize();
    const d = ut.call(
      t.ownerDocument || t,
      t,
      // eslint-disable-next-line no-bitwise
      u.SHOW_TEXT | u.SHOW_COMMENT | u.SHOW_CDATA_SECTION | u.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let T = d.nextNode();
    for (; T; )
      T.data = Zt(T.data), T = d.nextNode();
    const N = (s = t.querySelectorAll) === null || s === void 0 ? void 0 : s.call(t, "template");
    N && qt(N, (x) => {
      Pt(x.content) && ge(x.content);
    });
  }, Jt = function(t) {
    const s = Z ? Z(t) : null;
    return typeof s != "string" || Y(s) !== "form" ? !1 : typeof t.nodeName != "string" || typeof t.textContent != "string" || typeof t.removeChild != "function" || // Realm-safe NamedNodeMap detection: equality against the cached
    // prototype getter. Clobbered .attributes (e.g. <input name="attributes">)
    // makes the direct read diverge from the cached read; a clean form
    // (same-realm OR foreign-realm) has both reads pointing at the same
    // canonical NamedNodeMap.
    t.attributes !== ct(t) || typeof t.removeAttribute != "function" || typeof t.setAttribute != "function" || typeof t.namespaceURI != "string" || typeof t.insertBefore != "function" || typeof t.hasChildNodes != "function" || // NodeType clobbering probe. Cached Node.prototype.nodeType getter
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
      return k(t) === yt.documentFragment;
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
  function _t(p, t, s) {
    p.length !== 0 && qt(p, (d) => {
      d.call(n, t, s, xt);
    });
  }
  const fo = function(t, s) {
    return !!(Bt && t.hasChildNodes() && !Wt(t.firstElementChild) && nt(vn, t.textContent) && nt(vn, t.innerHTML) || Bt && t.namespaceURI === gt && s === "style" && Wt(t.firstElementChild) || t.nodeType === yt.processingInstruction || Bt && t.nodeType === yt.comment && nt(nr, t.data));
  }, po = function(t, s) {
    if (!Ut[s] && an(s) && (G.tagNameCheck instanceof RegExp && nt(G.tagNameCheck, s) || G.tagNameCheck instanceof Function && G.tagNameCheck(s)))
      return !1;
    if (ae && !ht[s]) {
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
    if (_t(B.beforeSanitizeElements, t, null), Jt(t))
      return wt(t), !0;
    const s = Y(Z ? Z(t) : t.nodeName);
    if (_t(B.uponSanitizeElement, t, {
      tagName: s,
      allowedTags: z
    }), fo(t, s))
      return wt(t), !0;
    if (Ut[s] || !(bt.tagCheck instanceof Function && bt.tagCheck(s)) && !z[s])
      return po(t, s);
    if ((k ? k(t) : t.nodeType) === yt.element && !co(t) || (s === "noscript" || s === "noembed" || s === "noframes") && nt(or, t.innerHTML))
      return wt(t), !0;
    if (St && t.nodeType === yt.text) {
      const T = Zt(t.textContent);
      t.textContent !== T && (kt(n.removed, {
        element: t.cloneNode()
      }), t.textContent = T);
    }
    return _t(B.afterSanitizeElements, t, null), !1;
  }, sn = function(t, s, d) {
    if (Be[s] || je && (s === "id" || s === "name") && (d in r || d in ro))
      return !1;
    const T = j[s] || bt.attributeCheck instanceof Function && bt.attributeCheck(s, t);
    if (!(ne && nt(L, s))) {
      if (!(ze && nt(M, s))) {
        if (T) {
          if (!ue[s]) {
            if (!nt(et, jt(d, F, ""))) {
              if (!((s === "src" || s === "xlink:href" || s === "href") && t !== "script" && yn(d, "data:") === 0 && $e[t])) {
                if (!(We && !nt(P, jt(d, F, "")))) {
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
          !(an(t) && (G.tagNameCheck instanceof RegExp && nt(G.tagNameCheck, t) || G.tagNameCheck instanceof Function && G.tagNameCheck(t)) && (G.attributeNameCheck instanceof RegExp && nt(G.attributeNameCheck, s) || G.attributeNameCheck instanceof Function && G.attributeNameCheck(s, t)) || // Alternative, second condition checks if it's an `is`-attribute, AND
          // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          s === "is" && G.allowCustomizedBuiltInElements && (G.tagNameCheck instanceof RegExp && nt(G.tagNameCheck, d) || G.tagNameCheck instanceof Function && G.tagNameCheck(d)))
        ) return !1;
      }
    }
    return !0;
  }, mo = D({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), an = function(t) {
    return !mo[Yt(t)] && nt(ft, t);
  }, ho = function(t, s, d, T) {
    if (q && typeof _ == "object" && typeof _.getAttributeType == "function" && !d)
      switch (_.getAttributeType(t, s)) {
        case "TrustedHTML":
          return K(T);
        case "TrustedScriptURL":
          return At(T);
      }
    return T;
  }, go = function(t, s, d, T) {
    try {
      d ? t.setAttributeNS(d, s, T) : t.setAttribute(s, T), Jt(t) ? wt(t) : hn(n.removed);
    } catch {
      Ct(s, t);
    }
  }, cn = function(t) {
    _t(B.beforeSanitizeAttributes, t, null);
    const s = t.attributes;
    if (!s || Jt(t))
      return;
    const d = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: j,
      forceKeepAttr: void 0
    };
    let T = s.length;
    const N = Y(t.nodeName);
    for (; T--; ) {
      const x = s[T], J = x.name, V = x.namespaceURI, dt = x.value, pt = Y(J), Ee = dt;
      let st = J === "value" ? Ee : Fo(Ee);
      if (d.attrName = pt, d.attrValue = st, d.keepAttr = !0, d.forceKeepAttr = void 0, _t(B.uponSanitizeAttribute, t, d), st = d.attrValue, Ge && (pt === "id" || pt === "name") && yn(st, Ye) !== 0 && (Ct(J, t), st = Ye + st), Bt && nt(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, st)) {
        Ct(J, t);
        continue;
      }
      if (pt === "attributename" && gn(st, "href")) {
        Ct(J, t);
        continue;
      }
      if (!d.forceKeepAttr) {
        if (!d.keepAttr) {
          Ct(J, t);
          continue;
        }
        if (!qe && nt(rr, st)) {
          Ct(J, t);
          continue;
        }
        if (St && (st = Zt(st)), !sn(N, pt, st)) {
          Ct(J, t);
          continue;
        }
        st = ho(N, pt, V, st), st !== Ee && go(t, J, V, st);
      }
    }
    _t(B.afterSanitizeAttributes, t, null);
  }, te = function(t) {
    let s = null;
    const d = on(t);
    for (_t(B.beforeSanitizeShadowDOM, t, null); s = d.nextNode(); )
      if (_t(B.uponSanitizeShadowNode, s, null), rn(s), cn(s), Pt(s.content) && te(s.content), (k ? k(s) : s.nodeType) === yt.element) {
        const N = W(s);
        Pt(N) && (ye(N), te(N));
      }
    _t(B.afterSanitizeShadowDOM, t, null);
  }, ye = function(t) {
    const s = [{
      node: t,
      shadow: null
    }];
    for (; s.length > 0; ) {
      const d = s.pop();
      if (d.shadow) {
        te(d.shadow);
        continue;
      }
      const T = d.node, x = (k ? k(T) : T.nodeType) === yt.element, J = v(T);
      if (J)
        for (let V = J.length - 1; V >= 0; --V)
          s.push({
            node: J[V],
            shadow: null
          });
      if (x) {
        const V = Z ? Z(T) : null;
        if (typeof V == "string" && Y(V) === "template") {
          const dt = T.content;
          Pt(dt) && s.push({
            node: dt,
            shadow: null
          });
        }
      }
      if (x) {
        const V = W(T);
        Pt(V) && s.push({
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
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, s = null, d = null, T = null, N = null;
    if (fe = !p, fe && (p = "<!-->"), typeof p != "string" && !Wt(p) && (p = qo(p), typeof p != "string"))
      throw Nt("dirty is not a string, aborting");
    if (!n.isSupported)
      return p;
    oe ? (z = re, j = se) : he(t), (B.uponSanitizeElement.length > 0 || B.uponSanitizeAttribute.length > 0) && (z = it(z)), B.uponSanitizeAttribute.length > 0 && (j = it(j)), n.removed = [];
    const x = ce && typeof p != "string" && Wt(p);
    if (x) {
      const dt = Z ? Z(p) : p.nodeName;
      if (typeof dt == "string") {
        const pt = Y(dt);
        if (!z[pt] || Ut[pt])
          throw Nt("root node is forbidden and cannot be sanitized in-place");
      }
      if (Jt(p))
        throw Nt("root node is clobbered and cannot be sanitized in-place");
      try {
        ye(p);
      } catch (pt) {
        throw en(p), pt;
      }
    } else if (Wt(p))
      s = nn("<!---->"), d = s.ownerDocument.importNode(p, !0), d.nodeType === yt.element && d.nodeName === "BODY" || d.nodeName === "HTML" ? s = d : s.appendChild(d), ye(d);
    else {
      if (!It && !St && !Rt && // eslint-disable-next-line unicorn/prefer-includes
      p.indexOf("<") === -1)
        return q && Xt ? K(p) : p;
      if (s = nn(p), !s)
        return It ? null : Xt ? C : "";
    }
    s && ie && wt(s.firstChild);
    const J = on(x ? p : s);
    try {
      for (; T = J.nextNode(); )
        rn(T), cn(T), Pt(T.content) && te(T.content);
    } catch (dt) {
      throw x && en(p), dt;
    }
    if (x)
      return qt(n.removed, (dt) => {
        dt.element && uo(dt.element);
      }), St && ge(p), p;
    if (It) {
      if (St && ge(s), Vt)
        for (N = Tt.call(s.ownerDocument); s.firstChild; )
          N.appendChild(s.firstChild);
      else
        N = s;
      return (j.shadowroot || j.shadowrootmode) && (N = Ot.call(i, N, !0)), N;
    }
    let V = Rt ? s.outerHTML : s.innerHTML;
    return Rt && z["!doctype"] && s.ownerDocument && s.ownerDocument.doctype && s.ownerDocument.doctype.name && nt(tr, s.ownerDocument.doctype.name) && (V = "<!DOCTYPE " + s.ownerDocument.doctype.name + `>
` + V), St && (V = Zt(V)), q && Xt ? K(V) : V;
  }, n.setConfig = function() {
    let p = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    he(p), oe = !0, re = z, se = j;
  }, n.clearConfig = function() {
    xt = null, oe = !1, re = null, se = null, q = A, C = "";
  }, n.isValidAttribute = function(p, t, s) {
    xt || he({});
    const d = Y(p), T = Y(t);
    return sn(d, T, s);
  }, n.addHook = function(p, t) {
    typeof t == "function" && tt(B, p) && kt(B[p], t);
  }, n.removeHook = function(p, t) {
    if (tt(B, p)) {
      if (t !== void 0) {
        const s = ko(B[p], t);
        return s === -1 ? void 0 : Ho(B[p], s, 1)[0];
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
    const { bottom: n, top: r } = e.getBoundingClientRect(), { offsetTop: i } = e;
    if (r < 0 && n > 0) {
      const a = e.style;
      e.style = `${a};transition: height 0s !important; overflow:hidden; height:${n}px!important;max-height:${n}px!important`, window.scrollTo({ behavior: "instant", top: i }), setTimeout(() => {
        e.style = a, window.scrollTo({
          behavior: "smooth",
          top: e.offsetTop - n / 2
        });
      }, 50);
    }
  }
}
var Oe = { exports: {} }, Re, On;
function cr() {
  if (On) return Re;
  On = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Re = e, Re;
}
var Ce, Rn;
function lr() {
  if (Rn) return Ce;
  Rn = 1;
  var e = /* @__PURE__ */ cr();
  function n() {
  }
  function r() {
  }
  return r.resetWarningCache = n, Ce = function() {
    function i(c, m, u, h, y, _) {
      if (_ !== e) {
        var g = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw g.name = "Invariant Violation", g;
      }
    }
    i.isRequired = i;
    function a() {
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
      arrayOf: a,
      element: i,
      elementType: i,
      instanceOf: a,
      node: i,
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
  return Cn || (Cn = 1, Oe.exports = /* @__PURE__ */ lr()()), Oe.exports;
}
var fr = /* @__PURE__ */ ur();
const at = /* @__PURE__ */ vo(fr);
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
const $t = ({ children: e }) => /* @__PURE__ */ React.createElement(React.Fragment, null, e);
$t.propTypes = {
  children: at.oneOfType([
    at.arrayOf(at.node),
    at.node,
    at.string
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
          var m = arguments[c];
          m && (l = a(l, i(m)));
        }
        return l;
      }
      function i(l) {
        if (typeof l == "string" || typeof l == "number")
          return l;
        if (typeof l != "object")
          return "";
        if (Array.isArray(l))
          return r.apply(null, l);
        if (l.toString !== Object.prototype.toString && !l.toString.toString().includes("[native code]"))
          return l.toString();
        var c = "";
        for (var m in l)
          n.call(l, m) && l[m] && (c = a(c, m));
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
$t.propTypes.children, at.oneOf(["0", "3", "4", "6", "8", "9", "12"]);
$t.propTypes.children;
function zn() {
  var Z, q;
  const r = ["asu-header", "asuHeader"].find((C) => document.getElementById(C)), i = document.getElementById(r), a = document.getElementById("uds-anchor-menu");
  if (!a || !i || Array.from(a.classList).some((C) => C.startsWith("sc-")))
    return;
  const l = Array.from(a.getElementsByClassName("nav-link")), c = /* @__PURE__ */ new Map();
  let m = !1;
  const u = () => Math.max(i.getBoundingClientRect().bottom, 0), h = () => {
    a.style.setProperty(
      "--uds-anchor-menu-top",
      u() + "px"
    ), a.classList.add("uds-anchor-menu-attached"), m = !0;
  }, y = () => {
    a.classList.remove("uds-anchor-menu-attached"), a.style.removeProperty("--uds-anchor-menu-top"), m = !1;
  }, _ = ((Z = document.getElementById("toolbar-bar")) == null ? void 0 : Z.offsetHeight) || 0, g = ((q = document.getElementById("toolbar-item-administration-tray")) == null ? void 0 : q.offsetHeight) || 0, w = _ + g, b = a.getBoundingClientRect().top + window.scrollY - w;
  for (let C of l) {
    const A = C.getAttribute("href");
    if (!A || !A.startsWith("#"))
      continue;
    const I = A.replace("#", ""), H = document.getElementById(I);
    H && c.set(C, H);
  }
  window.scrollY >= b - u() && h();
  function v(C, A = 0) {
    if (!C || A > 10)
      return 0;
    if (C.offsetHeight === 0 || C.offsetWidth === 0)
      return v(C.parentElement, A + 1);
    const I = C.getBoundingClientRect(), H = window.innerHeight || document.documentElement.clientHeight, $ = window.innerWidth || document.documentElement.clientWidth, K = I.bottom - I.top, At = I.right - I.left, lt = K * At, Q = Math.min(H, I.bottom) - Math.max(0, I.top), mt = Math.min($, I.right) - Math.max(0, I.left);
    return Q * mt / lt * 100;
  }
  const S = function() {
    let C = 0, A = null;
    if (l.forEach((H) => {
      const $ = c.get(H);
      if (!$)
        return;
      const K = v($);
      K > 0 && K > C && (C = K, A = $.id);
    }), A) {
      const H = document.querySelector(
        '[href="#' + A + '"]'
      );
      H && H.classList.add("active"), a.querySelectorAll(
        'a.nav-link:not([href="#' + A + '"])'
      ).forEach(function($) {
        $.classList.remove("active");
      });
    }
    const I = b - u();
    !m && window.scrollY >= I ? h() : m && window.scrollY < I ? y() : m && a.style.setProperty(
      "--uds-anchor-menu-top",
      u() + "px"
    );
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
  for (let [C, A] of c)
    C.addEventListener("click", function(I) {
      if (I.preventDefault(), !A || !document.body.contains(A)) {
        console.warn("Anchor target no longer exists in DOM");
        return;
      }
      if (C === l[0]) {
        const ut = i.getBoundingClientRect().bottom, Tt = a.offsetHeight, Ft = ut + Tt, Ot = A.getBoundingClientRect().top, B = window.innerHeight / 2;
        if (Ot >= Ft && Ot <= B) {
          history.replaceState(null, "", C.getAttribute("href")), k(A);
          return;
        }
      }
      const $ = window.innerHeight, K = Math.round($ * 0.35);
      let lt = A.getBoundingClientRect().top + window.scrollY - K;
      window.scrollTo({
        top: lt,
        behavior: "smooth"
      });
      const Q = a.querySelector(".nav-link.active");
      Q && Q.classList.remove("active"), I.target.classList.add("active");
      const mt = C.getAttribute("href");
      mt && history.replaceState(null, "", mt), k(A);
    });
  function k(C) {
    C.hasAttribute("tabindex") || (C.setAttribute("tabindex", "-1"), C.style.outline = "none"), C.focus({ preventScroll: !0 });
  }
}
U.on(window, "load.uds.anchor-menu", zn);
function Wn() {
  const e = document.querySelectorAll('mark[class^="pen-"]'), n = new IntersectionObserver(
    (r) => {
      r.forEach((i) => {
        i.isIntersecting ? i.target.classList.add("animate-bg-in-scroll") : i.target.classList.remove("animate-bg-in-scroll");
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
U.on(
  window,
  "load.uds.blockquote-animation",
  Wn
);
function qn() {
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
  }, l = (u, h) => {
    const y = /* @__PURE__ */ new Date(), _ = [], g = new Date(u, h).getDay(), w = new Date(u, h + 1, 0).getDate(), b = new Date(u, h, 0).getDate();
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
          ${n.map((h) => `<p>${h}</p>`).join("")}
        </div>
        <div class="heading mobile">
          ${r.map((h) => `<p>${h}</p>`).join("")}
        </div>
        <div class="body">
          ${l(a.year, a.month).map(
      (h) => `<h3 id="${h.key}" class="calendar-item ${h.monthClass}" ${h.todayClass ? `aria-label="${h.todayClass[0].toUpperCase()}${h.todayClass.slice(
        1
      )}"` : ""}>
                  <span class="${h.todayClass ? h.todayClass : ""}">${h.date}</span>
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
    var h = new Date(a.year, a.month + u);
    a.year = h.getFullYear(), a.month = h.getMonth(), c();
  })(0);
}
U.on(window, "load.uds.calendar", qn);
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
  e.forEach((r, i) => {
    const a = r.querySelector("div p"), l = a.textContent, c = window.getComputedStyle(r), m = parseInt(c.webkitLineClamp || c.lineClamp), u = parseFloat(c.lineHeight), h = parseFloat(c.fontSize), y = isNaN(u) ? parseFloat(c.lineHeight) * h : u, _ = m * y;
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
  const i = r.offsetHeight;
  return document.body.removeChild(r), i;
}
U.on(window, "load.uds.card-bodies", Pe);
function jn() {
  const e = document.querySelector(".info-layer"), n = document.getElementById("dispatch");
  U.on(n, "click", function() {
    e == null || e.classList.toggle("active");
  });
}
U.on(window, "load.uds.ranking-card", jn);
function Gn() {
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
U.on(window, "load.uds.chart", Gn);
function Yn() {
  function e({ target: r }) {
    const i = r.getAttribute("href");
    r.getAttribute("data-bs-toggle") !== "collapse" || !i || !i.includes("#") || ar(
      document.querySelector(".collapsing")
    );
  }
  function n(r) {
    const { target: i, key: a } = r;
    a !== " " && a !== "Spacebar" || i.tagName !== "A" || i.getAttribute("data-bs-toggle") !== "collapse" || (r.preventDefault(), i.click());
  }
  U.on(document, "click.uds.collapse", e), U.on(document, "keydown.uds.collapse", n);
}
U.on(window, "load.uds.collapse", Yn);
function ke() {
  var n, r, i, a;
  const e = (l) => {
    window.dataLayer = window.dataLayer || [];
    const { dataLayer: c } = window;
    c && c.push(l);
  };
  (n = document.querySelectorAll("[data-ga-header]")) == null || n.forEach(
    (l) => l.addEventListener("click", () => {
      const c = l.getAttribute("data-ga-header-event") || "link";
      let m = l.getAttribute("data-ga-header-action") || "click";
      const u = l.getAttribute("aria-expanded");
      u && (m = u === "false" ? "open" : "close");
      const h = l.getAttribute("data-ga-header-type") || "internal link", y = l.getAttribute("data-ga-header-section") || "main navbar", _ = l.getAttribute("data-ga-header") || "", g = l.getAttribute("data-ga-header-component");
      e({
        name: "onclick",
        event: c.toLowerCase(),
        action: m.toLowerCase(),
        type: h.toLowerCase(),
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
      const m = l.getAttribute("data-ga-input-header-event") || "", u = c.target.value || "";
      e({
        name: "onenter",
        action: "type",
        type: "main search",
        section: "topbar",
        region: "navbar",
        text: u.toLowerCase(),
        event: m.toLowerCase()
      });
    })
  ), (i = document.querySelectorAll("[data-ga]")) == null || i.forEach(
    (l) => l.addEventListener("click", () => {
      const c = {};
      Array.from(l.attributes).forEach((u) => {
        if (u.name.startsWith("data-ga-")) {
          const h = u.name.replace("data-ga-", ""), y = u.value;
          y && (c[h] = y.toLowerCase());
        } else if (u.name === "data-ga") {
          const h = u.value;
          h && (c.text = h.toLowerCase());
        }
      });
      const m = l.getAttribute("aria-expanded");
      m && (c.action = m === "false" ? "open" : "close"), e(c);
    })
  ), (a = document.querySelectorAll("[data-ga-input]")) == null || a.forEach(
    (l) => l.addEventListener("change", (c) => {
      const m = l.getAttribute("data-ga-input-name") || "", u = l.getAttribute("data-ga-input-action") || "", h = l.getAttribute("data-ga-input") || "", y = l.getAttribute("data-ga-input-region") || "", _ = l.getAttribute("data-ga-input-section") || "";
      let g = l.getAttribute("data-ga-input-event") || "", w;
      switch (h) {
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
        name: m.toLowerCase(),
        event: g.toLowerCase(),
        action: u.toLowerCase(),
        type: h.toLowerCase(),
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
U.on(window, "load.uds.data-layer", ke);
const He = () => {
  const e = () => {
    const r = document.getElementById("asu-header");
    window.scrollY > (r == null ? void 0 : r.getBoundingClientRect().top) ? r == null || r.classList.add("scrolled") : r == null || r.classList.remove("scrolled");
  };
  U.on(window, "scroll.uds.header", e), document.querySelectorAll(
    ".uds-header-v2 .header-top-search .search-button"
  ).forEach((r) => {
    r.addEventListener("click", () => {
      const i = r.closest(".header-top-search");
      if (i) {
        i.classList.add("open");
        const a = i.querySelector(".search-input");
        a && a.focus();
      }
    });
  }), document.querySelectorAll(".uds-header-v2 .navbar-mobile-search input[type=search]").forEach((r) => {
    r.addEventListener("input", () => {
      const i = r.closest(".navbar-mobile-search");
      i && (r.value.length > 0 ? i.classList.add("has-value") : i.classList.remove("has-value"));
    });
  }), document.querySelectorAll(".uds-header-v2 .header-top-search .search-input").forEach((r) => {
    r.addEventListener("blur", () => {
      if (!r.value) {
        const i = r.closest(".header-top-search");
        i && setTimeout(() => i.classList.remove("open"), 200);
      }
    });
  });
};
window.initGlobalHeader = window.initGlobalHeader || He;
U.on(window, "load.uds.global-header", He);
function $n() {
  const e = ".uds-video-hero", n = e + " video", r = e + " #playHeroVid", i = e + " #pauseHeroVid", a = "click", l = "block", c = "none", m = document.querySelector(n), u = document.querySelector(r), h = document.querySelector(i);
  function y(b) {
    b.paused ? b.play() : b.pause();
  }
  function _(b, E) {
    getComputedStyle(b).display === c ? (E.style.display = c, b.style.display = l, b.focus()) : (b.style.display = c, E.style.display = l, E.focus());
  }
  function g(b) {
    b.stopPropagation(), _(u, h), y(m);
  }
  function w(b) {
    b.stopPropagation(), _(u, h), y(m);
  }
  h == null || h.addEventListener(a, g), u == null || u.addEventListener(a, w);
}
U.on(window, "load.uds.heroes-video", $n);
const Vn = () => {
  const n = () => {
    document.querySelectorAll(".parallax-container").forEach((c) => {
      const m = c.querySelector("img"), u = c.offsetHeight - m.height * 1.2, h = m.dataset.parallaxType === "scroll-to" ? window.innerHeight : window.innerHeight + c.offsetHeight, y = c.getBoundingClientRect().top, g = (window.innerHeight - y) / h;
      if (g < 0)
        m.style.top = u + "px";
      else if (g > 1)
        m.style.top = "0";
      else {
        const w = u * (1 - g);
        m.style.top = w + "px";
      }
    });
  }, r = (c) => {
    const m = c.parentNode, u = c.width, h = c.height;
    let y = m.offsetWidth / u, _ = 0, g = h * y, w = u * y;
    const b = +c.dataset.parallaxFactor || 1.2;
    !c.dataset.noScale && g < m.offsetHeight * b && (y = m.offsetHeight * b / g, g *= y, w *= y, _ = (w - m.offsetWidth) / 2 * -1), c.style.height = g + "px", c.style.left = _ + "px";
  }, i = () => {
    document.querySelectorAll(".parallax-container img").forEach((c, m) => {
      c.complete ? r(c) : c.onload = () => r(c);
    });
  }, a = (c) => {
    const { dataLayer: m } = window, u = {
      event: "link",
      action: "click",
      name: "onclick",
      type: "internal link",
      region: "main content",
      ...c
    };
    m && m.push(u);
  };
  document.querySelectorAll("[data-ga-image-parallax]").forEach(
    (c) => U.on(c, "focus.uds.image-parallax", () => {
      const m = {
        section: c.getAttribute("data-ga-image-parallax-section").toLowerCase(),
        text: c.getAttribute("data-ga-image-parallax").toLowerCase()
      };
      a(m);
    })
  ), i(), U.on(window, "resize.uds.image-parallax", i), U.on(window, "scroll.uds.image-parallax", n);
};
U.on(window, "load.uds.image-parallax", Vn);
function Xn() {
  var e, n;
  (e = document.getElementById("openModalButton")) == null || e.addEventListener("click", function() {
    document.getElementById("uds-modal").classList.add("open");
  }), (n = document.getElementById("closeModalButton")) == null || n.addEventListener("click", function() {
    document.getElementById("uds-modal").classList.remove("open");
  });
}
U.on(window, "load.uds.modals", Xn);
function Kn() {
  const n = "button", r = ".nav-tabs", i = ".nav-item", a = ".uds-tabbed-panels", l = ".scroll-control-prev", c = ".scroll-control-next", m = "click", u = "scroll", h = "focus", y = "none", _ = "block", w = (E) => {
    ["a", n].includes(E.target.localName) && E.target.focus();
  }, b = (E) => {
    const v = E.parentElement, S = E.offsetLeft + E.offsetWidth, W = v.scrollLeft + v.offsetWidth;
    v.scrollLeft > E.offsetLeft && (v.scrollLeft = E.offsetLeft), W < S && (v.scrollLeft += S - W);
  };
  document.querySelectorAll(a).forEach((E) => {
    const v = E.querySelector(r), S = E.querySelectorAll(i), W = E.querySelector(
      l
    ), ct = E.querySelector(
      c
    );
    let k = 0;
    E.addEventListener(m, function(I) {
      w(I);
    });
    const Z = (I, H, $) => {
      H.preventDefault();
      const At = getComputedStyle(v).left.replace("px", "");
      let lt = parseInt(At, 10);
      $ === 1 && k > 0 && (k -= 1), k < S.length - 1 && $ == -1 && (k += 1), v.dataset.scrollPosition = k, lt = 0;
      for (var Q = 0; Q < k; Q++)
        lt += S[Q].offsetWidth + parseInt(getComputedStyle(S[Q]).marginLeft, 10) + parseInt(getComputedStyle(S[Q]).marginRight, 10);
      v.scrollLeft = lt, q(I, lt);
    }, q = (I, H) => {
      const $ = v.scrollWidth - H;
      k == 0 ? W.style.display = y : W.style.display = _, $ <= E.offsetWidth ? ct.style.display = y : ct.style.display = _;
    };
    v.addEventListener(u, (I) => {
      const H = I.target.scrollLeft, $ = v.offsetWidth + H + 10 >= v.scrollWidth;
      W.style.display = H < 10 ? y : _, ct.style.display = $ ? y : _;
    }), S.forEach((I) => {
      I.addEventListener(h, function(H) {
        b(I);
      });
    }), ct.addEventListener(m, function(I) {
      Z(this, I, -1);
    }), W.addEventListener(m, function(I) {
      Z(this, I, 1);
    }), W.style.display = y;
    const C = v.scrollWidth, A = E.offsetWidth;
    C <= A && (ct.style.display = y);
  });
}
U.on(window, "load.uds.tabs", Kn);
function Qn() {
  function e() {
    const i = ".uds-table-fixed-wrapper", a = ".uds-table.uds-table-fixed table", l = ".scroll-control.previous";
    document.querySelectorAll(i).forEach((m, u) => {
      const h = m.querySelector(a);
      h.setAttribute("id", "uds-table-" + u);
      const y = h.querySelector("tbody tr > *"), _ = m.querySelector(l);
      _.style.left = y.offsetWidth + "px";
    });
  }
  function n() {
    const i = ".uds-table-fixed", a = ".uds-table-fixed-wrapper", l = ".scroll-control.previous", c = ".scroll-control.next";
    document.querySelectorAll(a).forEach((u, h) => {
      const y = u.querySelector(i), _ = u.querySelector(l), g = u.querySelector(c);
      ["click", "focus"].forEach((w) => {
        U.on(_, w, function() {
          y.scrollLeft -= 100;
        }), U.on(g, w, function() {
          y.scrollLeft += 100;
        });
      });
    });
  }
  function r(i, a) {
    let l;
    return (...c) => {
      clearTimeout(l), l = setTimeout(() => {
        i.apply(this, c);
      }, a);
    };
  }
  e(), n(), U.on(window, "resize", function() {
    r(e, 100)();
  });
}
U.on(window, "load.uds.fixed-table", Qn);
function Zn() {
  const r = ".uds-tooltip-container", a = "[aria-describedby]", m = document.querySelectorAll(
    `${r} > ${a} + [role=tooltip]`
  );
  function u() {
    document.querySelectorAll(
      `${a}[aria-expanded="true"]`
    ).forEach((w) => {
      w.setAttribute("aria-expanded", "false");
    });
  }
  function h(g) {
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
  [...m].map((g) => {
    const w = new AbortController(), { signal: b } = w, E = g.previousElementSibling, v = E.parentElement;
    return E.addEventListener("mouseenter", h, { signal: b }), E.addEventListener("focus", h, { signal: b }), E.addEventListener("keydown", h, { signal: b }), E.addEventListener("blur", y, { signal: b }), E.addEventListener("keydown", _, { signal: b }), v.addEventListener("mouseleave", y, { signal: b }), w;
  });
}
U.on(window, "load.uds.tooltips", Zn);
function Jn() {
  const e = ".uds-video-player", n = e + " video", r = e + " .uds-video-btn-play", i = e + " .uds-video-overlay", a = "click", l = "ended", c = "flex", m = "none", u = document.querySelector(n), h = document.querySelector(i), y = document.querySelector(r);
  function _(S) {
    S.style.display === m ? S.style.display = c : S.style.display = m;
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
    _(h);
  }
  u == null || u.addEventListener(a, w), y == null || y.addEventListener(a, b), h == null || h.addEventListener(a, E), u == null || u.addEventListener(l, v);
}
U.on(window, "load.uds.video", Jn);
const mr = {
  // Banner, // code updated to use bootstrap alert so we don't need this
  initAnchorMenu: zn,
  initBlockquoteAnimation: Wn,
  initCalendar: qn,
  initCollapse: Yn,
  initChart: Gn,
  initDataLayer: ke,
  initFixedTable: Qn,
  initGlobalHeader: He,
  initHeroesVideo: $n,
  initImageParallax: Vn,
  initModals: Xn,
  initRankingCard: jn,
  initTabbedPanels: Kn,
  initTooltips: Zn,
  initVideo: Jn,
  initCardBodies: Pe
};
export {
  mr as default
};
//# sourceMappingURL=unity-bootstrap.es.js.map
