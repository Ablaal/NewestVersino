import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useLanguage } from '@/hooks/useLanguage';

interface SectionTitleProps {
  title: string;
  titleSo: string;
  subtitle?: string;
  subtitleSo?: string;
  centered?: boolean;
  light?: boolean;
}

export function SectionTitle({
  title,
  titleSo,
  subtitle,
  subtitleSo,
  centered = true,
  light = false,
}: SectionTitleProps) {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const { t } = useLanguage();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className={`mb-12 ${centered ? 'text-center' : ''}`}
    >
      {subtitle && (
        <span className={`inline-block text-sm font-semibold uppercase tracking-wider mb-3 ${
          light ? 'text-white/80' : 'text-primary'
        }`}>
          {t(subtitle, subtitleSo || subtitle)}
        </span>
      )}
      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold ${
        light ? 'text-white' : 'text-gray-900'
      }`}>
        {t(title, titleSo)}
      </h2>
      <div className={`w-20 h-1 mt-4 ${light ? 'bg-white/50' : 'bg-primary'} ${centered ? 'mx-auto' : ''}`} />
    </motion.div>
  );
}
