// Auto-generated from the DS Foundations Engine.
// Component: Button  (category: Generated)
// Description: 
//
// Tokens are referenced as CSS variables — make sure to import the
// accompanying tokens.css somewhere in your app:
//   import "./tokens.css";

import React, { useCallback, useState } from "react";

export interface ButtonProps {
  /** Standard click handler. Fires AFTER any internal state updates. */
  onClick?: (e: React.MouseEvent) => void;
  /** Variant. Default: "md" */
  Size?: "sm" | "md" | "lg";
  /** Variant. Default: "primary" */
  Type?: "primary" | "secondary" | "ghost" | "ghost-on-color" | "destructive" | "warning" | "success" | "info";
  /** Default: "Button" */
  Label?: string;
  /** Variant. Default: "default" */
  State?: "default" | "hover" | "pressed" | "disabled";
  /** Variant. Default: "hug" */
  Width?: "hug" | "fill";
  /** Default: true */
  IconLeft?: boolean;
  /** Default: false */
  IconRight?: boolean;
  /** Slot — pass any ReactNode (icon, image, etc.). */
  IconLeftSrc?: React.ReactNode;
  /** Slot — pass any ReactNode (icon, image, etc.). */
  IconRightSrc?: React.ReactNode;
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

export function Button(props: ButtonProps = {}) {
  // Normalize defaults so override selectors have something to match.
  // Props listed in `interactivity` get a useState so click / hover /
  // drag handlers can mutate them. The rest stay as derived consts.
  const size = props.Size ?? "md";
  const type = props.Type ?? "primary";
  const label = props.Label ?? "Button";
  const state = props.State ?? "default";
  const width = props.Width ?? "hug";
  const iconLeft = props.IconLeft ?? true;
  const iconRight = props.IconRight ?? false;
  const iconLeftSrc = props.IconLeftSrc ?? "alarm-clock-minus";
  const iconRightSrc = props.IconRightSrc ?? "alarm-clock-minus";

  const _ctx: Record<string, any> = { Size: size, Type: type, Label: label, State: state, Width: width, IconLeft: iconLeft, IconRight: iconRight, IconLeftSrc: iconLeftSrc, IconRightSrc: iconRightSrc };
  return (
    <button style={_mergeOverrides({ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", gap: "var(--repeat-spacingXs, 4px)", paddingLeft: "var(--repeat-spacingMd, 12px)", paddingRight: "var(--repeat-spacingMd, 12px)", paddingTop: "var(--repeat-spacingSm, 8px)", paddingBottom: "var(--repeat-spacingSm, 8px)", width: "fit-content", position: "relative", boxSizing: "border-box", background: "var(--repeat-surfaceAccent, transparent)", borderRadius: "var(--repeat-radiusMd, 8px)" }, [{ selector: {"Size":"sm"}, patch: { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", gap: "var(--repeat-spacingXs, 4px)", paddingLeft: "var(--repeat-spacingSm, 12px)", paddingRight: "var(--repeat-spacingSm, 12px)", paddingTop: "var(--repeat-spacingXs, 8px)", paddingBottom: "var(--repeat-spacingXs, 8px)", width: "fit-content", position: "relative", boxSizing: "border-box" } }, { selector: {"Size":"lg"}, patch: { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", gap: "var(--repeat-spacingXs, 4px)", paddingLeft: "var(--repeat-spacingLg, 12px)", paddingRight: "var(--repeat-spacingLg, 12px)", paddingTop: "var(--repeat-spacingMd, 8px)", paddingBottom: "var(--repeat-spacingMd, 8px)", width: "fit-content", position: "relative", boxSizing: "border-box" } }, { selector: {"Width":"fill"}, patch: { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", gap: "var(--repeat-spacingXs, 4px)", paddingLeft: "var(--repeat-spacingMd, 12px)", paddingRight: "var(--repeat-spacingMd, 12px)", paddingTop: "var(--repeat-spacingSm, 8px)", paddingBottom: "var(--repeat-spacingSm, 8px)", width: "100%", minWidth: "200px", position: "relative", boxSizing: "border-box" } }, { selector: {"Type":"secondary"}, patch: { background: "var(--repeat-surfaceSecondary, transparent)" } }, { selector: {"Type":"ghost"}, patch: { background: "rgba(0,0,0,0)", border: `1px solid ${"var(--repeat-borderStronger, transparent)"}` } }, { selector: {"Type":"ghost-on-color"}, patch: { background: "rgba(0,0,0,0)", border: `1px solid ${"var(--repeat-contentOnAccent, transparent)"}` } }, { selector: {"Type":"destructive"}, patch: { background: "var(--repeat-statusErrorDefault, transparent)" } }, { selector: {"Type":"warning"}, patch: { background: "var(--repeat-statusWarningDefault, transparent)" } }, { selector: {"Type":"success"}, patch: { background: "var(--repeat-statusSuccessDefault, transparent)" } }, { selector: {"Type":"info"}, patch: { background: "var(--repeat-statusInfoDefault, transparent)" } }, { selector: {"Type":"primary","State":"hover"}, patch: { background: "var(--repeat-surfaceAccentHover, transparent)" } }, { selector: {"Type":"primary","State":"pressed"}, patch: { background: "var(--repeat-surfaceAccentPressed, transparent)" } }, { selector: {"Type":"primary","State":"disabled"}, patch: { background: "var(--repeat-surfaceAccentDisabled, transparent)" } }, { selector: {"Type":"secondary","State":"hover"}, patch: { background: "var(--repeat-surfaceSecondaryHover, transparent)" } }, { selector: {"Type":"secondary","State":"pressed"}, patch: { background: "var(--repeat-surfaceSecondaryPressed, transparent)" } }, { selector: {"Type":"secondary","State":"disabled"}, patch: { background: "var(--repeat-surfaceSecondaryDisabled, transparent)" } }, { selector: {"Type":"ghost","State":"hover"}, patch: { background: "rgba(0,0,0,0)", border: `1px solid ${"var(--repeat-borderStronger, transparent)"}` } }, { selector: {"Type":"ghost","State":"pressed"}, patch: { background: "rgba(0,0,0,0)", border: `1px solid ${"var(--repeat-borderStronger, transparent)"}` } }, { selector: {"Type":"ghost","State":"disabled"}, patch: { background: "rgba(0,0,0,0)", border: `1px solid ${"var(--repeat-borderStronger, transparent)"}`, opacity: 0.5 } }, { selector: {"Type":"ghost-on-color","State":"hover"}, patch: { background: "rgba(0,0,0,0)", border: `1px solid ${"var(--repeat-contentOnAccent, transparent)"}` } }, { selector: {"Type":"ghost-on-color","State":"pressed"}, patch: { background: "rgba(0,0,0,0)", border: `1px solid ${"var(--repeat-contentOnAccent, transparent)"}` } }, { selector: {"Type":"ghost-on-color","State":"disabled"}, patch: { background: "rgba(0,0,0,0)", border: `1px solid ${"var(--repeat-contentOnAccent, transparent)"}`, opacity: 0.5 } }, { selector: {"Type":"destructive","State":"hover"}, patch: { background: "var(--repeat-statusErrorDefault, transparent)" } }, { selector: {"Type":"destructive","State":"pressed"}, patch: { background: "var(--repeat-statusErrorDefault, transparent)" } }, { selector: {"Type":"destructive","State":"disabled"}, patch: { background: "var(--repeat-surfaceDefaultDisabled, transparent)" } }, { selector: {"Type":"warning","State":"hover"}, patch: { background: "var(--repeat-statusWarningDefault, transparent)" } }, { selector: {"Type":"warning","State":"pressed"}, patch: { background: "var(--repeat-statusWarningDefault, transparent)" } }, { selector: {"Type":"warning","State":"disabled"}, patch: { background: "var(--repeat-surfaceDefaultDisabled, transparent)" } }, { selector: {"Type":"success","State":"hover"}, patch: { background: "var(--repeat-statusSuccessDefault, transparent)" } }, { selector: {"Type":"success","State":"pressed"}, patch: { background: "var(--repeat-statusSuccessDefault, transparent)" } }, { selector: {"Type":"success","State":"disabled"}, patch: { background: "var(--repeat-surfaceDefaultDisabled, transparent)" } }, { selector: {"Type":"info","State":"hover"}, patch: { background: "var(--repeat-statusInfoDefault, transparent)" } }, { selector: {"Type":"info","State":"pressed"}, patch: { background: "var(--repeat-statusInfoDefault, transparent)" } }, { selector: {"Type":"info","State":"disabled"}, patch: { background: "var(--repeat-surfaceDefaultDisabled, transparent)" } }], _ctx) as React.CSSProperties}>
      {((_ctx.IconLeft === true)) && (
      <span style={_mergeOverrides({ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", width: "var(--repeat-iconMd, 16px)", height: "var(--repeat-iconMd, 16px)", flexShrink: 0, position: "relative", boxSizing: "border-box", color: "var(--repeat-iconOnColor, transparent)" }, [{ selector: {"Size":"sm"}, patch: { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", width: "var(--repeat-iconSm, 16px)", height: "var(--repeat-iconSm, 16px)", flexShrink: 0, position: "relative", boxSizing: "border-box" } }, { selector: {"Size":"lg"}, patch: { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", width: "var(--repeat-iconLg, 16px)", height: "var(--repeat-iconLg, 16px)", flexShrink: 0, position: "relative", boxSizing: "border-box" } }, { selector: {"Type":"secondary"}, patch: { color: "var(--repeat-iconPrimary, transparent)" } }, { selector: {"Type":"ghost"}, patch: { color: "var(--repeat-iconPrimary, transparent)" } }, { selector: {"Type":"ghost-on-color"}, patch: { color: "var(--repeat-iconOnColor, transparent)" } }, { selector: {"Type":"destructive"}, patch: { color: "var(--repeat-iconOnColor, transparent)" } }, { selector: {"Type":"warning"}, patch: { color: "var(--repeat-iconOnColor, transparent)" } }, { selector: {"Type":"success"}, patch: { color: "var(--repeat-iconOnColor, transparent)" } }, { selector: {"Type":"info"}, patch: { color: "var(--repeat-iconOnColor, transparent)" } }], _ctx) as React.CSSProperties}>
        {(props.IconLeftSrc as React.ReactNode)}
      </span>
      )}
      <span style={_mergeOverrides({ color: "var(--repeat-contentOnAccent, transparent)", fontFamily: `var(--repeat-typographyFamiliesSans)`, fontSize: `var(--repeat-typographyScaleFontSize350)`, fontWeight: `var(--repeat-typographyWeightsRegular)`, lineHeight: `var(--repeat-typographyScaleLineHeight400)`, letterSpacing: `var(--repeat-typographyScaleLetterSpacing300)` }, [{ selector: {"Type":"secondary"}, patch: { color: "var(--repeat-contentOnSecondary, transparent)" } }, { selector: {"Type":"ghost"}, patch: { color: "var(--repeat-contentDefault, transparent)" } }, { selector: {"Type":"ghost-on-color"}, patch: { color: "var(--repeat-contentOnAccent, transparent)" } }, { selector: {"Type":"destructive"}, patch: { color: "var(--repeat-contentOnAccent, transparent)" } }, { selector: {"Type":"warning"}, patch: { color: "var(--repeat-contentOnAccent, transparent)" } }, { selector: {"Type":"success"}, patch: { color: "var(--repeat-contentOnAccent, transparent)" } }, { selector: {"Type":"info"}, patch: { color: "var(--repeat-contentOnAccent, transparent)" } }, { selector: {"Type":"primary","State":"hover"}, patch: { color: "var(--repeat-contentOnAccent, transparent)" } }, { selector: {"Type":"primary","State":"pressed"}, patch: { color: "var(--repeat-contentOnAccent, transparent)" } }, { selector: {"Type":"primary","State":"disabled"}, patch: { color: "var(--repeat-contentOnAccentDisabled, transparent)" } }, { selector: {"Type":"secondary","State":"hover"}, patch: { color: "var(--repeat-contentOnSecondary, transparent)" } }, { selector: {"Type":"secondary","State":"pressed"}, patch: { color: "var(--repeat-contentOnSecondary, transparent)" } }, { selector: {"Type":"secondary","State":"disabled"}, patch: { color: "var(--repeat-contentDisabled, transparent)" } }, { selector: {"Type":"ghost","State":"hover"}, patch: { color: "var(--repeat-contentDefault, transparent)" } }, { selector: {"Type":"ghost","State":"pressed"}, patch: { color: "var(--repeat-contentDefault, transparent)" } }, { selector: {"Type":"ghost","State":"disabled"}, patch: { color: "var(--repeat-contentDisabled, transparent)" } }, { selector: {"Type":"ghost-on-color","State":"hover"}, patch: { color: "var(--repeat-contentOnAccent, transparent)" } }, { selector: {"Type":"ghost-on-color","State":"pressed"}, patch: { color: "var(--repeat-contentOnAccent, transparent)" } }, { selector: {"Type":"ghost-on-color","State":"disabled"}, patch: { color: "var(--repeat-contentOnAccentDisabled, transparent)" } }, { selector: {"Type":"destructive","State":"hover"}, patch: { color: "var(--repeat-contentOnAccent, transparent)" } }, { selector: {"Type":"destructive","State":"pressed"}, patch: { color: "var(--repeat-contentOnAccent, transparent)" } }, { selector: {"Type":"destructive","State":"disabled"}, patch: { color: "var(--repeat-contentMuted, transparent)" } }, { selector: {"Type":"warning","State":"hover"}, patch: { color: "var(--repeat-contentOnAccent, transparent)" } }, { selector: {"Type":"warning","State":"pressed"}, patch: { color: "var(--repeat-contentOnAccent, transparent)" } }, { selector: {"Type":"warning","State":"disabled"}, patch: { color: "var(--repeat-contentMuted, transparent)" } }, { selector: {"Type":"success","State":"hover"}, patch: { color: "var(--repeat-contentOnAccent, transparent)" } }, { selector: {"Type":"success","State":"pressed"}, patch: { color: "var(--repeat-contentOnAccent, transparent)" } }, { selector: {"Type":"success","State":"disabled"}, patch: { color: "var(--repeat-contentMuted, transparent)" } }, { selector: {"Type":"info","State":"hover"}, patch: { color: "var(--repeat-contentOnAccent, transparent)" } }, { selector: {"Type":"info","State":"pressed"}, patch: { color: "var(--repeat-contentOnAccent, transparent)" } }, { selector: {"Type":"info","State":"disabled"}, patch: { color: "var(--repeat-contentMuted, transparent)" } }], _ctx) as React.CSSProperties}>{String((props.Label) ?? "Button")}</span>
      {((_ctx.IconRight === true)) && (
      <span style={_mergeOverrides({ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", width: "var(--repeat-iconMd, 16px)", height: "var(--repeat-iconMd, 16px)", flexShrink: 0, position: "relative", boxSizing: "border-box", color: "var(--repeat-iconOnColor, transparent)" }, [{ selector: {"Size":"sm"}, patch: { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", width: "var(--repeat-iconSm, 16px)", height: "var(--repeat-iconSm, 16px)", flexShrink: 0, position: "relative", boxSizing: "border-box" } }, { selector: {"Size":"lg"}, patch: { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", width: "var(--repeat-iconLg, 16px)", height: "var(--repeat-iconLg, 16px)", flexShrink: 0, position: "relative", boxSizing: "border-box" } }, { selector: {"Type":"secondary"}, patch: { color: "var(--repeat-iconPrimary, transparent)" } }, { selector: {"Type":"ghost"}, patch: { color: "var(--repeat-iconPrimary, transparent)" } }, { selector: {"Type":"ghost-on-color"}, patch: { color: "var(--repeat-iconOnColor, transparent)" } }, { selector: {"Type":"destructive"}, patch: { color: "var(--repeat-iconOnColor, transparent)" } }, { selector: {"Type":"warning"}, patch: { color: "var(--repeat-iconOnColor, transparent)" } }, { selector: {"Type":"success"}, patch: { color: "var(--repeat-iconOnColor, transparent)" } }, { selector: {"Type":"info"}, patch: { color: "var(--repeat-iconOnColor, transparent)" } }], _ctx) as React.CSSProperties}>
        {(props.IconRightSrc as React.ReactNode)}
      </span>
      )}
    </button>
  );
}

export default Button;
