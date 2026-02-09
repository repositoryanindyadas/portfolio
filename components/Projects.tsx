import React from 'react';
import { PROJECTS, SECTION_IDS } from '../constants';
import { Section, SectionTitle, Card, Badge, staggerContainer, fadeInUp } from './ui';
import { Calendar, ArrowUpRight, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';
import { useCardClick, interactiveClass } from '../hooks/useCardClick';

const Projects = () => {
  const handleCardClick = useCardClick();

  return (
    <Section id={SECTION_IDS.PROJECTS}>
      <SectionTitle title="Projects" subtitle="Key academic and industrial projects I've engineered." />
      
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-8"
      >
        {PROJECTS.map((project, index) => (
          <Card 
            key={index} 
            variants={fadeInUp} 
            className={`flex flex-col h-full group ${interactiveClass}`}
            onClick={() => handleCardClick(project.link)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleCardClick(project.link);
              }
            }}
          >
            <div className="flex justify-between items-start mb-6">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-primary-700 dark:group-hover:text-primary-400 transition-colors">
                  {project.title}
                </h3>
                <div className="flex items-center gap-3 text-sm">
                  <span className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-white/10 px-3 py-1 rounded-full font-bold border border-slate-200 dark:border-white/5">
                    <Calendar className="w-3.5 h-3.5" />
                    {project.date}
                  </span>
                  {project.status && (
                    <span className="bg-emerald-100 text-emerald-800 dark:bg-emerald-500/20 dark:text-emerald-300 text-xs font-bold px-2.5 py-1 rounded-full border border-emerald-200 dark:border-emerald-500/30">
                      {project.status}
                    </span>
                  )}
                </div>
              </div>
            </div>

            <p className="text-slate-800 dark:text-slate-200 mb-8 leading-relaxed flex-grow font-medium">
              {project.description}
            </p>

            <div className="space-y-6">
              <ul className="space-y-3">
                {project.bullets.map((bullet, idx) => (
                  <li key={idx} className="text-sm text-slate-700 dark:text-slate-300 pl-4 border-l-2 border-primary-500/40 leading-relaxed font-medium">
                    {bullet}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 pt-6 border-t border-slate-200 dark:border-white/10">
                {project.techStack?.map((tech, idx) => (
                  <Badge key={idx}>{tech}</Badge>
                ))}
              </div>

              {/* Action / Status Footer */}
              {project.link && (
                <div className="pt-2">
                  <div className="flex items-center gap-2 text-primary-600 dark:text-primary-400 font-bold text-sm group-hover:underline decoration-2 underline-offset-4">
                    View Project <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              )}
            </div>
          </Card>
        ))}

        {/* Future Projects Placeholder */}
        <motion.div 
          variants={fadeInUp}
          onClick={() => handleCardClick(undefined, "More projects are in the pipeline! Stay tuned.")}
          className={`flex flex-col items-center justify-center p-8 h-full min-h-[400px] border-2 border-dashed border-slate-300 dark:border-white/10 rounded-3xl bg-slate-50/30 dark:bg-white/5 text-slate-400 dark:text-slate-500 hover:bg-slate-100 dark:hover:bg-white/10 hover:border-slate-400 dark:hover:border-white/20 transition-all duration-300 group ${interactiveClass}`}
        >
          <div className="w-20 h-20 rounded-full bg-slate-100 dark:bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary-50 dark:group-hover:bg-primary-900/20 transition-all duration-300">
             <Rocket className="w-8 h-8 text-slate-400 dark:text-slate-500 group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors" />
          </div>
          <h3 className="text-xl font-bold mb-3 text-slate-600 dark:text-slate-300">More in the Pipeline</h3>
          <p className="font-medium text-slate-500 dark:text-slate-400 text-center max-w-xs leading-relaxed">
            New upcoming and old projects are to be added.
          </p>
          <div className="mt-6 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
            <span className="w-2 h-2 rounded-full bg-primary-500/50 animate-pulse" />
            Coming Soon
          </div>
        </motion.div>

      </motion.div>
    </Section>
  );
};

export default Projects;