import { motion } from 'framer-motion';
import { Check, GraduationCap, Trophy, Music, Palette, BookOpen, Users, Dumbbell } from 'lucide-react';
import { HeroBanner } from '@/components/ui-custom';
import { useLanguage } from '@/hooks/useLanguage';
import content from '@/data/contentLoader';

export function Secondary() {
  const { t } = useLanguage();
  const secondary = content.academics.secondary;

  const coCurricularActivities = [
    {
      icon: Trophy,
      title: 'Sports & Athletics',
      titleSo: 'Ciyaaraha & Jimicsiga',
      description: 'Football, basketball, volleyball, and athletics competitions that build teamwork and physical fitness.',
      descriptionSo: 'Kubadda cagta, kubadda koleyga, volleyball, iyo tartanada jimicsiga ee dhisa shaqada kooxda iyo jimicsiga jirka.'
    },
    {
      icon: Music,
      title: 'Music & Drama',
      titleSo: 'Muusigga & Riwaayadda',
      description: 'Choir, traditional Somali music, and theatrical performances that nurture creativity.',
      descriptionSo: 'Koor, muusigga dhaqanka Soomaaliyeed, iyo bandhigyada riwaayadda ee daryeela hal-abuurka.'
    },
    {
      icon: Palette,
      title: 'Arts & Crafts',
      titleSo: 'Farshaxanka & Hawlaha Gacanta',
      description: 'Visual arts, traditional crafts, and creative expression through various mediums.',
      descriptionSo: 'Farshaxanka aragtida, hawlaha dhaqanka, iyo muujinta hal-abuurka iyada oo loo marayo dhexdheeca kala duwan.'
    },
    {
      icon: BookOpen,
      title: 'Debate & Poetry',
      titleSo: 'Doodda & Gabayga',
      description: 'Public speaking, debate competitions, and traditional Somali poetry (Gabay) sessions.',
      descriptionSo: 'Hadalka dadweynaha, tartanada doodda, iyo dhacdooyinka gabayga dhaqanka Soomaaliyeed.'
    },
    {
      icon: Users,
      title: 'Clubs & Societies',
     titleSo: 'Naadiga & Ururada',
      description: 'Science club, literature society, and student-led organizations for diverse interests.',
      descriptionSo: 'Naadiga sayniska, ururka suugaanta, iyo ururada hoggaamiya ardayda ee danaha kala duwan.'
    },
    {
      icon: Dumbbell,
      title: 'Physical Education',
      titleSo: 'Waxbarashada Jirka',
      description: 'Structured PE programs focusing on health, fitness, and lifelong wellness habits.',
      descriptionSo: 'Barnaamijyada PE ee qaabaysan oo diiradda saaraya caafimaadka, jimicsiga, iyo caadooyinka caafimaadka nolosha oo dhan.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <HeroBanner {...secondary.hero} showWave={true} />

      {/* Description with Side Images */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            {/* Left Image */}
            {secondary.images && secondary.images[0] && (
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg order-1"
              >
                <img
                  src={secondary.images[0]}
                  alt="Secondary School 1"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            )}

            {/* Center Text */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center order-2 lg:order-2"
            >
              <p className="text-lg md:text-xl text-slate leading-relaxed">
                {t(secondary.description, secondary.descriptionSo)}
              </p>
            </motion.div>

            {/* Right Image */}
            {secondary.images && secondary.images[1] && (
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg order-3"
              >
                <img
                  src={secondary.images[1]}
                  alt="Secondary School 2"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            )}
          </div>

          {/* Middle Image Below */}
          {secondary.images && secondary.images[2] && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative aspect-[21/9] rounded-2xl overflow-hidden shadow-lg mt-8 max-w-4xl mx-auto"
            >
              <img
                src={secondary.images[2]}
                alt="Secondary School 3"
                className="w-full h-full object-cover"
              />
            </motion.div>
          )}
        </div>
      </section>

      {/* Programs */}
      <section className="py-20 md:py-32 bg-cream">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              {t('Our Secondary Program', 'Barnaamijkeena Dhexe')}
            </h2>
            <div className="w-20 h-1 bg-gold mx-auto" />
          </motion.div>

          <div className="space-y-16">
            {secondary.programs.map((program, index) => (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 md:p-12 shadow-lg"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center">
                        <GraduationCap className="w-6 h-6 text-gold" />
                      </div>
                      <h3 className="text-2xl font-bold text-navy">
                        {t(program.gradeRange, program.gradeRangeSo)}
                      </h3>
                    </div>
                    <p className="text-slate leading-relaxed mb-6">
                      {t(program.description, program.descriptionSo)}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy mb-4">
                      {t('Core Subjects', 'Mawduucyada Aasaasiga ah')}:
                    </h4>
                    <div className="grid grid-cols-2 gap-3">
                      {program.subjects.map((subject, subIndex) => (
                        <div key={subIndex} className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-gold flex-shrink-0" />
                          <span className="text-slate text-sm">{t(subject, program.subjectsSo[subIndex])}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                title: 'Exam Preparation',
                titleSo: 'Diyaarinta Imtixaanka',
                description: 'Comprehensive preparation for national examinations with dedicated study sessions and practice tests.',
                descriptionSo: 'Diyaar dhammaystiran oo imtixaannada qaran oo la xiriira kulamada barashada iyo imtixaannada tijaabada ah.',
              },
              {
                title: 'Career Guidance',
                titleSo: 'Hagid Xirfad',
                description: 'Professional counseling to help students make informed decisions about their future academic and career paths.',
                descriptionSo: 'Talo-bixin xirfadeed si looga caawiyo ardayda go\'aan qaadashada macluumaadka ku saabsan waddooyinka waxbarashada iyo xirfadaha mustaqbalka.',
              },
              {
                title: 'University Preparation',
                titleSo: 'Diyaarinta Jaamacadda',
                description: 'Support with university applications, entrance exams, and scholarship opportunities.',
                descriptionSo: 'Taageerada codsiyada jaamacadda, imtixaannada gelitaanka, iyo fursadaha deeqaha waxbarasho.',
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-cream rounded-2xl p-8 text-center border border-gray-100"
              >
                <h3 className="text-xl font-bold text-navy mb-4">{t(feature.title, feature.titleSo)}</h3>
                <p className="text-slate">{t(feature.description, feature.descriptionSo)}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Co-Curricular Activities Section */}
      <section className="py-20 md:py-32 bg-cream">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 rounded-full mb-6">
              <Trophy className="w-5 h-5 text-gold" />
              <span className="text-sm font-medium text-navy">{t('Beyond the Classroom', 'Ka Baxsan Qolka Fasalka')}</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              {t('Co-Curricular Activities', 'Hawlaha Dheeraadka ah')}
            </h2>
            <p className="text-lg text-slate max-w-2xl mx-auto">
              {t('We believe in nurturing well-rounded individuals. Our diverse range of co-curricular activities helps students discover their passions and develop essential life skills.',
                 'Waxaan qabannaa inaan daryeelo dad dhammaystiran. Qaybaha kala duwan ee hawlaha dheeraadka ah waxay ka caawiyaan ardayda inay ogaadaan dabeecadahooda oo ay kobciyaan xirfadaha nolosha ee muhiimka ah.')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coCurricularActivities.map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border-l-4 border-gold"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <activity.icon className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy mb-2">{t(activity.title, activity.titleSo)}</h3>
                    <p className="text-sm text-slate">{t(activity.description, activity.descriptionSo)}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 bg-navy text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t('Prepare for Your Future', 'U Diyaar U Noqo Mustaqbalkaaga')}
            </h2>
            <p className="text-xl text-white/90 mb-8">
              {t('Join our secondary school program and build the foundation for your academic and professional success.',
                 'Ku biir barnaamijkeenna dugsiga dhexe oo dhisa aasaaska guushadaada waxbarasho iyo xirfadeed.')}
            </p>
            <a
              href="/admissions/apply"
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
