# Token catalog

All `--ds-*` CSS custom properties exported by this design system.
Import `tokens.css` once at your app root — then reference any token as
`var(--ds-<name>)` in inline styles or CSS.

## Token families

| Family prefix | Semantic meaning |
|--------------|-----------------|
| `grid.*` | Breakpoints, gutters, margins and column counts. |
| `icon.*` | Fill colour for SVG glyphs and icon sprites. |
| `sizes.*` | Primitive size scale (dimensions, icon sizes). |
| `colors.*` | — |
| `motion.*` | Duration and easing values for transitions. |
| `radius.*` | Corner radius tokens for containers and controls. |
| `shadow.*` | Box-shadow elevation levels. |
| `zIndex.*` | Stacking order levels. |
| `opacity.*` | Named opacity levels. |
| `spacing.*` | Margin, padding and gap values from the spacing scale. |
| `typography.*` | Font family, size, weight, line-height and letter-spacing. |
| `semanticColors.*` | — |

## Grid

_Breakpoints, gutters, margins and column counts._

| CSS variable | Value |
|-------------|-------|
| `--ds-grid-gutter-lg` | `{sizes.scale.2xl}` |
| `--ds-grid-gutter-lg--type` | `dimension` |
| `--ds-grid-gutter-lg--value` | `{sizes.scale.2xl}` |
| `--ds-grid-gutter-md` | `{sizes.scale.xl}` |
| `--ds-grid-gutter-md--type` | `dimension` |
| `--ds-grid-gutter-md--value` | `{sizes.scale.xl}` |
| `--ds-grid-gutter-sm` | `{sizes.scale.lg}` |
| `--ds-grid-gutter-sm--type` | `dimension` |
| `--ds-grid-gutter-sm--value` | `{sizes.scale.lg}` |
| `--ds-grid-gutter-xl` | `{sizes.scale.2xl}` |
| `--ds-grid-gutter-xl--type` | `dimension` |
| `--ds-grid-gutter-xl--value` | `{sizes.scale.2xl}` |
| `--ds-grid-margin-lg` | `{sizes.scale.3xl}` |
| `--ds-grid-margin-lg--type` | `dimension` |
| `--ds-grid-margin-lg--value` | `{sizes.scale.3xl}` |
| `--ds-grid-margin-md` | `{sizes.scale.3xl}` |
| `--ds-grid-margin-md--type` | `dimension` |
| `--ds-grid-margin-md--value` | `{sizes.scale.3xl}` |
| `--ds-grid-margin-sm` | `{sizes.scale.lg}` |
| `--ds-grid-margin-sm--type` | `dimension` |
| `--ds-grid-margin-sm--value` | `{sizes.scale.lg}` |
| `--ds-grid-margin-xl` | `{sizes.scale.4xl}` |
| `--ds-grid-margin-xl--type` | `dimension` |
| `--ds-grid-margin-xl--value` | `{sizes.scale.4xl}` |
| `--ds-grid-columns-lg` | `12` |
| `--ds-grid-columns-lg--type` | `number` |
| `--ds-grid-columns-lg--value` | `12` |
| `--ds-grid-columns-md` | `8` |
| `--ds-grid-columns-md--type` | `number` |
| `--ds-grid-columns-md--value` | `8` |
| `--ds-grid-columns-sm` | `4` |
| `--ds-grid-columns-sm--type` | `number` |
| `--ds-grid-columns-sm--value` | `4` |
| `--ds-grid-columns-xl` | `12` |
| `--ds-grid-columns-xl--type` | `number` |
| `--ds-grid-columns-xl--value` | `12` |
| `--ds-grid-breakpoints-lg` | `1024px` |
| `--ds-grid-breakpoints-lg--type` | `dimension` |
| `--ds-grid-breakpoints-lg--value` | `1024px` |
| `--ds-grid-breakpoints-md` | `768px` |
| `--ds-grid-breakpoints-md--type` | `dimension` |
| `--ds-grid-breakpoints-md--value` | `768px` |
| `--ds-grid-breakpoints-sm` | `640px` |
| `--ds-grid-breakpoints-sm--type` | `dimension` |
| `--ds-grid-breakpoints-sm--value` | `640px` |
| `--ds-grid-breakpoints-xl` | `1280px` |
| `--ds-grid-breakpoints-xl--type` | `dimension` |
| `--ds-grid-breakpoints-xl--value` | `1280px` |

## Icon (glyph colour)

_Fill colour for SVG glyphs and icon sprites._

| CSS variable | Value |
|-------------|-------|
| `--ds-icon-lg` | `{sizes.scale.3xl}` |
| `--ds-icon-lg--type` | `dimension` |
| `--ds-icon-lg--value` | `{sizes.scale.3xl}` |
| `--ds-icon-md` | `{sizes.scale.2xl}` |
| `--ds-icon-md--type` | `dimension` |
| `--ds-icon-md--value` | `{sizes.scale.2xl}` |
| `--ds-icon-sm` | `{sizes.scale.xl}` |
| `--ds-icon-sm--type` | `dimension` |
| `--ds-icon-sm--value` | `{sizes.scale.xl}` |

## Sizes

_Primitive size scale (dimensions, icon sizes)._

| CSS variable | Value |
|-------------|-------|
| `--ds-sizes-scale-lg` | `12px` |
| `--ds-sizes-scale-lg--type` | `dimension` |
| `--ds-sizes-scale-lg--value` | `12px` |
| `--ds-sizes-scale-md` | `10px` |
| `--ds-sizes-scale-md--type` | `dimension` |
| `--ds-sizes-scale-md--value` | `10px` |
| `--ds-sizes-scale-sm` | `8px` |
| `--ds-sizes-scale-sm--type` | `dimension` |
| `--ds-sizes-scale-sm--value` | `8px` |
| `--ds-sizes-scale-xl` | `16px` |
| `--ds-sizes-scale-xl--type` | `dimension` |
| `--ds-sizes-scale-xl--value` | `16px` |
| `--ds-sizes-scale-xs` | `6px` |
| `--ds-sizes-scale-xs--type` | `dimension` |
| `--ds-sizes-scale-xs--value` | `6px` |
| `--ds-sizes-scale-2xl` | `20px` |
| `--ds-sizes-scale-2xl--type` | `dimension` |
| `--ds-sizes-scale-2xl--value` | `20px` |
| `--ds-sizes-scale-2xs` | `4px` |
| `--ds-sizes-scale-2xs--type` | `dimension` |
| `--ds-sizes-scale-2xs--value` | `4px` |
| `--ds-sizes-scale-3xl` | `24px` |
| `--ds-sizes-scale-3xl--type` | `dimension` |
| `--ds-sizes-scale-3xl--value` | `24px` |
| `--ds-sizes-scale-3xs` | `3px` |
| `--ds-sizes-scale-3xs--type` | `dimension` |
| `--ds-sizes-scale-3xs--value` | `3px` |
| `--ds-sizes-scale-4xl` | `32px` |
| `--ds-sizes-scale-4xl--type` | `dimension` |
| `--ds-sizes-scale-4xl--value` | `32px` |
| `--ds-sizes-scale-4xs` | `2px` |
| `--ds-sizes-scale-4xs--type` | `dimension` |
| `--ds-sizes-scale-4xs--value` | `2px` |
| `--ds-sizes-scale-5xl` | `48px` |
| `--ds-sizes-scale-5xl--type` | `dimension` |
| `--ds-sizes-scale-5xl--value` | `48px` |
| `--ds-sizes-scale-5xs` | `1px` |
| `--ds-sizes-scale-5xs--type` | `dimension` |
| `--ds-sizes-scale-5xs--value` | `1px` |
| `--ds-sizes-scale-6xl` | `64px` |
| `--ds-sizes-scale-6xl--type` | `dimension` |
| `--ds-sizes-scale-6xl--value` | `64px` |
| `--ds-sizes-scale-7xl` | `80px` |
| `--ds-sizes-scale-7xl--type` | `dimension` |
| `--ds-sizes-scale-7xl--value` | `80px` |
| `--ds-sizes-scale-8xl` | `96px` |
| `--ds-sizes-scale-8xl--type` | `dimension` |
| `--ds-sizes-scale-8xl--value` | `96px` |
| `--ds-sizes-scale-9xl` | `128px` |
| `--ds-sizes-scale-9xl--type` | `dimension` |
| `--ds-sizes-scale-9xl--value` | `128px` |
| `--ds-sizes-scale-10xl` | `160px` |
| `--ds-sizes-scale-10xl--type` | `dimension` |
| `--ds-sizes-scale-10xl--value` | `160px` |
| `--ds-sizes-scale-11xl` | `192px` |
| `--ds-sizes-scale-11xl--type` | `dimension` |
| `--ds-sizes-scale-11xl--value` | `192px` |
| `--ds-sizes-scale-12xl` | `256px` |
| `--ds-sizes-scale-12xl--type` | `dimension` |
| `--ds-sizes-scale-12xl--value` | `256px` |
| `--ds-sizes-scale-13xl` | `320px` |
| `--ds-sizes-scale-13xl--type` | `dimension` |
| `--ds-sizes-scale-13xl--value` | `320px` |
| `--ds-sizes-scale-14xl` | `384px` |
| `--ds-sizes-scale-14xl--type` | `dimension` |
| `--ds-sizes-scale-14xl--value` | `384px` |
| `--ds-sizes-scale-15xl` | `448px` |
| `--ds-sizes-scale-15xl--type` | `dimension` |
| `--ds-sizes-scale-15xl--value` | `448px` |
| `--ds-sizes-scale-none` | `0px` |
| `--ds-sizes-scale-none--type` | `dimension` |
| `--ds-sizes-scale-none--value` | `0px` |

