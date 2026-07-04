import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface WelcomeScreenProps {
  onComplete: () => void;
}

export default function WelcomeScreen({ onComplete }: WelcomeScreenProps) {
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false);
      setTimeout(onComplete, 500);
    }, 2500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence mode="wait" onExitComplete={onComplete}>
      {showWelcome && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 0.5 }
          }}
          className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)"
          }}
        >
          {/* Floating Particles - CSS animations بدل framer-motion */}
          <div className="absolute inset-0 overflow-hidden particles-container">
            {[...Array(15)].map((_, i) => (
              <div
                key={`particle-${i}`}
                className="absolute rounded-full bg-white/40 particle"
                style={{
                  width: `${Math.random() * 3 + 1}px`,
                  height: `${Math.random() * 3 + 1}px`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`,
                  animationDuration: `${2 + Math.random() * 2}s`
                }}
              />
            ))}
          </div>

          {/* Geometric Shapes - CSS animations */}
          <div className="absolute inset-0 shapes-container">
            {[...Array(5)].map((_, i) => (
              <div
                key={`shape-${i}`}
                className={`absolute shape shape-${i % 3}`}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`,
                  animationDuration: `${3 + Math.random() * 2}s`
                }}
              />
            ))}
          </div>

          {/* Glowing Orbs - framer-motion بس */}
          <motion.div 
            className="absolute top-20 left-20 w-64 h-64 rounded-full blur-3xl orb-1"
            style={{ 
              backgroundColor: 'rgba(59, 130, 246, 0.2)',
            }}
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          
          <motion.div 
            className="absolute bottom-20 right-20 w-80 h-80 rounded-full blur-3xl orb-2"
            style={{ 
              backgroundColor: 'rgba(168, 85, 247, 0.2)',
            }}
            animate={{ 
              scale: [1.2, 0.9, 1.2],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Main Content */}
          <div className="relative z-10 text-center text-white px-6">
            {/* Logo */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ 
                type: "spring",
                stiffness: 100,
                damping: 15,
                duration: 0.8
              }}
              className="mb-8 flex justify-center"
            >
              <div className="relative">
                <motion.img 
                  src="https://i.pinimg.com/400x/1e/e4/78/1ee4788aeee1f2426ea5e7fe73f811e1.jpg"
                  alt="شعار سليمان الحويطي"
                  className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover shadow-2xl"
                  style={{
                    border: '3px solid rgba(255, 255, 255, 0.5)',
                    boxShadow: '0 0 40px rgba(59, 130, 246, 0.6)'
                  }}
                />
                
                {/* Rotating Ring */}
                <motion.div 
                  className="absolute inset-0 border-2 border-dashed rounded-full"
                  style={{ borderColor: 'rgba(255, 255, 255, 0.4)' }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                />
              </div>
            </motion.div>

            {/* Text Content */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="space-y-4"
            >
              <motion.h1 
                className="text-4xl md:text-6xl font-bold leading-tight text-white"
                style={{
                  textShadow: '0 0 20px rgba(255, 255, 255, 0.6)',
                  fontWeight: '900'
                }}
              >
                مرحباً بكم في
              </motion.h1>

              <motion.h2 
                className="text-3xl md:text-5xl font-bold leading-tight"
                style={{
                  color: '#fbbf24',
                  textShadow: '0 0 20px rgba(251, 191, 36, 0.6)',
                  fontWeight: '800'
                }}
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ 
                  delay: 0.7,
                  type: "spring",
                  stiffness: 150,
                  damping: 10
                }}
              >
                مؤسسة سليمان الحويطي
              </motion.h2>

              <motion.p 
                className="text-xl md:text-2xl font-semibold"
                style={{
                  color: '#93c5fd',
                  textShadow: '0 0 15px rgba(147, 197, 253, 0.6)',
                  fontWeight: '600'
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.5 }}
              >
                للتخليص الجمركي والترانزيت
              </motion.p>
            </motion.div>

            {/* Loading Dots */}
            <motion.div 
              className="mt-12 flex justify-center gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 1.2, duration: 0.3 }}
            >
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-3 h-3 rounded-full bg-blue-400"
                  animate={{ 
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{ 
                    duration: 1,
                    repeat: Infinity,
                    delay: i * 0.2
                  }}
                />
              ))}
            </motion.div>

            {/* Skip Button */}
            <motion.button
              onClick={() => {
                setShowWelcome(false);
                setTimeout(onComplete, 300);
              }}
              className="absolute bottom-6 right-6 text-white/70 hover:text-white text-sm font-semibold transition-all duration-200 px-4 py-2 rounded-full border border-white/30 hover:border-white/60 hover:bg-white/10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 1.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              تخطي ←
            </motion.button>
          </div>

          {/* CSS Animations - أخف بكتير من framer-motion */}
          <style>{`
            @keyframes particle-float {
              0% {
                transform: translateY(0) scale(0);
                opacity: 0;
              }
              50% {
                opacity: 0.6;
                transform: translateY(-20px) scale(1);
              }
              100% {
                transform: translateY(-40px) scale(0);
                opacity: 0;
              }
            }

            @keyframes shape-rotate {
              0% {
                transform: rotate(0deg) scale(0.8);
                opacity: 0.3;
              }
              50% {
                transform: rotate(180deg) scale(1.2);
                opacity: 0.8;
              }
              100% {
                transform: rotate(360deg) scale(0.8);
                opacity: 0.3;
              }
            }

            .particle {
              animation: particle-float 3s ease-in-out infinite;
              will-change: transform, opacity;
            }

            .shape {
              animation: shape-rotate 4s ease-in-out infinite;
              will-change: transform, opacity;
            }

            .shape-0 {
              width: 16px;
              height: 16px;
              border: 1px solid rgba(255, 255, 255, 0.2);
              transform: rotate(45deg);
            }

            .shape-1 {
              width: 12px;
              height: 12px;
              background: rgba(147, 197, 253, 0.3);
              border-radius: 50%;
            }

            .shape-2 {
              width: 24px;
              height: 8px;
              background: rgba(192, 132, 252, 0.3);
              border-radius: 4px;
            }

            /* احترام تفضيلات المستخدم */
            @media (prefers-reduced-motion: reduce) {
              .particle,
              .shape,
              .orb-1,
              .orb-2 {
                animation: none !important;
              }
            }
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
