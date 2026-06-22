# Label

shadcn/ui Label. A single inline form label (text-sm medium) bound to shadcn semantic + typography tokens. Disabled state dims to 50% opacity.

## Variants

### States

| State | Meaning |
| --- | --- |
| `default` | Resting, interactive. |
| `disabled` | Non-interactive; reduced contrast, not announced as actionable. |

## Props

| Name | Type | Values | Default | Description |
|------|------|--------|---------|-------------|
| `Label` | text |  | `Email` | |
| `State` | variant | default, disabled | `default` | |

## Usage example

```tsx
<Label
  Label="Email"
  State="default"
/>
```
