import { __esmMin as e } from "./rolldown-runtime.DSjM2LRs.mjs";
import {
  Y as t,
  Z as n,
  ae as r,
  fe as i,
  ie as a,
  init_jsx_runtime as o,
  init_npm_react_18_2 as s,
  init_ssg_sandbox_shims as c,
  j as l,
  p as u,
  pe as d,
  q as f,
  se as p,
  te as m,
  u as h,
  ue as g,
  window as _,
  x as v,
  ye as y,
} from "./react.CL8SE-Jx.mjs";
import {
  LayoutGroup as b,
  animate as x,
  frame as S,
  init_framer_motion_5EXT2AMG as C,
  mix as ee,
  motion as w,
  useInView as te,
  useMotionValue as T,
  useTransform as E,
  wrap as ne,
} from "./motion.CbTbuOc9.mjs";
import {
  ComponentViewportProvider as D,
  Container as O,
  ControlType as k,
  GeneratedComponentContext as A,
  Link as re,
  NotFoundError as ie,
  PropertyOverrides2 as ae,
  RenderTarget as oe,
  ResolveLinks as se,
  RichText as ce,
  addFonts as le,
  addPropertyControls as ue,
  cx as de,
  fontStore as fe,
  getFonts as j,
  getFontsFromSharedStyle as M,
  getWhereExpressionFromPathVariables as pe,
  init_framer_TLIAXGT6 as me,
  useComponentViewport as he,
  useCurrentPathVariables as ge,
  useCustomCursors as _e,
  useHydratedBreakpointVariants as ve,
  useIsOnFramerCanvas as ye,
  useLocaleCode as N,
  useLocaleInfo as be,
  useQueryData as xe,
  useRouteElementId as Se,
  useRouter as Ce,
  withCSS as P,
  withFX as we,
  withOptimizedAppearEffect as F,
  withVariantAppearEffect as Te,
} from "./framer.tQbOOGJb.mjs";
import {
  FramerBEGDBMHl_ as Ee,
  FramerIZPeE10DN as De,
  FramerX44af24a6 as Oe,
  FramergDFtw0mKz as ke,
  FramerkJYLTxD7F as Ae,
  className as je,
  className$1 as Me,
  className$2 as Ne,
  className$3 as Pe,
  css as Fe,
  css$1 as I,
  css$2 as Ie,
  css$3 as Le,
  fonts as Re,
  fonts$1 as ze,
  fonts$2 as Be,
  fonts$3 as Ve,
  init_BEGDBMHl_ as L,
  init_IZPeE10DN as R,
  init_PSEgU1pGW as z,
  init_UByHkDadJ as B,
  init_X44af24a6 as He,
  init_gDFtw0mKz as V,
  init_ircUlf0Vd as H,
  init_kJYLTxD7F as Ue,
  init_y5ezp3Fqp as U,
} from "./shared-lib.f_QHqq7I.mjs";
import {
  className as We,
  className$1 as Ge,
  className$2 as Ke,
  css as qe,
  css$1 as Je,
  css$2 as Ye,
  fonts as Xe,
  fonts$1 as Ze,
  fonts$2 as Qe,
  init_DhsVO3ura as $e,
  init_enXnUuyN7 as et,
  init_nzdW7Y_Eq as tt,
} from "./enXnUuyN7.BSYCfmIe.mjs";
import {
  FramerCW2m0Dqge as nt,
  init_CW2m0Dqge as rt,
} from "./CW2m0Dqge.Sj1bd6mI.mjs";
import { init_HvA2icrab as it, k as at } from "./HvA2icrab.BdPc-sYg.mjs";
import {
  className as ot,
  className$1 as st,
  className$2 as W,
  className$3 as ct,
  css as lt,
  css$1 as ut,
  css$2 as dt,
  css$3 as ft,
  fonts as pt,
  fonts$1 as mt,
  fonts$2 as ht,
  fonts$3 as gt,
  init_A9twcaVyW as _t,
  init_PvJoBK5D5 as vt,
  init_f8Sgmu7qr as yt,
  init_lBksyl_vM as bt,
} from "./PvJoBK5D5.CYx4-lZ3.mjs";
import { init_o7Lhg86HO as xt, metadata as G } from "./o7Lhg86HO.CaJqTJHz.mjs";
function St(e, t) {
  return t ? e * (1e3 / t) : 0;
}
var Ct,
  wt,
  Tt = e(() => {
    (Ct = (e) => e), (wt = { ms: (e) => 1e3 * e, s: (e) => e / 1e3 });
  });
