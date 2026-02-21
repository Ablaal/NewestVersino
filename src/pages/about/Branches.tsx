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
      <section ref={ref} className="py-20 md:py-32 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              {t('Our Campuses', 'Xarumahayaga')}
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#1a5f7a] to-[#2a7a9b] mx-auto mb-6" />
            <p className="text-lg text-slate-700 max-w-2xl mx-auto">
              {t('Find Your Nearest Branch', 'Hel Laamadaagu ugu dhow')}
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.1 }}
          >
            {branches.branches.map((branch, index) => (
              <motion.div
                key={branch.id}
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -12, boxShadow: '0 30px 60px -5px rgba(26, 95, 122, 0.2)' }}
                className="group bg-white rounded-3xl shadow-lg border border-slate-200 overflow-hidden flex flex-col h-full cursor-pointer"
              >
                {/* Branch Image */}
                {branch.images && branch.images.length > 0 && (
                  <motion.div className="relative h-48 overflow-hidden bg-slate-200" whileHover={{ scale: 1.05 }} transition={{ duration: 0.4 }}>
                    <motion.img
                      src={branch.images[0]}
                      alt={t(branch.name, branch.nameSo)}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a5f7a]/20 to-transparent" />
                  </motion.div>
                )}
                
                <div className="p-6 flex-1 flex flex-col">
                  {/* Branch Name & Location */}
                  <motion.div 
                    className="mb-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.1 }}
                  >
                    <h4 className="text-2xl font-bold text-[#1a5f7a] mb-2">{t(branch.name, branch.nameSo)}</h4>
                    <p className="text-slate-700 flex items-center gap-2 text-sm">
                      <MapPin className="w-4 h-4 text-[#1a5f7a] flex-shrink-0" />
                      {t(branch.address, branch.addressSo)}
                    </p>
                  </motion.div>

                  {/* Principal & Vice Principal Section */}
                  <motion.div 
                    className="bg-gradient-to-r from-[#1a5f7a]/5 to-[#2a7a9b]/5 rounded-2xl p-4 mb-4 border border-[#1a5f7a]/10"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <p className="text-xs font-semibold text-[#1a5f7a] uppercase tracking-wider mb-3">Leadership</p>
                    <div className="grid grid-cols-2 gap-4">
                      {/* Principal */}
                      <motion.div 
                        className="flex flex-col items-center text-center"
                        whileHover={{ scale: 1.05 }}
                      >
                        <div className="relative mb-2">
                          <img
                            src={branch.principal.image}
                            alt={t(branch.principal.name, branch.principal.nameSo)}
                            className="w-20 h-20 rounded-full object-cover border-3 border-[#1a5f7a] shadow-md"
                          />
                          <div className="absolute -bottom-1 -right-1 bg-[#1a5f7a] text-white rounded-full p-1">
                            <span className="text-xs font-bold">P</span>
                          </div>
                        </div>
                        <span className="text-xs font-semibold text-slate-600 uppercase">{t('Principal', 'Madaxa')}</span>
                        <span className="font-bold text-slate-900 text-sm line-clamp-2">{t(branch.principal.name, branch.principal.nameSo)}</span>
                      </motion.div>

                      {/* Vice Principal */}
                      <motion.div 
                        className="flex flex-col items-center text-center"
                        whileHover={{ scale: 1.05 }}
                      >
                        <div className="relative mb-2">
                          <img
                            src={branch.vicePrincipal.image}
                            alt={t(branch.vicePrincipal.name, branch.vicePrincipal.nameSo)}
                            className="w-20 h-20 rounded-full object-cover border-3 border-[#2a7a9b] shadow-md"
                          />
                          <div className="absolute -bottom-1 -right-1 bg-[#2a7a9b] text-white rounded-full p-1">
                            <span className="text-xs font-bold">VP</span>
                          </div>
                        </div>
                        <span className="text-xs font-semibold text-slate-600 uppercase">{t('Vice Principal', 'Ku-xigeen')}</span>
                        <span className="font-bold text-slate-900 text-sm line-clamp-2">{t(branch.vicePrincipal.name, branch.vicePrincipal.nameSo)}</span>
                      </motion.div>
                    </div>
                  </motion.div>

                  {/* Contact Information */}
                  <motion.div 
                    className="flex flex-col gap-2 mt-auto pt-4 border-t border-slate-200"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <motion.a
                      href={`tel:${branch.phone}`}
                      className="flex items-center gap-2 text-slate-700 hover:text-[#1a5f7a] transition-colors text-sm font-medium"
                      whileHover={{ x: 4 }}
                    >
                      <Phone className="w-4 h-4 flex-shrink-0" />
                      {branch.phone}
                    </motion.a>
                    <motion.a
                      href={`mailto:${branch.email}`}
                      className="flex items-center gap-2 text-slate-700 hover:text-[#1a5f7a] transition-colors text-sm font-medium"
                      whileHover={{ x: 4 }}
                    >
                      <Mail className="w-4 h-4 flex-shrink-0" />
                      {branch.email}
                    </motion.a>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
