import React, { createContext, useContext, ReactNode } from 'react';
import { PeacockScene } from './canvas/PeacockScene';

interface PeacockContextProps {
  theme: 'light' | 'dark';
  scheme: 'quantum' | 'nebula' | 'aurora';
}

const PeacockContext = createContext<PeacockContextProps | undefined>(undefined);

export const PeacockProvider = ({ 
  children, 
  theme = 'dark',
  scheme = 'quantum'
}: { 
  children: ReactNode; 
  theme?: 'light' | 'dark';
  scheme?: 'quantum' | 'nebula' | 'aurora';
}) => {
  return (
    <PeacockContext.Provider value={{ theme, scheme }}>
      <div className={theme === 'dark' ? 'dark' : ''} data-theme={scheme}>
        <div className="min-h-screen bg-white dark:bg-peacock-darker text-slate-900 dark:text-slate-100 selection:bg-peacock-primary/30 relative">
          <PeacockScene />
          <div className="relative z-10">
            {children}
          </div>
        </div>
      </div>
    </PeacockContext.Provider>
  );
};

export const usePeacock = () => {
  const context = useContext(PeacockContext);
  if (!context) {
    throw new Error('usePeacock must be used within a PeacockProvider');
  }
  return context;
};
