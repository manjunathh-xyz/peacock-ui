"use client";

import React from 'react';
import { motion, useMotionValue, useSpring, useTransform, MotionValue } from 'framer-motion';
import { cn } from '../hooks/utils';

export interface DockItem {
  id: string;
  icon: React.ReactNode;
  label?: string;
  onClick?: () => void;
}

interface PeacockDockProps {
  items: DockItem[];
  className?: string;
}

function DockIcon({ mouseX, item }: { mouseX: MotionValue; item: DockItem }) {
  const ref = React.useRef<HTMLDivElement>(null);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthSync = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  const width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

  return (
    <motion.div
      ref={ref}
      style={{ width }}
      className="aspect-square rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center relative group cursor-pointer hover:bg-white/20 transition-colors"
      onClick={item.onClick}
    >
      <div className="w-5 h-5 text-white/80 group-hover:text-white transition-colors">
        {item.icon}
      </div>
      {item.label && (
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 rounded bg-black/80 text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-white/10">
          {item.label}
        </div>
      )}
    </motion.div>
  );
}

export const PeacockDock = ({ items, className }: PeacockDockProps) => {
  const mouseX = useMotionValue(Infinity);

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.clientX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        "flex h-16 items-end gap-4 rounded-3xl bg-black/40 border border-white/10 px-4 pb-3 plumage-glass-heavy",
        className
      )}
    >
      {items.map((item) => (
        <DockIcon key={item.id} mouseX={mouseX} item={item} />
      ))}
    </motion.div>
  );
};
