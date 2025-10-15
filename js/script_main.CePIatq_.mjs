import { __esmMin as e } from "./rolldown-runtime.DSjM2LRs.mjs";
import {
  B as t,
  Ga as n,
  K as r,
  L as i,
  X as a,
  Z as o,
  d as s,
  init_client as c,
  init_npm_react_18_2 as l,
  init_npm_react_dom_18_2 as u,
  init_ssg_sandbox_shims as d,
  navigator as f,
  pe as p,
  r as m,
  te as h,
  ue as g,
  window as _,
  x as v,
  ye as y,
} from "./react.CL8SE-Jx.mjs";
import {
  ErrorPlaceholder as b,
  GracefullyDegradingErrorBoundary as x,
  LibraryFeaturesProvider as S,
  PageEffectsProvider as C,
  PageRoot as w,
  inferInitialRouteFromPath as T,
  init_framer_TLIAXGT6 as E,
  installFlexboxGapWorkaroundIfNeeded as D,
  lazy as O,
  markHydrationStart as k,
  patchRoutesForABTesting as A,
  removeHiddenBreakpointLayersV2 as j,
  turnOffReactEventHandling as M,
  useCurrentRoute as N,
  useLocaleInfo as P,
  useRouter as F,
  withPerformanceMarks as I,
  yieldToMain as L,
} from "./framer.tQbOOGJb.mjs";
async function R({ routeId: e, pathVariables: r, localeId: i }) {
  let o = V[e].page.preload(),
    s = t(w, {
      isWebsite: !0,
      routeId: e,
      pathVariables: r,
      routes: V,
      collectionUtils: U,
      framerSiteId: W,
      notFoundPage: O(() =>
        import(`./3f-nwWv_9WDMeYw0rzIrl665_AHFYM8jQq3lv2NzAkM.BHzH6JMX.mjs`)
      ),
      isReducedMotion: !0,
      localeId: i,
      locales: H,
      preserveQueryParams: void 0,
      siteCanonicalURL: `https://sanoobpookodan.github.io/my-portfolio`,
      EditorBar:
        _ === void 0
          ? void 0
          : (() => {
              let e =
                /bot|-google|google-|yandex|ia_archiver|crawl|spider/iu.test(
                  f.userAgent
                );
              if (e) {
                console.log(
                  `[Framer Editor Bar] Unavailable because navigator is bot`
                );
                return;
              }
              return O(async () => {
                let e = {
                  __version: 2,
                  framer: {
                    useCurrentRoute: N,
                    useLocaleInfo: P,
                    useRouter: F,
                  },
                  react: {
                    createElement: t,
                    Fragment: v,
                    memo: a,
                    useCallback: h,
                    useEffect: g,
                    useRef: p,
                    useState: y,
                  },
                  "react-dom": { createPortal: n },
                };
                _.__framer_editorBarDependencies = e;
                let { createEditorBar: r } = await import(
                  `https://framer.com/edit/init.mjs`
                );
                return { default: r() };
              });
            })(),
    }),
    c = t(S, {
      children: s,
      value: {
        editorBarDisableFrameAncestorsSecurity: !1,
        motionDivToDiv: !1,
        motionDivToDivBackgroundImage: !0,
        pauseOffscreen: !0,
        replaceNestedLinks: !0,
        synchronousNavigationOnDesktop: !1,
        yieldOnTap: !1,
      },
    }),
    l = t(x, { children: c }),
    u = t(C, {
      children: l,
      value: {
        global: {
          enter: {
            mask: { angle: 270, type: `wipe`, width: `100%` },
            opacity: 1,
            rotate: 0,
            rotate3d: !1,
            rotateX: 0,
            rotateY: 0,
            scale: 1,
            transition: {
              damping: 30,
              delay: 0,
              duration: 0.4,
              ease: [0.27, 0, 0.51, 1],
              mass: 1,
              stiffness: 400,
              type: `tween`,
            },
            x: `0px`,
            y: `0px`,
          },
        },
        routes: {},
      },
    });
  return await o, u;
}
function z() {
  G && _.__framer_events.push(arguments);
}
async function B(e, t) {
  function n(e, t, n = !0) {
    if (e.caught || _.__framer_hadFatalError) return;
    let r = t?.componentStack;
    if (n) {
      if (
        (console.warn(
          `Recoverable error has happened. Please check any custom code or code overrides to fix server/client mismatches:
`,
          e,
          r
        ),
        Math.random() > 0.01)
      )
        return;
    } else
      console.error(
        `Fatal crash has happened. If you are the author of this website, please report this issue to the Framer team via https://www.framer.community/:
`,
        e,
        r
      );
    z(
      n ? `published_site_load_recoverable_error` : `published_site_load_error`,
      {
        message: String(e),
        componentStack: r,
        stack: r
          ? void 0
          : e instanceof Error && typeof e.stack == `string`
          ? e.stack
          : null,
      }
    );
  }
  try {
    let r, i, a, c;
    if (e) {
      let e = JSON.parse(t.dataset.framerHydrateV2);
      (r = e.routeId),
        (i = e.localeId),
        (a = e.pathVariables),
        (c = e.breakpoints),
        (r = A(V, r));
    } else {
      A(V, void 0);
      let e = T(V, decodeURIComponent(location.pathname), !0, H);
      (r = e.routeId), (i = e.localeId), (a = e.pathVariables);
    }
    let l = R({ routeId: r, localeId: i, pathVariables: a });
    _ !== void 0 &&
      (async () => {
        let e = V[r],
          t = H.find(({ id: e }) => (i ? e === i : e === `default`)).code,
          n = null;
        if (e?.collectionId && U) {
          let r = await U[e.collectionId]?.(),
            [i] = Object.values(a);
          r &&
            typeof i == `string` &&
            (n = (await r.getRecordIdBySlug(i, t || void 0)) ?? null);
        }
        let o = Intl.DateTimeFormat().resolvedOptions(),
          s = o.timeZone,
          c = o.locale;
        await new Promise((e) => {
          document.prerendering
            ? document.addEventListener(`prerenderingchange`, e, { once: !0 })
            : e();
        }),
          _.__framer_events.push([
            `published_site_pageview`,
            {
              framerSiteId: W ?? null,
              version: 2,
              routePath: e?.path || `/`,
              collectionItemId: n,
              framerLocale: t || null,
              webPageId: e?.abTestingVariantId ?? r,
              abTestId: e?.abTestId,
              referrer: document.referrer || null,
              url: _.location.href,
              hostname: _.location.hostname || null,
              pathname: _.location.pathname || null,
              hash: _.location.hash || null,
              search: _.location.search || null,
              timezone: s,
              locale: c,
            },
            `eager`,
          ]),
          await L({
            priority: `background`,
            ensureContinueBeforeUnload: !0,
            continueAfter: `paint`,
          }),
          document.dispatchEvent(
            new CustomEvent(`framer:pageview`, {
              detail: { framerLocale: t || null },
            })
          );
      })();
    let u = await l;
    if (e) {
      I(`framer-rewrite-breakpoints`, () => {
        j(c), _.__framer_onRewriteBreakpoints?.(c);
      });
      let e = o;
      e(() => {
        k(), M(), s(t, u, { onRecoverableError: n });
      });
    } else m(t, { onRecoverableError: n }).render(u);
  } catch (e) {
    throw (n(e, void 0, !1), e);
  }
}
var V,
  H,
  U,
  W,
  G,
  K,
  q = e(() => {
    d(),
      E(),
      l(),
      u(),
      c(),
      (V = {
        dqkkaMW66: {
          elements: {
            Cyd4W2QVH: `experience`,
            m_BLJOG5w: `contact`,
            nTBfj6C59: `hero`,
            O2i2SE4es: `references`,
            swq3kdRwG: `skills`,
            TOkUr23gG: `work`,
          },
          page: O(() =>
            import(`./X1N0Dg5N_lfErHUu7_qaDuPnc7xTtPcte5G3ARnlDug.B01qJuXL.mjs`)
          ),
          path: `/`,
        },
        skCBjGGGU: {
          elements: { M43i4lPhT: `hero` },
          page: O(() =>
            import(`./wB2K2la40CVA3zQofTDH1THQi_EU5Z1G6J44bbp9SCo.l5w2LWva.mjs`)
          ),
          path: `/contact`,
        },
        iIUPKXiyu: {
          elements: { M73GQPbLh: `blog` },
          page: O(() =>
            import(`./rQATNiswutWt995HERESkwzfpierxqCY9DozwlYwll4.ZJ4gkSZF.mjs`)
          ),
          path: `/blog`,
        },
        njVMqEuvH: {
          elements: { Y1dk38IbD: `hero` },
          page: O(() =>
            import(`./3f-nwWv_9WDMeYw0rzIrl665_AHFYM8jQq3lv2NzAkM.BHzH6JMX.mjs`)
          ),
          path: `/404`,
        },
        o7Lhg86HO: {
          collectionId: `HvA2icrab`,
          elements: {
            jWgwColRM: `description`,
            kZytKiRCE: `results`,
            NrqLetHNV: `solution`,
            oF97DuYQu: `intro`,
            rVmCTjUAS: `process`,
          },
          page: O(() =>
            import(`./xOsUVUuSgzSQKBsfyruRTXO1oDT9JXpywmzMG5-hlw8.BljmMh79.mjs`)
          ),
          path: `/case-studies/:cVobtGrRA`,
        },
        R7Bcv2Axj: {
          collectionId: `etS8waHTr`,
          elements: { V9p0JZCVM: `blog` },
          page: O(() =>
            import(`./osMDOYuMDOlpQzPAyFG1bsemU7ikDzd8ffPJq2-TnLY.oSn6tq3u.mjs`)
          ),
          path: `/blog/:RooMAy2it`,
        },
      }),
      (H = [{ code: `en`, id: `default`, name: `English`, slug: `` }]),
      (U = {
        etS8waHTr: async () =>
          (
            await import(
              `./efNi8yWuu6fsd0WKJ9hmnq7RiJL_MLZ8PamWrt7LUHI.CUooEzte.mjs`
            )
          )?.utils,
        HvA2icrab: async () =>
          (
            await import(
              `./QNimhN66CUVpsS80X8bMDxSBNHOsMOMRau93RVsLeaQ.CU4liXh1.mjs`
            )
          )?.utils,
      }),
      (W = `3b1e0585e2fdcb79f9b3f0aa02d261b0a7065789c6160e2784212635a094f500`),
      (G = typeof document < `u`),
      G &&
        ((_.__framer_importFromPackage = (e, n) => () =>
          t(b, {
            error:
              `Package component not supported: "` + n + `" in "` + e + `"`,
          })),
        (_.process = {
          ..._.process,
          env: {
            ...(_.process ? _.process.env : void 0),
            NODE_ENV: `production`,
          },
        }),
        (_.__framer_events = _.__framer_events || []),
        D(),
        (K = document.getElementById(`main`)),
        `framerHydrateV2` in K.dataset ? B(!0, K) : B(!1, K)),
      (function () {
        G &&
          o(() => {
            s(
              document.getElementById(`__framer-badge-container`),
              t(i, {}, t(r(() => import(`./PX9hIOIVM.CaM8E9cg.mjs`))))
            );
          });
      })();
  });
q();
export { R as getPageRoot };
//# sourceMappingURL=script_main.CePIatq_.mjs.map
