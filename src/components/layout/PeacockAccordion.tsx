"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { cn } from '../../hooks/utils';

export interface AccordionItem {
  id: string;
  title: string;
  content: React.ReactNode;
  disabled?: boolean;
}

export interface PeacockAccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
  defaultExpanded?: string[];
  className?: string;
  variant?: 'glass' | 'outline' | 'ghost';
}

export const PeacockAccordion = ({
  items,
  allowMultiple = false,
  defaultExpanded = [],
  className,
  variant = 'glass'
}: PeacockAccordionProps) => {
  const [expanded, setExpanded] = useState<string[]>(defaultExpanded);

  const toggleItem = (id: string) => {
    if (allowMultiple) {
      setExpanded(prev => 
        prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
      );
    } else {
      setExpanded(prev => prev.includes(id) ? [] : [id]);
    }
  };

  return (
    <div className={cn("w-full space-y-2", className)}>
      {items.map((item) => {
        const isExpanded = expanded.includes(item.id);

        return (
          <div
            key={item.id}
            className={cn(
              "overflow-hidden transition-all duration-300",
              variant === 'glass' && "plumage-glass rounded-2xl border border-white/5",
              variant === 'outline' && "border border-white/10 rounded-2xl bg-white/[0.02]",
              variant === 'ghost' && "border-b border-white/10 rounded-none",
              item.disabled && "opacity-50 pointer-events-none"
            )}
          >
            <button
              onClick={() => toggleItem(item.id)}
              className="w-full flex items-center justify-between px-6 py-4 text-left group"
            >
              <span className="font-semibold text-white/80 group-hover:text-white transition-colors">
                {item.title}
              </span>
              <motion.div
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <ChevronDown className="w-5 h-5 text-white/40 group-hover:text-peacock-primary transition-colors" />
              </motion.div>
            </button>

            <AnimatePresence initial={false}>
              {isExpanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                >
                  <div className="px-6 pb-6 text-white/50 text-sm leading-relaxed border-t border-white/5 pt-4">
                    {item.content}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};
