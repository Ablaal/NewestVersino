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
              {t(students.title, students.titleSo)}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              {t(
                'Our students come from diverse backgrounds, bringing unique perspectives and talents to our school community. Together, they create a vibrant learning environment.',
                'Ardaydeena waxay ka yimaadeen asal kala duwan, waxayna keeneen aragtiyo iyo tabaro gaar ah bulshadeena dugsiyeed. Wadajir, waxay abuuraan deegaan waxbarasho oo firfircoon.'
              )}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Student Voices */}
      <section ref={ref} className="py-20 md:py-32 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle
            title={students.subtitle}
            titleSo={students.subtitleSo}
            subtitle="Student Voices"
            subtitleSo="Codadka Ardayda"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {students.voices.map((voice, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <Quote className="w-10 h-10 text-primary/20 mb-4" />
                <p className="text-lg text-gray-700 italic mb-6">
                  "{t(voice.quote, voice.quoteSo)}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full overflow-hidden">
                    <img
                      src={voice.image}
                      alt={t(voice.name, voice.nameSo)}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{t(voice.name, voice.nameSo)}</h4>
                    <p className="text-sm text-gray-500">
                      {t(voice.grade, voice.gradeSo)} • {voice.age} {t('years old', 'sano jir')}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 md:py-32 bg-primary text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
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
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-white/80">{t(stat.label, stat.labelSo)}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
