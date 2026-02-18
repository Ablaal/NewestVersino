import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useLanguage } from '@/hooks/useLanguage';

interface Highlight {
  title: string;
  titleSo: string;
  description: string;
  descriptionSo: string;
}

interface SplitSectionProps {
  title: string;
  titleSo: string;
  subtitle?: string;
  subtitleSo?: string;
  description: string;
  descriptionSo: string;
  image: string;
  imagePosition?: 'left' | 'right';
  highlights?: Highlight[];
}

export function SplitSection({
  title,
  titleSo,
  subtitle,
  subtitleSo,
  description,
  descriptionSo,
  image,
  imagePosition = 'left',
  highlights,
}: SplitSectionProps) {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const { t } = useLanguage();

  const imageContent = (
    <motion.div
      initial={{ opacity: 0, x: imagePosition === 'left' ? -50 : 50 }}
      animate={isVisible ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="relative"
    >
      <div className="relative rounded-2xl overflow-hidden shadow-2xl">
        <img
          src={image}
          alt={t(title, titleSo)}
          className="w-full h-[400px] md:h-[500px] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
      </div>
    </motion.div>
  );

  const textContent = (
    <motion.div
      initial={{ opacity: 0, x: imagePosition === 'left' ? 50 : -50 }}
      animate={isVisible ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="flex flex-col justify-center"
    >
      {subtitle && (
        <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">
          {t(subtitle, subtitleSo || subtitle)}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
        {t(title, titleSo)}
      </h2>
      <p className="text-lg text-gray-600 leading-relaxed mb-8">
        {t(description, descriptionSo)}
      </p>

      {highlights && highlights.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
              className="flex items-start gap-3"
            >
              <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold">{index + 1}</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">{t(highlight.title, highlight.titleSo)}</h4>
                <p className="text-sm text-gray-600">{t(highlight.description, highlight.descriptionSo)}</p>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </motion.div>
  );

  return (
    <div ref={ref} className="container mx-auto px-4">
      <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
        imagePosition === 'right' ? 'lg:flex-row-reverse' : ''
      }`}>
        {imagePosition === 'left' ? (
          <>
            {imageContent}
            {textContent}
          </>
        ) : (
          <>
            {textContent}
            {imageContent}
          </>
        )}
      </div>
    </div>
  );
}
