# Theming

Peacock UI features a unique "Plumage Engine" implemented as a Tailwind CSS plugin. This engine provides the core utilities for the glassmorphism, motion, and texture effects.

## Setup

The plugin is included by default in the core package. To use it in your own Tailwind setup:

```js
// tailwind.config.js
import { plumagePlugin } from '@peacock-ui/core/dist/themes/plugin';

export default {
  // ...
  plugins: [
    plumagePlugin,
  ],
}
```

## Core Utilities

### Glassmorphism

- `.plumage-glass`: The standard glass effect.
  - Background: `rgba(255, 255, 255, 0.03)`
  - Blur: `12px`
  - Border: `1px solid rgba(255, 255, 255, 0.08)`

- `.plumage-glass-heavy`: A deeper, darker glass for modals and overlays.
  - Background: `rgba(15, 15, 18, 0.8)`
  - Blur: `20px`

### Texture

- `.noise-texture`: Adds a subtle svg noise overlay to any element. This is crucial for the "high-fidelity" tactile feel.

### Glows

- `.text-glow`: Adds a text-shadow matching the primary color.
- `.plumage-gradient`: An animated multi-color gradient background (Discord Blue -> Green -> Rose).

## Colors

The theme extends the Tailwind color palette with semantic names:

- `peacock.primary`: #5865F2 (Discord Blue)
- `peacock.success`: #23a559
- `peacock.danger`: #f43f5e
- `peacock.dark`: #0f0f12 (Background)
- `peacock.surface.1`: #16161a (Card backgrounds)
- `peacock.surface.2`: #1c1c21
- `peacock.surface.3`: #25252b

## Dark Mode

Peacock UI is "Dark Mode First". While it supports light mode, the aesthetics are optimized for dark interfaces.

To toggle modes, use the `PeacockProvider`:

```tsx
<PeacockProvider theme="dark">
  {/* App */}
</PeacockProvider>
```