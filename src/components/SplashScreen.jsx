import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';

const SplashScreen = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Logo animation sequence
    const tl = gsap.timeline({
      onComplete: () => {
        setTimeout(() => {
          setIsVisible(false);
          setTimeout(() => onComplete(), 500);
        }, 1000);
      }
    });

    tl.fromTo('.splash-logo', 
      { 
        scale: 0.5, 
        opacity: 0, 
        rotationY: 180 
      },
      { 
        scale: 1, 
        opacity: 1, 
        rotationY: 0, 
        duration: 1.5, 
        ease: 'power3.out' 
      }
    )
    .fromTo('.splash-text', 
      { 
        y: 50, 
        opacity: 0 
      },
      { 
        y: 0, 
        opacity: 1, 
        duration: 1, 
        ease: 'power2.out' 
      }, '-=0.5'
    )
    .fromTo('.splash-tagline', 
      { 
        y: 30, 
        opacity: 0 
      },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.8, 
        ease: 'power2.out' 
      }, '-=0.3'
    )
    .fromTo('.loading-dots', 
      { 
        opacity: 0 
      },
      { 
        opacity: 1, 
        duration: 0.5 
      }, '-=0.2'
    );

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-amber-50 via-white to-amber-100 dark:from-gray-900 dark:via-gray-800 dark:to-amber-900"
        >
          <div className="text-center relative">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-amber-200 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-amber-300 rounded-full opacity-30 animate-pulse delay-1000"></div>
              <div className="absolute bottom-1/4 left-1/2 w-40 h-40 bg-amber-100 rounded-full opacity-15 animate-pulse delay-500"></div>
            </div>

            {/* Logo */}
            <div className="splash-logo mb-8">
              <div className="w-32 h-32 mx-auto bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center shadow-2xl">
                <div className="text-white text-4xl font-bold">HI</div>
              </div>
            </div>

            {/* Company Name */}
            <motion.h1 
              className="splash-text text-4xl md:text-6xl font-bold bg-gradient-to-r from-amber-600 via-amber-500 to-amber-700 bg-clip-text text-transparent mb-4"
            >
              Harsha Interiors
            </motion.h1>

            {/* Tagline */}
            <motion.p 
              className="splash-tagline text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-md mx-auto"
            >
              Crafting Dreams Into Reality
            </motion.p>

            {/* Loading Dots */}
            <div className="loading-dots flex justify-center space-x-2">
              <div className="w-3 h-3 bg-amber-500 rounded-full animate-bounce"></div>
              <div className="w-3 h-3 bg-amber-500 rounded-full animate-bounce delay-100"></div>
              <div className="w-3 h-3 bg-amber-500 rounded-full animate-bounce delay-200"></div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-10 -left-10 w-20 h-20 border-4 border-amber-200 rounded-full animate-spin-slow opacity-50"></div>
            <div className="absolute -bottom-10 -right-10 w-16 h-16 border-4 border-amber-300 rounded-full animate-spin-slow opacity-60 delay-1000"></div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;
