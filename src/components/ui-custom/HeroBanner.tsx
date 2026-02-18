import { motion } from 'framer-motion';
import { WaveDivider } from './WaveDivider';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/useLanguage';
import { Volume2, VolumeX } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

interface HeroBannerProps {
  title: string;
  titleSo: string;
  subtitle: string;
  subtitleSo: string;
  ctaPrimary?: string;
  ctaPrimarySo?: string;
  ctaSecondary?: string;
  ctaSecondarySo?: string;
  backgroundImage?: string;
  backgroundVideo?: string;
  videoPoster?: string;
  onCtaPrimaryClick?: () => void;
  onCtaSecondaryClick?: () => void;
  showWave?: boolean;
  waveColor?: string;
  isVideo?: boolean;
}

export function HeroBanner({
  title,
  titleSo,
  subtitle,
  subtitleSo,
  ctaPrimary,
  ctaPrimarySo,
  ctaSecondary,
  ctaSecondarySo,
  backgroundImage,
  backgroundVideo,
  onCtaPrimaryClick,
  onCtaSecondaryClick,
  showWave = true,
  waveColor = 'fill-white',
  isVideo = false,
}: HeroBannerProps) {
  const { t } = useLanguage();
  const [isMuted, setIsMuted] = useState(true);
  const [showAudioPrompt, setShowAudioPrompt] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (isVideo && videoRef.current) {
      videoRef.current.muted = isMuted;
    }
  }, [isMuted, isVideo]);

  useEffect(() => {
    if (isVideo) {
      const timer = setTimeout(() => {
        setShowAudioPrompt(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isVideo]);

  const enableAudio = () => {
    setIsMuted(false);
    setShowAudioPrompt(false);
    localStorage.setItem('ablaal-audio-enabled', 'true');
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background */}
      {isVideo && backgroundVideo ? (
        <div className="absolute inset-0 w-full h-full">
          <video
            ref={videoRef}
            src={backgroundVideo}
            autoPlay
            loop
            muted={isMuted}
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Audio Prompt */}
          {showAudioPrompt && (
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              onClick={enableAudio}
              className="absolute bottom-32 left-1/2 -translate-x-1/2 z-30 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full flex items-center gap-2 shadow-lg hover:bg-white transition-colors"
            >
              <Volume2 className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-gray-800">{t('Tap to enable sound', 'Taabo si aad u daarto dhawaaqa')}</span>
            </motion.button>
          )}
          {/* Mute Toggle */}
          <button
            onClick={() => setIsMuted(!isMuted)}
            className="absolute bottom-32 right-8 z-30 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors"
          >
            {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
          </button>
        </div>
      ) : (
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      )}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />

      {/* Content */}
      <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto pt-20">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
        >
          {t(title, titleSo)}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg sm:text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto"
        >
          {t(subtitle, subtitleSo)}
        </motion.p>

        {(ctaPrimary || ctaSecondary) && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            {ctaPrimary && (
              <Button
                onClick={onCtaPrimaryClick}
                size="lg"
                className="rounded-full px-8 py-6 text-lg font-semibold bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl transition-all"
              >
                {t(ctaPrimary, ctaPrimarySo || ctaPrimary)}
              </Button>
            )}
            {ctaSecondary && (
              <Button
                onClick={onCtaSecondaryClick}
                size="lg"
                className="rounded-full px-8 py-6 text-lg font-semibold bg-gold text-navy hover:bg-gold-light border-2 border-gold hover:border-gold-light transition-all shadow-lg hover:shadow-xl"
              >
                {t(ctaSecondary, ctaSecondarySo || ctaSecondary)}
              </Button>
            )}
          </motion.div>
        )}
      </div>

      {/* Wave Divider */}
      {showWave && <WaveDivider position="bottom" color={waveColor} />}
    </section>
  );
}
