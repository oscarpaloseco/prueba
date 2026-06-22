# Switch

A binary control that turns a setting on or off and applies the change immediately.

## When to use

- Toggling a system or feature setting (Wi-Fi, notifications)
- Switching between two states without confirmation
- An always-visible preference that affects the surface
- Anywhere users expect an OS-like toggle

## When NOT to use

- For form submission style choices — use Checkbox
- For one-of-many selection — use Radio
- When the change requires explicit confirmation — use Button

## Anatomy

- Track
- Thumb
- Label

## Variants

### Sizes

| Size | Height | Padding | Typography | Use case |
| --- | --- | --- | --- | --- |
| `sm` | sizes.scale.4 (16px) | x: 2px / 2px, y: 2px / 2px | — | Dense UIs and secondary contexts. |
| `md` | sizes.scale.5 (20px) | x: 2px / 2px, y: 2px / 2px | — | Default for most layouts. |

### States

| State | Meaning |
| --- | --- |
| `default` | Resting, interactive. |
| `checked` | Currently selected / checked. |
| `focus` | Keyboard focus (visible ring). |
| `disabled` | Non-interactive; reduced contrast, not announced as actionable. |

## Props

| Name | Type | Values | Default | Description |
|------|------|--------|---------|-------------|
| `Size` | variant | sm, md | `md` | |
| `State` | variant | default, checked, focus, disabled | `default` | |

## Usage example

```tsx
<Switch
  Size="md"
  State="default"
/>
```

## Do

- Apply the change immediately
- Label with the setting name, not on/off
- Position the label consistently across the surface
- Visually distinguish on vs off beyond color

## Don't

- Don't use it inside forms with a submit button
- Don't rely on color alone for the state
- Don't show a Save button after the switch
- Don't substitute for a multi-choice control

## Accessibility

- Use role="switch" with aria-checked
- Space toggles when focused
- Pair with a clear visible label
- Track contrast meets 3:1 in both states
- State change is announced
