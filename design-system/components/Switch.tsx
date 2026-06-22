// Auto-generated from the DS Foundations Engine.
// Component: Switch  (category: shadcn)
// Description: shadcn/ui Switch. A rounded-full track (input → primary when checked) with a circular thumb that slides left → right. Sizes: sm / md. State axis: default / checked / disabled. Fully bound to shadcn semantic tokens.
//
// Tokens are referenced as CSS variables — make sure to import the
// accompanying tokens.css somewhere in your app:
//   import "./tokens.css";

import React, { useCallback, useState } from "react";

export interface SwitchProps {
  /** Standard click handler. Fires AFTER any internal state updates. */
  onClick?: (e: React.MouseEvent) => void;
  /** Variant. Default: "md" */
  Size?: "sm" | "md";
  /** Variant. Default: "default" */
  State?: "default" | "checked" | "focus" | "disabled";
  /** Uncontrolled-mode initial value. */
  defaultState?: "default" | "checked" | "focus" | "disabled";
  /** Controlled-mode change callback. */
  onStateChange?: (value: "default" | "checked" | "focus" | "disabled") => void;
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

export function Switch(props: SwitchProps = {}) {
  // Normalize defaults so override selectors have something to match.
  // Props listed in `interactivity` get a useState so click / hover /
  // drag handlers can mutate them. The rest stay as derived consts.
  const size = props.Size ?? "md";
  const [state, _setState_inner] = useState<"default" | "checked" | "focus" | "disabled">(props.State ?? props.defaultState ?? "default");
  const setState = useCallback((v: "default" | "checked" | "focus" | "disabled") => { _setState_inner(v); props.onStateChange?.(v); }, [props.onStateChange]);

  const _ctx: Record<string, any> = { Size: size, State: state };
  return (
    <div style={{ ...(_mergeOverrides({ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "flex-start", paddingLeft: "2px", paddingRight: "2px", paddingTop: "2px", paddingBottom: "2px", width: "var(--ds-sizes-scale-9, 36px)", height: "var(--ds-sizes-scale-5, 20px)", flexShrink: 0, position: "relative", boxSizing: "border-box", background: "var(--ds-input, #e4e4e7)", borderRadius: "var(--ds-radius-full, 9999px)" }, [{ selector: {"Size":"sm"}, patch: { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "flex-start", paddingLeft: "2px", paddingRight: "2px", paddingTop: "2px", paddingBottom: "2px", width: "var(--ds-sizes-scale-7, 28px)", height: "var(--ds-sizes-scale-4, 16px)", flexShrink: 0, position: "relative", boxSizing: "border-box" } }, { selector: {"Size":"sm","State":"checked"}, patch: { background: "var(--ds-primary-default, #18181b)", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "flex-end", paddingLeft: "2px", paddingRight: "2px", paddingTop: "2px", paddingBottom: "2px", width: "var(--ds-sizes-scale-7, 28px)", height: "var(--ds-sizes-scale-4, 16px)", flexShrink: 0, position: "relative", boxSizing: "border-box" } }, { selector: {"Size":"md","State":"checked"}, patch: { background: "var(--ds-primary-default, #18181b)", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "flex-end", paddingLeft: "2px", paddingRight: "2px", paddingTop: "2px", paddingBottom: "2px", width: "var(--ds-sizes-scale-9, 36px)", height: "var(--ds-sizes-scale-5, 20px)", flexShrink: 0, position: "relative", boxSizing: "border-box" } }, { selector: {"State":"disabled"}, patch: { opacity: 0.5 } }, { selector: {"State":"focus"}, patch: { border: `2px solid ${"var(--ds-ring, #a1a1aa)"}` } }], _ctx) as React.CSSProperties), cursor: "pointer" }} onClick={(e) => { e.stopPropagation(); setState((state as any) === "checked" ? "default" as any : "checked" as any); props.onClick?.(e); }}>
      <div style={_mergeOverrides({ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", width: "var(--ds-sizes-scale-4, 16px)", height: "var(--ds-sizes-scale-4, 16px)", flexShrink: 0, position: "relative", boxSizing: "border-box", background: "var(--ds-base-background, #ffffff)", borderRadius: "var(--ds-radius-full, 9999px)" }, [{ selector: {"Size":"sm"}, patch: { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", width: "var(--ds-sizes-scale-3, 12px)", height: "var(--ds-sizes-scale-3, 12px)", flexShrink: 0, position: "relative", boxSizing: "border-box" } }], _ctx) as React.CSSProperties}>
      
      </div>
    </div>
  );
}

export default Switch;
