import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ReactNode } from 'react';

interface PinnedSectionProps {
  backgroundImage: string;
  children: ReactNode;
  overlayOpacity?: number;
  minHeight?: string;
  className?: string;
  contentClassName?: string;
  id?: string;
}

export function PinnedSection({
  backgroundImage,
  children,
  overlayOpacity = 0.6,
  minHeight = '100vh',
  className = '',
  contentClassName = '',
  id,
}: PinnedSectionProps) {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section
      id={id}
      ref={ref}
      className={`relative overflow-hidden ${className}`}
      style={{ minHeight }}
    >
      {/* Fixed Background - Creates Parallax Effect */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          willChange: 'transform',
        }}
      />

      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black"
        style={{ opacity: overlayOpacity }}
      />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className={`relative z-10 h-full flex items-center ${contentClassName}`}
        style={{ minHeight }}
      >
        {children}
      </motion.div>
    </section>
  );
}

// Alternative version with scroll-triggered parallax using Framer Motion
interface ParallaxSectionProps {
  backgroundImage: string;
  children: ReactNode;
  overlayOpacity?: number;
  className?: string;
  contentClassName?: string;
  parallaxSpeed?: number;
  id?: string;
}

export function ParallaxSection({
  backgroundImage,
  children,
  overlayOpacity = 0.6,
  className = '',
  contentClassName = '',
  id,
}: ParallaxSectionProps) {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section
      id={id}
      ref={ref}
      className={`relative min-h-screen overflow-hidden ${className}`}
    >
      {/* Fixed Background for Parallax */}
      <div
        className="absolute inset-0 w-full h-[120%] -top-[10%]"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      />

      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black"
        style={{ opacity: overlayOpacity }}
      />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : {}}
        transition={{ duration: 1, ease: 'easeOut' }}
        className={`relative z-10 min-h-screen flex items-center ${contentClassName}`}
      >
        {children}
      </motion.div>
    </section>
  );
}

// Full-bleed hero with pinned background
interface PinnedHeroProps {
  backgroundImage: string;
  title: string;
  titleSo?: string;
  subtitle?: string;
  subtitleSo?: string;
  overlayOpacity?: number;
  showScrollIndicator?: boolean;
  id?: string;
}

export function PinnedHero({
  backgroundImage,
  title,
  subtitle,
  overlayOpacity = 0.5,
  showScrollIndicator = true,
  id,
}: PinnedHeroProps) {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section
      id={id}
      ref={ref}
      className="relative h-screen overflow-hidden"
    >
      {/* Fixed Background */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      />

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"
        style={{ opacity: overlayOpacity }}
      />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
          >
            {title}
          </motion.h1>
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto"
            >
              {subtitle}
            </motion.p>
          )}
        </div>
      </div>

      {/* Scroll Indicator */}
      {showScrollIndicator && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2"
          >
            <motion.div className="w-1.5 h-1.5 bg-white rounded-full" />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
