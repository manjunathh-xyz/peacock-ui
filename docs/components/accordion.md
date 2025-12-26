# Accordion

A vertically stacked set of interactive headings that each reveal a section of content.

## Preview

<AccordionDemo />

## Usage

```tsx
import { PeacockAccordion } from '@peacock-ui/core'

const items = [
  {
    id: '1',
    title: 'Section 1',
    content: 'Content for section 1'
  },
  {
    id: '2',
    title: 'Section 2',
    content: 'Content for section 2'
  }
]

function Example() {
  return (
    <PeacockAccordion 
      items={items} 
      variant="glass" 
      allowMultiple 
    />
  )
}
```

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `items` | `AccordionItem[]` | - | Array of items with `id`, `title`, and `content`. |
| `variant` | `'glass' \| 'outline' \| 'ghost'` | `'glass'` | The visual style of the accordion. |
| `allowMultiple` | `boolean` | `false` | Whether multiple sections can be expanded at once. |
| `defaultExpanded` | `string[]` | `[]` | IDs of items that should be expanded by default. |
| `className` | `string` | - | Additional Tailwind classes for the container. |
