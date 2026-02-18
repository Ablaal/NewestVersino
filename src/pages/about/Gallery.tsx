import { motion } from 'framer-motion';
import { HeroBanner, GalleryMasonry } from '@/components/ui-custom';
import content from '@/data/contentLoader';

export function Gallery() {
  const gallery = content.gallery;

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <HeroBanner {...gallery.hero} showWave={true} />

      {/* Gallery Content */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <GalleryMasonry images={gallery.images} />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
