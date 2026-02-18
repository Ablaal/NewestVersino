import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Play, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { HeroBanner, SectionTitle, CardGrid, TestimonialCarousel, WaveDivider, PinnedSection } from '@/components/ui-custom';
import { useLanguage } from '@/hooks/useLanguage';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import content from '@/data/contentLoader';

export function Home() {
  const { t } = useLanguage();
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation(0.1);

  const home = content.home;

  return (
    <div className="min-h-screen">
      {/* Hero Section - Video Hero */}
      <HeroBanner
        {...home.hero}
        isVideo={true}
        onCtaPrimaryClick={() => window.location.href = '/admissions/apply'}
        onCtaSecondaryClick={() => window.location.href = '/book-tour'}
      />

      {/* Why Choose Section - Pinned Background */}
      <PinnedSection
        backgroundImage="/images/facility-2.jpg"
        overlayOpacity={0.85}
        contentClassName="py-20 md:py-32"
      >
        <div className="container mx-auto px-4">
          <div className="bg-navy/90 rounded-3xl p-8 md:p-12 border border-white/10">
            <SectionTitle
              title={home.whyChoose.title}
              titleSo={home.whyChoose.titleSo}
              subtitle="Developing Well-rounded Learners"
              subtitleSo="Kobcinta Ardayda Dhammaystiran"
              light={true}
            />
            <p className="text-center text-white/80 max-w-3xl mx-auto mb-8">
              {t('At Ablaal Schools, we believe every child has unique potential. Our holistic approach combines academic excellence with character development, ensuring students grow into confident, compassionate leaders ready to shape Somalia\'s future.',
                 'Dugsiyada Ablaal, waxaan qabannaa in ilmuhu kasta uu leeyahay karti gaar ah. Qaabkeenna oo dhammaystiran wuxuu isku darayaa waxsanaan waxbarasho iyadoo la wadaago kobcinta dabeecadda, hubina in ardaydu u koraan hoggaamiyeyaal kalsooni iyo naxariis leh oo diyaar u ah inay qeexaan mustaqbalka Soomaaliya.')}
            </p>
            <CardGrid
              cards={home.whyChoose.cards}
              columns={3}
              showImage={true}
              light={true}
            />
          </div>
        </div>
      </PinnedSection>

      {/* Discover Section - White Background */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/discover.jpg"
                  alt="Discover Ablaal"
                  className="w-full h-[400px] md:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 text-primary ml-1" />
                  </button>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-2 block">
                {t(home.discover.subtitle, home.discover.subtitleSo)}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {t(home.discover.title, home.discover.titleSo)}
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                {t(home.discover.description, home.discover.descriptionSo)}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {home.discover.highlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <span className="text-primary font-bold">{index + 1}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{t(highlight.title, highlight.titleSo)}</h4>
                      <p className="text-sm text-gray-600">{t(highlight.description, highlight.descriptionSo)}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Learning Culture Section - Pinned Background */}
      <PinnedSection
        backgroundImage="/images/service-1.jpg"
        overlayOpacity={0.85}
        contentClassName="py-20 md:py-32"
      >
        <div className="container mx-auto px-4">
          <div className="bg-navy/90 rounded-3xl p-8 md:p-12 border border-white/10">
            <SectionTitle
              title={home.learningCulture.title}
              titleSo={home.learningCulture.titleSo}
              subtitle={home.learningCulture.subtitle}
              subtitleSo={home.learningCulture.subtitleSo}
              light={true}
            />
            <p className="text-center text-white/80 max-w-3xl mx-auto mb-8">
              {t('Our learning culture is built on four pillars that guide everything we do. From fostering academic excellence to nurturing global perspectives, we create an environment where students thrive intellectually, socially, and emotionally.',
                 'Dhaqankeenna waxbarashadu wuxuu ku dhisanyahay tiirar afar ah oo hoggaamiya wax kasta oo aan sameyno. Laga bilaabo kobcinta waxsanaan waxbarasho ilaa daryeelta aragtida caalamiga ah, waxaan abuuraynaa deegaan ay ardaydu ugu guuleystaan maskaxda, bulshada, iyo dareen ahaanba.')}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {home.learningCulture.cards.map((card, index) => (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative h-80 rounded-2xl overflow-hidden shadow-lg border border-white/10"
                >
                  <img
                    src={card.image}
                    alt={t(card.title, card.titleSo)}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/40 to-transparent" />
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{t(card.title, card.titleSo)}</h3>
                    <p className="text-white/80 text-sm">{t(card.description, card.descriptionSo)}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </PinnedSection>

      {/* Curriculum Section - Pinned Background */}
      <PinnedSection
        backgroundImage="/images/facility-3.jpg"
        overlayOpacity={0.85}
        contentClassName="py-20 md:py-32"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="bg-navy/90 rounded-3xl p-10 md:p-16 border border-white/10">
              <span className="inline-block text-sm font-semibold uppercase tracking-wider mb-3 text-gold">
                {t(home.curriculum.title, home.curriculum.titleSo)}
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
                {t(home.curriculum.subtitle, home.curriculum.subtitleSo)}
              </h2>
              <p className="text-lg text-white/80 leading-relaxed mb-8">
                {t(home.curriculum.description, home.curriculum.descriptionSo)}
              </p>
              <Link to="/academics/primary">
                <Button
                  size="lg"
                  className="rounded-full px-8 bg-gold text-navy hover:bg-gold-light"
                >
                  {t('Explore Our Programs', 'Sahaminta Barnaamijyadeena')}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </PinnedSection>

      {/* Testimonials Section - White Background */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle
            title={home.testimonials.title}
            titleSo={home.testimonials.titleSo}
            subtitle="Testimonials"
            subtitleSo="Markhaatiyada"
          />
          <TestimonialCarousel testimonials={home.testimonials.items} />
        </div>
      </section>

      {/* News Section - Pinned Background */}
      <PinnedSection
        backgroundImage="/images/gallery-3.jpg"
        overlayOpacity={0.85}
        contentClassName="py-20 md:py-32"
      >
        <div className="container mx-auto px-4">
          <div className="bg-navy/90 rounded-3xl p-8 md:p-12 border border-white/10">
            <SectionTitle
              title={home.news.title}
              titleSo={home.news.titleSo}
              subtitle={home.news.subtitle}
              subtitleSo={home.news.subtitleSo}
              light={true}
            />
            <p className="text-center text-white/80 max-w-3xl mx-auto mb-8">
              {t('Stay updated with the latest news, events, and announcements from Ablaal Schools. Discover what makes our community special.',
                 'U laabo wararka ugu dambeeya, dhacdooyinka, iyo ogeysiisyada ka yimid Dugsiyada Ablaal. Soo saar waxa ka dhigaya bulshadeena gaar ah.')}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {content.newsEvents.items.slice(0, 3).map((item, index) => (
                <motion.article
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={item.image}
                      alt={t(item.title, item.titleSo)}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-navy text-white text-xs font-semibold rounded-full uppercase">
                        {t(item.category, item.category)}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-gray-500 mb-2">{item.date}</p>
                    <h3 className="text-xl font-bold text-navy mb-3 group-hover:text-gold transition-colors">
                      {t(item.title, item.titleSo)}
                    </h3>
                    <p className="text-slate mb-4 line-clamp-2">
                      {t(item.excerpt, item.excerptSo)}
                    </p>
                    <Link
                      to={`/news-events/${item.id}`}
                      className="inline-flex items-center text-gold font-semibold hover:underline"
                    >
                      {t('Read More', 'Akhri Wax Badan')}
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </PinnedSection>

      {/* Final CTA Section - Pinned Background with Image */}
      <section ref={ctaRef} className="relative py-32 md:py-48 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url(${home.finalCta.backgroundImage})` }}
        />
        <div className="absolute inset-0 bg-navy/80" />
        <WaveDivider position="top" color="fill-white" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={ctaVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              {t(home.finalCta.title, home.finalCta.titleSo)}
            </h2>
            <p className="text-lg md:text-xl text-white/80 mb-10">
              {t(home.finalCta.subtitle, home.finalCta.subtitleSo)}
            </p>
            <Link to="/admissions/apply">
              <Button
                size="lg"
                className="rounded-full px-10 py-6 text-lg font-semibold bg-gold text-navy hover:bg-gold-light transition-colors"
              >
                {t(home.finalCta.cta, home.finalCta.ctaSo)}
              </Button>
            </Link>
          </motion.div>
        </div>

        <WaveDivider position="bottom" color="fill-white" />
      </section>
    </div>
  );
}
