import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { HeroBanner, SectionTitle } from '@/components/ui-custom';
import { useLanguage } from '@/hooks/useLanguage';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import content from '@/data/contentLoader';

export function Students() {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation(0.1);
  const students = content.community.students;

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <HeroBanner {...students.hero} showWave={true} />

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
              {t(students.title, students.titleSo)}
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#1a5f7a] to-[#2a7a9b] mx-auto mb-8" />
            <p className="text-lg text-slate-700 leading-relaxed">
              {t(
                'Our students come from diverse backgrounds, bringing unique perspectives and talents to our school community. Together, they create a vibrant learning environment.',
                'Ardaydeena waxay ka yimaadeen asal kala duwan, waxayna keeneen aragtiyo iyo tabaro gaar ah bulshadeena dugsiyeed. Wadajir, waxay abuuraan deegaan waxbarasho oo firfircoon.'
              )}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Student Voices */}
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
              {t(students.subtitle, students.subtitleSo)}
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#1a5f7a] to-[#2a7a9b] mx-auto mb-6" />
            <p className="text-lg text-slate-700">{t('Student Voices', 'Codadka Ardayda')}</p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.1 }}
          >
            {students.voices.map((voice, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, boxShadow: '0 25px 50px -5px rgba(26, 95, 122, 0.15)' }}
                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all border border-slate-200 cursor-pointer"
              >
                <motion.div 
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  <Quote className="w-10 h-10 text-[#1a5f7a]/20 mb-4" />
                </motion.div>
                <motion.p 
                  className="text-lg text-slate-700 italic mb-6 leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.15 }}
                >
                  "{t(voice.quote, voice.quoteSo)}"
                </motion.p>
                <motion.div 
                  className="flex items-center gap-4 pt-4 border-t border-slate-200"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <motion.div 
                    className="w-14 h-14 rounded-full overflow-hidden ring-2 ring-[#1a5f7a]/20"
                    whileHover={{ scale: 1.1 }}
                  >
                    <img
                      src={voice.image}
                      alt={t(voice.name, voice.nameSo)}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  <div>
                    <h4 className="font-bold text-slate-900">{t(voice.name, voice.nameSo)}</h4>
                    <p className="text-sm text-slate-600">
                      {t(voice.grade, voice.gradeSo)} • {voice.age} {t('years old', 'sano jir')}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-[#1a5f7a] to-[#0f4d63] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mt-48" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full -ml-40 -mb-40" />
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            {[
              { value: '5000+', label: 'Students', labelSo: 'Arday' },
              { value: '50+', label: 'Nationalities', labelSo: 'Jinsiyadood' },
              { value: '95%', label: 'Graduation Rate', labelSo: 'Heerka Dhammaadka' },
              { value: '30+', label: 'Clubs', labelSo: 'Naadho' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ scale: 1.08 }}
                className="group cursor-pointer"
              >
                <div className="text-5xl md:text-6xl font-bold mb-3 group-hover:text-white/90 transition-colors">{stat.value}</div>
                <div className="text-white/90 font-semibold uppercase tracking-wider text-sm">{t(stat.label, stat.labelSo)}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
