// Auto-generated from the DS Foundations Engine.
// Component: ToggleGroup  (category: shadcn)
// Description: shadcn/ui ToggleGroup. A row of toggle items sharing the Toggle styling — joined (spacing 0, shared border, end-only radius) or gapped. type single / multiple. The pressed set bakes from a comma index list; the preview is a genuine Radix ToggleGroup. Fully bound to shadcn semantic tokens.
//
// Tokens are referenced as CSS variables — make sure to import the
// accompanying tokens.css somewhere in your app:
//   import "./tokens.css";

import React, { useCallback, useState } from "react";

export interface ToggleGroupProps {
  /** Standard click handler. Fires AFTER any internal state updates. */
  onClick?: (e: React.MouseEvent) => void;
  /** Default: "0" */
  Pressed?: string;
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

export function ToggleGroup(props: ToggleGroupProps = {}) {
  // Normalize defaults so override selectors have something to match.
  // Props listed in `interactivity` get a useState so click / hover /
  // drag handlers can mutate them. The rest stay as derived consts.
  const pressed = props.Pressed ?? "0";

  const _ctx: Record<string, any> = { Pressed: pressed };
  return (
    <div style={({ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "flex-start", gap: "0px", width: "fit-content", height: "fit-content", position: "relative", boxSizing: "border-box" }) as React.CSSProperties}>
      <button style={({ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", paddingLeft: "var(--ds-spacing-3, 12px)", paddingRight: "var(--ds-spacing-3, 12px)", width: "fit-content", height: "var(--ds-sizes-scale-9, 36px)", flexShrink: 0, position: "relative", boxSizing: "border-box", background: "var(--ds-accent-default, #f4f4f5)", color: "var(--ds-accent-foreground, #09090b)", border: `1px solid ${"var(--ds-input, #e4e4e7)"}` }) as React.CSSProperties}>
        <span style={{ display: "inline-flex", width: "[object Object]px", height: "[object Object]px", color: "currentColor", flexShrink: 0 } as React.CSSProperties} dangerouslySetInnerHTML={{ __html: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8"/></svg>` }} />
      </button>
      <button style={({ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", paddingLeft: "var(--ds-spacing-3, 12px)", paddingRight: "var(--ds-spacing-3, 12px)", width: "fit-content", height: "var(--ds-sizes-scale-9, 36px)", flexShrink: 0, position: "relative", boxSizing: "border-box", color: "var(--ds-base-foreground, #09090b)" }) as React.CSSProperties}>
        <span style={{ display: "inline-flex", width: "[object Object]px", height: "[object Object]px", color: "currentColor", flexShrink: 0 } as React.CSSProperties} dangerouslySetInnerHTML={{ __html: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" x2="10" y1="4" y2="4"/><line x1="14" x2="5" y1="20" y2="20"/><line x1="15" x2="9" y1="4" y2="20"/></svg>` }} />
      </button>
      <button style={({ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", paddingLeft: "var(--ds-spacing-3, 12px)", paddingRight: "var(--ds-spacing-3, 12px)", width: "fit-content", height: "var(--ds-sizes-scale-9, 36px)", flexShrink: 0, position: "relative", boxSizing: "border-box", color: "var(--ds-base-foreground, #09090b)" }) as React.CSSProperties}>
        <span style={{ display: "inline-flex", width: "[object Object]px", height: "[object Object]px", color: "currentColor", flexShrink: 0 } as React.CSSProperties} dangerouslySetInnerHTML={{ __html: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 4v6a6 6 0 0 0 12 0V4"/><line x1="4" x2="20" y1="20" y2="20"/></svg>` }} />
      </button>
    </div>
  );
}

export default ToggleGroup;
