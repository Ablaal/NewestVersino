import { motion } from 'framer-motion';

interface WaveDividerProps {
  position?: 'top' | 'bottom';
  color?: string;
  className?: string;
}

export function WaveDivider({ position = 'bottom', color = 'fill-white', className = '' }: WaveDividerProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className={`absolute left-0 right-0 w-full overflow-hidden leading-none z-10 ${
        position === 'top' ? 'top-0 rotate-180' : 'bottom-0'
      } ${className}`}
    >
      <svg
        className="relative block w-full h-[60px] md:h-[100px]"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
          className={color}
        />
      </svg>
    </motion.div>
  );
}
