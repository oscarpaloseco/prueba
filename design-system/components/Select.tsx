// Auto-generated from the DS Foundations Engine.
// Component: Select  (category: shadcn)
// Description: shadcn/ui Select. Row trigger (sm/md/lg heights) with a placeholder and a trailing chevron; clicking it opens a dropdown listbox of options (hidden by default). States: default, focus (ring), disabled. Fully bound to shadcn semantic tokens.
//
// Tokens are referenced as CSS variables — make sure to import the
// accompanying tokens.css somewhere in your app:
//   import "./tokens.css";

import React, { useCallback, useState } from "react";

export interface SelectProps {
  /** Standard click handler. Fires AFTER any internal state updates. */
  onClick?: (e: React.MouseEvent) => void;
  /** Default: false */
  Open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (value: boolean) => void;
  /** Variant. Default: "md" */
  Size?: "sm" | "md" | "lg";
  /** Variant. Default: "default" */
  State?: "default" | "focus" | "disabled";
  /** Default: "Select a fruit" */
  Placeholder?: string;
  /** Variant. Default: "false" */
  Option1Hover?: "false" | "true";
  /** Uncontrolled-mode initial value. */
  defaultOption1Hover?: "false" | "true";
  /** Controlled-mode change callback. */
  onOption1HoverChange?: (value: "false" | "true") => void;
  /** Variant. Default: "false" */
  Option2Hover?: "false" | "true";
  /** Uncontrolled-mode initial value. */
  defaultOption2Hover?: "false" | "true";
  /** Controlled-mode change callback. */
  onOption2HoverChange?: (value: "false" | "true") => void;
  /** Variant. Default: "false" */
  Option3Hover?: "false" | "true";
  /** Uncontrolled-mode initial value. */
  defaultOption3Hover?: "false" | "true";
  /** Controlled-mode change callback. */
  onOption3HoverChange?: (value: "false" | "true") => void;
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

export function Select(props: SelectProps = {}) {
  // Normalize defaults so override selectors have something to match.
  // Props listed in `interactivity` get a useState so click / hover /
  // drag handlers can mutate them. The rest stay as derived consts.
  const [open, _setOpen_inner] = useState<boolean>(props.Open ?? props.defaultOpen ?? false);
  const setOpen = useCallback((v: boolean) => { _setOpen_inner(v); props.onOpenChange?.(v); }, [props.onOpenChange]);
  const size = props.Size ?? "md";
  const state = props.State ?? "default";
  const placeholder = props.Placeholder ?? "Select a fruit";
  const [option1Hover, _setOption1Hover_inner] = useState<"false" | "true">(props.Option1Hover ?? props.defaultOption1Hover ?? "false");
  const setOption1Hover = useCallback((v: "false" | "true") => { _setOption1Hover_inner(v); props.onOption1HoverChange?.(v); }, [props.onOption1HoverChange]);
  const [option2Hover, _setOption2Hover_inner] = useState<"false" | "true">(props.Option2Hover ?? props.defaultOption2Hover ?? "false");
  const setOption2Hover = useCallback((v: "false" | "true") => { _setOption2Hover_inner(v); props.onOption2HoverChange?.(v); }, [props.onOption2HoverChange]);
  const [option3Hover, _setOption3Hover_inner] = useState<"false" | "true">(props.Option3Hover ?? props.defaultOption3Hover ?? "false");
  const setOption3Hover = useCallback((v: "false" | "true") => { _setOption3Hover_inner(v); props.onOption3HoverChange?.(v); }, [props.onOption3HoverChange]);

  const _ctx: Record<string, any> = { Open: open, Size: size, State: state, Placeholder: placeholder, Option1Hover: option1Hover, Option2Hover: option2Hover, Option3Hover: option3Hover };
  return (
    <div style={({ display: "flex", flexDirection: "column", alignItems: "stretch", justifyContent: "flex-start", gap: "4px", width: "240px", height: "fit-content", flexShrink: 0, position: "relative", boxSizing: "border-box" }) as React.CSSProperties}>
      <div style={{ ...(_mergeOverrides({ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: "var(--ds-spacing-2, 8px)", paddingLeft: "var(--ds-spacing-3, 12px)", paddingRight: "var(--ds-spacing-3, 12px)", paddingTop: "0px", paddingBottom: "0px", width: "240px", height: "var(--ds-sizes-components-md, 36px)", flexShrink: 0, position: "relative", boxSizing: "border-box", background: "var(--ds-base-background, #ffffff)", color: "var(--ds-muted-foreground, #71717a)", border: `1px solid ${"var(--ds-input, #e4e4e7)"}`, borderRadius: "var(--ds-radius-md, 6px)" }, [{ selector: {"State":"focus"}, patch: { border: `2px solid ${"var(--ds-ring, #a1a1aa)"}` } }, { selector: {"State":"disabled"}, patch: { opacity: 0.5 } }, { selector: {"Size":"sm"}, patch: { borderRadius: "var(--ds-radius-md, 6px)", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: "var(--ds-spacing-2, 8px)", paddingLeft: "var(--ds-spacing-3, 12px)", paddingRight: "var(--ds-spacing-3, 12px)", paddingTop: "0px", paddingBottom: "0px", width: "240px", height: "var(--ds-sizes-components-sm, 36px)", flexShrink: 0, position: "relative", boxSizing: "border-box" } }, { selector: {"Size":"lg"}, patch: { borderRadius: "var(--ds-radius-md, 6px)", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: "var(--ds-spacing-2, 8px)", paddingLeft: "var(--ds-spacing-3, 12px)", paddingRight: "var(--ds-spacing-3, 12px)", paddingTop: "0px", paddingBottom: "0px", width: "240px", height: "var(--ds-sizes-components-lg, 36px)", flexShrink: 0, position: "relative", boxSizing: "border-box" } }], _ctx) as React.CSSProperties), cursor: "pointer" }} onClick={(e) => { e.stopPropagation(); setOpen((open as any) === true ? false as any : true as any); props.onClick?.(e); }}>
        <span style={({ color: "var(--ds-muted-foreground, #71717a)", fontFamily: `var(--ds-typography-families-sans)`, fontSize: `var(--ds-typography-scale-fontSize-sm)`, fontWeight: `var(--ds-typography-weights-regular)`, lineHeight: `var(--ds-typography-scale-lineHeight-sm)`, letterSpacing: `var(--ds-typography-scale-letterSpacing-sm)`, textAlign: "left" }) as React.CSSProperties}>{String((props.Placeholder) ?? "Select a fruit")}</span>
        <span style={{ display: "inline-flex", width: "[object Object]px", height: "[object Object]px", color: "currentColor", flexShrink: 0 } as React.CSSProperties} dangerouslySetInnerHTML={{ __html: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>` }} />
      </div>
      <div style={_mergeOverrides({ display: "none", flexDirection: "column", alignItems: "stretch", justifyContent: "flex-start", gap: "2px", paddingLeft: "var(--ds-spacing-1, 4px)", paddingRight: "var(--ds-spacing-1, 4px)", paddingTop: "var(--ds-spacing-1, 4px)", paddingBottom: "var(--ds-spacing-1, 4px)", width: "240px", height: "fit-content", flexShrink: 0, position: "relative", boxSizing: "border-box", background: "var(--ds-base-background, #ffffff)", border: `1px solid ${"var(--ds-input, #e4e4e7)"}`, borderRadius: "var(--ds-radius-md, 6px)" }, [{ selector: {"Open":true}, patch: { display: undefined } }], _ctx) as React.CSSProperties}>
        <div style={({ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "flex-start", gap: "0px", paddingLeft: "var(--ds-spacing-2, 8px)", paddingRight: "var(--ds-spacing-2, 8px)", paddingTop: "4px", paddingBottom: "4px", width: "100%", height: "fit-content", position: "relative", boxSizing: "border-box", background: "#00000000" }) as React.CSSProperties}>
          <span style={({ color: "var(--ds-muted-foreground, #71717a)", fontFamily: `var(--ds-typography-families-sans)`, fontSize: `var(--ds-typography-scale-fontSize-xs)`, fontWeight: `var(--ds-typography-weights-regular)`, lineHeight: `var(--ds-typography-scale-lineHeight-xs)`, letterSpacing: `var(--ds-typography-scale-letterSpacing-xs)`, textAlign: "left" }) as React.CSSProperties}>{"Fruits"}</span>
        </div>
        <div style={_mergeOverrides({ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "flex-start", gap: "var(--ds-spacing-2, 8px)", paddingLeft: "var(--ds-spacing-2, 8px)", paddingRight: "var(--ds-spacing-2, 8px)", paddingTop: "6px", paddingBottom: "6px", width: "100%", height: "fit-content", position: "relative", boxSizing: "border-box", background: "var(--ds-accent-default, #f4f4f5)", borderRadius: "var(--ds-radius-sm, 4px)" }, [{ selector: {"Option1Hover":"true"}, patch: { background: "var(--ds-accent-default, #f4f4f5)" } }], _ctx) as React.CSSProperties} onMouseEnter={() => setOption1Hover("true" as any)} onMouseLeave={() => setOption1Hover("false" as any)}>
          <span style={_mergeOverrides({ color: "var(--ds-accent-foreground, #18181b)", fontFamily: `var(--ds-typography-families-sans)`, fontSize: `var(--ds-typography-scale-fontSize-sm)`, fontWeight: `var(--ds-typography-weights-regular)`, lineHeight: `var(--ds-typography-scale-lineHeight-sm)`, letterSpacing: `var(--ds-typography-scale-letterSpacing-sm)`, textAlign: "left" }, [{ selector: {"Option1Hover":"true"}, patch: { color: "var(--ds-accent-foreground, #18181b)" } }], _ctx) as React.CSSProperties}>{"Apple"}</span>
        </div>
        <div style={_mergeOverrides({ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "flex-start", gap: "var(--ds-spacing-2, 8px)", paddingLeft: "var(--ds-spacing-2, 8px)", paddingRight: "var(--ds-spacing-2, 8px)", paddingTop: "6px", paddingBottom: "6px", width: "100%", height: "fit-content", position: "relative", boxSizing: "border-box", background: "#00000000", borderRadius: "var(--ds-radius-sm, 4px)" }, [{ selector: {"Option2Hover":"true"}, patch: { background: "var(--ds-accent-default, #f4f4f5)" } }], _ctx) as React.CSSProperties} onMouseEnter={() => setOption2Hover("true" as any)} onMouseLeave={() => setOption2Hover("false" as any)}>
          <span style={_mergeOverrides({ color: "var(--ds-base-foreground, #09090b)", fontFamily: `var(--ds-typography-families-sans)`, fontSize: `var(--ds-typography-scale-fontSize-sm)`, fontWeight: `var(--ds-typography-weights-regular)`, lineHeight: `var(--ds-typography-scale-lineHeight-sm)`, letterSpacing: `var(--ds-typography-scale-letterSpacing-sm)`, textAlign: "left" }, [{ selector: {"Option2Hover":"true"}, patch: { color: "var(--ds-accent-foreground, #18181b)" } }], _ctx) as React.CSSProperties}>{"Banana"}</span>
        </div>
        <div style={_mergeOverrides({ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "flex-start", gap: "var(--ds-spacing-2, 8px)", paddingLeft: "var(--ds-spacing-2, 8px)", paddingRight: "var(--ds-spacing-2, 8px)", paddingTop: "6px", paddingBottom: "6px", width: "100%", height: "fit-content", position: "relative", boxSizing: "border-box", background: "#00000000", borderRadius: "var(--ds-radius-sm, 4px)" }, [{ selector: {"Option3Hover":"true"}, patch: { background: "var(--ds-accent-default, #f4f4f5)" } }], _ctx) as React.CSSProperties} onMouseEnter={() => setOption3Hover("true" as any)} onMouseLeave={() => setOption3Hover("false" as any)}>
          <span style={_mergeOverrides({ color: "var(--ds-base-foreground, #09090b)", fontFamily: `var(--ds-typography-families-sans)`, fontSize: `var(--ds-typography-scale-fontSize-sm)`, fontWeight: `var(--ds-typography-weights-regular)`, lineHeight: `var(--ds-typography-scale-lineHeight-sm)`, letterSpacing: `var(--ds-typography-scale-letterSpacing-sm)`, textAlign: "left" }, [{ selector: {"Option3Hover":"true"}, patch: { color: "var(--ds-accent-foreground, #18181b)" } }], _ctx) as React.CSSProperties}>{"Blueberry"}</span>
        </div>
      </div>
    </div>
  );
}

export default Select;
