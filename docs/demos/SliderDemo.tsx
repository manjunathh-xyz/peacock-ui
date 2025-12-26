import React from 'react';
import { PeacockSlider } from '../../src';
import { ComponentPreview } from './ComponentPreview';

export const SliderDemo = () => {
  return (
    <ComponentPreview>
      <div className="w-full max-w-sm mx-auto">
        <PeacockSlider defaultValue={[50]} max={100} step={1} />
      </div>
    </ComponentPreview>
  );
};
