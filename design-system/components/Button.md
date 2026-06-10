# Button

Button Control interactivo que dispara una acción inmediata, un envío de formulario o el inicio de un flujo. Comunica jerarquía visual mediante su tipo y refuerza el significado con iconos opcionales. Vista previa Cuándo usarlo Confirmar o enviar los datos de un formulario Disparar la acción principal de una pantalla o sección Abrir un diálogo, drawer o flujo que requiere decisión del usuario Agrupar un par de decisión como Cancelar y Confirmar Ejecutar acciones con consecuencias críticas como eliminar o publicar Cuándo NO usarlo Para navegar a otra URL dentro de la aplicación; usa un componente Link Para alternar un estado encendido/apagado; usa Switch u otro control seleccionable Cuando el elemento es puramente decorativo y no ejecuta ninguna acción Para presentar múltiples opciones de selección; usa un menú o grupo de opciones Anatomía Variantes El eje principal es Type, con ocho valores que van desde la acción primaria de mayor énfasis hasta variantes contextuales de estado (destructive, warning, success, info) y de superficie (ghost-on-color). El tamaño se controla con sm, md y lg, y el ancho con hug o fill. Type Tamaños Estados Accesibilidad Navegable con Tab y activable con Enter y Espacio siguiendo el patrón WAI-ARIA Button El anillo de foco debe ser visible con un contraste mínimo de 3:1 respecto al fondo adyacente La etiqueta debe describir la acción con un verbo claro; evita textos genéricos como OK o Sí El estado disabled se declara con el atributo disabled o aria-disabled para que los lectores de pantalla lo anuncien como no accionable Los botones destructive o de alto impacto deben ir acompañados de un diálogo de confirmación para evitar acciones irreversibles accidentales Mantén un contraste mínimo de 4.5:1 entre el texto de la etiqueta y el fondo del contenedor en todos los tipos Do / Don't Referencias

## When to use

- Confirming or submitting a form
- Triggering a primary action on a screen
- Launching a dialog, drawer or destructive flow
- Grouping a decision pair (Cancel / Confirm)

## When NOT to use

- For in-page navigation to another URL — use Link
- For toggling state on/off — use Switch or a selectable control
- When the visual is just decoration with no action

## Anatomy

| Part | Function |
| --- | --- |
| Button | Contenedor interactivo que delimita el área de toque o clic, aplica los tokens de color, radio y espaciado, y gestiona los cambios visuales de cada estado. |
| Icon left | Icono posicionado antes de la etiqueta que refuerza semánticamente la acción; su uso es opcional y no debe duplicar el significado del texto. |
| Label | Texto principal del botón que describe la acción resultante; debe comenzar con un verbo y ser tan breve como sea posible. |
| Icon right | Icono posicionado después de la etiqueta, habitualmente empleado para indicar dirección, expansión de menú o carga de contenido adicional. |

## Variants

### Type

| Type | Purpose |
| --- | --- |
| `primary` | Acción principal de la vista; debe existir como máximo uno por pantalla para marcar la jerarquía más alta. |
| `secondary` | Acción alternativa de peso medio que complementa al botón primary sin competir con él. |
| `ghost` | Acción de menor énfasis visual, adecuada para acciones terciarias o contextos con fondo claro donde se necesita discreción. |
| `ghost-on-color` | Variante ghost optimizada para superficies de color o fotografías donde el fondo claro no garantiza contraste suficiente. |
| `destructive` | Acciones que eliminan, revocan o son irreversibles; siempre debe ir acompañado de un paso de confirmación. |
| `warning` | Acciones que implican un riesgo moderado o un cambio significativo que el usuario debe considerar antes de proceder. |
| `success` | Confirma el resultado positivo de una operación o indica que la acción completará un flujo satisfactoriamente. |
| `info` | Acción relacionada con la consulta o visualización de información adicional, sin efecto destructivo ni crítico. |

### Sizes

| Size | Height | Padding | Typography | Use case |
| --- | --- | --- | --- | --- |
| `sm` | icon.sm (16px) | x: spacing.sm (12px), y: spacing.xs (8px) | — | Usar en espacios compactos como filas de tabla, toolbars densas o componentes anidados donde el espacio vertical es limitado. |
| `md` | — | x: spacing.md (12px), y: spacing.sm (8px) | typography.roles.body.steps.md | Tamaño predeterminado para la mayoría de formularios, diálogos y secciones de contenido estándar. |
| `lg` | icon.lg (16px) | x: spacing.lg (12px), y: spacing.md (8px) | — | Usar en heroes, pantallas de bienvenida o CTAs de alta prominencia donde se requiere mayor área de toque y peso visual. |

### States

| State | Meaning |
| --- | --- |
| `default` | Estado de reposo; el botón está disponible y listo para recibir interacción. |
| `hover` | El puntero o foco está sobre el botón; proporciona retroalimentación visual de que el elemento es interactivo. |
| `pressed` | El botón está siendo activado; confirma visualmente que la acción ha sido iniciada. |
| `disabled` | El botón no está disponible para interacción; debe comunicarse con un atributo semántico además del cambio visual. |

## Props

| Name | Type | Values | Default | Description |
|------|------|--------|---------|-------------|
| `Size` | variant | sm, md, lg | `md` | |
| `Type` | variant | primary, secondary, ghost, ghost-on-color, destructive, warning, success, info | `primary` | |
| `Label` | text |  | `Button` | |
| `State` | variant | default, hover, pressed, disabled | `default` | |
| `Width` | variant | hug, fill | `hug` | |
| `IconLeft` | boolean |  | `true` | |
| `IconRight` | boolean |  | `false` | |
| `IconLeftSrc` | variant | alarm-clock-minus, alert-octagon, alert-triangle, upload, chevron-down, chevron-right, chevron-left, chevron-up, x, check, plus, minus, arrow-right, arrow-left, search, info, circle-check, triangle-alert, circle-alert | `alarm-clock-minus` | |
| `IconRightSrc` | variant | alarm-clock-minus, alert-octagon, alert-triangle, upload, chevron-down, chevron-right, chevron-left, chevron-up, x, check, plus, minus, arrow-right, arrow-left, search, info, circle-check, triangle-alert, circle-alert | `alarm-clock-minus` | |

## Usage example

```tsx
<Button
  Size="md"
  Type="primary"
  Label="Button"
  State="default"
  Width="hug"
  IconLeft
  IconLeftSrc="alarm-clock-minus"
  IconRightSrc="alarm-clock-minus"
/>
```

## Do

- Lead with a verb in the label
- Use a single primary button per view
- Pair destructive actions with a confirmation
- Match icon meaning to the action

## Don't

- Don't stack multiple primary buttons next to each other
- Don't use a button for plain navigation
- Don't write essay-length labels
- Don't disable without explaining why

## Accessibility

- Reachable with Tab; activated with Enter and Space
- Visible focus ring meeting 3:1 contrast
- Label conveys the action verb ("Save", not "OK")
- Disabled state is announced; never rely on color alone
- Maintain 4.5:1 text/background contrast
