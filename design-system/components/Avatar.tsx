// Auto-generated from the DS Foundations Engine.
// Component: Avatar  (category: Generated)
// Description: 
//
// Tokens are referenced as CSS variables — make sure to import the
// accompanying tokens.css somewhere in your app:
//   import "./tokens.css";

import React, { useCallback, useState } from "react";

export interface AvatarProps {
  /** Standard click handler. Fires AFTER any internal state updates. */
  onClick?: (e: React.MouseEvent) => void;
  /** Variant. Default: "sm" */
  Size?: "sm" | "md" | "lg" | "xl";
  /** Variant. Default: "image" */
  Type?: "image" | "initials" | "icon";
  /** Default: false */
  Border?: boolean;
  /** Variant. Default: "none" */
  Status?: "none" | "online" | "offline" | "busy" | "away";
  /** Slot — pass any ReactNode (icon, image, etc.). */
  IconSrc?: React.ReactNode;
  /** Default: "AB" */
  Initials?: string;
}

/**
 * Runtime helper: merges `base` with every `variantOverrides` entry
 * whose `selector` matches the current props. Mirrors the engine's
 * `selectorMatches` semantics so the exported component behaves like
 * the editor preview.
 */
const _mergeOverrides = (
  base: Record<string, any>,
  overrides: Array<{ selector: Record<string, string | boolean>; patch: Record<string, any> }> | undefined,
  ctx: Record<string, any>,
): Record<string, any> => {
  if (!overrides || overrides.length === 0) return base;
  let out = base;
  for (const o of overrides) {
    let match = true;
    for (const k of Object.keys(o.selector)) {
      const sv = o.selector[k];
      const cv = ctx[k];
      if (typeof sv === "boolean") {
        if (cv !== sv) { match = false; break; }
      } else if (cv !== sv) {
        match = false; break;
      }
    }
    if (match) out = { ...out, ...o.patch };
  }
  return out;
};

const _clamp = (n: number, min?: number, max?: number) => {
  if (typeof min === "number" && n < min) return min;
  if (typeof max === "number" && n > max) return max;
  return n;
};

