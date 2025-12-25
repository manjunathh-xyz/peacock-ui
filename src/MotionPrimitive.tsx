"use client";

import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from './hooks/utils';

export interface MotionPrimitiveProps extends HTMLMotionProps<'div'> {
  as?: any;
}

export const MotionPrimitive = React.forwardRef<HTMLDivElement, MotionPrimitiveProps>(
  ({ as: Component = 'div', className, ...props }, ref) => {
    // Cast to any to avoid "excessively deep" type errors with the motion proxy
    const MotionComponent = (motion as any)[Component] || motion.div;

    return (
      <MotionComponent
        ref={ref}
        layout
        className={cn("relative", className)}
        {...props}
      />
    );
  }
);

MotionPrimitive.displayName = 'MotionPrimitive';
