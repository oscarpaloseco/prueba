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

## Grid

_Breakpoints, gutters, margins and column counts._

| CSS variable | Value |
|-------------|-------|
| `--ds-grid-gutter-lg` | `{sizes.scale.8}` |
| `--ds-grid-gutter-lg--type` | `dimension` |
| `--ds-grid-gutter-lg--value` | `{sizes.scale.8}` |
| `--ds-grid-gutter-lg--description` | `shadcn-adjacent (not a shadcn token — editable base for your system).` |
| `--ds-grid-gutter-md` | `{sizes.scale.6}` |
| `--ds-grid-gutter-md--type` | `dimension` |
| `--ds-grid-gutter-md--value` | `{sizes.scale.6}` |
| `--ds-grid-gutter-md--description` | `shadcn-adjacent (not a shadcn token — editable base for your system).` |
| `--ds-grid-gutter-sm` | `{sizes.scale.4}` |
| `--ds-grid-gutter-sm--type` | `dimension` |
| `--ds-grid-gutter-sm--value` | `{sizes.scale.4}` |
| `--ds-grid-gutter-sm--description` | `shadcn-adjacent (not a shadcn token — editable base for your system).` |
| `--ds-grid-gutter-xlg` | `{sizes.scale.8}` |
| `--ds-grid-gutter-xlg--type` | `dimension` |
| `--ds-grid-gutter-xlg--value` | `{sizes.scale.8}` |
| `--ds-grid-gutter-xlg--description` | `shadcn-adjacent (not a shadcn token — editable base for your system).` |
| `--ds-grid-margin-lg` | `{sizes.scale.8}` |
| `--ds-grid-margin-lg--type` | `dimension` |
| `--ds-grid-margin-lg--value` | `{sizes.scale.8}` |
| `--ds-grid-margin-lg--description` | `shadcn-adjacent (not a shadcn token — editable base for your system).` |
| `--ds-grid-margin-md` | `{sizes.scale.6}` |
| `--ds-grid-margin-md--type` | `dimension` |
| `--ds-grid-margin-md--value` | `{sizes.scale.6}` |
| `--ds-grid-margin-md--description` | `shadcn-adjacent (not a shadcn token — editable base for your system).` |
| `--ds-grid-margin-sm` | `{sizes.scale.4}` |
| `--ds-grid-margin-sm--type` | `dimension` |
| `--ds-grid-margin-sm--value` | `{sizes.scale.4}` |
| `--ds-grid-margin-sm--description` | `shadcn-adjacent (not a shadcn token — editable base for your system).` |
| `--ds-grid-margin-xlg` | `{sizes.scale.8}` |
| `--ds-grid-margin-xlg--type` | `dimension` |
| `--ds-grid-margin-xlg--value` | `{sizes.scale.8}` |
| `--ds-grid-margin-xlg--description` | `shadcn-adjacent (not a shadcn token — editable base for your system).` |
| `--ds-grid-columns-lg` | `12` |
| `--ds-grid-columns-lg--type` | `number` |
| `--ds-grid-columns-lg--value` | `12` |
| `--ds-grid-columns-md` | `8` |
| `--ds-grid-columns-md--type` | `number` |
| `--ds-grid-columns-md--value` | `8` |
| `--ds-grid-columns-sm` | `4` |
| `--ds-grid-columns-sm--type` | `number` |
| `--ds-grid-columns-sm--value` | `4` |
| `--ds-grid-columns-max` | `12` |
| `--ds-grid-columns-max--type` | `number` |
| `--ds-grid-columns-max--value` | `12` |
| `--ds-grid-columns-xlg` | `12` |
| `--ds-grid-columns-xlg--type` | `number` |
| `--ds-grid-columns-xlg--value` | `12` |
| `--ds-grid-breakpoints-lg` | `1024px` |
| `--ds-grid-breakpoints-lg--type` | `dimension` |
| `--ds-grid-breakpoints-lg--value` | `1024px` |
| `--ds-grid-breakpoints-md` | `768px` |
| `--ds-grid-breakpoints-md--type` | `dimension` |
| `--ds-grid-breakpoints-md--value` | `768px` |
| `--ds-grid-breakpoints-sm` | `640px` |
| `--ds-grid-breakpoints-sm--type` | `dimension` |
| `--ds-grid-breakpoints-sm--value` | `640px` |
| `--ds-grid-breakpoints-max` | `1536px` |
| `--ds-grid-breakpoints-max--type` | `dimension` |
| `--ds-grid-breakpoints-max--value` | `1536px` |
| `--ds-grid-breakpoints-xlg` | `1280px` |
| `--ds-grid-breakpoints-xlg--type` | `dimension` |
| `--ds-grid-breakpoints-xlg--value` | `1280px` |

## Icon (glyph colour)

_Fill colour for SVG glyphs and icon sprites._

| CSS variable | Value |
|-------------|-------|
| `--ds-icon-lg` | `24px` |
| `--ds-icon-lg--type` | `dimension` |
| `--ds-icon-lg--value` | `24px` |
| `--ds-icon-md` | `20px` |
| `--ds-icon-md--type` | `dimension` |
| `--ds-icon-md--value` | `20px` |
| `--ds-icon-sm` | `16px` |
| `--ds-icon-sm--type` | `dimension` |
| `--ds-icon-sm--value` | `16px` |

## Sizes

_Primitive size scale (dimensions, icon sizes)._

