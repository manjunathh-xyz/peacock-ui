"use client";

import React from 'react';
import * as AvatarPrimitive from '@radix-ui/react-avatar';
import { cn } from '../../hooks/utils';

export const PeacockAvatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root> & {
    glow?: boolean;
    status?: 'online' | 'offline' | 'busy';
  }
>(({ className, glow = true, status, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      glow && "shadow-[0_0_15px_rgba(255,255,255,0.2)]",
      className
    )}
    {...props}
  >
    {status && (
      <span className={cn(
        "absolute bottom-0 right-0 z-10 block h-3 w-3 rounded-full ring-2 ring-peacock-dark",
        status === 'online' && "bg-peacock-success shadow-[0_0_8px_#23a559]",
        status === 'busy' && "bg-peacock-danger shadow-[0_0_8px_#f43f5e]",
        status === 'offline' && "bg-slate-500"
      )} />
    )}
    {props.children}
  </AvatarPrimitive.Root>
));
PeacockAvatar.displayName = AvatarPrimitive.Root.displayName;

export const PeacockAvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn("aspect-square h-full w-full object-cover", className)}
    {...props}
  />
));
PeacockAvatarImage.displayName = AvatarPrimitive.Image.displayName;

export const PeacockAvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(
      "flex h-full w-full items-center justify-center rounded-full bg-peacock-surface-2 text-sm text-slate-300",
      className
    )}
    {...props}
  />
));
PeacockAvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;
