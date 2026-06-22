// Auto-generated from the DS Foundations Engine.
// Component: Badge  (category: shadcn)
// Description: shadcn/ui Badge. 6 variants (default, secondary, destructive, outline, ghost, link). rounded-full, text-xs font-medium. Optional render-as-link (asChild). Fully bound to shadcn semantic tokens.
//
// Tokens are referenced as CSS variables — make sure to import the
// accompanying tokens.css somewhere in your app:
//   import "./tokens.css";

import React, { useCallback, useState } from "react";

export interface BadgeProps {
  /** Standard click handler. Fires AFTER any internal state updates. */
  onClick?: (e: React.MouseEvent) => void;
  /** Default: "Badge" */
  Label?: string;
  /** Variant. Default: "default" */
  Variant?: "default" | "secondary" | "destructive" | "outline" | "ghost" | "link";
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

export function Badge(props: BadgeProps = {}) {
  // Normalize defaults so override selectors have something to match.
  // Props listed in `interactivity` get a useState so click / hover /
  // drag handlers can mutate them. The rest stay as derived consts.
  const label = props.Label ?? "Badge";
  const variant = props.Variant ?? "default";

  const _ctx: Record<string, any> = { Label: label, Variant: variant };
  return (
    <span style={_mergeOverrides({ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", gap: "var(--ds-spacing-1, 4px)", paddingLeft: "10px", paddingRight: "10px", paddingTop: "2px", paddingBottom: "2px", width: "fit-content", height: "fit-content", position: "relative", boxSizing: "border-box", background: "var(--ds-primary-default, #18181b)", color: "var(--ds-primary-foreground, #fafafa)", borderRadius: "var(--ds-radius-full, 9999px)" }, [{ selector: {"Variant":"secondary"}, patch: { background: "var(--ds-secondary-default, #18181b)", color: "var(--ds-secondary-foreground, #fafafa)" } }, { selector: {"Variant":"destructive"}, patch: { background: "var(--ds-destructive-default, #18181b)", color: "var(--ds-destructive-foreground, #fafafa)" } }, { selector: {"Variant":"outline"}, patch: { background: "#00000000", color: "var(--ds-base-foreground, #fafafa)", border: `1px solid ${"var(--ds-border, #e4e4e7)"}` } }, { selector: {"Variant":"ghost"}, patch: { background: "#00000000", color: "var(--ds-base-foreground, #fafafa)" } }, { selector: {"Variant":"link"}, patch: { background: "#00000000", color: "var(--ds-primary-default, #fafafa)" } }], _ctx) as React.CSSProperties}>
      <span style={_mergeOverrides({ color: "var(--ds-primary-foreground, #fafafa)", fontFamily: `var(--ds-typography-families-sans)`, fontSize: `var(--ds-typography-scale-fontSize-xs)`, fontWeight: `var(--ds-typography-weights-regular)`, lineHeight: `var(--ds-typography-scale-lineHeight-xs)`, letterSpacing: `var(--ds-typography-scale-letterSpacing-xs)`, textAlign: "center" }, [{ selector: {"Variant":"secondary"}, patch: { color: "var(--ds-secondary-foreground, #fafafa)" } }, { selector: {"Variant":"destructive"}, patch: { color: "var(--ds-destructive-foreground, #fafafa)" } }, { selector: {"Variant":"outline"}, patch: { color: "var(--ds-base-foreground, #fafafa)" } }, { selector: {"Variant":"ghost"}, patch: { color: "var(--ds-base-foreground, #fafafa)" } }, { selector: {"Variant":"link"}, patch: { textDecoration: "underline" } }, { selector: {"Variant":"link"}, patch: { color: "var(--ds-primary-default, #fafafa)" } }], _ctx) as React.CSSProperties}>{String((props.Label) ?? "Badge")}</span>
    </span>
  );
}

export default Badge;
