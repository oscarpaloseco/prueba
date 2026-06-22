// Auto-generated from the DS Foundations Engine.
// Component: Button  (category: shadcn)
// Description: shadcn/ui Button. 6 variants (default, secondary, destructive, outline, ghost, link) × sizes (xs, sm, md, lg + square icon-xs/icon-sm/icon/icon-lg) × states. Optional render-as-link (asChild). Fully bound to shadcn semantic tokens.
//
// Tokens are referenced as CSS variables — make sure to import the
// accompanying tokens.css somewhere in your app:
//   import "./tokens.css";

import React, { useCallback, useState } from "react";

export interface ButtonProps {
  /** Standard click handler. Fires AFTER any internal state updates. */
  onClick?: (e: React.MouseEvent) => void;
  /** Variant. Default: "md" */
  Size?: "xs" | "sm" | "md" | "lg" | "icon-xs" | "icon-sm" | "icon" | "icon-lg";
  /** Default: "Button" */
  Label?: string;
  /** Variant. Default: "default" */
  State?: "default" | "hover" | "focus" | "disabled";
  /** Uncontrolled-mode initial value. */
  defaultState?: "default" | "hover" | "focus" | "disabled";
  /** Controlled-mode change callback. */
  onStateChange?: (value: "default" | "hover" | "focus" | "disabled") => void;
  /** Default: true */
  HasIcon?: boolean;
  /** Default: false */
  Loading?: boolean;
  /** Variant. Default: "default" */
  Variant?: "default" | "secondary" | "destructive" | "outline" | "ghost" | "link";
  /** Default: false */
  IconOnly?: boolean;
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
  const label = props.Label ?? "Button";
  const [state, _setState_inner] = useState<"default" | "hover" | "focus" | "disabled">(props.State ?? props.defaultState ?? "default");
  const setState = useCallback((v: "default" | "hover" | "focus" | "disabled") => { _setState_inner(v); props.onStateChange?.(v); }, [props.onStateChange]);
  const hasIcon = props.HasIcon ?? true;
  const loading = props.Loading ?? false;
  const variant = props.Variant ?? "default";
  const iconOnly = props.IconOnly ?? false;

