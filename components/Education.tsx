import React from 'react';
import { EDUCATION, CERTIFICATIONS, SECTION_IDS } from '../constants';
import { Section, SectionTitle, Card, staggerContainer, fadeInUp } from './ui';
import { GraduationCap, Award, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

const Education = () => {
  return (
    <Section id={SECTION_IDS.EDUCATION}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        {/* Degree Education */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <SectionTitle title="Education" />
          <div className="space-y-6">
            {EDUCATION.map((edu, index) => (
              <Card key={index} variants={fadeInUp} className="p-6">
                <div className="flex gap-5">
                  <div className="mt-1">
                    <div className="w-14 h-14 bg-blue-50 dark:bg-blue-900/20 rounded-2xl border border-blue-100 dark:border-blue-800/30 flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-sm">
                      <GraduationCap className="w-7 h-7" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">{edu.degree}</h3>
                    <p className="text-primary-800 dark:text-primary-300 font-bold">{edu.institution}</p>
                    <div className="flex items-center gap-2 mt-2 text-sm text-slate-600 dark:text-slate-400 font-semibold">
                      <Calendar className="w-4 h-4" />
                      {edu.duration}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <SectionTitle title="Certificates" />
          <div className="space-y-4">
            {CERTIFICATIONS.map((cert, index) => (
              <Card key={index} variants={fadeInUp} className="p-5 flex items-center gap-4 hover:bg-white dark:hover:bg-zinc-800 transition-colors">
                <div className="w-12 h-12 rounded-full bg-amber-50 dark:bg-amber-900/10 border border-amber-100 dark:border-amber-800/30 flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-amber-600 dark:text-amber-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-slate-900 dark:text-slate-100 text-base truncate">{cert.name}</h4>
                  <p className="text-sm text-slate-700 dark:text-slate-400 mt-0.5 font-medium">Offered by {cert.provider}</p>
                </div>
                <span className="text-xs font-bold font-mono text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 px-3 py-1 rounded-full">
                  {cert.year}
                </span>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default Education;