// Auto-generated from the DS Foundations Engine.
// Component: Checkbox  (category: shadcn)
// Description: shadcn/ui Checkbox. A 16×16 primary-bordered square with an optional check glyph, next to a label. States: default, checked (filled primary + check), indeterminate (filled primary + minus), disabled (50% opacity). Fully bound to shadcn semantic tokens.
//
// Tokens are referenced as CSS variables — make sure to import the
// accompanying tokens.css somewhere in your app:
//   import "./tokens.css";

import React, { useCallback, useState } from "react";

export interface CheckboxProps {
  /** Standard click handler. Fires AFTER any internal state updates. */
  onClick?: (e: React.MouseEvent) => void;
  /** Default: "Accept terms and conditions" */
  Label?: string;
  /** Variant. Default: "default" */
  State?: "default" | "checked" | "indeterminate" | "focus" | "disabled";
  /** Uncontrolled-mode initial value. */
  defaultState?: "default" | "checked" | "indeterminate" | "focus" | "disabled";
  /** Controlled-mode change callback. */
  onStateChange?: (value: "default" | "checked" | "indeterminate" | "focus" | "disabled") => void;
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

export function Checkbox(props: CheckboxProps = {}) {
  // Normalize defaults so override selectors have something to match.
  // Props listed in `interactivity` get a useState so click / hover /
  // drag handlers can mutate them. The rest stay as derived consts.
  const label = props.Label ?? "Accept terms and conditions";
  const [state, _setState_inner] = useState<"default" | "checked" | "indeterminate" | "focus" | "disabled">(props.State ?? props.defaultState ?? "default");
  const setState = useCallback((v: "default" | "checked" | "indeterminate" | "focus" | "disabled") => { _setState_inner(v); props.onStateChange?.(v); }, [props.onStateChange]);

  const _ctx: Record<string, any> = { Label: label, State: state };
  return (
    <div style={{ ...(_mergeOverrides({ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "flex-start", gap: "var(--ds-spacing-2, 8px)", paddingLeft: "0px", paddingRight: "0px", paddingTop: "0px", paddingBottom: "0px", width: "fit-content", height: "fit-content", position: "relative", boxSizing: "border-box" }, [{ selector: {"State":"disabled"}, patch: { opacity: 0.5 } }], _ctx) as React.CSSProperties), cursor: "pointer" }} onClick={(e) => { e.stopPropagation(); setState((state as any) === "checked" ? "default" as any : "checked" as any); props.onClick?.(e); }}>
      <div style={_mergeOverrides({ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", gap: "0px", paddingLeft: "0px", paddingRight: "0px", paddingTop: "0px", paddingBottom: "0px", width: "var(--ds-sizes-scale-4, 16px)", height: "var(--ds-sizes-scale-4, 16px)", flexShrink: 0, position: "relative", boxSizing: "border-box", background: "#00000000", color: "var(--ds-primary-foreground, #fafafa)", border: `1px solid ${"var(--ds-primary-default, #18181b)"}`, borderRadius: "var(--ds-radius-sm, 4px)" }, [{ selector: {"State":"checked"}, patch: { background: "var(--ds-primary-default, #18181b)" } }, { selector: {"State":"indeterminate"}, patch: { background: "var(--ds-primary-default, #18181b)" } }, { selector: {"State":"focus"}, patch: { border: `2px solid ${"var(--ds-ring, #a1a1aa)"}` } }], _ctx) as React.CSSProperties}>
        <span style={_mergeOverrides({ display: "inline-flex", width: "[object Object]px", height: "[object Object]px", color: "currentColor", flexShrink: 0 }, [{ selector: {"State":"checked"}, patch: { display: undefined } }], _ctx) as React.CSSProperties} dangerouslySetInnerHTML={{ __html: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>` }} />
        <span style={_mergeOverrides({ display: "inline-flex", width: "[object Object]px", height: "[object Object]px", color: "currentColor", flexShrink: 0 }, [{ selector: {"State":"indeterminate"}, patch: { display: undefined } }], _ctx) as React.CSSProperties} dangerouslySetInnerHTML={{ __html: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/></svg>` }} />
      </div>
      <span style={({ color: "var(--ds-base-foreground, #09090b)", fontFamily: `var(--ds-typography-families-sans)`, fontSize: `var(--ds-typography-scale-fontSize-sm)`, fontWeight: `var(--ds-typography-weights-regular)`, lineHeight: `var(--ds-typography-scale-lineHeight-sm)`, letterSpacing: `var(--ds-typography-scale-letterSpacing-sm)` }) as React.CSSProperties}>{String((props.Label) ?? "Accept terms and conditions")}</span>
    </div>
  );
}

export default Checkbox;
