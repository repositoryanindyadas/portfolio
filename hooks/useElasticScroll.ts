import { useEffect } from 'react';
import { useSpring, useMotionValue } from 'framer-motion';

export const useElasticScroll = () => {
  const y = useMotionValue(0);
  
  // Ultra-tight physics: 
  // Stiffness 800 (Instant snap)
  // Mass 0.1 (Extremely light weight)
  const ySmooth = useSpring(y, { stiffness: 800, damping: 40, mass: 0.1 });

  useEffect(() => {
    let resetTimeout: any;

    const handleWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;

      const scrollTop = window.scrollY;
      const maxY = document.documentElement.scrollHeight - window.innerHeight;
      
      const isAtTop = scrollTop <= 0;
      const isAtBottom = scrollTop >= maxY - 1;

      if ((isAtTop && e.deltaY < 0) || (isAtBottom && e.deltaY > 0)) {
        const currentY = y.get();
        
        // High resistance: Requires a lot of scroll to move a little pixel
        const resistance = 0.08; 
        const newY = currentY - (e.deltaY * resistance);
        
        // Extremely short limit (20px) - barely moves
        const limit = 20;
        const clampedY = Math.max(Math.min(newY, limit), -limit);
        
        y.set(clampedY);

        clearTimeout(resetTimeout);
        resetTimeout = setTimeout(() => {
          y.set(0);
        }, 50); // Faster reset
      } else if (y.get() !== 0) {
        y.set(0);
      }
    };

    let startY = 0;
    
    const handleTouchStart = (e: TouchEvent) => {
      startY = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      const currentY = e.touches[0].clientY;
      const delta = currentY - startY;
      
      const scrollTop = window.scrollY;
      const maxY = document.documentElement.scrollHeight - window.innerHeight;
      
      const isAtTop = scrollTop <= 0;
      const isAtBottom = scrollTop >= maxY - 1;

      if ((isAtTop && delta > 0) || (isAtBottom && delta < 0)) {
        // Tight touch resistance
        const resistance = 0.1;
        const limit = 25; // 25px max for touch
        
        const movement = delta * resistance;
        const clamped = Math.max(Math.min(movement, limit), -limit);
        
        y.set(clamped);
        
        if (e.cancelable) e.preventDefault();
      } else {
        y.set(0);
      }
    };

    const handleTouchEnd = () => {
      y.set(0);
    };

    window.addEventListener('wheel', handleWheel, { passive: true });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('touchend', handleTouchEnd);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [y]);

  return { y: ySmooth };
};