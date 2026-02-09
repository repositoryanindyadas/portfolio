import React from 'react';
import { PUBLICATIONS, SECTION_IDS } from '../constants';
import { Section, SectionTitle, Card, staggerContainer, fadeInUp } from './ui';
import { Calendar, ArrowUpRight, Clock, BookOpen, Plus, FileText } from 'lucide-react';
import { motion } from 'framer-motion';
import { useCardClick, interactiveClass } from '../hooks/useCardClick';

const Publications = () => {
  const handleCardClick = useCardClick();

  return (
    <Section id={SECTION_IDS.PUBLICATIONS}>
      <SectionTitle 
        title="Publications" 
        subtitle="Key Academic Research papers, Dissertations, Patents and etc that I have Published or Upcoming." 
      />
      
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-8"
      >
        {PUBLICATIONS.map((pub, index) => (
          <Card 
            key={index} 
            variants={fadeInUp} 
            className={`flex flex-col h-full group ${interactiveClass}`}
            onClick={() => handleCardClick(pub.link)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleCardClick(pub.link);
              }
            }}
          >
            <div className="flex justify-between items-start mb-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2 mb-2">
                  <span className="flex items-center gap-1.5 text-xs font-bold tracking-wider text-primary-600 dark:text-primary-400 uppercase">
                    <BookOpen className="w-3.5 h-3.5" />
                    {pub.type}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white leading-tight">
                  {pub.title}
                </h3>
                <div className="flex items-center gap-3 text-sm pt-1">
                  <span className="flex items-center gap-1.5 text-slate-600 dark:text-slate-400 font-bold">
                    <Calendar className="w-3.5 h-3.5" />
                    {pub.date}
                  </span>
                  
                  {pub.status === 'Upcoming' ? (
                    <span className="bg-amber-100 text-amber-800 dark:bg-amber-500/20 dark:text-amber-300 text-xs font-bold px-2.5 py-1 rounded-full border border-amber-200 dark:border-amber-500/30 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      Upcoming
                    </span>
                  ) : (
                    <span className="bg-emerald-100 text-emerald-800 dark:bg-emerald-500/20 dark:text-emerald-300 text-xs font-bold px-2.5 py-1 rounded-full border border-emerald-200 dark:border-emerald-500/30">
                      {pub.status}
                    </span>
                  )}
                </div>
              </div>
            </div>

            <div className="relative flex-grow">
                {/* Visual indicator for upcoming items */}
                {pub.status === 'Upcoming' && (
                    <div className="absolute -left-4 top-0 bottom-0 w-1 bg-amber-400/50 rounded-full" />
                )}
                <p className={`text-slate-800 dark:text-slate-200 mb-4 leading-relaxed font-medium ${pub.status === 'Upcoming' ? 'pl-2' : ''}`}>
                {pub.description}
                </p>
            </div>
            
            <div className="mt-auto pt-6 border-t border-slate-200 dark:border-white/10">
                {pub.link ? (
                  <div className="flex items-center gap-2 text-primary-600 dark:text-primary-400 font-bold text-sm group-hover:underline decoration-2 underline-offset-4">
                    View Publication <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                ) : (
                  <div className="flex items-center justify-between">
                     {pub.status === 'Upcoming' ? (
                        <div className="flex items-center gap-2 text-slate-400 dark:text-slate-500 font-medium text-sm italic">
                            Details to be added upon publication
                        </div>
                     ) : (
                        <div className="flex items-center gap-2 text-slate-400 dark:text-slate-500 font-medium text-sm italic bg-slate-50 dark:bg-white/5 px-3 py-2 rounded-lg w-fit">
                            <Clock className="w-3.5 h-3.5" />
                            <span>Coming Soon</span>
                        </div>
                     )}
                  </div>
                )}
            </div>
          </Card>
        ))}

        {/* Future Publications Placeholder */}
        <motion.div 
          variants={fadeInUp}
          onClick={() => handleCardClick(undefined, "More research papers will be added soon!")}
          className={`flex flex-col items-center justify-center p-8 h-full min-h-[300px] border-2 border-dashed border-slate-300 dark:border-white/10 rounded-3xl bg-slate-50/30 dark:bg-white/5 text-slate-400 dark:text-slate-500 hover:bg-slate-100 dark:hover:bg-white/10 hover:border-slate-400 dark:hover:border-white/20 transition-all duration-300 group ${interactiveClass}`}
        >
          <div className="w-20 h-20 rounded-full bg-slate-100 dark:bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary-50 dark:group-hover:bg-primary-900/20 transition-all duration-300">
             <FileText className="w-8 h-8 text-slate-400 dark:text-slate-500 group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors" />
          </div>
          <h3 className="text-xl font-bold mb-3 text-slate-600 dark:text-slate-300">More to be Added</h3>
          <p className="font-medium text-slate-500 dark:text-slate-400 text-center max-w-xs leading-relaxed">
            Future research papers and academic contributions will be listed here.
          </p>
          <div className="mt-6 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
             <Plus className="w-4 h-4" />
             Research in Progress
          </div>
        </motion.div>
      </motion.div>
    </Section>
  );
};

export default Publications;