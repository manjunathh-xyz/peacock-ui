# Theming

Peacock UI features a powerful "Plumage Engine" that allows for both light/dark modes and distinct color schemes.

<ThemeDemo />

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

## Schemes (New in v3)

Peacock UI now supports multiple color schemes. You can switch between them using the `PeacockProvider` or by setting the `data-theme` attribute manually.

### Available Schemes

1.  **Quantum** (Default)
    -   Primary: `#5865F2` (Blurple)
    -   Vibe: Discord-like, Gaming, Modern
2.  **Nebula**
    -   Primary: `#d946ef` (Fuchsia)
    -   Vibe: Cyberpunk, Synthwave, Retro
3.  **Aurora**
    -   Primary: `#06b6d4` (Cyan)
    -   Vibe: Nature, Clean, Fresh

## Usage

Use the `PeacockProvider` to set the scheme globally:

```tsx
<PeacockProvider theme="dark" scheme="nebula">
  {/* App */}
</PeacockProvider>
```

Or apply it to specific sections using the `data-theme` attribute:

```tsx
<div data-theme="aurora">
  <PeacockButton>Aurora Button</PeacockButton>
</div>
```

## Core Utilities

### Glassmorphism

-   `.plumage-glass`: The standard glass effect.
-   `.plumage-glass-heavy`: A deeper, darker glass for modals and overlays.

### Texture

-   `.noise-texture`: Adds a subtle svg noise overlay to any element. This is crucial for the "high-fidelity" tactile feel.

### Colors

The theme extends the Tailwind color palette with semantic names that adapt to the active scheme:

-   `peacock.primary`: The main brand color (dynamic).
-   `peacock.success`: Success state (dynamic).
-   `peacock.danger`: Error state (dynamic).
-   `peacock.dark`: #0f0f12 (Background)
-   `peacock.surface.1`: #16161a (Card backgrounds)
