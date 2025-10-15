import { __esmMin as e } from "./rolldown-runtime.DSjM2LRs.mjs";
import {
  Y as t,
  ae as n,
  init_jsx_runtime as r,
  init_npm_react_18_2 as i,
  p as a,
  pe as o,
  re as s,
  se as c,
  u as l,
  x as u,
} from "./react.CL8SE-Jx.mjs";
import {
  LayoutGroup as d,
  MotionConfigContext as f,
  init_framer_motion_5EXT2AMG as p,
  motion as m,
} from "./motion.CbTbuOc9.mjs";
import {
  ComponentViewportProvider as h,
  ControlType as g,
  Link as _,
  ResolveLinks as v,
  RichText as y,
  SmartComponentScopedContainer as b,
  addFonts as x,
  addPropertyControls as S,
  cx as C,
  fontStore as w,
  getFonts as T,
  getFontsFromSharedStyle as E,
  init_framer_TLIAXGT6 as D,
  useActiveVariantCallback as ee,
  useComponentViewport as O,
  useLocaleInfo as k,
  useRouter as A,
  useVariantState as j,
  withCSS as M,
  withFX as N,
  withOptimizedAppearEffect as P,
  withVariantAppearEffect as F,
} from "./framer.tQbOOGJb.mjs";
var I,
  L,
  R,
  z = e(() => {
    D(),
      w.loadFonts([
        `FS;Poppins-regular`,
        `FS;Poppins-semibold`,
        `FS;Poppins-bold italic`,
        `FS;Poppins-italic`,
      ]),
      (I = [
        {
          explicitInter: !0,
          fonts: [
            {
              family: `Poppins`,
              source: `fontshare`,
              style: `normal`,
              url: `https://framerusercontent.com/third-party-assets/fontshare/wf/NC2MP33RO4WQTSTEEAWBJLAEXNCNEQVF/7F4U3COKLHQH4WUH3AXPC7N4UELEWJQN/JMWNCAGBH3TLANIVQPVABVAVNV5QERTH.woff2`,
              weight: `400`,
            },
            {
              family: `Poppins`,
              source: `fontshare`,
              style: `normal`,
              url: `https://framerusercontent.com/third-party-assets/fontshare/wf/E6J4GS76KHNRRUWODFCFOX2JRKNRSFVY/3GYVT5S4AH7VMPASDDKOTIPV6P3WJXGI/24R4YOH3G2SFDSTCNHOVGYEX3DMRC3CE.woff2`,
              weight: `600`,
            },
            {
              family: `Poppins`,
              source: `fontshare`,
              style: `italic`,
              url: `https://framerusercontent.com/third-party-assets/fontshare/wf/JQL34MORONR7D7BXOVTX3KBGJGEJQ5BJ/CKUZVY5SFANCFAT7FS3MP6ZL4BMEWCJE/NOLRWF3JBJ434MILPG5RB6R2B4HGRSZB.woff2`,
              weight: `700`,
            },
            {
              family: `Poppins`,
              source: `fontshare`,
              style: `italic`,
              url: `https://framerusercontent.com/third-party-assets/fontshare/wf/7LLTLAW3NRWOADG4II2JGKZC6OSEMBQC/EYFXWX77PEMPU645EAWOTG22E375GULW/SSNNTU67MMJH4CSWT443B4KJ7OB4WFHF.woff2`,
              weight: `400`,
            },
          ],
        },
      ]),
      (L = [
        `.framer-7N5g7 .framer-styles-preset-1hj8z0a:not(.rich-text-wrapper), .framer-7N5g7 .framer-styles-preset-1hj8z0a.rich-text-wrapper p { --framer-font-family: "Poppins", "Poppins Placeholder", sans-serif; --framer-font-family-bold: "Poppins", "Poppins Placeholder", sans-serif; --framer-font-family-bold-italic: "Poppins", "Poppins Placeholder", sans-serif; --framer-font-family-italic: "Poppins", "Poppins Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-weight: 400; --framer-font-weight-bold: 600; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: 0em; --framer-line-height: 1.3em; --framer-paragraph-spacing: 24px; --framer-text-alignment: start; --framer-text-color: var(--token-fe8040e6-3344-44c0-bab9-226d490ba5f3, #ffffff); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
      ]),
      (R = `framer-7N5g7`);
  });
function B(e, ...t) {
  let n = {};
  return t?.forEach((t) => t && Object.assign(n, e[t])), n;
}
var V,
  H,
  U,
  te,
  ne,
  re,
  ie,
  ae,
  oe,
  se,
  ce,
  le,
  W,
  ue = e(() => {
    r(),
      D(),
      p(),
      i(),
      (V = {
        CnFfN8KTT: { hover: !0 },
        KEFLVbD3X: { hover: !0 },
        nRbUCi1az: { hover: !0 },
      }),
      (H = [`KEFLVbD3X`, `CnFfN8KTT`, `nRbUCi1az`]),
      (U = `framer-YntML`),
      (te = {
        CnFfN8KTT: `framer-v-hw7a9p`,
        KEFLVbD3X: `framer-v-1ai5xzg`,
        nRbUCi1az: `framer-v-1en7qb5`,
      }),
      (ne = { damping: 80, delay: 0, mass: 1, stiffness: 250, type: `spring` }),
      (re = ({ value: e, children: t }) => {
        let n = s(f),
          r = e ?? n.transition,
          i = c(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return a(f.Provider, { value: i, children: t });
      }),
      (ie = m(u)),
      (ae = {
        PrimaryButton: `KEFLVbD3X`,
        SecondaryButton: `CnFfN8KTT`,
        TertiaryButton: `nRbUCi1az`,
      }),
      (oe = ({
        height: e,
        id: t,
        link: n,
        tap: r,
        title: i,
        width: a,
        ...o
      }) => {
        var s, c, l;
        return {
          ...o,
          B0eTuUnrS: n ?? o.B0eTuUnrS,
          FOxcLjTdx: (s = i ?? o.FOxcLjTdx) ?? `Button`,
          QIrXjwYb4: r ?? o.QIrXjwYb4,
          variant: (l = (c = ae[o.variant]) ?? o.variant) ?? `KEFLVbD3X`,
        };
      }),
      (se = (e, t) =>
        e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`)),
      (ce = t(function (e, t) {
        let { activeLocale: r, setLocale: i } = k(),
          {
            style: s,
            className: c,
            layoutId: l,
            variant: f,
            FOxcLjTdx: p,
            B0eTuUnrS: h,
            QIrXjwYb4: g,
            f1WYOwPZmauCq3aHNm: v,
            ...b
          } = oe(e),
          {
            baseVariant: x,
            classNames: S,
            clearLoadingGesture: w,
            gestureHandlers: T,
            gestureVariant: E,
            isLoading: D,
            setGestureState: A,
            setVariant: M,
            variants: N,
          } = j({
            cycleOrder: H,
            defaultVariant: `KEFLVbD3X`,
            enabledGestures: V,
            variant: f,
            variantClassNames: te,
          }),
          P = se(e, N),
          { activeVariantCallback: F, delay: I } = ee(x),
          L = F(async (...e) => {
            if ((A({ isPressed: !1 }), g)) {
              let t = await g(...e);
              if (t === !1) return !1;
            }
          }),
          R = o(null),
          z = n(),
          ae = [];
        return (
          O(),
          a(d, {
            id: l ?? z,
            children: a(ie, {
              animate: N,
              initial: !1,
              children: a(re, {
                value: ne,
                children: a(_, {
                  href: h,
                  openInNewTab: !1,
                  smoothScroll: !0,
                  children: a(m.a, {
                    ...b,
                    ...T,
                    className: `${C(
                      U,
                      ...ae,
                      `framer-1ai5xzg`,
                      c,
                      S
                    )} framer-5gwsvv`,
                    "data-framer-name": `PrimaryButton`,
                    "data-highlight": !0,
                    layoutDependency: P,
                    layoutId: `KEFLVbD3X`,
                    onTap: L,
                    ref: t ?? R,
                    style: {
                      "--border-bottom-width": `0px`,
                      "--border-color": `rgba(0, 0, 0, 0)`,
                      "--border-left-width": `0px`,
                      "--border-right-width": `0px`,
                      "--border-style": `solid`,
                      "--border-top-width": `0px`,
                      backgroundColor: `var(--token-ecafc256-809a-4d45-a91d-a2dbb56ff89e, rgb(221, 255, 0))`,
                      borderBottomLeftRadius: 16,
                      borderBottomRightRadius: 16,
                      borderTopLeftRadius: 16,
                      borderTopRightRadius: 16,
                      boxShadow: `0px 0.6021873017743928px 3.010936508871964px -1.3333333333333333px rgba(221, 255, 0, 0.76387), 0px 2.288533303243457px 11.442666516217285px -2.6666666666666665px rgba(221, 255, 0, 0.66269), 0px 10px 50px -4px rgba(221, 255, 0, 0.2)`,
                      ...s,
                    },
                    variants: {
                      "CnFfN8KTT-hover": {
                        boxShadow: `0px 0.6021873017743928px 3.010936508871964px -0.8333333333333333px rgba(221, 255, 0, 0.5), 0px 2.288533303243457px 11.442666516217285px -1.6666666666666665px rgba(221, 255, 0, 0.5), 0px 10px 50px -2.5px rgba(221, 255, 0, 0.5)`,
                      },
                      "KEFLVbD3X-hover": {
                        boxShadow: `0px 0.6021873017743928px 3.010936508871964px -0.8333333333333333px rgba(221, 255, 0, 0.5), 0px 2.288533303243457px 11.442666516217285px -1.6666666666666665px rgba(221, 255, 0, 0.5), 0px 10px 50px -2.5px rgba(221, 255, 0, 0.5)`,
                      },
                      "nRbUCi1az-hover": {
                        boxShadow: `0px 0.6021873017743928px 3.010936508871964px -0.8333333333333333px rgba(221, 255, 0, 0.5), 0px 2.288533303243457px 11.442666516217285px -1.6666666666666665px rgba(221, 255, 0, 0.5), 0px 10px 50px -2.5px rgba(221, 255, 0, 0.5)`,
                      },
                      CnFfN8KTT: {
                        "--border-bottom-width": `2px`,
                        "--border-color": `var(--token-ecafc256-809a-4d45-a91d-a2dbb56ff89e, rgb(221, 255, 0))`,
                        "--border-left-width": `2px`,
                        "--border-right-width": `2px`,
                        "--border-style": `solid`,
                        "--border-top-width": `2px`,
                        backgroundColor: `rgba(221, 255, 0, 0.2)`,
                      },
                      nRbUCi1az: {
                        borderBottomLeftRadius: 12,
                        borderBottomRightRadius: 12,
                        borderTopLeftRadius: 12,
                        borderTopRightRadius: 12,
                      },
                    },
                    ...B(
                      {
                        "CnFfN8KTT-hover": { "data-framer-name": void 0 },
                        "KEFLVbD3X-hover": { "data-framer-name": void 0 },
                        "nRbUCi1az-hover": { "data-framer-name": void 0 },
                        CnFfN8KTT: {
                          "data-border": !0,
                          "data-framer-name": `SecondaryButton`,
                        },
                        nRbUCi1az: { "data-framer-name": `TertiaryButton` },
                      },
                      x,
                      E
                    ),
                    children: a(y, {
                      __fromCanvasComponent: !0,
                      children: a(u, {
                        children: a(m.p, {
                          style: {
                            "--font-selector": `R0Y7UG9wcGlucy02MDA=`,
                            "--framer-font-family": `"Poppins", "Poppins Placeholder", sans-serif`,
                            "--framer-font-weight": `600`,
                            "--framer-text-color": `var(--extracted-r6o4lv, var(--variable-reference-f1WYOwPZm-auCq3aHNm))`,
                          },
                          children: `Button`,
                        }),
                      }),
                      className: `framer-14zhxxj`,
                      "data-framer-name": `Title`,
                      fonts: [`GF;Poppins-600`],
                      layoutDependency: P,
                      layoutId: `B_Wjubls0`,
                      style: {
                        "--extracted-r6o4lv": `var(--variable-reference-f1WYOwPZm-auCq3aHNm)`,
                        "--framer-link-text-color": `rgb(0, 153, 255)`,
                        "--framer-link-text-decoration": `underline`,
                        "--framer-paragraph-spacing": `0px`,
                        "--variable-reference-f1WYOwPZm-auCq3aHNm": v,
                      },
                      text: p,
                      variants: {
                        CnFfN8KTT: {
                          "--extracted-r6o4lv": `var(--token-ecafc256-809a-4d45-a91d-a2dbb56ff89e, rgb(221, 255, 0))`,
                        },
                      },
                      verticalAlignment: `top`,
                      withExternalLayout: !0,
                      ...B(
                        {
                          CnFfN8KTT: {
                            children: a(u, {
                              children: a(m.p, {
                                style: {
                                  "--font-selector": `R0Y7UG9wcGlucy02MDA=`,
                                  "--framer-font-family": `"Poppins", "Poppins Placeholder", sans-serif`,
                                  "--framer-font-weight": `600`,
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-ecafc256-809a-4d45-a91d-a2dbb56ff89e, rgb(221, 255, 0)))`,
                                },
                                children: `Button`,
                              }),
                            }),
                          },
                          nRbUCi1az: {
                            children: a(u, {
                              children: a(m.p, {
                                style: {
                                  "--font-selector": `R0Y7UG9wcGlucy02MDA=`,
                                  "--framer-font-family": `"Poppins", "Poppins Placeholder", sans-serif`,
                                  "--framer-font-size": `14px`,
                                  "--framer-font-weight": `600`,
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--variable-reference-f1WYOwPZm-auCq3aHNm))`,
                                },
                                children: `Button`,
                              }),
                            }),
                          },
                        },
                        x,
                        E
                      ),
                    }),
                  }),
                }),
              }),
            }),
          })
        );
      })),
      (le = [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-YntML.framer-5gwsvv, .framer-YntML .framer-5gwsvv { display: block; }`,
        `.framer-YntML.framer-1ai5xzg { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 16px 32px 16px 32px; position: relative; text-decoration: none; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-YntML .framer-14zhxxj { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-YntML.framer-1ai5xzg { gap: 0px; } .framer-YntML.framer-1ai5xzg > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-YntML.framer-1ai5xzg > :first-child { margin-top: 0px; } .framer-YntML.framer-1ai5xzg > :last-child { margin-bottom: 0px; } }`,
        `.framer-YntML.framer-v-1en7qb5.framer-1ai5xzg { padding: 12px 32px 12px 32px; }`,
        `.framer-YntML[data-border="true"]::after, .framer-YntML [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }`,
      ]),
      (W = M(ce, le, `framer-YntML`)),
      (W.displayName = `Elements/ Button`),
      (W.defaultProps = { height: 51, width: 118 }),
      S(W, {
        variant: {
          options: [`KEFLVbD3X`, `CnFfN8KTT`, `nRbUCi1az`],
          optionTitles: [`PrimaryButton`, `SecondaryButton`, `TertiaryButton`],
          title: `Variant`,
          type: g.Enum,
        },
        FOxcLjTdx: {
          defaultValue: `Button`,
          displayTextArea: !1,
          title: `Title`,
          type: g.String,
        },
        B0eTuUnrS: { title: `Link`, type: g.Link },
        QIrXjwYb4: { title: `Tap`, type: g.EventHandler },
      }),
      x(
        W,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                family: `Poppins`,
                source: `google`,
                style: `normal`,
                url: `https://fonts.gstatic.com/s/poppins/v21/pxiByp8kv8JHgFVrLEj6V15vFP-KUEg.woff2`,
                weight: `600`,
              },
            ],
          },
        ],
        { supportsExplicitInterCodegen: !0 }
      );
  }),
  G,
  de,
  fe,
  pe = e(() => {
    D(),
      w.loadFonts([`GF;Manrope-800`]),
      (G = [
        {
          explicitInter: !0,
          fonts: [
            {
              family: `Manrope`,
              source: `google`,
              style: `normal`,
              url: `https://fonts.gstatic.com/s/manrope/v15/xn7_YHE41ni1AdIRqAuZuw1Bx9mbZk59E-_A87jxeN7B.woff2`,
              weight: `800`,
            },
          ],
        },
      ]),
      (de = [
        `.framer-1bsO4 .framer-styles-preset-1qig5z1:not(.rich-text-wrapper), .framer-1bsO4 .framer-styles-preset-1qig5z1.rich-text-wrapper h5 { --framer-font-family: "Manrope", "Manrope Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 14px; --framer-font-style: normal; --framer-font-weight: 800; --framer-letter-spacing: 1px; --framer-line-height: 1.5em; --framer-paragraph-spacing: 40px; --framer-text-alignment: start; --framer-text-color: var(--token-8b1efac3-c141-454f-b454-7db258075998, #ffffff); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: uppercase; }`,
      ]),
      (fe = `framer-1bsO4`);
  }),
  me,
  he,
  ge,
  _e,
  ve,
  ye,
  be,
  xe,
  Se,
  K,
  Ce = e(() => {
    r(),
      D(),
      p(),
      i(),
      pe(),
      (me = `framer-hC4ke`),
      (he = { OJ0itrXNR: `framer-v-1ouaxjq` }),
      (ge = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (_e = ({ value: e, children: t }) => {
        let n = s(f),
          r = e ?? n.transition,
          i = c(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return a(f.Provider, { value: i, children: t });
      }),
      (ve = m.create(u)),
      (ye = ({ height: e, id: t, width: n, ...r }) => ({ ...r })),
      (be = (e, t) =>
        e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`)),
      (xe = t(function (e, t) {
        let r = o(null),
          i = t ?? r,
          s = n(),
          { activeLocale: c, setLocale: l } = k();
        O();
        let { style: f, className: p, layoutId: h, variant: g, ...v } = ye(e),
          {
            baseVariant: b,
            classNames: x,
            clearLoadingGesture: S,
            gestureHandlers: w,
            gestureVariant: T,
            isLoading: E,
            setGestureState: D,
            setVariant: ee,
            variants: A,
          } = j({
            defaultVariant: `OJ0itrXNR`,
            ref: i,
            variant: g,
            variantClassNames: he,
          }),
          M = be(e, A),
          N = [fe],
          P = C(me, ...N);
        return a(d, {
          id: h ?? s,
          children: a(ve, {
            animate: A,
            initial: !1,
            children: a(_e, {
              value: ge,
              children: a(_, {
                href: { webPageId: `dqkkaMW66` },
                motionChild: !0,
                nodeId: `OJ0itrXNR`,
                scopeId: `IZPeE10DN`,
                children: a(m.a, {
                  ...v,
                  ...w,
                  className: `${C(P, `framer-1ouaxjq`, p, x)} framer-bv1r46`,
                  "data-framer-name": `Logo`,
                  layoutDependency: M,
                  layoutId: `OJ0itrXNR`,
                  ref: i,
                  style: { ...f },
                  children: a(y, {
                    __fromCanvasComponent: !0,
                    children: a(u, {
                      children: a(m.h5, {
                        className: `framer-styles-preset-1qig5z1`,
                        "data-styles-preset": `y5ezp3Fqp`,
                        children: `SANOOB P`,
                      }),
                    }),
                    className: `framer-jz6h2f`,
                    fonts: [`Inter`],
                    layoutDependency: M,
                    layoutId: `rjD_ZneqN`,
                    style: {
                      "--framer-link-text-color": `rgb(0, 153, 255)`,
                      "--framer-link-text-decoration": `underline`,
                    },
                    verticalAlignment: `top`,
                    withExternalLayout: !0,
                  }),
                }),
              }),
            }),
          }),
        });
      })),
      (Se = [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-hC4ke.framer-bv1r46, .framer-hC4ke .framer-bv1r46 { display: block; }`,
        `.framer-hC4ke.framer-1ouaxjq { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; text-decoration: none; width: min-content; }`,
        `.framer-hC4ke .framer-jz6h2f { flex: none; height: auto; position: relative; white-space: pre; width: auto; z-index: 1; }`,
        ...de,
      ]),
      (K = M(xe, Se, `framer-hC4ke`)),
      (K.displayName = `Elements/ Logo`),
      (K.defaultProps = { height: 21, width: 87 }),
      x(
        K,
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
          ...E(G),
        ],
        { supportsExplicitInterCodegen: !0 }
      );
  }),
  we,
  Te,
  Ee,
  De = e(() => {
    D(),
      w.loadFonts([
        `FS;Poppins-regular`,
        `FS;Poppins-semibold`,
        `FS;Poppins-bold italic`,
        `FS;Poppins-italic`,
      ]),
      (we = [
        {
          explicitInter: !0,
          fonts: [
            {
              family: `Poppins`,
              source: `fontshare`,
              style: `normal`,
              url: `https://framerusercontent.com/third-party-assets/fontshare/wf/NC2MP33RO4WQTSTEEAWBJLAEXNCNEQVF/7F4U3COKLHQH4WUH3AXPC7N4UELEWJQN/JMWNCAGBH3TLANIVQPVABVAVNV5QERTH.woff2`,
              weight: `400`,
            },
            {
              family: `Poppins`,
              source: `fontshare`,
              style: `normal`,
              url: `https://framerusercontent.com/third-party-assets/fontshare/wf/E6J4GS76KHNRRUWODFCFOX2JRKNRSFVY/3GYVT5S4AH7VMPASDDKOTIPV6P3WJXGI/24R4YOH3G2SFDSTCNHOVGYEX3DMRC3CE.woff2`,
              weight: `600`,
            },
            {
              family: `Poppins`,
              source: `fontshare`,
              style: `italic`,
              url: `https://framerusercontent.com/third-party-assets/fontshare/wf/JQL34MORONR7D7BXOVTX3KBGJGEJQ5BJ/CKUZVY5SFANCFAT7FS3MP6ZL4BMEWCJE/NOLRWF3JBJ434MILPG5RB6R2B4HGRSZB.woff2`,
              weight: `700`,
            },
            {
              family: `Poppins`,
              source: `fontshare`,
              style: `italic`,
              url: `https://framerusercontent.com/third-party-assets/fontshare/wf/7LLTLAW3NRWOADG4II2JGKZC6OSEMBQC/EYFXWX77PEMPU645EAWOTG22E375GULW/SSNNTU67MMJH4CSWT443B4KJ7OB4WFHF.woff2`,
              weight: `400`,
            },
          ],
        },
      ]),
      (Te = [
        `.framer-7N5g7 .framer-styles-preset-1hj8z0a:not(.rich-text-wrapper), .framer-7N5g7 .framer-styles-preset-1hj8z0a.rich-text-wrapper p { --framer-font-family: "Poppins", "Poppins Placeholder", sans-serif; --framer-font-family-bold: "Poppins", "Poppins Placeholder", sans-serif; --framer-font-family-bold-italic: "Poppins", "Poppins Placeholder", sans-serif; --framer-font-family-italic: "Poppins", "Poppins Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-weight: 400; --framer-font-weight-bold: 600; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: 0em; --framer-line-height: 1.3em; --framer-paragraph-spacing: 24px; --framer-text-alignment: start; --framer-text-color: var(--token-fe8040e6-3344-44c0-bab9-226d490ba5f3, #ffffff); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
      ]),
      (Ee = `framer-7N5g7`);
  });
function q({ blur: e, borderRadius: t, direction: n, transition: r }) {
  let i = c(
    () => [
      {
        blur: `${e / 2 / 2 / 2 / 2 / 2 / 2 / 2}px`,
        gradient: `rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 12.5%, rgba(0, 0, 0, 1) 25%, rgba(0, 0, 0, 0) 37.5%`,
      },
      {
        blur: `${e / 2 / 2 / 2 / 2 / 2 / 2}px`,
        gradient: `rgba(0, 0, 0, 0) 12.5%, rgba(0, 0, 0, 1) 25%, rgba(0, 0, 0, 1) 37.5%, rgba(0, 0, 0, 0) 50%`,
      },
      {
        blur: `${e / 2 / 2 / 2 / 2 / 2}px`,
        gradient: `rgba(0, 0, 0, 0) 25%, rgba(0, 0, 0, 1) 37.5%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0) 62.5%`,
      },
      {
        blur: `${e / 2 / 2 / 2 / 2}px`,
        gradient: `rgba(0, 0, 0, 0) 37.5%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 1) 62.5%, rgba(0, 0, 0, 0) 75%`,
      },
      {
        blur: `${e / 2 / 2 / 2}px`,
        gradient: `rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 1) 62.5%, rgba(0, 0, 0, 1) 75%, rgba(0, 0, 0, 0) 87.5%`,
      },
      {
        blur: `${e / 2 / 2}px`,
        gradient: `rgba(0, 0, 0, 0) 62.5%, rgba(0, 0, 0, 1) 75%, rgba(0, 0, 0, 1) 87.5%, rgba(0, 0, 0, 0) 100%`,
      },
      {
        blur: `${e / 2}px`,
        gradient: `rgba(0, 0, 0, 0) 75%, rgba(0, 0, 0, 1) 87.5%, rgba(0, 0, 0, 1) 100%`,
      },
      {
        blur: `${e}px`,
        gradient: `rgba(0, 0, 0, 0) 87.5%, rgba(0, 0, 0, 1) 100%`,
      },
    ],
    [e]
  );
  return a(`div`, {
    style: { position: `absolute`, inset: 0, overflow: `hidden` },
    children: i.map((e, i) =>
      a(
        m.div,
        {
          transition: r,
          initial: { backdropFilter: `blur(${e.blur})` },
          animate: { backdropFilter: `blur(${e.blur})` },
          style: {
            opacity: 1,
            position: `absolute`,
            inset: 0,
            zIndex: i + 1,
            maskImage: `linear-gradient(${n}, ${e.gradient})`,
            WebkitMaskImage: `linear-gradient(${n}, ${e.gradient})`,
            borderRadius: t,
            pointerEvents: `none`,
          },
        },
        i
      )
    ),
  });
}
var Oe = e(() => {
  r(),
    i(),
    p(),
    D(),
    (q.defaultProps = {
      blur: 10,
      borderRadius: `0px`,
      direction: `toBottom`,
      transition: { duration: 0.3 },
    }),
    S(q, {
      blur: {
        title: `Blur`,
        type: g.Number,
        defaultValue: 10,
        min: 0,
        max: 100,
        step: 1,
        description: `Large blur values (10<) can impact performance.`,
      },
      borderRadius: {
        title: `Radius`,
        type: g.BorderRadius,
        defaultValue: `0px`,
        description: `Blur Gradient component's parent frame can't have border radius (it will break the component). If you need corner radius, apply it directly to the Blur Gradient component here.`,
      },
      direction: {
        title: `Direction`,
        type: g.SegmentedEnum,
        options: [`to bottom`, `to top`, `to left`, `to right`],
        optionTitles: [`↓`, `↑`, `←`, `→`],
        defaultValue: `to bottom`,
      },
      transition: {
        type: g.Transition,
        defaultValue: { duration: 0.3 },
        title: `Transition`,
        description: `Control how the blur animates when used on hover states or any othe interaction.

More components at [Framer University](https://frameruni.link/cc).`,
      },
    }),
    (q.displayName = `Blur Gradient`);
});
function ke(e, ...t) {
  let n = {};
  return t?.forEach((t) => t && Object.assign(n, e[t])), n;
}
var Ae,
  je,
  Me,
  Ne,
  Pe,
  Fe,
  Ie,
  Le,
  Re,
  ze,
  Be,
  J,
  Ve = e(() => {
    r(),
      D(),
      p(),
      i(),
      z(),
      (Ae = [`MKQWM9WYD`, `jKJMxypkM`]),
      (je = `framer-yz67K`),
      (Me = { jKJMxypkM: `framer-v-1rsjm9r`, MKQWM9WYD: `framer-v-1gu1m91` }),
      (Ne = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: `spring` }),
      (Pe = ({ value: e, children: t }) => {
        let n = s(f),
          r = e ?? n.transition,
          i = c(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return a(f.Provider, { value: i, children: t });
      }),
      (Fe = m(u)),
      (Ie = { Active: `jKJMxypkM`, Idle: `MKQWM9WYD` }),
      (Le = ({
        click: e,
        height: t,
        id: n,
        link: r,
        section: i,
        width: a,
        ...o
      }) => {
        var s, c, l;
        return {
          ...o,
          aqR4frobj: (s = i ?? o.aqR4frobj) ?? `Work`,
          dWfIQ61kM: r ?? o.dWfIQ61kM,
          LjYHBIhA6: e ?? o.LjYHBIhA6,
          variant: (l = (c = Ie[o.variant]) ?? o.variant) ?? `MKQWM9WYD`,
        };
      }),
      (Re = (e, t) =>
        e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`)),
      (ze = t(function (e, t) {
        let { activeLocale: r, setLocale: i } = k(),
          {
            style: s,
            className: c,
            layoutId: f,
            variant: p,
            aqR4frobj: h,
            dWfIQ61kM: g,
            LjYHBIhA6: v,
            ...b
          } = Le(e),
          {
            baseVariant: x,
            classNames: S,
            clearLoadingGesture: w,
            gestureHandlers: T,
            gestureVariant: E,
            isLoading: D,
            setGestureState: A,
            setVariant: M,
            variants: N,
          } = j({
            cycleOrder: Ae,
            defaultVariant: `MKQWM9WYD`,
            variant: p,
            variantClassNames: Me,
          }),
          P = Re(e, N),
          { activeVariantCallback: F, delay: I } = ee(x),
          L = F(async (...e) => {
            if ((A({ isPressed: !1 }), v)) {
              let t = await v(...e);
              if (t === !1) return !1;
            }
          }),
          z = F(async (...e) => {
            A({ isHovered: !0 }), M(`jKJMxypkM`);
          }),
          B = F(async (...e) => {
            A({ isHovered: !1 }), M(`MKQWM9WYD`);
          }),
          V = o(null),
          H = n(),
          U = [R];
        return (
          O(),
          a(d, {
            id: f ?? H,
            children: a(Fe, {
              animate: N,
              initial: !1,
              children: a(Pe, {
                value: Ne,
                children: a(_, {
                  href: g,
                  openInNewTab: !1,
                  smoothScroll: !0,
                  children: a(m.a, {
                    ...b,
                    ...T,
                    className: `${C(
                      je,
                      ...U,
                      `framer-1gu1m91`,
                      c,
                      S
                    )} framer-145pdkt`,
                    "data-framer-name": `Idle`,
                    "data-highlight": !0,
                    layoutDependency: P,
                    layoutId: `MKQWM9WYD`,
                    onMouseEnter: z,
                    onTap: L,
                    ref: t ?? V,
                    style: { ...s },
                    ...ke(
                      {
                        jKJMxypkM: {
                          "data-framer-name": `Active`,
                          onMouseLeave: B,
                        },
                      },
                      x,
                      E
                    ),
                    children: l(m.div, {
                      className: `framer-9gdmxw`,
                      layoutDependency: P,
                      layoutId: `ypDvyyilf`,
                      children: [
                        a(m.div, {
                          className: `framer-c8lr92`,
                          layoutDependency: P,
                          layoutId: `nOLlZ5TWz`,
                          style: {
                            backgroundColor: `rgb(255, 255, 255)`,
                            opacity: 0,
                          },
                          variants: {
                            jKJMxypkM: {
                              backgroundColor: `var(--token-ecafc256-809a-4d45-a91d-a2dbb56ff89e, rgb(221, 255, 0))`,
                              opacity: 1,
                            },
                          },
                        }),
                        a(y, {
                          __fromCanvasComponent: !0,
                          children: a(u, {
                            children: a(m.p, {
                              className: `framer-styles-preset-1hj8z0a`,
                              "data-styles-preset": `UByHkDadJ`,
                              children: `Work`,
                            }),
                          }),
                          className: `framer-aey4eg`,
                          fonts: [`Inter`],
                          layoutDependency: P,
                          layoutId: `Xm35eT04M`,
                          style: {
                            "--framer-link-text-color": `rgb(0, 153, 255)`,
                            "--framer-link-text-decoration": `underline`,
                          },
                          text: h,
                          variants: {
                            jKJMxypkM: {
                              "--extracted-r6o4lv": `var(--token-ecafc256-809a-4d45-a91d-a2dbb56ff89e, rgb(221, 255, 0))`,
                            },
                          },
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                          ...ke(
                            {
                              jKJMxypkM: {
                                children: a(u, {
                                  children: a(m.p, {
                                    className: `framer-styles-preset-1hj8z0a`,
                                    "data-styles-preset": `UByHkDadJ`,
                                    style: {
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-ecafc256-809a-4d45-a91d-a2dbb56ff89e, rgb(221, 255, 0)))`,
                                    },
                                    children: `Work`,
                                  }),
                                }),
                              },
                            },
                            x,
                            E
                          ),
                        }),
                      ],
                    }),
                  }),
                }),
              }),
            }),
          })
        );
      })),
      (Be = [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-yz67K.framer-145pdkt, .framer-yz67K .framer-145pdkt { display: block; }`,
        `.framer-yz67K.framer-1gu1m91 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; text-decoration: none; width: min-content; }`,
        `.framer-yz67K .framer-9gdmxw { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
        `.framer-yz67K .framer-c8lr92 { flex: none; height: 2px; overflow: hidden; position: relative; width: 1px; }`,
        `.framer-yz67K .framer-aey4eg { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-yz67K.framer-1gu1m91, .framer-yz67K .framer-9gdmxw { gap: 0px; } .framer-yz67K.framer-1gu1m91 > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-yz67K.framer-1gu1m91 > :first-child, .framer-yz67K .framer-9gdmxw > :first-child { margin-left: 0px; } .framer-yz67K.framer-1gu1m91 > :last-child, .framer-yz67K .framer-9gdmxw > :last-child { margin-right: 0px; } .framer-yz67K .framer-9gdmxw > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } }`,
        `.framer-yz67K.framer-v-1rsjm9r .framer-9gdmxw { gap: 8px; }`,
        `.framer-yz67K.framer-v-1rsjm9r .framer-c8lr92 { width: 8px; }`,
        `@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-yz67K.framer-v-1rsjm9r .framer-9gdmxw { gap: 0px; } .framer-yz67K.framer-v-1rsjm9r .framer-9gdmxw > * { margin: 0px; margin-left: calc(8px / 2); margin-right: calc(8px / 2); } .framer-yz67K.framer-v-1rsjm9r .framer-9gdmxw > :first-child { margin-left: 0px; } .framer-yz67K.framer-v-1rsjm9r .framer-9gdmxw > :last-child { margin-right: 0px; } }`,
        ...L,
      ]),
      (J = M(ze, Be, `framer-yz67K`)),
      (J.displayName = `Elements/ Navigation Item`),
      (J.defaultProps = { height: 21, width: 41 }),
      S(J, {
        variant: {
          options: [`MKQWM9WYD`, `jKJMxypkM`],
          optionTitles: [`Idle`, `Active`],
          title: `Variant`,
          type: g.Enum,
        },
        aqR4frobj: {
          defaultValue: `Work`,
          displayTextArea: !1,
          title: `Section`,
          type: g.String,
        },
        dWfIQ61kM: { title: `Link`, type: g.Link },
        LjYHBIhA6: { title: `Click`, type: g.EventHandler },
      }),
      x(
        J,
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
          ...E(I),
        ],
        { supportsExplicitInterCodegen: !0 }
      );
  });
