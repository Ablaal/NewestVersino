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
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {t(staff.title, staff.titleSo)}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              {t(
                'Our dedicated team of educators and support staff are the heart of Ablaal Schools. Their passion, expertise, and commitment to excellence create an environment where every student can thrive.',
                'Kooxdeena dhexdhexaad ee barayaasha iyo shaqaalaha taageeradu waa qalbiga Dugsiyada Ablaal. Dhiirrigelintooda, xirfadooda, iyo dhammaan dadaalkoodu waxay abuuraan deegaan ay arday kastu ku guuleysan karo.'
              )}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Staff Grid */}
      <section ref={ref} className="py-20 md:py-32 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Meet Our Team"
            titleSo="La Kul Kooxdeena"
            subtitle="Dedicated Professionals"
            subtitleSo="Xirfadlayaal Dhexdhexaad ah"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {staffMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={t(member.name, member.nameSo)}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white">{t(member.name, member.nameSo)}</h3>
                    <p className="text-white/80">{t(member.role, member.roleSo)}</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-primary font-medium">
                      {member.yearsOfService} {t('years of service', 'sano adeeg')}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm">{t(member.bio, member.bioSo)}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-20 md:py-32 bg-primary text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t('Join Our Team', 'Ku Biir Kooxdeena')}
            </h2>
            <p className="text-xl text-white/90 mb-8">
              {t(
                'Are you passionate about education? We are always looking for talented individuals to join our team.',
                'Ma ku dhacsan tahay waxbarasho? Had iyo jeer waxaan raadinaynaa dad tabar leh oo ku biira kooxdeena.'
              )}
            </p>
            <a
              href="/jobs/apply"
              className="inline-flex items-center justify-center px-8 py-4 bg-gold text-navy rounded-full font-semibold hover:bg-gold-light transition-colors"
            >
              {t('Apply Now', 'Codso Hadda')}
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
