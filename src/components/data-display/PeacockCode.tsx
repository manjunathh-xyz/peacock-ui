"use client";

import React from 'react';
import { cn } from '../../hooks/utils';

interface PeacockCodeProps extends React.HTMLAttributes<HTMLPreElement> {
  children: React.ReactNode;
}

export const PeacockCode = ({ children, className, ...props }: PeacockCodeProps) => {
  return (
    <div className="relative group rounded-xl overflow-hidden border border-white/10 bg-[#0d0d10]">
      <div className="flex items-center justify-between px-4 py-2 bg-white/5 border-b border-white/5">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
          <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
        </div>
        <div className="text-xs font-mono text-slate-500 uppercase tracking-widest">
          Terminal
        </div>
      </div>
      <pre 
        className={cn(
          "p-4 overflow-x-auto font-mono text-sm text-slate-300 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent",
          className
        )}
        {...props}
      >
        <code>{children}</code>
      </pre>
    </div>
  );
};
