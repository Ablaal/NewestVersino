import { motion } from 'framer-motion';
import { PinnedHero, SectionTitle } from '@/components/ui-custom';
import { useLanguage } from '@/hooks/useLanguage';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import content from '@/data/contentLoader';

export function Leadership() {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation(0.1);
  const leadership = content.about.leadership;

  return (
    <div className="min-h-screen">
      {/* Pinned Hero - Full bleed with fixed background */}
      <PinnedHero
        backgroundImage="/images/leader-bg.png"
        title={t('Our Leadership', 'Hogaankeena')}
        subtitle={t('Meet the visionaries guiding Ablaal Schools', 'La kulmi dadka aragtida wada leh ee Ablaal')}
        overlayOpacity={0.5}
      />

      {/* Founder Section - Clean White Background */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Founder Image */}
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={leadership.founder.image}
                    alt={t(leadership.founder.name, leadership.founder.nameSo)}
                    className="w-full h-[500px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-2xl font-bold text-white">{t(leadership.founder.name, leadership.founder.nameSo)}</h3>
                    <p className="text-gold">{t(leadership.founder.title, leadership.founder.titleSo)}</p>
                  </div>
                </div>
              </div>

              {/* Founder Message */}
              <div className="bg-cream rounded-2xl p-8 border border-gray-100">
                <span className="text-gold font-semibold text-sm uppercase tracking-wider mb-2 block">
                  {t('Message from the Founder', 'Farriin Aasaasaha')}
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
                  {t(leadership.founder.name, leadership.founder.nameSo)}
                </h2>
                <div className="w-20 h-1 bg-gold mb-6" />
                <blockquote className="text-xl italic text-slate mb-6 border-l-4 border-gold pl-6">
                  "{t(leadership.founder.message || '', leadership.founder.messageSo || '')}"
                </blockquote>
                <p className="text-slate leading-relaxed">
                  {t(leadership.founder.bio, leadership.founder.bioSo)}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Directors Section - Cream Background */}
      <section ref={ref} className="py-20 md:py-32 bg-cream">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Our Directors"
            titleSo="Agaasimayaasheena"
            subtitle="Leadership Team"
            subtitleSo="Kooxda Hogaanka"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadership.directors.map((director, index) => (
              <motion.div
                key={director.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-gray-100"
              >
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={director.image}
                    alt={t(director.name, director.nameSo)}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-navy mb-1">{t(director.name, director.nameSo)}</h3>
                  <p className="text-gold font-medium mb-4">{t(director.title, director.titleSo)}</p>
                  <p className="text-slate text-sm leading-relaxed">{t(director.bio, director.bioSo)}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Collective Message - Navy Background */}
      <section className="py-20 md:py-32 bg-navy">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="bg-white/5 rounded-3xl p-10 md:p-16 border border-white/10">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
                {t('A Message from Our Leadership', 'Farriin ka timid Hogaankeena')}
              </h2>
              <div className="w-24 h-1 bg-gold mx-auto mb-8" />
              <p className="text-xl text-white/90 leading-relaxed">
                {t(leadership.message, leadership.messageSo)}
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
