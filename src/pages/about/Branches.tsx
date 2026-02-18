import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Play } from 'lucide-react';
import { HeroBanner, SectionTitle } from '@/components/ui-custom';
import { useLanguage } from '@/hooks/useLanguage';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import content from '@/data/contentLoader';

export function Branches() {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation(0.1);
  const branches = content.branches;

  // Group branches by district
  const districts = [...new Set(branches.branches.map(b => b.district))];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <HeroBanner {...branches.hero} showWave={true} />

      {/* Branches by District */}
      <section ref={ref} className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Our Campuses"
            titleSo="Xarumahayaga"
            subtitle="Find Your Nearest Branch"
            subtitleSo="Hel Laamadaagu ugu dhow"
          />

          <div className="space-y-16">
            {districts.map((district, districtIndex) => (
              <div key={district}>
                <h3 className="text-2xl font-bold text-gray-900 mb-8 pb-2 border-b-2 border-primary/20">
                  {district}
                </h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {branches.branches
                    .filter(b => b.district === district)
                    .map((branch, index) => (
                      <motion.div
                        key={branch.id}
                        initial={{ opacity: 0, y: 30 }}
                        animate={isVisible ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: (districtIndex + index) * 0.1 }}
                        className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
                      >
                        {/* Branch Header */}
                        <div className="bg-primary text-white p-6">
                          <h4 className="text-xl font-bold">{t(branch.name, branch.nameSo)}</h4>
                          <p className="text-white/80 flex items-center gap-2 mt-1">
                            <MapPin className="w-4 h-4" />
                            {t(branch.address, branch.addressSo)}
                          </p>
                        </div>

                        {/* Leadership */}
                        <div className="p-6">
                          <div className="grid grid-cols-2 gap-4 mb-6">
                            {/* Principal */}
                            <div className="text-center">
                              <div className="relative w-24 h-24 mx-auto mb-3 rounded-full overflow-hidden border-4 border-primary/20">
                                <img
                                  src={branch.principal.image}
                                  alt={t(branch.principal.name, branch.principal.nameSo)}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              <h5 className="font-semibold text-gray-900">{t(branch.principal.name, branch.principal.nameSo)}</h5>
                              <p className="text-sm text-primary">{t('Principal', 'Madaxa Dugsiga')}</p>
                              {branch.principal.video && (
                                <a
                                  href={branch.principal.video}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-primary mt-1"
                                >
                                  <Play className="w-3 h-3" />
                                  {t('Watch Message', 'Daawo Farriinta')}
                                </a>
                              )}
                            </div>

                            {/* Vice Principal */}
                            <div className="text-center">
                              <div className="relative w-24 h-24 mx-auto mb-3 rounded-full overflow-hidden border-4 border-primary/20">
                                <img
                                  src={branch.vicePrincipal.image}
                                  alt={t(branch.vicePrincipal.name, branch.vicePrincipal.nameSo)}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              <h5 className="font-semibold text-gray-900">{t(branch.vicePrincipal.name, branch.vicePrincipal.nameSo)}</h5>
                              <p className="text-sm text-primary">{t('Vice Principal', 'Ku-xigeenka Madaxa')}</p>
                              {branch.vicePrincipal.video && (
                                <a
                                  href={branch.vicePrincipal.video}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-primary mt-1"
                                >
                                  <Play className="w-3 h-3" />
                                  {t('Watch Message', 'Daawo Farriinta')}
                                </a>
                              )}
                            </div>
                          </div>

                          {/* Contact */}
                          <div className="border-t pt-4 space-y-2">
                            <a
                              href={`tel:${branch.phone}`}
                              className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors"
                            >
                              <Phone className="w-4 h-4" />
                              {branch.phone}
                            </a>
                            <a
                              href={`mailto:${branch.email}`}
                              className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors"
                            >
                              <Mail className="w-4 h-4" />
                              {branch.email}
                            </a>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
