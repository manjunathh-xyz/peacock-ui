import React, { useState } from 'react';
import { PeacockSwitch } from '../../src';
import { ComponentPreview } from './ComponentPreview';

export const SwitchDemo = () => {
  const [checked, setChecked] = useState(false);
  return (
    <ComponentPreview>
      <div className="flex items-center justify-center">
        <PeacockSwitch 
          checked={checked} 
          onCheckedChange={setChecked} 
          label={checked ? "Motion Active" : "Motion Inactive"} 
        />
      </div>
    </ComponentPreview>
  );
};
