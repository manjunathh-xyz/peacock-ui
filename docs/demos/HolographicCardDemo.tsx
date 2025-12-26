import React from 'react';
import { HolographicCard } from '../../src';
import { ComponentPreview } from './ComponentPreview';

export const HolographicCardDemo = () => {
  return (
    <ComponentPreview>
      <div className="perspective-1000">
        <HolographicCard className="w-64 h-40 flex items-center justify-center">
          <span className="text-2xl font-bold text-white">Quantum</span>
        </HolographicCard>
      </div>
    </ComponentPreview>
  );
};
