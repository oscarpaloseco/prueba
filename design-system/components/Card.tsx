// Auto-generated from the DS Foundations Engine.
// Component: Card  (category: Containers)
// Description: Spectrum-inspired card. Vertical or horizontal layout, 3 sizes (with title/subtitle/body/footer typography scaling per size), 3 variants (accent flips text + primary button to readable inverse), optional avatar overlay, full-width preview image with configurable height, 0/1/2 right-aligned action buttons, optional hairline-divided footer below the content row.
//
// Tokens are referenced as CSS variables — make sure to import the
// accompanying tokens.css somewhere in your app:
//   import "./tokens.css";

import React, { useCallback, useState } from "react";

import { Avatar } from "./Avatar";
import { Button } from "./Button";

export interface CardProps {
  /** Standard click handler. Fires AFTER any internal state updates. */
  onClick?: (e: React.MouseEvent) => void;
  /** Variant. Default: "sm" */
  Size?: "sm" | "md" | "lg";
  /** Variant. Default: "shown" */
  Image?: "shown" | "hidden";
  /** Variant. Default: "bordered" */
  Border?: "bordered" | "borderless";
  /** Variant. Default: "vertical" */
  Layout?: "vertical" | "horizontal";
  /** Variant. Default: "default" */
  Variant?: "default" | "subtle" | "accent";
  /** Default: "Body copy describes the card content with a couple of lines of context." */
  BodyText?: string;
  /** Default: "Footer note" */
  FooterText?: string;
  /** Default: false */
  ShowAvatar?: boolean;
  /** Default: false */
  ShowFooter?: boolean;
  /** Default: true */
  ShowHeader?: boolean;
  /** Default: "Card title" */
  HeaderTitle?: string;
  /** Variant. Default: "top" */
  ImagePosition?: "top" | "bottom" | "left" | "right";
  /** Default: "5 min · Updated today" */
  HeaderSubtitle?: string;
  /** Default: true */
  ShowActionButton?: boolean;
  /** Default: false */
  ShowSecondaryButton?: boolean;
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
  const size = props.Size ?? "sm";
  const image = props.Image ?? "shown";
  const border = props.Border ?? "bordered";
  const layout = props.Layout ?? "vertical";
  const variant = props.Variant ?? "default";
  const bodyText = props.BodyText ?? "Body copy describes the card content with a couple of lines of context.";
  const footerText = props.FooterText ?? "Footer note";
  const showAvatar = props.ShowAvatar ?? false;
  const showFooter = props.ShowFooter ?? false;
  const showHeader = props.ShowHeader ?? true;
  const headerTitle = props.HeaderTitle ?? "Card title";
  const imagePosition = props.ImagePosition ?? "top";
  const headerSubtitle = props.HeaderSubtitle ?? "5 min · Updated today";
  const showActionButton = props.ShowActionButton ?? true;
  const showSecondaryButton = props.ShowSecondaryButton ?? false;

