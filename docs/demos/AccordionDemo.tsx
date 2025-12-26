import React from 'react';
import { PeacockAccordion } from '../../src';
import { ComponentPreview } from './ComponentPreview';

export const AccordionDemo = () => {
  const items = [
    {
      id: 'item-1',
      title: 'What is Peacock UI?',
      content: 'Peacock UI is a high-fidelity design system built for React 19, focusing on motion, fluidity, and next-gen aesthetics like glassmorphism and WebGL-accelerated effects.'
    },
    {
      id: 'item-2',
      title: 'Is it production ready?',
      content: 'We are currently in alpha (v3.0.0-alpha). While the core components are stable, the API might evolve as we move towards a stable release.'
    },
    {
      id: 'item-3',
      title: 'How do I install it?',
      content: 'You can install it via npm using `npm install @peacock-ui/core`. Make sure you have the peer dependencies like framer-motion and tailwindcss installed.'
    }
  ];

  return (
    <ComponentPreview>
      <div className="w-full max-w-xl mx-auto p-4 space-y-12">
        <div className="space-y-4">
          <h4 className="text-xs font-bold uppercase tracking-widest text-peacock-primary px-2">Glass Variant</h4>
          <PeacockAccordion items={items} variant="glass" />
        </div>
        
        <div className="space-y-4">
          <h4 className="text-xs font-bold uppercase tracking-widest text-peacock-primary px-2">Outline Variant (Multiple)</h4>
          <PeacockAccordion items={items} variant="outline" allowMultiple />
        </div>
      </div>
    </ComponentPreview>
  );
};
