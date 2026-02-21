import { motion } from 'framer-motion';
import { Check, BookOpen, ChevronDown } from 'lucide-react';
import { HeroBanner } from '@/components/ui-custom';
import { useLanguage } from '@/hooks/useLanguage';
import content from '@/data/contentLoader';
import { useState } from 'react';

export function Primary() {
  const { t } = useLanguage();
  const primary = content.academics.primary;
  const [expandedProgram, setExpandedProgram] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <HeroBanner {...primary.hero} showWave={true} />

      {/* Description with Side Images */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            {/* Left Image */}
            {primary.images && primary.images[0] && (
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg order-1"
              >
                <img
                  src={primary.images[0]}
                  alt="Primary School 1"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            )}

            {/* Center Text */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center order-2 lg:order-2"
            >
              <p className="text-lg md:text-xl text-slate leading-relaxed">
                {t(primary.description, primary.descriptionSo)}
              </p>
            </motion.div>

            {/* Right Image */}
            {primary.images && primary.images[1] && (
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg order-3"
              >
                <img
                  src={primary.images[1]}
                  alt="Primary School 2"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            )}
          </div>

          {/* Middle Image Below */}
          {primary.images && primary.images[2] && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative aspect-[21/9] rounded-2xl overflow-hidden shadow-lg mt-8 max-w-4xl mx-auto"
            >
              <img
                src={primary.images[2]}
                alt="Primary School 3"
                className="w-full h-full object-cover"
              />
            </motion.div>
          )}
        </div>
      </section>

      {/* Programs */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              {t('Our Primary Programs', 'Barnaamijyadeena Hoose')}
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#1a5f7a] to-[#2a7a9b] mx-auto" />
          </motion.div>

          <motion.div 
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {primary.programs.map((program, index) => (
              <motion.div
                key={program.id}
                variants={itemVariants}
                onClick={() => setExpandedProgram(expandedProgram === index ? null : index)}
                className="group bg-white rounded-2xl p-8 md:p-10 shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200 overflow-hidden relative cursor-pointer"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#1a5f7a] to-[#0f4d63]" />
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <motion.div 
                        className="w-12 h-12 bg-[#1a5f7a]/10 rounded-xl flex items-center justify-center group-hover:bg-[#1a5f7a]/20 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <BookOpen className="w-6 h-6 text-[#1a5f7a]" />
                      </motion.div>
                      <h3 className="text-2xl font-bold text-slate-900">
                        {t(program.gradeRange, program.gradeRangeSo)}
                      </h3>
                    </div>
                    <p className="text-slate-700 leading-relaxed mb-6">
                      {t(program.description, program.descriptionSo)}
                    </p>
                  </div>
                  <motion.div
                    animate={{ rotate: expandedProgram === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0 ml-4"
                  >
                    <ChevronDown className="w-6 h-6 text-[#1a5f7a]" />
                  </motion.div>
                </div>
                <motion.div
                  initial={false}
                  animate={{ height: expandedProgram === index ? 'auto' : 0, opacity: expandedProgram === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden border-t border-slate-200 pt-4 mt-4"
                >
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-4">
                      {t('Subjects', 'Mawduucyada')}:
                    </h4>
                    <div className="grid grid-cols-2 gap-3">
                      {program.subjects.map((subject, subIndex) => (
                        <motion.div 
                          key={subIndex} 
                          className="flex items-center gap-2"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: subIndex * 0.05 }}
                        >
                          <Check className="w-4 h-4 text-[#1a5f7a] flex-shrink-0" />
                          <span className="text-slate-700 text-sm">{t(subject, program.subjectsSo[subIndex])}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA with Background Image */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/primary-cta-bg.jpg)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a5f7a]/90 to-[#0f4d63]/85" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              {t('Ready to Enroll Your Child?', 'Diyaar u tahay inaad U Diiwaangeliso Ilmahaaga?')}
            </h2>
            <p className="text-xl text-white/90 mb-8">
              {t('Applications are now open for the upcoming academic year. Give your child the best start to their educational journey.',
                 'Codsiyada hadda waa furan yihiin sanadka waxbarasho ee soo socda. Siiso ilmahaaka bilowga ugu fiican safarkiisa waxbarasho.')}
            </p>
            <a
              href="/admissions/apply"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#1a5f7a] rounded-full font-semibold hover:bg-white/90 transition-all shadow-lg"
            >
              {t('Apply Now', 'Codso Hadda')}
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
