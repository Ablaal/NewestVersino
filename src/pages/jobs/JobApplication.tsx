import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  Upload, Check, User, Calendar, Phone, Mail, MapPin, 
  GraduationCap, Briefcase, FileText, ChevronRight, 
  UploadCloud, Award, BookOpen
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { useLanguage } from '@/hooks/useLanguage';

export function JobApplication() {
  const { t } = useLanguage();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [position, setPosition] = useState<'teacher' | 'principal' | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [formData, setFormData] = useState({
    fullName: '',
    gender: '',
    dateOfBirth: '',
    phone: '',
    email: '',
    campusPreference: '',
    subject: '',
    yearsOfExperience: '',
    startDate: '',
    highestQualification: '',
    institutionName: '',
    graduationYear: '',
    teachingLicense: '',
    confirmed: false,
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

  const subjects = [
    'Mathematics', 'English', 'Somali', 'Science', 'Physics', 
    'Chemistry', 'Biology', 'History', 'Geography', 'Islamic Studies',
    'Computer Science', 'Arts', 'Physical Education', 'Arabic'
  ];

  const qualifications = [
    'High School Diploma', 'Associate Degree', 'Bachelor\'s Degree',
    'Master\'s Degree', 'PhD', 'Teaching Certificate', 'Other'
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-sage/5 to-cream py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-lg mx-auto bg-white rounded-3xl p-12 text-center shadow-2xl"
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
              {t('Application Submitted!', 'Codsiga la Gudbiyay!')}
            </h2>
            <p className="text-slate mb-8">
              {t('Thank you for your interest in joining Ablaal Schools. We will review your application and contact you within 5-7 business days.',
                 'Mahadsanid xiisahaaga ku biiritaanka Dugsiyada Ablaal. Waxaan baari doonnaa codsigaaga oo waxaan kula soo xiriiri doonnaa 5-7 maalmood gudaheeda.')}
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
    <div className="min-h-screen bg-gradient-to-br from-sage/5 to-cream py-8 md:py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Logo & Header */}
          <div className="text-center mb-10">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="w-28 h-28 mx-auto mb-6 rounded-full overflow-hidden shadow-xl border-4 border-white"
            >
              <img
                src="/images/logo.jpg"
                alt="Ablaal Schools"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <h1 className="text-3xl md:text-4xl font-bold text-navy mb-2">
              {t('Job Application Form', 'Foomka Codsiga Shaqada')}
            </h1>
            <p className="text-slate text-lg">
              {t('Apply for Teaching or Principal Position', 'Codso Xilka Barista ama Agaasimaha')}
            </p>
          </div>

          {/* Progress Bar */}
          <div className="mb-10">
            <div className="flex items-center justify-between mb-2">
              {['Personal Info', 'Position', 'Education', 'Documents'].map((_, index) => (
                <div key={index} className="flex items-center">
                  <motion.div
                    initial={false}
                    animate={{
                      backgroundColor: '#2E8B57',
                      scale: 1,
                    }}
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm"
                  >
                    {index + 1}
                  </motion.div>
                  {index < 3 && (
                    <div className="w-16 md:w-24 h-1 mx-2 bg-sage" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Section A: Personal Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <div className="bg-sage/10 px-6 py-4 border-l-4 border-sage">
                <h2 className="text-lg font-bold text-navy flex items-center gap-2">
                  <span className="w-6 h-6 bg-sage text-white rounded-full flex items-center justify-center text-sm">A</span>
                  {t('Personal Information', 'Macluumaadka Shakhsiga')}
                </h2>
              </div>
              <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label className="text-navy font-medium">{t('Full Name', 'Magaca oo Dhan')} *</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <Input
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder={t('Enter your full name', 'Geli magacaaga oo dhan')}
                      className="pl-10 rounded-xl border-gray-200 focus:border-sage focus:ring-sage"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="text-navy font-medium">{t('Gender', 'Jinsiga')} *</Label>
                  <select
                    required
                    value={formData.gender}
                    onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                    className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:border-sage focus:ring-1 focus:ring-sage outline-none"
                  >
                    <option value="">{t('Select Gender', 'Dooro Jinsiga')}</option>
                    <option value="male">{t('Male', 'Rag')}</option>
                    <option value="female">{t('Female', 'Dhedig')}</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label className="text-navy font-medium">{t('Date of Birth', 'Taariikhda Dhalashada')} *</Label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <Input
                      type="date"
                      required
                      value={formData.dateOfBirth}
                      onChange={(e) => setFormData({ ...formData, dateOfBirth: e.target.value })}
                      className="pl-10 rounded-xl border-gray-200 focus:border-sage focus:ring-sage"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="text-navy font-medium">{t('Phone Number', 'Lambarka Telefoonka')} *</Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <Input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder={t('Enter phone number', 'Geli lambarka telefoonka')}
                      className="pl-10 rounded-xl border-gray-200 focus:border-sage focus:ring-sage"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="text-navy font-medium">{t('Email Address', 'Ciwaanka Emailka')} *</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <Input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder={t('Enter email address', 'Geli ciwaanka emailka')}
                      className="pl-10 rounded-xl border-gray-200 focus:border-sage focus:ring-sage"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="text-navy font-medium">{t('City / Campus Preference', 'Magaalada / Xarunta Doorashada')} *</Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <select
                      required
                      value={formData.campusPreference}
                      onChange={(e) => setFormData({ ...formData, campusPreference: e.target.value })}
                      className="w-full pl-10 pr-4 py-2 rounded-xl border border-gray-200 focus:border-sage focus:ring-1 focus:ring-sage outline-none appearance-none bg-white"
                    >
                      <option value="">{t('Select Campus', 'Dooro Xarunta')}</option>
                      {campuses.map((campus) => (
                        <option key={campus.value} value={campus.value}>{campus.label}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Section B: Position Details */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <div className="bg-gold/10 px-6 py-4 border-l-4 border-gold">
                <h2 className="text-lg font-bold text-navy flex items-center gap-2">
                  <span className="w-6 h-6 bg-gold text-white rounded-full flex items-center justify-center text-sm">B</span>
                  {t('Position Details', 'Faahfaahinta Xilka')}
                </h2>
              </div>
              <div className="p-6 space-y-6">
                <div>
                  <Label className="text-navy font-medium mb-3 block">{t('Applying For', 'Codsiga')} *</Label>
                  <div className="flex gap-6">
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <div className={`w-6 h-6 rounded border-2 flex items-center justify-center transition-colors ${position === 'teacher' ? 'bg-sage border-sage' : 'border-gray-300 group-hover:border-sage'}`}>
                        {position === 'teacher' && <Check className="w-4 h-4 text-white" />}
                      </div>
                      <input
                        type="checkbox"
                        checked={position === 'teacher'}
                        onChange={() => setPosition(position === 'teacher' ? null : 'teacher')}
                        className="hidden"
                      />
                      <span className="text-navy">{t('Teacher', 'Macallin')}</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <div className={`w-6 h-6 rounded border-2 flex items-center justify-center transition-colors ${position === 'principal' ? 'bg-sage border-sage' : 'border-gray-300 group-hover:border-sage'}`}>
                        {position === 'principal' && <Check className="w-4 h-4 text-white" />}
                      </div>
                      <input
                        type="checkbox"
                        checked={position === 'principal'}
                        onChange={() => setPosition(position === 'principal' ? null : 'principal')}
                        className="hidden"
                      />
                      <span className="text-navy">{t('Principal', 'Agaasime')}</span>
                    </label>
                  </div>
                </div>

                {position === 'teacher' && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                  >
                    <div className="space-y-2">
                      <Label className="text-navy font-medium">{t('Subject (if Teacher)', 'Mawduuca (haddii Macallin)')}</Label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:border-sage focus:ring-1 focus:ring-sage outline-none"
                      >
                        <option value="">{t('Select Subject', 'Dooro Mawduuca')}</option>
                        {subjects.map((subject) => (
                          <option key={subject} value={subject}>{subject}</option>
                        ))}
                      </select>
                    </div>
                  </motion.div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label className="text-navy font-medium">{t('Years of Experience', 'Sano ee Waayo-aragnimo')} *</Label>
                    <div className="relative">
                      <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <Input
                        type="number"
                        required
                        min="0"
                        value={formData.yearsOfExperience}
                        onChange={(e) => setFormData({ ...formData, yearsOfExperience: e.target.value })}
                        placeholder={t('Enter years', 'Geli sano')}
                        className="pl-10 rounded-xl border-gray-200 focus:border-sage focus:ring-sage"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-navy font-medium">{t('Available Start Date', 'Taariikhda Bilowga ee La Heli Karo')} *</Label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <Input
                        type="date"
                        required
                        value={formData.startDate}
                        onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                        className="pl-10 rounded-xl border-gray-200 focus:border-sage focus:ring-sage"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Section C: Education & Qualifications */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <div className="bg-navy/10 px-6 py-4 border-l-4 border-navy">
                <h2 className="text-lg font-bold text-navy flex items-center gap-2">
                  <span className="w-6 h-6 bg-navy text-white rounded-full flex items-center justify-center text-sm">C</span>
                  {t('Education & Qualifications', 'Waxbarashada & Aqoonta')}
                </h2>
              </div>
              <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label className="text-navy font-medium">{t('Highest Qualification', 'Aqoonta ugu Sarreysa')} *</Label>
                  <div className="relative">
                    <GraduationCap className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <select
                      required
                      value={formData.highestQualification}
                      onChange={(e) => setFormData({ ...formData, highestQualification: e.target.value })}
                      className="w-full pl-10 pr-4 py-2 rounded-xl border border-gray-200 focus:border-sage focus:ring-1 focus:ring-sage outline-none appearance-none bg-white"
                    >
                      <option value="">{t('Select Qualification', 'Dooro Aqoonta')}</option>
                      {qualifications.map((qual) => (
                        <option key={qual} value={qual}>{qual}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="text-navy font-medium">{t('Institution Name', 'Magaca Hay\'adda')} *</Label>
                  <div className="relative">
                    <BookOpen className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <Input
                      required
                      value={formData.institutionName}
                      onChange={(e) => setFormData({ ...formData, institutionName: e.target.value })}
                      placeholder={t('Enter institution name', 'Geli magaca hay\'adda')}
                      className="pl-10 rounded-xl border-gray-200 focus:border-sage focus:ring-sage"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="text-navy font-medium">{t('Graduation Year', 'Sanadka Dhammaadka')} *</Label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <Input
                      type="number"
                      required
                      min="1970"
                      max="2030"
                      value={formData.graduationYear}
                      onChange={(e) => setFormData({ ...formData, graduationYear: e.target.value })}
                      placeholder={t('Enter year', 'Geli sanadka')}
                      className="pl-10 rounded-xl border-gray-200 focus:border-sage focus:ring-sage"
                    />
                  </div>
                </div>

                <div className="space-y-2 md:col-span-2">
                  <Label className="text-navy font-medium">{t('Teaching License / Certification', 'Shatiga Barista / Shahaadada')}</Label>
                  <div className="relative">
                    <Award className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <Input
                      value={formData.teachingLicense}
                      onChange={(e) => setFormData({ ...formData, teachingLicense: e.target.value })}
                      placeholder={t('Enter license/certification number (if applicable)', 'Geli lambarka shatiga/shahaadada (haddii la heli karo)')}
                      className="pl-10 rounded-xl border-gray-200 focus:border-sage focus:ring-sage"
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Section D: Experience Summary - File Upload */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <div className="bg-slate/10 px-6 py-4 border-l-4 border-slate">
                <h2 className="text-lg font-bold text-navy flex items-center gap-2">
                  <span className="w-6 h-6 bg-slate text-white rounded-full flex items-center justify-center text-sm">D</span>
                  {t('Experience Summary', 'Soo Koobidd Waayo-aragnimada')}
                </h2>
              </div>
              <div className="p-6">
                <div className="border-2 border-dashed border-gray-300 rounded-2xl p-8 text-center hover:border-sage hover:bg-sage/5 transition-colors">
                  <UploadCloud className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-navy mb-2">
                    {t('Upload Your CV, Certificates & ID', 'Soo Rar CV-gaaga, Shahaadadaha & Aqoonsiga')}
                  </h3>
                  <p className="text-slate mb-6">
                    {t('Drag & Drop Files Here or', 'Jiid & Dhig Faylasha Halkan ama')}
                  </p>
                  <input
                    ref={fileInputRef}
                    type="file"
                    multiple
                    accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                    className="hidden"
                    onChange={(e) => {
                      const files = e.target.files;
                      if (files) {
                        // Handle file upload
                      }
                    }}
                  />
                  <Button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="bg-sage hover:bg-sage-dark text-white rounded-full px-8"
                  >
                    <Upload className="w-5 h-5 mr-2" />
                    {t('Browse Files', 'Raadi Faylasha')}
                  </Button>
                </div>

                {/* File Requirements */}
                <div className="mt-6 flex flex-wrap justify-center gap-4">
                  <div className="flex items-center gap-2 text-sm text-slate">
                    <FileText className="w-4 h-4 text-sage" />
                    {t('CV / Resume (PDF)', 'CV / Resume (PDF)')}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate">
                    <FileText className="w-4 h-4 text-gold" />
                    {t('Certificates', 'Shahaadadaha')}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate">
                    <FileText className="w-4 h-4 text-navy" />
                    {t('ID / Passport (Optional)', 'Aqoonsi / Baasaboor (Ikhtiyaar)')}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Confirmation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="flex items-start gap-3 bg-cream rounded-xl p-4"
            >
              <Checkbox
                id="confirmed"
                checked={formData.confirmed}
                onCheckedChange={(checked) => setFormData({ ...formData, confirmed: checked as boolean })}
                className="mt-1 border-sage data-[state=checked]:bg-sage data-[state=checked]:border-sage"
              />
              <Label htmlFor="confirmed" className="text-slate cursor-pointer">
                {t('I confirm that all information provided is accurate and true.',
                   'Waxaan xaqiijinayaa in macluumaadka la bixiyay yahay sax ah oo run ah.')}
              </Label>
            </motion.div>

            {/* Submit Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
            >
              <Button
                type="submit"
                disabled={!formData.confirmed}
                className="w-full py-6 text-lg font-bold bg-sage hover:bg-sage-dark text-white rounded-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {t('Submit Application', 'Gudbi Codsiga')}
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
            </motion.div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
