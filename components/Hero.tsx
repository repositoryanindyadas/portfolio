import React from 'react';
import { PROFILE } from '../constants';
import { MapPin, Mail, Linkedin, Phone, Download, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <motion.div 
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            x: [0, 50, 0],
            y: [0, 30, 0]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -60, 0],
            x: [0, -30, 0],
            y: [0, -50, 0]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-[-10%] left-[-5%] w-[30rem] h-[30rem] bg-indigo-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block py-1 px-3 rounded-full bg-slate-800 border border-slate-700 text-primary-400 text-sm font-medium mb-6"
          >
            Available for Opportunities
          </motion.span>
          
          <h1 className="text-5xl md:text-7xl font-bold text-slate-100 tracking-tight mb-6">
            {PROFILE.name}
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-slate-400 font-light mb-8 max-w-3xl">
            {PROFILE.title}
          </h2>

          <p className="text-slate-400 max-w-2xl mx-auto mb-10 text-lg leading-relaxed">
            {PROFILE.summary}
          </p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
             <a 
              href={`mailto:${PROFILE.email}`}
              className="flex items-center gap-2 bg-primary-600 hover:bg-primary-500 text-white px-6 py-3 rounded-lg font-medium transition-all hover:scale-105 active:scale-95"
            >
              <Mail className="w-5 h-5" />
              Contact Me
            </a>
            <a 
              href="https://drive.google.com/uc?export=download&id=1EE5fOGJt9LZR5zB1Aln3bNo9UEyQM1MQ"
              className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 px-6 py-3 rounded-lg font-medium transition-all hover:scale-105 active:scale-95"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap justify-center gap-6 text-slate-400 text-sm"
          >
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary-400" />
              {PROFILE.location}
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-primary-400" />
              {PROFILE.phone}
            </div>
            <a href={`https://linkedin.com/in/${PROFILE.linkedin}`} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-primary-400 transition-colors">
              <Linkedin className="w-4 h-4 text-primary-400" />
              linkedin.com/in/{PROFILE.linkedin}
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-600"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;