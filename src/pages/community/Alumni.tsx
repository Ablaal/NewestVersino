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
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {t(alumni.title, alumni.titleSo)}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              {t(
                'Our alumni are making a difference across Somalia and around the world. Their success stories inspire current students and demonstrate the lasting impact of an Ablaal education.',
                'Ardaydii hore waxay sameynayaan farqad oo Soomaaliya iyo adduunka oo dhan. Sheekooyinkooda guushu waxay dhiirrigeliyaan ardayda hadda joogta oo ay muujinayaan saamaynta waara ee waxbarashada Ablaal.'
              )}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Alumni Stories */}
      <section ref={ref} className="py-20 md:py-32 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle
            title={alumni.subtitle}
            titleSo={alumni.subtitleSo}
            subtitle="Success Stories"
            subtitleSo="Sheekooyinka Guusha"
          />

          <div className="space-y-16">
            {alumni.stories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src={story.image}
                      alt={t(story.name, story.nameSo)}
                      className="w-full h-[400px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="text-2xl font-bold text-white">{t(story.name, story.nameSo)}</h3>
                      <p className="text-white/80 flex items-center gap-2 mt-1">
                        <GraduationCap className="w-4 h-4" />
                        {t('Class of', 'Fasalka')} {story.graduationYear}
                      </p>
                    </div>
                  </div>
                </div>
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="flex items-center gap-2 text-primary mb-4">
                    <Briefcase className="w-5 h-5" />
                    <span className="font-medium">{t(story.currentRole, story.currentRoleSo)}</span>
                  </div>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    "{t(story.story, story.storySo)}"
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 bg-primary text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t('Are You an Ablaal Alumni?', 'Ma Tahay Ardaydii Hore ee Ablaal?')}
            </h2>
            <p className="text-xl text-white/90 mb-8">
              {t(
                'We would love to hear from you! Share your story and stay connected with the Ablaal community.',
                'Waxaan jeclaan lahayn inaan kaa maqalno! La wadaag sheekadaada oo xiriirka ku laabo bulshada Ablaal.'
              )}
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              {t('Get in Touch', 'Nala Soo Xiriir')}
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