| CSS variable | Value |
|-------------|-------|
| `--ds-sizes-scale-1` | `4px` |
| `--ds-sizes-scale-1--type` | `dimension` |
| `--ds-sizes-scale-1--value` | `4px` |
| `--ds-sizes-scale-2` | `8px` |
| `--ds-sizes-scale-2--type` | `dimension` |
| `--ds-sizes-scale-2--value` | `8px` |
| `--ds-sizes-scale-3` | `12px` |
| `--ds-sizes-scale-3--type` | `dimension` |
| `--ds-sizes-scale-3--value` | `12px` |
| `--ds-sizes-scale-4` | `16px` |
| `--ds-sizes-scale-4--type` | `dimension` |
| `--ds-sizes-scale-4--value` | `16px` |
| `--ds-sizes-scale-5` | `20px` |
| `--ds-sizes-scale-5--type` | `dimension` |
| `--ds-sizes-scale-5--value` | `20px` |
| `--ds-sizes-scale-6` | `24px` |
| `--ds-sizes-scale-6--type` | `dimension` |
| `--ds-sizes-scale-6--value` | `24px` |
| `--ds-sizes-scale-7` | `28px` |
| `--ds-sizes-scale-7--type` | `dimension` |
| `--ds-sizes-scale-7--value` | `28px` |
| `--ds-sizes-scale-8` | `32px` |
| `--ds-sizes-scale-8--type` | `dimension` |
| `--ds-sizes-scale-8--value` | `32px` |
| `--ds-sizes-scale-9` | `36px` |
| `--ds-sizes-scale-9--type` | `dimension` |
| `--ds-sizes-scale-9--value` | `36px` |
| `--ds-sizes-scale-10` | `40px` |
| `--ds-sizes-scale-10--type` | `dimension` |
| `--ds-sizes-scale-10--value` | `40px` |
| `--ds-sizes-scale-11` | `44px` |
| `--ds-sizes-scale-11--type` | `dimension` |
| `--ds-sizes-scale-11--value` | `44px` |
| `--ds-sizes-scale-12` | `48px` |
| `--ds-sizes-scale-12--type` | `dimension` |
| `--ds-sizes-scale-12--value` | `48px` |
| `--ds-sizes-scale-14` | `56px` |
| `--ds-sizes-scale-14--type` | `dimension` |
| `--ds-sizes-scale-14--value` | `56px` |
| `--ds-sizes-scale-16` | `64px` |
| `--ds-sizes-scale-16--type` | `dimension` |
| `--ds-sizes-scale-16--value` | `64px` |
| `--ds-sizes-scale-20` | `80px` |
| `--ds-sizes-scale-20--type` | `dimension` |
| `--ds-sizes-scale-20--value` | `80px` |
| `--ds-sizes-scale-24` | `96px` |
| `--ds-sizes-scale-24--type` | `dimension` |
| `--ds-sizes-scale-24--value` | `96px` |
| `--ds-sizes-scale-none` | `0px` |
| `--ds-sizes-scale-none--type` | `dimension` |
| `--ds-sizes-scale-none--value` | `0px` |
| `--ds-sizes-components-lg` | `{sizes.scale.10}` |
| `--ds-sizes-components-lg--type` | `dimension` |
| `--ds-sizes-components-lg--value` | `{sizes.scale.10}` |
| `--ds-sizes-components-md` | `{sizes.scale.9}` |
| `--ds-sizes-components-md--type` | `dimension` |
| `--ds-sizes-components-md--value` | `{sizes.scale.9}` |
| `--ds-sizes-components-sm` | `{sizes.scale.8}` |
| `--ds-sizes-components-sm--type` | `dimension` |
| `--ds-sizes-components-sm--value` | `{sizes.scale.8}` |

## colors


| CSS variable | Value |
|-------------|-------|
| `--ds-colors-red-name` | `red` |
| `--ds-colors-red-ramp-50` | `#fef2f2` |
| `--ds-colors-red-ramp-100` | `#fee2e2` |
| `--ds-colors-red-ramp-200` | `#fecaca` |
| `--ds-colors-red-ramp-300` | `#fca5a5` |
| `--ds-colors-red-ramp-400` | `#f87171` |
| `--ds-colors-red-ramp-500` | `#ef4444` |
| `--ds-colors-red-ramp-600` | `#dc2626` |
| `--ds-colors-red-ramp-700` | `#b91c1c` |
| `--ds-colors-red-ramp-800` | `#991b1b` |
| `--ds-colors-red-ramp-900` | `#7f1d1d` |
| `--ds-colors-red-ramp-950` | `#450a0a` |
| `--ds-colors-red-source` | `custom` |
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
| `--ds-colors-blue-source` | `custom` |
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
| `--ds-colors-green-source` | `custom` |
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
| `--ds-colors-orange-source` | `custom` |
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
| `--ds-colors-neutral-source` | `custom` |
| `--ds-colors-turquesa-name` | `turquesa` |
| `--ds-colors-turquesa-ramp-50` | `#ebfffe` |
| `--ds-colors-turquesa-ramp-100` | `#ddfffd` |
| `--ds-colors-turquesa-ramp-200` | `#aafffc` |
| `--ds-colors-turquesa-ramp-300` | `#75f6f3` |
| `--ds-colors-turquesa-ramp-400` | `#57efec` |
| `--ds-colors-turquesa-ramp-500` | `#4bece9` |
| `--ds-colors-turquesa-ramp-600` | `#3ad9d6` |
| `--ds-colors-turquesa-ramp-700` | `#00a19f` |
| `--ds-colors-turquesa-ramp-800` | `#00504f` |
| `--ds-colors-turquesa-ramp-900` | `#002121` |
| `--ds-colors-turquesa-ramp-950` | `#001313` |
| `--ds-colors-turquesa-seed` | `#4bece9` |
| `--ds-colors-turquesa-source` | `custom` |

