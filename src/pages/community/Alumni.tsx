import { motion } from 'framer-motion';
import { GraduationCap, Briefcase } from 'lucide-react';
import { HeroBanner, SectionTitle } from '@/components/ui-custom';
import { useLanguage } from '@/hooks/useLanguage';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import content from '@/data/contentLoader';

export function Alumni() {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation(0.1);
  const alumni = content.community.alumni;

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <HeroBanner {...alumni.hero} showWave={true} />

      {/* Introduction */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              {t(alumni.title, alumni.titleSo)}
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#1a5f7a] to-[#2a7a9b] mx-auto mb-8" />
            <p className="text-lg text-slate-700 leading-relaxed">
              {t(
                'Our alumni are making a difference across Somalia and around the world. Their success stories inspire current students and demonstrate the lasting impact of an Ablaal education.',
                'Ardaydii hore waxay sameynayaan farqad oo Soomaaliya iyo adduunka oo dhan. Sheekooyinkooda guushu waxay dhiirrigeliyaan ardayda hadda joogta oo ay muujinayaan saamaynta waara ee waxbarashada Ablaal.'
              )}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Alumni Stories */}
      <section ref={ref} className="py-20 md:py-32 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              {t(alumni.subtitle, alumni.subtitleSo)}
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#1a5f7a] to-[#2a7a9b] mx-auto mb-6" />
            <p className="text-lg text-slate-700">{t('Success Stories', 'Sheekooyinka Guusha')}</p>
          </motion.div>

          <div className="space-y-20">
            {alumni.stories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <motion.div 
                  className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 h-[400px]">
                    <motion.img
                      src={story.image}
                      alt={t(story.name, story.nameSo)}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.6 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a5f7a]/80 via-transparent to-transparent" />
                    <motion.div 
                      className="absolute bottom-6 left-6 right-6"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <h3 className="text-2xl font-bold text-white">{t(story.name, story.nameSo)}</h3>
                      <p className="text-white/90 flex items-center gap-2 mt-2">
                        <GraduationCap className="w-4 h-4" />
                        {t('Class of', 'Fasalka')} {story.graduationYear}
                      </p>
                    </motion.div>
                  </div>
                </motion.div>

                <motion.div 
                  className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                >
                  <div className="flex items-center gap-3 text-[#1a5f7a] mb-6">
                    <div className="p-2 bg-[#1a5f7a]/10 rounded-lg">
                      <Briefcase className="w-5 h-5" />
                    </div>
                    <span className="font-semibold text-lg">{t(story.currentRole, story.currentRoleSo)}</span>
                  </div>
                  <p className="text-lg text-slate-700 leading-relaxed italic border-l-4 border-[#1a5f7a] pl-6">
                    "{t(story.story, story.storySo)}"
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-[#1a5f7a] to-[#0f4d63] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mt-48" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full -ml-40 -mb-40" />
        <div className="container mx-auto px-4 max-w-3xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {t('Are You an Ablaal Alumni?', 'Ma Tahay Ardaydii Hore ee Ablaal?')}
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              {t(
                'We would love to hear from you! Share your story and stay connected with the Ablaal community.',
                'Waxaan jeclaan lahayn inaan kaa maqalno! La wadaag sheekadaada oo xiriirka ku laabo bulshada Ablaal.'
              )}
            </p>
            <motion.a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#1a5f7a] rounded-full font-semibold hover:bg-slate-100 transition-colors shadow-lg"
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px -10px rgba(0,0,0,0.1)' }}
            >
              {t('Get in Touch', 'Nala Soo Xiriir')}
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