## colors


| CSS variable | Value |
|-------------|-------|
| `--ds-colors-red-name` | `red` |
| `--ds-colors-red-ramp-50` | `#fff8f8` |
| `--ds-colors-red-ramp-100` | `#ffbeb8` |
| `--ds-colors-red-ramp-200` | `#ff8b83` |
| `--ds-colors-red-ramp-300` | `#f9655f` |
| `--ds-colors-red-ramp-400` | `#f24d4b` |
| `--ds-colors-red-ramp-500` | `#ef4444` |
| `--ds-colors-red-ramp-600` | `#e64141` |
| `--ds-colors-red-ramp-700` | `#ca3938` |
| `--ds-colors-red-ramp-800` | `#9e2b2a` |
| `--ds-colors-red-ramp-900` | `#641818` |
| `--ds-colors-red-ramp-950` | `#220504` |
| `--ds-colors-red-seed` | `#ef4444` |
| `--ds-colors-red-source` | `builtin` |
| `--ds-colors-blue-name` | `blue` |
| `--ds-colors-blue-ramp-50` | `#eff6ff` |
| `--ds-colors-blue-ramp-100` | `#dbeafe` |
| `--ds-colors-blue-ramp-200` | `#bfdbfe` |
| `--ds-colors-blue-ramp-300` | `#93c5fd` |
| `--ds-colors-blue-ramp-400` | `#60a5fa` |
| `--ds-colors-blue-ramp-500` | `#3b82f6` |
| `--ds-colors-blue-ramp-600` | `#2563eb` |
| `--ds-colors-blue-ramp-700` | `#1d4ed8` |
| `--ds-colors-blue-ramp-800` | `#1e40af` |
| `--ds-colors-blue-ramp-900` | `#1e3a8a` |
| `--ds-colors-blue-ramp-950` | `#172554` |
| `--ds-colors-blue-source` | `builtin` |
| `--ds-colors-gray-name` | `gray` |
| `--ds-colors-gray-ramp-50` | `#f9fafb` |
| `--ds-colors-gray-ramp-100` | `#f3f4f6` |
| `--ds-colors-gray-ramp-200` | `#e5e7eb` |
| `--ds-colors-gray-ramp-300` | `#d1d5db` |
| `--ds-colors-gray-ramp-400` | `#9ca3af` |
| `--ds-colors-gray-ramp-500` | `#6b7280` |
| `--ds-colors-gray-ramp-600` | `#4b5563` |
| `--ds-colors-gray-ramp-700` | `#374151` |
| `--ds-colors-gray-ramp-800` | `#1f2937` |
| `--ds-colors-gray-ramp-900` | `#111827` |
| `--ds-colors-gray-ramp-950` | `#030712` |
| `--ds-colors-gray-source` | `builtin` |
| `--ds-colors-pink-name` | `pink` |
| `--ds-colors-pink-ramp-50` | `#fdf2f8` |
| `--ds-colors-pink-ramp-100` | `#fce7f3` |
| `--ds-colors-pink-ramp-200` | `#fbcfe8` |
| `--ds-colors-pink-ramp-300` | `#f9a8d4` |
| `--ds-colors-pink-ramp-400` | `#f472b6` |
| `--ds-colors-pink-ramp-500` | `#ec4899` |
| `--ds-colors-pink-ramp-600` | `#db2777` |
| `--ds-colors-pink-ramp-700` | `#be185d` |
| `--ds-colors-pink-ramp-800` | `#9d174d` |
| `--ds-colors-pink-ramp-900` | `#831843` |
| `--ds-colors-pink-ramp-950` | `#500724` |
| `--ds-colors-pink-source` | `builtin` |
| `--ds-colors-teal-name` | `teal` |
| `--ds-colors-teal-ramp-50` | `#f0fdfa` |
| `--ds-colors-teal-ramp-100` | `#ccfbf1` |
| `--ds-colors-teal-ramp-200` | `#99f6e4` |
| `--ds-colors-teal-ramp-300` | `#5eead4` |
| `--ds-colors-teal-ramp-400` | `#2dd4bf` |
| `--ds-colors-teal-ramp-500` | `#14b8a6` |
| `--ds-colors-teal-ramp-600` | `#0d9488` |
| `--ds-colors-teal-ramp-700` | `#0f766e` |
| `--ds-colors-teal-ramp-800` | `#115e59` |
| `--ds-colors-teal-ramp-900` | `#134e4a` |
| `--ds-colors-teal-ramp-950` | `#042f2e` |
| `--ds-colors-teal-source` | `builtin` |
| `--ds-colors-green-name` | `green` |
| `--ds-colors-green-ramp-50` | `#f0fdf4` |
| `--ds-colors-green-ramp-100` | `#dcfce7` |
| `--ds-colors-green-ramp-200` | `#bbf7d0` |
| `--ds-colors-green-ramp-300` | `#86efac` |
| `--ds-colors-green-ramp-400` | `#4ade80` |
| `--ds-colors-green-ramp-500` | `#22c55e` |
| `--ds-colors-green-ramp-600` | `#16a34a` |
| `--ds-colors-green-ramp-700` | `#15803d` |
| `--ds-colors-green-ramp-800` | `#166534` |
| `--ds-colors-green-ramp-900` | `#14532d` |
| `--ds-colors-green-ramp-950` | `#052e16` |
| `--ds-colors-green-source` | `builtin` |
| `--ds-colors-indigo-name` | `indigo` |
| `--ds-colors-indigo-ramp-50` | `#eef2ff` |
| `--ds-colors-indigo-ramp-100` | `#e0e7ff` |
| `--ds-colors-indigo-ramp-200` | `#c7d2fe` |
| `--ds-colors-indigo-ramp-300` | `#a5b4fc` |
| `--ds-colors-indigo-ramp-400` | `#818cf8` |
| `--ds-colors-indigo-ramp-500` | `#6366f1` |
| `--ds-colors-indigo-ramp-600` | `#4f46e5` |
| `--ds-colors-indigo-ramp-700` | `#4338ca` |
| `--ds-colors-indigo-ramp-800` | `#3730a3` |
| `--ds-colors-indigo-ramp-900` | `#312e81` |
| `--ds-colors-indigo-ramp-950` | `#1e1b4b` |
| `--ds-colors-indigo-source` | `builtin` |
| `--ds-colors-orange-name` | `orange` |
| `--ds-colors-orange-ramp-50` | `#fff7ed` |
| `--ds-colors-orange-ramp-100` | `#ffedd5` |
| `--ds-colors-orange-ramp-200` | `#fed7aa` |
| `--ds-colors-orange-ramp-300` | `#fdba74` |
| `--ds-colors-orange-ramp-400` | `#fb923c` |
| `--ds-colors-orange-ramp-500` | `#f97316` |
| `--ds-colors-orange-ramp-600` | `#ea580c` |
| `--ds-colors-orange-ramp-700` | `#c2410c` |
| `--ds-colors-orange-ramp-800` | `#9a3412` |
| `--ds-colors-orange-ramp-900` | `#7c2d12` |
| `--ds-colors-orange-ramp-950` | `#431407` |
| `--ds-colors-orange-source` | `builtin` |
| `--ds-colors-purple-name` | `purple` |
| `--ds-colors-purple-ramp-50` | `#faf5ff` |
| `--ds-colors-purple-ramp-100` | `#f3e8ff` |
| `--ds-colors-purple-ramp-200` | `#e9d5ff` |
| `--ds-colors-purple-ramp-300` | `#d8b4fe` |
| `--ds-colors-purple-ramp-400` | `#c084fc` |
| `--ds-colors-purple-ramp-500` | `#a855f7` |
| `--ds-colors-purple-ramp-600` | `#9333ea` |
| `--ds-colors-purple-ramp-700` | `#7e22ce` |
| `--ds-colors-purple-ramp-800` | `#6b21a8` |
| `--ds-colors-purple-ramp-900` | `#581c87` |
| `--ds-colors-purple-ramp-950` | `#3b0764` |
| `--ds-colors-purple-source` | `builtin` |
| `--ds-colors-yellow-name` | `yellow` |
| `--ds-colors-yellow-ramp-50` | `#fefce8` |
| `--ds-colors-yellow-ramp-100` | `#fef9c3` |
| `--ds-colors-yellow-ramp-200` | `#fef08a` |
| `--ds-colors-yellow-ramp-300` | `#fde047` |
| `--ds-colors-yellow-ramp-400` | `#facc15` |
| `--ds-colors-yellow-ramp-500` | `#eab308` |
| `--ds-colors-yellow-ramp-600` | `#ca8a04` |
| `--ds-colors-yellow-ramp-700` | `#a16207` |
| `--ds-colors-yellow-ramp-800` | `#854d0e` |
| `--ds-colors-yellow-ramp-900` | `#713f12` |
| `--ds-colors-yellow-ramp-950` | `#422006` |
| `--ds-colors-yellow-source` | `builtin` |
| `--ds-colors-neutral-name` | `neutral` |
| `--ds-colors-neutral-ramp-50` | `#fafafa` |
| `--ds-colors-neutral-ramp-100` | `#f5f5f5` |
| `--ds-colors-neutral-ramp-200` | `#e5e5e5` |
| `--ds-colors-neutral-ramp-300` | `#d4d4d4` |
| `--ds-colors-neutral-ramp-400` | `#a3a3a3` |
| `--ds-colors-neutral-ramp-500` | `#737373` |
| `--ds-colors-neutral-ramp-600` | `#525252` |
| `--ds-colors-neutral-ramp-700` | `#404040` |
| `--ds-colors-neutral-ramp-800` | `#262626` |
| `--ds-colors-neutral-ramp-900` | `#171717` |
| `--ds-colors-neutral-ramp-950` | `#0a0a0a` |
| `--ds-colors-neutral-source` | `builtin` |

