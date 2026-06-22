// Auto-generated from the DS Foundations Engine.
// Component: FieldGroup  (category: shadcn)
// Description: shadcn/ui FieldGroup. A gap-7 column of composed Fields (real instances of your saved components, grouped by the body composer) with an optional 'Or' FieldSeparator between groups. Fully bound to shadcn semantic tokens.
//
// Tokens are referenced as CSS variables — make sure to import the
// accompanying tokens.css somewhere in your app:
//   import "./tokens.css";

import React, { useCallback, useState } from "react";

import { Field } from "./Field";

export interface FieldGroupProps {
  /** Standard click handler. Fires AFTER any internal state updates. */
  onClick?: (e: React.MouseEvent) => void;
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

export function FieldGroup(props: FieldGroupProps = {}) {
  // Normalize defaults so override selectors have something to match.
  // Props listed in `interactivity` get a useState so click / hover /
  // drag handlers can mutate them. The rest stay as derived consts.


  const _ctx: Record<string, any> = {  };
  return (
    <div style={({ display: "flex", flexDirection: "column", alignItems: "stretch", justifyContent: "flex-start", gap: "var(--ds-spacing-7, 28px)", width: "360px", height: "fit-content", flexShrink: 0, position: "relative", boxSizing: "border-box" }) as React.CSSProperties}>
      <div style={({ display: "flex", flexDirection: "column", alignItems: "stretch", justifyContent: "flex-start", gap: "var(--ds-spacing-7, 28px)", width: "100%", height: "fit-content", position: "relative", boxSizing: "border-box" }) as React.CSSProperties}>
        <span style={{ flex: "1 1 0px", display: "flex", flexDirection: "column", alignItems: "stretch", minWidth: 0 } as React.CSSProperties}>
          <Field />
        </span>
        <span style={{ flex: "1 1 0px", display: "flex", flexDirection: "column", alignItems: "stretch", minWidth: 0 } as React.CSSProperties}>
          <Field />
        </span>
      </div>
      <div style={({ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", gap: "var(--ds-spacing-2, 8px)", width: "100%", height: "fit-content", position: "relative", boxSizing: "border-box" }) as React.CSSProperties}>
        <div style={({ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", width: "100%", height: "1px", flexShrink: 0, position: "relative", boxSizing: "border-box", background: "var(--ds-border, #e4e4e7)" }) as React.CSSProperties}>
        
        </div>
        <span style={({ color: "var(--ds-muted-foreground, #71717a)", fontFamily: `var(--ds-typography-families-sans)`, fontSize: `var(--ds-typography-scale-fontSize-sm)`, fontWeight: `var(--ds-typography-weights-regular)`, lineHeight: `var(--ds-typography-scale-lineHeight-sm)`, letterSpacing: `var(--ds-typography-scale-letterSpacing-sm)` }) as React.CSSProperties}>{"Or"}</span>
        <div style={({ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", width: "100%", height: "1px", flexShrink: 0, position: "relative", boxSizing: "border-box", background: "var(--ds-border, #e4e4e7)" }) as React.CSSProperties}>
        
        </div>
      </div>
      <div style={({ display: "flex", flexDirection: "column", alignItems: "stretch", justifyContent: "flex-start", gap: "var(--ds-spacing-7, 28px)", width: "100%", height: "fit-content", position: "relative", boxSizing: "border-box" }) as React.CSSProperties}>
        <span style={{ flex: "1 1 0px", display: "flex", flexDirection: "column", alignItems: "stretch", minWidth: 0 } as React.CSSProperties}>
          <Field />
        </span>
      </div>
    </div>
  );
}

export default FieldGroup;
