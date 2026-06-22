# Select

A control that opens a list of options and displays the chosen one in a trigger field.

## When to use

- Picking one value from a known finite list
- Forms with 4–20 options where space matters
- Country, language, role or status pickers
- When typing is unnecessary

## When NOT to use

- For free-form text or autocomplete — use ComboBox
- For 2–4 visible options — use RadioGroup
- For mutually-exclusive nav — use Tabs

## Anatomy

- Label
- Trigger field
- Chevron
- Helper or error text
- Embedded SelectList overlay

## Variants

### Sizes

| Size | Height | Padding | Typography | Use case |
| --- | --- | --- | --- | --- |
| `sm` | sizes.components.sm (36px) | x: spacing.3 (12px) / spacing.3 (12px), y: 0px / 0px | — | Dense UIs and secondary contexts. |
| `md` | sizes.components.md (36px) | x: spacing.3 (12px) / spacing.3 (12px), y: 0px / 0px | typography.roles.body.steps.sm | Default for most layouts. |
| `lg` | sizes.components.lg (36px) | x: spacing.3 (12px) / spacing.3 (12px), y: 0px / 0px | — | Prominent or touch-friendly contexts. |

### States

| State | Meaning |
| --- | --- |
| `default` | Resting, interactive. |
| `focus` | Keyboard focus (visible ring). |
| `disabled` | Non-interactive; reduced contrast, not announced as actionable. |

## Props

| Name | Type | Values | Default | Description |
|------|------|--------|---------|-------------|
| `Open` | boolean |  | `false` | |
| `Size` | variant | sm, md, lg | `md` | |
| `State` | variant | default, focus, disabled | `default` | |
| `Placeholder` | text |  | `Select a fruit` | |

## Usage example

```tsx
<Select
  Size="md"
  State="default"
  Placeholder="Select a fruit"
/>
```

## Do

- Order options predictably (alpha, frequency)
- Pre-select a sensible default when safe
- Use clear placeholder copy
- Keep labels short and parallel

## Don't

- Don't use it for 2 options — use Radio or Switch
- Don't hide critical info behind a Select
- Don't allow scrolling without keyboard equivalents
- Don't pack the list with subgroups when a tree would be clearer

## Accessibility

- Trigger exposes role=combobox with aria-expanded
- Arrow keys traverse options; Enter picks; Escape closes
- Type-ahead jumps to matching option
- Focus returns to the trigger on close
- Error and helper wired via aria-describedby
