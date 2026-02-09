import React from 'react';
import { motion, Variants, HTMLMotionProps } from 'framer-motion';

// --- Theme Styles ---

const STYLES = {
  section: "py-20 px-6 md:px-8 max-w-7xl mx-auto scroll-mt-24 relative z-10", 
  badge: {
    base: "inline-flex items-center px-3 py-1 rounded-full text-xs font-bold tracking-wide backdrop-blur-md transition-all duration-200 ring-1 ring-inset",
    variants: {
      default: "bg-slate-100 dark:bg-white/10 ring-slate-300 dark:ring-white/20 text-slate-800 dark:text-slate-100 shadow-sm",
      outline: "bg-primary-50 dark:bg-primary-500/10 ring-primary-500/30 text-primary-800 dark:text-primary-200"
    }
  },
  card: `
    relative overflow-hidden rounded-3xl
    bg-white/90 dark:bg-zinc-900/80
    backdrop-blur-xl 
    border border-white/50 dark:border-white/10
    shadow-[0_4px_20px_rgb(0,0,0,0.03)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.3)]
    p-8 transition-all duration-300 ease-out
    hover:bg-white dark:hover:bg-zinc-800
    hover:scale-[1.005] hover:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.5)]
    transform-gpu
  `
};

// --- Animations ---

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08, 
      delayChildren: 0.01
    }
  }
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.98 }, 
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
      mass: 1
    }
  }
};

const titleAnimationProps = {
  initial: { opacity: 0, y: 10 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-10%" },
  transition: { duration: 0.5, ease: "easeOut" as const }
};

const subtitleAnimationProps = {
  initial: { opacity: 0, y: 10 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-10%" },
  transition: { delay: 0.1, duration: 0.5, ease: "easeOut" as const }
};

// --- Components ---

export interface SectionProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}

export const Section: React.FC<SectionProps> = ({ id, children, className = "" }) => (
  <section id={id} className={`${STYLES.section} ${className}`}>
    {children}
  </section>
);

export interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

export const SectionTitle = React.memo<SectionTitleProps>(({ title, subtitle }) => (
  <div className="mb-16">
    <motion.div 
      {...titleAnimationProps}
      style={{ willChange: "transform, opacity" }}
      className="flex flex-col gap-3 transform-gpu"
    >
      <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
        {title}
      </h2>
      <div className="h-1.5 w-24 bg-primary-600 dark:bg-primary-500 rounded-full mt-2 shadow-sm" />
    </motion.div>
    {subtitle && (
      <motion.p 
        {...subtitleAnimationProps}
        style={{ willChange: "transform, opacity" }}
        className="mt-4 text-xl text-slate-700 dark:text-slate-300 max-w-2xl font-medium leading-relaxed transform-gpu"
      >
        {subtitle}
      </motion.p>
    )}
  </div>
));

SectionTitle.displayName = 'SectionTitle';

export interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'outline';
}

export const Badge = React.memo<BadgeProps>(({ children, className = "", variant = 'default' }) => {
  const variantStyles = STYLES.badge.variants[variant] || STYLES.badge.variants.default;
  
  return (
    <span className={`${STYLES.badge.base} ${variantStyles} ${className}`}>
      {children}
    </span>
  );
});

Badge.displayName = 'Badge';

export interface CardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  variants?: Variants;
}

export const Card = React.memo<CardProps>(({ children, className = "", variants, ...props }) => {
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
      transition={{ duration: 0.4, ease: "easeOut" }}
      style={{ 
        willChange: "transform, opacity",
        backfaceVisibility: "hidden" 
      }}
      className={`${STYLES.card} ${className}`}
      {...props}
    >
      {/* Premium Gloss Reflection */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-transparent to-transparent dark:from-white/5 dark:via-transparent dark:to-transparent pointer-events-none opacity-40" />
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
});

Card.displayName = 'Card';