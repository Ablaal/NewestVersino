import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useLanguage } from '@/hooks/useLanguage';

interface Card {
  id: string;
  title: string;
  titleSo: string;
  description: string;
  descriptionSo: string;
  image?: string;
}

interface CardGridProps {
  cards: Card[];
  columns?: 2 | 3 | 4;
  showImage?: boolean;
  className?: string;
  light?: boolean;
}

export function CardGrid({ cards, columns = 3, showImage = false, className = '', light = false }: CardGridProps) {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const { t } = useLanguage();

  const gridCols = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-2 lg:grid-cols-3',
    4: 'md:grid-cols-2 lg:grid-cols-4',
  };

  return (
    <div ref={ref} className={`grid grid-cols-1 ${gridCols[columns]} gap-6 ${className}`}>
      {cards.map((card, index) => (
        <motion.div
          key={card.id}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className={`group rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ${
            light ? 'bg-white/10 backdrop-blur-md border border-white/20' : 'bg-white'
          }`}
        >
          {showImage && card.image && (
            <div className="relative h-48 overflow-hidden">
              <img
                src={card.image}
                alt={t(card.title, card.titleSo)}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <h3 className="absolute bottom-4 left-4 text-white font-bold text-lg">
                {t(card.title, card.titleSo)}
              </h3>
            </div>
          )}
          <div className="p-6">
            {!showImage && (
              <h3 className={`text-xl font-bold mb-3 ${light ? 'text-white' : 'text-gray-900'}`}>
                {t(card.title, card.titleSo)}
              </h3>
            )}
            <p className={`leading-relaxed ${light ? 'text-white/80' : 'text-gray-600'}`}>
              {t(card.description, card.descriptionSo)}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
