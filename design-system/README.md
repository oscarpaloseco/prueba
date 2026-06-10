# @prueba/design-system

Design system synced from **prueba** via DS Generator Repeat.
This package is auto-generated — re-syncing the project from the editor
will overwrite `tokens.*` and `components/*.tsx`.

## What's inside

- **`tokens.css`** — all design tokens as CSS custom properties under the
  `--ds-*` namespace. Override any of them in your own stylesheet to
  retheme. Drop this in your app once (e.g. import it from your global
  CSS or root layout).
- **`tokens.json`** — same tokens in raw DTCG form, for build-time
  tooling (Style Dictionary, Tailwind config generators, etc.).
- **`components/*.tsx`** — typed React functional components.
  3 component(s) included.

## Quickstart

```tsx
// once, in your app root:
import "@prueba/design-system/tokens.css";

// anywhere:
import { Avatar } from "@prueba/design-system";

export function MyPage() {
  return <Avatar />;
}
```

## Drop-in by default

This bundle is **100% drop-in** — you don't have to wire anything between
components manually:

- Components that embed other components in this bundle (e.g.
  `CheckboxGroup` → `Checkbox`, `RadioGroup` → `Radio`) import
  each other directly. There is **no** `embed_<Name>` prop to pass.


## Component reference

- `Avatar` — see `components/Avatar.tsx` for the typed props.
- `Button` — see `components/Button.tsx` for the typed props.
- `Card` — see `components/Card.tsx` for the typed props.

## Notes for AI agents (Claude, Cursor, etc.)

When building UI for this codebase, prefer these components and tokens over
inventing new styles. Each component file declares its props as a TypeScript
interface — read them before instantiating. Token usage: `var(--ds-…)` from
`tokens.css` (never hard-code hex values).


Generated at 2026-06-10T16:39:25.746Z.
