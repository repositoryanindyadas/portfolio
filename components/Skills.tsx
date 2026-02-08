import React from 'react';
import { SKILLS, SKILL_ICONS, SECTION_IDS } from '../constants';
import { Section, SectionTitle, Card, Badge, staggerContainer, fadeInUp } from './ui';
import { Code } from 'lucide-react';
import { motion } from 'framer-motion';

const Skills = () => {
  return (
    <Section id={SECTION_IDS.SKILLS}>
      <SectionTitle title="Technical Skills" subtitle="My technical toolkit and areas of expertise." />
      
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {SKILLS.map((category, index) => {
          const Icon = SKILL_ICONS[category.title] || Code;
          
          return (
            <Card key={index} variants={fadeInUp} className="flex flex-col h-full hover:border-primary-500/30 transition-colors">
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2.5 bg-primary-100 dark:bg-white/10 rounded-xl border border-primary-200 dark:border-white/10">
                  <Icon className="w-6 h-6 text-primary-700 dark:text-primary-300" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {category.skills.map((skill, idx) => (
                  <Badge key={idx} variant="outline">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          );
        })}
      </motion.div>
    </Section>
  );
};

export default Skills;