import React from 'react';
import { PROFILE } from '../constants';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => (
  <footer className="relative z-10 border-t border-slate-200/50 dark:border-white/5 py-12 mt-20 bg-white/30 dark:bg-black/30 backdrop-blur-lg">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Let's Connect</h2>
      <div className="flex justify-center space-x-8 mb-8">
        <a 
          href={`mailto:${PROFILE.email}`} 
          className="p-3 rounded-full bg-white/50 dark:bg-white/10 hover:bg-primary-500 hover:text-white transition-all text-slate-500 dark:text-slate-400"
          aria-label="Email"
        >
          <Mail className="w-5 h-5" />
        </a>
        <a 
          href={`https://linkedin.com/in/${PROFILE.linkedin}`} 
          target="_blank" 
          rel="noreferrer" 
          className="p-3 rounded-full bg-white/50 dark:bg-white/10 hover:bg-[#0077b5] hover:text-white transition-all text-slate-500 dark:text-slate-400"
          aria-label="LinkedIn"
        >
          <Linkedin className="w-5 h-5" />
        </a>
        <a 
          href="https://github.com/repositoryanindyadas" 
          target="_blank" 
          rel="noreferrer" 
          className="p-3 rounded-full bg-white/50 dark:bg-white/10 hover:bg-black hover:text-white transition-all text-slate-500 dark:text-slate-400"
          aria-label="GitHub"
        >
          <Github className="w-5 h-5" />
        </a>
      </div>
      <p className="text-slate-500 dark:text-slate-500 text-sm font-medium">
        Designed & Built by {PROFILE.name}.
      </p>
    </div>
  </footer>
);

export default Footer;