## Motion

_Duration and easing values for transitions._

| CSS variable | Value |
|-------------|-------|
| `--ds-motion-easing-linear--type` | `cubicBezier` |
| `--ds-motion-easing-ease-in--type` | `cubicBezier` |
| `--ds-motion-easing-ease-out--type` | `cubicBezier` |
| `--ds-motion-easing-emphasized--type` | `cubicBezier` |
| `--ds-motion-easing-ease-in-out--type` | `cubicBezier` |
| `--ds-motion-duration-fast` | `120ms` |
| `--ds-motion-duration-fast--type` | `duration` |
| `--ds-motion-duration-fast--value` | `120ms` |
| `--ds-motion-duration-slow` | `400ms` |
| `--ds-motion-duration-slow--type` | `duration` |
| `--ds-motion-duration-slow--value` | `400ms` |
| `--ds-motion-duration-medium` | `240ms` |
| `--ds-motion-duration-medium--type` | `duration` |
| `--ds-motion-duration-medium--value` | `240ms` |
| `--ds-motion-duration-slower` | `600ms` |
| `--ds-motion-duration-slower--type` | `duration` |
| `--ds-motion-duration-slower--value` | `600ms` |
| `--ds-motion-duration-instant` | `0ms` |
| `--ds-motion-duration-instant--type` | `duration` |
| `--ds-motion-duration-instant--value` | `0ms` |

## Border radius

_Corner radius tokens for containers and controls._

| CSS variable | Value |
|-------------|-------|
| `--ds-radius-lg` | `{sizes.scale.lg}` |
| `--ds-radius-lg--type` | `dimension` |
| `--ds-radius-lg--value` | `{sizes.scale.lg}` |
| `--ds-radius-md` | `{sizes.scale.sm}` |
| `--ds-radius-md--type` | `dimension` |
| `--ds-radius-md--value` | `{sizes.scale.sm}` |
| `--ds-radius-sm` | `{sizes.scale.xs}` |
| `--ds-radius-sm--type` | `dimension` |
| `--ds-radius-sm--value` | `{sizes.scale.xs}` |
| `--ds-radius-xl` | `{sizes.scale.xl}` |
| `--ds-radius-xl--type` | `dimension` |
| `--ds-radius-xl--value` | `{sizes.scale.xl}` |
| `--ds-radius-xs` | `{sizes.scale.2xs}` |
| `--ds-radius-xs--type` | `dimension` |
| `--ds-radius-xs--value` | `{sizes.scale.2xs}` |
| `--ds-radius-2xl` | `{sizes.scale.3xl}` |
| `--ds-radius-2xl--type` | `dimension` |
| `--ds-radius-2xl--value` | `{sizes.scale.3xl}` |
| `--ds-radius-3xl` | `{sizes.scale.4xl}` |
| `--ds-radius-3xl--type` | `dimension` |
| `--ds-radius-3xl--value` | `{sizes.scale.4xl}` |
| `--ds-radius-full` | `9999px` |
| `--ds-radius-full--type` | `dimension` |
| `--ds-radius-full--value` | `9999px` |
| `--ds-radius-none` | `0px` |
| `--ds-radius-none--type` | `dimension` |
| `--ds-radius-none--value` | `0px` |

## Shadow

_Box-shadow elevation levels._

| CSS variable | Value |
|-------------|-------|
| `--ds-shadow-color` | `{colors.neutral.dark.950}` |
| `--ds-shadow-color--type` | `color` |
| `--ds-shadow-color--value` | `{colors.neutral.dark.950}` |
| `--ds-shadow-levels-lg--type` | `shadow` |
| `--ds-shadow-levels-md--type` | `shadow` |
| `--ds-shadow-levels-sm--type` | `shadow` |
| `--ds-shadow-levels-xl--type` | `shadow` |
| `--ds-shadow-levels-xs--type` | `shadow` |
| `--ds-shadow-levels-2xl--type` | `shadow` |
| `--ds-shadow-levels-none--type` | `shadow` |

## Z-index

_Stacking order levels._

| CSS variable | Value |
|-------------|-------|
| `--ds-zIndex-10` | `10` |
| `--ds-zIndex-10--type` | `number` |
| `--ds-zIndex-10--value` | `10` |
| `--ds-zIndex-10--description` | `Slight elevation` |
| `--ds-zIndex-20` | `20` |
| `--ds-zIndex-20--type` | `number` |
| `--ds-zIndex-20--value` | `20` |
| `--ds-zIndex-20--description` | `Sticky headers` |
| `--ds-zIndex-30` | `30` |
| `--ds-zIndex-30--type` | `number` |
| `--ds-zIndex-30--value` | `30` |
| `--ds-zIndex-30--description` | `Light overlays` |
| `--ds-zIndex-40` | `40` |
| `--ds-zIndex-40--type` | `number` |
| `--ds-zIndex-40--value` | `40` |
| `--ds-zIndex-40--description` | `Dialogs & modals` |
| `--ds-zIndex-50` | `50` |
| `--ds-zIndex-50--type` | `number` |
| `--ds-zIndex-50--value` | `50` |
| `--ds-zIndex-50--description` | `Tooltips & popovers` |
| `--ds-zIndex-9999` | `9999` |
| `--ds-zIndex-9999--type` | `number` |
| `--ds-zIndex-9999--value` | `9999` |
| `--ds-zIndex-9999--description` | `Global loaders & critical alerts` |

## Opacity

_Named opacity levels._

| CSS variable | Value |
|-------------|-------|
| `--ds-opacity-0` | `0` |
| `--ds-opacity-0--type` | `number` |
| `--ds-opacity-0--value` | `0` |
| `--ds-opacity-4` | `0.04` |
| `--ds-opacity-4--type` | `number` |
| `--ds-opacity-4--value` | `0.04` |
| `--ds-opacity-8` | `0.08` |
| `--ds-opacity-8--type` | `number` |
| `--ds-opacity-8--value` | `0.08` |
| `--ds-opacity-16` | `0.16` |
| `--ds-opacity-16--type` | `number` |
| `--ds-opacity-16--value` | `0.16` |
| `--ds-opacity-32` | `0.32` |
| `--ds-opacity-32--type` | `number` |
| `--ds-opacity-32--value` | `0.32` |
| `--ds-opacity-48` | `0.48` |
| `--ds-opacity-48--type` | `number` |
| `--ds-opacity-48--value` | `0.48` |
| `--ds-opacity-64` | `0.64` |
| `--ds-opacity-64--type` | `number` |
| `--ds-opacity-64--value` | `0.64` |
| `--ds-opacity-80` | `0.8` |
| `--ds-opacity-80--type` | `number` |
| `--ds-opacity-80--value` | `0.8` |
| `--ds-opacity-100` | `1` |
| `--ds-opacity-100--type` | `number` |
| `--ds-opacity-100--value` | `1` |

