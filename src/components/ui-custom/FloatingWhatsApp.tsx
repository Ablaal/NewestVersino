import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';
import content from '@/data/contentLoader';

export function FloatingWhatsApp() {
  const whatsappNumber = content.contact.whatsapp.replace(/\D/g, '');
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <motion.a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all"
      aria-label="Contact us on WhatsApp"
    >
      <Phone className="w-6 h-6" />
    </motion.a>
  );
}
