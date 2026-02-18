import { motion } from 'framer-motion';
import { Check, FileText, Users, CreditCard, Award, GraduationCap, Heart } from 'lucide-react';
import { HeroBanner, AnimatedCounter, SlideInUp } from '@/components/ui-custom';
import { useLanguage } from '@/hooks/useLanguage';
import content from '@/data/contentLoader';

export function AdmissionsInfo() {
  const { t } = useLanguage();
  const admissions = content.admissions;

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <HeroBanner {...admissions.hero} showWave={true} />

      {/* Facts at a Glance */}
      {admissions.facts && (
        <section className="py-16 md:py-24 bg-navy">
          <div className="container mx-auto px-4">
            <SlideInUp className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {t(admissions.facts.title, admissions.facts.titleSo)}
              </h2>
            </SlideInUp>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {admissions.facts.items.map((fact: any, index: number) => {
                const numValue = parseInt(fact.value.replace(/[^0-9]/g, ''));
                const suffix = fact.value.replace(/[0-9]/g, '');
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30, scale: 0.8 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.5, 
                      delay: index * 0.15,
                      type: "spring",
                      stiffness: 100
                    }}
                    className="text-center group"
                  >
                    <motion.div 
                      className="text-4xl md:text-5xl font-bold text-gold mb-2"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <AnimatedCounter 
                        value={numValue} 
                        suffix={suffix}
                        duration={2.5}
                      />
                    </motion.div>
                    <div className="text-sm md:text-base text-white/80">{t(fact.label, fact.labelSo)}</div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Requirements */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4">
          <SlideInUp className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-navy text-center mb-12">
              {t(admissions.requirements.title, admissions.requirements.titleSo)}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {admissions.requirements.items.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ scale: 1.02, x: index % 2 === 0 ? 5 : -5 }}
                  className="flex items-start gap-4 bg-cream rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow cursor-default"
                >
                  <motion.div 
                    className="flex-shrink-0 w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Check className="w-5 h-5 text-gold" />
                  </motion.div>
                  <p className="text-slate">{t(item, admissions.requirements.itemsSo[index])}</p>
                </motion.div>
              ))}
            </div>
          </SlideInUp>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 md:py-32 bg-cream">
        <div className="container mx-auto px-4">
          <SlideInUp className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-navy text-center mb-12">
              {t(admissions.process.title, admissions.process.titleSo)}
            </h2>

            <div className="space-y-8">
              {admissions.process.steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.15,
                    type: "spring",
                    stiffness: 80
                  }}
                  whileHover={{ x: index % 2 === 0 ? 10 : -10 }}
                  className="flex gap-6 group"
                >
                  <div className="flex-shrink-0">
                    <motion.div 
                      className="w-12 h-12 bg-navy rounded-full flex items-center justify-center text-white font-bold text-lg"
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      {index + 1}
                    </motion.div>
                    {index < admissions.process.steps.length - 1 && (
                      <motion.div 
                        className="w-0.5 h-full bg-gold/30 mx-auto mt-2"
                        initial={{ height: 0 }}
                        whileInView={{ height: '100%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                      />
                    )}
                  </div>
                  <div className="pb-8">
                    <h3 className="text-xl font-bold text-navy mb-2 group-hover:text-gold transition-colors">
                      {t(step.title, step.titleSo)}
                    </h3>
                    <p className="text-slate">{t(step.description, step.descriptionSo)}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </SlideInUp>
        </div>
      </section>

      {/* Scholarships Section */}
      {admissions.scholarships && (
        <section className="py-20 md:py-32 bg-cream">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 rounded-full mb-6">
                  <Award className="w-5 h-5 text-gold" />
                  <span className="text-sm font-medium text-navy">{t('Scholarships', 'Deeqaha Waxbarasho')}</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
                  {t(admissions.scholarships.title, admissions.scholarships.titleSo)}
                </h2>
                <p className="text-lg text-slate leading-relaxed mb-8">
                  {t(admissions.scholarships.description, admissions.scholarships.descriptionSo)}
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-3 bg-white rounded-xl px-5 py-3 shadow-sm">
                    <Heart className="w-5 h-5 text-sage" />
                    <span className="text-navy font-medium">1,000+ {t('Scholarships', 'Deeqo')}</span>
                  </div>
                  <div className="flex items-center gap-3 bg-white rounded-xl px-5 py-3 shadow-sm">
                    <GraduationCap className="w-5 h-5 text-sage" />
                    <span className="text-navy font-medium">{t('Full Coverage', 'Daryeel Buuxa')}</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl"
              >
                <img
                  src={admissions.scholarships.image || '/images/scholarship.jpg'}
                  alt="Scholarships"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4">
                    <p className="text-navy font-semibold">{t('Every child deserves quality education', 'Ilmuhu kasta wuxuu mudan yahay waxbarasho tayo leh')}</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* Quick Links */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: FileText,
                title: 'Apply Online',
                titleSo: 'Codso Khadka Tooska ah',
                description: 'Complete your application online in just a few minutes.',
                descriptionSo: 'Dhammaystir codsigaaga khadka tooska ah daqiiqo gudaheed.',
                link: '/admissions/apply',
              },
              {
                icon: CreditCard,
                title: 'School Fees',
                titleSo: 'Kharashka Dugsiga',
                description: 'Learn about our fee structure and payment options.',
                descriptionSo: 'Baro qaab-dhismeedka kharashka iyo ikhtiyaarada lacag bixinta.',
                link: '/admissions/fees',
              },
              {
                icon: Users,
                title: 'Contact Admissions',
                titleSo: 'Nala Xiriir Gelitaanka',
                description: 'Have questions? Our admissions team is here to help.',
                descriptionSo: 'Su\'aalood ma qabtaa? Kooxdeena gelitaanku waa halkan si ay kaa caawiyaan.',
                link: '/admissions/contact',
              },
            ].map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                initial={{ opacity: 0, x: index === 0 ? -80 : index === 2 ? 80 : 0, y: index === 1 ? 50 : 0 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.15)"
                }}
                className="group bg-cream rounded-2xl p-8 text-center hover:bg-navy hover:text-white transition-all shadow-lg"
              >
                <motion.div 
                  className="w-16 h-16 bg-navy/10 group-hover:bg-gold/20 rounded-2xl flex items-center justify-center mx-auto mb-6"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <item.icon className="w-8 h-8 text-navy group-hover:text-gold transition-colors" />
                </motion.div>
                <h3 className="text-xl font-bold mb-3 text-navy group-hover:text-white">{t(item.title, item.titleSo)}</h3>
                <p className="text-slate group-hover:text-white/80 transition-colors">{t(item.description, item.descriptionSo)}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
