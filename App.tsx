import React from 'react';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import VoluntaryExperience from './components/VoluntaryExperience';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Publications from './components/Publications';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollButton from './components/ScrollButton';
import { ToastProvider } from './context/ToastContext';

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
          <VoluntaryExperience />
          <Projects />
          <Publications />
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
    <ToastProvider>
      <AppContent />
    </ToastProvider>
  );
};

export default App;