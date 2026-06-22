// Auto-generated from the DS Foundations Engine.
// Component: Card  (category: shadcn)
// Description: shadcn/ui Card. Rounded surface (card bg + border hairline) with a header (title + description), content, and an optional footer row embedding real outline + default Button instances. Fully bound to shadcn semantic tokens.
//
// Tokens are referenced as CSS variables — make sure to import the
// accompanying tokens.css somewhere in your app:
//   import "./tokens.css";

import React, { useCallback, useState } from "react";

import { Button } from "./Button";
import { Input } from "./Input";
import { Label } from "./Label";

export interface CardProps {
  /** Standard click handler. Fires AFTER any internal state updates. */
  onClick?: (e: React.MouseEvent) => void;
  /** Default: "Create project" */
  Title?: string;
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

export function Card(props: CardProps = {}) {
  // Normalize defaults so override selectors have something to match.
  // Props listed in `interactivity` get a useState so click / hover /
  // drag handlers can mutate them. The rest stay as derived consts.
  const title = props.Title ?? "Create project";

  const _ctx: Record<string, any> = { Title: title };
  return (
    <div style={({ display: "flex", flexDirection: "column", alignItems: "stretch", justifyContent: "flex-start", gap: "var(--ds-spacing-6, 24px)", paddingLeft: "var(--ds-spacing-6, 24px)", paddingRight: "var(--ds-spacing-6, 24px)", paddingTop: "var(--ds-spacing-6, 24px)", paddingBottom: "var(--ds-spacing-6, 24px)", width: "360px", height: "fit-content", flexShrink: 0, position: "relative", boxSizing: "border-box", background: "var(--ds-card-default, #ffffff)", border: `1px solid ${"var(--ds-border, #e4e4e7)"}`, borderRadius: "var(--ds-radius-lg, 8px)" }) as React.CSSProperties}>
      <div style={({ display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "flex-start", gap: "var(--ds-spacing-1, 4px)", width: "100%", position: "relative", boxSizing: "border-box" }) as React.CSSProperties}>
        <span style={({ color: "var(--ds-card-foreground, #09090b)", fontFamily: `var(--ds-typography-families-sans)`, fontSize: `var(--ds-typography-scale-fontSize-2xl)`, fontWeight: `var(--ds-typography-weights-semibold)`, lineHeight: `var(--ds-typography-scale-lineHeight-2xl)`, letterSpacing: `var(--ds-typography-scale-letterSpacing-2xl)` }) as React.CSSProperties}>{String((props.Title) ?? "Create project")}</span>
        <span style={({ color: "var(--ds-muted-foreground, #71717a)", fontFamily: `var(--ds-typography-families-sans)`, fontSize: `var(--ds-typography-scale-fontSize-sm)`, fontWeight: `var(--ds-typography-weights-regular)`, lineHeight: `var(--ds-typography-scale-lineHeight-sm)`, letterSpacing: `var(--ds-typography-scale-letterSpacing-sm)` }) as React.CSSProperties}>{"Deploy your new project in one-click."}</span>
        <span style={{ display: "inline-flex" } as React.CSSProperties}>
          <Button Size="sm" State="default" Variant="link" Label="Sign Up" />
        </span>
      </div>
      <div style={({ display: "flex", flexDirection: "column", alignItems: "stretch", justifyContent: "flex-start", gap: "var(--ds-spacing-6, 24px)", width: "100%", height: "fit-content", position: "relative", boxSizing: "border-box" }) as React.CSSProperties}>
        <div style={({ display: "flex", flexDirection: "column", alignItems: "stretch", justifyContent: "flex-start", gap: "var(--ds-spacing-2, 16px)", width: "100%", height: "fit-content", position: "relative", boxSizing: "border-box" }) as React.CSSProperties}>
          <span style={{ flex: "1 1 0px", display: "flex", flexDirection: "column", alignItems: "stretch", minWidth: 0 } as React.CSSProperties}>
            <Label Label="Email" />
          </span>
          <span style={{ flex: "1 1 0px", display: "flex", flexDirection: "column", alignItems: "stretch", minWidth: 0 } as React.CSSProperties}>
            <Input />
          </span>
        </div>
        <div style={({ display: "flex", flexDirection: "column", alignItems: "stretch", justifyContent: "flex-start", gap: "var(--ds-spacing-2, 16px)", width: "100%", height: "fit-content", position: "relative", boxSizing: "border-box" }) as React.CSSProperties}>
          <div style={({ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", width: "100%", height: "fit-content", position: "relative", boxSizing: "border-box" }) as React.CSSProperties}>
            <span style={{ display: "inline-flex" } as React.CSSProperties}>
              <Label Label="Password" />
            </span>
            <span style={({ color: "var(--ds-card-foreground, #09090b)", fontFamily: `var(--ds-typography-families-sans)`, fontSize: `var(--ds-typography-scale-fontSize-sm)`, fontWeight: `var(--ds-typography-weights-regular)`, lineHeight: `var(--ds-typography-scale-lineHeight-sm)`, letterSpacing: `var(--ds-typography-scale-letterSpacing-sm)` }) as React.CSSProperties}>{"Forgot your password?"}</span>
          </div>
          <span style={{ flex: "1 1 0px", display: "flex", flexDirection: "column", alignItems: "stretch", minWidth: 0 } as React.CSSProperties}>
            <Input />
          </span>
        </div>
      </div>
      <div style={({ display: "flex", flexDirection: "column", alignItems: "stretch", justifyContent: "flex-start", paddingLeft: "var(--ds-spacing-6, 24px)", paddingRight: "var(--ds-spacing-6, 24px)", paddingTop: "var(--ds-spacing-6, 24px)", paddingBottom: "var(--ds-spacing-6, 24px)", width: "100%", position: "relative", boxSizing: "border-box", background: "var(--ds-muted-default, #f4f4f5)", border: `1px solid ${"var(--ds-border, #e4e4e7)"}` }) as React.CSSProperties}>
        <span style={{ flex: "1 1 0px", display: "flex", flexDirection: "column", alignItems: "stretch", minWidth: 0 } as React.CSSProperties}>
          <Button Size="md" State="default" Variant="default" Label="Login" />
        </span>
        <span style={{ flex: "1 1 0px", display: "flex", flexDirection: "column", alignItems: "stretch", minWidth: 0 } as React.CSSProperties}>
          <Button Size="md" State="default" Variant="outline" Label="Login with Google" />
        </span>
      </div>
    </div>
  );
}

export default Card;
