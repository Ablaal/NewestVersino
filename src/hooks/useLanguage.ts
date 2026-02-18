import * as React from 'react';

type Language = 'en' | 'so';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (en: string, so: string) => string;
}

const LanguageContext = React.createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = React.useState<Language>('en');

  React.useEffect(() => {
    const saved = localStorage.getItem('ablaal-language') as Language;
    if (saved) {
      setLanguage(saved);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('ablaal-language', lang);
  };

  const t = (en: string, so: string) => {
    return language === 'en' ? en : so;
  };

  return React.createElement(
    LanguageContext.Provider,
    { value: { language, setLanguage: handleSetLanguage, t } },
    children
  );
}

export function useLanguage() {
  const context = React.useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
