import { motion } from 'framer-motion';
import { PinnedHero, PinnedSection, SectionTitle } from '@/components/ui-custom';
import { useLanguage } from '@/hooks/useLanguage';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import content from '@/data/contentLoader';

export function Facilities() {
  const { t } = useLanguage();
  const { ref: servicesRef, isVisible: servicesVisible } = useScrollAnimation(0.1);
  const services = content.services;

  return (
    <div className="min-h-screen">
      {/* Pinned Hero - Full bleed with fixed background using uploaded image */}
      <PinnedHero
        backgroundImage="/images/services-bg.png"
        title={t('Services & Facilities', 'Adeegyada & Xarumaha')}
        subtitle={t('World-class facilities for exceptional learning', 'Xarumo heer caalam ah oo loogu talagalay waxbarasho aad u fiican')}
        overlayOpacity={0.5}
      />

      {/* Intro - Pinned Background */}
      <PinnedSection
        backgroundImage="/images/facility-1.jpg"
        overlayOpacity={0.75}
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
              <p className="text-xl md:text-2xl text-white leading-relaxed">
                {t(services.intro, services.introSo)}
              </p>
            </div>
          </motion.div>
        </div>
      </PinnedSection>

      {/* Facilities Section - Pinned Backgrounds for each facility */}
      <div className="space-y-0">
        {services.facilities.items.map((facility, index) => (
          <PinnedSection
            key={facility.id}
            backgroundImage={facility.image}
            overlayOpacity={0.7}
            contentClassName="py-20 md:py-32"
          >
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden shadow-2xl border border-white/20">
                    <img
                      src={facility.image}
                      alt={t(facility.title, facility.titleSo)}
                      className="w-full h-[350px] object-cover"
                    />
                  </div>
                </div>
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                    <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-2 block">
                      {t('Facility', 'Xarun')} {index + 1}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                      {t(facility.title, facility.titleSo)}
                    </h3>
                    <div className="w-16 h-1 bg-primary mb-6" />
                    <p className="text-lg text-white/90 leading-relaxed">
                      {t(facility.description, facility.descriptionSo)}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </PinnedSection>
        ))}
      </div>

      {/* Services Section - White Background with Cards */}
      <section ref={servicesRef} className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle
            title={services.services.title}
            titleSo={services.services.titleSo}
            subtitle="Services"
            subtitleSo="Adeegyada"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={servicesVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12"
          >
            {t(services.services.intro, services.services.introSo)}
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.services.items.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={servicesVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-gray-100"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={service.image}
                    alt={t(service.title, service.titleSo)}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <h3 className="absolute bottom-4 left-6 text-xl font-bold text-white">
                    {t(service.title, service.titleSo)}
                  </h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 leading-relaxed">{t(service.description, service.descriptionSo)}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Pinned Background */}
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
            className="max-w-3xl mx-auto text-center"
          >
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-10 md:p-16 border border-white/20">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                {t('Visit Our Campuses', 'Booqo Xarumaha')}
              </h2>
              <p className="text-xl text-white/90 mb-8">
                {t('Experience our world-class facilities firsthand. Schedule a tour today.', 'La kulmi xarumaha heerka caalamka. Ballan ballaniso booqashada maanta.')}
              </p>
              <a
                href="/contact"
                className="inline-block px-8 py-4 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition-colors"
              >
                {t('Book a Tour', 'Ballan Ballaniso Booqasho')}
              </a>
            </div>
          </motion.div>
        </div>
      </PinnedSection>
    </div>
  );
}
