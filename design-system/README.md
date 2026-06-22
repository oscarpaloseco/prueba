# @shadcn/design-system

Design system synced from **Shadcn** via DS Generator Repeat.
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
  15 component(s) included.

## Quickstart

```tsx
// once, in your app root:
import "@shadcn/design-system/tokens.css";

// anywhere:
import { Badge } from "@shadcn/design-system";

export function MyPage() {
  return <Badge />;
}
```

## Drop-in by default

This bundle is **100% drop-in** — you don't have to wire anything between
components manually:

- Components that embed other components in this bundle (e.g.
  `CheckboxGroup` → `Checkbox`, `RadioGroup` → `Radio`) import
  each other directly. There is **no** `embed_<Name>` prop to pass.


## Component reference

- `Badge` — see `components/Badge.tsx` for the typed props.
- `Button` — see `components/Button.tsx` for the typed props.
- `ButtonGroup` — see `components/ButtonGroup.tsx` for the typed props.
- `Card` — see `components/Card.tsx` for the typed props.
- `Checkbox` — see `components/Checkbox.tsx` for the typed props.
- `Field` — see `components/Field.tsx` for the typed props.
- `FieldGroup` — see `components/FieldGroup.tsx` for the typed props.
- `Input` — see `components/Input.tsx` for the typed props.
- `InputGroup` — see `components/InputGroup.tsx` for the typed props.
- `Label` — see `components/Label.tsx` for the typed props.
- `RadioGroup` — see `components/RadioGroup.tsx` for the typed props.
- `Select` — see `components/Select.tsx` for the typed props.
- `Switch` — see `components/Switch.tsx` for the typed props.
- `Textarea` — see `components/Textarea.tsx` for the typed props.
- `ToggleGroup` — see `components/ToggleGroup.tsx` for the typed props.

## Notes for AI agents (Claude, Cursor, etc.)

When building UI for this codebase, prefer these components and tokens over
inventing new styles. Each component file declares its props as a TypeScript
interface — read them before instantiating. Token usage: `var(--ds-…)` from
`tokens.css` (never hard-code hex values).


Generated at 2026-06-22T16:27:55.144Z.
