import React from 'react';
import { PROFILE } from '../constants';
import { MapPin, Mail, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div 
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary-500/20 rounded-full blur-[120px] animate-pulse transform-gpu will-change-transform" 
          style={{ animationDuration: '4s' }} 
        />
        <div 
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-indigo-500/20 rounded-full blur-[100px] animate-pulse transform-gpu will-change-transform" 
          style={{ animationDuration: '6s' }} 
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          style={{ willChange: "transform, opacity" }}
          className="relative transform-gpu"
        >
          {/* Status Pill */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.3 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 dark:bg-white/10 backdrop-blur-md border border-slate-200 dark:border-white/20 text-sm font-bold text-slate-800 dark:text-slate-100 mb-8 shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse ring-2 ring-emerald-500/30" />
            Available for Opportunities
          </motion.div>
          
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-slate-900 dark:text-white mb-6 pb-2 drop-shadow-sm">
            {PROFILE.name}
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-slate-800 dark:text-slate-200 font-normal mb-8 max-w-3xl leading-tight">
            {PROFILE.title}
          </h2>

          <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 max-w-2xl mx-auto mb-12 leading-relaxed font-medium">
            {PROFILE.summary}
          </p>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.3 }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
             <a 
              href={`mailto:${PROFILE.email}`}
              className="flex items-center gap-2 bg-slate-900 dark:bg-white text-white dark:text-black px-8 py-4 rounded-full font-bold transition-transform hover:scale-105 active:scale-95 shadow-xl shadow-slate-900/20 transform-gpu"
            >
              <Mail className="w-5 h-5" />
              Contact Me
            </a>
            <a 
              href="https://drive.google.com/uc?export=download&id=1EE5fOGJt9LZR5zB1Aln3bNo9UEyQM1MQ"
              className="flex items-center gap-2 bg-white/80 dark:bg-white/10 hover:bg-white dark:hover:bg-white/20 backdrop-blur-md text-slate-900 dark:text-white border border-slate-200 dark:border-white/20 px-8 py-4 rounded-full font-bold transition-all hover:scale-105 active:scale-95 transform-gpu shadow-lg"
            >
              Download Resume
            </a>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-slate-700 dark:text-slate-300 text-sm font-bold tracking-wide">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary-600 dark:text-primary-400" />
              {PROFILE.location}
            </div>
            <a 
              href="https://wa.me/917047933601" 
              target="_blank" 
              rel="noreferrer" 
              className="flex items-center gap-2 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              {/* WhatsApp Icon SVG */}
              <svg 
                viewBox="0 0 24 24" 
                fill="currentColor" 
                className="w-4 h-4 text-primary-600 dark:text-primary-400"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              {PROFILE.phone}
            </a>
            <a href={`https://linkedin.com/in/${PROFILE.linkedin}`} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
              <Linkedin className="w-4 h-4 text-primary-600 dark:text-primary-400" />
              linkedin.com/in/{PROFILE.linkedin}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;