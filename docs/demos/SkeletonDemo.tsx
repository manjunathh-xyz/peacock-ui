import React from 'react';
import { PeacockSkeleton } from '../../src';
import { ComponentPreview } from './ComponentPreview';

export const SkeletonDemo = () => {
  return (
    <ComponentPreview>
      <div className="flex items-center space-x-4">
        <PeacockSkeleton className="h-12 w-12 rounded-full" />
        <div className="space-y-2">
          <PeacockSkeleton className="h-4 w-[250px]" />
          <PeacockSkeleton className="h-4 w-[200px]" />
        </div>
      </div>
    </ComponentPreview>
  );
};