## Motion

_Duration and easing values for transitions._

| CSS variable | Value |
|-------------|-------|
| `--ds-motion-easing-in--type` | `cubicBezier` |
| `--ds-motion-easing-out--type` | `cubicBezier` |
| `--ds-motion-easing-in-out--type` | `cubicBezier` |
| `--ds-motion-duration-fast` | `150ms` |
| `--ds-motion-duration-fast--type` | `duration` |
| `--ds-motion-duration-fast--value` | `150ms` |
| `--ds-motion-duration-slow` | `300ms` |
| `--ds-motion-duration-slow--type` | `duration` |
| `--ds-motion-duration-slow--value` | `300ms` |
| `--ds-motion-duration-normal` | `200ms` |
| `--ds-motion-duration-normal--type` | `duration` |
| `--ds-motion-duration-normal--value` | `200ms` |

## Border radius

_Corner radius tokens for containers and controls._

| CSS variable | Value |
|-------------|-------|
| `--ds-radius-lg` | `10px` |
| `--ds-radius-lg--type` | `dimension` |
| `--ds-radius-lg--value` | `10px` |
| `--ds-radius-lg--description` | `--radius (shadcn v4 base = 0.625rem).` |
| `--ds-radius-md` | `8px` |
| `--ds-radius-md--type` | `dimension` |
| `--ds-radius-md--value` | `8px` |
| `--ds-radius-md--description` | `calc(--radius - 2px).` |
| `--ds-radius-sm` | `6px` |
| `--ds-radius-sm--type` | `dimension` |
| `--ds-radius-sm--value` | `6px` |
| `--ds-radius-sm--description` | `calc(--radius - 4px).` |
| `--ds-radius-xl` | `14px` |
| `--ds-radius-xl--type` | `dimension` |
| `--ds-radius-xl--value` | `14px` |
| `--ds-radius-xl--description` | `calc(--radius + 4px).` |
| `--ds-radius-2xl` | `18px` |
| `--ds-radius-2xl--type` | `dimension` |
| `--ds-radius-2xl--value` | `18px` |
| `--ds-radius-full` | `9999px` |
| `--ds-radius-full--type` | `dimension` |
| `--ds-radius-full--value` | `9999px` |
| `--ds-radius-full--description` | `Pill / circle.` |
| `--ds-radius-none` | `0px` |
| `--ds-radius-none--type` | `dimension` |
| `--ds-radius-none--value` | `0px` |
| `--ds-radius-none--description` | `Square corners.` |

## Shadow

_Box-shadow elevation levels._

| CSS variable | Value |
|-------------|-------|
| `--ds-shadow-color` | `#000000` |
| `--ds-shadow-color--type` | `color` |
| `--ds-shadow-color--value` | `#000000` |
| `--ds-shadow-levels-lg--type` | `shadow` |
| `--ds-shadow-levels-lg--description` | `Dialogs, sheets.` |
| `--ds-shadow-levels-md--type` | `shadow` |
| `--ds-shadow-levels-md--description` | `Popovers, dropdowns, hover-cards.` |
| `--ds-shadow-levels-sm--type` | `shadow` |
| `--ds-shadow-levels-sm--description` | `Subtle — cards, inputs.` |
| `--ds-shadow-levels-none--type` | `shadow` |
| `--ds-shadow-levels-none--description` | `No shadow.` |

## Z-index

_Stacking order levels._

| CSS variable | Value |
|-------------|-------|
| `--ds-zIndex-modal` | `300` |
| `--ds-zIndex-modal--type` | `number` |
| `--ds-zIndex-modal--value` | `300` |
| `--ds-zIndex-modal--description` | `shadcn-adjacent (not a shadcn token — editable base for your system).` |
| `--ds-zIndex-sticky` | `100` |
| `--ds-zIndex-sticky--type` | `number` |
| `--ds-zIndex-sticky--value` | `100` |
| `--ds-zIndex-sticky--description` | `shadcn-adjacent (not a shadcn token — editable base for your system).` |
| `--ds-zIndex-overlay` | `200` |
| `--ds-zIndex-overlay--type` | `number` |
| `--ds-zIndex-overlay--value` | `200` |
| `--ds-zIndex-overlay--description` | `shadcn-adjacent (not a shadcn token — editable base for your system).` |
| `--ds-zIndex-popover` | `400` |
| `--ds-zIndex-popover--type` | `number` |
| `--ds-zIndex-popover--value` | `400` |
| `--ds-zIndex-popover--description` | `shadcn-adjacent (not a shadcn token — editable base for your system).` |
| `--ds-zIndex-tooltip` | `500` |
| `--ds-zIndex-tooltip--type` | `number` |
| `--ds-zIndex-tooltip--value` | `500` |
| `--ds-zIndex-tooltip--description` | `shadcn-adjacent (not a shadcn token — editable base for your system).` |
| `--ds-zIndex-dropdown` | `50` |
| `--ds-zIndex-dropdown--type` | `number` |
| `--ds-zIndex-dropdown--value` | `50` |
| `--ds-zIndex-dropdown--description` | `shadcn-adjacent (not a shadcn token — editable base for your system).` |

