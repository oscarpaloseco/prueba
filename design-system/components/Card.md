# Card

A self-contained surface that groups a heading, body, optional media and actions about a single entity.

## When to use

- Items in a feed, gallery or grid
- Summarising an entity with a CTA (product, project, article)
- Dashboard tiles that pair text, image and actions
- Catalogues with mixed text and media

## When NOT to use

- For dense rows — use a Table
- For static text blocks — render plain content
- For interactive controls only — use Button or ActionGroup

## Anatomy

- Surface
- Optional image
- Optional avatar
- Header (title + subtitle)
- Body
- Optional footer
- Action buttons

## Variants

### Variant

| Variant | Purpose |
| --- | --- |
| `default` | Standard appearance used when no special emphasis applies. |
| `subtle` | Quiet action that recedes until needed. |
| `accent` | — |

### Sizes

| Size | Height | Padding | Typography | Use case |
| --- | --- | --- | --- | --- |
| `sm` | 14px | — | typography.roles.body.steps.sm-semibold | Dense UIs and secondary contexts. |
| `md` | 26px | — | typography.roles.body.steps.md-semibold | Default for most layouts. |
| `lg` | 22px | — | typography.roles.headings.steps.h5 | Prominent or touch-friendly contexts. |

## Props

| Name | Type | Values | Default | Description |
|------|------|--------|---------|-------------|
| `Size` | variant | sm, md, lg | `sm` | |
| `Image` | variant | shown, hidden | `shown` | |
| `Border` | variant | bordered, borderless | `bordered` | |
| `Layout` | variant | vertical, horizontal | `vertical` | |
| `Variant` | variant | default, subtle, accent | `default` | |
| `BodyText` | text |  | `Body copy describes the card content with a couple of lines of context.` | |
| `FooterText` | text |  | `Footer note` | |
| `ShowAvatar` | boolean |  | `false` | |
| `ShowFooter` | boolean |  | `false` | |
| `ShowHeader` | boolean |  | `true` | |
| `HeaderTitle` | text |  | `Card title` | |
| `ImagePosition` | variant | top, bottom, left, right | `top` | |
| `HeaderSubtitle` | text |  | `5 min · Updated today` | |
| `ShowActionButton` | boolean |  | `true` | |
| `ShowSecondaryButton` | boolean |  | `false` | |

## Usage example

```tsx
<Card
  Size="sm"
  Image="shown"
  Border="bordered"
  Layout="vertical"
  Variant="default"
  BodyText="Body copy describes the card content with a couple of lines of context."
  FooterText="Footer note"
  ShowHeader
  HeaderTitle="Card title"
  ImagePosition="top"
  HeaderSubtitle="5 min · Updated today"
  ShowActionButton
/>
```

## Do

- Lead with the title and most useful metadata
- Keep image aspect ratios consistent across cards
- Use the accent variant sparingly
- Match action emphasis to the card's purpose

## Don't

- Don't nest cards within cards
- Don't mix layouts inside one row
- Don't make the entire card clickable AND nest sub-buttons without care
- Don't crowd with more than 2 actions

## Accessibility

- If the whole card is clickable, expose a single accessible name
- Avoid nesting interactive controls inside a clickable card without explicit semantics
- Keep heading hierarchy consistent with the rest of the page
- Ensure media has alt text or is hidden as decorative
- Maintain 4.5:1 contrast for body copy
