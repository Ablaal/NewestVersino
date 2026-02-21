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

      {/* Intro - Modern Section */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-[#1a5f7a] to-[#0f4d63] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mt-48" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full -ml-40 -mb-40" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <p className="text-xl md:text-2xl text-white/95 leading-relaxed">
              {t(services.intro, services.introSo)}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Facilities Section - Modern Alternating Layout */}
      <div className="space-y-0">
        {services.facilities.items.map((facility, index) => (
          <section 
            key={facility.id}
            className={`py-20 md:py-32 ${index % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}
          >
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Image */}
                <motion.div 
                  className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-200 h-[350px] md:h-[400px]">
                    <motion.img
                      src={facility.image}
                      alt={t(facility.title, facility.titleSo)}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.6 }}
                    />
                  </div>
                </motion.div>

                {/* Content */}
                <motion.div 
                  className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                >
                  <div>
                    <span className="text-[#1a5f7a] font-semibold text-sm uppercase tracking-wider mb-2 block">
                      {t('Facility', 'Xarun')} {index + 1}
                    </span>
                    <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                      {t(facility.title, facility.titleSo)}
                    </h3>
                    <div className="w-16 h-1 bg-gradient-to-r from-[#1a5f7a] to-[#2a7a9b] mb-6" />
                    <p className="text-lg text-slate-700 leading-relaxed">
                      {t(facility.description, facility.descriptionSo)}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </section>
        ))}
      </div>

      {/* Services Section - Modern Grid */}
      <section ref={servicesRef} className="py-20 md:py-32 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              {t(services.services.title, services.services.titleSo)}
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#1a5f7a] to-[#2a7a9b] mx-auto mb-6" />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-slate-700 max-w-3xl mx-auto"
            >
              {t(services.services.intro, services.services.introSo)}
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.1 }}
          >
            {services.services.items.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, boxShadow: '0 25px 50px -5px rgba(26, 95, 122, 0.15)' }}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all border border-slate-200 flex flex-col h-full cursor-pointer"
              >
                <div className="relative h-56 overflow-hidden bg-slate-200">
                  <motion.img
                    src={service.image}
                    alt={t(service.title, service.titleSo)}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a5f7a]/70 to-transparent" />
                  <motion.h3 
                    className="absolute bottom-4 left-6 text-2xl font-bold text-white"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    {t(service.title, service.titleSo)}
                  </motion.h3>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <p className="text-slate-700 leading-relaxed flex-grow">{t(service.description, service.descriptionSo)}</p>
                  <motion.div 
                    className="mt-4 pt-4 border-t border-slate-200 text-[#1a5f7a] font-semibold text-sm"
                    whileHover={{ x: 4 }}
                  >
                    {t('Learn More', 'Ogee Wax Badan')} →
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
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