## Spacing

_Margin, padding and gap values from the spacing scale._

| CSS variable | Value |
|-------------|-------|
| `--ds-spacing-lg` | `{sizes.scale.xl}` |
| `--ds-spacing-lg--type` | `dimension` |
| `--ds-spacing-lg--value` | `{sizes.scale.xl}` |
| `--ds-spacing-md` | `{sizes.scale.lg}` |
| `--ds-spacing-md--type` | `dimension` |
| `--ds-spacing-md--value` | `{sizes.scale.lg}` |
| `--ds-spacing-sm` | `{sizes.scale.sm}` |
| `--ds-spacing-sm--type` | `dimension` |
| `--ds-spacing-sm--value` | `{sizes.scale.sm}` |
| `--ds-spacing-xl` | `{sizes.scale.3xl}` |
| `--ds-spacing-xl--type` | `dimension` |
| `--ds-spacing-xl--value` | `{sizes.scale.3xl}` |
| `--ds-spacing-xs` | `{sizes.scale.xs}` |
| `--ds-spacing-xs--type` | `dimension` |
| `--ds-spacing-xs--value` | `{sizes.scale.xs}` |
| `--ds-spacing-2xl` | `{sizes.scale.4xl}` |
| `--ds-spacing-2xl--type` | `dimension` |
| `--ds-spacing-2xl--value` | `{sizes.scale.4xl}` |
| `--ds-spacing-2xs` | `{sizes.scale.2xs}` |
| `--ds-spacing-2xs--type` | `dimension` |
| `--ds-spacing-2xs--value` | `{sizes.scale.2xs}` |
| `--ds-spacing-3xl` | `{sizes.scale.5xl}` |
| `--ds-spacing-3xl--type` | `dimension` |
| `--ds-spacing-3xl--value` | `{sizes.scale.5xl}` |

## Typography

_Font family, size, weight, line-height and letter-spacing._

