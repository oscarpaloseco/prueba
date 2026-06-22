// Auto-generated from the DS Foundations Engine.
// Component: Textarea  (category: shadcn)
// Description: shadcn/ui Textarea. Multi-line text field across sizes (sm, md, lg) — rounded-md, `input` border, body-sm placeholder in muted-foreground, focus ring on `ring`, destructive border + halo on error (aria-invalid), disabled dims to 50%. Fully bound to shadcn semantic tokens.
//
// Tokens are referenced as CSS variables — make sure to import the
// accompanying tokens.css somewhere in your app:
//   import "./tokens.css";

import React, { useCallback, useState } from "react";

export interface TextareaProps {
  /** Standard click handler. Fires AFTER any internal state updates. */
  onClick?: (e: React.MouseEvent) => void;
  /** Variant. Default: "md" */
  Size?: "sm" | "md" | "lg";
  /** Variant. Default: "default" */
  State?: "default" | "focus" | "error" | "disabled";
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

export function Textarea(props: TextareaProps = {}) {
  // Normalize defaults so override selectors have something to match.
  // Props listed in `interactivity` get a useState so click / hover /
  // drag handlers can mutate them. The rest stay as derived consts.
  const size = props.Size ?? "md";
  const state = props.State ?? "default";

  const _ctx: Record<string, any> = { Size: size, State: state };
  return (
    <div style={_mergeOverrides({ display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "flex-start", paddingLeft: "var(--ds-spacing-3, 12px)", paddingRight: "var(--ds-spacing-3, 12px)", paddingTop: "var(--ds-spacing-2, 8px)", paddingBottom: "var(--ds-spacing-2, 8px)", width: "320px", height: "80px", flexShrink: 0, minHeight: "80px", position: "relative", boxSizing: "border-box", background: "var(--ds-base-background, #ffffff)", border: `1px solid ${"var(--ds-input, #e4e4e7)"}`, borderRadius: "var(--ds-radius-md, 6px)" }, [{ selector: {"State":"focus"}, patch: { border: `2px solid ${"var(--ds-ring, #a1a1aa)"}` } }, { selector: {"State":"error"}, patch: { border: `1px solid ${"var(--ds-destructive-default, #dc2626)"}` } }, { selector: {"State":"disabled"}, patch: { opacity: 0.5 } }, { selector: {"Size":"sm"}, patch: { borderRadius: "var(--ds-radius-md, 6px)", display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "flex-start", paddingLeft: "var(--ds-spacing-3, 12px)", paddingRight: "var(--ds-spacing-3, 12px)", paddingTop: "var(--ds-spacing-2, 8px)", paddingBottom: "var(--ds-spacing-2, 8px)", width: "320px", height: "64px", flexShrink: 0, minHeight: "64px", position: "relative", boxSizing: "border-box" } }, { selector: {"Size":"lg"}, patch: { borderRadius: "var(--ds-radius-md, 6px)", display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "flex-start", paddingLeft: "var(--ds-spacing-3, 12px)", paddingRight: "var(--ds-spacing-3, 12px)", paddingTop: "var(--ds-spacing-2, 8px)", paddingBottom: "var(--ds-spacing-2, 8px)", width: "320px", height: "112px", flexShrink: 0, minHeight: "112px", position: "relative", boxSizing: "border-box" } }], _ctx) as React.CSSProperties}>
      <span style={({ color: "var(--ds-muted-foreground, #71717a)", fontFamily: `var(--ds-typography-families-sans)`, fontSize: `var(--ds-typography-scale-fontSize-sm)`, fontWeight: `var(--ds-typography-weights-regular)`, lineHeight: `var(--ds-typography-scale-lineHeight-sm)`, letterSpacing: `var(--ds-typography-scale-letterSpacing-sm)`, textAlign: "left" }) as React.CSSProperties}>{"Type your message here."}</span>
    </div>
  );
}

export default Textarea;
