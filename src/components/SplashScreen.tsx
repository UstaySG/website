import React from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  React.useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 3000); // 3 seconds total
    return () => clearTimeout(timer);
  }, [onComplete]);

  const containerVariants = {
    animate: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  // Diagonal slide-in from bottom-left at roughly 45 degrees
  const itemVariants = {
    initial: { opacity: 0, x: -60, y: 60 },
    animate: { 
      opacity: 1, 
      x: 0, 
      y: 0, 
      transition: { 
        duration: 1.4, 
        ease: [0.16, 1, 0.3, 1] 
      } 
    }
  };

  return (
    <motion.div 
      className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center p-6 text-white overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1, ease: "easeInOut" } }}
    >
      {/* Background subtle depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,#111_0%,#000_100%)]" />
      
      <motion.div 
        variants={containerVariants}
        initial="initial"
        animate="animate"
        className="relative z-10 flex flex-col items-center w-full max-w-6xl space-y-16 md:space-y-20"
      >
        {/* Row 1: UStay */}
        <motion.h1 
          variants={itemVariants}
          className="text-6xl md:text-8xl font-serif font-bold tracking-tighter leading-none text-[#E5D5C0] mb-8 md:mb-12"
        >
          UStay
        </motion.h1>

        {/* Row 2: SINGAPORE'S FUTURE CONCIERGE */}
        <motion.p 
          variants={itemVariants}
          className="text-[10px] md:text-xs tracking-[0.6em] uppercase font-bold text-[#8E8E93]"
        >
          SINGAPORE'S FUTURE CONCIERGE
        </motion.p>

        {/* Row 3: Furnish your home */}
        <motion.h2 
          variants={itemVariants}
          className="text-3xl md:text-5xl font-serif italic text-white"
        >
          Furnish your home
        </motion.h2>

        {/* Row 4: beautifully, cost-effectively */}
        <motion.p 
          variants={itemVariants}
          className="text-lg md:text-xl font-light tracking-wide text-[#A7A7A7]"
        >
          beautifully, cost-effectively
        </motion.p>

        {/* Row 5: Factory-direct · Design to Delivery */}
        <motion.div 
          variants={itemVariants}
          className="flex items-center gap-4 md:gap-8 py-4 border-y border-white/5 w-full justify-center text-[#C5A059]"
        >
          <span className="text-xl md:text-3xl font-serif font-bold">Factory-direct</span>
          <span className="text-zinc-700 text-2xl font-light">·</span>
          <span className="text-xl md:text-3xl font-serif font-bold">Design to Delivery</span>
        </motion.div>

        {/* Row 6: Stats Grid */}
        <div className="grid-1-3 flex flex-row items-start justify-center gap-6 md:gap-24 w-full pt-4">
          {[
            { num: "50%", label: "vs LOCAL SHOWROOM" },
            { num: "100%", label: "END-TO-END" },
            { num: "0", label: "OVERSEAS HASSLE" }
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="flex flex-col items-center gap-2 flex-1"
            >
              <span className="text-2xl md:text-4xl font-serif font-bold text-[#D1D1D1]">{item.num}</span>
              <span className="text-[8px] md:text-[10px] tracking-[0.1em] md:tracking-[0.2em] uppercase font-bold text-[#636366] text-center">
                {item.label}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Progress Bar */}
      <motion.div 
        className="absolute bottom-0 left-0 h-1 bg-zinc-800 w-full"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 3, ease: "linear" }}
        style={{ originX: 0 }}
      >
        <motion.div 
          className="h-full bg-white w-full"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 3, ease: "linear" }}
          style={{ originX: 0 }}
        />
      </motion.div>
    </motion.div>
  );
};

export default SplashScreen;
