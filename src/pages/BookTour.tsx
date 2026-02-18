import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, User, Phone, Mail, Check, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { HeroBanner } from '@/components/ui-custom';
import { useLanguage } from '@/hooks/useLanguage';
import content from '@/data/contentLoader';

export function BookTour() {
  const { t } = useLanguage();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    parentName: '',
    email: '',
    phone: '',
    studentName: '',
    studentGrade: '',
    preferredDate: '',
    preferredTime: '',
    campus: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const campuses = [
    { value: 'hodan', label: 'Hodan Campus, Mogadishu' },
    { value: 'hoolwadaag', label: 'Hoolwadaag Campus, Mogadishu' },
    { value: 'yaaqshid', label: 'Yaaqshid Campus, Mogadishu' },
    { value: 'hilwaa', label: 'Hilwaa Campus, Mogadishu' },
    { value: 'daynile', label: 'Daynile Campus, Mogadishu' },
    { value: 'elasha', label: 'Elasha Biyaha Campus' },
    { value: 'dhusamareb1', label: 'Dhusamareb Campus 1' },
    { value: 'dhusamareb2', label: 'Dhusamareb Campus 2' },
    { value: 'guriel1', label: 'Guriel Campus 1' },
    { value: 'guriel2', label: 'Guriel Campus 2' },
  ];

  const timeSlots = [
    '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM',
    '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM'
  ];

  const grades = ['Grade 1', 'Grade 2', 'Grade 3', 'Grade 4', 'Grade 5', 'Grade 6', 
                  'Grade 7', 'Grade 8', 'Grade 9', 'Grade 10', 'Grade 11', 'Grade 12'];

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-cream">
        <div className="container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-lg mx-auto bg-white rounded-3xl p-12 text-center shadow-xl"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="w-24 h-24 bg-sage/10 rounded-full flex items-center justify-center mx-auto mb-8"
            >
              <Check className="w-12 h-12 text-sage" />
            </motion.div>
            <h2 className="text-3xl font-bold text-navy mb-4">
              {t('Tour Booked!', 'Safarka la Ballan qaday!')}
            </h2>
            <p className="text-slate mb-8">
              {t('Thank you for booking a tour. Our admissions team will contact you to confirm your appointment.',
                 'Mahadsanid ballan qaadashada safarka. Kooxdeena gelitaanku waa kula soo xiriiri doonaa si ay u xaqiijiyaan ballantaada.')}
            </p>
            <a
              href="/"
              className="inline-flex items-center justify-center px-8 py-4 bg-navy text-white rounded-full font-semibold hover:bg-navy-light transition-colors"
            >
              {t('Back to Home', 'Ku Laabo Bogga Hore')}
            </a>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <HeroBanner
        title="Book a School Tour"
        titleSo="Ballan Buug Safar Dugsiga"
        subtitle="Visit our campus and experience the Ablaal difference firsthand"
        subtitleSo="Booqo xarunteena oo la kulmo kala duwanaanshaha Ablaal si toos ah"
        backgroundImage="/images/facility-2.jpg"
        showWave={true}
      />

      {/* Tour Info */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Clock,
                title: 'Tour Duration',
                titleSo: 'Muddada Safarka',
                description: '45-60 minutes guided tour of our campus facilities',
                descriptionSo: 'Safar hoggaamineed oo 45-60 daqiiqo ah oo ku saabsan xarumaha dugsiga',
              },
              {
                icon: MapPin,
                title: 'What to See',
                titleSo: 'Waxa la Arki Doono',
                description: 'Classrooms, labs, library, sports facilities, and more',
                descriptionSo: 'Qolalka fasalka, laboratoryada, maktabadda, xarumaha ciyaaraha, iyo wax badan',
              },
              {
                icon: User,
                title: 'Who Can Attend',
                titleSo: 'Yaa ka Qayb Qaadi Kara',
                description: 'Parents and prospective students are welcome',
                descriptionSo: 'Waalidka iyo ardayda doonaya inay ku biiraan way soo dhaweyn yihiin',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-cream rounded-2xl p-8 text-center"
              >
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-8 h-8 text-gold" />
                </div>
                <h3 className="text-xl font-bold text-navy mb-3">{t(item.title, item.titleSo)}</h3>
                <p className="text-slate">{t(item.description, item.descriptionSo)}</p>
              </motion.div>
            ))}
          </div>

          {/* Booking Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
              <div className="bg-navy p-8 text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  {t('Schedule Your Visit', 'Jadwal Booqashadaada')}
                </h2>
                <p className="text-white/80">
                  {t('Fill out the form below to book your campus tour', 
                     'Buuxi foomka hoose si aad u ballan qaaddo safarka xarunta')}
                </p>
              </div>

              <form onSubmit={handleSubmit} className="p-8 md:p-12 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label className="flex items-center gap-2 text-navy">
                      <User className="w-4 h-4 text-gold" />
                      {t('Parent/Guardian Name', 'Magaca Waalidka/Ilaaliyaha')} *
                    </Label>
                    <Input
                      required
                      value={formData.parentName}
                      onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                      placeholder={t('Enter your name', 'Geli magacaaga')}
                      className="rounded-xl"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label className="flex items-center gap-2 text-navy">
                      <User className="w-4 h-4 text-gold" />
                      {t('Student Name', 'Magaca Ardayga')} *
                    </Label>
                    <Input
                      required
                      value={formData.studentName}
                      onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                      placeholder={t('Enter student name', 'Geli magaca ardayga')}
                      className="rounded-xl"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label className="flex items-center gap-2 text-navy">
                      <Mail className="w-4 h-4 text-gold" />
                      {t('Email Address', 'Ciwaanka Emailka')} *
                    </Label>
                    <Input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder={t('Enter your email', 'Geli emailkaaga')}
                      className="rounded-xl"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label className="flex items-center gap-2 text-navy">
                      <Phone className="w-4 h-4 text-gold" />
                      {t('Phone Number', 'Lambarka Telefoonka')} *
                    </Label>
                    <Input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder={t('Enter your phone number', 'Geli lambarka telefoonkaaga')}
                      className="rounded-xl"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label className="flex items-center gap-2 text-navy">
                      <MapPin className="w-4 h-4 text-gold" />
                      {t('Preferred Campus', 'Xarunta Doorashada')} *
                    </Label>
                    <select
                      required
                      value={formData.campus}
                      onChange={(e) => setFormData({ ...formData, campus: e.target.value })}
                      className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:border-gold focus:ring-1 focus:ring-gold outline-none"
                    >
                      <option value="">{t('Select Campus', 'Dooro Xarunta')}</option>
                      {campuses.map((campus) => (
                        <option key={campus.value} value={campus.value}>{campus.label}</option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label className="flex items-center gap-2 text-navy">
                      <User className="w-4 h-4 text-gold" />
                      {t('Student Grade', 'Fasalka Ardayga')} *
                    </Label>
                    <select
                      required
                      value={formData.studentGrade}
                      onChange={(e) => setFormData({ ...formData, studentGrade: e.target.value })}
                      className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:border-gold focus:ring-1 focus:ring-gold outline-none"
                    >
                      <option value="">{t('Select Grade', 'Dooro Fasalka')}</option>
                      {grades.map((grade) => (
                        <option key={grade} value={grade}>{grade}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label className="flex items-center gap-2 text-navy">
                      <Calendar className="w-4 h-4 text-gold" />
                      {t('Preferred Date', 'Taariikhda Doorashada')} *
                    </Label>
                    <Input
                      type="date"
                      required
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="rounded-xl"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label className="flex items-center gap-2 text-navy">
                      <Clock className="w-4 h-4 text-gold" />
                      {t('Preferred Time', 'Waqtiga Doorashada')} *
                    </Label>
                    <select
                      required
                      value={formData.preferredTime}
                      onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                      className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:border-gold focus:ring-1 focus:ring-gold outline-none"
                    >
                      <option value="">{t('Select Time', 'Dooro Waqtiga')}</option>
                      {timeSlots.map((time) => (
                        <option key={time} value={time}>{time}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="text-navy">{t('Additional Message (Optional)', 'Fariin Dheeraad ah (Ikhtiyaar)')}</Label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={t('Any specific questions or requests...', 'Su\'aalaha gaarka ah ama codsiyada...')}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gold focus:ring-1 focus:ring-gold outline-none resize-none"
                    rows={3}
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full rounded-full bg-gold text-navy hover:bg-gold-light font-semibold py-6"
                >
                  <Send className="w-5 h-5 mr-2" />
                  {t('Book Tour', 'Ballan Qaad Safar')}
                </Button>

                <p className="text-center text-sm text-slate">
                  {t('Or contact us directly at', 'Ama nala soo xiriir si toos ah')}{' '}
                  <a href={`tel:${content.contact.phone}`} className="text-gold hover:underline">
                    {content.contact.phone}
                  </a>
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
