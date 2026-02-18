import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import type { GalleryImage } from '@/types';

interface GalleryMasonryProps {
  images: GalleryImage[];
}

type Category = 'all' | 'students' | 'staff' | 'graduations' | 'campuses';

export function GalleryMasonry({ images }: GalleryMasonryProps) {
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const { t } = useLanguage();

  const categories: { key: Category; label: string; labelSo: string }[] = [
    { key: 'all', label: 'All', labelSo: 'Dhammaan' },
    { key: 'students', label: 'Students', labelSo: 'Ardayda' },
    { key: 'staff', label: 'Staff', labelSo: 'Shaqaalaha' },
    { key: 'graduations', label: 'Graduations', labelSo: 'Dhammaadka' },
    { key: 'campuses', label: 'Campuses', labelSo: 'Xarumaha' },
  ];

  const filteredImages = selectedCategory === 'all'
    ? images
    : images.filter(img => img.category === selectedCategory);

  return (
    <div>
      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {categories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setSelectedCategory(cat.key)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
              selectedCategory === cat.key
                ? 'bg-primary text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {t(cat.label, cat.labelSo)}
          </button>
        ))}
      </div>

      {/* Masonry Grid */}
      <motion.div
        layout
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
      >
        <AnimatePresence>
          {filteredImages.map((image) => (
            <motion.div
              key={image.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              onClick={() => setSelectedImage(image)}
              className="relative group cursor-pointer overflow-hidden rounded-xl"
            >
              <img
                src={image.src}
                alt={t(image.caption, image.captionSo)}
                className="w-full h-48 md:h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-sm font-medium">{t(image.caption, image.captionSo)}</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            <motion.img
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              src={selectedImage.src}
              alt={t(selectedImage.caption, selectedImage.captionSo)}
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
            />
            <p className="absolute bottom-4 left-0 right-0 text-center text-white">
              {t(selectedImage.caption, selectedImage.captionSo)}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
