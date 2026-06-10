# Avatar

A circular visual that represents a user, account or entity through image, initials or icon.

## When to use

- Identifying a user in a row, card or header
- Authoring or assignment metadata
- Presence with status dots
- Inline mentions or comments

## When NOT to use

- For brand or product imagery — use a thumbnail
- For decorative illustration — use an image
- For stats or counts — use Badge

## Anatomy

- Circular container
- Image / initials / icon
- Optional status dot
- Optional border

## Variants

### Type

| Type | Purpose |
| --- | --- |
| `image` | — |
| `initials` | — |
| `icon` | — |

### Sizes

| Size | Height | Padding | Typography | Use case |
| --- | --- | --- | --- | --- |
| `sm` | sizes.scale.3xl (24px) | — | typography.roles.body.steps.xs | Dense UIs and secondary contexts. |
| `md` | sizes.scale.5xl (48px) | — | typography.roles.body.steps.sm | Default for most layouts. |
| `lg` | sizes.scale.6xl (64px) | — | typography.roles.body.steps.md | Prominent or touch-friendly contexts. |
| `xl` | sizes.scale.8xl (96px) | — | typography.roles.body.steps.md | Marketing / expressive or large touch targets. |

## Props

| Name | Type | Values | Default | Description |
|------|------|--------|---------|-------------|
| `Size` | variant | sm, md, lg, xl | `sm` | |
| `Type` | variant | image, initials, icon | `image` | |
| `Border` | boolean |  | `false` | |
| `Status` | variant | none, online, offline, busy, away | `none` | |
| `IconSrc` | variant | alarm-clock-minus, alert-octagon, alert-triangle, user | `user` | |
| `Initials` | text |  | `AB` | |

## Usage example

```tsx
<Avatar
  Size="sm"
  Type="image"
  Status="none"
  IconSrc="user"
  Initials="AB"
/>
```

## Do

- Fall back to initials, then to a generic icon
- Use a consistent ring for status across sizes
- Pair with a name when context is unclear
- Use stable size scale across the app

## Don't

- Don't pair tiny avatars with long names without context
- Don't differentiate roles only by color
- Don't show avatars without alt or accessible name
- Don't mix shapes (circle vs square) randomly

## Accessibility

- Provide an accessible name describing the person or entity
- If status is informational, expose it via aria-label
- Don't rely on color alone for presence
- Decorative avatars can be aria-hidden
- Maintain 3:1 contrast for initials over the background
