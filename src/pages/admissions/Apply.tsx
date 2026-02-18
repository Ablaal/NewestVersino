import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { useLanguage } from '@/hooks/useLanguage';
import content from '@/data/contentLoader';

export function Apply() {
  const { t } = useLanguage();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    city: '',
    grade: '',
    message: '',
    consent: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-lg mx-auto bg-white rounded-2xl p-12 text-center shadow-lg"
          >
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-10 h-10 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {t('Application Submitted!', 'Codsiga la Gudbiyay!')}
            </h2>
            <p className="text-gray-600 mb-8">
              {t('Thank you for your application. We will review it and contact you soon.',
                 'Mahadsanid codsigaaga. Waxaan baari doonnaa oo waxaan kula soo xiriiri doonnaa dhakhso.')}
            </p>
            <a
              href="/"
              className="inline-flex items-center justify-center px-8 py-3 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition-colors"
            >
              {t('Back to Home', 'Ku Laabo Bogga Hore')}
            </a>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          {/* Logo */}
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {t(content.schoolName, content.schoolNameSo)}
            </h1>
            <p className="text-gray-600">{t('Student Application Form', 'Foomka Codsiga Ardayga')}</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Honeypot field for spam protection */}
              <div className="hidden">
                <input type="text" name="website" tabIndex={-1} autoComplete="off" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="fullName">{t('Full Name', 'Magaca oo Dhan')} *</Label>
                  <Input
                    id="fullName"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder={t('Enter full name', 'Geli magaca oo dhan')}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">{t('Email', 'Email')} *</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder={t('Enter email address', 'Geli ciwaanka emailka')}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="phone">{t('Phone/WhatsApp', 'Telefoon/WhatsApp')} *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder={t('Enter phone number', 'Geli lambarka telefoonka')}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="city">{t('City', 'Magaalada')} *</Label>
                  <Input
                    id="city"
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    placeholder={t('Enter city', 'Geli magaalada')}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="grade">{t('Grade Applying For', 'Fasalka Codsiga')} *</Label>
                <Select
                  value={formData.grade}
                  onValueChange={(value) => setFormData({ ...formData, grade: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder={t('Select grade', 'Dooro fasalka')} />
                  </SelectTrigger>
                  <SelectContent>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((grade) => (
                      <SelectItem key={grade} value={String(grade)}>
                        {t(`Grade ${grade}`, `Fasalka ${grade}`)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">{t('Additional Information', 'Macluumaad Dheeraad ah')}</Label>
                <Textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder={t('Any additional information you would like to share...', 'Macluumaad dheeraad ah oo aad rabto inaad la wadaagto...')}
                />
              </div>

              <div className="flex items-start gap-3">
                <Checkbox
                  id="consent"
                  checked={formData.consent}
                  onCheckedChange={(checked) => setFormData({ ...formData, consent: checked as boolean })}
                  required
                />
                <Label htmlFor="consent" className="text-sm text-gray-600 leading-relaxed cursor-pointer">
                  {t(
                    'I consent to Ablaal Schools collecting and processing my personal information for the purpose of processing my application.',
                    'Waxaan u oggolaanayaa Dugsiyada Ablaal inay ururiyaan oo ay shaqeeyaan macluumaadkayga shaqsiga ah si ay u dhammaystiraan codsigayga.'
                  )}
                </Label>
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full rounded-full"
              >
                <Send className="w-5 h-5 mr-2" />
                {t('Submit Application', 'Gudbi Codsiga')}
              </Button>

              <p className="text-center text-sm text-gray-500">
                {t('Applications will be sent to:', 'Codsiyada waxaa loo dirayaa:')} {content.contact.email}
              </p>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
