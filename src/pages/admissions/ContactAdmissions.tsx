import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, Check, MessageSquare, Calendar, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { HeroBanner } from '@/components/ui-custom';
import { useLanguage } from '@/hooks/useLanguage';
import content from '@/data/contentLoader';

export function ContactAdmissions() {
  const { t } = useLanguage();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const contactMethods = [
    {
      icon: Phone,
      title: 'Phone/WhatsApp',
      titleSo: 'Telefoon/WhatsApp',
      value: content.contact.phone,
      link: `tel:${content.contact.phone}`,
      color: 'bg-sage/10 text-sage',
    },
    {
      icon: Mail,
      title: 'Email',
      titleSo: 'Emailka',
      value: content.contact.email,
      link: `mailto:${content.contact.email}`,
      color: 'bg-gold/10 text-gold',
    },
    {
      icon: MapPin,
      title: 'Main Campus',
      titleSo: 'Xarunta Ugu Weyn',
      value: t(content.contact.address, content.contact.addressSo),
      link: '#',
      color: 'bg-navy/10 text-navy',
    },
    {
      icon: Clock,
      title: 'Office Hours',
      titleSo: 'Saacadaha Xafiiska',
      value: 'Sun - Thu: 8:00 AM - 4:00 PM',
      link: '#',
      color: 'bg-slate/10 text-slate',
    },
  ];

  const inquiryTypes = [
    { value: 'general', label: 'General Inquiry', labelSo: 'Su\'aal Guud' },
    { value: 'admission', label: 'Admission Process', labelSo: 'Habka Gelitaanka' },
    { value: 'fees', label: 'Fees & Payment', labelSo: 'Kharashka & Lacag Bixinta' },
    { value: 'scholarship', label: 'Scholarships', labelSo: 'Deeqaha Waxbarasho' },
    { value: 'campus', label: 'Campus Visit', labelSo: 'Booqashada Xarunta' },
    { value: 'transfer', label: 'Student Transfer', labelSo: 'Beddelka Ardayga' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <HeroBanner
        title="Contact Admissions"
        titleSo="Nala Xiriir Gelitaanka"
        subtitle="We are here to help you with your enrollment journey"
        subtitleSo="Waa halkan si aan kugu caawino safarkaaga gelitaanka"
        backgroundImage="/images/admissions-hero.jpg"
        showWave={true}
      />

      {/* Contact Methods */}
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
              {t('Get in Touch', 'Nala Soo Xiriir')}
            </h2>
            <p className="text-lg text-slate max-w-2xl mx-auto">
              {t('Choose the best way to reach our admissions team.',
                 'Dooro habka ugu fiican ee aad kula xiriiri karto kooxdeena gelitaanka.')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <motion.a
                key={index}
                href={method.link}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-cream rounded-2xl p-8 text-center hover:bg-white hover:shadow-xl transition-all border border-gray-100"
              >
                <div className={`w-16 h-16 ${method.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                  <method.icon className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-navy mb-2">{t(method.title, method.titleSo)}</h3>
                <p className="text-slate text-sm">{method.value}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 md:py-32 bg-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-3xl shadow-xl overflow-hidden"
            >
              <div className="bg-navy p-8 text-center">
                <MessageSquare className="w-12 h-12 text-gold mx-auto mb-4" />
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  {t('Send Us a Message', 'Noo Soo Dir Farriin')}
                </h2>
                <p className="text-white/80">
                  {t('Fill out the form below and we will get back to you within 24 hours.',
                     'Buuxi foomka hoose waxaana kula soo xiriiri doonnaa 24 saacadood gudaheeda.')}
                </p>
              </div>

              <div className="p-8 md:p-12">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8"
                  >
                    <div className="w-20 h-20 bg-sage/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Check className="w-10 h-10 text-sage" />
                    </div>
                    <h3 className="text-2xl font-bold text-navy mb-4">
                      {t('Message Sent!', 'Fariinta la Diray!')}
                    </h3>
                    <p className="text-slate mb-8">
                      {t('Thank you for contacting us. Our admissions team will reach out to you soon.',
                         'Mahadsanid nala soo xiriirta. Kooxdeena gelitaanku waa kuu soo xiriiri doonaa dhakhso.')}
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="inline-flex items-center justify-center px-8 py-3 bg-navy text-white rounded-full font-semibold hover:bg-navy-light transition-colors"
                    >
                      {t('Send Another Message', 'Dir Farriin Kale')}
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="flex items-center gap-2">
                          <User className="w-4 h-4 text-gold" />
                          {t('Full Name', 'Magaca oo Dhan')} *
                        </Label>
                        <Input
                          id="name"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder={t('Enter your name', 'Geli magacaaga')}
                          className="rounded-xl"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email" className="flex items-center gap-2">
                          <Mail className="w-4 h-4 text-gold" />
                          {t('Email Address', 'Ciwaanka Emailka')} *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder={t('Enter your email', 'Geli emailkaaga')}
                          className="rounded-xl"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="flex items-center gap-2">
                          <Phone className="w-4 h-4 text-gold" />
                          {t('Phone Number', 'Lambarka Telefoonka')} *
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder={t('Enter your phone number', 'Geli lambarka telefoonkaaga')}
                          className="rounded-xl"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="inquiryType" className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-gold" />
                          {t('Inquiry Type', 'Nooca Su\'aasha')} *
                        </Label>
                        <Select
                          value={formData.inquiryType}
                          onValueChange={(value) => setFormData({ ...formData, inquiryType: value })}
                        >
                          <SelectTrigger className="rounded-xl">
                            <SelectValue placeholder={t('Select inquiry type', 'Dooro nooca su\'aasha')} />
                          </SelectTrigger>
                          <SelectContent>
                            {inquiryTypes.map((type) => (
                              <SelectItem key={type.value} value={type.value}>
                                {t(type.label, type.labelSo)}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="flex items-center gap-2">
                        <MessageSquare className="w-4 h-4 text-gold" />
                        {t('Your Message', 'Fariintaada')} *
                      </Label>
                      <Textarea
                        id="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder={t('How can we help you?', 'Sidee kugu caawin karnaa?')}
                        className="rounded-xl resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full rounded-full bg-navy hover:bg-navy-light text-white"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      {t('Send Message', 'Dir Fariinta')}
                    </Button>

                    <p className="text-center text-sm text-slate">
                      {t('Or email us directly at', 'Ama noo email ku dir si toos ah')}{' '}
                      <a href={`mailto:${content.contact.email}`} className="text-gold hover:underline">
                        {content.contact.email}
                      </a>
                    </p>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
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
              {t('Frequently Asked Questions', 'Su\'aalaha Inta Badan la Weydiiyo')}
            </h2>
            <p className="text-lg text-slate max-w-2xl mx-auto">
              {t('Find quick answers to common questions about admissions.',
                 'Hel jawaabo dhakhso leh su\'aalaha caadiga ah ee ku saabsan gelitaanka.')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                q: 'When does the academic year start?',
                qSo: 'Goorma ayuu bilaabmaa sanadka waxbarasho?',
                a: 'Our academic year typically starts in early September.',
                aSo: 'Sanadkeenna waxbarasho wuxuu badanaa bilaabmaa bishii Sebtember.',
              },
              {
                q: 'What documents are required for admission?',
                qSo: 'Warqadaha uu u baahan yahay gelitaanka?',
                a: 'Birth certificate, previous school records, passport photos, and medical clearance.',
                aSo: 'Shahaadada dhalashada, diiwaanada dugsiga hore, sawirro baasaboor, iyo shahaadada caafimaadka.',
              },
              {
                q: 'Do you offer transportation services?',
                qSo: 'Miyaa aad bixisaan adeegyada gaadiidka?',
                a: 'Yes, we offer school bus services for most areas. Contact us for routes.',
                aSo: 'Haa, waxaan bixinaynaa adeegyada basaska dugsiga ee badanka goobaha. Nala soo xiriir waddooyinka.',
              },
              {
                q: 'Are scholarships available?',
                qSo: 'Miyaa jiraan deeqo waxbarasho?',
                a: 'Yes, we offer over 1,000 full scholarships annually for deserving students.',
                aSo: 'Haa, waxaan bixinaynaa in ka badan 1,000 deeq waxbarasho oo buuxda sanadkii ardayda mudan.',
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-cream rounded-2xl p-6 hover:shadow-lg transition-shadow"
              >
                <h3 className="font-bold text-navy mb-2">{t(faq.q, faq.qSo)}</h3>
                <p className="text-slate text-sm">{t(faq.a, faq.aSo)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
