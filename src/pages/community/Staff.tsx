import { motion } from 'framer-motion';
import { HeroBanner, SectionTitle } from '@/components/ui-custom';
import { useLanguage } from '@/hooks/useLanguage';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import content from '@/data/contentLoader';

export function Staff() {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation(0.1);
  const staff = content.community.staff;
  const staffMembers = content.staff.members;

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <HeroBanner {...staff.hero} showWave={true} />

      {/* Introduction */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              {t(staff.title, staff.titleSo)}
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#1a5f7a] to-[#2a7a9b] mx-auto mb-8" />
            <p className="text-lg text-slate-700 leading-relaxed">
              {t(
                'Our dedicated team of educators and support staff are the heart of Ablaal Schools. Their passion, expertise, and commitment to excellence create an environment where every student can thrive.',
                'Kooxdeena dhexdhexaad ee barayaasha iyo shaqaalaha taageeradu waa qalbiga Dugsiyada Ablaal. Dhiirrigelintooda, xirfadooda, iyo dhammaan dadaalkoodu waxay abuuraan deegaan ay arday kastu ku guuleysan karo.'
              )}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Staff Grid */}
      <section ref={ref} className="py-20 md:py-32 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              {t('Meet Our Team', 'La Kul Kooxdeena')}
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#1a5f7a] to-[#2a7a9b] mx-auto mb-6" />
            <p className="text-lg text-slate-700">{t('Dedicated Professionals', 'Xirfadlayaal Dhexdhexaad ah')}</p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.1 }}
          >
            {staffMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -12, boxShadow: '0 30px 60px -5px rgba(26, 95, 122, 0.2)' }}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all border border-slate-200 flex flex-col h-full cursor-pointer"
              >
                <div className="relative h-72 overflow-hidden bg-slate-200">
                  <motion.img
                    src={member.image}
                    alt={t(member.name, member.nameSo)}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a5f7a]/90 via-[#1a5f7a]/30 to-transparent" />
                  <motion.div 
                    className="absolute bottom-6 left-6 right-6"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <h3 className="text-2xl font-bold text-white">{t(member.name, member.nameSo)}</h3>
                    <p className="text-white/90 font-semibold mt-1">{t(member.role, member.roleSo)}</p>
                  </motion.div>
                </div>
                <motion.div 
                  className="p-6 flex-grow flex flex-col"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.15 }}
                >
                  <div className="flex items-center gap-2 text-[#1a5f7a] mb-4 font-semibold text-sm">
                    <span className="inline-block px-3 py-1 bg-[#1a5f7a]/10 rounded-full">
                      {member.yearsOfService} {t('yrs', 'w')}
                    </span>
                  </div>
                  <p className="text-slate-700 text-sm leading-relaxed flex-grow">{t(member.bio, member.bioSo)}</p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-[#1a5f7a] to-[#0f4d63] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mt-48" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full -ml-40 -mb-40" />
        <div className="container mx-auto px-4 max-w-3xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {t('Join Our Team', 'Ku Biir Kooxdeena')}
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              {t(
                'Are you passionate about education? We are always looking for talented individuals to join our team.',
                'Ma ku dhacsan tahay waxbarasho? Had iyo jeer waxaan raadinaynaa dad tabar leh oo ku biira kooxdeena.'
              )}
            </p>
            <motion.a
              href="/jobs/apply"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#1a5f7a] rounded-full font-semibold hover:bg-slate-100 transition-colors shadow-lg"
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px -10px rgba(0,0,0,0.1)' }}
            >
              {t('Apply Now', 'Codso Hadda')}
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
