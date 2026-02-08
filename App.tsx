import React from 'react';
import Hero from './components/Hero';
import Skills from './components/Skills';
import { ExperienceHistory, Projects } from './components/Projects';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Navbar from './components/Navbar';
import ScrollButton from './components/ScrollButton';
import { PROFILE } from './constants';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => (
  <footer className="relative z-10 border-t border-slate-200/50 dark:border-white/5 py-12 mt-20 bg-white/30 dark:bg-black/30 backdrop-blur-lg">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Let's Connect</h2>
      <div className="flex justify-center space-x-8 mb-8">
        <a href={`mailto:${PROFILE.email}`} className="p-3 rounded-full bg-white/50 dark:bg-white/10 hover:bg-primary-500 hover:text-white transition-all text-slate-500 dark:text-slate-400">
          <Mail className="w-5 h-5" />
        </a>
        <a href={`https://linkedin.com/in/${PROFILE.linkedin}`} target="_blank" rel="noreferrer" className="p-3 rounded-full bg-white/50 dark:bg-white/10 hover:bg-[#0077b5] hover:text-white transition-all text-slate-500 dark:text-slate-400">
          <Linkedin className="w-5 h-5" />
        </a>
        <a href="https://github.com/repositoryanindyadas" target="_blank" rel="noreferrer" className="p-3 rounded-full bg-white/50 dark:bg-white/10 hover:bg-black hover:text-white transition-all text-slate-500 dark:text-slate-400">
          <Github className="w-5 h-5" />
        </a>
      </div>
      <p className="text-slate-500 dark:text-slate-500 text-sm font-medium">
        Designed & Built by {PROFILE.name}.
      </p>
    </div>
  </footer>
);

const AppContent = () => {
  return (
    <div className="min-h-screen text-slate-900 dark:text-slate-200 selection:bg-primary-500/30 selection:text-primary-900 relative">
      {/* Global Background Layer */}
      <div className="fixed inset-0 z-0 pointer-events-none transition-colors duration-500 ease-in-out bg-ios-light dark:bg-ios-dark">
        {/* Abstract Mesh Gradients */}
        <div className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] rounded-full bg-primary-200/30 dark:bg-primary-900/10 blur-[120px] transform-gpu will-change-transform" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-indigo-200/30 dark:bg-indigo-900/10 blur-[120px] transform-gpu will-change-transform" />
        
        {/* Noise Texture for material feel */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none" 
             style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
        </div>
      </div>

      <Navbar />
      <ScrollButton />
      
      <main className="relative z-10">
        <Hero />
        <div className="space-y-12 pb-24">
          <div id="about" className="sr-only">About section marker</div>
          <Skills />
          <ExperienceHistory />
          <Projects />
          <Education />
          <Achievements />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

const App = () => {
  return (
    <AppContent />
  );
};

export default App;