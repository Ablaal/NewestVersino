import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { PinnedHero, PinnedSection } from '@/components/ui-custom';
import { useLanguage } from '@/hooks/useLanguage';
import content from '@/data/contentLoader';

export function Contact() {
  const { t } = useLanguage();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen">
      {/* Pinned Hero */}
      <PinnedHero
        backgroundImage="/images/welldone.jpg"
        title={t('Contact Us', 'Nala Soo Xiriir')}
        subtitle={t('Get in touch with Ablaal Schools', 'Nala soo xiriir Dugsiyada Ablaal')}
        overlayOpacity={0.5}
      />

      {/* Contact Info Cards - Pinned Background */}
      <PinnedSection
        backgroundImage="/images/facility-2.jpg"
        overlayOpacity={0.8}
        contentClassName="py-20 md:py-32"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              {
                icon: MapPin,
                title: 'Address',
                titleSo: 'Cinwaanka',
                content: t(content.contact.address, content.contact.addressSo),
              },
              {
                icon: Phone,
                title: 'Phone',
                titleSo: 'Telefoonka',
                content: content.contact.phone,
                link: `tel:${content.contact.phone}`,
              },
              {
                icon: Mail,
                title: 'Email',
                titleSo: 'Emailka',
                content: content.contact.email,
                link: `mailto:${content.contact.email}`,
              },
              {
                icon: Clock,
                title: 'Office Hours',
                titleSo: 'Saacadaha Xafiiska',
                content: 'Sat - Thu: 6:30 AM - 6:00 PM',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center hover:bg-white/20 transition-all group border border-white/20"
              >
                <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-colors">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-white">{t(item.title, item.titleSo)}</h3>
                {item.link ? (
                  <a href={item.link} className="text-white/80 transition-colors">
                    {item.content}
                  </a>
                ) : (
                  <p className="text-white/80 transition-colors">{item.content}</p>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </PinnedSection>

      {/* Contact Form & Map - White Background */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {t('Send Us a Message', 'Noo Soo Dir Farriin')}
              </h2>

              {isSubmitted ? (
                <div className="bg-white rounded-2xl p-8 text-center shadow-lg border border-gray-100">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {t('Message Sent!', 'Fariinta la Diray!')}
                  </h3>
                  <p className="text-gray-600">
                    {t('Thank you for contacting us. We will get back to you soon.',
                       'Mahadsanid nala soo xiriirta. Waxaan kula soo xiriiri doonnaa dhakhso.')}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-lg space-y-6 border border-gray-100">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">{t('Name', 'Magaca')} *</Label>
                      <Input id="name" required placeholder={t('Your name', 'Magacaaga')} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">{t('Email', 'Emailka')} *</Label>
                      <Input id="email" type="email" required placeholder={t('Your email', 'Emailkaaga')} />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">{t('Subject', 'Mawduuca')} *</Label>
                    <Input id="subject" required placeholder={t('Message subject', 'Mawduuca fariinta')} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">{t('Message', 'Fariinta')} *</Label>
                    <Textarea
                      id="message"
                      rows={5}
                      required
                      placeholder={t('Your message...', 'Fariintaada...')}
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full rounded-full">
                    <Send className="w-5 h-5 mr-2" />
                    {t('Send Message', 'Dir Fariinta')}
                  </Button>
                </form>
              )}
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {t('Find Us', 'Nala Soo Xiriir')}
              </h2>
              <div className="rounded-2xl overflow-hidden shadow-lg h-[400px] md:h-[500px] border border-gray-100">
                <iframe
                  src={content.contact.mapEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ablaal Schools Location"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Branches Quick List - Pinned Background */}
      <PinnedSection
        backgroundImage="/images/service-4.jpg"
        overlayOpacity={0.8}
        contentClassName="py-20 md:py-32"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20">
              <h2 className="text-3xl font-bold text-white text-center mb-12">
                {t('Our Branches', 'Laamaha')}
              </h2>
              <div className="w-20 h-1 bg-primary mx-auto mb-12" />

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {content.branches.branches.map((branch, index) => (
                  <motion.div
                    key={branch.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all group border border-white/20"
                  >
                    <h3 className="font-bold text-lg mb-2 text-white">{t(branch.name, branch.nameSo)}</h3>
                    <p className="text-white/80 text-sm mb-3">
                      {t(branch.address, branch.addressSo)}
                    </p>
                    <a
                      href={`tel:${branch.phone}`}
                      className="text-primary text-sm font-medium hover:underline"
                    >
                      {branch.phone}
                    </a>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </PinnedSection>
    </div>
  );
}
