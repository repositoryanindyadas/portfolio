import React from 'react';
import { ACHIEVEMENTS } from '../constants';
import { Section, SectionTitle, Card, staggerContainer, fadeInUp } from './ui';
import { Trophy, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

const Achievements = () => {
  return (
    <Section id="achievements" className="bg-slate-900/30">
      <SectionTitle title="Achievements" subtitle="Competitive programming and co-curricular activities." />
      
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {ACHIEVEMENTS.map((item, index) => (
          <Card key={index} variants={fadeInUp} className="border-t-4 border-t-primary-500">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold text-slate-100">{item.title}</h3>
                <p className="text-primary-400 text-sm font-medium">{item.event}</p>
              </div>
              <div className="bg-yellow-500/10 text-yellow-400 p-2 rounded-full">
                <Trophy className="w-5 h-5" />
              </div>
            </div>
            
            <div className="flex items-center gap-2 text-slate-500 text-xs mb-4">
              <Calendar className="w-3 h-3" />
              {item.date}
              <span className="w-1 h-1 bg-slate-600 rounded-full mx-1"></span>
              <span className="text-slate-300">{item.result}</span>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed">
              {item.description}
            </p>
          </Card>
        ))}
      </motion.div>
    </Section>
  );
};

export default Achievements;
