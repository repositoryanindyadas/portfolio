import React from 'react';
import { PROJECTS, EXPERIENCE } from '../constants';
import { Section, SectionTitle, Card, Badge, staggerContainer, fadeInUp } from './ui';
import { Calendar, Building, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const Projects = () => {
  return (
    <Section id="projects">
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

export const ExperienceHistory = () => {
  return (
    <Section id="experience">
      <SectionTitle title="Voluntary contributions" subtitle="Professional journey and contributions." />
      
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative border-l-2 border-slate-300 dark:border-white/20 ml-4 md:ml-6 space-y-16"
      >
        {EXPERIENCE.map((job, index) => (
          <motion.div key={index} variants={fadeInUp} className="relative pl-8 md:pl-12">
            {/* Timeline Node */}
            <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-white dark:bg-zinc-900 border-4 border-primary-600 shadow-md"></div>
            
            <div className="relative overflow-hidden rounded-3xl bg-white/90 dark:bg-zinc-900/80 backdrop-blur-xl border border-white/50 dark:border-white/10 shadow-sm p-6 md:p-8 hover:bg-white dark:hover:bg-zinc-800 transition-colors">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-2">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">{job.role}</h3>
                <span className="text-primary-800 dark:text-primary-200 font-mono text-sm bg-primary-100 dark:bg-primary-500/20 border border-primary-200 dark:border-primary-500/30 px-3 py-1 rounded-full w-fit font-bold">
                  {job.date}
                </span>
              </div>
              
              <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300 mb-6 text-sm font-bold">
                <Building className="w-4 h-4" />
                <span>{job.company}</span>
                <span className="w-1 h-1 rounded-full bg-slate-400 dark:bg-slate-600" />
                <span>{job.location}</span>
              </div>
              
              <p className="text-slate-800 dark:text-slate-200 leading-relaxed font-medium">
                {job.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};