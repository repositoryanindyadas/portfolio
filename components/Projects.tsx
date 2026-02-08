import React from 'react';
import { PROJECTS, EXPERIENCE } from '../constants';
import { Section, SectionTitle, Card, Badge, staggerContainer, fadeInUp } from './ui';
import { Calendar, Building } from 'lucide-react';
import { motion } from 'framer-motion';

export const Projects = () => {
  return (
    <Section id="projects">
      <SectionTitle title="Featured Projects" subtitle="Key academic and industrial projects." />
      
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-8"
      >
        {PROJECTS.map((project, index) => (
          <Card key={index} variants={fadeInUp} className="flex flex-col group hover:border-primary-500/50">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-2xl font-bold text-slate-100 group-hover:text-primary-400 transition-colors">
                  {project.title}
                </h3>
                <div className="flex items-center gap-2 text-slate-400 text-sm mt-1">
                  <Calendar className="w-4 h-4" />
                  {project.date}
                  {project.status && (
                    <span className="bg-emerald-500/10 text-emerald-400 text-xs px-2 py-0.5 rounded-full ml-2">
                      {project.status}
                    </span>
                  )}
                </div>
              </div>
            </div>

            <p className="text-slate-300 mb-6 italic border-l-2 border-primary-500/30 pl-4">
              {project.description}
            </p>

            <ul className="space-y-2 mb-6 text-slate-400 text-sm list-disc list-inside marker:text-primary-500">
              {project.bullets.map((bullet, idx) => (
                <li key={idx} className="leading-relaxed">{bullet}</li>
              ))}
            </ul>

            <div className="mt-auto pt-6 border-t border-slate-700/50 flex flex-wrap gap-2">
              {project.techStack?.map((tech, idx) => (
                <Badge key={idx}>{tech}</Badge>
              ))}
            </div>
          </Card>
        ))}
      </motion.div>
    </Section>
  );
};

export const ExperienceHistory = () => {
  return (
    <Section id="experience" className="bg-slate-900/30">
      <SectionTitle title="Contributions" subtitle="Voluntary and professional contributions." />
      
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative border-l border-slate-700 ml-3 md:ml-6 space-y-12"
      >
        {EXPERIENCE.map((job, index) => (
          <motion.div key={index} variants={fadeInUp} className="relative pl-8 md:pl-12">
            {/* Timeline Dot */}
            <div className="absolute -left-1.5 top-2 w-3 h-3 rounded-full bg-primary-500 ring-4 ring-slate-900"></div>
            
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
              <h3 className="text-xl font-bold text-slate-100">{job.role}</h3>
              <span className="text-primary-400 font-mono text-sm">{job.date}</span>
            </div>
            
            <div className="flex items-center gap-2 text-slate-400 mb-4 text-sm">
              <Building className="w-4 h-4" />
              <span>{job.company}</span>
              <span className="mx-2">•</span>
              <span>{job.location}</span>
            </div>
            
            <p className="text-slate-300 leading-relaxed max-w-3xl">
              {job.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};