## Opacity

_Named opacity levels._

| CSS variable | Value |
|-------------|-------|
| `--ds-opacity-0` | `0` |
| `--ds-opacity-0--type` | `number` |
| `--ds-opacity-0--value` | `0` |
| `--ds-opacity-0--description` | `shadcn-adjacent (not a shadcn token — editable base for your system).` |
| `--ds-opacity-5` | `0.05` |
| `--ds-opacity-5--type` | `number` |
| `--ds-opacity-5--value` | `0.05` |
| `--ds-opacity-5--description` | `shadcn-adjacent (not a shadcn token — editable base for your system).` |
| `--ds-opacity-10` | `0.1` |
| `--ds-opacity-10--type` | `number` |
| `--ds-opacity-10--value` | `0.1` |
| `--ds-opacity-10--description` | `shadcn-adjacent (not a shadcn token — editable base for your system).` |
| `--ds-opacity-15` | `0.15` |
| `--ds-opacity-15--type` | `number` |
| `--ds-opacity-15--value` | `0.15` |
| `--ds-opacity-15--description` | `shadcn-adjacent (not a shadcn token — editable base for your system).` |
| `--ds-opacity-20` | `0.2` |
| `--ds-opacity-20--type` | `number` |
| `--ds-opacity-20--value` | `0.2` |
| `--ds-opacity-20--description` | `shadcn-adjacent (not a shadcn token — editable base for your system).` |
| `--ds-opacity-25` | `0.25` |
| `--ds-opacity-25--type` | `number` |
| `--ds-opacity-25--value` | `0.25` |
| `--ds-opacity-25--description` | `shadcn-adjacent (not a shadcn token — editable base for your system).` |
| `--ds-opacity-50` | `0.5` |
| `--ds-opacity-50--type` | `number` |
| `--ds-opacity-50--value` | `0.5` |
| `--ds-opacity-50--description` | `shadcn-adjacent (not a shadcn token — editable base for your system).` |
| `--ds-opacity-75` | `0.75` |
| `--ds-opacity-75--type` | `number` |
| `--ds-opacity-75--value` | `0.75` |
| `--ds-opacity-75--description` | `shadcn-adjacent (not a shadcn token — editable base for your system).` |
| `--ds-opacity-90` | `0.9` |
| `--ds-opacity-90--type` | `number` |
| `--ds-opacity-90--value` | `0.9` |
| `--ds-opacity-90--description` | `shadcn-adjacent (not a shadcn token — editable base for your system).` |
| `--ds-opacity-100` | `1` |
| `--ds-opacity-100--type` | `number` |
| `--ds-opacity-100--value` | `1` |
| `--ds-opacity-100--description` | `shadcn-adjacent (not a shadcn token — editable base for your system).` |

## Spacing

_Margin, padding and gap values from the spacing scale._

