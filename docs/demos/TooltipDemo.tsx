import React from 'react';
import { PeacockTooltip, PeacockButton } from '../../src';
import { ComponentPreview } from './ComponentPreview';

export const TooltipDemo = () => {
  return (
    <ComponentPreview>
      <div className="flex items-center justify-center">
        <PeacockTooltip content="This is a physics-based tooltip">
          <PeacockButton variant="outline">Hover for Tooltip</PeacockButton>
        </PeacockTooltip>
      </div>
    </ComponentPreview>
  );
};
