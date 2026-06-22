# InputGroup

shadcn/ui InputGroup. A single bordered row composing a borderless input with leading/trailing addons (text, icon, or a small button) sharing the group's border. States: default, focus (group ring), disabled. Fully bound to shadcn semantic tokens.

## Variants

### States

| State | Meaning |
| --- | --- |
| `default` | Resting, interactive. |
| `focus` | Keyboard focus (visible ring). |
| `disabled` | Non-interactive; reduced contrast, not announced as actionable. |

## Props

| Name | Type | Values | Default | Description |
|------|------|--------|---------|-------------|
| `State` | variant | default, focus, disabled | `default` | |
| `Placeholder` | text |  | `Search...` | |

## Usage example

```tsx
<InputGroup
  State="default"
  Placeholder="Search..."
/>
```
