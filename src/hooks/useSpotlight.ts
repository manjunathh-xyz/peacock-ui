import { useMotionValue, useSpring } from 'framer-motion';
import { useCallback } from 'react';

interface UseSpotlightConfig {
  stiffness?: number;
  damping?: number;
}

export function useSpotlight(config: UseSpotlightConfig = {}) {
  const { stiffness = 300, damping = 25 } = config;
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness, damping });
  const springY = useSpring(mouseY, { stiffness, damping });

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  }, [mouseX, mouseY]);

  return { 
    x: springX, 
    y: springY, 
    onMouseMove: handleMouseMove 
  };
}
