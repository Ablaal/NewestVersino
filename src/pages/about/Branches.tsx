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

      {/* Branches Modern Grid */}
      <section ref={ref} className="py-20 md:py-32 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Our Campuses"
            titleSo="Xarumahayaga"
            subtitle="Find Your Nearest Branch"
            subtitleSo="Hel Laamadaagu ugu dhow"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
            {branches.branches.map((branch, index) => (
              <motion.div
                key={branch.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden flex flex-col hover:scale-[1.025] transition-transform"
              >
                {/* Branch Image */}
                {branch.images && branch.images.length > 0 && (
                  <img
                    src={branch.images[0]}
                    alt={t(branch.name, branch.nameSo)}
                    className="w-full h-48 object-cover"
                  />
                )}
                <div className="p-6 flex-1 flex flex-col">
                  <h4 className="text-2xl font-bold text-primary mb-2">{t(branch.name, branch.nameSo)}</h4>
                  <p className="text-gray-700 flex items-center gap-2 mb-2">
                    <MapPin className="w-4 h-4" />
                    {t(branch.address, branch.addressSo)}
                  </p>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex flex-col items-center">
                      <img
                        src={branch.principal.image}
                        alt={t(branch.principal.name, branch.principal.nameSo)}
                        className="w-16 h-16 rounded-full object-cover border-2 border-primary"
                      />
                      <span className="text-xs text-gray-500 mt-1">{t('Principal', 'Madaxa Dugsiga')}</span>
                      <span className="font-semibold text-gray-900">{t(branch.principal.name, branch.principal.nameSo)}</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <img
                        src={branch.vicePrincipal.image}
                        alt={t(branch.vicePrincipal.name, branch.vicePrincipal.nameSo)}
                        className="w-16 h-16 rounded-full object-cover border-2 border-primary"
                      />
                      <span className="text-xs text-gray-500 mt-1">{t('Vice Principal', 'Ku-xigeenka Madaxa')}</span>
                      <span className="font-semibold text-gray-900">{t(branch.vicePrincipal.name, branch.vicePrincipal.nameSo)}</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 mt-auto">
                    <a
                      href={`tel:${branch.phone}`}
                      className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors text-sm"
                    >
                      <Phone className="w-4 h-4" />
                      {branch.phone}
                    </a>
                    <a
                      href={`mailto:${branch.email}`}
                      className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors text-sm"
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
      </section>
    </div>
  );
}
