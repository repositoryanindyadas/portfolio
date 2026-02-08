import React from 'react';
import { motion, Variants } from 'framer-motion';

export interface SectionProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}

export const Section: React.FC<SectionProps> = ({ id, children, className = "" }) => (
  <section id={id} className={`py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20 ${className}`}>
    {children}
  </section>
);

export interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle }) => (
  <div className="mb-12">
    <motion.h2 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-3xl font-bold text-slate-100 flex items-center gap-3 after:content-[''] after:h-px after:flex-1 after:bg-slate-800"
    >
      <span className="text-primary-400">#</span> {title}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="mt-2 text-slate-400 max-w-2xl"
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

export interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "outline";
}

export const Badge: React.FC<BadgeProps> = ({ children, variant = "default" }) => {
  const styles = variant === "outline" 
    ? "border border-primary-500/30 text-primary-300 bg-primary-500/5"
    : "bg-primary-500/10 text-primary-300";
    
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded text-sm font-medium ${styles}`}>
      {children}
    </span>
  );
};

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  variants?: Variants;
}

export const Card: React.FC<CardProps> = ({ children, className = "", variants }) => {
  // If no variants are passed, use default self-contained animation
  const defaultVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div 
      variants={variants || defaultVariants}
      initial={variants ? undefined : "hidden"}
      whileInView={variants ? undefined : "visible"}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className={`bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-primary-500/30 transition-colors duration-300 ${className}`}
    >
      {children}
    </motion.div>
  );
};

// Animation Variants
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 20
    }
  }
};
