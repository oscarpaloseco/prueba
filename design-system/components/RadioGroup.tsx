// Auto-generated from the DS Foundations Engine.
// Component: RadioGroup  (category: shadcn)
// Description: shadcn/ui RadioGroup. A set of round radio options (vertical or horizontal); the first is selected (filled dot). State axis: default / disabled / focus. Bound to shadcn semantic tokens (primary control, base label).
//
// Tokens are referenced as CSS variables — make sure to import the
// accompanying tokens.css somewhere in your app:
//   import "./tokens.css";

import React, { useCallback, useState } from "react";

export interface RadioGroupProps {
  /** Standard click handler. Fires AFTER any internal state updates. */
  onClick?: (e: React.MouseEvent) => void;
  /** Variant. Default: "default" */
  State?: "default" | "focus" | "disabled";
  /** Variant. Default: "Default" */
  Selected?: "Default" | "Comfortable" | "Compact";
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

export function RadioGroup(props: RadioGroupProps = {}) {
  // Normalize defaults so override selectors have something to match.
  // Props listed in `interactivity` get a useState so click / hover /
  // drag handlers can mutate them. The rest stay as derived consts.
  const state = props.State ?? "default";
  const selected = props.Selected ?? "Default";

  const _ctx: Record<string, any> = { State: state, Selected: selected };
  return (
    <div style={_mergeOverrides({ display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "flex-start", gap: "var(--ds-spacing-2, 8px)", paddingLeft: "0px", paddingRight: "0px", paddingTop: "0px", paddingBottom: "0px", width: "fit-content", height: "fit-content", position: "relative", boxSizing: "border-box" }, [{ selector: {"State":"disabled"}, patch: { opacity: 0.5 } }], _ctx) as React.CSSProperties}>
      <div style={({ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "flex-start", gap: "var(--ds-spacing-2, 8px)", paddingLeft: "0px", paddingRight: "0px", paddingTop: "0px", paddingBottom: "0px", width: "fit-content", height: "fit-content", position: "relative", boxSizing: "border-box" }) as React.CSSProperties}>
        <div style={_mergeOverrides({ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", gap: "0px", paddingLeft: "0px", paddingRight: "0px", paddingTop: "0px", paddingBottom: "0px", width: "var(--ds-sizes-scale-4, 16px)", height: "var(--ds-sizes-scale-4, 16px)", flexShrink: 0, position: "relative", boxSizing: "border-box", background: "var(--ds-primary-default, #18181b)", color: "var(--ds-primary-foreground, #fafafa)", border: `1px solid ${"var(--ds-primary-default, #18181b)"}`, borderRadius: "var(--ds-radius-full, 9999px)" }, [{ selector: {"Selected":"Default"}, patch: { background: "var(--ds-primary-default, #18181b)", border: `1px solid ${"var(--ds-primary-default, #18181b)"}` } }, { selector: {"Selected":"Comfortable"}, patch: { background: "#00000000", border: `1px solid ${"var(--ds-primary-default, #18181b)"}` } }, { selector: {"Selected":"Compact"}, patch: { background: "#00000000", border: `1px solid ${"var(--ds-primary-default, #18181b)"}` } }, { selector: {"State":"focus"}, patch: { border: `2px solid ${"var(--ds-ring, #a1a1aa)"}` } }], _ctx) as React.CSSProperties}>
          <span style={_mergeOverrides({ display: "inline-flex", width: "[object Object]px", height: "[object Object]px", color: "currentColor", flexShrink: 0 }, [{ selector: {"Selected":"Default"}, patch: { display: undefined } }, { selector: {"Selected":"Comfortable"}, patch: { display: "none" } }, { selector: {"Selected":"Compact"}, patch: { display: "none" } }], _ctx) as React.CSSProperties} dangerouslySetInnerHTML={{ __html: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="none"><circle cx="12" cy="12" r="6"/></svg>` }} />
        </div>
        <span style={({ color: "var(--ds-base-foreground, #09090b)", fontFamily: `var(--ds-typography-families-sans)`, fontSize: `var(--ds-typography-scale-fontSize-sm)`, fontWeight: `var(--ds-typography-weights-regular)`, lineHeight: `var(--ds-typography-scale-lineHeight-sm)`, letterSpacing: `var(--ds-typography-scale-letterSpacing-sm)` }) as React.CSSProperties}>{"Default"}</span>
      </div>
      <div style={({ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "flex-start", gap: "var(--ds-spacing-2, 8px)", paddingLeft: "0px", paddingRight: "0px", paddingTop: "0px", paddingBottom: "0px", width: "fit-content", height: "fit-content", position: "relative", boxSizing: "border-box" }) as React.CSSProperties}>
        <div style={_mergeOverrides({ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", gap: "0px", paddingLeft: "0px", paddingRight: "0px", paddingTop: "0px", paddingBottom: "0px", width: "var(--ds-sizes-scale-4, 16px)", height: "var(--ds-sizes-scale-4, 16px)", flexShrink: 0, position: "relative", boxSizing: "border-box", background: "#00000000", color: "var(--ds-primary-foreground, #fafafa)", border: `1px solid ${"var(--ds-primary-default, #18181b)"}`, borderRadius: "var(--ds-radius-full, 9999px)" }, [{ selector: {"Selected":"Default"}, patch: { background: "#00000000", border: `1px solid ${"var(--ds-primary-default, #18181b)"}` } }, { selector: {"Selected":"Comfortable"}, patch: { background: "var(--ds-primary-default, #18181b)", border: `1px solid ${"var(--ds-primary-default, #18181b)"}` } }, { selector: {"Selected":"Compact"}, patch: { background: "#00000000", border: `1px solid ${"var(--ds-primary-default, #18181b)"}` } }], _ctx) as React.CSSProperties}>
          <span style={_mergeOverrides({ display: "inline-flex", width: "[object Object]px", height: "[object Object]px", color: "currentColor", flexShrink: 0 }, [{ selector: {"Selected":"Default"}, patch: { display: "none" } }, { selector: {"Selected":"Comfortable"}, patch: { display: undefined } }, { selector: {"Selected":"Compact"}, patch: { display: "none" } }], _ctx) as React.CSSProperties} dangerouslySetInnerHTML={{ __html: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="none"><circle cx="12" cy="12" r="6"/></svg>` }} />
        </div>
        <span style={({ color: "var(--ds-base-foreground, #09090b)", fontFamily: `var(--ds-typography-families-sans)`, fontSize: `var(--ds-typography-scale-fontSize-sm)`, fontWeight: `var(--ds-typography-weights-regular)`, lineHeight: `var(--ds-typography-scale-lineHeight-sm)`, letterSpacing: `var(--ds-typography-scale-letterSpacing-sm)` }) as React.CSSProperties}>{"Comfortable"}</span>
      </div>
      <div style={({ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "flex-start", gap: "var(--ds-spacing-2, 8px)", paddingLeft: "0px", paddingRight: "0px", paddingTop: "0px", paddingBottom: "0px", width: "fit-content", height: "fit-content", position: "relative", boxSizing: "border-box" }) as React.CSSProperties}>
        <div style={_mergeOverrides({ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", gap: "0px", paddingLeft: "0px", paddingRight: "0px", paddingTop: "0px", paddingBottom: "0px", width: "var(--ds-sizes-scale-4, 16px)", height: "var(--ds-sizes-scale-4, 16px)", flexShrink: 0, position: "relative", boxSizing: "border-box", background: "#00000000", color: "var(--ds-primary-foreground, #fafafa)", border: `1px solid ${"var(--ds-primary-default, #18181b)"}`, borderRadius: "var(--ds-radius-full, 9999px)" }, [{ selector: {"Selected":"Default"}, patch: { background: "#00000000", border: `1px solid ${"var(--ds-primary-default, #18181b)"}` } }, { selector: {"Selected":"Comfortable"}, patch: { background: "#00000000", border: `1px solid ${"var(--ds-primary-default, #18181b)"}` } }, { selector: {"Selected":"Compact"}, patch: { background: "var(--ds-primary-default, #18181b)", border: `1px solid ${"var(--ds-primary-default, #18181b)"}` } }], _ctx) as React.CSSProperties}>
          <span style={_mergeOverrides({ display: "inline-flex", width: "[object Object]px", height: "[object Object]px", color: "currentColor", flexShrink: 0 }, [{ selector: {"Selected":"Default"}, patch: { display: "none" } }, { selector: {"Selected":"Comfortable"}, patch: { display: "none" } }, { selector: {"Selected":"Compact"}, patch: { display: undefined } }], _ctx) as React.CSSProperties} dangerouslySetInnerHTML={{ __html: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="none"><circle cx="12" cy="12" r="6"/></svg>` }} />
        </div>
        <span style={({ color: "var(--ds-base-foreground, #09090b)", fontFamily: `var(--ds-typography-families-sans)`, fontSize: `var(--ds-typography-scale-fontSize-sm)`, fontWeight: `var(--ds-typography-weights-regular)`, lineHeight: `var(--ds-typography-scale-lineHeight-sm)`, letterSpacing: `var(--ds-typography-scale-letterSpacing-sm)` }) as React.CSSProperties}>{"Compact"}</span>
      </div>
    </div>
  );
}

export default RadioGroup;