| CSS variable | Value |
|-------------|-------|
| `--ds-typography-base` | `16px` |
| `--ds-typography-base--type` | `dimension` |
| `--ds-typography-base--value` | `16px` |
| `--ds-typography--meta-ratio` | `1.25` |
| `--ds-typography--meta-stepsAbove` | `5` |
| `--ds-typography--meta-stepsBelow` | `2` |
| `--ds-typography-roles-body--meta-steps` | `3` |
| `--ds-typography-roles-body--meta-nomenclature` | `tshirt` |
| `--ds-typography-roles-body-steps-md-fontSize` | `{typography.scale.fontSize.350}` |
| `--ds-typography-roles-body-steps-md-fontSize--type` | `dimension` |
| `--ds-typography-roles-body-steps-md-fontSize--value` | `{typography.scale.fontSize.350}` |
| `--ds-typography-roles-body-steps-md-fontWeight` | `{typography.weights.regular}` |
| `--ds-typography-roles-body-steps-md-fontWeight--type` | `fontWeight` |
| `--ds-typography-roles-body-steps-md-fontWeight--value` | `{typography.weights.regular}` |
| `--ds-typography-roles-body-steps-md-lineHeight` | `{typography.scale.lineHeight.400}` |
| `--ds-typography-roles-body-steps-md-lineHeight--type` | `dimension` |
| `--ds-typography-roles-body-steps-md-lineHeight--value` | `{typography.scale.lineHeight.400}` |
| `--ds-typography-roles-body-steps-md-letterSpacing` | `{typography.scale.letterSpacing.300}` |
| `--ds-typography-roles-body-steps-md-letterSpacing--type` | `dimension` |
| `--ds-typography-roles-body-steps-md-letterSpacing--value` | `{typography.scale.letterSpacing.300}` |
| `--ds-typography-roles-body-steps-sm-fontSize` | `{typography.scale.fontSize.300}` |
| `--ds-typography-roles-body-steps-sm-fontSize--type` | `dimension` |
| `--ds-typography-roles-body-steps-sm-fontSize--value` | `{typography.scale.fontSize.300}` |
| `--ds-typography-roles-body-steps-sm-fontWeight` | `{typography.weights.regular}` |
| `--ds-typography-roles-body-steps-sm-fontWeight--type` | `fontWeight` |
| `--ds-typography-roles-body-steps-sm-fontWeight--value` | `{typography.weights.regular}` |
| `--ds-typography-roles-body-steps-sm-lineHeight` | `{typography.scale.lineHeight.300}` |
| `--ds-typography-roles-body-steps-sm-lineHeight--type` | `dimension` |
| `--ds-typography-roles-body-steps-sm-lineHeight--value` | `{typography.scale.lineHeight.300}` |
| `--ds-typography-roles-body-steps-sm-letterSpacing` | `{typography.scale.letterSpacing.300}` |
| `--ds-typography-roles-body-steps-sm-letterSpacing--type` | `dimension` |
| `--ds-typography-roles-body-steps-sm-letterSpacing--value` | `{typography.scale.letterSpacing.300}` |
| `--ds-typography-roles-body-steps-xs-fontSize` | `{typography.scale.fontSize.250}` |
| `--ds-typography-roles-body-steps-xs-fontSize--type` | `dimension` |
| `--ds-typography-roles-body-steps-xs-fontSize--value` | `{typography.scale.fontSize.250}` |
| `--ds-typography-roles-body-steps-xs-fontWeight` | `{typography.weights.regular}` |
| `--ds-typography-roles-body-steps-xs-fontWeight--type` | `fontWeight` |
| `--ds-typography-roles-body-steps-xs-fontWeight--value` | `{typography.weights.regular}` |
| `--ds-typography-roles-body-steps-xs-lineHeight` | `{typography.scale.lineHeight.250}` |
| `--ds-typography-roles-body-steps-xs-lineHeight--type` | `dimension` |
| `--ds-typography-roles-body-steps-xs-lineHeight--value` | `{typography.scale.lineHeight.250}` |
| `--ds-typography-roles-body-steps-xs-letterSpacing` | `{typography.scale.letterSpacing.300}` |
| `--ds-typography-roles-body-steps-xs-letterSpacing--type` | `dimension` |
| `--ds-typography-roles-body-steps-xs-letterSpacing--value` | `{typography.scale.letterSpacing.300}` |
| `--ds-typography-roles-body-steps-md-semibold-fontSize` | `{typography.scale.fontSize.350}` |
| `--ds-typography-roles-body-steps-md-semibold-fontSize--type` | `dimension` |
| `--ds-typography-roles-body-steps-md-semibold-fontSize--value` | `{typography.scale.fontSize.350}` |
| `--ds-typography-roles-body-steps-md-semibold-fontWeight` | `{typography.weights.semibold}` |
| `--ds-typography-roles-body-steps-md-semibold-fontWeight--type` | `fontWeight` |
| `--ds-typography-roles-body-steps-md-semibold-fontWeight--value` | `{typography.weights.semibold}` |
| `--ds-typography-roles-body-steps-md-semibold-lineHeight` | `{typography.scale.lineHeight.400}` |
| `--ds-typography-roles-body-steps-md-semibold-lineHeight--type` | `dimension` |
| `--ds-typography-roles-body-steps-md-semibold-lineHeight--value` | `{typography.scale.lineHeight.400}` |
| `--ds-typography-roles-body-steps-md-semibold-letterSpacing` | `{typography.scale.letterSpacing.300}` |
| `--ds-typography-roles-body-steps-md-semibold-letterSpacing--type` | `dimension` |
| `--ds-typography-roles-body-steps-md-semibold-letterSpacing--value` | `{typography.scale.letterSpacing.300}` |
| `--ds-typography-roles-body-steps-sm-semibold-fontSize` | `{typography.scale.fontSize.300}` |
| `--ds-typography-roles-body-steps-sm-semibold-fontSize--type` | `dimension` |
| `--ds-typography-roles-body-steps-sm-semibold-fontSize--value` | `{typography.scale.fontSize.300}` |
| `--ds-typography-roles-body-steps-sm-semibold-fontWeight` | `{typography.weights.semibold}` |
| `--ds-typography-roles-body-steps-sm-semibold-fontWeight--type` | `fontWeight` |
| `--ds-typography-roles-body-steps-sm-semibold-fontWeight--value` | `{typography.weights.semibold}` |
| `--ds-typography-roles-body-steps-sm-semibold-lineHeight` | `{typography.scale.lineHeight.300}` |
| `--ds-typography-roles-body-steps-sm-semibold-lineHeight--type` | `dimension` |
| `--ds-typography-roles-body-steps-sm-semibold-lineHeight--value` | `{typography.scale.lineHeight.300}` |
| `--ds-typography-roles-body-steps-sm-semibold-letterSpacing` | `{typography.scale.letterSpacing.300}` |
| `--ds-typography-roles-body-steps-sm-semibold-letterSpacing--type` | `dimension` |
| `--ds-typography-roles-body-steps-sm-semibold-letterSpacing--value` | `{typography.scale.letterSpacing.300}` |
| `--ds-typography-roles-body-steps-xs-semibold-fontSize` | `{typography.scale.fontSize.250}` |
| `--ds-typography-roles-body-steps-xs-semibold-fontSize--type` | `dimension` |
| `--ds-typography-roles-body-steps-xs-semibold-fontSize--value` | `{typography.scale.fontSize.250}` |
| `--ds-typography-roles-body-steps-xs-semibold-fontWeight` | `{typography.weights.semibold}` |
| `--ds-typography-roles-body-steps-xs-semibold-fontWeight--type` | `fontWeight` |
| `--ds-typography-roles-body-steps-xs-semibold-fontWeight--value` | `{typography.weights.semibold}` |
| `--ds-typography-roles-body-steps-xs-semibold-lineHeight` | `{typography.scale.lineHeight.250}` |
| `--ds-typography-roles-body-steps-xs-semibold-lineHeight--type` | `dimension` |
| `--ds-typography-roles-body-steps-xs-semibold-lineHeight--value` | `{typography.scale.lineHeight.250}` |
| `--ds-typography-roles-body-steps-xs-semibold-letterSpacing` | `{typography.scale.letterSpacing.300}` |
| `--ds-typography-roles-body-steps-xs-semibold-letterSpacing--type` | `dimension` |
| `--ds-typography-roles-body-steps-xs-semibold-letterSpacing--value` | `{typography.scale.letterSpacing.300}` |
| `--ds-typography-roles-body-family` | `{typography.families.sans}` |
| `--ds-typography-roles-body-family--type` | `fontFamily` |
| `--ds-typography-roles-body-family--value` | `{typography.families.sans}` |
| `--ds-typography-roles-caption--meta-steps` | `3` |
| `--ds-typography-roles-caption--meta-nomenclature` | `tshirt` |
| `--ds-typography-roles-caption-steps-md-fontSize` | `{typography.scale.fontSize.200}` |
| `--ds-typography-roles-caption-steps-md-fontSize--type` | `dimension` |
| `--ds-typography-roles-caption-steps-md-fontSize--value` | `{typography.scale.fontSize.200}` |
| `--ds-typography-roles-caption-steps-md-fontWeight` | `{typography.weights.regular}` |
| `--ds-typography-roles-caption-steps-md-fontWeight--type` | `fontWeight` |
| `--ds-typography-roles-caption-steps-md-fontWeight--value` | `{typography.weights.regular}` |
| `--ds-typography-roles-caption-steps-md-lineHeight` | `{typography.scale.lineHeight.b180}` |
| `--ds-typography-roles-caption-steps-md-lineHeight--type` | `dimension` |
| `--ds-typography-roles-caption-steps-md-lineHeight--value` | `{typography.scale.lineHeight.b180}` |
| `--ds-typography-roles-caption-steps-md-letterSpacing` | `{typography.scale.letterSpacing.300}` |
| `--ds-typography-roles-caption-steps-md-letterSpacing--type` | `dimension` |
| `--ds-typography-roles-caption-steps-md-letterSpacing--value` | `{typography.scale.letterSpacing.300}` |
| `--ds-typography-roles-caption-steps-sm-fontSize` | `{typography.scale.fontSize.b120}` |
| `--ds-typography-roles-caption-steps-sm-fontSize--type` | `dimension` |
| `--ds-typography-roles-caption-steps-sm-fontSize--value` | `{typography.scale.fontSize.b120}` |
| `--ds-typography-roles-caption-steps-sm-fontWeight` | `{typography.weights.regular}` |
| `--ds-typography-roles-caption-steps-sm-fontWeight--type` | `fontWeight` |
| `--ds-typography-roles-caption-steps-sm-fontWeight--value` | `{typography.weights.regular}` |
| `--ds-typography-roles-caption-steps-sm-lineHeight` | `{typography.scale.lineHeight.b160}` |
| `--ds-typography-roles-caption-steps-sm-lineHeight--type` | `dimension` |
| `--ds-typography-roles-caption-steps-sm-lineHeight--value` | `{typography.scale.lineHeight.b160}` |
| `--ds-typography-roles-caption-steps-sm-letterSpacing` | `{typography.scale.letterSpacing.300}` |
| `--ds-typography-roles-caption-steps-sm-letterSpacing--type` | `dimension` |
| `--ds-typography-roles-caption-steps-sm-letterSpacing--value` | `{typography.scale.letterSpacing.300}` |
| `--ds-typography-roles-caption-steps-xs-fontSize` | `{typography.scale.fontSize.b110}` |
| `--ds-typography-roles-caption-steps-xs-fontSize--type` | `dimension` |
| `--ds-typography-roles-caption-steps-xs-fontSize--value` | `{typography.scale.fontSize.b110}` |
| `--ds-typography-roles-caption-steps-xs-fontWeight` | `{typography.weights.regular}` |
| `--ds-typography-roles-caption-steps-xs-fontWeight--type` | `fontWeight` |
| `--ds-typography-roles-caption-steps-xs-fontWeight--value` | `{typography.weights.regular}` |
| `--ds-typography-roles-caption-steps-xs-lineHeight` | `{typography.scale.lineHeight.b160}` |
| `--ds-typography-roles-caption-steps-xs-lineHeight--type` | `dimension` |
| `--ds-typography-roles-caption-steps-xs-lineHeight--value` | `{typography.scale.lineHeight.b160}` |
| `--ds-typography-roles-caption-steps-xs-letterSpacing` | `{typography.scale.letterSpacing.300}` |
| `--ds-typography-roles-caption-steps-xs-letterSpacing--type` | `dimension` |
| `--ds-typography-roles-caption-steps-xs-letterSpacing--value` | `{typography.scale.letterSpacing.300}` |
| `--ds-typography-roles-caption-family` | `{typography.families.sans}` |
| `--ds-typography-roles-caption-family--type` | `fontFamily` |
| `--ds-typography-roles-caption-family--value` | `{typography.families.sans}` |
| `--ds-typography-roles-headings--meta-steps` | `6` |
| `--ds-typography-roles-headings--meta-nomenclature` | `hN` |
| `--ds-typography-roles-headings-steps-h1-fontSize` | `{typography.scale.fontSize.800}` |
| `--ds-typography-roles-headings-steps-h1-fontSize--type` | `dimension` |
| `--ds-typography-roles-headings-steps-h1-fontSize--value` | `{typography.scale.fontSize.800}` |
| `--ds-typography-roles-headings-steps-h1-fontWeight` | `{typography.weights.bold}` |
| `--ds-typography-roles-headings-steps-h1-fontWeight--type` | `fontWeight` |
| `--ds-typography-roles-headings-steps-h1-fontWeight--value` | `{typography.weights.bold}` |
| `--ds-typography-roles-headings-steps-h1-lineHeight` | `{typography.scale.lineHeight.800}` |
| `--ds-typography-roles-headings-steps-h1-lineHeight--type` | `dimension` |
| `--ds-typography-roles-headings-steps-h1-lineHeight--value` | `{typography.scale.lineHeight.800}` |
| `--ds-typography-roles-headings-steps-h1-letterSpacing` | `{typography.scale.letterSpacing.800}` |
| `--ds-typography-roles-headings-steps-h1-letterSpacing--type` | `dimension` |
| `--ds-typography-roles-headings-steps-h1-letterSpacing--value` | `{typography.scale.letterSpacing.800}` |
| `--ds-typography-roles-headings-steps-h2-fontSize` | `{typography.scale.fontSize.700}` |
| `--ds-typography-roles-headings-steps-h2-fontSize--type` | `dimension` |
| `--ds-typography-roles-headings-steps-h2-fontSize--value` | `{typography.scale.fontSize.700}` |
| `--ds-typography-roles-headings-steps-h2-fontWeight` | `{typography.weights.bold}` |
| `--ds-typography-roles-headings-steps-h2-fontWeight--type` | `fontWeight` |
| `--ds-typography-roles-headings-steps-h2-fontWeight--value` | `{typography.weights.bold}` |
| `--ds-typography-roles-headings-steps-h2-lineHeight` | `{typography.scale.lineHeight.700}` |
| `--ds-typography-roles-headings-steps-h2-lineHeight--type` | `dimension` |
| `--ds-typography-roles-headings-steps-h2-lineHeight--value` | `{typography.scale.lineHeight.700}` |
| `--ds-typography-roles-headings-steps-h2-letterSpacing` | `{typography.scale.letterSpacing.700}` |
| `--ds-typography-roles-headings-steps-h2-letterSpacing--type` | `dimension` |
| `--ds-typography-roles-headings-steps-h2-letterSpacing--value` | `{typography.scale.letterSpacing.700}` |
| `--ds-typography-roles-headings-steps-h3-fontSize` | `{typography.scale.fontSize.600}` |
| `--ds-typography-roles-headings-steps-h3-fontSize--type` | `dimension` |
| `--ds-typography-roles-headings-steps-h3-fontSize--value` | `{typography.scale.fontSize.600}` |
| `--ds-typography-roles-headings-steps-h3-fontWeight` | `{typography.weights.bold}` |
| `--ds-typography-roles-headings-steps-h3-fontWeight--type` | `fontWeight` |
| `--ds-typography-roles-headings-steps-h3-fontWeight--value` | `{typography.weights.bold}` |
| `--ds-typography-roles-headings-steps-h3-lineHeight` | `{typography.scale.lineHeight.600}` |
| `--ds-typography-roles-headings-steps-h3-lineHeight--type` | `dimension` |
| `--ds-typography-roles-headings-steps-h3-lineHeight--value` | `{typography.scale.lineHeight.600}` |
| `--ds-typography-roles-headings-steps-h3-letterSpacing` | `{typography.scale.letterSpacing.600}` |
| `--ds-typography-roles-headings-steps-h3-letterSpacing--type` | `dimension` |
| `--ds-typography-roles-headings-steps-h3-letterSpacing--value` | `{typography.scale.letterSpacing.600}` |
| `--ds-typography-roles-headings-steps-h4-fontSize` | `{typography.scale.fontSize.500}` |
| `--ds-typography-roles-headings-steps-h4-fontSize--type` | `dimension` |
| `--ds-typography-roles-headings-steps-h4-fontSize--value` | `{typography.scale.fontSize.500}` |
| `--ds-typography-roles-headings-steps-h4-fontWeight` | `{typography.weights.bold}` |
| `--ds-typography-roles-headings-steps-h4-fontWeight--type` | `fontWeight` |
| `--ds-typography-roles-headings-steps-h4-fontWeight--value` | `{typography.weights.bold}` |
| `--ds-typography-roles-headings-steps-h4-lineHeight` | `{typography.scale.lineHeight.500}` |
| `--ds-typography-roles-headings-steps-h4-lineHeight--type` | `dimension` |
| `--ds-typography-roles-headings-steps-h4-lineHeight--value` | `{typography.scale.lineHeight.500}` |
| `--ds-typography-roles-headings-steps-h4-letterSpacing` | `{typography.scale.letterSpacing.500}` |
| `--ds-typography-roles-headings-steps-h4-letterSpacing--type` | `dimension` |
| `--ds-typography-roles-headings-steps-h4-letterSpacing--value` | `{typography.scale.letterSpacing.500}` |
| `--ds-typography-roles-headings-steps-h5-fontSize` | `{typography.scale.fontSize.400}` |
| `--ds-typography-roles-headings-steps-h5-fontSize--type` | `dimension` |
| `--ds-typography-roles-headings-steps-h5-fontSize--value` | `{typography.scale.fontSize.400}` |
| `--ds-typography-roles-headings-steps-h5-fontWeight` | `{typography.weights.semibold}` |
| `--ds-typography-roles-headings-steps-h5-fontWeight--type` | `fontWeight` |
| `--ds-typography-roles-headings-steps-h5-fontWeight--value` | `{typography.weights.semibold}` |
| `--ds-typography-roles-headings-steps-h5-lineHeight` | `{typography.scale.lineHeight.400}` |
| `--ds-typography-roles-headings-steps-h5-lineHeight--type` | `dimension` |
| `--ds-typography-roles-headings-steps-h5-lineHeight--value` | `{typography.scale.lineHeight.400}` |
| `--ds-typography-roles-headings-steps-h5-letterSpacing` | `{typography.scale.letterSpacing.400}` |
| `--ds-typography-roles-headings-steps-h5-letterSpacing--type` | `dimension` |
| `--ds-typography-roles-headings-steps-h5-letterSpacing--value` | `{typography.scale.letterSpacing.400}` |
| `--ds-typography-roles-headings-steps-h6-fontSize` | `{typography.scale.fontSize.300}` |
| `--ds-typography-roles-headings-steps-h6-fontSize--type` | `dimension` |
| `--ds-typography-roles-headings-steps-h6-fontSize--value` | `{typography.scale.fontSize.300}` |
| `--ds-typography-roles-headings-steps-h6-fontWeight` | `{typography.weights.regular}` |
| `--ds-typography-roles-headings-steps-h6-fontWeight--type` | `fontWeight` |
| `--ds-typography-roles-headings-steps-h6-fontWeight--value` | `{typography.weights.regular}` |
| `--ds-typography-roles-headings-steps-h6-lineHeight` | `{typography.scale.lineHeight.300}` |
| `--ds-typography-roles-headings-steps-h6-lineHeight--type` | `dimension` |
| `--ds-typography-roles-headings-steps-h6-lineHeight--value` | `{typography.scale.lineHeight.300}` |
| `--ds-typography-roles-headings-steps-h6-letterSpacing` | `{typography.scale.letterSpacing.300}` |
| `--ds-typography-roles-headings-steps-h6-letterSpacing--type` | `dimension` |
| `--ds-typography-roles-headings-steps-h6-letterSpacing--value` | `{typography.scale.letterSpacing.300}` |
| `--ds-typography-roles-headings-family` | `{typography.families.sans}` |
| `--ds-typography-roles-headings-family--type` | `fontFamily` |
| … | _(108 more)_ |