function Y(e, ...t) {
  let n = {};
  return t?.forEach((t) => t && Object.assign(n, e[t])), n;
}
var He,
  Ue,
  We,
  X,
  Ge,
  Ke,
  qe,
  Je,
  Ye,
  Xe,
  Ze,
  Qe,
  $e,
  et,
  tt,
  Z,
  nt = e(() => {
    r(),
      D(),
      p(),
      i(),
      Oe(),
      Ve(),
      Ce(),
      (He = T(q)),
      (Ue = T(K)),
      (We = T(J)),
      (X = F(J)),
      (Ge = [`eNoy_fvLa`, `F3MZPXXKZ`]),
      (Ke = `framer-TdxfX`),
      (qe = { eNoy_fvLa: `framer-v-1sioqpm`, F3MZPXXKZ: `framer-v-1kkblwg` }),
      (Je = { damping: 40, delay: 0, mass: 1, stiffness: 400, type: `spring` }),
      (Ye = ({ value: e, children: t }) => {
        let n = s(f),
          r = e ?? n.transition,
          i = c(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return a(f.Provider, { value: i, children: t });
      }),
      (Xe = m.create(u)),
      (Ze = { Closed: `eNoy_fvLa`, Open: `F3MZPXXKZ` }),
      (Qe = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: Ze[r.variant] ?? r.variant ?? `eNoy_fvLa`,
      })),
      ($e = (e, t) =>
        e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`)),
      (et = t(function (e, t) {
        let r = o(null),
          i = t ?? r,
          s = n(),
          { activeLocale: c, setLocale: u } = k(),
          f = O(),
          { style: p, className: g, layoutId: _, variant: y, ...x } = Qe(e),
          {
            baseVariant: S,
            classNames: w,
            clearLoadingGesture: T,
            gestureHandlers: E,
            gestureVariant: D,
            isLoading: M,
            setGestureState: N,
            setVariant: P,
            variants: F,
          } = j({
            cycleOrder: Ge,
            defaultVariant: `eNoy_fvLa`,
            ref: i,
            variant: y,
            variantClassNames: qe,
          }),
          I = $e(e, F),
          { activeVariantCallback: L, delay: R } = ee(S),
          z = L(async (...e) => {
            P(`F3MZPXXKZ`);
          }),
          B = L(async (...e) => {
            P(`eNoy_fvLa`);
          }),
          V = L(async (...e) => {
            await R(() => P(`eNoy_fvLa`), 100);
          }),
          H = [],
          U = C(Ke, ...H),
          te = () => S !== `F3MZPXXKZ`,
          ne = () => S === `F3MZPXXKZ`;
        return (
          A(),
          a(d, {
            id: _ ?? s,
            children: a(Xe, {
              animate: F,
              initial: !1,
              children: a(Ye, {
                value: Je,
                children: l(m.nav, {
                  ...x,
                  ...E,
                  className: C(U, `framer-1sioqpm`, g, w),
                  "data-framer-name": `Closed`,
                  layoutDependency: I,
                  layoutId: `eNoy_fvLa`,
                  ref: i,
                  style: { backgroundColor: `rgba(10, 10, 10, 0)`, ...p },
                  variants: {
                    F3MZPXXKZ: { backgroundColor: `rgb(10, 10, 10)` },
                  },
                  ...Y({ F3MZPXXKZ: { "data-framer-name": `Open` } }, S, D),
                  children: [
                    a(m.div, {
                      className: `framer-1ldx5te`,
                      "data-framer-name": `BackgroundGradient`,
                      layoutDependency: I,
                      layoutId: `ntNIdT1W4`,
                      style: {
                        background: `linear-gradient(180deg, rgba(11, 11, 11, 0.75) 0%, rgba(0, 0, 0, 0) 100%)`,
                      },
                    }),
                    te() &&
                      a(h, {
                        children: a(b, {
                          className: `framer-1ns2lzf-container`,
                          isAuthoredByUser: !0,
                          isModuleExternal: !0,
                          layoutDependency: I,
                          layoutId: `J85Ulg762-container`,
                          nodeId: `J85Ulg762`,
                          rendersWithMotion: !0,
                          scopeId: `kJYLTxD7F`,
                          children: a(q, {
                            blur: 5,
                            borderRadius: `0px`,
                            direction: `to bottom`,
                            height: `100%`,
                            id: `J85Ulg762`,
                            layoutId: `J85Ulg762`,
                            style: { height: `100%`, width: `100%` },
                            transition: {
                              delay: 0,
                              duration: 0.3,
                              ease: [0.44, 0, 0.56, 1],
                              type: `tween`,
                            },
                            width: `100%`,
                          }),
                        }),
                      }),
                    a(h, {
                      height: 21,
                      y: (f?.y || 0) + 30,
                      children: a(b, {
                        className: `framer-j9dnuy-container`,
                        layoutDependency: I,
                        layoutId: `d9EY30P9m-container`,
                        nodeId: `d9EY30P9m`,
                        rendersWithMotion: !0,
                        scopeId: `kJYLTxD7F`,
                        children: a(K, {
                          height: `100%`,
                          id: `d9EY30P9m`,
                          layoutId: `d9EY30P9m`,
                          width: `100%`,
                        }),
                      }),
                    }),
                    l(m.div, {
                      className: `framer-u42ilv`,
                      "data-framer-name": `Hamburger`,
                      "data-highlight": !0,
                      layoutDependency: I,
                      layoutId: `RU29ynHB8`,
                      onTap: z,
                      ...Y({ F3MZPXXKZ: { onTap: B } }, S, D),
                      children: [
                        a(m.div, {
                          className: `framer-1r23f32`,
                          layoutDependency: I,
                          layoutId: `ksJQVmmPx`,
                          style: {
                            backgroundColor: `var(--token-fe8040e6-3344-44c0-bab9-226d490ba5f3, rgb(255, 255, 255))`,
                            rotate: 0,
                          },
                          variants: { F3MZPXXKZ: { rotate: -45 } },
                        }),
                        a(m.div, {
                          className: `framer-drzkpx`,
                          layoutDependency: I,
                          layoutId: `jLAW73OqS`,
                          style: {
                            backgroundColor: `var(--token-fe8040e6-3344-44c0-bab9-226d490ba5f3, rgb(255, 255, 255))`,
                            rotate: 0,
                          },
                          variants: { F3MZPXXKZ: { rotate: 42 } },
                        }),
                      ],
                    }),
                    ne() &&
                      l(m.div, {
                        className: `framer-1kn5j4t`,
                        "data-framer-name": `NavigationBar`,
                        layoutDependency: I,
                        layoutId: `r7QhjgDqM`,
                        children: [
                          a(v, {
                            links: [
                              {
                                href: {
                                  hash: `:nTBfj6C59`,
                                  webPageId: `dqkkaMW66`,
                                },
                                implicitPathVariables: void 0,
                              },
                              {
                                href: {
                                  hash: `:nTBfj6C59`,
                                  webPageId: `dqkkaMW66`,
                                },
                                implicitPathVariables: void 0,
                              },
                            ],
                            children: (e) =>
                              a(h, {
                                height: 21,
                                ...Y(
                                  {
                                    F3MZPXXKZ: { y: (f?.y || 0) + 91 + 0 + 0 },
                                  },
                                  S,
                                  D
                                ),
                                children: a(b, {
                                  className: `framer-n6wd88-container`,
                                  layoutDependency: I,
                                  layoutId: `LHqTmxrpG-container`,
                                  nodeId: `LHqTmxrpG`,
                                  rendersWithMotion: !0,
                                  scopeId: `kJYLTxD7F`,
                                  children: a(X, {
                                    __framer__animateOnce: !1,
                                    __framer__threshold: 0.5,
                                    __framer__variantAppearEffectEnabled: !0,
                                    aqR4frobj: `Intro`,
                                    dWfIQ61kM: e[0],
                                    height: `100%`,
                                    id: `LHqTmxrpG`,
                                    layoutId: `LHqTmxrpG`,
                                    LjYHBIhA6: V,
                                    variant: `MKQWM9WYD`,
                                    width: `100%`,
                                    ...Y(
                                      { F3MZPXXKZ: { dWfIQ61kM: e[1] } },
                                      S,
                                      D
                                    ),
                                  }),
                                }),
                              }),
                          }),
                          a(v, {
                            links: [
                              {
                                href: {
                                  hash: `:TOkUr23gG`,
                                  webPageId: `dqkkaMW66`,
                                },
                                implicitPathVariables: void 0,
                              },
                              {
                                href: {
                                  hash: `:TOkUr23gG`,
                                  webPageId: `dqkkaMW66`,
                                },
                                implicitPathVariables: void 0,
                              },
                            ],
                            children: (e) =>
                              a(h, {
                                height: 21,
                                ...Y(
                                  {
                                    F3MZPXXKZ: { y: (f?.y || 0) + 91 + 0 + 45 },
                                  },
                                  S,
                                  D
                                ),
                                children: a(b, {
                                  className: `framer-kpmxgq-container`,
                                  layoutDependency: I,
                                  layoutId: `VkZptueIm-container`,
                                  nodeId: `VkZptueIm`,
                                  rendersWithMotion: !0,
                                  scopeId: `kJYLTxD7F`,
                                  children: a(X, {
                                    __framer__animateOnce: !1,
                                    __framer__threshold: 0.5,
                                    __framer__variantAppearEffectEnabled: !0,
                                    aqR4frobj: `Work`,
                                    dWfIQ61kM: e[0],
                                    height: `100%`,
                                    id: `VkZptueIm`,
                                    layoutId: `VkZptueIm`,
                                    LjYHBIhA6: V,
                                    variant: `MKQWM9WYD`,
                                    width: `100%`,
                                    ...Y(
                                      { F3MZPXXKZ: { dWfIQ61kM: e[1] } },
                                      S,
                                      D
                                    ),
                                  }),
                                }),
                              }),
                          }),
                          a(v, {
                            links: [
                              {
                                href: {
                                  hash: `:Cyd4W2QVH`,
                                  webPageId: `dqkkaMW66`,
                                },
                                implicitPathVariables: void 0,
                              },
                              {
                                href: {
                                  hash: `:Cyd4W2QVH`,
                                  webPageId: `dqkkaMW66`,
                                },
                                implicitPathVariables: void 0,
                              },
                            ],
                            children: (e) =>
                              a(h, {
                                height: 21,
                                ...Y(
                                  {
                                    F3MZPXXKZ: { y: (f?.y || 0) + 91 + 0 + 90 },
                                  },
                                  S,
                                  D
                                ),
                                children: a(b, {
                                  className: `framer-f9csrj-container`,
                                  layoutDependency: I,
                                  layoutId: `bbrBNRiPX-container`,
                                  nodeId: `bbrBNRiPX`,
                                  rendersWithMotion: !0,
                                  scopeId: `kJYLTxD7F`,
                                  children: a(X, {
                                    __framer__animateOnce: !1,
                                    __framer__threshold: 0.5,
                                    __framer__variantAppearEffectEnabled: !0,
                                    aqR4frobj: `Experience`,
                                    dWfIQ61kM: e[0],
                                    height: `100%`,
                                    id: `bbrBNRiPX`,
                                    layoutId: `bbrBNRiPX`,
                                    LjYHBIhA6: V,
                                    variant: `MKQWM9WYD`,
                                    width: `100%`,
                                    ...Y(
                                      { F3MZPXXKZ: { dWfIQ61kM: e[1] } },
                                      S,
                                      D
                                    ),
                                  }),
                                }),
                              }),
                          }),
                          a(v, {
                            links: [
                              {
                                href: {
                                  hash: `:swq3kdRwG`,
                                  webPageId: `dqkkaMW66`,
                                },
                                implicitPathVariables: void 0,
                              },
                              {
                                href: {
                                  hash: `:swq3kdRwG`,
                                  webPageId: `dqkkaMW66`,
                                },
                                implicitPathVariables: void 0,
                              },
                            ],
                            children: (e) =>
                              a(h, {
                                height: 21,
                                ...Y(
                                  {
                                    F3MZPXXKZ: {
                                      y: (f?.y || 0) + 91 + 0 + 135,
                                    },
                                  },
                                  S,
                                  D
                                ),
                                children: a(b, {
                                  className: `framer-1cz6lxd-container`,
                                  layoutDependency: I,
                                  layoutId: `GjGynZ7WI-container`,
                                  nodeId: `GjGynZ7WI`,
                                  rendersWithMotion: !0,
                                  scopeId: `kJYLTxD7F`,
                                  children: a(X, {
                                    __framer__animateOnce: !1,
                                    __framer__threshold: 0.5,
                                    __framer__variantAppearEffectEnabled: !0,
                                    aqR4frobj: `Skills`,
                                    dWfIQ61kM: e[0],
                                    height: `100%`,
                                    id: `GjGynZ7WI`,
                                    layoutId: `GjGynZ7WI`,
                                    LjYHBIhA6: V,
                                    variant: `MKQWM9WYD`,
                                    width: `100%`,
                                    ...Y(
                                      { F3MZPXXKZ: { dWfIQ61kM: e[1] } },
                                      S,
                                      D
                                    ),
                                  }),
                                }),
                              }),
                          }),
                          a(v, {
                            links: [
                              {
                                href: { webPageId: `skCBjGGGU` },
                                implicitPathVariables: void 0,
                              },
                              {
                                href: { webPageId: `skCBjGGGU` },
                                implicitPathVariables: void 0,
                              },
                            ],
                            children: (e) =>
                              a(h, {
                                height: 21,
                                ...Y(
                                  {
                                    F3MZPXXKZ: {
                                      y: (f?.y || 0) + 91 + 0 + 180,
                                    },
                                  },
                                  S,
                                  D
                                ),
                                children: a(b, {
                                  className: `framer-1s3bowo-container`,
                                  layoutDependency: I,
                                  layoutId: `odTXSuwHq-container`,
                                  nodeId: `odTXSuwHq`,
                                  rendersWithMotion: !0,
                                  scopeId: `kJYLTxD7F`,
                                  children: a(X, {
                                    __framer__animateOnce: !1,
                                    __framer__threshold: 0.5,
                                    __framer__variantAppearEffectEnabled: !0,
                                    aqR4frobj: `Contact`,
                                    dWfIQ61kM: e[0],
                                    height: `100%`,
                                    id: `odTXSuwHq`,
                                    layoutId: `odTXSuwHq`,
                                    LjYHBIhA6: V,
                                    variant: `MKQWM9WYD`,
                                    width: `100%`,
                                    ...Y(
                                      { F3MZPXXKZ: { dWfIQ61kM: e[1] } },
                                      S,
                                      D
                                    ),
                                  }),
                                }),
                              }),
                          }),
                        ],
                      }),
                  ],
                }),
              }),
            }),
          })
        );
      })),
      (tt = [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-TdxfX.framer-1mu7oyt, .framer-TdxfX .framer-1mu7oyt { display: block; }`,
        `.framer-TdxfX.framer-1sioqpm { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; height: 80px; justify-content: space-between; overflow: hidden; padding: 0px 16px 0px 16px; position: relative; width: 800px; }`,
        `.framer-TdxfX .framer-1ldx5te { flex: none; height: 60px; left: 0px; overflow: hidden; position: absolute; right: 0px; top: 0px; z-index: 1; }`,
        `.framer-TdxfX .framer-1ns2lzf-container { bottom: -100px; flex: none; left: 0px; pointer-events: none; position: absolute; right: 0px; top: 0px; z-index: 0; }`,
        `.framer-TdxfX .framer-j9dnuy-container { flex: none; height: auto; left: 24px; position: absolute; top: 30px; width: auto; z-index: 2; }`,
        `.framer-TdxfX .framer-u42ilv { align-content: flex-end; align-items: flex-end; cursor: pointer; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 52px; justify-content: center; overflow: visible; padding: 0px; position: absolute; right: 24px; top: 14px; width: 52px; z-index: 2; }`,
        `.framer-TdxfX .framer-1r23f32 { flex: none; height: 2px; overflow: visible; position: relative; width: 36px; }`,
        `.framer-TdxfX .framer-drzkpx { flex: none; height: 2px; overflow: visible; position: relative; width: 25px; }`,
        `.framer-TdxfX .framer-1kn5j4t { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; left: 24px; overflow: hidden; padding: 0px; position: absolute; top: 91px; width: 170px; z-index: 1; }`,
        `.framer-TdxfX .framer-n6wd88-container, .framer-TdxfX .framer-kpmxgq-container, .framer-TdxfX .framer-f9csrj-container, .framer-TdxfX .framer-1cz6lxd-container, .framer-TdxfX .framer-1s3bowo-container { flex: none; height: auto; position: relative; width: auto; }`,
        `.framer-TdxfX.framer-v-1kkblwg.framer-1sioqpm { height: 1466px; }`,
        `.framer-TdxfX.framer-v-1kkblwg .framer-u42ilv { align-content: center; align-items: center; }`,
        `.framer-TdxfX.framer-v-1kkblwg .framer-1r23f32, .framer-TdxfX.framer-v-1kkblwg .framer-drzkpx { left: calc(50.00000000000002% - 28px / 2); position: absolute; top: calc(50.00000000000002% - 2px / 2); width: 28px; z-index: 1; }`,
      ]),
      (Z = M(et, tt, `framer-TdxfX`)),
      (Z.displayName = `Page elements/ Mobile Navigation`),
      (Z.defaultProps = { height: 80, width: 800 }),
      S(Z, {
        variant: {
          options: [`eNoy_fvLa`, `F3MZPXXKZ`],
          optionTitles: [`Closed`, `Open`],
          title: `Variant`,
          type: g.Enum,
        },
      }),
      x(Z, [{ explicitInter: !0, fonts: [] }, ...He, ...Ue, ...We], {
        supportsExplicitInterCodegen: !0,
      });
  }),
  rt,
  it,
  at,
  ot = e(() => {
    D(),
      w.loadFonts([]),
      (rt = [{ explicitInter: !0, fonts: [] }]),
      (it = [
        `.framer-ido0t .framer-styles-preset-x319l3:not(.rich-text-wrapper), .framer-ido0t .framer-styles-preset-x319l3.rich-text-wrapper a { --framer-link-current-text-color: var(--token-fe8040e6-3344-44c0-bab9-226d490ba5f3, #ffffff) /* {"name":"TextPrimary"} */; --framer-link-current-text-decoration: none; --framer-link-hover-text-color: var(--token-ecafc256-809a-4d45-a91d-a2dbb56ff89e, #ddff00) /* {"name":"HighlightColor"} */; --framer-link-hover-text-decoration: none; --framer-link-text-color: var(--token-fe8040e6-3344-44c0-bab9-226d490ba5f3, #000000); --framer-link-text-decoration: none; }`,
      ]),
      (at = `framer-ido0t`);
  }),
  st,
  ct,
  lt,
  ut = e(() => {
    D(),
      w.loadFonts([
        `FS;Poppins-regular`,
        `FS;Poppins-bold`,
        `FS;Poppins-bold italic`,
        `FS;Poppins-italic`,
      ]),
      (st = [
        {
          explicitInter: !0,
          fonts: [
            {
              family: `Poppins`,
              source: `fontshare`,
              style: `normal`,
              url: `https://framerusercontent.com/third-party-assets/fontshare/wf/NC2MP33RO4WQTSTEEAWBJLAEXNCNEQVF/7F4U3COKLHQH4WUH3AXPC7N4UELEWJQN/JMWNCAGBH3TLANIVQPVABVAVNV5QERTH.woff2`,
              weight: `400`,
            },
            {
              family: `Poppins`,
              source: `fontshare`,
              style: `normal`,
              url: `https://framerusercontent.com/third-party-assets/fontshare/wf/EOHGWBZYYKO6R4PWP4S2B3FFWHHBEZN6/UWQLMF4AFWLXCJQCFV3WRVYC77KZXPRB/FYG6OCH7XOLUUSZTIZE65ATBZWF623O4.woff2`,
              weight: `700`,
            },
            {
              family: `Poppins`,
              source: `fontshare`,
              style: `italic`,
              url: `https://framerusercontent.com/third-party-assets/fontshare/wf/JQL34MORONR7D7BXOVTX3KBGJGEJQ5BJ/CKUZVY5SFANCFAT7FS3MP6ZL4BMEWCJE/NOLRWF3JBJ434MILPG5RB6R2B4HGRSZB.woff2`,
              weight: `700`,
            },
            {
              family: `Poppins`,
              source: `fontshare`,
              style: `italic`,
              url: `https://framerusercontent.com/third-party-assets/fontshare/wf/7LLTLAW3NRWOADG4II2JGKZC6OSEMBQC/EYFXWX77PEMPU645EAWOTG22E375GULW/SSNNTU67MMJH4CSWT443B4KJ7OB4WFHF.woff2`,
              weight: `400`,
            },
          ],
        },
      ]),
      (ct = [
        `.framer-rAYV4 .framer-styles-preset-ugul1a:not(.rich-text-wrapper), .framer-rAYV4 .framer-styles-preset-ugul1a.rich-text-wrapper h2 { --framer-font-family: "Poppins", "Poppins Placeholder", sans-serif; --framer-font-family-bold: "Poppins", "Poppins Placeholder", sans-serif; --framer-font-family-bold-italic: "Poppins", "Poppins Placeholder", sans-serif; --framer-font-family-italic: "Poppins", "Poppins Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 42px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: 0em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 40px; --framer-text-alignment: start; --framer-text-color: var(--token-fe8040e6-3344-44c0-bab9-226d490ba5f3, #000000); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
        `@media (max-width: 1199px) and (min-width: 810px) { .framer-rAYV4 .framer-styles-preset-ugul1a:not(.rich-text-wrapper), .framer-rAYV4 .framer-styles-preset-ugul1a.rich-text-wrapper h2 { --framer-font-family: "Poppins", "Poppins Placeholder", sans-serif; --framer-font-family-bold: "Poppins", "Poppins Placeholder", sans-serif; --framer-font-family-bold-italic: "Poppins", "Poppins Placeholder", sans-serif; --framer-font-family-italic: "Poppins", "Poppins Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 42px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: 0em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 40px; --framer-text-alignment: start; --framer-text-color: var(--token-fe8040e6-3344-44c0-bab9-226d490ba5f3, #000000); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
        `@media (max-width: 809px) and (min-width: 0px) { .framer-rAYV4 .framer-styles-preset-ugul1a:not(.rich-text-wrapper), .framer-rAYV4 .framer-styles-preset-ugul1a.rich-text-wrapper h2 { --framer-font-family: "Poppins", "Poppins Placeholder", sans-serif; --framer-font-family-bold: "Poppins", "Poppins Placeholder", sans-serif; --framer-font-family-bold-italic: "Poppins", "Poppins Placeholder", sans-serif; --framer-font-family-italic: "Poppins", "Poppins Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 32px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: 0em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 40px; --framer-text-alignment: start; --framer-text-color: var(--token-fe8040e6-3344-44c0-bab9-226d490ba5f3, #000000); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
      ]),
      (lt = `framer-rAYV4`);
  });
function Q(e, ...t) {
  let n = {};
  return t?.forEach((t) => t && Object.assign(n, e[t])), n;
}
var dt,
  ft,
  pt,
  mt,
  ht,
  gt,
  _t,
  vt,
  yt,
  bt,
  xt,
  St,
  Ct,
  wt,
  Tt,
  $,
  Et = e(() => {
    r(),
      D(),
      p(),
      i(),
      ot(),
      ut(),
      De(),
      pe(),
      (dt = P(N(y))),
      (ft = [`JIiBvRrjg`, `cylK6kTmU`, `ZIvMPij1s`]),
      (pt = `framer-w6GyN`),
      (mt = {
        cylK6kTmU: `framer-v-2rxcdl`,
        JIiBvRrjg: `framer-v-18xnbdo`,
        ZIvMPij1s: `framer-v-557o4f`,
      }),
      (ht = { damping: 80, delay: 0, mass: 1, stiffness: 400, type: `spring` }),
      (gt = {
        damping: 40,
        delay: 0.1,
        mass: 1,
        stiffness: 150,
        type: `spring`,
      }),
      (_t = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transformPerspective: 1200,
        transition: gt,
        x: 0,
        y: 0,
      }),
      (vt = {
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
      (yt = ({ value: e, children: t }) => {
        let n = s(f),
          r = e ?? n.transition,
          i = c(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return a(f.Provider, { value: i, children: t });
      }),
      (bt = m.create(u)),
      (xt = { Desktop: `JIiBvRrjg`, Mobile: `cylK6kTmU`, Tablet: `ZIvMPij1s` }),
      (St = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: xt[r.variant] ?? r.variant ?? `JIiBvRrjg`,
      })),
      (Ct = (e, t) =>
        e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`)),
      (wt = t(function (e, t) {
        let r = o(null),
          i = t ?? r,
          s = n(),
          { activeLocale: c, setLocale: f } = k();
        O();
        let { style: p, className: h, layoutId: g, variant: v, ...b } = St(e),
          {
            baseVariant: x,
            classNames: S,
            clearLoadingGesture: w,
            gestureHandlers: T,
            gestureVariant: E,
            isLoading: D,
            setGestureState: ee,
            setVariant: A,
            variants: M,
          } = j({
            cycleOrder: ft,
            defaultVariant: `JIiBvRrjg`,
            ref: i,
            variant: v,
            variantClassNames: mt,
          }),
          N = Ct(e, M),
          P = [lt, fe, Ee, at],
          F = C(pt, ...P);
        return a(d, {
          id: g ?? s,
          children: a(bt, {
            animate: M,
            initial: !1,
            children: a(yt, {
              value: ht,
              children: l(m.footer, {
                ...b,
                ...T,
                className: C(F, `framer-18xnbdo`, h, S),
                "data-framer-name": `Desktop`,
                layoutDependency: N,
                layoutId: `JIiBvRrjg`,
                ref: i,
                style: {
                  backgroundColor: `var(--token-b475daa1-123e-4ac4-9203-afa2fe736f56, rgb(11, 11, 11))`,
                  ...p,
                },
                ...Q(
                  {
                    cylK6kTmU: { "data-framer-name": `Mobile` },
                    ZIvMPij1s: { "data-framer-name": `Tablet` },
                  },
                  x,
                  E
                ),
                children: [
                  l(m.div, {
                    className: `framer-1kdbt4g`,
                    "data-framer-name": `Content`,
                    layoutDependency: N,
                    layoutId: `hDht5xSL5`,
                    children: [
                      l(m.div, {
                        className: `framer-1m6y75a`,
                        "data-framer-name": `Name + Copy`,
                        layoutDependency: N,
                        layoutId: `wdEhZ8uIr`,
                        children: [
                          a(dt, {
                            __fromCanvasComponent: !0,
                            __perspectiveFX: !1,
                            __smartComponentFX: !0,
                            __targetOpacity: 1,
                            animate: _t,
                            children: a(u, {
                              children: a(m.h2, {
                                className: `framer-styles-preset-ugul1a`,
                                "data-styles-preset": `PSEgU1pGW`,
                                style: {
                                  "--framer-text-color": `var(--extracted-1of0zx5, var(--token-fe8040e6-3344-44c0-bab9-226d490ba5f3, rgb(255, 255, 255)))`,
                                },
                                children: `Sreerag C`,
                              }),
                            }),
                            className: `framer-so60ay`,
                            "data-framer-appear-id": `so60ay`,
                            "data-framer-name": `Name`,
                            fonts: [`Inter`],
                            initial: vt,
                            layoutDependency: N,
                            layoutId: `rwCTc9qx2`,
                            optimized: !0,
                            style: {
                              "--extracted-1of0zx5": `var(--token-fe8040e6-3344-44c0-bab9-226d490ba5f3, rgb(255, 255, 255))`,
                              transformPerspective: 1200,
                            },
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                            ...Q(
                              {
                                cylK6kTmU: {
                                  children: a(u, {
                                    children: a(m.h2, {
                                      className: `framer-styles-preset-ugul1a`,
                                      "data-styles-preset": `PSEgU1pGW`,
                                      style: {
                                        "--framer-text-alignment": `center`,
                                        "--framer-text-color": `var(--extracted-1of0zx5, var(--token-fe8040e6-3344-44c0-bab9-226d490ba5f3, rgb(255, 255, 255)))`,
                                      },
                                      children: `Sreerag C`,
                                    }),
                                  }),
                                },
                              },
                              x,
                              E
                            ),
                          }),
                          a(dt, {
                            __fromCanvasComponent: !0,
                            __perspectiveFX: !1,
                            __smartComponentFX: !0,
                            __targetOpacity: 1,
                            animate: _t,
                            children: a(u, {
                              children: l(m.h5, {
                                className: `framer-styles-preset-1qig5z1`,
                                "data-styles-preset": `y5ezp3Fqp`,
                                children: [
                                  `\xA0`,
                                  a(m.span, {
                                    style: {
                                      "--framer-text-color": `var(--extracted-as4nhg, var(--token-69917ee8-fdc7-4c8a-9069-21fd1bc15e8c, rgb(184, 184, 184)))`,
                                    },
                                    children: `ui ux designer  `,
                                  }),
                                  a(m.span, {
                                    style: {
                                      "--framer-text-color": `var(--extracted-1nqvagd, rgb(237, 237, 2))`,
                                    },
                                    children: `|`,
                                  }),
                                ],
                              }),
                            }),
                            className: `framer-1g5hn`,
                            "data-framer-appear-id": `1g5hn`,
                            "data-framer-name": `Name`,
                            fonts: [`Inter`],
                            initial: vt,
                            layoutDependency: N,
                            layoutId: `ecWUql8oV`,
                            optimized: !0,
                            style: {
                              "--extracted-1nqvagd": `rgb(237, 237, 2)`,
                              "--extracted-as4nhg": `var(--token-69917ee8-fdc7-4c8a-9069-21fd1bc15e8c, rgb(184, 184, 184))`,
                              transformPerspective: 1200,
                            },
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                            ...Q(
                              {
                                cylK6kTmU: {
                                  children: a(u, {
                                    children: l(m.h5, {
                                      className: `framer-styles-preset-1qig5z1`,
                                      "data-styles-preset": `y5ezp3Fqp`,
                                      style: {
                                        "--framer-text-alignment": `center`,
                                      },
                                      children: [
                                        `\xA0`,
                                        a(m.span, {
                                          style: {
                                            "--framer-text-color": `var(--extracted-as4nhg, var(--token-69917ee8-fdc7-4c8a-9069-21fd1bc15e8c, rgb(184, 184, 184)))`,
                                          },
                                          children: `ui ux designer  `,
                                        }),
                                        a(m.span, {
                                          style: {
                                            "--framer-text-color": `var(--extracted-1nqvagd, rgb(237, 237, 2))`,
                                          },
                                          children: `|`,
                                        }),
                                      ],
                                    }),
                                  }),
                                },
                              },
                              x,
                              E
                            ),
                          }),
                        ],
                      }),
                      l(m.div, {
                        className: `framer-184kzoq`,
                        "data-framer-name": `Navigation`,
                        layoutDependency: N,
                        layoutId: `q_CiZYOHG`,
                        children: [
                          l(m.div, {
                            className: `framer-1sbuy4o`,
                            "data-framer-name": `Navigation`,
                            layoutDependency: N,
                            layoutId: `lWPVxcPBQ`,
                            children: [
                              a(y, {
                                __fromCanvasComponent: !0,
                                children: a(u, {
                                  children: a(m.h5, {
                                    className: `framer-styles-preset-1qig5z1`,
                                    "data-styles-preset": `y5ezp3Fqp`,
                                    style: {
                                      "--framer-text-color": `var(--extracted-1lwpl3i, var(--token-69917ee8-fdc7-4c8a-9069-21fd1bc15e8c, rgb(184, 184, 184)))`,
                                    },
                                    children: `Navigation`,
                                  }),
                                }),
                                className: `framer-pfexx5`,
                                fonts: [`Inter`],
                                layoutDependency: N,
                                layoutId: `cv6mW0CQU`,
                                style: {
                                  "--extracted-1lwpl3i": `var(--token-69917ee8-fdc7-4c8a-9069-21fd1bc15e8c, rgb(184, 184, 184))`,
                                },
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              l(m.div, {
                                className: `framer-xrmdgk`,
                                "data-framer-name": `NavigationLinks`,
                                layoutDependency: N,
                                layoutId: `o7JLCAF8L`,
                                children: [
                                  a(y, {
                                    __fromCanvasComponent: !0,
                                    children: a(u, {
                                      children: a(m.p, {
                                        className: `framer-styles-preset-1hj8z0a`,
                                        "data-styles-preset": `UByHkDadJ`,
                                        children: a(_, {
                                          href: { webPageId: `dqkkaMW66` },
                                          motionChild: !0,
                                          nodeId: `Uj2rkpqoV`,
                                          openInNewTab: !1,
                                          scopeId: `X44af24a6`,
                                          smoothScroll: !1,
                                          children: a(m.a, {
                                            className: `framer-styles-preset-x319l3`,
                                            "data-styles-preset": `ircUlf0Vd`,
                                            children: `Home`,
                                          }),
                                        }),
                                      }),
                                    }),
                                    className: `framer-1e989gm`,
                                    fonts: [`Inter`],
                                    layoutDependency: N,
                                    layoutId: `Uj2rkpqoV`,
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  a(y, {
                                    __fromCanvasComponent: !0,
                                    children: a(u, {
                                      children: a(m.p, {
                                        className: `framer-styles-preset-1hj8z0a`,
                                        "data-styles-preset": `UByHkDadJ`,
                                        children: a(_, {
                                          href: { webPageId: `iIUPKXiyu` },
                                          motionChild: !0,
                                          nodeId: `FGqEkqqYT`,
                                          openInNewTab: !1,
                                          scopeId: `X44af24a6`,
                                          smoothScroll: !1,
                                          children: a(m.a, {
                                            className: `framer-styles-preset-x319l3`,
                                            "data-styles-preset": `ircUlf0Vd`,
                                            children: `Blog`,
                                          }),
                                        }),
                                      }),
                                    }),
                                    className: `framer-91vlu5`,
                                    fonts: [`Inter`],
                                    layoutDependency: N,
                                    layoutId: `FGqEkqqYT`,
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  a(y, {
                                    __fromCanvasComponent: !0,
                                    children: a(u, {
                                      children: a(m.p, {
                                        className: `framer-styles-preset-1hj8z0a`,
                                        "data-styles-preset": `UByHkDadJ`,
                                        children: a(_, {
                                          href: { webPageId: `skCBjGGGU` },
                                          motionChild: !0,
                                          nodeId: `XF7TdT37i`,
                                          openInNewTab: !1,
                                          scopeId: `X44af24a6`,
                                          smoothScroll: !1,
                                          children: a(m.a, {
                                            className: `framer-styles-preset-x319l3`,
                                            "data-styles-preset": `ircUlf0Vd`,
                                            children: `Contact`,
                                          }),
                                        }),
                                      }),
                                    }),
                                    className: `framer-n8s0is`,
                                    fonts: [`Inter`],
                                    layoutDependency: N,
                                    layoutId: `XF7TdT37i`,
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                            ],
                          }),
                          l(m.div, {
                            className: `framer-pb72jv`,
                            "data-framer-name": `Navigation`,
                            layoutDependency: N,
                            layoutId: `kZdmADWlI`,
                            children: [
                              a(y, {
                                __fromCanvasComponent: !0,
                                children: a(u, {
                                  children: a(m.h5, {
                                    className: `framer-styles-preset-1qig5z1`,
                                    "data-styles-preset": `y5ezp3Fqp`,
                                    style: {
                                      "--framer-text-color": `var(--extracted-1lwpl3i, var(--token-69917ee8-fdc7-4c8a-9069-21fd1bc15e8c, rgb(184, 184, 184)))`,
                                    },
                                    children: `Case studies`,
                                  }),
                                }),
                                className: `framer-olkn3i`,
                                fonts: [`Inter`],
                                layoutDependency: N,
                                layoutId: `dhy3dde38`,
                                style: {
                                  "--extracted-1lwpl3i": `var(--token-69917ee8-fdc7-4c8a-9069-21fd1bc15e8c, rgb(184, 184, 184))`,
                                },
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              l(m.div, {
                                className: `framer-mtabsi`,
                                "data-framer-name": `NavigationLinks`,
                                layoutDependency: N,
                                layoutId: `k64s0xG7W`,
                                children: [
                                  a(y, {
                                    __fromCanvasComponent: !0,
                                    children: a(u, {
                                      children: a(m.p, {
                                        className: `framer-styles-preset-1hj8z0a`,
                                        "data-styles-preset": `UByHkDadJ`,
                                        children: `Choose My Fresh App`,
                                      }),
                                    }),
                                    className: `framer-q6f8ax`,
                                    fonts: [`Inter`],
                                    layoutDependency: N,
                                    layoutId: `zDgpEzXwA`,
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  a(y, {
                                    __fromCanvasComponent: !0,
                                    children: a(u, {
                                      children: l(m.p, {
                                        className: `framer-styles-preset-1hj8z0a`,
                                        "data-styles-preset": `UByHkDadJ`,
                                        children: [
                                          a(_, {
                                            href: {
                                              pathVariables: {
                                                cVobtGrRA: `new-brand-look-and-website`,
                                              },
                                              unresolvedPathSlugs: {
                                                cVobtGrRA: {
                                                  collectionId: `HvA2icrab`,
                                                  collectionItemId: `OkdruZ6lZ`,
                                                },
                                              },
                                              webPageId: `o7Lhg86HO`,
                                            },
                                            motionChild: !0,
                                            nodeId: `bOlnbjPAO`,
                                            openInNewTab: !1,
                                            scopeId: `X44af24a6`,
                                            smoothScroll: !1,
                                            children: a(m.a, {
                                              className: `framer-styles-preset-x319l3`,
                                              "data-styles-preset": `ircUlf0Vd`,
                                              children: `AL Hadi `,
                                            }),
                                          }),
                                          `Website `,
                                        ],
                                      }),
                                    }),
                                    className: `framer-1yyuyub`,
                                    fonts: [`Inter`],
                                    layoutDependency: N,
                                    layoutId: `bOlnbjPAO`,
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  a(y, {
                                    __fromCanvasComponent: !0,
                                    children: a(u, {
                                      children: a(m.p, {
                                        className: `framer-styles-preset-1hj8z0a`,
                                        "data-styles-preset": `UByHkDadJ`,
                                        children: `BRD Luxe Website `,
                                      }),
                                    }),
                                    className: `framer-d9bx8n`,
                                    fonts: [`Inter`],
                                    layoutDependency: N,
                                    layoutId: `CuP0A_2wN`,
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  a(y, {
                                    __fromCanvasComponent: !0,
                                    children: a(u, {
                                      children: a(m.p, {
                                        className: `framer-styles-preset-1hj8z0a`,
                                        "data-styles-preset": `UByHkDadJ`,
                                        children: `Arayal Resorts `,
                                      }),
                                    }),
                                    className: `framer-hbse3c`,
                                    fonts: [`Inter`],
                                    layoutDependency: N,
                                    layoutId: `YAqccTAEp`,
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                            ],
                          }),
                          l(m.div, {
                            className: `framer-427zud`,
                            "data-framer-name": `Navigation`,
                            layoutDependency: N,
                            layoutId: `AcM07pmJu`,
                            children: [
                              a(y, {
                                __fromCanvasComponent: !0,
                                children: a(u, {
                                  children: a(m.h5, {
                                    className: `framer-styles-preset-1qig5z1`,
                                    "data-styles-preset": `y5ezp3Fqp`,
                                    style: {
                                      "--framer-text-color": `var(--extracted-1lwpl3i, var(--token-69917ee8-fdc7-4c8a-9069-21fd1bc15e8c, rgb(184, 184, 184)))`,
                                    },
                                    children: `Social media`,
                                  }),
                                }),
                                className: `framer-1hi4xln`,
                                fonts: [`Inter`],
                                layoutDependency: N,
                                layoutId: `wB2UrNHej`,
                                style: {
                                  "--extracted-1lwpl3i": `var(--token-69917ee8-fdc7-4c8a-9069-21fd1bc15e8c, rgb(184, 184, 184))`,
                                },
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              l(m.div, {
                                className: `framer-dic02x`,
                                "data-framer-name": `NavigationLinks`,
                                layoutDependency: N,
                                layoutId: `gjufKiq7_`,
                                children: [
                                  a(y, {
                                    __fromCanvasComponent: !0,
                                    children: a(u, {
                                      children: a(m.p, {
                                        className: `framer-styles-preset-1hj8z0a`,
                                        "data-styles-preset": `UByHkDadJ`,
                                        children: a(_, {
                                          href: `https://www.instagram.com/sree._rag/`,
                                          motionChild: !0,
                                          nodeId: `w6oemw1jI`,
                                          openInNewTab: !0,
                                          scopeId: `X44af24a6`,
                                          smoothScroll: !1,
                                          children: a(m.a, {
                                            className: `framer-styles-preset-x319l3`,
                                            "data-styles-preset": `ircUlf0Vd`,
                                            children: `Instagram`,
                                          }),
                                        }),
                                      }),
                                    }),
                                    className: `framer-yzxk3q`,
                                    fonts: [`Inter`],
                                    layoutDependency: N,
                                    layoutId: `w6oemw1jI`,
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  a(y, {
                                    __fromCanvasComponent: !0,
                                    children: a(u, {
                                      children: a(m.p, {
                                        className: `framer-styles-preset-1hj8z0a`,
                                        "data-styles-preset": `UByHkDadJ`,
                                        children: a(_, {
                                          href: `https://api.whatsapp.com/send?phone=919747518380`,
                                          motionChild: !0,
                                          nodeId: `jJgfdEXtR`,
                                          openInNewTab: !0,
                                          scopeId: `X44af24a6`,
                                          smoothScroll: !1,
                                          children: a(m.a, {
                                            className: `framer-styles-preset-x319l3`,
                                            "data-styles-preset": `ircUlf0Vd`,
                                            children: `WhatsApp`,
                                          }),
                                        }),
                                      }),
                                    }),
                                    className: `framer-lumsu7`,
                                    fonts: [`Inter`],
                                    layoutDependency: N,
                                    layoutId: `jJgfdEXtR`,
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  a(y, {
                                    __fromCanvasComponent: !0,
                                    children: a(u, {
                                      children: a(m.p, {
                                        className: `framer-styles-preset-1hj8z0a`,
                                        "data-styles-preset": `UByHkDadJ`,
                                        children: a(_, {
                                          href: `https://www.threads.com/@sree._rag?igshid=NTc4MTIwNjQ2YQ==`,
                                          motionChild: !0,
                                          nodeId: `SNv9TMyVP`,
                                          openInNewTab: !0,
                                          scopeId: `X44af24a6`,
                                          smoothScroll: !1,
                                          children: a(m.a, {
                                            className: `framer-styles-preset-x319l3`,
                                            "data-styles-preset": `ircUlf0Vd`,
                                            children: `Threads`,
                                          }),
                                        }),
                                      }),
                                    }),
                                    className: `framer-15s7n9s`,
                                    fonts: [`Inter`],
                                    layoutDependency: N,
                                    layoutId: `SNv9TMyVP`,
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  a(y, {
                                    __fromCanvasComponent: !0,
                                    children: a(u, {
                                      children: a(m.p, {
                                        className: `framer-styles-preset-1hj8z0a`,
                                        "data-styles-preset": `UByHkDadJ`,
                                        children: a(_, {
                                          href: `linkedin.com/in/sreerag-knr`,
                                          motionChild: !0,
                                          nodeId: `o7JbcARVT`,
                                          openInNewTab: !0,
                                          scopeId: `X44af24a6`,
                                          smoothScroll: !1,
                                          children: a(m.a, {
                                            className: `framer-styles-preset-x319l3`,
                                            "data-styles-preset": `ircUlf0Vd`,
                                            children: `LinkedIn`,
                                          }),
                                        }),
                                      }),
                                    }),
                                    className: `framer-1hltykg`,
                                    fonts: [`Inter`],
                                    layoutDependency: N,
                                    layoutId: `o7JbcARVT`,
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  a(m.div, {
                    className: `framer-1bizn4`,
                    "data-framer-name": `Content`,
                    layoutDependency: N,
                    layoutId: `cNA9EhQJk`,
                    children: l(m.div, {
                      className: `framer-w369ud`,
                      "data-framer-name": `Text Content`,
                      layoutDependency: N,
                      layoutId: `ZjsskeiSo`,
                      children: [
                        a(y, {
                          __fromCanvasComponent: !0,
                          children: a(u, {
                            children: l(m.p, {
                              className: `framer-styles-preset-1hj8z0a`,
                              "data-styles-preset": `UByHkDadJ`,
                              style: {
                                "--framer-text-color": `var(--extracted-r6o4lv, rgb(221, 255, 0))`,
                              },
                              children: [
                                a(_, {
                                  href: `twitter.com/tonjrv`,
                                  motionChild: !0,
                                  nodeId: `JbiRitUeD`,
                                  openInNewTab: !0,
                                  scopeId: `X44af24a6`,
                                  smoothScroll: !1,
                                  children: a(m.a, {
                                    className: `framer-styles-preset-x319l3`,
                                    "data-styles-preset": `ircUlf0Vd`,
                                    children: `© 2025 – Sreerag C @`,
                                  }),
                                }),
                                `sreerag_knr `,
                              ],
                            }),
                          }),
                          className: `framer-438zvv`,
                          "data-framer-name": `Copyright @2024`,
                          fonts: [`Inter`],
                          layoutDependency: N,
                          layoutId: `JbiRitUeD`,
                          style: {
                            "--extracted-r6o4lv": `rgb(221, 255, 0)`,
                            "--framer-paragraph-spacing": `14px`,
                          },
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                        }),
                        l(m.div, {
                          className: `framer-unx4nc`,
                          "data-framer-name": `More Links`,
                          layoutDependency: N,
                          layoutId: `FlTS18JU0`,
                          children: [
                            a(y, {
                              __fromCanvasComponent: !0,
                              children: a(u, {
                                children: a(m.p, {
                                  className: `framer-styles-preset-1hj8z0a`,
                                  "data-styles-preset": `UByHkDadJ`,
                                  children: a(_, {
                                    href: `https://www.framer.com/legal/privacy-statement/`,
                                    motionChild: !0,
                                    nodeId: `kpYJ8P33e`,
                                    openInNewTab: !0,
                                    scopeId: `X44af24a6`,
                                    smoothScroll: !1,
                                    children: a(m.a, {
                                      className: `framer-styles-preset-x319l3`,
                                      "data-styles-preset": `ircUlf0Vd`,
                                      children: `Privacy Policy`,
                                    }),
                                  }),
                                }),
                              }),
                              className: `framer-gev8ns`,
                              "data-framer-name": `Footer link`,
                              fonts: [`Inter`],
                              layoutDependency: N,
                              layoutId: `kpYJ8P33e`,
                              style: { "--framer-paragraph-spacing": `14px` },
                              variants: {
                                ZIvMPij1s: {
                                  "--extracted-r6o4lv": `var(--token-69917ee8-fdc7-4c8a-9069-21fd1bc15e8c, rgb(184, 184, 184))`,
                                },
                              },
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                              ...Q(
                                {
                                  ZIvMPij1s: {
                                    children: a(u, {
                                      children: a(m.p, {
                                        className: `framer-styles-preset-1hj8z0a`,
                                        "data-styles-preset": `UByHkDadJ`,
                                        style: {
                                          "--framer-text-color": `var(--extracted-r6o4lv, var(--token-69917ee8-fdc7-4c8a-9069-21fd1bc15e8c, rgb(184, 184, 184)))`,
                                        },
                                        children: a(_, {
                                          href: `https://www.framer.com/legal/privacy-statement/`,
                                          motionChild: !0,
                                          nodeId: `kpYJ8P33e`,
                                          openInNewTab: !0,
                                          scopeId: `X44af24a6`,
                                          smoothScroll: !1,
                                          children: a(m.a, {
                                            className: `framer-styles-preset-x319l3`,
                                            "data-styles-preset": `ircUlf0Vd`,
                                            children: `Privacy Policy`,
                                          }),
                                        }),
                                      }),
                                    }),
                                  },
                                },
                                x,
                                E
                              ),
                            }),
                            a(y, {
                              __fromCanvasComponent: !0,
                              children: a(u, {
                                children: a(m.p, {
                                  className: `framer-styles-preset-1hj8z0a`,
                                  "data-styles-preset": `UByHkDadJ`,
                                  children: a(_, {
                                    href: `https://www.framer.com/legal/cookie-policy/`,
                                    motionChild: !0,
                                    nodeId: `wSbMIt3jI`,
                                    openInNewTab: !0,
                                    scopeId: `X44af24a6`,
                                    smoothScroll: !1,
                                    children: a(m.a, {
                                      className: `framer-styles-preset-x319l3`,
                                      "data-styles-preset": `ircUlf0Vd`,
                                      children: `Cookies`,
                                    }),
                                  }),
                                }),
                              }),
                              className: `framer-163eeul`,
                              "data-framer-name": `Footer link`,
                              fonts: [`Inter`],
                              layoutDependency: N,
                              layoutId: `wSbMIt3jI`,
                              style: { "--framer-paragraph-spacing": `14px` },
                              variants: {
                                ZIvMPij1s: {
                                  "--extracted-r6o4lv": `var(--token-69917ee8-fdc7-4c8a-9069-21fd1bc15e8c, rgb(184, 184, 184))`,
                                },
                              },
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                              ...Q(
                                {
                                  ZIvMPij1s: {
                                    children: a(u, {
                                      children: a(m.p, {
                                        className: `framer-styles-preset-1hj8z0a`,
                                        "data-styles-preset": `UByHkDadJ`,
                                        style: {
                                          "--framer-text-color": `var(--extracted-r6o4lv, var(--token-69917ee8-fdc7-4c8a-9069-21fd1bc15e8c, rgb(184, 184, 184)))`,
                                        },
                                        children: a(_, {
                                          href: `https://www.framer.com/legal/cookie-policy/`,
                                          motionChild: !0,
                                          nodeId: `wSbMIt3jI`,
                                          openInNewTab: !0,
                                          scopeId: `X44af24a6`,
                                          smoothScroll: !1,
                                          children: a(m.a, {
                                            className: `framer-styles-preset-x319l3`,
                                            "data-styles-preset": `ircUlf0Vd`,
                                            children: `Cookies`,
                                          }),
                                        }),
                                      }),
                                    }),
                                  },
                                },
                                x,
                                E
                              ),
                            }),
                            a(y, {
                              __fromCanvasComponent: !0,
                              children: a(u, {
                                children: a(m.p, {
                                  className: `framer-styles-preset-1hj8z0a`,
                                  "data-styles-preset": `UByHkDadJ`,
                                  children: a(_, {
                                    href: `https://www.framer.com/legal/terms-of-service/`,
                                    motionChild: !0,
                                    nodeId: `oBnGeINHl`,
                                    openInNewTab: !0,
                                    scopeId: `X44af24a6`,
                                    smoothScroll: !1,
                                    children: a(m.a, {
                                      className: `framer-styles-preset-x319l3`,
                                      "data-styles-preset": `ircUlf0Vd`,
                                      children: `Terms & Conditions`,
                                    }),
                                  }),
                                }),
                              }),
                              className: `framer-1e41y51`,
                              "data-framer-name": `Footer link`,
                              fonts: [`Inter`],
                              layoutDependency: N,
                              layoutId: `oBnGeINHl`,
                              style: { "--framer-paragraph-spacing": `14px` },
                              variants: {
                                ZIvMPij1s: {
                                  "--extracted-r6o4lv": `var(--token-69917ee8-fdc7-4c8a-9069-21fd1bc15e8c, rgb(184, 184, 184))`,
                                },
                              },
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                              ...Q(
                                {
                                  ZIvMPij1s: {
                                    children: a(u, {
                                      children: a(m.p, {
                                        className: `framer-styles-preset-1hj8z0a`,
                                        "data-styles-preset": `UByHkDadJ`,
                                        style: {
                                          "--framer-text-color": `var(--extracted-r6o4lv, var(--token-69917ee8-fdc7-4c8a-9069-21fd1bc15e8c, rgb(184, 184, 184)))`,
                                        },
                                        children: a(_, {
                                          href: `https://www.framer.com/legal/terms-of-service/`,
                                          motionChild: !0,
                                          nodeId: `oBnGeINHl`,
                                          openInNewTab: !0,
                                          scopeId: `X44af24a6`,
                                          smoothScroll: !1,
                                          children: a(m.a, {
                                            className: `framer-styles-preset-x319l3`,
                                            "data-styles-preset": `ircUlf0Vd`,
                                            children: `Terms & Conditions`,
                                          }),
                                        }),
                                      }),
                                    }),
                                  },
                                },
                                x,
                                E
                              ),
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
          }),
        });
      })),
      (Tt = [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-w6GyN.framer-18sw515, .framer-w6GyN .framer-18sw515 { display: block; }`,
        `.framer-w6GyN.framer-18xnbdo { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 80px; height: min-content; justify-content: center; overflow: hidden; padding: 16px 0px 32px 0px; position: relative; width: 1200px; }`,
        `.framer-w6GyN .framer-1kdbt4g { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 80px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-w6GyN .framer-1m6y75a { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-w6GyN .framer-so60ay, .framer-w6GyN .framer-1g5hn { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-w6GyN .framer-184kzoq { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 80px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-w6GyN .framer-1sbuy4o, .framer-w6GyN .framer-pb72jv, .framer-w6GyN .framer-427zud { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
        `.framer-w6GyN .framer-pfexx5, .framer-w6GyN .framer-1e989gm, .framer-w6GyN .framer-91vlu5, .framer-w6GyN .framer-n8s0is, .framer-w6GyN .framer-olkn3i, .framer-w6GyN .framer-q6f8ax, .framer-w6GyN .framer-1yyuyub, .framer-w6GyN .framer-d9bx8n, .framer-w6GyN .framer-hbse3c, .framer-w6GyN .framer-1hi4xln, .framer-w6GyN .framer-yzxk3q, .framer-w6GyN .framer-lumsu7, .framer-w6GyN .framer-15s7n9s, .framer-w6GyN .framer-1hltykg, .framer-w6GyN .framer-438zvv, .framer-w6GyN .framer-gev8ns, .framer-w6GyN .framer-163eeul, .framer-w6GyN .framer-1e41y51 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-w6GyN .framer-xrmdgk, .framer-w6GyN .framer-mtabsi, .framer-w6GyN .framer-dic02x { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
        `.framer-w6GyN .framer-1bizn4 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: flex-start; max-width: 1200px; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-w6GyN .framer-w369ud { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-w6GyN .framer-unx4nc { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
        `.framer-w6GyN.framer-v-2rxcdl.framer-18xnbdo { justify-content: flex-start; padding: 16px 16px 40px 16px; width: 390px; }`,
        `.framer-w6GyN.framer-v-2rxcdl .framer-184kzoq { flex-direction: column; gap: 64px; }`,
        `.framer-w6GyN.framer-v-2rxcdl .framer-1sbuy4o, .framer-w6GyN.framer-v-2rxcdl .framer-pb72jv, .framer-w6GyN.framer-v-2rxcdl .framer-427zud { align-content: center; align-items: center; width: 100%; }`,
        `.framer-w6GyN.framer-v-2rxcdl .framer-xrmdgk { align-content: center; align-items: center; }`,
        `.framer-w6GyN.framer-v-2rxcdl .framer-w369ud { align-content: center; align-items: center; flex-direction: column; gap: 32px; justify-content: flex-start; }`,
        `.framer-w6GyN.framer-v-2rxcdl .framer-unx4nc { align-content: center; align-items: center; flex-direction: column; }`,
        `.framer-w6GyN.framer-v-557o4f.framer-18xnbdo { padding: 16px 40px 32px 40px; width: 730px; }`,
        ...ct,
        ...de,
        ...Te,
        ...it,
      ]),
      ($ = M(wt, Tt, `framer-w6GyN`)),
      ($.displayName = `Page elements/ Footer`),
      ($.defaultProps = { height: 494, width: 1200 }),
      S($, {
        variant: {
          options: [`JIiBvRrjg`, `cylK6kTmU`, `ZIvMPij1s`],
          optionTitles: [`Desktop`, `Mobile`, `Tablet`],
          title: `Variant`,
          type: g.Enum,
        },
      }),
      x(
        $,
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
          ...E(st),
          ...E(G),
          ...E(we),
          ...E(rt),
        ],
        { supportsExplicitInterCodegen: !0 }
      );
  });
function Dt(e, t) {
  return {
    description: `DDDDDDDDA passionate UI/UX Designer with 3+ years of experience turning ideas into intuitive digital products. I design interfaces that not only look great but solve real user problems — now ready for global opportunities.`,
    favicon: `https://framerusercontent.com/assets/9eLY8D1MhTVJJfROXqjn9Q4Eh4.png`,
    robots: `max-image-preview:large`,
    socialImage: `https://framerusercontent.com/assets/RvqGXBOkx3IKf9R1YuVNSrKzBY.png`,
    title: `DDDDD SREERAG C - UI UX DESIGNER 999000 `,
  };
}
var Ot = e(() => {});
export {
  J as FramerBEGDBMHl_,
  K as FramerIZPeE10DN,
  $ as FramerX44af24a6,
  W as FramergDFtw0mKz,
  Z as FramerkJYLTxD7F,
  lt as className,
  at as className$1,
  Ee as className$2,
  fe as className$3,
  R as className$4,
  ct as css,
  it as css$1,
  Te as css$2,
  de as css$3,
  L as css$4,
  st as fonts,
  rt as fonts$1,
  we as fonts$2,
  G as fonts$3,
  I as fonts$4,
  Ve as init_BEGDBMHl_,
  Ce as init_IZPeE10DN,
  ut as init_PSEgU1pGW,
  De as init_UByHkDadJ,
  z as init_UByHkDadJ$1,
  Et as init_X44af24a6,
  ue as init_gDFtw0mKz,
  ot as init_ircUlf0Vd,
  nt as init_kJYLTxD7F,
  Ot as init_siteMetadata,
  pe as init_y5ezp3Fqp,
  Dt as metadata,
};
//# sourceMappingURL=shared-lib.f_QHqq7I.mjs.map
