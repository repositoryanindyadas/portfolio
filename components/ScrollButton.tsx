import React, { useEffect, useState } from 'react';
import { ArrowDown, ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { SECTION_IDS } from '../constants';

const ScrollButton = () => {
  const [direction, setDirection] = useState<'down' | 'up'>('down');
  
  useEffect(() => {
    const handleScroll = () => {
      // Calculate how far we've scrolled + viewport height
      const scrollPosition = window.scrollY + window.innerHeight;
      // Total height of the document
      const bottomPosition = document.documentElement.scrollHeight;
      
      // If we are within 50px of the bottom, switch to 'up'
      if (bottomPosition - scrollPosition <= 50) {
        setDirection('up');
      } else {
        setDirection('down');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Trigger once on mount to set initial state correctly
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    if (direction === 'down') {
      // Find the next section to scroll to
      const sections = Object.values(SECTION_IDS);
      const currentScroll = window.scrollY;
      
      const nextSectionId = sections.find(id => {
        const element = document.getElementById(id);
        if (!element) return false;
        // Check if the section top is significantly below current scroll position
        // Using a buffer of 150px to account for navbar and visual spacing
        return element.offsetTop > currentScroll + 150;
      });

      if (nextSectionId) {
        const element = document.getElementById(nextSectionId);
        if (element) {
          window.scrollTo({ 
            top: element.offsetTop - 100, 
            behavior: 'smooth' 
          });
        }
      } else {
        // If no next section (we are at the last section but not quite bottom), scroll to bottom
        window.scrollTo({ 
          top: document.documentElement.scrollHeight, 
          behavior: 'smooth' 
        });
      }
    } else {
      // Scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <motion.button
      onClick={handleClick}
      className="fixed bottom-8 right-8 z-40 p-3 md:p-4 rounded-full bg-white/80 dark:bg-zinc-800/80 backdrop-blur-md border border-white/20 dark:border-white/10 text-slate-900 dark:text-white shadow-lg hover:shadow-xl hover:bg-white dark:hover:bg-zinc-700 transition-all group"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label={direction === 'down' ? "Scroll down" : "Back to top"}
    >
      <AnimatePresence mode="wait">
        {direction === 'down' ? (
          <motion.div
            key="down"
            initial={{ opacity: 0, rotate: -90 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: 90 }}
            transition={{ duration: 0.2 }}
          >
            <ArrowDown className="w-6 h-6" />
          </motion.div>
        ) : (
          <motion.div
            key="up"
            initial={{ opacity: 0, rotate: -90 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: 90 }}
            transition={{ duration: 0.2 }}
          >
            <ArrowUp className="w-6 h-6" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

export default ScrollButton;