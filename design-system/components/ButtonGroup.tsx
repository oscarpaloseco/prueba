// Auto-generated from the DS Foundations Engine.
// Component: ButtonGroup  (category: shadcn)
// Description: shadcn/ui ButtonGroup. A joined 0-gap row (or column) of real Button instances — outer radius only at the ends, optional input-coloured separator between buttons. Labels and per-button variants are editable. Fully bound to shadcn semantic tokens.
//
// Tokens are referenced as CSS variables — make sure to import the
// accompanying tokens.css somewhere in your app:
//   import "./tokens.css";

import React, { useCallback, useState } from "react";

import { Button } from "./Button";

export interface ButtonGroupProps {
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

export function ButtonGroup(props: ButtonGroupProps = {}) {
  // Normalize defaults so override selectors have something to match.
  // Props listed in `interactivity` get a useState so click / hover /
  // drag handlers can mutate them. The rest stay as derived consts.


  const _ctx: Record<string, any> = {  };
  return (
    <div style={({ display: "flex", flexDirection: "row", alignItems: "stretch", justifyContent: "flex-start", gap: "0px", width: "fit-content", height: "fit-content", position: "relative", boxSizing: "border-box", borderRadius: "var(--ds-radius-md, 8px)" }) as React.CSSProperties}>
      <span style={{ display: "inline-flex" } as React.CSSProperties}>
        <Button Size="md" State="default" Variant="outline" Label="Archive" />
      </span>
      <span style={{ display: "inline-flex" } as React.CSSProperties}>
        <Button Size="md" State="default" Variant="outline" Label="Report" />
      </span>
      <span style={{ display: "inline-flex" } as React.CSSProperties}>
        <Button Size="md" State="default" Variant="outline" Label="Snooze" />
      </span>
    </div>
  );
}

export default ButtonGroup;