export function Avatar(props: AvatarProps = {}) {
  // Normalize defaults so override selectors have something to match.
  // Props listed in `interactivity` get a useState so click / hover /
  // drag handlers can mutate them. The rest stay as derived consts.
  const size = props.Size ?? "sm";
  const type = props.Type ?? "image";
  const border = props.Border ?? false;
  const status = props.Status ?? "none";
  const initials = props.Initials ?? "AB";

  const _ctx: Record<string, any> = { Size: size, Type: type, Border: border, Status: status, IconSrc: iconSrc, Initials: initials };
  return (
    <div style={_mergeOverrides({ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", width: "var(--repeat-sizesScale3xl, 24px)", height: "var(--repeat-sizesScale3xl, 24px)", flexShrink: 0, position: "relative", boxSizing: "border-box", background: "var(--repeat-surfaceSubtle, transparent)", borderRadius: "var(--repeat-radiusFull, 9999px)" }, [{ selector: {"Size":"md"}, patch: { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", width: "var(--repeat-sizesScale5xl, 48px)", height: "var(--repeat-sizesScale5xl, 48px)", flexShrink: 0, position: "relative", boxSizing: "border-box" } }, { selector: {"Size":"lg"}, patch: { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", width: "var(--repeat-sizesScale6xl, 64px)", height: "var(--repeat-sizesScale6xl, 64px)", flexShrink: 0, position: "relative", boxSizing: "border-box" } }, { selector: {"Size":"xl"}, patch: { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", width: "var(--repeat-sizesScale8xl, 96px)", height: "var(--repeat-sizesScale8xl, 96px)", flexShrink: 0, position: "relative", boxSizing: "border-box" } }], _ctx) as React.CSSProperties}>
      <span style={_mergeOverrides({ display: "none", flexDirection: "row", alignItems: "center", justifyContent: "center", width: "13px", height: "13px", flexShrink: 0, position: "relative", boxSizing: "border-box", color: "var(--repeat-iconPrimary, transparent)" }, [{ selector: {"Size":"md"}, patch: { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", width: "26px", height: "26px", flexShrink: 0, position: "relative", boxSizing: "border-box" } }, { selector: {"Size":"lg"}, patch: { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", width: "35px", height: "35px", flexShrink: 0, position: "relative", boxSizing: "border-box" } }, { selector: {"Size":"xl"}, patch: { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", width: "53px", height: "53px", flexShrink: 0, position: "relative", boxSizing: "border-box" } }, { selector: {"Type":"initials"}, patch: { display: "none" } }, { selector: {"Type":"icon"}, patch: { display: undefined } }], _ctx) as React.CSSProperties}>
        {(props.IconSrc as React.ReactNode)}
      </span>
      <span style={_mergeOverrides({ display: "none", flexDirection: "row", alignItems: "center", justifyContent: "center", position: "relative", boxSizing: "border-box" }, [{ selector: {"Type":"initials"}, patch: { display: undefined } }, { selector: {"Type":"icon"}, patch: { display: "none" } }], _ctx) as React.CSSProperties}>
        <span style={_mergeOverrides({ color: "var(--repeat-contentDefault, transparent)", fontFamily: `var(--repeat-typographyFamiliesSans)`, fontSize: `var(--repeat-typographyScaleFontSize250)`, fontWeight: `var(--repeat-typographyWeightsRegular)`, lineHeight: `var(--repeat-typographyScaleLineHeight250)`, letterSpacing: `var(--repeat-typographyScaleLetterSpacing300)`, textAlign: "center" }, [{ selector: {"Size":"md"}, patch: { fontFamily: `var(--repeat-typographyRolesBodyStepsSm-fontFamily, ui-sans-serif)`, fontSize: `var(--repeat-typographyRolesBodyStepsSm-fontSize, 14px)`, fontWeight: `var(--repeat-typographyRolesBodyStepsSm-fontWeight, 400)`, lineHeight: `var(--repeat-typographyRolesBodyStepsSm-lineHeight, 1.4)` } }, { selector: {"Size":"lg"}, patch: { fontFamily: `var(--repeat-typographyRolesBodyStepsMd-fontFamily, ui-sans-serif)`, fontSize: `var(--repeat-typographyRolesBodyStepsMd-fontSize, 14px)`, fontWeight: `var(--repeat-typographyRolesBodyStepsMd-fontWeight, 400)`, lineHeight: `var(--repeat-typographyRolesBodyStepsMd-lineHeight, 1.4)` } }, { selector: {"Size":"xl"}, patch: { fontFamily: `var(--repeat-typographyRolesBodyStepsMd-fontFamily, ui-sans-serif)`, fontSize: `var(--repeat-typographyRolesBodyStepsMd-fontSize, 14px)`, fontWeight: `var(--repeat-typographyRolesBodyStepsMd-fontWeight, 400)`, lineHeight: `var(--repeat-typographyRolesBodyStepsMd-lineHeight, 1.4)` } }], _ctx) as React.CSSProperties}>{String((props.Initials) ?? "AB")}</span>
      </span>
      {((_ctx.Border === true)) && (
      <span style={_mergeOverrides({ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", width: "var(--repeat-sizesScale3xl, 24px)", height: "var(--repeat-sizesScale3xl, 24px)", flexShrink: 0, position: "absolute", left: "0px", top: "0px", boxSizing: "border-box", background: "#00000000", border: `1px solid ${"var(--repeat-borderDefault, transparent)"}`, borderRadius: "var(--repeat-radiusFull, 9999px)" }, [{ selector: {"Size":"md"}, patch: { border: `2px solid ${"var(--repeat-borderDefault, transparent)"}`, display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", width: "var(--repeat-sizesScale5xl, 48px)", height: "var(--repeat-sizesScale5xl, 48px)", flexShrink: 0, position: "absolute", left: "0px", top: "0px", boxSizing: "border-box" } }, { selector: {"Size":"lg"}, patch: { border: `2px solid ${"var(--repeat-borderDefault, transparent)"}`, display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", width: "var(--repeat-sizesScale6xl, 64px)", height: "var(--repeat-sizesScale6xl, 64px)", flexShrink: 0, position: "absolute", left: "0px", top: "0px", boxSizing: "border-box" } }, { selector: {"Size":"xl"}, patch: { border: `3px solid ${"var(--repeat-borderDefault, transparent)"}`, display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", width: "var(--repeat-sizesScale8xl, 96px)", height: "var(--repeat-sizesScale8xl, 96px)", flexShrink: 0, position: "absolute", left: "0px", top: "0px", boxSizing: "border-box" } }], _ctx) as React.CSSProperties}>
      
      </span>
      )}
      <span style={_mergeOverrides({ display: "none", flexDirection: "row", alignItems: "center", justifyContent: "center", width: "var(--repeat-sizesScaleSm, 8px)", height: "var(--repeat-sizesScaleSm, 8px)", flexShrink: 0, position: "absolute", left: "16px", top: "16px", boxSizing: "border-box", background: "#00000000", border: `2px solid ${"var(--repeat-borderCutout, transparent)"}`, borderRadius: "var(--repeat-radiusFull, 9999px)" }, [{ selector: {"Size":"md"}, patch: { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", width: "var(--repeat-sizesScaleLg, 12px)", height: "var(--repeat-sizesScaleLg, 12px)", flexShrink: 0, position: "absolute", left: "36px", top: "36px", boxSizing: "border-box" } }, { selector: {"Size":"lg"}, patch: { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", width: "var(--repeat-sizesScaleXl, 16px)", height: "var(--repeat-sizesScaleXl, 16px)", flexShrink: 0, position: "absolute", left: "48px", top: "48px", boxSizing: "border-box" } }, { selector: {"Size":"xl"}, patch: { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", width: "var(--repeat-sizesScale2xl, 20px)", height: "var(--repeat-sizesScale2xl, 20px)", flexShrink: 0, position: "absolute", left: "76px", top: "76px", boxSizing: "border-box" } }, { selector: {"Status":"online"}, patch: { background: "var(--repeat-statusSuccessDefault, transparent)", display: undefined } }, { selector: {"Status":"offline"}, patch: { background: "var(--repeat-surfaceSubtle, transparent)", display: undefined } }, { selector: {"Status":"busy"}, patch: { background: "var(--repeat-statusErrorDefault, transparent)", display: undefined } }, { selector: {"Status":"away"}, patch: { background: "var(--repeat-statusWarningDefault, transparent)", display: undefined } }], _ctx) as React.CSSProperties}>
      
      </span>
    </div>
  );
}

export default Avatar;
