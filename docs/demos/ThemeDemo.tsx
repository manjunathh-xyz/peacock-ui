import React from 'react';
import { PeacockButton, PeacockBadge, FluidCard } from '../../src';
import { ComponentPreview } from './ComponentPreview';

const ThemeCard = ({ scheme, title, color }: { scheme: string; title: string; color: string }) => (
  <div data-theme={scheme} className="flex-1 min-w-[250px]">
    <FluidCard className="h-full space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <PeacockBadge variant="glass">{scheme}</PeacockBadge>
      </div>
      
      <div className="space-y-2">
        <div className="text-sm text-white/40 font-mono">Primary Color</div>
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-peacock-primary shadow-[0_0_20px_rgba(var(--peacock-primary),0.5)]" />
          <span className="text-white/60 font-mono">{color}</span>
        </div>
      </div>

      <div className="pt-4 flex gap-3">
        <PeacockButton variant="primary" className="w-full">Action</PeacockButton>
        <PeacockButton variant="glass" className="w-full">Secondary</PeacockButton>
      </div>
    </FluidCard>
  </div>
);

export const ThemeDemo = () => {
  return (
    <ComponentPreview>
      <div className="flex flex-col xl:flex-row gap-6 p-4">
        <ThemeCard scheme="quantum" title="Quantum" color="#5865F2" />
        <ThemeCard scheme="nebula" title="Nebula" color="#D946EF" />
        <ThemeCard scheme="aurora" title="Aurora" color="#06B6D4" />
      </div>
    </ComponentPreview>
  );
};
