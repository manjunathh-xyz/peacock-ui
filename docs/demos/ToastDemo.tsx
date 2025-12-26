import React from 'react';
import { PeacockButton, PeacockToaster } from '../../src';
import { toast } from 'sonner';
import { ComponentPreview } from './ComponentPreview';

export const ToastDemo = () => {
  return (
    <ComponentPreview>
      <div className="flex items-center justify-center">
        <PeacockToaster />
        <PeacockButton
          onClick={() =>
            toast("Plumage Initialized", {
              description: "The Quantum Engine is now running at 60fps.",
              action: {
                label: "Undo",
                onClick: () => console.log("Undo"),
              },
            })
          }
        >
          Show Toast
        </PeacockButton>
      </div>
    </ComponentPreview>
  );
};
