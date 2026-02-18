import { motion } from 'framer-motion';
import { PinnedHero, PinnedSection } from '@/components/ui-custom';
import { useLanguage } from '@/hooks/useLanguage';
import content from '@/data/contentLoader';

export function MissionVision() {
  const { t } = useLanguage();
  const mv = content.about.missionVision;

  const sections = [
    { key: 'whoWeAre', icon: '1', bgImage: '/images/facility-1.jpg' },
    { key: 'core', icon: '2', bgImage: '/images/facility-2.jpg' },
    { key: 'mission', icon: '3', bgImage: '/images/facility-3.jpg' },
    { key: 'vision', icon: '4', bgImage: '/images/facility-4.jpg' },
    { key: 'purpose', icon: '5', bgImage: '/images/discover.jpg' },
  ] as const;

  return (
    <div className="min-h-screen">
      {/* Pinned Hero */}
      <PinnedHero
        backgroundImage="/images/service-2.jpg"
        title={t('Mission & Vision', 'Ujeeddo & Aragti')}
        subtitle={t('Our guiding principles and aspirations', "Mabaadi'da iyo himilooyinka hogaamiya")}
        overlayOpacity={0.5}
      />

      {/* Content Sections - Each with Pinned Background */}
      {sections.map((section, index) => {
        const data = mv[section.key];
        return (
          <PinnedSection
            key={section.key}
            backgroundImage={section.bgImage}
            overlayOpacity={0.75}
            contentClassName="py-20 md:py-32"
          >
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="max-w-4xl mx-auto"
              >
                <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-16 h-16 bg-primary rounded-2xl flex items-center justify-center shadow-lg">
                      <span className="text-2xl font-bold text-white">{section.icon}</span>
                    </div>
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                        {t(data.title, data.titleSo)}
                      </h2>
                      <div className="w-16 h-1 bg-primary mb-6" />
                      <p className="text-lg text-white/90 leading-relaxed">
                        {t(data.content, data.contentSo)}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </PinnedSection>
        );
      })}

      {/* Values Preview - Pinned Background */}
      <PinnedSection
        backgroundImage="/images/cta-bg.jpg"
        overlayOpacity={0.7}
        contentClassName="py-20 md:py-32"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-10 md:p-16 border border-white/20">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                {t('What We Uphold', 'Waxaan Xoojinnaa')}
              </h2>
              <div className="w-20 h-1 bg-primary mx-auto mb-6" />
              <p className="text-lg text-white/90 mb-8">
                {t("Our core values guide everything we do at Ablaal Schools. They shape our culture, inform our decisions, and inspire our community.", 
                   "Qiimayaasha aasaasiga ah ee waxay hogaamiyaan wax kasta oo aan ku sameyno Dugsiyada Ablaal. Waxay qeexayaan dhaqankeena, waxay macluumaadka u ah go'aannadeena, waxayna dhiirrigeliyaan bulshadeena.")}
              </p>
              <a
                href="/about/core-values"
                className="inline-flex items-center justify-center px-8 py-3 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition-colors"
              >
                {t('Explore Our Core Values', 'Sahaminta Qiimayaasha Aasaasiga ah')}
              </a>
            </div>
          </motion.div>
        </div>
      </PinnedSection>
    </div>
  );
}
