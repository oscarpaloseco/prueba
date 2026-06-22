# Textarea

shadcn/ui Textarea. Multi-line text field across sizes (sm, md, lg) — rounded-md, `input` border, body-sm placeholder in muted-foreground, focus ring on `ring`, destructive border + halo on error (aria-invalid), disabled dims to 50%. Fully bound to shadcn semantic tokens.

## Variants

### Sizes

| Size | Height | Padding | Typography | Use case |
| --- | --- | --- | --- | --- |
| `sm` | 64px | x: spacing.3 (12px) / spacing.3 (12px), y: spacing.2 (8px) / spacing.2 (8px) | — | Dense UIs and secondary contexts. |
| `md` | 80px | x: spacing.3 (12px) / spacing.3 (12px), y: spacing.2 (8px) / spacing.2 (8px) | typography.roles.body.steps.sm | Default for most layouts. |
| `lg` | 112px | x: spacing.3 (12px) / spacing.3 (12px), y: spacing.2 (8px) / spacing.2 (8px) | — | Prominent or touch-friendly contexts. |

### States

| State | Meaning |
| --- | --- |
| `default` | Resting, interactive. |
| `focus` | Keyboard focus (visible ring). |
| `error` | Validation failed. |
| `disabled` | Non-interactive; reduced contrast, not announced as actionable. |

## Props

| Name | Type | Values | Default | Description |
|------|------|--------|---------|-------------|
| `Size` | variant | sm, md, lg | `md` | |
| `State` | variant | default, focus, error, disabled | `default` | |

## Usage example

```tsx
<Textarea
  Size="md"
  State="default"
/>
```
