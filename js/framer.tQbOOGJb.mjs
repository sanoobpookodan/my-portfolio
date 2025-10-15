import { __esmMin as e } from "./rolldown-runtime.DSjM2LRs.mjs";
import {
  B as t,
  I as n,
  J as r,
  K as i,
  L as a,
  X as o,
  Y as s,
  Z as c,
  _e as l,
  ae as u,
  e as d,
  fe as f,
  ie as p,
  init_jsx_runtime as m,
  init_npm_react_18_2 as h,
  init_npm_react_dom_18_2 as g,
  init_ssg_sandbox_shims as _,
  j as v,
  l as y,
  navigator as b,
  p as x,
  pe as S,
  q as C,
  re as w,
  se as T,
  te as E,
  u as D,
  ue as O,
  window as k,
  x as A,
  ye as j,
  z as M,
} from "./react.CL8SE-Jx.mjs";
import {
  AnimatePresence as ee,
  LayoutGroup as te,
  MotionConfig as ne,
  MotionGlobalConfig as re,
  MotionValue as ie,
  PresenceContext as ae,
  SwitchLayoutGroupContext as oe,
  WillChangeMotionValue as se,
  __commonJS as ce,
  __decorateElement as N,
  __decoratorMetadata as le,
  __decoratorStart as ue,
  __privateAdd as de,
  __privateGet as P,
  __privateMethod as fe,
  __privateSet as pe,
  __publicField as F,
  __runInitializers as me,
  __toESM as he,
  addScaleCorrector as I,
  animate as ge,
  animateValue as _e,
  cancelFrame as ve,
  frame as ye,
  inView as be,
  init_chunk_BLFSVU7M as L,
  init_chunk_YNHG2PI6 as xe,
  interpolate as Se,
  isMotionComponent as Ce,
  isMotionValue as we,
  isValidMotionProp as Te,
  motion as Ee,
  motionValue as De,
  optimizedAppearDataAttribute as Oe,
  resolveMotionValue as ke,
  scroll as Ae,
  spring as je,
  stagger as Me,
  transform as Ne,
  unwrapMotionComponent as Pe,
  useAnimation as Fe,
  useInstantLayoutTransition as Ie,
  useInstantTransition as Le,
  useMotionValue as Re,
  usePresence as ze,
  useReducedMotionConfig as Be,
  useResetProjection as Ve,
  useScroll as He,
  useSpring as Ue,
  useTransform as We,
  visualElementStore as Ge,
} from "./motion.CbTbuOc9.mjs";
function Ke(e) {
  return typeof e == `object` && !!e && !r(e) && Lp in e;
}
function qe(e) {
  let t = i(e),
    n,
    r,
    a = !1,
    o = s(function (e, n) {
      O(() => {
        a = !0;
      }, []);
      let i = r ?? t;
      return x(i, { ref: n, ...e });
    });
  return (
    (o.preload = () => ((n ||= e().then((e) => ((r = e.default), r))), n)),
    (o.getStatus = () => ({ hasLoaded: r !== void 0, hasRendered: a })),
    o
  );
}
function Je(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function Ye(e) {
  return e === null || !(zp in e) ? !1 : typeof e.equals == `function`;
}
function Xe(e, t) {
  return e === t ? !0 : e !== e && t !== t;
}
function Ze(e, t) {
  let n = e.length;
  if (n !== t.length) return !1;
  for (let r = n; r-- !== 0; ) if (!Xe(e[r], t[r])) return !1;
  return !0;
}
function Qe(e, t) {
  let n = e.length;
  if (n !== t.length) return !1;
  for (let r = n; r-- !== 0; ) if (!it(e[r], t[r], !0)) return !1;
  return !0;
}
function $e(e, t) {
  if (e.size !== t.size) return !1;
  for (let [n, r] of e.entries()) if (!Xe(r, t.get(n))) return !1;
  return !0;
}
function et(e, t) {
  if (e.size !== t.size) return !1;
  for (let [n, r] of e.entries()) if (!it(r, t.get(n), !0)) return !1;
  return !0;
}
function tt(e, t) {
  if (e.size !== t.size) return !1;
  for (let n of e.keys()) if (!t.has(n)) return !1;
  return !0;
}
function nt(e, t) {
  let n = Rp(e);
  if (n.length !== Rp(t).length) return !1;
  for (let r of n) {
    if (!Je(t, r)) return !1;
    if (r === `_owner` && Je(e, `$$typeof`) && e.$$typeof) continue;
    if (!Xe(e[r], t[r])) return !1;
  }
  return !0;
}
function rt(e, t) {
  let n = Rp(e);
  if (n.length !== Rp(t).length) return !1;
  for (let r of n) {
    if (!Je(t, r)) return !1;
    if (r === `_owner` && Je(e, `$$typeof`) && e.$$typeof) continue;
    if (!it(e[r], t[r], !0)) return !1;
  }
  return !0;
}
function it(e, t, n) {
  if (e === t) return !0;
  if (!e || !t) return e !== e && t !== t;
  let r = typeof e,
    i = typeof t;
  if (r !== i || r !== `object`) return !1;
  let a = Array.isArray(e),
    o = Array.isArray(t);
  if (a && o) return n ? Qe(e, t) : Ze(e, t);
  if (a !== o) return !1;
  let s = e instanceof Map,
    c = t instanceof Map;
  if (s && c) return n ? et(e, t) : $e(e, t);
  if (s !== c) return !1;
  let l = e instanceof Set,
    u = t instanceof Set;
  if (l && u) return tt(e, t);
  if (l !== u) return !1;
  let d = e instanceof Date,
    f = t instanceof Date;
  if (d && f) return e.getTime() === t.getTime();
  if (d !== f) return !1;
  let p = e instanceof RegExp,
    m = t instanceof RegExp;
  return p && m
    ? e.toString() === t.toString()
    : p === m
    ? Ye(e) && Ye(t)
      ? e.equals(t)
      : n
      ? rt(e, t)
      : nt(e, t)
    : !1;
}
function at(e, t, n = !0) {
  try {
    return it(e, t, n);
  } catch (e) {
    if (e instanceof Error && /stack|recursion/iu.exec(e.message))
      return (
        console.warn(
          `Warning: isEqual does not handle circular references.`,
          e.name,
          e.message
        ),
        !1
      );
    throw e;
  }
}
function ot(e) {
  return d.useCallback((t) => e[t], [e]);
}
function st({ api: e, children: t }) {
  return x(Bp.Provider, { value: e, children: t });
}
function ct() {
  return d.useContext(Bp);
}
function lt({ routes: e, children: t }) {
  let n = ot(e),
    r = T(() => ({ getRoute: n }), [n]);
  return x(Bp.Provider, { value: r, children: t });
}
function ut() {
  var e;
  let t = ct(),
    n = w(Vp),
    r = n?.routeId ?? t.currentRouteId,
    i = n?.routeId ? n.pathVariables : t.currentPathVariables,
    a = r ? (e = t.getRoute)?.call(t, r) : void 0;
  return T(() => {
    if (!(!r || !a)) return { ...a, id: r, pathVariables: i };
  }, [r, i, a]);
}
function dt() {
  let e = ut();
  if (e) return `${e.id}-${JSON.stringify(e.pathVariables)}`;
}
function ft(e) {
  let t = ut(),
    n = d.useRef(t);
  at(n.current, t) || !t || ((n.current = t), e(t));
}
function pt(e) {
  var t;
  let n = ct();
  if (e) return (t = n.getRoute)?.call(n, e);
}
function mt(e, t) {
  if (t && e) return e.elements && t in e.elements ? e.elements[t] : t;
}
function ht(e) {
  let t = [`pointerdown`, `pointerup`, `keydown`, `keyup`],
    n = (e) => {
      let n = e.type;
      t.includes(n) &&
        performance.mark(`framer-navigation-input`, { detail: { type: n } });
    };
  for (let r = 0; r < t.length; r++)
    document.addEventListener(t[r], n, { signal: e });
  return () => {
    for (let e = 0; e < t.length; e++) document.removeEventListener(t[e], n);
  };
}
function gt(e, t) {
  let n = ut(),
    r = pt(t) ?? n;
  return d.useMemo(() => (r ? mt(r, e) : e), [e, r]);
}
function _t() {
  var e;
  return (e = ut())?.pathVariables;
}
function vt(e) {
  return typeof e == `function`;
}
function yt(e) {
  return typeof e == `boolean`;
}
function R(e) {
  return typeof e == `string`;
}
function z(e) {
  return Number.isFinite(e);
}
function bt(e) {
  return Array.isArray(e);
}
function B(e) {
  return typeof e == `object` && !!e && !bt(e);
}
function xt(e) {
  return e === void 0;
}
function St(e) {
  return e === null;
}
function Ct(e) {
  return e == null;
}
function wt(e) {
  return e instanceof Date && !Number.isNaN(e.getTime());
}
function Tt(e) {
  return B(e) && vt(e.return);
}
function Et(e) {
  return `url('data:image/svg+xml,${e
    .replaceAll(`#`, `%23`)
    .replaceAll(`'`, `%27`)}')`;
}
function Dt() {
  for (let e of Zp) e();
  Zp.clear();
}
function Ot(e) {
  return new Promise((t) => {
    if ((Zp.add(t), document.hidden)) {
      Dt();
      return;
    }
    document.addEventListener(`visibilitychange`, Dt),
      document.addEventListener(`pagehide`, Dt),
      ye.read(() => {
        let n = () => {
          var n;
          Zp.delete(t), !(n = e?.signal)?.aborted && t();
        };
        At(e).then(n);
      });
  });
}
function kt(e) {
  return new Promise((t) => {
    setTimeout(t, 100),
      ye.read(
        () => {
          At(e).then(t);
        },
        !1,
        !0
      );
  });
}
function At(e) {
  let t = e?.priority,
    n = Yp || Xp;
  return n
    ? t === `background`
      ? new Promise((e) => {
          setTimeout(e, 1);
        })
      : Yp
      ? q.scheduler.yield(e).catch(Up)
      : q.scheduler.postTask(() => {}, e).catch(Up)
    : t === `user-blocking`
    ? Promise.resolve()
    : new Promise((e) => {
        setTimeout(e, t === `background` ? 1 : 0);
      });
}
function jt(e) {
  let { continueAfter: t, ensureContinueBeforeUnload: n, ...r } = e ?? {};
  return n ? Ot(r) : t === `paint` ? kt(r) : At(r);
}
function Mt(e, t = !0) {
  let { getRoute: n } = ct();
  O(() => {
    if (!(!n || !t || !Qp)) for (let t of e) Nt(n(t));
  }, [e, n, t]);
}
async function Nt(e) {
  if (!Qp || !e) return;
  let t = e.page;
  if (!(!t || !Ke(t))) {
    await jt();
    try {
      await t.preload();
    } catch {}
  }
}
function Pt(e, t, n = `lazy`) {
  var r;
  switch (((r = q.__framer_events) == null || r.push([e, t, n]), e)) {
    case `published_site_click`: {
      let { trackingId: e, href: n } = t;
      e &&
        document.dispatchEvent(
          new CustomEvent(`framer:click`, {
            detail: { trackingId: e, href: n },
          })
        );
      break;
    }
    case `published_site_form_submit`: {
      let { trackingId: e } = t;
      e &&
        document.dispatchEvent(
          new CustomEvent(`framer:formsubmit`, { detail: { trackingId: e } })
        );
      break;
    }
    case `published_site_pageview`: {
      let { framerLocale: e } = t;
      document.dispatchEvent(
        new CustomEvent(`framer:pageview`, { detail: { framerLocale: e } })
      );
      break;
    }
  }
}
function Ft(e, t) {
  if (!e.startsWith(`/`) || !t.startsWith(`/`))
    throw Error(`from/to paths are expected to be absolute`);
  let [n] = It(e),
    [r, i] = It(t),
    a = Lt(n, r);
  return (
    a === `` && (a = `.`),
    !a.startsWith(`.`) && !a.startsWith(`/`) && (a = `./` + a),
    a + `/` + i
  );
}
function It(e) {
  let t = e.lastIndexOf(`/`);
  return [e.substring(0, t + 1), e.substring(t + 1)];
}
function Lt(e, t) {
  if (e === t || ((e = `/` + Rt(e)), (t = `/` + Rt(t)), e === t)) return ``;
  let n = e.length,
    r = n - 1,
    i = t.length - 1,
    a = r < i ? r : i,
    o = -1,
    s = 0;
  for (; s < a; s++) {
    let n = nm(e, 1 + s);
    if (n !== nm(t, 1 + s)) break;
    n === tm && (o = s);
  }
  if (s === a)
    if (i > a) {
      if (nm(t, 1 + s) === tm) return im(t, 1 + s + 1);
      if (s === 0) return im(t, 1 + s);
    } else r > a && (nm(e, 1 + s) === tm ? (o = s) : s === 0 && (o = 0));
  let c = ``;
  for (s = 1 + o + 1; s <= n; ++s)
    (s === n || nm(e, s) === tm) && (c += c.length === 0 ? `..` : `/..`);
  return `${c}${im(t, 1 + o)}`;
}
function Rt(e) {
  let t = ``,
    n = 0,
    r = -1,
    i = 0,
    a = 0;
  for (let o = 0; o <= e.length; ++o) {
    if (o < e.length) a = nm(e, o);
    else if (sm(a)) break;
    else a = tm;
    if (sm(a)) {
      if (!(r === o - 1 || i === 1))
        if (i === 2) {
          if (
            t.length < 2 ||
            n !== 2 ||
            nm(t, t.length - 1) !== em ||
            nm(t, t.length - 2) !== em
          ) {
            if (t.length > 2) {
              let e = rm(t, om);
              e === -1
                ? ((t = ``), (n = 0))
                : ((t = im(t, 0, e)), (n = t.length - 1 - rm(t, om))),
                (r = o),
                (i = 0);
              continue;
            } else if (t.length !== 0) {
              (t = ``), (n = 0), (r = o), (i = 0);
              continue;
            }
          }
          am && ((t += t.length > 0 ? `${om}..` : `..`), (n = 2));
        } else
          t.length > 0
            ? (t += `${om}${im(e, r + 1, o)}`)
            : (t = im(e, r + 1, o)),
            (n = o - r - 1);
      (r = o), (i = 0);
    } else a === em && i !== -1 ? ++i : (i = -1);
  }
  return t;
}
function zt(e, t) {
  return e.replace(um, (e, n) => {
    let r = t[n];
    return typeof r != `string` || r.length === 0 ? e : encodeURIComponent(r);
  });
}
function Bt(e) {
  let t = k === void 0 ? `` : k.location.search;
  return t ? Vt(t, e) : e;
}
function Vt(e, t) {
  let n = t.indexOf(`#`),
    r = n === -1 ? t : t.substring(0, n),
    i = n === -1 ? `` : t.substring(n),
    a = r.indexOf(`?`);
  if (a === -1) return r + e + i;
  let o = new URLSearchParams(e),
    s = r.substring(a + 1),
    c = new URLSearchParams(s);
  for (let [e, t] of o) c.has(e) || c.append(e, t);
  return r.substring(0, a + 1) + c.toString() + i;
}
async function Ht(e, t, n, r, i, a, o) {
  var s;
  let c = e,
    l = !1,
    u = { ...a },
    d = Array.from(c.matchAll(um)),
    f = await Promise.all(
      d.map(async (e) => {
        var s;
        let c = e?.[0],
          d = e?.[1];
        if (!c || !d)
          throw Error(
            `Failed to replace path variables: unexpected regex match group`
          );
        let f = a[d];
        if (!f || !R(f)) throw Error(`No slug found for path variable ${d}`);
        let p = await (s = o?.[i])?.call(o);
        if (!p || !t) return f;
        let m = await p.getRecordIdBySlug(f, t);
        if (!m) return f;
        let h = await p.getSlugByRecordId(m, n);
        if (!h) {
          l = !0;
          let e = await p.getSlugByRecordId(m, r);
          return e && (u[d] = e), e ?? f;
        }
        return (u[d] = h), h;
      })
    ),
    p = 0,
    m = ``,
    h = !1;
  for (let e = 0; e < d.length; e++) {
    let t = d[e],
      n = f[e];
    !t ||
      !n ||
      ((m += c.substring(p, t.index)),
      (p = (t.index ?? 0) + ((s = t[0])?.length ?? 0)),
      (m += f[e]),
      (h = !0));
  }
  return (
    h && ((m += c.substring(p)), (c = m)),
    { path: c, pathVariables: u, isMissingInLocale: l }
  );
}
async function Ut({
  currentLocale: e,
  nextLocale: t,
  defaultLocale: n,
  route: r,
  pathVariables: i,
  collectionUtils: a,
  preserveQueryParams: o,
}) {
  let { path: s } = r,
    c = { path: s, pathVariables: i, isMissingInLocale: !1 };
  if (!s) return c;
  if (i && r.collectionId)
    try {
      let o = await Ht(s, e, t, n, r.collectionId, i, a);
      c = o;
    } catch {}
  return (
    t.slug && (c.path = `/` + t.slug + c.path),
    o && c.path && (c.path = Bt(c.path)),
    c
  );
}
function Wt(e) {
  if (!e) return ``;
  let t;
  try {
    t = new URL(e);
  } catch {
    return ``;
  }
  return t.pathname === `/` || k.location.origin !== t.origin
    ? ``
    : t.pathname.endsWith(`/`)
    ? t.pathname.slice(0, -1)
    : t.pathname;
}
function Gt({ children: e, value: t }) {
  return x(fm.Provider, { value: t, children: e });
}
function Kt() {
  return d.useContext(fm);
}
function qt(e, t, { global: n, routes: r }) {
  var i;
  return (i = r[e])?.[t] || n;
}
function Jt(e) {
  let t = pm,
    n = e.next(0),
    r = [n.value];
  for (; !n.done && t < mm; ) (n = e.next(t)), r.push(n.value), (t += pm);
  return (
    r.length === 1 && r.push(n.value),
    { easing: `linear(${r.join(`,`)})`, duration: t - pm }
  );
}
function Yt(e) {
  return [parseFloat(e), e.endsWith(`px`) ? `px` : `%`];
}
function Xt(e) {
  let { innerWidth: t, innerHeight: n } = k,
    [r, i] = Yt(e.x),
    [a, o] = Yt(e.y);
  return {
    x: i === `px` ? r : t * (r / 100),
    y: o === `px` ? a : n * (a / 100),
  };
}
function Zt(e, t, n, r) {
  var i;
  let a = `
      opacity: ${e.opacity};
      transform: translate(${e.x}, ${e.y}) scale(${e.scale}) rotateX(${e.rotateX}deg) rotateY(${e.rotateY}deg) rotateZ(${e.rotate}deg);
    `;
  return e.mask && (a += (i = r?.makeKeyframe)?.call(r, e.mask, t, n) || ``), a;
}
function Qt(e) {
  return e ? xm[e] : void 0;
}
function $t(e, { transition: t, ...n }) {
  var r;
  let i = `view-transition-` + e,
    a = { duration: `0s`, easing: `linear` };
  if (t.type === `tween`)
    (a.duration = t.duration + `s`),
      (a.easing = `cubic-bezier(${t.ease.join(`,`)})`);
  else if (en(t)) {
    let { easing: e, duration: n } = Jt(
      je({ keyframes: [0, 1], ...tn(t), restDelta: 0.001, restSpeed: 1e-4 })
    );
    (a.duration = n + `ms`), (a.easing = e);
  }
  let o = Qt((r = n?.mask)?.type),
    s = Zt(n, `start`, e, o),
    c = Zt({ ...Sm, mask: n.mask }, `end`, e, o);
  return (
    e === `exit` && ([s, c] = [c, s]),
    `
        ${n.mask && o?.makePropertyRules ? o.makePropertyRules(n.mask) : ``}

        @keyframes ${i} {
            0% {
                ${s}
            }

            100% {
                ${c}
            }
        }

        ::view-transition-${e === `enter` ? `new` : `old`}(root) {
            animation-name: ${i};
            animation-duration: ${a.duration};
            animation-delay: ${t.delay}s;
            animation-timing-function: ${a.easing};
            animation-fill-mode: both;
            ${n.mask && o?.makeStyles ? o.makeStyles(n.mask, e) : ``}
        }
    `
  );
}
function en(e) {
  return e.type === `spring`;
}
function tn(e) {
  return e.durationBasedSpring
    ? { duration: e.duration * 1e3, bounce: e.bounce }
    : { stiffness: e.stiffness, damping: e.damping, mass: e.mass };
}
function nn({ exit: e = wm, enter: t }) {
  let n = document.createElement(`style`);
  n.id = Cm;
  let r = `
        @media (prefers-reduced-motion) {
            ::view-transition-group(*),
            ::view-transition-old(*),
            ::view-transition-new(*) {
                animation: none !important;
            }
        }
    `,
    i =
      e.mask ||
      t.mask ||
      e.opacity ||
      t.opacity ||
      e.transition.delay ||
      t.transition.delay;
  i &&
    (r += `
            ::view-transition-old(*),
            ::view-transition-new(*) {
                mix-blend-mode: normal;
            }
        `),
    (r += `
        ::view-transition-old(*),
        ::view-transition-new(*) {
            backface-visibility: hidden;
        }
    `),
    (r += $t(`exit`, e)),
    (r += $t(`enter`, t)),
    (n.textContent = r),
    document.head.appendChild(n);
}
function rn() {
  qp(() => {
    ye.render(() => {
      performance.mark(`framer-vt-remove`);
      let e = document.getElementById(Cm);
      e && document.head.removeChild(e);
    });
  });
}
function an() {
  return !!document.startViewTransition;
}
function on(e) {
  return new Promise((t) => {
    ye.render(() => {
      performance.mark(`framer-vt-style`), nn(e), t();
    });
  });
}
async function sn(e, t, n) {
  if (!an()) {
    e();
    return;
  }
  if ((await on(t), n?.aborted)) return;
  performance.mark(`framer-vt`);
  let r = document.startViewTransition(async () => {
    performance.mark(`framer-vt-freeze`),
      !n?.aborted &&
        (n?.addEventListener(`abort`, () => r.skipTransition()), await e());
  });
  return (
    r.updateCallbackDone
      .then(() => {
        performance.mark(`framer-vt-unfreeze`);
      })
      .catch(Tm),
    Promise.all([r.ready, r.finished])
      .then(() => {
        performance.mark(`framer-vt-finished`), rn();
      })
      .catch(Tm),
    r
  );
}
function cn() {
  let e = Kt(),
    t = S(void 0);
  return (
    O(() => {
      t.current &&= (t.current(), void 0);
    }),
    E(
      (n, r, i, a) => {
        let o = qt(n, r, e);
        if (o) {
          let e = new Promise((e) => {
            t.current = e;
          });
          return sn(
            async () => {
              i(), await e;
            },
            o,
            a
          );
        }
        i();
      },
      [e]
    )
  );
}
function ln(e, t) {
  qp(() => {
    let n = document.querySelector(`link[rel='canonical']`);
    if (!n) return;
    let r = new URL(e, t);
    (r.search = ``), n.setAttribute(`href`, r.toString());
  });
}
function un(e, t, n, r = f) {
  r(() => {
    let t = async (e) => (await jt({ ...n, continueAfter: `paint` }), e()),
      r = t(e);
    return () => {
      (async () => {
        let e = await r;
        e && t(e);
      })();
    };
  }, t);
}
function dn(e) {
  let t = S(void 0);
  return (
    un(
      () => {
        t.current &&= (t.current(), void 0);
      },
      void 0,
      { priority: `user-blocking` }
    ),
    E(
      (n) => {
        let r = new Promise((e) => {
          t.current = e;
        });
        if (!e) return { promise: r, measureDetail: n, ignore: null };
        let i = `${e}-start`,
          a = `${e}-end`,
          o = !1;
        return (
          performance.mark(i),
          r
            .finally(() => {
              o ||
                (performance.mark(a),
                performance.measure(e, { start: i, end: a, detail: n }));
            })
            .catch((e) => {
              console.error(e);
            }),
          {
            promise: r,
            measureDetail: n,
            ignore: () => {
              var e;
              (o = !0),
                (e = t.current) == null || e.call(t),
                (t.current = void 0);
            },
          }
        );
      },
      [e]
    )
  );
}
async function fn(
  e,
  t,
  {
    currentRoutePath: n,
    currentPathVariables: r,
    hash: i,
    pathVariables: a,
    localeId: o,
    preserveQueryParams: s,
    siteCanonicalURL: c,
  },
  l = !1
) {
  let { path: u } = t;
  if (!u) return;
  let d = yn(t, {
    currentRoutePath: n,
    currentPathVariables: r,
    hash: i,
    pathVariables: a,
    preserveQueryParams: s,
    siteCanonicalURL: c,
  });
  try {
    return await hn(
      { routeId: e, hash: i, pathVariables: a, localeId: o },
      d,
      l
    );
  } catch {}
}
function pn(e) {
  return B(e) && R(e.routeId);
}
function mn(e, t, n = !1) {
  performance.mark(`framer-history-replace`);
  let r = n ? k.history.__proto__.replaceState : k.history.replaceState;
  r.call(k.history, e, ``, t);
}
async function hn(e, t, n = !1) {
  if ((performance.mark(`framer-history-push`), ln(t, k.location.href), !n)) {
    k.history.pushState(e, ``, t);
    return;
  }
  let r = !1,
    i;
  Om &&
    ((i = () => {
      if (((r = !0), km)) return;
      let e = `Popstate called after intercept(). Please report this to the Framer team.`;
      console.error(e),
        Pt(`published_site_load_recoverable_error`, { message: e });
    }),
    k.addEventListener(`popstate`, i, { once: !0 })),
    km && Om
      ? k.history.__proto__.pushState.call(k.history, e, ``, t)
      : k.history.pushState(e, ``, t),
    Om &&
      queueMicrotask(() => {
        r || ((Om = !1), k.removeEventListener(`popstate`, i));
      });
}
function gn({
  disabled: e,
  routeId: t,
  initialPathVariables: n,
  initialLocaleId: r,
}) {
  f(() => {
    e ||
      (performance.mark(`framer-history-set-initial-state`),
      mn({ routeId: t, pathVariables: n, localeId: r }, void 0, !0));
  }, []);
}
function _n(e, t) {
  let n = cn(),
    r = dn(`framer-route-change`),
    i = S(void 0),
    a = E(
      async ({ state: a }) => {
        var o, s, c, l, u, d;
        if (
          ((o = k.navigation)?.transition &&
            (c = (s = k.navigation)?.transition)?.navigationType !==
              `traverse`) ||
          !B(a)
        )
          return;
        let { routeId: f, hash: p, pathVariables: m, localeId: h } = a;
        if (!R(f)) return;
        let g = r({ popstate: !0 }),
          _ = ht();
        g.promise.finally(_);
        let v = () => {
            t(
              f,
              R(h) ? h : void 0,
              R(p) ? p : void 0,
              k.location.pathname + k.location.search + k.location.hash,
              B(m) ? m : void 0,
              !0,
              g,
              !1
            );
          },
          y = await n(e.current, f, v),
          b = (l = k.navigation)?.transition;
        await (y?.updateCallbackDone ?? Promise.resolve())
          .then((u = i.current)?.resolve)
          .catch((d = i.current)?.reject),
          await g.promise;
        try {
          await b?.finished;
        } catch (e) {
          console.warn(`Popstate transition failed`, e);
        }
        Dm(), ln(k.location.href);
      },
      [e, r, t, n]
    ),
    o = E((e) => {
      e.navigationType !== `traverse` ||
        !e.canIntercept ||
        e.intercept({
          async handler() {
            await new Promise((e, t) => {
              i.current = { resolve: e, reject: t };
            }),
              (i.current = void 0);
          },
          scroll: `after-transition`,
        });
    }, []);
  O(
    () => (
      k.addEventListener(`popstate`, a),
      Am && k.navigation.addEventListener(`navigate`, o),
      () => {
        k.removeEventListener(`popstate`, a),
          Am && k.navigation.removeEventListener(`navigate`, o);
      }
    ),
    [a, o]
  );
}
function vn(e, t, n) {
  let r = mt(t, e);
  if (!r) return;
  let i = Object.assign({}, t?.elements, n);
  return r.replace(um, (e, t) => i[t] ?? e);
}
function yn(
  e,
  {
    currentRoutePath: t,
    currentPathVariables: n,
    hash: r,
    pathVariables: i,
    hashVariables: a,
    relative: o = !0,
    preserveQueryParams: s,
    onlyHash: c = !1,
    siteCanonicalURL: l,
  }
) {
  let u = vn(r, e, a);
  if (c) return u ?? ``;
  let d = t ?? `/`;
  n && (d = d.replace(um, (e, t) => String(n[t] || e)));
  let f = e?.path ?? `/`,
    p = f;
  i && (p = p.replace(um, (e, t) => String(i[t] || e)));
  let m = d === p && u;
  if (o)
    if (cm.has(d) && k !== void 0) {
      let e = Wt(l);
      p = Ft(k.location.pathname, e + p);
    } else p = Ft(d, p);
  return (s || m) && (p = Bt(p)), u && (p = `${p}#${u}`), p;
}
async function bn(e, t, n) {
  if (!e.path || !t) return !1;
  let r = n.slug ? `/${n.slug}` : ``,
    i = `${r}${zt(e.path, t)}`,
    a = await fetch(i, { method: `HEAD`, redirect: `manual` }),
    o = a.type === `opaqueredirect`;
  return o ? ((k.location.href = k.location.origin + i), !0) : !1;
}
async function xn(e) {
  let t = await Ut(e);
  if (t) {
    try {
      localStorage.setItem(`preferredLocale`, e.nextLocale.code);
    } catch {}
    try {
      if (!R(t.path)) throw Error(`Expected result.path to be a string`);
      if (t.isMissingInLocale) {
        let n = await bn(e.route, t.pathVariables, e.nextLocale);
        if (n) return;
      }
    } catch {}
    return t;
  }
}
function Sn(e, t) {
  try {
    let n = k.history.state;
    if (!pn(n)) return;
    let r = n?.paginationInfo === void 0 || n.paginationInfo[e] === void 0,
      i = { ...n.paginationInfo, [e]: t };
    mn({ ...n, paginationInfo: i }, void 0, r);
  } catch {}
}
function Cn() {
  let e = S(Promise.resolve()),
    t = S(),
    n = E((n) => {
      if (n.navigationType === `traverse` || !n.canIntercept) return;
      let r = t.current;
      r?.signal.addEventListener(`abort`, () => {
        r.abort(`user aborted`);
      }),
        n.intercept({ handler: () => e.current });
    }, []);
  return E(
    (r, i, a) => {
      if (!Am) {
        i();
        return;
      }
      (e.current = r),
        (t.current = a),
        k.navigation.addEventListener(`navigate`, n),
        i(!0),
        r.finally(() => {
          k.navigation.removeEventListener(`navigate`, n);
        });
    },
    [n]
  );
}
function wn(e) {
  return e.toLowerCase().replace(jm, `-`).replace(Mm, ``);
}
function Tn() {
  return d.useContext(Im);
}
function En() {
  var e;
  return (e = Tn().activeLocale)?.code ?? `en-US`;
}
function Dn() {
  if (!Lm) return;
  (zm = !0), performance.mark(`framer-react-event-handling-start`);
  let e = { capture: !0 },
    t = document.body;
  Lm.forEach((n) => t.addEventListener(n, Rm, e));
}
function On() {
  return (
    O(() => {
      if (!zm || !Lm) return;
      let e = { capture: !0 },
        t = document.body;
      Lm.forEach((n) => t.removeEventListener(n, Rm, e)),
        (Lm = void 0),
        performance.mark(`framer-react-event-handling-end`);
    }, []),
    null
  );
}
function kn(e) {
  let t = !1;
  return function (...n) {
    if (!t) return (t = !0), e.apply(this, n);
  };
}
function An(e, t, n) {
  try {
    performance.measure(e, t, n);
  } catch (t) {
    console.warn(`Could not measure ${e}`, t);
  }
}
function jn() {
  (ah = new ih()), ah.render.markStart();
}
function Mn() {
  p(() => {
    ah?.useInsertionEffects.markRouterStart();
  }, []),
    f(() => {
      ah?.useLayoutEffects.markRouterStart();
    }, []),
    O(() => {
      ah?.useEffects.markRouterStart();
    }, []);
}
function Nn() {
  p(() => {
    ah?.render.markEnd(), ah?.useInsertionEffects.markStart();
  }, []),
    f(() => {
      if (
        (ah?.useLayoutEffects.markStart(),
        document.visibilityState !== `visible`)
      ) {
        oh = !0;
        return;
      }
      ye.read(() => {
        ah?.browserRendering.requestAnimationFrame.markStart(),
          ah?.unattributedHydrationOverhead.measure();
      });
    }, []),
    O(() => {
      ah?.useEffects.markStart(),
        ah?.browserRendering.hasStarted ||
          (ah?.mutationEffects.measure(), ah?.useEffects.markAreSynchronous());
    }, []);
}
function Pn() {
  p(() => {
    ah?.useInsertionEffects.markEnd();
  }, []),
    f(() => {
      ah?.useLayoutEffects.markEnd(),
        !(oh || document.visibilityState !== `visible`) &&
          ye.read(() => {
            ah?.browserRendering.requestAnimationFrame.markEnd(),
              jt().then(() => {
                ah?.browserRendering.layoutStylePaint.markEnd();
              });
          });
    }, []),
    O(() => {
      ah?.useEffects.markEnd();
    }, []);
}
function Fn() {
  return Nn(), null;
}
function In() {
  return Pn(), null;
}
function Ln(e, t) {
  let n = { style: t, "data-framer-root": `` };
  return d.isValidElement(e) ? d.cloneElement(e, n) : x(e, { ...n });
}
function Rn(e) {
  if (fh !== e) {
    uh = {};
    for (let [t, { path: n }] of Object.entries(e))
      n && (uh[n] = { path: n, depth: Bn(n), routeId: t });
    (dh = Object.values(uh)),
      dh.sort(({ depth: e }, { depth: t }) => t - e),
      (fh = e);
  }
  return [uh, dh];
}
function zn(e, t, n = !0, r = []) {
  let [i, a] = Rn(e),
    o,
    s,
    c = t;
  if (r.length > 0) {
    let e = c.split(`/`).find(Boolean);
    if (
      (e &&
        ((o = r.find(({ slug: t }) => t === e)),
        o && ((s = o.id), (c = c.substring(o.slug.length + 1)))),
      !s)
    ) {
      let e = r.find(({ slug: e }) => e === ``);
      e && (s = e.id);
    }
  }
  let l = i[c];
  if (l) {
    let e = Vn(c, l.path);
    if (e.isMatch)
      return {
        routeId: l.routeId,
        localeId: s,
        pathVariables: e.pathVariables,
      };
  }
  for (let { path: e, routeId: t } of a) {
    let n = Vn(c, e);
    if (n.isMatch)
      return { routeId: t, localeId: s, pathVariables: n.pathVariables };
  }
  if (!n) throw Error(`No exact match found for path`);
  let u = i[`/`];
  if (u) return { routeId: u.routeId, localeId: s };
  let d = Object.keys(e)[0];
  if (!d) throw Error(`Router should not have undefined routes`);
  return { routeId: d, localeId: s };
}
function Bn(e) {
  let t = e.replace(/^\/|\/$/gu, ``);
  return t === `` ? 0 : t.split(`/`).length;
}
function Vn(e, t) {
  let n = [],
    r = Hn(t),
    i = r.replace(um, (e, t) => (n.push(t), `([^/]+)`)),
    a = RegExp(i + `$`),
    o = e.match(a);
  if (!o) return { isMatch: !1 };
  if (o.length === 1) return { isMatch: !0 };
  let s = {},
    c = o.slice(1);
  for (let e = 0; e < n.length; ++e) {
    let t = n[e];
    if (t === void 0) continue;
    let r = c[e],
      i = s[t];
    if (i) {
      if (i !== r) return { isMatch: !1 };
      continue;
    }
    if (r === void 0) throw Error(`Path variable values cannot be undefined`);
    s[t] = r;
  }
  return { isMatch: !0, pathVariables: s };
}
function Hn(e) {
  return e.replace(/[|\\{}()[\]^$+*?.]/gu, `\\$&`).replace(/-/gu, `\\x2d`);
}
function Un() {
  var e;
  if (`PerformanceServerTiming` in k) {
    let t = (e = performance.getEntriesByType(`navigation`)[0])?.serverTiming;
    if (!t || t.length === 0) return new URLSearchParams();
    let n = t.find((e) => e.name === `abtests`);
    return n ? new URLSearchParams(n.description) : new URLSearchParams();
  }
  return new URLSearchParams();
}
function Wn(e, t, n) {
  let r = e[n];
  if (!r) return;
  let i = r.abTestingParentId ?? n;
  if (!e[i]) return;
  let { abTestingParentId: a, ...o } = r,
    s =
      e[i].elements || r.elements
        ? { ...e[i].elements, ...r.elements }
        : void 0;
  e[i] = { ...o, elements: s, abTestingVariantId: n, abTestId: t };
}
function Gn(e, t) {
  for (let [n, r] of t) Wn(e, n, r);
}
function Kn(e) {
  var t;
  for (let n in e) (t = e[n])?.abTestingParentId && delete e[n];
}
function qn(e, t) {
  var n, r;
  if (!e[t] || !e[t].abTestingParentId) return;
  let i = e[t].abTestingParentId,
    { abTestingParentId: a, ...o } = e[t],
    s =
      (n = e[i])?.elements || o.elements
        ? { ...(r = e[i])?.elements, ...o.elements }
        : void 0;
  e[i] = { ...o, elements: s, abTestingVariantId: t };
}
function Jn(e, t) {
  var n;
  if (k === void 0) return t;
  let r = t;
  if (t) {
    qn(e, t);
    let i = (n = e[t])?.abTestingParentId;
    i && (r = i);
  }
  return Gn(e, Un()), Kn(e), r;
}
function V(e, ...t) {
  var n, r;
  if (e) return;
  let i = Error(`Assertion Error` + (t.length > 0 ? `: ` + t.join(` `) : ``));
  if (i.stack)
    try {
      let e = i.stack.split(`
`);
      (n = e[1])?.includes(`assert`)
        ? (e.splice(1, 1),
          (i.stack = e.join(`
`)))
        : (r = e[0])?.includes(`assert`) &&
          (e.splice(0, 1),
          (i.stack = e.join(`
`)));
    } catch {}
  throw i;
}
function H(e, t) {
  throw (
    t ||
    Error(e ? `Unexpected value: ${e}` : `Application entered invalid state`)
  );
}
async function Yn(e, t, n = `beforeend`) {
  let r, i;
  switch (n) {
    case `beforebegin`:
      V(
        t.parentNode,
        `Can't use 'beforebegin' with a referenceNode at the top level`
      ),
        (r = t.parentNode),
        (i = t);
      break;
    case `afterend`:
      V(
        t.parentNode,
        `Can't use 'afterend' with a referenceNode at the top level`
      ),
        (r = t.parentNode),
        (i = t.nextSibling);
      break;
    case `afterbegin`:
      (r = t), (i = t.firstChild);
      break;
    case `beforeend`:
      (r = t), (i = null);
      break;
    default:
      H(n);
  }
  let a = document.createRange();
  a.selectNodeContents(r);
  let o = a.createContextualFragment(e);
  await Xn(o, r, i);
}
async function Xn(e, t, n) {
  for (let r = e.firstChild; r; r = r.nextSibling) {
    if (r instanceof HTMLScriptElement) {
      let e = Zn(r, t, n);
      e !== void 0 && (await e);
      continue;
    }
    let e = r.cloneNode(!1);
    t.insertBefore(e, n), r.firstChild && (await Xn(r, e, null));
  }
}
function Zn(e, t, n) {
  var r;
  let i = e.cloneNode(!0);
  if (
    !e.hasAttribute(`src`) ||
    e.hasAttribute(`async`) ||
    e.hasAttribute(`defer`) ||
    (r = e.getAttribute(`type`))?.toLowerCase() === `module`
  )
    t.insertBefore(i, n);
  else return Qn(i, t, n);
}
function Qn(e, t, n) {
  return new Promise((r) => {
    (e.onload = e.onerror = r), t.insertBefore(e, n);
  });
}
function $n(e) {
  let { isInitialNavigation: t } = ct();
  O(() => {
    if (e.robots) {
      let t = document.querySelector(`meta[name="robots"]`);
      t
        ? t.setAttribute(`content`, e.robots)
        : ((t = document.createElement(`meta`)),
          t.setAttribute(`name`, `robots`),
          t.setAttribute(`content`, e.robots),
          document.head.appendChild(t));
    }
  }, [e.robots]),
    p(() => {
      var t;
      (document.title = "SANOOB P - REACT NATIVE DEVELOPER"),
        e.viewport &&
          ((t = document.querySelector(`meta[name="viewport"]`)) == null ||
            t.setAttribute(`content`, e.viewport));
    }, [e.title, e.viewport]),
    O(() => {
      if (!t) return;
      let n = document.getElementById(ph),
        r = n && n.dataset[mh] !== void 0;
      r ||
        er(
          e.customHTMLHeadStart,
          e.customHTMLHeadEnd,
          e.customHTMLBodyStart,
          e.customHTMLBodyEnd
        );
    }, []);
}
async function er(e, t, n, r) {
  let i, a, o, s;
  if (e || t) {
    let { start: n, end: r } = tr(
      document.head.childNodes,
      e ? gh : void 0,
      t ? _h : void 0
    );
    (i = n), (a = r);
  }
  if (n || r) {
    let { start: e, end: t } = tr(
      document.body.childNodes,
      n ? vh : void 0,
      r ? yh : void 0
    );
    (o = e), (s = t);
  }
  e && i && (await Yn(e, i, `beforebegin`)),
    t && a && (await Yn(t, a, `beforebegin`)),
    n && o && (await Yn(n, o, `beforebegin`)),
    r && s && (await Yn(r, s, `beforebegin`));
}
function tr(e, t, n) {
  if (!t && !n) return { start: void 0, end: void 0 };
  let r,
    i,
    a = 0,
    o = e.length - 1;
  for (; a <= o; ) {
    let s = e[a],
      c = e[o];
    if (
      (!r &&
        s?.nodeType === Node.COMMENT_NODE &&
        t &&
        `<!--${s.nodeValue}-->` === t &&
        ((r = s), !n)) ||
      (!i &&
        c?.nodeType === Node.COMMENT_NODE &&
        n &&
        `<!--${c.nodeValue}-->` === n &&
        ((i = c), !t)) ||
      (r && i)
    )
      break;
    a++, o--;
  }
  return { start: r, end: i };
}
function nr(e, ...t) {
  bh.has(e) || (bh.add(e), console.warn(e, ...t));
}
function rr(e, t, n) {
  let r = n ? `, use ${n} instead` : ``,
    i = `Deprecation warning: ${e} will be removed in version ${t}${r}.`;
  nr(i);
}
function ir(e) {
  return (
    typeof e == `object` &&
    !!e &&
    Ch in e &&
    e[Ch] instanceof Function &&
    wh in e &&
    e[wh] instanceof Function
  );
}
function ar(e, t) {
  return {
    interpolate(e, n) {
      let r = e.get(),
        i = n.get(),
        a = Sh(r);
      return (e) => {
        let n = t.interpolate(r, i)(e);
        return a.set(n), a;
      };
    },
    difference(e, n) {
      let r = e.get();
      return t.difference(r, n.get());
    },
  };
}
function or(e, t) {
  let n = Math.round(Math.abs(t)),
    r = 10 ** n;
  return Math.round(e * r) / r;
}
function sr(e, t) {
  return t === 0
    ? Math.round(e)
    : ((t -= t | 0), t < 0 && (t = 1 - t), Math.round(e - t) + t);
}
function cr(e) {
  return Math.round(e * 2) / 2;
}
function lr(e, t) {
  return { x: e, y: t };
}
function ur(e, t, n, r = !1) {
  let [i, a] = t,
    [o, s] = n,
    c = a - i;
  if (c === 0) return (s + o) / 2;
  let l = s - o;
  if (l === 0) return o;
  let u = o + ((e - i) / c) * l;
  if (r === !0)
    if (o < s) {
      if (u < o) return o;
      if (u > s) return s;
    } else {
      if (u > o) return o;
      if (u < s) return s;
    }
  return u;
}
function dr(e) {
  return !Number.isNaN(e) && Number.isFinite(e);
}
function fr(e) {
  let t = pr(e);
  return t === void 0 ? 0 : e.includes(`%`) ? t / 100 : t;
}
function pr(e) {
  let t = /\d?\.?\d+/u.exec(e);
  return t ? Number(t[0]) : void 0;
}
function mr(e, t, n) {
  return (
    (Oh.rgb_r = e / 255),
    (Oh.rgb_g = t / 255),
    (Oh.rgb_b = n / 255),
    Oh.rgbToHsluv(),
    { h: Oh.hsluv_h, s: Oh.hsluv_s, l: Oh.hsluv_l }
  );
}
function hr(e, t, n, r = 1) {
  return (
    (Oh.hsluv_h = e),
    (Oh.hsluv_s = t),
    (Oh.hsluv_l = n),
    Oh.hsluvToRgb(),
    { r: Oh.rgb_r * 255, g: Oh.rgb_g * 255, b: Oh.rgb_b * 255, a: r }
  );
}
function gr(e, t, n, r) {
  let i = Math.round(e),
    a = Math.round(t * 100),
    o = Math.round(n * 100);
  return r === void 0 || r === 1
    ? `hsv(` + i + `, ` + a + `%, ` + o + `%)`
    : `hsva(` + i + `, ` + a + `%, ` + o + `%, ` + r + `)`;
}
function _r(e, t, n) {
  return {
    r: dr(e) ? wr(e, 255) * 255 : 0,
    g: dr(t) ? wr(t, 255) * 255 : 0,
    b: dr(n) ? wr(n, 255) * 255 : 0,
  };
}
function vr(e, t, n, r) {
  let i = [
    Dr(Math.round(e).toString(16)),
    Dr(Math.round(t).toString(16)),
    Dr(Math.round(n).toString(16)),
  ];
  return r &&
    i[0].charAt(0) === i[0].charAt(1) &&
    i[1].charAt(0) === i[1].charAt(1) &&
    i[2].charAt(0) === i[2].charAt(1)
    ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0)
    : i.join(``);
}
function yr(e, t, n) {
  let r,
    i,
    a = wr(e, 255),
    o = wr(t, 255),
    s = wr(n, 255),
    c = Math.max(a, o, s),
    l = Math.min(a, o, s),
    u = (i = r = (c + l) / 2);
  if (c === l) u = i = 0;
  else {
    let e = c - l;
    switch (((i = r > 0.5 ? e / (2 - c - l) : e / (c + l)), c)) {
      case a:
        u = (o - s) / e + (o < s ? 6 : 0);
        break;
      case o:
        u = (s - a) / e + 2;
        break;
      case s:
        u = (a - o) / e + 4;
        break;
    }
    u /= 6;
  }
  return { h: u * 360, s: i, l: r };
}
function br(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && --n,
    n < 1 / 6
      ? e + (t - e) * 6 * n
      : n < 1 / 2
      ? t
      : n < 2 / 3
      ? e + (t - e) * (2 / 3 - n) * 6
      : e
  );
}
function xr(e, t, n) {
  let r, i, a;
  if (
    ((e = wr(e, 360)), (t = wr(t * 100, 100)), (n = wr(n * 100, 100)), t === 0)
  )
    r = i = a = n;
  else {
    let o = n < 0.5 ? n * (1 + t) : n + t - n * t,
      s = 2 * n - o;
    (r = br(s, o, e + 1 / 3)), (i = br(s, o, e)), (a = br(s, o, e - 1 / 3));
  }
  return { r: r * 255, g: i * 255, b: a * 255 };
}
function Sr(e, t, n) {
  (e = wr(e, 255)), (t = wr(t, 255)), (n = wr(n, 255));
  let r = Math.max(e, t, n),
    i = Math.min(e, t, n),
    a = r - i,
    o = 0,
    s = r === 0 ? 0 : a / r,
    c = r;
  if (r === i) o = 0;
  else {
    switch (r) {
      case e:
        o = (t - n) / a + (t < n ? 6 : 0);
        break;
      case t:
        o = (n - e) / a + 2;
        break;
      case n:
        o = (e - t) / a + 4;
        break;
    }
    o /= 6;
  }
  return { h: o, s, v: c };
}
function Cr(e, t, n) {
  (e = wr(e, 360) * 6), (t = wr(t * 100, 100)), (n = wr(n * 100, 100));
  let r = Math.floor(e),
    i = e - r,
    a = n * (1 - t),
    o = n * (1 - i * t),
    s = n * (1 - (1 - i) * t),
    c = r % 6,
    l = [n, o, a, a, s, n][c],
    u = [s, n, n, o, a, a][c],
    d = [a, a, s, n, n, o][c];
  return { r: l * 255, g: u * 255, b: d * 255 };
}
function wr(e, t) {
  let n, r;
  if (((n = typeof t == `string` ? parseFloat(t) : t), typeof e == `string`)) {
    Tr(e) && (e = `100%`);
    let t = Er(e);
    (r = Math.min(n, Math.max(0, parseFloat(e)))),
      t && (r = Math.floor(r * n) / 100);
  } else r = e;
  return Math.abs(r - n) < 1e-6 ? 1 : (r % n) / n;
}
function Tr(e) {
  return typeof e == `string` && e.includes(`.`) && parseFloat(e) === 1;
}
function Er(e) {
  return typeof e == `string` && e.includes(`%`);
}
function Dr(e) {
  return e.length === 1 ? `0` + e : `` + e;
}
function Or(e) {
  if (e.includes(`gradient(`) || e.includes(`var(`)) return !1;
  let t = /^[\s,#]+/u,
    n = e.replace(t, ``).trimEnd().toLowerCase(),
    r = Eh[n];
  if ((r && (n = r), n === `transparent`))
    return { r: 0, g: 0, b: 0, a: 0, format: `name` };
  let i;
  return (i = kh.rgb.exec(n))
    ? {
        r: parseInt(i[1] ?? ``),
        g: parseInt(i[2] ?? ``),
        b: parseInt(i[3] ?? ``),
        a: 1,
        format: `rgb`,
      }
    : (i = kh.rgba.exec(n))
    ? {
        r: parseInt(i[1] ?? ``),
        g: parseInt(i[2] ?? ``),
        b: parseInt(i[3] ?? ``),
        a: parseFloat(i[4] ?? ``),
        format: `rgb`,
      }
    : (i = kh.hsl.exec(n))
    ? {
        h: parseInt(i[1] ?? ``),
        s: fr(i[2] ?? ``),
        l: fr(i[3] ?? ``),
        a: 1,
        format: `hsl`,
      }
    : (i = kh.hsla.exec(n))
    ? {
        h: parseInt(i[1] ?? ``),
        s: fr(i[2] ?? ``),
        l: fr(i[3] ?? ``),
        a: parseFloat(i[4] ?? ``),
        format: `hsl`,
      }
    : (i = kh.hsv.exec(n))
    ? {
        h: parseInt(i[1] ?? ``),
        s: fr(i[2] ?? ``),
        v: fr(i[3] ?? ``),
        a: 1,
        format: `hsv`,
      }
    : (i = kh.hsva.exec(n))
    ? {
        h: parseInt(i[1] ?? ``),
        s: fr(i[2] ?? ``),
        v: fr(i[3] ?? ``),
        a: parseFloat(i[4] ?? ``),
        format: `hsv`,
      }
    : (i = kh.hex8.exec(n))
    ? {
        r: kr(i[1] ?? ``),
        g: kr(i[2] ?? ``),
        b: kr(i[3] ?? ``),
        a: Ar(i[4] ?? ``),
        format: r ? `name` : `hex`,
      }
    : (i = kh.hex6.exec(n))
    ? {
        r: kr(i[1] ?? ``),
        g: kr(i[2] ?? ``),
        b: kr(i[3] ?? ``),
        a: 1,
        format: r ? `name` : `hex`,
      }
    : (i = kh.hex4.exec(n))
    ? {
        r: kr(`${i[1]}${i[1]}`),
        g: kr(`${i[2]}${i[2]}`),
        b: kr(`${i[3]}${i[3]}`),
        a: Ar(i[4] + `` + i[4]),
        format: r ? `name` : `hex`,
      }
    : (i = kh.hex3.exec(n))
    ? {
        r: kr(`${i[1]}${i[1]}`),
        g: kr(`${i[2]}${i[2]}`),
        b: kr(`${i[3]}${i[3]}`),
        a: 1,
        format: r ? `name` : `hex`,
      }
    : !1;
}
function kr(e) {
  return parseInt(e, 16);
}
function Ar(e) {
  return kr(e) / 255;
}
function jr(e) {
  let t = Ah.exec(e);
  if (!t) return null;
  let { r: n = `0`, g: r = `0`, b: i = `0`, a } = t.groups ?? {};
  return {
    r: parseFloat(n),
    g: parseFloat(r),
    b: parseFloat(i),
    a: a ? parseFloat(a) : 1,
  };
}
function Mr(e = 0) {
  let t = Math.abs(e);
  return t <= 0.04045
    ? e / 12.92
    : (Math.sign(e) || 1) * ((t + 0.055) / 1.055) ** 2.4;
}
function Nr({ r: e, g: t, b: n, a: r }) {
  return { r: Mr(e), g: Mr(t), b: Mr(n), a: r };
}
function Pr(e = 0) {
  let t = Math.abs(e);
  return t > 0.0031308
    ? (Math.sign(e) || 1) * (1.055 * t ** (1 / 2.4) - 0.055)
    : e * 12.92;
}
function Fr({ r: e, g: t, b: n, a: r }) {
  return { r: Pr(e), g: Pr(t), b: Pr(n), a: r };
}
function Ir({ r: e, g: t, b: n, a: r }) {
  let i = Math.max(e, t, n),
    a = Math.min(e, t, n),
    o = { h: 0, s: i === 0 ? 0 : 1 - a / i, v: i, a: r };
  return (
    i - a !== 0 &&
      (o.h =
        (i === e
          ? (t - n) / (i - a) + (t < n ? 6 : 0)
          : i === t
          ? (n - e) / (i - a) + 2
          : (e - t) / (i - a) + 4) * 60),
    o
  );
}
function Lr(e) {
  return (e %= 360) < 0 ? e + 360 : e;
}
function Rr({ h: e = 0, s: t = 0, v: n = 0, a: r = 1 }) {
  let i = Lr(e),
    a = Math.abs(((i / 60) % 2) - 1);
  switch (Math.floor(i / 60)) {
    case 0:
      return { r: n, g: n * (1 - t * a), b: n * (1 - t), a: r };
    case 1:
      return { r: n * (1 - t * a), g: n, b: n * (1 - t), a: r };
    case 2:
      return { r: n * (1 - t), g: n, b: n * (1 - t * a), a: r };
    case 3:
      return { r: n * (1 - t), g: n * (1 - t * a), b: n, a: r };
    case 4:
      return { r: n * (1 - t * a), g: n * (1 - t), b: n, a: r };
    case 5:
      return { r: n, g: n * (1 - t), b: n * (1 - t * a), a: r };
    default:
      return { r: n * (1 - t), g: n * (1 - t), b: n * (1 - t), a: r };
  }
}
function zr(e) {
  return Ph(Nh(e));
}
function Br(e) {
  return Mh(jh(e));
}
function Vr(e, t, n, r = 1) {
  let i;
  if (
    typeof e == `number` &&
    !Number.isNaN(e) &&
    typeof t == `number` &&
    !Number.isNaN(t) &&
    typeof n == `number` &&
    !Number.isNaN(n)
  ) {
    let a = e,
      o = t,
      s = n,
      c = r;
    i = Wr({ r: a, g: o, b: s, a: c });
  } else
    typeof e == `string`
      ? (i = Hr(e))
      : typeof e == `object` &&
        (i =
          e.hasOwnProperty(`r`) &&
          e.hasOwnProperty(`g`) &&
          e.hasOwnProperty(`b`)
            ? Wr(e)
            : Gr(e));
  return i;
}
function Hr(e) {
  let t = Or(e);
  if (t) return t.format === `hsl` ? Gr(t) : t.format === `hsv` ? Ur(t) : Wr(t);
}
function Ur(e) {
  let t = Cr(e.h, e.s, e.v),
    n = yr(t.r, t.g, t.b);
  return { ...n, ...t, format: `rgb`, a: e.a === void 0 ? 1 : Kr(e.a) };
}
function Wr(e) {
  let t = _r(e.r, e.g, e.b),
    n = yr(t.r, t.g, t.b);
  return { ...n, ...t, format: `rgb`, a: e.a === void 0 ? 1 : Kr(e.a) };
}
function Gr(e) {
  let t,
    n,
    r,
    i = { r: 0, g: 0, b: 0 },
    a = { h: 0, s: 0, l: 0 };
  return (
    (t = dr(e.h) ? e.h : 0),
    (t = (t + 360) % 360),
    (n = dr(e.s) ? e.s : 1),
    typeof e.s == `string` && (n = pr(e.s)),
    (r = dr(e.l) ? e.l : 0.5),
    typeof e.l == `string` && (r = pr(e.l)),
    (i = xr(t, n, r)),
    (a = { h: t, s: n, l: r }),
    { ...i, ...a, a: e.a === void 0 ? 1 : e.a, format: `hsl` }
  );
}
function Kr(e) {
  return (
    (e = parseFloat(e)),
    e < 0 && (e = 0),
    (Number.isNaN(e) || e > 1) && (e = 1),
    e
  );
}
function qr({ children: e }) {
  let t = w(Jh);
  if (t.top) return x(y, { children: e });
  let n = S({
      byId: {},
      byName: {},
      byLastId: {},
      byPossibleId: {},
      byLastName: {},
      byLayoutId: {},
      count: { byId: {}, byName: {} },
    }),
    r = S({
      byId: {},
      byName: {},
      byLastId: {},
      byPossibleId: {},
      byLastName: {},
      byLayoutId: {},
    }),
    i = S(new Set()).current,
    a = E(({ id: e, name: t, duplicatedFrom: a }) => {
      if (!e) return null;
      let o = t ? `byName` : `byId`,
        s = n.current[o][e];
      if (s) return s;
      let c = t || e;
      if (
        !a &&
        !i.has(c) &&
        (!n.current.byLayoutId[c] || n.current.byLayoutId[c] === c)
      )
        return (
          n.current.count[o][c] === void 0 &&
            ((n.current.count[o][c] = 0),
            (n.current.byLayoutId[c] = c),
            (r.current[o][e] = c)),
          i.add(c),
          c
        );
      let l;
      if (a?.length)
        for (let s = a.length - 1; s >= 0; s--) {
          let c = a[s];
          V(!!c, `duplicatedId must be defined`);
          let u = n.current[o][c],
            d = n.current.byLastId[c];
          if (d && !l) {
            let e = n.current.byLayoutId[d],
              r = !e || e === t;
            d && !i.has(d) && (!t || r) && (l = [d, c]);
          }
          let f = u ? n.current.byLayoutId[u] : void 0,
            p = !f || f === t;
          if (u && !i.has(u) && (!t || p))
            return (
              (r.current[o][e] = u), (r.current.byLastId[c] = u), i.add(u), u
            );
        }
      let u = n.current.byLastId[e];
      if (u && !i.has(u)) return i.add(u), (r.current.byId[e] = u), u;
      if (l) {
        let [t, n] = l;
        return (r.current[o][e] = t), (r.current.byLastId[n] = t), i.add(t), t;
      }
      let d = n.current.byPossibleId[e];
      if (d && !i.has(d)) return i.add(d), (r.current.byId[e] = d), d;
      let f = a?.[0],
        p = t || f || e,
        m = (n.current.count[o][p] ?? -1) + 1,
        { layoutId: h, value: g } = Jr(p, m, i);
      if (
        ((n.current.count[o][p] = g), (r.current[o][e] = h), a?.length && !t)
      ) {
        let e = a[a.length - 1];
        if ((e && (r.current.byLastId[e] = h), a.length > 1))
          for (let e = 0; e < a.length - 1; e++) {
            let t = a[e];
            t !== void 0 &&
              (r.current.byPossibleId[t] || (r.current.byPossibleId[t] = h));
          }
      }
      return (r.current.byLayoutId[h] = c), i.add(h), h;
    }, []),
    o = E(() => {
      (n.current = {
        byId: { ...n.current.byId, ...r.current.byId },
        byLastId: { ...n.current.byLastId, ...r.current.byLastId },
        byPossibleId: { ...n.current.byPossibleId, ...r.current.byPossibleId },
        byName: { ...n.current.byName, ...r.current.byName },
        byLastName: { ...n.current.byLastName, ...r.current.byLastName },
        byLayoutId: { ...n.current.byLayoutId, ...r.current.byLayoutId },
        count: { ...n.current.count, byName: {} },
      }),
        (r.current = {
          byId: {},
          byName: {},
          byLastId: {},
          byPossibleId: {},
          byLastName: {},
          byLayoutId: {},
        }),
        i.clear();
    }, []),
    s = S({
      getLayoutId: a,
      persistLayoutIdCache: o,
      top: !0,
      enabled: !0,
    }).current;
  return x(Jh.Provider, { value: s, children: e });
}
function Jr(e, t, n) {
  let r = t,
    i = r ? `${e}-${r}` : e;
  for (; n.has(i); ) r++, (i = `${e}-${r}`);
  return { layoutId: i, value: r };
}
function Yr({ enabled: e = !0, ...t }) {
  let n = w(Jh),
    r = T(() => ({ ...n, enabled: e }), [e]);
  return x(Jh.Provider, { ...t, value: r });
}
function Xr(e) {
  let t = S(null);
  return t.current === null && (t.current = e()), t.current;
}
function Zr(e) {
  let { error: t, file: n } = e,
    r = n ? `Error in ${Qr(n)}` : `Error`,
    i = t instanceof Error ? t.message : `` + t;
  return D(`div`, {
    style: Xh,
    children: [
      x(`div`, { className: `text`, style: Qh, children: r }),
      i && x(`div`, { className: `text`, style: $h, children: i }),
    ],
  });
}
function Qr(e) {
  return e.startsWith(`./`) ? e.replace(`./`, ``) : e;
}
function U(e) {
  return Number.isFinite(e);
}
function $r(e) {
  return !e || (!Object.keys(e).length && e.constructor === Object);
}
function ei(e) {
  return typeof e != `string` && typeof e != `number`;
}
function ti(e) {
  return e != null && typeof e != `boolean` && !$r(e);
}
function ni(e) {
  return e * (Math.PI / 180);
}
function ri(e) {
  return xt(e) ? !1 : e === 2 || e === 5;
}
function ii(e) {
  if (typeof e == `string`) {
    let t = e.trim();
    if (t === `auto`) return 2;
    if (t.endsWith(`fr`)) return 3;
    if (t.endsWith(`%`)) return 1;
    if (t.endsWith(`vw`) || t.endsWith(`vh`)) return 4;
  }
  return 0;
}
function ai(e, t, n, r) {
  if (typeof t == `string`) {
    if (t.endsWith(`%`) && n)
      switch (e) {
        case `maxWidth`:
        case `minWidth`:
          return (parseFloat(t) / 100) * n.width;
        case `maxHeight`:
        case `minHeight`:
          return (parseFloat(t) / 100) * n.height;
        default:
          break;
      }
    if (t.endsWith(`vh`)) {
      if (!r) return oi(e);
      switch (e) {
        case `maxWidth`:
        case `minWidth`:
          return (parseFloat(t) / 100) * r.width;
        case `maxHeight`:
        case `minHeight`:
          return (parseFloat(t) / 100) * r.height;
        default:
          break;
      }
    }
    return parseFloat(t);
  }
  return t;
}
function oi(e) {
  switch (e) {
    case `minWidth`:
    case `minHeight`:
      return -1 / 0;
    case `maxWidth`:
    case `maxHeight`:
      return 1 / 0;
    default:
      H(e, `unknown constraint key`);
  }
}
function si(e, t, n, r) {
  return (
    t.minHeight && (e = Math.max(ai(`minHeight`, t.minHeight, n, r), e)),
    t.maxHeight && (e = Math.min(ai(`maxHeight`, t.maxHeight, n, r), e)),
    e
  );
}
function ci(e, t, n, r) {
  return (
    t.minWidth && (e = Math.max(ai(`minWidth`, t.minWidth, n, r), e)),
    t.maxWidth && (e = Math.min(ai(`maxWidth`, t.maxWidth, n, r), e)),
    e
  );
}
function li(e, t, n, r, i) {
  let a = ci(U(e) ? e : rg, n, r, i),
    o = si(U(t) ? t : ig, n, r, i);
  return (
    U(n.aspectRatio) &&
      n.aspectRatio > 0 &&
      (U(n.left) && U(n.right)
        ? (o = a / n.aspectRatio)
        : (U(n.top) && U(n.bottom)) || n.widthType === 0
        ? (a = o * n.aspectRatio)
        : (o = a / n.aspectRatio)),
    { width: a, height: o }
  );
}
function ui(e, t) {
  return !U(e) || !U(t) ? null : e + t;
}
function di(e) {
  return (
    typeof e.right == `string` ||
    typeof e.bottom == `string` ||
    (typeof e.left == `string` && (!e.center || e.center === `y`)) ||
    (typeof e.top == `string` && (!e.center || e.center === `x`))
  );
}
function fi(e) {
  return !e._constraints || di(e) ? !1 : e._constraints.enabled;
}
function pi(e) {
  let { size: t } = e,
    { width: n, height: r } = e;
  return (
    U(t) && (n === void 0 && (n = t), r === void 0 && (r = t)),
    U(n) && U(r) ? { width: n, height: r } : null
  );
}
function mi(e) {
  let t = pi(e);
  if (t === null) return null;
  let { left: n, top: r } = e;
  return U(n) && U(r) ? { x: n, y: r, ...t } : null;
}
function hi(e, t, n = !0) {
  if (e.positionFixed || e.positionAbsolute) return null;
  let r = t === 1 || t === 2;
  if (!fi(e) || r) return mi(e);
  let i = gi(e),
    a = _i(t),
    o = a ? { sizing: a, positioning: a, viewport: null } : null;
  return ng.toRect(i, o, null, n, null);
}
function gi(e) {
  let {
      left: t,
      right: n,
      top: r,
      bottom: i,
      center: a,
      _constraints: o,
      size: s,
    } = e,
    { width: c, height: l } = e;
  c === void 0 && (c = s), l === void 0 && (l = s);
  let { aspectRatio: u, autoSize: d } = o,
    f = tg.quickfix({
      left: U(t),
      right: U(n),
      top: U(r),
      bottom: U(i),
      widthType: ii(c),
      heightType: ii(l),
      aspectRatio: u || null,
      fixedSize: d === !0,
    }),
    p = null,
    m = null,
    h = 0,
    g = 0;
  if (f.widthType !== 0 && typeof c == `string`) {
    let e = parseFloat(c);
    c.endsWith(`fr`)
      ? ((h = 3), (p = e))
      : c === `auto`
      ? (h = 2)
      : ((h = 1), (p = e / 100));
  } else c !== void 0 && typeof c != `string` && (p = c);
  if (f.heightType !== 0 && typeof l == `string`) {
    let e = parseFloat(l);
    l.endsWith(`fr`)
      ? ((g = 3), (m = e))
      : l === `auto`
      ? (g = 2)
      : ((g = 1), (m = parseFloat(l) / 100));
  } else l !== void 0 && typeof l != `string` && (m = l);
  let _ = 0.5,
    v = 0.5;
  return (
    (a === !0 || a === `x`) &&
      ((f.left = !1), typeof t == `string` && (_ = parseFloat(t) / 100)),
    (a === !0 || a === `y`) &&
      ((f.top = !1), typeof r == `string` && (v = parseFloat(r) / 100)),
    {
      left: f.left ? t : null,
      right: f.right ? n : null,
      top: f.top ? r : null,
      bottom: f.bottom ? i : null,
      widthType: h,
      heightType: g,
      width: p,
      height: m,
      aspectRatio: f.aspectRatio || null,
      centerAnchorX: _,
      centerAnchorY: v,
      minHeight: e.minHeight,
      maxHeight: e.maxHeight,
      minWidth: e.minWidth,
      maxWidth: e.maxWidth,
    }
  );
}
function _i(e) {
  return e === 0 || e === 1 || e === 2 ? null : e;
}
function vi() {
  return d.useContext(ag).parentSize;
}
function yi(e) {
  return typeof e == `object`;
}
function bi(e) {
  return yi(e) ? e.width : e;
}
function xi(e) {
  return yi(e) ? e.height : e;
}
function Si(e, t) {
  return x(og, { parentSize: t, children: e });
}
function Ci(e) {
  let t = vi(),
    n = hi(e, t, !0);
  return n;
}
function wi({ width: e, height: t }) {
  return (
    e === `auto` || e === `min-content` || t === `auto` || t === `min-content`
  );
}
function Ti() {
  if (cg !== void 0) return cg;
  let e = document.createElement(`div`);
  Object.assign(e.style, {
    position: `absolute`,
    display: `flex`,
    flexDirection: `column`,
    rowGap: `1px`,
  }),
    e.appendChild(document.createElement(`div`)),
    e.appendChild(document.createElement(`div`)),
    document.body.appendChild(e);
  let t = e.scrollHeight === 1;
  return e.parentNode && e.parentNode.removeChild(e), (cg = t), t;
}
function Ei() {
  ug || ((ug = !0), !Ti() && document.body.classList.add(lg));
}
function Di(e) {
  return typeof e == `number`
    ? e
    : e.startsWith(`--`)
    ? W.variable(e)
    : e === ``
    ? `""`
    : e;
}
function W(e, t) {
  let n = ` `;
  for (let e in t) {
    let r = t[e];
    n += `${e.replace(/([A-Z])/gu, `-$1`).toLowerCase()}: ${Di(r)}; `;
  }
  return e + ` {` + n + `}`;
}
function Oi(e) {
  return e !== Lg && e !== Rg;
}
function ki(e) {
  for (let t in e) {
    if (!Oi(t)) continue;
    if (e?.[t] === !0) return !0;
  }
  return !1;
}
function Ai(e, t, n, r, i) {
  let a = d.useRef(null),
    o = d.useCallback(
      (e) => {
        t &&
          a.current !== !1 &&
          ((a.current = !1),
          e.currentTarget.setCustomValidity(` `),
          e.currentTarget.reportValidity(),
          t(e));
      },
      [t]
    ),
    s = d.useCallback(
      (r) => {
        if ((n?.(r), !t && !e)) return;
        let i = r.target.validity;
        a.current === !1 &&
          !ki(i) &&
          (r.currentTarget.setCustomValidity(``),
          r.target.reportValidity(),
          (a.current = !0),
          e?.());
      },
      [t, e, n]
    ),
    c = d.useCallback(
      (e) => {
        if (!t) {
          r?.(e);
          return;
        }
        if (a.current === !1) return;
        let n = e.currentTarget.validity;
        if (ki(n)) {
          o(e);
          return;
        }
        r?.(e);
      },
      [o, r, t]
    );
  return d.useMemo(
    () => ({ onInvalid: o, onChange: s, onBlur: c, onFocus: i }),
    [o, s, c, i]
  );
}
function ji(e, t) {
  return W.variable(...e.flatMap((e) => [`${e}-rgb`, e]), t);
}
function Mi(e, t, n = Ug) {
  if (!(!e || n.has(e) || typeof document > `u`)) {
    if ((n.add(e), !t)) {
      if (!Wg) {
        let e = document.createElement(`style`);
        if (
          (e.setAttribute(`type`, `text/css`),
          e.setAttribute(`data-framer-css`, `true`),
          !document.head)
        ) {
          console.warn(
            `not injecting CSS: the document is missing a <head> element`
          );
          return;
        }
        if ((document.head.appendChild(e), e.sheet)) Wg = e.sheet;
        else {
          console.warn(
            `not injecting CSS: injected <style> element does not have a sheet`,
            e
          );
          return;
        }
      }
      t = Wg;
    }
    try {
      t.insertRule(e, t.cssRules.length);
    } catch {}
  }
}
function Ni() {
  if (k_) return;
  k_ = !0;
  let e = Y.current() === Y.preview ? O_ : D_;
  for (let t of e) Mi(t, void 0, void 0);
}
function Pi(e) {
  return B(e) || vt(e);
}
function Fi(e) {
  return !!e && A_ in e && e[A_] === !0;
}
function Ii(e) {
  try {
    switch (e.type) {
      case `string`:
      case `collectionreference`:
      case `multicollectionreference`:
      case `color`:
      case `date`:
      case `link`:
      case `boxshadow`:
      case `padding`:
      case `borderradius`:
      case `gap`:
        return R(e.defaultValue) ? e.defaultValue : void 0;
      case `boolean`:
        return yt(e.defaultValue) ? e.defaultValue : void 0;
      case `enum`:
        return xt(e.defaultValue)
          ? void 0
          : e.options.includes(e.defaultValue)
          ? e.defaultValue
          : void 0;
      case `fusednumber`:
      case `number`:
        return z(e.defaultValue) ? e.defaultValue : void 0;
      case `transition`:
        return B(e.defaultValue) ? e.defaultValue : void 0;
      case `border`:
        return B(e.defaultValue) ? e.defaultValue : void 0;
      case `font`:
        return B(e.defaultValue) ? e.defaultValue : void 0;
      case `linkrelvalues`:
        return bt(e.defaultValue) ? e.defaultValue : void 0;
      case `object`: {
        let t = B(e.defaultValue) ? e.defaultValue : {};
        return B(e.controls) && Li(t, e.controls), t;
      }
      case `array`:
        return bt(e.defaultValue) ? e.defaultValue : void 0;
      case `file`:
      case `image`:
      case `richtext`:
      case `pagescope`:
      case `eventhandler`:
      case `segmentedenum`:
      case `responsiveimage`:
      case `componentinstance`:
      case `slot`:
      case `scrollsectionref`:
      case `customcursor`:
      case `cursor`:
      case `trackingid`:
      case `vectorsetitem`:
        return;
      default:
        return;
    }
  } catch {
    return;
  }
}
function Li(e, t) {
  for (let n in t) {
    let r = t[n];
    if (!r) continue;
    let i = e[n];
    if (!xt(i) || Fi(r)) continue;
    let a = Ii(r);
    if (xt(a)) continue;
    e[n] = a;
  }
}
function Ri(e) {
  if (B(e.defaultProps)) return e.defaultProps;
  let t = {};
  return (e.defaultProps = t), t;
}
function zi(e, t) {
  if (!Pi(e)) return;
  let n = Ri(e);
  Li(n, t);
}
function Bi(e, t) {
  Object.assign(e, { propertyControls: t }), zi(e, t);
}
function Vi(e) {
  return e.propertyControls;
}
function Hi() {
  let e = Y.current();
  return e === Y.canvas || e === Y.export;
}
function Ui() {
  let [e] = j(() => Hi());
  return e;
}
function Wi(e) {
  let t = Object.create(Object.prototype);
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
function Gi() {
  return {
    backgroundRepeat: `repeat`,
    backgroundPosition: `left top`,
    backgroundSize: `64px auto`,
    backgroundImage: Et(z_.imagePlaceholderSvg),
  };
}
function Ki(e) {
  switch (e) {
    case `fit`:
      return `contain`;
    case `stretch`:
      return `fill`;
    default:
      return `cover`;
  }
}
function qi(e, t) {
  let n = e ?? `center`,
    r = t ?? `center`;
  return n === `center` && r === `center` ? `center` : n + ` ` + r;
}
function Ji(e) {
  return {
    display: `block`,
    width: `100%`,
    height: `100%`,
    borderRadius: `inherit`,
    objectPosition: qi(e.positionX, e.positionY),
    objectFit: Ki(e.fit),
  };
}
function Yi({
  image: e,
  containerSize: t,
  nodeId: n,
  alt: r,
  draggable: i,
  syncDecoding: a,
}) {
  let o = z_.useImageSource(e, t, n),
    s = Ji(e),
    c = d.useRef(null);
  return x(`img`, {
    ref: c,
    decoding: a ? `sync` : `async`,
    fetchpriority: e.fetchPriority,
    loading: e.loading,
    width: e.pixelWidth,
    height: e.pixelHeight,
    sizes: e.sizes,
    srcSet: e.srcSet,
    src: o,
    alt: r ?? e.alt ?? ``,
    style: s,
    draggable: i,
  });
}
function Xi({ image: e, containerSize: t, nodeId: n }) {
  let r = d.useRef(null),
    i = z_.useImageElement(e, t, n),
    a = Ji(e);
  return (
    d.useLayoutEffect(() => {
      let e = r.current;
      if (e !== null)
        return (
          e.appendChild(i),
          () => {
            e.removeChild(i);
          }
        );
    }, [i]),
    Object.assign(i.style, a),
    x(`div`, {
      ref: r,
      style: { display: `contents`, borderRadius: `inherit` },
    })
  );
}
function Zi({ nodeId: e, image: t, containerSize: n }) {
  let r = d.useRef(null),
    i = z_.useImageSource(t, n, e);
  return (
    d.useLayoutEffect(() => {
      let n = r.current;
      if (n === null) return;
      let a = Ji(t);
      z_.renderOptimizedCanvasImage(n, i, a, e);
    }, [e, t, i]),
    x(`div`, {
      ref: r,
      style: { display: `contents`, borderRadius: `inherit` },
    })
  );
}
function Qi({ layoutId: e, image: t, ...n }) {
  let { motionDivToDivBackgroundImage: r } = H_();
  e && (e += `-background`);
  let i = null,
    a = !!e,
    o = null;
  if (R(t.src))
    if (t.fit === `tile` && t.pixelWidth && t.pixelHeight) {
      let e = z(t.backgroundSize) ? t.backgroundSize : 1,
        n = {
          width: Math.round(e * t.pixelWidth),
          height: Math.round(e * t.pixelHeight),
        },
        r = cr(e * (t.pixelWidth / 2)),
        s = z_.useImageSource(t, n);
      (i = {
        ...U_,
        backgroundImage: `url(${s})`,
        backgroundRepeat: `repeat`,
        backgroundPosition: qi(t.positionX, t.positionY),
        opacity: void 0,
        border: 0,
        backgroundSize: `${r}px auto`,
      }),
        (o = null),
        (a = !0);
    } else
      o =
        Y.current() === Y.canvas
          ? z_.canRenderOptimizedCanvasImage(z_.useImageSource(t))
            ? x(Zi, { image: t, ...n })
            : x(Xi, { image: t, ...n })
          : x(Yi, { image: t, syncDecoding: Y.current() === Y.export, ...n });
  let s = o ? U_ : i ?? { ...U_, ...Gi() };
  return a || !r
    ? x(Ee.div, {
        layoutId: e,
        style: s,
        "data-framer-background-image-wrapper": !0,
        children: o,
      })
    : x(`div`, {
        style: s,
        "data-framer-background-image-wrapper": !0,
        children: o,
      });
}
function $i(e, t, n = !0) {
  let { borderWidth: r, borderStyle: i, borderColor: a } = e;
  if (!r) return;
  let o, s, c, l;
  if (
    (typeof r == `number`
      ? (o = s = c = l = r)
      : ((o = r.top || 0),
        (s = r.bottom || 0),
        (c = r.left || 0),
        (l = r.right || 0)),
    !(o === 0 && s === 0 && c === 0 && l === 0))
  ) {
    if (n && o === s && o === c && o === l) {
      t.border = `${o}px ${i} ${a}`;
      return;
    }
    (t.borderStyle = e.borderStyle),
      (t.borderColor = e.borderColor),
      (t.borderTopWidth = `${o}px`),
      (t.borderBottomWidth = `${s}px`),
      (t.borderLeftWidth = `${c}px`),
      (t.borderRightWidth = `${l}px`);
  }
}
function ea(e) {
  let t = e.layoutId ? `${e.layoutId}-border` : void 0;
  if (!e.borderWidth) return null;
  let n = {
    position: `absolute`,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    borderRadius: `inherit`,
    pointerEvents: `none`,
  };
  return e.border
    ? ((n.border = e.border), x(Ee.div, { style: n }))
    : ($i(e, n, !1),
      x(Ee.div, { "data-frame-border": !0, style: n, layoutId: t }));
}
function ta(e, t) {
  let { _forwardedOverrideId: n, _forwardedOverrides: r, id: i } = t,
    a = n ?? i,
    o = r && a ? r[a] : void 0;
  return o && typeof o == `string` && (e = { ...e, src: o }), e;
}
function na(e) {
  let { background: t, image: n } = e;
  if (n !== void 0 && t && !G_.isImageObject(t)) return;
  let r = null;
  if (((r = R(n) ? { alt: ``, src: n } : Sh.get(t, null)), G_.isImageObject(r)))
    return ta(r, e);
}
function ra(e) {
  if (e)
    return e.pixelHeight && e.pixelWidth
      ? { width: e.pixelWidth, height: e.pixelHeight }
      : ia(e.src);
}
function ia(e) {
  if (!e) return;
  let t;
  try {
    t = new URL(e);
  } catch {
    return;
  }
  let n = t.searchParams.get(`width`),
    r = t.searchParams.get(`height`);
  if (n && r) return { width: parseInt(n), height: parseInt(r) };
}
function aa(e) {
  return e && e !== `search` && e !== `slot` && e !== `template`
    ? Ee[e]
    : Ee.div;
}
function oa(e, t) {
  (e[`data-framer-layout-hint-center-x`] = t === !0 || t === `x` ? !0 : void 0),
    (e[`data-framer-layout-hint-center-y`] =
      t === !0 || t === `y` ? !0 : void 0);
}
function sa(e) {
  let t = {};
  return !e || !av || Y.current() !== Y.canvas || oa(t, e), t;
}
function ca(e) {
  return e.replace(/^id_/u, ``).replace(/\\/gu, ``);
}
function la(e, t) {
  if (!t && ((t = e.children), !t)) return { props: e, children: t };
  let n = e._forwardedOverrides;
  return (
    n &&
      (t = d.Children.map(t, (e) =>
        d.isValidElement(e) ? d.cloneElement(e, { _forwardedOverrides: n }) : e
      )),
    { props: e, children: t }
  );
}
function ua(e) {
  return (t, n) =>
    e === !0
      ? `translate(-50%, -50%) ${n}`
      : e === `x`
      ? `translateX(-50%) ${n}`
      : e === `y`
      ? `translateY(-50%) ${n}`
      : n || `none`;
}
function da(e, { specificLayoutId: t, postfix: n } = {}) {
  let {
      name: r,
      layoutIdKey: i,
      duplicatedFrom: a,
      __fromCodeComponentNode: o = !1,
      drag: s,
    } = e,
    { getLayoutId: c, enabled: l } = w(Jh);
  return T(() => {
    if (!l) return e.layoutId;
    let u = t || e.layoutId;
    if (!u && (s || !i || o)) return;
    let d = u || c({ id: i, name: r, duplicatedFrom: a });
    if (d) return n ? `${d}-${n}` : d;
  }, [l]);
}
function fa() {
  let [e, t] = d.useState(0);
  return d.useCallback(() => t((e) => e + 1), []);
}
function pa(e) {
  let t = fa();
  O(() => {
    let n = e?.current;
    if (n)
      return (
        lv?.observeElementWithCallback(e.current, t),
        () => {
          lv?.unobserve(n);
        }
      );
  }, [e, t]);
}
function ma(e) {
  let t =
    e.firstElementChild && e.firstElementChild.hasAttribute(uv)
      ? e.firstElementChild.children
      : e.children;
  return [...t].filter(ha).map(ga);
}
function ha(e) {
  return e instanceof HTMLBaseElement ||
    e instanceof HTMLHeadElement ||
    e instanceof HTMLLinkElement ||
    e instanceof HTMLMetaElement ||
    e instanceof HTMLScriptElement ||
    e instanceof HTMLStyleElement ||
    e instanceof HTMLTitleElement
    ? !1
    : e instanceof HTMLElement || e instanceof SVGElement;
}
function ga(e) {
  if (
    !(e instanceof HTMLElement) ||
    e.children.length === 0 ||
    e.style.display !== `contents`
  )
    return e;
  let t = [...e.children].find(ha);
  return t ? ga(t) : e;
}
function _a(e, t, n = () => [], r = {}) {
  let { id: i, visible: a, _needsMeasure: o } = e,
    { skipHook: s = !1 } = r,
    c = w(sv),
    l = Y.current() === Y.canvas;
  ov(() => {
    !l ||
      c ||
      s ||
      (t.current &&
        i &&
        a &&
        o &&
        z_.queueMeasureRequest(ca(i), t.current, n(t.current)));
  });
}
function va(e) {
  let t = e.closest(`[data-framer-component-container]`);
  t && z_.queueMeasureRequest(ca(t.id), t, ma(t));
}
function ya(e) {
  e.willChange = `transform`;
  let t = Y.current() === Y.canvas;
  pv && t && (e.translateZ = dv);
}
function ba(e) {
  (e.willChange = `transform`), xa(e, !0);
}
function xa(e, t) {
  let n = Y.current() === Y.canvas;
  if (!pv || !n) return;
  let r = (R(e.transform) && e.transform) || ``;
  if (t) {
    let t = r.includes(fv);
    t || (e.transform = r + fv);
  } else e.transform = r.replace(fv, ``);
}
function Sa(e, t, n, r = !0) {
  if (!e) return;
  let i = j_(e.style),
    a = n || i[t],
    o = () => {
      Ca(a) && (i[t] = a);
    };
  (i[t] = null), r ? Promise.resolve().then(o) : setTimeout(o, 0);
}
function Ca(e) {
  return R(e) || z(e) || St(e);
}
function wa(e, t) {
  let n = e.size;
  if (n < t) return;
  let r = Math.round(Math.random());
  for (let t of e.keys()) {
    if ((++r & 1) == 1) continue;
    e.delete(t);
  }
}
function Ta(e, t, n, r) {
  let i = t.get(n);
  if (i) return i;
  wa(t, e);
  let a = r(n);
  return t.set(n, a), a;
}
function Ea(e, t) {
  let n = [e, t];
  return _v.test(e) ? e : Ta(1e3, vv, n, () => gv.multiplyAlpha(e, t));
}
function Da(e, t = 1) {
  let n;
  return (
    (n =
      `stops` in e
        ? e.stops
        : [
            { value: e.start, position: 0 },
            { value: e.end, position: 1 },
          ]),
    t === 1 ? n : n.map((e) => ({ ...e, value: Ea(e.value, t) }))
  );
}
function Oa(e, t) {
  let n = 0;
  return (
    Da(e, t).forEach((e) => {
      n ^= hv(e.value) ^ e.position;
    }),
    n
  );
}
function ka(e) {
  return e && yv.every((t) => t in e);
}
function Aa(e) {
  return e && bv.every((t) => t in e);
}
function ja({ background: e, backgroundColor: t }, n) {
  t
    ? typeof t == `string` || Lh(t)
      ? (n.backgroundColor = t)
      : J.isColorObject(e) &&
        (n.backgroundColor = e.initialValue || J.toRgbString(e))
    : e &&
      ((e = Sh.get(e, null)),
      typeof e == `string` || Lh(e)
        ? (n.background = e)
        : Sv.isLinearGradient(e)
        ? (n.background = Sv.toCSS(e))
        : wv.isRadialGradient(e)
        ? (n.background = wv.toCSS(e))
        : J.isColorObject(e) &&
          (n.backgroundColor = e.initialValue || J.toRgbString(e)));
}
function G(e, t, n, r) {
  if ((r === void 0 && (r = t), e[t] !== void 0)) {
    n[r] = e[t];
    return;
  }
}
function Ma(e) {
  return e ? e.left !== void 0 && e.right !== void 0 : !1;
}
function Na(e) {
  return e ? e.top !== void 0 && e.bottom !== void 0 : !1;
}
function Pa(e) {
  if (!e) return {};
  let t = {};
  return (
    e.preserve3d === !0
      ? (t.transformStyle = `preserve-3d`)
      : e.preserve3d === !1 && (t.transformStyle = `flat`),
    e.backfaceVisible === !0
      ? (t.backfaceVisibility = `visible`)
      : e.backfaceVisible === !1 && (t.backfaceVisibility = `hidden`),
    t.backfaceVisibility && (t.WebkitBackfaceVisibility = t.backfaceVisibility),
    e.perspective !== void 0 &&
      (t.perspective = t.WebkitPerspective = e.perspective),
    e.__fromCanvasComponent ||
      (e.center === !0
        ? ((t.left = `50%`), (t.top = `50%`))
        : e.center === `x`
        ? (t.left = `50%`)
        : e.center === `y` && (t.top = `50%`)),
    G(e, `size`, t),
    G(e, `width`, t),
    G(e, `height`, t),
    G(e, `minWidth`, t),
    G(e, `minHeight`, t),
    G(e, `top`, t),
    G(e, `right`, t),
    G(e, `bottom`, t),
    G(e, `left`, t),
    G(e, `position`, t),
    G(e, `overflow`, t),
    G(e, `opacity`, t),
    (!e._border || !e._border.borderWidth) && G(e, `border`, t),
    G(e, `borderRadius`, t),
    G(e, `radius`, t, `borderRadius`),
    G(e, `color`, t),
    G(e, `shadow`, t, `boxShadow`),
    G(e, `x`, t),
    G(e, `y`, t),
    G(e, `z`, t),
    G(e, `rotate`, t),
    G(e, `rotateX`, t),
    G(e, `rotateY`, t),
    G(e, `rotateZ`, t),
    G(e, `scale`, t),
    G(e, `scaleX`, t),
    G(e, `scaleY`, t),
    G(e, `skew`, t),
    G(e, `skewX`, t),
    G(e, `skewY`, t),
    G(e, `originX`, t),
    G(e, `originY`, t),
    G(e, `originZ`, t),
    ja(e, t),
    t
  );
}
function Fa(e) {
  for (let t in e)
    if (
      t === `drag` ||
      t.startsWith(`while`) ||
      (typeof j_(e)[t] == `function` &&
        t.startsWith(`on`) &&
        !t.includes(`Animation`))
    )
      return !0;
  return !1;
}
function Ia(e) {
  if (e.drag) return `grab`;
  for (let t in e) if (Ev.has(t)) return `pointer`;
}
function La(e) {
  return Ra(e) ? !0 : e.style ? !!Ra(e.style) : !1;
}
function Ra(e) {
  return Dv in e && (e[Dv] === `scroll` || e[Dv] === `auto`);
}
function za(e) {
  let {
      left: t,
      top: n,
      bottom: r,
      right: i,
      width: a,
      height: o,
      center: s,
      _constraints: c,
      size: l,
      widthType: u,
      heightType: d,
      positionFixed: f,
      positionAbsolute: p,
    } = e,
    m = ke(e.minWidth),
    h = ke(e.minHeight),
    g = ke(e.maxWidth),
    _ = ke(e.maxHeight),
    v = {
      top: ke(n),
      left: ke(t),
      bottom: ke(r),
      right: ke(i),
      width: ke(a),
      height: ke(o),
      size: ke(l),
      center: s,
      _constraints: c,
      widthType: u,
      heightType: d,
      positionFixed: f,
      positionAbsolute: p,
      minWidth: m,
      minHeight: h,
      maxWidth: g,
      maxHeight: _,
    };
  return v;
}
function Ba(e) {
  d.useInsertionEffect(() => {
    Ni();
  }, []);
  let t = w(sv),
    { style: n, _initialStyle: r, __fromCanvasComponent: i, size: a } = e,
    o = za(e),
    s = Ci(o),
    c = {
      display: `block`,
      flex: n?.flex ?? `0 0 auto`,
      userSelect: Y.current() === Y.preview ? void 0 : `none`,
    };
  e.__fromCanvasComponent ||
    (c.backgroundColor =
      e.background === void 0 ? `rgba(0, 170, 255, 0.3)` : void 0);
  let l = !Fa(e) && !e.__fromCanvasComponent && !La(e),
    u = e.style ? !(`pointerEvents` in e.style) : !0;
  l && u && (c.pointerEvents = `none`);
  let f =
      d.Children.count(e.children) > 0 &&
      d.Children.toArray(e.children).every(
        (e) => typeof e == `string` || typeof e == `number`
      ),
    p = f && {
      display: `flex`,
      alignItems: `center`,
      justifyContent: `center`,
      textAlign: `center`,
    },
    m = Pa(e);
  a === void 0 &&
    !i &&
    (Ma(m) || (c.width = Ov.width), Na(m) || (c.height = Ov.height)),
    o.minWidth !== void 0 && (c.minWidth = o.minWidth),
    o.minHeight !== void 0 && (c.minHeight = o.minHeight);
  let h = {};
  fi(o) &&
    s &&
    !wi(e) &&
    (h = {
      left: s.x,
      top: s.y,
      width: s.width,
      height: s.height,
      right: void 0,
      bottom: void 0,
    }),
    Object.assign(c, p, r, m, h, n),
    Object.assign(c, {
      overflowX: c.overflowX ?? c.overflow,
      overflowY: c.overflowY ?? c.overflow,
      overflow: void 0,
    }),
    mv.applyWillChange(e, c, !0);
  let g = c;
  c.transform || (g = { x: 0, y: 0, ...c });
  let _ = Hi();
  return (
    e.positionSticky
      ? (!_ || z_.isOnPageCanvas || t) &&
        ((g.position = `sticky`),
        (g.willChange = `transform`),
        (g.zIndex = 1),
        (g.top = e.positionStickyTop),
        (g.right = e.positionStickyRight),
        (g.bottom = e.positionStickyBottom),
        (g.left = e.positionStickyLeft))
      : _ &&
        (e.positionFixed
          ? (g.position = z_.isOnPageCanvas ? `fixed` : `absolute`)
          : e.positionAbsolute && (g.position = `absolute`)),
    `rotate` in g && g.rotate === void 0 && delete g.rotate,
    [g, s]
  );
}
function Va(e) {
  let t = {};
  for (let n in e) {
    let r = Te(n) || N_(n);
    r && !kv.has(n)
      ? (t[n] = j_(e)[n])
      : (n === `positionTransition` || n === `layoutTransition`) &&
        ((t.layout = !0),
        typeof j_(e)[n] != `boolean` &&
          !e.transition &&
          (t.transition = j_(e)[n]));
  }
  return t;
}
function Ha(e) {
  return `data-framer-name` in e;
}
function Ua(e, t, n, r) {
  if (r) {
    let e = n ? { width: n.width, height: n.height } : 1;
    return e;
  }
  let { _usesDOMRect: i } = e,
    { widthType: a = 0, heightType: o = 0, width: s, height: c } = t;
  return n && !i
    ? n
    : a === 0 && o === 0 && typeof s == `number` && typeof c == `number`
    ? { width: s, height: c }
    : i || e.positionFixed || e.positionAbsolute
    ? 2
    : 0;
}
function Wa(e) {
  return x(Ee.div, { layoutId: Mv, style: Fv, children: e.children });
}
function Ga(e, t) {
  let n = j(() => ({ inputs: t, result: e() }))[0],
    r = S(!0),
    i = S(n),
    a = r.current || !!(t && i.current.inputs && at(t, i.current.inputs, !1)),
    o = a ? i.current : { inputs: t, result: e() };
  return (
    O(() => {
      (r.current = !1), (i.current = o);
    }, [o]),
    o.result
  );
}
function Ka(e, t) {
  vt(e) ? e(t) : qa(e) && (e.current = t);
}
function qa(e) {
  return B(e) && `current` in e;
}
function Ja() {
  let e = Xr(() => new Set()),
    t = Xr(() => new Map());
  return Xr(() => (n, r) => ({
    get current() {
      return n.current;
    },
    set current(i) {
      if (i !== n.current) {
        if (
          ((n.current = i),
          r && r(i),
          t.forEach((e, t) => {
            e ? e() : t(null);
          }),
          i === null)
        ) {
          t.clear(), e.clear();
          return;
        }
        e.forEach((e) => {
          let n = e(i);
          t.set(e, n);
        });
      }
    },
    observe(r) {
      e.add(r);
      let i = n.current;
      if (i) {
        let e = r(i);
        t.set(r, e);
      }
    },
    unobserve(n) {
      if (!n || (e.delete(n), !t.has(n))) return;
      let r = t.get(n);
      r ? r() : n(null), t.delete(n);
    },
  }));
}
function Ya(e) {
  let t = S(null),
    n = Ja();
  return Xr(() => (qa(e) ? n(e) : vt(e) ? n(t, e) : n(t)));
}
function Xa(e, t, n) {
  let r = S(),
    i = S();
  if (
    (Ga(() => {
      i.current !== void 0 && (i.current = !0);
    }, n ?? [{}]),
    !e)
  )
    return;
  let a = i.current;
  a !== !1 &&
    ((i.current = !1), e.unobserve(r.current), e.observe(t), (r.current = t));
}
function Za(e, t, n, r, i, a, o) {
  let s = e.get(t);
  return (
    (!s || s.root !== r?.current) &&
      ((s = new Iv({ root: r?.current, rootMargin: a, threshold: o })),
      e.set(t, s)),
    s.observeElementWithCallback(n, i),
    () => {
      s.unobserve(n);
    }
  );
}
function Qa(e, t, n) {
  let r = Xr(() => `${n.rootMargin}`),
    i = w(Lv),
    { enabled: a, root: o, rootMargin: s, threshold: c } = n;
  Xa(
    e,
    (e) => {
      if (a && e !== null) return Za(i, r, e, o, t, s, c);
    },
    [a, t, o, s, c]
  );
}
function $a(e, t, n) {
  let r = d.useRef({ isInView: !1, hasAnimatedOnce: !1 }),
    {
      enabled: i,
      animateOnce: a,
      threshold: o,
      rootMargin: s = `0px 0px 0px 0px`,
    } = n,
    c = d.useCallback(
      (e) => {
        let { isInView: n, hasAnimatedOnce: i } = r.current,
          s = to(e, o?.y ?? 0);
        if (s && !n) {
          if (a && i) return;
          (r.current.hasAnimatedOnce = !0), (r.current.isInView = !0), t(!0);
          return;
        }
        if (!s && n) {
          if (((r.current.isInView = !1), a)) return;
          t(!1);
          return;
        }
      },
      [a, o?.y, t]
    );
  Rv(e, c, { threshold: zv, rootMargin: s, enabled: i ?? !0 });
}
function eo(e, t) {
  return t.height === 0 ? 0 : e.height / Math.min(t.height, q.innerHeight);
}
function to(
  { boundingClientRect: e, intersectionRect: t, isIntersecting: n },
  r
) {
  return e.height === 0 ? n : n && eo(t, e) >= r;
}
function no() {
  return new Map();
}
function ro() {
  return Xr(no);
}
function io(e, t = []) {
  let { register: n, deregister: r } = w(Wv);
  O(() => {
    if (e) return n(e), () => r(e);
  }, [n, r, ...t]);
}
function ao(e, t) {
  return !(
    t.isCurrent === void 0 ||
    e.isCurrent !== t.isCurrent ||
    e.isPrevious !== t.isPrevious ||
    (t.isCurrent && e.isOverlayed !== t.isOverlayed)
  );
}
function oo(e, t, n) {
  let r = { ...e };
  return (
    t &&
      (U(t.originX) && (r.originX = t.originX),
      U(t.originY) && (r.originY = t.originY),
      U(t.originZ) && (r.originZ = t.originZ)),
    n &&
      (U(n.originX) && (r.originX = n.originX),
      U(n.originY) && (r.originY = n.originY),
      U(n.originZ) && (r.originZ = n.originZ)),
    r
  );
}
function so(e) {
  var t, n, r;
  if (!e) return !1;
  let i = `rotateX` in e || `rotateY` in e || `z` in e;
  if (!i) return !1;
  let a = e.rotateX !== 0 || e.rotateY !== 0 || e.z !== 0,
    o =
      (t = e?.transition)?.rotateX.from !== 0 ||
      (n = e?.transition)?.rotateY.from !== 0 ||
      (r = e?.transition)?.z.from !== 0;
  return a || o;
}
function co(e) {
  let t = e && e.appearsFrom ? e.appearsFrom : `right`;
  switch (t) {
    case `right`:
      return Zv.PushLeft;
    case `left`:
      return Zv.PushRight;
    case `bottom`:
      return Zv.PushUp;
    case `top`:
      return Zv.PushDown;
  }
}
function lo(e) {
  let t = e && e.appearsFrom ? e.appearsFrom : `bottom`;
  switch (t) {
    case `right`:
      return Zv.OverlayLeft;
    case `left`:
      return Zv.OverlayRight;
    case `bottom`:
      return Zv.OverlayUp;
    case `top`:
      return Zv.OverlayDown;
  }
}
function uo(e) {
  let t = e && e.appearsFrom ? e.appearsFrom : `bottom`;
  switch (t) {
    case `right`:
      return Zv.FlipLeft;
    case `left`:
      return Zv.FlipRight;
    case `bottom`:
      return Zv.FlipUp;
    case `top`:
      return Zv.FlipDown;
  }
}
function fo(e, t) {
  switch (t.type) {
    case `addOverlay`:
      return mo(e, t.transition, t.component);
    case `removeOverlay`:
      return ho(e);
    case `add`:
      return go(e, t.key, t.transition, t.component);
    case `remove`:
      return yo(e);
    case `update`:
      return po(e, t.key, t.component);
    case `back`:
      return _o(e);
    case `forward`:
      return vo(e);
    default:
      return;
  }
}
function po(e, t, n) {
  return { ...e, containers: { ...e.containers, [t]: n } };
}
function mo(e, t, n) {
  let r = e.overlayStack[e.currentOverlay];
  if (r && r.component === n) return;
  let i = e.overlayItemId + 1,
    a = [...e.overlayStack, { key: `stack-${i}`, component: n, transition: t }];
  return {
    ...e,
    overlayStack: a,
    overlayItemId: i,
    currentOverlay: Math.max(0, Math.min(e.currentOverlay + 1, a.length - 1)),
    previousOverlay: e.currentOverlay,
  };
}
function ho(e) {
  return {
    ...e,
    overlayStack: [],
    currentOverlay: -1,
    previousOverlay: e.currentOverlay,
  };
}
function go(e, t, n, r) {
  e.containers[t] || (e.containers[t] = r),
    (e.history = e.history.slice(0, e.current + 1)),
    (e.visualIndex = Math.max(e.history.length, 0));
  let i = e.history[e.history.length - 1],
    a = i && i.key === t;
  if (((e.overlayStack = []), a && e.currentOverlay > -1))
    return { ...e, currentOverlay: -1, previousOverlay: e.currentOverlay };
  if (a) return;
  let o = e.containerVisualIndex[t],
    s = e.containerIsRemoved[t],
    c = i?.key && n.withMagicMotion ? wo(t, o, s, e.history) : !0;
  e.history.push({
    key: t,
    transition: n,
    visualIndex: c ? Math.max(e.visualIndex, 0) : e.containerVisualIndex[t],
  });
  let l = e.current + 1,
    u = e.current;
  for (let t in e.containerIndex)
    e.containerIndex[t] === l && (e.containerIndex[t] = So(t, e.history));
  e.containerIndex[t] = l;
  let { containerVisualIndex: d, containerIsRemoved: f } = bo(e, t, c),
    p = Co(l, u, e.history, e.containerIndex, e.transitionForContainer);
  return {
    ...e,
    current: l,
    previous: u,
    containerVisualIndex: d,
    containerIsRemoved: f,
    transitionForContainer: p,
    previousTransition: null,
    currentOverlay: -1,
    historyItemId: e.historyItemId + 1,
    previousOverlay: e.currentOverlay,
  };
}
function _o(e) {
  let t = { ...e.containers },
    n = yo(e);
  if (n) return (n.containers = t), n;
}
function vo(e) {
  let t = e.history[e.current + 1];
  if (!t) return;
  let { key: n, transition: r, component: i } = t,
    a = [...e.history],
    o = go(e, n, r, i);
  if (o) return (o.history = a), o;
}
function yo(e) {
  let t = [...e.history.slice(0, e.current + 1)];
  if (t.length === 1) return;
  let n = t.pop();
  if (!n) return;
  let r = t[t.length - 1];
  V(r, `The navigation history must have at least one component`),
    (e.containerIndex[r.key] = t.length - 1);
  let i = t.every((e) => e.key !== n.key);
  i && delete e.containers[n.key];
  let a = e.current - 1,
    o = e.current,
    {
      containerIsRemoved: s,
      containerVisualIndex: c,
      previousTransition: l,
      visualIndex: u,
    } = xo(e, r, n),
    d = Co(a, o, e.history, e.containerIndex, e.transitionForContainer);
  return {
    ...e,
    current: a,
    previous: o,
    containerIsRemoved: s,
    containerVisualIndex: c,
    previousTransition: l,
    visualIndex: u,
    transitionForContainer: d,
  };
}
function bo(e, t, n) {
  let r = {
    containerVisualIndex: { ...e.containerVisualIndex },
    containerIsRemoved: { ...e.containerIsRemoved },
  };
  if (n)
    (r.containerVisualIndex[t] = e.history.length - 1),
      (r.containerIsRemoved[t] = !1);
  else {
    let n = e.containerVisualIndex[t];
    for (let [t, i] of Object.entries(e.containerVisualIndex))
      n !== void 0 && i > n && (r.containerIsRemoved[t] = !0);
  }
  return r;
}
function xo(e, t, n) {
  let r = [t.key, n.key],
    i = e.history[e.history.length - 2],
    a = e.previousTransition === null ? null : { ...e.previousTransition },
    o = {
      containerIsRemoved: { ...e.containerIsRemoved },
      containerVisualIndex: { ...e.containerVisualIndex },
      previousTransition: a,
      visualIndex: e.visualIndex,
    };
  i && r.push(i.key);
  let s = e.containerVisualIndex[t.key],
    c = e.containerVisualIndex[n.key],
    l =
      (s !== void 0 && c !== void 0 && s <= c) ||
      (t.visualIndex !== void 0 && t.visualIndex < e.history.length - 1),
    u = t.visualIndex;
  return (
    l
      ? ((o.containerIsRemoved[n.key] = !0),
        (o.containerVisualIndex[t.key] =
          u === void 0 ? e.history.length - 1 : u))
      : ((o.visualIndex = e.visualIndex + 1),
        (o.containerVisualIndex[t.key] = e.visualIndex + 1)),
    n.transition.withMagicMotion &&
      (o.previousTransition = n.transition || null),
    (e.containerIsRemoved[t.key] = !1),
    o
  );
}
function So(e, t) {
  var n;
  for (let r = t.length; r > t.length; r--) if ((n = t[r])?.key === e) return r;
  return -1;
}
function Co(e, t, n, r, i) {
  let a = { ...i };
  for (let [i, o] of Object.entries(r)) {
    let r = To(o, { current: e, previous: t, history: n });
    r && (a[i] = r);
  }
  return a;
}
function wo(e, t, n, r) {
  if (n || t === void 0) return !0;
  if (t === 0) return !1;
  let i = r.slice(t, r.length);
  if (i.findIndex((t) => t.key === e) > -1) return !0;
  let a = r.slice(0, t - 1);
  return !(a.findIndex((t) => t.key === e) > -1);
}
function To(e, t) {
  let { current: n, previous: r, history: i } = t;
  if (!(e !== n && e !== r)) {
    if (e === n && n > r) {
      let t = i[e];
      return Eo(`enter`, t?.transition.enter, t?.transition.animation);
    }
    if (e === r && n > r) {
      let t = i[e + 1];
      return Eo(`exit`, t?.transition.exit, t?.transition.animation);
    }
    if (e === n && n < r) {
      let t = i[e + 1];
      return Eo(`enter`, t?.transition.exit, t?.transition.animation);
    }
    if (e === r && n < r) {
      let t = i[e];
      return Eo(`exit`, t?.transition.enter, t?.transition.animation);
    }
  }
}
function Eo(e, t, n) {
  let r = {},
    i = {};
  return (
    $v.forEach((e) => {
      (r[e] = qv[e]), (i[e] = { ...n, from: qv[e] });
    }),
    t &&
      Object.keys(t).forEach((a) => {
        if (t[a] === void 0) return;
        let o = t[a],
          s = typeof t[a] == `string` ? `${j_(qv)[a]}%` : j_(qv)[a];
        (j_(r)[a] = e === `enter` ? s : o),
          (i[a] = { ...n, from: e === `enter` ? o : s, velocity: 0 });
      }),
    { ...r, transition: { ...i } }
  );
}
function Do(e) {
  let t, n;
  return (
    e.current === -1 ? (n = e.history[e.previous]) : (t = e.history[e.current]),
    { currentOverlayItem: t, previousOverlayItem: n }
  );
}
function Oo({ currentOverlayItem: e }) {
  return e && e.transition.exit;
}
function ko({ currentOverlayItem: e, previousOverlayItem: t }) {
  return e && e.transition.animation
    ? e.transition.animation
    : t && t.transition.animation
    ? t.transition.animation
    : ry;
}
function Ao({ currentOverlayItem: e, previousOverlayItem: t }) {
  return e ? e.transition.backfaceVisible : t && t.transition.backfaceVisible;
}
function jo(e) {
  if (e.backdropColor) return e.backdropColor;
  if (e.overCurrentContext) return `rgba(4,4,15,.4)`;
}
function Mo(e, t) {
  let { current: n, history: r } = t;
  if (e === n) {
    let t = r[e];
    return t && t.transition ? t.transition.backfaceVisible : !0;
  } else if (e < n) {
    let t = r[e + 1];
    return t && t.transition ? t.transition.backfaceVisible : !0;
  } else {
    let t = r[e];
    return t && t.transition ? t.transition.backfaceVisible : !0;
  }
}
function No(e, t) {
  let n = t.history[e];
  if (n) return n.transition.enter;
}
function Po(e, t) {
  var n, r, i, a;
  let { current: o, previous: s, history: c } = t;
  return (e === s && o > s) || (e === o && o < s)
    ? (r = (n = c[e + 1])?.transition)?.backfaceVisible
    : (a = (i = c[e])?.transition)?.backfaceVisible;
}
function Fo(e, t) {
  let { current: n, history: r } = t;
  if (e !== n)
    if (e < n) {
      let t = r[e + 1];
      if (t && t.transition) return t.transition.exit;
    } else {
      let t = r[e];
      if (t && t.transition) return t.transition.enter;
    }
}
function Io(e, t) {
  let { current: n, previous: r, history: i } = t,
    a = r > n ? r : n;
  if (e < a) {
    let t = i[e + 1];
    if (t && t.transition.animation) return t.transition.animation;
  } else if (e !== a) {
    let t = i[e];
    if (t && t.transition.animation) return t.transition.animation;
  } else {
    let t = i[e];
    if (t?.transition.animation) return t.transition.animation;
  }
  return ry;
}
function Lo(e, t, n) {
  let { current: r, previous: i, history: a } = t;
  return !!((n && a.length > 1) || (e !== i && e !== r) || r === i);
}
function Ro(e, t) {
  let { current: n, previous: r } = t;
  return e > n && e > r ? !1 : e === n;
}
function zo(e) {
  let t = d.Children.map(e.component, (t) => {
    var n;
    if (!ti(t) || !ei(t) || !t.props) return t;
    let r = { style: t.props.style ?? {} },
      i = (n = e?.transition)?.position,
      a = !i || (i.left !== void 0 && i.right !== void 0),
      o = !i || (i.top !== void 0 && i.bottom !== void 0),
      s = `style` in t.props ? B(t.props.style) : !0;
    if (a) {
      let e = `width` in t.props;
      e && (r.width = `100%`), s && (r.style.width = `100%`);
    }
    if (o) {
      let e = `height` in t.props;
      e && (r.height = `100%`), s && (r.style.height = `100%`);
    }
    return d.cloneElement(t, r);
  });
  return t;
}
function Bo(e, t) {
  if (e.goBackOnTapOutside !== !1) return t;
}
function Vo(e) {
  let t = Ve(),
    n = Ie();
  return (
    d.useInsertionEffect(() => {
      Ni();
    }, []),
    x(ny, {
      ...e,
      resetProjection: t,
      skipLayoutAnimation: n,
      children: e.children,
    })
  );
}
function Ho(e) {
  return fy in e;
}
function Uo(e, t) {
  if (!Ho(e)) return;
  let n = Sh.getNumber(e.opacity);
  n !== 1 && (t.opacity = n);
}
function Wo(e) {
  let t = [];
  if (e && e.length) {
    let n = e.map(
      (e) => `drop-shadow(${e.x}px ${e.y}px ${e.blur}px ${e.color})`
    );
    t.push(...n);
  }
  return t;
}
function Go(e, t) {
  if (!e.shadows || e.shadows.length === 0) return;
  let n = e.shadows
    .map((e) => `${e.x}px ${e.y}px ${e.blur}px ${e.color}`)
    .join(`, `);
  n && (t.textShadow = n);
}
function Ko(e, t) {
  let n = [];
  U(e.brightness) && n.push(`brightness(${e.brightness / 100})`),
    U(e.contrast) && n.push(`contrast(${e.contrast / 100})`),
    U(e.grayscale) && n.push(`grayscale(${e.grayscale / 100})`),
    U(e.hueRotate) && n.push(`hue-rotate(${e.hueRotate}deg)`),
    U(e.invert) && n.push(`invert(${e.invert / 100})`),
    U(e.saturate) && n.push(`saturate(${e.saturate / 100})`),
    U(e.sepia) && n.push(`sepia(${e.sepia / 100})`),
    U(e.blur) && n.push(`blur(${e.blur}px)`),
    e.dropShadows && n.push(...Wo(e.dropShadows)),
    n.length !== 0 && (t.filter = t.WebkitFilter = n.join(` `));
}
function qo(e, t) {
  U(e.backgroundBlur) &&
    (t.backdropFilter = t.WebkitBackdropFilter = `blur(${e.backgroundBlur}px)`);
}
function Jo(e, t) {
  qo(e, t), Ko(e, t);
}
function Yo(e, t) {
  let n,
    r = (...r) => {
      q.clearTimeout(n), (n = q.setTimeout(e, t, ...r));
    },
    i = () => {
      q.clearTimeout(n);
    };
  return (r.cancel = i), r;
}
function Xo(...e) {
  return e.filter(Boolean).join(` `);
}
function Zo(e, t) {
  let n = {},
    r = {};
  for (let i in e) {
    let a = Qo(i);
    if (a && t.has(a)) {
      n[a] = e[i];
      continue;
    }
    r[i] = e[i];
  }
  return [n, r];
}
function Qo(e) {
  if (e.startsWith(yy)) return e.substr(by);
}
function $o(e, t, n) {
  let i = v.map(e, (e) => (r(e) ? C(e, t) : e));
  return n ? i : x(y, { children: i });
}
function es(e) {
  let t = Xr(() => ts(e));
  return t.useSetup(e), t.cloneAsElement;
}
function ts(e) {
  let t = { forwardedRef: e, childRef: null, ref: null };
  t.ref = ns(t);
  let n = (e, n) => {
      if (!t.forwardedRef && t.forwardedRef === e) {
        t.ref = n;
        return;
      }
      let r = !1;
      t.childRef !== n && ((t.childRef = n), (r = !0)),
        t.forwardedRef !== e && ((t.forwardedRef = e), (r = !0)),
        r && (t.ref = ns(t));
    },
    i = !1;
  function a(a, o) {
    if (i)
      throw ReferenceError(
        `useCloneChildrenWithPropsAndRef: You should not call cloneChildrenWithPropsAndRef more than once during the render cycle.`
      );
    return (
      (i = !0),
      v.count(a) > 1 && e && ((t.forwardedRef = void 0), (t.ref = t.childRef)),
      v.map(a, (e) => {
        if (r(e)) {
          let r = `ref` in e ? e.ref : void 0;
          n(t.forwardedRef, r);
          let i = vt(o) ? o(e.props) : o;
          return C(e, t.ref === r ? i : { ...i, ref: t.ref });
        }
        return e;
      })
    );
  }
  let o = function (e, t) {
    return x(y, { children: a(e, t) });
  };
  return (
    (o.cloneAsArray = a),
    {
      useSetup: (e) => {
        (i = !1), n(e, t.childRef);
      },
      cloneAsElement: o,
    }
  );
}
function ns(e) {
  if (!e.forwardedRef) return e.childRef;
  let { forwardedRef: t, childRef: n } = e;
  return (e) => {
    Ka(n, e), Ka(t, e);
  };
}
function rs(e, t, n, r, i, a, o, s) {
  let c = d.Children.toArray(t),
    l = c[0];
  if (c.length !== 1 || !d.isValidElement(l))
    return (
      console.warn(
        `PropertyOverrides: expected exactly one React element for a child`,
        t
      ),
      o(t, n)
    );
  let u = [],
    f = [];
  for (let [t] of Object.entries(r)) {
    if (t === i) continue;
    let n = e[t];
    if (!n || !ls(l.props, n)) {
      f.push(t);
      continue;
    }
    let r = cs([t], a);
    r.length && u.push({ variants: r, propOverrides: n });
  }
  if (u.length === 0) return o(l, n);
  let p = [i, ...f],
    m = cs(p, a);
  m.length && u.unshift({ variants: m });
  let h = [];
  for (let { variants: e, propOverrides: t } of u) {
    if (s && !e.includes(s)) continue;
    let c = e.join(`+`),
      d = x(
        Dy.Provider,
        {
          value: { primaryVariantId: i, variants: new Set(e) },
          children: o(l, t ? { ...n, ...t } : n),
        },
        c
      ),
      f = ss(e, a, r);
    f.length
      ? (V(u.length > 1, `Must branch out when there are hiddenClassNames`),
        (d = x(`div`, { className: `${Oy} ${f.join(` `)}`, children: d }, c)))
      : V(u.length === 1, `Cannot branch out when hiddenClassNames is empty`),
      h.push(d);
  }
  return (
    V(
      !s || h.length === 1,
      `Must render exactly one branch when activeVariantId is given`
    ),
    h
  );
}
function os(e) {
  return e.split(`-`)[2];
}
function ss(e, t, n) {
  let r = [];
  for (let [i, a] of Object.entries(n)) {
    let n = t && !t.has(i);
    if (e.includes(i) || n) continue;
    r.push(`hidden-${os(a)}`);
  }
  return r;
}
function cs(e, t) {
  return t ? e.filter((e) => t.has(e)) : e;
}
function ls(e, t) {
  for (let n of Object.keys(t)) if (!at(e[n], t[n], !0)) return !0;
  return !1;
}
function us(e, t, n) {
  return !n || !e ? t : { ...t, ...n[e] };
}
function ds(e) {
  return d.forwardRef(({ optimized: t, ...n }, r) => {
    var i;
    let a = d.useContext(xy),
      o = (i = d.useContext(Dy))?.variants,
      s = n[By];
    s && !q_() && Ry.setAll(s, o, t ? n : null, a);
    let c = Hy(n);
    return x(e, { ref: r, ...n, ...c });
  });
}
function fs(e) {
  return R(e) || Array.isArray(e);
}
function ps(e) {
  return e in Gy;
}
function ms(e, t) {
  let n = Xr(() => ({ values: Wy(t ? e : void 0) }));
  return (
    d.useEffect(() => {
      if (!t)
        for (let e of Uy) {
          let t = Gy[e];
          if (xt(t)) continue;
          n.values[e].set(t);
        }
    }, [t]),
    n
  );
}
function hs(
  {
    loopEffectEnabled: e,
    loopRepeatDelay: t,
    loopTransition: n,
    loopRepeatType: r,
    loop: i,
    loopPauseOffscreen: a,
  },
  o
) {
  let s = Be(),
    l = Xr(Wy),
    u = S(!1),
    d = Yy(),
    f = S(null),
    p = E(async () => {
      if (!i) return;
      let e = n || void 0,
        t = u.current && r === `mirror`,
        a = t ? Gy : i,
        o = t ? i : Gy;
      return (
        (u.current = !u.current),
        (f.current = Promise.all(
          Uy.map((t) => {
            if (!(s && t !== `opacity`))
              return (
                l[t].jump(o[t] ?? Gy[t]),
                new Promise((n) => {
                  let r = { ...e, onComplete: () => n() },
                    i = a[t] ?? o[t];
                  typeof i == `number` && ge(l[t], i, r);
                })
              );
          })
        )),
        f.current
      );
    }, [i, r, n, s]),
    [m, h] = j(!1),
    g = S(!1),
    _ = E(async () => {
      !e || !g.current || (await p(), await d(t ?? 0), _());
    }, [p, d, e, t]),
    v = E(() => {
      g.current || ((g.current = !0), c(() => h(!0)), _());
    }, [_]),
    y = E((e = !0) => {
      Uy.forEach((e) => {
        l[e].stop();
      }),
        Uy.forEach((e) => {
          l[e].set(Gy[e]);
        }),
        (u.current = !1),
        e && ((g.current = !1), c(() => h(!1)));
    }, []),
    b = e && i,
    x = E(() => {
      document.hidden ? y(!1) : g.current && ((g.current = !1), v());
    }, [v, y]);
  O(() => {
    if (b)
      return (
        document.addEventListener(`visibilitychange`, x),
        () => {
          document.removeEventListener(`visibilitychange`, x);
        }
      );
  }, [b, x]),
    O(() => {
      (b && a) || (b ? v() : y());
    }, [v, y, a, b]),
    O(() => () => y(), [y]);
  let C = S(!1),
    w = E(async () => {
      f.current && (await f.current, !C.current && y());
    }, [y]),
    D = E(
      (e) => {
        e.isIntersecting ? ((C.current = !0), v()) : ((C.current = !1), w());
      },
      [v, w]
    );
  Rv(o, D, { enabled: b && a });
  let k = m || !a;
  return T(() => ({ values: l, style: b && k ? Ky : qy }), [b, k]);
}
function gs(e, t, n, r, i) {
  let a = n / 100 - 1,
    o = i ? (t - r) * a : 0,
    s = -e * a;
  return o + s;
}
function _s(e, t, n) {
  let {
      speed: r = 100,
      offset: i = 0,
      adjustPosition: a = !1,
      parallaxTransformEnabled: o,
    } = e,
    s = d.useRef(null),
    c = Be(),
    l = d.useCallback(
      (e) => (s.current === null || r === 100 ? 0 : gs(e, s.current, r, i, a)),
      [r, i, a]
    ),
    { scrollY: u } = He(),
    f = We(u, l),
    p = Re(a && s.current === null ? `hidden` : n),
    m = Re(0),
    h = w(Lv);
  return (
    Xa(
      t,
      (e) => {
        if (e === null || !o) return;
        let t = Za(h, `undefined`, e, null, (e) => {
          (s.current = e.boundingClientRect.top),
            ye.update(() => {
              f.set(l(u.get())), a && p.set(n ?? `initial`);
            }),
            t();
        });
        return t;
      },
      [a, o]
    ),
    ft(() => {
      o && f.set(0);
    }),
    { values: { y: c || !o ? m : f }, style: o ? { ...Ky, visibility: p } : qy }
  );
}
function vs(e) {
  if (!(R(e) || !B(e))) return e?.transition;
}
function ys(e, t, n, r, i, a) {
  let o = vs(e);
  return Promise.all(
    Uy.map(
      (s) =>
        new Promise((c) => {
          if (n && s !== `opacity`) return c();
          let l = t.values[s];
          l.stop();
          let u = B(e) ? e?.[s] ?? Gy[s] : Gy[s];
          if ((we(u) && (u = u.get()), !z(u))) return c();
          let d = Ge.get(r.current);
          d && d.setBaseTarget(s, u);
          let f;
          if (R(i) && !l?.hasAnimated && q.MotionHandoffAnimation) {
            let e = q.MotionHandoffAnimation(i, s, ye);
            e && (f = e);
          }
          a
            ? l.set(u)
            : ge(l, u, {
                ...o,
                velocity: 0,
                startTime: f,
                onComplete: () => c(),
              });
        })
    )
  );
}
function bs(
  {
    initial: e,
    animate: t,
    exit: n,
    presenceInitial: r,
    presenceAnimate: i,
    presenceExit: a,
  },
  o,
  s,
  c,
  l
) {
  let u = r ?? e,
    d = i ?? t,
    f = a ?? n,
    [p, m] = ze(),
    h = S({ lastPresence: !1, lastAnimate: d, hasMounted: !1, running: !1 }),
    g = Xr(() => {
      let e = u ?? c;
      if (!B(e)) return { values: Wy() };
      let t = {};
      for (let n in e) {
        let r = B(e) ? e[n] : void 0;
        if (!z(r)) continue;
        t[n] = r;
      }
      return { values: Wy(t) };
    });
  Xa(
    o,
    (e) => {
      let { hasMounted: t } = h.current;
      if (t && d) return;
      let n = Ge.get(e);
      if (n)
        for (let e in (Object.assign(h.current, { hasMounted: !0 }),
        g.values)) {
          if (!ps(e)) continue;
          let t = c?.[e];
          n.setBaseTarget(e, z(t) ? t : Gy[e]);
        }
    },
    [d]
  );
  let _ = Be();
  Xa(o, (e) => {
    if (!s) {
      m?.();
      return;
    }
    if (e === null) return;
    if (p !== h.current.lastPresence) {
      Object.assign(h.current, { lastPresence: p }),
        p
          ? u &&
            d &&
            (Object.assign(h.current, { running: !0 }),
            ys(d, g, _, o, l).then(() =>
              Object.assign(h.current, { running: !1 })
            ))
          : f
          ? (Object.assign(h.current, { running: !0 }),
            ys(f, g, _, o, l)
              .then(() => Object.assign(h.current, { running: !1 }))
              .then(() => m()))
          : m();
      return;
    }
    let { lastAnimate: t, running: n } = h.current,
      r = !at(d, t);
    !r ||
      !d ||
      (Object.assign(h.current, { lastAnimate: d }),
      ys(d, g, _, o, l, !n).then(() =>
        Object.assign(h.current, { running: !1 })
      ));
  });
  let v = s && d;
  return T(() => ({ values: g.values, style: v ? Ky : qy }), [v]);
}
function xs(e, t) {
  let n = 0,
    r = e;
  for (; r && r !== t && r instanceof HTMLElement; )
    (n += r.offsetTop), (r = r.offsetParent);
  return n;
}
function Ss(e, t = 0, n) {
  var r;
  let i = [],
    a = [];
  for (let o = e.length; o >= 0; o--) {
    let { ref: s, offset: c } = e[o] ?? {};
    if (!s || !s.current) continue;
    let l = xs(s.current, document.documentElement),
      u = l - Qy - (c ?? 0) - t,
      d = (r = s.current)?.clientHeight ?? 0,
      f = i[i.length - 1],
      p = Math.max(u + d, 0);
    i.push(u),
      a.unshift(
        Math.max(u, 0),
        f === void 0 ? p : Math.min(p, Math.max(f - 1, 0))
      ),
      n?.(o);
  }
  return a;
}
function Cs(e, t = 0) {
  return e < t ? `up` : `down`;
}
function ws(e, t, n = {}) {
  let { direction: r, target: i } = e ?? {},
    { repeat: a = !0, enabled: o = !0 } = n,
    s = dt();
  d.useEffect(() => {
    if (!r || !o) return;
    let e,
      n = 0,
      s,
      c;
    return Ae((o, { y: l }) => {
      if ((!a && c === i) || l.current > l.scrollLength || l.current < 0)
        return;
      let u = Cs(l.current, e);
      e = l.current;
      let d = u !== s;
      if (((s = u), d)) n = l.current;
      else {
        let e = Math.abs(l.current - n);
        if (e < $y) return;
        let a = u === r ? i : void 0;
        a !== c && t(a), (c = a);
      }
    });
  }, [s, r, a, i, o, t]);
}
function Ts(e, t, n) {
  let r = Ss(e, t),
    i = [...tb],
    a = r[0];
  if (!z(a)) return nb;
  if ((a > 1 && (r.unshift(0, a - 1), i.unshift(`initial`, `initial`)), n)) {
    let e = r.length - 1,
      t = r[e];
    if (!z(t)) return nb;
    r.push(t + 1), i.push(`exit`);
  }
  return { inputRange: r, outputRange: i };
}
function Es(e) {
  return {
    x: e?.x ?? Gy.x,
    y: e?.y ?? Gy.y,
    scale: e?.scale ?? Gy.scale,
    opacity: e?.opacity ?? Gy.opacity,
    transformPerspective: e?.transformPerspective ?? Gy.transformPerspective,
    rotate: e?.rotate ?? Gy.rotate,
    rotateX: e?.rotateX ?? Gy.rotateX,
    rotateY: e?.rotateY ?? Gy.rotateY,
    skewX: e?.skewX ?? Gy.skewX,
    skewY: e?.skewY ?? Gy.skewY,
    transition: e?.transition ?? void 0,
  };
}
function Ds({
  opacity: e,
  targetOpacity: t,
  perspective: n,
  enter: r,
  exit: i,
  animate: a,
  ...o
}) {
  return d.useMemo(
    () => ({
      initial: r ?? Es({ ...o, opacity: e ?? t ?? 1, transformPerspective: n }),
      animate: a ?? Es({ opacity: t }),
      exit: i ?? Es(),
    }),
    [a, o, r, i, e, t, n]
  );
}
function Os(e, t) {
  let n = Be(),
    r = Ds(e),
    i = e.styleAppearEffectEnabled,
    a = ms(i ? r.initial : r.animate, i),
    o = d.useRef({
      isPlaying: !1,
      scheduledAppearState: void 0,
      lastAppearState: !e.styleAppearEffectEnabled,
    }),
    s = dt(),
    c = d.useRef(),
    l = d.useCallback(async ({ transition: i, ...o }, s) => {
      let l = i ?? r.animate.transition ?? e.transition;
      await c.current;
      let u = Ge.get(t.current);
      c.current = Promise.all(
        Uy.map((e) => {
          s && a.values[e].set(r.initial[e] ?? Gy[e]);
          let t = o[e] ?? Gy[e];
          return (
            u && typeof t != `object` && u.setBaseTarget(e, t),
            new Promise((r) => {
              if (n && e !== `opacity`) z(t) && a.values[e].set(t), r();
              else {
                let n = {
                  restDelta: e === `scale` ? 0.001 : void 0,
                  ...l,
                  onComplete: () => r(),
                };
                typeof t == `number` && ge(a.values[e], t, n);
              }
            })
          );
        })
      );
    }, []),
    u = e.animateOnce && o.current.lastAppearState === !0,
    f = !e.targets && e.styleAppearEffectEnabled && !e.scrollDirection && !u;
  $a(
    t,
    (e) => {
      let { isPlaying: t, lastAppearState: n } = o.current;
      if (t) {
        o.current.scheduledAppearState = e;
        return;
      }
      (o.current.scheduledAppearState = void 0),
        (o.current.lastAppearState = e),
        n !== e && l(e ? r.animate : r.exit, e);
    },
    { enabled: f, animateOnce: !!e.animateOnce, threshold: { y: e.threshold } }
  );
  let p = e.targets && i && !e.scrollDirection;
  return (
    d.useEffect(() => {
      if (!p) return;
      let t = { initial: !0 },
        n = `initial`;
      return Ae((i, { y: a }) => {
        let { targets: o } = e;
        if (!o || !o[0] || (o[0].ref && !o[0].ref.current)) return;
        let { inputRange: s, outputRange: c } = Ts(
          o,
          (e.threshold ?? 0) * a.containerLength,
          !!e.exit
        );
        if (s.length === 0 || s.length !== c.length) return;
        let u = Ne(a.current, s, c);
        if ((e.animateOnce && t[u]) || ((t[u] = !0), n === u)) return;
        n = u;
        let d = j_(r)[u];
        d && l(d);
      });
    }, [s, p]),
    ws(e.scrollDirection, (e) => void l(e ?? r.animate), {
      enabled: i,
      repeat: !e.animateOnce,
    }),
    ft(() => {
      var t;
      if (i && !(!e.targets && !e.scrollDirection))
        for (let e of Uy) a.values[e].set((t = r.initial)?.[e] ?? Gy[e]);
    }),
    T(() => ({ values: a.values, style: i ? Ky : qy }), [i])
  );
}
function ks(e, t) {
  let n = d.useRef({});
  d.useEffect(() => {
    if (t !== void 0)
      for (let r of Rp(e)) {
        let i = function () {
            let e = n.current[r];
            e && e.stop(),
              (n.current[r] = _e({
                keyframes: [a.get(), s],
                velocity: a.getVelocity(),
                ...t,
                restDelta: 0.001,
                onUpdate: o,
              }));
          },
          a = e[r],
          o,
          s;
        a.attach((e, t) => ((s = e), (o = t), ye.postRender(i), a.get()));
      }
  }, [JSON.stringify(t)]);
}
function As(e, t) {
  let n = ab(),
    r = Ss(e, t, (t) => {
      var r, i, a;
      let o = (r = e[t - 1])?.target,
        s = (i = e[t])?.target;
      for (let e of Uy)
        (a = n[e]) == null || a.unshift(o?.[e] ?? 0, s?.[e] ?? 0);
    });
  return { inputRange: r, effectKeyOutputRange: n };
}
function js(e) {
  var t;
  let n = ab();
  for (let { target: r } of e)
    for (let e of Uy) (t = n[e]) == null || t.push(r[e]);
  return n;
}
function Ms(
  {
    transformTrigger: e,
    styleTransformEffectEnabled: t,
    transformTargets: n,
    spring: r,
    transformViewportThreshold: i = 0,
  },
  a
) {
  let o = Be(),
    s = ms(ib(n, o), t),
    c = !t || !n,
    l = e === `onScrollTarget`,
    u = dt();
  return (
    f(() => {
      if (!(c || !l))
        return Ae((e, { y: t }) => {
          if (!n[0] || (n[0].ref && !n[0].ref.current)) return;
          let { inputRange: r, effectKeyOutputRange: a } = As(
            n,
            i * t.containerLength
          );
          if (r.length !== 0)
            for (let e of Uy) {
              if (
                (o && e !== `opacity`) ||
                r.length !== a[e].length ||
                a[e][0] === void 0
              )
                continue;
              s.values[e].set(Ne(t.current, r, a[e]));
            }
        });
    }, [o, l, i, n, c]),
    Xa(
      a,
      (t) => {
        if (c || l || t === null) return;
        let r = js(n);
        return Ae(
          (e, { y: t }) => {
            for (let e of Uy) {
              if (
                (o && e !== `opacity`) ||
                ob.length !== r[e].length ||
                r[e][0] === void 0
              )
                continue;
              s.values[e].set(Ne(t.progress, ob, r[e]));
            }
          },
          e === `onInView`
            ? { target: t ?? void 0, offset: [`start end`, `end end`] }
            : void 0
        );
      },
      [u, o, e, l, n, c]
    ),
    ks(s.values, r),
    ft(() => {
      if (c) return;
      let e = ib(n, o);
      for (let t of Uy) s.values[t].set(e?.[t] ?? Gy[t]);
    }),
    d.useMemo(() => ({ values: s.values, style: t ? Ky : qy }), [t])
  );
}
function Ns(e, t, n) {
  return (!(e in n) && t in n) || n[e] === !0;
}
function Ps(e) {
  let t = {
    parallax: {},
    styleAppear: {},
    styleTransform: {},
    presence: { animate: e.animate, initial: e.initial, exit: e.exit },
    loop: {},
    forwardedProps: {},
    targetOpacityValue: e.__targetOpacity,
    withPerspective: e.__perspectiveFX,
    inSmartComponent: e.__smartComponentFX,
  };
  for (let n in e) {
    if (
      n === `__targetOpacity` ||
      n === `__perspectiveFX` ||
      n === `__smartComponentFX`
    )
      continue;
    let r = Qo(n);
    if (r)
      for (let i of cb) {
        let a = sb[i];
        if (a?.has(r)) {
          t[i][r] = j_(e)[n];
          break;
        }
      }
    else t.forwardedProps[n] = j_(e)[n];
  }
  return (
    (t.parallax.parallaxTransformEnabled = Ns(
      `parallaxTransformEnabled`,
      `speed`,
      t.parallax
    )),
    (t.styleAppear.styleAppearEffectEnabled = Ns(
      `styleAppearEffectEnabled`,
      `animateOnce`,
      t.styleAppear
    )),
    t
  );
}
function Fs(e) {
  return B(e) && db in e;
}
function Is(e, t) {
  if (!e || !B(e)) return t;
  for (let n in e) {
    let r = e[n];
    if (!we(r) || !ps(n) || !z(r.get())) continue;
    t[n].push(r);
  }
}
function Ls(e) {
  return R(e) || Array.isArray(e);
}
function Rs() {
  return d.useContext(pb);
}
function zs(e) {
  return (
    e instanceof Error &&
    (e.message.includes(
      `A component suspended while responding to synchronous input.`
    ) ||
      e.message.includes(`Minified React error #426`))
  );
}
function Bs() {
  if (k === void 0 || gb)
    return x(`div`, {
      hidden: !0,
      dangerouslySetInnerHTML: {
        __html: `<!-- SuspenseThatPreservesDOM fallback rendered -->`,
      },
    });
  throw vb;
}
function Vs({ children: e }) {
  let t = w(bb);
  return t ? x(y, { children: e }) : x(a, { fallback: yb, children: e });
}
function Hs() {
  return x(`div`, {
    hidden: !0,
    dangerouslySetInnerHTML: {
      __html: `<!-- Code boundary fallback rendered -->`,
    },
  });
}
function Us(e, t) {
  if (!Wp || Math.random() > 0.01) return;
  let n = e instanceof Error && typeof e.stack == `string` ? e.stack : null,
    r = t?.componentStack;
  Pt(`published_site_load_recoverable_error`, {
    message: String(e),
    stack: n,
    componentStack: n ? void 0 : r,
  });
}
function Ws(...e) {
  console.error(...e);
}
function Gs() {
  return Y.current() !== Y.canvas;
}
function Ks({ getErrorMessage: e, fallback: t, children: n }) {
  return Gs()
    ? x(qs, {
        fallback: t,
        children: x(Sb, { fallback: t, getErrorMessage: e, children: n }),
      })
    : n;
}
function qs({ children: e, fallback: t = xb }) {
  return k === void 0
    ? x(a, { fallback: t, children: e })
    : x(Vs, { children: e });
}
function Js() {
  return d.useContext(wb);
}
function Ys() {
  let e = Js(),
    t = d.useMemo(() => {
      if (!e) return;
      let t = e;
      for (; t.parent && t.parent.level > 0; ) t = t.parent;
      return t;
    }, [e]);
  return t;
}
function Xs({ children: e, scopeId: t, nodeId: n }) {
  let r = Js(),
    i = d.useMemo(
      () => ({ level: (r?.level ?? 0) + 1, scopeId: t, nodeId: n, parent: r }),
      [t, n, r]
    );
  return x(wb.Provider, { value: i, children: e });
}
function Zs(e, t) {
  return `${Tb}${e}:${t}`;
}
function Qs(e, t) {
  return ec(`component`, e, t);
}
function $s(e, t) {
  return ec(`override`, e, t);
}
function ec(e, t, n) {
  return `A code ${e} crashed while rendering due to the error above. To find and fix it, open the project in the editor \u2192 open Quick Actions (press Cmd+K or Ctrl+K) \u2192 paste this: ${Zs(
    t,
    n
  )} \u2192 click \u201CShow Layer\u201D.`;
}
function tc(e, t, n, r, i, a) {
  let o = rc(e, t, n, a);
  return (o && !i && r) || (o && i);
}
function nc(e, t, n, r) {
  return rc(e, t, n, r);
}
function rc(e, t, n, r) {
  if (xt(n)) return !0;
  let i = e === t;
  return !!(n === 1 && r && i);
}
function ic(e, t, n, r, i, a) {
  let o = Js();
  if (xt(t) || xt(n)) return x(Cb, { children: e });
  let s = tc(t, o?.scopeId, o?.level, r ?? !1, i ?? !1, a ?? !1);
  return (
    s &&
      (e = x(Ks, {
        getErrorMessage: Qs.bind(null, t, n),
        fallback: null,
        children: e,
      })),
    i && (e = x(Xs, { scopeId: t, nodeId: n, children: e })),
    e
  );
}
function ac(e, t, n) {
  let r = {};
  for (let [, i] of e)
    for (let e of i) {
      let i = r[e] ?? t[e] ?? n[e];
      i && (r[e] = i);
    }
  return r;
}
function oc(e) {
  return !(!e || e.placement || e.alignment);
}
function sc(e) {
  switch (e) {
    case `start`:
      return `0%`;
    case `center`:
      return `-50%`;
    case `end`:
      return `-100%`;
    default:
      H(e);
  }
}
function cc(e, t = `center`) {
  switch (e) {
    case `top`:
      return `${sc(t)}, -100%`;
    case `right`:
      return `0%, ${sc(t)}`;
    case `bottom`:
      return `${sc(t)}, 0%`;
    case `left`:
      return `-100%, ${sc(t)}`;
    default:
      return `-50%, -50%`;
  }
}
function lc(e, t) {
  let n = document.elementFromPoint(e, t);
  for (; n; ) {
    if (n === document.body) return;
    let e = n.getAttribute(`data-framer-cursor`);
    if (e) return e;
    if (n.hasAttribute(Fb)) {
      let e = n.getAttribute(Fb);
      (n = n.parentElement), e && (n = document.getElementById(e) ?? n);
    } else n = n.parentElement;
  }
}
function uc(e) {
  for (let t in e) return !1;
  return !0;
}
function dc(e) {
  let { registerCursors: t } = w(kb),
    n = Xr(() => e),
    r = u();
  f(() => t(n, r), [t, r]);
}
function fc(e, t) {
  return e instanceof HTMLAnchorElement
    ? e
    : e instanceof Element
    ? e === t
      ? null
      : fc(e.parentElement, t)
    : null;
}
function pc({ children: e }) {
  return x(Vs, { children: e });
}
function mc(e) {
  return s(function (t, n) {
    return x(pc, { children: x(e, { ...t, ref: n }) });
  });
}
function hc(e) {
  return !!(e && typeof e == `object` && zb in e);
}
function gc() {
  var e;
  let t = b.connection || b.mozConnection || b.webkitConnection || {},
    n = b.deviceMemory && b.deviceMemory > Hb,
    r,
    i,
    a;
  function o() {
    (r = t.effectiveType || ``),
      (i = t.saveData || r.includes(`2g`)),
      (a = r === `3g` || n ? Ub : Wb);
  }
  (e = t.addEventListener) == null || e.call(t, `change`, o), o();
  let s = new IntersectionObserver(u, { threshold: Vb }),
    c = 0;
  async function l(e, t) {
    if (i) return;
    let n = qb.get(e);
    if (!n?.size || Kb.has(e)) return;
    ++c, Kb.add(e);
    let r = Nt(e).catch(() => {});
    s.unobserve(t), Gb.delete(t);
    for (let e of n) s.unobserve(e), Gb.delete(e);
    n.clear(), qb.delete(e), await r, --c;
  }
  function u(e) {
    var t;
    for (let n of e) {
      let e = n.target,
        r = Gb.get(e);
      if (!r || Kb.has(r)) {
        s.unobserve(e), Gb.delete(e);
        continue;
      }
      let i = qb.get(r),
        o = (t = qb.get(r))?.size ?? 0;
      if (n.isIntersecting) {
        if (c >= a) continue;
        i ? i.add(e) : qb.set(r, new Set([e])),
          setTimeout(l.bind(void 0, r, e), Bb);
      } else i && i.delete(e), o <= 1 && qb.delete(r);
    }
  }
  return (e, t) => {
    if (!Kb.has(e))
      return (
        Gb.set(t, e),
        s.observe(t),
        () => {
          Gb.delete(t), s.unobserve(t);
        }
      );
  };
}
function _c(e, t, n) {
  var r, i;
  let a = (i = (r = Xb?.get(n?.id ?? Yb))?.get(e.collectionId))?.get(
    e.collectionItemId
  );
  if (a) return a;
  let o = Xb.get(n?.id ?? Yb) ?? new Map();
  Xb.set(n?.id ?? Yb, o);
  let s = o.get(e.collectionId) ?? new Map();
  o.set(e.collectionId, s);
  let c = new Rb(async () => {
    try {
      let r = t[e.collectionId];
      if (!r)
        throw Error(
          `Key not found in collection utils for collection id: "${e.collectionId}"`
        );
      let i = await r();
      if (!i) throw Error(`Collection does not contain utility functions`);
      let a = await i.getSlugByRecordId(e.collectionItemId, n ?? void 0);
      return a;
    } catch (e) {
      console.warn(
        `Failed to resolve slug: ${
          e instanceof Error ? e.message : `Unknown error`
        }`
      );
      return;
    }
  });
  return s.set(e.collectionItemId, c), c;
}
async function vc(e, t, n, r) {
  async function i(e) {
    if (!e || !n) return {};
    let t = {};
    for (let i in e) {
      let a = e[i];
      V(a, `unresolvedSlug should be defined`);
      let o = _c(a, n, r);
      await o.preload();
      let s = o.read();
      s && (t[i] = s);
    }
    return t;
  }
  let [a, o] = await Promise.allSettled([i(e), i(t)]);
  return {
    path: a.status === `fulfilled` ? a.value : void 0,
    hash: o.status === `fulfilled` ? o.value : void 0,
  };
}
function yc(e, t, n, r) {
  let i = [];
  function a(e) {
    if (!e || !n) return;
    let t = {};
    for (let a in e) {
      let o = e[a];
      V(o, `unresolvedSlug should be defined`);
      let s = _c(o, n, r),
        c = s.preload();
      if (c) i.push(c);
      else {
        let e = s.read();
        e && (t[a] = e);
      }
    }
    return t;
  }
  let o = { path: a(e), hash: a(t) };
  if (i.length) throw Promise.allSettled(i);
  return o;
}
function bc(e) {
  return e === void 0
    ? !1
    : !!(e.startsWith(`#`) || e.startsWith(`/`) || e.startsWith(`.`));
}
function xc(e, t) {
  try {
    let t = new URL(e);
    return !!t.protocol;
  } catch {}
  return t;
}
async function Sc(e, t, n, r, i) {
  let {
      webPageId: a,
      hash: o,
      pathVariables: s,
      hashVariables: c,
      unresolvedHashSlugs: l,
      unresolvedPathSlugs: u,
    } = n,
    d = await vc(u, l, e.collectionUtils, r);
  return Tc(e, t, a, o, i, s, c, d);
}
function Cc(e, t, n, r, i) {
  let {
      webPageId: a,
      hash: o,
      pathVariables: s,
      hashVariables: c,
      unresolvedHashSlugs: l,
      unresolvedPathSlugs: u,
    } = n,
    d = yc(u, l, e.collectionUtils, r);
  return Tc(e, t, a, o, i, s, c, d);
}
function wc(e, t, n) {
  if (!e.routes || !e.getRoute) return;
  let r = bc(t);
  if (r)
    try {
      let [r, i] = t.split(`#`, 2);
      V(r !== void 0, `A href must have a defined pathname.`);
      let [a] = r.split(`?`, 2);
      V(a !== void 0, `A href must have a defined pathname.`);
      let { routeId: o, pathVariables: s } = zn(e.routes, a),
        c = e.getRoute(o);
      if (c) {
        let e = Object.assign({}, n, s);
        return {
          routeId: o,
          route: c,
          href: t,
          elementId: i,
          pathVariables: e,
        };
      }
    } catch {}
}
function Tc(e, t, n, r, i, a, o, s) {
  var c;
  let l = { ...i, ...a, ...s?.path },
    u = { ...i, ...o, ...s?.hash },
    d = (c = e.getRoute)?.call(e, n),
    f = yn(d, {
      currentRoutePath: t?.path,
      currentPathVariables: t?.pathVariables,
      hash: r,
      pathVariables: l,
      hashVariables: u,
      preserveQueryParams: e.preserveQueryParams,
      siteCanonicalURL: e.siteCanonicalURL,
    }),
    p = f.split(`#`, 2)[1];
  return { routeId: n, route: d, href: f, elementId: p, pathVariables: l };
}
function Ec(e, t, n) {
  var r;
  if (R(e)) {
    let r = bc(e);
    if (!t.routes || !t.getRoute || !n || !r) return;
    let [i] = e.split(`#`, 2);
    if (i === void 0) return;
    let [a] = i.split(`?`, 2);
    if (a === void 0) return;
    let { routeId: o } = zn(t.routes, a);
    return t.getRoute(o);
  }
  let { webPageId: i } = e;
  return (r = t.getRoute)?.call(t, i);
}
function Dc(e) {
  return R(e) && e.startsWith(`data:${tx}`);
}
function Oc(e) {
  if (Dc(e))
    try {
      let t = new URL(e),
        n = t.pathname.substring(tx.length),
        r = t.searchParams,
        i = r.has(Zb) ? r.get(Zb) : void 0,
        a,
        o = r.get(Qb),
        s = r.get($b),
        c = r.get(ex);
      if (o && s && c) {
        let e = Object.fromEntries(new URLSearchParams(c).entries());
        a = { collection: o, collectionItemId: s, pathVariables: e };
      }
      return {
        target: n === `none` ? null : n,
        element: i === `none` ? void 0 : i,
        collectionItem: a,
      };
    } catch {
      return;
    }
}
function kc(e, t, n) {
  var r;
  let i = t.getAttribute(`data-framer-page-link-target`),
    a,
    o;
  if (i) {
    a = t.getAttribute(`data-framer-page-link-element`) ?? void 0;
    let e = t.getAttribute(`data-framer-page-link-path-variables`);
    e && (o = Object.fromEntries(new URLSearchParams(e).entries()));
  } else {
    let e = t.getAttribute(`href`);
    if (!e) return !1;
    let n = Oc(e);
    if (!n || !n.target) return !1;
    (i = n.target),
      (a = n.element ?? void 0),
      (o = (r = n.collectionItem)?.pathVariables);
  }
  let s = a ? t.dataset.framerSmoothScroll !== void 0 : void 0;
  return e(i, a, Object.assign({}, n, o), s), !0;
}
function Ac(e) {
  if (!Dc(e)) return e;
  let t = Oc(e);
  if (!t) return;
  let { target: n, element: r, collectionItem: i } = t;
  if (n) return { webPageId: n, hash: r ?? void 0, pathVariables: jc(i) };
}
function jc(e) {
  if (!e) return;
  let t = {};
  for (let n in e.pathVariables) {
    let r = e.pathVariables[n];
    r && (t[n] = r);
  }
  return t;
}
function Mc() {
  var e;
  let t = w(rx),
    n = (e = ut())?.pathVariables,
    r = t || n;
  return r;
}
function Nc(e, { webPageId: t, hash: n, pathVariables: r }, i) {
  if (t !== e.id || n) return !1;
  if (e.path && e.pathVariables) {
    let t = Object.assign({}, i, r);
    for (let [, n] of e.path.matchAll(nx))
      if (!n || e.pathVariables[n] !== t[n]) return !1;
  }
  return !0;
}
function Pc(e, t) {
  let n = bc(e),
    r = {
      href: e === `` || xc(e, n) ? e : `https://${e}`,
      target: Fc(t?.openInNewTab, n),
      rel: n ? void 0 : Ic(`noopener`, t?.rel),
    };
  return (
    t?.preserveParams &&
      ((r.href = Bt(r.href ?? e)), (r[`data-framer-preserve-params`] = !0)),
    t?.trackLinkClick &&
      (r.onClick = () => {
        t.trackLinkClick(e);
      }),
    r
  );
}
function Fc(e, t) {
  return e === void 0 ? (t ? void 0 : `_blank`) : e ? `_blank` : void 0;
}
function Ic(e, t) {
  if (e && !t) return e;
  if (!e && t) return t;
  if (e && t) return `${e} ${t}`;
}
function Lc(e) {
  var t, n;
  return `${e.scopeId}:${e.nodeId}:${
    (t = e.furthestExternalComponent)?.scopeId
  }:${(n = e.furthestExternalComponent)?.nodeId}`;
}
function Rc() {
  return Y.current() === Y.canvas;
}
function zc(e, n, r, i, a, o) {
  let s = w(ox),
    c = Ys(),
    l = T(
      () => ({ scopeId: n, nodeId: r, furthestExternalComponent: c }),
      [n, r, c]
    ),
    u = ct(),
    d = ut(),
    f = T(() => {
      let e = hc(i) ? i : Ac(i);
      if (e) return Ec(e, u, d);
    }, [d, i, u]),
    { replaceNestedLinks: p } = H_(),
    m = Rc(),
    h = !!(p && !m && s?.nodeId && l.nodeId),
    g = E(
      (e) => {
        var t;
        if (!a.href) return;
        e.preventDefault(), e.stopPropagation();
        let n = /Mac|iPod|iPhone|iPad/u.test(b.userAgent);
        if (n ? e.metaKey : e.ctrlKey) {
          Hc(a.href, ``, `_blank`);
          return;
        }
        f ? (t = a.navigate) == null || t.call(a) : Hc(a.href, a.rel, a.target);
      },
      [a, f]
    ),
    _ = E(
      (e) => {
        a.href &&
          (e.preventDefault(), e.stopPropagation(), Hc(a.href, ``, `_blank`));
      },
      [a]
    ),
    y = E(
      (e) => {
        var t;
        a.href &&
          e.key === `Enter` &&
          (e.preventDefault(),
          e.stopPropagation(),
          f
            ? (t = a.navigate) == null || t.call(a)
            : Hc(a.href, a.rel, a.target));
      },
      [a, f]
    );
  Xa(
    o,
    (e) => {
      e !== null && h && (e.dataset.hydrated = `true`);
    },
    [h]
  );
  let S = e;
  return (
    h &&
      (v.forEach(e, (e) => {
        Vc(e) &&
          (V(
            Bc(s),
            "outerLink must have nodeId defined at this point; this was verified with `shouldReplaceLink` above"
          ),
          V(
            Bc(l),
            "innerLink must have nodeId defined at this point; this was verified with `shouldReplaceLink` above"
          ),
          ax.collectNestedLink(s, l));
      }),
      (S = v.map(e, (e) => {
        if (!Vc(e)) return e;
        let n = Uc(e.type),
          { children: r, ...i } = e.props,
          a = {
            ...i,
            "data-nested-link": !0,
            role: `link`,
            tabIndex: 0,
            onClick: g,
            onAuxClick: _,
            onKeyDown: y,
            as: i.as && Uc(i.as),
          },
          o = `ref` in e ? e.ref : void 0;
        return t(n, { ...a, ref: o }, r);
      }))),
    x(ox.Provider, { value: l, children: S })
  );
}
function Bc(e) {
  return !xt(e?.nodeId);
}
function Vc(e) {
  return r(e) && (Uc(e.type) !== e.type || Uc(e.props.as) !== e.props.as);
}
function Hc(e, t, n) {
  let r = document.createElement(`a`);
  (r.href = e),
    t && (r.rel = t),
    n && (r.target = n),
    document.body.appendChild(r),
    r.click(),
    r.remove();
}
function Uc(e) {
  return e === `a` ? `span` : Ce(e) && Pe(e) === `a` ? Ee.span : e;
}
function Wc({
  nodeId: e,
  clickTrackingId: t,
  router: n,
  href: r,
  activeLocale: i,
}) {
  return E(
    async (a) => {
      var o, s, c, l, u;
      if (!(o = n.pageviewEventData)?.current) return;
      let d =
          n.pageviewEventData.current instanceof Promise
            ? await n.pageviewEventData.current
            : n.pageviewEventData.current,
        f = hc(r) ? r : Ac(r);
      if (!hc(f))
        return Pt(
          `published_site_click`,
          {
            ...d,
            href: a ? Gc(a) : null,
            nodeId: e ?? null,
            trackingId: t || null,
            targetRoutePath: null,
            targetWebPageId: null,
            targetCollectionItemId: null,
          },
          `eager`
        );
      let p = f.webPageId,
        m = (s = n?.getRoute)?.call(n, p),
        h = m?.path ?? null,
        g = null;
      if (
        m?.collectionId &&
        f.pathVariables &&
        (c = n.collectionUtils)?.[m.collectionId]
      ) {
        let e = await (u = (l = n.collectionUtils)[m.collectionId])?.call(l),
          [t] = Object.values(f.pathVariables);
        e &&
          typeof t == `string` &&
          (g = (await e.getRecordIdBySlug(t, i || void 0)) ?? null);
      }
      return Pt(
        `published_site_click`,
        {
          ...d,
          href: a ? Gc(a) : null,
          nodeId: e ?? null,
          trackingId: t ?? null,
          targetRoutePath: h,
          targetWebPageId: p,
          targetCollectionItemId: g,
        },
        `eager`
      );
    },
    [e, t, n, r, i]
  );
}
function Gc(e) {
  try {
    let t = new URL(e, q.document.baseURI);
    return t.origin === q.location.origin
      ? t.pathname + t.search + t.hash
      : t.href;
  } catch {
    return e;
  }
}
function Kc(e, t, n, r, i, a) {
  var o, s;
  let c = (o = e.getRoute)?.call(e, t);
  c && Ke(c?.page) && c.page.preload(),
    (s = e.navigate) == null || s.call(e, t, n, r, i, a);
}
function qc(e, t, n, r, i, a, o) {
  return async (s) => {
    let c = s.metaKey,
      l = fc(s.target),
      u = !l || l.getAttribute(`target`) === `_blank`,
      d = !c && !u,
      f = () => void r(n);
    if (!d) {
      await jt({
        priority: `user-blocking`,
        ensureContinueBeforeUnload: !0,
        continueAfter: `paint`,
      }),
        f();
      return;
    }
    s.preventDefault(), Kc(e, t, i, a, o, f);
  };
}
function Jc(e, t, n, r, i) {
  if (!n) return Pc(e, r);
  let a = wc(t, e, i);
  if (!a) return Pc(e, r);
  let { routeId: o, route: s, elementId: c, pathVariables: l } = a;
  if (!s) return Pc(e, r);
  let u = yn(s, {
      currentRoutePath: n.path,
      currentPathVariables: n.pathVariables,
      hash: c,
      pathVariables: l,
      preserveQueryParams: t.preserveQueryParams && !Gp,
      siteCanonicalURL: t.siteCanonicalURL,
    }),
    d = Fc(r.openInNewTab, !0);
  return {
    href: u,
    target: d,
    onClick: qc(t, o, u, r.trackLinkClick, c, l, r.smoothScroll),
    navigate: () => Kc(t, o, c, l, r.smoothScroll),
    "data-framer-page-link-current": (!c && n.id === o) || void 0,
  };
}
function Yc(e, t, n) {
  let r = { ...e, ...t, ref: n },
    { onTap: i, onClick: a } = t;
  if (!i && !a) return r;
  let { onClick: o, onTap: s } = e;
  return {
    ...r,
    onClick:
      a || o
        ? (e) => {
            vt(o) && o?.(e), a?.(e);
          }
        : void 0,
    onTap:
      i || s
        ? (e, t) => {
            vt(s) && s?.(e, t), i?.(e, t);
          }
        : void 0,
  };
}
function Xc(e, t, n) {
  let r = !!(t && tv());
  if (!r) return e;
  let { onClick: i, ...a } = e;
  return i ? (n ? { ...a, onTap: i, onClick: Zc } : { ...a, onTap: i }) : e;
}
function Zc(e) {
  let t = fc(e.target);
  !t || t.getAttribute(`target`) === `_blank` || e.preventDefault();
}
function Qc(e, t, n, r, i) {
  let a = hc(e) ? e : Ac(e);
  if (!hc(a)) return R(e) ? Pc(e).href : void 0;
  if (!t.getRoute || !t.currentRouteId) return;
  let o = t.getRoute(t.currentRouteId),
    {
      webPageId: s,
      hash: c,
      pathVariables: l,
      hashVariables: u,
      unresolvedHashSlugs: d,
      unresolvedPathSlugs: f,
    } = a,
    p = t.getRoute(s),
    m = f || d ? i?.(f, d) : void 0,
    h = Object.assign({}, t.currentPathVariables, n, l, m?.path),
    g = Object.assign({}, t.currentPathVariables, n, u, m?.hash);
  return yn(p, {
    currentRoutePath: o?.path,
    currentPathVariables: t.currentPathVariables,
    hash: c,
    pathVariables: h,
    hashVariables: g,
    relative: !1,
    preserveQueryParams: t.preserveQueryParams,
    onlyHash: r,
    siteCanonicalURL: t.siteCanonicalURL,
  });
}
function $c() {
  return function () {
    async function e(e) {
      let t = new TextEncoder().encode(e),
        n = await crypto.subtle.digest(`SHA-256`, t);
      return Array.from(new Uint8Array(n))
        .map((e) => e.toString(16).padStart(2, `0`))
        .join(``);
    }
    function t(e) {
      let t = ``;
      for (let n = 0; n < e; n++)
        t +=
          `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789`.charAt(
            Math.floor(Math.random() * 62)
          );
      return t;
    }
    addEventListener(`message`, async (n) => {
      let { salt: r, difficulty: i, tokenLength: a, maxTime: o } = n.data,
        s = `0`.repeat(i),
        c = performance.now(),
        l = !0;
      for (; l; ) {
        let n = performance.now();
        if (n - c > o) {
          (l = !1), postMessage({ success: !1 });
          return;
        }
        let i = t(a),
          u = `${Date.now()}:${i}`,
          d = await e(r + u);
        if (d.startsWith(s)) {
          postMessage({ success: !0, secret: u, hash: d });
          return;
        }
      }
    });
  }.toString();
}
async function el() {
  return new Promise((e, t) => {
    let n = URL.createObjectURL(
        new Blob([`(`, $c(), `)()`], { type: `application/javascript` })
      ),
      r = new Worker(n);
    (r.onmessage = (t) => {
      r.terminate(),
        URL.revokeObjectURL(n),
        t.data.success
          ? e({ secret: t.data.secret, hash: t.data.hash })
          : e(void 0);
    }),
      (r.onerror = (e) => {
        r.terminate(), URL.revokeObjectURL(n), t(e);
      }),
      r.postMessage({ salt: lx, difficulty: ux, tokenLength: dx, maxTime: fx });
  });
}
function tl(e) {
  return Array.from(e.keys()).map(encodeURIComponent).join(`,`);
}
function nl(e, t) {
  try {
    let n = t.cookie.match(`(^|;) ?framerFormsUTMTags=([^;]*)(;|$)`);
    if (n !== null && n[2]) {
      let t = JSON.parse(decodeURIComponent(n[2]));
      if (!t || typeof t != `object`) return;
      [
        `utm_source`,
        `utm_medium`,
        `utm_campaign`,
        `utm_term`,
        `utm_content`,
        `gclid`,
      ].forEach((n) => {
        typeof t[n] == `string` && e.append(n, t[n]);
      });
    }
  } catch {}
}
function rl({ router: e, nodeId: t, submitTrackingId: n }) {
  var r;
  (r = e?.pageviewEventData)?.current &&
    (e.pageviewEventData.current instanceof Promise
      ? e.pageviewEventData.current.then((e) => {
          il(e, t, n);
        })
      : il(e.pageviewEventData.current, t, n));
}
function il(e, t, n) {
  return Pt(
    `published_site_form_submit`,
    { ...e, nodeId: t ?? null, trackingId: n || null },
    `eager`
  );
}
function al({ state: e }, { type: t }) {
  switch (t) {
    case `complete`:
      return e === `error` ? _x : gx;
    case `incomplete`:
      return e === `error` ? _x : hx;
    case `submit`:
      return px;
    case `success`:
      return mx;
    case `error`:
      return _x;
    default:
      H(t);
  }
}
function ol({ state: e }) {
  return e === `incomplete` || e === `complete`;
}
function sl(e) {
  e.preventDefault();
}
function cl(e, t) {
  let n = xc(e, !1) ? e : `https://${e}`,
    r = document.createElement(`a`);
  (r.href = n),
    (r.target = `_self`),
    (r.style.display = `none`),
    `current` in t &&
      t.current &&
      (t.current.appendChild(r), r.click(), r.remove());
}
function ll(e) {
  if (e.children.length === 0) return !1;
  for (let t of e.children)
    if (
      t instanceof HTMLInputElement ||
      t instanceof HTMLTextAreaElement ||
      t instanceof HTMLSelectElement
    ) {
      if (t.required && t.value === ``) return !0;
    } else {
      let e = ll(t);
      if (e) return !0;
    }
  return !1;
}
async function ul(e, t, n) {
  let r = await el();
  if (!r) throw Error(`Failed to calculate proof of work`);
  let i = await fetch(e, {
    body: t,
    method: `POST`,
    headers: {
      "Framer-Site-Id": n,
      "Framer-POW": r.secret,
      "Framer-Form-Fields": tl(t),
    },
  });
  if (i.ok) return i;
  {
    let e = await i.json(),
      t = `Failed to submit form`;
    throw dl(e) ? Error(`${t} - ${e.error.message}`) : Error(t);
  }
}
function dl(e) {
  return (
    typeof e == `object` &&
    !!e &&
    `error` in e &&
    B(e.error) &&
    `message` in e.error &&
    typeof e.error.message == `string`
  );
}
function fl(e, t) {
  if (e.routeId !== t.routeId) return !1;
  if (e.pathVariables === t.pathVariables) return !0;
  let n = e.pathVariables || {},
    r = t.pathVariables || {};
  return n.length === r.length && Object.keys(n).every((e) => n[e] === r[e]);
}
function pl() {
  let e = Intl.DateTimeFormat().resolvedOptions();
  (bx = e.timeZone), (xx = e.locale);
}
function ml() {
  let [e, t] = d.useState(0);
  return [e, d.useCallback(() => t((e) => e + 1), [])];
}
function hl(e, t, n) {
  let r = e && document.getElementById(e);
  if (r) {
    xl(r, t);
    return;
  }
  n || k.scrollTo(0, 0);
}
function gl(e) {
  let t = S([]);
  return (
    f(() => {
      var e;
      (e = t.current)?.length &&
        (t.current.forEach((e) => e()), (t.current = []));
    }, [e]),
    E((e) => {
      t.current.push(e);
    }, [])
  );
}
function _l(e) {
  if (!e) return Up;
  let t = !1;
  return () => {
    t || ((t = !0), e?.());
  };
}
function vl() {
  let e = Cn(),
    t = S(void 0);
  return E(
    async (n, r, i, a = !0) => {
      var o, s;
      let c = i !== void 0;
      (o = t.current) == null || o.abort();
      let l = a ? new AbortController() : void 0;
      t.current = l;
      let u = l?.signal,
        d = ht(u);
      if ((r.promise.finally(d), !c))
        return (t.current = void 0), n(u), r.promise;
      n(u);
      let f,
        p = new Promise((e, t) => {
          (f = e), u?.addEventListener(`abort`, t);
        }).catch(Up);
      if ((e(p, i, l), await r.promise, u?.aborted)) return;
      let m = (s = k.navigation)?.transition;
      f();
      try {
        await m?.finished;
      } catch (e) {
        console.error(`Navigation transition failed`, e);
      }
      u?.aborted || Dm();
    },
    [e]
  );
}
function yl({
  defaultPageStyle: e,
  disableHistory: t,
  initialPathVariables: n,
  initialRoute: r,
  notFoundPage: i,
  collectionUtils: a,
  routes: o,
  initialLocaleId: s,
  locales: l = Hp,
  preserveQueryParams: u = !1,
  LayoutTemplate: d,
  editorBar: f,
  siteCanonicalURL: p,
}) {
  Mn(),
    gn({
      disabled: t,
      routeId: r,
      initialPathVariables: n,
      initialLocaleId: s,
    });
  let m = cn(),
    [h, g] = ml(),
    _ = gl(h),
    v = vl(),
    y = dn(`framer-route-change`),
    { synchronousNavigationOnDesktop: b } = H_(),
    C = T(() => (!b || !nv() ? c : (e) => e()), [b]),
    w = S(!0),
    O = S(),
    j = S(r),
    M = S(n),
    ee = S(s),
    te = ee.current,
    ne = T(
      () => l.find(({ id: e }) => (te ? e === te : e === Cx)) ?? null,
      [te, l]
    ),
    re = T(
      () => ({
        activeLocale: ne,
        locales: l,
        setLocale: async (e) => {
          let t = y({ localized: !0 });
          await jt({ priority: `user-blocking`, continueAfter: `paint` });
          let n;
          R(e) ? (n = e) : B(e) && (n = e.id);
          let r = l.find(({ id: e }) => e === Cx),
            i = l.find(({ id: e }) => e === n);
          if (!i) return;
          let s = j.current,
            c = o[s];
          if (c)
            try {
              let e = await xn({
                currentLocale: ne,
                nextLocale: i,
                route: c,
                routeId: s,
                defaultLocale: r,
                pathVariables: M.current,
                collectionUtils: a,
                preserveQueryParams: u,
              });
              if (!e) return;
              let n = pn(k.history.state)
                  ? k.history.state.paginationInfo
                  : void 0,
                o = e.path;
              (w.current = !1),
                (M.current = e.pathVariables),
                (ee.current = i.id);
              let l = async (t = !1) => {
                if (o)
                  return hn(
                    {
                      routeId: s,
                      pathVariables: e.pathVariables,
                      localeId: i.id,
                      paginationInfo: n,
                    },
                    o,
                    t
                  );
              };
              v(
                () => {
                  m(s, s, () => C(g));
                },
                t,
                l,
                !1
              );
            } catch {}
        },
      }),
      [ne, a, g, l, u, o, v, m, y, C]
    ),
    ie = E(
      (e, t, n, r, i, a, o, s = !1, c) => {
        w.current = !1;
        let l = j.current;
        if (
          ((j.current = e),
          (M.current = i),
          (ee.current = t),
          (O.current = r),
          _(() => {
            hl(n, s, a);
          }),
          a)
        ) {
          C(g);
          return;
        }
        v(
          (t) => {
            m(l, e, () => C(g), t);
          },
          o,
          c,
          !0
        );
      },
      [g, _, v, m, C]
    );
  _n(j, ie);
  let ae = E(
      async (e, n, r, i, a) => {
        var s, c;
        let l = o[e],
          d = Ke(l?.page) ? l.page.getStatus() : void 0,
          f = d?.hasRendered,
          m = y({ cached: f, preloaded: f ? void 0 : d?.hasLoaded }),
          h = _l(a);
        if (
          (jt({
            priority: `background`,
            ensureContinueBeforeUnload: !0,
            continueAfter: `paint`,
          }).then(h),
          await jt({ priority: `user-blocking`, continueAfter: `paint` }),
          r)
        ) {
          let e = new Set(),
            t = l?.path ?? `/`;
          for (let n of t.matchAll(um)) {
            let t = n[1];
            if (t === void 0)
              throw Error(`A matching path variable should not be undefined`);
            e.add(t);
          }
          r = Object.fromEntries(Object.entries(r).filter(([t]) => e.has(t)));
        }
        let g = mt(l, n),
          _ = M.current,
          v = ee.current;
        if (
          fl(
            { routeId: j.current, pathVariables: _ },
            { routeId: e, pathVariables: r }
          )
        ) {
          (s = m.ignore) == null || s.call(m);
          let a = o[e];
          (c = k.history.state)?.hash !== n &&
            !t &&
            a &&
            (h(),
            await fn(e, a, {
              currentRoutePath: a.path,
              currentPathVariables: _,
              pathVariables: r,
              hash: n,
              localeId: v,
              preserveQueryParams: u,
              siteCanonicalURL: p,
            })),
            hl(g, i, !1);
          return;
        }
        if (!l) return;
        let b = o[j.current],
          x = async (t = !1) => (
            h(),
            fn(
              e,
              l,
              {
                currentRoutePath: b?.path,
                currentPathVariables: _,
                hash: n,
                pathVariables: r,
                localeId: v,
                preserveQueryParams: u,
                siteCanonicalURL: p,
              },
              t
            )
          ),
          S =
            Wt(p) +
            yn(l, {
              currentRoutePath: b?.path,
              currentPathVariables: _,
              hash: n,
              pathVariables: r,
              localeId: v,
              preserveQueryParams: u,
              siteCanonicalURL: p,
              relative: !1,
            });
        ie(e, v, g, S, r, !1, m, i, t ? void 0 : x);
      },
      [o, ie, t, u, p, y]
    ),
    oe = ot(o),
    se = j.current,
    ce = O.current,
    N = M.current,
    le = o[se],
    ue = le?.path,
    de = Sx(le, se, ce, N, a, ne),
    P = w.current,
    fe = T(
      () => ({
        navigate: ae,
        getRoute: oe,
        currentRouteId: se,
        currentPathVariables: N,
        routes: o,
        collectionUtils: a,
        preserveQueryParams: u,
        pageviewEventData: de,
        siteCanonicalURL: p,
        isInitialNavigation: P,
      }),
      [ae, oe, se, N, o, a, u, p, de, P]
    );
  if (!le) throw Error(`Router cannot find route for ${se}`);
  let pe = !ne || !le.includedLocales || le.includedLocales.includes(ne.id),
    F = ue && N ? zt(ue, N) : ue,
    me = String(te) + F,
    he = Xr(() => ({ ...e, display: `contents` }));
  return x(st, {
    api: fe,
    children: x(Im.Provider, {
      value: re,
      children: x(_b, {
        children: D(Vs, {
          children: [
            D(lh, {
              notFoundPage: i,
              defaultPageStyle: e,
              forceUpdateKey: h,
              children: [
                x(sh.Start, {}),
                x(bl, {
                  LayoutTemplate: d,
                  routeId: le?.abTestingVariantId ?? se,
                  style: e,
                  children: (t) =>
                    x(
                      A,
                      {
                        children: pe ? Ln(le.page, t ? he : e) : i && Ln(i, e),
                      },
                      me
                    ),
                }),
              ],
            }),
            f,
            x(On, {}),
            x(sh.End, {}),
          ],
        }),
      }),
    }),
  });
}
function bl({ LayoutTemplate: e, routeId: t, style: n, children: r }) {
  return e ? x(e, { routeId: t, style: n, children: r }) : r(!1);
}
function xl(e, t) {
  let n = t
    ? { behavior: `smooth`, block: `start`, inline: `nearest` }
    : void 0;
  e.scrollIntoView(n);
}
function Sl(e) {
  return new Promise((t, n) => {
    try {
      new URL(e);
      let r = new Image();
      (r.onload = () => t()), (r.onerror = n), (r.src = e);
    } catch (e) {
      n(e);
    }
  });
}
function Cl(e) {
  return typeof e == `object` && !!e;
}
function wl(e, t) {
  if (t === ``) return e;
  let n = t.split(/[.[\]]+/u).filter((e) => e.length > 0),
    r = e;
  for (let e of n) {
    if (!Cl(r)) return;
    r = r[e];
  }
  return r;
}
function Tl(e) {
  return `${e.credentials}:${e.url}`;
}
function El(e) {
  return R(e) && !Number.isNaN(Number(e));
}
function Dl(e, t) {
  switch (e) {
    case `string`:
      return R(t) || z(t);
    case `color`:
      return R(t);
    case `boolean`:
      return yt(t);
    case `number`:
      return z(t) || El(t);
    case `link`:
    case `image`:
      return R(t) && xc(t, !1);
    default:
      return !1;
  }
}
function Ol(e, t) {
  if (e.status === `loading`) return t.fallbackValue;
  if (e.status === `error`) throw e.error;
  let n = wl(e.data, t.resultKeyPath);
  if (xt(n)) throw Error(`Key '${t.resultKeyPath}' not found in response`);
  if (!Dl(t.resultOutputType, n))
    throw Error(
      `Resolved value '${n}' is not valid for type '${t.resultOutputType}'`
    );
  return n;
}
function kl(e, t) {
  if (Y.current() === Y.canvas) return !1;
  let n = t === 0 ? 500 : t * 1e3,
    r = Date.now(),
    i = e + n;
  return r >= i;
}
function Al({
  RootComponent: e,
  isWebsite: t,
  routeId: n,
  framerSiteId: r,
  pathVariables: i,
  routes: a,
  collectionUtils: o,
  notFoundPage: s,
  isReducedMotion: c = !1,
  includeDataObserver: l = !1,
  localeId: u,
  locales: f,
  preserveQueryParams: p,
  EditorBar: m,
  defaultPageStyle: h,
  disableHistory: g,
  LayoutTemplate: _,
  siteCanonicalURL: v,
}) {
  if (
    (d.useEffect(() => {
      t || Gh.start();
    }, []),
    t)
  )
    return x(ne, {
      reducedMotion: c ? `user` : `never`,
      children: x(Ix, {
        children: x(Nb, {
          children: x(vx.Provider, {
            value: r,
            children: x(yl, {
              initialRoute: n,
              initialPathVariables: i,
              initialLocaleId: u,
              routes: a,
              collectionUtils: o,
              notFoundPage: s,
              locales: f,
              defaultPageStyle: h ?? { minHeight: `100vh`, width: `auto` },
              preserveQueryParams: p,
              editorBar: x(jl, { EditorBar: m }),
              disableHistory: g,
              LayoutTemplate: _,
              siteCanonicalURL: v,
            }),
          }),
        }),
      }),
    });
  {
    let t = l ? _y : d.Fragment;
    return x(t, {
      children: x(lt, {
        routes: a,
        children: x(Vo, {
          children: d.isValidElement(e) ? e : d.createElement(e, { key: n }),
        }),
      }),
    });
  }
}
function jl({ EditorBar: e }) {
  let t = H_(),
    [n, r] = j(!1),
    i = w(vx),
    o = T(() => {
      let e = {},
        n;
      for (n in t)
        t.hasOwnProperty(n) && n.startsWith(`editorBar`) && (e[n] = t[n]);
      return e;
    }, [t]);
  return (
    O(() => {
      c(() => {
        r(!0);
      });
    }, []),
    !e || !i || !n
      ? null
      : x(cx, {
          children: x(a, { children: x(e, { framerSiteId: i, features: o }) }),
        })
  );
}
function Ml(e) {
  return {
    trace(...t) {
      var n;
      return (n = z_.getLogger(e))?.trace(...t);
    },
    debug(...t) {
      var n;
      return (n = z_.getLogger(e))?.debug(...t);
    },
    info(...t) {
      var n;
      return (n = z_.getLogger(e))?.info(...t);
    },
    warn(...t) {
      var n;
      return (n = z_.getLogger(e))?.warn(...t);
    },
    error(...t) {
      var n;
      return (n = z_.getLogger(e))?.error(...t);
    },
  };
}
function Nl(e) {
  return Il(e) || zl(e);
}
function Pl(e) {
  return bt(e) && e.every(B);
}
function Fl(e) {
  return B(e) && vt(e.read) && vt(e.preload);
}
function Il(e) {
  return Pl(e) || Fl(e);
}
function Ll(e) {
  return B(e) && B(e.schema);
}
function Rl(e) {
  return B(e) && B(e.collectionByLocaleId);
}
function zl(e) {
  return Ll(e) || Rl(e);
}
async function Bl(e, t) {
  return Fl(e) ? (await e.preload(t), e.read(t)) : e;
}
function Vl(e, t, n) {
  let r = e.value.length,
    i = t.value.length;
  if (r < i) return -1;
  if (r > i) return 1;
  for (let i = 0; i < r; i++) {
    let r = e.value[i],
      a = t.value[i],
      o = gu(r, a, n);
    if (o !== 0) return o;
  }
  return 0;
}
function Hl(e, t) {
  switch (e?.type) {
    case `array`: {
      let n = e.value.map((e) => Wx.cast(e, t.definition));
      return { type: `array`, value: n };
    }
  }
  return null;
}
function Ul(e, t) {
  return e.value < t.value ? -1 : e.value > t.value ? 1 : 0;
}
function Wl(e) {
  switch (e?.type) {
    case `boolean`:
      return e;
    case `number`:
    case `string`:
      return { type: `boolean`, value: !!e.value };
  }
  return null;
}
function Gl(e) {
  let t = Wl(e);
  return t?.value ?? !1;
}
function Kl(e, t) {
  return e.value < t.value ? -1 : e.value > t.value ? 1 : 0;
}
function ql(e) {
  switch (e?.type) {
    case `color`:
      return e;
  }
  return null;
}
function Jl(e, t) {
  let n = new Date(e.value),
    r = new Date(t.value);
  return n < r ? -1 : n > r ? 1 : 0;
}
function Yl(e) {
  switch (e?.type) {
    case `date`:
      return e;
    case `number`:
    case `string`: {
      let t = new Date(e.value);
      return wt(t) ? { type: `date`, value: t.toISOString() } : null;
    }
  }
  return null;
}
function Xl(e, t) {
  return e.value < t.value ? -1 : e.value > t.value ? 1 : 0;
}
function Zl(e) {
  switch (e?.type) {
    case `enum`:
      return e;
    case `string`:
      return { type: `enum`, value: e.value };
  }
  return null;
}
function Ql(e, t) {
  return e.value < t.value ? -1 : e.value > t.value ? 1 : 0;
}
function $l(e) {
  switch (e?.type) {
    case `file`:
      return e;
  }
  return null;
}
function eu(e, t) {
  let n = JSON.stringify(e.value),
    r = JSON.stringify(t.value);
  return n < r ? -1 : n > r ? 1 : 0;
}
function tu(e) {
  switch (e?.type) {
    case `link`:
      return e;
    case `string`:
      try {
        let { protocol: t } = new URL(e.value);
        return t === `http:` || t === `https:`
          ? { type: `link`, value: e.value }
          : null;
      } catch {
        return null;
      }
  }
  return null;
}
function nu(e, t) {
  return e.value < t.value ? -1 : e.value > t.value ? 1 : 0;
}
function ru(e) {
  switch (e?.type) {
    case `number`:
    case `string`: {
      let t = Number(e.value);
      return Number.isFinite(t) ? { type: `number`, value: t } : null;
    }
  }
  return null;
}
function iu(e) {
  let t = ru(e);
  return t?.value ?? null;
}
function au(e, t, n) {
  let r = Object.keys(e.value).sort(),
    i = Object.keys(t.value).sort();
  if (r.length < i.length) return -1;
  if (r.length > i.length) return 1;
  for (let a = 0; a < r.length; a++) {
    let o = r[a],
      s = i[a];
    if (o < s) return -1;
    if (o > s) return 1;
    let c = e.value[o] ?? null,
      l = t.value[s] ?? null,
      u = gu(c, l, n);
    if (u !== 0) return u;
  }
  return 0;
}
function ou(e, t) {
  switch (e?.type) {
    case `object`: {
      let n = {},
        r = Object.entries(t.definitions);
      for (let [t, i] of r) {
        let r = e.value[t] ?? null;
        n[t] = Wx.cast(r, i);
      }
      return { type: `object`, value: n };
    }
  }
  return null;
}
function su(e, t) {
  let n = JSON.stringify(e.value),
    r = JSON.stringify(t.value);
  return n < r ? -1 : n > r ? 1 : 0;
}
function cu(e) {
  switch (e?.type) {
    case `responsiveimage`:
      return e;
  }
  return null;
}
function lu(e, t) {
  let n = e.value,
    r = t.value;
  return n < r ? -1 : n > r ? 1 : 0;
}
function uu(e) {
  switch (e?.type) {
    case `richtext`:
      return e;
  }
  return null;
}
function du(e, t) {
  let n = e.value,
    r = t.value;
  return n < r ? -1 : n > r ? 1 : 0;
}
function fu(e) {
  switch (e?.type) {
    case `vectorsetitem`:
      return e;
  }
  return null;
}
function pu(e, t, n) {
  let r = e.value,
    i = t.value;
  return (
    n.type === 0 && ((r = e.value.toLowerCase()), (i = t.value.toLowerCase())),
    r < i ? -1 : r > i ? 1 : 0
  );
}
function mu(e) {
  switch (e?.type) {
    case `string`:
      return e;
    case `number`:
      return { type: `string`, value: String(e.value) };
  }
  return null;
}
function hu(e) {
  let t = mu(e);
  return t?.value ?? null;
}
function gu(e, t, n) {
  if (St(e) || St(t)) return V(e === t), 0;
  switch (e.type) {
    case `array`:
      return V(e.type === t.type), Vl(e, t, n);
    case `boolean`:
      return V(e.type === t.type), Ul(e, t);
    case `color`:
      return V(e.type === t.type), Kl(e, t);
    case `date`:
      return V(e.type === t.type), Jl(e, t);
    case `enum`:
      return V(e.type === t.type), Xl(e, t);
    case `file`:
      return V(e.type === t.type), Ql(e, t);
    case `link`:
      return V(e.type === t.type), eu(e, t);
    case `number`:
      return V(e.type === t.type), nu(e, t);
    case `object`:
      return V(e.type === t.type), au(e, t, n);
    case `responsiveimage`:
      return V(e.type === t.type), su(e, t);
    case `richtext`:
      return V(e.type === t.type), lu(e, t);
    case `vectorsetitem`:
      return V(e.type === t.type), du(e, t);
    case `string`:
      return V(e.type === t.type), pu(e, t, n);
    default:
      H(e);
  }
}
function _u() {
  return 25;
}
function vu() {
  return 12500;
}
function yu(e) {
  return e;
}
function bu(e) {
  let t = e.next();
  return V(t.done, `Generator must not yield`), t.value;
}
async function xu(e, t = e.next()) {
  for (; !t.done; ) {
    let n = await t.value;
    t = e.next(n);
  }
  return t.value;
}
function* Su(e) {
  let t = {},
    n = Object.keys(e),
    r = [];
  for (let i of n) {
    let n = e[i];
    if (Tt(n)) {
      let e = n.next();
      e.done
        ? (t[i] = e.value)
        : r.push(
            xu(n, e).then((e) => {
              t[i] = e;
            })
          );
    } else t[i] = n;
  }
  return r.length > 0 && (yield Promise.all(r)), t;
}
function* Cu(e) {
  let t = [],
    n = e.keys(),
    r = [];
  for (let i of n) {
    let n = e[i];
    if (Tt(n)) {
      let e = n.next();
      e.done
        ? (t[i] = e.value)
        : r.push(
            xu(n, e).then((e) => {
              t[i] = e;
            })
          );
    } else t[i] = n;
  }
  return r.length > 0 && (yield Promise.all(r)), t;
}
function wu(e) {
  return e;
}
function Tu(e) {
  return B(e) && vt(e.getHash);
}
function K(e, ...t) {
  let n = t.map((e) => {
    let t = e instanceof tS;
    V(!t, `Pass CollectionMetadata.id instead`);
    let n = e instanceof iS;
    V(!n, `Pass FieldMetadata.id instead`);
    let r = e instanceof nS;
    V(!r, `Pass IndexMetadata.id instead`);
    let i = e instanceof Xx;
    V(!i, `Pass RelationalNode.group.id instead`);
    let a = e instanceof qx;
    return (
      V(!a, `Pass Group.id instead`), Tu(e) ? e.getHash() : JSON.stringify(e)
    );
  });
  return wu(`${e}(${n.join(`, `)})`);
}
function Eu(e) {
  return e;
}
function Du(e) {
  return e;
}
function Ou(e) {
  return e;
}
function ku(e, t) {
  if (Il(e)) return new Ux(e, t);
  if (Ll(e)) return e;
  if (Rl(e)) {
    for (; t; ) {
      let n = e.collectionByLocaleId[t.id];
      if (n) return n;
      t = t.fallback;
    }
    return e.collectionByLocaleId.default;
  }
  H(e, `Unsupported collection type`);
}
function Au(e) {
  let t = { type: `All` };
  return Array(e).fill(t);
}
function ju(e) {
  return e.collection ? `"${e.collection}"."${e.name}"` : `"${e.name}"`;
}
function Mu(e) {
  return typeof e.value == `string` ? `'${e.value}'` : e.value;
}
function Nu(e) {
  return `${e.functionName}(${e.arguments.map((e) => Ru(e)).join(`, `)})`;
}
function Pu(e) {
  let t = `CASE`;
  e.value && (t += ` ${Ru(e.value)}`);
  for (let n of e.conditions) t += ` WHEN ${Ru(n.when)} THEN ${Ru(n.then)}`;
  return e.else && (t += ` ELSE ${Ru(e.else)}`), (t += ` END`), t;
}
function Fu(e) {
  let t = Ru(e.value),
    n = e.operator.toUpperCase();
  return `${n} ${t}`;
}
function Iu(e) {
  let t = Ru(e.left),
    n = Ru(e.right),
    r = e.operator.toUpperCase();
  return `${t} ${r} ${n}`;
}
function Lu(e) {
  return `CAST(${Ru(e.value)} as ${e.dataType})`;
}
function Ru(e) {
  switch (e.type) {
    case `Identifier`:
      return ju(e);
    case `LiteralValue`:
      return Mu(e);
    case `FunctionCall`:
      return Nu(e);
    case `Case`:
      return Pu(e);
    case `UnaryOperation`:
      return Fu(e);
    case `BinaryOperation`:
      return Iu(e);
    case `TypeCast`:
      return Lu(e);
    case `Select`:
      return `${Uu(e)}`;
    default:
      H(e);
  }
}
function zu(e) {
  return Ll(e.data)
    ? `Collection`
    : e.alias
    ? `"${e.data.displayName}" AS "${e.alias}"`
    : `"${e.data.displayName}"`;
}
function Bu(e) {
  let t = `${Vu(e.left)} LEFT JOIN ${Vu(e.right)}`;
  return e.constraint && (t += ` ON ${Ru(e.constraint)}`), t;
}
function Vu(e) {
  switch (e.type) {
    case `Collection`:
      return zu(e);
    case `LeftJoin`:
      return Bu(e);
    default:
      H(e);
  }
}
function Hu(e) {
  let t = ``,
    n = e.split(/\s+/u);
  return (
    n.forEach((e) => {
      e !== `` &&
        ([`SELECT`, `FROM`, `WHERE`, `ORDER`, `LIMIT`, `OFFSET`].includes(e)
          ? (t += `
${e}`)
          : [`AND`, `OR`].includes(e)
          ? (t += `
	${e}`)
          : (t += ` ${e}`));
    }),
    t.trim()
  );
}
function Uu(e) {
  let t = ``;
  return (
    (t += `SELECT ${e.select
      .map((e) => {
        let t = Ru(e);
        return e.alias ? `${t} AS "${e.alias}"` : t;
      })
      .join(`, `)}`),
    (t += ` FROM ${Vu(e.from)}`),
    e.where && (t += ` WHERE ${Ru(e.where)}`),
    e.orderBy &&
      (t += ` ORDER BY ${e.orderBy
        .map((e) => `${Ru(e)} ${e.direction ?? `asc`}`)
        .join(`, `)}`),
    e.limit && (t += ` LIMIT ${Ru(e.limit)}`),
    e.offset && (t += ` OFFSET ${Ru(e.offset)}`),
    Hu(t)
  );
}
function Wu(e) {
  let t = mC.get(e);
  if (t) return t;
  let n = Math.random().toString(16).slice(2);
  return mC.set(e, n), n;
}
function Gu(e, t) {
  return B(t) && t.type === `Collection` && Nl(t.data) ? Wu(t.data) : t;
}
function Ku(e, t) {
  let n = t?.id ?? `default`;
  return JSON.stringify(e, Gu) + n;
}
function qu(e, t) {
  e.forEach((e) => clearTimeout(e)),
    e.clear(),
    t.forEach((e) => e?.(`Callback cancelled by variant change`)),
    t.clear();
}
function Ju() {
  return new Set();
}
function Yu(e) {
  let t = Xr(Ju),
    n = Xr(Ju);
  return (
    io(() => () => qu(n, t)),
    O(() => () => qu(n, t), []),
    O(() => {
      qu(n, t);
    }, [e]),
    S({
      activeVariantCallback:
        (e) =>
        async (...n) =>
          new Promise((r, i) => {
            t.add(i), e(...n).then(r);
          }).catch(() => {}),
      delay: async (e, t) => {
        await new Promise((e) => {
          n.add(globalThis.setTimeout(() => e(!0), t));
        }),
          e();
      },
    }).current
  );
}
function Xu(e, t, n) {
  return d.useCallback(
    (r) => {
      var i, a, o;
      return !n || !e
        ? {}
        : t
        ? Object.assign({}, (i = n[e])?.[r], (a = n[t])?.[r])
        : (o = n[e])?.[r] || {};
    },
    [e, t, n]
  );
}
function Zu(e) {
  for (let [t, n] of Object.entries(e)) {
    let e = q.matchMedia(n);
    if (e.matches) return t;
  }
}
function Qu(e) {
  var t;
  let n = [];
  for (let { hash: t, mediaQuery: r } of e) {
    if (!r) continue;
    let e = q.matchMedia(r);
    e.matches && n.push(t);
  }
  if (n.length > 0) return n;
  let r = (t = e[0])?.hash;
  if (r) return [r];
}
function $u(e, t, n = !0) {
  let r = w(ty),
    i = Ui(),
    a = !i && q_(),
    o = S(a ? Zu(t) ?? e : e),
    s = S(n && r ? e : o.current),
    l = fa(),
    u = Le(),
    d = E(
      (e) => {
        if (e !== o.current || e !== s.current) {
          let t = function () {
            (o.current = s.current = e),
              c(() => {
                l();
              });
          };
          i
            ? t()
            : u(() => {
                t();
              });
        }
      },
      [u, l, i]
    );
  return (
    ov(() => {
      i && d(e);
    }, [e, i, d]),
    ov(() => {
      !n || r !== !0 || d(o.current);
    }, []),
    O(() => {
      let e = [];
      for (let [n, r] of Object.entries(t)) {
        let t = q.matchMedia(r),
          i = (e) => {
            e.matches && d(n);
          };
        ed(t, i), e.push([t, i]);
      }
      return () => e.forEach(([e, t]) => td(e, t));
    }, [t, d]),
    [o.current, s.current]
  );
}
function ed(e, t) {
  e.addEventListener ? e.addEventListener(`change`, t) : e.addListener(t);
}
function td(e, t) {
  e.removeEventListener
    ? e.removeEventListener(`change`, t)
    : e.removeListener(t);
}
function nd(e) {
  setTimeout(e, 1);
}
function rd(e) {
  var t, n, r, i;
  let a = new Set(),
    o = Qu(e);
  if (o)
    for (let e of o)
      for (let n of document.querySelectorAll(`.hidden-` + e))
        id(n.previousSibling) && a.add(n.previousSibling),
          (t = n.parentNode) == null || t.removeChild(n);
  let s = Kp ? q.requestIdleCallback : nd;
  s(() => {
    var e;
    (e = document.querySelector(hC)) == null || e.remove();
  });
  for (let e of document.querySelectorAll(`.ssr-variant:empty`))
    id(e.previousSibling) && a.add(e.previousSibling),
      (n = e.parentNode) == null || n.removeChild(e);
  for (let e of a)
    ad(e.nextSibling) &&
      ((r = e.parentNode) == null || r.removeChild(e.nextSibling),
      (i = e.parentNode) == null || i.removeChild(e));
}
function id(e) {
  return e?.nodeType === Node.COMMENT_NODE && e.textContent === `$`;
}
function ad(e) {
  return e?.nodeType === Node.COMMENT_NODE && e.textContent === `/$`;
}
function od(e) {
  return B(e) && gC in e && e.page !== void 0;
}
function sd(e) {
  throw e;
}
function cd(e) {
  let { activeLocale: t } = Tn(),
    n = vC.get(e, t),
    r = n.preload();
  return r && sd(r), n.read();
}
function ld(e) {
  let t = { ...e, select: [] },
    n = cd(t);
  return n.length;
}
function ud(e, t) {
  let n = Object.entries(e ?? {}).filter(([, e]) => !(xt(e) || B(e))),
    r = n.map(([e, n]) => ({
      type: `BinaryOperation`,
      operator: `==`,
      left: {
        type: `TypeCast`,
        value: { type: `Identifier`, name: e, collection: t },
        dataType: `STRING`,
      },
      right: { type: `LiteralValue`, value: String(n) },
    }));
  return r.length === 0
    ? { type: `LiteralValue`, value: !1 }
    : r.reduce((e, t) => ({
        type: `BinaryOperation`,
        operator: `and`,
        left: e,
        right: t,
      }));
}
function dd(e, t, n, r = !1) {
  var i, a, o, s;
  let [u, d] = l(),
    f = Math.ceil(e / t),
    [p, m] = j(
      (s = (o = (a = (i = globalThis == null ? void 0 : globalThis.history)
        ?.state)?.paginationInfo)?.[n])?.currentPage ?? 1
    ),
    h = S(p),
    g = T(() => ({ currentPage: p, totalPages: f, isLoading: u }), [p, f, u]);
  O(() => {
    Sn(n, g);
  }, [n, g]);
  let _ = Rc(),
    v = E(async () => {
      if (
        _ ||
        h.current >= f ||
        (await jt({ priority: `user-blocking`, continueAfter: `paint` }),
        h.current >= f)
      )
        return;
      let e = (e) => {
        e(() => {
          m((e) => {
            let t = Math.min(e + 1, f);
            return (h.current = t), t;
          });
        });
      };
      return e(r ? d : c);
    }, [f, r]);
  return { paginationInfo: g, loadMore: v };
}
function fd(e, t, n) {
  let r = ld(e),
    { paginationInfo: i, loadMore: a } = dd(r, t, n, !0),
    o = T(() => {
      let n = t * i.currentPage;
      if (e.limit) {
        if (e.limit.type !== `LiteralValue` || typeof e.limit.value != `number`)
          throw Error(`Unexpected type for query limit`);
        n = Math.min(n, e.limit.value);
      }
      return { ...e, limit: { type: `LiteralValue`, value: n } };
    }, [e, t, i]);
  return { paginatedQuery: o, paginationInfo: i, loadMore: a };
}
function pd(e, t) {
  return `${e}-${t}`;
}
function md(e, t) {
  let n = e.indexOf(t),
    r = n + 1;
  r >= e.length && (r = 0);
  let i = e[r];
  return V(i !== void 0, `nextVariant should be defined`), i;
}
function hd(e, t) {
  if (e) {
    if (t) {
      let n = e[t];
      if (n) return n;
    }
    return e.default;
  }
}
function gd(e, t, n, r, i) {
  let { hover: a, pressed: o, loading: s, error: c } = e || {};
  if (c && i) return `error`;
  if (s && r) return `loading`;
  if (o && n) return `pressed`;
  if (a && t) return `hover`;
}
function _d(e, t) {
  let n = t[e];
  return n || `framer-v-${e}`;
}
function vd(e, t, n) {
  return e && n.has(e) ? e : t;
}
function yd() {
  let e = S(),
    t = S(),
    n = E(() => {
      e.current &&
        (document.removeEventListener(`visibilitychange`, e.current),
        (e.current = void 0),
        (t.current = void 0));
    }, []);
  return (
    O(
      () => () => {
        n();
      },
      [n]
    ),
    E(
      (r) => {
        if (!document.hidden) {
          r(), n();
          return;
        }
        if (((t.current = r), e.current)) return;
        let i = () => {
          var e;
          document.hidden || ((e = t.current) == null || e.call(t), n());
        };
        (e.current = i), document.addEventListener(`visibilitychange`, i);
      },
      [n]
    )
  );
}
function bd() {
  let e = S(),
    t = S(!1),
    n = S(),
    r = w(Lv);
  return (
    O(
      () => () => {
        var t;
        (t = e.current) == null || t.call(e),
          (n.current = void 0),
          (e.current = void 0);
      },
      []
    ),
    E(
      (i, a) => {
        if (!a?.current || t.current) {
          i();
          return;
        }
        if (((n.current = i), e.current)) return;
        let o = !1,
          s = (e) => {
            (t.current = e.isIntersecting),
              !o &&
                ((o = !0),
                queueMicrotask(() => {
                  var e;
                  (o = !1), t.current && ((e = n.current) == null || e.call(n));
                }));
          };
        e.current = Za(r, `undefined`, a.current, null, s);
      },
      [r]
    )
  );
}
function xd(e) {
  let t = yd(),
    n = bd();
  return E(
    (r, i = !1) => {
      if (Gp) {
        r();
        return;
      }
      let a = i && e ? () => n(r, e) : r;
      t(a);
    },
    [t, n, e]
  );
}
async function Sd() {
  return new Promise((e) => {
    let t = e;
    setTimeout(() => {
      t && (performance.mark(`wait-for-click-fallback`), t());
    }, 150),
      (xC = () => {
        e(), (t = void 0);
      });
  });
}
function Cd(e) {
  e.button === 0 && (performance.mark(`pointerdown-listener`), (bC = Sd()));
}
function wd() {
  performance.mark(`click-received-listener`),
    (bC = void 0),
    xC?.(),
    (xC = void 0);
}
function Td(e = !1) {
  O(() => {
    e &&
      (document.addEventListener(`pointerup`, Cd, !0),
      document.__proto__.addEventListener.call(document, `click`, wd, !0));
  }, [e]);
}
function Ed({
  variant: e,
  defaultVariant: t,
  transitions: n,
  enabledGestures: r,
  cycleOrder: i = [],
  variantProps: a = {},
  variantClassNames: o = {},
  ref: s,
}) {
  let l = fa(),
    u = Rc(),
    d = Xr(() => new Set(i)),
    { pauseOffscreen: f, yieldOnTap: p } = H_();
  Td(p);
  let m = xd(s),
    h = S({
      isHovered: !1,
      isHoveredHasUpdated: !1,
      isPressed: !1,
      isPressedHasUpdated: !1,
      isError: !1,
      hasPressedVariants: !0,
      baseVariant: vd(e, t, d),
      lastVariant: e,
      gestureVariant: void 0,
      loadedBaseVariant: {},
      defaultVariant: t,
      enabledGestures: r,
      cycleOrder: i,
      transitions: n,
    }),
    g = E((e) => {
      let {
          isHovered: t,
          isPressed: n,
          isError: r,
          enabledGestures: i,
          defaultVariant: a,
        } = h.current,
        o = vd(e, a, d),
        s = gd(i?.[o], t, n, !1, r),
        c = s ? pd(o, s) : void 0;
      return [o, c];
    }, []),
    _ = E(
      async (e, t, n, r, i = !1, a = !1) => {
        let [o, s] = g(r);
        if (o === e && s === t) return;
        a && (h.current.isError = !1),
          (h.current.baseVariant = o || n),
          (h.current.gestureVariant = s);
        let u = p && h.current.isPressedHasUpdated;
        u &&
          bC &&
          (performance.mark(`wait-for-tap-start`),
          await bC,
          performance.measure(`wait-for-tap`, `wait-for-tap-start`)),
          u &&
            (performance.mark(`yield-on-tap-start`),
            await jt({ priority: `user-blocking`, continueAfter: `paint` }),
            performance.measure(`yield-on-tap`, `yield-on-tap-start`));
        let {
          isHovered: d,
          isPressed: _,
          isHoveredHasUpdated: v,
          isPressedHasUpdated: y,
        } = h.current;
        if (d || v || _ || y) {
          c(l);
          return;
        }
        m(() => c(l), f && i);
      },
      [g, l, m, f, p]
    ),
    v = E(
      ({ isHovered: e, isPressed: t, isError: n }) => {
        let r = t !== h.current.isPressed,
          i = e !== h.current.isHovered;
        e !== void 0 && (h.current.isHovered = e),
          t !== void 0 && (h.current.isPressed = t),
          n !== void 0 && (h.current.isError = n);
        let {
          baseVariant: a,
          gestureVariant: o,
          defaultVariant: s,
        } = h.current;
        (h.current.isPressedHasUpdated = r),
          (h.current.isHoveredHasUpdated = i),
          _(a, o, s, a, !1);
      },
      [_]
    ),
    y = E(
      (e, t = !1) => {
        let {
            defaultVariant: n,
            cycleOrder: r,
            baseVariant: i,
            gestureVariant: a,
          } = h.current,
          o = e === yC ? md(r || [], i || n) : e;
        _(i, a, n, o, t, !0);
      },
      [_]
    ),
    b = E(() => {
      let { baseVariant: e } = h.current;
      (h.current.loadedBaseVariant[e] = !0), m(() => c(l), !0);
    }, [l, m]);
  if (e !== h.current.lastVariant) {
    let [t, n] = g(e);
    (h.current.lastVariant = t),
      (t !== h.current.baseVariant || n !== h.current.gestureVariant) &&
        ((h.current.baseVariant = t), (h.current.gestureVariant = n));
  }
  let {
      baseVariant: x,
      gestureVariant: C,
      defaultVariant: w,
      enabledGestures: D,
      isHovered: O,
      isPressed: k,
      isError: A,
      loadedBaseVariant: j,
    } = h.current,
    M = Xu(h.current.baseVariant, h.current.gestureVariant, a);
  return T(() => {
    var e;
    let t = [];
    x !== w && t.push(x);
    let n = (e = D?.[x])?.loading,
      r = !A && !u && !!n && !j[x],
      i = r ? pd(x, `loading`) : C;
    i && t.push(i);
    let a = D?.[x],
      s = {
        onMouseEnter: () => v({ isHovered: !0 }),
        onMouseLeave: () => v({ isHovered: !1 }),
      };
    return (
      a?.pressed &&
        Object.assign(s, {
          onTapStart: () => v({ isPressed: !0 }),
          onTapCancel: () => v({ isPressed: !1 }),
          onTap: () => v({ isPressed: !1 }),
        }),
      {
        variants: t,
        baseVariant: x,
        gestureVariant: i,
        isLoading: r,
        transition: hd(h.current.transitions, x),
        setVariant: y,
        setGestureState: v,
        clearLoadingGesture: b,
        addVariantProps: M,
        gestureHandlers: s,
        classNames: Xo(_d(x, o), gd(a, O, k, r, A)),
      }
    );
  }, [x, C, O, k, j, M, y, w, D, v, b, o]);
}
function Dd(e, { scopeId: t, nodeId: n, override: r, inComponentSlot: i }) {
  if (!Gs()) return r(e);
  let a = Od(e, r);
  function o(r, o) {
    let s = Js(),
      c = nc(t, s?.scopeId, s?.level, i ?? !1);
    if (c)
      return a.status === `success`
        ? x(Nm.Provider, {
            value: n,
            children: x(Ks, {
              getErrorMessage: $s.bind(null, t, n),
              fallback: x(e, { ...r, ref: o }),
              children: x(a.Component, { ...r, ref: o }),
            }),
          })
        : (Ws(a.error), Ws($s(t, n)), Us(a.error), x(e, { ...r, ref: o }));
    if (a.status === `success`)
      return x(Nm.Provider, {
        value: n,
        children: x(a.Component, { ...r, ref: o }),
      });
    throw a.error;
  }
  return d.forwardRef(o);
}
function Od(e, t) {
  try {
    let n = t(e);
    return { status: `success`, Component: n };
  } catch (e) {
    return { status: `error`, error: e };
  }
}
function kd(e, t, n) {
  let r = [],
    i = Ss(e, t, (e) => r.unshift(e, e));
  if (n) {
    let e = i[i.length - 1];
    if (!z(e)) return CC;
    i.push(e + 1), r.push(-1);
  }
  let a = i[0];
  return z(a)
    ? a <= 1
      ? { inputRange: i, outputRange: r }
      : {
          inputRange: [0, Math.max(a - 1, 0), ...i],
          outputRange: [-1, -1, ...r],
        }
    : CC;
}
function Ad(e) {
  return e.weight !== void 0 && e.style !== void 0;
}
function jd(e, t) {
  let n = t === `normal` ? `Regular` : `Italic`;
  return e === 400 ? n : t === `normal` ? `${MC[e]}` : `${MC[e]} ${n}`;
}
function Md(e) {
  return !!e.variationAxes;
}
function Nd(e) {
  return Md(e) && e.family.source !== `custom`
    ? Pd(e.family.name)
    : e.family.name;
}
function Pd(e) {
  return `${e} Variable`;
}
function Fd(e, ...t) {
  var n, r;
  if (e) return;
  let i = Error(`Assertion Error` + (t.length > 0 ? `: ` + t.join(` `) : ``));
  if (i.stack)
    try {
      let e = i.stack.split(`
`);
      (n = e[1])?.includes(`assert`)
        ? (e.splice(1, 1),
          (i.stack = e.join(`
`)))
        : (r = e[0])?.includes(`assert`) &&
          (e.splice(0, 1),
          (i.stack = e.join(`
`)));
    } catch {}
  throw i;
}
function Id() {
  return NC;
}
function Ld({ error: e, tags: t, extras: n, critical: r, caller: i }) {
  Fd(
    PC,
    `Set up an error callback with setErrorReporter, or configure Sentry with initializeEnvironment`
  );
  let a = Rd(e, i);
  return (
    PC({
      error: a,
      tags: { ...a.tags, ...t },
      extras: { ...a.extras, ...n },
      critical: !!r,
    }),
    a
  );
}
function Rd(e, t = Rd) {
  return e instanceof Error ? e : new FC(e, t);
}
function zd() {
  return k === void 0 ? {} : zC || ((zC = Bd()), zC);
}
function Bd() {
  var e, t, n;
  let r = k.location,
    i = (e = k?.bootstrap)?.services;
  if (i) return i;
  let a;
  try {
    let e = k.top;
    if (
      ((a = e.location.origin), (i = (n = (t = k.top)?.bootstrap)?.services), i)
    )
      return i;
  } catch {}
  if (a && a !== r.origin)
    throw Error(`Unexpectedly embedded by ${a} (expected ${r.origin})`);
  if (r.origin.endsWith(`framer.com`) || r.origin.endsWith(`framer.dev`))
    throw Error(`ServiceMap data was not provided in document`);
  try {
    let e =
      new URLSearchParams(r.search).get(`services`) ||
      new URLSearchParams(r.hash.substring(1)).get(`services`);
    e && (i = JSON.parse(e));
  } catch {}
  if (i && typeof i == `object` && i.api) return i;
  throw Error(`ServiceMap requested but not available`);
}
function Vd(e, t = 0, n = new Set()) {
  var r;
  if (e === null) return e;
  if (typeof e == `function`) return `[Function: ${e.name ?? `unknown`}]`;
  if (typeof e != `object`) return e;
  if (e instanceof Error) return `[${e.toString()}]`;
  if (n.has(e)) return `[Circular]`;
  if (t > 2) return `...`;
  n.add(e);
  try {
    if (`toJSON` in e && typeof e.toJSON == `function`)
      return Vd(e.toJSON(), t + 1, n);
    if (Array.isArray(e)) return e.map((e) => Vd(e, t + 1, n));
    if (Object.getPrototypeOf(e) !== Object.prototype)
      return `[Object: ${
        (`__class` in e && e.__class) || (r = e.constructor)?.name
      }]`;
    {
      let r = {};
      for (let [i, a] of Object.entries(e)) r[i] = Vd(a, t + 1, n);
      return r;
    }
  } catch (e) {
    return `[Throws: ${e instanceof Error ? e.message : e}]`;
  } finally {
    n.delete(e);
  }
}
function Hd(e, t) {
  let n = [];
  for (let r of e.split(/[ ,]/u)) {
    let e = r.trim();
    if (e.length === 0) continue;
    let i = 1,
      a = !1;
    e.startsWith(`-`) && ((e = e.slice(1)), (i = 3), (a = !0));
    for (let t = 0; t <= 4; t++) {
      let n = VC[t];
      if (n && e.endsWith(n)) {
        (i = t),
          a && (i += 1),
          (e = e.slice(0, e.length - n.length)),
          e.length === 0 && (e = `*`);
        break;
      }
    }
    let o = RegExp(`^` + Yd(e).replace(/\\\*/gu, `.*`) + `$`),
      s = 0;
    for (let e of t) e.id.match(o) && ((e.level = i), ++s);
    s === 0 && n.push(r);
  }
  return n;
}
function Ud(e, t, n) {
  let r = new UC(e, t, n);
  for (YC.push(r), qC?.(r); YC.length > XC; ) YC.shift();
  return r;
}
function Wd(e) {
  return typeof e == `number` && (XC = e), YC;
}
function Gd() {
  var e, t;
  if (!(k === void 0 || !k.location))
    return (
      (QC ??= (t = (e = ZC.exec(k.location.pathname))?.groups)?.filename), QC
    );
}
function Kd(e) {
  let t = Gd();
  e = (t ? t + `:` : ``) + e;
  let n = JC[e];
  if (n) return n;
  let r = new ew(e);
  return (JC[e] = r), Hd(WC, [r]), qC?.(new UC(r, -1, [])), r;
}
function qd(e, t = !0) {
  try {
    k !== void 0 && k.localStorage && (k.localStorage.logLevel = e);
  } catch {}
  let n = WC;
  WC = e;
  let r = Object.values(JC);
  for (let e of r) e.level = 3;
  let i = Hd(e, r);
  if (
    (i.length > 0 &&
      (console == null ||
        console.warn(`Some log level specs matched no loggers:`, i)),
    t && YC.length > 0)
  ) {
    console == null || console.log(`--- LOG REPLAY ---`);
    for (let e of YC) {
      if (e.logger.level > e.level) continue;
      e.level >= 3
        ? console == null || console.warn(...e.toMessage())
        : console == null || console.log(...e.toMessage());
    }
    console == null || console.log(`--- END OF LOG REPLAY ---`);
  }
  return n;
}
function Jd(e) {
  return Object.prototype.hasOwnProperty.call(e, `message`);
}
function Yd(e) {
  return e.replace(/[/\-\\^$*+?.()|[\]{}]/gu, `\\$&`);
}
function Xd(e, t) {
  return ow.call(e, t);
}
function Zd(e) {
  return e.key + e.extension;
}
function Qd(e) {
  let t = zd();
  return `${t.userContent}/assets/${e}`;
}
function $d(e) {
  return Qd(Zd(e));
}
function ef(e) {
  return !!(e && Array.isArray(e));
}
function tf(e) {
  if (!e || !Array.isArray(e)) return;
  let t = [];
  for (let n of e) {
    if (!rf(n)) continue;
    t.push({
      tag: n.tag,
      name: n.name,
      minValue: n.minValue,
      maxValue: n.maxValue,
      defaultValue: n.defaultValue,
    });
  }
  return t;
}
function nf(e) {
  return !(
    typeof e != `object` ||
    !e ||
    !(`tag` in e) ||
    typeof e.tag != `string` ||
    (`coverage` in e && e.coverage !== void 0 && !Array.isArray(e.coverage))
  );
}
function rf(e) {
  return !(
    typeof e != `object` ||
    !e ||
    !(`tag` in e) ||
    typeof e.tag != `string` ||
    (`name` in e && typeof e.name != `string`) ||
    !(`minValue` in e) ||
    typeof e.minValue != `number` ||
    !(`maxValue` in e) ||
    typeof e.maxValue != `number` ||
    !(`defaultValue` in e) ||
    typeof e.defaultValue != `number`
  );
}
function af(e) {
  let t = sf(e);
  return gw[t];
}
function sf(e) {
  return e.toLowerCase().replace(/\s+/gu, `-`);
}
function cf(e) {
  return (
    (e = e.toLowerCase()),
    e.includes(`italic`) || e.includes(`oblique`) || e.includes(`slanted`)
      ? `italic`
      : `normal`
  );
}
function lf(e, t) {
  return { ...uf(e, t), ...df(e, t) };
}
function uf(e, t) {
  if (t.length === 0)
    return {
      variantBold: void 0,
      variantBoldItalic: void 0,
      variantItalic: void 0,
    };
  let { weight: n, style: r } = e,
    i = new Map(),
    a = new Map();
  for (let r of t) {
    if (
      r.isVariable !== e.isVariable ||
      (i.set(`${r.weight}-${r.style}`, r), r.weight <= n)
    )
      continue;
    a.has(r.style) || a.set(r.style, r);
  }
  let o = a.get(r),
    s = a.get(`italic`),
    c = e.weight;
  c <= 300
    ? ((o = i.get(`400-${r}`) ?? o), (s = i.get(`400-italic`) ?? s))
    : c <= 500
    ? ((o = i.get(`700-${r}`) ?? o), (s = i.get(`700-italic`) ?? s))
    : ((o = i.get(`900-${r}`) ?? o), (s = i.get(`900-italic`) ?? s));
  let l = i.get(`${n}-italic`);
  return { variantBold: o, variantItalic: l, variantBoldItalic: s };
}
function df(e, t) {
  if (t.length === 0)
    return { variantVariable: void 0, variantVariableItalic: void 0 };
  let n, r, i, a;
  for (let o of t) {
    if (!o.isVariable) continue;
    let t = o.weight === e.weight,
      s = o.weight === 400;
    o.style === `normal`
      ? t
        ? (n = o)
        : s
        ? (i = o)
        : (i ||= o)
      : o.style === `italic` && (t ? (r = o) : s ? (a = o) : (a ||= o));
  }
  return { variantVariable: n ?? i, variantVariableItalic: r ?? a };
}
function ff(e, t) {
  for (let n = 0; n < e.length; n++) {
    let r = e[n];
    if (r) {
      if (r.owner !== t.owner && r.file === t.file)
        return { existingFont: r, index: n, projectDuplicate: !0 };
      if (
        r.selector === t.selector &&
        r.weight === t.weight &&
        r.style === t.style
      )
        return { existingFont: r, index: n, projectDuplicate: !1 };
    }
  }
}
function pf(e, t) {
  if (!t) return e.substring(0, e.lastIndexOf(`.`));
  let { font: n } = t,
    r = n.fontFamily,
    i = Array.isArray(n.variationAxes);
  if (i && r.toLowerCase().includes(`variable`)) return r;
  let a = i ? `Variable` : n.fontSubFamily.trim();
  return a === `` ? r : `${r} ${a}`;
}
function mf({
  fontFamily: e,
  fontSubFamily: t,
  variationAxes: n,
  faceDescriptors: r,
}) {
  let i = t.trim() || `Regular`,
    a = i.toLocaleLowerCase().includes(`variable`),
    o = tf(n) && !a ? `Variable ${i}` : i,
    s = `normal`,
    c = 400;
  return (
    r && ((c = r.weight), (s = r.italic || r.oblique ? `italic` : `normal`)),
    { family: e, variant: o, weight: c, style: s }
  );
}
function hf(e) {
  if (!(!e.weight || !e.style))
    return {
      weight: e.weight,
      style: e.style,
      isVariable: Md(e),
      selector: e.selector,
    };
}
function gf(e) {
  var t, n, r, i, a;
  let o = e.fonts.map((e) => hf(e)).filter((e) => e !== void 0);
  for (let s of e.fonts) {
    let e = hf(s);
    if (!e) continue;
    let c = lf(e, o);
    (s.selectorVariable = (t = c.variantVariable)?.selector),
      (s.selectorVariableItalic = (n = c.variantVariableItalic)?.selector),
      (s.selectorBold = (r = c.variantBold)?.selector),
      (s.selectorBoldItalic = (i = c.variantBoldItalic)?.selector),
      (s.selectorItalic = (a = c.variantItalic)?.selector);
  }
}
function _f(e) {
  return e.ownerType === `team` ? `team` : `project`;
}
async function vf(e) {
  switch (e) {
    case `google`: {
      let e = await import(`./google-2KFYDWCN.BbKQc3c3.mjs`);
      return e?.default;
    }
    case `fontshare`: {
      let e = await import(`./fontshare-EOIRPPWV.DyrJDjxx.mjs`);
      return e?.default;
    }
    default:
      throw Error(`Unknown font source: ${e}`);
  }
}
async function yf(e) {
  switch (e) {
    case `google`: {
      let e = await import(`./google-HSMCYMMG.BSjsWOFM.mjs`);
      return e?.default;
    }
    case `fontshare`: {
      let e = await import(`./fontshare-Y53BJZLK._9I2H49K.mjs`);
      return e?.default;
    }
    case `framer`: {
      let e = await import(`./framer-font-TNC5DMGA.CPUCbFoq.mjs`);
      return e?.default;
    }
    default:
      throw Error(`Unknown font source: ${e}`);
  }
}
function bf(e) {
  return e
    .split(`,`)
    .map((e) => e.trim().toLowerCase())
    .filter(xf);
}
function xf(e) {
  return bw.includes(e);
}
function Sf(e) {
  let t = {
      serif: `serif`,
      sans: `sans-serif`,
      slab: `slab`,
      display: `display`,
      handwritten: `handwriting`,
      script: `handwriting`,
    },
    n = bf(e)[0];
  return n && t[n];
}
function Cf(e) {
  let t = {
    serif: `serif`,
    "sans-serif": `sans-serif`,
    display: `display`,
    handwriting: `handwriting`,
    monospace: `monospace`,
  };
  if (e) return t[e];
}
function wf(e, t) {
  return e.reduce((e, n) => ((e[t(n)] = n), e), {});
}
async function Tf(e, t, n = 0) {
  let { family: r, url: i, stretch: a, unicodeRange: o, isVariableFont: s } = e,
    c = s ? e.weight : e.weight || 500,
    l = e.style || `normal`,
    u = `${r}-${l}-${c}-${i}`;
  if (!Iw.has(u) || n > 0) {
    let s = new FontFace(r, `url(${i})`, {
        weight: R(c) ? c : c?.toString(),
        style: l,
        stretch: a,
        unicodeRange: o,
      }),
      d = s
        .load()
        .then(() => (t.fonts.add(s), Ef(r, l, c)))
        .catch((s) => {
          if (s.name !== `NetworkError`) throw s;
          if (n < Pw) return Tf(e, t, n + 1);
          throw new Fw(
            `Font loading failed after ${n} retries due to network error: ${JSON.stringify(
              {
                family: r,
                style: l,
                weight: c,
                url: i,
                stretch: a,
                unicodeRange: o,
              }
            )}`
          );
        });
    Iw.set(u, d);
  }
  await Iw.get(u);
}
async function Ef(e, t, n) {
  let r = `${e}-${t}-${n}`;
  if (!Lw.has(r)) {
    let i = new Mw.default(e, { style: t, weight: n }),
      a = i.load(null, Nw);
    Lw.set(r, a);
  }
  try {
    await Lw.get(r);
  } catch {
    throw new Fw(
      `Failed to check if font is ready (${Nw}ms timeout exceeded): ${JSON.stringify(
        { family: e, style: t, weight: n }
      )}`
    );
  }
}
function Df(e) {
  try {
    if (e === `framer`) return Of(zw) ? zw : void 0;
    {
      let t = (async () => {
        switch (e) {
          case `google`:
            return (await import(`./google-S367OFIE.Da6xJzUQ.mjs`)).default;
          case `fontshare`:
            return (await import(`./fontshare-2X4LZ75B.HTOR3Auk.mjs`)).default;
          default:
            H(e);
        }
      })();
      return Of(t) ? t : void 0;
    }
  } catch (e) {
    console.error(e);
    return;
  }
}
function Of(e) {
  return B(e) && Object.values(e).every(Af);
}
function kf(e) {
  return B(e) && R(e.tag);
}
function Af(e) {
  return Array.isArray(e) && e.every(kf);
}
function jf(e, t) {
  return $w && !t
    ? Document.parseHTMLUnsafe(e)
    : ((Qw ??= new DOMParser()), Qw.parseFromString(e, t ?? `text/html`));
}
function Mf(e) {
  return e
    .replaceAll(`&`, `&amp;`)
    .replaceAll(`<`, `&lt;`)
    .replaceAll(`>`, `&gt;`)
    .replaceAll(`"`, `&quot;`)
    .replaceAll(`'`, `&#39;`);
}
function Nf(e, t, n, r) {
  return e.replace(eT, (e, i, a, o, s, c, l) => {
    var u, d;
    if (a.toLowerCase() !== `a`) return e;
    let f = s || c,
      p = Oc(f.replace(/&amp;/gu, `&`));
    if (!p || !p.target) return e;
    let m = t(p.target);
    if (!od(m) || !od(n)) return e;
    let h = m.path,
      g = n.path;
    if (!h || !g) return e;
    let _ = ` data-framer-page-link-target="${p.target}"`,
      v = mt(m, p.element ?? void 0);
    v && (_ += ` data-framer-page-link-element="${p.element}"`);
    let y = Ac(f);
    if (!y || R(y)) return e;
    Nc(n, y, r) && (_ += ` data-framer-page-link-current`);
    let b = h,
      x = Object.assign({}, r, (u = p.collectionItem)?.pathVariables);
    if (
      (Object.keys(x).length > 0 && (b = b.replace(nx, (e, t) => `` + x[t])),
      (d = p.collectionItem)?.pathVariables)
    ) {
      let e = new URLSearchParams(p.collectionItem.pathVariables);
      _ += ` data-framer-page-link-path-variables="${e}"`;
    }
    return (b = Ft(g, b)), i + o + `"${Mf(b + (v ? `#${v}` : ``))}"` + _ + l;
  });
}
function Pf(e, t) {
  return e.length === t.length && e.every((e, n) => e === t[n]);
}
function Ff(e) {
  switch (e) {
    case `top`:
      return `flex-start`;
    case `center`:
      return `center`;
    case `bottom`:
      return `flex-end`;
  }
}
function If(e, t, n) {
  let r = S([]);
  Pf(r.current, e) ||
    ((r.current = e),
    Vw.loadFonts(e).then(({ newlyLoadedFontCount: e }) => {
      !t || !n.current || Y.current() !== Y.canvas || (e > 0 && va(n.current));
    }));
}
function Lf() {
  return { current: null };
}
async function Rf(e, t) {
  let n = e.current;
  if (n) return n;
  let r,
    i = new Promise((e, n) => {
      (r = e), t.signal.addEventListener(`abort`, () => n());
    });
  return (
    Object.defineProperty(e, `current`, {
      get() {
        return n;
      },
      set(e) {
        if (((n = e), e === null)) {
          t.abort();
          return;
        }
        r(e);
      },
      configurable: !0,
    }),
    i
  );
}
function zf(e) {
  return e in iT;
}
function Bf(e) {
  let t = {};
  for (let n in e) {
    if (!zf(n)) continue;
    let r = e[n],
      i = iT[n];
    if (xt(r) || xt(i)) continue;
    t[n] = [r, i];
  }
  return t;
}
function Vf(e, t = `character`, n, r) {
  switch (t) {
    case `character`:
    case `line`: {
      let t = e.split(` `),
        i = t.length - 1;
      return t.map((e, t) => {
        var a;
        let o = t === i,
          s = e.length <= 12;
        return D(
          A,
          {
            children: [
              x(`span`, {
                style: { whiteSpace: s ? `nowrap` : `unset` },
                children: (a = e.match(aT))?.map((e, t) => {
                  let i = Lf();
                  return (
                    n.add(i),
                    x(`span`, { ref: i, style: r, children: e }, e + t)
                  );
                }),
              }),
              o ? null : ` `,
            ],
          },
          e + t + o
        );
      });
    }
    case `word`: {
      let t = e.split(` `),
        i = t.length - 1;
      return t.map((e, t) => {
        let a = t === i,
          o = Lf();
        return (
          n.add(o),
          D(
            A,
            {
              children: [
                x(`span`, { ref: o, style: r, children: e }),
                a ? null : ` `,
              ],
            },
            e + t + a
          )
        );
      });
    }
    case `element`:
    default:
      return e;
  }
}
function Hf(e) {
  let t = e.type;
  switch (t) {
    case `appear`:
      return e.tokenization ?? `character`;
    default:
      H(t);
  }
}
function Uf(e) {
  let t = [];
  return (
    z(e.x) && t.push(`translateX(${e.x}px)`),
    z(e.y) && t.push(`translateY(${e.y}px)`),
    z(e.scale) && t.push(`scale(${e.scale})`),
    z(e.rotate) && t.push(`rotate(${e.rotate}deg)`),
    z(e.rotateX) && t.push(`rotateX(${e.rotateX}deg)`),
    z(e.rotateY) && t.push(`rotateY(${e.rotateY}deg)`),
    z(e.skewX) && t.push(`skewX(${e.skewX}deg)`),
    z(e.skewY) && t.push(`skewY(${e.skewY}deg)`),
    t.join(` `)
  );
}
function Wf(e, t, n) {
  if (!n || !n.effect) return;
  let r = n.type;
  switch (r) {
    case `appear`:
      switch (n.tokenization) {
        case `element`:
          return !e || !t
            ? void 0
            : {
                opacity: n.effect.opacity,
                filter: n.effect.filter,
                transform: Uf(n.effect),
              };
        case `line`:
        case `word`:
        case `character`:
        default:
          return !e || !t
            ? { display: `inline-block` }
            : {
                display: `inline-block`,
                opacity: n.effect.opacity,
                filter: n.effect.filter,
                transform: Uf(n.effect),
              };
      }
    default:
      H(r);
  }
}
function Gf(e, t, n) {
  let r = Xr(() => new Set()),
    i = Hi(),
    a = n || !i,
    o = S({ hasMounted: !1, hasAnimatedOnce: !1, isAnimating: !1, effect: e });
  o.current.effect = e;
  let s = e?.trigger ?? `onMount`,
    c = e?.target,
    l = e?.threshold;
  O(() => {
    if (!a || n) return;
    o.current.hasMounted = !0;
    function e() {
      let { effect: e } = o.current;
      if (
        !a ||
        !e ||
        (e?.repeat !== !0 && o.current.hasAnimatedOnce) ||
        (e?.type === `appear` && o.current.isAnimating)
      )
        return;
      Object.assign(o.current, { hasAnimatedOnce: !0, isAnimating: !0 });
      let t = e.type;
      switch (t) {
        case `appear`: {
          let { transition: t, startDelay: n, repeat: i, tokenization: a } = e,
            s = { current: void 0 };
          return (
            qf(
              a,
              e.effect,
              r,
              t,
              n,
              i,
              () => {
                Object.assign(o.current, { isAnimating: !1 });
              },
              s
            ),
            () => {
              var e;
              return (e = s.current)?.call(s);
            }
          );
        }
        default:
          H(t);
      }
    }
    switch (s) {
      case `onMount`:
        e();
        return;
      case `onInView`: {
        let n = t?.current;
        return n ? be(n, e, { amount: l ?? 0 }) : void 0;
      }
      case `onScrollTarget`: {
        let t = c?.ref.current;
        return t
          ? be(t, e, {
              amount: l ?? 0,
              root: document,
              margin: c?.offset ? `${c.offset}px 0px 0px 0px` : void 0,
            })
          : void 0;
      }
      default:
        H(s);
    }
  }, [a, r, n, t, c, l, s]);
  let u = !!e,
    d = e ? Hf(e) : void 0;
  return T(
    () => ({
      getTokenizer: () => {
        if ((r.clear(), !u)) return;
        let { hasMounted: e, hasAnimatedOnce: t, effect: i } = o.current,
          s = Wf(a, n || Kf(e, t, i), o.current.effect);
        return {
          text: (e) => Vf(e, d, r, s),
          props: (e) => {
            if (i?.tokenization !== `element`) return;
            let t = Lf();
            return r.add(t), { ref: t, style: { ...e, ...s } };
          },
        };
      },
      play: () => {
        let { effect: e } = o.current;
        if (!e) return;
        let t = e.type;
        switch (t) {
          case `appear`: {
            let { transition: t, startDelay: n } = e;
            qf(d, e.effect, r, t, n);
            break;
          }
          default:
            H(t);
        }
      },
    }),
    [a, u, r, n, d]
  );
}
function Kf(e, t, n) {
  return !(
    (e && n?.trigger === `onMount`) ||
    (t &&
      !n?.repeat &&
      (n?.trigger === `onInView` || n?.trigger === `onScrollTarget`))
  );
}
async function qf(e = `character`, t, n, r, i = 0, a = !1, o, s) {
  let c = Bf(t),
    l = new AbortController();
  switch ((s && (s.current = () => l.abort()), e)) {
    case `character`:
    case `element`:
    case `word`: {
      let e = await Jf(n, l);
      if (
        e === null ||
        (ge(e, c, {
          ...r,
          restDelta: 0.001,
          delay: Me(r?.delay ?? 0, { startDelay: i }),
        }).then(() => o?.()),
        !a || !s)
      )
        return;
      s.current = () =>
        void ge(e, t, {
          ...r,
          restDelta: 0.001,
          delay: Me(r?.delay ?? 0, { startDelay: i }),
        });
      return;
    }
    case `line`: {
      try {
        for (let e of n) await Rf(e, l);
      } catch {
        return;
      }
      let e;
      if (
        (ye.read(() => {
          (e = Yf(n)),
            e.length !== 0 &&
              ye.update(() => {
                let t = e.map((e, t) =>
                  ge(e, c, {
                    ...r,
                    restDelta: 0.001,
                    delay: i + t * (r?.delay ?? 0),
                  })
                );
                Promise.all(t).then(() => o?.());
              });
        }),
        !a || !s)
      )
        return;
      s.current = () => {
        e.length !== 0 &&
          e.forEach((e, n) => {
            ge(e, t, {
              ...r,
              restDelta: 0.001,
              delay: i + n * (r?.delay ?? 0),
            });
          });
      };
      return;
    }
    default:
      H(e);
  }
}
async function Jf(e, t) {
  if (e.size === 0) return null;
  let n = [];
  for (let r of e)
    try {
      let e = await Rf(r, t);
      e && n.push(e);
    } catch {
      return null;
    }
  return n;
}
function Yf(e) {
  let t = [],
    n = [],
    r = null;
  for (let i of e) {
    if (!i.current) continue;
    let e = i.current.offsetTop,
      a = i.current.offsetHeight;
    !a || r === null || e === r
      ? n.push(i.current)
      : (t.push(n), (n = [i.current])),
      a && (r = e);
  }
  return t.push(n), t;
}
function Xf(e) {
  return e.type === A;
}
function Zf(e) {
  return e.type === `br`;
}
function Qf(e, t, n, i, a = {}, o, s = Xf(e) ? -1 : 0) {
  let c = v.toArray(e.props.children);
  R(n) && (c = c.slice(0, 1));
  let l = !0;
  c = c.map((e) => {
    if (((!r(e) || !Zf(e)) && (l = !1), r(e)))
      return Qf(e, t, n, i, a, o, s + 1);
    let c = R(n) ? n : e;
    return R(c) && o ? o.text(c) : c;
  });
  let { "data-preset-tag": u, ...d } = e.props;
  if (R(e.type) || Ce(e.type)) {
    let n = Pe(e.type) || e.type,
      r = u || n,
      f = R(r) ? t?.[r] : void 0;
    (d.className = Xo(`framer-text`, d.className, f)),
      o && s === 0 && !l && Object.assign(d, o.props(d.style));
    let p =
        n === `h1` ||
        n === `h2` ||
        n === `h3` ||
        n === `h4` ||
        n === `h5` ||
        n === `h6`,
      m = t?.anchor;
    if (p && m) {
      let e = $f(c, a);
      d.id = e;
      let t = Xo(`framer-text`, m),
        n = x(`a`, { href: `#${e}`, className: t, children: c });
      (d.style = { ...(d.style ?? {}), scrollMarginTop: i }), (c = [n]);
    }
  }
  return C(e, d, ...c);
}
function $f(e, t) {
  let n = e.map(ep).join(``),
    r = wn(n),
    i = t[r] ?? 0;
  return i > 0 && (r += `-${i}`), (t[r] = i + 1), r;
}
function ep(e) {
  return R(e) || z(e)
    ? e.toString()
    : r(e)
    ? ep(e.props.children)
    : Array.isArray(e)
    ? e.map(ep).join(``)
    : ``;
}
function tp(e) {
  var t, n;
  let r = (e * Math.PI) / 180,
    i = { x: -Math.sin(r) * 100, y: Math.cos(r) * 100 },
    a = lr(i.x, i.y),
    o = eg(lr(0.5, 0.5), a),
    s = X.points({ x: 0, y: 0, width: 1, height: 1 }),
    c = s
      .map((e) => ({ point: e, distance: lr.distance(a, e) }))
      .sort((e, t) => e.distance - t.distance),
    l = (t = c[0])?.point,
    u = (n = c[1])?.point;
  V(l && u, `linearGradientLine: Must have 2 closest points.`);
  let [d, f] = s.filter((e) => !lr.isEqual(e, l) && !lr.isEqual(e, u));
  V(d && f, `linearGradientLine: Must have 2 opposing points.`);
  let p = eg.intersection(o, eg(l, u)),
    m = eg.intersection(o, eg(d, f));
  return (
    V(p && m, `linearGradientLine: Must have a start and end point.`), eg(p, m)
  );
}
function np(e, t) {
  var n, r;
  let i = tp(e.angle),
    a = Da(e),
    o = (n = a[0])?.position ?? 0,
    s = (r = a[a.length - 1])?.position ?? 1,
    c = eg.pointAtPercentDistance(i, o),
    l = eg.pointAtPercentDistance(i, s),
    u = Se([o, s], [0, 1]);
  return {
    id: `id${t}g${Sv.hash(e)}`,
    x1: c.x,
    y1: c.y,
    x2: l.x,
    y2: l.y,
    stops: a.map((t) => ({
      color: t.value,
      alpha: gv.getAlpha(t.value) * e.alpha,
      position: u(t.position),
    })),
  };
}
function rp(e, t) {
  return {
    id: `id${t}g${wv.hash(e)}`,
    widthFactor: e.widthFactor,
    heightFactor: e.heightFactor,
    centerAnchorX: e.centerAnchorX,
    centerAnchorY: e.centerAnchorY,
    stops: Da(e).map((t) => ({
      color: t.value,
      alpha: gv.getAlpha(t.value) * e.alpha,
      position: t.position,
    })),
  };
}
function ip(e) {
  if (!R(e)) return !1;
  let t = e.charAt(e.length - 1);
  if (t !== `%`) return !1;
  let n = e.slice(0, -1),
    r = parseFloat(n);
  return z(r);
}
function ap(e) {
  let t = e.slice(0, -1),
    n = parseFloat(t);
  return z(n) ? n : 50;
}
function op(e) {
  return ip(e) ? ap(e) / 100 : e === `left` ? 0 : e === `right` ? 1 : 0.5;
}
function sp(e) {
  return ip(e) ? ap(e) / 100 : e === `top` ? 0 : e === `bottom` ? 1 : 0.5;
}
function cp(e, t, n, r) {
  if (
    ((e = Sh.get(e, `#09F`)),
    !G_.isImageObject(e) || !e.pixelWidth || !e.pixelHeight)
  )
    return;
  let i = e.pixelWidth,
    a = e.pixelHeight,
    o,
    { fit: s } = e,
    c = 1,
    l = 1,
    u = 0,
    d = 0;
  if (s === `fill` || s === `fit` || s === `tile` || !s) {
    let n = 1,
      f = 1,
      p = i / a,
      m = t.height * p,
      h = t.width / p,
      g = m / t.width,
      _ = h / t.height;
    if (s === `tile`) {
      (e.backgroundSize ??= 1),
        (c = Math.round(e.backgroundSize * (i / 2))),
        (l = Math.round(e.backgroundSize * (a / 2)));
      let n = t.x ?? 0,
        s = t.y ?? 0,
        f = 0,
        p = 0;
      r && ((f = n), (p = s)),
        (u = (t.width - c) * op(e.positionX) + f),
        (d = (t.height - l) * sp(e.positionY) + p),
        (o = `translate(${u + n}, ${d + s})`);
    } else
      (s === `fill` || !s ? _ > g : _ < g)
        ? ((f = _), (d = (1 - _) * sp(e.positionY)))
        : ((n = g), (u = (1 - g) * op(e.positionX))),
        (o = `translate(${u}, ${d}) scale(${n}, ${f})`);
  }
  let f = `id${n}g-fillImage`;
  return {
    id: f,
    path: e.src ?? ``,
    transform: o,
    width: c,
    height: l,
    offsetX: u,
    offsetY: d,
  };
}
function lp(e) {
  return e.startsWith(`data:${pT}`);
}
function up(e, t) {
  if (/^\w+:/u.test(e) && !lp(e)) return e;
  t =
    typeof t == `number`
      ? t <= 512
        ? 512
        : t <= 1024
        ? 1024
        : t <= 2048
        ? 2048
        : 4096
      : void 0;
  let n = Y.current() === Y.export;
  return z_.assetResolver(e, { pixelSize: t, isExport: n }) ?? ``;
}
function dp(e) {
  try {
    let t = jf(e),
      n = t.getElementsByTagName(`svg`)[0];
    if (!n) throw Error(`no svg element found`);
    return n;
  } catch {
    return;
  }
}
function fp(e, t) {
  let n = pp(t);
  mp(e, n);
}
function pp(e) {
  return e.replace(/[^\w\-:.]|^[^a-z]+/gi, ``);
}
function mp(e, t) {
  hp(e, t);
  let n = Array.from(e.children);
  n.forEach((e) => {
    mp(e, t);
  });
}
function hp(e, t) {
  let n = e.getAttributeNames();
  n.forEach((n) => {
    let r = e.getAttribute(n);
    if (!r) return;
    if (
      (n === `id` && e.setAttribute(n, `${t}_${r}`),
      n === `href` || n === `xlink:href`)
    ) {
      let [i, a] = r.split(`#`);
      if (i) return;
      e.setAttribute(n, `#${t}_${a}`);
      return;
    }
    let i = `url(#`;
    if (r.includes(i)) {
      let a = r.replace(i, `${i}${t}_`);
      e.setAttribute(n, a);
    }
  });
}
function gp(e) {
  var t;
  if (!e) return;
  let n = /(-?[\d.]+)([a-z%]*)/u.exec(e);
  if (!(n?.[1] === void 0 || n?.[2] === void 0) && !(t = n[2])?.startsWith(`%`))
    return Math.round(parseFloat(n[1]) * (bT[n[2]] || 1));
}
function _p(e) {
  let t = gp(e.getAttribute(`width`)),
    n = gp(e.getAttribute(`height`));
  if (!(typeof t != `number` || typeof n != `number`) && !(t <= 0 || n <= 0))
    return { width: t, height: n };
}
function vp(e) {
  return e.indexOf(`image`) >= 0;
}
function yp(e) {
  return e.indexOf(`var(--`) >= 0;
}
function bp(e) {
  return !!(
    e.borderRadius ||
    e.borderBottomLeftRadius ||
    e.borderBottomRightRadius ||
    e.borderTopLeftRadius ||
    e.borderTopRightRadius
  );
}
function xp(e, t) {
  var n, r;
  let i = e.current;
  if (!i) return;
  let a = t.providedWindow ?? q,
    o = i.firstElementChild;
  if (!o || !(o instanceof a.SVGSVGElement)) return;
  if (!o.getAttribute(`viewBox`)) {
    let e = yT.getViewBox(t.svg);
    e && o.setAttribute(`viewBox`, e);
  }
  let { withExternalLayout: s, parentSize: c } = t,
    l = !s && fi(t) && c !== 1 && c !== 2;
  if (l) return;
  let { intrinsicWidth: u, intrinsicHeight: d, _constraints: f } = t;
  (n = o.viewBox.baseVal)?.width === 0 &&
    (r = o.viewBox.baseVal)?.height === 0 &&
    U(u) &&
    U(d) &&
    o.setAttribute(`viewBox`, `0 0 ${u} ${d}`),
    f && f.aspectRatio
      ? o.setAttribute(`preserveAspectRatio`, ``)
      : o.setAttribute(`preserveAspectRatio`, `none`),
    o.setAttribute(`width`, `100%`),
    o.setAttribute(`height`, `100%`);
}
function Sp() {
  return (
    d.useInsertionEffect(() => {
      Ni();
    }, []),
    null
  );
}
function Cp(e) {
  return e > wT ? `lazy` : void 0;
}
function wp(e, t, n) {
  let r = Dp(t);
  !n?.supportsExplicitInterCodegen &&
    !r.some((e) => e.explicitInter === !1) &&
    r.push({ explicitInter: !1, fonts: [] }),
    Object.assign(e, { fonts: r });
}
function Tp(e) {
  if (!e) return Id();
  let t = e.fonts;
  return t ?? Id();
}
function Ep(e) {
  return e.length === 0 ? [{ explicitInter: !1, fonts: [] }] : Dp(e);
}
function Dp(e) {
  let t = { explicitInter: !1, fonts: [] },
    n = [];
  for (let r of e) Op(r) ? n.push(r) : t.fonts.push(kp(r));
  return t.fonts.length > 0 && n.push(t), n;
}
function Op(e) {
  return TT in e;
}
function kp(e) {
  let t;
  return (
    (t = e.url.startsWith(`https://fonts.gstatic.com/s/`)
      ? `google`
      : e.url.startsWith(
          `https://framerusercontent.com/third-party-assets/fontshare/`
        )
      ? `fontshare`
      : `custom`),
    { ...e, source: t }
  );
}
function Ap(e, t) {
  let n = `${e}-start`;
  performance.mark(n), t();
  let r = `${e}-end`;
  performance.mark(r), performance.measure(e, n, r);
}
var jp,
  Mp,
  Np,
  Pp,
  Fp,
  Ip,
  Lp,
  Rp,
  zp,
  Bp,
  Vp,
  Hp,
  Up,
  Wp,
  Gp,
  Kp,
  qp,
  Jp,
  q,
  Yp,
  Xp,
  Zp,
  Qp,
  $p,
  em,
  tm,
  nm,
  rm,
  im,
  am,
  om,
  sm,
  cm,
  lm,
  um,
  dm,
  fm,
  pm,
  mm,
  hm,
  gm,
  _m,
  vm,
  ym,
  bm,
  xm,
  Sm,
  Cm,
  wm,
  Tm,
  Em,
  Dm,
  Om,
  km,
  Am,
  jm,
  Mm,
  Nm,
  Pm,
  Fm,
  Im,
  Lm,
  Rm,
  zm,
  Bm,
  Vm,
  Hm,
  Um,
  Wm,
  Gm,
  Km,
  qm,
  Jm,
  Ym,
  Xm,
  Zm,
  Qm,
  $m,
  eh,
  th,
  nh,
  rh,
  ih,
  ah,
  oh,
  sh,
  ch,
  lh,
  uh,
  dh,
  fh,
  ph,
  mh,
  hh,
  gh,
  _h,
  vh,
  yh,
  bh,
  xh,
  Sh,
  Ch,
  wh,
  Th,
  Eh,
  Dh,
  Oh,
  kh,
  Ah,
  jh,
  Mh,
  Nh,
  Ph,
  Fh,
  Ih,
  J,
  Lh,
  Rh,
  zh,
  Bh,
  Vh,
  Hh,
  Uh,
  Wh,
  Gh,
  Kh,
  Y,
  qh,
  Jh,
  Yh,
  Xh,
  Zh,
  Qh,
  $h,
  eg,
  X,
  tg,
  ng,
  rg,
  ig,
  ag,
  og,
  sg,
  cg,
  lg,
  ug,
  dg,
  fg,
  pg,
  mg,
  hg,
  gg,
  _g,
  vg,
  yg,
  bg,
  xg,
  Sg,
  Cg,
  wg,
  Tg,
  Eg,
  Dg,
  Og,
  Z,
  kg,
  Ag,
  jg,
  Mg,
  Ng,
  Pg,
  Fg,
  Ig,
  Lg,
  Rg,
  zg,
  Bg,
  Vg,
  Hg,
  Ug,
  Wg,
  Gg,
  Kg,
  qg,
  Jg,
  Yg,
  Xg,
  Zg,
  Qg,
  $g,
  e_,
  t_,
  n_,
  r_,
  i_,
  a_,
  o_,
  s_,
  c_,
  l_,
  u_,
  d_,
  f_,
  p_,
  m_,
  h_,
  g_,
  __,
  v_,
  y_,
  b_,
  x_,
  S_,
  C_,
  w_,
  T_,
  E_,
  D_,
  O_,
  k_,
  A_,
  j_,
  M_,
  N_,
  P_,
  F_,
  I_,
  L_,
  R_,
  z_,
  B_,
  V_,
  H_,
  U_,
  W_,
  G_,
  K_,
  q_,
  J_,
  Y_,
  X_,
  Z_,
  Q_,
  $_,
  ev,
  tv,
  nv,
  rv,
  iv,
  av,
  ov,
  sv,
  cv,
  lv,
  uv,
  dv,
  fv,
  pv,
  mv,
  hv,
  gv,
  _v,
  vv,
  yv,
  bv,
  xv,
  Sv,
  Cv,
  wv,
  Tv,
  Ev,
  Dv,
  Ov,
  kv,
  Av,
  jv,
  Mv,
  Nv,
  Pv,
  Fv,
  Iv,
  Lv,
  Rv,
  zv,
  Bv,
  Vv,
  Hv,
  Uv,
  Wv,
  Gv,
  Kv,
  qv,
  Jv,
  Yv,
  Xv,
  Zv,
  Qv,
  $v,
  ey,
  ty,
  ny,
  ry,
  iy,
  ay,
  oy,
  sy,
  cy,
  ly,
  uy,
  dy,
  fy,
  py,
  my,
  hy,
  gy,
  _y,
  vy,
  yy,
  by,
  xy,
  Sy,
  Cy,
  wy,
  Ty,
  Ey,
  Dy,
  Oy,
  ky,
  Ay,
  jy,
  My,
  Ny,
  Py,
  Fy,
  Iy,
  Ly,
  Ry,
  zy,
  By,
  Vy,
  Hy,
  Uy,
  Wy,
  Gy,
  Ky,
  qy,
  Jy,
  Yy,
  Xy,
  Zy,
  Qy,
  $y,
  eb,
  tb,
  nb,
  rb,
  ib,
  ab,
  ob,
  sb,
  cb,
  lb,
  ub,
  db,
  fb,
  pb,
  mb,
  hb,
  gb,
  _b,
  vb,
  yb,
  bb,
  xb,
  Sb,
  Cb,
  wb,
  Tb,
  Eb,
  Db,
  Ob,
  kb,
  Ab,
  jb,
  Mb,
  Nb,
  Pb,
  Fb,
  Ib,
  Lb,
  Rb,
  zb,
  Bb,
  Vb,
  Hb,
  Ub,
  Wb,
  Gb,
  Kb,
  qb,
  Jb,
  Yb,
  Xb,
  Zb,
  Qb,
  $b,
  ex,
  tx,
  nx,
  rx,
  ix,
  ax,
  ox,
  sx,
  cx,
  lx,
  ux,
  dx,
  fx,
  px,
  mx,
  hx,
  gx,
  _x,
  vx,
  yx,
  bx,
  xx,
  Sx,
  Cx,
  wx,
  Tx,
  Ex,
  Dx,
  Ox,
  kx,
  Ax,
  jx,
  Mx,
  Nx,
  Px,
  Fx,
  Ix,
  Lx,
  Rx,
  zx,
  Bx,
  Vx,
  Hx,
  Ux,
  Wx,
  Gx,
  Kx,
  Q,
  qx,
  Jx,
  Yx,
  Xx,
  Zx,
  Qx,
  $x,
  eS,
  tS,
  nS,
  rS,
  iS,
  $,
  aS,
  oS,
  sS,
  cS,
  lS,
  uS,
  dS,
  fS,
  pS,
  mS,
  hS,
  gS,
  _S,
  vS,
  yS,
  bS,
  xS,
  SS,
  CS,
  wS,
  TS,
  ES,
  DS,
  OS,
  kS,
  AS,
  jS,
  MS,
  NS,
  PS,
  FS,
  IS,
  LS,
  RS,
  zS,
  BS,
  VS,
  HS,
  US,
  WS,
  GS,
  KS,
  qS,
  JS,
  YS,
  XS,
  ZS,
  QS,
  $S,
  eC,
  tC,
  nC,
  rC,
  iC,
  aC,
  oC,
  sC,
  cC,
  lC,
  uC,
  dC,
  fC,
  pC,
  mC,
  hC,
  gC,
  _C,
  vC,
  yC,
  bC,
  xC,
  SC,
  CC,
  wC,
  TC,
  EC,
  DC,
  OC,
  kC,
  AC,
  jC,
  MC,
  NC,
  PC,
  FC,
  IC,
  LC,
  RC,
  zC,
  BC,
  VC,
  HC,
  UC,
  WC,
  GC,
  KC,
  qC,
  JC,
  YC,
  XC,
  ZC,
  QC,
  $C,
  ew,
  tw,
  nw,
  rw,
  iw,
  aw,
  ow,
  sw,
  cw,
  lw,
  uw,
  dw,
  fw,
  pw,
  mw,
  hw,
  gw,
  _w,
  vw,
  yw,
  bw,
  xw,
  Sw,
  Cw,
  ww,
  Tw,
  Ew,
  Dw,
  Ow,
  kw,
  Aw,
  jw,
  Mw,
  Nw,
  Pw,
  Fw,
  Iw,
  Lw,
  Rw,
  zw,
  Bw,
  Vw,
  Hw,
  Uw,
  Ww,
  Gw,
  Kw,
  qw,
  Jw,
  Yw,
  Xw,
  Zw,
  Qw,
  $w,
  eT,
  tT,
  nT,
  rT,
  iT,
  aT,
  oT,
  sT,
  cT,
  lT,
  uT,
  dT,
  fT,
  pT,
  mT,
  hT,
  gT,
  _T,
  vT,
  yT,
  bT,
  xT,
  ST,
  CT,
  wT,
  TT,
  ET = e(() => {
    _(),
      //! Credit to Astro | MIT License
      /**
       * @license Emotion v11.0.0
       * MIT License
       *
       * Copyright (c) Emotion team and other contributors
       *
       * Permission is hereby granted, free of charge, to any person obtaining a copy
       * of this software and associated documentation files (the "Software"), to deal
       * in the Software without restriction, including without limitation the rights
       * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
       * copies of the Software, and to permit persons to whom the Software is
       * furnished to do so, subject to the following conditions:
       *
       * The above copyright notice and this permission notice shall be included in all
       * copies or substantial portions of the Software.
       *
       * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
       * SOFTWARE.
       */
      /*! Bundled license information:

react-is/cjs/react-is.production.min.js:
(** @license React v16.13.1
* react-is.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*)
*/
      L(),
      xe(),
      h(),
      m(),
      g(),
      (jp = ce({
        "../../../node_modules/hsluv/dist/hsluv.cjs"(exports) {
          Object.defineProperty(exports, `__esModule`, { value: !0 }),
            (exports.Hsluv = void 0);
          var t = class e {
            constructor() {
              (this.hex = `#000000`),
                (this.rgb_r = 0),
                (this.rgb_g = 0),
                (this.rgb_b = 0),
                (this.xyz_x = 0),
                (this.xyz_y = 0),
                (this.xyz_z = 0),
                (this.luv_l = 0),
                (this.luv_u = 0),
                (this.luv_v = 0),
                (this.lch_l = 0),
                (this.lch_c = 0),
                (this.lch_h = 0),
                (this.hsluv_h = 0),
                (this.hsluv_s = 0),
                (this.hsluv_l = 0),
                (this.hpluv_h = 0),
                (this.hpluv_p = 0),
                (this.hpluv_l = 0),
                (this.r0s = 0),
                (this.r0i = 0),
                (this.r1s = 0),
                (this.r1i = 0),
                (this.g0s = 0),
                (this.g0i = 0),
                (this.g1s = 0),
                (this.g1i = 0),
                (this.b0s = 0),
                (this.b0i = 0),
                (this.b1s = 0),
                (this.b1i = 0);
            }
            static fromLinear(e) {
              return e <= 0.0031308
                ? 12.92 * e
                : 1.055 * e ** (1 / 2.4) - 0.055;
            }
            static toLinear(e) {
              return e > 0.04045 ? ((e + 0.055) / 1.055) ** 2.4 : e / 12.92;
            }
            static yToL(t) {
              return t <= e.epsilon
                ? (t / e.refY) * e.kappa
                : 116 * (t / e.refY) ** (1 / 3) - 16;
            }
            static lToY(t) {
              return t <= 8
                ? (e.refY * t) / e.kappa
                : e.refY * ((t + 16) / 116) ** 3;
            }
            static rgbChannelToHex(t) {
              let n = Math.round(t * 255),
                r = n % 16,
                i = ((n - r) / 16) | 0;
              return e.hexChars.charAt(i) + e.hexChars.charAt(r);
            }
            static hexToRgbChannel(t, n) {
              let r = e.hexChars.indexOf(t.charAt(n)),
                i = e.hexChars.indexOf(t.charAt(n + 1)),
                a = r * 16 + i;
              return a / 255;
            }
            static distanceFromOriginAngle(e, t, n) {
              let r = t / (Math.sin(n) - e * Math.cos(n));
              return r < 0 ? 1 / 0 : r;
            }
            static distanceFromOrigin(e, t) {
              return Math.abs(t) / Math.sqrt(e ** 2 + 1);
            }
            static min6(e, t, n, r, i, a) {
              return Math.min(
                e,
                Math.min(t, Math.min(n, Math.min(r, Math.min(i, a))))
              );
            }
            rgbToHex() {
              (this.hex = `#`),
                (this.hex += e.rgbChannelToHex(this.rgb_r)),
                (this.hex += e.rgbChannelToHex(this.rgb_g)),
                (this.hex += e.rgbChannelToHex(this.rgb_b));
            }
            hexToRgb() {
              (this.hex = this.hex.toLowerCase()),
                (this.rgb_r = e.hexToRgbChannel(this.hex, 1)),
                (this.rgb_g = e.hexToRgbChannel(this.hex, 3)),
                (this.rgb_b = e.hexToRgbChannel(this.hex, 5));
            }
            xyzToRgb() {
              (this.rgb_r = e.fromLinear(
                e.m_r0 * this.xyz_x + e.m_r1 * this.xyz_y + e.m_r2 * this.xyz_z
              )),
                (this.rgb_g = e.fromLinear(
                  e.m_g0 * this.xyz_x +
                    e.m_g1 * this.xyz_y +
                    e.m_g2 * this.xyz_z
                )),
                (this.rgb_b = e.fromLinear(
                  e.m_b0 * this.xyz_x +
                    e.m_b1 * this.xyz_y +
                    e.m_b2 * this.xyz_z
                ));
            }
            rgbToXyz() {
              let t = e.toLinear(this.rgb_r),
                n = e.toLinear(this.rgb_g),
                r = e.toLinear(this.rgb_b);
              (this.xyz_x =
                0.41239079926595 * t +
                0.35758433938387 * n +
                0.18048078840183 * r),
                (this.xyz_y =
                  0.21263900587151 * t +
                  0.71516867876775 * n +
                  0.072192315360733 * r),
                (this.xyz_z =
                  0.019330818715591 * t +
                  0.11919477979462 * n +
                  0.95053215224966 * r);
            }
            xyzToLuv() {
              let t = this.xyz_x + 15 * this.xyz_y + 3 * this.xyz_z,
                n = 4 * this.xyz_x,
                r = 9 * this.xyz_y;
              t === 0 ? ((n = NaN), (r = NaN)) : ((n /= t), (r /= t)),
                (this.luv_l = e.yToL(this.xyz_y)),
                this.luv_l === 0
                  ? ((this.luv_u = 0), (this.luv_v = 0))
                  : ((this.luv_u = 13 * this.luv_l * (n - e.refU)),
                    (this.luv_v = 13 * this.luv_l * (r - e.refV)));
            }
            luvToXyz() {
              if (this.luv_l === 0) {
                (this.xyz_x = 0), (this.xyz_y = 0), (this.xyz_z = 0);
                return;
              }
              let t = this.luv_u / (13 * this.luv_l) + e.refU,
                n = this.luv_v / (13 * this.luv_l) + e.refV;
              (this.xyz_y = e.lToY(this.luv_l)),
                (this.xyz_x = 0 - (9 * this.xyz_y * t) / ((t - 4) * n - t * n)),
                (this.xyz_z =
                  (9 * this.xyz_y - 15 * n * this.xyz_y - n * this.xyz_x) /
                  (3 * n));
            }
            luvToLch() {
              if (
                ((this.lch_l = this.luv_l),
                (this.lch_c = Math.sqrt(
                  this.luv_u * this.luv_u + this.luv_v * this.luv_v
                )),
                this.lch_c < 1e-8)
              )
                this.lch_h = 0;
              else {
                let e = Math.atan2(this.luv_v, this.luv_u);
                (this.lch_h = (e * 180) / Math.PI),
                  this.lch_h < 0 && (this.lch_h = 360 + this.lch_h);
              }
            }
            lchToLuv() {
              let e = (this.lch_h / 180) * Math.PI;
              (this.luv_l = this.lch_l),
                (this.luv_u = Math.cos(e) * this.lch_c),
                (this.luv_v = Math.sin(e) * this.lch_c);
            }
            calculateBoundingLines(t) {
              let n = (t + 16) ** 3 / 1560896,
                r = n > e.epsilon ? n : t / e.kappa,
                i = r * (284517 * e.m_r0 - 94839 * e.m_r2),
                a = r * (838422 * e.m_r2 + 769860 * e.m_r1 + 731718 * e.m_r0),
                o = r * (632260 * e.m_r2 - 126452 * e.m_r1),
                s = r * (284517 * e.m_g0 - 94839 * e.m_g2),
                c = r * (838422 * e.m_g2 + 769860 * e.m_g1 + 731718 * e.m_g0),
                l = r * (632260 * e.m_g2 - 126452 * e.m_g1),
                u = r * (284517 * e.m_b0 - 94839 * e.m_b2),
                d = r * (838422 * e.m_b2 + 769860 * e.m_b1 + 731718 * e.m_b0),
                f = r * (632260 * e.m_b2 - 126452 * e.m_b1);
              (this.r0s = i / o),
                (this.r0i = (a * t) / o),
                (this.r1s = i / (o + 126452)),
                (this.r1i = ((a - 769860) * t) / (o + 126452)),
                (this.g0s = s / l),
                (this.g0i = (c * t) / l),
                (this.g1s = s / (l + 126452)),
                (this.g1i = ((c - 769860) * t) / (l + 126452)),
                (this.b0s = u / f),
                (this.b0i = (d * t) / f),
                (this.b1s = u / (f + 126452)),
                (this.b1i = ((d - 769860) * t) / (f + 126452));
            }
            calcMaxChromaHpluv() {
              let t = e.distanceFromOrigin(this.r0s, this.r0i),
                n = e.distanceFromOrigin(this.r1s, this.r1i),
                r = e.distanceFromOrigin(this.g0s, this.g0i),
                i = e.distanceFromOrigin(this.g1s, this.g1i),
                a = e.distanceFromOrigin(this.b0s, this.b0i),
                o = e.distanceFromOrigin(this.b1s, this.b1i);
              return e.min6(t, n, r, i, a, o);
            }
            calcMaxChromaHsluv(t) {
              let n = (t / 360) * Math.PI * 2,
                r = e.distanceFromOriginAngle(this.r0s, this.r0i, n),
                i = e.distanceFromOriginAngle(this.r1s, this.r1i, n),
                a = e.distanceFromOriginAngle(this.g0s, this.g0i, n),
                o = e.distanceFromOriginAngle(this.g1s, this.g1i, n),
                s = e.distanceFromOriginAngle(this.b0s, this.b0i, n),
                c = e.distanceFromOriginAngle(this.b1s, this.b1i, n);
              return e.min6(r, i, a, o, s, c);
            }
            hsluvToLch() {
              if (this.hsluv_l > 99.9999999)
                (this.lch_l = 100), (this.lch_c = 0);
              else if (this.hsluv_l < 1e-8) (this.lch_l = 0), (this.lch_c = 0);
              else {
                (this.lch_l = this.hsluv_l),
                  this.calculateBoundingLines(this.hsluv_l);
                let e = this.calcMaxChromaHsluv(this.hsluv_h);
                this.lch_c = (e / 100) * this.hsluv_s;
              }
              this.lch_h = this.hsluv_h;
            }
            lchToHsluv() {
              if (this.lch_l > 99.9999999)
                (this.hsluv_s = 0), (this.hsluv_l = 100);
              else if (this.lch_l < 1e-8)
                (this.hsluv_s = 0), (this.hsluv_l = 0);
              else {
                this.calculateBoundingLines(this.lch_l);
                let e = this.calcMaxChromaHsluv(this.lch_h);
                (this.hsluv_s = (this.lch_c / e) * 100),
                  (this.hsluv_l = this.lch_l);
              }
              this.hsluv_h = this.lch_h;
            }
            hpluvToLch() {
              if (this.hpluv_l > 99.9999999)
                (this.lch_l = 100), (this.lch_c = 0);
              else if (this.hpluv_l < 1e-8) (this.lch_l = 0), (this.lch_c = 0);
              else {
                (this.lch_l = this.hpluv_l),
                  this.calculateBoundingLines(this.hpluv_l);
                let e = this.calcMaxChromaHpluv();
                this.lch_c = (e / 100) * this.hpluv_p;
              }
              this.lch_h = this.hpluv_h;
            }
            lchToHpluv() {
              if (this.lch_l > 99.9999999)
                (this.hpluv_p = 0), (this.hpluv_l = 100);
              else if (this.lch_l < 1e-8)
                (this.hpluv_p = 0), (this.hpluv_l = 0);
              else {
                this.calculateBoundingLines(this.lch_l);
                let e = this.calcMaxChromaHpluv();
                (this.hpluv_p = (this.lch_c / e) * 100),
                  (this.hpluv_l = this.lch_l);
              }
              this.hpluv_h = this.lch_h;
            }
            hsluvToRgb() {
              this.hsluvToLch(),
                this.lchToLuv(),
                this.luvToXyz(),
                this.xyzToRgb();
            }
            hpluvToRgb() {
              this.hpluvToLch(),
                this.lchToLuv(),
                this.luvToXyz(),
                this.xyzToRgb();
            }
            hsluvToHex() {
              this.hsluvToRgb(), this.rgbToHex();
            }
            hpluvToHex() {
              this.hpluvToRgb(), this.rgbToHex();
            }
            rgbToHsluv() {
              this.rgbToXyz(),
                this.xyzToLuv(),
                this.luvToLch(),
                this.lchToHpluv(),
                this.lchToHsluv();
            }
            rgbToHpluv() {
              this.rgbToXyz(),
                this.xyzToLuv(),
                this.luvToLch(),
                this.lchToHpluv(),
                this.lchToHpluv();
            }
            hexToHsluv() {
              this.hexToRgb(), this.rgbToHsluv();
            }
            hexToHpluv() {
              this.hexToRgb(), this.rgbToHpluv();
            }
          };
          (exports.Hsluv = t),
            (t.hexChars = `0123456789abcdef`),
            (t.refY = 1),
            (t.refU = 0.19783000664283),
            (t.refV = 0.46831999493879),
            (t.kappa = 903.2962962),
            (t.epsilon = 0.0088564516),
            (t.m_r0 = 3.240969941904521),
            (t.m_r1 = -1.537383177570093),
            (t.m_r2 = -0.498610760293),
            (t.m_g0 = -0.96924363628087),
            (t.m_g1 = 1.87596750150772),
            (t.m_g2 = 0.041555057407175),
            (t.m_b0 = 0.055630079696993),
            (t.m_b1 = -0.20397695888897),
            (t.m_b2 = 1.056971514242878);
        },
      })),
      (Mp = ce({
        "../../../node_modules/eventemitter3/index.js"(exports, t) {
          var n = Object.prototype.hasOwnProperty,
            r = `~`;
          function i() {}
          Object.create &&
            ((i.prototype = Object.create(null)),
            new i().__proto__ || (r = !1));
          function a(e, t, n) {
            (this.fn = e), (this.context = t), (this.once = n || !1);
          }
          function o(e, t, n, i, o) {
            if (typeof n != `function`)
              throw TypeError(`The listener must be a function`);
            var s = new a(n, i || e, o),
              c = r ? r + t : t;
            return (
              e._events[c]
                ? e._events[c].fn
                  ? (e._events[c] = [e._events[c], s])
                  : e._events[c].push(s)
                : ((e._events[c] = s), e._eventsCount++),
              e
            );
          }
          function s(e, t) {
            --e._eventsCount === 0
              ? (e._events = new i())
              : delete e._events[t];
          }
          function c() {
            (this._events = new i()), (this._eventsCount = 0);
          }
          (c.prototype.eventNames = function () {
            var e = [],
              t,
              i;
            if (this._eventsCount === 0) return e;
            for (i in (t = this._events))
              n.call(t, i) && e.push(r ? i.slice(1) : i);
            return Object.getOwnPropertySymbols
              ? e.concat(Object.getOwnPropertySymbols(t))
              : e;
          }),
            (c.prototype.listeners = function (e) {
              var t = r ? r + e : e,
                n = this._events[t];
              if (!n) return [];
              if (n.fn) return [n.fn];
              for (var i = 0, a = n.length, o = Array(a); i < a; i++)
                o[i] = n[i].fn;
              return o;
            }),
            (c.prototype.listenerCount = function (e) {
              var t = r ? r + e : e,
                n = this._events[t];
              return n ? (n.fn ? 1 : n.length) : 0;
            }),
            (c.prototype.emit = function (e, t, n, i, a, o) {
              var s = r ? r + e : e;
              if (!this._events[s]) return !1;
              var c = this._events[s],
                l = arguments.length,
                u,
                d;
              if (c.fn) {
                switch (
                  (c.once && this.removeListener(e, c.fn, void 0, !0), l)
                ) {
                  case 1:
                    return c.fn.call(c.context), !0;
                  case 2:
                    return c.fn.call(c.context, t), !0;
                  case 3:
                    return c.fn.call(c.context, t, n), !0;
                  case 4:
                    return c.fn.call(c.context, t, n, i), !0;
                  case 5:
                    return c.fn.call(c.context, t, n, i, a), !0;
                  case 6:
                    return c.fn.call(c.context, t, n, i, a, o), !0;
                }
                for (d = 1, u = Array(l - 1); d < l; d++)
                  u[d - 1] = arguments[d];
                c.fn.apply(c.context, u);
              } else {
                var f = c.length,
                  p;
                for (d = 0; d < f; d++)
                  switch (
                    (c[d].once && this.removeListener(e, c[d].fn, void 0, !0),
                    l)
                  ) {
                    case 1:
                      c[d].fn.call(c[d].context);
                      break;
                    case 2:
                      c[d].fn.call(c[d].context, t);
                      break;
                    case 3:
                      c[d].fn.call(c[d].context, t, n);
                      break;
                    case 4:
                      c[d].fn.call(c[d].context, t, n, i);
                      break;
                    default:
                      if (!u)
                        for (p = 1, u = Array(l - 1); p < l; p++)
                          u[p - 1] = arguments[p];
                      c[d].fn.apply(c[d].context, u);
                  }
              }
              return !0;
            }),
            (c.prototype.on = function (e, t, n) {
              return o(this, e, t, n, !1);
            }),
            (c.prototype.once = function (e, t, n) {
              return o(this, e, t, n, !0);
            }),
            (c.prototype.removeListener = function (e, t, n, i) {
              var a = r ? r + e : e;
              if (!this._events[a]) return this;
              if (!t) return s(this, a), this;
              var o = this._events[a];
              if (o.fn)
                o.fn === t &&
                  (!i || o.once) &&
                  (!n || o.context === n) &&
                  s(this, a);
              else {
                for (var c = 0, l = [], u = o.length; c < u; c++)
                  (o[c].fn !== t ||
                    (i && !o[c].once) ||
                    (n && o[c].context !== n)) &&
                    l.push(o[c]);
                l.length
                  ? (this._events[a] = l.length === 1 ? l[0] : l)
                  : s(this, a);
              }
              return this;
            }),
            (c.prototype.removeAllListeners = function (e) {
              var t;
              return (
                e
                  ? ((t = r ? r + e : e), this._events[t] && s(this, t))
                  : ((this._events = new i()), (this._eventsCount = 0)),
                this
              );
            }),
            (c.prototype.off = c.prototype.removeListener),
            (c.prototype.addListener = c.prototype.on),
            (c.prefixed = r),
            (c.EventEmitter = c),
            t !== void 0 && (t.exports = c);
        },
      })),
      (Np = ce({
        "../../../node_modules/hoist-non-react-statics/node_modules/react-is/cjs/react-is.production.min.js"(
          exports
        ) {
          var t = typeof Symbol == `function` && Symbol.for,
            n = t ? Symbol.for(`react.element`) : 60103,
            r = t ? Symbol.for(`react.portal`) : 60106,
            i = t ? Symbol.for(`react.fragment`) : 60107,
            a = t ? Symbol.for(`react.strict_mode`) : 60108,
            o = t ? Symbol.for(`react.profiler`) : 60114,
            s = t ? Symbol.for(`react.provider`) : 60109,
            c = t ? Symbol.for(`react.context`) : 60110,
            l = t ? Symbol.for(`react.async_mode`) : 60111,
            u = t ? Symbol.for(`react.concurrent_mode`) : 60111,
            d = t ? Symbol.for(`react.forward_ref`) : 60112,
            f = t ? Symbol.for(`react.suspense`) : 60113,
            p = t ? Symbol.for(`react.suspense_list`) : 60120,
            m = t ? Symbol.for(`react.memo`) : 60115,
            h = t ? Symbol.for(`react.lazy`) : 60116,
            g = t ? Symbol.for(`react.block`) : 60121,
            _ = t ? Symbol.for(`react.fundamental`) : 60117,
            v = t ? Symbol.for(`react.responder`) : 60118,
            y = t ? Symbol.for(`react.scope`) : 60119;
          function b(e) {
            if (typeof e == `object` && e) {
              var t = e.$$typeof;
              switch (t) {
                case n:
                  switch (((e = e.type), e)) {
                    case l:
                    case u:
                    case i:
                    case o:
                    case a:
                    case f:
                      return e;
                    default:
                      switch (((e &&= e.$$typeof), e)) {
                        case c:
                        case d:
                        case h:
                        case m:
                        case s:
                          return e;
                        default:
                          return t;
                      }
                  }
                case r:
                  return t;
              }
            }
          }
          function x(e) {
            return b(e) === u;
          }
          (exports.AsyncMode = l),
            (exports.ConcurrentMode = u),
            (exports.ContextConsumer = c),
            (exports.ContextProvider = s),
            (exports.Element = n),
            (exports.ForwardRef = d),
            (exports.Fragment = i),
            (exports.Lazy = h),
            (exports.Memo = m),
            (exports.Portal = r),
            (exports.Profiler = o),
            (exports.StrictMode = a),
            (exports.Suspense = f),
            (exports.isAsyncMode = function (e) {
              return x(e) || b(e) === l;
            }),
            (exports.isConcurrentMode = x),
            (exports.isContextConsumer = function (e) {
              return b(e) === c;
            }),
            (exports.isContextProvider = function (e) {
              return b(e) === s;
            }),
            (exports.isElement = function (e) {
              return typeof e == `object` && !!e && e.$$typeof === n;
            }),
            (exports.isForwardRef = function (e) {
              return b(e) === d;
            }),
            (exports.isFragment = function (e) {
              return b(e) === i;
            }),
            (exports.isLazy = function (e) {
              return b(e) === h;
            }),
            (exports.isMemo = function (e) {
              return b(e) === m;
            }),
            (exports.isPortal = function (e) {
              return b(e) === r;
            }),
            (exports.isProfiler = function (e) {
              return b(e) === o;
            }),
            (exports.isStrictMode = function (e) {
              return b(e) === a;
            }),
            (exports.isSuspense = function (e) {
              return b(e) === f;
            }),
            (exports.isValidElementType = function (e) {
              return (
                typeof e == `string` ||
                typeof e == `function` ||
                e === i ||
                e === u ||
                e === o ||
                e === a ||
                e === f ||
                e === p ||
                (typeof e == `object` &&
                  !!e &&
                  (e.$$typeof === h ||
                    e.$$typeof === m ||
                    e.$$typeof === s ||
                    e.$$typeof === c ||
                    e.$$typeof === d ||
                    e.$$typeof === _ ||
                    e.$$typeof === v ||
                    e.$$typeof === y ||
                    e.$$typeof === g))
              );
            }),
            (exports.typeOf = b);
        },
      })),
      (Pp = ce({
        "../../../node_modules/hoist-non-react-statics/node_modules/react-is/index.js"(
          exports,
          t
        ) {
          t.exports = Np();
        },
      })),
      (Fp = ce({
        "../../../node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"(
          exports,
          t
        ) {
          var n = Pp(),
            r = {
              childContextTypes: !0,
              contextType: !0,
              contextTypes: !0,
              defaultProps: !0,
              displayName: !0,
              getDefaultProps: !0,
              getDerivedStateFromError: !0,
              getDerivedStateFromProps: !0,
              mixins: !0,
              propTypes: !0,
              type: !0,
            },
            i = {
              name: !0,
              length: !0,
              prototype: !0,
              caller: !0,
              callee: !0,
              arguments: !0,
              arity: !0,
            },
            a = {
              $$typeof: !0,
              render: !0,
              defaultProps: !0,
              displayName: !0,
              propTypes: !0,
            },
            o = {
              $$typeof: !0,
              compare: !0,
              defaultProps: !0,
              displayName: !0,
              propTypes: !0,
              type: !0,
            },
            s = {};
          (s[n.ForwardRef] = a), (s[n.Memo] = o);
          function c(e) {
            return n.isMemo(e) ? o : s[e.$$typeof] || r;
          }
          var l = Object.defineProperty,
            u = Object.getOwnPropertyNames,
            d = Object.getOwnPropertySymbols,
            f = Object.getOwnPropertyDescriptor,
            p = Object.getPrototypeOf,
            m = Object.prototype;
          function h(e, t, n) {
            if (typeof t != `string`) {
              if (m) {
                var r = p(t);
                r && r !== m && h(e, r, n);
              }
              var a = u(t);
              d && (a = a.concat(d(t)));
              for (var o = c(e), s = c(t), g = 0; g < a.length; ++g) {
                var _ = a[g];
                if (!i[_] && !(n && n[_]) && !(s && s[_]) && !(o && o[_])) {
                  var v = f(t, _);
                  try {
                    l(e, _, v);
                  } catch {}
                }
              }
            }
            return e;
          }
          t.exports = h;
        },
      })),
      (Ip = ce({
        "../../../node_modules/fontfaceobserver/fontfaceobserver.standalone.js"(
          exports,
          t
        ) {
          (function () {
            function e(e, t) {
              document.addEventListener
                ? e.addEventListener(`scroll`, t, !1)
                : e.attachEvent(`scroll`, t);
            }
            function n(e) {
              document.body
                ? e()
                : document.addEventListener
                ? document.addEventListener(`DOMContentLoaded`, function t() {
                    document.removeEventListener(`DOMContentLoaded`, t), e();
                  })
                : document.attachEvent(`onreadystatechange`, function t() {
                    (document.readyState == `interactive` ||
                      document.readyState == `complete`) &&
                      (document.detachEvent(`onreadystatechange`, t), e());
                  });
            }
            function r(e) {
              (this.g = document.createElement(`div`)),
                this.g.setAttribute(`aria-hidden`, `true`),
                this.g.appendChild(document.createTextNode(e)),
                (this.h = document.createElement(`span`)),
                (this.i = document.createElement(`span`)),
                (this.m = document.createElement(`span`)),
                (this.j = document.createElement(`span`)),
                (this.l = -1),
                (this.h.style.cssText = `max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;`),
                (this.i.style.cssText = `max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;`),
                (this.j.style.cssText = `max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;`),
                (this.m.style.cssText = `display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;`),
                this.h.appendChild(this.m),
                this.i.appendChild(this.j),
                this.g.appendChild(this.h),
                this.g.appendChild(this.i);
            }
            function i(e, t) {
              e.g.style.cssText =
                `max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:` +
                t +
                `;`;
            }
            function a(e) {
              var t = e.g.offsetWidth,
                n = t + 100;
              return (
                (e.j.style.width = n + `px`),
                (e.i.scrollLeft = n),
                (e.h.scrollLeft = e.h.scrollWidth + 100),
                e.l === t ? !1 : ((e.l = t), !0)
              );
            }
            function o(t, n) {
              function r() {
                var e = i;
                a(e) && e.g.parentNode !== null && n(e.l);
              }
              var i = t;
              e(t.h, r), e(t.i, r), a(t);
            }
            function s(e, t, n) {
              (t ||= {}),
                (n ||= k),
                (this.family = e),
                (this.style = t.style || `normal`),
                (this.weight = t.weight || `normal`),
                (this.stretch = t.stretch || `normal`),
                (this.context = n);
            }
            var c = null,
              l = null,
              u = null,
              d = null;
            function f(e) {
              return (
                l === null &&
                  (p(e) && /Apple/.test(k.navigator.vendor)
                    ? ((e =
                        /AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(
                          k.navigator.userAgent
                        )),
                      (l = !!e && 603 > parseInt(e[1], 10)))
                    : (l = !1)),
                l
              );
            }
            function p(e) {
              return d === null && (d = !!e.document.fonts), d;
            }
            function m(e, t) {
              var n = e.style,
                r = e.weight;
              if (u === null) {
                var i = document.createElement(`div`);
                try {
                  i.style.font = `condensed 100px sans-serif`;
                } catch {}
                u = i.style.font !== ``;
              }
              return [n, r, u ? e.stretch : ``, `100px`, t].join(` `);
            }
            (s.prototype.load = function (e, t) {
              var a = this,
                s = e || `BESbswy`,
                l = 0,
                u = t || 3e3,
                d = new Date().getTime();
              return new Promise(function (e, t) {
                if (p(a.context) && !f(a.context)) {
                  var h = new Promise(function (e, t) {
                      function n() {
                        new Date().getTime() - d >= u
                          ? t(Error(`` + u + `ms timeout exceeded`))
                          : a.context.document.fonts
                              .load(m(a, `"` + a.family + `"`), s)
                              .then(function (t) {
                                1 <= t.length ? e() : setTimeout(n, 25);
                              }, t);
                      }
                      n();
                    }),
                    g = new Promise(function (e, t) {
                      l = setTimeout(function () {
                        t(Error(`` + u + `ms timeout exceeded`));
                      }, u);
                    });
                  Promise.race([g, h]).then(function () {
                    clearTimeout(l), e(a);
                  }, t);
                } else
                  n(function () {
                    function n() {
                      var t;
                      (t =
                        (_ != -1 && v != -1) ||
                        (_ != -1 && y != -1) ||
                        (v != -1 && y != -1)) &&
                        ((t = _ != v && _ != y && v != y) ||
                          (c === null &&
                            ((t = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(
                              k.navigator.userAgent
                            )),
                            (c =
                              !!t &&
                              (536 > parseInt(t[1], 10) ||
                                (parseInt(t[1], 10) === 536 &&
                                  11 >= parseInt(t[2], 10))))),
                          (t =
                            c &&
                            ((_ == b && v == b && y == b) ||
                              (_ == x && v == x && y == x) ||
                              (_ == S && v == S && y == S)))),
                        (t = !t)),
                        t &&
                          (C.parentNode !== null && C.parentNode.removeChild(C),
                          clearTimeout(l),
                          e(a));
                    }
                    function f() {
                      if (new Date().getTime() - d >= u)
                        C.parentNode !== null && C.parentNode.removeChild(C),
                          t(Error(`` + u + `ms timeout exceeded`));
                      else {
                        var e = a.context.document.hidden;
                        (!0 === e || e === void 0) &&
                          ((_ = p.g.offsetWidth),
                          (v = h.g.offsetWidth),
                          (y = g.g.offsetWidth),
                          n()),
                          (l = setTimeout(f, 50));
                      }
                    }
                    var p = new r(s),
                      h = new r(s),
                      g = new r(s),
                      _ = -1,
                      v = -1,
                      y = -1,
                      b = -1,
                      x = -1,
                      S = -1,
                      C = document.createElement(`div`);
                    (C.dir = `ltr`),
                      i(p, m(a, `sans-serif`)),
                      i(h, m(a, `serif`)),
                      i(g, m(a, `monospace`)),
                      C.appendChild(p.g),
                      C.appendChild(h.g),
                      C.appendChild(g.g),
                      a.context.document.body.appendChild(C),
                      (b = p.g.offsetWidth),
                      (x = h.g.offsetWidth),
                      (S = g.g.offsetWidth),
                      f(),
                      o(p, function (e) {
                        (_ = e), n();
                      }),
                      i(p, m(a, `"` + a.family + `",sans-serif`)),
                      o(h, function (e) {
                        (v = e), n();
                      }),
                      i(h, m(a, `"` + a.family + `",serif`)),
                      o(g, function (e) {
                        (y = e), n();
                      }),
                      i(g, m(a, `"` + a.family + `",monospace`));
                  });
              });
            }),
              typeof t == `object`
                ? (t.exports = s)
                : ((k.FontFaceObserver = s),
                  (k.FontFaceObserver.prototype.load = s.prototype.load));
          })();
        },
      })),
      (Lp = `preload`),
      (Rp = Object.keys),
      (zp = `equals`),
      (Bp = (() => d.createContext({}))()),
      (Vp = (() => d.createContext({}))()),
      (Hp = []),
      (Up = () => {}),
      (Wp = k !== void 0),
      (Gp = (() =>
        Wp &&
        /bot|-google|google-|yandex|ia_archiver|crawl|spider/iu.test(
          b.userAgent
        ))()),
      (Kp = Wp && typeof k.requestIdleCallback == `function`),
      (qp = (() => (Kp ? k.requestIdleCallback : setTimeout))()),
      (Jp = {
        addEventListener: () => {},
        removeEventListener: () => {},
        dispatchEvent: () => !1,
        ResizeObserver: void 0,
        onpointerdown: !1,
        onpointermove: !1,
        onpointerup: !1,
        ontouchstart: !1,
        ontouchmove: !1,
        ontouchend: !1,
        onmousedown: !1,
        onmousemove: !1,
        onmouseup: !1,
        devicePixelRatio: 1,
        scrollX: 0,
        scrollY: 0,
        location: {
          hash: ``,
          hostname: ``,
          href: ``,
          origin: ``,
          pathname: ``,
          search: ``,
        },
        document: { baseURI: ``, cookie: ``, referrer: null },
        setTimeout: () => 0,
        clearTimeout: () => {},
        setInterval: () => 0,
        clearInterval: () => {},
        requestAnimationFrame: () => 0,
        cancelAnimationFrame: () => {},
        requestIdleCallback: () => 0,
        getSelection: () => null,
        matchMedia: (e) => ({
          matches: !1,
          media: e,
          onchange: () => {},
          addEventListener: () => {},
          removeEventListener: () => {},
          addListener: () => {},
          removeListener: () => {},
          dispatchEvent: () => !1,
        }),
        innerHeight: 0,
        innerWidth: 0,
        SVGSVGElement: {},
        scheduler: void 0,
        open: function (e, t, n) {},
        __framer_events: [],
      }),
      (q = Wp ? k : Jp),
      (Yp = (() => q.scheduler && `yield` in q.scheduler)()),
      (Xp = (() => q.scheduler && `postTask` in q.scheduler)()),
      (Zp = new Set()),
      (Qp = !Gp),
      ($p = 2),
      (em = 46),
      (tm = 47),
      (nm = (e, t) => e.charCodeAt(t)),
      (rm = (e, t) => e.lastIndexOf(t)),
      (im = (e, t, n) => e.slice(t, n)),
      (am = !1),
      (om = `/`),
      (sm = (e) => e === tm),
      (cm = new Set([`/404.html`, `/404`, `/404/`])),
      (lm = `:([a-z]\\w*)`),
      (um = new RegExp(lm, `gi`)),
      (dm = { global: void 0, routes: {} }),
      (fm = d.createContext(dm)),
      (pm = 10),
      (mm = 1e4),
      (hm = (e) => `--view-transition-${e}`),
      (gm = {
        makeKeyframe: (e, t, n) => {
          let r = 0;
          return (
            ((n === `exit` &&
              e.angularDirection === `clockwise` &&
              t === `start`) ||
              (n === `exit` &&
                e.angularDirection === `counter-clockwise` &&
                t === `end`) ||
              (n === `enter` &&
                e.angularDirection === `counter-clockwise` &&
                t === `start`) ||
              (n === `enter` &&
                e.angularDirection === `clockwise` &&
                t === `end`)) &&
              (r = (e.sweepAngle / 360) * 100),
            `${hm(`conic-offset`)}: ${r}%;`
          );
        },
        makeStyles: (e, t) => {
          let n = `var(${hm(`conic-offset`)})`,
            r =
              (t === `exit` && e.angularDirection === `clockwise`) ||
              (t === `enter` && e.angularDirection === `counter-clockwise`),
            i = r ? `transparent` : `black`,
            a = r ? `black` : `transparent`,
            o = `conic-gradient(from `;
          return (
            (o += `${e.angle}deg at ${e.x} ${e.y}, `),
            (o += `${i} 0%, ${i} ${n}, `),
            (o += `${a} ${n}, ${a} 100%)`),
            `mask-image: ${o}; -webkit-mask-image: ${o};`
          );
        },
        makePropertyRules: () => `
        @property ${hm(`conic-offset`)} {
            syntax: '<percentage>';
            initial-value: 0%;
            inherits: false;
        }
    `,
      }),
      (_m = {
        makeKeyframe: (e, t) => {
          let { x: n, y: r } = Xt(e);
          if (t === `start`) return `clip-path: circle(0 at ${n}px ${r}px);`;
          {
            let e = Math.hypot(
              Math.max(n, k.innerWidth - n),
              Math.max(r, k.innerHeight - r)
            );
            return `clip-path: circle(${e}px at ${n}px ${r}px);`;
          }
        },
      }),
      (vm = {
        makeKeyframe: (e, t) => {
          let { x: n, y: r } = Xt(e),
            i = k.innerHeight - r,
            a = k.innerWidth - n;
          return t === `start`
            ? `clip-path: inset(${r}px ${a}px ${i}px ${n}px round ${e.round}px);`
            : `clip-path: inset(0 round 0);`;
        },
      }),
      (ym = {
        makeKeyframe: (e, t, n) => {
          let [, r] = Yt(e.width),
            i = `0${r}`;
          return (
            ((t === `start` && n === `exit`) ||
              (t === `end` && n === `enter`)) &&
              (i = e.width),
            `${hm(`blinds-width`)}: ${i};`
          );
        },
        makeStyles: (e, t) => {
          let n = `var(${hm(`blinds-width`)})`,
            r = t === `exit` ? `transparent` : `black`,
            i = t === `exit` ? `black` : `transparent`,
            a = `repeating-linear-gradient(`;
          return (
            (a += e.angle + 90 + `deg, `),
            (a += `${r} 0px, ${r} ${n}, `),
            (a += `${i} ${n}, ${i} ${e.width})`),
            `mask-image: ${a}; -webkit-mask-image: ${a};`
          );
        },
        makePropertyRules: () => `
            @property ${hm(`blinds-width`)} {
                syntax: '<length-percentage>';
                initial-value: 0px;
                inherits: false;
            }
        `,
      }),
      (bm = {
        makeKeyframe: (e, t, n) => {
          let r =
            (t === `start` && n === `exit`) || (t === `end` && n === `enter`)
              ? 1
              : 0;
          return `${hm(`wipe-offset`)}: ${r};`;
        },
        makeStyles: (e, t) => {
          let n = `var(${hm(`wipe-offset`)})`,
            r = t === `exit` ? `transparent` : `black`,
            i = t === `exit` ? `black` : `transparent`,
            a = `linear-gradient(`;
          return (
            (a += e.angle + 90 + `deg, `),
            (a += `${r} calc(calc(0% - ${e.width}) + calc(calc(100% + ${e.width}) * ${n})), `),
            (a += `${i} calc(calc(100% + ${e.width}) * ${n}))`),
            `mask-image: ${a}; -webkit-mask-image: ${a};`
          );
        },
        makePropertyRules: () => `
            @property ${hm(`wipe-offset`)} {
                syntax: '<number>';
                initial-value: 0;
                inherits: false;
            }
        `,
      }),
      (xm = { circle: _m, conic: gm, inset: vm, blinds: ym, wipe: bm }),
      (Sm = {
        opacity: 1,
        x: `0px`,
        y: `0px`,
        scale: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        mask: void 0,
      }),
      (Cm = `view-transition-styles`),
      (wm = {
        x: `0px`,
        y: `0px`,
        scale: 1,
        opacity: 1,
        rotate3d: !1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        mask: void 0,
        transition: {
          type: `tween`,
          delay: 0,
          duration: 0.2,
          ease: [0.27, 0, 0.51, 1],
          stiffness: 400,
          damping: 30,
          mass: 1,
        },
      }),
      (Tm = () => {}),
      (Dm = () => {
        Em ||
          ((Em = document.createElement(`div`)),
          Em.setAttribute(`aria-live`, `assertive`),
          Em.setAttribute(`aria-atomic`, `true`),
          (Em.style.position = `absolute`),
          (Em.style.transform = `scale(0)`),
          document.body.append(Em)),
          setTimeout(() => {
            Em.textContent = document.title;
          }, 60);
      }),
      (Om = !0),
      (km = (() => {
        if (b === void 0) return !1;
        let e = b.userAgent,
          t = e.indexOf(`Chrome/`),
          n = +e.slice(t + 7, e.indexOf(`.`, t));
        return n > 101 && n < 128;
      })()),
      (Am = (() => {
        var e;
        return Wp && typeof (e = k.navigation)?.back == `function`;
      })()),
      (jm = /[^\p{Letter}\p{Number}()]+/gu),
      (Mm = /^-+|-+$/gu),
      (Nm = d.createContext(null)),
      (Pm = async () => {}),
      (Fm = { activeLocale: null, locales: [], setLocale: Pm }),
      (Im = d.createContext(Fm)),
      (Lm =
        `mousedown.mouseup.touchcancel.touchend.touchstart.auxclick.dblclick.pointercancel.pointerdown.pointerup.dragend.dragstart.drop.compositionend.compositionstart.keydown.keypress.keyup.input.textInput.copy.cut.paste.click.change.contextmenu.reset`.split(
          `.`
        )),
      (Rm = (e) => {
        var t, n;
        (n = (t = e.target)?.closest)?.call(t, `#main`) &&
          (e.stopPropagation(),
          performance.mark(`framer-react-event-handling-prevented`));
      }),
      (zm = !1),
      (nh = [kn]),
      (th = [kn]),
      (eh = [kn]),
      ($m = [kn]),
      (Qm = [kn]),
      (Zm = [kn]),
      (Xm = [kn]),
      (Ym = [kn]),
      (Jm = [kn]),
      (qm = [kn]),
      (Km = [kn]),
      (Gm = [kn]),
      (Wm = [kn]),
      (Um = [kn]),
      (Hm = [kn]),
      (Vm = [kn]),
      (Bm = [kn]),
      (ih = class {
        constructor() {
          me(rh, 5, this),
            F(this, `render`, {
              markStart: () => this.markRenderStart(),
              markEnd: () => this.markRenderEnd(),
            }),
            F(this, `mutationEffects`, {
              measure: () => this.measureMutationEffects(),
            }),
            F(this, `useInsertionEffects`, {
              markStart: () => this.markUseInsertionEffectsStart(),
              markRouterStart: () => this.markUseInsertionEffectRouterStart(),
              markEnd: () => this.markUseInsertionEffectsEnd(),
            }),
            F(this, `useLayoutEffects`, {
              markStart: () => this.markUseLayoutEffectsStart(),
              markRouterStart: () => this.markRouterUseLayoutEffectStart(),
              markEnd: () => this.markUseLayoutEffectsEnd(),
            }),
            F(this, `useEffects`, {
              markStart: () => this.markUseEffectsStart(),
              markRouterStart: () => this.markUseEffectsRouterStart(),
              markEnd: () => this.markUseEffectsEnd(),
              markAreSynchronous: () => this.markUseEffectsAreSynchronous(),
            }),
            F(this, `browserRendering`, {
              hasStarted: !1,
              requestAnimationFrame: {
                markStart: () => this.markRafStart(),
                markEnd: () => this.markRafEnd(),
              },
              layoutStylePaint: {
                markEnd: () => this.markLayoutStylePaintEnd(),
              },
            }),
            F(this, `unattributedHydrationOverhead`, {
              measure: () => this.measureUnattributedHydrationOverhead(),
            });
        }
        markRenderStart() {
          performance.mark(`framer-hydration-start`);
        }
        markRenderEnd() {
          performance.mark(`framer-hydration-render-end`),
            An(
              `framer-hydration-render`,
              `framer-hydration-start`,
              `framer-hydration-render-end`
            );
        }
        markUseInsertionEffectsStart() {
          performance.mark(`framer-hydration-insertion-effects-start`);
        }
        markUseInsertionEffectRouterStart() {
          performance.mark(`framer-hydration-router-insertion-effect`);
        }
        markUseInsertionEffectsEnd() {
          performance.mark(`framer-hydration-insertion-effects-end`),
            An(
              `framer-hydration-insertion-effects`,
              `framer-hydration-insertion-effects-start`,
              `framer-hydration-insertion-effects-end`
            );
        }
        markUseLayoutEffectsStart() {
          performance.mark(`framer-hydration-layout-effects-start`);
        }
        markRouterUseLayoutEffectStart() {
          performance.mark(`framer-hydration-router-layout-effect`);
        }
        markUseLayoutEffectsEnd() {
          performance.mark(`framer-hydration-layout-effects-end`),
            An(
              `framer-hydration-layout-effects`,
              `framer-hydration-layout-effects-start`,
              `framer-hydration-layout-effects-end`
            );
        }
        markUseEffectsStart() {
          performance.mark(`framer-hydration-effects-start`);
        }
        markUseEffectsRouterStart() {
          performance.mark(`framer-hydration-router-effect`);
        }
        markUseEffectsAreSynchronous() {
          performance.mark(`framer-hydration-effects-sync`);
        }
        markUseEffectsEnd() {
          var e, t;
          performance.mark(`framer-hydration-effects-end`),
            An(
              `framer-hydration-effects`,
              (e = performance.getEntriesByName(
                `framer-hydration-first-paint`
              )[0])?.name ??
                (t = performance.getEntriesByName(
                  `framer-hydration-effects-start`
                )[0])?.name,
              `framer-hydration-effects-end`
            );
        }
        markRafStart() {
          (this.browserRendering.hasStarted = !0),
            performance.mark(`framer-hydration-browser-render-start`);
        }
        markRafEnd() {
          performance.mark(`framer-hydration-browser-raf-end`),
            An(
              `framer-hydration-raf`,
              `framer-hydration-browser-render-start`,
              `framer-hydration-browser-raf-end`
            );
        }
        markLayoutStylePaintEnd() {
          performance.mark(`framer-hydration-first-paint`),
            An(
              `framer-hydration-time-to-first-paint`,
              `framer-hydration-start`,
              `framer-hydration-first-paint`
            ),
            An(
              `framer-hydration-browser-render`,
              `framer-hydration-browser-raf-end`,
              `framer-hydration-first-paint`
            );
        }
        measureMutationEffects() {
          An(
            `framer-hydration-commit`,
            `framer-hydration-layout-effects-end`,
            `framer-hydration-effects-start`
          );
        }
        measureUnattributedHydrationOverhead() {
          var e, t;
          An(
            `framer-hydration-uho`,
            (e = performance.getEntriesByName(
              `framer-hydration-effects-end`
            )[0])?.name ??
              (t = performance.getEntriesByName(
                `framer-hydration-layout-effects-end`
              )[0])?.name,
            `framer-hydration-browser-render-start`
          );
        }
      }),
      (rh = ue(null)),
      N(rh, 1, `markRenderStart`, nh, ih),
      N(rh, 1, `markRenderEnd`, th, ih),
      N(rh, 1, `markUseInsertionEffectsStart`, eh, ih),
      N(rh, 1, `markUseInsertionEffectRouterStart`, $m, ih),
      N(rh, 1, `markUseInsertionEffectsEnd`, Qm, ih),
      N(rh, 1, `markUseLayoutEffectsStart`, Zm, ih),
      N(rh, 1, `markRouterUseLayoutEffectStart`, Xm, ih),
      N(rh, 1, `markUseLayoutEffectsEnd`, Ym, ih),
      N(rh, 1, `markUseEffectsStart`, Jm, ih),
      N(rh, 1, `markUseEffectsRouterStart`, qm, ih),
      N(rh, 1, `markUseEffectsAreSynchronous`, Km, ih),
      N(rh, 1, `markUseEffectsEnd`, Gm, ih),
      N(rh, 1, `markRafStart`, Wm, ih),
      N(rh, 1, `markRafEnd`, Um, ih),
      N(rh, 1, `markLayoutStylePaintEnd`, Hm, ih),
      N(rh, 1, `measureMutationEffects`, Vm, ih),
      N(rh, 1, `measureUnattributedHydrationOverhead`, Bm, ih),
      le(rh, ih),
      (oh = !1),
      (sh = { Start: Fn, End: In }),
      (ch = class extends Error {}),
      (lh = class extends n {
        constructor(e) {
          super(e),
            (this.state = { error: void 0, forceUpdateKey: e.forceUpdateKey });
        }
        static getDerivedStateFromError(e) {
          return { error: e };
        }
        static getDerivedStateFromProps(e, t) {
          if (e.forceUpdateKey !== t.forceUpdateKey) {
            let n = { forceUpdateKey: e.forceUpdateKey };
            return t.error && (n.error = void 0), n;
          }
          return null;
        }
        render() {
          if (this.state.error === void 0) return this.props.children;
          if (!(this.state.error instanceof ch)) throw this.state.error;
          let { notFoundPage: e, defaultPageStyle: t } = this.props;
          if (!e) throw this.state.error;
          return Ln(e, t);
        }
      }),
      (ph = `main`),
      (mh = `framerGeneratedPage`),
      (hh = `framer-search-index`),
      `${hh}`,
      (gh = `<!-- End of headStart -->`),
      (_h = `<!-- End of headEnd -->`),
      (vh = `<!-- End of bodyStart -->`),
      (yh = `<!-- End of bodyEnd -->`),
      (bh = new Set()),
      (xh = class {
        constructor() {
          F(this, `observers`, new Set()), F(this, `transactions`, {});
        }
        add(e) {
          this.observers.add(e);
          let t = !1;
          return () => {
            t || ((t = !0), this.remove(e));
          };
        }
        remove(e) {
          this.observers.delete(e);
        }
        notify(e, t) {
          if (t) {
            let n = this.transactions[t] || e;
            (n.value = e.value), (this.transactions[t] = n);
          } else this.callObservers(e);
        }
        finishTransaction(e) {
          let t = this.transactions[e];
          return delete this.transactions[e], this.callObservers(t, e);
        }
        callObservers(e, t) {
          let n = [];
          return (
            new Set(this.observers).forEach((r) => {
              typeof r == `function`
                ? r(e, t)
                : (r.update(e, t), n.push(r.finish));
            }),
            n
          );
        }
      }),
      (Sh = (() => {
        function e(e) {
          return (
            rr(
              `Animatable()`,
              `2.0.0`,
              `the new animation API (https://www.framer.com/api/animation/)`
            ),
            ir(e) ? e : new Th(e)
          );
        }
        return (
          (e.transaction = (e) => {
            let t = Math.random(),
              n = new Set(),
              r = (e, r) => {
                e.set(r, t), n.add(e);
              };
            e(r, t);
            let i = [];
            n.forEach((e) => {
              i.push(...e.finishTransaction(t));
            }),
              i.forEach((e) => {
                e(t);
              });
          }),
          (e.getNumber = (t, n = 0) => e.get(t, n)),
          (e.get = (e, t) => (e == null ? t : ir(e) ? e.get() : e)),
          (e.objectToValues = (e) => {
            if (!e) return e;
            let t = {};
            for (let n in e) {
              let r = e[n];
              ir(r) ? (t[n] = r.get()) : (t[n] = r);
            }
            return t;
          }),
          e
        );
      })()),
      (Ch = `onUpdate`),
      (wh = `finishTransaction`),
      (Th = class {
        constructor(e) {
          (this.value = e), F(this, `observers`, new xh());
        }
        static interpolationFor(e, t) {
          if (ir(e)) return ar(e, t);
        }
        get() {
          return this.value;
        }
        set(e, t) {
          let n = this.value;
          ir(e) && (e = e.get()), (this.value = e);
          let r = { value: e, oldValue: n };
          this.observers.notify(r, t);
        }
        finishTransaction(e) {
          return this.observers.finishTransaction(e);
        }
        onUpdate(e) {
          return this.observers.add(e);
        }
      }),
      ((e) => {
        (e.isQuadrilateralPoints = (e) => e?.length === 4),
          (e.add = (...e) =>
            e.reduce((e, t) => ({ x: e.x + t.x, y: e.y + t.y }), {
              x: 0,
              y: 0,
            })),
          (e.subtract = (e, t) => ({ x: e.x - t.x, y: e.y - t.y })),
          (e.multiply = (e, t) => ({ x: e.x * t, y: e.y * t })),
          (e.divide = (e, t) => ({ x: e.x / t, y: e.y / t })),
          (e.absolute = (e) => ({ x: Math.abs(e.x), y: Math.abs(e.y) })),
          (e.reverse = (e) => ({ x: e.x * -1, y: e.y * -1 })),
          (e.pixelAligned = (e, t = { x: 0, y: 0 }) => ({
            x: sr(e.x, t.x),
            y: sr(e.y, t.y),
          })),
          (e.distance = (e, t) => {
            let n = Math.abs(e.x - t.x),
              r = Math.abs(e.y - t.y);
            return Math.sqrt(n * n + r * r);
          }),
          (e.angle = (e, t) =>
            (Math.atan2(t.y - e.y, t.x - e.x) * 180) / Math.PI - 90),
          (e.angleFromX = (e, t) =>
            (Math.atan2(t.y - e.y, t.x - e.x) * 180) / Math.PI),
          (e.isEqual = (e, t) => e.x === t.x && e.y === t.y),
          (e.rotationNormalizer = () => {
            let e;
            return (t) => {
              typeof e != `number` && (e = t);
              let n = e - t,
                r = Math.abs(n) + 180,
                i = Math.floor(r / 360);
              return (
                n < 180 && (t -= i * 360), n > 180 && (t += i * 360), (e = t), t
              );
            };
          });
        function t(e, t) {
          return { x: (e.x + t.x) / 2, y: (e.y + t.y) / 2 };
        }
        e.center = t;
        function n(e) {
          let t = 0,
            n = 0;
          e.forEach((e) => {
            (t += e.x), (n += e.y);
          });
          let r = t / e.length,
            i = n / e.length;
          return { x: r, y: i };
        }
        e.centroid = n;
        function r(t) {
          let n = e.centroid(t),
            r = new Map();
          for (let e = 0; e < t.length; e++) {
            let i = t[e];
            i && r.set(i, Math.atan2(i.y - n.y, i.x - n.x));
          }
          return t.sort((e, t) => (r.get(e) ?? 0) - (r.get(t) ?? 0));
        }
        e.sortClockwise = r;
      })((lr ||= {})),
      (Eh = {
        aliceblue: `f0f8ff`,
        antiquewhite: `faebd7`,
        aqua: `0ff`,
        aquamarine: `7fffd4`,
        azure: `f0ffff`,
        beige: `f5f5dc`,
        bisque: `ffe4c4`,
        black: `000`,
        blanchedalmond: `ffebcd`,
        blue: `00f`,
        blueviolet: `8a2be2`,
        brown: `a52a2a`,
        burlywood: `deb887`,
        burntsienna: `ea7e5d`,
        cadetblue: `5f9ea0`,
        chartreuse: `7fff00`,
        chocolate: `d2691e`,
        coral: `ff7f50`,
        cornflowerblue: `6495ed`,
        cornsilk: `fff8dc`,
        crimson: `dc143c`,
        cyan: `0ff`,
        darkblue: `00008b`,
        darkcyan: `008b8b`,
        darkgoldenrod: `b8860b`,
        darkgray: `a9a9a9`,
        darkgreen: `006400`,
        darkgrey: `a9a9a9`,
        darkkhaki: `bdb76b`,
        darkmagenta: `8b008b`,
        darkolivegreen: `556b2f`,
        darkorange: `ff8c00`,
        darkorchid: `9932cc`,
        darkred: `8b0000`,
        darksalmon: `e9967a`,
        darkseagreen: `8fbc8f`,
        darkslateblue: `483d8b`,
        darkslategray: `2f4f4f`,
        darkslategrey: `2f4f4f`,
        darkturquoise: `00ced1`,
        darkviolet: `9400d3`,
        deeppink: `ff1493`,
        deepskyblue: `00bfff`,
        dimgray: `696969`,
        dimgrey: `696969`,
        dodgerblue: `1e90ff`,
        firebrick: `b22222`,
        floralwhite: `fffaf0`,
        forestgreen: `228b22`,
        fuchsia: `f0f`,
        gainsboro: `dcdcdc`,
        ghostwhite: `f8f8ff`,
        gold: `ffd700`,
        goldenrod: `daa520`,
        gray: `808080`,
        green: `008000`,
        greenyellow: `adff2f`,
        grey: `808080`,
        honeydew: `f0fff0`,
        hotpink: `ff69b4`,
        indianred: `cd5c5c`,
        indigo: `4b0082`,
        ivory: `fffff0`,
        khaki: `f0e68c`,
        lavender: `e6e6fa`,
        lavenderblush: `fff0f5`,
        lawngreen: `7cfc00`,
        lemonchiffon: `fffacd`,
        lightblue: `add8e6`,
        lightcoral: `f08080`,
        lightcyan: `e0ffff`,
        lightgoldenrodyellow: `fafad2`,
        lightgray: `d3d3d3`,
        lightgreen: `90ee90`,
        lightgrey: `d3d3d3`,
        lightpink: `ffb6c1`,
        lightsalmon: `ffa07a`,
        lightseagreen: `20b2aa`,
        lightskyblue: `87cefa`,
        lightslategray: `789`,
        lightslategrey: `789`,
        lightsteelblue: `b0c4de`,
        lightyellow: `ffffe0`,
        lime: `0f0`,
        limegreen: `32cd32`,
        linen: `faf0e6`,
        magenta: `f0f`,
        maroon: `800000`,
        mediumaquamarine: `66cdaa`,
        mediumblue: `0000cd`,
        mediumorchid: `ba55d3`,
        mediumpurple: `9370db`,
        mediumseagreen: `3cb371`,
        mediumslateblue: `7b68ee`,
        mediumspringgreen: `00fa9a`,
        mediumturquoise: `48d1cc`,
        mediumvioletred: `c71585`,
        midnightblue: `191970`,
        mintcream: `f5fffa`,
        mistyrose: `ffe4e1`,
        moccasin: `ffe4b5`,
        navajowhite: `ffdead`,
        navy: `000080`,
        oldlace: `fdf5e6`,
        olive: `808000`,
        olivedrab: `6b8e23`,
        orange: `ffa500`,
        orangered: `ff4500`,
        orchid: `da70d6`,
        palegoldenrod: `eee8aa`,
        palegreen: `98fb98`,
        paleturquoise: `afeeee`,
        palevioletred: `db7093`,
        papayawhip: `ffefd5`,
        peachpuff: `ffdab9`,
        peru: `cd853f`,
        pink: `ffc0cb`,
        plum: `dda0dd`,
        powderblue: `b0e0e6`,
        purple: `800080`,
        rebeccapurple: `663399`,
        red: `f00`,
        rosybrown: `bc8f8f`,
        royalblue: `4169e1`,
        saddlebrown: `8b4513`,
        salmon: `fa8072`,
        sandybrown: `f4a460`,
        seagreen: `2e8b57`,
        seashell: `fff5ee`,
        sienna: `a0522d`,
        silver: `c0c0c0`,
        skyblue: `87ceeb`,
        slateblue: `6a5acd`,
        slategray: `708090`,
        slategrey: `708090`,
        snow: `fffafa`,
        springgreen: `00ff7f`,
        steelblue: `4682b4`,
        tan: `d2b48c`,
        teal: `008080`,
        thistle: `d8bfd8`,
        tomato: `ff6347`,
        turquoise: `40e0d0`,
        violet: `ee82ee`,
        wheat: `f5deb3`,
        white: `fff`,
        whitesmoke: `f5f5f5`,
        yellow: `ff0`,
        yellowgreen: `9acd32`,
      }),
      (Dh = (() => jp().Hsluv)()),
      (Oh = new Dh()),
      (kh = (() => {
        let e = `(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)`,
          t =
            `[\\s|\\(]+(` +
            e +
            `)[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))\\s*\\)?`,
          n =
            `[\\s|\\(]+(` +
            e +
            `)[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))\\s*\\)?`;
        return {
          rgb: RegExp(`rgb` + t),
          rgba: RegExp(`rgba` + n),
          hsl: RegExp(`hsl` + t),
          hsla: RegExp(`hsla` + n),
          hsv: RegExp(`hsv` + t),
          hsva: RegExp(`hsva` + n),
          hex3: /^([\da-f])([\da-f])([\da-f])$/iu,
          hex6: /^([\da-f]{2})([\da-f]{2})([\da-f]{2})$/iu,
          hex4: /^#?([\da-f])([\da-f])([\da-f])([\da-f])$/iu,
          hex8: /^#?([\da-f]{2})([\da-f]{2})([\da-f]{2})([\da-f]{2})$/iu,
        };
      })()),
      (Ah =
        /^color\(display-p3\s+(?<r>\d+\.\d+|\d+|\.\d+)\s+(?<g>\d+\.\d+|\d+|\.\d+)\s+(?<b>\d+\.\d+|\d+|\.\d+)(?:\s*\/\s*(?<a>\d+\.\d+|\d+|\.\d+))?\)$/u),
      (jh = (e) => {
        let { r: t, g: n, b: r, a: i } = Nr(e);
        return {
          x:
            0.486570948648216 * t +
            0.265667693169093 * n +
            0.1982172852343625 * r,
          y:
            0.2289745640697487 * t +
            0.6917385218365062 * n +
            0.079286914093745 * r,
          z: 0 * t + 0.0451133818589026 * n + 1.043944368900976 * r,
          a: i,
        };
      }),
      (Mh = ({ x: e = 0, y: t = 0, z: n = 0, a: r = 1 }) =>
        Fr({
          r:
            e * 3.2409699419045226 -
            t * 1.537383177570094 -
            0.4986107602930034 * n,
          g:
            e * -0.9692436362808796 +
            t * 1.8759675015077204 +
            0.0415550574071756 * n,
          b:
            e * 0.0556300796969936 -
            t * 0.2039769588889765 +
            1.0569715142428784 * n,
          a: r,
        })),
      (Nh = (e) => {
        let { r: t, g: n, b: r, a: i } = Nr(e);
        return {
          x:
            0.4123907992659593 * t +
            0.357584339383878 * n +
            0.1804807884018343 * r,
          y:
            0.2126390058715102 * t +
            0.715168678767756 * n +
            0.0721923153607337 * r,
          z:
            0.0193308187155918 * t +
            0.119194779794626 * n +
            0.9505321522496607 * r,
          a: i,
        };
      }),
      (Ph = ({ x: e = 0, y: t = 0, z: n = 0, a: r = 1 }) =>
        Fr({
          r:
            e * 2.4934969119414263 -
            t * 0.9313836179191242 -
            0.402710784450717 * n,
          g:
            e * -0.8294889695615749 +
            t * 1.7626640603183465 +
            0.0236246858419436 * n,
          b:
            e * 0.0358458302437845 -
            t * 0.0761723892680418 +
            0.9568845240076871 * n,
          a: r,
        })),
      (Fh = class e {
        constructor(e) {
          F(this, `format`, `p3`),
            F(this, `r`),
            F(this, `g`),
            F(this, `b`),
            F(this, `a`),
            (this.r = e.r ?? 0),
            (this.g = e.g ?? 0),
            (this.b = e.b ?? 0),
            (this.a = e.a ?? 1);
        }
        hsv() {
          return Ir(this);
        }
        rgb() {
          return Br(this);
        }
        hsl() {
          return yr(this.r, this.g, this.b);
        }
        toString(e = `p3`, t) {
          switch (e) {
            case `p3`: {
              let e = t?.r ?? this.r,
                n = t?.g ?? this.g,
                r = t?.b ?? this.b,
                i = t?.a ?? this.a;
              return i === 1
                ? `color(display-p3 ${e} ${n} ${r})`
                : `color(display-p3 ${e} ${n} ${r} / ${i})`;
            }
            case `srgb`: {
              let e = this.rgb(),
                n = Math.round(Math.max(0, Math.min(e.r, 1)) * 100) / 100,
                r = Math.round(Math.max(0, Math.min(e.g, 1)) * 100) / 100,
                i = Math.round(Math.max(0, Math.min(e.b, 1)) * 100) / 100,
                a = t?.r ?? n * 255,
                o = t?.g ?? r * 255,
                s = t?.b ?? i * 255,
                c = t?.a ?? e.a ?? 1;
              return c === 1
                ? `rgb(${a}, ${o}, ${s})`
                : `rgba(${a}, ${o}, ${s}, ${c})`;
            }
          }
        }
        static isP3String(e) {
          return e.startsWith(`color(display-p3`);
        }
        static fromHSV(t, n = `p3`) {
          switch (n) {
            case `p3`:
              return new e(Rr(t));
            case `srgb`:
              return new e(zr(Rr(t)));
          }
        }
        static fromRGB(t) {
          return new e(
            zr({
              r: Math.round((t.r / 255) * 1e4) / 1e4,
              g: Math.round((t.g / 255) * 1e4) / 1e4,
              b: Math.round((t.b / 255) * 1e4) / 1e4,
              a: t.a ?? 1,
            })
          );
        }
        static fromRGBString(t) {
          let n = J(t);
          if (n) return e.fromRGB(n);
        }
        static fromString(t) {
          if (!e.isP3String(t)) return;
          let n = jr(t);
          if (n) return new e({ r: n.r, g: n.g, b: n.b, a: n.a });
        }
        static srgbFromValue(t) {
          if (!R(t) || !J.isP3String(t)) return t;
          let n = e.fromString(t);
          return n ? n.toString(`srgb`) : t;
        }
        static multiplyAlpha(t, n) {
          return new e({ r: t.r, g: t.g, b: t.b, a: t.a * n });
        }
      }),
      (Ih = new Map()),
      (J = (() => {
        function e(n, r, i, a) {
          if (typeof n == `string`) {
            let r = Ih.get(n);
            return (
              r ||
              ((r = t(n)),
              r === void 0 ? { ...e(`black`), isValid: !1 } : (Ih.set(n, r), r))
            );
          }
          let o = t(n, r, i, a);
          return o === void 0 ? { ...e(`black`), isValid: !1 } : o;
        }
        function t(t, n, r, i) {
          if (t === ``) return;
          let a = Vr(t, n, r, i);
          if (a) {
            let n = {
              r: a.r,
              g: a.g,
              b: a.b,
              a: a.a,
              h: a.h,
              s: a.s,
              l: a.l,
              initialValue:
                typeof t == `string` && a.format !== `hsv` ? t : void 0,
              roundA: Math.round(100 * a.a) / 100,
              format: a.format,
              mix: e.mix,
              toValue: () => e.toRgbString(n),
            };
            return n;
          } else return;
        }
        let n = {
          isRGB(e) {
            return e === `rgb` || e === `rgba`;
          },
          isHSL(e) {
            return e === `hsl` || e === `hsla`;
          },
        };
        (e.inspect = (e, t) =>
          e.format === `hsl`
            ? `<${e.constructor.name} h:${e.h} s:${e.s} l:${e.l} a:${e.a}>`
            : e.format === `hex` || e.format === `name`
            ? `<${e.constructor.name} "${t}">`
            : `<${e.constructor.name} r:${e.r} g:${e.g} b:${e.b} a:${e.a}>`),
          (e.isColor = (t) =>
            typeof t == `string` ? e.isColorString(t) : e.isColorObject(t)),
          (e.isColorString = (e) => (typeof e == `string` ? Or(e) !== !1 : !1)),
          (e.isColorObject = (e) =>
            B(e) &&
            typeof e.r == `number` &&
            typeof e.g == `number` &&
            typeof e.b == `number` &&
            typeof e.h == `number` &&
            typeof e.s == `number` &&
            typeof e.l == `number` &&
            typeof e.a == `number` &&
            typeof e.roundA == `number` &&
            typeof e.format == `string`),
          (e.toString = (t) => e.toRgbString(t)),
          (e.toHex = (e, t = !1) => vr(e.r, e.g, e.b, t)),
          (e.toHexString = (t, n = !1) => `#${e.toHex(t, n)}`),
          (e.isP3String = (e) =>
            typeof e == `string` ? Fh.isP3String(e) : !1),
          (e.toRgbString = (e) =>
            e.a === 1
              ? `rgb(` +
                Math.round(e.r) +
                `, ` +
                Math.round(e.g) +
                `, ` +
                Math.round(e.b) +
                `)`
              : `rgba(` +
                Math.round(e.r) +
                `, ` +
                Math.round(e.g) +
                `, ` +
                Math.round(e.b) +
                `, ` +
                e.roundA +
                `)`),
          (e.toHusl = (e) => ({ ...mr(e.r, e.g, e.b), a: e.roundA })),
          (e.toHslString = (t) => {
            let n = e.toHsl(t),
              r = Math.round(n.h),
              i = Math.round(n.s * 100),
              a = Math.round(n.l * 100);
            return t.a === 1
              ? `hsl(` + r + `, ` + i + `%, ` + a + `%)`
              : `hsla(` + r + `, ` + i + `%, ` + a + `%, ` + t.roundA + `)`;
          }),
          (e.toHsv = (e) => {
            let t = Sr(e.r, e.g, e.b);
            return { h: t.h * 360, s: t.s, v: t.v, a: e.a };
          }),
          (e.toHsvString = (e) => {
            let t = Sr(e.r, e.g, e.b),
              n = Math.round(t.h * 360),
              r = Math.round(t.s * 100),
              i = Math.round(t.v * 100);
            return e.a === 1
              ? `hsv(` + n + `, ` + r + `%, ` + i + `%)`
              : `hsva(` + n + `, ` + r + `%, ` + i + `%, ` + e.roundA + `)`;
          }),
          (e.toName = (e) => {
            if (e.a === 0) return `transparent`;
            if (e.a < 1) return !1;
            let t = vr(e.r, e.g, e.b, !0);
            for (let e of Object.keys(Eh)) {
              let n = Eh[e];
              if (n === t) return e;
            }
            return !1;
          }),
          (e.toHsl = (e) => ({ h: Math.round(e.h), s: e.s, l: e.l, a: e.a })),
          (e.toRgb = (e) => ({
            r: Math.round(e.r),
            g: Math.round(e.g),
            b: Math.round(e.b),
            a: e.a,
          })),
          (e.brighten = (t, n = 10) => {
            let r = e.toRgb(t);
            return (
              (r.r = Math.max(
                0,
                Math.min(255, r.r - Math.round(255 * -(n / 100)))
              )),
              (r.g = Math.max(
                0,
                Math.min(255, r.g - Math.round(255 * -(n / 100)))
              )),
              (r.b = Math.max(
                0,
                Math.min(255, r.b - Math.round(255 * -(n / 100)))
              )),
              e(r)
            );
          }),
          (e.lighten = (t, n = 10) => {
            let r = e.toHsl(t);
            return (
              (r.l += n / 100), (r.l = Math.min(1, Math.max(0, r.l))), e(r)
            );
          }),
          (e.darken = (t, n = 10) => {
            let r = e.toHsl(t);
            return (
              (r.l -= n / 100), (r.l = Math.min(1, Math.max(0, r.l))), e(r)
            );
          }),
          (e.saturate = (t, n = 10) => {
            let r = e.toHsl(t);
            return (
              (r.s += n / 100), (r.s = Math.min(1, Math.max(0, r.s))), e(r)
            );
          }),
          (e.desaturate = (t, n = 10) => {
            let r = e.toHsl(t);
            return (
              (r.s -= n / 100), (r.s = Math.min(1, Math.max(0, r.s))), e(r)
            );
          }),
          (e.grayscale = (t) => e.desaturate(t, 100)),
          (e.hueRotate = (t, n) => {
            let r = e.toHsl(t);
            return (r.h += n), (r.h = r.h > 360 ? r.h - 360 : r.h), e(r);
          }),
          (e.alpha = (t, n = 1) => e({ r: t.r, g: t.g, b: t.b, a: n })),
          (e.transparent = (t) => e.alpha(t, 0)),
          (e.multiplyAlpha = (t, n = 1) =>
            e({ r: t.r, g: t.g, b: t.b, a: t.a * n })),
          (e.interpolate = (t, n, r = `rgb`) => {
            if (!e.isColorObject(t) || !e.isColorObject(n))
              throw TypeError(
                `Both arguments for Color.interpolate must be Color objects`
              );
            return (i) => {
              let a = e.mixAsColor(t, n, i, !1, r);
              return a;
            };
          }),
          (e.mix = (t, n, { model: r = `rgb` } = {}) => {
            let i = typeof t == `string` ? e(t) : t,
              a = e.interpolate(i, n, r);
            return (t) => e.toRgbString(a(t));
          }),
          (e.mixAsColor = (t, r, i = 0.5, a = !1, o = `rgb`) => {
            let s = null;
            if (n.isRGB(o))
              s = e({
                r: ur(i, [0, 1], [t.r, r.r], a),
                g: ur(i, [0, 1], [t.g, r.g], a),
                b: ur(i, [0, 1], [t.b, r.b], a),
                a: ur(i, [0, 1], [t.a, r.a], a),
              });
            else {
              let c, l;
              n.isHSL(o)
                ? ((c = e.toHsl(t)), (l = e.toHsl(r)))
                : ((c = e.toHusl(t)), (l = e.toHusl(r))),
                c.s === 0 ? (c.h = l.h) : l.s === 0 && (l.h = c.h);
              let u = c.h,
                d = l.h,
                f = d - u;
              f > 180 ? (f = d - 360 - u) : f < -180 && (f = d + 360 - u);
              let p = {
                h: ur(i, [0, 1], [u, u + f], a),
                s: ur(i, [0, 1], [c.s, l.s], a),
                l: ur(i, [0, 1], [c.l, l.l], a),
                a: ur(i, [0, 1], [t.a, r.a], a),
              };
              s = n.isHSL(o) ? e(p) : e(hr(p.h, p.s, p.l, p.a));
            }
            return s;
          }),
          (e.random = (t = 1) => {
            function n() {
              return Math.floor(Math.random() * 255);
            }
            return e(`rgba(` + n() + `, ` + n() + `, ` + n() + `, ` + t + `)`);
          }),
          (e.grey = (t = 0.5, n = 1) => (
            (t = Math.floor(t * 255)),
            e(`rgba(` + t + `, ` + t + `, ` + t + `, ` + n + `)`)
          )),
          (e.gray = e.grey),
          (e.rgbToHsl = (e, t, n) => yr(e, t, n)),
          (e.isValidColorProperty = (t, n) => {
            let r =
              t.toLowerCase().slice(-5) === `color` ||
              t === `fill` ||
              t === `stroke`;
            return !!(r && typeof n == `string` && e.isColorString(n));
          }),
          (e.difference = (e, t) => {
            let n = (e.r + t.r) / 2,
              r = e.r - t.r,
              i = e.g - t.g,
              a = e.b - t.b,
              o = r ** 2,
              s = i ** 2,
              c = a ** 2;
            return Math.sqrt(2 * o + 4 * s + 3 * c + (n * (o - c)) / 256);
          }),
          (e.equal = (e, t, n = 0.1) =>
            !(
              Math.abs(e.r - t.r) >= n ||
              Math.abs(e.g - t.g) >= n ||
              Math.abs(e.b - t.b) >= n ||
              Math.abs(e.a - t.a) * 256 >= n
            ));
        let r = Se([0, 255], [0, 1]);
        function i(e) {
          e = r(e);
          let t = Math.abs(e);
          return t < 0.04045
            ? e / 12.92
            : (Math.sign(e) || 1) * ((t + 0.055) / 1.055) ** 2.4;
        }
        return (
          (e.luminance = (t) => {
            let { r: n, g: r, b: a } = e.toRgb(t);
            return 0.2126 * i(n) + 0.7152 * i(r) + 0.0722 * i(a);
          }),
          (e.contrast = (t, n) => {
            let r = e.luminance(t),
              i = e.luminance(n);
            return (Math.max(r, i) + 0.05) / (Math.min(r, i) + 0.05);
          }),
          e
        );
      })()),
      (Lh = (e) => e instanceof ie),
      (Rh = (() => Mp().EventEmitter)()),
      (zh = class {
        constructor() {
          F(this, `_emitter`, new Rh());
        }
        eventNames() {
          return this._emitter.eventNames();
        }
        eventListeners() {
          let e = {};
          for (let t of this._emitter.eventNames())
            e[t] = this._emitter.listeners(t);
          return e;
        }
        on(e, t) {
          this.addEventListener(e, t, !1, !1, this);
        }
        off(e, t) {
          this.removeEventListeners(e, t);
        }
        once(e, t) {
          this.addEventListener(e, t, !0, !1, this);
        }
        unique(e, t) {
          this.addEventListener(e, t, !1, !0, this);
        }
        addEventListener(e, t, n, r, i) {
          if (r) {
            for (let e of this._emitter.eventNames())
              if (t === this._emitter.listeners(e)) return;
          }
          n === !0
            ? this._emitter.once(e, t, i)
            : this._emitter.addListener(e, t, i);
        }
        removeEventListeners(e, t) {
          e
            ? this._emitter.removeListener(e, t)
            : this.removeAllEventListeners();
        }
        removeAllEventListeners() {
          this._emitter.removeAllListeners();
        }
        countEventListeners(e) {
          if (e) return this._emitter.listeners(e).length;
          {
            let e = 0;
            for (let t of this._emitter.eventNames())
              e += this._emitter.listeners(t).length;
            return e;
          }
        }
        emit(e, ...t) {
          this._emitter.emit(e, ...t);
        }
      }),
      (Bh = (e) => {
        setTimeout(e, 1 / 60);
      }),
      (Vh = (() => q.requestAnimationFrame || Bh)()),
      (Hh = (e) => Vh(e)),
      (Uh = (() => 1 / 60)()),
      (Wh = class extends zh {
        constructor(e = !1) {
          super(),
            F(this, `_started`, !1),
            F(this, `_frame`, 0),
            F(this, `_frameTasks`, []),
            F(this, `tick`, () => {
              this._started &&
                (Hh(this.tick),
                this.emit(`update`, this._frame, Uh),
                this.emit(`render`, this._frame, Uh),
                this._processFrameTasks(),
                this._frame++);
            }),
            e && this.start();
        }
        addFrameTask(e) {
          this._frameTasks.push(e);
        }
        _processFrameTasks() {
          var e;
          let t = this._frameTasks,
            n = t.length;
          if (n !== 0) {
            for (let r = 0; r < n; r++) (e = t[r]) == null || e.call(t);
            t.length = 0;
          }
        }
        static set TimeStep(e) {
          Uh = e;
        }
        static get TimeStep() {
          return Uh;
        }
        start() {
          return this._started
            ? this
            : ((this._frame = 0), (this._started = !0), Hh(this.tick), this);
        }
        stop() {
          return (this._started = !1), this;
        }
        get frame() {
          return this._frame;
        }
        get time() {
          return this._frame * Uh;
        }
      }),
      (Gh = new Wh()),
      (Kh = {
        target:
          q.location.origin === `https://screenshot.framer.invalid`
            ? `EXPORT`
            : `PREVIEW`,
        zoom: 1,
      }),
      (Y = {
        canvas: `CANVAS`,
        export: `EXPORT`,
        thumbnail: `THUMBNAIL`,
        preview: `PREVIEW`,
        current: () => Kh.target,
        hasRestrictions: () => {
          let e = Kh.target;
          return e === `CANVAS` || e === `EXPORT`;
        },
      }),
      (qh = (e) => ({
        correct: (t, { delta: n, treeScale: r }) => {
          if ((typeof t == `string` && (t = parseFloat(t)), t === 0))
            return `0px`;
          let i = t;
          return (
            n &&
              r &&
              ((i = Math.round(t / n[e].scale / r[e])), (i = Math.max(i, 1))),
            i + `px`
          );
        },
      })),
      I({
        borderTopWidth: qh(`y`),
        borderLeftWidth: qh(`x`),
        borderRightWidth: qh(`x`),
        borderBottomWidth: qh(`y`),
      }),
      (Jh = d.createContext({
        getLayoutId: (e) => null,
        persistLayoutIdCache: () => {},
        top: !1,
        enabled: !0,
      })),
      (Yh = {
        background: void 0,
        display: `flex`,
        flexDirection: `column`,
        justifyContent: `center`,
        alignItems: `center`,
        lineHeight: `1.4em`,
        textOverflow: `ellipsis`,
        overflow: `hidden`,
        minHeight: 0,
        width: `100%`,
        height: `100%`,
      }),
      (Xh = (() => ({
        ...Yh,
        border: `1px solid rgba(149, 149, 149, 0.15)`,
        borderRadius: 6,
        fontSize: `12px`,
        backgroundColor: `rgba(149, 149, 149, 0.1)`,
        color: `#a5a5a5`,
      }))()),
      (Zh = {
        overflow: `hidden`,
        whiteSpace: `nowrap`,
        textOverflow: `ellipsis`,
        maxWidth: `100%`,
        flexShrink: 0,
        padding: `0 10px`,
      }),
      (Qh = (() => ({ ...Zh, fontWeight: 500 }))()),
      ($h = (() => ({
        ...Zh,
        whiteSpace: `pre`,
        maxHeight: `calc(50% - calc(20px * var(--framerInternalCanvas-canvasPlaceholderContentScaleFactor, 1)))`,
        WebkitMaskImage: `linear-gradient(to bottom, black 80%, transparent 100%)`,
      }))()),
      (eg = (() => {
        function e(e, t) {
          return { a: e, b: t };
        }
        return (
          (e.offset = (t, n) => {
            let r = lr.angleFromX(t.a, t.b),
              i = ni(r),
              a = n * Math.sin(i),
              o = n * Math.cos(i);
            return e(
              { x: t.a.x + a, y: t.a.y - o },
              { x: t.b.x + a, y: t.b.y - o }
            );
          }),
          (e.intersection = (e, t, n) => {
            let r = e.a.x,
              i = e.a.y,
              a = e.b.x,
              o = e.b.y,
              s = t.a.x,
              c = t.a.y,
              l = t.b.x,
              u = t.b.y,
              d = (l - s) * (c - i) - (u - c) * (s - r),
              f = (l - s) * (o - i) - (u - c) * (a - r),
              p = (a - r) * (c - i) - (o - i) * (s - r);
            if ((d === 0 && f === 0) || f === 0) return null;
            let m = d / f,
              h = p / f;
            return n && (m < 0 || m > 1 || h < 0 || h > 1)
              ? null
              : { x: r + m * (a - r), y: i + m * (o - i) };
          }),
          (e.intersectionAngle = (e, t) => {
            let n = e.b.x - e.a.x,
              r = e.b.y - e.a.y,
              i = t.b.x - t.a.x,
              a = t.b.y - t.a.y,
              o = Math.atan2(n * a - r * i, n * i + r * a);
            return o * (180 / Math.PI);
          }),
          (e.isOrthogonal = (e) => e.a.x === e.b.x || e.a.y === e.b.y),
          (e.perpendicular = (t, n) => {
            let r = t.a.x - t.b.x,
              i = t.a.y - t.b.y,
              a = lr(n.x - i, n.y + r);
            return e(a, n);
          }),
          (e.projectPoint = (t, n) => {
            let r = e.perpendicular(t, n);
            return e.intersection(t, r);
          }),
          (e.pointAtPercentDistance = (t, n) => {
            let r = e.distance(t),
              i = (n * r) / r;
            return {
              x: i * t.b.x + (1 - i) * t.a.x,
              y: i * t.b.y + (1 - i) * t.a.y,
            };
          }),
          (e.distance = (e) => lr.distance(e.a, e.b)),
          e
        );
      })()),
      (X = {
        equals: function (e, t) {
          return e === t
            ? !0
            : !e || !t
            ? !1
            : e.x === t.x &&
              e.y === t.y &&
              e.width === t.width &&
              e.height === t.height;
        },
        from: (e) => ({ x: e.x, y: e.y, width: e.width, height: e.height }),
        atOrigin: (e) => ({ x: 0, y: 0, width: e.width, height: e.height }),
        fromTwoPoints: (e, t) => ({
          x: Math.min(e.x, t.x),
          y: Math.min(e.y, t.y),
          width: Math.abs(e.x - t.x),
          height: Math.abs(e.y - t.y),
        }),
        fromRect: (e) => ({
          x: e.left,
          y: e.top,
          width: e.right - e.left,
          height: e.bottom - e.top,
        }),
        multiply: (e, t) => ({
          x: e.x * t,
          y: e.y * t,
          width: e.width * t,
          height: e.height * t,
        }),
        divide: (e, t) => X.multiply(e, 1 / t),
        offset: (e, t) => {
          let n = typeof t.x == `number` ? t.x : 0,
            r = typeof t.y == `number` ? t.y : 0;
          return { ...e, x: e.x + n, y: e.y + r };
        },
        inflate: (e, t) => {
          if (t === 0) return e;
          let n = 2 * t;
          return {
            x: e.x - t,
            y: e.y - t,
            width: e.width + n,
            height: e.height + n,
          };
        },
        pixelAligned: (e) => {
          let t = Math.round(e.x),
            n = Math.round(e.y),
            r = Math.round(e.x + e.width),
            i = Math.round(e.y + e.height),
            a = Math.max(r - t, 0),
            o = Math.max(i - n, 0);
          return { x: t, y: n, width: a, height: o };
        },
        halfPixelAligned: (e) => {
          let t = Math.round(e.x * 2) / 2,
            n = Math.round(e.y * 2) / 2,
            r = Math.round((e.x + e.width) * 2) / 2,
            i = Math.round((e.y + e.height) * 2) / 2,
            a = Math.max(r - t, 1),
            o = Math.max(i - n, 1);
          return { x: t, y: n, width: a, height: o };
        },
        round: (e, t = 0) => {
          let n = or(e.x, t),
            r = or(e.y, t),
            i = or(e.width, t),
            a = or(e.height, t);
          return { x: n, y: r, width: i, height: a };
        },
        roundToOutside: (e) => {
          let t = Math.floor(e.x),
            n = Math.floor(e.y),
            r = Math.ceil(e.x + e.width),
            i = Math.ceil(e.y + e.height),
            a = Math.max(r - t, 0),
            o = Math.max(i - n, 0);
          return { x: t, y: n, width: a, height: o };
        },
        minX: (e) => e.x,
        maxX: (e) => e.x + e.width,
        minY: (e) => e.y,
        maxY: (e) => e.y + e.height,
        positions: (e) => ({
          minX: e.x,
          midX: e.x + e.width / 2,
          maxX: X.maxX(e),
          minY: e.y,
          midY: e.y + e.height / 2,
          maxY: X.maxY(e),
        }),
        center: (e) => ({ x: e.x + e.width / 2, y: e.y + e.height / 2 }),
        boundingRectFromPoints: (e) => {
          let t = 1 / 0,
            n = -1 / 0,
            r = 1 / 0,
            i = -1 / 0;
          for (let a = 0; a < e.length; a++) {
            let o = e[a];
            (t = Math.min(t, o.x)),
              (n = Math.max(n, o.x)),
              (r = Math.min(r, o.y)),
              (i = Math.max(i, o.y));
          }
          return { x: t, y: r, width: n - t, height: i - r };
        },
        fromPoints: (e) => {
          let [t, n, r, i] = e,
            { x: a, y: o } = t,
            s = lr.distance(t, n),
            c = lr.distance(t, i);
          return { x: a, y: o, width: s, height: c };
        },
        merge: (...e) => {
          let t = {
              x: Math.min(...e.map(X.minX)),
              y: Math.min(...e.map(X.minY)),
            },
            n = {
              x: Math.max(...e.map(X.maxX)),
              y: Math.max(...e.map(X.maxY)),
            };
          return X.fromTwoPoints(t, n);
        },
        intersection: (e, t) => {
          let n = Math.max(e.x, t.x),
            r = Math.min(e.x + e.width, t.x + t.width),
            i = Math.max(e.y, t.y),
            a = Math.min(e.y + e.height, t.y + t.height);
          return { x: n, y: i, width: r - n, height: a - i };
        },
        points: (e) => [
          { x: X.minX(e), y: X.minY(e) },
          { x: X.minX(e), y: X.maxY(e) },
          { x: X.maxX(e), y: X.minY(e) },
          { x: X.maxX(e), y: X.maxY(e) },
        ],
        pointsAtOrigin: (e) => [
          { x: 0, y: 0 },
          { x: e.width, y: 0 },
          { x: e.width, y: e.height },
          { x: 0, y: e.height },
        ],
        transform: (e, t) => {
          let { x: n, y: r } = t.transformPoint({ x: e.x, y: e.y }),
            { x: i, y: a } = t.transformPoint({ x: e.x + e.width, y: e.y }),
            { x: o, y: s } = t.transformPoint({
              x: e.x + e.width,
              y: e.y + e.height,
            }),
            { x: c, y: l } = t.transformPoint({ x: e.x, y: e.y + e.height }),
            u = Math.min(n, i, o, c),
            d = Math.max(n, i, o, c) - u,
            f = Math.min(r, a, s, l),
            p = Math.max(r, a, s, l) - f;
          return { x: u, y: f, width: d, height: p };
        },
        containsPoint: (e, t) =>
          !(
            t.x < X.minX(e) ||
            t.x > X.maxX(e) ||
            t.y < X.minY(e) ||
            t.y > X.maxY(e) ||
            Number.isNaN(e.x) ||
            Number.isNaN(e.y)
          ),
        containsRect: (e, t) => {
          for (let n of X.points(t)) if (!X.containsPoint(e, n)) return !1;
          return !0;
        },
        toCSS: (e) => ({
          display: `block`,
          transform: `translate(${e.x}px, ${e.y}px)`,
          width: `${e.width}px`,
          height: `${e.height}px`,
        }),
        inset: (e, t) => ({
          x: e.x + t,
          y: e.y + t,
          width: Math.max(0, e.width - 2 * t),
          height: Math.max(0, e.height - 2 * t),
        }),
        intersects: (e, t) =>
          !(
            t.x >= X.maxX(e) ||
            X.maxX(t) <= e.x ||
            t.y >= X.maxY(e) ||
            X.maxY(t) <= e.y
          ),
        overlapHorizontally: (e, t) => {
          let n = X.maxX(e),
            r = X.maxX(t);
          return n > t.x && r > e.x;
        },
        overlapVertically: (e, t) => {
          let n = X.maxY(e),
            r = X.maxY(t);
          return n > t.y && r > e.y;
        },
        doesNotIntersect: (e, t) =>
          t.find((t) => X.intersects(t, e)) === void 0,
        isEqual: (e, t) => X.equals(e, t),
        cornerPoints: (e) => {
          let t = e.x,
            n = e.x + e.width,
            r = e.y,
            i = e.y + e.height,
            a = { x: t, y: r },
            o = { x: n, y: r },
            s = { x: n, y: i },
            c = { x: t, y: i };
          return [a, o, s, c];
        },
        midPoints: (e) => {
          let t = e.x,
            n = e.x + e.width / 2,
            r = e.x + e.width,
            i = e.y,
            a = e.y + e.height / 2,
            o = e.y + e.height,
            s = { x: n, y: i },
            c = { x: r, y: a },
            l = { x: n, y: o },
            u = { x: t, y: a };
          return [s, c, l, u];
        },
        pointDistance: (e, t) => {
          let n = 0,
            r = 0;
          return (
            t.x < e.x
              ? (n = e.x - t.x)
              : t.x > X.maxX(e) && (n = t.x - X.maxX(e)),
            t.y < e.y
              ? (r = e.y - t.y)
              : t.y > X.maxY(e) && (r = t.y - X.maxY(e)),
            lr.distance({ x: n, y: r }, { x: 0, y: 0 })
          );
        },
        delta: (e, t) => {
          let n = { x: X.minX(e), y: X.minY(e) },
            r = { x: X.minX(t), y: X.minY(t) };
          return { x: n.x - r.x, y: n.y - r.y };
        },
        withMinSize: (e, t) => {
          let { width: n, height: r } = t,
            i = e.width - n,
            a = e.height - r;
          return {
            width: Math.max(e.width, n),
            height: Math.max(e.height, r),
            x: e.width < n ? e.x + i / 2 : e.x,
            y: e.height < r ? e.y + a / 2 : e.y,
          };
        },
        anyPointsOutsideRect: (e, t) => {
          let n = X.minX(e),
            r = X.minY(e),
            i = X.maxX(e),
            a = X.maxY(e);
          for (let e of t)
            if (e.x < n || e.x > i || e.y < r || e.y > a) return !0;
          return !1;
        },
        edges: (e) => {
          let [t, n, r, i] = X.cornerPoints(e);
          return [eg(t, n), eg(n, r), eg(r, i), eg(i, t)];
        },
        rebaseRectOnto: (e, t, n, r) => {
          let i = { ...e };
          switch (n) {
            case `bottom`:
            case `top`:
              switch (r) {
                case `start`:
                  i.x = t.x;
                  break;
                case `center`:
                  i.x = t.x + t.width / 2 - e.width / 2;
                  break;
                case `end`:
                  i.x = t.x + t.width - e.width;
                  break;
                default:
                  H(r);
              }
              break;
            case `left`:
              i.x = t.x - e.width;
              break;
            case `right`:
              i.x = t.x + t.width;
              break;
            default:
              H(n);
          }
          switch (n) {
            case `left`:
            case `right`:
              switch (r) {
                case `start`:
                  i.y = t.y;
                  break;
                case `center`:
                  i.y = t.y + t.height / 2 - e.height / 2;
                  break;
                case `end`:
                  i.y = t.y + t.height - e.height;
                  break;
                default:
                  H(r);
              }
              break;
            case `top`:
              i.y = t.y - e.height;
              break;
            case `bottom`:
              i.y = t.y + t.height;
              break;
            default:
              H(n);
          }
          return i;
        },
      }),
      (tg = {
        quickfix: (e) => (
          (ri(e.widthType) || ri(e.heightType)) && (e.aspectRatio = null),
          U(e.aspectRatio) &&
            (e.left && e.right && (e.widthType = 0),
            e.top && e.bottom && (e.heightType = 0),
            e.left && e.right && e.top && e.bottom && (e.bottom = !1),
            e.widthType !== 0 && e.heightType !== 0 && (e.heightType = 0)),
          e.left &&
            e.right &&
            ((e.fixedSize || ri(e.widthType) || U(e.maxWidth)) &&
              (e.right = !1),
            (e.widthType = 0)),
          e.top &&
            e.bottom &&
            ((e.fixedSize || ri(e.heightType) || U(e.maxHeight)) &&
              (e.bottom = !1),
            (e.heightType = 0)),
          e
        ),
      }),
      (ng = {
        fromProperties: (e) => {
          let {
              left: t,
              right: n,
              top: r,
              bottom: i,
              width: a,
              height: o,
              centerX: s,
              centerY: c,
              aspectRatio: l,
              autoSize: u,
            } = e,
            d = tg.quickfix({
              left: U(t) || ir(t),
              right: U(n) || ir(n),
              top: U(r) || ir(r),
              bottom: U(i) || ir(i),
              widthType: ii(a),
              heightType: ii(o),
              aspectRatio: l || null,
              fixedSize: u === !0,
            }),
            f = null,
            p = null,
            m = 0,
            h = 0;
          if (d.widthType !== 0 && typeof a == `string`) {
            let e = parseFloat(a);
            a.endsWith(`fr`)
              ? ((m = 3), (f = e))
              : a === `auto`
              ? (m = 2)
              : ((m = 1), (f = e / 100));
          } else a !== void 0 && typeof a != `string` && (f = Sh.getNumber(a));
          if (d.heightType !== 0 && typeof o == `string`) {
            let e = parseFloat(o);
            o.endsWith(`fr`)
              ? ((h = 3), (p = e))
              : o === `auto`
              ? (h = 2)
              : ((h = 1), (p = parseFloat(o) / 100));
          } else o !== void 0 && typeof o != `string` && (p = Sh.getNumber(o));
          let g = 0.5,
            _ = 0.5;
          return (
            s && (g = parseFloat(s) / 100),
            c && (_ = parseFloat(c) / 100),
            {
              left: d.left ? Sh.getNumber(t) : null,
              right: d.right ? Sh.getNumber(n) : null,
              top: d.top ? Sh.getNumber(r) : null,
              bottom: d.bottom ? Sh.getNumber(i) : null,
              widthType: m,
              heightType: h,
              width: f,
              height: p,
              aspectRatio: d.aspectRatio || null,
              centerAnchorX: g,
              centerAnchorY: _,
            }
          );
        },
        toSize: (e, t, n, r) => {
          let i = null,
            a = null,
            o = t?.sizing ? Sh.getNumber(t?.sizing.width) : null,
            s = t?.sizing ? Sh.getNumber(t?.sizing.height) : null,
            c = ui(e.left, e.right);
          if (o && U(c)) i = o - c;
          else if (n && ri(e.widthType)) i = n.width;
          else if (U(e.width))
            switch (e.widthType) {
              case 0:
                i = e.width;
                break;
              case 3:
                i = r
                  ? (r.freeSpaceInParent.width / r.freeSpaceUnitDivisor.width) *
                    e.width
                  : null;
                break;
              case 1:
              case 4:
                o && (i = o * e.width);
                break;
              case 2:
              case 5:
                break;
              default:
                H(e.widthType);
            }
          let l = ui(e.top, e.bottom);
          if (s && U(l)) a = s - l;
          else if (n && ri(e.heightType)) a = n.height;
          else if (U(e.height))
            switch (e.heightType) {
              case 0:
                a = e.height;
                break;
              case 3:
                a = r
                  ? (r.freeSpaceInParent.height /
                      r.freeSpaceUnitDivisor.height) *
                    e.height
                  : null;
                break;
              case 1:
              case 4:
                s && (a = s * e.height);
                break;
              case 2:
              case 5:
                break;
              default:
                H(e.heightType);
            }
          return li(i, a, e, { height: s ?? 0, width: o ?? 0 }, t?.viewport);
        },
        toRect: (e, t = null, n = null, r = !1, i = null) => {
          let a = e.left || 0,
            o = e.top || 0,
            { width: s, height: c } = ng.toSize(e, t, n, i),
            l = t?.positioning ?? null,
            u = l ? Sh.getNumber(l.width) : null,
            d = l ? Sh.getNumber(l.height) : null;
          e.left === null
            ? u && e.right !== null
              ? (a = u - e.right - s)
              : u && (a = e.centerAnchorX * u - s / 2)
            : (a = e.left),
            e.top === null
              ? d && e.bottom !== null
                ? (o = d - e.bottom - c)
                : d && (o = e.centerAnchorY * d - c / 2)
              : (o = e.top);
          let f = { x: a, y: o, width: s, height: c };
          return r ? X.pixelAligned(f) : f;
        },
      }),
      (rg = 200),
      (ig = 200),
      (ag = d.createContext({ parentSize: 0 })),
      (og = (e) => {
        let t = vi(),
          { parentSize: n, children: r } = e,
          i = d.useMemo(() => ({ parentSize: n }), [bi(n), xi(n)]);
        return t === 1
          ? r
            ? x(y, { children: r })
            : null
          : x(ag.Provider, { value: i, children: r });
      }),
      (sg = ((e) => (
        (e.Boolean = `boolean`),
        (e.Number = `number`),
        (e.String = `string`),
        (e.RichText = `richtext`),
        (e.FusedNumber = `fusednumber`),
        (e.Enum = `enum`),
        (e.SegmentedEnum = `segmentedenum`),
        (e.Color = `color`),
        (e.Image = `image`),
        (e.ResponsiveImage = `responsiveimage`),
        (e.File = `file`),
        (e.ComponentInstance = `componentinstance`),
        (e.Slot = `slot`),
        (e.Array = `array`),
        (e.EventHandler = `eventhandler`),
        (e.Transition = `transition`),
        (e.BoxShadow = `boxshadow`),
        (e.Link = `link`),
        (e.Date = `date`),
        (e.Object = `object`),
        (e.Font = `font`),
        (e.PageScope = `pagescope`),
        (e.ScrollSectionRef = `scrollsectionref`),
        (e.CustomCursor = `customcursor`),
        (e.Border = `border`),
        (e.Cursor = `cursor`),
        (e.Padding = `padding`),
        (e.BorderRadius = `borderradius`),
        (e.Gap = `gap`),
        (e.CollectionReference = `collectionreference`),
        (e.MultiCollectionReference = `multicollectionreference`),
        (e.TrackingId = `trackingid`),
        (e.VectorSetItem = `vectorsetitem`),
        (e.LinkRelValues = `linkrelvalues`),
        e
      ))(sg || {})),
      (lg = `flexbox-gap-not-supported`),
      (ug = !1),
      (dg = `
[data-framer-component-type="DeprecatedRichText"] p,
[data-framer-component-type="DeprecatedRichText"] div,
[data-framer-component-type="DeprecatedRichText"] h1,
[data-framer-component-type="DeprecatedRichText"] h2,
[data-framer-component-type="DeprecatedRichText"] h3,
[data-framer-component-type="DeprecatedRichText"] h4,
[data-framer-component-type="DeprecatedRichText"] h5,
[data-framer-component-type="DeprecatedRichText"] h6,
[data-framer-component-type="DeprecatedRichText"] li,
[data-framer-component-type="DeprecatedRichText"] ol,
[data-framer-component-type="DeprecatedRichText"] ul,
[data-framer-component-type="DeprecatedRichText"] span:not([data-text-fill]) {
    font-family: var(--framer-font-family, Inter, Inter Placeholder, sans-serif);
    font-style: var(--framer-font-style, normal);
    font-weight: var(--framer-font-weight, 400);
    color: var(--framer-text-color, #000);
    font-size: var(--framer-font-size, 16px);
    letter-spacing: var(--framer-letter-spacing, 0);
    text-transform: var(--framer-text-transform, none);
    text-decoration: var(--framer-text-decoration, none);
    line-height: var(--framer-line-height, 1.2em);
    text-align: var(--framer-text-alignment, start);
}
`),
      (fg = `
[data-framer-component-type="DeprecatedRichText"] p:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] div:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h1:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h2:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h3:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h4:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h5:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h6:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] ol:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] ul:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] .framer-image:not(:first-child) {
    margin-top: var(--framer-paragraph-spacing, 0);
}
`),
      (pg = `
[data-framer-component-type="DeprecatedRichText"] span[data-text-fill] {
    display: inline-block;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
`),
      (mg = `
[data-framer-component-type="DeprecatedRichText"] a,
[data-framer-component-type="DeprecatedRichText"] a span:not([data-text-fill]) {
    font-family: var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
    font-style: var(--framer-link-font-style, var(--framer-font-style, normal));
    font-weight: var(--framer-link-font-weight, var(--framer-font-weight, 400));
    color: var(--framer-link-text-color, var(--framer-text-color, #000));
    font-size: var(--framer-link-font-size, var(--framer-font-size, 16px));
    text-transform: var(--framer-link-text-transform, var(--framer-text-transform, none));
    text-decoration: var(--framer-link-text-decoration, var(--framer-text-decoration, none));
}
`),
      (hg = `
[data-framer-component-type="DeprecatedRichText"] a:hover,
[data-framer-component-type="DeprecatedRichText"] a:hover span:not([data-text-fill]) {
    font-family: var(--framer-link-hover-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)));
    font-style: var(--framer-link-hover-font-style, var(--framer-link-font-style, var(--framer-font-style, normal)));
    font-weight: var(--framer-link-hover-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400)));
    color: var(--framer-link-hover-text-color, var(--framer-link-text-color, var(--framer-text-color, #000)));
    font-size: var(--framer-link-hover-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px)));
    text-transform: var(--framer-link-hover-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none)));
    text-decoration: var(--framer-link-hover-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none)));
}
`),
      (gg = `
[data-framer-component-type="DeprecatedRichText"] a[data-framer-page-link-current],
[data-framer-component-type="DeprecatedRichText"] a[data-framer-page-link-current] span:not([data-text-fill]):not([data-nested-link]) {
    font-family: var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)));
    font-style: var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style, normal)));
    font-weight: var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400)));
    color: var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color, #000)));
    font-size: var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px)));
    text-transform: var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none)));
    text-decoration: var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none)));
}
`),
      (_g = `
[data-framer-component-type="DeprecatedRichText"] a[data-framer-page-link-current]:hover,
[data-framer-component-type="DeprecatedRichText"] a[data-framer-page-link-current]:hover span:not([data-text-fill]):not([data-nested-link]) {
    font-family: var(--framer-link-hover-font-family, var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif))));
    font-style: var(--framer-link-hover-font-style, var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style, normal))));
    font-weight: var(--framer-link-hover-font-weight, var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400))));
    color: var(--framer-link-hover-text-color, var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color, #000))));
    font-size: var(--framer-link-hover-font-size, var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px))));
    text-transform: var(--framer-link-hover-text-transform, var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none))));
    text-decoration: var(--framer-link-hover-text-decoration, var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none))));
}
`),
      (vg = `
[data-framer-component-type="DeprecatedRichText"] strong {
    font-weight: bolder;
}
`),
      (yg = `
[data-framer-component-type="DeprecatedRichText"] em {
    font-style: italic;
}
`),
      (bg = `
[data-framer-component-type="DeprecatedRichText"] .framer-image {
    display: block;
    max-width: 100%;
    height: auto;
}
`),
      (xg = `
[data-framer-component-type="DeprecatedRichText"] p,
[data-framer-component-type="DeprecatedRichText"] div,
[data-framer-component-type="DeprecatedRichText"] h1,
[data-framer-component-type="DeprecatedRichText"] h2,
[data-framer-component-type="DeprecatedRichText"] h3,
[data-framer-component-type="DeprecatedRichText"] h4,
[data-framer-component-type="DeprecatedRichText"] h5,
[data-framer-component-type="DeprecatedRichText"] h6 {
    margin: 0;
    padding: 0;
}
`),
      (Sg = `
[data-framer-component-type="DeprecatedRichText"] .text-styles-preset-reset {
    --framer-font-family: Inter, Inter Placeholder, sans-serif;
    --framer-font-style: normal;
    --framer-font-weight: 500;
    --framer-text-color: #000;
    --framer-font-size: 16px;
    --framer-letter-spacing: 0;
    --framer-text-transform: none;
    --framer-text-decoration: none;
    --framer-line-height: 1.2em;
    --framer-text-alignment: start;
    --framer-font-open-type-features: normal;
    --font-variation-settings: normal;
}
`),
      (Cg = `
[data-framer-component-type="DeprecatedRichText"] ul,
[data-framer-component-type="DeprecatedRichText"] ol {
    display: table;
    width: 100%;
    padding-left: 0;
    margin: 0;
}
`),
      (wg = `
[data-framer-component-type="DeprecatedRichText"] li {
    display: table-row;
    counter-increment: list-item;
    list-style: none;
}
`),
      (Tg = `
[data-framer-component-type="DeprecatedRichText"] ol > li::before {
    display: table-cell;
    width: 2.25ch;
    box-sizing: border-box;
    padding-right: 0.75ch;
    content: counter(list-item) ".";
    white-space: nowrap;
}
`),
      (Eg = `
[data-framer-component-type="DeprecatedRichText"] ul > li::before {
    display: table-cell;
    width: 2.25ch;
    box-sizing: border-box;
    padding-right: 0.75ch;
    content: "•";
}
`),
      (Dg = [
        `[data-framer-component-type="DeprecatedRichText"] { cursor: inherit; }`,
        Sg,
        xg,
        dg,
        fg,
        pg,
        mg,
        hg,
        gg,
        _g,
        vg,
        yg,
        bg,
        Cg,
        wg,
        Tg,
        Eg,
      ]),
      (Og = ((e) => (
        (e.Padding = `--framer-input-padding`),
        (e.BorderRadiusTopLeft = `--framer-input-border-radius-top-left`),
        (e.BorderRadiusTopRight = `--framer-input-border-radius-top-right`),
        (e.BorderRadiusBottomRight = `--framer-input-border-radius-bottom-right`),
        (e.BorderRadiusBottomLeft = `--framer-input-border-radius-bottom-left`),
        (e.BorderColor = `--framer-input-border-color`),
        (e.BorderTopWidth = `--framer-input-border-top-width`),
        (e.BorderRightWidth = `--framer-input-border-right-width`),
        (e.BorderBottomWidth = `--framer-input-border-bottom-width`),
        (e.BorderLeftWidth = `--framer-input-border-left-width`),
        (e.BorderStyle = `--framer-input-border-style`),
        (e.Background = `--framer-input-background`),
        (e.FontFamily = `--framer-input-font-family`),
        (e.FontWeight = `--framer-input-font-weight`),
        (e.FontSize = `--framer-input-font-size`),
        (e.FontColor = `--framer-input-font-color`),
        (e.FontStyle = `--framer-input-font-style`),
        (e.FontLetterSpacing = `--framer-input-font-letter-spacing`),
        (e.FontTextAlignment = `--framer-input-font-text-alignment`),
        (e.FontLineHeight = `--framer-input-font-line-height`),
        (e.FontOpenType = `--framer-input-font-open-type-features`),
        (e.PlaceholderColor = `--framer-input-placeholder-color`),
        (e.BoxShadow = `--framer-input-box-shadow`),
        (e.FocusedBorderColor = `--framer-input-focused-border-color`),
        (e.FocusedBorderWidth = `--framer-input-focused-border-width`),
        (e.FocusedBorderStyle = `--framer-input-focused-border-style`),
        (e.FocusedBackground = `--framer-input-focused-background`),
        (e.FocusedBoxShadow = `--framer-input-focused-box-shadow`),
        (e.FocusedTransition = `--framer-input-focused-transition`),
        (e.BooleanCheckedBackground = `--framer-input-boolean-checked-background`),
        (e.BooleanCheckedBorderColor = `--framer-input-boolean-checked-border-color`),
        (e.BooleanCheckedBorderWidth = `--framer-input-boolean-checked-border-width`),
        (e.BooleanCheckedBorderStyle = `--framer-input-boolean-checked-border-style`),
        (e.BooleanCheckedBoxShadow = `--framer-input-boolean-checked-box-shadow`),
        (e.BooleanCheckedTransition = `--framer-input-boolean-checked-transition`),
        (e.InvalidTextColor = `--framer-input-invalid-text-color`),
        (e.IconBackgroundImage = `--framer-input-icon-image`),
        (e.IconMaskImage = `--framer-input-icon-mask-image`),
        (e.IconColor = `--framer-input-icon-color`),
        (e.WrapperHeight = `--framer-input-wrapper-height`),
        e
      ))(Og || {})),
      (Z = Og),
      (kg = `framer-form-input`),
      (Ag = `framer-form-input-wrapper`),
      (jg = `framer-form-input-empty`),
      (Mg = `framer-form-input-forced-focus`),
      ((e) => {
        function t(...e) {
          let t = e[e.length - 1],
            n = t.startsWith(`--`) ? `var(${t})` : t;
          for (let t = e.length - 2; t >= 0; t--) {
            let r = e[t];
            n = `var(${r}, ${n})`;
          }
          return n;
        }
        e.variable = t;
      })((W ||= {})),
      (Ng = [
        W(`.${kg}`, {
          padding: W.variable(Z.Padding),
          background: `transparent`,
          fontFamily: W.variable(Z.FontFamily),
          fontWeight: W.variable(Z.FontWeight),
          fontSize: W.variable(Z.FontSize),
          fontStyle: W.variable(Z.FontStyle),
          color: W.variable(Z.FontColor),
          fontFeatureSettings: W.variable(Z.FontOpenType),
          border: `none`,
          textOverflow: `ellipsis`,
          whiteSpace: `nowrap`,
          overflow: `hidden`,
          width: `100%`,
          height: W.variable(Z.WrapperHeight, `100%`),
          letterSpacing: W.variable(Z.FontLetterSpacing),
          textAlign: W.variable(Z.FontTextAlignment),
          lineHeight: W.variable(Z.FontLineHeight),
        }),
        W(`.${kg}:focus-visible`, { outline: `none` }),
      ]),
      (Pg = (() => [W(`.${Ag}`, { overflow: `hidden` })])()),
      (Fg = `var(${Z.BorderTopWidth}) var(${Z.BorderRightWidth}) var(${Z.BorderBottomWidth}) var(${Z.BorderLeftWidth})`),
      (Ig = [
        `.${Ag}:after {
        content: "";
        pointer-events: none;
        box-sizing: border-box;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-top-left-radius: var(${Z.BorderRadiusTopLeft});
        border-top-right-radius: var(${Z.BorderRadiusTopRight});
        border-bottom-right-radius: var(${Z.BorderRadiusBottomRight});
        border-bottom-left-radius: var(${Z.BorderRadiusBottomLeft});
        border-color: var(${Z.BorderColor});
        border-top-width: var(${Z.BorderTopWidth});
        border-right-width: var(${Z.BorderRightWidth});
        border-bottom-width: var(${Z.BorderBottomWidth});
        border-left-width: var(${Z.BorderLeftWidth});
        border-style: var(${Z.BorderStyle});
        transition: var(${Z.FocusedTransition});
        transition-property: border-color, border-width, border-style, border-top-left-radius, border-top-right-radius, border-bottom-right-radius, border-bottom-left-radius;
    }`,
      ]),
      (Lg = `customError`),
      (Rg = `valid`),
      (zg = 10),
      (Bg = 16),
      (Vg = {
        content: ``,
        display: `block`,
        position: `absolute`,
        right: 0,
        top: 0,
        bottom: 0,
        width: `${Bg}px`,
        boxSizing: `content-box`,
        padding: W.variable(Z.Padding),
        border: `none`,
        pointerEvents: `none`,
        backgroundRepeat: `no-repeat`,
        backgroundSize: `${Bg}px`,
        maskRepeat: `no-repeat`,
        maskSize: `${Bg}px`,
        backgroundColor: W.variable(Z.IconColor),
      }),
      (Hg = (() => [
        `
        p.framer-text,
        div.framer-text,
        figure.framer-text,
        h1.framer-text,
        h2.framer-text,
        h3.framer-text,
        h4.framer-text,
        h5.framer-text,
        h6.framer-text,
        ol.framer-text,
        ul.framer-text {
            margin: 0;
            padding: 0;
        }
    `,
        `
        p.framer-text,
        div.framer-text,
        h1.framer-text,
        h2.framer-text,
        h3.framer-text,
        h4.framer-text,
        h5.framer-text,
        h6.framer-text,
        li.framer-text,
        ol.framer-text,
        ul.framer-text,
        mark.framer-text,
        span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-blockquote-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
            font-style: var(--framer-blockquote-font-style, var(--framer-font-style, normal));
            font-weight: var(--framer-blockquote-font-weight, var(--framer-font-weight, 400));
            color: var(--framer-blockquote-text-color, var(--framer-text-color, #000));
            font-size: calc(var(--framer-blockquote-font-size, var(--framer-font-size, 16px)) * var(--framer-font-size-scale, 1));
            letter-spacing: var(--framer-blockquote-letter-spacing, var(--framer-letter-spacing, 0));
            text-transform: var(--framer-blockquote-text-transform, var(--framer-text-transform, none));
            text-decoration-line: var(--framer-blockquote-text-decoration, var(--framer-text-decoration, initial));
            text-decoration-style: var(--framer-blockquote-text-decoration-style, var(--framer-text-decoration-style, initial));
            text-decoration-color: var(--framer-blockquote-text-decoration-color, var(--framer-text-decoration-color, initial));
            text-decoration-thickness: var(--framer-blockquote-text-decoration-thickness, var(--framer-text-decoration-thickness, initial));
            text-decoration-skip-ink: var(--framer-blockquote-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink, initial));
            text-underline-offset: var(--framer-blockquote-text-decoration-offset, var(--framer-text-decoration-offset, initial));
            line-height: var(--framer-blockquote-line-height, var(--framer-line-height, 1.2em));
            text-align: var(--framer-blockquote-text-alignment, var(--framer-text-alignment, start));
            -webkit-text-stroke-width: var(--framer-text-stroke-width, initial);
            -webkit-text-stroke-color: var(--framer-text-stroke-color, initial);
            -moz-font-feature-settings: var(--framer-font-open-type-features, initial);
            -webkit-font-feature-settings: var(--framer-font-open-type-features, initial);
            font-feature-settings: var(--framer-font-open-type-features, initial);
            font-variation-settings: var(--framer-font-variation-axes, normal);
            text-wrap: var(--framer-text-wrap-override, var(--framer-text-wrap));
        }
    `,
        `
        mark.framer-text,
        p.framer-text,
        div.framer-text,
        h1.framer-text,
        h2.framer-text,
        h3.framer-text,
        h4.framer-text,
        h5.framer-text,
        h6.framer-text,
        li.framer-text,
        ol.framer-text,
        ul.framer-text {
            background-color: var(--framer-blockquote-text-background-color, var(--framer-text-background-color, initial));
            border-radius: var(--framer-blockquote-text-background-radius, var(--framer-text-background-radius, initial));
            padding: var(--framer-blockquote-text-background-padding, var(--framer-text-background-padding, initial));
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            p.framer-text,
            div.framer-text,
            h1.framer-text,
            h2.framer-text,
            h3.framer-text,
            h4.framer-text,
            h5.framer-text,
            h6.framer-text,
            li.framer-text,
            ol.framer-text,
            ul.framer-text,
            span.framer-text:not([data-text-fill]) {
                color: ${ji(
                  [`--framer-blockquote-text-color`, `--framer-text-color`],
                  `#000`
                )};
                -webkit-text-stroke-color: ${ji(
                  [`--framer-text-stroke-color`],
                  `initial`
                )};
            }

            mark.framer-text {
                background-color: ${ji(
                  [
                    `--framer-blockquote-text-background-color`,
                    `--framer-text-background-color`,
                  ],
                  `initial`
                )};
            }
        }
    `,
        `
        .framer-fit-text .framer-text {
            white-space: nowrap;
            white-space-collapse: preserve;
        }
    `,
        `
        strong.framer-text {
            font-family: var(--framer-blockquote-font-family-bold, var(--framer-font-family-bold));
            font-style: var(--framer-blockquote-font-style-bold, var(--framer-font-style-bold));
            font-weight: var(--framer-blockquote-font-weight-bold, var(--framer-font-weight-bold, bolder));
            font-variation-settings: var(--framer-blockquote-font-variation-axes-bold, var(--framer-font-variation-axes-bold));
        }
    `,
        `
        em.framer-text {
            font-family: var(--framer-blockquote-font-family-italic, var(--framer-font-family-italic));
            font-style: var(--framer-blockquote-font-style-italic, var(--framer-font-style-italic, italic));
            font-weight: var(--framer-blockquote-font-weight-italic, var(--framer-font-weight-italic));
            font-variation-settings: var(--framer-blockquote-font-variation-axes-italic, var(--framer-font-variation-axes-italic));
        }
    `,
        `
        em.framer-text > strong.framer-text {
            font-family: var(--framer-blockquote-font-family-bold-italic, var(--framer-font-family-bold-italic));
            font-style: var(--framer-blockquote-font-style-bold-italic, var(--framer-font-style-bold-italic, italic));
            font-weight: var(--framer-blockquote-font-weight-bold-italic, var(--framer-font-weight-bold-italic, bolder));
            font-variation-settings: var(--framer-blockquote-font-variation-axes-bold-italic, var(--framer-font-variation-axes-bold-italic));
        }
    `,
        `
        p.framer-text:not(:first-child),
        div.framer-text:not(:first-child),
        h1.framer-text:not(:first-child),
        h2.framer-text:not(:first-child),
        h3.framer-text:not(:first-child),
        h4.framer-text:not(:first-child),
        h5.framer-text:not(:first-child),
        h6.framer-text:not(:first-child),
        ol.framer-text:not(:first-child),
        ul.framer-text:not(:first-child),
        blockquote.framer-text:not(:first-child),
        table.framer-text:not(:first-child),
        figure.framer-text:not(:first-child),
        .framer-image.framer-text:not(:first-child) {
            margin-top: var(--framer-blockquote-paragraph-spacing, var(--framer-paragraph-spacing, 0));
        }
    `,
        `
        li.framer-text > ul.framer-text:nth-child(2),
        li.framer-text > ol.framer-text:nth-child(2) {
            margin-top: 0;
        }
    `,
        `
        .framer-text[data-text-fill] {
            display: inline-block;
            background-clip: text;
            -webkit-background-clip: text;
            /* make this a transparent color if you want to visualise the clipping  */
            -webkit-text-fill-color: transparent;
            padding: max(0em, calc(calc(1.3em - var(--framer-blockquote-line-height, var(--framer-line-height, 1.3em))) / 2));
            margin: min(0em, calc(calc(1.3em - var(--framer-blockquote-line-height, var(--framer-line-height, 1.3em))) / -2));
        }
    `,
        `
        code.framer-text,
        code.framer-text span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-code-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
            font-style: var(--framer-blockquote-font-style, var(--framer-code-font-style, var(--framer-font-style, normal)));
            font-weight: var(--framer-blockquote-font-weight, var(--framer-code-font-weight, var(--framer-font-weight, 400)));
            color: var(--framer-blockquote-text-color, var(--framer-code-text-color, var(--framer-text-color, #000)));
            font-size: calc(var(--framer-blockquote-font-size, var(--framer-font-size, 16px)) * var(--framer-font-size-scale, 1));
            letter-spacing: var(--framer-blockquote-letter-spacing, var(--framer-letter-spacing, 0));
            line-height: var(--framer-blockquote-line-height, var(--framer-line-height, 1.2em));
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            code.framer-text,
            code.framer-text span.framer-text:not([data-text-fill]) {
                color: ${ji(
                  [
                    `--framer-blockquote-text-color`,
                    `--framer-code-text-color`,
                    `--framer-text-color`,
                  ],
                  `#000`
                )};
            }
        }
    `,
        `
        blockquote.framer-text {
            margin-block-start: initial;
            margin-block-end: initial;
            margin-inline-start: initial;
            margin-inline-end: initial;
            unicode-bidi: initial;
        }
    `,
        `
        a.framer-text,
        a.framer-text span.framer-text:not([data-text-fill]),
        span.framer-text[data-nested-link],
        span.framer-text[data-nested-link] span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-blockquote-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)));
            font-style: var(--framer-blockquote-font-style, var(--framer-link-font-style, var(--framer-font-style, normal)));
            font-weight: var(--framer-blockquote-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400)));
            color: var(--framer-blockquote-text-color, var(--framer-link-text-color, var(--framer-text-color, #000)));
            font-size: calc(var(--framer-blockquote-font-size, var(--framer-font-size, 16px)) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-blockquote-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none)));
            /* Cursor inherit to overwrite the user agent stylesheet on rich text links. */
            cursor: var(--framer-custom-cursors, pointer);
            /* Don't inherit background styles from any parent text style. */
            background-color: var(--framer-link-text-background-color, initial);
            border-radius: var(--framer-link-text-background-radius, initial);
            padding: var(--framer-link-text-background-padding, initial);
        }
    `,
        `
        a.framer-text,
        span.framer-text[data-nested-link] {
            text-decoration-line: var(--framer-blockquote-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, initial)));
            text-decoration-style: var(--framer-blockquote-text-decoration-style, var(--framer-link-text-decoration-style, var(--framer-text-decoration-style, initial)));
            text-decoration-color: var(--framer-blockquote-text-decoration-color, var(--framer-link-text-decoration-color, var(--framer-text-decoration-color, initial)));
            text-decoration-thickness: var(--framer-blockquote-text-decoration-thickness, var(--framer-link-text-decoration-thickness, var(--framer-text-decoration-thickness, initial)));
            text-decoration-skip-ink: var(--framer-blockquote-text-decoration-skip-ink, var(--framer-link-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink, initial)));
            text-underline-offset: var(--framer-blockquote-text-decoration-offset, var(--framer-link-text-decoration-offset, var(--framer-text-decoration-offset, initial)));
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            a.framer-text,
            a.framer-text span.framer-text:not([data-text-fill]),
            span.framer-text[data-nested-link],
            span.framer-text[data-nested-link] span.framer-text:not([data-text-fill]) {
                color: ${ji(
                  [
                    `--framer-blockquote-text-color`,
                    `--framer-link-text-color`,
                    `--framer-text-color`,
                  ],
                  `#000`
                )};
                background-color: ${ji(
                  [`--framer-link-text-background-color`],
                  `initial`
                )};
            }
        }
    `,
        `
        code.framer-text a.framer-text,
        code.framer-text a.framer-text span.framer-text:not([data-text-fill]),
        code.framer-text span.framer-text[data-nested-link],
        code.framer-text span.framer-text[data-nested-link] span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-code-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
            font-style: var(--framer-blockquote-font-style, var(--framer-code-font-style, var(--framer-font-style, normal)));
            font-weight: var(--framer-blockquote-font-weight, var(--framer-code-font-weight, var(--framer-font-weight, 400)));
            color: var(--framer-blockquote-text-color, var(--framer-link-text-color, var(--framer-code-text-color, var(--framer-text-color, #000))));
            font-size: calc(var(--framer-blockquote-font-size, var(--framer-font-size, 16px)) * var(--framer-font-size-scale, 1));
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            code.framer-text a.framer-text,
            code.framer-text a.framer-text span.framer-text:not([data-text-fill]),
            code.framer-text span.framer-text[data-nested-link],
            code.framer-text span.framer-text[data-nested-link] span.framer-text:not([data-text-fill]) {
                color: ${ji(
                  [
                    `--framer-blockquote-text-color`,
                    `--framer-link-text-color`,
                    `--framer-code-text-color`,
                    `--framer-text-color`,
                  ],
                  `#000`
                )};
            }
        }
    `,
        `
        a.framer-text:hover,
        a.framer-text:hover span.framer-text:not([data-text-fill]),
        span.framer-text[data-nested-link]:hover,
        span.framer-text[data-nested-link]:hover span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-link-hover-font-family, var(--framer-blockquote-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif))));
            font-style: var(--framer-link-hover-font-style, var(--framer-blockquote-font-style, var(--framer-link-font-style, var(--framer-font-style, normal))));
            font-weight: var(--framer-link-hover-font-weight, var(--framer-blockquote-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400))));
            color: var(--framer-link-hover-text-color, var(--framer-blockquote-text-color, var(--framer-link-text-color, var(--framer-text-color, #000))));
            font-size: calc(var(--framer-link-hover-font-size, var(--framer-blockquote-font-size, var(--framer-font-size, 16px))) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-link-hover-text-transform, var(--framer-blockquote-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none))));
            background-color: var(--framer-link-hover-text-background-color, var(--framer-link-text-background-color, var(--framer-text-background-color, initial)));
            border-radius: var(--framer-link-hover-text-background-radius, var(--framer-link-text-background-radius, var(--framer-text-background-radius, initial)));
            padding: var(--framer-link-hover-text-background-padding, var(--framer-link-text-background-padding, var(--framer-text-background-padding, initial)));
        }
    `,
        `
        a.framer-text:hover,
        span.framer-text[data-nested-link]:hover {
            text-decoration-line: var(--framer-link-hover-text-decoration, var(--framer-blockquote-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, initial))));
            text-decoration-style: var(--framer-link-hover-text-decoration-style, var(--framer-blockquote-text-decoration-style, var(--framer-link-text-decoration-style, var(--framer-text-decoration-style, initial))));
            text-decoration-color: var(--framer-link-hover-text-decoration-color, var(--framer-blockquote-text-decoration-color, var(--framer-link-text-decoration-color, var(--framer-text-decoration-color, initial))));
            text-decoration-thickness: var(--framer-link-hover-text-decoration-thickness, var(--framer-blockquote-text-decoration-thickness, var(--framer-link-text-decoration-thickness, var(--framer-text-decoration-thickness, initial))));
            text-decoration-skip-ink: var(--framer-link-hover-text-decoration-skip-ink, var(--framer-blockquote-text-decoration-skip-ink, var(--framer-link-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink, initial))));
            text-underline-offset: var(--framer-link-hover-text-decoration-offset, var(--framer-blockquote-text-decoration-offset, var(--framer-link-text-decoration-offset, var(--framer-text-decoration-offset, initial))));
        }
    `,
        `
    @supports not (color: color(display-p3 1 1 1)) {
        a.framer-text:hover,
        a.framer-text:hover span.framer-text:not([data-text-fill]),
        span.framer-text[data-nested-link]:hover,
        span.framer-text[data-nested-link]:hover span.framer-text:not([data-text-fill]) {
            color: ${ji(
              [
                `--framer-link-hover-text-color`,
                `--framer-blockquote-text-color`,
                `--framer-link-text-color`,
                `--framer-text-color`,
              ],
              `#000`
            )};
            background-color: ${ji(
              [
                `--framer-link-hover-text-background-color`,
                `--framer-link-text-background-color`,
                `--framer-text-background-color`,
              ],
              `initial`
            )};
        }
    }
    `,
        `
        code.framer-text a.framer-text:hover,
        code.framer-text a.framer-text:hover span.framer-text:not([data-text-fill]),
        code.framer-text span.framer-text[data-nested-link]:hover,
        code.framer-text span.framer-text[data-nested-link]:hover span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-code-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
            font-style: var(--framer-blockquote-font-style, var(--framer-code-font-style, var(--framer-font-style, normal)));
            font-weight: var(--framer-blockquote-font-weight, var(--framer-code-font-weight, var(--framer-font-weight, 400)));
            color: var(--framer-link-hover-text-color, var(--framer-blockquote-text-color, var(--framer-link-text-color, var(--framer-code-text-color, var(--framer-text-color, #000)))));
            font-size: calc(var(--framer-link-hover-font-size, var(--framer-blockquote-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px)))) * var(--framer-font-size-scale, 1));
        }
    `,
        `
    @supports not (color: color(display-p3 1 1 1)) {
        code.framer-text a.framer-text:hover,
        code.framer-text a.framer-text:hover span.framer-text:not([data-text-fill]),
        code.framer-text span.framer-text[data-nested-link]:hover,
        code.framer-text span.framer-text[data-nested-link]:hover span.framer-text:not([data-text-fill]) {
            color: ${ji(
              [
                `--framer-link-hover-text-color`,
                `--framer-blockquote-text-color`,
                `--framer-link-text-color`,
                `--framer-text-color`,
              ],
              `#000`
            )};
        }
    }
   `,
        `
        a.framer-text[data-framer-page-link-current],
        a.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]),
        span.framer-text[data-framer-page-link-current],
        span.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)));
            font-style: var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style, normal)));
            font-weight: var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400)));
            color: var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color, #000)));
            font-size: calc(var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px))) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none)));
            background-color: var(--framer-link-current-text-background-color, var(--framer-link-text-background-color, initial));
            border-radius: var(--framer-link-current-text-background-radius, var(--framer-link-text-background-radius, initial));
            padding: var(--framer-link-current-text-background-padding, var(--framer-link-text-background-padding, initial));
        }
    `,
        `
        a.framer-text[data-framer-page-link-current],
        span.framer-text[data-framer-page-link-current] {
            text-decoration-line: var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, initial)));
            text-decoration-style: var(--framer-link-current-text-decoration-style, var(--framer-link-text-decoration-style, var(--framer-text-decoration-style, initial)));
            text-decoration-color: var(--framer-link-current-text-decoration-color, var(--framer-link-text-decoration-color, var(--framer-text-decoration-color, initial)));
            text-decoration-thickness: var(--framer-link-current-text-decoration-thickness, var(--framer-link-text-decoration-thickness, var(--framer-text-decoration-thickness, initial)));
            text-decoration-skip-ink: var(--framer-link-current-text-decoration-skip-ink, var(--framer-link-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink, initial)));
            text-underline-offset: var(--framer-link-current-text-decoration-offset, var(--framer-link-text-decoration-offset, var(--framer-text-decoration-offset, initial)));
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            a.framer-text[data-framer-page-link-current],
            a.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]),
            span.framer-text[data-framer-page-link-current],
            span.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]) {
                color: ${ji(
                  [
                    `--framer-link-current-text-color`,
                    `--framer-link-text-color`,
                    `--framer-text-color`,
                  ],
                  `#000`
                )};
                background-color: ${ji(
                  [
                    `--framer-link-current-text-background-color`,
                    `--framer-link-text-background-color`,
                    `--framer-text-background-color`,
                  ],
                  `initial`
                )};
            }
        }
    `,
        `
        code.framer-text a.framer-text[data-framer-page-link-current],
        code.framer-text a.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]),
        code.framer-text span.framer-text[data-framer-page-link-current],
        code.framer-text span.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-code-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
            font-style: var(--framer-code-font-style, var(--framer-font-style, normal));
            font-weight: var(--framer-code-font-weight, var(--framer-font-weight, 400));
            color: var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-code-text-color, var(--framer-text-color, #000))));
            font-size: calc(var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px))) * var(--framer-font-size-scale, 1));
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            code.framer-text a.framer-text[data-framer-page-link-current],
            code.framer-text a.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]),
            code.framer-text span.framer-text[data-framer-page-link-current],
            code.framer-text span.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]) {
                color: ${ji(
                  [
                    `--framer-link-current-text-color`,
                    `--framer-link-text-color`,
                    `--framer-code-text-color`,
                    `--framer-text-color`,
                  ],
                  `#000`
                )};
                background-color: ${ji(
                  [
                    `--framer-link-current-text-background-color`,
                    `--framer-link-text-background-color`,
                    `--framer-text-background-color`,
                  ],
                  `initial`
                )};
            }
        }
    `,
        `
        a.framer-text[data-framer-page-link-current]:hover,
        a.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]),
        span.framer-text[data-framer-page-link-current]:hover,
        span.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-link-hover-font-family, var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif))));
            font-style: var(--framer-link-hover-font-style, var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style, normal))));
            font-weight: var(--framer-link-hover-font-weight, var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400))));
            color: var(--framer-link-hover-text-color, var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color, #000))));
            font-size: calc(var(--framer-link-hover-font-size, var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px)))) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-link-hover-text-transform, var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none))));
            background-color: var(--framer-link-hover-text-background-color, var(--framer-link-current-text-background-color, var(--framer-link-text-background-color, initial)));
            border-radius: var(--framer-link-hover-text-background-radius, var(--framer-link-current-text-background-radius, var(--framer-link-text-background-radius, initial)));
            padding: var(--framer-link-hover-text-background-padding, var(--framer-link-current-text-background-padding, var(--framer-link-text-background-padding, initial)));
        }
    `,
        `
        a.framer-text[data-framer-page-link-current]:hover,
        span.framer-text[data-framer-page-link-current]:hover {
            text-decoration-line: var(--framer-link-hover-text-decoration, var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, initial))));
            text-decoration-style: var(--framer-link-hover-text-decoration-style, var(--framer-link-current-text-decoration-style, var(--framer-link-text-decoration-style, var(--framer-text-decoration-style, initial))));
            text-decoration-color: var(--framer-link-hover-text-decoration-color, var(--framer-link-current-text-decoration-color, var(--framer-link-text-decoration-color, var(--framer-text-decoration-color, initial))));
            text-decoration-thickness: var(--framer-link-hover-text-decoration-thickness, var(--framer-link-current-text-decoration-thickness, var(--framer-link-text-decoration-thickness, var(--framer-text-decoration-thickness, initial))));
            text-decoration-skip-ink: var(--framer-link-hover-text-decoration-skip-ink, var(--framer-link-current-text-decoration-skip-ink, var(--framer-link-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink, initial))));
            text-underline-offset: var(--framer-link-hover-text-decoration-offset, var(--framer-link-current-text-decoration-offset, var(--framer-link-text-decoration-offset, var(--framer-text-decoration-offset, initial))));
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            a.framer-text[data-framer-page-link-current]:hover,
            a.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]),
            span.framer-text[data-framer-page-link-current]:hover,
            span.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]) {
                color: ${ji(
                  [
                    `--framer-link-hover-text-color`,
                    `--framer-link-current-text-color`,
                    `--framer-link-text-color`,
                    `--framer-code-text-color`,
                    `--framer-text-color`,
                  ],
                  `#000`
                )};
                background-color: ${ji(
                  [
                    `--framer-link-hover-text-background-color`,
                    `--framer-link-current-text-background-color`,
                    `--framer-link-text-background-color`,
                  ],
                  `initial`
                )};
            }
        }
    `,
        `
        code.framer-text a.framer-text[data-framer-page-link-current]:hover,
        code.framer-text a.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]),
        code.framer-text span.framer-text[data-framer-page-link-current]:hover,
        code.framer-text span.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-code-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
            font-style: var(--framer-code-font-style, var(--framer-font-style, normal));
            font-weight: var(--framer-code-font-weight, var(--framer-font-weight, 400));
            color: var(--framer-link-hover-text-color, var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-code-text-color, var(--framer-text-color, #000)))));
            font-size: calc(var(--framer-link-hover-font-size, var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px)))) * var(--framer-font-size-scale, 1));
            background-color: var(--framer-link-hover-text-background-color, var(--framer-link-current-text-background-color, var(--framer-link-text-background-color, var(--framer-text-background-color, initial))));
            border-radius: var(--framer-link-hover-text-background-radius, var(--framer-link-current-text-background-radius, var(--framer-link-text-background-radius, var(--framer-text-background-radius, initial))));
            padding: var(--framer-link-hover-text-background-padding, var(--framer-link-current-text-background-padding, var(--framer-link-text-background-padding, var(--framer-text-background-padding, initial))));
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            code.framer-text a.framer-text[data-framer-page-link-current]:hover,
            code.framer-text a.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]),
            code.framer-text span.framer-text[data-framer-page-link-current]:hover,
            code.framer-text span.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]) {
                color: ${ji(
                  [
                    `--framer-link-hover-text-color`,
                    `--framer-link-current-text-color`,
                    `--framer-link-text-color`,
                    `--framer-code-text-color`,
                    `--framer-text-color`,
                  ],
                  `#000`
                )};
                background-color: ${ji(
                  [
                    `--framer-link-hover-text-background-color`,
                    `--framer-link-current-text-background-color`,
                    `--framer-link-text-background-color`,
                  ],
                  `initial`
                )};
            }
        }
    `,
        `
        .framer-image.framer-text {
            display: block;
            max-width: 100%;
            height: auto;
        }
    `,
        `
        .text-styles-preset-reset.framer-text {
            --framer-font-family: Inter, Inter Placeholder, sans-serif;
            --framer-font-style: normal;
            --framer-font-weight: 500;
            --framer-text-color: #000;
            --framer-font-size: 16px;
            --framer-letter-spacing: 0;
            --framer-text-transform: none;
            --framer-text-decoration: none;
            --framer-text-decoration-style: none;
            --framer-text-decoration-color: none;
            --framer-text-decoration-thickness: none;
            --framer-text-decoration-skip-ink: none;
            --framer-text-decoration-offset: none;
            --framer-line-height: 1.2em;
            --framer-text-alignment: start;
            --framer-font-open-type-features: normal;
            --framer-text-background-color: initial;
            --framer-text-background-radius: initial;
            --framer-text-background-padding: initial;
        }
    `,
        `
        ol.framer-text {
            --list-style-type: decimal;
        }
    `,
        `
        ul.framer-text,
        ol.framer-text {
            padding-left: 3ch;
            position: relative;
        }
    `,
        `
        li.framer-text {
            counter-increment: list-item;
            list-style: none;
        }
    `,
        `
        ol.framer-text > li.framer-text::before {
            position: absolute;
            left: 0;
            content: counter(list-item, var(--list-style-type)) ".";
            font-variant-numeric: tabular-nums;
        }
    `,
        `
        ol.framer-text > li.framer-text:nth-last-child(n + 100),
        ol.framer-text > li.framer-text:nth-last-child(n + 100) ~ li {
            padding-left: 1ch;
        }
    `,
        `
        ol.framer-text > li.framer-text:nth-last-child(n + 1000),
        ol.framer-text > li.framer-text:nth-last-child(n + 1000) ~ li {
            padding-left: 2ch;
        }
    `,
        `
        ol.framer-text > li.framer-text:nth-last-child(n + 10000),
        ol.framer-text > li.framer-text:nth-last-child(n + 10000) ~ li {
            padding-left: 3ch;
        }
    `,
        `
        ol.framer-text > li.framer-text:nth-last-child(n + 100000),
        ol.framer-text > li.framer-text:nth-last-child(n + 100000) ~ li {
            padding-left: 4ch;
        }
    `,
        `
        ol.framer-text > li.framer-text:nth-last-child(n + 1000000),
        ol.framer-text > li.framer-text:nth-last-child(n + 1000000) ~ li {
            padding-left: 5ch;
        }
    `,
        `
        ul.framer-text > li.framer-text::before {
            position: absolute;
            left: 0;
            content: "•";
        }
    `,
        `
        .framer-table-wrapper {
            overflow-x: auto;
        }
    `,
        `
        table.framer-text,
        .framer-table-wrapper table.framer-text {
            border-collapse: separate;
            border-spacing: 0;
            table-layout: auto;
            word-break: normal;
            width: 100%;
        }
    `,
        `
        td.framer-text,
        th.framer-text {
            min-width: 16ch;
            vertical-align: top;
        }
    `,
        `
        .framer-text-module[style*="aspect-ratio"] > :first-child {
            width: 100%;
        }
    `,
        `
        @supports not (aspect-ratio: 1) {
            .framer-text-module[style*="aspect-ratio"] {
                position: relative;
            }
        }
    `,
        `
        @supports not (aspect-ratio: 1) {
            .framer-text-module[style*="aspect-ratio"]::before {
                content: "";
                display: block;
                padding-bottom: calc(100% / calc(var(--aspect-ratio)));
            }
        }
    `,
        `
        @supports not (aspect-ratio: 1) {
            .framer-text-module[style*="aspect-ratio"] > :first-child {
                position: absolute;
                top: 0;
                left: 0;
                height: 100%;
            }
        }
    `,
      ])()),
      (Ug = new Set()),
      (Gg = [`[data-framer-component-type] { position: absolute; }`]),
      (Kg = `
[data-framer-component-type="Text"] > * {
    text-align: var(--framer-text-alignment, start);
}`),
      (qg = `
[data-framer-component-type="Text"] span span,
[data-framer-component-type="Text"] p span,
[data-framer-component-type="Text"] h1 span,
[data-framer-component-type="Text"] h2 span,
[data-framer-component-type="Text"] h3 span,
[data-framer-component-type="Text"] h4 span,
[data-framer-component-type="Text"] h5 span,
[data-framer-component-type="Text"] h6 span {
    display: block;
}`),
      (Jg = `
[data-framer-component-type="Text"] span span span,
[data-framer-component-type="Text"] p span span,
[data-framer-component-type="Text"] h1 span span,
[data-framer-component-type="Text"] h2 span span,
[data-framer-component-type="Text"] h3 span span,
[data-framer-component-type="Text"] h4 span span,
[data-framer-component-type="Text"] h5 span span,
[data-framer-component-type="Text"] h6 span span {
    display: unset;
}`),
      (Yg = `
[data-framer-component-type="Text"] div div span,
[data-framer-component-type="Text"] a div span,
[data-framer-component-type="Text"] span span span,
[data-framer-component-type="Text"] p span span,
[data-framer-component-type="Text"] h1 span span,
[data-framer-component-type="Text"] h2 span span,
[data-framer-component-type="Text"] h3 span span,
[data-framer-component-type="Text"] h4 span span,
[data-framer-component-type="Text"] h5 span span,
[data-framer-component-type="Text"] h6 span span,
[data-framer-component-type="Text"] a {
    font-family: var(--font-family);
    font-style: var(--font-style);
    font-weight: min(calc(var(--framer-font-weight-increase, 0) + var(--font-weight, 400)), 900);
    color: var(--text-color);
    letter-spacing: var(--letter-spacing);
    font-size: var(--font-size);
    text-transform: var(--text-transform);
    --text-decoration: var(--framer-text-decoration-style, solid) var(--framer-text-decoration, none) var(--framer-text-decoration-color, currentcolor) var(--framer-text-decoration-thickness, auto);
    --text-decoration-skip-ink: var(--framer-text-decoration-skip-ink);
    --text-underline-offset: var(--framer-text-decoration-offset);
    line-height: var(--line-height);
}`),
      (Xg = `
[data-framer-component-type="Text"] div div span,
[data-framer-component-type="Text"] a div span,
[data-framer-component-type="Text"] span span span,
[data-framer-component-type="Text"] p span span,
[data-framer-component-type="Text"] h1 span span,
[data-framer-component-type="Text"] h2 span span,
[data-framer-component-type="Text"] h3 span span,
[data-framer-component-type="Text"] h4 span span,
[data-framer-component-type="Text"] h5 span span,
[data-framer-component-type="Text"] h6 span span,
[data-framer-component-type="Text"] a {
    --font-family: var(--framer-font-family);
    --font-style: var(--framer-font-style);
    --font-weight: var(--framer-font-weight);
    --text-color: var(--framer-text-color);
    --letter-spacing: var(--framer-letter-spacing);
    --font-size: var(--framer-font-size);
    --text-transform: var(--framer-text-transform);
    --text-decoration: var(--framer-text-decoration-style, solid) var(--framer-text-decoration, none) var(--framer-text-decoration-color, currentcolor) var(--framer-text-decoration-thickness, auto);
    --text-decoration-skip-ink: var(--framer-text-decoration-skip-ink);
    --text-underline-offset: var(--framer-text-decoration-offset);
    --line-height: var(--framer-line-height);
}`),
      (Zg = `
[data-framer-component-type="Text"] a,
[data-framer-component-type="Text"] a div span,
[data-framer-component-type="Text"] a span span span,
[data-framer-component-type="Text"] a p span span,
[data-framer-component-type="Text"] a h1 span span,
[data-framer-component-type="Text"] a h2 span span,
[data-framer-component-type="Text"] a h3 span span,
[data-framer-component-type="Text"] a h4 span span,
[data-framer-component-type="Text"] a h5 span span,
[data-framer-component-type="Text"] a h6 span span {
    --font-family: var(--framer-link-font-family, var(--framer-font-family));
    --font-style: var(--framer-link-font-style, var(--framer-font-style));
    --font-weight: var(--framer-link-font-weight, var(--framer-font-weight));
    --text-color: var(--framer-link-text-color, var(--framer-text-color));
    --font-size: var(--framer-link-font-size, var(--framer-font-size));
    --text-transform: var(--framer-link-text-transform, var(--framer-text-transform));
    --text-decoration: var(--framer-link-text-decoration-style, var(--framer-text-decoration-style, solid)) var(--framer-link-text-decoration, var(--framer-text-decoration, none)) var(--framer-link-text-decoration-color, var(--framer-text-decoration-color, currentcolor)) var(--framer-link-text-decoration-thickness, var(--framer-text-decoration-thickness, auto));
    --text-decoration-skip-ink: var(--framer-link-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink));
    --text-underline-offset: var(--framer-link-text-decoration-offset, var(--framer-text-decoration-offset));
}`),
      (Qg = `
[data-framer-component-type="Text"] a:hover,
[data-framer-component-type="Text"] a div span:hover,
[data-framer-component-type="Text"] a span span span:hover,
[data-framer-component-type="Text"] a p span span:hover,
[data-framer-component-type="Text"] a h1 span span:hover,
[data-framer-component-type="Text"] a h2 span span:hover,
[data-framer-component-type="Text"] a h3 span span:hover,
[data-framer-component-type="Text"] a h4 span span:hover,
[data-framer-component-type="Text"] a h5 span span:hover,
[data-framer-component-type="Text"] a h6 span span:hover {
    --font-family: var(--framer-link-hover-font-family, var(--framer-link-font-family, var(--framer-font-family)));
    --font-style: var(--framer-link-hover-font-style, var(--framer-link-font-style, var(--framer-font-style)));
    --font-weight: var(--framer-link-hover-font-weight, var(--framer-link-font-weight, var(--framer-font-weight)));
    --text-color: var(--framer-link-hover-text-color, var(--framer-link-text-color, var(--framer-text-color)));
    --font-size: var(--framer-link-hover-font-size, var(--framer-link-font-size, var(--framer-font-size)));
    --text-transform: var(--framer-link-hover-text-transform, var(--framer-link-text-transform, var(--framer-text-transform)));
    --text-decoration: var(--framer-link-hover-text-decoration-style, var(--framer-link-text-decoration-style, var(--framer-text-decoration-style, solid))) var(--framer-link-hover-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none))) var(--framer-link-hover-text-decoration-color, var(--framer-link-text-decoration-color, var(--framer-text-decoration-color, currentcolor))) var(--framer-link-hover-text-decoration-thickness, var(--framer-link-text-decoration-thickness, var(--framer-text-decoration-thickness, auto)));
    --text-decoration-skip-ink: var(--framer-link-hover-text-decoration-skip-ink, var(--framer-link-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink)));
    --text-underline-offset: var(--framer-link-hover-text-decoration-offset, var(--framer-link-text-decoration-offset, var(--framer-text-decoration-offset)));
}`),
      ($g = `
[data-framer-component-type="Text"].isCurrent a,
[data-framer-component-type="Text"].isCurrent a div span,
[data-framer-component-type="Text"].isCurrent a span span span,
[data-framer-component-type="Text"].isCurrent a p span span,
[data-framer-component-type="Text"].isCurrent a h1 span span,
[data-framer-component-type="Text"].isCurrent a h2 span span,
[data-framer-component-type="Text"].isCurrent a h3 span span,
[data-framer-component-type="Text"].isCurrent a h4 span span,
[data-framer-component-type="Text"].isCurrent a h5 span span,
[data-framer-component-type="Text"].isCurrent a h6 span span {
    --font-family: var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family)));
    --font-style: var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style)));
    --font-weight: var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight)));
    --text-color: var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color)));
    --font-size: var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size)));
    --text-transform: var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform)));
    --text-decoration: var(--framer-link-current-text-decoration-style, var(--framer-link-text-decoration-style, var(--framer-text-decoration-style, solid))) var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none))) var(--framer-link-current-text-decoration-color, var(--framer-link-text-decoration-color, var(--framer-text-decoration-color, currentcolor))) var(--framer-link-current-text-decoration-thickness, var(--framer-link-text-decoration-thickness, var(--framer-text-decoration-thickness, auto)));
    --text-decoration-skip-ink: var(--framer-link-current-text-decoration-skip-ink, var(--framer-link-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink)));
    --text-underline-offset: var(--framer-link-current-text-decoration-offset, var(--framer-link-text-decoration-offset, var(--framer-text-decoration-offset)));
}`),
      (e_ = [
        `[data-framer-component-type="Text"] { cursor: inherit; }`,
        `[data-framer-component-text-autosized] * { white-space: pre; }`,
        Kg,
        qg,
        Jg,
        Yg,
        Xg,
        Zg,
        Qg,
        $g,
      ]),
      (t_ = `
:not([data-framer-generated]) > [data-framer-stack-content-wrapper] > *,
:not([data-framer-generated]) > [data-framer-stack-content-wrapper] > [data-framer-component-type],
:not([data-framer-generated]) > [data-framer-stack-content-wrapper] > [data-framer-legacy-stack-gap-enabled] > *,
:not([data-framer-generated]) > [data-framer-stack-content-wrapper] > [data-framer-legacy-stack-gap-enabled] > [data-framer-component-type] {
    position: relative;
}`),
      (n_ = (() => [
        `[data-framer-stack-content-wrapper][data-framer-stack-gap-enabled="true"] {
        row-gap: var(--stack-native-row-gap);
        column-gap: var(--stack-native-column-gap);
    }`,
        `.${lg} [data-framer-stack-content-wrapper][data-framer-stack-gap-enabled="true"] {
        row-gap: unset;
        column-gap: unset;
    }`,
      ])()),
      (r_ = (() => `
.${lg} [data-framer-legacy-stack-gap-enabled="true"] > *, [data-framer-legacy-stack-gap-enabled="true"][data-framer-stack-flexbox-gap="false"] {
    margin-top: calc(var(--stack-gap-y) / 2);
    margin-bottom: calc(var(--stack-gap-y) / 2);
    margin-right: calc(var(--stack-gap-x) / 2);
    margin-left: calc(var(--stack-gap-x) / 2);
}
`)()),
      (i_ = (() => `
.${lg}
[data-framer-stack-direction-reverse="false"]
[data-framer-legacy-stack-gap-enabled="true"]
> *:first-child,
[data-framer-stack-direction-reverse="false"]
[data-framer-legacy-stack-gap-enabled="true"][data-framer-stack-flexbox-gap="false"]
> *:first-child,
.${lg}
[data-framer-stack-direction-reverse="true"]
[data-framer-legacy-stack-gap-enabled="true"]
> *:last-child,
[data-framer-stack-direction-reverse="true"]
[data-framer-legacy-stack-gap-enabled="true"][data-framer-stack-flexbox-gap="false"]
> *:last-child {
    margin-top: 0;
    margin-left: 0;
}`)()),
      (a_ = (() => `
.${lg}
[data-framer-stack-direction-reverse="false"]
[data-framer-legacy-stack-gap-enabled="true"]
> *:last-child,
[data-framer-stack-direction-reverse="false"]
[data-framer-legacy-stack-gap-enabled="true"][data-framer-stack-flexbox-gap="false"]
> *:last-child,
.${lg}
[data-framer-stack-direction-reverse="true"]
[data-framer-legacy-stack-gap-enabled="true"]
> *:first-child,
[data-framer-stack-direction-reverse="true"]
[data-framer-legacy-stack-gap-enabled="true"][data-framer-stack-flexbox-gap="false"]
> *:first-child {
    margin-right: 0;
    margin-bottom: 0;
}`)()),
      (o_ = (() => [t_, r_, ...n_, i_, a_])()),
      (s_ = [
        `
NavigationContainer
[data-framer-component-type="NavigationContainer"] > *,
[data-framer-component-type="NavigationContainer"] > [data-framer-component-type] {
    position: relative;
}`,
      ]),
      (c_ = [
        `[data-framer-component-type="Scroll"]::-webkit-scrollbar { display: none; }`,
        `[data-framer-component-type="ScrollContentWrapper"] > * { position: relative; }`,
      ]),
      (l_ = [
        `[data-framer-component-type="NativeScroll"] { -webkit-overflow-scrolling: touch; }`,
        `[data-framer-component-type="NativeScroll"] > * { position: relative; }`,
        `[data-framer-component-type="NativeScroll"].direction-both { overflow-x: auto; overflow-y: auto; }`,
        `[data-framer-component-type="NativeScroll"].direction-vertical { overflow-x: hidden; overflow-y: auto; }`,
        `[data-framer-component-type="NativeScroll"].direction-horizontal { overflow-x: auto; overflow-y: hidden; }`,
        `[data-framer-component-type="NativeScroll"].direction-vertical > * { width: 100% !important; }`,
        `[data-framer-component-type="NativeScroll"].direction-horizontal > * { height: 100% !important; }`,
        `[data-framer-component-type="NativeScroll"].scrollbar-hidden::-webkit-scrollbar { display: none; }`,
      ]),
      (u_ = [
        `[data-framer-component-type="DeviceComponent"].no-device > * { width: 100% !important; height: 100% !important; }`,
      ]),
      (d_ = [
        `[data-framer-component-type="PageContentWrapper"] > *, [data-framer-component-type="PageContentWrapper"] > [data-framer-component-type] { position: relative; }`,
      ]),
      (f_ = [
        `[data-is-present="false"], [data-is-present="false"] * { pointer-events: none !important; }`,
      ]),
      (p_ = [
        `[data-framer-cursor="pointer"] { cursor: pointer; }`,
        `[data-framer-cursor="grab"] { cursor: grab; }`,
        `[data-framer-cursor="grab"]:active { cursor: grabbing; }`,
      ]),
      (m_ = [
        `[data-framer-component-type="Frame"] *, [data-framer-component-type="Stack"] * { pointer-events: auto; }`,
        `[data-framer-generated] * { pointer-events: unset }`,
      ]),
      (h_ = [
        `[data-reset="button"] {
        border-width: 0;
        padding: 0;
        background: none;
}`,
      ]),
      (g_ = [
        `[data-hide-scrollbars="true"]::-webkit-scrollbar { width: 0px; height: 0px; }`,
        `[data-hide-scrollbars="true"]::-webkit-scrollbar-thumb { background: transparent; }`,
        `[data-hide-scrollbars="true"] { scrollbar-width: none; }`,
      ]),
      (__ = `--framer-will-change-override`),
      (v_ = `--framer-will-change-effect-override`),
      (y_ = `(background: -webkit-named-image(i))`),
      (b_ = `(grid-template-rows: subgrid)`),
      (x_ = (e) =>
        e
          ? [
              `body { ${__}: none; }`,
              `@supports ${y_} and (not ${b_}) { body { ${__}: transform; } }`,
            ]
          : [`body { ${__}: none; ${v_}: none; }`]),
      (S_ = (e) => (e ? m_ : [])),
      (C_ = [`.svgContainer svg { display: block; }`]),
      (w_ = `--overflow-clip-fallback`),
      (T_ = (() => [
        `@supports (not (overflow: clip)) {
        :root { ${w_}: hidden; }
    }`,
      ])()),
      (E_ = (e) => [
        ...x_(e),
        ...Gg,
        ...e_,
        ...Hg,
        ...Dg,
        ...o_,
        ...s_,
        ...c_,
        ...l_,
        ...d_,
        ...u_,
        ...f_,
        ...p_,
        ...S_(e),
        ...C_,
        ...h_,
        ...g_,
        ...T_,
      ]),
      (D_ = E_(!1)),
      (O_ = E_(!0)),
      (k_ = !1),
      (A_ = `optional`),
      (j_ = (e) => e),
      (M_ =
        /^(?:children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|[dkrxyz]|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y1|y2|yChannelSelector|zoomAndPan|for|class|autofocus|(?:[Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*)$/u),
      (N_ = Wi(
        (e) =>
          M_.test(e) ||
          (e.charCodeAt(0) === 111 &&
            e.charCodeAt(1) === 110 &&
            e.charCodeAt(2) < 91)
      )),
      (P_ = (e) => () => {
        nr(e);
      }),
      (F_ = () => () => {}),
      (I_ = {
        imagePlaceholderSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="126" height="126"><path id="a" d="M126 0v21.584L21.584 126H0v-17.585L108.415 0H126Zm0 108.414V126h-17.586L126 108.414Zm0-84v39.171L63.585 126H24.414L126 24.414Zm0 42v39.17L105.584 126h-39.17L126 66.414ZM105.586 0 0 105.586V66.415L66.415 0h39.171Zm-42 0L0 63.586V24.415L24.415 0h39.171Zm-42 0L0 21.586V0h21.586Z" fill="rgb(136, 136, 136, 0.2)" fill-rule="evenodd"/></svg>`,
        useImageSource(e) {
          return e.src ?? ``;
        },
        useImageElement(e, t, n) {
          let r = z_.useImageSource(e, t, n);
          return T(() => {
            let t = new Image();
            return (t.src = r), e.srcSet && (t.srcset = e.srcSet), t;
          }, [r, e.srcSet]);
        },
        canRenderOptimizedCanvasImage() {
          return !1;
        },
        isOnPageCanvas: !1,
      }),
      (L_ = !1),
      (R_ = {
        get(e, t, n) {
          return Reflect.has(e, t)
            ? Reflect.get(e, t, n)
            : [`getLogger`].includes(String(t))
            ? F_()
            : P_(
                L_
                  ? `${String(t)} is not available in this version of Framer.`
                  : `${String(
                      t
                    )} is only available inside of Framer. https://www.framer.com/`
              );
        },
      }),
      (z_ = new Proxy(I_, R_)),
      (B_ = d.createContext(void 0)),
      (B_.displayName = `LibraryFeaturesContext`),
      (V_ = (() => B_.Provider)()),
      (H_ = () => {
        let e = d.useContext(B_);
        return e ?? {};
      }),
      (U_ = {
        position: `absolute`,
        borderRadius: `inherit`,
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      }),
      (W_ = `src`),
      (G_ = {
        isImageObject: function (e) {
          return !e || typeof e == `string`
            ? !1
            : typeof e == `object` && W_ in e;
        },
      }),
      (K_ = b === void 0 ? void 0 : b),
      (q_ = () => typeof document == `object`),
      (J_ = () =>
        K_ &&
        /Chrome/u.test(K_.userAgent) &&
        /Google Inc/u.test(K_.vendor) &&
        !Q_()),
      (Y_ = () =>
        K_ &&
        /Safari/u.test(K_.userAgent) &&
        /Apple Computer/u.test(K_.vendor)),
      (X_ = () => K_ && /Firefox\/\d+\.\d+$/u.test(K_.userAgent)),
      (Z_ = () => K_ && /FramerX/u.test(K_.userAgent)),
      (Q_ = () => K_ && /Edg\//u.test(K_.userAgent)),
      ($_ = /iPhone|iPod|iPad/iu),
      (ev = /MacIntel/iu),
      (tv = () =>
        K_
          ? $_.test(K_.platform)
            ? !0
            : ev.test(K_.platform) && K_.maxTouchPoints && K_.maxTouchPoints > 2
          : !1),
      (nv = () => iv() === `desktop`),
      (rv = () => !1),
      (iv = () =>
        K_ && /tablet|iPad|Nexus 9/i.test(K_.userAgent)
          ? `tablet`
          : K_ && /mobi/iu.test(K_.userAgent)
          ? `phone`
          : `desktop`),
      (av = J_()),
      (ov = typeof document < `u` ? f : O),
      (sv = d.createContext(!1)),
      (cv = class {
        constructor() {
          F(this, `sharedResizeObserver`),
            F(this, `callbacks`, new WeakMap()),
            (this.sharedResizeObserver = new ResizeObserver(
              this.updateResizedElements.bind(this)
            ));
        }
        updateResizedElements(e) {
          for (let t of e) {
            let e = this.callbacks.get(t.target);
            e && e(t.contentRect);
          }
        }
        observeElementWithCallback(e, t) {
          this.sharedResizeObserver.observe(e), this.callbacks.set(e, t);
        }
        unobserve(e) {
          this.sharedResizeObserver.unobserve(e), this.callbacks.delete(e);
        }
      }),
      (lv = (() => (q_() ? new cv() : void 0))()),
      (uv = `data-framer-size-compatibility-wrapper`),
      (dv = `0.000001px`),
      (fv = (() => ` translateZ(${dv})`)()),
      (pv = (() => Z_() || Y_() || rv())()),
      (mv = (() => {
        class e extends n {
          constructor() {
            super(...arguments),
              F(this, `layerElement`, null),
              F(this, `setLayerElement`, (e) => {
                this.layerElement = e;
              });
          }
          static applyWillChange(e, t, n) {
            e.willChangeTransform && (n ? ya(t) : ba(t));
          }
          shouldComponentUpdate(e, t) {
            return e._needsMeasure || this.state !== t || !at(this.props, e);
          }
          componentDidUpdate(e) {
            j_(this.props).clip &&
              j_(this.props).radius === 0 &&
              j_(e).radius !== 0 &&
              Sa(this.layerElement, `overflow`, `hidden`, !1);
          }
        }
        return F(e, `defaultProps`, {}), e;
      })()),
      (hv = (e) => {
        let t = 0,
          n,
          r;
        if (e.length === 0) return t;
        for (n = 0; n < e.length; n++)
          (r = e.charCodeAt(n)), (t = (t << 5) - t + r), (t |= 0);
        return t;
      }),
      (gv = {
        hueRotate: (e, t) => J.toHslString(J.hueRotate(J(e), t)),
        setAlpha: (e, t) => J.toRgbString(J.alpha(J(e), t)),
        getAlpha: (e) => {
          let t = Or(e);
          return t ? t.a : 1;
        },
        multiplyAlpha: (e, t) => J.toRgbString(J.multiplyAlpha(J(e), t)),
        toHexValue: (e) => J.toHex(J(e)).toUpperCase(),
        toHex: (e) => J.toHexString(J(e)).toUpperCase(),
        toRgb: (e) => J.toRgb(J(e)),
        toRgbString: (e) => J.toRgbString(J(e)),
        toHSV: (e) => J.toHsv(J(e)),
        toHSL: (e) => J.toHsl(J(e)),
        toHslString: (e) => J.toHslString(J(e)),
        toHsvString: (e) => J.toHsvString(J(e)),
        hsvToHSLString: (e) => J.toHslString(J(gr(e.h, e.s, e.v, e.a))),
        hsvToHexValue: (e) => J.toHex(J(gr(e.h, e.s, e.v, e.a))).toUpperCase(),
        hsvToHex: (e) => J.toHexString(J(gr(e.h, e.s, e.v, e.a))).toUpperCase(),
        hsvToRgbString: (e) => J.toRgbString(J(gr(e.h, e.s, e.v, e.a))),
        hsvToString: (e) => gr(e.h, e.s, e.v),
        rgbaToString: (e) => J.toRgbString(J(e)),
        rgbToHexValue: (e) => J.toHex(J(e)),
        rgbToHexString: (e) => J.toHexString(J(e)),
        hslToString: (e) => J.toHslString(J(e)),
        hslToRgbString: (e) => J.toRgbString(J(e)),
        toColorPickerSquare: (e) =>
          J.toRgbString(J({ h: e, s: 1, l: 0.5, a: 1 })),
        isValid: (e) => J(e).isValid !== !1,
        equals: (e, t) =>
          J.isP3String(e) || J.isP3String(t)
            ? e === t
            : (typeof e == `string` && (e = J(e)),
              typeof t == `string` && (t = J(t)),
              J.equal(e, t)),
        toHexOrRgbaString: (e) => {
          let t = J(e);
          return t.a === 1 ? J.toHexString(t) : J.toRgbString(t);
        },
        toFormatString: (e) => (J.isP3String(e) ? e : J.toRgbString(J(e))),
      }),
      (_v = /var\(.+\)/u),
      (vv = new Map()),
      (yv = [`stops`]),
      (bv = [`start`, `end`]),
      (xv = [`angle`, `alpha`]),
      (Sv = {
        isLinearGradient: (e) =>
          B(e) && xv.every((t) => t in e) && (Aa(e) || ka(e)),
        hash: (e) => e.angle ^ Oa(e, e.alpha),
        toCSS: (e, t, n) => {
          let r = Da(e, e.alpha),
            i = t === void 0 ? e.angle : t,
            a = r.map((e) => `${n?.(e.value) ?? e.value} ${e.position * 100}%`);
          return `linear-gradient(${i}deg, ${a.join(`, `)})`;
        },
      }),
      (Cv = [
        `widthFactor`,
        `heightFactor`,
        `centerAnchorX`,
        `centerAnchorY`,
        `alpha`,
      ]),
      (wv = {
        isRadialGradient: (e) =>
          B(e) && Cv.every((t) => t in e) && (Aa(e) || ka(e)),
        hash: (e) =>
          e.centerAnchorX ^
          e.centerAnchorY ^
          e.widthFactor ^
          e.heightFactor ^
          Oa(e, e.alpha),
        toCSS: (e, t) => {
          let {
              alpha: n,
              widthFactor: r,
              heightFactor: i,
              centerAnchorX: a,
              centerAnchorY: o,
            } = e,
            s = Da(e, n),
            c = s.map((e, n) => {
              let r = s[n + 1],
                i =
                  e.position === 1 && r?.position === 1
                    ? e.position - 1e-4
                    : e.position;
              return `${t?.(e.value) ?? e.value} ${i * 100}%`;
            });
          return `radial-gradient(${r * 100}% ${i * 100}% at ${a * 100}% ${
            o * 100
          }%, ${c.join(`, `)})`;
        },
      }),
      (Tv = [
        `onClick`,
        `onDoubleClick`,
        `onMouse`,
        `onMouseDown`,
        `onMouseUp`,
        `onTapDown`,
        `onTap`,
        `onTapUp`,
        `onPointer`,
        `onPointerDown`,
        `onPointerUp`,
        `onTouch`,
        `onTouchDown`,
        `onTouchUp`,
      ]),
      (Ev = (() => new Set([...Tv, ...Tv.map((e) => `${e}Capture`)]))()),
      (Dv = `overflow`),
      (Ov = { x: 0, y: 0, width: 200, height: 200 }),
      (kv = new Set([
        `width`,
        `height`,
        `opacity`,
        `overflow`,
        `radius`,
        `background`,
        `color`,
        `x`,
        `y`,
        `z`,
        `rotate`,
        `rotateX`,
        `rotateY`,
        `rotateZ`,
        `scale`,
        `scaleX`,
        `scaleY`,
        `skew`,
        `skewX`,
        `skewY`,
        `originX`,
        `originY`,
        `originZ`,
      ])),
      (Av = s(function (e, t) {
        let { name: n, center: r, border: i, _border: a, __portal: o } = e,
          { props: s, children: c } = la(e),
          l = Va(s),
          u = da(e),
          d = Ia(e),
          f = S(null),
          p = t ?? f,
          m = {
            "data-framer-component-type": e.componentType ?? `Frame`,
            "data-framer-cursor": d,
            "data-framer-highlight": d === `pointer` ? !0 : void 0,
            "data-layoutid": u,
            "data-framer-offset-parent-id":
              j_(e)[`data-framer-offset-parent-id`],
          };
        !Ha(e) && n && (j_(m)[`data-framer-name`] = n);
        let [h, g] = Ba(s),
          _ = za(s),
          v = wi(_);
        r && !(g && !v && fi(_))
          ? ((l.transformTemplate ||= ua(r)), Object.assign(m, sa(r)))
          : (l.transformTemplate ||= void 0),
          _a(e, p);
        let b = na(e),
          C = w(sv),
          T = Ua(s, _, g, C),
          E = Si(
            D(y, {
              children: [
                b
                  ? x(Qi, {
                      alt: e.alt ?? ``,
                      image: b,
                      containerSize: g ?? void 0,
                      nodeId: e.id && ca(e.id),
                      layoutId: u,
                    })
                  : null,
                c,
                x(ea, { ...a, border: i, layoutId: u }),
              ],
            }),
            T
          ),
          O = aa(e.as),
          k = ra(b);
        return (
          e.fitImageDimension &&
            k &&
            ((h[e.fitImageDimension] = `auto`),
            (h.aspectRatio = k.width / k.height)),
          D(O, { ...m, ...l, layoutId: u, style: h, ref: p, children: [E, o] })
        );
      })),
      (jv = s(function (e, t) {
        let { visible: n = !0 } = e;
        return n ? x(Av, { ...e, ref: t }) : null;
      })),
      (Mv = `__LAYOUT_TREE_ROOT`),
      (Nv = d.createContext({
        schedulePromoteTree: () => {},
        scheduleProjectionDidUpdate: () => {},
        initLead: () => {},
      })),
      (Pv = class extends n {
        constructor() {
          super(...arguments),
            F(this, `shouldAnimate`, !1),
            F(this, `transition`),
            F(this, `lead`),
            F(this, `follow`),
            F(this, `scheduledPromotion`, !1),
            F(this, `scheduledDidUpdate`, !1),
            F(this, `scheduleProjectionDidUpdate`, () => {
              this.scheduledDidUpdate = !0;
            }),
            F(this, `schedulePromoteTree`, (e, t, n) => {
              (this.follow = this.lead),
                (this.shouldAnimate = n),
                (this.lead = e),
                (this.transition = t),
                (this.scheduledPromotion = !0);
            }),
            F(this, `initLead`, (e, t) => {
              (this.follow = this.lead),
                (this.lead = e),
                this.follow && t && (this.follow.layoutMaybeMutated = !0);
            }),
            F(this, `sharedLayoutContext`, {
              schedulePromoteTree: this.schedulePromoteTree,
              scheduleProjectionDidUpdate: this.scheduleProjectionDidUpdate,
              initLead: this.initLead,
            });
        }
        getSnapshotBeforeUpdate() {
          var e;
          if (!this.scheduledPromotion || !this.lead || !this.follow)
            return null;
          let t = (e = this.lead)?.layoutMaybeMutated && !this.shouldAnimate;
          return (
            this.lead.projectionNodes.forEach((e) => {
              var n;
              e?.promote({
                needsReset: t,
                transition: this.shouldAnimate ? this.transition : void 0,
                preserveFollowOpacity:
                  e.options.layoutId === Mv && !(n = this.follow)?.isExiting,
              });
            }),
            this.shouldAnimate
              ? (this.follow.layoutMaybeMutated = !0)
              : this.scheduleProjectionDidUpdate(),
            (this.lead.layoutMaybeMutated = !1),
            (this.transition = void 0),
            (this.scheduledPromotion = !1),
            null
          );
        }
        componentDidUpdate() {
          var e, t;
          if (!this.lead) return null;
          this.scheduledDidUpdate &&=
            ((t = (e = this.lead.rootProjectionNode)?.root) == null ||
              t.didUpdate(),
            !1);
        }
        render() {
          return x(Nv.Provider, {
            value: this.sharedLayoutContext,
            children: this.props.children,
          });
        }
      }),
      (Fv = { width: `100%`, height: `100%`, backgroundColor: `none` }),
      (Iv = class {
        constructor(e) {
          F(this, `sharedIntersectionObserver`),
            F(this, `callbacks`, new WeakMap()),
            (this.sharedIntersectionObserver = new IntersectionObserver(
              this.intersectionObserverCallback.bind(this),
              e
            ));
        }
        intersectionObserverCallback(e, t) {
          for (let n of e) {
            let e = this.callbacks.get(n.target);
            e && e(n, t);
          }
        }
        observeElementWithCallback(e, t) {
          this.sharedIntersectionObserver &&
            (this.sharedIntersectionObserver.observe(e),
            this.callbacks.set(e, t));
        }
        unobserve(e) {
          this.sharedIntersectionObserver &&
            (this.sharedIntersectionObserver.unobserve(e),
            this.callbacks.delete(e));
        }
        get root() {
          var e;
          return (e = this.sharedIntersectionObserver)?.root;
        }
      }),
      (Lv = M(new Map())),
      (Rv = typeof IntersectionObserver > `u` ? Up : Qa),
      (zv = Array(100)
        .fill(void 0)
        .map((e, t) => t * 0.01)),
      (Bv = d.createContext(null)),
      (Vv = class extends n {
        constructor() {
          super(...arguments),
            F(this, `layoutMaybeMutated`, !1),
            F(this, `projectionNodes`, new Map()),
            F(this, `rootProjectionNode`),
            F(this, `isExiting`),
            F(
              this,
              `shouldPreserveFollowOpacity`,
              (e) => e.options.layoutId === Mv && !this.props.isExiting
            ),
            F(this, `switchLayoutGroupContext`, {
              register: (e) => this.addChild(e),
              deregister: (e) => this.removeChild(e),
              transition:
                this.props.isLead !== void 0 && this.props.animatesLayout
                  ? this.props.transition
                  : void 0,
              shouldPreserveFollowOpacity: this.shouldPreserveFollowOpacity,
            });
        }
        componentDidMount() {
          this.props.isLead &&
            this.props.sharedLayoutContext.initLead(
              this,
              !!this.props.animatesLayout
            );
        }
        shouldComponentUpdate(e) {
          let {
            isLead: t,
            isExiting: n,
            isOverlayed: r,
            animatesLayout: i,
            transition: a,
            sharedLayoutContext: o,
          } = e;
          if (((this.isExiting = n), t === void 0)) return !0;
          let s = !this.props.isLead && t,
            c = this.props.isExiting && !n,
            l = s || c,
            u = !!this.props.isLead && !t,
            d = this.props.isOverlayed !== r;
          return (
            (l || u) && this.projectionNodes.forEach((e) => e?.willUpdate()),
            l
              ? o.schedulePromoteTree(this, a, !!i)
              : d && o.scheduleProjectionDidUpdate(),
            !!l && !!i
          );
        }
        addChild(e) {
          let t = e.options.layoutId;
          t && (this.projectionNodes.set(t, e), this.setRootChild(e));
        }
        setRootChild(e) {
          if (!this.rootProjectionNode) return (this.rootProjectionNode = e);
          this.rootProjectionNode =
            this.rootProjectionNode.depth < e.depth
              ? this.rootProjectionNode
              : e;
        }
        removeChild(e) {
          let t = e.options.layoutId;
          t && this.projectionNodes.delete(t);
        }
        render() {
          return x(oe.Provider, {
            value: this.switchLayoutGroupContext,
            children: this.props.children,
          });
        }
      }),
      (Hv = (e) => {
        let t = d.useContext(Nv);
        return x(Vv, { ...e, sharedLayoutContext: t });
      }),
      (Uv = d.createContext(!0)),
      (Wv = M({ register: () => {}, deregister: () => {} })),
      (Gv = ({ isCurrent: e, isOverlayed: t, children: n }) => {
        let r = ro(),
          i = E(
            (e) => {
              if (r.has(e)) {
                console.warn(`NavigationTargetWrapper: already registered`);
                return;
              }
              r.set(e, void 0);
            },
            [r]
          ),
          a = E(
            (e) => {
              let t = r.get(e);
              t?.(), r.delete(e);
            },
            [r]
          ),
          o = S({ register: i, deregister: a }).current;
        return (
          O(
            () => (
              r.forEach((n, i) => {
                let a = i(e, t);
                r.set(i, vt(a) ? a : void 0);
              }),
              () => {
                r.forEach((e, t) => {
                  e && (e(), r.set(t, void 0));
                });
              }
            ),
            [e, t, r]
          ),
          x(Wv.Provider, { value: o, children: n })
        );
      }),
      (Kv = d.memo(function ({
        isLayeredContainer: e,
        isCurrent: t,
        isPrevious: n,
        isOverlayed: r = !1,
        visible: i,
        transitionProps: a,
        children: o,
        backdropColor: s,
        onTapBackdrop: c,
        backfaceVisible: l,
        exitBackfaceVisible: u,
        animation: d,
        exitAnimation: f,
        instant: p,
        initialProps: m,
        exitProps: h,
        position: g = { top: 0, right: 0, bottom: 0, left: 0 },
        withMagicMotion: _,
        index: v,
        areMagicMotionLayersPresent: y,
        id: b,
        isInitial: C,
      }) {
        let T = Fe(),
          E = w(ae),
          { persistLayoutIdCache: k } = w(Jh),
          A = S({
            wasCurrent: void 0,
            wasPrevious: !1,
            wasBeingRemoved: !1,
            wasReset: !0,
            origins: oo({}, m, a),
          }),
          j = S(null),
          M = E !== null && !E.isPresent;
        t && A.current.wasCurrent === void 0 && k(),
          O(() => {
            if (e || !T) return;
            if (M) {
              A.current = { ...A.current, wasBeingRemoved: M };
              return;
            }
            let { wasPrevious: r, wasCurrent: i } = A.current,
              o = (t && !i) || (!M && A.current.wasBeingRemoved && t),
              s = n && !r,
              c = oo(A.current.origins, m, a),
              l = A.current.wasReset;
            o || s
              ? (T.stop(), T.start({ zIndex: v, ...c, ...a }), (l = !1))
              : l === !1 &&
                (T.stop(), T.set({ zIndex: v, ...qv, opacity: 0 }), (l = !0)),
              (A.current = {
                wasCurrent: !!t,
                wasPrevious: !!n,
                wasBeingRemoved: !1,
                wasReset: l,
                origins: c,
              });
          }, [t, n, M]);
        let ee = p ? { type: !1 } : `velocity` in d ? { ...d, velocity: 0 } : d,
          te = p ? { type: !1 } : f || d,
          ne = { ...g };
        (ne.left === void 0 || ne.right === void 0) && (ne.width = `auto`),
          (ne.top === void 0 || ne.bottom === void 0) && (ne.height = `auto`);
        let re = so(a) || so(m),
          ie = re && (e || t || n) ? 1200 : void 0,
          oe = { ...qv, ...A.current.origins },
          se = e
            ? {
                initial: { ...oe, ...m },
                animate: { ...oe, ...a, transition: ee },
                exit: { ...oe, ...h, transition: d },
              }
            : { animate: T, exit: { ...oe, ...h, transition: te } },
          ce = !(M || y === !1),
          N = !!t && ce,
          le = t && C;
        return D(jv, {
          "data-framer-component-type": `NavigationContainerWrapper`,
          width: `100%`,
          height: `100%`,
          style: {
            position: `absolute`,
            transformStyle: `flat`,
            backgroundColor: `transparent`,
            overflow: `hidden`,
            zIndex: e || M || (t && _) ? v : void 0,
            pointerEvents: void 0,
            visibility: i ? `visible` : `hidden`,
            perspective: ie,
          },
          children: [
            e &&
              x(jv, {
                width: `100%`,
                height: `100%`,
                "data-framer-component-type": `NavigationContainerBackdrop`,
                transition: d,
                initial: { opacity: p && i ? 1 : 0 },
                animate: { opacity: 1 },
                exit: { opacity: 0 },
                backgroundColor: s || `transparent`,
                onTap: M ? void 0 : c,
              }),
            x(jv, {
              ...ne,
              ...se,
              transition: {
                default: ee,
                originX: { type: !1 },
                originY: { type: !1 },
                originZ: { type: !1 },
              },
              backgroundColor: `transparent`,
              backfaceVisible: M ? u : l,
              "data-framer-component-type": `NavigationContainer`,
              "data-framer-is-current-navigation-target": !!t,
              style: {
                pointerEvents: void 0,
                opacity: le || e || (t && _) ? 1 : 0,
              },
              "data-is-present": ce ? void 0 : !1,
              ref: j,
              children: x(Bv.Provider, {
                value: j,
                children: x(Uv.Provider, {
                  value: N,
                  children: x(Gv, {
                    isCurrent: N,
                    isOverlayed: r,
                    children: x(Hv, {
                      isLead: t,
                      animatesLayout: !!_,
                      transition: ee,
                      isExiting: !ce,
                      isOverlayed: r,
                      id: b,
                      children: o,
                    }),
                  }),
                }),
              }),
            }),
          ],
        });
      },
      ao)),
      (qv = {
        x: 0,
        y: 0,
        z: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        rotateZ: 0,
        scale: 1,
        scaleX: 1,
        scaleY: 1,
        scaleZ: 1,
        skew: 0,
        skewX: 0,
        skewY: 0,
        originX: 0.5,
        originY: 0.5,
        originZ: 0,
        opacity: 1,
      }),
      (Jv = class {
        constructor() {
          F(this, `warning`, () => {
            nr(
              `The Navigator API is only available inside of Framer: https://www.framer.com/`
            );
          }),
            F(this, `goBack`, () => this.warning()),
            F(this, `instant`, () => this.warning()),
            F(this, `fade`, () => this.warning()),
            F(this, `push`, () => this.warning()),
            F(this, `modal`, () => this.warning()),
            F(this, `overlay`, () => this.warning()),
            F(this, `flip`, () => this.warning()),
            F(this, `customTransition`, () => this.warning()),
            F(this, `magicMotion`, () => this.warning());
        }
      }),
      (Yv = new Jv()),
      (Xv = M(Yv)),
      (Zv = {
        Fade: { exit: { opacity: 0 }, enter: { opacity: 0 } },
        PushLeft: { exit: { x: `-30%` }, enter: { x: `100%` } },
        PushRight: { exit: { x: `30%` }, enter: { x: `-100%` } },
        PushUp: { exit: { y: `-30%` }, enter: { y: `100%` } },
        PushDown: { exit: { y: `30%` }, enter: { y: `-100%` } },
        Instant: { animation: { type: !1 }, enter: { opacity: 0 } },
        Modal: {
          overCurrentContext: !0,
          goBackOnTapOutside: !0,
          position: { center: !0 },
          enter: { opacity: 0, scale: 1.2 },
        },
        OverlayLeft: {
          overCurrentContext: !0,
          goBackOnTapOutside: !0,
          position: { right: 0, top: 0, bottom: 0 },
          enter: { x: `100%` },
        },
        OverlayRight: {
          overCurrentContext: !0,
          goBackOnTapOutside: !0,
          position: { left: 0, top: 0, bottom: 0 },
          enter: { x: `-100%` },
        },
        OverlayUp: {
          overCurrentContext: !0,
          goBackOnTapOutside: !0,
          position: { bottom: 0, left: 0, right: 0 },
          enter: { y: `100%` },
        },
        OverlayDown: {
          overCurrentContext: !0,
          goBackOnTapOutside: !0,
          position: { top: 0, left: 0, right: 0 },
          enter: { y: `-100%` },
        },
        FlipLeft: {
          backfaceVisible: !1,
          exit: { rotateY: -180 },
          enter: { rotateY: 180 },
        },
        FlipRight: {
          backfaceVisible: !1,
          exit: { rotateY: 180 },
          enter: { rotateY: -180 },
        },
        FlipUp: {
          backfaceVisible: !1,
          exit: { rotateX: 180 },
          enter: { rotateX: -180 },
        },
        FlipDown: {
          backfaceVisible: !1,
          exit: { rotateX: -180 },
          enter: { rotateX: 180 },
        },
        MagicMotion: { withMagicMotion: !0 },
      }),
      (Qv = () => ({
        current: -1,
        previous: -1,
        currentOverlay: -1,
        previousOverlay: -1,
        visualIndex: 0,
        overlayItemId: 0,
        historyItemId: 0,
        history: [],
        overlayStack: [],
        containers: {},
        containerIndex: {},
        containerVisualIndex: {},
        containerIsRemoved: {},
        transitionForContainer: {},
        previousTransition: null,
      })),
      ($v = Rp(qv)),
      (ey = d.createContext(void 0)),
      (ty = d.createContext(void 0)),
      (ny = (() => {
        var e, t, r, i, a, o, s;
        return (
          (t = class extends n {
            constructor(t) {
              var n;
              super(t),
                de(this, r),
                de(this, e, null),
                F(this, `state`, Qv()),
                de(this, o, (e) => {
                  if (!this.props.enabled && this.state.history.length > 0)
                    return;
                  let t = fo(this.state, e);
                  if (!t) return;
                  let { skipLayoutAnimation: n } = this.props,
                    r = t.history[t.current],
                    i =
                      (e.type === `add` && e.transition.withMagicMotion) ||
                      (e.type === `forward` && r?.transition.withMagicMotion) ||
                      (e.type === `remove` && !!t.previousTransition),
                    a = () => {
                      var e;
                      this.setState(t),
                        r?.key &&
                          ((e = this.context) == null || e.call(this, r.key));
                    };
                  n && !i ? n(a) : a();
                }),
                F(this, `goBack`, () => {
                  var t;
                  if (!fe(this, r, a).call(this))
                    return (
                      pe(this, e, (t = globalThis.event)?.timeStamp || null),
                      this.state.currentOverlay === -1
                        ? P(this, o).call(this, { type: `remove` })
                        : P(this, o).call(this, { type: `removeOverlay` })
                    );
                });
              let i = this.props.children;
              if (!i || !ti(i) || !ei(i)) return;
              let s = { ...Zv.Instant },
                c =
                  (n = i.key)?.toString() ||
                  `stack-${this.state.historyItemId + 1}`,
                l = { type: `add`, key: c, transition: s, component: i },
                u = fo(this.state, l);
              u && (this.state = u);
            }
            componentDidMount() {
              var e;
              let t = this.state.history[this.state.current];
              t && ((e = this.context) == null || e.call(this, t.key));
            }
            UNSAFE_componentWillReceiveProps(e) {
              var t;
              let n = e.children;
              if (!ti(n) || !ei(n)) return;
              let i = (t = n.key)?.toString();
              i &&
                (this.state.history.length === 0
                  ? fe(this, r, s).call(this, n, Zv.Instant)
                  : P(this, o).call(this, {
                      type: `update`,
                      key: i,
                      component: n,
                    }));
            }
            componentWillUnmount() {
              var e, t;
              (t = (e = this.props).resetProjection) == null || t.call(e);
            }
            instant(e) {
              fe(this, r, s).call(this, e, Zv.Instant, void 0);
            }
            fade(e, t) {
              fe(this, r, s).call(this, e, Zv.Fade, t);
            }
            push(e, t) {
              fe(this, r, s).call(this, e, co(t), t);
            }
            modal(e, t) {
              fe(this, r, s).call(this, e, Zv.Modal, t);
            }
            overlay(e, t) {
              fe(this, r, s).call(this, e, lo(t), t);
            }
            flip(e, t) {
              fe(this, r, s).call(this, e, uo(t), t);
            }
            magicMotion(e, t) {
              fe(this, r, s).call(this, e, Zv.MagicMotion, t);
            }
            customTransition(e, t) {
              fe(this, r, s).call(this, e, t);
            }
            render() {
              var e, t, n, a, o;
              let s = fe(this, r, i).call(this, { overCurrentContext: !1 }),
                c = fe(this, r, i).call(this, { overCurrentContext: !0 }),
                l = Do(c),
                u = c.current > -1,
                d = this.state.history.length === 1,
                f = [];
              for (let [r, i] of Object.entries(this.state.containers)) {
                let c = this.state.containerIndex[r];
                V(c !== void 0, `Container's index must be registered`);
                let l = this.state.containerVisualIndex[r];
                V(l !== void 0, `Container's visual index must be registered`);
                let p = this.state.containerIsRemoved[r],
                  m = this.state.history[c],
                  h = this.state.transitionForContainer[r],
                  g = c === this.state.current,
                  _ = c === this.state.previous,
                  v = g ? !1 : p,
                  y =
                    (e = m?.transition)?.withMagicMotion ||
                    (g && !!this.state.previousTransition);
                f.push(
                  x(
                    Kv,
                    {
                      id: r,
                      index: l,
                      isInitial: d,
                      isCurrent: g,
                      isPrevious: _,
                      isOverlayed: u,
                      visible: g || _,
                      position: (t = m?.transition)?.position,
                      instant: Lo(c, s),
                      transitionProps: h,
                      animation: Io(c, s),
                      backfaceVisible: Po(c, s),
                      exitAnimation: (n = m?.transition)?.animation,
                      exitBackfaceVisible: (a = m?.transition)?.backfaceVisible,
                      exitProps: (o = m?.transition)?.enter,
                      withMagicMotion: y,
                      areMagicMotionLayersPresent: v ? !1 : void 0,
                      children: x(Wa, {
                        children: zo({
                          component: i,
                          transition: m?.transition,
                        }),
                      }),
                    },
                    r
                  )
                );
              }
              let p = this.state.overlayStack.map((e, t) =>
                x(
                  Kv,
                  {
                    isLayeredContainer: !0,
                    isCurrent: t === this.state.currentOverlay,
                    position: e.transition.position,
                    initialProps: No(t, c),
                    transitionProps: Fo(t, c),
                    instant: Lo(t, c, !0),
                    animation: Io(t, c),
                    exitProps: e.transition.enter,
                    visible: Ro(t, c),
                    backdropColor: jo(e.transition),
                    backfaceVisible: Mo(t, c),
                    onTapBackdrop: Bo(e.transition, this.goBack),
                    index: this.state.current + 1 + t,
                    children: zo({
                      component: e.component,
                      transition: e.transition,
                    }),
                  },
                  e.key
                )
              );
              return x(jv, {
                "data-framer-component-type": `NavigationRoot`,
                top: 0,
                left: 0,
                width: `100%`,
                height: `100%`,
                position: `relative`,
                style: {
                  overflow: `hidden`,
                  backgroundColor: `unset`,
                  pointerEvents: void 0,
                  ...this.props.style,
                },
                children: x(Xv.Provider, {
                  value: this,
                  children: D(ty.Provider, {
                    value: d,
                    children: [
                      x(Kv, {
                        isLayeredContainer: !0,
                        position: void 0,
                        initialProps: {},
                        instant: !1,
                        transitionProps: Oo(l),
                        animation: ko(l),
                        backfaceVisible: Ao(l),
                        visible: !0,
                        backdropColor: void 0,
                        onTapBackdrop: void 0,
                        index: 0,
                        children: x(qr, {
                          children: x(Pv, {
                            children: x(ee, {
                              presenceAffectsLayout: !1,
                              children: f,
                            }),
                          }),
                        }),
                      }),
                      x(ee, { children: p }),
                    ],
                  }),
                }),
              });
            }
          }),
          (e = new WeakMap()),
          (r = new WeakSet()),
          (i = function (e) {
            let {
              current: t,
              previous: n,
              currentOverlay: r,
              previousOverlay: i,
            } = this.state;
            return e.overCurrentContext
              ? { current: r, previous: i, history: this.state.overlayStack }
              : { current: t, previous: n, history: this.state.history };
          }),
          (a = function () {
            return globalThis.event
              ? P(this, e) === globalThis.event.timeStamp
              : !1;
          }),
          (o = new WeakMap()),
          (s = function (t, n, i) {
            var s, c;
            if (
              fe(this, r, a).call(this) ||
              (pe(this, e, (s = globalThis.event)?.timeStamp || null),
              !t || !ti(t) || !ei(t))
            )
              return;
            let l = { ...n, ...i },
              u = !!l.overCurrentContext;
            if (u)
              return P(this, o).call(this, {
                type: `addOverlay`,
                transition: l,
                component: t,
              });
            let d =
              (c = t.key)?.toString() ||
              `stack-${this.state.historyItemId + 1}`;
            P(this, o).call(this, {
              type: `add`,
              key: d,
              transition: l,
              component: t,
            });
          }),
          F(t, `defaultProps`, { enabled: !0 }),
          F(t, `contextType`, ey),
          t
        );
      })()),
      (ry = { stiffness: 500, damping: 50, restDelta: 1, type: `spring` }),
      (iy = he(Fp(), 1)),
      (ay = he(Fp(), 1)),
      (oy = he(Fp(), 1)),
      (sy = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
      (cy = Symbol(`private`)),
      (ly = (() => {
        function e(e = {}, t = !1, n = !0) {
          let r = {
              [cy]: {
                makeAnimatables: t,
                observeAnimatables: n,
                observers: new xh(),
                reset() {
                  for (let t in i)
                    if (sy(i, t)) {
                      let n = sy(e, t) ? j_(e)[t] : void 0;
                      n === void 0 ? delete i[t] : (i[t] = n);
                    }
                },
                transactions: new Set(),
              },
            },
            i = new Proxy(r, dy);
          return Object.assign(i, e), i;
        }
        return (
          (e.resetObject = (e) => e[cy].reset()),
          (e.addObserver = (e, t) => e[cy].observers.add(t)),
          e
        );
      })()),
      (uy = class {
        constructor() {
          F(this, `set`, (e, t, n, r) => {
            if (t === cy) return !1;
            let i = e[cy],
              a,
              o;
            if (
              (ir(n) ? ((a = n), (o = a.get())) : (o = n),
              i.makeAnimatables &&
                typeof n != `function` &&
                typeof n != `object` &&
                !a &&
                (a = Sh(n)),
              i.observeAnimatables && a)
            ) {
              let e = i.transactions;
              a.onUpdate({
                update: (t, n) => {
                  n && e.add(n), i.observers.notify({ value: r }, n);
                },
                finish: (t) => {
                  e.delete(t) && i.observers.finishTransaction(t);
                },
              });
            }
            let s = !1,
              c = !0,
              l = j_(e)[t];
            if (l !== void 0) {
              ir(l)
                ? ((c = l.get() !== o), l.set(o))
                : ((c = l !== o), (j_(e)[t] = o));
              let n = typeof o == `object` && !!o;
              (Array.isArray(o) || n) && (c = !0), (s = !0);
            } else a && (n = a), (s = Reflect.set(e, t, n));
            return c && i.observers.notify({ value: r }), s;
          }),
            F(this, `get`, (e, t, n) => {
              if (t === cy) return j_(e)[t];
              let r = Reflect.get(e, t, n);
              return typeof r == `function` ? r.bind(n) : r;
            });
        }
        deleteProperty(e, t) {
          let n = Reflect.deleteProperty(e, t);
          return e[cy].observers.notify({ value: e }), n;
        }
        ownKeys(e) {
          let t = Reflect.ownKeys(e),
            n = t.indexOf(cy);
          return n !== -1 && t.splice(n, 1), t;
        }
        getOwnPropertyDescriptor(e, t) {
          if (t !== cy) return Reflect.getOwnPropertyDescriptor(e, t);
        }
      }),
      (dy = new uy()),
      (fy = `opacity`),
      (py = (() => {
        function e(t = {}) {
          let n = ly(t, !1, !1);
          return e.addData(n), n;
        }
        return (
          (e._stores = []),
          (e.addData = (t) => {
            e._stores.push(t);
          }),
          (e.reset = () => {
            e._stores.forEach((e) => ly.resetObject(e));
          }),
          (e.addObserver = (e, t) => ly.addObserver(e, t)),
          e
        );
      })()),
      (my = py),
      (hy = { update: 0 }),
      (gy = d.createContext({ update: NaN })),
      (_y = class extends n {
        constructor() {
          super(...arguments),
            F(this, `observers`, []),
            F(this, `state`, hy),
            F(this, `taskAdded`, !1),
            F(this, `frameTask`, () => {
              this.setState({ update: this.state.update + 1 }),
                (this.taskAdded = !1);
            }),
            F(this, `observer`, () => {
              this.taskAdded ||
                ((this.taskAdded = !0), Gh.addFrameTask(this.frameTask));
            });
        }
        componentWillUnmount() {
          this.observers.map((e) => e()), my.reset();
        }
        render() {
          let { children: e } = this.props;
          return (
            this.observers.map((e) => e()),
            (this.observers = []),
            my._stores.forEach((e) => {
              let t = my.addObserver(e, this.observer);
              this.observers.push(t);
            }),
            x(gy.Provider, { value: { ...this.state }, children: e })
          );
        }
      }),
      (vy = he(Fp(), 1)),
      (yy = `__framer__`),
      (by = (() => yy.length)()),
      (xy = d.createContext(void 0)),
      (Sy = d.createContext(void 0)),
      (Cy = `style[data-framer-css-ssr-minified]`),
      (wy = (() => {
        var e;
        if (!q_()) return new Set();
        let t = (e = document.querySelector(Cy))?.getAttribute(
          `data-framer-components`
        );
        return t ? new Set(t.split(` `)) : new Set();
      })()),
      (Ty = `data-framer-css-ssr`),
      (Ey = (e, t, n) =>
        d.forwardRef((r, i) => {
          let { sheet: a, cache: o } = d.useContext(Sy) ?? {},
            s = n;
          if (!q_()) {
            vt(t) && (t = t(Y.current()));
            let n = Array.isArray(t)
              ? t.join(`
`)
              : t;
            return D(y, {
              children: [
                x(`style`, {
                  [Ty]: !0,
                  "data-framer-component": s,
                  dangerouslySetInnerHTML: { __html: n },
                }),
                x(e, { ...r, ref: i }),
              ],
            });
          }
          return (
            p(() => {
              if (s && wy.has(s)) return;
              let e = vt(t)
                ? t(Y.current())
                : Array.isArray(t)
                ? t
                : t.split(`
`);
              e.forEach((e) => e && Mi(e, a, o));
            }, []),
            x(e, { ...r, ref: i })
          );
        })),
      (Dy = d.createContext(void 0)),
      (Oy = `ssr-variant`),
      (ky = () => () => {}),
      (Ay = () => !0),
      (jy = () => !1),
      (My = d.forwardRef(function (e, t) {
        let n = es(t),
          r = d.useContext(Dy),
          i = d.useSyncExternalStore(ky, jy, Ay),
          a = Xr(() => (i ? (q_() ? 1 : 2) : 0)),
          o = d.useContext(xy);
        return Ga(() => {
          let { breakpoint: t, overrides: i, children: s, ...c } = e;
          if (!o)
            return (
              console.warn(
                `PropertyOverrides is missing GeneratedComponentContext`
              ),
              n(s, c)
            );
          let { primaryVariantId: l, variantClassNames: u } = o,
            d = r?.primaryVariantId === l ? r?.variants : void 0;
          switch (a) {
            case 0:
              return n(s, us(t, c, i));
            case 1:
              return rs(i, s, c, u, l, d, n, t);
            case 2:
              return rs(i, s, c, u, l, d, $o, void 0);
            default:
              H(a);
          }
        }, [o, r, n, e]);
      })),
      (Ny = (() =>
        Ey(My, `.${Oy} { display: contents }`, `PropertyOverrides`))()),
      (Py = `default`),
      (Fy = new Set([Py])),
      (Ly = class {
        constructor() {
          F(this, `entries`, new Map()), de(this, Iy, {});
        }
        set(e, t, n, r) {
          switch (t) {
            case `transformTemplate`:
              V(
                typeof n == `string`,
                `transformTemplate must be a string, received: ${n}`
              ),
                this.setHash(e, r, { transformTemplate: n, legacy: !0 });
              break;
            case `initial`:
            case `animate`:
              V(
                typeof n == `object`,
                `${t} must be a valid object, received: ${n}`
              ),
                this.setHash(e, r, { [t]: n, legacy: !0 });
              break;
            default:
              break;
          }
        }
        setHash(e, t = Py, n) {
          let r = this.entries.get(e) ?? {},
            i = r[t] ?? {};
          (r[t] = n === null ? null : { ...i, ...n }), this.entries.set(e, r);
        }
        variantHash(e, t) {
          if (e === t?.primaryVariantId) return Py;
          let n = P(this, Iy)[e];
          if (n) return n;
          let r = t?.variantClassNames[e];
          return r ? (P(this, Iy)[e] = os(r)) : Py;
        }
        setAll(e, t = Fy, n, r) {
          var i;
          if (n === null) {
            for (let n of t) this.setHash(e, this.variantHash(n, r), null);
            return;
          }
          let a = vt(n.transformTemplate)
              ? (i = n.transformTemplate)?.call(n, {}, zy)
              : void 0,
            o = n.__framer__presenceInitial ?? n.initial,
            s = n.__framer__presenceAnimate ?? n.animate,
            c = {
              initial: B(o) ? o : void 0,
              animate: B(s) ? s : void 0,
              transformTemplate: R(a) ? a : void 0,
            };
          for (let n of t) this.setHash(e, this.variantHash(n, r), c);
        }
        clear() {
          this.entries.clear();
        }
        toObject() {
          return Object.fromEntries(this.entries);
        }
      }),
      (Iy = new WeakMap()),
      (Ry = new Ly()),
      (zy = `__Appear_Animation_Transform__`),
      (By = `data-framer-appear-id`),
      (Vy = `data-framer-appear-animation`),
      (Hy = (e) => {
        let t = Hi();
        if (t)
          return {
            animate: fs(e.animate) ? e.animate : void 0,
            initial: fs(e.initial) ? e.initial : void 0,
            exit: void 0,
          };
      }),
      (Uy = [
        `opacity`,
        `x`,
        `y`,
        `scale`,
        `rotate`,
        `rotateX`,
        `rotateY`,
        `skewX`,
        `skewY`,
        `transformPerspective`,
      ]),
      (Wy = (e) => ({
        x: De(e?.x ?? 0),
        y: De(e?.y ?? 0),
        opacity: De(e?.opacity ?? 1),
        scale: De(e?.scale ?? 1),
        rotate: De(e?.rotate ?? 0),
        rotateX: De(e?.rotateX ?? 0),
        rotateY: De(e?.rotateY ?? 0),
        skewX: De(e?.skewX ?? 0),
        skewY: De(e?.skewY ?? 0),
        transformPerspective: De(e?.transformPerspective ?? 0),
      })),
      (Gy = {
        x: 0,
        y: 0,
        scale: 1,
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        skewX: 0,
        skewY: 0,
        transformPerspective: 0,
      }),
      (Ky = { willChange: `transform` }),
      Object.freeze(Ky),
      (qy = {}),
      Object.freeze(qy),
      (Jy = new Set([
        `loopEffectEnabled`,
        `loopTransition`,
        `loop`,
        `loopRepeatType`,
        `loopRepeatDelay`,
        `loopPauseOffscreen`,
      ])),
      (Yy = () => {
        let e = S();
        return (
          O(
            () => () => {
              clearTimeout(e.current);
            },
            []
          ),
          async (t) =>
            new Promise((n) => {
              e.current = setTimeout(() => {
                n(!0);
              }, t * 1e3);
            })
        );
      }),
      (Xy = new Set([
        `speed`,
        `adjustPosition`,
        `offset`,
        `parallaxTransformEnabled`,
      ])),
      (Zy = new Set([`presenceInitial`, `presenceAnimate`, `presenceExit`])),
      (Qy = 1),
      ($y = 4),
      (eb = new Set([
        `threshold`,
        `animateOnce`,
        `opacity`,
        `targetOpacity`,
        `x`,
        `y`,
        `scale`,
        `transition`,
        `rotate`,
        `rotateX`,
        `rotateY`,
        `perspective`,
        `enter`,
        `exit`,
        `animate`,
        `styleAppearEffectEnabled`,
        `targets`,
        `scrollDirection`,
      ])),
      (tb = [`animate`, `animate`]),
      (nb = { inputRange: [], outputRange: [] }),
      (rb = new Set([
        `transformViewportThreshold`,
        `styleTransformEffectEnabled`,
        `transformTargets`,
        `spring`,
        `transformTrigger`,
      ])),
      (ib = (e, t) => {
        var n;
        let r = (n = e?.[0])?.target;
        return t ? { opacity: r?.opacity ?? 1 } : r;
      }),
      (ab = () => ({
        opacity: [],
        x: [],
        y: [],
        scale: [],
        rotate: [],
        rotateX: [],
        rotateY: [],
        skewX: [],
        skewY: [],
        transformPerspective: [],
      })),
      (ob = [0, 1]),
      (sb = {
        parallax: Xy,
        styleAppear: eb,
        styleTransform: rb,
        loop: Jy,
        presence: Zy,
      }),
      (cb = Rp(sb)),
      (lb = (e) => e.reduce((e, t) => (e += t), 0)),
      (ub = (e) => e.reduce((e, t) => (e *= t), 1)),
      (db = `current`),
      (fb = (e) =>
        d.forwardRef((t, n) => {
          var r;
          if (t.__withFX)
            return x(e, {
              ...t,
              animate: void 0,
              initial: void 0,
              exit: void 0,
              ref: n,
            });
          let i = Hy(t);
          if (i) return x(e, { ...t, ...i, ref: n });
          let {
              parallax: a = {},
              styleAppear: o = {},
              styleTransform: s = {},
              presence: c = {},
              loop: l = {},
              forwardedProps: u,
              targetOpacityValue: f,
              withPerspective: p,
              inSmartComponent: m = !1,
            } = Ps(t),
            h = Ya(n),
            { values: g, style: _ } = bs(c, h, m, t.style, t[Oe]),
            { values: v, style: y } = _s(a, h, (r = t.style)?.visibility),
            { values: b, style: S } = Ms(s, h),
            { values: C, style: w } = Os(o, h),
            { values: T, style: E } = hs(l, h),
            D = d.useMemo(() => {
              let e = new ie(f ?? 1);
              return {
                scale: [C.scale, T.scale, g.scale, b.scale],
                opacity: [C.opacity, T.opacity, g.opacity, e, b.opacity],
                x: [C.x, T.x, g.x, b.x],
                y: [C.y, T.y, v.y, g.y, b.y],
                rotate: [C.rotate, T.rotate, g.rotate, b.rotate],
                rotateX: [C.rotateX, T.rotateX, g.rotateX, b.rotateX],
                rotateY: [C.rotateY, T.rotateY, g.rotateY, b.rotateY],
                skewX: [C.skewX, T.skewX, g.skewX, b.skewX],
                skewY: [C.skewY, T.skewY, g.skewY, b.skewY],
                transformPerspective: [
                  b.transformPerspective,
                  C.transformPerspective,
                ],
              };
            }, [f, b, v, C, T, g]);
          Is(t.style, D);
          let O = We(D.scale, ub),
            k = We(D.opacity, ub),
            A = We(D.x, lb),
            j = We(D.y, lb),
            M = We(D.rotate, lb),
            ee = We(D.rotateX, lb),
            te = We(D.rotateY, lb),
            ne = We(D.skewX, lb),
            re = We(D.skewY, lb),
            ae = We(D.transformPerspective, lb),
            { drag: oe, dragConstraints: se } = u;
          pa(oe && Fs(se) ? se : void 0);
          let ce = {
            opacity: k,
            scale: O,
            x: A,
            y: j,
            rotate: M,
            rotateX: ee,
            rotateY: te,
            skewX: ne,
            skewY: re,
          };
          xt(p) && (ce.transformPerspective = ae);
          let N = Ls(t.animate) ? t.animate : void 0,
            le = Ls(t.initial) ? t.initial : void 0,
            ue = Ls(t.exit) ? t.exit : void 0,
            de =
              m && !c.presenceInitial
                ? { initial: le, animate: N, exit: ue }
                : {};
          return x(e, {
            ...u,
            ...de,
            __withFX: !0,
            style: { ...t.style, ...y, ...S, ...E, ...ce, ...w, ..._ },
            values: g,
            ref: h,
          });
        })),
      (pb = d.createContext({})),
      (mb = d.forwardRef(function (
        { width: e, height: t, y: n, children: r, ...i },
        a
      ) {
        let o = d.useMemo(() => ({ width: e, height: t, y: n }), [e, t, n]),
          s = es(a);
        return x(pb.Provider, { value: o, children: s(r, i) });
      })),
      (hb = (e) =>
        d.forwardRef((t, n) => {
          let r = da(t);
          return x(e, {
            layoutId: r,
            ...t,
            layoutIdKey: void 0,
            duplicatedFrom: void 0,
            ref: n,
          });
        })),
      (gb = !1),
      (_b = class extends n {
        constructor() {
          super(...arguments), F(this, `state`, { error: void 0 });
        }
        static getDerivedStateFromError(e) {
          return { error: e };
        }
        componentDidCatch(e, t) {
          if (!zs(e)) return;
          let n = t?.componentStack;
          console.error(
            `Caught an error in SynchronousSuspenseErrorBoundary:

`,
            e,
            `

Component stack:
`,
            n,
            `

This error indicates a state update wasn’t wrapped with startTransition. Some of the UI might flash as a result. If you are the author of this website, check recently added custom code, and if the issue persists, report it to the Framer team via https://www.framer.com/contact/.`
          );
          let r =
            e instanceof Error && typeof e.stack == `string` ? e.stack : void 0;
          Pt(`published_site_load_recoverable_error`, {
            message: String(e),
            stack: r,
            componentStack: r ? void 0 : n,
          });
        }
        render() {
          let e = this.state.error;
          if (e === void 0) return this.props.children;
          if (!zs(e)) throw e;
          return (gb = !0), this.props.children;
        }
      }),
      (vb = (() => (k === void 0 ? null : new Promise(() => {})))()),
      (yb = x(Bs, {})),
      (bb = M(!1)),
      (bb.displayName = `DisableSuspenseSuspenseThatPreservesDomContext`),
      (xb = x(Hs, {})),
      (Sb = class extends n {
        constructor() {
          super(...arguments), F(this, `state`, { hasError: !1 });
        }
        static getDerivedStateFromError() {
          return { hasError: !0 };
        }
        componentDidCatch(e, t) {
          Ws(this.props.getErrorMessage(), t?.componentStack), Us(e, t);
        }
        render() {
          let { children: e, fallback: t = xb } = this.props,
            { hasError: n } = this.state;
          return n ? t : e;
        }
      }),
      (Cb = class extends n {
        constructor() {
          super(...arguments), F(this, `state`, { hasError: !1 });
        }
        componentDidCatch(e, t) {
          let n = t?.componentStack;
          console.error(
            `Error in component (see previous log). This component has been hidden. Please check any custom code or code overrides to fix.`,
            n
          ),
            this.setState({ hasError: !0 }),
            Us(e, t);
        }
        render() {
          let { children: e } = this.props,
            { hasError: t } = this.state;
          return t ? null : e;
        }
      }),
      (wb = (() => d.createContext(void 0))()),
      (Tb = `code-crash:`),
      (Eb = d.forwardRef(
        (
          {
            children: e,
            layoutId: t,
            as: n,
            scopeId: r,
            nodeId: i,
            isAuthoredByUser: a,
            isModuleExternal: o,
            inComponentSlot: s,
            ...c
          },
          l
        ) => {
          let u = Xr(() => (t ? `${t}-container` : void 0)),
            f = aa(n),
            p = d.Children.map(e, (e) =>
              d.isValidElement(e) ? d.cloneElement(e, { layoutId: t }) : e
            ),
            m = ic(p, r, i, a, o, s);
          return x(f, {
            layoutId: u,
            ...c,
            ref: l,
            children: x(sv.Provider, {
              value: !0,
              children: x(Nm.Provider, {
                value: i ?? null,
                children: x(Yr, {
                  enabled: !1,
                  children: x(te, { id: t ?? ``, inherit: `id`, children: m }),
                }),
              }),
            }),
          });
        }
      )),
      (Db = hb(Eb)),
      (Ob = d.forwardRef((e, t) => {
        let {
            as: n,
            children: r,
            scopeId: i,
            nodeId: a,
            isAuthoredByUser: o,
            rendersWithMotion: s,
            isModuleExternal: c,
            inComponentSlot: l,
            ...u
          } = e,
          d = ic(r, i, a, o, c, l),
          f = e.as ?? `div`;
        if (e.rendersWithMotion) {
          let n = aa(f);
          return x(Nm.Provider, {
            value: a ?? null,
            children: x(n, { ...u, ref: t, style: e.style, children: d }),
          });
        } else {
          let n = f,
            { layoutId: r, layoutDependency: i, ...o } = u;
          return x(Nm.Provider, {
            value: a ?? null,
            children: x(n, { ...o, ref: t, style: e.style, children: d }),
          });
        }
      })),
      (kb = M({
        onRegisterCursors: () => () => {},
        registerCursors: () => {},
      })),
      (Ab = `framer-cursor-none`),
      (jb = `framer-pointer-events-none`),
      (Mb = o(function ({ children: e }) {
        let t = Xr(() => {
            let e = new Set(),
              t = {},
              n = new Map();
            return {
              onRegisterCursors: (n) => (n(t), e.add(n), () => e.delete(n)),
              registerCursors: (r, i) => {
                n.set(i, Object.keys(r)), (t = ac(n, t, r));
                for (let n of e) n(t);
                return () => {
                  n.delete(i);
                };
              },
            };
          }),
          n = Be();
        return D(kb.Provider, { value: t, children: [e, !n && x(Ib, {})] });
      })),
      (Nb = (() =>
        Ey(
          Mb,
          [
            `.${Ab}, .${Ab} * { cursor: none !important; }`,
            `.${jb}, .${jb} * { pointer-events: none !important; }`,
          ],
          `framer-lib-cursors-host`
        ))()),
      (Pb = (() => ({
        position: `fixed`,
        top: 0,
        left: 0,
        zIndex: 13,
        pointerEvents: `none`,
      }))()),
      (Fb = `data-framer-portal-id`),
      (Ib = o(function () {
        let { onRegisterCursors: e } = w(kb),
          [t, n] = j(!1),
          r = Re(0),
          i = Re(0),
          o = Re(0),
          s = S(null),
          l = S({ cursors: {}, cursorHash: void 0 }),
          u = fa();
        f(() => {
          let e = q.matchMedia(`(any-hover: none)`);
          function t(e) {
            e.matches ? c(() => n(!1)) : n(!0);
          }
          return (
            e.addEventListener(`change`, t),
            e.matches || n(!0),
            () => {
              e.removeEventListener(`change`, t);
            }
          );
        }, []),
          O(() => {
            if (!t) return;
            let e = 0,
              n = 0;
            function a() {
              r.set(e), i.set(n), ge(o, 1, { type: `tween`, duration: 0.2 });
            }
            let c = () => {
              if (uc(l.current.cursors)) return;
              let t = lc(e, n);
              t !== l.current.cursorHash &&
                ((l.current.cursorHash = t), ye.update(() => u()));
            };
            function d(t) {
              if (t.pointerType === `touch`) {
                ve(c);
                return;
              }
              ye.read(c, !0), (e = t.clientX), (n = t.clientY), ye.update(a);
            }
            function f(e) {
              if (e.target === s.current || !s.current) return;
              let t = new PointerEvent(e.type, {
                bubbles: !0,
                cancelable: e.cancelable,
                pointerType: e.pointerType,
                pointerId: e.pointerId,
                composed: e.composed,
                isPrimary: e.isPrimary,
                buttons: e.buttons,
                button: e.button,
              });
              ye.update(() => {
                var e;
                (e = s.current) == null || e.dispatchEvent(t);
              });
            }
            return (
              q.addEventListener(`pointermove`, d),
              document.addEventListener(`pointerdown`, f),
              document.addEventListener(`pointerup`, f),
              ye.read(c, !0),
              () => {
                q.removeEventListener(`pointermove`, d),
                  document.removeEventListener(`pointerdown`, f),
                  document.removeEventListener(`pointerup`, f),
                  ve(c);
              }
            );
          }, [o, r, i, u, t]),
          O(() => {
            if (!t) return;
            function e() {
              ge(o, 0, { type: `tween`, duration: 0.2 });
            }
            return (
              document.addEventListener(`mouseleave`, e),
              q.addEventListener(`blur`, e),
              () => {
                document.removeEventListener(`mouseleave`, e),
                  q.removeEventListener(`blur`, e);
              }
            );
          }, [o, t]),
          f(() => {
            function t(e) {
              (l.current.cursors = e),
                (l.current.cursorHash = uc(e) ? null : lc(r.get(), i.get())),
                u();
            }
            let n = e(t);
            return () => {
              n(), document.body.classList.toggle(Ab, !1);
            };
          }, [r, i, e, u]);
        let { cursors: d, cursorHash: p } = l.current,
          m = p ? d[p] : null,
          h = oc(m);
        f(() => {
          t && document.body.classList.toggle(Ab, h);
        }, [h, t]);
        let g = m?.component,
          _ = m?.transition ?? { duration: 0 },
          v = Ue(r, _),
          y = Ue(i, _),
          b = We(() => {
            var e;
            return v.get() + ((e = m?.offset)?.x ?? 0);
          }),
          C = We(() => {
            var e;
            return y.get() + ((e = m?.offset)?.y ?? 0);
          }),
          T = m?.alignment,
          D = m?.placement,
          k = E((e, t) => `translate(${cc(D, T)}) ${t}`, [T, D]);
        return !t || !m || !g
          ? null
          : x(a, {
              children: x(g, {
                transformTemplate: k,
                style: { ...Pb, x: b, y: C, opacity: o },
                globalTapTarget: !0,
                variant: m?.variant,
                ref: s,
                className: jb,
              }),
            });
      })),
      (Lb = class extends n {
        constructor() {
          super(...arguments),
            F(this, `state`, { error: void 0 }),
            F(this, `message`, `Made UI non-interactive due to an error`),
            F(this, `messageFatal`, `Fatal error`),
            F(
              this,
              `messageReport`,
              `If you are the author of this website, please report this issue to the Framer team via https://www.framer.com/contact/`
            );
        }
        static getDerivedStateFromError(e) {
          return { error: e };
        }
        componentDidCatch(e) {
          (k.__framer_hadFatalError = !0),
            `cause` in e && (e = e.cause),
            console.error(
              `${Gp ? this.message : this.messageFatal}. ${
                this.messageReport
              }. Error:

`,
              e
            );
          let t = Math.random();
          if (t > 0.5) return;
          let n =
            e instanceof Error && typeof e.stack == `string` ? e.stack : null;
          Pt(`published_site_load_error`, { message: String(e), stack: n });
        }
        render() {
          var e, t;
          let n = this.state.error;
          if (!n) return this.props.children;
          let r = `cause` in n ? n.cause : n,
            i = /-->/gu,
            a = (Gp && (e = document.getElementById(`main`))?.innerHTML) || ``;
          return x(`div`, {
            style: { display: `contents` },
            suppressHydrationWarning: !0,
            dangerouslySetInnerHTML: {
              __html:
                `<!-- DOM replaced by GracefullyDegradingErrorBoundary due to "${r.message.replace(
                  i,
                  `--!>`
                )}". ${this.messageReport}: --><!-- Stack: ${(t =
                  n.stack)?.replace(i, `--!>`)} -->` + a,
            },
          });
        }
      }),
      (Rb = class e {
        constructor(e) {
          (this.resolver = e), F(this, `status`);
        }
        static is(t) {
          return t instanceof e;
        }
        get state() {
          var e;
          return (e = this.status)?.type ?? `pending`;
        }
        preload() {
          if (this.status) {
            let e = this.status;
            return e.type === `pending` ? e.promise : void 0;
          }
          let e = this.resolver().then(
            (e) => {
              this.status = { type: `fulfilled`, value: e };
            },
            (e) => {
              this.status = { type: `rejected`, error: e };
            }
          );
          return (this.status = { type: `pending`, promise: e }), e;
        }
        read() {
          let e = this.status;
          if (!e) throw Error(`Need to call preload() before read()`);
          switch (e.type) {
            case `pending`:
              throw Error(`Need to wait for preload() to resolve`);
            case `fulfilled`:
              return e.value;
            case `rejected`:
              throw e.error;
            default:
              H(e);
          }
        }
        async readAsync() {
          let e = this.preload();
          return e && (await e), this.read();
        }
        use() {
          let e = this.preload();
          if (e) throw e;
          return this.read();
        }
      }),
      (zb = `webPageId`),
      (Bb = 500),
      (Vb = 0.9),
      (Hb = 1.7),
      (Ub = 4),
      (Wb = 1 / 0),
      (Gb = new WeakMap()),
      (Kb = new Set()),
      (qb = new Map()),
      (Jb = !Qp || typeof IntersectionObserver > `u` ? null : gc()),
      (Yb = Symbol(`noLocale`)),
      (Xb = new Map()),
      (Zb = `element`),
      (Qb = `collection`),
      ($b = `collectionItemId`),
      (ex = `pathVariables`),
      (tx = `framer/page-link,`),
      (nx = /:([a-z]\w*)/gi),
      (rx = M(void 0)),
      (ix = class {
        constructor() {
          F(this, `collectedLinks`, new Map()),
            F(this, `nestingInfo`, new Map());
        }
        clear() {
          this.collectedLinks.clear(), this.nestingInfo.clear();
        }
        getLinks() {
          let e = new Map();
          for (let [t, n] of this.nestingInfo) {
            let r = this.collectedLinks.get(t);
            V(r, `Outer link not found: ${t}`);
            let i = Array.from(n).map((e) => {
              let t = this.collectedLinks.get(e);
              return V(t, `Inner link not found: ${e}`), t;
            });
            e.set(r, i);
          }
          return e;
        }
        collectNestedLink(e, t) {
          if ((Wp && !rv()) || !e.nodeId || !t.nodeId) return;
          this.collectedLinks.set(Lc(e), e), this.collectedLinks.set(Lc(t), t);
          let n = this.nestingInfo.get(Lc(e)) ?? new Set();
          n.add(Lc(t)), this.nestingInfo.set(Lc(e), n);
        }
      }),
      (ax = new ix()),
      (ox = M(void 0)),
      (sx = mc(
        s(function (
          {
            children: e,
            href: t,
            openInNewTab: n,
            smoothScroll: i,
            clickTrackingId: a,
            relValues: o,
            preserveParams: s,
            nodeId: c,
            scopeId: l,
            motionChild: u,
            ...d
          },
          f
        ) {
          let p = ct(),
            m = ut(),
            h = Mc(),
            { activeLocale: g } = Tn(),
            _ = Wc({
              nodeId: c,
              clickTrackingId: a,
              router: p,
              href: t,
              activeLocale: g,
            }),
            v = T(() => {
              if (!t) return {};
              let e = hc(t) ? t : Ac(t);
              if (!e) return {};
              if (R(e))
                return Jc(
                  e,
                  p,
                  m,
                  {
                    openInNewTab: n,
                    trackLinkClick: _,
                    rel: o?.join(` `),
                    preserveParams: s,
                    smoothScroll: i,
                  },
                  h
                );
              let {
                  routeId: r,
                  href: a,
                  elementId: c,
                  pathVariables: l,
                } = Cc(p, m, e, g, h),
                u = Fc(n, !0);
              return {
                href: a,
                target: u,
                onClick: qc(p, r, a, _, c, l, i),
                navigate: () => Kc(p, r, c, l, i),
                "data-framer-page-link-current": (m && Nc(m, e, h)) || void 0,
              };
            }, [t, p, g, h, n, m, i, _, o, s]),
            y = r(e) && `ref` in e,
            b = Ya(y ? e.ref : void 0);
          Xa(
            b,
            (e) => {
              var n;
              if (e === null) return;
              let r = hc(t) ? t : Ac(t);
              if (!r) return;
              let i = Ec(r, p, m);
              if (i) return (n = Jb)?.(i, e);
            },
            [m, t, p]
          );
          let x = e,
            { navigate: S, ...C } = v,
            w = !!S,
            E = es(f);
          return (
            (x = E.cloneAsArray(x, (e) => Yc(e, { ...d, ...Xc(C, u, w) }, b))),
            (x = zc(x, l, c, t, v, b)),
            x
          );
        })
      )),
      (cx = class extends n {
        constructor() {
          super(...arguments), F(this, `state`, { error: void 0 });
        }
        static getDerivedStateFromError(e) {
          return { error: e };
        }
        render() {
          return this.state.error ? null : this.props.children;
        }
      }),
      (lx = `framer`),
      (ux = 3),
      (dx = 30),
      (fx = 1e4),
      (px = { state: `pending` }),
      (mx = { state: `success` }),
      (hx = { state: `incomplete` }),
      (gx = { state: `complete` }),
      (_x = { state: `error` }),
      (vx = d.createContext(void 0)),
      (yx = d.forwardRef(function (
        {
          action: e,
          children: t,
          redirectUrl: n,
          onSuccess: r,
          onError: i,
          onLoading: a,
          submitTrackingId: o,
          nodeId: s,
          ...l
        },
        u
      ) {
        let f = d.useRef(null),
          p = u ?? f,
          m = ct(),
          h = ut(),
          g = Mc(),
          [_, v] = d.useReducer(al, hx),
          { activeLocale: y } = Tn(),
          b = w(vx),
          S = d.useRef({ onSuccess: r, onError: i, onLoading: a });
        S.current = { onSuccess: r, onError: i, onLoading: a };
        async function C(e) {
          var t, n;
          if (R(e)) {
            let n = wc(m, e, g);
            if (!n) {
              cl(e, p);
              return;
            }
            let { routeId: r, elementId: i, pathVariables: a } = n;
            (t = m.navigate) == null || t.call(m, r, i, a);
            return;
          }
          V(hc(e), `Expected link to be either a LinkToWebPage or a string`, e);
          let r = await Sc(m, h, e, y, g),
            { routeId: i, elementId: a, pathVariables: o } = r;
          (n = m.navigate) == null || n.call(m, i, a, o);
        }
        let T = async (t) => {
            var r, i, a, l, u, d;
            if ((t.preventDefault(), !e || !b)) return;
            v({ type: `submit` });
            let f = new FormData(t.currentTarget);
            await jt({ priority: `user-blocking`, continueAfter: `paint` }),
              nl(f, q.document);
            for (let [e, t] of f) t instanceof File && f.delete(e);
            try {
              (i = (r = S.current).onLoading) == null || i.call(r),
                rl({
                  router: m,
                  nodeId: s,
                  submitTrackingId: o,
                  activeLocale: y,
                }),
                await ul(e, f, b),
                c(() => v({ type: `success` })),
                (l = (a = S.current).onSuccess) == null || l.call(a),
                n && (await C(n));
            } catch (e) {
              c(() => v({ type: `error` })),
                (d = (u = S.current).onError) == null || d.call(u),
                console.error(e);
            }
          },
          E = (e) => {
            let { target: t, currentTarget: n, key: r } = e,
              i = t instanceof HTMLTextAreaElement;
            i ||
              (r === `Enter` &&
                n.checkValidity() &&
                (e.preventDefault(), T(e)));
          },
          D = async (e) => {
            let t = e.currentTarget;
            await jt({ priority: `background`, continueAfter: `paint` }),
              c(() => v({ type: ll(t) ? `incomplete` : `complete` }));
          };
        return x(Ee.form, {
          ...l,
          onSubmit: ol(_) ? T : sl,
          onKeyDown: E,
          onChange: D,
          ref: p,
          children: t(_),
        });
      })),
      (bx = null),
      (xx = null),
      qp(pl),
      (Sx = (e, t, n, r, i, a) => {
        let o = w(vx),
          s = S(),
          c = S(!0);
        return (
          O(() => {
            function l() {
              (!bx || !xx) && pl();
              let s = n ? new URL(q.location.origin + n) : q.location,
                c = {
                  version: $p,
                  abTestId: e?.abTestId,
                  framerSiteId: o ?? null,
                  webPageId: e?.abTestingVariantId ?? t,
                  routePath: e?.path || `/`,
                  collectionItemId: null,
                  framerLocale: a?.code || null,
                  referrer: null,
                  url: s.href,
                  hostname: s.hostname,
                  pathname: s.pathname,
                  search: s.search || null,
                  hash: s.hash || null,
                  timezone: bx,
                  locale: xx,
                };
              return e?.collectionId && i && r
                ? (async () => {
                    var t;
                    let n = null,
                      o =
                        e.collectionId &&
                        (await (t = i[e.collectionId])?.call(i)),
                      [s] = Object.values(r);
                    return (
                      o &&
                        typeof s == `string` &&
                        (n =
                          (await o.getRecordIdBySlug(s, a || void 0)) ?? null),
                      { ...c, collectionItemId: n }
                    );
                  })()
                : c;
            }
            (async () => {
              let e = (s.current = l()),
                t = e instanceof Promise ? await e : e;
              (s.current = t),
                c.current
                  ? (c.current = !1)
                  : Pt(`published_site_pageview`, t, `eager`);
            })();
            let u = async (e) => {
              if (e.persisted) {
                let e = (s.current = l()),
                  t = e instanceof Promise ? await e : e;
                (s.current = t), Pt(`published_site_pageview`, t, `eager`);
              }
            };
            return (
              k.addEventListener(`pageshow`, u),
              () => {
                k.removeEventListener(`pageshow`, u);
              }
            );
          }, [e, t, n, r, i, a, o]),
          s
        );
      }),
      (Cx = `default`),
      (wx = { status: `loading`, data: void 0 }),
      (Tx = () => {}),
      (Mx = class e {
        constructor() {
          F(this, `responseValues`, new Map()),
            de(this, Ex, new Map()),
            de(this, Dx, new Set()),
            de(this, Ox, new Map()),
            de(this, kx, new Map()),
            de(this, Ax, new Map()),
            de(this, jx, new Map()),
            F(
              this,
              `persistCache`,
              Yo(() => {
                let t = {};
                for (let [e, n] of this.responseValues) {
                  if (!n || n.status !== `success`) continue;
                  let r = P(this, Ox).get(e);
                  if (!r || r === 0) continue;
                  let i = P(this, kx).get(e);
                  if (!i || (i && kl(i, r))) continue;
                  t[e] = [i, r, n.data];
                }
                try {
                  localStorage.setItem(e.cacheKey, JSON.stringify(t));
                } catch {}
              }, 500)
            );
        }
        unmount() {
          for (let [e, t] of P(this, jx))
            clearInterval(t), P(this, jx).delete(e);
        }
        stopQueryRefetching(e) {
          let t = Tl(e),
            n = P(this, jx).get(t);
          n && (clearInterval(n), P(this, jx).delete(t));
        }
        startQueryRefetching(e) {
          let t = Tl(e),
            n = P(this, jx).get(t),
            r = P(this, Ox).get(t);
          if (n || !r) return;
          let i = q.setInterval(() => {
            if (document.visibilityState === `hidden`) return;
            let n = P(this, kx).get(t);
            !r || !n || this.fetchWithCache({ ...e, cacheDuration: r });
          }, r);
          P(this, jx).set(t, i);
        }
        hydrateCache() {
          try {
            let t = localStorage.getItem(e.cacheKey);
            if (!t) return;
            let n = JSON.parse(t);
            if (typeof n != `object`) throw Error(`Invalid cache data`);
            for (let e in n) {
              let t = n[e];
              if (!Array.isArray(t) || t.length !== 3)
                throw Error(`Invalid cache data`);
              let [r, i, a] = t;
              if (kl(r, i)) continue;
              P(this, kx).set(e, r),
                P(this, Ox).set(e, i),
                this.responseValues.set(e, { status: `success`, data: a });
            }
          } catch {
            try {
              localStorage.removeItem(e.cacheKey);
            } catch {}
          }
        }
        setResponseValue(e, t) {
          this.responseValues.set(e, t), this.persistCache();
          let n = P(this, Ex).get(e);
          if (n) for (let e of n) e();
        }
        async prefetch(e) {
          if (!q_() || !xc(e.url, !1)) return;
          let t = Tl(e);
          P(this, Dx).add(t), await this.fetchWithCache(e);
          let n = this.getValue(t);
          if (!n || n.status === `loading`)
            throw Error(`Unexpected result status for prefetch`);
          let r = P(this, Ex).get(t);
          for (let e of r ?? []) e();
          let i = Ol(n, e);
          return (
            e.resultOutputType === `image` && R(i) && (await Sl(i).catch(Tx)), i
          );
        }
        async fetchWithCache(e) {
          if (!q_()) return;
          let t = Tl(e),
            n = P(this, Ax).get(t);
          if (n) return n;
          let r = P(this, kx).get(t),
            i = r && kl(r, e.cacheDuration);
          if (this.responseValues.has(t) && !i) return;
          let a = this.responseValues.get(t);
          a || this.setResponseValue(t, wx);
          let o = async () => {
              try {
                let n = await fetch(e.url, {
                  method: `GET`,
                  credentials: e.credentials,
                });
                if (!n.ok) {
                  this.setResponseValue(t, {
                    status: `error`,
                    error: Error(`Invalid Response Status`),
                    data: void 0,
                  });
                  return;
                }
                let r = await n.json();
                this.setResponseValue(t, { status: `success`, data: r }),
                  P(this, kx).set(t, Date.now());
              } catch (e) {
                this.setResponseValue(t, {
                  status: `error`,
                  error: e,
                  data: void 0,
                });
              }
            },
            s = o();
          return (
            P(this, Ax).set(t, s),
            s.finally(() => {
              P(this, Ax).delete(t);
            }),
            s
          );
        }
        getValue(e, t = !1) {
          if (!(t && !P(this, Dx).has(e))) return this.responseValues.get(e);
        }
        subscribe(e, t, n = !1) {
          let { url: r, cacheDuration: i } = e;
          if (!xc(r, !1)) return Tx;
          let a = Tl(e),
            o = P(this, Ox).get(a);
          (!o || i < o) && P(this, Ox).set(a, i),
            n || (this.startQueryRefetching(e), this.fetchWithCache(e));
          let s = P(this, Ex).get(a) ?? new Set();
          return (
            s.add(t),
            P(this, Ex).set(a, s),
            () => {
              let n = P(this, Ex).get(a);
              n &&
                (n.delete(t),
                n.size === 0 && P(this, Ex).delete(a),
                P(this, Ex).size === 0 && this.stopQueryRefetching(e));
            }
          );
        }
      }),
      (Ex = new WeakMap()),
      (Dx = new WeakMap()),
      (Ox = new WeakMap()),
      (kx = new WeakMap()),
      (Ax = new WeakMap()),
      (jx = new WeakMap()),
      F(Mx, `cacheKey`, `framer-fetch-client-cache`),
      (Nx = Mx),
      (Px = M(void 0)),
      (Fx = M(!0)),
      (Ix = ({ children: e, client: t }) => {
        let [n] = j(() => t ?? new Nx()),
          [r, i] = j(!0);
        return (
          O(
            () => (
              n.hydrateCache(),
              c(() => {
                i(!1);
              }),
              () => n.unmount()
            ),
            [n]
          ),
          x(Fx.Provider, {
            value: r,
            children: x(Px.Provider, { value: n, children: e }),
          })
        );
      }),
      (Lx = new WeakMap()),
      (Rx = new WeakMap()),
      (zx = new WeakMap()),
      (Bx = new WeakMap()),
      (Vx = new WeakMap()),
      (re.WillChange = se),
      (Hx = mc(
        s(function ({ links: e, children: t, ...n }, r) {
          let i = ct(),
            { activeLocale: a } = Tn(),
            o = es(r),
            s = [],
            c = e.map((e) => {
              if (e)
                return R(e)
                  ? Qc(e, i)
                  : Qc(e.href, i, e.implicitPathVariables, e.refKey, (e, t) => {
                      function n(e) {
                        let t = {};
                        for (let n in e) {
                          let r = e[n];
                          V(
                            i.collectionUtils,
                            `collectionUtils should be defined`
                          ),
                            V(r, `unresolvedSlug be defined`);
                          let o = _c(r, i.collectionUtils, a),
                            c = o.preload();
                          if (c) s.push(c);
                          else {
                            let e = o.read();
                            e && (t[n] = e);
                          }
                        }
                        return t;
                      }
                      return { path: n(e), hash: n(t) };
                    });
            });
          if (s.length > 0) throw Promise.allSettled(s);
          let l = t(c);
          return o(l, n);
        })
      )),
      (Ux = class {
        constructor(e, t) {
          (this.collection = e),
            (this.locale = t),
            F(this, `schema`),
            F(this, `indexes`, []);
          let n = Vi(e);
          V(n, `Collection does not have properties`);
          let r = { id: { type: `string`, isNullable: !1 } },
            i = Object.entries(n);
          for (let [e, t] of i) {
            if (!t) continue;
            let n = t.type;
            V(n !== `array`, `Array properties are not supported`),
              V(n !== `object`, `Object properties are not supported`),
              (r[e] = { type: n, isNullable: !0 });
          }
          this.schema = r;
        }
        getDatabaseItem(e, t) {
          let n = {};
          for (let t in this.schema) {
            let r = e[t];
            if (Ct(r)) continue;
            let i = this.schema[t];
            if (xt(i)) continue;
            V(i.type !== `unknown`, `Invalid definition type`),
              (n[t] = { type: i.type, value: r });
          }
          return { pointer: t, data: n };
        }
        async resolveRichText(e) {
          if (Rb.is(e)) {
            let t = e.preload();
            return t && (await t), e.read();
          }
          return e;
        }
        async scanItems() {
          let e = await Bl(this.collection, this.locale);
          return e.map((e, t) => {
            let n = String(t);
            return this.getDatabaseItem(e, n);
          });
        }
        async resolveItems(e) {
          let t = await Bl(this.collection, this.locale);
          return e.map((e) => {
            let n = Number(e),
              r = t[n];
            return (
              V(r, `Can't find collection item`), this.getDatabaseItem(r, e)
            );
          });
        }
        compareItems(e, t) {
          return Number(e.pointer) - Number(t.pointer);
        }
      }),
      (Wx = {
        cast(e, t) {
          switch (t.type) {
            case `array`:
              return Hl(e, t);
            case `boolean`:
              return Wl(e);
            case `color`:
              return ql(e);
            case `date`:
              return Yl(e);
            case `enum`:
              return Zl(e);
            case `file`:
              return $l(e);
            case `link`:
              return tu(e);
            case `number`:
              return ru(e);
            case `object`:
              return ou(e, t);
            case `responsiveimage`:
              return cu(e);
            case `richtext`:
              return uu(e);
            case `string`:
              return mu(e);
            case `vectorsetitem`:
              return fu(e);
            case `unknown`:
              return e;
            default:
              H(t, `Unsupported cast`);
          }
        },
        parse(e) {
          return yt(e)
            ? { type: `boolean`, value: e }
            : wt(e)
            ? { type: `date`, value: e.toISOString() }
            : z(e)
            ? { type: `number`, value: e }
            : R(e)
            ? { type: `string`, value: e }
            : bt(e)
            ? { type: `array`, value: e.map(Wx.parse) }
            : null;
        },
        equal(e, t, n) {
          return e?.type === t?.type ? gu(e, t, n) === 0 : !1;
        },
        lessThan(e, t, n) {
          return e?.type === t?.type ? gu(e, t, n) < 0 : !1;
        },
        lessThanOrEqual(e, t, n) {
          return e?.type === t?.type ? gu(e, t, n) <= 0 : !1;
        },
        greaterThan(e, t, n) {
          return e?.type === t?.type ? gu(e, t, n) > 0 : !1;
        },
        greaterThanOrEqual(e, t, n) {
          return e?.type === t?.type ? gu(e, t, n) >= 0 : !1;
        },
        in(e, t, n) {
          return t?.type === `array`
            ? t.value.some((t) => Wx.equal(t, e, n))
            : !1;
        },
        indexOf(e, t, n) {
          return e?.type === `array`
            ? e.value.findIndex((e) => Wx.equal(e, t, n))
            : -1;
        },
        contains(e, t, n) {
          let r = hu(e),
            i = hu(t);
          return St(r) || St(i)
            ? !1
            : (n.type === 0 && ((r = r.toLowerCase()), (i = i.toLowerCase())),
              r.includes(i));
        },
        startsWith(e, t, n) {
          let r = hu(e),
            i = hu(t);
          return St(r) || St(i)
            ? !1
            : (n.type === 0 && ((r = r.toLowerCase()), (i = i.toLowerCase())),
              r.startsWith(i));
        },
        endsWith(e, t, n) {
          let r = hu(e),
            i = hu(t);
          return St(r) || St(i)
            ? !1
            : (n.type === 0 && ((r = r.toLowerCase()), (i = i.toLowerCase())),
              r.endsWith(i));
        },
        length(e) {
          switch (e?.type) {
            case `array`:
              return e.value.length;
          }
          return 0;
        },
        stringify(e) {
          if (e === null) return `null`;
          switch (e.type) {
            case `array`:
              return `[${e.value.map(Wx.stringify).join(`, `)}]`;
            case `boolean`:
            case `number`:
              return String(e.value);
            case `string`:
              return `'${e.value}'`;
            case `enum`:
              return `'${e.value}' /* Enum */`;
            case `color`:
              return `'${e.value}' /* Color */`;
            case `date`:
              return `'${e.value}' /* Date */`;
            case `richtext`:
              return `RichText`;
            case `vectorsetitem`:
              return `VectorSetItem`;
            case `responsiveimage`:
              return `ResponsiveImage`;
            case `file`:
              return `File`;
            case `link`:
              return R(e.value) ? `'${e.value}' /* Link */` : `Link`;
            case `object`:
              return `Object`;
            default:
              H(e);
          }
        },
      }),
      (Gx = { type: `unknown`, isNullable: !0 }),
      (Kx = 1e3),
      (Q = class e {
        constructor(e) {
          this.network = e;
        }
        static estimate(t, n) {
          let r = _u(),
            i = vu(),
            a = t * r + n / i;
          return new e(a);
        }
        static max(t, n) {
          let r = Math.max(t.network, n.network);
          return new e(r);
        }
        static compare(e, t) {
          return e.network < t.network ? -1 : e.network > t.network ? 1 : 0;
        }
        add(e) {
          return (this.network += e.network), this;
        }
        toString() {
          return `${this.network}ms`;
        }
      }),
      (qx = class {
        constructor(e, t) {
          (this.id = e),
            (this.relational = t),
            F(this, `nodes`, []),
            F(this, `winners`, new Map());
        }
        addNode(e) {
          this.nodes.push(e), e.setGroup(this);
        }
        getWinner(e) {
          let t = e.getHash(),
            n = this.winners.get(t);
          if (n) return n;
          let r = new Jx();
          return this.winners.set(t, r), r;
        }
        getOptimized(e) {
          let t = this.getWinner(e);
          V(t.node, `Group not optimized`);
          let n = t.node.getOptimized(e);
          return n.setGroup(this), n;
        }
      }),
      (Jx = class {
        constructor() {
          F(this, `node`), F(this, `cost`, new Q(1 / 0)), F(this, `nodes`, []);
        }
        update(e, t) {
          this.nodes.push(e),
            Q.compare(t, this.cost) < 0 && ((this.node = e), (this.cost = t));
        }
      }),
      (Yx = class {
        constructor(e) {
          this.isSynchronous = e;
        }
      }),
      (Xx = class extends Yx {
        constructor() {
          super(...arguments), F(this, `group`);
        }
        getGroup() {
          return V(this.group, `Node must be in a group`), this.group;
        }
        setGroup(e) {
          V(!this.group, `Node is already in a group`), (this.group = e);
        }
        evaluateSync() {
          let e = this.evaluate(void 0);
          return bu(e);
        }
        evaluateAsync() {
          let e = this.evaluate(void 0);
          return xu(e);
        }
      }),
      (Zx = class {
        constructor(e, t) {
          (this.data = e), (this.pointer = t), F(this, `cached`);
        }
        resolve() {
          return (
            (this.cached ??= this.data.resolveRichText(this.pointer)),
            this.cached
          );
        }
      }),
      (Qx = class {
        constructor(e, t) {
          (this.data = e), (this.pointer = t), F(this, `cached`);
        }
        resolve() {
          return (
            V(this.data.resolveVectorSetItem, `Can't resolve vector set item.`),
            (this.cached ??= this.data.resolveVectorSetItem(this.pointer)),
            this.cached
          );
        }
      }),
      ($x = `index`),
      (eS = class extends Set {
        merge(e) {
          for (let t of e) this.add(t);
        }
        equals(e) {
          if (this === e) return !0;
          if (this.size !== e.size) return !1;
          for (let t of this) if (!e.has(t)) return !1;
          return !0;
        }
        subsetOf(e) {
          if (this === e) return !0;
          if (this.size > e.size) return !1;
          for (let t of this) if (!e.has(t)) return !1;
          return !0;
        }
        getHash() {
          let e = [];
          for (let t of this) e.push(t.id);
          return e.sort((e, t) => e - t), K(this.name, ...e);
        }
      }),
      (tS = class {
        constructor(e, t, n) {
          (this.id = e),
            (this.name = t),
            (this.data = n),
            F(this, `indexes`, new rS()),
            F(this, `fields`, new $());
        }
      }),
      (nS = class {
        constructor(e, t, n, r, i, a) {
          for (let o in ((this.id = e),
          (this.data = t),
          (this.collection = n),
          (this.lookupNodes = r),
          (this.constraint = i),
          (this.ordering = a),
          F(this, `resolvedFields`, new $()),
          t.schema))
            for (let e of n.fields) e.name === o && this.resolvedFields.add(e);
        }
      }),
      (rS = class extends eS {
        constructor() {
          super(...arguments), F(this, `name`, `Indexes`);
        }
      }),
      (iS = class {
        constructor(e, t, n, r) {
          (this.id = e),
            (this.name = t),
            (this.definition = n),
            (this.collection = r);
        }
        getValue(e) {
          V(this.name, `Can only get value of field with a name`);
          let t = e.data[this.name];
          return t?.type === `richtext`
            ? (V(this.collection, `Rich text field must have a collection`),
              {
                type: `richtext`,
                value: new Zx(this.collection.data, t.value),
              })
            : t?.type === `vectorsetitem`
            ? (V(
                this.collection,
                `Vector set item field must have a collection`
              ),
              {
                type: `vectorsetitem`,
                value: new Qx(this.collection.data, t.value),
              })
            : t ?? null;
        }
      }),
      ($ = class extends eS {
        constructor() {
          super(...arguments), F(this, `name`, `Fields`);
        }
      }),
      (aS = class {
        constructor(e, t = `asc`) {
          (this.field = e), (this.direction = t);
        }
        getHash() {
          return K(`OrderingField`, this.field.id, this.direction);
        }
      }),
      (oS = class {
        constructor(e) {
          F(this, `fields`, []), e && this.merge(e);
        }
        get length() {
          return this.fields.length;
        }
        getHash() {
          return K(`Ordering`, ...this.fields);
        }
        push(e) {
          this.fields.push(e);
        }
        merge(e) {
          this.fields.push(...e.fields);
        }
        equals(e) {
          return this === e
            ? !0
            : this.length === e.length
            ? this.getHash() === e.getHash()
            : !1;
        }
        providedByFields(e) {
          for (let { field: t } of this.fields) {
            if (e.has(t) || t.name === $x) continue;
            return !1;
          }
          return !0;
        }
      }),
      (sS = class {
        constructor(e, t) {
          (this.ordering = e), (this.resolvedFields = t);
        }
        getHash() {
          return K(`RequiredProps`, this.ordering, this.resolvedFields);
        }
        get isMinimal() {
          return this.ordering.length === 0 && this.resolvedFields.size === 0;
        }
        canProvide(e) {
          return this.canProvideOrdering(e) && this.canProvideResolvedFields(e);
        }
        canProvideOrdering(e) {
          return this.ordering.length === 0
            ? !0
            : e.canProvideOrdering(this.ordering);
        }
        canProvideResolvedFields(e) {
          return this.resolvedFields.size === 0
            ? !0
            : e.canProvideResolvedFields(this.resolvedFields);
        }
      }),
      (cS = class e {
        constructor(e) {
          (this.parent = e),
            F(this, `node`),
            F(this, `ordering`),
            F(this, `fields`, []);
        }
        takeNode() {
          let e = this.node;
          return V(e, `Node is missing`), (this.node = void 0), e;
        }
        setNode(e) {
          V(!this.node, `Node already set`), (this.node = e);
        }
        setOrdering(e) {
          this.ordering = e;
        }
        push() {
          return new e(this);
        }
        replace() {
          return new e(this.parent);
        }
        addField(e) {
          this.fields.push(e);
        }
        addFieldsFromScope(e) {
          for (let t of e.fields) this.addField(t);
        }
        resolveField(e, t) {
          var n;
          let r = [];
          for (let n of this.fields) {
            if (n.name !== e || (t && n.collectionName !== t)) continue;
            r.push(n);
          }
          if (r.length === 1) return r[0];
          if (r.length > 1) throw Error(`Ambiguous fields`);
          return (n = this.parent)?.resolveField(e, t);
        }
        has(e) {
          var t;
          return this.fields.includes(e) ? !0 : (t = this.parent)?.has(e) ?? !1;
        }
        getRequiredOrdering() {
          return this.ordering ?? new oS();
        }
        getRequiredResolvedFields() {
          let e = new $();
          for (let { field: t } of this.fields) t.collection && e.add(t);
          return e;
        }
        getRequiredProps() {
          let e = this.getRequiredOrdering(),
            t = this.getRequiredResolvedFields();
          return new sS(e, t);
        }
        getNamedFields() {
          let e = {};
          for (let { name: t, field: n } of this.fields) e[t] = n;
          return e;
        }
        getSingleField() {
          V(this.fields.length === 1, `Scope must contain exactly one field`);
          let e = this.fields[0];
          return V(e, `Field must exist`), e.field;
        }
      }),
      (lS = class {
        constructor() {
          F(this, `pointers`, new Map()), F(this, `values`, new Map());
        }
        getKey() {
          let e = [];
          for (let [t, n] of this.pointers) e.push(`${t.id}-${n}`);
          return e.sort().join(`-`);
        }
        addValue(e, t) {
          this.values.set(e, t);
        }
        getValue(e) {
          return this.values.get(e) ?? null;
        }
        mergeValues(e) {
          for (let [t, n] of e.values) this.addValue(t, n);
        }
        addPointer(e, t) {
          this.pointers.set(e, t);
        }
        getPointer(e) {
          return this.pointers.get(e);
        }
        mergePointers(e) {
          for (let [t, n] of e.pointers) this.addPointer(t, n);
        }
        merge(e) {
          this.mergeValues(e), this.mergePointers(e);
        }
      }),
      (uS = class e {
        constructor(e, t = []) {
          (this.fields = e), (this.tuples = t);
        }
        push(e) {
          this.tuples.push(e);
        }
        filter(t) {
          let n = this.tuples.filter(t);
          return new e(this.fields, n);
        }
        map(t, n) {
          let r = this.tuples.map(n);
          return new e(t, r);
        }
        sort(t) {
          let n = Array.from(this.tuples).sort(t);
          return new e(this.fields, n);
        }
        slice(t, n) {
          let r = this.tuples.slice(t, n);
          return new e(this.fields, r);
        }
        union(t) {
          let n = new $();
          for (let e of this.fields) t.fields.has(e) && n.add(e);
          let r = new Set(),
            i = new e(n);
          for (let e of this.tuples) {
            let t = e.getKey();
            r.add(t), i.push(e);
          }
          for (let e of t.tuples) {
            let t = e.getKey();
            if (r.has(t)) continue;
            i.push(e);
          }
          return i;
        }
        intersection(t) {
          let n = new $();
          for (let e of this.fields) t.fields.has(e) && n.add(e);
          let r = new Set(),
            i = new e(n);
          for (let e of this.tuples) {
            let t = e.getKey();
            r.add(t);
          }
          for (let e of t.tuples) {
            let t = e.getKey();
            if (!r.has(t)) continue;
            i.push(e);
          }
          return i;
        }
      }),
      (dS = class {
        constructor(e, t) {
          (this.input = e), (this.field = t);
        }
        getHash() {
          return K(`ProjectionField`, this.input, this.field.id);
        }
      }),
      (fS = class e extends Xx {
        constructor(e, t, n) {
          let r = e.isSynchronous;
          for (let e of t) r &&= e.input.isSynchronous;
          super(r),
            (this.input = e),
            (this.projections = t),
            (this.passthrough = n),
            F(this, `inputGroup`),
            (this.inputGroup = e.getGroup());
        }
        getHash() {
          return K(
            `RelationalProject`,
            this.inputGroup.id,
            ...this.projections,
            this.passthrough
          );
        }
        getOutputFields() {
          let e = new $();
          e.merge(this.passthrough);
          for (let t of this.projections) e.add(t.field);
          return e;
        }
        canProvideOrdering(e) {
          let t = new $();
          for (let e of this.projections) t.add(e.field);
          for (let { field: n } of e.fields) if (t.has(n)) return !1;
          return !0;
        }
        canProvideResolvedFields() {
          return !0;
        }
        getInputRequiredProps(e) {
          let t = new $(e.resolvedFields);
          for (let e of this.projections)
            t.merge(e.input.referencedFields), t.delete(e.field);
          return new sS(e.ordering, t);
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n),
            i = new Q(0);
          for (let t of this.projections) {
            let n = t.input.optimize(e);
            i = Q.max(i, n);
          }
          return new Q(0).add(Q.max(r, i));
        }
        getOptimized(t) {
          let n = this.getInputRequiredProps(t),
            r = this.inputGroup.getOptimized(n),
            i = this.projections.map((e) => {
              let t = e.input.getOptimized();
              return new dS(t, e.field);
            });
          return new e(r, i, this.passthrough);
        }
        *evaluate(e) {
          let t = this.getOutputFields(),
            n = yield* this.input.evaluate(e),
            r = yield* Cu(
              n.tuples.map((t) =>
                Cu(
                  this.projections.map((n) =>
                    Su({ field: n.field, value: n.input.evaluate(e, t) })
                  )
                )
              )
            );
          return n.map(t, (e, t) => {
            let n = new lS();
            n.mergePointers(e);
            for (let t of this.passthrough) {
              let r = e.getValue(t);
              n.addValue(t, r);
            }
            let i = r[t];
            V(i, `Projections must exist`);
            for (let { field: e, value: t } of i) n.addValue(e, t);
            return n;
          });
        }
      }),
      (pS = { type: 0 }),
      (mS = class extends Yx {
        constructor(e, t, n) {
          super(n),
            (this.referencedFields = e),
            (this.referencedOuterFields = t),
            (this.isSynchronous = n);
        }
        evaluateSync() {
          let e = this.evaluate(void 0, void 0);
          return bu(e);
        }
        evaluateAsync() {
          let e = this.evaluate(void 0, void 0);
          return xu(e);
        }
      }),
      (hS = { type: 0 }),
      (gS = class {
        constructor(e, t) {
          (this.when = e), (this.then = t);
        }
        getHash() {
          return K(`CaseCondition`, this.when, this.then);
        }
      }),
      (_S = class e extends mS {
        constructor(e, t, n) {
          let r = new $(),
            i = new $(),
            a = !0;
          e &&
            (r.merge(e.referencedFields),
            i.merge(e.referencedOuterFields),
            (a &&= e.isSynchronous));
          for (let { when: e, then: n } of t)
            r.merge(e.referencedFields),
              i.merge(e.referencedOuterFields),
              (a &&= e.isSynchronous),
              r.merge(n.referencedFields),
              i.merge(n.referencedOuterFields),
              (a &&= n.isSynchronous);
          n &&
            (r.merge(n.referencedFields),
            i.merge(n.referencedOuterFields),
            (a &&= n.isSynchronous)),
            super(r, i, a),
            (this.input = e),
            (this.conditions = t),
            (this.otherwise = n),
            F(this, `definition`, { type: `unknown`, isNullable: !0 });
        }
        getHash() {
          return K(
            `ScalarCase`,
            this.input,
            ...this.conditions,
            this.otherwise
          );
        }
        optimize(e) {
          var t, n;
          (t = this.input) == null || t.optimize(e);
          for (let t of this.conditions) t.when.optimize(e), t.then.optimize(e);
          return (n = this.otherwise) == null || n.optimize(e), new Q(0);
        }
        getOptimized() {
          var t, n;
          let r = (t = this.input)?.getOptimized(),
            i = this.conditions.map((e) => {
              let t = e.when.getOptimized(),
                n = e.then.getOptimized();
              return new gS(t, n);
            }),
            a = (n = this.otherwise)?.getOptimized();
          return new e(r, i, a);
        }
        *evaluate(e, t) {
          var n, r;
          let {
            input: i,
            conditions: a,
            otherwise: o,
          } = yield* Su({
            input: (n = this.input)?.evaluate(e, t) ?? null,
            conditions: Cu(
              this.conditions.map((n) =>
                Su({ when: n.when.evaluate(e, t), then: n.then.evaluate(e, t) })
              )
            ),
            otherwise: (r = this.otherwise)?.evaluate(e, t) ?? null,
          });
          if (this.input) {
            for (let { when: e, then: t } of a)
              if (Wx.equal(i, e, hS)) return t;
          } else for (let { when: e, then: t } of a) if (Gl(e)) return t;
          return o;
        }
      }),
      (vS = class {
        constructor(e, t, n) {
          (this.normalizer = e),
            (this.query = t),
            (this.locale = n),
            F(this, `collectionId`, 0),
            F(this, `indexId`, 0),
            F(this, `fieldId`, 0),
            F(this, `subqueries`, []);
        }
        build() {
          let e = new cS();
          return this.buildQuery(e, this.query);
        }
        buildQuery(e, t) {
          let n = { type: `Select`, ...t };
          return this.buildSelect(e, n);
        }
        buildSelect(e, t) {
          let n = this.buildFrom(e, t.from),
            r = n.getRequiredOrdering();
          if (t.where) {
            let e = n.takeNode(),
              r = this.buildExpression(n, t.where),
              i = this.normalizer.newRelationalFilter(e, r);
            n.setNode(i);
          }
          let i = [],
            a = new $(),
            o;
          if (t.orderBy) {
            o = new oS();
            for (let e of t.orderBy)
              if (e.type === `Identifier`) {
                let t = n.resolveField(e.name, e.collection);
                if (xt(t)) continue;
                a.add(t.field);
                let r = new aS(t.field, e.direction);
                o.push(r);
              } else {
                let t = this.buildExpression(n, e),
                  r = Ou(this.fieldId++),
                  a = new iS(r, void 0, t.definition, void 0),
                  s = new dS(t, a);
                i.push(s);
                let c = new aS(a, e.direction);
                o.push(c);
              }
            o.merge(r);
          } else o = r;
          let s = this.buildSelectList(n, t.select, a, i);
          if ((s.setOrdering(o), t.offset)) {
            let n = s.takeNode(),
              r = this.buildExpression(e, t.offset),
              i = this.normalizer.newRelationalOffset(n, r, o);
            s.setNode(i);
          }
          if (t.limit) {
            let n = s.takeNode(),
              r = this.buildExpression(e, t.limit),
              i = this.normalizer.newRelationalLimit(n, r, o);
            s.setNode(i);
          }
          return s;
        }
        buildSelectList(e, t, n, r) {
          let i = e.push(),
            a = new $(n),
            o = [...r];
          for (let n of t)
            if (n.type === `Identifier`) {
              let t = e.resolveField(n.name, n.collection);
              if (xt(t)) continue;
              a.add(t.field), i.addField({ ...t, name: n.alias ?? t.name });
            } else {
              let t = this.buildExpression(e, n);
              V(n.alias, `Subqueries should have an alias`);
              let r = Ou(this.fieldId++),
                a = n.alias,
                s = new iS(r, a, t.definition, void 0),
                c = new dS(t, s);
              o.push(c), i.addField({ field: s, name: a });
            }
          let s = e.takeNode(),
            c = this.normalizer.newRelationalProject(s, o, a);
          return i.setNode(c), i;
        }
        buildFrom(e, t) {
          switch (t.type) {
            case `Collection`:
              return this.buildCollection(e, t);
            case `LeftJoin`:
              return this.buildJoin(e, t);
            default:
              H(t, `Unsupported from type`);
          }
        }
        buildCollection(e, t) {
          let n = e.push(),
            r = ku(t.data, this.locale),
            i = t.alias,
            a = Eu(this.collectionId++),
            o = new tS(a, i, r);
          for (let [e, t] of Object.entries(r.schema)) {
            let r = Ou(this.fieldId++),
              a = new iS(r, e, t, o);
            n.addField({ field: a, name: e, collectionName: i }),
              o.fields.add(a);
          }
          {
            let e = { type: `number`, isNullable: !1 },
              t = Ou(this.fieldId++),
              r = new iS(t, $x, e, o);
            n.addField({ field: r, name: $x, collectionName: i });
            let a = new oS(),
              s = new aS(r);
            a.push(s), n.setOrdering(a);
          }
          for (let e of r.indexes) {
            let t = [];
            for (let r of e.fields) {
              let e = this.buildExpression(n, r);
              t.push(e);
            }
            let r;
            e.where && (r = this.buildExpression(n, e.where));
            let i = new oS(),
              a = Du(this.indexId++),
              s = new nS(a, e, o, t, r, i);
            o.indexes.add(s);
          }
          let s = this.normalizer.newRelationalScan(o);
          return n.setNode(s), n;
        }
        buildJoin(e, t) {
          let n = this.buildFrom(e, t.left),
            r = this.buildFrom(e, t.right),
            i = new oS(),
            a = n.getRequiredOrdering();
          i.merge(a);
          let o = r.getRequiredOrdering();
          i.merge(o);
          let s = e.push();
          s.addFieldsFromScope(n), s.addFieldsFromScope(r), s.setOrdering(i);
          let c = this.buildExpression(s, t.constraint),
            l = n.takeNode(),
            u = r.takeNode(),
            d;
          switch (t.type) {
            case `LeftJoin`:
              d = this.normalizer.newRelationalLeftJoin(l, u, c);
              break;
            default:
              H(t.type, `Unsupported join type`);
          }
          return s.setNode(d), s;
        }
        buildExpression(e, t) {
          switch (t.type) {
            case `Identifier`:
              return this.buildIdentifier(e, t);
            case `LiteralValue`:
              return this.buildLiteralValue(t);
            case `FunctionCall`:
              return this.buildFunctionCall(e, t);
            case `Case`:
              return this.buildCase(e, t);
            case `UnaryOperation`:
              return this.buildUnaryOperation(e, t);
            case `BinaryOperation`:
              return this.buildBinaryOperation(e, t);
            case `TypeCast`:
              return this.buildTypeCast(e, t);
            case `Select`:
              throw Error(
                `Subqueries are only supported inside subquery function calls`
              );
            default:
              H(t, `Unsupported expression`);
          }
        }
        buildIdentifier(e, t) {
          let n = e.resolveField(t.name, t.collection);
          if (n) {
            let e = !1;
            for (let t of this.subqueries)
              e
                ? t.referencedOuterFields.add(n.field)
                : ((e = t.inScope.has(n)),
                  e && t.referencedFields.add(n.field));
            return this.normalizer.newScalarVariable(n.field, e);
          }
          return this.normalizer.newScalarConstant(Gx, null);
        }
        buildLiteralValue(e) {
          let t = Wx.parse(e.value);
          return this.normalizer.newScalarConstant(Gx, t);
        }
        buildFunctionCall(e, t) {
          let n = (n) => {
            let r = t.arguments[n];
            return V(r, `Missing argument`), this.buildExpression(e, r);
          };
          switch (t.functionName) {
            case `CONTAINS`: {
              let e = n(0),
                t = n(1);
              return this.normalizer.newScalarContains(e, t);
            }
            case `STARTS_WITH`: {
              let e = n(0),
                t = n(1);
              return this.normalizer.newScalarStartsWith(e, t);
            }
            case `ENDS_WITH`: {
              let e = n(0),
                t = n(1);
              return this.normalizer.newScalarEndsWith(e, t);
            }
            case `LENGTH`: {
              let e = n(0);
              return this.normalizer.newScalarLength(e);
            }
            case `INDEX_OF`: {
              let e = n(0),
                t = n(1);
              return this.normalizer.newScalarIndexOf(e, t);
            }
            case `ARRAY`: {
              let n = t.arguments[0];
              return (
                V(n, `Missing argument`),
                V(
                  n.type === `Select`,
                  `Subqueries require a select expression`
                ),
                this.buildSubqueryArray(e, n)
              );
            }
            case `FLAT_ARRAY`: {
              let n = t.arguments[0];
              return (
                V(n, `Missing argument`),
                V(
                  n.type === `Select`,
                  `Subqueries require a select expression`
                ),
                this.buildSubqueryFlatArray(e, n)
              );
            }
            default:
              throw Error(`Unsupported function name`);
          }
        }
        buildSubqueryArray(e, t) {
          try {
            let n = new yS(e);
            this.subqueries.push(n);
            let r = this.buildSelect(e, t),
              i = r.takeNode(),
              a = r.getNamedFields(),
              o = r.getRequiredOrdering(),
              s = n.referencedFields,
              c = n.referencedOuterFields;
            return this.normalizer.newScalarArray(i, a, o, s, c);
          } finally {
            this.subqueries.pop();
          }
        }
        buildSubqueryFlatArray(e, t) {
          try {
            let n = new yS(e);
            this.subqueries.push(n);
            let r = this.buildSelect(e, t),
              i = r.takeNode(),
              a = r.getSingleField(),
              o = r.getRequiredOrdering(),
              s = n.referencedFields,
              c = n.referencedOuterFields;
            return this.normalizer.newScalarFlatArray(i, a, o, s, c);
          } finally {
            this.subqueries.pop();
          }
        }
        buildCase(e, t) {
          let n;
          t.value && (n = this.buildExpression(e, t.value));
          let r = t.conditions.map((t) => {
              let n = this.buildExpression(e, t.when),
                r = this.buildExpression(e, t.then);
              return new gS(n, r);
            }),
            i;
          return (
            t.else && (i = this.buildExpression(e, t.else)),
            this.normalizer.newScalarCase(n, r, i)
          );
        }
        buildUnaryOperation(e, t) {
          let n = this.buildExpression(e, t.value);
          switch (t.operator) {
            case `not`:
              return this.normalizer.newScalarNot(n);
            default:
              H(t.operator, `Unsupported unary operator`);
          }
        }
        buildBinaryOperation(e, t) {
          let n = this.buildExpression(e, t.left),
            r = this.buildExpression(e, t.right);
          switch (t.operator) {
            case `and`:
              return this.normalizer.newScalarAnd(n, r);
            case `or`:
              return this.normalizer.newScalarOr(n, r);
            case `==`:
              return this.normalizer.newScalarEquals(n, r);
            case `!=`:
              return this.normalizer.newScalarNotEquals(n, r);
            case `<`:
              return this.normalizer.newScalarLessThan(n, r);
            case `<=`:
              return this.normalizer.newScalarLessThanOrEqual(n, r);
            case `>`:
              return this.normalizer.newScalarGreaterThan(n, r);
            case `>=`:
              return this.normalizer.newScalarGreaterThanOrEqual(n, r);
            case `in`:
              return this.normalizer.newScalarIn(n, r);
            default:
              H(t.operator, `Unsupported binary operator`);
          }
        }
        buildTypeCast(e, t) {
          let n = this.buildExpression(e, t.value);
          switch (t.dataType) {
            case `BOOLEAN`: {
              let e = { type: `boolean`, isNullable: !0 };
              return this.normalizer.newScalarCast(n, e);
            }
            case `DATE`: {
              let e = { type: `date`, isNullable: !0 };
              return this.normalizer.newScalarCast(n, e);
            }
            case `NUMBER`: {
              let e = { type: `number`, isNullable: !0 };
              return this.normalizer.newScalarCast(n, e);
            }
            case `STRING`: {
              let e = { type: `string`, isNullable: !0 };
              return this.normalizer.newScalarCast(n, e);
            }
            default:
              throw Error(`Unsupported data type`);
          }
        }
      }),
      (yS = class {
        constructor(e) {
          (this.inScope = e),
            F(this, `referencedFields`, new $()),
            F(this, `referencedOuterFields`, new $());
        }
      }),
      (bS = class e extends Xx {
        constructor(e, t) {
          super(e.isSynchronous && t.isSynchronous),
            (this.input = e),
            (this.predicate = t),
            F(this, `inputGroup`),
            (this.inputGroup = e.getGroup());
        }
        getHash() {
          return K(`RelationalFilter`, this.inputGroup.id, this.predicate);
        }
        getOutputFields() {
          return this.inputGroup.relational.outputFields;
        }
        canProvideOrdering() {
          return !0;
        }
        canProvideResolvedFields() {
          return !0;
        }
        getInputRequiredProps(e) {
          let t = new $(e.resolvedFields);
          return (
            t.merge(this.predicate.referencedFields), new sS(e.ordering, t)
          );
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n),
            i = this.predicate.optimize(e);
          return new Q(0).add(Q.max(r, i));
        }
        getOptimized(t) {
          let n = this.getInputRequiredProps(t),
            r = this.inputGroup.getOptimized(n),
            i = this.predicate.getOptimized();
          return new e(r, i);
        }
        *evaluate(e) {
          let t = yield* this.input.evaluate(e),
            n = yield* Cu(t.tuples.map((t) => this.predicate.evaluate(e, t)));
          return t.filter((e, t) => {
            let r = n[t] ?? null;
            return Gl(r);
          });
        }
      }),
      (xS = class e extends Xx {
        constructor(e, t) {
          super(!1), (this.index = e), (this.query = t);
        }
        getHash() {
          return K(`RelationalIndexLookup`, this.index.id, ...this.query);
        }
        getOutputFields() {
          return this.index.collection.fields;
        }
        canProvideOrdering(e) {
          return e.equals(this.index.ordering);
        }
        canProvideResolvedFields(e) {
          return e.subsetOf(this.index.resolvedFields);
        }
        optimize() {
          let e = this.query.every((e) => e.type === `All`);
          return Q.estimate(1, e ? 100 * Kx : 50 * Kx);
        }
        getOptimized() {
          return new e(this.index, this.query);
        }
        *evaluate() {
          let e = this.index,
            t = e.collection,
            n = this.getOutputFields(),
            r = yield e.data.lookupItems(this.query),
            i = r.map((n) => {
              let r = new lS();
              for (let i of e.resolvedFields) {
                let e = i.getValue(n);
                r.addPointer(t, n.pointer), r.addValue(i, e);
              }
              return r;
            });
          return new uS(n, i);
        }
      }),
      (SS = class e extends Xx {
        constructor(e, t) {
          super(e.isSynchronous && t.isSynchronous),
            (this.left = e),
            (this.right = t),
            F(this, `leftGroup`),
            F(this, `rightGroup`),
            (this.leftGroup = e.getGroup()),
            (this.rightGroup = t.getGroup());
        }
        getHash() {
          return K(
            `RelationalIntersection`,
            this.leftGroup.id,
            this.rightGroup.id
          );
        }
        getOutputFields() {
          let e = new $(),
            t = this.leftGroup.relational.outputFields,
            n = this.rightGroup.relational.outputFields;
          for (let r of t) n.has(r) && e.add(r);
          return e;
        }
        canProvideOrdering() {
          return !1;
        }
        canProvideResolvedFields() {
          return !0;
        }
        getChildRequiredProps(e) {
          let t = new oS();
          return new sS(t, e.resolvedFields);
        }
        optimize(e, t) {
          let n = this.getChildRequiredProps(t),
            r = e.optimizeGroup(this.leftGroup, n),
            i = this.getChildRequiredProps(t),
            a = e.optimizeGroup(this.rightGroup, i);
          return Q.max(r, a);
        }
        getOptimized(t) {
          let n = this.getChildRequiredProps(t),
            r = this.leftGroup.getOptimized(n),
            i = this.getChildRequiredProps(t),
            a = this.rightGroup.getOptimized(i);
          return new e(r, a);
        }
        *evaluate(e) {
          let { left: t, right: n } = yield* Su({
            left: this.left.evaluate(e),
            right: this.right.evaluate(e),
          });
          return t.intersection(n);
        }
      }),
      (CS = class e extends mS {
        constructor(e, t) {
          let n = new $();
          n.merge(e.referencedFields), n.merge(t.referencedFields);
          let r = new $();
          r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields);
          let i = e.isSynchronous && t.isSynchronous;
          super(n, r, i),
            (this.left = e),
            (this.right = t),
            F(this, `definition`, { type: `boolean`, isNullable: !1 });
        }
        getHash() {
          return K(`ScalarEquals`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* Su({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: Wx.equal(n, r, pS) };
        }
      }),
      (wS = class e extends Xx {
        constructor(e, t, n) {
          super(e.isSynchronous && t.isSynchronous && n.isSynchronous),
            (this.left = e),
            (this.right = t),
            (this.constraint = n),
            F(this, `leftGroup`),
            F(this, `rightGroup`),
            (this.leftGroup = e.getGroup()),
            (this.rightGroup = t.getGroup());
        }
        getHash() {
          return K(
            `RelationalLeftJoin`,
            this.leftGroup.id,
            this.rightGroup.id,
            this.constraint
          );
        }
        getOutputFields() {
          let e = new $();
          return (
            e.merge(this.leftGroup.relational.outputFields),
            e.merge(this.rightGroup.relational.outputFields),
            e
          );
        }
        canProvideOrdering() {
          return !1;
        }
        canProvideResolvedFields() {
          return !0;
        }
        getChildRequiredProps(e, t) {
          let n = new $(),
            r = e.relational.outputFields;
          for (let e of t.resolvedFields) r.has(e) && n.add(e);
          for (let e of this.constraint.referencedFields) r.has(e) && n.add(e);
          let i = new oS();
          return new sS(i, n);
        }
        optimize(e, t) {
          let n = this.getChildRequiredProps(this.leftGroup, t),
            r = e.optimizeGroup(this.leftGroup, n),
            i = this.getChildRequiredProps(this.rightGroup, t),
            a = e.optimizeGroup(this.rightGroup, i),
            o = this.constraint.optimize(e);
          return Q.max(Q.max(r, a), o);
        }
        getOptimized(t) {
          let n = this.getChildRequiredProps(this.leftGroup, t),
            r = this.leftGroup.getOptimized(n),
            i = this.getChildRequiredProps(this.rightGroup, t),
            a = this.rightGroup.getOptimized(i),
            o = this.constraint.getOptimized();
          return new e(r, a, o);
        }
        *evaluateScalarEquals(e, t, n, r, i) {
          let a = new Map();
          for (let e of t.tuples) {
            let t = yield* r.evaluate(i, e),
              n = JSON.stringify(t?.value ?? null),
              o = a.get(n) ?? [];
            o.push(e), a.set(n, o);
          }
          let o = this.getOutputFields(),
            s = new uS(o);
          for (let t of e.tuples) {
            let e = yield* n.evaluate(i, t),
              r = JSON.stringify(e?.value ?? null),
              o = a.get(r) ?? [];
            if (o.length === 0) s.push(t);
            else
              for (let e of o) {
                let n = new lS();
                n.merge(t), n.merge(e), s.push(n);
              }
          }
          return s;
        }
        *evaluate(e) {
          let { left: t, right: n } = yield* Su({
            left: this.left.evaluate(e),
            right: this.right.evaluate(e),
          });
          if (this.constraint instanceof CS) {
            if (
              this.constraint.left.referencedFields.subsetOf(
                this.leftGroup.relational.outputFields
              ) &&
              this.constraint.right.referencedFields.subsetOf(
                this.rightGroup.relational.outputFields
              )
            )
              return yield* this.evaluateScalarEquals(
                t,
                n,
                this.constraint.left,
                this.constraint.right,
                e
              );
            if (
              this.constraint.right.referencedFields.subsetOf(
                this.leftGroup.relational.outputFields
              ) &&
              this.constraint.left.referencedFields.subsetOf(
                this.rightGroup.relational.outputFields
              )
            )
              return yield* this.evaluateScalarEquals(
                t,
                n,
                this.constraint.right,
                this.constraint.left,
                e
              );
          }
          let r = this.getOutputFields(),
            i = new uS(r);
          for (let r of t.tuples) {
            let t = !1;
            for (let a of n.tuples) {
              let n = new lS();
              n.merge(r), n.merge(a);
              let o = yield* this.constraint.evaluate(e, n);
              Gl(o) && (i.push(n), (t = !0));
            }
            t || i.push(r);
          }
          return i;
        }
      }),
      (TS = class e extends Xx {
        constructor(e, t, n) {
          super(e.isSynchronous && t.isSynchronous && n.isSynchronous),
            (this.left = e),
            (this.right = t),
            (this.constraint = n),
            F(this, `leftGroup`),
            F(this, `rightGroup`),
            (this.leftGroup = e.getGroup()),
            (this.rightGroup = t.getGroup());
        }
        getHash() {
          return K(
            `RelationalRightJoin`,
            this.leftGroup.id,
            this.rightGroup.id,
            this.constraint
          );
        }
        getOutputFields() {
          let e = new $();
          return (
            e.merge(this.leftGroup.relational.outputFields),
            e.merge(this.rightGroup.relational.outputFields),
            e
          );
        }
        canProvideOrdering() {
          return !1;
        }
        canProvideResolvedFields() {
          return !0;
        }
        getChildRequiredProps(e, t) {
          let n = new $(),
            r = e.relational.outputFields;
          for (let e of t.resolvedFields) r.has(e) && n.add(e);
          for (let e of this.constraint.referencedFields) r.has(e) && n.add(e);
          let i = new oS();
          return new sS(i, n);
        }
        optimize(e, t) {
          let n = this.getChildRequiredProps(this.leftGroup, t),
            r = e.optimizeGroup(this.leftGroup, n),
            i = this.getChildRequiredProps(this.rightGroup, t),
            a = e.optimizeGroup(this.rightGroup, i),
            o = this.constraint.optimize(e);
          return Q.max(Q.max(r, a), o);
        }
        getOptimized(t) {
          let n = this.getChildRequiredProps(this.leftGroup, t),
            r = this.leftGroup.getOptimized(n),
            i = this.getChildRequiredProps(this.rightGroup, t),
            a = this.rightGroup.getOptimized(i),
            o = this.constraint.getOptimized();
          return new e(r, a, o);
        }
        *evaluateScalarEquals(e, t, n, r, i) {
          let a = new Map();
          for (let t of e.tuples) {
            let e = yield* n.evaluate(i, t),
              r = JSON.stringify(e?.value ?? null),
              o = a.get(r) ?? [];
            o.push(t), a.set(r, o);
          }
          let o = this.getOutputFields(),
            s = new uS(o);
          for (let e of t.tuples) {
            let t = yield* r.evaluate(i, e),
              n = JSON.stringify(t?.value ?? null),
              o = a.get(n) ?? [];
            if (o.length === 0) s.push(e);
            else
              for (let t of o) {
                let n = new lS();
                n.merge(e), n.merge(t), s.push(n);
              }
          }
          return s;
        }
        *evaluate(e) {
          let { left: t, right: n } = yield* Su({
            left: this.left.evaluate(e),
            right: this.right.evaluate(e),
          });
          if (this.constraint instanceof CS) {
            if (
              this.constraint.left.referencedFields.subsetOf(
                this.leftGroup.relational.outputFields
              ) &&
              this.constraint.right.referencedFields.subsetOf(
                this.rightGroup.relational.outputFields
              )
            )
              return yield* this.evaluateScalarEquals(
                t,
                n,
                this.constraint.left,
                this.constraint.right,
                e
              );
            if (
              this.constraint.right.referencedFields.subsetOf(
                this.leftGroup.relational.outputFields
              ) &&
              this.constraint.left.referencedFields.subsetOf(
                this.rightGroup.relational.outputFields
              )
            )
              return yield* this.evaluateScalarEquals(
                t,
                n,
                this.constraint.right,
                this.constraint.left,
                e
              );
          }
          let r = this.getOutputFields(),
            i = new uS(r);
          for (let r of n.tuples) {
            let n = !1;
            for (let a of t.tuples) {
              let t = new lS();
              t.merge(r), t.merge(a);
              let o = yield* this.constraint.evaluate(e, t);
              Gl(o) && (i.push(t), (n = !0));
            }
            n || i.push(r);
          }
          return i;
        }
      }),
      (ES = class e extends Xx {
        constructor(e) {
          super(!1), (this.collection = e);
        }
        getHash() {
          return K(`RelationalScan`, this.collection.id);
        }
        getOutputFields() {
          return this.collection.fields;
        }
        canProvideOrdering() {
          return !1;
        }
        canProvideResolvedFields(e) {
          return e.subsetOf(this.collection.fields);
        }
        optimize() {
          return Q.estimate(1, 200 * Kx);
        }
        getOptimized() {
          return new e(this.collection);
        }
        *evaluate() {
          let e = this.collection,
            t = this.getOutputFields(),
            n = yield e.data.scanItems(),
            r = n.map((n) => {
              let r = new lS();
              for (let i of t) {
                let t = i.getValue(n);
                r.addPointer(e, n.pointer), r.addValue(i, t);
              }
              return r;
            });
          return new uS(t, r);
        }
      }),
      (DS = class e extends Xx {
        constructor(e, t) {
          super(e.isSynchronous && t.isSynchronous),
            (this.left = e),
            (this.right = t),
            F(this, `leftGroup`),
            F(this, `rightGroup`),
            (this.leftGroup = e.getGroup()),
            (this.rightGroup = t.getGroup());
        }
        getHash() {
          return K(`RelationalUnion`, this.leftGroup.id, this.rightGroup.id);
        }
        getOutputFields() {
          let e = new $(),
            t = this.leftGroup.relational.outputFields,
            n = this.rightGroup.relational.outputFields;
          for (let r of t) n.has(r) && e.add(r);
          return e;
        }
        canProvideOrdering() {
          return !1;
        }
        canProvideResolvedFields() {
          return !0;
        }
        getChildRequiredProps(e) {
          let t = new oS();
          return new sS(t, e.resolvedFields);
        }
        optimize(e, t) {
          let n = this.getChildRequiredProps(t),
            r = e.optimizeGroup(this.leftGroup, n),
            i = this.getChildRequiredProps(t),
            a = e.optimizeGroup(this.rightGroup, i);
          return Q.max(r, a);
        }
        getOptimized(t) {
          let n = this.getChildRequiredProps(t),
            r = this.leftGroup.getOptimized(n),
            i = this.getChildRequiredProps(t),
            a = this.rightGroup.getOptimized(i);
          return new e(r, a);
        }
        *evaluate(e) {
          let { left: t, right: n } = yield* Su({
            left: this.left.evaluate(e),
            right: this.right.evaluate(e),
          });
          return t.union(n);
        }
      }),
      (OS = class e extends mS {
        constructor(e, t) {
          let n = new $();
          n.merge(e.referencedFields), n.merge(t.referencedFields);
          let r = new $();
          r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields);
          let i = e.isSynchronous && t.isSynchronous;
          super(n, r, i),
            (this.left = e),
            (this.right = t),
            F(this, `definition`, { type: `boolean`, isNullable: !1 });
        }
        getHash() {
          return K(`ScalarAnd`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* Su({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: Gl(n) && Gl(r) };
        }
      }),
      (kS = class extends mS {
        constructor(e, t) {
          let n = new $(),
            r = new $();
          super(n, r, !0), (this.definition = e), (this.value = t);
        }
        getHash() {
          return K(`ScalarConstant`, this.definition, this.value);
        }
        optimize() {
          return new Q(0);
        }
        getOptimized() {
          return this;
        }
        *evaluate() {
          return this.value;
        }
      }),
      (AS = { type: 0 }),
      (jS = class e extends mS {
        constructor(e, t) {
          let n = new $();
          n.merge(e.referencedFields), n.merge(t.referencedFields);
          let r = new $();
          r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields);
          let i = e.isSynchronous && t.isSynchronous;
          super(n, r, i),
            (this.source = e),
            (this.target = t),
            F(this, `definition`, { type: `boolean`, isNullable: !1 });
        }
        getHash() {
          return K(`ScalarContains`, this.source, this.target);
        }
        optimize(e) {
          let t = this.source.optimize(e),
            n = this.target.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          let t = this.source.getOptimized(),
            n = this.target.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { source: n, target: r } = yield* Su({
            source: this.source.evaluate(e, t),
            target: this.target.evaluate(e, t),
          });
          return { type: `boolean`, value: Wx.contains(n, r, AS) };
        }
      }),
      (MS = { type: 0 }),
      (NS = class e extends mS {
        constructor(e, t) {
          let n = new $();
          n.merge(e.referencedFields), n.merge(t.referencedFields);
          let r = new $();
          r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields);
          let i = e.isSynchronous && t.isSynchronous;
          super(n, r, i),
            (this.source = e),
            (this.target = t),
            F(this, `definition`, { type: `boolean`, isNullable: !1 });
        }
        getHash() {
          return K(`ScalarEndsWith`, this.source, this.target);
        }
        optimize(e) {
          let t = this.source.optimize(e),
            n = this.target.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          let t = this.source.getOptimized(),
            n = this.target.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { source: n, target: r } = yield* Su({
            source: this.source.evaluate(e, t),
            target: this.target.evaluate(e, t),
          });
          return { type: `boolean`, value: Wx.endsWith(n, r, MS) };
        }
      }),
      (PS = class e extends mS {
        constructor(e, t) {
          let n = new $();
          n.merge(e.referencedFields), n.merge(t.referencedFields);
          let r = new $();
          r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields);
          let i = e.isSynchronous && t.isSynchronous;
          super(n, r, i),
            (this.left = e),
            (this.right = t),
            F(this, `definition`, { type: `boolean`, isNullable: !1 });
        }
        getHash() {
          return K(`ScalarGreaterThan`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* Su({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: Wx.greaterThan(n, r, pS) };
        }
      }),
      (FS = class e extends mS {
        constructor(e, t) {
          let n = new $();
          n.merge(e.referencedFields), n.merge(t.referencedFields);
          let r = new $();
          r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields);
          let i = e.isSynchronous && t.isSynchronous;
          super(n, r, i),
            (this.left = e),
            (this.right = t),
            F(this, `definition`, { type: `boolean`, isNullable: !1 });
        }
        getHash() {
          return K(`ScalarGreaterThanOrEqual`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* Su({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: Wx.greaterThanOrEqual(n, r, pS) };
        }
      }),
      (IS = class e extends mS {
        constructor(e, t) {
          let n = new $();
          n.merge(e.referencedFields), n.merge(t.referencedFields);
          let r = new $();
          r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields);
          let i = e.isSynchronous && t.isSynchronous;
          super(n, r, i),
            (this.left = e),
            (this.right = t),
            F(this, `definition`, { type: `boolean`, isNullable: !1 });
        }
        getHash() {
          return K(`ScalarLessThan`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* Su({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: Wx.lessThan(n, r, pS) };
        }
      }),
      (LS = class e extends mS {
        constructor(e, t) {
          let n = new $();
          n.merge(e.referencedFields), n.merge(t.referencedFields);
          let r = new $();
          r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields);
          let i = e.isSynchronous && t.isSynchronous;
          super(n, r, i),
            (this.left = e),
            (this.right = t),
            F(this, `definition`, { type: `boolean`, isNullable: !1 });
        }
        getHash() {
          return K(`ScalarLessThanOrEqual`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* Su({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: Wx.lessThanOrEqual(n, r, pS) };
        }
      }),
      (RS = class e extends mS {
        constructor(e, t) {
          let n = new $();
          n.merge(e.referencedFields), n.merge(t.referencedFields);
          let r = new $();
          r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields);
          let i = e.isSynchronous && t.isSynchronous;
          super(n, r, i),
            (this.left = e),
            (this.right = t),
            F(this, `definition`, { type: `boolean`, isNullable: !1 });
        }
        getHash() {
          return K(`ScalarNotEquals`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* Su({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: !Wx.equal(n, r, pS) };
        }
      }),
      (zS = class e extends mS {
        constructor(e, t) {
          let n = new $();
          n.merge(e.referencedFields), n.merge(t.referencedFields);
          let r = new $();
          r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields);
          let i = e.isSynchronous && t.isSynchronous;
          super(n, r, i),
            (this.left = e),
            (this.right = t),
            F(this, `definition`, { type: `boolean`, isNullable: !1 });
        }
        getHash() {
          return K(`ScalarOr`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* Su({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: Gl(n) || Gl(r) };
        }
      }),
      (BS = { type: 0 }),
      (VS = class e extends mS {
        constructor(e, t) {
          let n = new $();
          n.merge(e.referencedFields), n.merge(t.referencedFields);
          let r = new $();
          r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields);
          let i = e.isSynchronous && t.isSynchronous;
          super(n, r, i),
            (this.source = e),
            (this.target = t),
            F(this, `definition`, { type: `boolean`, isNullable: !1 });
        }
        getHash() {
          return K(`ScalarStartsWith`, this.source, this.target);
        }
        optimize(e) {
          let t = this.source.optimize(e),
            n = this.target.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          let t = this.source.getOptimized(),
            n = this.target.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { source: n, target: r } = yield* Su({
            source: this.source.evaluate(e, t),
            target: this.target.evaluate(e, t),
          });
          return { type: `boolean`, value: Wx.startsWith(n, r, BS) };
        }
      }),
      (HS = class {
        constructor(e) {
          (this.normalizer = e), F(this, `memo`), (this.memo = e.memo);
        }
        explore(e) {
          let t = e.getGroup();
          if (e instanceof wS) {
            let n = new TS(e.right, e.left, e.constraint);
            this.memo.addRelational(n, t);
          }
          if (e instanceof bS) {
            if (e.predicate instanceof OS) {
              let n = this.normalizer.newRelationalFilter(
                  e.input,
                  e.predicate.left
                ),
                r = this.normalizer.newRelationalFilter(
                  e.input,
                  e.predicate.right
                ),
                i = new SS(n, r);
              this.memo.addRelational(i, t);
            }
            if (e.predicate instanceof zS) {
              let n = this.normalizer.newRelationalFilter(
                  e.input,
                  e.predicate.left
                ),
                r = this.normalizer.newRelationalFilter(
                  e.input,
                  e.predicate.right
                ),
                i = new DS(n, r);
              this.memo.addRelational(i, t);
            }
          }
          if (e instanceof ES)
            for (let n of e.collection.indexes) {
              if (n.constraint) continue;
              let e = Au(n.lookupNodes.length),
                r = new xS(n, e);
              this.memo.addRelational(r, t);
            }
          if (e instanceof bS) {
            for (let n of e.inputGroup.nodes)
              if (n instanceof ES)
                for (let r of n.collection.indexes) {
                  if (
                    e.predicate instanceof CS &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof kS &&
                    r.data.supportedLookupTypes.includes(`Equals`)
                  ) {
                    let n = Au(r.lookupNodes.length);
                    n[0] = { type: `Equals`, value: e.predicate.right.value };
                    let i = new xS(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof RS &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof kS &&
                    r.data.supportedLookupTypes.includes(`NotEquals`)
                  ) {
                    let n = Au(r.lookupNodes.length);
                    n[0] = {
                      type: `NotEquals`,
                      value: e.predicate.right.value,
                    };
                    let i = new xS(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof IS &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof kS &&
                    r.data.supportedLookupTypes.includes(`LessThan`)
                  ) {
                    let n = Au(r.lookupNodes.length);
                    n[0] = {
                      type: `LessThan`,
                      value: e.predicate.right.value,
                      inclusive: !1,
                    };
                    let i = new xS(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof LS &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof kS &&
                    r.data.supportedLookupTypes.includes(`LessThan`)
                  ) {
                    let n = Au(r.lookupNodes.length);
                    n[0] = {
                      type: `LessThan`,
                      value: e.predicate.right.value,
                      inclusive: !0,
                    };
                    let i = new xS(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof PS &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof kS &&
                    r.data.supportedLookupTypes.includes(`GreaterThan`)
                  ) {
                    let n = Au(r.lookupNodes.length);
                    n[0] = {
                      type: `GreaterThan`,
                      value: e.predicate.right.value,
                      inclusive: !1,
                    };
                    let i = new xS(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof FS &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof kS &&
                    r.data.supportedLookupTypes.includes(`GreaterThan`)
                  ) {
                    let n = Au(r.lookupNodes.length);
                    n[0] = {
                      type: `GreaterThan`,
                      value: e.predicate.right.value,
                      inclusive: !0,
                    };
                    let i = new xS(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof jS &&
                    e.predicate.source === r.lookupNodes[0] &&
                    e.predicate.target instanceof kS &&
                    r.data.supportedLookupTypes.includes(`Contains`)
                  ) {
                    let n = Au(r.lookupNodes.length);
                    n[0] = {
                      type: `Contains`,
                      value: e.predicate.target.value,
                    };
                    let i = new xS(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof VS &&
                    e.predicate.source === r.lookupNodes[0] &&
                    e.predicate.target instanceof kS &&
                    r.data.supportedLookupTypes.includes(`StartsWith`)
                  ) {
                    let n = Au(r.lookupNodes.length);
                    n[0] = {
                      type: `StartsWith`,
                      value: e.predicate.target.value,
                    };
                    let i = new xS(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof NS &&
                    e.predicate.source === r.lookupNodes[0] &&
                    e.predicate.target instanceof kS &&
                    r.data.supportedLookupTypes.includes(`EndsWith`)
                  ) {
                    let n = Au(r.lookupNodes.length);
                    n[0] = {
                      type: `EndsWith`,
                      value: e.predicate.target.value,
                    };
                    let i = new xS(r, n);
                    this.memo.addRelational(i, t);
                  }
                }
          }
        }
      }),
      (US = class {
        constructor(e) {
          this.outputFields = e;
        }
        isCompatible(e) {
          return this.outputFields.equals(e.outputFields);
        }
      }),
      (WS = class {
        constructor() {
          F(this, `nodes`, new Map()), F(this, `groups`, []);
        }
        addGroup(e) {
          let t = yu(this.groups.length),
            n = new qx(t, e);
          return this.groups.push(n), n;
        }
        addRelational(e, t) {
          let n = e.getHash(),
            r = this.nodes.get(n);
          if (r) return r;
          this.nodes.set(n, e);
          let i = e.getOutputFields(),
            a = new US(i);
          return (
            (t ??= this.addGroup(a)),
            t.addNode(e),
            V(
              a.isCompatible(t.relational),
              `Group has inconsistent relational props`
            ),
            e
          );
        }
        addScalar(e) {
          let t = e.getHash(),
            n = this.nodes.get(t);
          return n || (this.nodes.set(t, e), e);
        }
      }),
      (GS = class e extends Xx {
        constructor(e, t, n) {
          super(e.isSynchronous && t.isSynchronous),
            (this.input = e),
            (this.limit = t),
            (this.ordering = n),
            F(this, `inputGroup`),
            (this.inputGroup = e.getGroup());
        }
        getHash() {
          return K(`RelationalLimit`, this.inputGroup.id, this.limit);
        }
        getOutputFields() {
          return this.inputGroup.relational.outputFields;
        }
        canProvideOrdering(e) {
          return e.equals(this.ordering);
        }
        canProvideResolvedFields() {
          return !0;
        }
        getInputRequiredProps(e) {
          let t = new $(e.resolvedFields);
          return t.merge(this.limit.referencedFields), new sS(this.ordering, t);
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n),
            i = this.limit.optimize(e);
          return new Q(0).add(Q.max(r, i));
        }
        getOptimized(t) {
          let n = this.getInputRequiredProps(t),
            r = this.inputGroup.getOptimized(n),
            i = this.limit.getOptimized();
          return new e(r, i, this.ordering);
        }
        *evaluate(e) {
          let { input: t, limit: n } = yield* Su({
              input: this.input.evaluate(e),
              limit: this.limit.evaluate(e, void 0),
            }),
            r = iu(n) ?? 1 / 0;
          return r === 1 / 0 ? t : t.slice(0, r);
        }
      }),
      (KS = class e extends Xx {
        constructor(e, t, n) {
          super(e.isSynchronous && t.isSynchronous),
            (this.input = e),
            (this.offset = t),
            (this.ordering = n),
            F(this, `inputGroup`),
            (this.inputGroup = e.getGroup());
        }
        getHash() {
          return K(`RelationalOffset`, this.inputGroup.id, this.offset);
        }
        getOutputFields() {
          return this.inputGroup.relational.outputFields;
        }
        canProvideOrdering(e) {
          return e.equals(this.ordering);
        }
        canProvideResolvedFields() {
          return !0;
        }
        getInputRequiredProps(e) {
          let t = new $(e.resolvedFields);
          return (
            t.merge(this.offset.referencedFields), new sS(this.ordering, t)
          );
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n),
            i = this.offset.optimize(e);
          return new Q(0).add(Q.max(r, i));
        }
        getOptimized(t) {
          let n = this.getInputRequiredProps(t),
            r = this.inputGroup.getOptimized(n),
            i = this.offset.getOptimized();
          return new e(r, i, this.ordering);
        }
        *evaluate(e) {
          let { input: t, offset: n } = yield* Su({
              input: this.input.evaluate(e),
              offset: this.offset.evaluate(e, void 0),
            }),
            r = iu(n) ?? 0;
          return r === 0 ? t : t.slice(r);
        }
      }),
      (qS = class e extends mS {
        constructor(e, t, n, r, i) {
          super(r, i, e.isSynchronous),
            (this.input = e),
            (this.namedFields = t),
            (this.ordering = n),
            (this.referencedFields = r),
            (this.referencedOuterFields = i),
            F(this, `inputGroup`),
            F(this, `definition`),
            (this.inputGroup = e.getGroup());
          let a = {},
            o = Object.entries(t);
          for (let [e, t] of o) a[e] = t.definition;
          this.definition = {
            type: `array`,
            isNullable: !1,
            definition: { type: `object`, isNullable: !1, definitions: a },
          };
        }
        getHash() {
          let e = {},
            t = Object.entries(this.namedFields);
          for (let [n, r] of t) e[n] = r.id;
          return K(
            `ScalarArray`,
            this.inputGroup.id,
            e,
            this.ordering,
            this.referencedFields,
            this.referencedOuterFields
          );
        }
        getInputRequiredProps() {
          let e = new $(),
            t = Object.values(this.namedFields);
          for (let n of t) {
            if (xt(n.collection)) continue;
            e.add(n);
          }
          return new sS(this.ordering, e);
        }
        optimize(e) {
          let t = this.getInputRequiredProps(),
            n = e.optimizeGroup(this.inputGroup, t);
          return new Q(0).add(n);
        }
        getOptimized() {
          let t = this.getInputRequiredProps(),
            n = this.inputGroup.getOptimized(t);
          return new e(
            n,
            this.namedFields,
            this.ordering,
            this.referencedFields,
            this.referencedOuterFields
          );
        }
        *evaluate(e, t) {
          let n = new lS();
          e && n.merge(e), t && n.merge(t);
          let r = yield* this.input.evaluate(n),
            i = Object.entries(this.namedFields);
          return {
            type: `array`,
            value: r.tuples.map((e) => {
              let t = {};
              for (let [n, r] of i) t[n] = e.getValue(r);
              return { type: `object`, value: t };
            }),
          };
        }
      }),
      (JS = class e extends mS {
        constructor(e, t) {
          super(e.referencedFields, e.referencedOuterFields, e.isSynchronous),
            (this.input = e),
            (this.definition = t),
            V(t.isNullable, `Unsupported non-nullable cast`);
        }
        getHash() {
          return K(`ScalarCast`, this.input, this.definition);
        }
        optimize(e) {
          return this.input.optimize(e);
        }
        getOptimized() {
          let t = this.input.getOptimized();
          return new e(t, this.definition);
        }
        *evaluate(e, t) {
          let n = yield* this.input.evaluate(e, t);
          return Wx.cast(n, this.definition);
        }
      }),
      (YS = class e extends mS {
        constructor(e, t, n, r, i) {
          super(r, i, e.isSynchronous),
            (this.input = e),
            (this.field = t),
            (this.ordering = n),
            (this.referencedFields = r),
            (this.referencedOuterFields = i),
            F(this, `inputGroup`),
            F(this, `definition`),
            (this.inputGroup = e.getGroup()),
            (this.definition = {
              type: `array`,
              isNullable: !1,
              definition: t.definition,
            });
        }
        getHash() {
          return K(
            `ScalarFlatArray`,
            this.inputGroup.id,
            this.field.id,
            this.ordering,
            this.referencedFields,
            this.referencedOuterFields
          );
        }
        getInputRequiredProps() {
          let e = new $();
          return (
            xt(this.field.collection) || e.add(this.field),
            new sS(this.ordering, e)
          );
        }
        optimize(e) {
          let t = this.getInputRequiredProps(),
            n = e.optimizeGroup(this.inputGroup, t);
          return new Q(0).add(n);
        }
        getOptimized() {
          let t = this.getInputRequiredProps(),
            n = this.inputGroup.getOptimized(t);
          return new e(
            n,
            this.field,
            this.ordering,
            this.referencedFields,
            this.referencedOuterFields
          );
        }
        *evaluate(e, t) {
          let n = new lS();
          e && n.merge(e), t && n.merge(t);
          let r = yield* this.input.evaluate(n);
          return {
            type: `array`,
            value: r.tuples.map((e) => e.getValue(this.field)),
          };
        }
      }),
      (XS = { type: 0 }),
      (ZS = class e extends mS {
        constructor(e, t) {
          let n = new $();
          n.merge(e.referencedFields), n.merge(t.referencedFields);
          let r = new $();
          r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields);
          let i = e.isSynchronous && t.isSynchronous;
          super(n, r, i),
            (this.left = e),
            (this.right = t),
            F(this, `definition`, { type: `boolean`, isNullable: !1 });
        }
        getHash() {
          return K(`ScalarIn`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* Su({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: Wx.in(n, r, XS) };
        }
      }),
      (QS = { type: 1 }),
      ($S = class e extends mS {
        constructor(e, t) {
          let n = new $();
          n.merge(e.referencedFields), n.merge(t.referencedFields);
          let r = new $();
          r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields);
          let i = e.isSynchronous && t.isSynchronous;
          super(n, r, i),
            (this.source = e),
            (this.target = t),
            F(this, `definition`, { type: `number`, isNullable: !1 });
        }
        getHash() {
          return K(`ScalarIndexOf`, this.source, this.target);
        }
        optimize(e) {
          let t = this.source.optimize(e),
            n = this.target.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          let t = this.source.getOptimized(),
            n = this.target.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { source: n, target: r } = yield* Su({
            source: this.source.evaluate(e, t),
            target: this.target.evaluate(e, t),
          });
          return { type: `number`, value: Wx.indexOf(n, r, QS) };
        }
      }),
      (eC = class e extends mS {
        constructor(e) {
          super(e.referencedFields, e.referencedOuterFields, e.isSynchronous),
            (this.input = e),
            F(this, `definition`, { type: `number`, isNullable: !1 });
        }
        getHash() {
          return K(`ScalarLength`, this.input);
        }
        optimize(e) {
          return this.input.optimize(e);
        }
        getOptimized() {
          let t = this.input.getOptimized();
          return new e(t);
        }
        *evaluate(e, t) {
          let n = yield* this.input.evaluate(e, t);
          return { type: `number`, value: Wx.length(n) };
        }
      }),
      (tC = class e extends mS {
        constructor(e) {
          super(e.referencedFields, e.referencedOuterFields, e.isSynchronous),
            (this.input = e),
            F(this, `definition`, { type: `boolean`, isNullable: !1 });
        }
        getHash() {
          return K(`ScalarNot`, this.input);
        }
        optimize(e) {
          return this.input.optimize(e);
        }
        getOptimized() {
          let t = this.input.getOptimized();
          return new e(t);
        }
        *evaluate(e, t) {
          let n = yield* this.input.evaluate(e, t);
          return { type: `boolean`, value: !Gl(n) };
        }
      }),
      (nC = { type: 0 }),
      (rC = class e extends mS {
        constructor(e, t) {
          let n = new $();
          n.merge(e.referencedFields), n.merge(t.referencedFields);
          let r = new $();
          r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields);
          let i = e.isSynchronous && t.isSynchronous;
          super(n, r, i),
            (this.left = e),
            (this.right = t),
            F(this, `definition`, { type: `boolean`, isNullable: !1 });
        }
        getHash() {
          return K(`ScalarNotIn`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* Su({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: !Wx.in(n, r, nC) };
        }
      }),
      (iC = class extends mS {
        constructor(e, t) {
          V(e.name !== $x, `Invalid field name`);
          let n = new $(),
            r = new $();
          t ? r.add(e) : n.add(e),
            super(n, r, !0),
            (this.field = e),
            (this.isOuterField = t),
            F(this, `definition`),
            (this.definition = e.definition);
        }
        getHash() {
          return K(`ScalarVariable`, this.field.id, this.isOuterField);
        }
        optimize() {
          return new Q(0);
        }
        getOptimized() {
          return this;
        }
        *evaluate(e, t) {
          return this.isOuterField
            ? (V(e, `Context must exist`), e.getValue(this.field))
            : (V(t, `Tuple must exist`), t.getValue(this.field));
        }
      }),
      (aC = class {
        constructor(e) {
          this.memo = e;
        }
        finishRelational(e) {
          return this.memo.addRelational(e);
        }
        newRelationalScan(e) {
          let t = new ES(e);
          return this.finishRelational(t);
        }
        newRelationalIndexLookup(e, t) {
          let n = new xS(e, t);
          return this.finishRelational(n);
        }
        newRelationalLeftJoin(e, t, n) {
          let r = new wS(e, t, n);
          return this.finishRelational(r);
        }
        newRelationalRightJoin(e, t, n) {
          return this.newRelationalLeftJoin(t, e, n);
        }
        newRelationalFilter(e, t) {
          if (
            e instanceof wS &&
            t.referencedFields.subsetOf(e.leftGroup.relational.outputFields)
          ) {
            let n = this.newRelationalFilter(e.left, t);
            return this.newRelationalLeftJoin(n, e.right, e.constraint);
          }
          if (
            e instanceof TS &&
            t.referencedFields.subsetOf(e.rightGroup.relational.outputFields)
          ) {
            let n = this.newRelationalFilter(e.right, t);
            return this.newRelationalLeftJoin(e.left, n, e.constraint);
          }
          let n = new bS(e, t);
          return this.finishRelational(n);
        }
        newRelationalProject(e, t, n) {
          let r = new fS(e, t, n);
          return this.finishRelational(r);
        }
        newRelationalLimit(e, t, n) {
          if (
            e instanceof fS &&
            t.referencedFields.subsetOf(e.inputGroup.relational.outputFields) &&
            n.providedByFields(e.inputGroup.relational.outputFields)
          ) {
            let r = this.newRelationalLimit(e.input, t, n);
            return this.newRelationalProject(r, e.projections, e.passthrough);
          }
          let r = new GS(e, t, n);
          return this.finishRelational(r);
        }
        newRelationalOffset(e, t, n) {
          let r = new KS(e, t, n);
          return this.finishRelational(r);
        }
        finishScalar(e) {
          let t = e instanceof kS;
          if (
            !t &&
            e.isSynchronous &&
            e.referencedFields.size === 0 &&
            e.referencedOuterFields.size === 0
          ) {
            let t = e.evaluateSync();
            return this.newScalarConstant(e.definition, t);
          }
          return this.memo.addScalar(e);
        }
        removeUnknown(e, t) {
          if (e.definition.type !== `unknown` || t.type === `unknown`) return e;
          let n = { ...t, isNullable: !0 };
          return this.newScalarCast(e, n);
        }
        newScalarVariable(e, t) {
          let n = new iC(e, t);
          return this.finishScalar(n);
        }
        newScalarConstant(e, t) {
          let n = new kS(e, t);
          return this.finishScalar(n);
        }
        newScalarNot(e) {
          if (e instanceof tC) {
            if (e.input.definition.type === `boolean`) return e.input;
            let t = { type: `boolean`, isNullable: !0 };
            return this.newScalarCast(e.input, t);
          }
          if (e instanceof CS) return this.newScalarNotEquals(e.left, e.right);
          if (e instanceof RS) return this.newScalarEquals(e.left, e.right);
          if (e instanceof IS)
            return this.newScalarGreaterThanOrEqual(e.left, e.right);
          if (e instanceof LS)
            return this.newScalarGreaterThan(e.left, e.right);
          if (e instanceof PS)
            return this.newScalarLessThanOrEqual(e.left, e.right);
          if (e instanceof FS) return this.newScalarLessThan(e.left, e.right);
          if (e instanceof OS) {
            let t = this.newScalarNot(e.left),
              n = this.newScalarNot(e.right);
            return this.newScalarOr(t, n);
          }
          if (e instanceof zS) {
            let t = this.newScalarNot(e.left),
              n = this.newScalarNot(e.right);
            return this.newScalarAnd(t, n);
          }
          let t = new tC(e);
          return this.finishScalar(t);
        }
        newScalarAnd(e, t) {
          let n = new OS(e, t);
          return this.finishScalar(n);
        }
        newScalarOr(e, t) {
          let n = new zS(e, t);
          return this.finishScalar(n);
        }
        newScalarEquals(e, t) {
          let n = e instanceof iC,
            r = t instanceof iC;
          if (r && !n) return this.newScalarEquals(t, e);
          (e = this.removeUnknown(e, t.definition)),
            (t = this.removeUnknown(t, e.definition));
          let i = new CS(e, t);
          return this.finishScalar(i);
        }
        newScalarNotEquals(e, t) {
          let n = e instanceof iC,
            r = t instanceof iC;
          if (r && !n) return this.newScalarNotEquals(t, e);
          (e = this.removeUnknown(e, t.definition)),
            (t = this.removeUnknown(t, e.definition));
          let i = new RS(e, t);
          return this.finishScalar(i);
        }
        newScalarLessThan(e, t) {
          let n = e instanceof iC,
            r = t instanceof iC;
          if (r && !n) return this.newScalarGreaterThan(t, e);
          (e = this.removeUnknown(e, t.definition)),
            (t = this.removeUnknown(t, e.definition));
          let i = new IS(e, t);
          return this.finishScalar(i);
        }
        newScalarLessThanOrEqual(e, t) {
          let n = e instanceof iC,
            r = t instanceof iC;
          if (r && !n) return this.newScalarGreaterThanOrEqual(t, e);
          (e = this.removeUnknown(e, t.definition)),
            (t = this.removeUnknown(t, e.definition));
          let i = new LS(e, t);
          return this.finishScalar(i);
        }
        newScalarGreaterThan(e, t) {
          let n = e instanceof iC,
            r = t instanceof iC;
          if (r && !n) return this.newScalarLessThan(t, e);
          (e = this.removeUnknown(e, t.definition)),
            (t = this.removeUnknown(t, e.definition));
          let i = new PS(e, t);
          return this.finishScalar(i);
        }
        newScalarGreaterThanOrEqual(e, t) {
          let n = e instanceof iC,
            r = t instanceof iC;
          if (r && !n) return this.newScalarLessThanOrEqual(t, e);
          (e = this.removeUnknown(e, t.definition)),
            (t = this.removeUnknown(t, e.definition));
          let i = new FS(e, t);
          return this.finishScalar(i);
        }
        newScalarIn(e, t) {
          t.definition.type === `array` &&
            (e = this.removeUnknown(e, t.definition.definition));
          let n = { type: `array`, isNullable: !0, definition: e.definition };
          t = this.removeUnknown(t, n);
          let r = new ZS(e, t);
          return this.finishScalar(r);
        }
        newScalarNotIn(e, t) {
          t.definition.type === `array` &&
            (e = this.removeUnknown(e, t.definition.definition));
          let n = { type: `array`, isNullable: !0, definition: e.definition };
          t = this.removeUnknown(t, n);
          let r = new rC(e, t);
          return this.finishScalar(r);
        }
        newScalarCase(e, t, n) {
          if (e) {
            let n = [];
            for (let { when: r, then: i } of t) {
              let t = this.removeUnknown(r, e.definition),
                a = new gS(t, i);
              n.push(a);
            }
            t = n;
          }
          let r = new _S(e, t, n);
          return this.finishScalar(r);
        }
        newScalarContains(e, t) {
          let n = new jS(e, t);
          return this.finishScalar(n);
        }
        newScalarStartsWith(e, t) {
          let n = new VS(e, t);
          return this.finishScalar(n);
        }
        newScalarEndsWith(e, t) {
          let n = new NS(e, t);
          return this.finishScalar(n);
        }
        newScalarLength(e) {
          let t = new eC(e);
          return this.finishScalar(t);
        }
        newScalarIndexOf(e, t) {
          let n = new $S(e, t);
          return this.finishScalar(n);
        }
        newScalarArray(e, t, n, r, i) {
          let a = new qS(e, t, n, r, i);
          return this.finishScalar(a);
        }
        newScalarFlatArray(e, t, n, r, i) {
          let a = new YS(e, t, n, r, i);
          return this.finishScalar(a);
        }
        newScalarCast(e, t) {
          if (e.definition.type === t.type) return e;
          let n = new JS(e, t);
          return this.finishScalar(n);
        }
      }),
      (oC = class extends Xx {}),
      (sC = class e extends oC {
        constructor(e, t) {
          super(!1),
            (this.input = e),
            (this.fields = t),
            F(this, `inputGroup`),
            (this.inputGroup = e.getGroup());
        }
        getHash() {
          return K(`EnforcerResolve`, this.inputGroup.id, this.fields);
        }
        getOutputFields() {
          return this.inputGroup.relational.outputFields;
        }
        canProvideOrdering() {
          return !0;
        }
        canProvideResolvedFields(e) {
          return e.subsetOf(this.fields);
        }
        getInputRequiredProps(e) {
          let t = new $();
          return new sS(e.ordering, t);
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n);
          return Q.estimate(0, 100 * Kx).add(r);
        }
        getOptimized(t) {
          let n = this.getInputRequiredProps(t),
            r = this.inputGroup.getOptimized(n);
          return new e(r, this.fields);
        }
        *evaluate(e) {
          let t = yield* this.input.evaluate(e);
          V(this.fields.subsetOf(t.fields), `Fields can't be resolved`);
          let n = new Set();
          for (let e of this.fields)
            V(e.collection, `Collection required to resolve field`),
              n.add(e.collection);
          for (let e of t.tuples)
            for (let t of this.fields) {
              let n = e.getValue(t);
              n?.type === `richtext`
                ? (V(n.value instanceof Zx, `Pointer must be wrapped`),
                  n.value.resolve())
                : n?.type === `vectorsetitem` &&
                  (V(n.value instanceof Qx, `Pointer must be wrapped`),
                  n.value.resolve());
            }
          let r = yield Promise.all(
            Array.from(n).map(async (e) => {
              let n = [];
              for (let r of t.tuples) {
                let t = r.getPointer(e);
                t && n.push(t);
              }
              let r = await e.data.resolveItems(n);
              return (
                V(r.length === n.length, `Invalid number of items`), [e, r]
              );
            })
          );
          return t.map(t.fields, (e) => {
            let t = new lS();
            t.merge(e);
            for (let [n, i] of r) {
              let r = e.getPointer(n);
              if (!r) continue;
              let a = i.shift();
              V(a, `Item not found`), V(a.pointer === r, `Pointer mismatch`);
              for (let e of n.fields) {
                let n = e.getValue(a);
                t.addValue(e, n);
              }
            }
            return t;
          });
        }
      }),
      (cC = { type: 0 }),
      (lC = class e extends oC {
        constructor(e, t) {
          super(e.isSynchronous),
            (this.input = e),
            (this.ordering = t),
            F(this, `inputGroup`),
            (this.inputGroup = e.getGroup());
        }
        getHash() {
          return K(`EnforcerSort`, this.inputGroup.id, this.ordering);
        }
        getOutputFields() {
          return this.inputGroup.relational.outputFields;
        }
        canProvideOrdering(e) {
          return e.equals(this.ordering);
        }
        canProvideResolvedFields() {
          return !0;
        }
        getInputRequiredProps(e) {
          let t = new $(e.resolvedFields);
          for (let { field: e } of this.ordering.fields) {
            if (e.name === $x || xt(e.collection)) continue;
            t.add(e);
          }
          let n = new oS();
          return new sS(n, t);
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n);
          return new Q(0).add(r);
        }
        getOptimized(t) {
          let n = this.getInputRequiredProps(t),
            r = this.inputGroup.getOptimized(n);
          return new e(r, this.ordering);
        }
        *evaluate(e) {
          let t = yield* this.input.evaluate(e);
          return t.sort((e, t) => {
            for (let { field: n, direction: r } of this.ordering.fields) {
              let i = r === `asc`;
              if (n.name === $x) {
                let r = n.collection;
                V(r, `Collection required for sorting`);
                let a = e.getPointer(r);
                V(a, `Pointer required for sorting`);
                let o = { pointer: a, data: {} },
                  s = t.getPointer(r);
                V(s, `Pointer required for sorting`);
                let c = { pointer: s, data: {} },
                  l = r.data.compareItems(o, c);
                return i ? l : -l;
              }
              let a = e.getValue(n),
                o = t.getValue(n);
              if (Wx.equal(a, o, cC)) continue;
              if (St(a) || Wx.lessThan(a, o, cC)) return i ? -1 : 1;
              if (St(o) || Wx.greaterThan(a, o, cC)) return i ? 1 : -1;
              throw Error(`Invalid comparison`);
            }
            return 0;
          });
        }
      }),
      (uC = class {
        constructor(e, t) {
          (this.query = e),
            (this.locale = t),
            F(this, `memo`, new WS()),
            F(this, `normalizer`, new aC(this.memo)),
            F(this, `explorer`, new HS(this.normalizer));
        }
        optimize() {
          let e = new vS(this.normalizer, this.query, this.locale),
            t = e.build(),
            n = t.takeNode(),
            r = n.getGroup(),
            i = t.getRequiredProps();
          this.optimizeGroup(r, i);
          let a = r.getOptimized(i),
            o = t.getNamedFields();
          return [a, o];
        }
        optimizeGroup(e, t) {
          let n = e.getWinner(t);
          if (n.node) return n.cost;
          let r = e.nodes[0];
          V(r, `Normalized node not found`), this.createEnforcer(n, r, t);
          for (let r of e.nodes) {
            if (t.canProvide(r)) {
              let e = r.optimize(this, t);
              n.update(r, e);
            }
            t.isMinimal && this.explorer.explore(r);
          }
          return n.cost;
        }
        createEnforcer(e, t, n) {
          if (n.resolvedFields.size > 0) {
            let r = new sC(t, n.resolvedFields),
              i = r.optimize(this, n);
            e.update(r, i);
          }
          if (n.ordering.length > 0) {
            let r = new lC(t, n.ordering),
              i = r.optimize(this, n);
            e.update(r, i);
          }
        }
      }),
      (dC = Ml(`query-engine`)),
      (fC = class {
        async query(e, t) {
          dC.debug(`Query:
${Uu(e)}`);
          let n = new uC(e, t),
            [r, i] = n.optimize(),
            a = await r.evaluateAsync(),
            o = Object.entries(i),
            s = await Promise.all(
              a.tuples.map(async (e) => {
                let t = await Promise.all(
                  o.map(async ([t, n]) => {
                    let r = e.getValue(n),
                      i = await this.resolveValue(r);
                    return [t, i];
                  })
                );
                return Object.fromEntries(t);
              })
            );
          return s;
        }
        async resolveValue(e) {
          if (e?.type === `richtext`)
            return (
              V(e.value instanceof Zx, `Pointer must be wrapped`),
              e.value.resolve()
            );
          if (e?.type === `vectorsetitem`)
            return (
              V(e.value instanceof Qx, `Pointer must be wrapped`),
              e.value.resolve()
            );
          if (e?.type === `array`)
            return Promise.all(e.value.map(async (e) => this.resolveValue(e)));
          if (e?.type === `object`) {
            let t = Object.entries(e.value),
              n = await Promise.all(
                t.map(async ([e, t]) => {
                  let n = await this.resolveValue(t);
                  return [e, n];
                })
              );
            return Object.fromEntries(n);
          }
          return e?.value ?? null;
        }
      }),
      (pC = class {
        constructor(e, t = 1 / 0) {
          (this.queryEngine = e),
            (this.maxSize = t),
            F(this, `cache`, new Map());
        }
        prune() {
          if (!(this.cache.size <= this.maxSize))
            for (let [e, t] of this.cache) {
              if (this.cache.size <= this.maxSize) break;
              if (t.state === `pending`) continue;
              this.cache.delete(e);
            }
        }
        get(e, t) {
          let n = Ku(e, t),
            r = this.cache.get(n);
          if (r) return this.cache.delete(n), this.cache.set(n, r), r;
          let i = () => this.queryEngine.query(e, t),
            a = new Rb(i);
          return this.cache.set(n, a), this.prune(), a;
        }
      }),
      (mC = new WeakMap()),
      (hC = `style[data-framer-breakpoint-css]`),
      (gC = `page`),
      (_C = new fC()),
      (vC = new pC(_C)),
      (yC = Symbol(`cycle`)),
      (SC = new Set([
        `visibleVariantId`,
        `obscuredVariantId`,
        `threshold`,
        `animateOnce`,
        `variantAppearEffectEnabled`,
        `targets`,
        `exitTarget`,
        `scrollDirection`,
      ])),
      (CC = { inputRange: [], outputRange: [] }),
      (wC = (e) =>
        d.forwardRef((t, n) => {
          if (Y.current() === Y.canvas) return x(e, { ...t, ref: n });
          let [r, i] = Zo(t, SC),
            {
              visibleVariantId: a,
              obscuredVariantId: o,
              animateOnce: s,
              threshold: l,
              variantAppearEffectEnabled: u,
              targets: f,
              exitTarget: p,
              scrollDirection: m,
            } = r,
            [h, g] = d.useState(o),
            _ = d.useRef(!1),
            v = Ya(n);
          return (
            $a(
              v,
              (e) => {
                r.targets ||
                  r.scrollDirection ||
                  (s && _.current === !0) ||
                  (_.current !== e &&
                    ((_.current = e),
                    d.startTransition(() => {
                      g(e ? a : o);
                    })));
              },
              { enabled: u, animateOnce: s, threshold: { y: l } }
            ),
            d.useEffect(() => {
              if (m || !f) return;
              let e = {},
                t;
              return Ae((n, { y: r }) => {
                var i;
                if (!f[0] || (f[0].ref && !f[0].ref.current)) return;
                let { inputRange: a, outputRange: o } = kd(
                  f,
                  (l ?? 0) * r.containerLength,
                  p
                );
                if (a.length === 0 || a.length !== o.length) return;
                let c = Math.floor(Ne(r.current, a, o));
                if (s && e[c]) return;
                e[c] = !0;
                let u = (i = f[c])?.target ?? void 0;
                u !== t &&
                  ((t = u),
                  d.startTransition(() => {
                    g(u);
                  }));
              });
            }, [s, l, f, t.variant, m, p]),
            ws(m, (e) => d.startTransition(() => g(e)), {
              enabled: u,
              repeat: !s,
            }),
            ft(() => {
              if (!u) return;
              let e = !r.targets && !r.scrollDirection,
                t = e ? r.obscuredVariantId : void 0;
              c(() => g(t));
            }),
            !(`variantAppearEffectEnabled` in r) || u === !0
              ? x(e, { ...i, variant: h ?? t.variant, ref: v })
              : x(e, { ...i })
          );
        })),
      (TC = d.createContext(void 0)),
      (EC = () => d.useContext(TC)),
      (DC = {
        Arial: {
          Regular: { selector: `Arial`, weight: void 0 },
          Black: { selector: `Arial-Black`, weight: void 0 },
          Narrow: { selector: `Arial Narrow`, weight: void 0 },
          "Rounded Bold": { selector: `Arial Rounded MT Bold`, weight: void 0 },
        },
        Avenir: {
          Book: { selector: `Avenir`, weight: void 0 },
          Light: { selector: `Avenir-Light`, weight: void 0 },
          Medium: { selector: `Avenir-Medium`, weight: void 0 },
          Heavy: { selector: `Avenir-Heavy`, weight: void 0 },
          Black: { selector: `Avenir-Black`, weight: void 0 },
        },
        "Avenir Next": {
          Regular: { selector: `Avenir Next`, weight: void 0 },
          "Ultra Light": { selector: `AvenirNext-UltraLight`, weight: void 0 },
          Medium: { selector: `AvenirNext-Medium`, weight: void 0 },
          "Demi Bold": { selector: `AvenirNext-DemiBold`, weight: void 0 },
          Heavy: { selector: `AvenirNext-Heavy`, weight: void 0 },
        },
        "Avenir Next Condensed": {
          Regular: { selector: `Avenir Next Condensed`, weight: void 0 },
          "Ultra Light": {
            selector: `AvenirNextCondensed-UltraLight`,
            weight: void 0,
          },
          Medium: { selector: `AvenirNextCondensed-Medium`, weight: void 0 },
          "Demi Bold": {
            selector: `AvenirNextCondensed-DemiBold`,
            weight: void 0,
          },
          Heavy: { selector: `AvenirNextCondensed-Heavy`, weight: void 0 },
        },
        Baskerville: {
          Regular: { selector: `Baskerville`, weight: void 0 },
          "Semi Bold": { selector: `Baskerville-SemiBold`, weight: void 0 },
        },
        "Bodoni 72": {
          Book: { selector: `Bodoni 72`, weight: void 0 },
          Oldstyle: { selector: `Bodoni 72 Oldstyle`, weight: void 0 },
          Smallcaps: { selector: `Bodoni 72 Smallcaps`, weight: void 0 },
        },
        Courier: { Regular: { selector: `Courier`, weight: void 0 } },
        "Courier New": { Regular: { selector: `Courier New`, weight: void 0 } },
        Futura: {
          Medium: { selector: `Futura`, weight: void 0 },
          Condensed: { selector: `Futura-CondensedMedium`, weight: void 0 },
          "Condensed ExtraBold": {
            selector: `Futura-CondensedExtraBold`,
            weight: void 0,
          },
        },
        Georgia: { Regular: { selector: `Georgia`, weight: void 0 } },
        "Gill Sans": {
          Regular: { selector: `Gill Sans`, weight: void 0 },
          Light: { selector: `GillSans-Light`, weight: void 0 },
          SemiBold: { selector: `GillSans-SemiBold`, weight: void 0 },
          UltraBold: { selector: `GillSans-UltraBold`, weight: void 0 },
        },
        Helvetica: {
          Regular: { selector: `Helvetica`, weight: void 0 },
          Light: { selector: `Helvetica-Light`, weight: void 0 },
          Bold: { selector: `Helvetica-Bold`, weight: void 0 },
          Oblique: { selector: `Helvetica-Oblique`, weight: void 0 },
          "Light Oblique": {
            selector: `Helvetica-LightOblique`,
            weight: void 0,
          },
          "Bold Oblique": { selector: `Helvetica-BoldOblique`, weight: void 0 },
        },
        "Helvetica Neue": {
          Regular: { selector: `Helvetica Neue`, weight: void 0 },
          UltraLight: { selector: `HelveticaNeue-UltraLight`, weight: void 0 },
          Thin: { selector: `HelveticaNeue-Thin`, weight: void 0 },
          Light: { selector: `HelveticaNeue-Light`, weight: void 0 },
          Medium: { selector: `HelveticaNeue-Medium`, weight: void 0 },
          Bold: { selector: `HelveticaNeue-Bold`, weight: void 0 },
          Italic: { selector: `HelveticaNeue-Italic`, weight: void 0 },
          "UltraLight Italic": {
            selector: `HelveticaNeue-UltraLightItalic`,
            weight: void 0,
          },
          "Thin Italic": {
            selector: `HelveticaNeue-ThinItalic`,
            weight: void 0,
          },
          "Light Italic": {
            selector: `HelveticaNeue-LightItalic`,
            weight: void 0,
          },
          "Medium Italic": {
            selector: `HelveticaNeue-MediumItalic`,
            weight: void 0,
          },
          "Bold Italic": {
            selector: `HelveticaNeue-BoldItalic`,
            weight: void 0,
          },
          "Condensed Bold": {
            selector: `HelveticaNeue-CondensedBold`,
            weight: void 0,
          },
          "Condensed Black": {
            selector: `HelveticaNeue-CondensedBlack`,
            weight: void 0,
          },
        },
        "Hoefler Text": {
          Regular: { selector: `Hoefler Text`, weight: void 0 },
        },
        Impact: { Regular: { selector: `Impact`, weight: void 0 } },
        "Lucida Grande": {
          Regular: { selector: `Lucida Grande`, weight: void 0 },
        },
        Menlo: { Regular: { selector: `Menlo`, weight: void 0 } },
        Monaco: { Regular: { selector: `Monaco`, weight: void 0 } },
        Optima: {
          Regular: { selector: `Optima`, weight: void 0 },
          ExtraBlack: { selector: `Optima-ExtraBlack`, weight: void 0 },
        },
        Palatino: { Regular: { selector: `Palatino`, weight: void 0 } },
        "SF Pro Display": {
          Regular: { selector: `__SF-UI-Display-Regular__`, weight: 400 },
          Ultralight: { selector: `__SF-UI-Display-Ultralight__`, weight: 100 },
          Thin: { selector: `__SF-UI-Display-Thin__`, weight: 200 },
          Light: { selector: `__SF-UI-Display-Light__`, weight: 300 },
          Medium: { selector: `__SF-UI-Display-Medium__`, weight: 500 },
          Semibold: { selector: `__SF-UI-Display-Semibold__`, weight: 600 },
          Bold: { selector: `__SF-UI-Display-Bold__`, weight: 700 },
          Heavy: { selector: `__SF-UI-Display-Heavy__`, weight: 800 },
          Black: { selector: `__SF-UI-Display-Black__`, weight: 900 },
          Italic: { selector: `__SF-UI-Display-Italic__`, weight: 400 },
          "Ultralight Italic": {
            selector: `__SF-UI-Display-Ultralight-Italic__`,
            weight: 100,
          },
          "Thin Italic": {
            selector: `__SF-UI-Display-Thin-Italic__`,
            weight: 200,
          },
          "Light Italic": {
            selector: `__SF-UI-Display-Light-Italic__`,
            weight: 300,
          },
          "Medium Italic": {
            selector: `__SF-UI-Display-Medium-Italic__`,
            weight: 500,
          },
          "Semibold Italic": {
            selector: `__SF-UI-Display-Semibold-Italic__`,
            weight: 600,
          },
          "Bold Italic": {
            selector: `__SF-UI-Display-Bold-Italic__`,
            weight: 700,
          },
          "Heavy Italic": {
            selector: `__SF-UI-Display-Heavy-Italic__`,
            weight: 800,
          },
          "Black Italic": {
            selector: `__SF-UI-Display-Black-Italic__`,
            weight: 900,
          },
        },
        "SF Pro Display Condensed": {
          Regular: {
            selector: `__SF-UI-Display-Condensed-Regular__`,
            weight: 400,
          },
          Ultralight: {
            selector: `__SF-UI-Display-Condensed-Ultralight__`,
            weight: 100,
          },
          Thin: { selector: `__SF-UI-Display-Condensed-Thin__`, weight: 200 },
          Light: { selector: `__SF-UI-Display-Condensed-Light__`, weight: 300 },
          Medium: {
            selector: `__SF-UI-Display-Condensed-Medium__`,
            weight: 500,
          },
          Semibold: {
            selector: `__SF-UI-Display-Condensed-Semibold__`,
            weight: 600,
          },
          Bold: { selector: `__SF-UI-Display-Condensed-Bold__`, weight: 700 },
          Heavy: { selector: `__SF-UI-Display-Condensed-Heavy__`, weight: 800 },
          Black: { selector: `__SF-UI-Display-Condensed-Black__`, weight: 900 },
        },
        "SF Pro Text": {
          Regular: { selector: `__SF-UI-Text-Regular__`, weight: 400 },
          Light: { selector: `__SF-UI-Text-Light__`, weight: 200 },
          Medium: { selector: `__SF-UI-Text-Medium__`, weight: 500 },
          Semibold: { selector: `__SF-UI-Text-Semibold__`, weight: 600 },
          Bold: { selector: `__SF-UI-Text-Bold__`, weight: 700 },
          Heavy: { selector: `__SF-UI-Text-Heavy__`, weight: 800 },
          Italic: { selector: `__SF-UI-Text-Italic__`, weight: 400 },
          "Light Italic": {
            selector: `__SF-UI-Text-Light-Italic__`,
            weight: 200,
          },
          "Medium Italic": {
            selector: `__SF-UI-Text-Medium-Italic__`,
            weight: 500,
          },
          "Semibold Italic": {
            selector: `__SF-UI-Text-Semibold-Italic__`,
            weight: 600,
          },
          "Bold Italic": {
            selector: `__SF-UI-Text-Bold-Italic__`,
            weight: 700,
          },
          "Heavy Italic": {
            selector: `__SF-UI-Text-Heavy-Italic__`,
            weight: 800,
          },
        },
        "SF Pro Text Condensed": {
          Regular: {
            selector: `__SF-UI-Text-Condensed-Regular__`,
            weight: 400,
          },
          Light: { selector: `__SF-UI-Text-Condensed-Light__`, weight: 200 },
          Medium: { selector: `__SF-UI-Text-Condensed-Medium__`, weight: 500 },
          Semibold: {
            selector: `__SF-UI-Text-Condensed-Semibold__`,
            weight: 600,
          },
          Bold: { selector: `__SF-UI-Text-Condensed-Bold__`, weight: 700 },
          Heavy: { selector: `__SF-UI-Text-Condensed-Heavy__`, weight: 800 },
        },
        Tahoma: { Regular: { selector: `Tahoma`, weight: void 0 } },
        Times: { Regular: { selector: `Times`, weight: void 0 } },
        "Times New Roman": {
          Regular: { selector: `Times New Roman`, weight: void 0 },
        },
        Trebuchet: { Regular: { selector: `Trebuchet MS`, weight: void 0 } },
        Verdana: { Regular: { selector: `Verdana`, weight: void 0 } },
      }),
      (OC = {
        "__SF-Compact-Display-Regular__": `SFCompactDisplay-Regular|.SFCompactDisplay-Regular`,
        "__SF-Compact-Display-Ultralight__": `SFCompactDisplay-Ultralight|.SFCompactDisplay-Ultralight`,
        "__SF-Compact-Display-Thin__": `SFCompactDisplay-Thin|.SFCompactDisplay-Thin`,
        "__SF-Compact-Display-Light__": `SFCompactDisplay-Light|.SFCompactDisplay-Light`,
        "__SF-Compact-Display-Medium__": `SFCompactDisplay-Medium|.SFCompactDisplay-Medium`,
        "__SF-Compact-Display-Semibold__": `SFCompactDisplay-Semibold|.SFCompactDisplay-Semibold`,
        "__SF-Compact-Display-Heavy__": `SFCompactDisplay-Heavy|.SFCompactDisplay-Heavy`,
        "__SF-Compact-Display-Black__": `SFCompactDisplay-Black|.SFCompactDisplay-Black`,
        "__SF-Compact-Display-Bold__": `SFCompactDisplay-Bold|.SFCompactDisplay-Bold`,
        "__SF-UI-Text-Regular__": `.SFNSText|SFProText-Regular|SFUIText-Regular|.SFUIText`,
        "__SF-UI-Text-Light__": `.SFNSText-Light|SFProText-Light|SFUIText-Light|.SFUIText-Light`,
        "__SF-UI-Text-Medium__": `.SFNSText-Medium|SFProText-Medium|SFUIText-Medium|.SFUIText-Medium`,
        "__SF-UI-Text-Semibold__": `.SFNSText-Semibold|SFProText-Semibold|SFUIText-Semibold|.SFUIText-Semibold`,
        "__SF-UI-Text-Bold__": `.SFNSText-Bold|SFProText-Bold|SFUIText-Bold|.SFUIText-Bold`,
        "__SF-UI-Text-Heavy__": `.SFNSText-Heavy|SFProText-Heavy|.SFUIText-Heavy`,
        "__SF-UI-Text-Italic__": `.SFNSText-Italic|SFProText-Italic|SFUIText-Italic|.SFUIText-Italic`,
        "__SF-UI-Text-Light-Italic__": `.SFNSText-LightItalic|SFProText-LightItalic|SFUIText-LightItalic|.SFUIText-LightItalic`,
        "__SF-UI-Text-Medium-Italic__": `.SFNSText-MediumItalic|SFProText-MediumItalic|SFUIText-MediumItalic|.SFUIText-MediumItalic`,
        "__SF-UI-Text-Semibold-Italic__": `.SFNSText-SemiboldItalic|SFProText-SemiboldItalic|SFUIText-SemiboldItalic|.SFUIText-SemiboldItalic`,
        "__SF-UI-Text-Bold-Italic__": `.SFNSText-BoldItalic|SFProText-BoldItalic|SFUIText-BoldItalic|.SFUIText-BoldItalic`,
        "__SF-UI-Text-Heavy-Italic__": `.SFNSText-HeavyItalic|SFProText-HeavyItalic|.SFUIText-HeavyItalic`,
        "__SF-Compact-Text-Regular__": `SFCompactText-Regular|.SFCompactText-Regular`,
        "__SF-Compact-Text-Light__": `SFCompactText-Light|.SFCompactText-Light`,
        "__SF-Compact-Text-Medium__": `SFCompactText-Medium|.SFCompactText-Medium`,
        "__SF-Compact-Text-Semibold__": `SFCompactText-Semibold|.SFCompactText-Semibold`,
        "__SF-Compact-Text-Bold__": `SFCompactText-Bold|.SFCompactText-Bold`,
        "__SF-Compact-Text-Heavy__": `SFCompactText-Heavy|.SFCompactText-Heavy`,
        "__SF-Compact-Text-Italic__": `SFCompactText-Italic|.SFCompactText-Italic`,
        "__SF-Compact-Text-Light-Italic__": `SFCompactText-LightItalic|.SFCompactText-LightItalic`,
        "__SF-Compact-Text-Medium-Italic__": `SFCompactText-MediumItalic|.SFCompactText-MediumItalic`,
        "__SF-Compact-Text-Semibold-Italic__": `SFCompactText-SemiboldItalic|.SFCompactText-SemiboldItalic`,
        "__SF-Compact-Text-Bold-Italic__": `SFCompactText-BoldItalic|.SFCompactText-BoldItalic`,
        "__SF-Compact-Text-Heavy-Italic__": `SFCompactText-HeavyItalic|.SFCompactText-HeavyItalic`,
        "__SF-UI-Display-Condensed-Regular__": `.SFNSDisplayCondensed-Regular|SFUIDisplayCondensed-Regular|.SFUIDisplayCondensed-Regular`,
        "__SF-UI-Display-Condensed-Ultralight__": `.SFNSDisplayCondensed-Ultralight|SFUIDisplayCondensed-Ultralight|.SFUIDisplayCondensed-Ultralight`,
        "__SF-UI-Display-Condensed-Thin__": `.SFNSDisplayCondensed-Thin|SFUIDisplayCondensed-Thin|.SFUIDisplayCondensed-Thin`,
        "__SF-UI-Display-Condensed-Light__": `.SFNSDisplayCondensed-Light|SFUIDisplayCondensed-Light|.SFUIDisplayCondensed-Light`,
        "__SF-UI-Display-Condensed-Medium__": `.SFNSDisplayCondensed-Medium|SFUIDisplayCondensed-Medium|.SFUIDisplayCondensed-Medium`,
        "__SF-UI-Display-Condensed-Semibold__": `.SFNSDisplayCondensed-Semibold|SFUIDisplayCondensed-Semibold|.SFUIDisplayCondensed-Semibold`,
        "__SF-UI-Display-Condensed-Bold__": `.SFNSDisplayCondensed-Bold|SFUIDisplayCondensed-Bold|.SFUIDisplayCondensed-Bold`,
        "__SF-UI-Display-Condensed-Heavy__": `.SFNSDisplayCondensed-Heavy|SFUIDisplayCondensed-Heavy|.SFUIDisplayCondensed-Heavy`,
        "__SF-UI-Display-Condensed-Black__": `.SFNSDisplayCondensed-Black|.SFUIDisplayCondensed-Black`,
        "__SF-UI-Display-Regular__": `.SFNSDisplay|SFProDisplay-Regular|SFUIDisplay-Regular|.SFUIDisplay`,
        "__SF-UI-Display-Ultralight__": `.SFNSDisplay-Ultralight|SFProDisplay-Ultralight|SFUIDisplay-Ultralight|.SFUIDisplay-Ultralight`,
        "__SF-UI-Display-Thin__": `.SFNSDisplay-Thin|SFProDisplay-Thin|SFUIDisplay-Thin|.SFUIDisplay-Thin`,
        "__SF-UI-Display-Light__": `.SFNSDisplay-Light|SFProDisplay-Light|SFUIDisplay-Light|.SFUIDisplay-Light`,
        "__SF-UI-Display-Medium__": `.SFNSDisplay-Medium|SFProDisplay-Medium|SFUIDisplay-Medium|.SFUIDisplay-Medium`,
        "__SF-UI-Display-Semibold__": `.SFNSDisplay-Semibold|SFProDisplay-Semibold|SFUIDisplay-Semibold|.SFUIDisplay-Semibold`,
        "__SF-UI-Display-Bold__": `.SFNSDisplay-Bold|SFProDisplay-Bold|SFUIDisplay-Bold|.SFUIDisplay-Bold`,
        "__SF-UI-Display-Heavy__": `.SFNSDisplay-Heavy|SFProDisplay-Heavy|SFUIDisplay-Heavy|.SFUIDisplay-Heavy`,
        "__SF-UI-Display-Black__": `.SFNSDisplay-Black|SFProDisplay-Black|.SFUIDisplay-Black`,
        "__SF-UI-Display-Italic__": `.SFNSDisplay-Italic|SFProDisplay-Italic|SFUIDisplay-Italic`,
        "__SF-UI-Display-Ultralight-Italic__": `.SFNSDisplay-UltralightItalic|SFProDisplay-UltralightItalic|SFUIDisplay-UltralightItalic|.SFUIDisplay-UltralightItalic`,
        "__SF-UI-Display-Thin-Italic__": `.SFNSDisplay-ThinItalic|SFProDisplay-ThinItalic|SFUIDisplay-ThinItalic|.SFUIDisplay-ThinItalic`,
        "__SF-UI-Display-Light-Italic__": `.SFNSDisplay-LightItalic|SFProDisplay-LightItalic|SFUIDisplay-LightItalic|.SFUIDisplay-LightItalic`,
        "__SF-UI-Display-Medium-Italic__": `.SFNSDisplay-MediumItalic|SFProDisplay-MediumItalic|SFUIDisplay-MediumItalic|.SFUIDisplay-MediumItalic`,
        "__SF-UI-Display-Semibold-Italic__": `.SFNSDisplay-SemiboldItalic|SFProDisplay-SemiboldItalic|SFUIDisplay-SemiboldItalic|.SFUIDisplay-SemiboldItalic`,
        "__SF-UI-Display-Bold-Italic__": `.SFNSDisplay-BoldItalic|SFProDisplay-BoldItalic|SFUIDisplay-BoldItalic|.SFUIDisplay-BoldItalic`,
        "__SF-UI-Display-Heavy-Italic__": `.SFNSDisplay-HeavyItalic|SFProDisplay-HeavyItalic|SFUIDisplay-HeavyItalic|.SFUIDisplay-HeavyItalic`,
        "__SF-UI-Display-Black-Italic__": `.SFNSDisplay-BlackItalic|SFProDisplay-BlackItalic|.SFUIDisplay-BlackItalic`,
        "__SF-UI-Text-Condensed-Regular__": `.SFNSTextCondensed-Regular|SFUITextCondensed-Regular|.SFUITextCondensed-Regular`,
        "__SF-UI-Text-Condensed-Light__": `.SFNSTextCondensed-Light|SFUITextCondensed-Light|.SFUITextCondensed-Light`,
        "__SF-UI-Text-Condensed-Medium__": `.SFNSTextCondensed-Medium|SFUITextCondensed-Medium|.SFUITextCondensed-Medium`,
        "__SF-UI-Text-Condensed-Semibold__": `.SFNSTextCondensed-Semibold|SFUITextCondensed-Semibold|.SFUITextCondensed-Semibold`,
        "__SF-UI-Text-Condensed-Bold__": `.SFNSTextCondensed-Bold|SFUITextCondensed-Bold|.SFUITextCondensed-Bold`,
        "__SF-UI-Text-Condensed-Heavy__": `.SFNSTextCondensed-Heavy|.SFUITextCondensed-Heavy`,
        "__SF-Compact-Rounded-Regular__": `SFCompactRounded-Regular|.SFCompactRounded-Regular`,
        "__SF-Compact-Rounded-Ultralight__": `SFCompactRounded-Ultralight|.SFCompactRounded-Ultralight`,
        "__SF-Compact-Rounded-Thin__": `SFCompactRounded-Thin|.SFCompactRounded-Thin`,
        "__SF-Compact-Rounded-Light__": `SFCompactRounded-Light|.SFCompactRounded-Light`,
        "__SF-Compact-Rounded-Medium__": `SFCompactRounded-Medium|.SFCompactRounded-Medium`,
        "__SF-Compact-Rounded-Semibold__": `SFCompactRounded-Semibold|.SFCompactRounded-Semibold`,
        "__SF-Compact-Rounded-Bold__": `SFCompactRounded-Bold|.SFCompactRounded-Bold`,
        "__SF-Compact-Rounded-Heavy__": `SFCompactRounded-Heavy|.SFCompactRounded-Heavy`,
        "__SF-Compact-Rounded-Black__": `SFCompactRounded-Black|.SFCompactRounded-Black`,
      }),
      (kC = DC),
      (AC = `System Default`),
      (jC = class {
        constructor() {
          F(this, `name`, `local`),
            F(this, `fontFamilies`, []),
            F(this, `byFamilyName`, new Map()),
            F(this, `fontAliasBySelector`, new Map()),
            F(this, `fontAliases`, new Map());
        }
        getFontFamilyByName(e) {
          return this.byFamilyName.get(e) ?? null;
        }
        createFontFamily(e) {
          let t = { name: e, fonts: [], source: this.name };
          return this.addFontFamily(t), t;
        }
        addFontFamily(e) {
          this.fontFamilies.push(e), this.byFamilyName.set(e.name, e);
        }
        importFonts() {
          let e = [];
          for (let t of Object.keys(kC)) {
            let n = kC[t];
            if (!n) continue;
            let r = this.createFontFamily(t);
            for (let e of Object.keys(n)) {
              let t = n[e];
              if (!t) continue;
              let { selector: i, weight: a } = t,
                o = { variant: e, selector: i, weight: a, family: r };
              r.fonts.push(o);
            }
            e.push(...r.fonts);
          }
          for (let [e, t] of Object.entries(OC)) this.addFontAlias(e, t);
          let { fontFamily: t, aliases: n } = this.getSystemFontFamily();
          this.addFontFamily(t);
          for (let [e, t] of n) this.addFontAlias(e, t);
          return e.push(...t.fonts), e;
        }
        addFontAlias(e, t) {
          this.fontAliases.set(e, t), this.fontAliasBySelector.set(t, e);
        }
        getSystemFontFamily() {
          let e = { name: AC, fonts: [], source: this.name },
            t = new Map(),
            n = [400, 100, 200, 300, 500, 600, 700, 800, 900],
            r = [`normal`, `italic`];
          for (let i of r)
            for (let r of n) {
              let n = jd(r, i),
                a = `__SystemDefault-${r}-${i}__`,
                o = { variant: n, selector: a, style: i, weight: r, family: e };
              e.fonts.push(o),
                t.set(
                  a,
                  `system-ui|-apple-system|BlinkMacSystemFont|Segoe UI|Roboto|Oxygen|Ubuntu|Cantarell|Fira Sans|Droid Sans|Helvetica Neue|sans-serif`
                );
            }
          return { fontFamily: e, aliases: t };
        }
        getFontAliasBySelector(e) {
          return this.fontAliasBySelector.get(e) || null;
        }
        getFontSelectorByAlias(e) {
          return this.fontAliases.get(e) || null;
        }
        isFontFamilyAlias(e) {
          return !!(e && /^__.*__$/u.exec(e));
        }
      }),
      (MC = {
        100: `Thin`,
        200: `Extra Light`,
        300: `Light`,
        400: `Normal`,
        500: `Medium`,
        600: `Semi Bold`,
        700: `Bold`,
        800: `Extra Bold`,
        900: `Black`,
      }),
      (NC = Object.freeze([])),
      (FC = class extends Error {
        constructor(e, t) {
          let n = e ? JSON.stringify(e) : `No error message provided`;
          if ((super(n), (this.message = n), t && Error.captureStackTrace))
            Error.captureStackTrace(this, t);
          else
            try {
              throw Error();
            } catch (e) {
              this.stack = e.stack;
            }
        }
      }),
      (IC = k === void 0 ? void 0 : k.location.hostname),
      (LC = !!(
        IC &&
        [`web.framerlocal.com`, `localhost`, `127.0.0.1`, `[::1]`].includes(IC)
      )),
      (RC = (() => {
        if (!IC) return;
        if (LC) return { main: IC, previewLink: void 0 };
        let e = /^(([^.]+\.)?beta\.)?((?:development\.)?framer\.com)$/u,
          t = IC.match(e);
        if (!(!t || !t[3])) return { previewLink: t[2] && t[0], main: t[3] };
      })()),
      RC?.main,
      RC?.main,
      (BC = [`trace`, `debug`, `info`, `warn`, `error`]),
      (VC = [`:trace`, `:debug`, `:info`, `:warn`, `:error`]),
      (HC = class e {
        constructor(t, n, r) {
          (this.logger = t),
            (this.level = n),
            (this.parts = r),
            F(this, `id`),
            F(this, `time`),
            F(this, `stringPrefix`),
            (this.id = e.nextId++),
            (this.time = Date.now());
        }
        toMessage() {
          if (this.stringPrefix) return this.parts;
          let e = [
              new Date(this.time).toISOString().substr(-14, 14),
              BC[this.level] + `: [` + this.logger.id + `]`,
            ],
            t = 0;
          for (; t < this.parts.length; t++) {
            let n = this.parts[t];
            if (typeof n == `string`) {
              e.push(n);
              continue;
            }
            break;
          }
          return (
            (this.stringPrefix = e.join(` `)),
            this.parts.splice(0, t, this.stringPrefix),
            this.parts
          );
        }
        toString() {
          return this.toMessage()
            .map((e) => {
              let t = typeof e;
              if (t === `string`) return e;
              if (t === `function`) return `[Function: ${e.name ?? `unknown`}]`;
              if (e instanceof Error) return e.stack ?? e.toString();
              let n = JSON.stringify(Vd(e));
              return n?.length > 253 ? n.slice(0, 250) + `...` : n;
            })
            .join(` `);
        }
      }),
      F(HC, `nextId`, 0),
      (UC = HC),
      (WC = `*:app:info,app:info`),
      (GC = typeof process < `u` && !!process.kill),
      (KC = GC && !1),
      KC ? (WC = `-:warn`) : GC && (WC = ``);
    try {
      k !== void 0 && k.localStorage && (WC = k.localStorage.logLevel || WC);
    } catch {}
    try {
      typeof process < `u` && (WC = process.env.DEBUG || WC);
    } catch {}
    try {
      k !== void 0 && Object.assign(k, { setLogLevel: qd });
    } catch {}
    try {
      k !== void 0 &&
        k.postMessage &&
        k.top === k &&
        k.addEventListener(`message`, (e) => {
          if (!e.data || typeof e.data != `object`) return;
          let { loggerId: t, level: n, parts: r, printed: i } = e.data;
          if (
            typeof t != `string` ||
            !Array.isArray(r) ||
            r.length < 1 ||
            typeof n != `number`
          )
            return;
          let a = Kd(t);
          if (n < 0 || n > 5) return;
          r[0] = r[0].replace(`[`, `*[`);
          let o = new UC(a, n, r);
          (o.stringPrefix = r[0]),
            YC.push(o),
            !i &&
              (a.level > n || console == null || console.log(...o.toMessage()));
        });
    } catch {}
    try {
      k !== void 0 &&
        k.postMessage &&
        k.parent !== k &&
        !k.location.pathname.startsWith(`/edit`) &&
        (qC = (e) => {
          var t;
          try {
            let n = e.toMessage().map((e) => Vd(e)),
              r = e.logger,
              i = e.level,
              a = r.level <= e.level,
              o = { loggerId: r.id, level: i, parts: n, printed: a };
            (t = k.parent) == null || t.postMessage(o, zd().app);
          } catch {}
        });
    } catch {}
    (JC = {}),
      (YC = []),
      (XC = 1e3),
      (ZC = /\/(?<filename>[^/.]+)(?=\.(?:debug\.)?html$)/u),
      ($C = (e) => {
        let t = {
          ...e,
          logs: Wd()
            .slice(-50)
            .map((e) => e.toString().slice(0, 600)).join(`
`),
        };
        return (
          e.logs &&
            (console == null ||
              console.warn(
                `extras.logs is reserved for log replay buffer, use another key`
              )),
          t
        );
      }),
      (ew = class {
        constructor(e, t) {
          (this.id = e),
            F(this, `level`, 3),
            F(this, `didLog`, {}),
            F(this, `errorIsCritical`),
            F(this, `trace`, (...e) => {
              if (this.level > 0) return;
              let t = Ud(this, 0, e);
              console == null || console.log(...t.toMessage());
            }),
            F(this, `debug`, (...e) => {
              let t = Ud(this, 1, e);
              this.level > 1 ||
                console == null ||
                console.log(...t.toMessage());
            }),
            F(this, `info`, (...e) => {
              let t = Ud(this, 2, e);
              this.level > 2 ||
                console == null ||
                console.info(...t.toMessage());
            }),
            F(this, `warn`, (...e) => {
              let t = Ud(this, 3, e);
              this.level > 3 ||
                console == null ||
                console.warn(...t.toMessage());
            }),
            F(this, `warnOncePerMinute`, (e, ...t) => {
              let n = this.didLog[e];
              if (n && n > Date.now()) return;
              (this.didLog[e] = Date.now() + 1e3 * 60), t.unshift(e);
              let r = Ud(this, 3, t);
              this.level > 3 ||
                console == null ||
                console.warn(...r.toMessage());
            }),
            F(this, `error`, (...e) => {
              let t = Ud(this, 4, e);
              this.level > 4 ||
                console == null ||
                console.error(...t.toMessage());
            }),
            F(this, `errorOncePerMinute`, (e, ...t) => {
              let n = this.didLog[e];
              if (n && n > Date.now()) return;
              (this.didLog[e] = Date.now() + 1e3 * 60), t.unshift(e);
              let r = Ud(this, 4, t);
              this.level > 4 ||
                console == null ||
                console.error(...r.toMessage());
            }),
            F(this, `reportError`, (e, t, n, r) => {
              t = $C(t ?? {});
              let i = Ld({
                caller: this.reportError,
                error: e,
                tags: { ...n, handler: `logger`, where: this.id },
                extras: t,
                critical: r ?? this.errorIsCritical,
              });
              t ? this.error(i, t) : this.error(i);
            }),
            F(this, `reportErrorOncePerMinute`, (e, t) => {
              if (!Jd(e)) return;
              let n = this.didLog[e.message];
              (n && n > Date.now()) ||
                ((this.didLog[e.message] = Date.now() + 1e3 * 60),
                this.reportError(e, t));
            }),
            F(this, `reportCriticalError`, (e, t, n) =>
              this.reportError(e, t, n, !0)
            ),
            (this.errorIsCritical =
              t ?? (e === `fatal` || e.endsWith(`:fatal`)));
        }
        extend(e) {
          let t = this.id + `:` + e;
          return Kd(t);
        }
        getBufferedMessages() {
          return YC.filter((e) => e.logger === this);
        }
        setLevel(e) {
          let t = this.level;
          return (this.level = e), t;
        }
        isLoggingTraceMessages() {
          return this.level >= 0;
        }
      }),
      (tw = `dependencies`),
      (nw = `config`),
      (rw = `${nw}/${tw}`),
      `${rw}`,
      `${rw}`,
      (iw = !1),
      ((e) => {
        function t(e, ...t) {
          return e.concat(t);
        }
        e.push = t;
        function n(e) {
          return e.slice(0, -1);
        }
        e.pop = n;
        function r(e, ...t) {
          return t.concat(e);
        }
        e.unshift = r;
        function i(e, t, ...n) {
          let r = e.length;
          if (t < 0 || t > r) throw Error(`index out of range: ` + t);
          let i = e.slice();
          return i.splice(t, 0, ...n), i;
        }
        e.insert = i;
        function a(e, t, n) {
          let r = e.length;
          if (t < 0 || t >= r) throw Error(`index out of range: ` + t);
          let i = Array.isArray(n) ? n : [n],
            a = e.slice();
          return a.splice(t, 1, ...i), a;
        }
        e.replace = a;
        function o(e, t) {
          let n = e.length;
          if (t < 0 || t >= n) throw Error(`index out of range: ` + t);
          let r = e.slice();
          return r.splice(t, 1), r;
        }
        e.remove = o;
        function s(e, t, n) {
          let r = e.length;
          if (t < 0 || t >= r) throw Error(`from index out of range: ` + t);
          if (n < 0 || n >= r) throw Error(`to index out of range: ` + n);
          let i = e.slice();
          if (n === t) return i;
          let a = i[t];
          return (
            t < n
              ? (i.splice(n + 1, 0, a), i.splice(t, 1))
              : (i.splice(t, 1), i.splice(n, 0, a)),
            i
          );
        }
        e.move = s;
        function c(e, t) {
          let n = [],
            r = Math.min(e.length, t.length);
          for (let i = 0; i < r; i++) n.push([e[i], t[i]]);
          return n;
        }
        e.zip = c;
        function l(e, t, n) {
          let r = e.slice(),
            i = r[t];
          return i === void 0 || (r[t] = n(i)), r;
        }
        e.update = l;
        function u(e) {
          return Array.from(new Set(e));
        }
        e.unique = u;
        function d(e, ...t) {
          return Array.from(new Set([...e, ...t.flat()]));
        }
        e.union = d;
        function f(e, t) {
          return e.filter(t);
        }
        e.filter = f;
      })((aw ||= {})),
      (ow = Object.prototype.hasOwnProperty),
      ((e) => {
        function t(e, t) {
          for (let n of Object.keys(e)) Xd(t, n) || delete e[n];
          for (let n of Object.keys(t)) e[n] === void 0 && (e[n] = t[n]);
          return (
            Object.setPrototypeOf(e, Object.getPrototypeOf(t)),
            iw && Object.freeze(e),
            e
          );
        }
        e.morphUsingTemplate = t;
        function n(e, t) {
          t && Object.assign(e, t), iw && Object.freeze(e);
        }
        e.writeOnce = n;
        function r(e, t) {
          let n = Object.assign(Object.create(Object.getPrototypeOf(e)), e, t);
          return iw && Object.freeze(n), n;
        }
        e.update = r;
      })((sw ||= {})),
      ((e) => {
        function t(e, ...t) {
          return new Set([...e, ...t]);
        }
        e.add = t;
        function n(e, ...t) {
          let n = new Set(e);
          for (let e of t) n.delete(e);
          return n;
        }
        e.remove = n;
        function r(...e) {
          let t = new Set();
          for (let n of e) for (let e of n) t.add(e);
          return t;
        }
        e.union = r;
        function i(t, n) {
          return t.has(n) ? e.remove(t, n) : e.add(t, n);
        }
        e.toggle = i;
      })((cw ||= {})),
      ((e) => {
        function t(e, t, n) {
          let r = new Map(e);
          return r.set(t, n), r;
        }
        e.set = t;
        function n(e, t) {
          let n = new Map(e);
          return n.delete(t), n;
        }
        e.remove = n;
      })((lw ||= {})),
      (uw = class extends Promise {
        constructor() {
          let e, t;
          super((n, r) => {
            (e = n), (t = r);
          }),
            F(this, `_state`, `initial`),
            F(this, `resolve`),
            F(this, `reject`),
            (this.resolve = (t) => {
              (this._state = `fulfilled`), e(t);
            }),
            (this.reject = (e) => {
              (this._state = `rejected`), t(e);
            });
        }
        get state() {
          return this._state;
        }
        pending() {
          return (this._state = `pending`), this;
        }
        isResolved() {
          return this._state === `fulfilled` || this._state === `rejected`;
        }
      }),
      (uw.prototype.constructor = Promise),
      (dw = !1),
      (fw = !1),
      (pw = !1),
      k !== void 0 &&
        k.scheduler &&
        ((dw = `yield` in k.scheduler),
        (fw = `postTask` in k.scheduler),
        (pw = `isInputPending` in k.scheduler)),
      Kd(`task-queue`),
      (mw = `BI;`),
      (hw = class {
        constructor() {
          F(this, `name`, `builtIn`),
            F(this, `fontFamilies`, []),
            F(this, `byFamilyName`, new Map()),
            F(this, `assetsByFamily`, new Map());
        }
        importFonts(e) {
          (this.fontFamilies.length = 0),
            this.byFamilyName.clear(),
            this.assetsByFamily.clear();
          let t = [];
          for (let n of e) {
            if (!this.isValidBuiltInFont(n)) continue;
            let { properties: e } = n,
              r = e.font.fontFamily,
              i = this.createFontFamily(
                r,
                e.font.foundryName,
                e.font.fontVersion
              ),
              a = e.font.openTypeData,
              o = e.font.variationAxes,
              s = Array.isArray(o),
              c = s ? `variable` : e.font.fontSubFamily || `regular`,
              l = $d(n),
              u = {
                family: i,
                selector: this.createSelector(r, c, e.font.fontVersion),
                variant: c,
                file: l,
                hasOpenTypeFeatures: ef(a),
                variationAxes: tf(o),
                category: e.font.fontCategory,
                weight: af(c),
                style: cf(c),
              };
            i.fonts.push(u), this.assetsByFamily.set(r, n), t.push(u);
          }
          for (let e of this.fontFamilies)
            e.fonts.sort((e, t) => {
              let n = af(e.variant),
                r = af(t.variant);
              return !n || !r ? 1 : n - r;
            });
          return t;
        }
        static parseVariant(e) {
          let t = sf(e),
            n = gw[t],
            r = cf(e);
          return { weight: n, style: r };
        }
        getFontBySelector(e) {
          let t = this.parseSelector(e);
          if (!t) return;
          let n = this.getFontFamilyByName(t.name);
          if (n) return n.fonts.find((t) => t.selector === e);
        }
        getFontFamilyByName(e) {
          return this.byFamilyName.get(e) ?? null;
        }
        createFontFamily(e, t, n) {
          let r = this.byFamilyName.get(e);
          if (r && r.version === n) return r;
          let i = {
            source: this.name,
            name: e,
            fonts: [],
            foundryName: t,
            version: n,
          };
          return this.addFontFamily(i), i;
        }
        getOpenTypeFeatures(e) {
          var t, n;
          let r = this.assetsByFamily.get(e),
            i = (n = (t = r?.properties)?.font)?.openTypeData;
          return ef(i)
            ? i?.map((e) => {
                if (nf(e)) return { tag: e.tag, coverage: e.coverage };
              })
            : [];
        }
        isValidBuiltInFont(e) {
          var t;
          return !e.mimeType.startsWith(`font/`) ||
            (t = e.properties)?.kind !== `font` ||
            !e.properties.font ||
            !e.properties.font.fontVersion ||
            !e.properties.font.fontFamily
            ? !1
            : `fontFamily` in e.properties.font;
        }
        createSelector(e, t, n) {
          return `${mw}${e}/${t}/${n}`;
        }
        parseSelector(e) {
          if (!e.startsWith(mw)) return null;
          let [t, n] = e.split(mw);
          if (n === void 0) return null;
          let [r, i, a] = n.split(`/`);
          return !r || !i || !a
            ? null
            : {
                name: r,
                variant: i,
                source: this.name,
                isVariable: i.toLowerCase().includes(`variable`),
              };
        }
        addFontFamily(e) {
          this.fontFamilies.push(e), this.byFamilyName.set(e.name, e);
        }
      }),
      (gw = {
        ultralight: 100,
        "ultralight-italic": 100,
        thin: 200,
        "thin-italic": 200,
        demi: 200,
        light: 300,
        "light-italic": 300,
        normal: 350,
        base: 400,
        regular: 400,
        classic: 400,
        "regular-slanted": 400,
        italic: 400,
        oblique: 400,
        dense: 400,
        brukt: 300,
        book: 400,
        "book-italic": 400,
        text: 400,
        "text-italic": 400,
        medium: 500,
        solid: 500,
        "medium-oblique": 500,
        "medium-italic": 500,
        mittel: 500,
        semibold: 600,
        "semibold-italic": 600,
        bold: 700,
        "bold-italic": 700,
        "bold-oblique": 700,
        fett: 700,
        ultrabold: 800,
        "ultrabold-italic": 800,
        extrabold: 800,
        "extrabold-italic": 800,
        black: 900,
        extralight: 100,
        "extralight-italic": 100,
        "black-italic": 900,
        "extra-italic": 900,
        "extra-italic-bold": 900,
        satt: 900,
        heavy: 900,
        "heavy-italic": 900,
        serif: 100,
        school: 200,
        expanded: 300,
        gothique: 500,
        "dense-light": 200,
        "dense-regular": 300,
        "dense-medium": 400,
        "dense-bold": 500,
        "solid-light": 600,
        "solid-regular": 700,
        "solid-medium": 800,
        "solid-bold": 900,
        53: 400,
        55: 600,
        variable: 1e3,
        "variable-italic": 1e3,
      }),
      (_w = `CUSTOM;`),
      (vw = Ml(`custom-font-source`)),
      (yw = class e {
        constructor() {
          F(this, `name`, `custom`),
            F(this, `fontFamilies`, []),
            F(this, `byFamilyName`, new Map()),
            F(this, `assetsByFamily`, new Map());
        }
        deprecatedImportFonts(e) {
          var t, n;
          (this.fontFamilies.length = 0),
            this.byFamilyName.clear(),
            this.assetsByFamily.clear();
          let r = [];
          for (let i of e) {
            if (!this.isValidCustomFontAsset(i)) continue;
            let e = (t = i.properties)?.font.variationAxes,
              a = Array.isArray(e),
              o = pf(i.name, i.properties),
              s = this.createFontFamily(o),
              c = (n = i.properties)?.font.openTypeData,
              l = a ? `variable` : this.inferVariantName(o),
              u = $d(i),
              d = {
                family: s,
                selector: `${_w}${o}`,
                variant: l,
                file: u,
                hasOpenTypeFeatures: ef(c),
                variationAxes: tf(e),
                owner: _f(i),
              };
            s.fonts.push(d), this.assetsByFamily.set(o, i), r.push(...s.fonts);
          }
          return r;
        }
        importFonts(t, n) {
          var r, i, a, o;
          if (!n) return this.deprecatedImportFonts(t);
          (this.fontFamilies.length = 0),
            this.byFamilyName.clear(),
            this.assetsByFamily.clear();
          let s = {};
          for (let n of t) {
            if (!this.isValidCustomFontAsset(n)) continue;
            let {
                family: t,
                variant: c,
                weight: l,
                style: u,
              } = mf(n.properties.font),
              d = this.createFontFamily(t),
              f = (r = n.properties)?.font.openTypeData,
              p = $d(n),
              m = _f(n),
              h = {
                family: d,
                selector: e.createSelector(d.name, c),
                variant: c,
                weight: l,
                style: u,
                file: p,
                hasOpenTypeFeatures: ef(f),
                variationAxes: tf((i = n.properties)?.font.variationAxes),
                owner: m,
              },
              g = ff(d.fonts, h);
            if (g && g.projectDuplicate)
              h.owner === `project` &&
                ((d.fonts[g.index] = h), (s[h.selector] = h));
            else if (g) {
              vw.warn(
                `Duplicate font found for:`,
                h,
                `with existing font:`,
                g.existingFont
              );
              let e = g.existingFont,
                t = (a = h.file)?.endsWith(`.woff2`) ?? !1,
                n = (o = e.file)?.endsWith(`.woff2`) ?? !1;
              t && !n && ((d.fonts[g.index] = h), (s[h.selector] = h));
            } else d.fonts.push(h), (s[h.selector] = h);
            (d.owner = m), this.assetsByFamily.set(t, n);
          }
          for (let e of this.fontFamilies) e.fonts.length > 0 && gf(e);
          return Object.values(s);
        }
        static createSelector(e, t) {
          return `${_w}${e}${t ? ` ${t}` : ``}`;
        }
        isValidCustomFontAsset(e) {
          var t;
          return !e.mimeType.startsWith(`font/`) ||
            (t = e.properties)?.kind !== `font` ||
            !e.properties.font
            ? !1
            : `fontFamily` in e.properties.font;
        }
        getOpenTypeFeatures(e) {
          var t, n;
          let r = this.assetsByFamily.get(e),
            i = (n = (t = r?.properties)?.font)?.openTypeData;
          return ef(i)
            ? i?.map((e) => {
                if (nf(e)) return { tag: e.tag, coverage: e.coverage };
              })
            : [];
        }
        inferVariantName(e) {
          let t = [
              `thin`,
              `ultra light`,
              `extra light`,
              `light`,
              `normal`,
              `medium`,
              `semi bold`,
              `bold`,
              `extra bold`,
              `black`,
            ],
            n = [...t.map((e) => `${e} italic`), ...t],
            r = e.toLowerCase(),
            i = [...r.split(` `), ...r.split(`-`), ...r.split(`_`)],
            a = n.find(
              (e) => i.includes(e) || i.includes(e.replace(/\s+/gu, ``))
            );
          return a
            ? a.replace(/^\w|\s\w/gu, (e) => e.toUpperCase())
            : `Regular`;
        }
        createFontFamily(e) {
          let t = this.byFamilyName.get(e);
          if (t) return t;
          let n = { source: this.name, name: e, fonts: [] };
          return this.addFontFamily(n), n;
        }
        addFontFamily(e) {
          this.fontFamilies.push(e), this.byFamilyName.set(e.name, e);
        }
        getFontBySelector(e) {
          if (!e.startsWith(_w)) return;
          let t = e.slice(_w.length);
          if (!t) return;
          let n = [];
          for (let [r, i] of this.byFamilyName)
            if (t.startsWith(r)) {
              let t = i.fonts.filter((t) => t.selector === e);
              n.push(...t);
            }
          if (n.length > 0) {
            if (n.length > 1) {
              let e = n.find((e) => {
                var t;
                return (t = e.file)?.endsWith(`.woff2`);
              });
              if (e) return e;
            }
            return n[0];
          }
        }
        getFontFamilyByName(e) {
          let t = this.byFamilyName.get(e);
          return t || null;
        }
      }),
      (bw = [`display`, `sans`, `serif`, `slab`, `handwritten`, `script`]),
      (xw = `FS;`),
      (Sw = {
        thin: 100,
        hairline: 100,
        extralight: 200,
        light: 300,
        regular: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        ultra: 800,
        black: 900,
        heavy: 900,
      }),
      (Cw = Object.keys(Sw)),
      (ww = (() =>
        RegExp(`^(?:${[...Cw, `italic`, `variable`].join(`|`)})`, `u`))()),
      (Tw = class e {
        constructor() {
          F(this, `name`, `fontshare`),
            F(this, `fontFamilies`, []),
            F(this, `byFamilyName`, new Map());
        }
        getFontFamilyByName(e) {
          return this.byFamilyName.get(e) ?? null;
        }
        static parseVariant(e) {
          let t = e.toLowerCase().split(` `),
            n = Cw.find((e) => t.includes(e)),
            r = e.toLowerCase().includes(`italic`) ? `italic` : `normal`,
            i = (n && Sw[n]) || 400,
            a = r === `italic` ? r : `normal`;
          return { weight: i, style: a };
        }
        parseSelector(e) {
          if (!e.startsWith(xw)) return null;
          let t = e.split(`-`);
          if (t.length !== 2) return null;
          let [n, r] = t;
          return !n || !r
            ? null
            : {
                name: n.replace(xw, ``),
                variant: r,
                source: this.name,
                isVariable: r.toLowerCase().includes(`variable`),
              };
        }
        static createSelector(e, t) {
          return `${xw}${e}-${t.toLowerCase()}`;
        }
        static createMetadataSelector(e) {
          return `${xw}${e}`;
        }
        addFontFamily(e) {
          this.fontFamilies.push(e), this.byFamilyName.set(e.name, e);
        }
        async importFonts(t, n) {
          (this.fontFamilies.length = 0), this.byFamilyName.clear();
          let r = await vf(`fontshare`),
            i = [];
          for (let a of t) {
            let t = a.font_styles.filter((e) => {
                let t = e.name.toLowerCase(),
                  n = ww.exec(t);
                return !(!n || t.split(` `).includes(`wide`));
              }),
              o = t.map((t) => {
                let n = e.parseVariant(t.name);
                return {
                  ...n,
                  selector: e.createSelector(a.name, t.name),
                  isVariable: t.is_variable,
                  fontshareVariantName: t.name,
                  file: t.file,
                };
              }),
              s = e.createMetadataSelector(a.name),
              c = n?.[s],
              l = a.name,
              u = this.getFontFamilyByName(l);
            u ||
              ((u = { name: l, fonts: [], source: this.name }),
              this.addFontFamily(u));
            let d = e.createMetadataSelector(a.name),
              f = r[d];
            for (let e of o) {
              let {
                  variantBold: t,
                  variantBoldItalic: n,
                  variantItalic: r,
                  variantVariable: s,
                  variantVariableItalic: l,
                } = lf(e, o),
                d = {
                  family: u,
                  variant: e.fontshareVariantName.toLowerCase(),
                  selector: e.selector,
                  selectorBold: t?.selector,
                  selectorBoldItalic: n?.selector,
                  selectorItalic: r?.selector,
                  selectorVariable: s?.selector,
                  selectorVariableItalic: l?.selector,
                  weight: e.weight,
                  style: e.style,
                  file: e.file,
                  category: Sf(a.category),
                  hasOpenTypeFeatures: f,
                  variationAxes: e.isVariable ? c : void 0,
                };
              u.fonts.push(d), i.push(d);
            }
          }
          return i;
        }
        async getOpenTypeFeatures(t) {
          let n = await yf(`fontshare`),
            r = e.createMetadataSelector(t);
          return n[r];
        }
      }),
      (Ew = `Inter`),
      (Dw = `FR;`),
      (Ow = {
        Thin: 100,
        ExtraLight: 200,
        Light: 300,
        "": 400,
        Medium: 500,
        SemiBold: 600,
        Bold: 700,
        ExtraBold: 800,
        Black: 900,
      }),
      (kw = class e {
        constructor() {
          F(this, `name`, `framer`),
            F(this, `fontFamilies`, []),
            F(this, `byFamilyName`, new Map());
        }
        getFontFamilyByName(e) {
          return this.byFamilyName.get(e) ?? null;
        }
        addFontFamily(e) {
          let t = { name: e, fonts: [], source: this.name };
          return this.fontFamilies.push(t), this.byFamilyName.set(t.name, t), t;
        }
        static getDraftFontPropertiesBySelector(e) {
          if (!e.startsWith(Dw) && !e.startsWith(Ew)) return null;
          let t = e.split(`-`),
            [n, r = ``] = t;
          if (!n) return null;
          let i = r.includes(`Italic`) ? `italic` : `normal`,
            a = r.replace(`Italic`, ``),
            o = (a && Ow[a]) || 400;
          return {
            family: n,
            style: i,
            weight: o,
            source: `framer`,
            variant: void 0,
            category: `sans-serif`,
          };
        }
        static createMetadataSelector(e) {
          return `${Dw}${e}`;
        }
        importFonts(t, n) {
          (this.fontFamilies.length = 0), this.byFamilyName.clear();
          let r = [];
          return (
            t.forEach((t) => {
              let { familyName: i, ...a } = t,
                o = e.createMetadataSelector(t.familyName),
                s = n?.[o],
                c = this.getFontFamilyByName(i);
              c ||= this.addFontFamily(i);
              let l =
                  t.selector === t.selectorVariable ||
                  t.selector === t.selectorVariableItalic,
                u = { ...a, family: c, variationAxes: l ? s : void 0 };
              c.fonts.push(u), r.push(u);
            }),
            r
          );
        }
        async getOpenTypeFeatures(t) {
          let n = await yf(`framer`),
            r = e.createMetadataSelector(t);
          return n[r];
        }
      }),
      (Aw = `GF;`),
      (jw = class e {
        constructor() {
          F(this, `name`, `google`),
            F(this, `fontFamilies`, []),
            F(this, `byFamilyName`, new Map());
        }
        getFontFamilyByName(e) {
          return this.byFamilyName.get(e) ?? null;
        }
        static parseVariant(e) {
          if (e === `regular`) return { style: `normal`, weight: 400 };
          let t = /(\d*)(normal|italic)?/u.exec(e);
          if (!t) return {};
          let n = parseInt(t[1] || `400`),
            r = t[2] === `italic` ? `italic` : `normal`;
          return { weight: n, style: r };
        }
        parseSelector(e) {
          if (!e.startsWith(Aw)) return null;
          let t = e.includes(`-variable-`),
            n = t ? e.split(`-variable-`) : e.split(`-`);
          if (n.length !== 2) return null;
          let [r, i] = n;
          return !r || !i
            ? null
            : {
                name: r.replace(Aw, ``),
                variant: i,
                source: this.name,
                isVariable: t,
              };
        }
        static createSelector(e, t, n) {
          return `${Aw}${e}-${n ? `variable-` : ``}${t}`;
        }
        static createMetadataSelector(e) {
          return `${Aw}${e}`;
        }
        addFontFamily(e) {
          let t = { name: e, fonts: [], source: this.name };
          return this.fontFamilies.push(t), this.byFamilyName.set(t.name, t), t;
        }
        async importFonts(t, n, r) {
          var i;
          (this.fontFamilies.length = 0), this.byFamilyName.clear();
          let a = await vf(`google`),
            o = [],
            s = wf(t, (e) => e.family),
            c = wf(n, (e) => e.family);
          for (let t in s) {
            let n = s[t];
            if (!n) continue;
            let l = this.getFontFamilyByName(n.family);
            l ||= this.addFontFamily(n.family);
            let u = n.variants,
              d = u.map((r) => {
                let i = e.parseVariant(r);
                return {
                  ...i,
                  googleFontsVariantName: r,
                  selector: e.createSelector(t, r, !1),
                  isVariable: !1,
                  file: n.files[r],
                };
              }),
              f = c[t],
              p = f?.axes
                ? f.variants.map((n) => {
                    let r = e.parseVariant(n);
                    return {
                      ...r,
                      googleFontsVariantName: n,
                      selector: e.createSelector(t, n, !0),
                      isVariable: !0,
                      file: f.files[n],
                    };
                  })
                : [],
              m = e.createMetadataSelector(n.family),
              h = r?.[m],
              g = [...d, ...p],
              _ = g.filter(Ad),
              v = e.createMetadataSelector(t),
              y = a[v];
            for (let e of g) {
              let {
                  weight: t,
                  style: r,
                  selector: a,
                  googleFontsVariantName: s,
                } = e,
                c = Ad(e) ? lf(e, _) : void 0,
                {
                  variantBold: u,
                  variantItalic: d,
                  variantBoldItalic: f,
                  variantVariable: p,
                  variantVariableItalic: m,
                } = c ?? {},
                g = {
                  family: l,
                  variant: s,
                  selector: a,
                  selectorBold: u?.selector,
                  selectorBoldItalic: f?.selector,
                  selectorItalic: d?.selector,
                  selectorVariable: p?.selector,
                  selectorVariableItalic: m?.selector,
                  weight: t,
                  style: r,
                  category: Cf(n.category),
                  file: (i = e.file)?.replace(`http://`, `https://`),
                  variationAxes: e.isVariable ? h : void 0,
                  hasOpenTypeFeatures: y,
                };
              l.fonts.push(g), o.push(g);
            }
          }
          return o;
        }
        async getOpenTypeFeatures(t) {
          let n = await yf(`google`),
            r = e.createMetadataSelector(t);
          return n[r];
        }
      }),
      (Mw = he(Ip(), 1)),
      (Nw = 5e3),
      (Pw = 3),
      (Fw = class extends Error {
        constructor(e) {
          super(e), (this.name = `FontLoadingError`);
        }
      }),
      (Iw = new Map()),
      (Lw = new Map()),
      (Rw = (e, t) => Tf(e, t)),
      (zw = {
        "FR;Inter": [
          {
            tag: `opsz`,
            minValue: 14,
            maxValue: 32,
            defaultValue: 14,
            name: `Optical size`,
          },
          {
            tag: `wght`,
            minValue: 100,
            maxValue: 900,
            defaultValue: 400,
            name: `Weight`,
          },
        ],
      }),
      (Bw = class {
        constructor() {
          F(this, `enabled`, !1),
            F(this, `bySelector`, new Map()),
            F(this, `loadedSelectors`, new Set()),
            F(this, `getGoogleFontsListPromise`),
            F(this, `getFontshareFontsListPromise`),
            F(this, `getBuiltInFontsListPromise`),
            F(
              this,
              `customFontsImportPromise`,
              new Promise((e) => {
                this.resolveCustomFontsImportPromise = e;
              })
            ),
            F(this, `local`),
            F(this, `google`),
            F(this, `fontshare`),
            F(this, `builtIn`),
            F(this, `framer`),
            F(this, `custom`),
            (this.local = new jC()),
            (this.google = new jw()),
            (this.fontshare = new Tw()),
            (this.framer = new kw()),
            (this.custom = new yw()),
            (this.builtIn = new hw()),
            (this.bySelector = new Map()),
            this.importLocalFonts();
        }
        addFont(e) {
          this.bySelector.set(e.selector, e);
        }
        getAvailableFonts() {
          return Array.from(this.bySelector.values());
        }
        importLocalFonts() {
          for (let e of this.local.importFonts())
            this.addFont(e), this.loadFont(e);
        }
        async importGoogleFonts() {
          return (
            (this.getGoogleFontsListPromise ||= Promise.resolve().then(
              async () => {
                let { staticFonts: e, variableFonts: t } =
                    await z_.fetchGoogleFontsList(),
                  n = await Df(`google`);
                for (let r of await this.google.importFonts(e, t, n))
                  this.addFont(r);
                return { staticFonts: e, variableFonts: t };
              }
            )),
            this.getGoogleFontsListPromise
          );
        }
        async importFontshareFonts() {
          if (!this.getFontshareFontsListPromise) {
            this.getFontshareFontsListPromise = z_.fetchFontshareFontsList();
            let e = await this.getFontshareFontsListPromise,
              t = await Df(`fontshare`);
            for (let n of await this.fontshare.importFonts(e, t))
              this.addFont(n);
          }
          return this.getFontshareFontsListPromise;
        }
        async importBuiltInFonts() {
          if (!this.getBuiltInFontsListPromise) {
            this.getBuiltInFontsListPromise = z_.fetchBuiltInFontsList();
            let e = await this.getBuiltInFontsListPromise;
            for (let t of await this.builtIn.importFonts(e)) this.addFont(t);
          }
          return this.getBuiltInFontsListPromise;
        }
        importFramerFonts(e) {
          let t = Df(`framer`);
          this.framer.importFonts(e, t).forEach((e) => {
            this.addFont(e);
          });
        }
        importCustomFonts(e, t) {
          this.bySelector.forEach((e, t) => {
            t.startsWith(_w) && this.bySelector.delete(t);
          });
          let n = this.custom.importFonts(e, t);
          for (let e of n) this.addFont(e);
          n.length > 0 && this.resolveCustomFontsImportPromise();
        }
        getCustomFontsImportPromise() {
          return this.customFontsImportPromise;
        }
        getFontFamily(e) {
          let t = this[e.source].getFontFamilyByName(e.name);
          return t;
        }
        getFontBySelector(e) {
          if (e)
            return e.startsWith(_w)
              ? this.custom.getFontBySelector(e)
              : this.bySelector.get(e);
        }
        getDraftPropertiesBySelector(e) {
          let t = this.getFontBySelector(e);
          if (t)
            return {
              style: t.style,
              weight: t.weight,
              variant: t.variant,
              family: Nd(t),
              source: t.family.source,
              category: t.category,
            };
          let n = this.google.parseSelector(e);
          if (n) {
            let e = jw.parseVariant(n.variant);
            if (Ad(e)) {
              let t = n.isVariable ? Pd(n.name) : n.name;
              return {
                style: e.style,
                weight: e.weight,
                variant: n.variant,
                family: t,
                source: `google`,
                category: void 0,
              };
            }
          }
          let r = this.fontshare.parseSelector(e);
          if (r) {
            let e = Tw.parseVariant(r.variant);
            if (Ad(e)) {
              let t = r.isVariable ? Pd(r.name) : r.name;
              return {
                style: e.style,
                weight: e.weight,
                variant: r.variant,
                family: t,
                source: `fontshare`,
                category: void 0,
              };
            }
          }
          let i = this.builtIn.parseSelector(e);
          if (i) {
            let e = hw.parseVariant(i.variant);
            if (Ad(e)) {
              let t = i.isVariable ? Pd(i.name) : i.name;
              return {
                style: e.style,
                weight: e.weight,
                variant: i.variant,
                family: t,
                source: `builtIn`,
                category: void 0,
              };
            }
          }
          let a = kw.getDraftFontPropertiesBySelector(e);
          return a || null;
        }
        isSelectorLoaded(e) {
          return this.loadedSelectors.has(e);
        }
        async loadFont(e) {
          if (this.isSelectorLoaded(e.selector)) return 0;
          let t = e.family.source,
            n = Md(e);
          switch (t) {
            case `local`:
              return this.loadedSelectors.add(e.selector), 1;
            case `framer`:
              if ((rv() || (await Ef(e.family.name, e.style, e.weight)), n)) {
                if (!e.file)
                  return Promise.reject(`Unable to load font: ${e.selector}`);
                await Rw(
                  {
                    family: Nd(e),
                    url: e.file,
                    weight: e.weight,
                    style: e.style,
                    isVariableFont: n,
                  },
                  document
                );
              }
              return this.loadedSelectors.add(e.selector), 1;
            case `google`:
            case `fontshare`:
            case `builtIn`:
            case `custom`:
              return e.file
                ? (await Rw(
                    {
                      family: Nd(e),
                      url: e.file,
                      weight: e.weight,
                      style: e.style,
                      isVariableFont: n,
                    },
                    document
                  ),
                  this.loadedSelectors.add(e.selector),
                  1)
                : Promise.reject(`Unable to load font: ${e.selector}`);
            default:
              H(t);
          }
        }
        async loadFontsFromSelectors(e) {
          if (!this.enabled) return [];
          let t = [],
            n = e.some((e) => e.startsWith(xw));
          n &&
            t.push(
              this.importFontshareFonts().catch((e) => {
                nr(`Failed to load Fontshare fonts:`, e);
              })
            );
          let r = e.some((e) => e.startsWith(Aw));
          r &&
            t.push(
              this.importGoogleFonts().catch((e) => {
                nr(`Failed to load Google fonts:`, e);
              })
            );
          let i = e.some((e) => e.startsWith(mw));
          i &&
            t.push(
              this.importBuiltInFonts().catch((e) => {
                nr(`Failed to load built-in fonts:`, e);
              })
            );
          let a = e.some((e) => e.startsWith(_w));
          a &&
            t.push(
              this.customFontsImportPromise.catch((e) => {
                nr(`Failed to load custom fonts:`, e);
              })
            ),
            t.length > 0 && (await Promise.all(t));
          let o = e.map((e) => this.bySelector.get(e)).filter((e) => !!e);
          return Promise.allSettled(o.map((e) => this.loadFont(e)));
        }
        async loadFonts(e) {
          let t = await this.loadFontsFromSelectors(e),
            n = t.filter(
              (e) => e.status === `fulfilled` && e.value === 1
            ).length;
          return { newlyLoadedFontCount: n };
        }
        async loadMissingFonts(e, t) {
          let n = e.filter((e) => !Vw.isSelectorLoaded(e));
          if (n.length === 0) return;
          await Vw.loadWebFontsFromSelectors(n);
          let r = n.every((e) => Vw.isSelectorLoaded(e));
          r && t && t();
        }
        async loadWebFontsFromSelectors(e) {
          return this.loadFontsFromSelectors(e);
        }
        get defaultFont() {
          let e = this.getFontBySelector(`Inter`);
          return V(e, `Can’t find Inter font`), e;
        }
      }),
      (Vw = new Bw()),
      (Hw = {
        "data-1p-ignore": !0,
        "data-lpignore": !0,
        "data-form-type": `other`,
        autocomplete: `off`,
      }),
      (Uw = s(function (e, t) {
        let {
            autoFocus: n,
            className: r,
            inputName: i,
            max: a,
            min: o,
            placeholder: s,
            required: l,
            step: u,
            style: d,
            type: f,
            maxLength: p,
            defaultValue: m,
            autofillEnabled: h,
            onChange: g,
            onBlur: _,
            onInvalid: v,
            onFocus: y,
            onValid: b,
            ...S
          } = e,
          [C, w] = j(!!m),
          [T, D] = j();
        m !== T && (w(!!m), D(m));
        let O = E(
            async (e) => {
              await jt({ continueAfter: `paint` });
              let t = e.target.value;
              g?.(e), c(() => w(!!t));
            },
            [g]
          ),
          k = Ai(b, v, O, _, y);
        if (f === `hidden`)
          return x(Ee.input, { type: `hidden`, name: i, defaultValue: m });
        let A = h === !1 ? Hw : void 0;
        return x(Ee.div, {
          ref: t,
          style: d,
          className: Xo(Gw, Ag, r),
          ...S,
          children:
            f === `textarea`
              ? x(
                  Ee.textarea,
                  {
                    ...A,
                    ...k,
                    required: l,
                    autoFocus: n,
                    name: i,
                    placeholder: s,
                    className: kg,
                    defaultValue: m,
                    maxLength: p,
                  },
                  m
                )
              : x(
                  Ee.input,
                  {
                    ...A,
                    ...k,
                    type: f,
                    required: l,
                    autoFocus: n,
                    name: i,
                    placeholder: s,
                    className: Xo(kg, !C && jg),
                    defaultValue: m,
                    min: o,
                    max: a,
                    step: u,
                    maxLength: p,
                  },
                  m
                ),
        });
      })),
      (Ww = 16),
      (Gw = `framer-form-text-input`),
      (Kw = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"><path d="m1.5 8 7-7M9 5.5l-3 3" stroke="%23999" stroke-width="1.5" stroke-linecap="round"></path></svg>`),
      (qw = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path fill="rgb(153, 153, 153)" d="M3 5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2H3Z" opacity=".3"/><path fill="transparent" stroke="rgb(153, 153, 153)" stroke-width="1.5" d="M3.25 5.25a2 2 0 0 1 2-2h5.5a2 2 0 0 1 2 2v5.5a2 2 0 0 1-2 2h-5.5a2 2 0 0 1-2-2ZM3 6.75h9.5"/></svg>`),
      (Jw = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path fill="transparent" stroke="rgb(153, 153, 153)" stroke-width="1.5" d="M2.5 8a5.5 5.5 0 1 1 11 0 5.5 5.5 0 1 1-11 0Z"/><path fill="transparent" stroke="rgb(153, 153, 153)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.75 8.25v-3m0 3h2"/></svg>`),
      (Yw = (() => [
        ...Ng,
        ...Ig,
        ...Pg,
        W(`.${Ag}`, {
          boxShadow: W.variable(`--framer-input-box-shadow`),
          borderTopLeftRadius: W.variable(
            `--framer-input-border-radius-top-left`
          ),
          borderTopRightRadius: W.variable(
            `--framer-input-border-radius-top-right`
          ),
          borderBottomRightRadius: W.variable(
            `--framer-input-border-radius-bottom-right`
          ),
          borderBottomLeftRadius: W.variable(
            `--framer-input-border-radius-bottom-left`
          ),
          background: W.variable(`--framer-input-background`),
          transition: W.variable(`--framer-input-focused-transition`),
          transitionProperty: `background, box-shadow`,
        }),
        W(`.${Gw} .${kg}::placeholder`, {
          color: W.variable(`--framer-input-placeholder-color`),
        }),
        W(`.${Gw} .${kg}[type="date"], .${Gw} .${kg}[type="time"]`, {
          "-webkit-appearance": `none`,
          appearance: `none`,
        }),
        W(`.${Gw} .${kg}::-webkit-date-and-time-value`, { textAlign: `start` }),
        W(`.${Gw} textarea`, {
          display: `flex`,
          resize: W.variable(`--framer-textarea-resize`),
          overflowY: `auto`,
          minHeight: `inherit`,
          maxHeight: `inherit`,
          whiteSpace: `break-spaces`,
        }),
        W(`.${Gw} textarea::-webkit-resizer`, {
          background: `no-repeat ${Et(Kw)}`,
        }),
        W(`.${Gw} textarea::-webkit-scrollbar`, {
          cursor: `pointer`,
          background: `transparent`,
        }),
        W(`.${Gw} textarea::-webkit-scrollbar-thumb:window-inactive`, {
          opacity: 0,
        }),
        W(`.${Gw} textarea::-webkit-scrollbar-corner`, {
          background: `none`,
          backgroundColor: `transparent`,
          outline: `none`,
        }),
        W(`.${Gw} .${kg}::-webkit-datetime-edit`, {
          height: W.variable(`--framer-input-font-line-height`),
        }),
        W(`.${Gw} .${kg}.${jg}::-webkit-datetime-edit`, {
          color: W.variable(`--framer-input-placeholder-color`),
          "-webkit-text-fill-color": W.variable(
            `--framer-input-placeholder-color`
          ),
          overflow: `visible`,
        }),
        W(
          `.${Gw} .${kg}[type="date"]::before, .${Gw} .${kg}[type="time"]::before`,
          {
            ...Vg,
            paddingLeft: `${zg}px`,
            maskPosition: `${zg}px center`,
            backgroundPosition: `${zg}px center`,
          }
        ),
        W(`.${Gw} .${kg}[type="date"]::before`, {
          maskImage: W.variable(`--framer-input-icon-mask-image`, Et(qw)),
          backgroundImage: W.variable(`--framer-input-icon-image`),
        }),
        W(`.${Gw} .${kg}[type="time"]::before`, {
          maskImage: W.variable(`--framer-input-icon-mask-image`, Et(Jw)),
          backgroundImage: W.variable(`--framer-input-icon-image`),
        }),
        W(`.${Gw} .${kg}::-webkit-calendar-picker-indicator`, {
          opacity: 0,
          position: `absolute`,
          right: 0,
          top: 0,
          bottom: 0,
          padding: W.variable(`--framer-input-padding`),
          paddingTop: 0,
          paddingBottom: 0,
          width: `${Ww}px`,
          height: `100%`,
        }),
        W(`.${Gw}:focus-within, .${Gw}.${Mg}`, {
          boxShadow: W.variable(
            `--framer-input-focused-box-shadow`,
            `--framer-input-box-shadow`
          ),
          background: W.variable(
            `--framer-input-focused-background`,
            `--framer-input-background`
          ),
        }),
        W(`.${Gw}:focus-within::after, .${Gw}.${Mg}::after`, {
          borderColor: W.variable(
            `--framer-input-focused-border-color`,
            `--framer-input-border-color`
          ),
          borderStyle: W.variable(
            `--framer-input-focused-border-style`,
            `--framer-input-border-style`
          ),
          borderWidth: W.variable(`--framer-input-focused-border-width`, Fg),
        }),
      ])()),
      (Xw = Ey(Uw, Yw, `framer-lib-form-plain-text-input`)),
      (Zw = d.forwardRef(function (e, t) {
        let {
            background: n,
            children: r,
            alt: i,
            draggable: a,
            fitImageDimension: o,
            style: s,
            ...c
          } = e,
          l = { ...s },
          u = T(() => ra(n), [n]),
          [f, p] = j();
        d.useLayoutEffect(() => {
          if (!n?.src || !o || u) return;
          let e = document.createElement(`img`);
          (e.onload = () => {
            e.naturalWidth &&
              e.naturalHeight &&
              p({ width: e.naturalWidth, height: e.naturalHeight });
          }),
            (e.src = n.src);
        }, [n?.src, o, u]);
        let m = u ?? f;
        o && m && ((l[o] = `auto`), (l.aspectRatio = m.width / m.height)),
          n && delete l.background;
        let h = aa(e.as);
        return D(h, {
          ...c,
          style: l,
          ref: t,
          children: [n && x(Qi, { image: n, alt: i, draggable: a }), r],
        });
      })),
      ($w = (() =>
        !X_() &&
        typeof Document < `u` &&
        typeof Document.parseHTMLUnsafe == `function`)()),
      (eT =
        /(<([a-z]+)(?:\s+(?!href[\s=])[^=\s]+=(?:'[^']*'|"[^"]*"))*)(?:(\s+href\s*=)(?:'([^']*)'|"([^"]*)"))?((?:\s+[^=\s]+=(?:'[^']*'|"[^"]*"))*>)/gi),
      (tT = `{{ text-placeholder }}`),
      (nT = `rich-text-wrapper`),
      (rT = s(function (e, t) {
        let {
            id: n,
            name: r,
            html: i,
            htmlFromDesign: a,
            text: o,
            textFromDesign: s,
            fonts: c = [],
            width: l,
            height: u,
            left: d,
            right: f,
            top: m,
            bottom: h,
            center: g,
            className: _,
            stylesPresetsClassName: v,
            visible: y = !0,
            opacity: b,
            rotation: C = 0,
            verticalAlignment: E = `top`,
            isEditable: D = !1,
            environment: k = Y.current,
            withExternalLayout: A = !1,
            positionSticky: j,
            positionStickyTop: M,
            positionStickyRight: ee,
            positionStickyBottom: te,
            positionStickyLeft: ne,
            __htmlStructure: re,
            __fromCanvasComponent: ie = !1,
            _forwardedOverrideId: ae,
            _forwardedOverrides: oe,
            _usesDOMRect: se,
            children: ce,
            ...N
          } = e,
          le = vi(),
          ue = da(e),
          de = S(null),
          P = t ?? de,
          { navigate: fe, getRoute: pe } = ct(),
          F = ut();
        Mt(e.preload ?? []), _a(e, P);
        let me = w(sv),
          he = Rc(),
          I = o,
          ge = ae ?? n;
        if (ge && oe) {
          let e = oe[ge];
          typeof e == `string` && (I = e);
        }
        let _e = ``;
        if (I) {
          let e = Mf(I);
          _e = re ? re.replace(tT, e) : `<p>${e}</p>`;
        } else if (i) _e = i;
        else if (s) {
          let e = Mf(s);
          _e = re ? re.replace(tT, e) : `<p>${e}</p>`;
        } else a && (_e = a);
        let ve = Mc(),
          ye = T(
            () => (he || !pe || !F ? _e : Nf(_e, pe, F, ve)),
            [_e, pe, F, ve]
          );
        if (
          (O(() => {
            let e = P.current;
            if (e === null) return;
            function t(e) {
              let t = fc(e.target, P.current);
              if (
                e.metaKey ||
                !fe ||
                !t ||
                t.getAttribute(`target`) === `_blank`
              )
                return;
              let n = kc(fe, t, ve);
              n && e.preventDefault();
            }
            return (
              e.addEventListener(`click`, t),
              () => {
                e.removeEventListener(`click`, t);
              }
            );
          }, [fe, ve]),
          If(c, ie, P),
          p(() => {
            Ni();
          }, []),
          !y)
        )
          return null;
        let be = D && k() === Y.canvas,
          L = {
            outline: `none`,
            display: `flex`,
            flexDirection: `column`,
            justifyContent: Ff(E),
            opacity: be ? 0 : b,
            flexShrink: 0,
          },
          xe = Y.hasRestrictions(),
          Se = hi(e, le || 0, !1),
          Ce = se && (l === `auto` || u === `auto`),
          we = !!e.transformTemplate || !Se || !xe || ie || Ce,
          Te = we ? e.transformTemplate ?? ua(g) : void 0;
        if (!A) {
          if (Se && xe && !Ce) {
            let e = Sh.getNumber(C).toFixed(4);
            (L.transform = `translate(${Se.x}px, ${Se.y}px) rotate(${e}deg)`),
              (L.width = Se.width),
              (L.minWidth = Se.width),
              (L.height = Se.height);
          } else
            (L.left = d),
              (L.right = f),
              (L.top = m),
              (L.bottom = h),
              (L.width = l),
              (L.height = u),
              (L.rotate = C);
          j
            ? (!he || me) &&
              ((L.position = `sticky`),
              (L.willChange = `transform`),
              (L.zIndex = 1),
              (L.top = M),
              (L.right = ee),
              (L.bottom = te),
              (L.left = ne))
            : he &&
              (e.positionFixed || e.positionAbsolute) &&
              (L.position = `absolute`);
        }
        return (
          Jo(e, L),
          Go(e, L),
          Object.assign(L, e.style),
          x(Ee.div, {
            id: n,
            ref: P,
            ...N,
            style: L,
            layoutId: ue,
            "data-framer-name": r,
            "data-framer-component-type": `DeprecatedRichText`,
            "data-center": g,
            className: Xo(_, v, nT),
            transformTemplate: Te,
            dangerouslySetInnerHTML: { __html: ye },
          })
        );
      })),
      (iT = {
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        skewX: 0,
        skewY: 0,
        filter: `none`,
      }),
      (aT = (() =>
        RegExp(
          `\\p{Regional_Indicator}{2}|\\p{Emoji}\\p{Emoji_Modifier}?\\p{Variation_Selector}?(?:\\u{200d}\\p{Emoji}\\p{Emoji_Modifier}?\\p{Variation_Selector}?)*|.`,
          `gu`
        ))()),
      (oT = s(function (e, t) {
        return x(`svg`, { ...e, ref: t, children: e.children });
      })),
      (sT = Ee.create(oT)),
      (cT = s(function ({ viewBoxScale: e, viewBox: t, children: n, ...r }, i) {
        return x(sT, {
          ...r,
          ref: i,
          viewBox: t,
          children: x(Ee.foreignObject, {
            width: `100%`,
            height: `100%`,
            className: `framer-fit-text`,
            transform: `scale(${e})`,
            style: { overflow: `visible`, transformOrigin: `center center` },
            children: n,
          }),
        });
      })),
      (lT = []),
      (uT = `RichTextContainer`),
      (dT = s(function (e, t) {
        let {
            __fromCanvasComponent: n = !1,
            _forwardedOverrideId: r,
            _forwardedOverrides: i,
            _usesDOMRect: a,
            anchorLinkOffsetY: o,
            as: s,
            bottom: c,
            center: l,
            children: u,
            environment: d = Y.current,
            fonts: f = lT,
            height: m,
            isEditable: h = !1,
            left: g,
            name: _,
            opacity: v,
            positionSticky: y,
            positionStickyBottom: b,
            positionStickyLeft: C,
            positionStickyRight: E,
            positionStickyTop: D,
            right: O,
            rotation: k = 0,
            style: A,
            _initialStyle: j,
            stylesPresetsClassNames: M,
            text: ee,
            top: te,
            verticalAlignment: ne = `top`,
            visible: re = !0,
            width: ie,
            withExternalLayout: ae = !1,
            viewBox: oe,
            viewBoxScale: se = 1,
            effect: ce,
            ...N
          } = e,
          le = vi(),
          ue = Rc(),
          de = w(sv),
          P = da(e),
          fe = S(null),
          pe = t ?? fe;
        _a(e, pe),
          If(f, n, pe),
          p(() => {
            Ni();
          }, []);
        let F = Gf(ce, pe),
          me = T(() => {
            if (u) return Qf(u, M, ee, o, void 0, F.getTokenizer());
          }, [u, M, ee, o, F]);
        if (!re) return null;
        let he = h && d() === Y.canvas,
          I = {
            outline: `none`,
            display: `flex`,
            flexDirection: `column`,
            justifyContent: Ff(ne),
            opacity: he ? 0 : v,
            flexShrink: 0,
          },
          ge = {},
          _e = Y.hasRestrictions(),
          ve = hi(e, le || 0, !1),
          ye = a && (ie === `auto` || m === `auto`),
          be = !!e.transformTemplate || !ve || !_e || n || ye,
          L = be ? e.transformTemplate ?? ua(l) : void 0;
        ae ||
          (ve && _e && !ye
            ? ((ge.x = ve.x + (z(A?.x) ? A.x : 0)),
              (ge.y = ve.y + (z(A?.y) ? A.y : 0)),
              (I.rotate = Sh.getNumber(k)),
              (I.width = ve.width),
              (I.minWidth = ve.width),
              (I.height = ve.height))
            : ((I.left = g),
              (I.right = O),
              (I.top = te),
              (I.bottom = c),
              (I.width = ie),
              (I.height = m),
              (I.rotate = k)),
          y
            ? (!ue || de) &&
              ((I.position = `sticky`),
              (I.willChange = `transform`),
              (I.zIndex = 1),
              (I.top = D),
              (I.right = E),
              (I.bottom = b),
              (I.left = C))
            : ue &&
              (e.positionFixed || e.positionAbsolute) &&
              (I.position = `absolute`)),
          Jo(e, I),
          Go(e, I),
          Object.assign(I, j, A, ge),
          P && (N.layout = `preserve-aspect`);
        let xe = aa(e.as),
          Se = N[`data-framer-name`] ?? _;
        return R(e.viewBox)
          ? e.as === void 0
            ? x(cT, {
                ...N,
                ref: pe,
                style: I,
                layoutId: P,
                viewBox: oe,
                viewBoxScale: se,
                transformTemplate: L,
                "data-framer-name": Se,
                "data-framer-component-type": uT,
                children: me,
              })
            : x(xe, {
                ...N,
                ref: pe,
                style: I,
                layoutId: P,
                transformTemplate: L,
                "data-framer-name": Se,
                "data-framer-component-type": uT,
                children: x(cT, {
                  viewBox: oe,
                  viewBoxScale: se,
                  style: { width: `100%`, height: `100%` },
                  children: me,
                }),
              })
          : x(xe, {
              ...N,
              ref: pe,
              style: I,
              layoutId: P,
              transformTemplate: L,
              "data-framer-name": Se,
              "data-framer-component-type": uT,
              children: me,
            });
      })),
      (fT = s(function ({ children: e, html: t, htmlFromDesign: n, ...i }, a) {
        let o = t || e || n;
        if (R(o)) {
          !i.stylesPresetsClassName &&
            B(i.stylesPresetsClassNames) &&
            (i.stylesPresetsClassName = Object.values(
              i.stylesPresetsClassNames
            ).join(` `));
          let e = { [R(t) ? `html` : `htmlFromDesign`]: o };
          return x(rT, { ...i, ...e, ref: a });
        }
        if (!i.stylesPresetsClassNames && R(i.stylesPresetsClassName)) {
          let [e, t, n, r, a] = i.stylesPresetsClassName.split(` `);
          e === void 0 ||
          t === void 0 ||
          n === void 0 ||
          r === void 0 ||
          a === void 0
            ? console.warn(
                `Encountered invalid stylesPresetsClassNames: ${i.stylesPresetsClassNames}`
              )
            : (i.stylesPresetsClassNames = { h1: e, h2: t, h3: n, p: r, a });
        }
        return x(dT, { ...i, ref: a, children: r(o) ? o : void 0 });
      })),
      (pT = `framer/asset-reference,`),
      (mT = ({
        id: e,
        path: t,
        transform: n,
        repeat: r,
        width: i,
        height: a,
        offsetX: o,
        offsetY: s,
      }) => {
        let c = up(t);
        return x(`pattern`, {
          id: e,
          width: r ? i : `100%`,
          height: r ? a : `100%`,
          patternContentUnits: r ? void 0 : `objectBoundingBox`,
          patternUnits: r ? `userSpaceOnUse` : void 0,
          x: r ? o : void 0,
          y: r ? s : void 0,
          children: x(
            `image`,
            {
              width: r ? i : 1,
              height: r ? a : 1,
              href: c,
              preserveAspectRatio: `none`,
              transform: r ? void 0 : n,
              x: r ? 0 : void 0,
              y: r ? 0 : void 0,
            },
            c
          ),
        });
      }),
      (hT = q_()),
      (gT = class {
        constructor(e, t, n, r, i = 0) {
          (this.id = e),
            (this.svg = t),
            (this.innerHTML = n),
            (this.viewBox = r),
            (this.count = i);
        }
      }),
      (_T = `position: absolute; overflow: hidden; bottom: 0; left: 0; width: 0; height: 0; z-index: 0; contain: strict`),
      (vT = class {
        constructor() {
          F(this, `entries`, new Map()), F(this, `vectorSetItems`, new Map());
        }
        debugGetEntries() {
          return this.entries;
        }
        subscribe(e, t, n, r) {
          if (!e || e === ``) return ``;
          let i = this.entries.get(e);
          if (!i) {
            n ||= `svg${String(hv(e))}_${String(e.length)}`;
            let a = e,
              o,
              s = dp(e);
            s &&
              (t && fp(s, n),
              (s.id = n),
              (o = _p(s)),
              s.removeAttribute(`xmlns`),
              s.removeAttribute(`xlink`),
              s.removeAttribute(`xmlns:xlink`),
              (a = s.outerHTML)),
              (i = this.createDOMElementFor(a, n, o, r)),
              this.entries.set(e, i);
          }
          return (i.count += 1), i.innerHTML;
        }
        getViewBox(e) {
          if (!e || e === ``) return;
          let t = this.entries.get(e);
          return t?.viewBox;
        }
        unsubscribe(e) {
          if (!e || e === ``) return;
          let t = this.entries.get(e);
          t &&
            (--t.count,
            !(t.count > 0) && setTimeout(() => this.maybeRemoveEntry(e), 5e3));
        }
        maybeRemoveEntry(e) {
          let t = this.entries.get(e);
          t &&
            (t.count > 0 || (this.entries.delete(e), this.removeDOMElement(t)));
        }
        removeDOMElement(e) {
          if (hT) {
            let t = document == null ? void 0 : document.getElementById(e.id);
            t?.remove();
          }
        }
        getOrCreateTemplateContainer() {
          let e = document.getElementById(`svg-templates`);
          if (e) return e;
          let t = document.createElement(`div`);
          return (
            (t.id = `svg-templates`),
            (t.ariaHidden = `true`),
            (t.style.cssText = _T),
            document.body.appendChild(t),
            t
          );
        }
        maybeAppendTemplate(e, t) {
          if (document.getElementById(e)) return;
          let n = document.createElement(`div`);
          n.innerHTML = t;
          let r = n.firstElementChild;
          r && ((r.id = e), this.getOrCreateTemplateContainer().appendChild(r));
        }
        createDOMElementFor(e, t, n, r) {
          hT && this.maybeAppendTemplate(t, e);
          let i = n ? `0 0 ${n.width} ${n.height}` : void 0,
            a = i ? ` viewBox="${i}"` : ``,
            o = `<svg style="width:100%;height:100%;${
              r ? `overflow: visible;` : ``
            }"${a}><use href="#${t}"/></svg>`;
          return new gT(t, e, o, i);
        }
        template(e, t) {
          let n = this.vectorSetItems.get(e);
          return (
            n ||
              (this.vectorSetItems.set(e, { svg: t, count: 0 }), !hT) ||
              this.maybeAppendTemplate(e, t),
            `#${e}`
          );
        }
        subscribeToTemplate(e) {
          let t = this.vectorSetItems.get(e);
          if (t)
            return (
              t.count++,
              () => {
                let t = this.vectorSetItems.get(e);
                t &&
                  (t.count--,
                  !(t.count > 0) &&
                    setTimeout(() => {
                      var t, n;
                      (t = this.vectorSetItems.get(e))?.count ||
                        (this.vectorSetItems.delete(e),
                        hT &&
                          ((n =
                            document == null
                              ? void 0
                              : document.getElementById(e)) == null ||
                            n.remove()));
                    }, 5e3));
              }
            );
        }
        clear() {
          this.entries.clear();
        }
        generateTemplates() {
          let e = [];
          return (
            e.push(`<div id="svg-templates" style="${_T}" aria-hidden="true">`),
            this.entries.forEach((t) => e.push(t.svg)),
            this.vectorSetItems.forEach((t) => e.push(t.svg)),
            e.push(`</div>`),
            e.join(`
`)
          );
        }
      }),
      (yT = new vT()),
      (bT = (() => ({
        cm: 96 / 2.54,
        mm: 96 / 2.54 / 10,
        Q: 96 / 2.54 / 40,
        in: 96,
        pc: 96 / 6,
        pt: 96 / 72,
        px: 1,
        em: 16,
        ex: 8,
        ch: 8,
        rem: 16,
      }))()),
      (xT = s(function (e, t) {
        let n = vi(),
          r = da(e),
          i = d.useRef(null),
          a = t ?? i,
          o = EC();
        return (
          _a(e, i),
          x(CT, {
            ...e,
            innerRef: a,
            parentSize: n,
            layoutId: r,
            providedWindow: o,
          })
        );
      })),
      (ST = 5e4),
      (CT = (() => {
        var e;
        return (
          (e = class extends mv {
            constructor() {
              super(...arguments),
                F(this, `container`, d.createRef()),
                F(this, `svgElement`, null),
                F(this, `setSVGElement`, (e) => {
                  (this.svgElement = e), this.setLayerElement(e);
                }),
                F(this, `previouslyRenderedSVG`, ``),
                F(this, `unmountedSVG`, ``);
            }
            static frame(e) {
              return hi(e, e.parentSize || 0);
            }
            get frame() {
              return hi(this.props, this.props.parentSize || 0);
            }
            componentDidMount() {
              if (this.unmountedSVG) {
                let { svgContentId: e } = this.props,
                  t = e ? `svg${e}` : null;
                yT.subscribe(this.unmountedSVG, !e, t),
                  (this.previouslyRenderedSVG = this.unmountedSVG);
              }
              this.props.svgContentId || xp(this.container, this.props);
            }
            componentWillUnmount() {
              yT.unsubscribe(this.previouslyRenderedSVG),
                (this.unmountedSVG = this.previouslyRenderedSVG),
                (this.previouslyRenderedSVG = ``);
            }
            componentDidUpdate(e) {
              if ((super.componentDidUpdate(e), this.props.svgContentId))
                return;
              let { fill: t } = this.props;
              G_.isImageObject(t) &&
                G_.isImageObject(e.fill) &&
                t.src !== e.fill.src &&
                Sa(this.svgElement, `fill`, null, !1),
                xp(this.container, this.props);
            }
            collectLayout(e, t) {
              if (this.props.withExternalLayout) {
                (t.width = `100%`),
                  (t.height = `100%`),
                  (t.aspectRatio = `inherit`);
                return;
              }
              let n = this.frame,
                {
                  rotation: r,
                  intrinsicWidth: i,
                  intrinsicHeight: a,
                  width: o,
                  height: s,
                } = this.props,
                c = Sh.getNumber(r);
              if (
                ((e.opacity = U(this.props.opacity) ? this.props.opacity : 1),
                Y.hasRestrictions() && n)
              ) {
                Object.assign(e, {
                  transform: `translate(${n.x}px, ${n.y}px) rotate(${c.toFixed(
                    4
                  )}deg)`,
                  width: `${n.width}px`,
                  height: `${n.height}px`,
                }),
                  fi(this.props) && (e.position = `absolute`);
                let r = n.width / (i || 1),
                  o = n.height / (a || 1);
                t.transformOrigin = `top left`;
                let { zoom: s, target: l } = Kh;
                if (l === Y.export) {
                  let e = s > 1 ? s : 1;
                  (t.transform = `scale(${r * e}, ${o * e})`), (t.zoom = 1 / e);
                } else t.transform = `scale(${r}, ${o})`;
                i && a && ((t.width = i), (t.height = a));
                return;
              }
              let { left: l, right: u, top: d, bottom: f } = this.props;
              Object.assign(e, {
                left: l,
                right: u,
                top: d,
                bottom: f,
                width: o,
                height: s,
                rotate: c,
              }),
                Object.assign(t, {
                  left: 0,
                  top: 0,
                  bottom: 0,
                  right: 0,
                  position: `absolute`,
                });
            }
            render() {
              let {
                id: e,
                visible: t,
                style: n,
                fill: r,
                svg: i,
                intrinsicHeight: a,
                intrinsicWidth: o,
                title: s,
                description: c,
                layoutId: l,
                className: u,
                variants: d,
                withExternalLayout: f,
                innerRef: p,
                svgContentId: m,
                height: h,
                opacity: g,
                width: _,
                requiresOverflowVisible: v,
                ...b
              } = this.props;
              if (!f && (!t || !e)) return null;
              let S = e ?? l ?? `svg`,
                C = this.frame,
                w = C || { width: o || 100, height: a || 100 },
                T = { ...n, imageRendering: `pixelated`, flexShrink: 0 },
                E = {};
              this.collectLayout(T, E),
                Uo(this.props, T),
                Jo(this.props, T),
                mv.applyWillChange(this.props, T, !1);
              let O = null;
              if (typeof r == `string` || J.isColorObject(r)) {
                let e = J.isColorObject(r)
                  ? r.initialValue || J.toRgbString(r)
                  : r;
                (T.fill = e), (T.color = e);
              } else if (Sv.isLinearGradient(r)) {
                let t = r,
                  n = `${encodeURI(e || ``)}g${Sv.hash(t)}`;
                T.fill = `url(#${n})`;
                let { stops: i, x1: a, x2: o, y1: s, y2: c } = np(t, S);
                O = x(`svg`, {
                  ref: this.setSVGElement,
                  width: `100%`,
                  height: `100%`,
                  style: { position: `absolute` },
                  role: `presentation`,
                  children: x(`linearGradient`, {
                    id: n,
                    x1: a,
                    x2: o,
                    y1: s,
                    y2: c,
                    children: i.map((e, t) =>
                      x(
                        `stop`,
                        {
                          offset: e.position,
                          stopColor: e.color,
                          stopOpacity: e.alpha,
                        },
                        t
                      )
                    ),
                  }),
                });
              } else if (wv.isRadialGradient(r)) {
                let t = r,
                  n = `${encodeURI(e || ``)}g${wv.hash(t)}`;
                T.fill = `url(#${n})`;
                let i = rp(t, S);
                O = x(`svg`, {
                  ref: this.setSVGElement,
                  width: `100%`,
                  height: `100%`,
                  style: { position: `absolute` },
                  role: `presentation`,
                  children: x(`radialGradient`, {
                    id: n,
                    cy: t.centerAnchorY,
                    cx: t.centerAnchorX,
                    r: t.widthFactor,
                    children: i.stops.map((e, t) =>
                      x(
                        `stop`,
                        {
                          offset: e.position,
                          stopColor: e.color,
                          stopOpacity: e.alpha,
                        },
                        t
                      )
                    ),
                  }),
                });
              } else if (G_.isImageObject(r)) {
                let e = cp(r, w, S);
                e &&
                  ((T.fill = `url(#${e.id})`),
                  (O = x(`svg`, {
                    ref: this.setSVGElement,
                    width: `100%`,
                    height: `100%`,
                    style: { position: `absolute` },
                    role: `presentation`,
                    children: x(`defs`, { children: x(mT, { ...e }) }),
                  })));
              }
              let k = { "data-framer-component-type": `SVG` },
                A = !C;
              A && Object.assign(k, sa(this.props.center));
              let j =
                  !v &&
                  !O &&
                  !T.fill &&
                  !T.background &&
                  !T.backgroundImage &&
                  i.length < ST &&
                  !vp(i) &&
                  !yp(i),
                M = null;
              if (j)
                (T.backgroundSize = `100% 100%`),
                  (T.backgroundImage = Et(i)),
                  yT.unsubscribe(this.previouslyRenderedSVG),
                  (this.previouslyRenderedSVG = ``);
              else {
                let e = m ? `svg${m}` : null,
                  t = yT.subscribe(i, !m, e, v);
                yT.unsubscribe(this.previouslyRenderedSVG),
                  (this.previouslyRenderedSVG = i),
                  bp(T) && (T.overflow = `hidden`),
                  (M = D(y, {
                    children: [
                      O,
                      x(
                        `div`,
                        {
                          className: `svgContainer`,
                          style: E,
                          ref: this.container,
                          dangerouslySetInnerHTML: { __html: t },
                        },
                        G_.isImageObject(r) ? r.src : ``
                      ),
                    ],
                  }));
              }
              let ee = aa(this.props.as),
                {
                  href: te,
                  target: ne,
                  rel: re,
                  onClick: ie,
                  onTap: ae,
                } = this.props,
                oe = s || c;
              return D(ee, {
                ...k,
                ...b,
                layoutId: l,
                transformTemplate: A ? ua(this.props.center) : void 0,
                id: e,
                ref: p,
                style: T,
                className: u,
                variants: d,
                tabIndex: this.props.tabIndex,
                role: oe ? `img` : void 0,
                "aria-label": s,
                "aria-description": c,
                "aria-hidden": oe ? void 0 : `true`,
                onTap: ae,
                onClick: ie,
                href: te,
                target: ne,
                rel: re,
                children: [M, x(Sp, {})],
              });
            }
          }),
          F(e, `supportsConstraints`, !0),
          F(e, `defaultSVGProps`, {
            left: void 0,
            right: void 0,
            top: void 0,
            bottom: void 0,
            style: void 0,
            _constraints: { enabled: !0, aspectRatio: null },
            parentSize: 0,
            rotation: 0,
            visible: !0,
            svg: ``,
            shadows: [],
          }),
          F(e, `defaultProps`, { ...mv.defaultProps, ...e.defaultSVGProps }),
          e
        );
      })()),
      (wT = 1e3),
      (TT = `explicitInter`),
      (ie.prototype.addChild = function ({ transformer: e = (e) => e }) {
        let t = De(e(this.get()));
        return this.onChange((n) => t.set(e(n))), t;
      });
  });
export {
  pc as ChildrenCanSuspend,
  mb as ComponentViewportProvider,
  Db as Container,
  sg as ControlType,
  Zr as ErrorPlaceholder,
  yx as FormContainer,
  Xw as FormPlainTextInput2,
  xy as GeneratedComponentContext,
  Lb as GracefullyDegradingErrorBoundary,
  Zw as Image2,
  V_ as LibraryFeaturesProvider,
  sx as Link,
  ch as NotFoundError,
  Gt as PageEffectsProvider,
  Al as PageRoot,
  rx as PathVariablesContext,
  Ny as PropertyOverrides2,
  pC as QueryCache,
  fC as QueryEngine,
  Y as RenderTarget,
  Hx as ResolveLinks,
  fT as RichText,
  xT as SVG,
  Ob as SmartComponentScopedContainer,
  wp as addFonts,
  Bi as addPropertyControls,
  O_ as combinedCSSRulesForPreview,
  Xo as cx,
  Vw as fontStore,
  Vy as framerAppearAnimationScriptKey,
  Ry as framerAppearEffects,
  By as framerAppearIdKey,
  zy as framerAppearTransformTemplateToken,
  Ty as framerCSSMarker,
  Tp as getFonts,
  Ep as getFontsFromSharedStyle,
  Cp as getLoadingLazyAtYPosition,
  Vi as getPropertyControls,
  ud as getWhereExpressionFromPathVariables,
  zn as inferInitialRouteFromPath,
  ET as init_framer_TLIAXGT6,
  Ei as installFlexboxGapWorkaroundIfNeeded,
  qe as lazy,
  jn as markHydrationStart,
  ax as nestedLinksCollector,
  Jn as patchRoutesForABTesting,
  rd as removeHiddenBreakpointLayersV2,
  yT as sharedSVGManager,
  Dn as turnOffReactEventHandling,
  Yu as useActiveVariantCallback,
  Rs as useComponentViewport,
  _t as useCurrentPathVariables,
  ut as useCurrentRoute,
  dc as useCustomCursors,
  $u as useHydratedBreakpointVariants,
  Rc as useIsOnFramerCanvas,
  fd as useLoadMorePaginatedQuery,
  En as useLocaleCode,
  Tn as useLocaleInfo,
  $n as useMetadata,
  cd as useQueryData,
  gt as useRouteElementId,
  ct as useRouter,
  Ed as useVariantState,
  Ey as withCSS,
  Dd as withCodeBoundaryForOverrides,
  fb as withFX,
  ds as withOptimizedAppearEffect,
  Ap as withPerformanceMarks,
  wC as withVariantAppearEffect,
  jt as yieldToMain,
};
//# sourceMappingURL=framer.tQbOOGJb.mjs.map
