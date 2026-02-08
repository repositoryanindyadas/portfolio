import React from 'react';
import { EXPERIENCE, SECTION_IDS } from '../constants';
import { Section, SectionTitle, staggerContainer, fadeInUp } from './ui';
import { Building } from 'lucide-react';
import { motion } from 'framer-motion';

const VoluntaryExperience = () => {
  return (
    <Section id={SECTION_IDS.VOLUNTARY}>
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

export default VoluntaryExperience;