## semanticColors


| CSS variable | Value |
|-------------|-------|
| `--ds-semanticColors-icon-info-dark` | `{colors.primary.dark.400}` |
| `--ds-semanticColors-icon-info-dark--type` | `color` |
| `--ds-semanticColors-icon-info-dark--value` | `{colors.primary.dark.400}` |
| `--ds-semanticColors-icon-info-light` | `{colors.primary.light.600}` |
| `--ds-semanticColors-icon-info-light--type` | `color` |
| `--ds-semanticColors-icon-info-light--value` | `{colors.primary.light.600}` |
| `--ds-semanticColors-icon-info-usage-en` | `Help / info icons that open tooltips, neutral notifications.` |
| `--ds-semanticColors-icon-info-usage-es` | `Iconos de ayuda / info que abren tooltips, notificaciones neutras.` |
| `--ds-semanticColors-icon-info-example-en` | `Question-mark icon next to a label that opens a help tooltip.` |
| `--ds-semanticColors-icon-info-example-es` | `Icono de interrogación junto a una label que abre un tooltip de ayuda.` |
| `--ds-semanticColors-icon-info-description-en` | `Icon colour for informational hints.` |
| `--ds-semanticColors-icon-info-description-es` | `Color de icono para tips informativos.` |
| `--ds-semanticColors-icon-brand-dark` | `{colors.primary.dark.400}` |
| `--ds-semanticColors-icon-brand-dark--type` | `color` |
| `--ds-semanticColors-icon-brand-dark--value` | `{colors.primary.dark.400}` |
| `--ds-semanticColors-icon-brand-light` | `{colors.primary.light.600}` |
| `--ds-semanticColors-icon-brand-light--type` | `color` |
| `--ds-semanticColors-icon-brand-light--value` | `{colors.primary.light.600}` |
| `--ds-semanticColors-icon-brand-usage-en` | `Marketing emphasis, brand-anchored icons in callouts and headers.` |
| `--ds-semanticColors-icon-brand-usage-es` | `Énfasis de marketing, iconos anclados a la marca en callouts y headers.` |
| `--ds-semanticColors-icon-brand-example-en` | `Brand mark in the navbar, branded badge icon.` |
| `--ds-semanticColors-icon-brand-example-es` | `Marca en la navbar, icono de badge con identidad.` |
| `--ds-semanticColors-icon-brand-description-en` | `Brand-coloured icon for emphasis on the system's identity.` |
| `--ds-semanticColors-icon-brand-description-es` | `Icono en color de marca para reforzar la identidad.` |
| `--ds-semanticColors-icon-error-dark` | `{colors.error.dark.400}` |
| `--ds-semanticColors-icon-error-dark--type` | `color` |
| `--ds-semanticColors-icon-error-dark--value` | `{colors.error.dark.400}` |
| `--ds-semanticColors-icon-error-light` | `{colors.error.light.600}` |
| `--ds-semanticColors-icon-error-light--type` | `color` |
| `--ds-semanticColors-icon-error-light--value` | `{colors.error.light.600}` |
| `--ds-semanticColors-icon-error-usage-en` | `Triangle / alert icons in error messages, inline validation glyphs.` |
| `--ds-semanticColors-icon-error-usage-es` | `Iconos de alerta / triángulo en mensajes de error, glifos de validación inline.` |
| `--ds-semanticColors-icon-error-example-en` | `Warning icon next to a failed form field.` |
| `--ds-semanticColors-icon-error-example-es` | `Icono de advertencia junto a un campo con error.` |
| `--ds-semanticColors-icon-error-description-en` | `Icon colour for error indicators.` |
| `--ds-semanticColors-icon-error-description-es` | `Color de icono para indicadores de error.` |
| `--ds-semanticColors-icon-primary-dark` | `{colors.neutral.dark.50}` |
| `--ds-semanticColors-icon-primary-dark--type` | `color` |
| `--ds-semanticColors-icon-primary-dark--value` | `{colors.neutral.dark.50}` |
| `--ds-semanticColors-icon-primary-light` | `{colors.neutral.light.900}` |
| `--ds-semanticColors-icon-primary-light--type` | `color` |
| `--ds-semanticColors-icon-primary-light--value` | `{colors.neutral.light.900}` |
| `--ds-semanticColors-icon-primary-usage-en` | `Standard icons next to body content. Pairs with `text.primary`.` |
| `--ds-semanticColors-icon-primary-usage-es` | `Iconos estándar junto al contenido. Acompaña a `text.primary`.` |
| `--ds-semanticColors-icon-primary-example-en` | `Search icon in the navbar, leading icon in a list row.` |
| `--ds-semanticColors-icon-primary-example-es` | `Icono de búsqueda en la navbar, icono inicial de una fila.` |
| `--ds-semanticColors-icon-primary-description-en` | `Default icon colour for icons paired with primary text.` |
| `--ds-semanticColors-icon-primary-description-es` | `Color por defecto para iconos que acompañan al texto primario.` |
| `--ds-semanticColors-icon-success-dark` | `{colors.success.dark.400}` |
| `--ds-semanticColors-icon-success-dark--type` | `color` |
| `--ds-semanticColors-icon-success-dark--value` | `{colors.success.dark.400}` |
| `--ds-semanticColors-icon-success-light` | `{colors.success.light.600}` |
| `--ds-semanticColors-icon-success-light--type` | `color` |
| `--ds-semanticColors-icon-success-light--value` | `{colors.success.light.600}` |
| `--ds-semanticColors-icon-success-usage-en` | `Tick / check icons in success states.` |
| `--ds-semanticColors-icon-success-usage-es` | `Iconos de check / tick en estados de éxito.` |
| `--ds-semanticColors-icon-success-example-en` | `Green check on a completed task.` |
| `--ds-semanticColors-icon-success-example-es` | `Check verde en una tarea completada.` |
| `--ds-semanticColors-icon-success-description-en` | `Icon colour for confirmation indicators.` |
| `--ds-semanticColors-icon-success-description-es` | `Color de icono para indicadores de confirmación.` |
| `--ds-semanticColors-icon-warning-dark` | `{colors.warning.dark.400}` |
| `--ds-semanticColors-icon-warning-dark--type` | `color` |
| `--ds-semanticColors-icon-warning-dark--value` | `{colors.warning.dark.400}` |
| `--ds-semanticColors-icon-warning-light` | `{colors.warning.light.600}` |
| `--ds-semanticColors-icon-warning-light--type` | `color` |
| `--ds-semanticColors-icon-warning-light--value` | `{colors.warning.light.600}` |
| `--ds-semanticColors-icon-warning-usage-en` | `Heads-up icons in warning callouts.` |
| `--ds-semanticColors-icon-warning-usage-es` | `Iconos de aviso en callouts de advertencia.` |
| `--ds-semanticColors-icon-warning-example-en` | `Caution triangle on a low-storage banner.` |
| `--ds-semanticColors-icon-warning-example-es` | `Triángulo de advertencia en un banner de almacenamiento bajo.` |
| `--ds-semanticColors-icon-warning-description-en` | `Icon colour for caution indicators.` |
| `--ds-semanticColors-icon-warning-description-es` | `Color de icono para indicadores de precaución.` |
| `--ds-semanticColors-icon-on-color-dark` | `{colors.neutral.dark.50}` |
| `--ds-semanticColors-icon-on-color-dark--type` | `color` |
| `--ds-semanticColors-icon-on-color-dark--value` | `{colors.neutral.dark.50}` |
| `--ds-semanticColors-icon-on-color-light` | `{colors.neutral.light.50}` |
| `--ds-semanticColors-icon-on-color-light--type` | `color` |
| `--ds-semanticColors-icon-on-color-light--value` | `{colors.neutral.light.50}` |
| `--ds-semanticColors-icon-on-color-usage-en` | `Pair with `surface.accent` / status surfaces. The classic white check inside a coloured button.` |
| `--ds-semanticColors-icon-on-color-usage-es` | `Acompaña a `surface.accent` o status surfaces. El típico check blanco dentro de un botón coloreado.` |
| `--ds-semanticColors-icon-on-color-example-en` | `Check icon inside a primary button.` |
| `--ds-semanticColors-icon-on-color-example-es` | `Icono de check dentro de un botón primario.` |
| `--ds-semanticColors-icon-on-color-description-en` | `Icon colour for surfaces using a brand or status fill.` |
| `--ds-semanticColors-icon-on-color-description-es` | `Color de icono para superficies con fill de marca o de estado.` |
| `--ds-semanticColors-icon-tertiary-dark` | `{colors.neutral.dark.600}` |
| `--ds-semanticColors-icon-tertiary-dark--type` | `color` |
| `--ds-semanticColors-icon-tertiary-dark--value` | `{colors.neutral.dark.600}` |
| `--ds-semanticColors-icon-tertiary-light` | `{colors.neutral.light.400}` |
| `--ds-semanticColors-icon-tertiary-light--type` | `color` |
| `--ds-semanticColors-icon-tertiary-light--value` | `{colors.neutral.light.400}` |
| `--ds-semanticColors-icon-tertiary-usage-en` | `Use on disabled controls or for very quiet visual cues.` |
| `--ds-semanticColors-icon-tertiary-usage-es` | `En controles deshabilitados o señales visuales muy discretas.` |
| `--ds-semanticColors-icon-tertiary-example-en` | `Disabled action icon, faded helper glyph.` |
| `--ds-semanticColors-icon-tertiary-example-es` | `Icono de acción deshabilitado, glifo de ayuda atenuado.` |
| `--ds-semanticColors-icon-tertiary-description-en` | `Lowest-emphasis icon colour. Often used for disabled-state icons.` |
| `--ds-semanticColors-icon-tertiary-description-es` | `Color de iconos con mínimo énfasis. Se usa también para estados deshabilitados.` |
| `--ds-semanticColors-icon-secondary-dark` | `{colors.neutral.dark.300}` |
| `--ds-semanticColors-icon-secondary-dark--type` | `color` |
| `--ds-semanticColors-icon-secondary-dark--value` | `{colors.neutral.dark.300}` |
| `--ds-semanticColors-icon-secondary-light` | `{colors.neutral.light.700}` |
| `--ds-semanticColors-icon-secondary-light--type` | `color` |
| `--ds-semanticColors-icon-secondary-light--value` | `{colors.neutral.light.700}` |
| `--ds-semanticColors-icon-secondary-usage-en` | `Decorative icons, metadata indicators, secondary affordances.` |
| `--ds-semanticColors-icon-secondary-usage-es` | `Iconos decorativos, indicadores de metadatos, controles secundarios.` |
| `--ds-semanticColors-icon-secondary-example-en` | `Calendar icon next to a timestamp.` |
| `--ds-semanticColors-icon-secondary-example-es` | `Icono de calendario junto a una fecha.` |
| `--ds-semanticColors-icon-secondary-description-en` | `Lower-emphasis icon colour for decorative or metadata icons.` |
| `--ds-semanticColors-icon-secondary-description-es` | `Color de menor énfasis para iconos decorativos o de metadatos.` |
| `--ds-semanticColors-icon-on-primary-dark` | `{colors.neutral.dark.50}` |
| `--ds-semanticColors-icon-on-primary-dark--type` | `color` |
| `--ds-semanticColors-icon-on-primary-dark--value` | `{colors.neutral.dark.50}` |
| `--ds-semanticColors-icon-on-primary-light` | `{colors.neutral.light.50}` |
| `--ds-semanticColors-icon-on-primary-light--type` | `color` |
| `--ds-semanticColors-icon-on-primary-light--value` | `{colors.neutral.light.50}` |
| `--ds-semanticColors-icon-on-primary-usage-en` | `Pair with primary filled surfaces — ensures icon contrast against saturated fills.` |
| `--ds-semanticColors-icon-on-primary-usage-es` | `Acompaña a superficies rellenas primarias — garantiza contraste del icono sobre fills saturados.` |
| `--ds-semanticColors-icon-on-primary-example-en` | `Leading icon inside a primary filled button.` |
| `--ds-semanticColors-icon-on-primary-example-es` | `Icono inicial dentro de un botón relleno primario.` |
| `--ds-semanticColors-icon-on-primary-description-en` | `Icon colour for primary elements placed on a coloured/filled background.` |
| `--ds-semanticColors-icon-on-primary-description-es` | `Color de icono para elementos primarios sobre un fondo coloreado/relleno.` |
| `--ds-semanticColors-icon-on-tertiary-dark` | `{colors.neutral.dark.50}` |
| `--ds-semanticColors-icon-on-tertiary-dark--type` | `color` |
| `--ds-semanticColors-icon-on-tertiary-dark--value` | `{colors.neutral.dark.50}` |
| `--ds-semanticColors-icon-on-tertiary-light` | `{colors.neutral.light.50}` |
| `--ds-semanticColors-icon-on-tertiary-light--type` | `color` |
| `--ds-semanticColors-icon-on-tertiary-light--value` | `{colors.neutral.light.50}` |
| `--ds-semanticColors-icon-on-tertiary-usage-en` | `Pair with tertiary filled surfaces — use when a quiet filled surface still needs an icon.` |
| `--ds-semanticColors-icon-on-tertiary-usage-es` | `Acompaña a superficies rellenas terciarias — úsalo cuando una superficie rellena discreta aún necesita un icono.` |
| `--ds-semanticColors-icon-on-tertiary-example-en` | `Icon inside a tertiary filled badge or label.` |
| `--ds-semanticColors-icon-on-tertiary-example-es` | `Icono dentro de un badge o label relleno terciario.` |
| `--ds-semanticColors-icon-on-tertiary-description-en` | `Icon colour for tertiary elements placed on a coloured/filled background.` |
| `--ds-semanticColors-icon-on-tertiary-description-es` | `Color de icono para elementos terciarios sobre un fondo coloreado/relleno.` |
| `--ds-semanticColors-icon-on-secondary-dark` | `{colors.neutral.dark.50}` |
| `--ds-semanticColors-icon-on-secondary-dark--type` | `color` |
| `--ds-semanticColors-icon-on-secondary-dark--value` | `{colors.neutral.dark.50}` |
| `--ds-semanticColors-icon-on-secondary-light` | `{colors.neutral.light.50}` |
| `--ds-semanticColors-icon-on-secondary-light--type` | `color` |
| `--ds-semanticColors-icon-on-secondary-light--value` | `{colors.neutral.light.50}` |
| `--ds-semanticColors-icon-on-secondary-usage-en` | `Pair with secondary filled surfaces to keep icons readable over the fill.` |
| `--ds-semanticColors-icon-on-secondary-usage-es` | `Acompaña a superficies rellenas secundarias para mantener legibilidad del icono sobre el fill.` |
| `--ds-semanticColors-icon-on-secondary-example-en` | `Leading icon inside a secondary filled button or chip.` |
| `--ds-semanticColors-icon-on-secondary-example-es` | `Icono inicial dentro de un botón relleno secundario o chip.` |
| `--ds-semanticColors-icon-on-secondary-description-en` | `Icon colour for secondary elements placed on a coloured/filled background.` |
| `--ds-semanticColors-icon-on-secondary-description-es` | `Color de icono para elementos secundarios sobre un fondo coloreado/relleno.` |
| `--ds-semanticColors-text-info-dark` | `{colors.primary.dark.400}` |
| `--ds-semanticColors-text-info-dark--type` | `color` |
| `--ds-semanticColors-text-info-dark--value` | `{colors.primary.dark.400}` |
| `--ds-semanticColors-text-info-light` | `{colors.primary.light.600}` |
| `--ds-semanticColors-text-info-light--type` | `color` |
| `--ds-semanticColors-text-info-light--value` | `{colors.primary.light.600}` |
| `--ds-semanticColors-text-info-usage-en` | `Neutral notifications, tips, announcements.` |
| `--ds-semanticColors-text-info-usage-es` | `Notificaciones neutras, tips, anuncios.` |
| `--ds-semanticColors-text-info-example-en` | `“Did you know…” tip in a help panel.` |
| `--ds-semanticColors-text-info-example-es` | `Tip “¿Sabías que…?” en un panel de ayuda.` |
| `--ds-semanticColors-text-info-description-en` | `Informational text colour.` |
| `--ds-semanticColors-text-info-description-es` | `Color para texto informativo.` |
| `--ds-semanticColors-text-link-dark` | `{colors.primary.dark.400}` |
| `--ds-semanticColors-text-link-dark--type` | `color` |
| `--ds-semanticColors-text-link-dark--value` | `{colors.primary.dark.400}` |
| `--ds-semanticColors-text-link-light` | `{colors.primary.light.600}` |
| `--ds-semanticColors-text-link-light--type` | `color` |
| `--ds-semanticColors-text-link-light--value` | `{colors.primary.light.600}` |
| `--ds-semanticColors-text-link-usage-en` | `Hyperlinks within paragraphs and lists. Underline by default for accessibility.` |
| `--ds-semanticColors-text-link-usage-es` | `Hipervínculos en párrafos y listas. Subrayado por defecto para accesibilidad.` |
| `--ds-semanticColors-text-link-example-en` | `Inline anchor inside body copy.` |
| `--ds-semanticColors-text-link-example-es` | `Anchor inline en el cuerpo del texto.` |
| `--ds-semanticColors-text-link-description-en` | `Inline link colour.` |
| `--ds-semanticColors-text-link-description-es` | `Color para enlaces en línea.` |
| `--ds-semanticColors-text-brand-dark` | `{colors.primary.dark.400}` |
| `--ds-semanticColors-text-brand-dark--type` | `color` |
| `--ds-semanticColors-text-brand-dark--value` | `{colors.primary.dark.400}` |
| `--ds-semanticColors-text-brand-light` | `{colors.primary.light.600}` |
| `--ds-semanticColors-text-brand-light--type` | `color` |
| `--ds-semanticColors-text-brand-light--value` | `{colors.primary.light.600}` |
| `--ds-semanticColors-text-brand-usage-en` | `Logos in copy, marketing emphasis, brand-anchored callouts.` |
| `--ds-semanticColors-text-brand-usage-es` | `Logos en el copy, emfasis de marketing, callouts ancladas a la marca.` |
| `--ds-semanticColors-text-brand-example-en` | `Brand name highlighted in a hero subtitle.` |
| `--ds-semanticColors-text-brand-example-es` | `Nombre de marca destacado en el subtítulo de un hero.` |
| `--ds-semanticColors-text-brand-description-en` | `Brand-coloured text for emphasis without acting as a link.` |
| `--ds-semanticColors-text-brand-description-es` | `Texto en color de marca para énfasis sin ser enlace.` |
| `--ds-semanticColors-text-error-dark` | `{colors.error.dark.400}` |
| `--ds-semanticColors-text-error-dark--type` | `color` |
| `--ds-semanticColors-text-error-dark--value` | `{colors.error.dark.400}` |
| `--ds-semanticColors-text-error-light` | `{colors.error.light.600}` |
| `--ds-semanticColors-text-error-light--type` | `color` |
| `--ds-semanticColors-text-error-light--value` | `{colors.error.light.600}` |
| `--ds-semanticColors-text-error-usage-en` | `Field-level error messages, critical alert copy.` |
| `--ds-semanticColors-text-error-usage-es` | `Mensajes de error a nivel de campo, copy de alertas críticas.` |
| `--ds-semanticColors-text-error-example-en` | `Form validation error under an input.` |
| `--ds-semanticColors-text-error-example-es` | `Error de validación de formulario bajo un input.` |
| `--ds-semanticColors-text-error-description-en` | `Error and validation text.` |
| `--ds-semanticColors-text-error-description-es` | `Texto de error y validación.` |
| `--ds-semanticColors-text-primary-dark` | `{colors.neutral.dark.50}` |
| `--ds-semanticColors-text-primary-dark--type` | `color` |
| `--ds-semanticColors-text-primary-dark--value` | `{colors.neutral.dark.50}` |
| `--ds-semanticColors-text-primary-light` | `{colors.neutral.light.900}` |
| `--ds-semanticColors-text-primary-light--type` | `color` |
| `--ds-semanticColors-text-primary-light--value` | `{colors.neutral.light.900}` |
| `--ds-semanticColors-text-primary-usage-en` | `Default for any meaningful content on a neutral surface.` |
| `--ds-semanticColors-text-primary-usage-es` | `Por defecto para cualquier contenido importante en superficie neutra.` |
| … | _(1324 more)_ |
