import React, { useState, useEffect, useCallback } from 'react';
import { NAV_LINKS } from '../constants';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    // Check initial scroll position
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    // Close menu immediately
    setIsOpen(false);
    
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      // Small delay to ensure state update processes and menu starts closing
      // preventing layout thrashing on mobile
      setTimeout(() => {
        const navHeight = 100; // Approximate navbar height + padding
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - navHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }, 50);
    }
  }, []);

  // Navbar becomes active (opaque/3d) if scrolled OR mobile menu is open
  const isActive = isScrolled || isOpen;

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <motion.nav 
        initial={{ y: -100, opacity: 0, scale: 0.95 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className="pointer-events-auto w-full max-w-4xl relative"
      >
        <div className={`
          relative rounded-2xl transition-all duration-500 ease-out overflow-hidden
          ${isActive 
            ? 'bg-[#faf9f6]/95 dark:bg-[#1c1917]/95 backdrop-blur-xl shadow-[0_10px_25px_-5px_rgba(0,0,0,0.25),0_0_0_1px_rgba(0,0,0,0.05)] dark:shadow-[0_10px_25px_-5px_rgba(0,0,0,0.7),0_0_0_1px_rgba(255,255,255,0.1)] border border-stone-200/50 dark:border-white/10' 
            : 'bg-transparent border border-transparent shadow-none backdrop-blur-none'
          }
        `}>
          {/* 3D Highlight/Bevel Effects - Only visible when active */}
          <div className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent dark:via-white/20 transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-0'}`} />
          <div className={`absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-black/5 to-transparent dark:via-black/40 transition-opacity duration-500 ${isActive ? 'opacity-50' : 'opacity-0'}`} />
          
          <div className="relative z-10 px-6 py-4">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <a 
                href="#" 
                onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="text-xl font-bold tracking-tight text-slate-900 dark:text-white flex items-center gap-2 group cursor-pointer hover:opacity-80 transition-opacity"
              >
                Menu
              </a>

              {/* Desktop Menu */}
              <div className="hidden md:flex items-center gap-1">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`
                      relative px-4 py-2 text-sm font-semibold rounded-full transition-all duration-300 cursor-pointer
                      ${isActive 
                        ? 'text-stone-600 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-white/10 hover:text-stone-900 dark:hover:text-white' 
                        : 'text-slate-700 dark:text-slate-200 hover:bg-white/10 hover:text-slate-900 dark:hover:text-white'
                      }
                      active:scale-95
                    `}
                  >
                    {link.name}
                  </a>
                ))}
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`
                  md:hidden p-2 rounded-xl transition-colors cursor-pointer
                  ${isActive 
                    ? 'bg-stone-100/50 dark:bg-white/5 text-stone-900 dark:text-white hover:bg-stone-200 dark:hover:bg-white/10' 
                    : 'bg-white/20 dark:bg-black/20 backdrop-blur-md text-slate-900 dark:text-white hover:bg-white/30'
                  }
                `}
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

            {/* Mobile Dropdown */}
            <AnimatePresence>
              {isOpen && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                  className="md:hidden overflow-hidden pointer-events-auto"
                >
                  <div className="flex flex-col space-y-1 pt-4 pb-2 border-t border-stone-200/50 dark:border-white/5 mt-4">
                    {NAV_LINKS.map((link) => (
                      <a
                        key={link.name}
                        href={link.href}
                        onClick={(e) => handleNavClick(e, link.href)}
                        className="
                          block px-4 py-3 rounded-xl text-base font-semibold cursor-pointer
                          text-stone-600 dark:text-stone-300
                          hover:text-stone-900 dark:hover:text-white
                          hover:bg-stone-50 dark:hover:bg-white/5
                          transition-colors active:bg-stone-100 dark:active:bg-white/10
                        "
                      >
                        {link.name}
                      </a>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.nav>
    </div>
  );
};

export default Navbar;