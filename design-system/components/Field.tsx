// Auto-generated from the DS Foundations Engine.
// Component: Field  (category: shadcn)
// Description: shadcn/ui Field. Label + ONE control slot + description + error. The control is a real nested instance of any saved component (Input by default) — pick it in the panel, swap it natively in Figma. The choiceCard option wraps the slot in a bordered, checkable container. `responsive` orientation renders as vertical in the IR (no container queries in Figma). Fully bound to shadcn semantic tokens.
//
// Tokens are referenced as CSS variables — make sure to import the
// accompanying tokens.css somewhere in your app:
//   import "./tokens.css";

import React, { useCallback, useState } from "react";

import { Input } from "./Input";

export interface FieldProps {
  /** Standard click handler. Fires AFTER any internal state updates. */
  onClick?: (e: React.MouseEvent) => void;
  /** Default: "Username" */
  Label?: string;
  /** Default: false */
  Checked?: boolean;
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

export function Field(props: FieldProps = {}) {
  // Normalize defaults so override selectors have something to match.
  // Props listed in `interactivity` get a useState so click / hover /
  // drag handlers can mutate them. The rest stay as derived consts.
  const label = props.Label ?? "Username";
  const checked = props.Checked ?? false;

  const _ctx: Record<string, any> = { Label: label, Checked: checked };
  return (
    <div style={({ display: "flex", flexDirection: "column", alignItems: "stretch", justifyContent: "flex-start", gap: "var(--ds-spacing-3, 12px)", width: "360px", height: "fit-content", flexShrink: 0, position: "relative", boxSizing: "border-box" }) as React.CSSProperties}>
      <span style={({ color: "var(--ds-base-foreground, #09090b)", fontFamily: `var(--ds-typography-families-sans)`, fontSize: `var(--ds-typography-scale-fontSize-sm)`, fontWeight: `var(--ds-typography-weights-medium)`, lineHeight: `var(--ds-typography-scale-lineHeight-sm)`, letterSpacing: `var(--ds-typography-scale-letterSpacing-sm)` }) as React.CSSProperties}>{String((props.Label) ?? "Username")}</span>
      <span style={{ flex: "1 1 0px", display: "flex", flexDirection: "column", alignItems: "stretch", minWidth: 0 } as React.CSSProperties}>
        <Input />
      </span>
      <span style={({ color: "var(--ds-muted-foreground, #71717a)", fontFamily: `var(--ds-typography-families-sans)`, fontSize: `var(--ds-typography-scale-fontSize-sm)`, fontWeight: `var(--ds-typography-weights-regular)`, lineHeight: `var(--ds-typography-scale-lineHeight-sm)`, letterSpacing: `var(--ds-typography-scale-letterSpacing-sm)` }) as React.CSSProperties}>{"This is your public display name."}</span>
    </div>
  );
}

export default Field;
