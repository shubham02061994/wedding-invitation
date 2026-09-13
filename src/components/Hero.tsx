import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import templeArtworkUrl from '../assets/temple.png';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.8], [1, 1.8]);
  const leftDoorX = useTransform(scrollYProgress, [0.1, 0.7], ["0%", "-100%"]);
  const rightDoorX = useTransform(scrollYProgress, [0.1, 0.7], ["0%", "100%"]);
  const glowOpacity = useTransform(scrollYProgress, [0.2, 0.6], [0, 1]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const bgFade = useTransform(scrollYProgress, [0.5, 0.9], [1, 0]);

  if (shouldReduceMotion) {
    return (
      <section className="relative h-screen w-full bg-sky-200 flex flex-col items-center justify-between overflow-hidden pt-12 pb-8">
        <div className="absolute inset-0 bg-gradient-to-b from-sky-300 via-sky-100 to-[#F8F0E3] opacity-90" />
        <div className="relative z-10 text-center px-4 mt-6">
          <p className="text-maroon text-xs sm:text-sm tracking-[0.3em] uppercase mb-2 font-medium">A celebration of love</p>
          <h1 className="font-serif text-5xl sm:text-7xl text-maroon-dark tracking-wide mb-3">Ranbir weds Alia</h1>
          <p className="text-gold-muted text-sm sm:text-base tracking-[0.2em] uppercase font-serif">24 November 2026</p>
        </div>
        <div className="relative z-10 w-full max-w-xl px-4 flex justify-center">
          <img src={templeArtworkUrl} alt="South Indian temple gopuram" className="max-h-[50vh] object-contain drop-shadow-2xl" />
        </div>
      </section>
    );
  }

  return (
    <div ref={containerRef} className="relative h-[220vh] w-full">
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-sky-300 flex flex-col justify-between pt-12 pb-8">
        <motion.div style={{ opacity: bgFade }} className="absolute inset-0 bg-gradient-to-b from-sky-300 via-sky-100 to-ivory" />
        <motion.div style={{ opacity: glowOpacity }} className="absolute inset-0 bg-gradient-to-t from-amber-200 via-orange-100 to-transparent pointer-events-none z-10" />

        <motion.div style={{ opacity: contentOpacity }} className="relative z-20 text-center px-4">
          <p className="text-maroon text-xs sm:text-sm tracking-[0.3em] uppercase mb-2 font-medium">A celebration of love</p>
          <h1 className="font-serif text-5xl sm:text-7xl text-maroon-dark tracking-wide mb-3">Ranbir weds Alia</h1>
          <p className="text-gold-muted text-sm sm:text-base tracking-[0.2em] uppercase font-serif">24 November 2026</p>
        </motion.div>

        <div className="relative z-20 w-full flex-1 flex items-end justify-center overflow-hidden px-4">
          <motion.div style={{ scale }} className="relative w-full max-w-lg h-full flex items-end justify-center">
            <motion.div style={{ x: leftDoorX }} className="absolute inset-0 w-1/2 overflow-hidden z-20">
              <img src={templeArtworkUrl} alt="Temple Gopuram Left" className="absolute bottom-0 left-0 max-h-[60vh] sm:max-h-[65vh] w-auto max-w-none object-contain drop-shadow-2xl" />
            </motion.div>
            <motion.div style={{ x: rightDoorX }} className="absolute inset-0 w-1/2 left-1/2 overflow-hidden z-20">
              <img src={templeArtworkUrl} alt="Temple Gopuram Right" className="absolute bottom-0 right-0 max-h-[60vh] sm:max-h-[65vh] w-auto max-w-none object-contain drop-shadow-2xl" />
            </motion.div>
            <img src={templeArtworkUrl} alt="Temple Gopuram" className="max-h-[60vh] sm:max-h-[65vh] object-contain drop-shadow-2xl relative z-10 opacity-90" />
          </motion.div>
        </div>

        <motion.div style={{ opacity: contentOpacity }} className="relative z-20 flex flex-col items-center justify-center mt-4">
          <span className="text-xs uppercase tracking-[0.25em] text-maroon mb-1 font-serif">Scroll to explore</span>
          <ChevronDown className="w-5 h-5 text-maroon animate-bounce" />
        </motion.div>
      </div>
    </div>
  );
};