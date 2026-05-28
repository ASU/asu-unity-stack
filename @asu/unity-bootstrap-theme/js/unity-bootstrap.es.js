import * as ce from "chart.js";
const Yn = () => window.jQuery && !document.body.hasAttribute("data-bs-no-jquery") ? window.jQuery : null, $n = /[^.]*(?=\..*)\.|.*/, Vn = /\..*/, Xn = /::\d+$/, le = {};
let Ve = 1;
const hn = {
  mouseenter: "mouseover",
  mouseleave: "mouseout"
}, Kn = /* @__PURE__ */ new Set([
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
function En(e, o) {
  return o && `${o}::${Ve++}` || e.uidEvent || Ve++;
}
function yn(e) {
  const o = En(e);
  return e.uidEvent = o, le[o] = le[o] || {}, le[o];
}
function Qn(e, o) {
  return function r(a) {
    return Se(a, { delegateTarget: e }), r.oneOff && k.off(e, a.type, o), o.apply(e, [a]);
  };
}
function Zn(e, o, r) {
  return function a(i) {
    const s = e.querySelectorAll(o);
    for (let { target: c } = i; c && c !== this; c = c.parentNode)
      for (const p of s)
        if (p === c)
          return Se(i, { delegateTarget: c }), a.oneOff && k.off(e, i.type, o, r), r.apply(c, [i]);
  };
}
function Tn(e, o, r = null) {
  return Object.values(e).find((a) => a.callable === o && a.delegationSelector === r);
}
function _n(e, o, r) {
  const a = typeof o == "string", i = a ? r : o || r;
  let s = An(e);
  return Kn.has(s) || (s = e), [a, i, s];
}
function Xe(e, o, r, a, i) {
  if (typeof o != "string" || !e)
    return;
  let [s, c, p] = _n(o, r, a);
  o in hn && (c = ((b) => function(h) {
    if (!h.relatedTarget || h.relatedTarget !== h.delegateTarget && !h.delegateTarget.contains(h.relatedTarget))
      return b.call(this, h);
  })(c));
  const d = yn(e), f = d[p] || (d[p] = {}), g = Tn(f, c, s ? r : null);
  if (g) {
    g.oneOff = g.oneOff && i;
    return;
  }
  const _ = En(c, o.replace($n, "")), E = s ? Zn(e, r, c) : Qn(e, c);
  E.delegationSelector = s ? r : null, E.callable = c, E.oneOff = i, E.uidEvent = _, f[_] = E, e.addEventListener(p, E, s);
}
function _e(e, o, r, a, i) {
  const s = Tn(o[r], a, i);
  s && (e.removeEventListener(r, s, !!i), delete o[r][s.uidEvent]);
}
function Jn(e, o, r, a) {
  const i = o[r] || {};
  for (const [s, c] of Object.entries(i))
    s.includes(a) && _e(e, o, r, c.callable, c.delegationSelector);
}
function An(e) {
  return e = e.replace(Vn, ""), hn[e] || e;
}
const k = {
  on(e, o, r, a) {
    Xe(e, o, r, a, !1);
  },
  one(e, o, r, a) {
    Xe(e, o, r, a, !0);
  },
  off(e, o, r, a) {
    if (typeof o != "string" || !e)
      return;
    const [i, s, c] = _n(o, r, a), p = c !== o, d = yn(e), f = d[c] || {}, g = o.startsWith(".");
    if (typeof s < "u") {
      if (!Object.keys(f).length)
        return;
      _e(e, d, c, s, i ? r : null);
      return;
    }
    if (g)
      for (const _ of Object.keys(d))
        Jn(e, d, _, o.slice(1));
    for (const [_, E] of Object.entries(f)) {
      const v = _.replace(Xn, "");
      (!p || o.includes(v)) && _e(e, d, c, E.callable, E.delegationSelector);
    }
  },
  trigger(e, o, r) {
    if (typeof o != "string" || !e)
      return null;
    const a = Yn(), i = An(o), s = o !== i;
    let c = null, p = !0, d = !0, f = !1;
    s && a && (c = a.Event(o, r), a(e).trigger(c), p = !c.isPropagationStopped(), d = !c.isImmediatePropagationStopped(), f = c.isDefaultPrevented());
    const g = Se(new Event(o, { bubbles: p, cancelable: !0 }), r);
    return f && g.preventDefault(), d && e.dispatchEvent(g), g.defaultPrevented && c && c.preventDefault(), g;
  }
};
function Se(e, o = {}) {
  for (const [r, a] of Object.entries(o))
    try {
      e[r] = a;
    } catch {
      Object.defineProperty(e, r, {
        configurable: !0,
        get() {
          return a;
        }
      });
    }
  return e;
}
function to(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ue = { exports: {} }, O = {}, Ke;
function eo() {
  if (Ke) return O;
  Ke = 1;
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
  var o = Symbol.for("react.transitional.element"), r = Symbol.for("react.portal"), a = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), c = Symbol.for("react.consumer"), p = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), g = Symbol.for("react.memo"), _ = Symbol.for("react.lazy"), E = Symbol.for("react.activity"), v = Symbol.iterator;
  function b(n) {
    return n === null || typeof n != "object" ? null : (n = v && n[v] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var h = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, C = Object.assign, R = {};
  function F(n, u, y) {
    this.props = n, this.context = u, this.refs = R, this.updater = y || h;
  }
  F.prototype.isReactComponent = {}, F.prototype.setState = function(n, u) {
    if (typeof n != "object" && typeof n != "function" && n != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, n, u, "setState");
  }, F.prototype.forceUpdate = function(n) {
    this.updater.enqueueForceUpdate(this, n, "forceUpdate");
  };
  function ct() {
  }
  ct.prototype = F.prototype;
  function q(n, u, y) {
    this.props = n, this.context = u, this.refs = R, this.updater = y || h;
  }
  var it = q.prototype = new ct();
  it.constructor = q, C(it, F.prototype), it.isPureReactComponent = !0;
  var H = Array.isArray;
  function N() {
  }
  var A = { H: null, A: null, T: null, S: null }, x = Object.prototype.hasOwnProperty;
  function B(n, u, y) {
    var L = y.ref;
    return {
      $$typeof: o,
      type: n,
      key: u,
      ref: L !== void 0 ? L : null,
      props: y
    };
  }
  function X(n, u) {
    return B(n.type, u, n.props);
  }
  function K(n) {
    return typeof n == "object" && n !== null && n.$$typeof === o;
  }
  function Z(n) {
    var u = { "=": "=0", ":": "=2" };
    return "$" + n.replace(/[=:]/g, function(y) {
      return u[y];
    });
  }
  var M = /\/+/g;
  function G(n, u) {
    return typeof n == "object" && n !== null && n.key != null ? Z("" + n.key) : u.toString(36);
  }
  function lt(n) {
    switch (n.status) {
      case "fulfilled":
        return n.value;
      case "rejected":
        throw n.reason;
      default:
        switch (typeof n.status == "string" ? n.then(N, N) : (n.status = "pending", n.then(
          function(u) {
            n.status === "pending" && (n.status = "fulfilled", n.value = u);
          },
          function(u) {
            n.status === "pending" && (n.status = "rejected", n.reason = u);
          }
        )), n.status) {
          case "fulfilled":
            return n.value;
          case "rejected":
            throw n.reason;
        }
    }
    throw n;
  }
  function ot(n, u, y, L, S) {
    var P = typeof n;
    (P === "undefined" || P === "boolean") && (n = null);
    var w = !1;
    if (n === null) w = !0;
    else
      switch (P) {
        case "bigint":
        case "string":
        case "number":
          w = !0;
          break;
        case "object":
          switch (n.$$typeof) {
            case o:
            case r:
              w = !0;
              break;
            case _:
              return w = n._init, ot(
                w(n._payload),
                u,
                y,
                L,
                S
              );
          }
      }
    if (w)
      return S = S(n), w = L === "" ? "." + G(n, 0) : L, H(S) ? (y = "", w != null && (y = w.replace(M, "$&/") + "/"), ot(S, u, y, "", function(ft) {
        return ft;
      })) : S != null && (K(S) && (S = X(
        S,
        y + (S.key == null || n && n.key === S.key ? "" : ("" + S.key).replace(
          M,
          "$&/"
        ) + "/") + w
      )), u.push(S)), 1;
    w = 0;
    var J = L === "" ? "." : L + ":";
    if (H(n))
      for (var Y = 0; Y < n.length; Y++)
        L = n[Y], P = J + G(L, Y), w += ot(
          L,
          u,
          y,
          P,
          S
        );
    else if (Y = b(n), typeof Y == "function")
      for (n = Y.call(n), Y = 0; !(L = n.next()).done; )
        L = L.value, P = J + G(L, Y++), w += ot(
          L,
          u,
          y,
          P,
          S
        );
    else if (P === "object") {
      if (typeof n.then == "function")
        return ot(
          lt(n),
          u,
          y,
          L,
          S
        );
      throw u = String(n), Error(
        "Objects are not valid as a React child (found: " + (u === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : u) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return w;
  }
  function mt(n, u, y) {
    if (n == null) return n;
    var L = [], S = 0;
    return ot(n, L, "", "", function(P) {
      return u.call(y, P, S++);
    }), L;
  }
  function xt(n) {
    if (n._status === -1) {
      var u = n._result;
      u = u(), u.then(
        function(y) {
          (n._status === 0 || n._status === -1) && (n._status = 1, n._result = y);
        },
        function(y) {
          (n._status === 0 || n._status === -1) && (n._status = 2, n._result = y);
        }
      ), n._status === -1 && (n._status = 0, n._result = u);
    }
    if (n._status === 1) return n._result.default;
    throw n._result;
  }
  var Tt = typeof reportError == "function" ? reportError : function(n) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var u = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof n == "object" && n !== null && typeof n.message == "string" ? String(n.message) : String(n),
        error: n
      });
      if (!window.dispatchEvent(u)) return;
    } else if (typeof e == "object" && typeof e.emit == "function") {
      e.emit("uncaughtException", n);
      return;
    }
    console.error(n);
  }, St = {
    map: mt,
    forEach: function(n, u, y) {
      mt(
        n,
        function() {
          u.apply(this, arguments);
        },
        y
      );
    },
    count: function(n) {
      var u = 0;
      return mt(n, function() {
        u++;
      }), u;
    },
    toArray: function(n) {
      return mt(n, function(u) {
        return u;
      }) || [];
    },
    only: function(n) {
      if (!K(n))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return n;
    }
  };
  return O.Activity = E, O.Children = St, O.Component = F, O.Fragment = a, O.Profiler = s, O.PureComponent = q, O.StrictMode = i, O.Suspense = f, O.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = A, O.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(n) {
      return A.H.useMemoCache(n);
    }
  }, O.cache = function(n) {
    return function() {
      return n.apply(null, arguments);
    };
  }, O.cacheSignal = function() {
    return null;
  }, O.cloneElement = function(n, u, y) {
    if (n == null)
      throw Error(
        "The argument must be a React element, but you passed " + n + "."
      );
    var L = C({}, n.props), S = n.key;
    if (u != null)
      for (P in u.key !== void 0 && (S = "" + u.key), u)
        !x.call(u, P) || P === "key" || P === "__self" || P === "__source" || P === "ref" && u.ref === void 0 || (L[P] = u[P]);
    var P = arguments.length - 2;
    if (P === 1) L.children = y;
    else if (1 < P) {
      for (var w = Array(P), J = 0; J < P; J++)
        w[J] = arguments[J + 2];
      L.children = w;
    }
    return B(n.type, S, L);
  }, O.createContext = function(n) {
    return n = {
      $$typeof: p,
      _currentValue: n,
      _currentValue2: n,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, n.Provider = n, n.Consumer = {
      $$typeof: c,
      _context: n
    }, n;
  }, O.createElement = function(n, u, y) {
    var L, S = {}, P = null;
    if (u != null)
      for (L in u.key !== void 0 && (P = "" + u.key), u)
        x.call(u, L) && L !== "key" && L !== "__self" && L !== "__source" && (S[L] = u[L]);
    var w = arguments.length - 2;
    if (w === 1) S.children = y;
    else if (1 < w) {
      for (var J = Array(w), Y = 0; Y < w; Y++)
        J[Y] = arguments[Y + 2];
      S.children = J;
    }
    if (n && n.defaultProps)
      for (L in w = n.defaultProps, w)
        S[L] === void 0 && (S[L] = w[L]);
    return B(n, P, S);
  }, O.createRef = function() {
    return { current: null };
  }, O.forwardRef = function(n) {
    return { $$typeof: d, render: n };
  }, O.isValidElement = K, O.lazy = function(n) {
    return {
      $$typeof: _,
      _payload: { _status: -1, _result: n },
      _init: xt
    };
  }, O.memo = function(n, u) {
    return {
      $$typeof: g,
      type: n,
      compare: u === void 0 ? null : u
    };
  }, O.startTransition = function(n) {
    var u = A.T, y = {};
    A.T = y;
    try {
      var L = n(), S = A.S;
      S !== null && S(y, L), typeof L == "object" && L !== null && typeof L.then == "function" && L.then(N, Tt);
    } catch (P) {
      Tt(P);
    } finally {
      u !== null && y.types !== null && (u.types = y.types), A.T = u;
    }
  }, O.unstable_useCacheRefresh = function() {
    return A.H.useCacheRefresh();
  }, O.use = function(n) {
    return A.H.use(n);
  }, O.useActionState = function(n, u, y) {
    return A.H.useActionState(n, u, y);
  }, O.useCallback = function(n, u) {
    return A.H.useCallback(n, u);
  }, O.useContext = function(n) {
    return A.H.useContext(n);
  }, O.useDebugValue = function() {
  }, O.useDeferredValue = function(n, u) {
    return A.H.useDeferredValue(n, u);
  }, O.useEffect = function(n, u) {
    return A.H.useEffect(n, u);
  }, O.useEffectEvent = function(n) {
    return A.H.useEffectEvent(n);
  }, O.useId = function() {
    return A.H.useId();
  }, O.useImperativeHandle = function(n, u, y) {
    return A.H.useImperativeHandle(n, u, y);
  }, O.useInsertionEffect = function(n, u) {
    return A.H.useInsertionEffect(n, u);
  }, O.useLayoutEffect = function(n, u) {
    return A.H.useLayoutEffect(n, u);
  }, O.useMemo = function(n, u) {
    return A.H.useMemo(n, u);
  }, O.useOptimistic = function(n, u) {
    return A.H.useOptimistic(n, u);
  }, O.useReducer = function(n, u, y) {
    return A.H.useReducer(n, u, y);
  }, O.useRef = function(n) {
    return A.H.useRef(n);
  }, O.useState = function(n) {
    return A.H.useState(n);
  }, O.useSyncExternalStore = function(n, u, y) {
    return A.H.useSyncExternalStore(
      n,
      u,
      y
    );
  }, O.useTransition = function() {
    return A.H.useTransition();
  }, O.version = "19.2.6", O;
}
var Qe;
function no() {
  return Qe || (Qe = 1, ue.exports = eo()), ue.exports;
}
no();
/*! @license DOMPurify 3.4.5 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.4.5/LICENSE */
function Ze(e, o) {
  (o == null || o > e.length) && (o = e.length);
  for (var r = 0, a = Array(o); r < o; r++) a[r] = e[r];
  return a;
}
function oo(e) {
  if (Array.isArray(e)) return e;
}
function ro(e, o) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var a, i, s, c, p = [], d = !0, f = !1;
    try {
      if (s = (r = r.call(e)).next, o !== 0) for (; !(d = (a = s.call(r)).done) && (p.push(a.value), p.length !== o); d = !0) ;
    } catch (g) {
      f = !0, i = g;
    } finally {
      try {
        if (!d && r.return != null && (c = r.return(), Object(c) !== c)) return;
      } finally {
        if (f) throw i;
      }
    }
    return p;
  }
}
function ao() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function io(e, o) {
  return oo(e) || ro(e, o) || so(e, o) || ao();
}
function so(e, o) {
  if (e) {
    if (typeof e == "string") return Ze(e, o);
    var r = {}.toString.call(e).slice(8, -1);
    return r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? Ze(e, o) : void 0;
  }
}
const bn = Object.entries, Je = Object.setPrototypeOf, co = Object.isFrozen, lo = Object.getPrototypeOf, uo = Object.getOwnPropertyDescriptor;
let nt = Object.freeze, st = Object.seal, It = Object.create, Sn = typeof Reflect < "u" && Reflect, Ae = Sn.apply, be = Sn.construct;
nt || (nt = function(o) {
  return o;
});
st || (st = function(o) {
  return o;
});
Ae || (Ae = function(o, r) {
  for (var a = arguments.length, i = new Array(a > 2 ? a - 2 : 0), s = 2; s < a; s++)
    i[s - 2] = arguments[s];
  return o.apply(r, i);
});
be || (be = function(o) {
  for (var r = arguments.length, a = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
    a[i - 1] = arguments[i];
  return new o(...a);
});
const Ot = j(Array.prototype.forEach), fo = j(Array.prototype.lastIndexOf), tn = j(Array.prototype.pop), Ct = j(Array.prototype.push), po = j(Array.prototype.splice), tt = Array.isArray, Ft = j(String.prototype.toLowerCase), fe = j(String.prototype.toString), en = j(String.prototype.match), Nt = j(String.prototype.replace), nn = j(String.prototype.indexOf), mo = j(String.prototype.trim), go = j(Number.prototype.toString), ho = j(Boolean.prototype.toString), on = typeof BigInt > "u" ? null : j(BigInt.prototype.toString), rn = typeof Symbol > "u" ? null : j(Symbol.prototype.toString), U = j(Object.prototype.hasOwnProperty), Ht = j(Object.prototype.toString), Q = j(RegExp.prototype.test), Yt = Eo(TypeError);
function j(e) {
  return function(o) {
    o instanceof RegExp && (o.lastIndex = 0);
    for (var r = arguments.length, a = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
      a[i - 1] = arguments[i];
    return Ae(e, o, a);
  };
}
function Eo(e) {
  return function() {
    for (var o = arguments.length, r = new Array(o), a = 0; a < o; a++)
      r[a] = arguments[a];
    return be(e, r);
  };
}
function D(e, o) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Ft;
  if (Je && Je(e, null), !tt(o))
    return e;
  let a = o.length;
  for (; a--; ) {
    let i = o[a];
    if (typeof i == "string") {
      const s = r(i);
      s !== i && (co(o) || (o[a] = s), i = s);
    }
    e[i] = !0;
  }
  return e;
}
function yo(e) {
  for (let o = 0; o < e.length; o++)
    U(e, o) || (e[o] = null);
  return e;
}
function at(e) {
  const o = It(null);
  for (const a of bn(e)) {
    var r = io(a, 2);
    const i = r[0], s = r[1];
    U(e, i) && (tt(s) ? o[i] = yo(s) : s && typeof s == "object" && s.constructor === Object ? o[i] = at(s) : o[i] = s);
  }
  return o;
}
function To(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return go(e);
    case "boolean":
      return ho(e);
    case "bigint":
      return on ? on(e) : "0";
    case "symbol":
      return rn ? rn(e) : "Symbol()";
    case "undefined":
      return Ht(e);
    case "function":
    case "object": {
      if (e === null)
        return Ht(e);
      const o = e, r = bt(o, "toString");
      if (typeof r == "function") {
        const a = r(o);
        return typeof a == "string" ? a : Ht(a);
      }
      return Ht(e);
    }
    default:
      return Ht(e);
  }
}
function bt(e, o) {
  for (; e !== null; ) {
    const a = uo(e, o);
    if (a) {
      if (a.get)
        return j(a.get);
      if (typeof a.value == "function")
        return j(a.value);
    }
    e = lo(e);
  }
  function r() {
    return null;
  }
  return r;
}
function _o(e) {
  try {
    return Q(e, ""), !0;
  } catch {
    return !1;
  }
}
const an = nt(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), de = nt(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), pe = nt(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Ao = nt(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), me = nt(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), bo = nt(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), sn = nt(["#text"]), cn = nt(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), ge = nt(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), ln = nt(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), $t = nt(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), So = st(/{{[\w\W]*|^[\w\W]*}}/g), vo = st(/<%[\w\W]*|^[\w\W]*%>/g), wo = st(/\${[\w\W]*/g), Lo = st(/^data-[\-\w.\u00B7-\uFFFF]+$/), Ro = st(/^aria-[\-\w]+$/), un = st(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), Oo = st(/^(?:\w+script|data):/i), Co = st(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), No = st(/^html$/i), Do = st(/^[a-z][.\w]*(-[.\w]+)+$/i), Dt = {
  element: 1,
  text: 3,
  // Deprecated
  progressingInstruction: 7,
  comment: 8,
  document: 9
}, Io = function() {
  return typeof window > "u" ? null : window;
}, xo = function(o, r) {
  if (typeof o != "object" || typeof o.createPolicy != "function")
    return null;
  let a = null;
  const i = "data-tt-policy-suffix";
  r && r.hasAttribute(i) && (a = r.getAttribute(i));
  const s = "dompurify" + (a ? "#" + a : "");
  try {
    return o.createPolicy(s, {
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
}, fn = function() {
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
function vn() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Io();
  const o = (T) => vn(T);
  if (o.version = "3.4.5", o.removed = [], !e || !e.document || e.document.nodeType !== Dt.document || !e.Element)
    return o.isSupported = !1, o;
  let r = e.document;
  const a = r, i = a.currentScript, s = e.DocumentFragment, c = e.HTMLTemplateElement, p = e.Node, d = e.Element, f = e.NodeFilter, g = e.NamedNodeMap, _ = g === void 0 ? e.NamedNodeMap || e.MozNamedAttrMap : g, E = e.HTMLFormElement, v = e.DOMParser, b = e.trustedTypes, h = d.prototype, C = bt(h, "cloneNode"), R = bt(h, "remove"), F = bt(h, "nextSibling"), ct = bt(h, "childNodes"), q = bt(h, "parentNode"), it = p && p.prototype ? bt(p.prototype, "nodeType") : null;
  if (typeof c == "function") {
    const T = r.createElement("template");
    T.content && T.content.ownerDocument && (r = T.content.ownerDocument);
  }
  let H, N = "";
  const A = r, x = A.implementation, B = A.createNodeIterator, X = A.createDocumentFragment, K = A.getElementsByTagName, Z = a.importNode;
  let M = fn();
  o.isSupported = typeof bn == "function" && typeof q == "function" && x && x.createHTMLDocument !== void 0;
  const G = So, lt = vo, ot = wo, mt = Lo, xt = Ro, Tt = Oo, St = Co, n = Do;
  let u = un, y = null;
  const L = D({}, [...an, ...de, ...pe, ...me, ...sn]);
  let S = null;
  const P = D({}, [...cn, ...ge, ...ln, ...$t]);
  let w = Object.seal(It(null, {
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
  })), J = null, Y = null;
  const ft = Object.seal(It(null, {
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
  let Re = !0, Vt = !0, Oe = !1, Ce = !0, Et = !1, Mt = !0, _t = !1, Xt = !1, Kt = !1, vt = !1, Ut = !1, Wt = !1, Ne = !0, De = !1;
  const Ie = "user-content-";
  let Qt = !0, Pt = !1, wt = {}, dt = null;
  const Zt = D({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let xe = null;
  const Me = D({}, ["audio", "video", "img", "source", "image", "track"]);
  let Jt = null;
  const Pe = D({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), zt = "http://www.w3.org/1998/Math/MathML", jt = "http://www.w3.org/2000/svg", pt = "http://www.w3.org/1999/xhtml";
  let Lt = pt, te = !1, ee = null;
  const Bn = D({}, [zt, jt, pt], fe);
  let ne = D({}, ["mi", "mo", "mn", "ms", "mtext"]), oe = D({}, ["annotation-xml"]);
  const Un = D({}, ["title", "style", "font", "a", "script"]);
  let kt = null;
  const Wn = ["application/xhtml+xml", "text/html"], zn = "text/html";
  let $ = null, Rt = null;
  const jn = r.createElement("form"), ke = function(t) {
    return t instanceof RegExp || t instanceof Function;
  }, re = function() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (Rt && Rt === t)
      return;
    (!t || typeof t != "object") && (t = {}), t = at(t), kt = // eslint-disable-next-line unicorn/prefer-includes
    Wn.indexOf(t.PARSER_MEDIA_TYPE) === -1 ? zn : t.PARSER_MEDIA_TYPE, $ = kt === "application/xhtml+xml" ? fe : Ft, y = U(t, "ALLOWED_TAGS") && tt(t.ALLOWED_TAGS) ? D({}, t.ALLOWED_TAGS, $) : L, S = U(t, "ALLOWED_ATTR") && tt(t.ALLOWED_ATTR) ? D({}, t.ALLOWED_ATTR, $) : P, ee = U(t, "ALLOWED_NAMESPACES") && tt(t.ALLOWED_NAMESPACES) ? D({}, t.ALLOWED_NAMESPACES, fe) : Bn, Jt = U(t, "ADD_URI_SAFE_ATTR") && tt(t.ADD_URI_SAFE_ATTR) ? D(at(Pe), t.ADD_URI_SAFE_ATTR, $) : Pe, xe = U(t, "ADD_DATA_URI_TAGS") && tt(t.ADD_DATA_URI_TAGS) ? D(at(Me), t.ADD_DATA_URI_TAGS, $) : Me, dt = U(t, "FORBID_CONTENTS") && tt(t.FORBID_CONTENTS) ? D({}, t.FORBID_CONTENTS, $) : Zt, J = U(t, "FORBID_TAGS") && tt(t.FORBID_TAGS) ? D({}, t.FORBID_TAGS, $) : at({}), Y = U(t, "FORBID_ATTR") && tt(t.FORBID_ATTR) ? D({}, t.FORBID_ATTR, $) : at({}), wt = U(t, "USE_PROFILES") ? t.USE_PROFILES && typeof t.USE_PROFILES == "object" ? at(t.USE_PROFILES) : t.USE_PROFILES : !1, Re = t.ALLOW_ARIA_ATTR !== !1, Vt = t.ALLOW_DATA_ATTR !== !1, Oe = t.ALLOW_UNKNOWN_PROTOCOLS || !1, Ce = t.ALLOW_SELF_CLOSE_IN_ATTR !== !1, Et = t.SAFE_FOR_TEMPLATES || !1, Mt = t.SAFE_FOR_XML !== !1, _t = t.WHOLE_DOCUMENT || !1, vt = t.RETURN_DOM || !1, Ut = t.RETURN_DOM_FRAGMENT || !1, Wt = t.RETURN_TRUSTED_TYPE || !1, Kt = t.FORCE_BODY || !1, Ne = t.SANITIZE_DOM !== !1, De = t.SANITIZE_NAMED_PROPS || !1, Qt = t.KEEP_CONTENT !== !1, Pt = t.IN_PLACE || !1, u = _o(t.ALLOWED_URI_REGEXP) ? t.ALLOWED_URI_REGEXP : un, Lt = typeof t.NAMESPACE == "string" ? t.NAMESPACE : pt, ne = U(t, "MATHML_TEXT_INTEGRATION_POINTS") && t.MATHML_TEXT_INTEGRATION_POINTS && typeof t.MATHML_TEXT_INTEGRATION_POINTS == "object" ? at(t.MATHML_TEXT_INTEGRATION_POINTS) : D({}, ["mi", "mo", "mn", "ms", "mtext"]), oe = U(t, "HTML_INTEGRATION_POINTS") && t.HTML_INTEGRATION_POINTS && typeof t.HTML_INTEGRATION_POINTS == "object" ? at(t.HTML_INTEGRATION_POINTS) : D({}, ["annotation-xml"]);
    const l = U(t, "CUSTOM_ELEMENT_HANDLING") && t.CUSTOM_ELEMENT_HANDLING && typeof t.CUSTOM_ELEMENT_HANDLING == "object" ? at(t.CUSTOM_ELEMENT_HANDLING) : It(null);
    if (w = It(null), U(l, "tagNameCheck") && ke(l.tagNameCheck) && (w.tagNameCheck = l.tagNameCheck), U(l, "attributeNameCheck") && ke(l.attributeNameCheck) && (w.attributeNameCheck = l.attributeNameCheck), U(l, "allowCustomizedBuiltInElements") && typeof l.allowCustomizedBuiltInElements == "boolean" && (w.allowCustomizedBuiltInElements = l.allowCustomizedBuiltInElements), Et && (Vt = !1), Ut && (vt = !0), wt && (y = D({}, sn), S = It(null), wt.html === !0 && (D(y, an), D(S, cn)), wt.svg === !0 && (D(y, de), D(S, ge), D(S, $t)), wt.svgFilters === !0 && (D(y, pe), D(S, ge), D(S, $t)), wt.mathMl === !0 && (D(y, me), D(S, ln), D(S, $t))), ft.tagCheck = null, ft.attributeCheck = null, U(t, "ADD_TAGS") && (typeof t.ADD_TAGS == "function" ? ft.tagCheck = t.ADD_TAGS : tt(t.ADD_TAGS) && (y === L && (y = at(y)), D(y, t.ADD_TAGS, $))), U(t, "ADD_ATTR") && (typeof t.ADD_ATTR == "function" ? ft.attributeCheck = t.ADD_ATTR : tt(t.ADD_ATTR) && (S === P && (S = at(S)), D(S, t.ADD_ATTR, $))), U(t, "ADD_URI_SAFE_ATTR") && tt(t.ADD_URI_SAFE_ATTR) && D(Jt, t.ADD_URI_SAFE_ATTR, $), U(t, "FORBID_CONTENTS") && tt(t.FORBID_CONTENTS) && (dt === Zt && (dt = at(dt)), D(dt, t.FORBID_CONTENTS, $)), U(t, "ADD_FORBID_CONTENTS") && tt(t.ADD_FORBID_CONTENTS) && (dt === Zt && (dt = at(dt)), D(dt, t.ADD_FORBID_CONTENTS, $)), Qt && (y["#text"] = !0), _t && D(y, ["html", "head", "body"]), y.table && (D(y, ["tbody"]), delete J.tbody), t.TRUSTED_TYPES_POLICY) {
      if (typeof t.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw Yt('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof t.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw Yt('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      H = t.TRUSTED_TYPES_POLICY, N = H.createHTML("");
    } else
      H === void 0 && (H = xo(b, i)), H !== null && typeof N == "string" && (N = H.createHTML(""));
    nt && nt(t), Rt = t;
  }, He = D({}, [...de, ...pe, ...Ao]), Fe = D({}, [...me, ...bo]), qn = function(t) {
    let l = q(t);
    (!l || !l.tagName) && (l = {
      namespaceURI: Lt,
      tagName: "template"
    });
    const m = Ft(t.tagName), I = Ft(l.tagName);
    return ee[t.namespaceURI] ? t.namespaceURI === jt ? l.namespaceURI === pt ? m === "svg" : l.namespaceURI === zt ? m === "svg" && (I === "annotation-xml" || ne[I]) : !!He[m] : t.namespaceURI === zt ? l.namespaceURI === pt ? m === "math" : l.namespaceURI === jt ? m === "math" && oe[I] : !!Fe[m] : t.namespaceURI === pt ? l.namespaceURI === jt && !oe[I] || l.namespaceURI === zt && !ne[I] ? !1 : !Fe[m] && (Un[m] || !He[m]) : !!(kt === "application/xhtml+xml" && ee[t.namespaceURI]) : !1;
  }, ut = function(t) {
    Ct(o.removed, {
      element: t
    });
    try {
      q(t).removeChild(t);
    } catch {
      R(t);
    }
  }, At = function(t, l) {
    try {
      Ct(o.removed, {
        attribute: l.getAttributeNode(t),
        from: l
      });
    } catch {
      Ct(o.removed, {
        attribute: null,
        from: l
      });
    }
    if (l.removeAttribute(t), t === "is")
      if (vt || Ut)
        try {
          ut(l);
        } catch {
        }
      else
        try {
          l.setAttribute(t, "");
        } catch {
        }
  }, Be = function(t) {
    let l = null, m = null;
    if (Kt)
      t = "<remove></remove>" + t;
    else {
      const z = en(t, /^[\r\n\t ]+/);
      m = z && z[0];
    }
    kt === "application/xhtml+xml" && Lt === pt && (t = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + t + "</body></html>");
    const I = H ? H.createHTML(t) : t;
    if (Lt === pt)
      try {
        l = new v().parseFromString(I, kt);
      } catch {
      }
    if (!l || !l.documentElement) {
      l = x.createDocument(Lt, "template", null);
      try {
        l.documentElement.innerHTML = te ? N : I;
      } catch {
      }
    }
    const W = l.body || l.documentElement;
    return t && m && W.insertBefore(r.createTextNode(m), W.childNodes[0] || null), Lt === pt ? K.call(l, _t ? "html" : "body")[0] : _t ? l.documentElement : W;
  }, Ue = function(t) {
    return B.call(
      t.ownerDocument || t,
      t,
      // eslint-disable-next-line no-bitwise
      f.SHOW_ELEMENT | f.SHOW_COMMENT | f.SHOW_TEXT | f.SHOW_PROCESSING_INSTRUCTION | f.SHOW_CDATA_SECTION,
      null
    );
  }, We = function(t) {
    t.normalize();
    const l = B.call(
      t.ownerDocument || t,
      t,
      // eslint-disable-next-line no-bitwise
      f.SHOW_TEXT | f.SHOW_COMMENT | f.SHOW_CDATA_SECTION | f.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let m = l.nextNode();
    for (; m; ) {
      let I = m.data;
      Ot([G, lt, ot], (W) => {
        I = Nt(I, W, " ");
      }), m.data = I, m = l.nextNode();
    }
  }, ae = function(t) {
    return t instanceof E && (typeof t.nodeName != "string" || typeof t.textContent != "string" || typeof t.removeChild != "function" || !(t.attributes instanceof _) || typeof t.removeAttribute != "function" || typeof t.setAttribute != "function" || typeof t.namespaceURI != "string" || typeof t.insertBefore != "function" || typeof t.hasChildNodes != "function");
  }, qt = function(t) {
    if (!it || typeof t != "object" || t === null)
      return !1;
    try {
      return typeof it(t) == "number";
    } catch {
      return !1;
    }
  };
  function gt(T, t, l) {
    Ot(T, (m) => {
      m.call(o, t, l, Rt);
    });
  }
  const ze = function(t) {
    let l = null;
    if (gt(M.beforeSanitizeElements, t, null), ae(t))
      return ut(t), !0;
    const m = $(t.nodeName);
    if (gt(M.uponSanitizeElement, t, {
      tagName: m,
      allowedTags: y
    }), Mt && t.hasChildNodes() && !qt(t.firstElementChild) && Q(/<[/\w!]/g, t.innerHTML) && Q(/<[/\w!]/g, t.textContent) || Mt && t.namespaceURI === pt && m === "style" && qt(t.firstElementChild) || t.nodeType === Dt.progressingInstruction || Mt && t.nodeType === Dt.comment && Q(/<[/\w]/g, t.data))
      return ut(t), !0;
    if (J[m] || !(ft.tagCheck instanceof Function && ft.tagCheck(m)) && !y[m]) {
      if (!J[m] && qe(m) && (w.tagNameCheck instanceof RegExp && Q(w.tagNameCheck, m) || w.tagNameCheck instanceof Function && w.tagNameCheck(m)))
        return !1;
      if (Qt && !dt[m]) {
        const I = q(t) || t.parentNode, W = ct(t) || t.childNodes;
        if (W && I) {
          const z = W.length;
          for (let rt = z - 1; rt >= 0; --rt) {
            const yt = C(W[rt], !0);
            I.insertBefore(yt, F(t));
          }
        }
      }
      return ut(t), !0;
    }
    return t instanceof d && !qn(t) || (m === "noscript" || m === "noembed" || m === "noframes") && Q(/<\/no(script|embed|frames)/i, t.innerHTML) ? (ut(t), !0) : (Et && t.nodeType === Dt.text && (l = t.textContent, Ot([G, lt, ot], (I) => {
      l = Nt(l, I, " ");
    }), t.textContent !== l && (Ct(o.removed, {
      element: t.cloneNode()
    }), t.textContent = l)), gt(M.afterSanitizeElements, t, null), !1);
  }, je = function(t, l, m) {
    if (Y[l] || Ne && (l === "id" || l === "name") && (m in r || m in jn))
      return !1;
    const I = S[l] || ft.attributeCheck instanceof Function && ft.attributeCheck(l, t);
    if (!(Vt && !Y[l] && Q(mt, l))) {
      if (!(Re && Q(xt, l))) {
        if (!I || Y[l]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(qe(t) && (w.tagNameCheck instanceof RegExp && Q(w.tagNameCheck, t) || w.tagNameCheck instanceof Function && w.tagNameCheck(t)) && (w.attributeNameCheck instanceof RegExp && Q(w.attributeNameCheck, l) || w.attributeNameCheck instanceof Function && w.attributeNameCheck(l, t)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            l === "is" && w.allowCustomizedBuiltInElements && (w.tagNameCheck instanceof RegExp && Q(w.tagNameCheck, m) || w.tagNameCheck instanceof Function && w.tagNameCheck(m)))
          ) return !1;
        } else if (!Jt[l]) {
          if (!Q(u, Nt(m, St, ""))) {
            if (!((l === "src" || l === "xlink:href" || l === "href") && t !== "script" && nn(m, "data:") === 0 && xe[t])) {
              if (!(Oe && !Q(Tt, Nt(m, St, "")))) {
                if (m)
                  return !1;
              }
            }
          }
        }
      }
    }
    return !0;
  }, Gn = D({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), qe = function(t) {
    return !Gn[Ft(t)] && Q(n, t);
  }, Ge = function(t) {
    gt(M.beforeSanitizeAttributes, t, null);
    const l = t.attributes;
    if (!l || ae(t))
      return;
    const m = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: S,
      forceKeepAttr: void 0
    };
    let I = l.length;
    for (; I--; ) {
      const W = l[I], z = W.name, rt = W.namespaceURI, yt = W.value, ht = $(z), se = yt;
      let V = z === "value" ? se : mo(se);
      if (m.attrName = ht, m.attrValue = V, m.keepAttr = !0, m.forceKeepAttr = void 0, gt(M.uponSanitizeAttribute, t, m), V = m.attrValue, De && (ht === "id" || ht === "name") && nn(V, Ie) !== 0 && (At(z, t), V = Ie + V), Mt && Q(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, V)) {
        At(z, t);
        continue;
      }
      if (ht === "attributename" && en(V, "href")) {
        At(z, t);
        continue;
      }
      if (m.forceKeepAttr)
        continue;
      if (!m.keepAttr) {
        At(z, t);
        continue;
      }
      if (!Ce && Q(/\/>/i, V)) {
        At(z, t);
        continue;
      }
      Et && Ot([G, lt, ot], ($e) => {
        V = Nt(V, $e, " ");
      });
      const Ye = $(t.nodeName);
      if (!je(Ye, ht, V)) {
        At(z, t);
        continue;
      }
      if (H && typeof b == "object" && typeof b.getAttributeType == "function" && !rt)
        switch (b.getAttributeType(Ye, ht)) {
          case "TrustedHTML": {
            V = H.createHTML(V);
            break;
          }
          case "TrustedScriptURL": {
            V = H.createScriptURL(V);
            break;
          }
        }
      if (V !== se)
        try {
          rt ? t.setAttributeNS(rt, z, V) : t.setAttribute(z, V), ae(t) ? ut(t) : tn(o.removed);
        } catch {
          At(z, t);
        }
    }
    gt(M.afterSanitizeAttributes, t, null);
  }, ie = function(t) {
    let l = null;
    const m = Ue(t);
    for (gt(M.beforeSanitizeShadowDOM, t, null); l = m.nextNode(); )
      gt(M.uponSanitizeShadowNode, l, null), ze(l), Ge(l), l.content instanceof s && ie(l.content);
    gt(M.afterSanitizeShadowDOM, t, null);
  }, Gt = function(t) {
    if (t.nodeType === Dt.element && t.shadowRoot instanceof s) {
      const I = t.shadowRoot;
      Gt(I), ie(I);
    }
    const l = t.childNodes;
    if (!l)
      return;
    const m = [];
    Ot(l, (I) => {
      Ct(m, I);
    });
    for (const I of m)
      Gt(I);
  };
  return o.sanitize = function(T) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, l = null, m = null, I = null, W = null;
    if (te = !T, te && (T = "<!-->"), typeof T != "string" && !qt(T) && (T = To(T), typeof T != "string"))
      throw Yt("dirty is not a string, aborting");
    if (!o.isSupported)
      return T;
    if (Xt || re(t), o.removed = [], typeof T == "string" && (Pt = !1), Pt) {
      const yt = T.nodeName;
      if (typeof yt == "string") {
        const ht = $(yt);
        if (!y[ht] || J[ht])
          throw Yt("root node is forbidden and cannot be sanitized in-place");
      }
      Gt(T);
    } else if (qt(T))
      l = Be("<!---->"), m = l.ownerDocument.importNode(T, !0), m.nodeType === Dt.element && m.nodeName === "BODY" || m.nodeName === "HTML" ? l = m : l.appendChild(m), Gt(m);
    else {
      if (!vt && !Et && !_t && // eslint-disable-next-line unicorn/prefer-includes
      T.indexOf("<") === -1)
        return H && Wt ? H.createHTML(T) : T;
      if (l = Be(T), !l)
        return vt ? null : Wt ? N : "";
    }
    l && Kt && ut(l.firstChild);
    const z = Ue(Pt ? T : l);
    for (; I = z.nextNode(); )
      ze(I), Ge(I), I.content instanceof s && ie(I.content);
    if (Pt)
      return Et && We(T), T;
    if (vt) {
      if (Et && We(l), Ut)
        for (W = X.call(l.ownerDocument); l.firstChild; )
          W.appendChild(l.firstChild);
      else
        W = l;
      return (S.shadowroot || S.shadowrootmode) && (W = Z.call(a, W, !0)), W;
    }
    let rt = _t ? l.outerHTML : l.innerHTML;
    return _t && y["!doctype"] && l.ownerDocument && l.ownerDocument.doctype && l.ownerDocument.doctype.name && Q(No, l.ownerDocument.doctype.name) && (rt = "<!DOCTYPE " + l.ownerDocument.doctype.name + `>
` + rt), Et && Ot([G, lt, ot], (yt) => {
      rt = Nt(rt, yt, " ");
    }), H && Wt ? H.createHTML(rt) : rt;
  }, o.setConfig = function() {
    let T = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    re(T), Xt = !0;
  }, o.clearConfig = function() {
    Rt = null, Xt = !1;
  }, o.isValidAttribute = function(T, t, l) {
    Rt || re({});
    const m = $(T), I = $(t);
    return je(m, I, l);
  }, o.addHook = function(T, t) {
    typeof t == "function" && Ct(M[T], t);
  }, o.removeHook = function(T, t) {
    if (t !== void 0) {
      const l = fo(M[T], t);
      return l === -1 ? void 0 : po(M[T], l, 1)[0];
    }
    return tn(M[T]);
  }, o.removeHooks = function(T) {
    M[T] = [];
  }, o.removeAllHooks = function() {
    M = fn();
  }, o;
}
vn();
function Mo(e) {
  if (e && typeof e.getBoundingClientRect == "function") {
    const { bottom: o, top: r } = e.getBoundingClientRect(), { offsetTop: a } = e;
    if (r < 0 && o > 0) {
      const i = e.style;
      e.style = `${i};transition: height 0s !important; overflow:hidden; height:${o}px!important;max-height:${o}px!important`, window.scrollTo({ behavior: "instant", top: a }), setTimeout(() => {
        e.style = i, window.scrollTo({
          behavior: "smooth",
          top: e.offsetTop - o / 2
        });
      }, 50);
    }
  }
}
var he = { exports: {} }, Ee, dn;
function Po() {
  if (dn) return Ee;
  dn = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Ee = e, Ee;
}
var ye, pn;
function ko() {
  if (pn) return ye;
  pn = 1;
  var e = /* @__PURE__ */ Po();
  function o() {
  }
  function r() {
  }
  return r.resetWarningCache = o, ye = function() {
    function a(c, p, d, f, g, _) {
      if (_ !== e) {
        var E = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw E.name = "Invariant Violation", E;
      }
    }
    a.isRequired = a;
    function i() {
      return a;
    }
    var s = {
      array: a,
      bigint: a,
      bool: a,
      func: a,
      number: a,
      object: a,
      string: a,
      symbol: a,
      any: a,
      arrayOf: i,
      element: a,
      elementType: a,
      instanceOf: i,
      node: a,
      objectOf: i,
      oneOf: i,
      oneOfType: i,
      shape: i,
      exact: i,
      checkPropTypes: r,
      resetWarningCache: o
    };
    return s.PropTypes = s, s;
  }, ye;
}
var mn;
function Ho() {
  return mn || (mn = 1, he.exports = /* @__PURE__ */ ko()()), he.exports;
}
var Fo = /* @__PURE__ */ Ho();
const et = /* @__PURE__ */ to(Fo);
et.shape({
  event: et.string,
  action: et.string,
  name: et.string,
  region: et.string,
  section: et.string,
  component: et.string,
  type: et.string,
  text: et.string
});
const Bt = ({ children: e }) => /* @__PURE__ */ React.createElement(React.Fragment, null, e);
Bt.propTypes = {
  children: et.oneOfType([
    et.arrayOf(et.node),
    et.node,
    et.string
  ])
};
var Te = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var gn;
function Bo() {
  return gn || (gn = 1, (function(e) {
    (function() {
      var o = {}.hasOwnProperty;
      function r() {
        for (var s = "", c = 0; c < arguments.length; c++) {
          var p = arguments[c];
          p && (s = i(s, a(p)));
        }
        return s;
      }
      function a(s) {
        if (typeof s == "string" || typeof s == "number")
          return s;
        if (typeof s != "object")
          return "";
        if (Array.isArray(s))
          return r.apply(null, s);
        if (s.toString !== Object.prototype.toString && !s.toString.toString().includes("[native code]"))
          return s.toString();
        var c = "";
        for (var p in s)
          o.call(s, p) && s[p] && (c = i(c, p));
        return c;
      }
      function i(s, c) {
        return c ? s ? s + " " + c : s + c : s;
      }
      e.exports ? (r.default = r, e.exports = r) : window.classNames = r;
    })();
  })(Te)), Te.exports;
}
Bo();
({
  ...Bt.propTypes
});
const wn = ({ children: e, className: o = "container", ...r }) => /* @__PURE__ */ React.createElement("div", { className: o, ...r }, /* @__PURE__ */ React.createElement("div", { className: "row" }, e));
wn.propTypes = {
  children: Bt.propTypes.children
};
({
  ...wn.propTypes
});
Bt.propTypes.children, et.oneOf(["0", "3", "4", "6", "8", "9", "12"]);
Bt.propTypes.children;
function Ln() {
  var it, H;
  const r = ["asu-header", "asuHeader"].find((N) => document.getElementById(N)), a = document.getElementById(r), i = document.getElementById("uds-anchor-menu");
  if (!i || !a || Array.from(i.classList).some((N) => N.startsWith("sc-")))
    return;
  const s = i.parentNode, c = i.nextSibling, p = Array.from(i.getElementsByClassName("nav-link")), d = /* @__PURE__ */ new Map();
  let f = window.scrollY, g = !1;
  const _ = ((it = document.getElementById("toolbar-bar")) == null ? void 0 : it.offsetHeight) || 0, E = ((H = document.getElementById("toolbar-item-administration-tray")) == null ? void 0 : H.offsetHeight) || 0, v = _ + E, b = i.getBoundingClientRect().top + window.scrollY - v;
  for (let N of p) {
    const A = N.getAttribute("href");
    if (!A || !A.startsWith("#"))
      continue;
    const x = A.replace("#", ""), B = document.getElementById(x);
    B && d.set(N, B);
  }
  window.scrollY > b && (a.appendChild(i), g = !0, i.classList.add("uds-anchor-menu-attached"));
  function C(N, A = 0) {
    if (!N || A > 10)
      return 0;
    if (N.offsetHeight === 0 || N.offsetWidth === 0)
      return C(N.parentElement, A + 1);
    const x = N.getBoundingClientRect(), B = window.innerHeight || document.documentElement.clientHeight, X = window.innerWidth || document.documentElement.clientWidth, K = x.bottom - x.top, Z = x.right - x.left, M = K * Z, G = Math.min(B, x.bottom) - Math.max(0, x.top), lt = Math.min(X, x.right) - Math.max(0, x.left);
    return G * lt / M * 100;
  }
  const R = function() {
    let N = 0, A = null;
    if (p.forEach((K) => {
      const Z = d.get(K);
      if (!Z)
        return;
      const M = C(Z);
      M > 0 && M > N && (N = M, A = Z.id);
    }), A) {
      const K = document.querySelector(
        '[href="#' + A + '"]'
      );
      K && K.classList.add("active"), i.querySelectorAll(
        'a.nav-link:not([href="#' + A + '"])'
      ).forEach(function(Z) {
        Z.classList.remove("active");
      });
    }
    const x = i.getBoundingClientRect().top, B = a.getBoundingClientRect().bottom, X = window.scrollY > f;
    if (X && B >= x && (g || (a.appendChild(i), g = !0, i.classList.add("uds-anchor-menu-attached"))), !X && g) {
      const K = a.getBoundingClientRect().bottom, Z = i.getBoundingClientRect().top;
      (window.scrollY <= b || K < Z) && (s.insertBefore(i, c), g = !1, i.classList.remove("uds-anchor-menu-attached"));
    }
    f = window.scrollY;
  };
  let F;
  F = (() => {
    let N = !1;
    return () => {
      N || (N = !0, R(), setTimeout(() => {
        N = !1;
      }, 100));
    };
  })(), window.addEventListener("scroll", F, { passive: !0 });
  for (let [N, A] of d)
    N.addEventListener("click", function(x) {
      if (x.preventDefault(), !A || !document.body.contains(A)) {
        console.warn("Anchor target no longer exists in DOM");
        return;
      }
      if (N === p[0]) {
        const ot = a.getBoundingClientRect().bottom, mt = i.offsetHeight, xt = ot + mt, Tt = A.getBoundingClientRect().top, St = window.innerHeight / 2;
        if (Tt >= xt && Tt <= St) {
          history.replaceState(null, "", N.getAttribute("href")), q(A);
          return;
        }
      }
      const X = window.innerHeight, K = Math.round(X * 0.35);
      let M = A.getBoundingClientRect().top + window.scrollY - K;
      window.scrollTo({
        top: M,
        behavior: "smooth"
      });
      const G = i.querySelector(".nav-link.active");
      G && G.classList.remove("active"), x.target.classList.add("active");
      const lt = N.getAttribute("href");
      lt && history.replaceState(null, "", lt), q(A);
    });
  function q(N) {
    N.hasAttribute("tabindex") || (N.setAttribute("tabindex", "-1"), N.style.outline = "none"), N.focus({ preventScroll: !0 });
  }
}
k.on(window, "load.uds.anchor-menu", Ln);
function Rn() {
  const e = document.querySelectorAll('mark[class^="pen-"]'), o = new IntersectionObserver(
    (r) => {
      r.forEach((a) => {
        a.isIntersecting ? a.target.classList.add("animate-bg-in-scroll") : a.target.classList.remove("animate-bg-in-scroll");
      });
    },
    {
      threshold: 0.1
    }
  );
  e.forEach((r) => {
    o.observe(r);
  });
}
k.on(
  window,
  "load.uds.blockquote-animation",
  Rn
);
function On() {
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
  ], o = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ], r = ["Su", "M", "Tu", "W", "Th", "F", "Sa"], i = {
    month: (/* @__PURE__ */ new Date()).getMonth(),
    year: (/* @__PURE__ */ new Date()).getFullYear()
  }, s = (d, f) => {
    const g = /* @__PURE__ */ new Date(), _ = [], E = new Date(d, f).getDay(), v = new Date(d, f + 1, 0).getDate(), b = new Date(d, f, 0).getDate();
    for (let h = 1; h <= E; h++) {
      const C = b - E + h, R = new Date(
        i.year,
        i.month - 1,
        C
      ).toLocaleString();
      _.push({ key: R, date: C, monthClass: "prev" });
    }
    for (let h = 1; h <= v; h++) {
      const C = new Date(i.year, i.month, h).toLocaleString();
      h === g.getDate() && i.month === g.getMonth() && i.year === g.getFullYear() ? _.push({
        key: C,
        date: h,
        monthClass: "current",
        todayClass: "today"
      }) : _.push({ key: C, date: h, monthClass: "current" });
    }
    if (_.length < 42) {
      const h = 42 - _.length;
      for (let C = 1; C <= h; C++) {
        const R = new Date(i.year, i.month + 1, C).toLocaleString();
        _.push({ key: R, date: C, monthClass: "next" });
      }
    }
    return _;
  }, c = () => {
    const d = document.getElementById("calendar");
    d && (d.innerHTML = `
      <h2><span class="highlight-black">${e[i.month]} ${i.year}</span></h2>
      <div class="calendar-grid">
        <div class="heading desktop">
          ${o.map((f) => `<p>${f}</p>`).join("")}
        </div>
        <div class="heading mobile">
          ${r.map((f) => `<p>${f}</p>`).join("")}
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
  ((d) => {
    var f = new Date(i.year, i.month + d);
    i.year = f.getFullYear(), i.month = f.getMonth(), c();
  })(0);
}
k.on(window, "load.uds.calendar", On);
function ve() {
  const e = document.querySelectorAll(".card-body");
  if (e.length === 0 && 0 < 3) {
    setTimeout(() => ve(), 500);
    return;
  }
  if (e.length === 0) {
    console.warn("No .card-body found after 3 retries.");
    return;
  }
  e.forEach((r, a) => {
    const i = r.querySelector("div p"), s = i.textContent, c = window.getComputedStyle(r), p = parseInt(c.webkitLineClamp || c.lineClamp), d = parseFloat(c.lineHeight), f = parseFloat(c.fontSize), g = isNaN(d) ? parseFloat(c.lineHeight) * f : d, _ = p * g;
    if (i.offsetHeight >= _) {
      let E = "";
      const v = s.split(" ");
      let b = 0, h = "";
      for (; b < v.length && Uo(
        h + (h ? " " : "") + v[b],
        i
      ) <= _; )
        h += (h ? " " : "") + v[b], b++;
      E = h + "...";
      const C = `visible-text-${Math.random().toString(36).substring(7)}`, R = document.createElement("div");
      R.id = C, R.textContent = E, R.style.position = "absolute", R.style.top = `${i.offsetTop}px`, R.style.left = `${i.offsetLeft}px`, R.style.width = `${i.offsetWidth}px`, R.style.height = `${i.offsetHeight}px`, R.style.opacity = "0", R.style.pointerEvents = "none", R.style.zIndex = "1", r.appendChild(R), i.setAttribute("aria-describedby", C), i.setAttribute("aria-hidden", "true");
    }
  });
}
function Uo(e, o) {
  const r = document.createElement(o.tagName);
  r.style.font = window.getComputedStyle(o).font, r.style.width = window.getComputedStyle(o).width, r.style.whiteSpace = "pre-wrap", r.textContent = e, document.body.appendChild(r);
  const a = r.offsetHeight;
  return document.body.removeChild(r), a;
}
k.on(window, "load.uds.card-bodies", ve);
function Cn() {
  const e = document.querySelector(".info-layer"), o = document.getElementById("dispatch");
  k.on(o, "click", function() {
    e == null || e.classList.toggle("active");
  });
}
k.on(window, "load.uds.ranking-card", Cn);
function Nn() {
  ce.Chart.register(...ce.registerables);
  const e = 50;
  var o = document.getElementById("uds-donut");
  if (!o)
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
  new ce.Chart(o, r);
}
k.on(window, "load.uds.chart", Nn);
function Dn() {
  function e({ target: o }) {
    const r = o.getAttribute("href");
    o.getAttribute("data-bs-toggle") !== "collapse" || !r || !r.includes("#") || Mo(
      document.querySelector(".collapsing")
    );
  }
  k.on(document, "click.uds.collapse", e);
}
k.on(window, "load.uds.collapse", Dn);
function we() {
  var o, r, a, i;
  const e = (s) => {
    window.dataLayer = window.dataLayer || [];
    const { dataLayer: c } = window;
    c && c.push(s);
  };
  (o = document.querySelectorAll("[data-ga-header]")) == null || o.forEach(
    (s) => s.addEventListener("click", () => {
      const c = s.getAttribute("data-ga-header-event") || "link";
      let p = s.getAttribute("data-ga-header-action") || "click";
      const d = s.getAttribute("aria-expanded");
      d && (p = d === "false" ? "open" : "close");
      const f = s.getAttribute("data-ga-header-type") || "internal link", g = s.getAttribute("data-ga-header-section") || "main navbar", _ = s.getAttribute("data-ga-header") || "", E = s.getAttribute("data-ga-header-component");
      e({
        name: "onclick",
        event: c.toLowerCase(),
        action: p.toLowerCase(),
        type: f.toLowerCase(),
        section: g.toLowerCase(),
        region: "navbar",
        text: _.toLowerCase(),
        ...E && {
          component: E.toLowerCase()
        }
      });
    })
  ), (r = document.querySelectorAll("[data-ga-input-header-event]")) == null || r.forEach(
    (s) => s.addEventListener("change", (c) => {
      const p = s.getAttribute("data-ga-input-header-event") || "", d = c.target.value || "";
      e({
        name: "onenter",
        action: "type",
        type: "main search",
        section: "topbar",
        region: "navbar",
        text: d.toLowerCase(),
        event: p.toLowerCase()
      });
    })
  ), (a = document.querySelectorAll("[data-ga]")) == null || a.forEach(
    (s) => s.addEventListener("click", () => {
      const c = {};
      Array.from(s.attributes).forEach((d) => {
        if (d.name.startsWith("data-ga-")) {
          const f = d.name.replace("data-ga-", ""), g = d.value;
          g && (c[f] = g.toLowerCase());
        } else if (d.name === "data-ga") {
          const f = d.value;
          f && (c.text = f.toLowerCase());
        }
      });
      const p = s.getAttribute("aria-expanded");
      p && (c.action = p === "false" ? "open" : "close"), e(c);
    })
  ), (i = document.querySelectorAll("[data-ga-input]")) == null || i.forEach(
    (s) => s.addEventListener("change", (c) => {
      const p = s.getAttribute("data-ga-input-name") || "", d = s.getAttribute("data-ga-input-action") || "", f = s.getAttribute("data-ga-input") || "", g = s.getAttribute("data-ga-input-region") || "", _ = s.getAttribute("data-ga-input-section") || "";
      let E = s.getAttribute("data-ga-input-event") || "", v;
      switch (f) {
        case "checkbox":
          v = c.target.labels[0].textContent || "", E = c.target.checked ? E : "deselect";
          break;
        case "radio button":
          v = c.target.labels[0].textContent || "";
          break;
        case "blur":
          v = c.target.value.toLowerCase() || "";
          break;
        default:
          v = [...c.target.selectedOptions].map((b) => b.value).join(",") || "";
          break;
      }
      e({
        name: p.toLowerCase(),
        event: E.toLowerCase(),
        action: d.toLowerCase(),
        type: f.toLowerCase(),
        section: _.toLowerCase(),
        region: g.toLowerCase(),
        text: v.toLowerCase()
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
window.initDataLayer = window.initDataLayer || we;
k.on(window, "load.uds.data-layer", we);
const Le = () => {
  const e = () => {
    const r = document.getElementById("asu-header");
    window.scrollY > (r == null ? void 0 : r.getBoundingClientRect().top) ? r == null || r.classList.add("scrolled") : r == null || r.classList.remove("scrolled");
  };
  k.on(window, "scroll.uds.header", e), document.querySelectorAll(
    ".uds-header-v2 .header-top-search .search-button"
  ).forEach((r) => {
    r.addEventListener("click", () => {
      const a = r.closest(".header-top-search");
      if (a) {
        a.classList.add("open");
        const i = a.querySelector(".search-input");
        i && i.focus();
      }
    });
  }), document.querySelectorAll(".uds-header-v2 .navbar-mobile-search input[type=search]").forEach((r) => {
    r.addEventListener("input", () => {
      const a = r.closest(".navbar-mobile-search");
      a && (r.value.length > 0 ? a.classList.add("has-value") : a.classList.remove("has-value"));
    });
  }), document.querySelectorAll(".uds-header-v2 .header-top-search .search-input").forEach((r) => {
    r.addEventListener("blur", () => {
      if (!r.value) {
        const a = r.closest(".header-top-search");
        a && setTimeout(() => a.classList.remove("open"), 200);
      }
    });
  });
};
window.initGlobalHeader = window.initGlobalHeader || Le;
k.on(window, "load.uds.global-header", Le);
function In() {
  const e = ".uds-video-hero", o = e + " video", r = e + " #playHeroVid", a = e + " #pauseHeroVid", i = "click", s = "block", c = "none", p = document.querySelector(o), d = document.querySelector(r), f = document.querySelector(a);
  function g(b) {
    b.paused ? b.play() : b.pause();
  }
  function _(b, h) {
    getComputedStyle(b).display === c ? (h.style.display = c, b.style.display = s, b.focus()) : (b.style.display = c, h.style.display = s, h.focus());
  }
  function E(b) {
    b.stopPropagation(), _(d, f), g(p);
  }
  function v(b) {
    b.stopPropagation(), _(d, f), g(p);
  }
  f == null || f.addEventListener(i, E), d == null || d.addEventListener(i, v);
}
k.on(window, "load.uds.heroes-video", In);
const xn = () => {
  const o = () => {
    document.querySelectorAll(".parallax-container").forEach((c) => {
      const p = c.querySelector("img"), d = c.offsetHeight - p.height * 1.2, f = p.dataset.parallaxType === "scroll-to" ? window.innerHeight : window.innerHeight + c.offsetHeight, g = c.getBoundingClientRect().top, E = (window.innerHeight - g) / f;
      if (E < 0)
        p.style.top = d + "px";
      else if (E > 1)
        p.style.top = "0";
      else {
        const v = d * (1 - E);
        p.style.top = v + "px";
      }
    });
  }, r = (c) => {
    const p = c.parentNode, d = c.width, f = c.height;
    let g = p.offsetWidth / d, _ = 0, E = f * g, v = d * g;
    const b = +c.dataset.parallaxFactor || 1.2;
    !c.dataset.noScale && E < p.offsetHeight * b && (g = p.offsetHeight * b / E, E *= g, v *= g, _ = (v - p.offsetWidth) / 2 * -1), c.style.height = E + "px", c.style.left = _ + "px";
  }, a = () => {
    document.querySelectorAll(".parallax-container img").forEach((c, p) => {
      c.complete ? r(c) : c.onload = () => r(c);
    });
  }, i = (c) => {
    const { dataLayer: p } = window, d = {
      event: "link",
      action: "click",
      name: "onclick",
      type: "internal link",
      region: "main content",
      ...c
    };
    p && p.push(d);
  };
  document.querySelectorAll("[data-ga-image-parallax]").forEach(
    (c) => k.on(c, "focus.uds.image-parallax", () => {
      const p = {
        section: c.getAttribute("data-ga-image-parallax-section").toLowerCase(),
        text: c.getAttribute("data-ga-image-parallax").toLowerCase()
      };
      i(p);
    })
  ), a(), k.on(window, "resize.uds.image-parallax", a), k.on(window, "scroll.uds.image-parallax", o);
};
k.on(window, "load.uds.image-parallax", xn);
function Mn() {
  var e, o;
  (e = document.getElementById("openModalButton")) == null || e.addEventListener("click", function() {
    document.getElementById("uds-modal").classList.add("open");
  }), (o = document.getElementById("closeModalButton")) == null || o.addEventListener("click", function() {
    document.getElementById("uds-modal").classList.remove("open");
  });
}
k.on(window, "load.uds.modals", Mn);
function Pn() {
  const o = "button", r = ".nav-tabs", a = ".nav-item", i = ".uds-tabbed-panels", s = ".scroll-control-prev", c = ".scroll-control-next", p = "click", d = "scroll", f = "focus", g = "none", _ = "block", v = (h) => {
    ["a", o].includes(h.target.localName) && h.target.focus();
  }, b = (h) => {
    const C = h.parentElement, R = h.offsetLeft + h.offsetWidth, F = C.scrollLeft + C.offsetWidth;
    C.scrollLeft > h.offsetLeft && (C.scrollLeft = h.offsetLeft), F < R && (C.scrollLeft += R - F);
  };
  document.querySelectorAll(i).forEach((h) => {
    const C = h.querySelector(r), R = h.querySelectorAll(a), F = h.querySelector(
      s
    ), ct = h.querySelector(
      c
    );
    let q = 0;
    h.addEventListener(p, function(x) {
      v(x);
    });
    const it = (x, B, X) => {
      B.preventDefault();
      const Z = getComputedStyle(C).left.replace("px", "");
      let M = parseInt(Z, 10);
      X === 1 && q > 0 && (q -= 1), q < R.length - 1 && X == -1 && (q += 1), C.dataset.scrollPosition = q, M = 0;
      for (var G = 0; G < q; G++)
        M += R[G].offsetWidth + parseInt(getComputedStyle(R[G]).marginLeft, 10) + parseInt(getComputedStyle(R[G]).marginRight, 10);
      C.scrollLeft = M, H(x, M);
    }, H = (x, B) => {
      const X = C.scrollWidth - B;
      q == 0 ? F.style.display = g : F.style.display = _, X <= h.offsetWidth ? ct.style.display = g : ct.style.display = _;
    };
    C.addEventListener(d, (x) => {
      const B = x.target.scrollLeft, X = C.offsetWidth + B + 10 >= C.scrollWidth;
      F.style.display = B < 10 ? g : _, ct.style.display = X ? g : _;
    }), R.forEach((x) => {
      x.addEventListener(f, function(B) {
        b(x);
      });
    }), ct.addEventListener(p, function(x) {
      it(this, x, -1);
    }), F.addEventListener(p, function(x) {
      it(this, x, 1);
    }), F.style.display = g;
    const N = C.scrollWidth, A = h.offsetWidth;
    N <= A && (ct.style.display = g);
  });
}
k.on(window, "load.uds.tabs", Pn);
function kn() {
  function e() {
    const a = ".uds-table-fixed-wrapper", i = ".uds-table.uds-table-fixed table", s = ".scroll-control.previous";
    document.querySelectorAll(a).forEach((p, d) => {
      const f = p.querySelector(i);
      f.setAttribute("id", "uds-table-" + d);
      const g = f.querySelector("tbody tr > *"), _ = p.querySelector(s);
      _.style.left = g.offsetWidth + "px";
    });
  }
  function o() {
    const a = ".uds-table-fixed", i = ".uds-table-fixed-wrapper", s = ".scroll-control.previous", c = ".scroll-control.next";
    document.querySelectorAll(i).forEach((d, f) => {
      const g = d.querySelector(a), _ = d.querySelector(s), E = d.querySelector(c);
      ["click", "focus"].forEach((v) => {
        k.on(_, v, function() {
          g.scrollLeft -= 100;
        }), k.on(E, v, function() {
          g.scrollLeft += 100;
        });
      });
    });
  }
  function r(a, i) {
    let s;
    return (...c) => {
      clearTimeout(s), s = setTimeout(() => {
        a.apply(this, c);
      }, i);
    };
  }
  e(), o(), k.on(window, "resize", function() {
    r(e, 100)();
  });
}
k.on(window, "load.uds.fixed-table", kn);
function Hn() {
  const r = ".uds-tooltip-container", i = "[aria-describedby]", p = document.querySelectorAll(
    `${r} > ${i} + [role=tooltip]`
  );
  function d() {
    document.querySelectorAll(
      `${i}[aria-expanded="true"]`
    ).forEach((v) => {
      v.setAttribute("aria-expanded", "false");
    });
  }
  function f(E) {
    let v = E.target.querySelector(`${r} ${i}`) || E.target, b = v.nextElementSibling;
    E.type === "keydown" && E.key !== " " || (d(), v.getBoundingClientRect().right + 288 > window.innerWidth ? b.classList.add("bottom-placement") : b.classList.remove("bottom-placement"), v.setAttribute("aria-expanded", "true"));
  }
  function g(E) {
    let v = E.target.querySelector(`${r} ${i}`) || E.target;
    E.type === "mouseleave" && v === document.activeElement || v.setAttribute("aria-expanded", "false");
  }
  function _(E) {
    E.key === "Escape" && g(E);
  }
  [...p].map((E) => {
    const v = new AbortController(), { signal: b } = v, h = E.previousElementSibling, C = h.parentElement;
    return h.addEventListener("mouseenter", f, { signal: b }), h.addEventListener("focus", f, { signal: b }), h.addEventListener("keydown", f, { signal: b }), h.addEventListener("blur", g, { signal: b }), h.addEventListener("keydown", _, { signal: b }), C.addEventListener("mouseleave", g, { signal: b }), v;
  });
}
k.on(window, "load.uds.tooltips", Hn);
function Fn() {
  const e = ".uds-video-player", o = e + " video", r = e + " .uds-video-btn-play", a = e + " .uds-video-overlay", i = "click", s = "ended", c = "flex", p = "none", d = document.querySelector(o), f = document.querySelector(a), g = document.querySelector(r);
  function _(R) {
    R.style.display === p ? R.style.display = c : R.style.display = p;
  }
  function E(R) {
    R.paused ? R.play() : R.pause();
  }
  function v(R) {
    E(this), _(this.nextElementSibling);
  }
  function b(R) {
    R.stopPropagation();
    const F = this.parentNode;
    _(F), E(d);
  }
  function h(R) {
    _(this), E(d);
  }
  function C(R) {
    _(f);
  }
  d == null || d.addEventListener(i, v), g == null || g.addEventListener(i, b), f == null || f.addEventListener(i, h), d == null || d.addEventListener(s, C);
}
k.on(window, "load.uds.video", Fn);
const Wo = {
  // Banner, // code updated to use bootstrap alert so we don't need this
  initAnchorMenu: Ln,
  initBlockquoteAnimation: Rn,
  initCalendar: On,
  initCollapse: Dn,
  initChart: Nn,
  initDataLayer: we,
  initFixedTable: kn,
  initGlobalHeader: Le,
  initHeroesVideo: In,
  initImageParallax: xn,
  initModals: Mn,
  initRankingCard: Cn,
  initTabbedPanels: Pn,
  initTooltips: Hn,
  initVideo: Fn,
  initCardBodies: ve
};
export {
  Wo as default
};
//# sourceMappingURL=unity-bootstrap.es.js.map
