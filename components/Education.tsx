import React from 'react';
import { EDUCATION, CERTIFICATIONS_FIRST_PARTY, CERTIFICATIONS_THIRD_PARTY, SECTION_IDS } from '../constants';
import { Section, SectionTitle, Card, staggerContainer, fadeInUp } from './ui';
import { GraduationCap, Award, Calendar, Plus, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import { useCardClick, interactiveClass } from '../hooks/useCardClick';

const Education = () => {
  const handleCardClick = useCardClick();

  const renderPlaceholder = (toastText: string, displayText: string) => (
    <Card 
      variants={fadeInUp} 
      className={`p-5 flex items-center justify-center gap-3 border-dashed border-2 border-slate-300 dark:border-white/10 bg-slate-50/50 dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 transition-colors group ${interactiveClass}`}
      onClick={() => handleCardClick(undefined, toastText)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleCardClick(undefined, toastText);
        }
      }}
    >
        <div className="p-2 rounded-full bg-slate-200/50 dark:bg-white/5 group-hover:scale-110 transition-transform">
            <Plus className="w-4 h-4 text-slate-400 dark:text-slate-500" />
        </div>
        <span className="text-sm font-bold text-slate-500 dark:text-slate-400 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
            {displayText}
        </span>
    </Card>
  );

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
          <SectionTitle title="Academics" />
          <div className="space-y-6">
            {EDUCATION.map((edu, index) => (
              <Card 
                key={index} 
                variants={fadeInUp} 
                className={`p-6 ${interactiveClass}`}
                onClick={() => handleCardClick()}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleCardClick();
                  }
                }}
              >
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
          id={SECTION_IDS.CERTIFICATES}
          className="scroll-mt-24"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <SectionTitle title="Certificates" />
          
          <div className="space-y-10">
            {/* First Party */}
            <div>
                <h3 className="text-lg font-bold text-slate-500 dark:text-slate-400 mb-4 uppercase tracking-wider flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-500"></span>
                    First Party
                </h3>
                <div className="space-y-4">
                    {CERTIFICATIONS_FIRST_PARTY.map((cert, index) => (
                        <Card 
                            key={`fp-${index}`} 
                            variants={fadeInUp} 
                            className={`p-5 flex items-start gap-4 hover:bg-white dark:hover:bg-zinc-800 transition-colors ${interactiveClass}`}
                            onClick={() => handleCardClick()}
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' || e.key === ' ') {
                                    e.preventDefault();
                                    handleCardClick();
                                }
                            }}
                        >
                            <div className="w-12 h-12 rounded-full bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-800/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <ShieldCheck className="w-6 h-6 text-blue-600 dark:text-blue-500" />
                            </div>
                            <div className="flex-1 min-w-0 py-0.5">
                                <h4 className="font-bold text-slate-900 dark:text-slate-100 text-sm md:text-base leading-snug break-words">
                                    {cert.name}
                                </h4>
                                <p className="text-xs md:text-sm text-slate-700 dark:text-slate-400 mt-1 font-medium leading-relaxed">
                                    Offered by {cert.provider}
                                </p>
                            </div>
                            <span className="text-xs font-bold font-mono text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 px-3 py-1 rounded-full flex-shrink-0 mt-0.5">
                                {cert.year}
                            </span>
                        </Card>
                    ))}
                    {renderPlaceholder("Upcoming First Party Certifications to be added", "No First Party Certificates yet, to be added")}
                </div>
            </div>

            {/* Third Party */}
             <div>
                <h3 className="text-lg font-bold text-slate-500 dark:text-slate-400 mb-4 uppercase tracking-wider flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                    Third Party
                </h3>
                <div className="space-y-4">
                    {CERTIFICATIONS_THIRD_PARTY.map((cert, index) => (
                        <Card 
                            key={`tp-${index}`} 
                            variants={fadeInUp} 
                            className={`p-5 flex items-start gap-4 hover:bg-white dark:hover:bg-zinc-800 transition-colors ${interactiveClass}`}
                            onClick={() => handleCardClick()}
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' || e.key === ' ') {
                                    e.preventDefault();
                                    handleCardClick();
                                }
                            }}
                        >
                            <div className="w-12 h-12 rounded-full bg-amber-50 dark:bg-amber-900/10 border border-amber-100 dark:border-amber-800/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <Award className="w-6 h-6 text-amber-600 dark:text-amber-500" />
                            </div>
                            <div className="flex-1 min-w-0 py-0.5">
                                <h4 className="font-bold text-slate-900 dark:text-slate-100 text-sm md:text-base leading-snug break-words">
                                    {cert.name}
                                </h4>
                                <p className="text-xs md:text-sm text-slate-700 dark:text-slate-400 mt-1 font-medium leading-relaxed">
                                    Offered by {cert.provider}
                                </p>
                            </div>
                            <span className="text-xs font-bold font-mono text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 px-3 py-1 rounded-full flex-shrink-0 mt-0.5">
                                {cert.year}
                            </span>
                        </Card>
                    ))}
                    {renderPlaceholder("Upcoming Third Party Certifications to be added", "More to be added")}
                </div>
            </div>
          </div>

        </motion.div>
      </div>
    </Section>
  );
};

export default Education;