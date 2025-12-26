import React from 'react';
import { PeacockCode } from '../../src';
import { ComponentPreview } from './ComponentPreview';

export const CodeDemo = () => {
  const code = `function Peacock() {
  const [spread, setSpread] = useState(true);
  return (
    <motion.div animate={{ scale: spread ? 1.2 : 1 }} />
  );
}`;

  return (
    <ComponentPreview>
      <div className="w-full max-w-lg">
        <PeacockCode code={code} language="typescript" />
      </div>
    </ComponentPreview>
  );
};
