import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Phone, Mail, Globe, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/useLanguage';
import content from '@/data/contentLoader';
import { Link, useLocation } from 'react-router-dom';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Check if there are active jobs
  const hasActiveJobs = content.newsEvents.jobs.some(job => job.isActive);

  // Filter navigation - remove careers if no active jobs
  const navigation = content.navigation.filter(item => {
    if (item.label === 'Careers' || item.label === 'Job Opportunities') {
      return hasActiveJobs;
    }
    return true;
  });

  const isActive = (href: string) => {
    return location.pathname === href || location.pathname.startsWith(href + '/');
  };

  return (
    <>
      {/* Top Info Bar - Modern Design */}
      <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'}`}>
        {/* Primary Top Bar - Dark with School Branding */}
        <div className="bg-gradient-to-r from-primary via-primary to-primary/90 text-white">
          <div className="container mx-auto px-4 py-3">
            <div className="flex flex-wrap items-center justify-between gap-4">
              {/* Left: Contact Info */}
              <div className="flex items-center gap-6">
                <a 
                  href={`tel:${content.contact.phone}`} 
                  className="flex items-center gap-2 text-sm hover:text-white/80 transition-colors group"
                >
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span className="hidden sm:inline font-medium">{content.contact.phone}</span>
                </a>
                <a 
                  href={`mailto:${content.contact.email}`} 
                  className="flex items-center gap-2 text-sm hover:text-white/80 transition-colors group"
                >
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="hidden md:inline font-medium">{content.contact.email}</span>
                </a>
              </div>

              {/* Right: Location, Hours & Language */}
              <div className="flex items-center gap-4">
                <div className="hidden lg:flex items-center gap-2 text-sm">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span className="text-white/90">Mogadishu, Somalia</span>
                </div>
                <div className="hidden xl:flex items-center gap-2 text-sm">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                    <Clock className="w-4 h-4" />
                  </div>
                  <span className="text-white/90">Sun-Thu: 7:30AM - 2:30PM</span>
                </div>
                
                {/* Language Toggle */}
                <button
                  onClick={() => setLanguage(language === 'en' ? 'so' : 'en')}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 transition-all border border-white/20"
                >
                  <Globe className="w-4 h-4" />
                  <span className="text-sm font-medium">{language === 'en' ? 'SO' : 'EN'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header
        className={`fixed left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'top-0 bg-white/95 backdrop-blur-md shadow-lg'
            : 'top-[72px] bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20 md:h-24">
            {/* Logo with Image */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden bg-white shadow-lg border-2 border-white/50 group-hover:scale-105 transition-transform duration-300">
                <img
                  src="/images/logo.jpg"
                  alt="Ablaal Schools Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="hidden sm:block">
                <div className={`text-lg md:text-xl font-bold transition-colors leading-tight ${isScrolled ? 'text-primary' : 'text-white'}`}>
                  {t(content.schoolName, content.schoolNameSo)}
                </div>
                <div className={`text-xs transition-colors ${isScrolled ? 'text-gray-500' : 'text-white/70'}`}>
                  {language === 'en' ? 'Excellence in Education' : 'Hufnaanta Waxbarashada'}
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navigation.map((item) => (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => item.children && setOpenDropdown(item.href)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    to={item.href}
                    className={`flex items-center gap-1 px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                      isActive(item.href)
                        ? isScrolled
                          ? 'text-primary bg-primary/10'
                          : 'text-white bg-white/20'
                        : isScrolled
                        ? 'text-gray-700 hover:text-primary hover:bg-gray-50'
                        : 'text-white/90 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {t(item.label, item.labelSo)}
                    {item.children && <ChevronDown className="w-4 h-4" />}
                  </Link>

                  {/* Dropdown */}
                  <AnimatePresence>
                    {item.children && openDropdown === item.href && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-60 bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100"
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            to={child.href}
                            className={`block px-5 py-3 text-sm transition-colors ${
                              isActive(child.href)
                                ? 'bg-primary/10 text-primary font-medium'
                                : 'text-gray-700 hover:bg-gray-50 hover:text-primary'
                            }`}
                          >
                            {t(child.label, child.labelSo)}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            {/* CTA Buttons - Desktop */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                to="/admissions/apply"
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                  isScrolled
                    ? 'bg-gold text-navy hover:bg-gold-light'
                    : 'bg-gold text-navy hover:bg-gold-light'
                }`}
              >
                {language === 'en' ? 'Apply Now' : 'Cods Hadda'}
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className={`lg:hidden ${isScrolled ? 'text-gray-900' : 'text-white'}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t shadow-xl"
            >
              <nav className="container mx-auto px-4 py-4">
                {navigation.map((item) => (
                  <div key={item.href} className="border-b border-gray-100 last:border-0">
                    <Link
                      to={item.href}
                      onClick={() => !item.children && setIsMobileMenuOpen(false)}
                      className={`block py-4 text-base font-medium ${
                        isActive(item.href) ? 'text-primary' : 'text-gray-700'
                      }`}
                    >
                      {t(item.label, item.labelSo)}
                    </Link>
                    {item.children && (
                      <div className="pl-4 pb-4 space-y-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            to={child.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className={`block py-2 text-sm ${
                              isActive(child.href) ? 'text-primary font-medium' : 'text-gray-600'
                            }`}
                          >
                            {t(child.label, child.labelSo)}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="pt-4">
                  <Link
                    to="/admissions/apply"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block w-full text-center py-3 bg-gold text-navy rounded-lg font-semibold"
                  >
                    {language === 'en' ? 'Apply Now' : 'Cods Hadda'}
                  </Link>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Spacer for fixed header */}
      <div className="h-[72px]" />
    </>
  );
}
