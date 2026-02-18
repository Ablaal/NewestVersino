import { motion } from 'framer-motion';
import { Check, BookOpen } from 'lucide-react';
import { HeroBanner } from '@/components/ui-custom';
import { useLanguage } from '@/hooks/useLanguage';
import content from '@/data/contentLoader';

export function Primary() {
  const { t } = useLanguage();
  const primary = content.academics.primary;

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
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('Our Primary Programs', 'Barnaamijyadeena Hoose')}
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto" />
          </motion.div>

          <div className="space-y-16">
            {primary.programs.map((program, index) => (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 md:p-12 shadow-lg"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                        <BookOpen className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        {t(program.gradeRange, program.gradeRangeSo)}
                      </h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {t(program.description, program.descriptionSo)}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">
                      {t('Subjects', 'Mawduucyada')}:
                    </h4>
                    <div className="grid grid-cols-2 gap-3">
                      {program.subjects.map((subject, subIndex) => (
                        <div key={subIndex} className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-gray-600 text-sm">{t(subject, program.subjectsSo[subIndex])}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA with Background Image */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/primary-cta-bg.jpg)' }}
        />
        <div className="absolute inset-0 bg-navy/80" />
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
                 'Codsiyada hadda waa furan yihiin sanadka waxbarasho ee soo socda. Siiso ilmahaaga bilowga ugu fiican safarkiisa waxbarasho.')}
            </p>
            <a
              href="/admissions/apply"
              className="inline-flex items-center justify-center px-8 py-4 bg-gold text-navy rounded-full font-semibold hover:bg-gold-light transition-colors"
            >
              {t('Apply Now', 'Codso Hadda')}
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
