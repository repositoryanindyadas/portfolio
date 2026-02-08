import React from 'react';
import { EDUCATION, CERTIFICATIONS } from '../constants';
import { Section, SectionTitle, Card, staggerContainer, fadeInUp } from './ui';
import { GraduationCap, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const Education = () => {
  return (
    <Section id="education">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
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
              <motion.div 
                key={index} 
                variants={fadeInUp}
                className="flex gap-4 p-4 rounded-xl hover:bg-slate-800/30 transition-colors"
              >
                <div className="mt-1">
                  <div className="w-10 h-10 bg-primary-500/10 rounded-lg flex items-center justify-center">
                    <GraduationCap className="w-5 h-5 text-primary-400" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-200">{edu.degree}</h3>
                  <p className="text-primary-400">{edu.institution}</p>
                  <p className="text-sm text-slate-500 mt-1">{edu.duration}</p>
                </div>
              </motion.div>
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
          <SectionTitle title="Certifications & Courses" />
          <div className="space-y-4">
            {CERTIFICATIONS.map((cert, index) => (
              <Card key={index} variants={fadeInUp} className="py-4 px-5">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <Award className="w-5 h-5 text-yellow-500" />
                    <div>
                      <h4 className="font-semibold text-slate-200 text-sm md:text-base">{cert.name}</h4>
                      <p className="text-xs text-slate-400">Offered by {cert.provider}</p>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-slate-500 bg-slate-900 px-2 py-1 rounded">
                    {cert.year}
                  </span>
                </div>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default Education;
