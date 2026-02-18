import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Check, Upload } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { useLanguage } from '@/hooks/useLanguage';
import content from '@/data/contentLoader';

export function PrincipalApply() {
  const { t } = useLanguage();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
            <p className="text-gray-600">{t('Principal Application Form', 'Foomka Codsiga Madaxa Dugsiga')}</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Honeypot */}
              <div className="hidden">
                <input type="text" name="website" tabIndex={-1} autoComplete="off" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="fullName">{t('Full Name', 'Magaca oo Dhan')} *</Label>
                  <Input id="fullName" required placeholder={t('Enter full name', 'Geli magaca oo dhan')} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">{t('Email', 'Emailka')} *</Label>
                  <Input id="email" type="email" required placeholder={t('Enter email', 'Geli emailka')} />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="phone">{t('Phone/WhatsApp', 'Telefoon/WhatsApp')} *</Label>
                  <Input id="phone" type="tel" required placeholder={t('Enter phone number', 'Geli lambarka telefoonka')} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="city">{t('City', 'Magaalada')} *</Label>
                  <Input id="city" required placeholder={t('Enter city', 'Geli magaalada')} />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="position">{t('Position Applied For', 'Xilka Codsiga')} *</Label>
                <Input id="position" value={t('School Principal', 'Madaxa Dugsiga')} disabled className="bg-gray-100" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="education">{t('Education Level', 'Heerka Waxbarashada')} *</Label>
                  <Select required>
                    <SelectTrigger>
                      <SelectValue placeholder={t('Select education level', 'Dooro heerka waxbarashada')} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="master">{t('Master\'s Degree', 'Shahaadada Heerka Labaad')}</SelectItem>
                      <SelectItem value="phd">{t('PhD', 'PhD')}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="experience">{t('Years of Leadership Experience', 'Sanooyinka Khibradda Hogaanka')} *</Label>
                  <Select required>
                    <SelectTrigger>
                      <SelectValue placeholder={t('Select years', 'Dooro sanooyinka')} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="3-5">3-5 {t('years', 'sano')}</SelectItem>
                      <SelectItem value="5-10">5-10 {t('years', 'sano')}</SelectItem>
                      <SelectItem value="10+">10+ {t('years', 'sano')}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="linkedin">{t('LinkedIn Profile', 'LinkedIn Profile')} ({t('Optional', 'Ikhtiyaari')})</Label>
                <Input id="linkedin" placeholder="https://linkedin.com/in/..." />
              </div>

              <div className="space-y-2">
                <Label htmlFor="cv">{t('CV/Resume', 'CV/Resume')} *</Label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-primary transition-colors cursor-pointer">
                  <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-600">{t('Upload your CV (PDF, DOC)', 'Soo geli CVgaaga (PDF, DOC)')}</p>
                  <Input id="cv" type="file" accept=".pdf,.doc,.docx" className="hidden" required />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="coverLetter">{t('Cover Letter', 'Warqada Codsiga')} *</Label>
                <Textarea
                  id="coverLetter"
                  rows={4}
                  required
                  placeholder={t('Tell us about your leadership philosophy and experience...', 'Noo sheeg falsafadda iyo khibradda hogaankaaga...')}
                />
              </div>

              <div className="flex items-start gap-3">
                <Checkbox id="consent" required />
                <Label htmlFor="consent" className="text-sm text-gray-600 leading-relaxed cursor-pointer">
                  {t(
                    'I consent to Ablaal Schools collecting and processing my personal information for the purpose of processing my job application.',
                    'Waxaan u oggolaanayaa Dugsiyada Ablaal inay ururiyaan oo ay shaqeeyaan macluumaadkayga shaqsiga ah si ay u dhammaystiraan codsigayga shaqada.'
                  )}
                </Label>
              </div>

              <Button type="submit" size="lg" className="w-full rounded-full">
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
