import React from 'react';
import { PROJECTS, SECTION_IDS } from '../constants';
import { Section, SectionTitle, Card, Badge, staggerContainer, fadeInUp } from './ui';
import { Calendar, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Projects = () => {
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
          <Card key={index} variants={fadeInUp} className="flex flex-col h-full group">
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
              {project.link && (
                <a href={project.link} target="_blank" rel="noreferrer" className="p-2.5 rounded-full bg-slate-100 dark:bg-white/10 text-slate-900 dark:text-white hover:bg-primary-600 hover:text-white transition-all shadow-sm">
                  <ArrowUpRight className="w-5 h-5" />
                </a>
              )}
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
            </div>
          </Card>
        ))}
      </motion.div>
    </Section>
  );
};

export default Projects;