  const _ctx: Record<string, any> = { Size: size, Label: label, State: state, HasIcon: hasIcon, Loading: loading, Variant: variant, IconOnly: iconOnly };
  return (
    <button style={_mergeOverrides({ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", gap: "var(--ds-spacing-2, 8px)", paddingLeft: "var(--ds-spacing-4, 16px)", paddingRight: "var(--ds-spacing-4, 16px)", paddingTop: "0px", paddingBottom: "0px", width: "fit-content", height: "var(--ds-sizes-components-md, 36px)", flexShrink: 0, position: "relative", boxSizing: "border-box", background: "var(--ds-primary-default, #18181b)", color: "var(--ds-primary-foreground, #fafafa)", borderRadius: "var(--ds-radius-md, 6px)" }, [{ selector: {"State":"hover","Variant":"default"}, patch: { opacity: 0.9 } }, { selector: {"State":"disabled","Variant":"default"}, patch: { opacity: 0.5 } }, { selector: {"State":"focus","Variant":"default"}, patch: { border: `2px solid ${"var(--ds-ring, #a1a1aa)"}` } }, { selector: {"Variant":"secondary"}, patch: { background: "var(--ds-secondary-default, #18181b)", color: "var(--ds-secondary-foreground, #fafafa)", opacity: 1 } }, { selector: {"State":"hover","Variant":"secondary"}, patch: { opacity: 0.8 } }, { selector: {"State":"disabled","Variant":"secondary"}, patch: { opacity: 0.5 } }, { selector: {"State":"focus","Variant":"secondary"}, patch: { border: `2px solid ${"var(--ds-ring, #a1a1aa)"}` } }, { selector: {"Variant":"destructive"}, patch: { background: "var(--ds-destructive-default, #18181b)", color: "var(--ds-destructive-foreground, #fafafa)", opacity: 1 } }, { selector: {"State":"hover","Variant":"destructive"}, patch: { opacity: 0.9 } }, { selector: {"State":"disabled","Variant":"destructive"}, patch: { opacity: 0.5 } }, { selector: {"State":"focus","Variant":"destructive"}, patch: { border: `2px solid ${"var(--ds-ring, #a1a1aa)"}` } }, { selector: {"Variant":"outline"}, patch: { background: "var(--ds-base-background, #18181b)", color: "var(--ds-base-foreground, #fafafa)", border: `1px solid ${"var(--ds-input, #e4e4e7)"}`, opacity: 1 } }, { selector: {"State":"hover","Variant":"outline"}, patch: { background: "var(--ds-accent-default, #f4f4f5)", color: "var(--ds-accent-foreground, #18181b)" } }, { selector: {"State":"disabled","Variant":"outline"}, patch: { opacity: 0.5 } }, { selector: {"State":"focus","Variant":"outline"}, patch: { border: `2px solid ${"var(--ds-ring, #a1a1aa)"}` } }, { selector: {"Variant":"ghost"}, patch: { background: "#00000000", color: "var(--ds-base-foreground, #fafafa)", opacity: 1 } }, { selector: {"State":"hover","Variant":"ghost"}, patch: { background: "var(--ds-accent-default, #f4f4f5)", color: "var(--ds-accent-foreground, #18181b)" } }, { selector: {"State":"disabled","Variant":"ghost"}, patch: { opacity: 0.5 } }, { selector: {"State":"focus","Variant":"ghost"}, patch: { border: `2px solid ${"var(--ds-ring, #a1a1aa)"}` } }, { selector: {"Variant":"link"}, patch: { background: "#00000000", color: "var(--ds-primary-default, #fafafa)", opacity: 1 } }, { selector: {"State":"disabled","Variant":"link"}, patch: { opacity: 0.5 } }, { selector: {"State":"focus","Variant":"link"}, patch: { border: `2px solid ${"var(--ds-ring, #a1a1aa)"}` } }, { selector: {"Size":"xs"}, patch: { borderRadius: "var(--ds-radius-md, 6px)", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", gap: "var(--ds-spacing-1, 8px)", paddingLeft: "var(--ds-spacing-2, 16px)", paddingRight: "var(--ds-spacing-2, 16px)", paddingTop: "0px", paddingBottom: "0px", width: "fit-content", height: "var(--ds-sizes-scale-7, 28px)", flexShrink: 0, position: "relative", boxSizing: "border-box" } }, { selector: {"Size":"sm"}, patch: { borderRadius: "var(--ds-radius-md, 6px)", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", gap: "var(--ds-spacing-2, 8px)", paddingLeft: "var(--ds-spacing-3, 16px)", paddingRight: "var(--ds-spacing-3, 16px)", paddingTop: "0px", paddingBottom: "0px", width: "fit-content", height: "var(--ds-sizes-components-sm, 32px)", flexShrink: 0, position: "relative", boxSizing: "border-box" } }, { selector: {"Size":"lg"}, patch: { borderRadius: "var(--ds-radius-md, 6px)", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", gap: "var(--ds-spacing-2, 8px)", paddingLeft: "var(--ds-spacing-8, 16px)", paddingRight: "var(--ds-spacing-8, 16px)", paddingTop: "0px", paddingBottom: "0px", width: "fit-content", height: "var(--ds-sizes-components-lg, 40px)", flexShrink: 0, position: "relative", boxSizing: "border-box" } }, { selector: {"Size":"icon-xs"}, patch: { borderRadius: "var(--ds-radius-md, 6px)", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", gap: "var(--ds-spacing-2, 8px)", paddingLeft: "0px", paddingRight: "0px", paddingTop: "0px", paddingBottom: "0px", width: "var(--ds-sizes-scale-7, 28px)", height: "var(--ds-sizes-scale-7, 28px)", flexShrink: 0, position: "relative", boxSizing: "border-box" } }, { selector: {"Size":"icon-sm"}, patch: { borderRadius: "var(--ds-radius-md, 6px)", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", gap: "var(--ds-spacing-2, 8px)", paddingLeft: "0px", paddingRight: "0px", paddingTop: "0px", paddingBottom: "0px", width: "var(--ds-sizes-components-sm, 32px)", height: "var(--ds-sizes-components-sm, 32px)", flexShrink: 0, position: "relative", boxSizing: "border-box" } }, { selector: {"Size":"icon"}, patch: { borderRadius: "var(--ds-radius-md, 6px)", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", gap: "var(--ds-spacing-2, 8px)", paddingLeft: "0px", paddingRight: "0px", paddingTop: "0px", paddingBottom: "0px", width: "var(--ds-sizes-components-md, 36px)", height: "var(--ds-sizes-components-md, 36px)", flexShrink: 0, position: "relative", boxSizing: "border-box" } }, { selector: {"Size":"icon-lg"}, patch: { borderRadius: "var(--ds-radius-md, 6px)", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", gap: "var(--ds-spacing-2, 8px)", paddingLeft: "0px", paddingRight: "0px", paddingTop: "0px", paddingBottom: "0px", width: "var(--ds-sizes-components-lg, 40px)", height: "var(--ds-sizes-components-lg, 40px)", flexShrink: 0, position: "relative", boxSizing: "border-box" } }, { selector: {"Variant":"link"}, patch: { background: "#00000000", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", gap: "var(--ds-spacing-2, 8px)", paddingLeft: "0px", paddingRight: "0px", paddingTop: "0px", paddingBottom: "0px", width: "fit-content", height: "var(--ds-sizes-components-md, 36px)", flexShrink: 0, position: "relative", boxSizing: "border-box" } }], _ctx) as React.CSSProperties} onMouseEnter={() => setState("hover" as any)} onMouseLeave={() => setState("default" as any)}>
      {((_ctx.HasIcon === true)) && (
      <span style={{ display: "inline-flex", width: "[object Object]px", height: "[object Object]px", color: "currentColor", flexShrink: 0 } as React.CSSProperties} dangerouslySetInnerHTML={{ __html: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/></svg>` }} />
      )}
      {((_ctx.IconOnly === false)) && (
      <span style={_mergeOverrides({ color: "var(--ds-primary-foreground, #fafafa)", fontFamily: `var(--ds-typography-families-sans)`, fontSize: `var(--ds-typography-scale-fontSize-sm)`, fontWeight: `var(--ds-typography-weights-medium)`, lineHeight: `var(--ds-typography-scale-lineHeight-sm)`, letterSpacing: `var(--ds-typography-scale-letterSpacing-sm)`, textAlign: "center" }, [{ selector: {"Variant":"secondary"}, patch: { color: "var(--ds-secondary-foreground, #fafafa)" } }, { selector: {"Variant":"destructive"}, patch: { color: "var(--ds-destructive-foreground, #fafafa)" } }, { selector: {"Variant":"outline"}, patch: { color: "var(--ds-base-foreground, #fafafa)" } }, { selector: {"State":"hover","Variant":"outline"}, patch: { color: "var(--ds-accent-foreground, #18181b)" } }, { selector: {"Variant":"ghost"}, patch: { color: "var(--ds-base-foreground, #fafafa)" } }, { selector: {"State":"hover","Variant":"ghost"}, patch: { color: "var(--ds-accent-foreground, #18181b)" } }, { selector: {"Variant":"link"}, patch: { color: "var(--ds-primary-default, #fafafa)" } }, { selector: {"State":"hover","Variant":"link"}, patch: { textDecoration: "underline" } }, { selector: {"Size":"xs"}, patch: { fontFamily: `var(--ds-typography-roles-caption-steps-sm-fontFamily, ui-sans-serif)`, fontSize: `var(--ds-typography-roles-caption-steps-sm-fontSize, 14px)`, fontWeight: `var(--ds-typography-roles-caption-steps-sm-fontWeight, 400)`, lineHeight: `var(--ds-typography-roles-caption-steps-sm-lineHeight, 1.4)` } }, { selector: {"Size":"icon-xs"}, patch: { display: "none" } }, { selector: {"Size":"icon-sm"}, patch: { display: "none" } }, { selector: {"Size":"icon"}, patch: { display: "none" } }, { selector: {"Size":"icon-lg"}, patch: { display: "none" } }], _ctx) as React.CSSProperties}>{String((props.Label) ?? "Button")}</span>
      )}
    </button>
  );
}

export default Button;