function Et(e, t, n, r, i) {
  let a,
    o,
    s = 0;
  do (o = t + (n - t) / 2), (a = Ot(o, r, i) - e), a > 0 ? (n = o) : (t = o);
  while (Math.abs(a) > kt && ++s < At);
  return o;
}
function Dt(e, t, n, r) {
  if (e === t && n === r) return Ct;
  let i = (t) => Et(t, 0, 1, e, n);
  return (e) => (e === 0 || e === 1 ? e : Ot(i(e), t, r));
}
var Ot,
  kt,
  At,
  jt = e(() => {
    Tt(),
      (Ot = (e, t, n) =>
        (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e),
      (kt = 1e-7),
      (At = 12);
  }),
  Mt,
  Nt = e(() => {
    jt(),
      (Mt = {
        ease: Dt(0.25, 0.1, 0.25, 1),
        "ease-in": Dt(0.42, 0, 1, 1),
        "ease-in-out": Dt(0.42, 0, 0.58, 1),
        "ease-out": Dt(0, 0, 0.58, 1),
      });
  });
function Pt(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == `function`) {
    var i = 0;
    for (r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      t.indexOf(r[i]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
        (n[r[i]] = e[r[i]]);
  }
  return n;
}
var Ft = e(() => {}),
  K,
  It,
  Lt,
  Rt,
  zt = e(() => {
    (K = {}),
      Object.defineProperty(K, `__esModule`, { value: !0 }),
      (K.warning = function () {}),
      (K.invariant = function () {}),
      (It = K.__esModule),
      (Lt = K.warning),
      (Rt = K.invariant);
  });
function Bt(e, t, n) {
  let r = Math.max(t - Ut, 0);
  return St(n - e(r), t - r);
}
function Vt(e, t, n) {
  return (e < t && n >= t) || (e > t && n <= t);
}
function Ht(e) {
  let t,
    n = Jt,
    r = e(0),
    i = [r.current];
  for (; !r.done && n < Yt; )
    (r = e(n)),
      i.push(r.done ? r.target : r.current),
      t === void 0 && r.hasReachedTarget && (t = n),
      (n += Jt);
  let a = n - Jt;
  return (
    i.length === 1 && i.push(r.current),
    { keyframes: i, duration: a / 1e3, overshootDuration: (t ?? a) / 1e3 }
  );
}
var Ut,
  Wt,
  Gt,
  Kt,
  qt,
  Jt,
  Yt,
  Xt = e(() => {
    Tt(),
      (Ut = 5),
      (Wt = { stiffness: 100, damping: 10, mass: 1 }),
      (Gt = (e = Wt.stiffness, t = Wt.damping, n = Wt.mass) =>
        t / (2 * Math.sqrt(e * n))),
      (Kt = ({
        stiffness: e = Wt.stiffness,
        damping: t = Wt.damping,
        mass: n = Wt.mass,
        from: r = 0,
        to: i = 1,
        velocity: a = 0,
        restSpeed: o = 2,
        restDistance: s = 0.5,
      } = {}) => {
        a = a ? wt.s(a) : 0;
        let c = { done: !1, hasReachedTarget: !1, current: r, target: i },
          l = i - r,
          u = Math.sqrt(e / n) / 1e3,
          d = Gt(e, t, n),
          f;
        if (d < 1) {
          let e = u * Math.sqrt(1 - d * d);
          f = (t) =>
            i -
            Math.exp(-d * u * t) *
              (((d * u * l - a) / e) * Math.sin(e * t) + l * Math.cos(e * t));
        } else f = (e) => i - Math.exp(-u * e) * (l + (u * l - a) * e);
        return (e) => {
          c.current = f(e);
          let t = e === 0 ? a : Bt(f, e, c.current),
            n = Math.abs(t) <= o,
            l = Math.abs(i - c.current) <= s;
          return (
            (c.done = n && l), (c.hasReachedTarget = Vt(r, i, c.current)), c
          );
        };
      }),
      (qt = ({
        from: e = 0,
        velocity: t = 0,
        power: n = 0.8,
        decay: r = 0.325,
        bounceDamping: i,
        bounceStiffness: a,
        changeTarget: o,
        min: s,
        max: c,
        restDistance: l = 0.5,
        restSpeed: u,
      }) => {
        r = wt.ms(r);
        let d = { hasReachedTarget: !1, done: !1, current: e, target: e },
          f = (e) => (s !== void 0 && e < s) || (c !== void 0 && e > c),
          p = (e) =>
            s === void 0
              ? c
              : c === void 0 || Math.abs(s - e) < Math.abs(c - e)
              ? s
              : c,
          m = n * t,
          h = e + m,
          g = o === void 0 ? h : o(h);
        (d.target = g), g !== h && (m = g - e);
        let _ = (e) => -m * Math.exp(-e / r),
          v = (e) => g + _(e),
          y = (e) => {
            let t = _(e),
              n = v(e);
            (d.done = Math.abs(t) <= l), (d.current = d.done ? g : n);
          },
          b,
          x,
          S = (e) => {
            f(d.current) &&
              ((b = e),
              (x = Kt({
                from: d.current,
                to: p(d.current),
                velocity: Bt(v, e, d.current),
                damping: i,
                stiffness: a,
                restDistance: l,
                restSpeed: u,
              })));
          };
        return (
          S(0),
          (e) => {
            let t = !1;
            return (
              !x && b === void 0 && ((t = !0), y(e), S(e)),
              b !== void 0 && e > b
                ? ((d.hasReachedTarget = !0), x(e - b))
                : ((d.hasReachedTarget = !1), !t && y(e), d)
            );
          }
        );
      }),
      (Jt = 10),
      (Yt = 1e4);
  });
function Zt(e, t) {
  var n;
  return (
    typeof e == `string`
      ? t
        ? ((n = t[e]) ?? (t[e] = document.querySelectorAll(e)), (e = t[e]))
        : (e = document.querySelectorAll(e))
      : e instanceof Element && (e = [e]),
    Array.from(e || [])
  );
}
function Qt(e) {
  let t = new WeakMap();
  return (n = {}) => {
    let r = new Map(),
      i = (t = 0, i = 100, a = 0, o = !1) => {
        let s = `${t}-${i}-${a}-${o}`;
        return (
          r.has(s) ||
            r.set(
              s,
              e(
                Object.assign(
                  {
                    from: t,
                    to: i,
                    velocity: a,
                    restSpeed: o ? 0.05 : 2,
                    restDistance: o ? 0.01 : 0.5,
                  },
                  n
                )
              )
            ),
          r.get(s)
        );
      },
      a = (e) => (t.has(e) || t.set(e, Ht(e)), t.get(e));
    return {
      createAnimation: (e, t, n, r, o) => {
        var s, c;
        let l,
          u = e.length,
          d = n && u <= 2 && e.every(Cn);
        if (d) {
          let n = e[u - 1],
            d = u === 1 ? null : e[0],
            f = 0,
            p = 0,
            m = o?.generator;
          if (m) {
            let { animation: t, generatorStartTime: n } = o,
              r = t?.startTime || n || 0,
              i = t?.currentTime || performance.now() - r,
              a = m(i).current;
            (p = (s = d) ?? a),
              (u === 1 || (u === 2 && e[0] === null)) &&
                (f = Bt((e) => m(e).current, i, a));
          } else p = (c = d) ?? parseFloat(t());
          let h = i(p, n, f, r?.includes(`scale`)),
            g = a(h);
          (l = Object.assign(Object.assign({}, g), { easing: `linear` })),
            o &&
              ((o.generator = h), (o.generatorStartTime = performance.now()));
        } else {
          let e = a(i(0, 100));
          l = { easing: `ease`, duration: e.overshootDuration };
        }
        return l;
      },
    };
  };
}
function $t(e, t, { root: n, margin: r, amount: i = `any` } = {}) {
  if (typeof IntersectionObserver > `u`) return () => {};
  let a = Zt(e),
    o = new WeakMap(),
    s = (e) => {
      e.forEach((e) => {
        let n = o.get(e.target);
        if (e.isIntersecting !== !!n)
          if (e.isIntersecting) {
            let n = t(e);
            typeof n == `function` ? o.set(e.target, n) : c.unobserve(e.target);
          } else n && (n(e), o.delete(e.target));
      });
    },
    c = new IntersectionObserver(s, {
      root: n,
      rootMargin: r,
      threshold: typeof i == `number` ? i : En[i],
    });
  return a.forEach((e) => c.observe(e)), () => c.disconnect();
}
function en(e, t) {
  if (t) {
    let { inlineSize: e, blockSize: n } = t[0];
    return { width: e, height: n };
  }
  return e instanceof SVGElement && `getBBox` in e
    ? e.getBBox()
    : { width: e.offsetWidth, height: e.offsetHeight };
}
function tn({ target: e, contentRect: t, borderBoxSize: n }) {
  var r;
  (r = Dn.get(e)) == null ||
    r.forEach((r) => {
      r({
        target: e,
        contentSize: t,
        get size() {
          return en(e, n);
        },
      });
    });
}
function nn(e) {
  e.forEach(tn);
}
function rn() {
  typeof ResizeObserver < `u` && (On = new ResizeObserver(nn));
}
function an(e, t) {
  On || rn();
  let n = Zt(e);
  return (
    n.forEach((e) => {
      let n = Dn.get(e);
      n || ((n = new Set()), Dn.set(e, n)), n.add(t), On?.observe(e);
    }),
    () => {
      n.forEach((e) => {
        let n = Dn.get(e);
        n?.delete(t), (n != null && n.size) || On == null || On.unobserve(e);
      });
    }
  );
}
function on() {
  (An = () => {
    let e = { width: _.innerWidth, height: _.innerHeight },
      t = { target: _, size: e, contentSize: e };
    kn.forEach((e) => e(t));
  }),
    _.addEventListener(`resize`, An);
}
function sn(e) {
  return (
    kn.add(e),
    An || on(),
    () => {
      kn.delete(e), !kn.size && An && (An = void 0);
    }
  );
}
function cn(e, t) {
  return typeof e == `function` ? sn(e) : an(e, t);
}
function ln(e, t, n) {
  e.dispatchEvent(new CustomEvent(t, { detail: { originalEvent: n } }));
}
function un(e, t, n) {
  e.dispatchEvent(new CustomEvent(t, { detail: { originalEntry: n } }));
}
var dn,
  fn,
  pn,
  mn,
  hn,
  gn,
  _n,
  vn,
  yn,
  bn,
  xn,
  Sn,
  Cn,
  wn,
  Tn,
  En,
  Dn,
  On,
  kn,
  An,
  jn,
  Mn,
  Nn,
  Pn,
  Fn,
  In,
  Ln = e(() => {
    for (let e in (c(),
    Tt(),
    Nt(),
    Ft(),
    zt(),
    Xt(),
    (dn = [``, `X`, `Y`, `Z`]),
    (fn = [`translate`, `scale`, `rotate`, `skew`]),
    (pn = {
      syntax: `<angle>`,
      initialValue: `0deg`,
      toDefaultUnit: (e) => e + `deg`,
    }),
    (mn = {
      translate: {
        syntax: `<length-percentage>`,
        initialValue: `0px`,
        toDefaultUnit: (e) => e + `px`,
      },
      rotate: pn,
      scale: { syntax: `<number>`, initialValue: 1, toDefaultUnit: Ct },
      skew: pn,
    }),
    (hn = new Map()),
    (gn = (e) => `--motion-${e}`),
    (_n = [`x`, `y`, `z`]),
    fn.forEach((e) => {
      dn.forEach((t) => {
        _n.push(e + t), hn.set(gn(e + t), mn[e]);
      });
    }),
    (vn = new Set(_n)),
    (yn = (e) => document.createElement(`div`).animate(e, { duration: 0.001 })),
    (bn = {
      cssRegisterProperty: () =>
        typeof CSS < `u` && Object.hasOwnProperty.call(CSS, `registerProperty`),
      waapi: () => Object.hasOwnProperty.call(Element.prototype, `animate`),
      partialKeyframes: () => {
        try {
          yn({ opacity: [1] });
        } catch {
          return !1;
        }
        return !0;
      },
      finished: () => !!yn({ opacity: [0, 1] }).finished,
    }),
    (xn = {}),
    (Sn = {}),
    bn))
      Sn[e] = () => (xn[e] === void 0 && (xn[e] = bn[e]()), xn[e]);
    (Cn = (e) => typeof e != `string`),
      (wn = Qt(Kt)),
      (Tn = Qt(qt)),
      (En = { any: 0, all: 1 }),
      (Dn = new WeakMap()),
      (kn = new Set()),
      (jn = {
        isActive: (e) => !!e.inView,
        subscribe: (
          e,
          { enable: t, disable: n },
          { inViewOptions: r = {} }
        ) => {
          let { once: i } = r,
            a = Pt(r, [`once`]);
          return $t(
            e,
            (r) => {
              if ((t(), un(e, `viewenter`, r), !i))
                return (t) => {
                  n(), un(e, `viewleave`, t);
                };
            },
            a
          );
        },
      }),
      (Mn = (e, t, n) => (r) => {
        (!r.pointerType || r.pointerType === `mouse`) && (n(), ln(e, t, r));
      }),
      (Nn = {
        isActive: (e) => !!e.hover,
        subscribe: (e, { enable: t, disable: n }) => {
          let r = Mn(e, `hoverstart`, t),
            i = Mn(e, `hoverend`, n);
          return (
            e.addEventListener(`pointerenter`, r),
            e.addEventListener(`pointerleave`, i),
            () => {
              e.removeEventListener(`pointerenter`, r),
                e.removeEventListener(`pointerleave`, i);
            }
          );
        },
      }),
      (Pn = {
        isActive: (e) => !!e.press,
        subscribe: (e, { enable: t, disable: n }) => {
          let r = (t) => {
              n(), ln(e, `pressend`, t), _.removeEventListener(`pointerup`, r);
            },
            i = (n) => {
              t(), ln(e, `pressstart`, n), _.addEventListener(`pointerup`, r);
            };
          return (
            e.addEventListener(`pointerdown`, i),
            () => {
              e.removeEventListener(`pointerdown`, i),
                _.removeEventListener(`pointerup`, r);
            }
          );
        },
      }),
      (Fn = { inView: jn, hover: Nn, press: Pn }),
      (In = [`initial`, `animate`, ...Object.keys(Fn), `exit`]);
  });
function Rn() {
  if (!zn()) return;
  let [e, t] = y(!document.hidden);
  return (
    g(() => {
      let e = () => t(!document.hidden);
      return (
        document.addEventListener(`visibilitychange`, e, !1),
        () => {
          document.removeEventListener(`visibilitychange`, e);
        }
      );
    }, []),
    e
  );
}
var zn,
  Bn = e(() => {
    s(), (zn = () => typeof document == `object`);
  });
function Vn(e, t) {
  let n,
    r = new Promise((e, r) => {
      (n = e), t.signal.addEventListener(`abort`, () => r);
    }).catch(() => {}),
    i = e.current;
  return (
    Object.defineProperty(e, `current`, {
      get() {
        return i;
      },
      set(e) {
        if (((i = e), e === null)) {
          t.abort();
          return;
        }
        n(e);
      },
      configurable: !0,
    }),
    r
  );
}
function q(e) {
  let {
      slots: t,
      startFrom: r,
      direction: a,
      effectsOptions: o,
      autoPlayControl: s,
      dragControl: c,
      alignment: f,
      gap: v,
      padding: b,
      paddingPerSide: C,
      paddingTop: ee,
      paddingRight: D,
      paddingBottom: O,
      paddingLeft: k,
      itemAmount: A,
      fadeOptions: re,
      intervalControl: ie,
      transitionControl: ae,
      arrowOptions: se,
      borderRadius: ce,
      progressOptions: le,
      style: ue,
    } = e,
    {
      effectsOpacity: de,
      effectsScale: fe,
      effectsRotate: j,
      effectsPerspective: M,
      effectsHover: pe,
    } = o,
    {
      fadeContent: me,
      overflow: he,
      fadeWidth: ge,
      fadeInset: _e,
      fadeAlpha: ve,
    } = re,
    {
      showMouseControls: ye,
      arrowSize: N,
      arrowRadius: be,
      arrowFill: xe,
      leftArrow: Se,
      rightArrow: Ce,
      arrowShouldSpace: P = !0,
      arrowShouldFadeIn: we = !1,
      arrowPosition: F,
      arrowPadding: Te,
      arrowGap: Ee,
      arrowPaddingTop: De,
      arrowPaddingRight: Oe,
      arrowPaddingBottom: ke,
      arrowPaddingLeft: Ae,
    } = se,
    {
      showProgressDots: je,
      dotSize: Me,
      dotsInset: Ne,
      dotsRadius: Pe,
      dotsPadding: Fe,
      dotsGap: I,
      dotsFill: Ie,
      dotsBackground: Le,
      dotsActiveOpacity: Re,
      dotsOpacity: ze,
      dotsBlur: Be,
    } = le,
    Ve = C ? `${ee}px ${D}px ${O}px ${k}px` : `${b}px`,
    L = oe.current() === oe.canvas,
    R = t.filter(Boolean),
    z = l.count(R) > 0,
    B = a === `left` || a === `right`,
    He = a === `right` || a === `bottom`;
  if (!z)
    return h(`section`, {
      style: Gn,
      children: [
        u(`div`, { style: Kn, children: `⭐️` }),
        u(`p`, { style: qn, children: `Connect to Content` }),
        u(`p`, {
          style: Jn,
          children: `Add layers or components to make infinite auto-playing slideshows.`,
        }),
      ],
    });
  let V = d(null),
    H = p(() => R.map((e) => ({ current: null })), [R]),
    Ue = d(void 0),
    [U, We] = y({
      parent: null,
      children: null,
      item: null,
      itemWidth: null,
      itemHeight: null,
      viewportLength: null,
    }),
    [Ge, Ke] = y(!1),
    [qe, Je] = y(s),
    [Ye, Xe] = y(!1),
    [Ze, Qe] = y(!1),
    $e = [],
    et = 4;
  L && (et = 1);
  let tt = m(() => {
      let e = H[0].current,
        t = H[R.length - 1].current;
      if (z && V.current) {
        let r = B ? V.current.offsetWidth : V.current.offsetHeight,
          i = e ? (B ? e.offsetLeft : e.offsetTop) : 0,
          a = t
            ? B
              ? t.offsetLeft + t.offsetWidth
              : t.offsetTop + t.offsetHeight
            : 0,
          o = a - i + v,
          s = e ? (B ? e.offsetWidth : e.offsetHeight) : 0,
          c = e ? e.offsetWidth : 0,
          l = e ? e.offsetHeight : 0,
          u = B
            ? Math.max(
                document.documentElement.clientWidth || 0,
                _.innerWidth || 0,
                V.current.offsetWidth
              )
            : Math.max(
                document.documentElement.clientHeight || 0,
                _.innerHeight || 0,
                V.current.offsetHeight
              );
        n(() =>
          We({
            parent: r,
            children: o,
            item: s,
            itemWidth: c,
            itemHeight: l,
            viewportLength: u,
          })
        );
      }
    }, [z]),
    nt = m(async () => {
      let e = new AbortController(),
        t = H[0],
        n = H[R.length - 1];
      if (!L && (!t.current || !n.current))
        try {
          await Promise.all([Vn(t, e), Vn(n, e)]);
        } catch {
          e.abort();
        }
      S.read(tt);
    }, [tt]);
  i(() => {
    z && nt();
  }, [z, A]);
  let rt = d(!0);
  g(
    () =>
      cn(V.current, ({ contentSize: e }) => {
        !rt.current && (e.width || e.height) && (nt(), Qe(!0)),
          (rt.current = !1);
      }),
    []
  ),
    g(() => {
      if (Ze) {
        let e = setTimeout(() => Qe(!1), 500);
        return () => clearTimeout(e);
      }
    }, [Ze]);
  let it = R?.length,
    at = L ? 0 : U?.children,
    ot = U?.item + v,
    st = r * ot,
    [W, ct] = y(r + it),
    [lt, ut] = y(!1),
    dt = d(null),
    ft = te(dt),
    pt = Rn() && ft,
    mt = He ? 1 : -1,
    ht = T(at),
    gt = B ? -r * (U?.itemWidth + v) : -r * (U?.itemHeight + v),
    _t = () => mt * W * ot,
    vt = L
      ? 0
      : E(ht, (e) => {
          let t = ne(-at, -at * 2, e);
          return isNaN(t) ? 0 : t;
        }),
    yt = ne(0, it, W),
    bt = ne(0, -it, W);
  i(() => {
    U?.children !== null && !rt.current && Ze && ht.set(_t());
  }, [U, at, mt, st, W, ot, Ze]);
  let xt = () => {
      L ||
        !z ||
        !U.parent ||
        lt ||
        (ht.get() !== _t() && x(ht, _t(), ae),
        s &&
          qe &&
          (Ue.current = setTimeout(() => {
            ct(W + 1), xt();
          }, ie * 1e3)));
    },
    G = (e) => {
      ct(He ? W - e : W + e);
    },
    St = (e) => {
      let t = ne(0, it, W),
        n = ne(0, -it, W),
        r = e - t,
        i = e - Math.abs(n);
      ct(He ? W - i : W + r);
    },
    Ct = () => {
      ut(!0);
    },
    wt = (e, { offset: t, velocity: n }) => {
      ut(!1);
      let r = B ? t.x : t.y,
        i = B ? n.x : n.y,
        a = r < -U.item / 2,
        o = r > U.item / 2,
        s = Math.abs(r),
        c = Math.round(s / U.item),
        l = c === 0 ? 1 : c;
      i > 200 ? G(-l) : i < -200 ? G(l) : (a && G(c), o && G(-c));
    };
  g(() => {
    if (!(!pt || Ze)) return xt(), () => Ue.current && clearTimeout(Ue.current);
  }, [$e, pt, Ze]);
  let Tt = 0,
    Et = `calc(${100 / A}% - ${v}px + ${v / A}px)`;
  for (let e = 0; e < et; e++)
    $e.push(
      ...l.map(
        R,
        (t, n) => (
          n === 0 && H[0],
          n === R.length - 1 && H[1],
          u(
            Qn,
            {
              ref: H[n],
              slideKey: e + n + `lg`,
              index: e,
              width: B && A > 1 ? Et : `100%`,
              height: B ? `100%` : A > 1 ? Et : `100%`,
              size: U,
              child: t,
              numChildren: R?.length,
              wrappedValue: vt,
              childCounter: Tt++,
              gap: v,
              isCanvas: L,
              isHorizontal: B,
              effectsOpacity: de,
              effectsScale: fe,
              effectsRotate: j,
              children: e + n,
            },
            e + n + `lg`
          )
        )
      )
    );
  let Dt = B ? `to right` : `to bottom`,
    Ot = ge / 2,
    kt = 100 - ge / 2,
    At = Zn(_e, 0, Ot),
    jt = 100 - _e,
    Mt = `linear-gradient(${Dt}, rgba(0, 0, 0, ${ve}) ${At}%, rgba(0, 0, 0, 1) ${Ot}%, rgba(0, 0, 0, 1) ${kt}%, rgba(0, 0, 0, ${ve}) ${jt}%)`,
    Nt = [],
    Pt = {};
  if (je) {
    for (let e = 0; e < R?.length; e++)
      Nt.push(
        u(
          Hn,
          {
            dotStyle: { ...er, width: Me, height: Me, backgroundColor: Ie },
            buttonStyle: Yn,
            selectedOpacity: Re,
            opacity: ze,
            onClick: () => St(e),
            wrappedIndex: yt,
            wrappedIndexInverted: bt,
            total: it,
            index: e,
            gap: I,
            padding: Fe,
            isHorizontal: B,
            isInverted: He,
          },
          e
        )
      );
    Be > 0 &&
      (Pt.backdropFilter =
        Pt.WebkitBackdropFilter =
        Pt.MozBackdropFilter =
          `blur(${Be}px)`);
  }
  let Ft = c
      ? {
          drag: B ? `x` : `y`,
          onDragStart: Ct,
          onDragEnd: wt,
          dragDirectionLock: !0,
          values: { x: ht, y: ht },
          dragMomentum: !1,
        }
      : {},
    K = F === `top-left` || F === `top-mid` || F === `top-right`,
    It = F === `bottom-left` || F === `bottom-mid` || F === `bottom-right`,
    Lt = F === `top-left` || F === `bottom-left`,
    Rt = F === `top-right` || F === `bottom-right`,
    zt = F === `top-mid` || F === `bottom-mid` || F === `auto`;
  return h(`section`, {
    style: {
      ...Wn,
      padding: Ve,
      WebkitMaskImage: me ? Mt : void 0,
      MozMaskImage: me ? Mt : void 0,
      maskImage: me ? Mt : void 0,
      opacity: U?.item === null ? Un : 1,
      userSelect: `none`,
    },
    onMouseEnter: () => {
      Ke(!0), pe || Je(!1);
    },
    onMouseLeave: () => {
      Ke(!1), pe || Je(!0);
    },
    onMouseDown: (e) => {
      e.preventDefault(), Xe(!0);
    },
    onMouseUp: () => Xe(!1),
    ref: dt,
    children: [
      u(`div`, {
        style: {
          width: `100%`,
          height: `100%`,
          margin: 0,
          padding: `inherit`,
          position: `absolute`,
          inset: 0,
          overflow: he ? `visible` : `hidden`,
          borderRadius: ce,
          userSelect: `none`,
          perspective: L ? `none` : M,
        },
        children: u(w.ul, {
          ref: V,
          ...Ft,
          style: {
            ...Wn,
            gap: v,
            placeItems: f,
            x: B ? (L ? gt : vt) : 0,
            y: B ? 0 : L ? gt : vt,
            flexDirection: B ? `row` : `column`,
            transformStyle: j !== 0 && !L ? `preserve-3d` : void 0,
            cursor: c ? (Ye ? `grabbing` : `grab`) : `auto`,
            userSelect: `none`,
            ...ue,
          },
          children: $e,
        }),
      }),
      h(`fieldset`, {
        style: { ...Xn },
        "aria-label": `Slideshow pagination controls`,
        className: `framer--slideshow-controls`,
        children: [
          h(w.div, {
            style: {
              position: `absolute`,
              display: `flex`,
              flexDirection: B ? `row` : `column`,
              justifyContent: P ? `space-between` : `center`,
              gap: P ? `unset` : Ee,
              opacity: we ? Un : 1,
              alignItems: `center`,
              inset: Te,
              top: P ? Te : K ? De : `unset`,
              left: P ? Te : Lt ? Ae : zt ? 0 : `unset`,
              right: P ? Te : Rt ? Oe : zt ? 0 : `unset`,
              bottom: P ? Te : It ? ke : `unset`,
            },
            animate: we && { opacity: Ge ? 1 : Un },
            transition: ae,
            children: [
              u(w.button, {
                type: `button`,
                style: {
                  ...Yn,
                  backgroundColor: xe,
                  width: N,
                  height: N,
                  borderRadius: be,
                  rotate: B ? 0 : 90,
                  display: ye ? `block` : `none`,
                  pointerEvents: `auto`,
                },
                onClick: () => G(-1),
                "aria-label": `Previous`,
                whileTap: { scale: 0.9 },
                transition: { duration: 0.15 },
                children: u(`img`, {
                  decoding: `async`,
                  width: N,
                  height: N,
                  src:
                    Se ||
                    `https://framerusercontent.com/images/6tTbkXggWgQCAJ4DO2QEdXXmgM.svg`,
                  alt: `Back Arrow`,
                }),
              }),
              u(w.button, {
                type: `button`,
                style: {
                  ...Yn,
                  backgroundColor: xe,
                  width: N,
                  height: N,
                  borderRadius: be,
                  rotate: B ? 0 : 90,
                  display: ye ? `block` : `none`,
                  pointerEvents: `auto`,
                },
                onClick: () => G(1),
                "aria-label": `Next`,
                whileTap: { scale: 0.9 },
                transition: { duration: 0.15 },
                children: u(`img`, {
                  decoding: `async`,
                  width: N,
                  height: N,
                  src:
                    Ce ||
                    `https://framerusercontent.com/images/11KSGbIZoRSg4pjdnUoif6MKHI.svg`,
                  alt: `Next Arrow`,
                }),
              }),
            ],
          }),
          Nt.length > 1
            ? u(`div`, {
                style: {
                  ...$n,
                  left: B ? `50%` : Ne,
                  top: B ? `unset` : `50%`,
                  transform: B ? `translateX(-50%)` : `translateY(-50%)`,
                  flexDirection: B ? `row` : `column`,
                  bottom: B ? Ne : `unset`,
                  borderRadius: Pe,
                  backgroundColor: Le,
                  userSelect: `none`,
                  ...Pt,
                },
                children: Nt,
              })
            : null,
        ],
      }),
    ],
  });
}
function Hn({
  selectedOpacity: e,
  opacity: t,
  total: n,
  index: r,
  wrappedIndex: i,
  wrappedIndexInverted: a,
  dotStyle: o,
  buttonStyle: s,
  gap: c,
  padding: l,
  isHorizontal: d,
  isInverted: f,
  ...p
}) {
  let m = i === r;
  f && (m = Math.abs(a) === r);
  let h = c / 2,
    g = !d && r > 0 ? h : l,
    _ = !d && r !== n - 1 ? h : l,
    v = d && r !== n - 1 ? h : l,
    y = d && r > 0 ? h : l;
  return u(`button`, {
    "aria-label": `Scroll to page ${r + 1}`,
    type: `button`,
    ...p,
    style: { ...s, padding: `${g}px ${v}px ${_}px ${y}px` },
    children: u(w.div, {
      style: { ...o },
      initial: !1,
      animate: { opacity: m ? e : t },
      transition: { duration: 0.3 },
    }),
  });
}
var Un,
  Wn,
  Gn,
  Kn,
  qn,
  Jn,
  Yn,
  Xn,
  Zn,
  Qn,
  $n,
  er,
  tr = e(() => {
    c(),
      o(),
      Ln(),
      me(),
      C(),
      s(),
      Bn(),
      (Un = 0.001),
      (q.defaultProps = {
        direction: `left`,
        dragControl: !1,
        startFrom: 0,
        itemAmount: 1,
        infinity: !0,
        gap: 10,
        padding: 10,
        autoPlayControl: !0,
        effectsOptions: {
          effectsOpacity: 1,
          effectsScale: 1,
          effectsRotate: 0,
          effectsPerspective: 1200,
          effectsHover: !0,
        },
        transitionControl: { type: `spring`, stiffness: 200, damping: 40 },
        fadeOptions: {
          fadeContent: !1,
          overflow: !1,
          fadeWidth: 25,
          fadeAlpha: 0,
          fadeInset: 0,
        },
        arrowOptions: {
          showMouseControls: !0,
          arrowShouldFadeIn: !1,
          arrowShouldSpace: !0,
          arrowFill: `rgba(0,0,0,0.2)`,
          arrowSize: 40,
        },
        progressOptions: { showProgressDots: !0 },
      }),
      ue(q, {
        slots: {
          type: k.Array,
          title: `Content`,
          control: { type: k.ComponentInstance },
        },
        direction: {
          type: k.Enum,
          title: `Direction`,
          options: [`left`, `right`, `top`, `bottom`],
          optionIcons: [
            `direction-left`,
            `direction-right`,
            `direction-up`,
            `direction-down`,
          ],
          optionTitles: [`Left`, `Right`, `Top`, `Bottom`],
          displaySegmentedControl: !0,
          defaultValue: q.defaultProps.direction,
        },
        autoPlayControl: {
          type: k.Boolean,
          title: `Auto Play`,
          defaultValue: !0,
        },
        intervalControl: {
          type: k.Number,
          title: `Interval`,
          defaultValue: 1.5,
          min: 0.5,
          max: 10,
          step: 0.1,
          displayStepper: !0,
          unit: `s`,
          hidden: (e) => !e.autoPlayControl,
        },
        dragControl: { type: k.Boolean, title: `Draggable`, defaultValue: !1 },
        startFrom: {
          type: k.Number,
          title: `Current`,
          min: 0,
          max: 10,
          displayStepper: !0,
          defaultValue: q.defaultProps.startFrom,
        },
        effectsOptions: {
          type: k.Object,
          title: `Effects`,
          controls: {
            effectsOpacity: {
              type: k.Number,
              title: `Opacity`,
              defaultValue: q.defaultProps.effectsOptions.effectsOpacity,
              min: 0,
              max: 1,
              step: 0.01,
              displayStepper: !0,
            },
            effectsScale: {
              type: k.Number,
              title: `Scale`,
              defaultValue: q.defaultProps.effectsOptions.effectsScale,
              min: 0,
              max: 1,
              step: 0.01,
              displayStepper: !0,
            },
            effectsPerspective: {
              type: k.Number,
              title: `Perspective`,
              defaultValue: q.defaultProps.effectsOptions.effectsPerspective,
              min: 200,
              max: 2e3,
              step: 1,
            },
            effectsRotate: {
              type: k.Number,
              title: `Rotate`,
              defaultValue: q.defaultProps.effectsOptions.effectsRotate,
              min: -180,
              max: 180,
              step: 1,
            },
            effectsHover: {
              type: k.Boolean,
              title: `On Hover`,
              enabledTitle: `Play`,
              disabledTitle: `Pause`,
              defaultValue: q.defaultProps.effectsOptions.effectsHover,
            },
          },
        },
        alignment: {
          type: k.Enum,
          title: `Align`,
          options: [`flex-start`, `center`, `flex-end`],
          optionIcons: {
            direction: {
              right: [`align-top`, `align-middle`, `align-bottom`],
              left: [`align-top`, `align-middle`, `align-bottom`],
              top: [`align-left`, `align-center`, `align-right`],
              bottom: [`align-left`, `align-center`, `align-right`],
            },
          },
          defaultValue: `center`,
          displaySegmentedControl: !0,
        },
        itemAmount: {
          type: k.Number,
          title: `Items`,
          min: 1,
          max: 10,
          displayStepper: !0,
          defaultValue: q.defaultProps.itemAmount,
        },
        gap: { type: k.Number, title: `Gap`, min: 0 },
        padding: {
          title: `Padding`,
          type: k.FusedNumber,
          toggleKey: `paddingPerSide`,
          toggleTitles: [`Padding`, `Padding per side`],
          defaultValue: 0,
          valueKeys: [
            `paddingTop`,
            `paddingRight`,
            `paddingBottom`,
            `paddingLeft`,
          ],
          valueLabels: [`T`, `R`, `B`, `L`],
          min: 0,
        },
        borderRadius: {
          type: k.Number,
          title: `Radius`,
          min: 0,
          max: 500,
          displayStepper: !0,
          defaultValue: 0,
        },
        transitionControl: {
          type: k.Transition,
          defaultValue: q.defaultProps.transitionControl,
          title: `Transition`,
        },
        fadeOptions: {
          type: k.Object,
          title: `Clipping`,
          controls: {
            fadeContent: { type: k.Boolean, title: `Fade`, defaultValue: !1 },
            overflow: {
              type: k.Boolean,
              title: `Overflow`,
              enabledTitle: `Show`,
              disabledTitle: `Hide`,
              defaultValue: !1,
              hidden(e) {
                return e.fadeContent === !0;
              },
            },
            fadeWidth: {
              type: k.Number,
              title: `Width`,
              defaultValue: 25,
              min: 0,
              max: 100,
              unit: `%`,
              hidden(e) {
                return e.fadeContent === !1;
              },
            },
            fadeInset: {
              type: k.Number,
              title: `Inset`,
              defaultValue: 0,
              min: 0,
              max: 100,
              unit: `%`,
              hidden(e) {
                return e.fadeContent === !1;
              },
            },
            fadeAlpha: {
              type: k.Number,
              title: `Opacity`,
              defaultValue: 0,
              min: 0,
              max: 1,
              step: 0.05,
              hidden(e) {
                return e.fadeContent === !1;
              },
            },
          },
        },
        arrowOptions: {
          type: k.Object,
          title: `Arrows`,
          controls: {
            showMouseControls: {
              type: k.Boolean,
              title: `Show`,
              defaultValue: q.defaultProps.arrowOptions.showMouseControls,
            },
            arrowFill: {
              type: k.Color,
              title: `Fill`,
              hidden: (e) => !e.showMouseControls,
              defaultValue: q.defaultProps.arrowOptions.arrowFill,
            },
            leftArrow: {
              type: k.Image,
              title: `Previous`,
              hidden: (e) => !e.showMouseControls,
            },
            rightArrow: {
              type: k.Image,
              title: `Next`,
              hidden: (e) => !e.showMouseControls,
            },
            arrowSize: {
              type: k.Number,
              title: `Size`,
              min: 0,
              max: 200,
              displayStepper: !0,
              defaultValue: q.defaultProps.arrowOptions.arrowSize,
              hidden: (e) => !e.showMouseControls,
            },
            arrowRadius: {
              type: k.Number,
              title: `Radius`,
              min: 0,
              max: 500,
              defaultValue: 40,
              hidden: (e) => !e.showMouseControls,
            },
            arrowShouldFadeIn: {
              type: k.Boolean,
              title: `Fade In`,
              defaultValue: !1,
              hidden: (e) => !e.showMouseControls,
            },
            arrowShouldSpace: {
              type: k.Boolean,
              title: `Distance`,
              enabledTitle: `Space`,
              disabledTitle: `Group`,
              defaultValue: q.defaultProps.arrowOptions.arrowShouldSpace,
              hidden: (e) => !e.showMouseControls,
            },
            arrowPosition: {
              type: k.Enum,
              title: `Position`,
              options: [
                `auto`,
                `top-left`,
                `top-mid`,
                `top-right`,
                `bottom-left`,
                `bottom-mid`,
                `bottom-right`,
              ],
              optionTitles: [
                `Center`,
                `Top Left`,
                `Top Middle`,
                `Top Right`,
                `Bottom Left`,
                `Bottom Middle`,
                `Bottom Right`,
              ],
              hidden: (e) => !e.showMouseControls || e.arrowShouldSpace,
            },
            arrowPadding: {
              type: k.Number,
              title: `Inset`,
              min: -100,
              max: 100,
              defaultValue: 20,
              displayStepper: !0,
              hidden: (e) => !e.showMouseControls || !e.arrowShouldSpace,
            },
            arrowPaddingTop: {
              type: k.Number,
              title: `Top`,
              min: -500,
              max: 500,
              defaultValue: 0,
              displayStepper: !0,
              hidden: (e) =>
                !e.showMouseControls ||
                e.arrowShouldSpace ||
                e.arrowPosition === `auto` ||
                e.arrowPosition === `bottom-mid` ||
                e.arrowPosition === `bottom-left` ||
                e.arrowPosition === `bottom-right`,
            },
            arrowPaddingBottom: {
              type: k.Number,
              title: `Bottom`,
              min: -500,
              max: 500,
              defaultValue: 0,
              displayStepper: !0,
              hidden: (e) =>
                !e.showMouseControls ||
                e.arrowShouldSpace ||
                e.arrowPosition === `auto` ||
                e.arrowPosition === `top-mid` ||
                e.arrowPosition === `top-left` ||
                e.arrowPosition === `top-right`,
            },
            arrowPaddingRight: {
              type: k.Number,
              title: `Right`,
              min: -500,
              max: 500,
              defaultValue: 0,
              displayStepper: !0,
              hidden: (e) =>
                !e.showMouseControls ||
                e.arrowShouldSpace ||
                e.arrowPosition === `auto` ||
                e.arrowPosition === `top-left` ||
                e.arrowPosition === `top-mid` ||
                e.arrowPosition === `bottom-left` ||
                e.arrowPosition === `bottom-mid`,
            },
            arrowPaddingLeft: {
              type: k.Number,
              title: `Left`,
              min: -500,
              max: 500,
              defaultValue: 0,
              displayStepper: !0,
              hidden: (e) =>
                !e.showMouseControls ||
                e.arrowShouldSpace ||
                e.arrowPosition === `auto` ||
                e.arrowPosition === `top-right` ||
                e.arrowPosition === `top-mid` ||
                e.arrowPosition === `bottom-right` ||
                e.arrowPosition === `bottom-mid`,
            },
            arrowGap: {
              type: k.Number,
              title: `Gap`,
              min: 0,
              max: 100,
              defaultValue: 10,
              displayStepper: !0,
              hidden: (e) => !e.showMouseControls || e.arrowShouldSpace,
            },
          },
        },
        progressOptions: {
          type: k.Object,
          title: `Dots`,
          controls: {
            showProgressDots: {
              type: k.Boolean,
              title: `Show`,
              defaultValue: !1,
            },
            dotSize: {
              type: k.Number,
              title: `Size`,
              min: 1,
              max: 100,
              defaultValue: 10,
              displayStepper: !0,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
            dotsInset: {
              type: k.Number,
              title: `Inset`,
              min: -100,
              max: 100,
              defaultValue: 10,
              displayStepper: !0,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
            dotsGap: {
              type: k.Number,
              title: `Gap`,
              min: 0,
              max: 100,
              defaultValue: 10,
              displayStepper: !0,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
            dotsPadding: {
              type: k.Number,
              title: `Padding`,
              min: 0,
              max: 100,
              defaultValue: 10,
              displayStepper: !0,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
            dotsFill: {
              type: k.Color,
              title: `Fill`,
              defaultValue: `#fff`,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
            dotsBackground: {
              type: k.Color,
              title: `Backdrop`,
              defaultValue: `rgba(0,0,0,0.2)`,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
            dotsRadius: {
              type: k.Number,
              title: `Radius`,
              min: 0,
              max: 200,
              defaultValue: 50,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
            dotsOpacity: {
              type: k.Number,
              title: `Opacity`,
              min: 0,
              max: 1,
              defaultValue: 0.5,
              step: 0.1,
              displayStepper: !0,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
            dotsActiveOpacity: {
              type: k.Number,
              title: `Current`,
              min: 0,
              max: 1,
              defaultValue: 1,
              step: 0.1,
              displayStepper: !0,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
            dotsBlur: {
              type: k.Number,
              title: `Blur`,
              min: 0,
              max: 50,
              defaultValue: 0,
              step: 1,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
          },
        },
      }),
      (Wn = {
        display: `flex`,
        flexDirection: `row`,
        width: `100%`,
        height: `100%`,
        maxWidth: `100%`,
        maxHeight: `100%`,
        placeItems: `center`,
        margin: 0,
        padding: 0,
        listStyleType: `none`,
        textIndent: `none`,
      }),
      (Gn = {
        display: `flex`,
        width: `100%`,
        height: `100%`,
        placeContent: `center`,
        placeItems: `center`,
        flexDirection: `column`,
        color: `#96F`,
        background: `rgba(136, 85, 255, 0.1)`,
        fontSize: 11,
        overflow: `hidden`,
        padding: `20px 20px 30px 20px`,
      }),
      (Kn = { fontSize: 32, marginBottom: 10 }),
      (qn = {
        margin: 0,
        marginBottom: 10,
        fontWeight: 600,
        textAlign: `center`,
      }),
      (Jn = {
        margin: 0,
        opacity: 0.7,
        maxWidth: 180,
        lineHeight: 1.5,
        textAlign: `center`,
      }),
      (Yn = {
        border: `none`,
        display: `flex`,
        placeContent: `center`,
        placeItems: `center`,
        overflow: `hidden`,
        background: `transparent`,
        cursor: `pointer`,
        margin: 0,
        padding: 0,
      }),
      (Xn = {
        display: `flex`,
        justifyContent: `space-between`,
        alignItems: `center`,
        position: `absolute`,
        pointerEvents: `none`,
        userSelect: `none`,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        border: 0,
        padding: 0,
        margin: 0,
      }),
      (Zn = (e, t, n) => Math.min(Math.max(e, t), n)),
      (Qn = t(function (e, t) {
        var n, r;
        let {
            slideKey: i,
            width: a,
            height: o,
            child: s,
            size: c,
            gap: l,
            wrappedValue: d,
            numChildren: p,
            childCounter: m,
            isCanvas: h,
            effects: _,
            effectsOpacity: v,
            effectsScale: y,
            effectsRotate: x,
            isHorizontal: S,
            isLast: C,
            index: w,
          } = e,
          te = (c?.item + l) * m,
          T = [-c?.item, 0, c?.parent - c?.item + l, c?.parent].map(
            (e) => e - te
          ),
          ne = !h && E(d, T, [-x, 0, 0, x]),
          D = !h && E(d, T, [x, 0, 0, -x]),
          O = !h && E(d, T, [v, 1, 1, v]),
          k = !h && E(d, T, [y, 1, 1, y]),
          A = !h && E(d, T, [1, 1, 0, 0]),
          re = !h && E(d, (e) => e >= T[1] && e <= T[2]);
        g(() => {
          if (re)
            return re.onChange((e) => {
              var n;
              (n = t.current) == null || n.setAttribute(`aria-hidden`, !e);
            });
        }, []);
        let ie = h
          ? `visible`
          : E(
              d,
              [
                T[0] - c.viewportLength,
                ee(T[1], T[2], 0.5),
                T[3] + c.viewportLength,
              ],
              [`hidden`, `visible`, `hidden`]
            );
        return u(b, {
          inherit: `id`,
          children: u(`li`, {
            style: { display: `contents` },
            "aria-hidden": w !== 0,
            children: f(
              s,
              {
                ref: t,
                key: i + `child`,
                style: {
                  ...(n = s.props)?.style,
                  flexShrink: 0,
                  userSelect: `none`,
                  width: a,
                  height: o,
                  opacity: O,
                  scale: k,
                  originX: S ? A : 0.5,
                  originY: S ? 0.5 : A,
                  rotateY: S ? ne : 0,
                  rotateX: S ? 0 : D,
                  visibility: ie,
                },
                layoutId: s.props.layoutId
                  ? s.props.layoutId + `-original-` + w
                  : void 0,
              },
              (r = s.props)?.children
            ),
          }),
        });
      })),
      ($n = {
        display: `flex`,
        placeContent: `center`,
        placeItems: `center`,
        overflow: `hidden`,
        position: `absolute`,
        pointerEvents: `auto`,
      }),
      (er = {
        borderRadius: `50%`,
        background: `white`,
        cursor: `pointer`,
        border: `none`,
        placeContent: `center`,
        placeItems: `center`,
        padding: 0,
      });
  }),
  nr,
  rr,
  ir,
  ar = e(() => {
    me(),
      fe.loadFonts([]),
      (nr = [{ explicitInter: !0, fonts: [] }]),
      (rr = [
        `.framer-nyGLo .framer-styles-preset-15suhnn:not(.rich-text-wrapper), .framer-nyGLo .framer-styles-preset-15suhnn.rich-text-wrapper a { --framer-link-current-text-color: var(--token-fe8040e6-3344-44c0-bab9-226d490ba5f3, #ffffff); --framer-link-current-text-decoration: none; --framer-link-hover-text-color: var(--token-fe8040e6-3344-44c0-bab9-226d490ba5f3, #ffffff); --framer-link-hover-text-decoration: none; --framer-link-text-color: var(--token-ecafc256-809a-4d45-a91d-a2dbb56ff89e, #ddff00); --framer-link-text-decoration: none; transition: color 0.4s cubic-bezier(0, 0, 1, 1) 0s; }`,
      ]),
      (ir = `framer-nyGLo`);
  }),
  or,
  sr,
  cr,
  lr,
  ur,
  dr,
  J,
  fr,
  Y,
  pr,
  mr,
  hr,
  gr,
  _r,
  vr,
  yr,
  br,
  xr,
  Sr,
  Cr,
  wr,
  Tr,
  Er,
  Dr,
  Or,
  kr,
  Ar,
  jr,
  Mr,
  Nr,
  Pr,
  Fr,
  Ir,
  Lr,
  Rr,
  X,
  zr,
  Br,
  Vr,
  Hr,
  Ur,
  Wr,
  Gr,
  Kr,
  qr,
  Jr,
  Yr,
  Xr,
  Zr,
  Qr,
  $r,
  ei,
  ti,
  ni,
  ri,
  Z,
  Q,
  $,
  ii,
  ai,
  oi,
  si,
  ci,
  li,
  ui,
  di = e(() => {
    o(),
      me(),
      C(),
      s(),
      tr(),
      L(),
      rt(),
      V(),
      R(),
      Ue(),
      He(),
      it(),
      _t(),
      $e(),
      et(),
      yt(),
      H(),
      bt(),
      tt(),
      ar(),
      z(),
      vt(),
      B(),
      U(),
      xt(),
      (or = j(De)),
      (sr = j(Ee)),
      (cr = Te(Ee)),
      (lr = F(O)),
      (ur = j(ke)),
      (dr = we(O)),
      (J = F(ce)),
      (fr = j(nt)),
      (Y = we(ce)),
      (pr = j(q)),
      (mr = j(Oe)),
      (hr = j(Ae)),
      (gr = {
        Ft4AQn44t: `(min-width: 810px) and (max-width: 1199px)`,
        JdtoZE5LW: `(max-width: 809px)`,
        pB4WfhyKt: `(min-width: 1200px)`,
      }),
      (_r = () => typeof document < `u`),
      (vr = `framer-Cew1W`),
      (yr = {
        Ft4AQn44t: `framer-v-19onxsj`,
        JdtoZE5LW: `framer-v-e4xg81`,
        pB4WfhyKt: `framer-v-1baumkm`,
      }),
      (br = { damping: 40, delay: 0, mass: 1, stiffness: 250, type: `spring` }),
      (xr = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: br,
        x: 0,
        y: 0,
      }),
      (Sr = {
        opacity: 0.001,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: -12,
      }),
      (Cr = {
        damping: 40,
        delay: 0.1,
        mass: 1,
        stiffness: 250,
        type: `spring`,
      }),
      (wr = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: Cr,
        x: 0,
        y: 0,
      }),
      (Tr = {
        damping: 40,
        delay: 0.2,
        mass: 1,
        stiffness: 250,
        type: `spring`,
      }),
      (Er = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: Tr,
        x: 0,
        y: 0,
      }),
      (Dr = {
        damping: 40,
        delay: 0.3,
        mass: 1,
        stiffness: 250,
        type: `spring`,
      }),
      (Or = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: Dr,
        x: 0,
        y: 0,
      }),
      (kr = {
        damping: 40,
        delay: 0.4,
        mass: 1,
        stiffness: 250,
        type: `spring`,
      }),
      (Ar = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: kr,
        x: 0,
        y: 0,
      }),
      (jr = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: -8,
      }),
      (Mr = { damping: 30, delay: 0, mass: 1, stiffness: 400, type: `spring` }),
      (Nr = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 0.98,
        skewX: 0,
        skewY: 0,
        transition: Mr,
      }),
      (Pr = {
        opacity: 0.001,
        rotate: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: -16,
      }),
      (Fr = {
        damping: 60,
        delay: 0.1,
        mass: 1,
        stiffness: 150,
        type: `spring`,
      }),
      (Ir = {
        effect: Pr,
        repeat: !1,
        startDelay: 0,
        tokenization: `word`,
        transition: Fr,
        trigger: `onMount`,
        type: `appear`,
      }),
      (Lr = {
        damping: 40,
        delay: 0.2,
        mass: 1,
        stiffness: 150,
        type: `spring`,
      }),
      (Rr = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transformPerspective: 1200,
        transition: Lr,
        x: 0,
        y: 0,
      }),
      (X = {
        opacity: 0.001,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transformPerspective: 1200,
        x: 0,
        y: -40,
      }),
      (zr = {
        damping: 40,
        delay: 0.3,
        mass: 1,
        stiffness: 150,
        type: `spring`,
      }),
      (Br = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transformPerspective: 1200,
        transition: zr,
        x: 0,
        y: 0,
      }),
      (Vr = {
        damping: 40,
        delay: 0.4,
        mass: 1,
        stiffness: 150,
        type: `spring`,
      }),
      (Hr = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transformPerspective: 1200,
        transition: Vr,
        x: 0,
        y: 0,
      }),
      (Ur = {
        damping: 40,
        delay: 0.5,
        mass: 1,
        stiffness: 150,
        type: `spring`,
      }),
      (Wr = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transformPerspective: 1200,
        transition: Ur,
        x: 0,
        y: 0,
      }),
      (Gr = {
        damping: 40,
        delay: 0.6,
        mass: 1,
        stiffness: 150,
        type: `spring`,
      }),
      (Kr = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transformPerspective: 1200,
        transition: Gr,
        x: 0,
        y: 0,
      }),
      (qr = {
        damping: 40,
        delay: 0.7,
        mass: 1,
        stiffness: 150,
        type: `spring`,
      }),
      (Jr = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transformPerspective: 1200,
        transition: qr,
        x: 0,
        y: 0,
      }),
      (Yr = {
        damping: 40,
        delay: 0.8,
        mass: 1,
        stiffness: 150,
        type: `spring`,
      }),
      (Xr = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transformPerspective: 1200,
        transition: Yr,
        x: 0,
        y: 0,
      }),
      (Zr = {
        damping: 40,
        delay: 0.9,
        mass: 1,
        stiffness: 150,
        type: `spring`,
      }),
      (Qr = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transformPerspective: 1200,
        transition: Zr,
        x: 0,
        y: 0,
      }),
      ($r = (e, t = {}, n) => {
        let r = `en-US`,
          i = t.locale || n || r,
          {
            useGrouping: a,
            notation: o,
            compactDisplay: s,
            style: c,
            currency: l,
            currencyDisplay: u,
            unit: d,
            unitDisplay: f,
            minimumFractionDigits: p,
            maximumFractionDigits: m,
            minimumIntegerDigits: h,
          } = t,
          g = {
            useGrouping: a,
            notation: o,
            compactDisplay: s,
            style: c,
            currency: l,
            currencyDisplay: u,
            unit: d,
            unitDisplay: f,
            minimumFractionDigits: p,
            maximumFractionDigits: m,
            minimumIntegerDigits: h,
          },
          _ = Number(e);
        try {
          return _.toLocaleString(i, g);
        } catch {
          try {
            return _.toLocaleString(r, g);
          } catch {
            return _.toLocaleString();
          }
        }
      }),
      (ei = {
        damping: 80,
        delay: 0.8,
        mass: 1,
        stiffness: 250,
        type: `spring`,
      }),
      (ti = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: ei,
        x: 0,
        y: 0,
      }),
      (ni = {
        opacity: 0.001,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 80,
      }),
      (ri = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
          ? { src: e }
          : void 0),
      (Z = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 16,
      }),
      (Q = { bounce: 0.1, delay: 0, duration: 0.8, type: `spring` }),
      ($ = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: Q,
        x: 0,
        y: 16,
      }),
      (ii = ({ value: e }) => {
        let t = ye();
        return t
          ? null
          : u(`style`, {
              dangerouslySetInnerHTML: { __html: e },
              "data-framer-html-style": ``,
            });
      }),
      (ai = { Desktop: `pB4WfhyKt`, Phone: `JdtoZE5LW`, Tablet: `Ft4AQn44t` }),
      (oi = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: ai[r.variant] ?? r.variant ?? `pB4WfhyKt`,
      })),
      (si = t(function (e, t) {
        let n = d(null),
          i = t ?? n,
          o = r(),
          { activeLocale: s, setLocale: c } = be(),
          l = he(),
          f = ge(),
          [p] = xe({
            from: { alias: `o7Lhg86HO`, data: at, type: `Collection` },
            select: [
              {
                collection: `o7Lhg86HO`,
                name: `WwkjvGLl1`,
                type: `Identifier`,
              },
              {
                collection: `o7Lhg86HO`,
                name: `eaLPJhT5r`,
                type: `Identifier`,
              },
              {
                collection: `o7Lhg86HO`,
                name: `hmiwRshIE`,
                type: `Identifier`,
              },
              {
                collection: `o7Lhg86HO`,
                name: `luo1px2aF`,
                type: `Identifier`,
              },
              {
                collection: `o7Lhg86HO`,
                name: `A8sm32gWH`,
                type: `Identifier`,
              },
              {
                collection: `o7Lhg86HO`,
                name: `Qu2rKmYGL`,
                type: `Identifier`,
              },
              {
                collection: `o7Lhg86HO`,
                name: `kgG0k_IKk`,
                type: `Identifier`,
              },
              {
                collection: `o7Lhg86HO`,
                name: `cVobtGrRA`,
                type: `Identifier`,
              },
              {
                collection: `o7Lhg86HO`,
                name: `STfcJD53R`,
                type: `Identifier`,
              },
              {
                collection: `o7Lhg86HO`,
                name: `QuvZ4HDQA`,
                type: `Identifier`,
              },
              {
                collection: `o7Lhg86HO`,
                name: `fSgeTqVb1`,
                type: `Identifier`,
              },
              {
                collection: `o7Lhg86HO`,
                name: `BMTficmln`,
                type: `Identifier`,
              },
              {
                collection: `o7Lhg86HO`,
                name: `za1BGUKEX`,
                type: `Identifier`,
              },
              {
                collection: `o7Lhg86HO`,
                name: `GB58lb58W`,
                type: `Identifier`,
              },
              {
                collection: `o7Lhg86HO`,
                name: `kE9euIhGF`,
                type: `Identifier`,
              },
              {
                collection: `o7Lhg86HO`,
                name: `X1TGaZ7Fp`,
                type: `Identifier`,
              },
              {
                collection: `o7Lhg86HO`,
                name: `ZrgHlNStT`,
                type: `Identifier`,
              },
              {
                collection: `o7Lhg86HO`,
                name: `vCgKJH5c7`,
                type: `Identifier`,
              },
              {
                collection: `o7Lhg86HO`,
                name: `dmWpifHXf`,
                type: `Identifier`,
              },
              {
                collection: `o7Lhg86HO`,
                name: `zPTh_wHSr`,
                type: `Identifier`,
              },
            ],
            where: pe(f, `o7Lhg86HO`),
          }),
          m = (e) => {
            if (!p)
              throw new ie(
                `No data matches path variables: ${JSON.stringify(f)}`
              );
            return p[e];
          },
          {
            style: _,
            className: y,
            layoutId: x,
            variant: S,
            cVobtGrRA: C = m(`cVobtGrRA`) ?? ``,
            STfcJD53R: ee = m(`STfcJD53R`) ?? ``,
            eaLPJhT5r: te = m(`eaLPJhT5r`) ?? ``,
            WwkjvGLl1: T = m(`WwkjvGLl1`) ?? ``,
            hmiwRshIE: E = m(`hmiwRshIE`) ?? ``,
            luo1px2aF: ne = m(`luo1px2aF`) ?? ``,
            A8sm32gWH: k = m(`A8sm32gWH`) ?? ``,
            kgG0k_IKk: oe = m(`kgG0k_IKk`) ?? 0,
            Qu2rKmYGL: le = m(`Qu2rKmYGL`),
            QuvZ4HDQA: ue = m(`QuvZ4HDQA`) ?? ``,
            fSgeTqVb1: fe = m(`fSgeTqVb1`) ?? ``,
            BMTficmln: j = m(`BMTficmln`) ?? ``,
            za1BGUKEX: M = m(`za1BGUKEX`) ?? ``,
            GB58lb58W: me = m(`GB58lb58W`) ?? ``,
            kE9euIhGF: ye = m(`kE9euIhGF`) ?? ``,
            X1TGaZ7Fp: P = m(`X1TGaZ7Fp`),
            ZrgHlNStT: we = m(`ZrgHlNStT`),
            vCgKJH5c7: F = m(`vCgKJH5c7`),
            dmWpifHXf: Te = m(`dmWpifHXf`) ?? ``,
            zPTh_wHSr: Ee = m(`zPTh_wHSr`) ?? ``,
            ...Fe
          } = oi(e);
        g(() => {
          let e = G(p, s);
          if (e.robots) {
            let t = document.querySelector(`meta[name="robots"]`);
            t
              ? t.setAttribute(`content`, e.robots)
              : ((t = document.createElement(`meta`)),
                t.setAttribute(`name`, `robots`),
                t.setAttribute(`content`, e.robots),
                document.head.appendChild(t));
          }
        }, [p, s]),
          a(() => {
            let e = G(p, s);
            (document.title = e.title || ``),
              e.viewport &&
                document
                  .querySelector(`meta[name="viewport"]`)
                  ?.setAttribute(`content`, e.viewport);
          }, [p, s]);
        let [I, Ie] = ve(S, gr, !1),
          Le = [Pe, ir, We, Ge, je, Ke, ot, st, Ne, Me, W, ct],
          Re = de(vr, ...Le),
          ze = () => (_r() ? ![`Ft4AQn44t`, `JdtoZE5LW`].includes(I) : !0);
        Ce();
        let Be = d(null),
          Ve = d(null),
          L = d(null),
          R = d(null),
          z = Se(`oF97DuYQu`),
          B = d(null),
          He = N(),
          V = $r(
            oe,
            {
              locale: ``,
              notation: `standard`,
              style: `decimal`,
              useGrouping: !1,
            },
            He
          ),
          H = Se(`jWgwColRM`),
          Ue = Se(`rVmCTjUAS`),
          U = Se(`NrqLetHNV`),
          qe = Se(`kZytKiRCE`),
          Je = () => !!(!_r() || [`Ft4AQn44t`, `JdtoZE5LW`].includes(I));
        return (
          _e({}),
          u(A.Provider, {
            value: { primaryVariantId: `pB4WfhyKt`, variantClassNames: yr },
            children: h(b, {
              id: x ?? o,
              children: [
                u(ii, {
                  value: `html body { background: var(--token-b475daa1-123e-4ac4-9203-afa2fe736f56, rgb(11, 11, 11)); }`,
                }),
                h(w.div, {
                  ...Fe,
                  className: de(Re, `framer-1baumkm`, y),
                  ref: i,
                  style: { ..._ },
                  children: [
                    ze() &&
                      h(`nav`, {
                        className: `framer-1cozidx hidden-19onxsj hidden-e4xg81`,
                        "data-framer-name": `Navigation Bar`,
                        children: [
                          u(D, {
                            height: 21,
                            y: 22,
                            children: u(O, {
                              className: `framer-1yo0yn0-container`,
                              nodeId: `LUdwaFx1A`,
                              scopeId: `o7Lhg86HO`,
                              children: u(De, {
                                height: `100%`,
                                id: `LUdwaFx1A`,
                                layoutId: `LUdwaFx1A`,
                                width: `100%`,
                              }),
                            }),
                          }),
                          h(`div`, {
                            className: `framer-eayy3`,
                            "data-framer-name": `NavigationBar`,
                            children: [
                              u(se, {
                                links: [
                                  {
                                    href: {
                                      hash: `:oF97DuYQu`,
                                      pathVariables: { cVobtGrRA: C },
                                      webPageId: `o7Lhg86HO`,
                                    },
                                    implicitPathVariables: void 0,
                                  },
                                ],
                                children: (e) =>
                                  u(D, {
                                    height: 21,
                                    y: 270,
                                    children: u(lr, {
                                      animate: xr,
                                      className: `framer-1ij8o6d-container`,
                                      "data-framer-appear-id": `1ij8o6d`,
                                      initial: Sr,
                                      nodeId: `Yvzg0rY4y`,
                                      optimized: !0,
                                      rendersWithMotion: !0,
                                      scopeId: `o7Lhg86HO`,
                                      children: u(cr, {
                                        __framer__animateOnce: !1,
                                        __framer__targets: [
                                          { ref: Be, target: `MKQWM9WYD` },
                                        ],
                                        __framer__threshold: 0.5,
                                        __framer__variantAppearEffectEnabled:
                                          !0,
                                        aqR4frobj: `Overview`,
                                        dWfIQ61kM: e[0],
                                        height: `100%`,
                                        id: `Yvzg0rY4y`,
                                        layoutId: `Yvzg0rY4y`,
                                        variant: `jKJMxypkM`,
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                              }),
                              u(se, {
                                links: [
                                  {
                                    href: {
                                      hash: `:jWgwColRM`,
                                      pathVariables: { cVobtGrRA: C },
                                      webPageId: `o7Lhg86HO`,
                                    },
                                    implicitPathVariables: void 0,
                                  },
                                ],
                                children: (e) =>
                                  u(D, {
                                    height: 21,
                                    y: 303,
                                    children: u(lr, {
                                      animate: wr,
                                      className: `framer-g41xv1-container`,
                                      "data-framer-appear-id": `g41xv1`,
                                      initial: Sr,
                                      nodeId: `GO1R0bj8x`,
                                      optimized: !0,
                                      rendersWithMotion: !0,
                                      scopeId: `o7Lhg86HO`,
                                      children: u(cr, {
                                        __framer__animateOnce: !1,
                                        __framer__targets: [
                                          { ref: Be, target: `jKJMxypkM` },
                                          { ref: Ve, target: `MKQWM9WYD` },
                                        ],
                                        __framer__threshold: 0.5,
                                        __framer__variantAppearEffectEnabled:
                                          !0,
                                        aqR4frobj: `Description`,
                                        dWfIQ61kM: e[0],
                                        height: `100%`,
                                        id: `GO1R0bj8x`,
                                        layoutId: `GO1R0bj8x`,
                                        variant: `MKQWM9WYD`,
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                              }),
                              u(se, {
                                links: [
                                  {
                                    href: {
                                      hash: `:rVmCTjUAS`,
                                      pathVariables: { cVobtGrRA: C },
                                      webPageId: `o7Lhg86HO`,
                                    },
                                    implicitPathVariables: void 0,
                                  },
                                ],
                                children: (e) =>
                                  u(D, {
                                    height: 21,
                                    y: 336,
                                    children: u(lr, {
                                      animate: Er,
                                      className: `framer-o1a6t9-container`,
                                      "data-framer-appear-id": `o1a6t9`,
                                      initial: Sr,
                                      nodeId: `M1pnsmjnN`,
                                      optimized: !0,
                                      rendersWithMotion: !0,
                                      scopeId: `o7Lhg86HO`,
                                      children: u(cr, {
                                        __framer__animateOnce: !1,
                                        __framer__targets: [
                                          { ref: Ve, target: `jKJMxypkM` },
                                          { ref: L, target: `MKQWM9WYD` },
                                        ],
                                        __framer__threshold: 0.5,
                                        __framer__variantAppearEffectEnabled:
                                          !0,
                                        aqR4frobj: `Process`,
                                        dWfIQ61kM: e[0],
                                        height: `100%`,
                                        id: `M1pnsmjnN`,
                                        layoutId: `M1pnsmjnN`,
                                        variant: `MKQWM9WYD`,
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                              }),
                              u(se, {
                                links: [
                                  {
                                    href: {
                                      hash: `:NrqLetHNV`,
                                      pathVariables: { cVobtGrRA: C },
                                      webPageId: `o7Lhg86HO`,
                                    },
                                    implicitPathVariables: void 0,
                                  },
                                ],
                                children: (e) =>
                                  u(D, {
                                    height: 21,
                                    y: 369,
                                    children: u(lr, {
                                      animate: Or,
                                      className: `framer-14og0lp-container`,
                                      "data-framer-appear-id": `14og0lp`,
                                      initial: Sr,
                                      nodeId: `HqaPh405J`,
                                      optimized: !0,
                                      rendersWithMotion: !0,
                                      scopeId: `o7Lhg86HO`,
                                      children: u(cr, {
                                        __framer__animateOnce: !1,
                                        __framer__targets: [
                                          { ref: L, target: `jKJMxypkM` },
                                          { ref: R, target: `MKQWM9WYD` },
                                        ],
                                        __framer__threshold: 0.5,
                                        __framer__variantAppearEffectEnabled:
                                          !0,
                                        aqR4frobj: `Solution`,
                                        dWfIQ61kM: e[0],
                                        height: `100%`,
                                        id: `HqaPh405J`,
                                        layoutId: `HqaPh405J`,
                                        variant: `MKQWM9WYD`,
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                              }),
                              u(se, {
                                links: [
                                  {
                                    href: {
                                      hash: `:kZytKiRCE`,
                                      pathVariables: { cVobtGrRA: C },
                                      webPageId: `o7Lhg86HO`,
                                    },
                                    implicitPathVariables: void 0,
                                  },
                                ],
                                children: (e) =>
                                  u(D, {
                                    height: 21,
                                    y: 402,
                                    children: u(lr, {
                                      animate: Ar,
                                      className: `framer-18uhc4r-container`,
                                      "data-framer-appear-id": `18uhc4r`,
                                      initial: Sr,
                                      nodeId: `R9p4u02tt`,
                                      optimized: !0,
                                      rendersWithMotion: !0,
                                      scopeId: `o7Lhg86HO`,
                                      children: u(cr, {
                                        __framer__animateOnce: !1,
                                        __framer__targets: [
                                          { ref: R, target: `jKJMxypkM` },
                                        ],
                                        __framer__threshold: 0.5,
                                        __framer__variantAppearEffectEnabled:
                                          !0,
                                        aqR4frobj: `Results`,
                                        dWfIQ61kM: e[0],
                                        height: `100%`,
                                        id: `R9p4u02tt`,
                                        layoutId: `R9p4u02tt`,
                                        variant: `MKQWM9WYD`,
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                              }),
                            ],
                          }),
                          u(se, {
                            links: [
                              {
                                href: { webPageId: `skCBjGGGU` },
                                implicitPathVariables: void 0,
                              },
                            ],
                            children: (e) =>
                              u(D, {
                                height: 55,
                                y: 903,
                                children: u(dr, {
                                  __framer__animate: { transition: br },
                                  __framer__animateOnce: !1,
                                  __framer__enter: jr,
                                  __framer__styleAppearEffectEnabled: !0,
                                  __framer__threshold: 0.5,
                                  __perspectiveFX: !1,
                                  __targetOpacity: 1,
                                  className: `framer-itste2-container`,
                                  nodeId: `hYsVvQ0pb`,
                                  rendersWithMotion: !0,
                                  scopeId: `o7Lhg86HO`,
                                  whileHover: Nr,
                                  children: u(ke, {
                                    B0eTuUnrS: e[0],
                                    FOxcLjTdx: `Get in touch`,
                                    height: `100%`,
                                    id: `hYsVvQ0pb`,
                                    layoutId: `hYsVvQ0pb`,
                                    style: { height: `100%` },
                                    variant: `CnFfN8KTT`,
                                    width: `100%`,
                                  }),
                                }),
                              }),
                          }),
                        ],
                      }),
                    u(`section`, {
                      className: `framer-nd6lt5`,
                      "data-framer-name": `HeroSection`,
                      id: z,
                      ref: B,
                      children: h(`div`, {
                        className: `framer-11grz6w`,
                        "data-framer-name": `Sections`,
                        children: [
                          h(`div`, {
                            className: `framer-1c63w59`,
                            "data-framer-name": `TopSection`,
                            children: [
                              u(ce, {
                                __fromCanvasComponent: !0,
                                children: u(v, {
                                  children: u(`h5`, {
                                    className: `framer-styles-preset-1qig5z1`,
                                    "data-styles-preset": `y5ezp3Fqp`,
                                    style: {
                                      "--framer-text-color": `var(--token-ecafc256-809a-4d45-a91d-a2dbb56ff89e, rgb(221, 255, 0))`,
                                    },
                                    children: u(re, {
                                      href: ee,
                                      motionChild: !0,
                                      nodeId: `ZeqHvEi7m`,
                                      openInNewTab: !0,
                                      scopeId: `o7Lhg86HO`,
                                      smoothScroll: !1,
                                      children: u(w.a, {
                                        className: `framer-styles-preset-15suhnn`,
                                        "data-styles-preset": `OrZDoXdtf`,
                                        children: `Building Trust Through Simplicity - VISIT LIVE SITE `,
                                      }),
                                    }),
                                  }),
                                }),
                                className: `framer-18lp6m`,
                                "data-framer-name": `Tag`,
                                effect: Ir,
                                fonts: [`Inter`],
                                text: te,
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              u(ce, {
                                __fromCanvasComponent: !0,
                                children: u(v, {
                                  children: u(`h1`, {
                                    className: `framer-styles-preset-1jo3glk`,
                                    "data-styles-preset": `enXnUuyN7`,
                                    children: `Web redesign for a service provider`,
                                  }),
                                }),
                                className: `framer-w2x8ub`,
                                "data-framer-name": `Header`,
                                effect: Ir,
                                fonts: [`Inter`],
                                text: T,
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                          h(`div`, {
                            className: `framer-1rkb5n2`,
                            "data-framer-name": `Information`,
                            children: [
                              h(`div`, {
                                className: `framer-wgihwe`,
                                "data-framer-name": `Information`,
                                children: [
                                  u(J, {
                                    __fromCanvasComponent: !0,
                                    animate: Rr,
                                    children: u(v, {
                                      children: u(`h5`, {
                                        className: `framer-styles-preset-1qig5z1`,
                                        "data-styles-preset": `y5ezp3Fqp`,
                                        children: `COMPANY`,
                                      }),
                                    }),
                                    className: `framer-15ymso8`,
                                    "data-framer-appear-id": `15ymso8`,
                                    "data-framer-name": `Name`,
                                    fonts: [`Inter`],
                                    initial: X,
                                    optimized: !0,
                                    style: { transformPerspective: 1200 },
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  u(`div`, {
                                    className: `framer-1hei688`,
                                    children: u(J, {
                                      __fromCanvasComponent: !0,
                                      animate: Br,
                                      children: u(v, {
                                        children: u(`p`, {
                                          className: `framer-styles-preset-erxpvx`,
                                          "data-styles-preset": `nzdW7Y_Eq`,
                                          children: `Al Hadi AE`,
                                        }),
                                      }),
                                      className: `framer-3q9xje`,
                                      "data-framer-appear-id": `3q9xje`,
                                      "data-framer-name": `Name`,
                                      fonts: [`Inter`],
                                      initial: X,
                                      optimized: !0,
                                      style: { transformPerspective: 1200 },
                                      text: E,
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                ],
                              }),
                              h(`div`, {
                                className: `framer-n40klr`,
                                "data-framer-name": `Information`,
                                children: [
                                  u(J, {
                                    __fromCanvasComponent: !0,
                                    animate: Hr,
                                    children: u(v, {
                                      children: u(`h5`, {
                                        className: `framer-styles-preset-1qig5z1`,
                                        "data-styles-preset": `y5ezp3Fqp`,
                                        children: `ROLE`,
                                      }),
                                    }),
                                    className: `framer-jbwan6`,
                                    "data-framer-appear-id": `jbwan6`,
                                    "data-framer-name": `Name`,
                                    fonts: [`Inter`],
                                    initial: X,
                                    optimized: !0,
                                    style: { transformPerspective: 1200 },
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  u(J, {
                                    __fromCanvasComponent: !0,
                                    animate: Wr,
                                    children: u(v, {
                                      children: u(`p`, {
                                        className: `framer-styles-preset-erxpvx`,
                                        "data-styles-preset": `nzdW7Y_Eq`,
                                        children: `UX/UI Designer `,
                                      }),
                                    }),
                                    className: `framer-auoxs7`,
                                    "data-framer-appear-id": `auoxs7`,
                                    "data-framer-name": `Name`,
                                    fonts: [`Inter`],
                                    initial: X,
                                    optimized: !0,
                                    style: { transformPerspective: 1200 },
                                    text: ne,
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                              h(`div`, {
                                className: `framer-1d0sjms`,
                                "data-framer-name": `Information`,
                                children: [
                                  u(J, {
                                    __fromCanvasComponent: !0,
                                    animate: Kr,
                                    children: u(v, {
                                      children: u(`h5`, {
                                        className: `framer-styles-preset-1qig5z1`,
                                        "data-styles-preset": `y5ezp3Fqp`,
                                        children: `EXPERTISE`,
                                      }),
                                    }),
                                    className: `framer-ali384`,
                                    "data-framer-appear-id": `ali384`,
                                    "data-framer-name": `Name`,
                                    fonts: [`Inter`],
                                    initial: X,
                                    optimized: !0,
                                    style: { transformPerspective: 1200 },
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  u(J, {
                                    __fromCanvasComponent: !0,
                                    animate: Jr,
                                    children: u(v, {
                                      children: u(`p`, {
                                        className: `framer-styles-preset-erxpvx`,
                                        "data-styles-preset": `nzdW7Y_Eq`,
                                        children: `UX/UI Design`,
                                      }),
                                    }),
                                    className: `framer-58jcnc`,
                                    "data-framer-appear-id": `58jcnc`,
                                    "data-framer-name": `Name`,
                                    fonts: [`Inter`],
                                    initial: X,
                                    optimized: !0,
                                    style: { transformPerspective: 1200 },
                                    text: k,
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                              h(`div`, {
                                className: `framer-1gpg9l3`,
                                "data-framer-name": `Information`,
                                children: [
                                  u(J, {
                                    __fromCanvasComponent: !0,
                                    animate: Xr,
                                    children: u(v, {
                                      children: u(`h5`, {
                                        className: `framer-styles-preset-1qig5z1`,
                                        "data-styles-preset": `y5ezp3Fqp`,
                                        children: `YEAR`,
                                      }),
                                    }),
                                    className: `framer-1v6ewyj`,
                                    "data-framer-appear-id": `1v6ewyj`,
                                    "data-framer-name": `Name`,
                                    fonts: [`Inter`],
                                    initial: X,
                                    optimized: !0,
                                    style: { transformPerspective: 1200 },
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  u(J, {
                                    __fromCanvasComponent: !0,
                                    animate: Qr,
                                    children: u(v, {
                                      children: u(`p`, {
                                        className: `framer-styles-preset-erxpvx`,
                                        "data-styles-preset": `nzdW7Y_Eq`,
                                        children: `2024`,
                                      }),
                                    }),
                                    className: `framer-1rpvgga`,
                                    "data-framer-appear-id": `1rpvgga`,
                                    "data-framer-name": `Name`,
                                    fonts: [`Inter`],
                                    initial: X,
                                    optimized: !0,
                                    style: { transformPerspective: 1200 },
                                    text: V,
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    u(ae, {
                      breakpoint: I,
                      overrides: {
                        Ft4AQn44t: {
                          width: `calc(${l?.width || `100vw`} - 80px)`,
                          y: (l?.y || 0) + 0 + 541.8,
                        },
                        JdtoZE5LW: {
                          width: `calc(${l?.width || `100vw`} - 32px)`,
                          y: (l?.y || 0) + 0 + 958.2,
                        },
                      },
                      children: u(D, {
                        height: 800,
                        width: `calc(${l?.width || `100vw`} - 360px)`,
                        y: (l?.y || 0) + 0 + 712,
                        children: u(lr, {
                          animate: ti,
                          className: `framer-156db2r-container`,
                          "data-framer-appear-id": `156db2r`,
                          initial: ni,
                          nodeId: `oryCzyXUJ`,
                          optimized: !0,
                          rendersWithMotion: !0,
                          scopeId: `o7Lhg86HO`,
                          children: u(nt, {
                            gqLaMlXqi: ri(le),
                            height: `100%`,
                            id: `oryCzyXUJ`,
                            layoutId: `oryCzyXUJ`,
                            style: { height: `100%`, width: `100%` },
                            width: `100%`,
                          }),
                        }),
                      }),
                    }),
                    h(`section`, {
                      className: `framer-6dmuni`,
                      "data-framer-name": `Description`,
                      id: H,
                      ref: Be,
                      children: [
                        u(Y, {
                          __framer__animate: { transition: Q },
                          __framer__animateOnce: !0,
                          __framer__enter: Z,
                          __framer__exit: $,
                          __framer__styleAppearEffectEnabled: !0,
                          __framer__threshold: 0.5,
                          __fromCanvasComponent: !0,
                          __perspectiveFX: !1,
                          __targetOpacity: 1,
                          children: ue,
                          className: `framer-1e5j6zr`,
                          fonts: [`Inter`],
                          stylesPresetsClassNames: {
                            a: `framer-styles-preset-x319l3`,
                            blockquote: `framer-styles-preset-bv4lqz`,
                            h1: `framer-styles-preset-1jo3glk`,
                            h2: `framer-styles-preset-ugul1a`,
                            h3: `framer-styles-preset-1tsd54f`,
                            h4: `framer-styles-preset-16vtum8`,
                            h5: `framer-styles-preset-1qig5z1`,
                            h6: `framer-styles-preset-bz94od`,
                            img: `framer-styles-preset-yiy7at`,
                            p: `framer-styles-preset-1hj8z0a`,
                          },
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                        }),
                        u(Y, {
                          __framer__animate: { transition: Q },
                          __framer__animateOnce: !0,
                          __framer__enter: Z,
                          __framer__exit: $,
                          __framer__styleAppearEffectEnabled: !0,
                          __framer__threshold: 0.5,
                          __fromCanvasComponent: !0,
                          __perspectiveFX: !1,
                          __targetOpacity: 1,
                          children: fe,
                          className: `framer-xscqz9`,
                          fonts: [`Inter`],
                          stylesPresetsClassNames: {
                            a: `framer-styles-preset-x319l3`,
                            blockquote: `framer-styles-preset-bv4lqz`,
                            h1: `framer-styles-preset-1jo3glk`,
                            h2: `framer-styles-preset-ugul1a`,
                            h3: `framer-styles-preset-1tsd54f`,
                            h4: `framer-styles-preset-16vtum8`,
                            h5: `framer-styles-preset-1qig5z1`,
                            h6: `framer-styles-preset-bz94od`,
                            img: `framer-styles-preset-yiy7at`,
                            p: `framer-styles-preset-1hj8z0a`,
                          },
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                        }),
                      ],
                    }),
                    h(`section`, {
                      className: `framer-kmxhsq`,
                      "data-framer-name": `Process`,
                      id: Ue,
                      ref: Ve,
                      children: [
                        u(Y, {
                          __framer__animate: { transition: Q },
                          __framer__animateOnce: !0,
                          __framer__enter: Z,
                          __framer__exit: $,
                          __framer__styleAppearEffectEnabled: !0,
                          __framer__threshold: 0.5,
                          __fromCanvasComponent: !0,
                          __perspectiveFX: !1,
                          __targetOpacity: 1,
                          children: j,
                          className: `framer-v77wox`,
                          fonts: [`Inter`],
                          stylesPresetsClassNames: {
                            a: `framer-styles-preset-x319l3`,
                            blockquote: `framer-styles-preset-bv4lqz`,
                            h1: `framer-styles-preset-1jo3glk`,
                            h2: `framer-styles-preset-ugul1a`,
                            h3: `framer-styles-preset-1tsd54f`,
                            h4: `framer-styles-preset-16vtum8`,
                            h5: `framer-styles-preset-1qig5z1`,
                            h6: `framer-styles-preset-bz94od`,
                            img: `framer-styles-preset-yiy7at`,
                            p: `framer-styles-preset-1hj8z0a`,
                          },
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                        }),
                        u(Y, {
                          __framer__animate: { transition: Q },
                          __framer__animateOnce: !0,
                          __framer__enter: Z,
                          __framer__exit: $,
                          __framer__styleAppearEffectEnabled: !0,
                          __framer__threshold: 0.5,
                          __fromCanvasComponent: !0,
                          __perspectiveFX: !1,
                          __targetOpacity: 1,
                          children: M,
                          className: `framer-1iywluk`,
                          fonts: [`Inter`],
                          stylesPresetsClassNames: {
                            a: `framer-styles-preset-x319l3`,
                            blockquote: `framer-styles-preset-bv4lqz`,
                            h1: `framer-styles-preset-1jo3glk`,
                            h2: `framer-styles-preset-ugul1a`,
                            h3: `framer-styles-preset-1tsd54f`,
                            h4: `framer-styles-preset-16vtum8`,
                            h5: `framer-styles-preset-1qig5z1`,
                            h6: `framer-styles-preset-bz94od`,
                            img: `framer-styles-preset-yiy7at`,
                            p: `framer-styles-preset-1hj8z0a`,
                          },
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                        }),
                      ],
                    }),
                    h(`section`, {
                      className: `framer-16we74v`,
                      "data-framer-name": `Solution`,
                      id: U,
                      ref: L,
                      children: [
                        u(Y, {
                          __framer__animate: { transition: Q },
                          __framer__animateOnce: !0,
                          __framer__enter: Z,
                          __framer__exit: $,
                          __framer__styleAppearEffectEnabled: !0,
                          __framer__threshold: 0.5,
                          __fromCanvasComponent: !0,
                          __perspectiveFX: !1,
                          __targetOpacity: 1,
                          children: me,
                          className: `framer-1pcc518`,
                          fonts: [`Inter`],
                          stylesPresetsClassNames: {
                            a: `framer-styles-preset-x319l3`,
                            blockquote: `framer-styles-preset-bv4lqz`,
                            h1: `framer-styles-preset-1jo3glk`,
                            h2: `framer-styles-preset-ugul1a`,
                            h3: `framer-styles-preset-1tsd54f`,
                            h4: `framer-styles-preset-16vtum8`,
                            h5: `framer-styles-preset-1qig5z1`,
                            h6: `framer-styles-preset-bz94od`,
                            img: `framer-styles-preset-yiy7at`,
                            p: `framer-styles-preset-1hj8z0a`,
                          },
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                        }),
                        u(Y, {
                          __framer__animate: { transition: Q },
                          __framer__animateOnce: !0,
                          __framer__enter: Z,
                          __framer__exit: $,
                          __framer__styleAppearEffectEnabled: !0,
                          __framer__threshold: 0.5,
                          __fromCanvasComponent: !0,
                          __perspectiveFX: !1,
                          __targetOpacity: 1,
                          children: ye,
                          className: `framer-12gc5ep`,
                          fonts: [`Inter`],
                          stylesPresetsClassNames: {
                            a: `framer-styles-preset-x319l3`,
                            blockquote: `framer-styles-preset-bv4lqz`,
                            h1: `framer-styles-preset-1jo3glk`,
                            h2: `framer-styles-preset-ugul1a`,
                            h3: `framer-styles-preset-1tsd54f`,
                            h4: `framer-styles-preset-16vtum8`,
                            h5: `framer-styles-preset-1qig5z1`,
                            h6: `framer-styles-preset-bz94od`,
                            img: `framer-styles-preset-yiy7at`,
                            p: `framer-styles-preset-1hj8z0a`,
                          },
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                        }),
                      ],
                    }),
                    u(D, {
                      children: u(O, {
                        className: `framer-1jwh227-container`,
                        isAuthoredByUser: !0,
                        isModuleExternal: !0,
                        nodeId: `F7E0ECrMv`,
                        scopeId: `o7Lhg86HO`,
                        children: u(ae, {
                          breakpoint: I,
                          overrides: { JdtoZE5LW: { dragControl: !0 } },
                          children: u(q, {
                            alignment: `center`,
                            arrowOptions: {
                              arrowFill: `rgba(0, 0, 0, 0.2)`,
                              arrowGap: 10,
                              arrowPadding: 20,
                              arrowPaddingBottom: 0,
                              arrowPaddingLeft: 0,
                              arrowPaddingRight: 0,
                              arrowPaddingTop: 0,
                              arrowPosition: `auto`,
                              arrowRadius: 40,
                              arrowShouldFadeIn: !1,
                              arrowShouldSpace: !0,
                              arrowSize: 40,
                              showMouseControls: !0,
                            },
                            autoPlayControl: !1,
                            borderRadius: 0,
                            direction: `left`,
                            dragControl: !1,
                            effectsOptions: {
                              effectsHover: !0,
                              effectsOpacity: 1,
                              effectsPerspective: 1200,
                              effectsRotate: 0,
                              effectsScale: 1,
                            },
                            fadeOptions: {
                              fadeAlpha: 0,
                              fadeContent: !1,
                              fadeInset: 0,
                              fadeWidth: 25,
                              overflow: !0,
                            },
                            gap: 40,
                            height: `100%`,
                            id: `F7E0ECrMv`,
                            intervalControl: 10,
                            itemAmount: 1,
                            layoutId: `F7E0ECrMv`,
                            padding: 0,
                            paddingBottom: 0,
                            paddingLeft: 0,
                            paddingPerSide: !1,
                            paddingRight: 0,
                            paddingTop: 0,
                            progressOptions: {
                              dotsActiveOpacity: 1,
                              dotsBackground: `rgba(0, 0, 0, 0.2)`,
                              dotsBlur: 0,
                              dotsFill: `rgb(255, 255, 255)`,
                              dotsGap: 10,
                              dotsInset: 10,
                              dotSize: 8,
                              dotsOpacity: 0.5,
                              dotsPadding: 10,
                              dotsRadius: 50,
                              showProgressDots: !1,
                            },
                            slots: [
                              u(D, {
                                height: 568,
                                width: `860px`,
                                children: u(O, {
                                  className: `framer-1ggctma-container`,
                                  inComponentSlot: !0,
                                  nodeId: `ApjJMpLnZ`,
                                  rendersWithMotion: !0,
                                  scopeId: `o7Lhg86HO`,
                                  children: u(nt, {
                                    gqLaMlXqi: ri(P),
                                    height: `100%`,
                                    id: `ApjJMpLnZ`,
                                    layoutId: `ApjJMpLnZ`,
                                    style: { height: `100%`, width: `100%` },
                                    width: `100%`,
                                  }),
                                }),
                              }),
                              u(D, {
                                height: 568,
                                width: `860px`,
                                children: u(O, {
                                  className: `framer-1wuc7yd-container`,
                                  inComponentSlot: !0,
                                  nodeId: `pKU0v0nsA`,
                                  rendersWithMotion: !0,
                                  scopeId: `o7Lhg86HO`,
                                  children: u(nt, {
                                    gqLaMlXqi: ri(we),
                                    height: `100%`,
                                    id: `pKU0v0nsA`,
                                    layoutId: `pKU0v0nsA`,
                                    style: { height: `100%`, width: `100%` },
                                    width: `100%`,
                                  }),
                                }),
                              }),
                              u(D, {
                                height: 568,
                                width: `860px`,
                                children: u(O, {
                                  className: `framer-hz56bt-container`,
                                  inComponentSlot: !0,
                                  nodeId: `YhpqnuEoj`,
                                  rendersWithMotion: !0,
                                  scopeId: `o7Lhg86HO`,
                                  children: u(nt, {
                                    gqLaMlXqi: ri(F),
                                    height: `100%`,
                                    id: `YhpqnuEoj`,
                                    layoutId: `YhpqnuEoj`,
                                    style: { height: `100%`, width: `100%` },
                                    width: `100%`,
                                  }),
                                }),
                              }),
                            ],
                            startFrom: 0,
                            style: {
                              height: `100%`,
                              maxWidth: `100%`,
                              width: `100%`,
                            },
                            transitionControl: {
                              damping: 40,
                              delay: 0,
                              mass: 1,
                              stiffness: 200,
                              type: `spring`,
                            },
                            width: `100%`,
                          }),
                        }),
                      }),
                    }),
                    h(`section`, {
                      className: `framer-1vzlwo3`,
                      "data-framer-name": `Results`,
                      id: qe,
                      ref: R,
                      children: [
                        u(Y, {
                          __framer__animate: { transition: Q },
                          __framer__animateOnce: !0,
                          __framer__enter: Z,
                          __framer__exit: $,
                          __framer__styleAppearEffectEnabled: !0,
                          __framer__threshold: 0.5,
                          __fromCanvasComponent: !0,
                          __perspectiveFX: !1,
                          __targetOpacity: 1,
                          children: Te,
                          className: `framer-1po7xgz`,
                          fonts: [`Inter`],
                          stylesPresetsClassNames: {
                            a: `framer-styles-preset-x319l3`,
                            blockquote: `framer-styles-preset-bv4lqz`,
                            h1: `framer-styles-preset-1jo3glk`,
                            h2: `framer-styles-preset-ugul1a`,
                            h3: `framer-styles-preset-1tsd54f`,
                            h4: `framer-styles-preset-16vtum8`,
                            h5: `framer-styles-preset-1qig5z1`,
                            h6: `framer-styles-preset-bz94od`,
                            img: `framer-styles-preset-yiy7at`,
                            p: `framer-styles-preset-1hj8z0a`,
                          },
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                        }),
                        u(Y, {
                          __framer__animate: { transition: Q },
                          __framer__animateOnce: !0,
                          __framer__enter: Z,
                          __framer__exit: $,
                          __framer__styleAppearEffectEnabled: !0,
                          __framer__threshold: 0.5,
                          __fromCanvasComponent: !0,
                          __perspectiveFX: !1,
                          __targetOpacity: 1,
                          children: Ee,
                          className: `framer-1yqabfz`,
                          fonts: [`Inter`],
                          stylesPresetsClassNames: {
                            a: `framer-styles-preset-x319l3`,
                            blockquote: `framer-styles-preset-bv4lqz`,
                            h1: `framer-styles-preset-1jo3glk`,
                            h2: `framer-styles-preset-ugul1a`,
                            h3: `framer-styles-preset-1tsd54f`,
                            h4: `framer-styles-preset-16vtum8`,
                            h5: `framer-styles-preset-1qig5z1`,
                            h6: `framer-styles-preset-bz94od`,
                            img: `framer-styles-preset-yiy7at`,
                            p: `framer-styles-preset-1hj8z0a`,
                          },
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                        }),
                      ],
                    }),
                    u(`footer`, {
                      className: `framer-135j23e`,
                      "data-framer-name": `Footer`,
                      children: u(ae, {
                        breakpoint: I,
                        overrides: {
                          Ft4AQn44t: {
                            width: `calc(${l?.width || `100vw`} - 80px)`,
                            y: (l?.y || 0) + 0 + 3793.8 + 0 + 0,
                          },
                          JdtoZE5LW: {
                            width: `calc(${l?.width || `100vw`} - 32px)`,
                            y: (l?.y || 0) + 0 + 4210.2 + 0 + 0,
                          },
                        },
                        children: u(D, {
                          height: 494,
                          width: `calc(${l?.width || `100vw`} - 400px)`,
                          y: (l?.y || 0) + 0 + 3964 + 0 + 0,
                          children: u(O, {
                            className: `framer-szo4dy-container`,
                            nodeId: `AriPp_Nmv`,
                            scopeId: `o7Lhg86HO`,
                            children: u(ae, {
                              breakpoint: I,
                              overrides: {
                                Ft4AQn44t: { variant: `ZIvMPij1s` },
                                JdtoZE5LW: { variant: `cylK6kTmU` },
                              },
                              children: u(Oe, {
                                height: `100%`,
                                id: `AriPp_Nmv`,
                                layoutId: `AriPp_Nmv`,
                                style: { width: `100%` },
                                variant: `JIiBvRrjg`,
                                width: `100%`,
                              }),
                            }),
                          }),
                        }),
                      }),
                    }),
                    Je() &&
                      u(ae, {
                        breakpoint: I,
                        overrides: {
                          Ft4AQn44t: {
                            height: 80,
                            width: l?.width || `100vw`,
                            y: 0,
                          },
                          JdtoZE5LW: {
                            height: 80,
                            width: l?.width || `100vw`,
                            y: 0,
                          },
                        },
                        children: u(D, {
                          children: u(O, {
                            className: `framer-18cw0er-container hidden-1baumkm`,
                            layoutScroll: !0,
                            nodeId: `Nimb8ydDt`,
                            scopeId: `o7Lhg86HO`,
                            children: u(Ae, {
                              height: `100%`,
                              id: `Nimb8ydDt`,
                              layoutId: `Nimb8ydDt`,
                              style: { width: `100%` },
                              variant: `eNoy_fvLa`,
                              width: `100%`,
                            }),
                          }),
                        }),
                      }),
                  ],
                }),
                u(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      })),
      (ci = [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-Cew1W.framer-13sc6ki, .framer-Cew1W .framer-13sc6ki { display: block; }`,
        `.framer-Cew1W.framer-1baumkm { align-content: flex-start; align-items: flex-start; background-color: var(--token-b475daa1-123e-4ac4-9203-afa2fe736f56, #0b0b0b); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 62px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px 80px 0px 280px; position: relative; width: 1200px; }`,
        `.framer-Cew1W .framer-1cozidx { align-content: flex-start; align-items: flex-start; background: linear-gradient(270deg, rgba(11, 11, 11, 0) 0%, var(--token-b475daa1-123e-4ac4-9203-afa2fe736f56, rgb(11, 11, 11)) 100%); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; height: 100%; justify-content: space-between; left: 0px; overflow: visible; padding: 24px 0px 40px 40px; position: fixed; top: -2px; width: 210px; z-index: 1; }`,
        `.framer-Cew1W .framer-1yo0yn0-container { flex: none; height: auto; position: relative; width: auto; }`,
        `.framer-Cew1W .framer-eayy3 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: center; left: 60%; overflow: hidden; padding: 0px; position: absolute; top: 272px; transform: translateX(-50%); width: 170px; z-index: 1; }`,
        `.framer-Cew1W .framer-1ij8o6d-container, .framer-Cew1W .framer-g41xv1-container, .framer-Cew1W .framer-o1a6t9-container, .framer-Cew1W .framer-14og0lp-container, .framer-Cew1W .framer-18uhc4r-container { flex: none; height: auto; position: relative; width: auto; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-Cew1W .framer-itste2-container { flex: none; height: 55px; position: relative; width: auto; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-Cew1W .framer-nd6lt5 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 40px; height: 65vh; justify-content: center; overflow: visible; padding: 180px 0px 0px 0px; position: relative; width: 100%; z-index: 1; }`,
        `.framer-Cew1W .framer-11grz6w { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; left: 0px; max-width: 1280px; overflow: visible; padding: 0px; position: absolute; top: 223px; width: 92%; z-index: 1; }`,
        `.framer-Cew1W .framer-1c63w59 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-Cew1W .framer-18lp6m, .framer-Cew1W .framer-w2x8ub { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-Cew1W .framer-1rkb5n2 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-Cew1W .framer-wgihwe, .framer-Cew1W .framer-n40klr, .framer-Cew1W .framer-1d0sjms, .framer-Cew1W .framer-1gpg9l3 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1px; }`,
        `.framer-Cew1W .framer-15ymso8, .framer-Cew1W .framer-jbwan6, .framer-Cew1W .framer-auoxs7, .framer-Cew1W .framer-ali384, .framer-Cew1W .framer-58jcnc, .framer-Cew1W .framer-1v6ewyj, .framer-Cew1W .framer-1rpvgga { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; will-change: var(--framer-will-change-effect-override, transform); word-break: break-word; word-wrap: break-word; }`,
        `.framer-Cew1W .framer-1hei688 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-Cew1W .framer-3q9xje { flex: none; height: auto; position: relative; white-space: pre; width: auto; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-Cew1W .framer-156db2r-container { flex: none; height: 80vh; position: relative; width: 100%; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-Cew1W .framer-6dmuni, .framer-Cew1W .framer-kmxhsq, .framer-Cew1W .framer-16we74v, .framer-Cew1W .framer-1vzlwo3 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 48px; height: min-content; justify-content: center; max-width: 880px; overflow: visible; padding: 40px 0px 40px 40px; position: relative; width: 90%; }`,
        `.framer-Cew1W .framer-1e5j6zr, .framer-Cew1W .framer-xscqz9, .framer-Cew1W .framer-v77wox, .framer-Cew1W .framer-1iywluk, .framer-Cew1W .framer-1pcc518, .framer-Cew1W .framer-12gc5ep, .framer-Cew1W .framer-1po7xgz, .framer-Cew1W .framer-1yqabfz { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-Cew1W .framer-1jwh227-container { flex: none; height: 80vh; max-width: 1280px; position: relative; width: 100%; }`,
        `.framer-Cew1W .framer-1ggctma-container, .framer-Cew1W .framer-1wuc7yd-container, .framer-Cew1W .framer-hz56bt-container { height: 568px; position: relative; width: 860px; }`,
        `.framer-Cew1W .framer-135j23e { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 0px 0px 40px; position: relative; width: 100%; }`,
        `.framer-Cew1W .framer-szo4dy-container { flex: none; height: auto; position: relative; width: 100%; z-index: 1; }`,
        `.framer-Cew1W .framer-18cw0er-container { flex: none; height: auto; left: 0px; position: fixed; right: 0px; top: 0px; z-index: 2; }`,
        ...Le,
        ...rr,
        ...qe,
        ...Je,
        ...Fe,
        ...Ye,
        ...lt,
        ...ut,
        ...Ie,
        ...I,
        ...dt,
        ...ft,
        `@media (min-width: 810px) and (max-width: 1199px) { .framer-Cew1W.framer-1baumkm { padding: 0px 40px 0px 40px; width: 810px; } .framer-Cew1W .framer-nd6lt5 { height: min-content; } .framer-Cew1W .framer-11grz6w { left: unset; position: relative; top: unset; width: 100%; } .framer-Cew1W .framer-135j23e { padding: 0px; }}`,
        `@media (max-width: 809px) { .framer-Cew1W.framer-1baumkm { padding: 0px 16px 0px 16px; width: 390px; } .framer-Cew1W .framer-nd6lt5 { flex-direction: column; height: min-content; } .framer-Cew1W .framer-11grz6w { left: unset; position: relative; top: unset; width: 100%; } .framer-Cew1W .framer-1rkb5n2 { flex-direction: column; gap: 24px; } .framer-Cew1W .framer-wgihwe, .framer-Cew1W .framer-n40klr, .framer-Cew1W .framer-1d0sjms, .framer-Cew1W .framer-1gpg9l3 { flex: none; width: 100%; } .framer-Cew1W .framer-6dmuni, .framer-Cew1W .framer-kmxhsq, .framer-Cew1W .framer-16we74v, .framer-Cew1W .framer-1vzlwo3 { padding: 40px 0px 40px 0px; width: 100%; } .framer-Cew1W .framer-135j23e { padding: 0px; }}`,
      ]),
      (li = P(si, ci, `framer-Cew1W`)),
      (li.displayName = `Case Studies`),
      (li.defaultProps = { height: 4805, width: 1200 }),
      le(
        li,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+1F00-1FFF`,
                url: `https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0370-03FF`,
                url: `https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `https://framerusercontent.com/assets/vQyevYAyHtARFwPqUzQGpnDs.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2`,
                weight: `400`,
              },
            ],
          },
          ...or,
          ...sr,
          ...ur,
          ...fr,
          ...pr,
          ...mr,
          ...hr,
          ...M(Ve),
          ...M(nr),
          ...M(Xe),
          ...M(Ze),
          ...M(Re),
          ...M(Qe),
          ...M(pt),
          ...M(mt),
          ...M(Be),
          ...M(ze),
          ...M(ht),
          ...M(gt),
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      (ui = {
        exports: {
          Props: {
            type: `tsType`,
            annotations: { framerContractVersion: `1` },
          },
          default: {
            type: `reactComponent`,
            name: `Framero7Lhg86HO`,
            slots: [],
            annotations: {
              framerAutoSizeImages: `true`,
              framerScrollSections: `{"oF97DuYQu":{"pattern":":oF97DuYQu","name":"intro"},"jWgwColRM":{"pattern":":jWgwColRM","name":"description"},"rVmCTjUAS":{"pattern":":rVmCTjUAS","name":"process"},"NrqLetHNV":{"pattern":":NrqLetHNV","name":"solution"},"kZytKiRCE":{"pattern":":kZytKiRCE","name":"results"}}`,
              framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"Ft4AQn44t":{"layout":["fixed","auto"]},"JdtoZE5LW":{"layout":["fixed","auto"]}}}`,
              framerIntrinsicHeight: `4805`,
              framerResponsiveScreen: ``,
              framerDisplayContentsDiv: `false`,
              framerAcceptsLayoutTemplate: `true`,
              framerColorSyntax: `true`,
              framerContractVersion: `1`,
              framerComponentViewportWidth: `true`,
              framerIntrinsicWidth: `1200`,
              framerImmutableVariables: `true`,
            },
          },
          __FramerMetadata__: { type: `variable` },
        },
      });
  });
di();
export { ui as __FramerMetadata__, li as default };
//# sourceMappingURL=xOsUVUuSgzSQKBsfyruRTXO1oDT9JXpywmzMG5-hlw8.BljmMh79.mjs.map