  const _ctx: Record<string, any> = { Size: size, Image: image, Border: border, Layout: layout, Variant: variant, BodyText: bodyText, FooterText: footerText, ShowAvatar: showAvatar, ShowFooter: showFooter, ShowHeader: showHeader, HeaderTitle: headerTitle, ImagePosition: imagePosition, HeaderSubtitle: headerSubtitle, ShowActionButton: showActionButton, ShowSecondaryButton: showSecondaryButton };
  return (
    <section style={_mergeOverrides({ display: "flex", flexDirection: "column", alignItems: "stretch", justifyContent: "flex-start", gap: "0px", width: "280px", height: "fit-content", flexShrink: 0, position: "relative", boxSizing: "border-box", background: "var(--repeat-surfaceDefault, transparent)", border: `1px solid ${"var(--repeat-borderSubtle, #e5e7eb)"}`, borderRadius: "var(--repeat-radiusMd, 8px)" }, [{ selector: {"Size":"sm","Layout":"vertical"}, patch: { display: "flex", flexDirection: "column", alignItems: "stretch", justifyContent: "flex-start", gap: "0px", width: "280px", height: "fit-content", flexShrink: 0, position: "relative", boxSizing: "border-box" } }, { selector: {"Size":"sm","Layout":"horizontal"}, patch: { display: "flex", flexDirection: "column", alignItems: "stretch", justifyContent: "flex-start", gap: "0px", width: "392px", height: "fit-content", flexShrink: 0, position: "relative", boxSizing: "border-box" } }, { selector: {"Size":"md","Layout":"vertical"}, patch: { display: "flex", flexDirection: "column", alignItems: "stretch", justifyContent: "flex-start", gap: "0px", width: "360px", height: "fit-content", flexShrink: 0, position: "relative", boxSizing: "border-box" } }, { selector: {"Size":"md","Layout":"horizontal"}, patch: { display: "flex", flexDirection: "column", alignItems: "stretch", justifyContent: "flex-start", gap: "0px", width: "504px", height: "fit-content", flexShrink: 0, position: "relative", boxSizing: "border-box" } }, { selector: {"Size":"lg","Layout":"vertical"}, patch: { display: "flex", flexDirection: "column", alignItems: "stretch", justifyContent: "flex-start", gap: "0px", width: "440px", height: "fit-content", flexShrink: 0, position: "relative", boxSizing: "border-box" } }, { selector: {"Size":"lg","Layout":"horizontal"}, patch: { display: "flex", flexDirection: "column", alignItems: "stretch", justifyContent: "flex-start", gap: "0px", width: "616px", height: "fit-content", flexShrink: 0, position: "relative", boxSizing: "border-box" } }, { selector: {"Variant":"subtle"}, patch: { background: "var(--repeat-surfaceSubtle, transparent)" } }, { selector: {"Variant":"accent"}, patch: { background: "var(--repeat-surfaceAccent, transparent)" } }, { selector: {"Border":"bordered"}, patch: { border: `1px solid ${"var(--repeat-borderSubtle, #e5e7eb)"}` } }, { selector: {"Border":"borderless"}, patch: {  } }], _ctx) as React.CSSProperties}>
      <div style={_mergeOverrides({ display: "flex", flexDirection: "column", alignItems: "stretch", justifyContent: "flex-start", width: "100%", height: "fit-content", position: "relative", boxSizing: "border-box", background: "#00000000" }, [{ selector: {"Size":"sm","Layout":"horizontal"}, patch: { display: "flex", flexDirection: "row", alignItems: "flex-start", justifyContent: "flex-start", width: "100%", height: "fit-content", position: "relative", boxSizing: "border-box" } }, { selector: {"Size":"md","Layout":"horizontal"}, patch: { display: "flex", flexDirection: "row", alignItems: "flex-start", justifyContent: "flex-start", width: "100%", height: "fit-content", position: "relative", boxSizing: "border-box" } }, { selector: {"Size":"lg","Layout":"horizontal"}, patch: { display: "flex", flexDirection: "row", alignItems: "flex-start", justifyContent: "flex-start", width: "100%", height: "fit-content", position: "relative", boxSizing: "border-box" } }, { selector: {"Layout":"vertical"}, patch: { display: "flex", flexDirection: "column", alignItems: "stretch", justifyContent: "flex-start", width: "100%", height: "fit-content", position: "relative", boxSizing: "border-box" } }], _ctx) as React.CSSProperties}>
        <div style={_mergeOverrides({ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", width: "100%", height: "var(--repeat-sizesScale8xl, 96px)", flexShrink: 0, position: "relative", boxSizing: "border-box", background: "#e7e7ea", color: "#71717a" }, [{ selector: {"Layout":"vertical","ImagePosition":"top"}, patch: { display: undefined } }, { selector: {"Layout":"vertical","ImagePosition":"bottom"}, patch: { display: "none" } }, { selector: {"Layout":"vertical","ImagePosition":"left"}, patch: { display: undefined } }, { selector: {"Layout":"vertical","ImagePosition":"right"}, patch: { display: undefined } }, { selector: {"Layout":"horizontal","ImagePosition":"top"}, patch: { display: undefined } }, { selector: {"Layout":"horizontal","ImagePosition":"bottom"}, patch: { display: undefined } }, { selector: {"Layout":"horizontal","ImagePosition":"left"}, patch: { display: undefined } }, { selector: {"Layout":"horizontal","ImagePosition":"right"}, patch: { display: "none" } }, { selector: {"Size":"sm","Layout":"horizontal"}, patch: { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", width: "var(--repeat-sizesScale8xl, 96px)", height: "100%", flexShrink: 0, position: "relative", boxSizing: "border-box" } }, { selector: {"Size":"sm","Layout":"vertical"}, patch: { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", width: "100%", height: "var(--repeat-sizesScale8xl, 96px)", flexShrink: 0, position: "relative", boxSizing: "border-box" } }, { selector: {"Size":"md","Layout":"horizontal"}, patch: { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", width: "var(--repeat-sizesScale10xl, 160px)", height: "100%", flexShrink: 0, position: "relative", boxSizing: "border-box" } }, { selector: {"Size":"md","Layout":"vertical"}, patch: { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", width: "100%", height: "var(--repeat-sizesScale10xl, 160px)", flexShrink: 0, position: "relative", boxSizing: "border-box" } }, { selector: {"Size":"lg","Layout":"horizontal"}, patch: { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", width: "var(--repeat-sizesScale12xl, 256px)", height: "100%", flexShrink: 0, position: "relative", boxSizing: "border-box" } }, { selector: {"Size":"lg","Layout":"vertical"}, patch: { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", width: "100%", height: "var(--repeat-sizesScale12xl, 240px)", flexShrink: 0, position: "relative", boxSizing: "border-box" } }, { selector: {"Image":"hidden"}, patch: { display: "none" } }], _ctx) as React.CSSProperties}>
          <span style={{ display: "inline-flex", width: "64px", height: "64px", color: "currentColor", flexShrink: 0 } as React.CSSProperties} dangerouslySetInnerHTML={{ __html: `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.4" opacity="0.55">
  <rect x="6" y="14" width="52" height="38" rx="4"/>
  <path d="M22 14 L26 8 L38 8 L42 14"/>
  <circle cx="32" cy="34" r="10"/>
</svg>` }} />
        </div>
        <div style={_mergeOverrides({ display: "flex", flexDirection: "column", alignItems: "stretch", justifyContent: "flex-start", gap: "var(--repeat-spacingXs, 10px)", paddingLeft: "var(--repeat-spacingSm, 16px)", paddingRight: "var(--repeat-spacingSm, 16px)", paddingTop: "16px", paddingBottom: "var(--repeat-spacingSm, 16px)", width: "100%", height: "fit-content", position: "relative", boxSizing: "border-box", background: "#00000000" }, [{ selector: {"Size":"sm","Layout":"vertical","ShowAvatar":true}, patch: { display: "flex", flexDirection: "column", alignItems: "stretch", justifyContent: "flex-start", gap: "var(--repeat-spacingXs, 10px)", paddingLeft: "var(--repeat-spacingSm, 16px)", paddingRight: "var(--repeat-spacingSm, 16px)", paddingTop: "30px", paddingBottom: "var(--repeat-spacingSm, 16px)", width: "100%", height: "fit-content", position: "relative", boxSizing: "border-box" } }, { selector: {"Size":"md","Layout":"vertical","ShowAvatar":true}, patch: { display: "flex", flexDirection: "column", alignItems: "stretch", justifyContent: "flex-start", gap: "var(--repeat-spacingSm, 14px)", paddingLeft: "var(--repeat-spacingMd, 20px)", paddingRight: "var(--repeat-spacingMd, 20px)", paddingTop: "46px", paddingBottom: "var(--repeat-spacingMd, 20px)", width: "100%", height: "fit-content", position: "relative", boxSizing: "border-box" } }, { selector: {"Size":"lg","Layout":"vertical","ShowAvatar":true}, patch: { display: "flex", flexDirection: "column", alignItems: "stretch", justifyContent: "flex-start", gap: "var(--repeat-spacingMd, 18px)", paddingLeft: "var(--repeat-spacingLg, 24px)", paddingRight: "var(--repeat-spacingLg, 24px)", paddingTop: "46px", paddingBottom: "var(--repeat-spacingLg, 24px)", width: "100%", height: "fit-content", position: "relative", boxSizing: "border-box" } }, { selector: {"Size":"sm","Layout":"horizontal"}, patch: { display: "flex", flexDirection: "column", alignItems: "stretch", justifyContent: "flex-start", gap: "var(--repeat-spacingXs, 10px)", paddingLeft: "var(--repeat-spacingSm, 16px)", paddingRight: "var(--repeat-spacingSm, 16px)", paddingTop: "16px", paddingBottom: "var(--repeat-spacingSm, 16px)", width: "100%", height: "100%", position: "relative", boxSizing: "border-box" } }, { selector: {"Size":"md","Layout":"horizontal"}, patch: { display: "flex", flexDirection: "column", alignItems: "stretch", justifyContent: "flex-start", gap: "var(--repeat-spacingSm, 14px)", paddingLeft: "var(--repeat-spacingMd, 20px)", paddingRight: "var(--repeat-spacingMd, 20px)", paddingTop: "20px", paddingBottom: "var(--repeat-spacingMd, 20px)", width: "100%", height: "100%", position: "relative", boxSizing: "border-box" } }, { selector: {"Size":"lg","Layout":"horizontal"}, patch: { display: "flex", flexDirection: "column", alignItems: "stretch", justifyContent: "flex-start", gap: "var(--repeat-spacingMd, 18px)", paddingLeft: "var(--repeat-spacingLg, 24px)", paddingRight: "var(--repeat-spacingLg, 24px)", paddingTop: "24px", paddingBottom: "var(--repeat-spacingLg, 24px)", width: "100%", height: "100%", position: "relative", boxSizing: "border-box" } }, { selector: {"Size":"sm","Layout":"vertical","ShowAvatar":false}, patch: { display: "flex", flexDirection: "column", alignItems: "stretch", justifyContent: "flex-start", gap: "var(--repeat-spacingXs, 10px)", paddingLeft: "var(--repeat-spacingSm, 16px)", paddingRight: "var(--repeat-spacingSm, 16px)", paddingTop: "16px", paddingBottom: "var(--repeat-spacingSm, 16px)", width: "100%", height: "fit-content", position: "relative", boxSizing: "border-box" } }, { selector: {"Size":"md","Layout":"vertical","ShowAvatar":false}, patch: { display: "flex", flexDirection: "column", alignItems: "stretch", justifyContent: "flex-start", gap: "var(--repeat-spacingSm, 14px)", paddingLeft: "var(--repeat-spacingMd, 20px)", paddingRight: "var(--repeat-spacingMd, 20px)", paddingTop: "20px", paddingBottom: "var(--repeat-spacingMd, 20px)", width: "100%", height: "fit-content", position: "relative", boxSizing: "border-box" } }, { selector: {"Size":"lg","Layout":"vertical","ShowAvatar":false}, patch: { display: "flex", flexDirection: "column", alignItems: "stretch", justifyContent: "flex-start", gap: "var(--repeat-spacingMd, 18px)", paddingLeft: "var(--repeat-spacingLg, 24px)", paddingRight: "var(--repeat-spacingLg, 24px)", paddingTop: "24px", paddingBottom: "var(--repeat-spacingLg, 24px)", width: "100%", height: "fit-content", position: "relative", boxSizing: "border-box" } }, { selector: {"Size":"sm","Image":"hidden","Layout":"vertical"}, patch: { display: "flex", flexDirection: "column", alignItems: "stretch", justifyContent: "flex-start", gap: "var(--repeat-spacingXs, 10px)", paddingLeft: "var(--repeat-spacingSm, 16px)", paddingRight: "var(--repeat-spacingSm, 16px)", paddingTop: "16px", paddingBottom: "var(--repeat-spacingSm, 16px)", width: "100%", height: "fit-content", position: "relative", boxSizing: "border-box" } }, { selector: {"Size":"md","Image":"hidden","Layout":"vertical"}, patch: { display: "flex", flexDirection: "column", alignItems: "stretch", justifyContent: "flex-start", gap: "var(--repeat-spacingSm, 14px)", paddingLeft: "var(--repeat-spacingMd, 20px)", paddingRight: "var(--repeat-spacingMd, 20px)", paddingTop: "20px", paddingBottom: "var(--repeat-spacingMd, 20px)", width: "100%", height: "fit-content", position: "relative", boxSizing: "border-box" } }, { selector: {"Size":"lg","Image":"hidden","Layout":"vertical"}, patch: { display: "flex", flexDirection: "column", alignItems: "stretch", justifyContent: "flex-start", gap: "var(--repeat-spacingMd, 18px)", paddingLeft: "var(--repeat-spacingLg, 24px)", paddingRight: "var(--repeat-spacingLg, 24px)", paddingTop: "24px", paddingBottom: "var(--repeat-spacingLg, 24px)", width: "100%", height: "fit-content", position: "relative", boxSizing: "border-box" } }], _ctx) as React.CSSProperties}>
          {((_ctx.ShowAvatar === true)) && (
          <div style={_mergeOverrides({ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "flex-start", width: "100%", height: "14px", flexShrink: 0, position: "relative", boxSizing: "border-box", background: "#00000000" }, [{ selector: {"Size":"sm"}, patch: { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "flex-start", width: "100%", height: "14px", flexShrink: 0, position: "relative", boxSizing: "border-box" } }, { selector: {"Size":"md"}, patch: { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "flex-start", width: "100%", height: "26px", flexShrink: 0, position: "relative", boxSizing: "border-box" } }, { selector: {"Size":"lg"}, patch: { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "flex-start", width: "100%", height: "22px", flexShrink: 0, position: "relative", boxSizing: "border-box" } }, { selector: {"Layout":"horizontal"}, patch: { display: "none" } }, { selector: {"Layout":"vertical"}, patch: { display: undefined } }, { selector: {"Image":"hidden","Layout":"vertical"}, patch: { display: "none" } }, { selector: {"ShowAvatar":false}, patch: { display: "none" } }], _ctx) as React.CSSProperties}>
          
          </div>
          )}
          {((_ctx.ShowAvatar === true)) && (
          <div style={_mergeOverrides({ display: "none", flexDirection: "row", alignItems: "center", justifyContent: "flex-start", width: "fit-content", height: "fit-content", position: "relative", boxSizing: "border-box", background: "#00000000" }, [{ selector: {"Layout":"horizontal"}, patch: { display: undefined } }, { selector: {"Layout":"vertical"}, patch: { display: "none" } }, { selector: {"Image":"hidden","Layout":"vertical"}, patch: { display: undefined } }, { selector: {"ShowAvatar":false}, patch: { display: "none" } }], _ctx) as React.CSSProperties}>
            <span style={{ display: "inline-flex" } as React.CSSProperties}>
              <Avatar Size="lg" />
            </span>
          </div>
          )}
          {((_ctx.ShowHeader === true)) && (
          <header style={({ display: "flex", flexDirection: "column", alignItems: "stretch", justifyContent: "flex-start", gap: "4px", width: "100%", height: "fit-content", position: "relative", boxSizing: "border-box", background: "#00000000" }) as React.CSSProperties}>
            <span style={_mergeOverrides({ color: "var(--repeat-contentDefault, transparent)", fontFamily: `var(--repeat-typographyFamiliesSans)`, fontSize: `var(--repeat-typographyScaleFontSize300)`, fontWeight: `var(--repeat-typographyWeightsSemibold)`, lineHeight: `var(--repeat-typographyScaleLineHeight300)`, letterSpacing: `var(--repeat-typographyScaleLetterSpacing300)`, textAlign: "left", flex: "1 1 auto" }, [{ selector: {"Size":"sm"}, patch: { fontFamily: `var(--repeat-typographyRolesBodyStepsSmSemibold-fontFamily, ui-sans-serif)`, fontSize: `var(--repeat-typographyRolesBodyStepsSmSemibold-fontSize, 14px)`, fontWeight: `var(--repeat-typographyRolesBodyStepsSmSemibold-fontWeight, 400)`, lineHeight: `var(--repeat-typographyRolesBodyStepsSmSemibold-lineHeight, 1.4)` } }, { selector: {"Size":"md"}, patch: { fontFamily: `var(--repeat-typographyRolesBodyStepsMdSemibold-fontFamily, ui-sans-serif)`, fontSize: `var(--repeat-typographyRolesBodyStepsMdSemibold-fontSize, 14px)`, fontWeight: `var(--repeat-typographyRolesBodyStepsMdSemibold-fontWeight, 400)`, lineHeight: `var(--repeat-typographyRolesBodyStepsMdSemibold-lineHeight, 1.4)` } }, { selector: {"Size":"lg"}, patch: { fontFamily: `var(--repeat-typographyRolesHeadingsStepsH5-fontFamily, ui-sans-serif)`, fontSize: `var(--repeat-typographyRolesHeadingsStepsH5-fontSize, 14px)`, fontWeight: `var(--repeat-typographyRolesHeadingsStepsH5-fontWeight, 400)`, lineHeight: `var(--repeat-typographyRolesHeadingsStepsH5-lineHeight, 1.4)` } }, { selector: {"Variant":"accent"}, patch: { color: "var(--repeat-contentOnAccent, transparent)" } }], _ctx) as React.CSSProperties}>{String((props.HeaderTitle) ?? "Card title")}</span>
            <span style={_mergeOverrides({ color: "var(--repeat-contentMuted, transparent)", fontFamily: `var(--repeat-typographyFamiliesSans)`, fontSize: `var(--repeat-typographyScaleFontSize250)`, fontWeight: `var(--repeat-typographyWeightsRegular)`, lineHeight: `var(--repeat-typographyScaleLineHeight250)`, letterSpacing: `var(--repeat-typographyScaleLetterSpacing300)`, textAlign: "left", flex: "1 1 auto" }, [{ selector: {"Size":"sm"}, patch: { fontFamily: `var(--repeat-typographyRolesBodyStepsXs-fontFamily, ui-sans-serif)`, fontSize: `var(--repeat-typographyRolesBodyStepsXs-fontSize, 14px)`, fontWeight: `var(--repeat-typographyRolesBodyStepsXs-fontWeight, 400)`, lineHeight: `var(--repeat-typographyRolesBodyStepsXs-lineHeight, 1.4)` } }, { selector: {"Size":"md"}, patch: { fontFamily: `var(--repeat-typographyRolesBodyStepsXs-fontFamily, ui-sans-serif)`, fontSize: `var(--repeat-typographyRolesBodyStepsXs-fontSize, 14px)`, fontWeight: `var(--repeat-typographyRolesBodyStepsXs-fontWeight, 400)`, lineHeight: `var(--repeat-typographyRolesBodyStepsXs-lineHeight, 1.4)` } }, { selector: {"Size":"lg"}, patch: { fontFamily: `var(--repeat-typographyRolesBodyStepsSm-fontFamily, ui-sans-serif)`, fontSize: `var(--repeat-typographyRolesBodyStepsSm-fontSize, 14px)`, fontWeight: `var(--repeat-typographyRolesBodyStepsSm-fontWeight, 400)`, lineHeight: `var(--repeat-typographyRolesBodyStepsSm-lineHeight, 1.4)` } }, { selector: {"Variant":"accent"}, patch: { color: "var(--repeat-contentOnAccent, transparent)" } }], _ctx) as React.CSSProperties}>{String((props.HeaderSubtitle) ?? "5 min · Updated today")}</span>
          </header>
          )}
          <span style={_mergeOverrides({ color: "var(--repeat-contentDefault, transparent)", fontFamily: `var(--repeat-typographyFamiliesSans)`, fontSize: `var(--repeat-typographyScaleFontSize250)`, fontWeight: `var(--repeat-typographyWeightsRegular)`, lineHeight: `var(--repeat-typographyScaleLineHeight250)`, letterSpacing: `var(--repeat-typographyScaleLetterSpacing300)`, textAlign: "left", flex: "1 1 auto" }, [{ selector: {"Size":"sm"}, patch: { fontFamily: `var(--repeat-typographyRolesBodyStepsXs-fontFamily, ui-sans-serif)`, fontSize: `var(--repeat-typographyRolesBodyStepsXs-fontSize, 14px)`, fontWeight: `var(--repeat-typographyRolesBodyStepsXs-fontWeight, 400)`, lineHeight: `var(--repeat-typographyRolesBodyStepsXs-lineHeight, 1.4)` } }, { selector: {"Size":"md"}, patch: { fontFamily: `var(--repeat-typographyRolesBodyStepsSm-fontFamily, ui-sans-serif)`, fontSize: `var(--repeat-typographyRolesBodyStepsSm-fontSize, 14px)`, fontWeight: `var(--repeat-typographyRolesBodyStepsSm-fontWeight, 400)`, lineHeight: `var(--repeat-typographyRolesBodyStepsSm-lineHeight, 1.4)` } }, { selector: {"Size":"lg"}, patch: { fontFamily: `var(--repeat-typographyRolesBodyStepsMd-fontFamily, ui-sans-serif)`, fontSize: `var(--repeat-typographyRolesBodyStepsMd-fontSize, 14px)`, fontWeight: `var(--repeat-typographyRolesBodyStepsMd-fontWeight, 400)`, lineHeight: `var(--repeat-typographyRolesBodyStepsMd-lineHeight, 1.4)` } }, { selector: {"Variant":"accent"}, patch: { color: "var(--repeat-contentOnAccent, transparent)" } }], _ctx) as React.CSSProperties}>{String((props.BodyText) ?? "Body copy describes the card content with a couple of lines of context.")}</span>
          <div style={({ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "flex-end", gap: "8px", paddingTop: "4px", width: "100%", height: "fit-content", position: "relative", boxSizing: "border-box", background: "#00000000" }) as React.CSSProperties}>
            {((_ctx.ShowSecondaryButton === true)) && (
            <div style={({ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "flex-start", width: "fit-content", height: "fit-content", position: "relative", boxSizing: "border-box", background: "#00000000" }) as React.CSSProperties}>
              <span style={{ display: "inline-flex" } as React.CSSProperties}>
                <Button Size="sm" Type="ghost" Label="Cancel" />
              </span>
            </div>
            )}
            {((_ctx.ShowActionButton === true)) && (
            <div style={({ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "flex-start", width: "fit-content", height: "fit-content", position: "relative", boxSizing: "border-box", background: "#00000000" }) as React.CSSProperties}>
              <span style={{ display: "inline-flex" } as React.CSSProperties}>
                <Button Size="sm" Type="primary" Label="Action" />
              </span>
            </div>
            )}
          </div>
        </div>
        <div style={_mergeOverrides({ display: "none", flexDirection: "row", alignItems: "center", justifyContent: "center", width: "100%", height: "var(--repeat-sizesScale8xl, 96px)", flexShrink: 0, position: "relative", boxSizing: "border-box", background: "#e7e7ea", color: "#71717a" }, [{ selector: {"Layout":"vertical","ImagePosition":"top"}, patch: { display: "none" } }, { selector: {"Layout":"vertical","ImagePosition":"bottom"}, patch: { display: undefined } }, { selector: {"Layout":"vertical","ImagePosition":"left"}, patch: { display: "none" } }, { selector: {"Layout":"vertical","ImagePosition":"right"}, patch: { display: "none" } }, { selector: {"Layout":"horizontal","ImagePosition":"top"}, patch: { display: "none" } }, { selector: {"Layout":"horizontal","ImagePosition":"bottom"}, patch: { display: "none" } }, { selector: {"Layout":"horizontal","ImagePosition":"left"}, patch: { display: "none" } }, { selector: {"Layout":"horizontal","ImagePosition":"right"}, patch: { display: undefined } }, { selector: {"Size":"sm","Layout":"horizontal"}, patch: { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", width: "var(--repeat-sizesScale8xl, 96px)", height: "100%", flexShrink: 0, position: "relative", boxSizing: "border-box" } }, { selector: {"Size":"sm","Layout":"vertical"}, patch: { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", width: "100%", height: "var(--repeat-sizesScale8xl, 96px)", flexShrink: 0, position: "relative", boxSizing: "border-box" } }, { selector: {"Size":"md","Layout":"horizontal"}, patch: { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", width: "var(--repeat-sizesScale10xl, 160px)", height: "100%", flexShrink: 0, position: "relative", boxSizing: "border-box" } }, { selector: {"Size":"md","Layout":"vertical"}, patch: { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", width: "100%", height: "var(--repeat-sizesScale10xl, 160px)", flexShrink: 0, position: "relative", boxSizing: "border-box" } }, { selector: {"Size":"lg","Layout":"horizontal"}, patch: { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", width: "var(--repeat-sizesScale12xl, 256px)", height: "100%", flexShrink: 0, position: "relative", boxSizing: "border-box" } }, { selector: {"Size":"lg","Layout":"vertical"}, patch: { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", width: "100%", height: "var(--repeat-sizesScale12xl, 240px)", flexShrink: 0, position: "relative", boxSizing: "border-box" } }, { selector: {"Image":"hidden"}, patch: { display: "none" } }], _ctx) as React.CSSProperties}>
          <span style={{ display: "inline-flex", width: "64px", height: "64px", color: "currentColor", flexShrink: 0 } as React.CSSProperties} dangerouslySetInnerHTML={{ __html: `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.4" opacity="0.55">
  <rect x="6" y="14" width="52" height="38" rx="4"/>
  <path d="M22 14 L26 8 L38 8 L42 14"/>
  <circle cx="32" cy="34" r="10"/>
</svg>` }} />
        </div>
        {((_ctx.ShowAvatar === true)) && (
        <div style={_mergeOverrides({ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", width: "64px", height: "64px", flexShrink: 0, position: "absolute", left: "16px", top: "56px", boxSizing: "border-box", background: "#00000000" }, [{ selector: {"Size":"sm"}, patch: { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", width: "64px", height: "64px", flexShrink: 0, position: "absolute", left: "16px", top: "56px", boxSizing: "border-box" } }, { selector: {"Size":"md"}, patch: { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", width: "96px", height: "96px", flexShrink: 0, position: "absolute", left: "16px", top: "104px", boxSizing: "border-box" } }, { selector: {"Size":"lg"}, patch: { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", width: "96px", height: "96px", flexShrink: 0, position: "absolute", left: "16px", top: "200px", boxSizing: "border-box" } }, { selector: {"Layout":"horizontal"}, patch: { display: "none" } }, { selector: {"ImagePosition":"bottom"}, patch: { display: "none" } }, { selector: {"ImagePosition":"left"}, patch: { display: "none" } }, { selector: {"ImagePosition":"right"}, patch: { display: "none" } }, { selector: {"Image":"hidden"}, patch: { display: "none" } }, { selector: {"ShowAvatar":false}, patch: { display: "none" } }], _ctx) as React.CSSProperties}>
          <span style={{ display: "inline-flex" } as React.CSSProperties}>
            <Avatar Size="lg" />
          </span>
        </div>
        )}
      </div>
      {((_ctx.ShowFooter === true)) && (
      <div style={({ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "flex-start", paddingLeft: "var(--repeat-spacingSm, 16px)", paddingRight: "var(--repeat-spacingSm, 16px)", paddingTop: "10px", paddingBottom: "12px", width: "100%", height: "fit-content", position: "relative", boxSizing: "border-box", background: "#00000000", borderTop: `1px solid ${"var(--repeat-borderSubtle, #e5e7eb)"}` }) as React.CSSProperties}>
        <span style={_mergeOverrides({ color: "var(--repeat-contentMuted, transparent)", fontFamily: `var(--repeat-typographyFamiliesSans)`, fontSize: `var(--repeat-typographyScaleFontSize250)`, fontWeight: `var(--repeat-typographyWeightsRegular)`, lineHeight: `var(--repeat-typographyScaleLineHeight250)`, letterSpacing: `var(--repeat-typographyScaleLetterSpacing300)`, textAlign: "left", flex: "1 1 auto" }, [{ selector: {"Size":"sm"}, patch: { fontFamily: `var(--repeat-typographyRolesBodyStepsXs-fontFamily, ui-sans-serif)`, fontSize: `var(--repeat-typographyRolesBodyStepsXs-fontSize, 14px)`, fontWeight: `var(--repeat-typographyRolesBodyStepsXs-fontWeight, 400)`, lineHeight: `var(--repeat-typographyRolesBodyStepsXs-lineHeight, 1.4)` } }, { selector: {"Size":"md"}, patch: { fontFamily: `var(--repeat-typographyRolesBodyStepsXs-fontFamily, ui-sans-serif)`, fontSize: `var(--repeat-typographyRolesBodyStepsXs-fontSize, 14px)`, fontWeight: `var(--repeat-typographyRolesBodyStepsXs-fontWeight, 400)`, lineHeight: `var(--repeat-typographyRolesBodyStepsXs-lineHeight, 1.4)` } }, { selector: {"Size":"lg"}, patch: { fontFamily: `var(--repeat-typographyRolesBodyStepsSm-fontFamily, ui-sans-serif)`, fontSize: `var(--repeat-typographyRolesBodyStepsSm-fontSize, 14px)`, fontWeight: `var(--repeat-typographyRolesBodyStepsSm-fontWeight, 400)`, lineHeight: `var(--repeat-typographyRolesBodyStepsSm-lineHeight, 1.4)` } }, { selector: {"Variant":"accent"}, patch: { color: "var(--repeat-contentOnAccent, transparent)" } }], _ctx) as React.CSSProperties}>{String((props.FooterText) ?? "Footer note")}</span>
      </div>
      )}
    </section>
  );
}

export default Card;
