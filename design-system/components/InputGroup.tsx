// Auto-generated from the DS Foundations Engine.
// Component: InputGroup  (category: shadcn)
// Description: shadcn/ui InputGroup. A single bordered row composing a borderless input with leading/trailing addons (text, icon, or a small button) sharing the group's border. States: default, focus (group ring), disabled. Fully bound to shadcn semantic tokens.
//
// Tokens are referenced as CSS variables — make sure to import the
// accompanying tokens.css somewhere in your app:
//   import "./tokens.css";

import React, { useCallback, useState } from "react";

export interface InputGroupProps {
  /** Standard click handler. Fires AFTER any internal state updates. */
  onClick?: (e: React.MouseEvent) => void;
  /** Variant. Default: "default" */
  State?: "default" | "focus" | "disabled";
  /** Default: "Search..." */
  Placeholder?: string;
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

export function InputGroup(props: InputGroupProps = {}) {
  // Normalize defaults so override selectors have something to match.
  // Props listed in `interactivity` get a useState so click / hover /
  // drag handlers can mutate them. The rest stay as derived consts.
  const state = props.State ?? "default";
  const placeholder = props.Placeholder ?? "Search...";

  const _ctx: Record<string, any> = { State: state, Placeholder: placeholder };
  return (
    <div style={_mergeOverrides({ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "flex-start", gap: "var(--ds-spacing-2, 8px)", paddingLeft: "var(--ds-spacing-3, 12px)", paddingRight: "var(--ds-spacing-3, 12px)", paddingTop: "0px", paddingBottom: "0px", width: "320px", height: "var(--ds-sizes-scale-9, 36px)", flexShrink: 0, position: "relative", boxSizing: "border-box", background: "#00000000", border: `1px solid ${"var(--ds-input, #e4e4e7)"}`, borderRadius: "var(--ds-radius-md, 8px)" }, [{ selector: {"State":"focus"}, patch: { border: `2px solid ${"var(--ds-ring, #a1a1aa)"}` } }, { selector: {"State":"disabled"}, patch: { opacity: 0.5 } }], _ctx) as React.CSSProperties}>
      <div style={({ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", width: "fit-content", height: "fit-content", position: "relative", boxSizing: "border-box", color: "var(--ds-muted-foreground, #71717a)" }) as React.CSSProperties}>
        <span style={{ display: "inline-flex", width: "[object Object]px", height: "[object Object]px", color: "currentColor", flexShrink: 0 } as React.CSSProperties} dangerouslySetInnerHTML={{ __html: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21 21-4.34-4.34"/><circle cx="11" cy="11" r="8"/></svg>` }} />
      </div>
      <span style={({ color: "var(--ds-muted-foreground, #71717a)", fontFamily: `var(--ds-typography-families-sans)`, fontSize: `var(--ds-typography-scale-fontSize-sm)`, fontWeight: `var(--ds-typography-weights-regular)`, lineHeight: `var(--ds-typography-scale-lineHeight-sm)`, letterSpacing: `var(--ds-typography-scale-letterSpacing-sm)`, flex: "1 1 auto" }) as React.CSSProperties}>{String((props.Placeholder) ?? "Search...")}</span>
      <div style={({ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", gap: "var(--ds-spacing-1, 4px)", paddingLeft: "var(--ds-spacing-2, 8px)", paddingRight: "var(--ds-spacing-2, 8px)", paddingTop: "2px", paddingBottom: "2px", width: "fit-content", height: "var(--ds-sizes-scale-6, 24px)", flexShrink: 0, position: "relative", boxSizing: "border-box", background: "var(--ds-secondary-default, #f4f4f5)", borderRadius: "var(--ds-radius-sm, 6px)" }) as React.CSSProperties}>
        <span style={({ color: "var(--ds-base-foreground, #09090b)", fontFamily: `var(--ds-typography-families-sans)`, fontSize: `var(--ds-typography-scale-fontSize-sm)`, fontWeight: `var(--ds-typography-weights-regular)`, lineHeight: `var(--ds-typography-scale-lineHeight-sm)`, letterSpacing: `var(--ds-typography-scale-letterSpacing-sm)` }) as React.CSSProperties}>{"Search"}</span>
      </div>
    </div>
  );
}

export default InputGroup;