| CSS variable | Value |
|-------------|-------|
| `--ds-spacing-1` | `{sizes.scale.1}` |
| `--ds-spacing-1--type` | `dimension` |
| `--ds-spacing-1--value` | `{sizes.scale.1}` |
| `--ds-spacing-2` | `{sizes.scale.2}` |
| `--ds-spacing-2--type` | `dimension` |
| `--ds-spacing-2--value` | `{sizes.scale.2}` |
| `--ds-spacing-3` | `{sizes.scale.3}` |
| `--ds-spacing-3--type` | `dimension` |
| `--ds-spacing-3--value` | `{sizes.scale.3}` |
| `--ds-spacing-4` | `{sizes.scale.4}` |
| `--ds-spacing-4--type` | `dimension` |
| `--ds-spacing-4--value` | `{sizes.scale.4}` |
| `--ds-spacing-5` | `{sizes.scale.5}` |
| `--ds-spacing-5--type` | `dimension` |
| `--ds-spacing-5--value` | `{sizes.scale.5}` |
| `--ds-spacing-6` | `{sizes.scale.6}` |
| `--ds-spacing-6--type` | `dimension` |
| `--ds-spacing-6--value` | `{sizes.scale.6}` |
| `--ds-spacing-7` | `{sizes.scale.7}` |
| `--ds-spacing-7--type` | `dimension` |
| `--ds-spacing-7--value` | `{sizes.scale.7}` |
| `--ds-spacing-8` | `{sizes.scale.8}` |
| `--ds-spacing-8--type` | `dimension` |
| `--ds-spacing-8--value` | `{sizes.scale.8}` |
| `--ds-spacing-9` | `{sizes.scale.9}` |
| `--ds-spacing-9--type` | `dimension` |
| `--ds-spacing-9--value` | `{sizes.scale.9}` |
| `--ds-spacing-10` | `{sizes.scale.10}` |
| `--ds-spacing-10--type` | `dimension` |
| `--ds-spacing-10--value` | `{sizes.scale.10}` |
| `--ds-spacing-11` | `{sizes.scale.11}` |
| `--ds-spacing-11--type` | `dimension` |
| `--ds-spacing-11--value` | `{sizes.scale.11}` |
| `--ds-spacing-12` | `{sizes.scale.12}` |
| `--ds-spacing-12--type` | `dimension` |
| `--ds-spacing-12--value` | `{sizes.scale.12}` |
| `--ds-spacing-14` | `{sizes.scale.14}` |
| `--ds-spacing-14--type` | `dimension` |
| `--ds-spacing-14--value` | `{sizes.scale.14}` |
| `--ds-spacing-16` | `{sizes.scale.16}` |
| `--ds-spacing-16--type` | `dimension` |
| `--ds-spacing-16--value` | `{sizes.scale.16}` |
| `--ds-spacing-20` | `{sizes.scale.20}` |
| `--ds-spacing-20--type` | `dimension` |
| `--ds-spacing-20--value` | `{sizes.scale.20}` |
| `--ds-spacing-24` | `{sizes.scale.24}` |
| `--ds-spacing-24--type` | `dimension` |
| `--ds-spacing-24--value` | `{sizes.scale.24}` |
| `--ds-spacing-none` | `{sizes.scale.none}` |
| `--ds-spacing-none--type` | `dimension` |
| `--ds-spacing-none--value` | `{sizes.scale.none}` |

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
| `--ds-typography-roles-body-steps-lg-fontSize` | `{typography.scale.fontSize.lg}` |
| `--ds-typography-roles-body-steps-lg-fontSize--type` | `dimension` |
| `--ds-typography-roles-body-steps-lg-fontSize--value` | `{typography.scale.fontSize.lg}` |
| `--ds-typography-roles-body-steps-lg-fontWeight` | `{typography.weights.regular}` |
| `--ds-typography-roles-body-steps-lg-fontWeight--type` | `fontWeight` |
| `--ds-typography-roles-body-steps-lg-fontWeight--value` | `{typography.weights.regular}` |
| `--ds-typography-roles-body-steps-lg-lineHeight` | `{typography.scale.lineHeight.lg}` |
| `--ds-typography-roles-body-steps-lg-lineHeight--type` | `dimension` |
| `--ds-typography-roles-body-steps-lg-lineHeight--value` | `{typography.scale.lineHeight.lg}` |
| `--ds-typography-roles-body-steps-lg-letterSpacing` | `{typography.scale.letterSpacing.lg}` |
| `--ds-typography-roles-body-steps-lg-letterSpacing--type` | `dimension` |
| `--ds-typography-roles-body-steps-lg-letterSpacing--value` | `{typography.scale.letterSpacing.lg}` |
| `--ds-typography-roles-body-steps-md-fontSize` | `{typography.scale.fontSize.base}` |
| `--ds-typography-roles-body-steps-md-fontSize--type` | `dimension` |
| `--ds-typography-roles-body-steps-md-fontSize--value` | `{typography.scale.fontSize.base}` |
| `--ds-typography-roles-body-steps-md-fontWeight` | `{typography.weights.regular}` |
| `--ds-typography-roles-body-steps-md-fontWeight--type` | `fontWeight` |
| `--ds-typography-roles-body-steps-md-fontWeight--value` | `{typography.weights.regular}` |
| `--ds-typography-roles-body-steps-md-lineHeight` | `{typography.scale.lineHeight.base}` |
| `--ds-typography-roles-body-steps-md-lineHeight--type` | `dimension` |
| `--ds-typography-roles-body-steps-md-lineHeight--value` | `{typography.scale.lineHeight.base}` |
| `--ds-typography-roles-body-steps-md-letterSpacing` | `{typography.scale.letterSpacing.base}` |
| `--ds-typography-roles-body-steps-md-letterSpacing--type` | `dimension` |
| `--ds-typography-roles-body-steps-md-letterSpacing--value` | `{typography.scale.letterSpacing.base}` |
| `--ds-typography-roles-body-steps-sm-fontSize` | `{typography.scale.fontSize.sm}` |
| `--ds-typography-roles-body-steps-sm-fontSize--type` | `dimension` |
| `--ds-typography-roles-body-steps-sm-fontSize--value` | `{typography.scale.fontSize.sm}` |
| `--ds-typography-roles-body-steps-sm-fontWeight` | `{typography.weights.regular}` |
| `--ds-typography-roles-body-steps-sm-fontWeight--type` | `fontWeight` |
| `--ds-typography-roles-body-steps-sm-fontWeight--value` | `{typography.weights.regular}` |
| `--ds-typography-roles-body-steps-sm-lineHeight` | `{typography.scale.lineHeight.sm}` |
| `--ds-typography-roles-body-steps-sm-lineHeight--type` | `dimension` |
| `--ds-typography-roles-body-steps-sm-lineHeight--value` | `{typography.scale.lineHeight.sm}` |
| `--ds-typography-roles-body-steps-sm-letterSpacing` | `{typography.scale.letterSpacing.sm}` |
| `--ds-typography-roles-body-steps-sm-letterSpacing--type` | `dimension` |
| `--ds-typography-roles-body-steps-sm-letterSpacing--value` | `{typography.scale.letterSpacing.sm}` |
| `--ds-typography-roles-body-steps-lg-semibold-fontSize` | `{typography.scale.fontSize.lg}` |
| `--ds-typography-roles-body-steps-lg-semibold-fontSize--type` | `dimension` |
| `--ds-typography-roles-body-steps-lg-semibold-fontSize--value` | `{typography.scale.fontSize.lg}` |
| `--ds-typography-roles-body-steps-lg-semibold-fontWeight` | `{typography.weights.semibold}` |
| `--ds-typography-roles-body-steps-lg-semibold-fontWeight--type` | `fontWeight` |
| `--ds-typography-roles-body-steps-lg-semibold-fontWeight--value` | `{typography.weights.semibold}` |
| `--ds-typography-roles-body-steps-lg-semibold-lineHeight` | `{typography.scale.lineHeight.lg}` |
| `--ds-typography-roles-body-steps-lg-semibold-lineHeight--type` | `dimension` |
| `--ds-typography-roles-body-steps-lg-semibold-lineHeight--value` | `{typography.scale.lineHeight.lg}` |
| `--ds-typography-roles-body-steps-lg-semibold-letterSpacing` | `{typography.scale.letterSpacing.lg}` |
| `--ds-typography-roles-body-steps-lg-semibold-letterSpacing--type` | `dimension` |
| `--ds-typography-roles-body-steps-lg-semibold-letterSpacing--value` | `{typography.scale.letterSpacing.lg}` |
| `--ds-typography-roles-body-steps-md-semibold-fontSize` | `{typography.scale.fontSize.base}` |
| `--ds-typography-roles-body-steps-md-semibold-fontSize--type` | `dimension` |
| `--ds-typography-roles-body-steps-md-semibold-fontSize--value` | `{typography.scale.fontSize.base}` |
| `--ds-typography-roles-body-steps-md-semibold-fontWeight` | `{typography.weights.semibold}` |
| `--ds-typography-roles-body-steps-md-semibold-fontWeight--type` | `fontWeight` |
| `--ds-typography-roles-body-steps-md-semibold-fontWeight--value` | `{typography.weights.semibold}` |
| `--ds-typography-roles-body-steps-md-semibold-lineHeight` | `{typography.scale.lineHeight.base}` |
| `--ds-typography-roles-body-steps-md-semibold-lineHeight--type` | `dimension` |
| `--ds-typography-roles-body-steps-md-semibold-lineHeight--value` | `{typography.scale.lineHeight.base}` |
| `--ds-typography-roles-body-steps-md-semibold-letterSpacing` | `{typography.scale.letterSpacing.base}` |
| `--ds-typography-roles-body-steps-md-semibold-letterSpacing--type` | `dimension` |
| `--ds-typography-roles-body-steps-md-semibold-letterSpacing--value` | `{typography.scale.letterSpacing.base}` |
| `--ds-typography-roles-body-steps-sm-semibold-fontSize` | `{typography.scale.fontSize.sm}` |
| `--ds-typography-roles-body-steps-sm-semibold-fontSize--type` | `dimension` |
| `--ds-typography-roles-body-steps-sm-semibold-fontSize--value` | `{typography.scale.fontSize.sm}` |
| `--ds-typography-roles-body-steps-sm-semibold-fontWeight` | `{typography.weights.semibold}` |
| `--ds-typography-roles-body-steps-sm-semibold-fontWeight--type` | `fontWeight` |
| `--ds-typography-roles-body-steps-sm-semibold-fontWeight--value` | `{typography.weights.semibold}` |
| `--ds-typography-roles-body-steps-sm-semibold-lineHeight` | `{typography.scale.lineHeight.sm}` |
| `--ds-typography-roles-body-steps-sm-semibold-lineHeight--type` | `dimension` |
| `--ds-typography-roles-body-steps-sm-semibold-lineHeight--value` | `{typography.scale.lineHeight.sm}` |
| `--ds-typography-roles-body-steps-sm-semibold-letterSpacing` | `{typography.scale.letterSpacing.sm}` |
| `--ds-typography-roles-body-steps-sm-semibold-letterSpacing--type` | `dimension` |
| `--ds-typography-roles-body-steps-sm-semibold-letterSpacing--value` | `{typography.scale.letterSpacing.sm}` |
| `--ds-typography-roles-body-family` | `{typography.families.sans}` |
| `--ds-typography-roles-body-family--type` | `fontFamily` |
| `--ds-typography-roles-body-family--value` | `{typography.families.sans}` |
| `--ds-typography-roles-code--meta-steps` | `1` |
| `--ds-typography-roles-code--meta-nomenclature` | `tshirt` |
| `--ds-typography-roles-code-steps-sm-fontSize` | `{typography.scale.fontSize.sm}` |
| `--ds-typography-roles-code-steps-sm-fontSize--type` | `dimension` |
| `--ds-typography-roles-code-steps-sm-fontSize--value` | `{typography.scale.fontSize.sm}` |
| `--ds-typography-roles-code-steps-sm-fontWeight` | `{typography.weights.regular}` |
| `--ds-typography-roles-code-steps-sm-fontWeight--type` | `fontWeight` |
| `--ds-typography-roles-code-steps-sm-fontWeight--value` | `{typography.weights.regular}` |
| `--ds-typography-roles-code-steps-sm-lineHeight` | `{typography.scale.lineHeight.sm}` |
| `--ds-typography-roles-code-steps-sm-lineHeight--type` | `dimension` |
| `--ds-typography-roles-code-steps-sm-lineHeight--value` | `{typography.scale.lineHeight.sm}` |
| `--ds-typography-roles-code-steps-sm-letterSpacing` | `{typography.scale.letterSpacing.sm}` |
| `--ds-typography-roles-code-steps-sm-letterSpacing--type` | `dimension` |
| `--ds-typography-roles-code-steps-sm-letterSpacing--value` | `{typography.scale.letterSpacing.sm}` |
| `--ds-typography-roles-code-family` | `{typography.families.mono}` |
| `--ds-typography-roles-code-family--type` | `fontFamily` |
| `--ds-typography-roles-code-family--value` | `{typography.families.mono}` |
| `--ds-typography-roles-label--meta-steps` | `2` |
| `--ds-typography-roles-label--meta-nomenclature` | `tshirt` |
| `--ds-typography-roles-label-steps-md-fontSize` | `{typography.scale.fontSize.base}` |
| `--ds-typography-roles-label-steps-md-fontSize--type` | `dimension` |
| `--ds-typography-roles-label-steps-md-fontSize--value` | `{typography.scale.fontSize.base}` |
| `--ds-typography-roles-label-steps-md-fontWeight` | `{typography.weights.medium}` |
| `--ds-typography-roles-label-steps-md-fontWeight--type` | `fontWeight` |
| `--ds-typography-roles-label-steps-md-fontWeight--value` | `{typography.weights.medium}` |
| `--ds-typography-roles-label-steps-md-lineHeight` | `{typography.scale.lineHeight.base}` |
| `--ds-typography-roles-label-steps-md-lineHeight--type` | `dimension` |
| `--ds-typography-roles-label-steps-md-lineHeight--value` | `{typography.scale.lineHeight.base}` |
| `--ds-typography-roles-label-steps-md-letterSpacing` | `{typography.scale.letterSpacing.base}` |
| `--ds-typography-roles-label-steps-md-letterSpacing--type` | `dimension` |
| `--ds-typography-roles-label-steps-md-letterSpacing--value` | `{typography.scale.letterSpacing.base}` |
| `--ds-typography-roles-label-steps-sm-fontSize` | `{typography.scale.fontSize.sm}` |
| `--ds-typography-roles-label-steps-sm-fontSize--type` | `dimension` |
| `--ds-typography-roles-label-steps-sm-fontSize--value` | `{typography.scale.fontSize.sm}` |
| `--ds-typography-roles-label-steps-sm-fontWeight` | `{typography.weights.medium}` |
| `--ds-typography-roles-label-steps-sm-fontWeight--type` | `fontWeight` |
| `--ds-typography-roles-label-steps-sm-fontWeight--value` | `{typography.weights.medium}` |
| `--ds-typography-roles-label-steps-sm-lineHeight` | `{typography.scale.lineHeight.sm}` |
| `--ds-typography-roles-label-steps-sm-lineHeight--type` | `dimension` |
| `--ds-typography-roles-label-steps-sm-lineHeight--value` | `{typography.scale.lineHeight.sm}` |
| `--ds-typography-roles-label-steps-sm-letterSpacing` | `{typography.scale.letterSpacing.sm}` |
| `--ds-typography-roles-label-steps-sm-letterSpacing--type` | `dimension` |
| `--ds-typography-roles-label-steps-sm-letterSpacing--value` | `{typography.scale.letterSpacing.sm}` |
| `--ds-typography-roles-label-family` | `{typography.families.sans}` |
| `--ds-typography-roles-label-family--type` | `fontFamily` |
| `--ds-typography-roles-label-family--value` | `{typography.families.sans}` |
| `--ds-typography-roles-caption--meta-steps` | `1` |
| `--ds-typography-roles-caption--meta-nomenclature` | `tshirt` |
| `--ds-typography-roles-caption-steps-sm-fontSize` | `{typography.scale.fontSize.xs}` |
| `--ds-typography-roles-caption-steps-sm-fontSize--type` | `dimension` |
| `--ds-typography-roles-caption-steps-sm-fontSize--value` | `{typography.scale.fontSize.xs}` |
| `--ds-typography-roles-caption-steps-sm-fontWeight` | `{typography.weights.regular}` |
| `--ds-typography-roles-caption-steps-sm-fontWeight--type` | `fontWeight` |
| `--ds-typography-roles-caption-steps-sm-fontWeight--value` | `{typography.weights.regular}` |
| `--ds-typography-roles-caption-steps-sm-lineHeight` | `{typography.scale.lineHeight.xs}` |
| `--ds-typography-roles-caption-steps-sm-lineHeight--type` | `dimension` |
| `--ds-typography-roles-caption-steps-sm-lineHeight--value` | `{typography.scale.lineHeight.xs}` |
| `--ds-typography-roles-caption-steps-sm-letterSpacing` | `{typography.scale.letterSpacing.xs}` |
| `--ds-typography-roles-caption-steps-sm-letterSpacing--type` | `dimension` |
| `--ds-typography-roles-caption-steps-sm-letterSpacing--value` | `{typography.scale.letterSpacing.xs}` |
| `--ds-typography-roles-caption-family` | `{typography.families.sans}` |
| `--ds-typography-roles-caption-family--type` | `fontFamily` |
| `--ds-typography-roles-caption-family--value` | `{typography.families.sans}` |
| `--ds-typography-roles-heading--meta-steps` | `4` |
| `--ds-typography-roles-heading--meta-nomenclature` | `tshirt` |
| `--ds-typography-roles-heading-steps-h1-fontSize` | `{typography.scale.fontSize.4xl}` |
| `--ds-typography-roles-heading-steps-h1-fontSize--type` | `dimension` |
| `--ds-typography-roles-heading-steps-h1-fontSize--value` | `{typography.scale.fontSize.4xl}` |
| `--ds-typography-roles-heading-steps-h1-fontWeight` | `{typography.weights.bold}` |
| `--ds-typography-roles-heading-steps-h1-fontWeight--type` | `fontWeight` |
| `--ds-typography-roles-heading-steps-h1-fontWeight--value` | `{typography.weights.bold}` |
| `--ds-typography-roles-heading-steps-h1-lineHeight` | `{typography.scale.lineHeight.4xl}` |
| `--ds-typography-roles-heading-steps-h1-lineHeight--type` | `dimension` |
| `--ds-typography-roles-heading-steps-h1-lineHeight--value` | `{typography.scale.lineHeight.4xl}` |
| `--ds-typography-roles-heading-steps-h1-letterSpacing` | `{typography.scale.letterSpacing.4xl}` |
| `--ds-typography-roles-heading-steps-h1-letterSpacing--type` | `dimension` |
| `--ds-typography-roles-heading-steps-h1-letterSpacing--value` | `{typography.scale.letterSpacing.4xl}` |
| `--ds-typography-roles-heading-steps-h2-fontSize` | `{typography.scale.fontSize.3xl}` |
| `--ds-typography-roles-heading-steps-h2-fontSize--type` | `dimension` |
| `--ds-typography-roles-heading-steps-h2-fontSize--value` | `{typography.scale.fontSize.3xl}` |
| `--ds-typography-roles-heading-steps-h2-fontWeight` | `{typography.weights.semibold}` |
| `--ds-typography-roles-heading-steps-h2-fontWeight--type` | `fontWeight` |
| `--ds-typography-roles-heading-steps-h2-fontWeight--value` | `{typography.weights.semibold}` |
| `--ds-typography-roles-heading-steps-h2-lineHeight` | `{typography.scale.lineHeight.3xl}` |
| `--ds-typography-roles-heading-steps-h2-lineHeight--type` | `dimension` |
| `--ds-typography-roles-heading-steps-h2-lineHeight--value` | `{typography.scale.lineHeight.3xl}` |
| `--ds-typography-roles-heading-steps-h2-letterSpacing` | `{typography.scale.letterSpacing.3xl}` |
| `--ds-typography-roles-heading-steps-h2-letterSpacing--type` | `dimension` |
| `--ds-typography-roles-heading-steps-h2-letterSpacing--value` | `{typography.scale.letterSpacing.3xl}` |
| `--ds-typography-roles-heading-steps-h3-fontSize` | `{typography.scale.fontSize.2xl}` |
| `--ds-typography-roles-heading-steps-h3-fontSize--type` | `dimension` |
| `--ds-typography-roles-heading-steps-h3-fontSize--value` | `{typography.scale.fontSize.2xl}` |
| `--ds-typography-roles-heading-steps-h3-fontWeight` | `{typography.weights.semibold}` |
| `--ds-typography-roles-heading-steps-h3-fontWeight--type` | `fontWeight` |
| `--ds-typography-roles-heading-steps-h3-fontWeight--value` | `{typography.weights.semibold}` |
| `--ds-typography-roles-heading-steps-h3-lineHeight` | `{typography.scale.lineHeight.2xl}` |
| `--ds-typography-roles-heading-steps-h3-lineHeight--type` | `dimension` |
| `--ds-typography-roles-heading-steps-h3-lineHeight--value` | `{typography.scale.lineHeight.2xl}` |
| `--ds-typography-roles-heading-steps-h3-letterSpacing` | `{typography.scale.letterSpacing.2xl}` |
| `--ds-typography-roles-heading-steps-h3-letterSpacing--type` | `dimension` |
| `--ds-typography-roles-heading-steps-h3-letterSpacing--value` | `{typography.scale.letterSpacing.2xl}` |
| `--ds-typography-roles-heading-steps-h4-fontSize` | `{typography.scale.fontSize.xl}` |
| `--ds-typography-roles-heading-steps-h4-fontSize--type` | `dimension` |
| `--ds-typography-roles-heading-steps-h4-fontSize--value` | `{typography.scale.fontSize.xl}` |
| `--ds-typography-roles-heading-steps-h4-fontWeight` | `{typography.weights.semibold}` |
| `--ds-typography-roles-heading-steps-h4-fontWeight--type` | `fontWeight` |
| `--ds-typography-roles-heading-steps-h4-fontWeight--value` | `{typography.weights.semibold}` |
| `--ds-typography-roles-heading-steps-h4-lineHeight` | `{typography.scale.lineHeight.xl}` |
| `--ds-typography-roles-heading-steps-h4-lineHeight--type` | `dimension` |
| `--ds-typography-roles-heading-steps-h4-lineHeight--value` | `{typography.scale.lineHeight.xl}` |
| `--ds-typography-roles-heading-steps-h4-letterSpacing` | `{typography.scale.letterSpacing.xl}` |
| `--ds-typography-roles-heading-steps-h4-letterSpacing--type` | `dimension` |
| `--ds-typography-roles-heading-steps-h4-letterSpacing--value` | `{typography.scale.letterSpacing.xl}` |
| `--ds-typography-roles-heading-family` | `{typography.families.sans}` |
| `--ds-typography-roles-heading-family--type` | `fontFamily` |
| `--ds-typography-roles-heading-family--value` | `{typography.families.sans}` |
| `--ds-typography-scale-fontSize-lg` | `18px` |
| … | _(86 more)_ |
