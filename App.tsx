import React from 'react';
import Hero from './components/Hero';
import Skills from './components/Skills';
import { ExperienceHistory, Projects } from './components/Projects';
import Education from './components/Education';
import Achievements from './components/Achievements';
import { PROFILE } from './constants';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => (
  <footer className="bg-slate-900 border-t border-slate-800 py-12 mt-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-2xl font-bold text-slate-100 mb-6">Let's Connect</h2>
      <div className="flex justify-center space-x-8 mb-8">
        <a href={`mailto:${PROFILE.email}`} className="text-slate-400 hover:text-primary-400 transition-colors">
          <Mail className="w-6 h-6" />
        </a>
        <a href={`https://linkedin.com/in/${PROFILE.linkedin}`} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-primary-400 transition-colors">
          <Linkedin className="w-6 h-6" />
        </a>
        <a href="https://github.com/repositoryanindyadas" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-primary-400 transition-colors">
          <Github className="w-6 h-6" />
        </a>
      </div>
      <p className="text-slate-500 text-sm">
        © {new Date().getFullYear()} {PROFILE.name}. Built with React & Tailwind.
      </p>
    </div>
  </footer>
);

const App = () => {
  return (
    <div className="bg-slate-950 min-h-screen text-slate-200 selection:bg-primary-500/30">
      <main>
        <Hero />
        <div className="space-y-12">
          <div id="about" className="sr-only">About section marker</div> {/* About is integrated in Hero/Profile */}
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

export default App;