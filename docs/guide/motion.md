# Motion Engine

The "Secret Sauce" of Peacock UI is its physics-based motion system. Built on top of Framer Motion, it provides a "haptic" digital experience that feels physical and responsive.

## Spring vs. Duration

Traditional UI libraries use `duration: 300ms`, which feels robotic because it's a fixed linear progress. Peacock UI uses **Spring Physics**, where movement is defined by physical properties:

- **Stiffness**: Determines how quickly the element moves toward its target. Higher values result in more "snap".
- **Damping**: The friction that prevents infinite oscillation. It controls how the movement settles.
- **Mass**: The simulated weight of the element. Heavier items feel more deliberate.

## Shared Layout Animations

Peacock UI utilizes `layoutId` for cross-component transitions. For example, in the `PeacockTabs` component, the indicator isn't just a div moving; it's a shared element that morphs between states using fluid interpolation.

## Interaction Latency

Every interactive element is tuned for **sub-millisecond perception**. We use `useSpring` hooks for mouse tracking (like in `HolographicCard`) to ensure that even high-refresh-rate monitors (144Hz+) feel completely smooth without the "ghosting" feel of standard CSS transitions.

## Global Configuration

You can customize the physics globally via the `PeacockProvider`:

```tsx
<PeacockProvider 
  theme="dark"
  motionConfig={{ 
    stiffness: 300, 
    damping: 25, 
    mass: 1 
  }}
>
  <App />
</PeacockProvider>
```
