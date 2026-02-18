import { motion } from 'framer-motion';
import { Star, Heart, Users, Lightbulb, HandHeart, Shield } from 'lucide-react';
import { PinnedHero, PinnedSection } from '@/components/ui-custom';
import { useLanguage } from '@/hooks/useLanguage';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import content from '@/data/contentLoader';

const iconMap: Record<string, React.ElementType> = {
  Star,
  Heart,
  Users,
  Lightbulb,
  HandHeart,
  Shield,
};

export function CoreValues() {
  const { t } = useLanguage();
  const { isVisible } = useScrollAnimation(0.1);
  const values = content.about.coreValues;

  return (
    <div className="min-h-screen">
      {/* Pinned Hero */}
      <PinnedHero
        backgroundImage="/images/gallery-4.jpg"
        title={t('Core Values', 'Qiimayaasha Aasaasiga ah')}
        subtitle={t('The principles that guide our community', "Mabaadi'da hogaamiya bulshadeena")}
        overlayOpacity={0.5}
      />

      {/* Values Grid - Pinned Background */}
      <PinnedSection
        backgroundImage="/images/facility-1.jpg"
        overlayOpacity={0.8}
        contentClassName="py-20 md:py-32"
      >
        <div className="container mx-auto px-4">
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {t('Our Core Values', 'Qiimayaasha Aasaasiga ah')}
              </h2>
              <div className="w-20 h-1 bg-primary mx-auto" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.values.map((value, index) => {
                const Icon = iconMap[value.icon] || Star;
                return (
                  <motion.div
                    key={value.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-white/20"
                  >
                    <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{t(value.title, value.titleSo)}</h3>
                    <p className="text-white/80 leading-relaxed">{t(value.description, value.descriptionSo)}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </PinnedSection>

      {/* Commitment Section - Pinned Background */}
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
            className="max-w-4xl mx-auto text-center"
          >
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-10 md:p-16 border border-white/20">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                {t('Our Commitment to Excellence', 'Dhammaan Dadaalkeena ee Waxsanaanta')}
              </h2>
              <div className="w-20 h-1 bg-primary mx-auto mb-6" />
              <p className="text-xl text-white/90 leading-relaxed">
                {t('These values are not just words on a page – they are the foundation of everything we do. Every member of the Ablaal Schools community is committed to living these values every day.',
                   'Qiimayaashani ma ahan erayo oo kaliya oo ku yaal bog – waxay yihiin aasaaska wax kasta oo aan sameyno. Qof kasta oo ka mid ah bulshada Dugsiyada Ablaal waxay dhammaan u dhaqan qaadata qiimayaashan maalin kasta.')}
              </p>
            </div>
          </motion.div>
        </div>
      </PinnedSection>
    </div>
  );
}
