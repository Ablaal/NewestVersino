import { motion } from 'framer-motion';
import { CreditCard, Check, AlertCircle, Phone, Mail } from 'lucide-react';
import { HeroBanner } from '@/components/ui-custom';
import { useLanguage } from '@/hooks/useLanguage';
import content from '@/data/contentLoader';

export function Fees() {
  const { t } = useLanguage();

  const feeStructure = [
    {
      grade: 'Grades 1-4',
      gradeSo: 'Fasalada 1-4',
      registration: '$50',
      tuition: '$150',
      books: '$30',
      total: '$230',
    },
    {
      grade: 'Grades 5-8',
      gradeSo: 'Fasalada 5-8',
      registration: '$50',
      tuition: '$180',
      books: '$40',
      total: '$270',
    },
    {
      grade: 'Grades 9-10',
      gradeSo: 'Fasalada 9-10',
      registration: '$50',
      tuition: '$220',
      books: '$50',
      total: '$320',
    },
    {
      grade: 'Grades 11-12',
      gradeSo: 'Fasalada 11-12',
      registration: '$50',
      tuition: '$250',
      books: '$60',
      total: '$360',
    },
  ];

  const paymentOptions = [
    {
      title: 'Full Payment',
      titleSo: 'Lacag Bixinta Guud',
      description: 'Pay full amount at the beginning of the academic year for a 5% discount.',
      descriptionSo: 'Bixi qadarka guud ee bilowga sanadka waxbarasho si aad u hesho dhimis 5%.',
    },
    {
      title: 'Term Payment',
      titleSo: 'Lacag Bixinta Xilliga',
      description: 'Pay in three installments at the beginning of each term.',
      descriptionSo: 'Bixi saddex qaybood ee bilowga xilliga kasta.',
    },
    {
      title: 'Monthly Payment',
      titleSo: 'Lacag Bixinta Bishii',
      description: 'Spread payments across 10 monthly installments.',
      descriptionSo: 'Faafiya lacag bixinta 10 qaybood oo bishii ah.',
    },
  ];

  const includedItems = [
    { en: 'Tuition fees', so: 'Kharashka waxbarashada' },
    { en: 'Textbooks and learning materials', so: 'Buugaagta iyo qalabka waxbarashada' },
    { en: 'Access to library and computer lab', so: 'Helitaanka maktabadda iyo lab-kombiyuutarka' },
    { en: 'Sports and extracurricular activities', so: 'Ciyaaraha iyo hawlaha dheeraadka ah' },
    { en: 'School ID card', so: 'Kaarka aqoonsiga dugsiga' },
  ];

  const notIncludedItems = [
    { en: 'School uniform', so: 'Dharka dugsiga' },
    { en: 'Transportation', so: 'Gaadiidka' },
    { en: 'Lunch and snacks', so: 'Quraac iyo qado' },
    { en: 'Field trips and special events', so: 'Safarro iyo dhacdooyin gaar ah' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <HeroBanner
        title="School Fees"
        titleSo="Kharashka Dugsiga"
        subtitle="Transparent fee structure with flexible payment options"
        subtitleSo="Qaab-dhismeedka kharashka ee daahfurka leh iyadoo leh ikhtiyaarada lacag bixinta ee dabacsan"
        backgroundImage="/images/admissions-hero.jpg"
        showWave={true}
      />

      {/* Fee Structure Table */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              {t('Fee Structure 2025-2026', 'Qaab-dhismeedka Kharashka 2025-2026')}
            </h2>
            <p className="text-lg text-slate max-w-2xl mx-auto">
              {t('Affordable education with scholarship opportunities for deserving students.',
                 'Waxbarasho qiimo jaban oo leh fursadaha deeqaha waxbarasho ee ardayda mudan.')}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="overflow-x-auto"
          >
            <table className="w-full max-w-4xl mx-auto">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="px-6 py-4 text-left rounded-tl-lg">{t('Grade Level', 'Heerka Fasalka')}</th>
                  <th className="px-6 py-4 text-center">{t('Registration', 'Diiwaangelin')}</th>
                  <th className="px-6 py-4 text-center">{t('Tuition', 'Waxbarasho')}</th>
                  <th className="px-6 py-4 text-center">{t('Books', 'Buugaag')}</th>
                  <th className="px-6 py-4 text-center rounded-tr-lg">{t('Total', 'Wadarta')}</th>
                </tr>
              </thead>
              <tbody>
                {feeStructure.map((fee, index) => (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="border-b border-gray-100 hover:bg-cream transition-colors"
                  >
                    <td className="px-6 py-4 font-medium text-navy">{t(fee.grade, fee.gradeSo)}</td>
                    <td className="px-6 py-4 text-center text-slate">{fee.registration}</td>
                    <td className="px-6 py-4 text-center text-slate">{fee.tuition}</td>
                    <td className="px-6 py-4 text-center text-slate">{fee.books}</td>
                    <td className="px-6 py-4 text-center font-bold text-gold">{fee.total}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* Payment Options */}
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
              {t('Payment Options', 'Ikhtiyaarada Lacag Bixinta')}
            </h2>
            <p className="text-lg text-slate max-w-2xl mx-auto">
              {t('Choose the payment plan that works best for your family.',
                 'Dooro qorshaha lacag bixinta ee ugu fiican qoyskaaga.')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {paymentOptions.map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow text-center"
              >
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CreditCard className="w-8 h-8 text-gold" />
                </div>
                <h3 className="text-xl font-bold text-navy mb-4">{t(option.title, option.titleSo)}</h3>
                <p className="text-slate">{t(option.description, option.descriptionSo)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-navy mb-6 flex items-center gap-3">
                <Check className="w-6 h-6 text-sage" />
                {t('What\'s Included', 'Waxa ku Jira')}
              </h3>
              <ul className="space-y-3">
                {includedItems.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center gap-3 text-slate"
                  >
                    <Check className="w-5 h-5 text-sage flex-shrink-0" />
                    {t(item.en, item.so)}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-navy mb-6 flex items-center gap-3">
                <AlertCircle className="w-6 h-6 text-gold" />
                {t('Not Included', 'Ma ku Jirto')}
              </h3>
              <ul className="space-y-3">
                {notIncludedItems.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center gap-3 text-slate"
                  >
                    <AlertCircle className="w-5 h-5 text-gold flex-shrink-0" />
                    {t(item.en, item.so)}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Scholarships */}
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
              {t('Scholarships Available', 'Deeqaha Waxbarasho ee La Heli Karo')}
            </h2>
            <p className="text-xl text-white/80 mb-8">
              {t('We offer over 1,000 full scholarships to deserving students each year. Apply today and let us help you achieve your educational dreams.',
                 'Waxaan bixinaa in ka badan 1,000 deeq waxbarasho oo buuxda oo ardayda mudan sanad kasta. Codso maanta oo aan kaa caawino inaad gaarto riyadaada waxbarasho.')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/admissions/apply"
                className="inline-flex items-center justify-center px-8 py-4 bg-gold text-navy rounded-full font-semibold hover:bg-gold-light transition-colors"
              >
                {t('Apply for Scholarship', 'Codso Deeq Waxbarasho')}
              </a>
              <a
                href={`tel:${content.contact.phone}`}
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white rounded-full font-semibold hover:bg-white/20 transition-colors"
              >
                <Phone className="w-5 h-5 mr-2" />
                {t('Call Us', 'Wac Noo')}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 md:py-32 bg-cream">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold text-navy mb-4">
              {t('Have Questions?', 'Su\'aalood ma Qabtaa?')}
            </h2>
            <p className="text-lg text-slate mb-8">
              {t('Our admissions team is ready to help you with any questions about fees and payment options.',
                 'Kooxdeena gelitaanku waa diyaar u yahay inay kaa caawiyaan su\'aalaha kasta oo ku saabsan kharashka iyo ikhtiyaarada lacag bixinta.')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`mailto:${content.contact.email}`}
                className="inline-flex items-center justify-center px-8 py-4 bg-navy text-white rounded-full font-semibold hover:bg-navy-light transition-colors"
              >
                <Mail className="w-5 h-5 mr-2" />
                {content.contact.email}
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-navy text-navy rounded-full font-semibold hover:bg-navy hover:text-white transition-colors"
              >
                {t('Contact Us', 'Nala Soo Xiriir')}
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
