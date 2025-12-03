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
      setTimeout(onComplete, 1000); // تقليل الوقت للانتقال السريع
    }, 4000);

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
            transition: { duration: 1, ease: "easeInOut" }
          }}
          className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #0f172a 0%, #1e293b 25%, #334155 50%, #475569 75%, #0f172a 100%)"
          }}
        >
          {/* Floating Particles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(100)].map((_, i) => (
              <motion.div
                key={`particle-${i}`}
                className="absolute rounded-full"
                style={{
                  width: Math.random() * 4 + 2,
                  height: Math.random() * 4 + 2,
                  backgroundColor: `rgba(255, 255, 255, ${Math.random() * 0.8 + 0.2})`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -30, -60, -90],
                  x: [0, Math.random() * 20 - 10, Math.random() * 40 - 20],
                  opacity: [0, 1, 0.8, 0],
                  scale: [0, 1, 1.2, 0]
                }}
                transition={{
                  duration: Math.random() * 3 + 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  ease: "easeOut"
                }}
              />
            ))}
          </div>

          {/* Geometric Shapes */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={`shape-${i}`}
                className="absolute"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  rotate: [0, 360],
                  scale: [0.5, 1.5, 0.5],
                  opacity: [0.2, 0.8, 0.2]
                }}
                transition={{
                  duration: Math.random() * 4 + 3,
                  repeat: Infinity,
                  delay: Math.random() * 2
                }}
              >
                {i % 4 === 0 && (
                  <div className="w-6 h-6 border-2 border-white/30 rotate-45" />
                )}
                {i % 4 === 1 && (
                  <div className="w-4 h-4 bg-blue-300/40 rounded-full" />
                )}
                {i % 4 === 2 && (
                  <div className="w-8 h-2 bg-purple-300/40 rounded-full" />
                )}
                {i % 4 === 3 && (
                  <div className="w-5 h-5 bg-green-300/40" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }} />
                )}
              </motion.div>
            ))}
          </div>

          {/* Glowing Orbs */}
          <motion.div 
            className="absolute top-20 left-20 w-80 h-80 rounded-full blur-3xl"
            style={{ backgroundColor: 'rgba(59, 130, 246, 0.3)' }}
            animate={{ 
              scale: [1, 1.4, 1],
              opacity: [0.3, 0.7, 0.3],
              x: [0, 100, 0],
              y: [0, -50, 0]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          
          <motion.div 
            className="absolute bottom-20 right-20 w-96 h-96 rounded-full blur-3xl"
            style={{ backgroundColor: 'rgba(168, 85, 247, 0.3)' }}
            animate={{ 
              scale: [1.2, 0.8, 1.2],
              opacity: [0.4, 0.8, 0.4],
              x: [0, -80, 0],
              y: [0, 60, 0]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />

          <motion.div 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full blur-3xl"
            style={{ backgroundColor: 'rgba(16, 185, 129, 0.2)' }}
            animate={{ 
              scale: [0.8, 1.6, 0.8],
              opacity: [0.2, 0.6, 0.2],
              rotate: [0, 180, 360]
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
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
                duration: 1.5
              }}
              className="mb-12 flex justify-center"
            >
              <div className="relative">
                <motion.img 
                  src="https://i.pinimg.com/736x/1e/e4/78/1ee4788aeee1f2426ea5e7fe73f811e1.jpg"
                  alt="شعار سليمان الحويطي"
                  className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover shadow-2xl"
                  style={{
                    border: '4px solid rgba(255, 255, 255, 0.5)',
                    boxShadow: '0 0 50px rgba(59, 130, 246, 0.8)'
                  }}
                  animate={{ 
                    boxShadow: [
                      "0 0 30px rgba(59, 130, 246, 0.8)",
                      "0 0 80px rgba(168, 85, 247, 0.8)",
                      "0 0 50px rgba(16, 185, 129, 0.8)",
                      "0 0 30px rgba(59, 130, 246, 0.8)"
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                
                {/* Rotating Rings */}
                <motion.div 
                  className="absolute inset-0 border-4 border-dashed rounded-full"
                  style={{ borderColor: 'rgba(255, 255, 255, 0.6)' }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                />
                
                <motion.div 
                  className="absolute inset-0 border-2 border-dotted rounded-full"
                  style={{ borderColor: 'rgba(59, 130, 246, 0.8)' }}
                  animate={{ rotate: -360 }}
                  transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                />
                
                {/* Pulsing Rings */}
                <motion.div 
                  className="absolute inset-0 border-2 rounded-full"
                  style={{ borderColor: 'rgba(59, 130, 246, 0.6)' }}
                  animate={{ 
                    scale: [1, 1.4, 1],
                    opacity: [1, 0, 1]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
            </motion.div>

            {/* Text Content */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -30, opacity: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="space-y-8"
            >
              <motion.h1 
                className="text-5xl md:text-7xl font-bold leading-tight"
                style={{
                  color: '#ffffff',
                  textShadow: '0 0 20px rgba(255, 255, 255, 0.8), 0 0 40px rgba(59, 130, 246, 0.6)',
                  fontWeight: '900'
                }}
                animate={{ 
                  textShadow: [
                    "0 0 20px rgba(255, 255, 255, 0.8), 0 0 40px rgba(59, 130, 246, 0.6)",
                    "0 0 30px rgba(255, 255, 255, 1), 0 0 60px rgba(168, 85, 247, 0.8)",
                    "0 0 20px rgba(255, 255, 255, 0.8), 0 0 40px rgba(59, 130, 246, 0.6)"
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                مرحباً بكم في
              </motion.h1>

              <motion.h2 
                className="text-4xl md:text-6xl font-bold leading-tight"
                style={{
                  color: '#fbbf24',
                  textShadow: '0 0 30px rgba(251, 191, 36, 0.8), 0 0 60px rgba(251, 191, 36, 0.4)',
                  fontWeight: '800'
                }}
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ 
                  delay: 1.2,
                  type: "spring",
                  stiffness: 150,
                  damping: 10
                }}
              >
                مؤسسة سليمان الحويطي
              </motion.h2>

              <motion.p 
                className="text-2xl md:text-3xl font-semibold"
                style={{
                  color: '#93c5fd',
                  textShadow: '0 0 20px rgba(147, 197, 253, 0.8)',
                  fontWeight: '600'
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.6, duration: 0.8 }}
              >
                للتخليص الجمركي والترانزيت
              </motion.p>
            </motion.div>

            {/* Loading Animation */}
            <motion.div 
              className="mt-16 flex justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 2, duration: 0.5 }}
            >
              <div className="flex space-x-4 space-x-reverse">
                {[0, 1, 2, 3, 4].map((i) => (
                  <motion.div
                    key={i}
                    className="rounded-full"
                    style={{ 
                      width: 16, 
                      height: 16,
                      backgroundColor: ['#3b82f6', '#8b5cf6', '#10b981', '#f59e0b', '#ef4444'][i]
                    }}
                    animate={{ 
                      scale: [1, 2, 1],
                      opacity: [0.4, 1, 0.4],
                      y: [0, -20, 0]
                    }}
                    transition={{ 
                      duration: 1.5,
                      repeat: Infinity,
                      delay: i * 0.2,
                      ease: "easeInOut"
                    }}
                  />
                ))}
              </div>
            </motion.div>

            {/* Skip Button */}
            <motion.button
              onClick={() => {
                setShowWelcome(false);
              }}
              className="absolute bottom-8 right-8 text-white/80 hover:text-white text-lg font-semibold transition-colors duration-300 px-6 py-3 rounded-full border-2 border-white/40 hover:border-white/80 hover:bg-white/10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 2.5 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              style={{
                backdropFilter: 'blur(10px)',
                boxShadow: '0 0 20px rgba(255, 255, 255, 0.3)'
              }}
            >
              تخطي ←
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}