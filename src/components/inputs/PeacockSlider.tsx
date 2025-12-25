"use client";

import React from 'react';
import * as SliderPrimitive from '@radix-ui/react-slider';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { cn } from '../../hooks/utils';

export const PeacockSlider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex w-full touch-none select-none items-center",
      className
    )}
    {...props}
  >
    <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-peacock-surface-2/50 border border-white/5">
      <SliderPrimitive.Range className="absolute h-full bg-peacock-primary" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb asChild>
      <motion.div
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        layoutId="slider-thumb"
        className="block h-5 w-5 rounded-full border-2 border-peacock-primary bg-white ring-offset-peacock-dark transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-peacock-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer shadow-[0_0_20px_rgba(88,101,242,0.5)]"
      />
    </SliderPrimitive.Thumb>
  </SliderPrimitive.Root>
));
PeacockSlider.displayName = SliderPrimitive.Root.displayName;
