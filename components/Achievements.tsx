import React from 'react';
import { ACHIEVEMENTS } from '../constants';
import { Section, SectionTitle, Card, staggerContainer, fadeInUp } from './ui';
import { Trophy, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

const Achievements = () => {
  return (
    <Section id="achievements" className="bg-slate-50/50 dark:bg-black/20">
      <SectionTitle title="Achievements" subtitle="Competitive programming and co-curricular activities." />
      
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {ACHIEVEMENTS.map((item, index) => (
          <Card key={index} variants={fadeInUp} className="border-t-[4px] border-t-primary-500">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">{item.title}</h3>
                <p className="text-primary-800 dark:text-primary-300 text-sm font-bold mt-1">{item.event}</p>
              </div>
              <div className="bg-yellow-50 dark:bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 p-2.5 rounded-full border border-yellow-100 dark:border-yellow-500/20 shadow-sm">
                <Trophy className="w-5 h-5" />
              </div>
            </div>
            
            <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-xs font-bold uppercase tracking-wider mb-5">
              <Calendar className="w-3.5 h-3.5" />
              {item.date}
              <span className="w-1 h-1 bg-slate-400 dark:bg-slate-600 rounded-full mx-1"></span>
              <span className="text-slate-800 dark:text-slate-200">{item.result}</span>
            </div>

            <p className="text-slate-800 dark:text-slate-200 text-sm leading-relaxed font-medium">
              {item.description}
            </p>
          </Card>
        ))}
      </motion.div>
    </Section>
  );
};

export default Achievements;