import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import content from '@/data/contentLoader';

export function Footer() {
  const { t, language } = useLanguage();

  const quickLinks = [
    { label: 'Home', labelSo: 'Bogga Hore', href: '/' },
    { label: 'About Us', labelSo: 'Nagu Saabsan', href: '/about' },
    { label: 'Our Leaders', labelSo: 'Hogaamiyeyaasha', href: '/about/leaders' },
    { label: 'Mission & Vision', labelSo: 'Ujeeddo & Aragti', href: '/about/mission-vision' },
    { label: 'Services & Facilities', labelSo: 'Adeegyada & Xarumaha', href: '/about/facilities' },
    { label: 'Our Branches', labelSo: 'Laamaha', href: '/about/branches' },
    { label: 'Primary School', labelSo: 'Dugsiga Hoose', href: '/academics/primary' },
    { label: 'Secondary School', labelSo: 'Dugsiga Dhexe', href: '/academics/secondary' },
    { label: 'Admissions', labelSo: 'Gelitaanka', href: '/admissions' },
    { label: 'Apply Now', labelSo: 'Codso Hadda', href: '/admissions/apply' },
    { label: 'News & Events', labelSo: 'Wararka & Dhacdooyinka', href: '/news-events' },
    { label: 'Contact Us', labelSo: 'Nala Soo Xiriir', href: '/contact' },
  ];

  return (
    <footer className="bg-navy text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* School Info with Logo */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-16 h-16 rounded-full overflow-hidden bg-white shadow-lg">
                <img
                  src="/images/logo.jpg"
                  alt="Ablaal Schools Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold">{t(content.schoolName, content.schoolNameSo)}</h3>
                <p className="text-gold text-sm">{language === 'en' ? 'Excellence in Education' : 'Hufnaanta Waxbarashada'}</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4 text-sm leading-relaxed">{t(content.tagline, content.taglineSo)}</p>
            <div className="flex gap-4">
              <a href={content.social.facebook} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-gold transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href={content.social.twitter} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-gold transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href={content.social.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-gold transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href={content.social.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-gold transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-lg font-semibold mb-4 text-gold">{t('Quick Links', 'Xiriirka Degdegga ah')}</h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {quickLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.href}
                  className="flex items-center gap-1 text-gray-400 hover:text-gold transition-colors text-sm py-1"
                >
                  <ChevronRight className="w-4 h-4" />
                  {t(link.label, link.labelSo)}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('Contact Us', 'Nala Soo Xiriir')}</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-gray-400 mt-0.5" />
                <span className="text-gray-400">{t(content.contact.address, content.contact.addressSo)}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-gray-400" />
                <a href={`tel:${content.contact.phone}`} className="text-gray-400 hover:text-white transition-colors">
                  {content.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-gray-400" />
                <a href={`mailto:${content.contact.email}`} className="text-gray-400 hover:text-white transition-colors">
                  {content.contact.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Branches */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('Our Branches', 'Laamaha')}</h4>
            <ul className="space-y-2">
              {content.branches.branches.slice(0, 4).map((branch) => (
                <li key={branch.id}>
                  <Link
                    to="/about/branches"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {t(branch.name, branch.nameSo)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm text-center md:text-left">
            &copy; 1988–2026 {t(content.schoolName, content.schoolNameSo)}. {t('All Rights Reserved', 'Xuquuqda oo dhan way xifdisan yihiin')}.
          </p>
          <div className="flex items-center gap-4">
            <Link to="/privacy" className="text-gray-400 hover:text-gold text-sm transition-colors">
              {t('Privacy Policy', 'Qaanuunka Qarsoonida')}
            </Link>
            <Link to="/terms" className="text-gray-400 hover:text-gold text-sm transition-colors">
              {t('Terms of Service', 'Shuruudaha Adeegga')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
