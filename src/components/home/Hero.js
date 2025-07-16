"use client";

import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import dynamic from 'next/dynamic';
import BlurText from '../style/BlurText';

// Create a separate component for particles
const FloatingParticles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-[#BF9B30]/30"
          style={{
            width: Math.random() * 4 + 2,
            height: Math.random() * 4 + 2,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -(20 + Math.random() * 30), 0],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 3 + Math.random() * 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 5,
          }}
        />
      ))}
    </div>
  );
};

// Create client-only version of FloatingParticles
const ClientOnlyParticles = dynamic(
  () => Promise.resolve(FloatingParticles),
  { ssr: false }
);

export default function Hero() {
  // Mouse parallax effect
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const backgroundRef = useRef(null);
  const controls = useAnimation();

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const moveX = clientX / window.innerWidth - 0.5;
      const moveY = clientY / window.innerHeight - 0.5;
      setMousePosition({ x: moveX, y: moveY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    controls.start({
      x: mousePosition.x * -15,
      y: mousePosition.y * -15,
      transition: { type: "tween", ease: "easeOut", duration: 0.5 }
    });
  }, [mousePosition, controls]);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Enhanced background with parallax effect */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <motion.div 
          ref={backgroundRef}
          animate={controls}
          className="absolute inset-0 scale-[1.03]" // Slightly larger to allow movement without edges showing
        >
          <Image
            src="/hero.jpg"
            alt="Freedom to Live Investment Background"
            fill
            className="object-cover"
            priority
            quality={90}
          />
        </motion.div>
        
        <motion.div 
          className="absolute inset-0"
          animate={{ 
            background: [
              "radial-gradient(circle at 20% 50%, rgba(191, 155, 48, 0.18) 0%, transparent 70%), linear-gradient(to bottom, rgba(11, 19, 64, 0.8), rgba(11, 19, 64, 0.95))",
              "radial-gradient(circle at 80% 50%, rgba(191, 155, 48, 0.18) 0%, transparent 70%), linear-gradient(to bottom, rgba(11, 19, 64, 0.8), rgba(11, 19, 64, 0.95))"
            ]
          }}
          transition={{ duration: 12, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        />
        
        {/* Enhanced blur effect */}
        <div className="absolute inset-0 backdrop-blur-[2px]" />
        
        {/* Subtle floating particles */}
        <ClientOnlyParticles />
      </motion.div>

      {/* Enhanced Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div 
          className="max-w-4xl md:pl-0 pl-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            className="mb-8 md:-ml-1"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Enhanced welcome text with animated underline */}
            <motion.div className="relative inline-block">
              <span className="text-[#BF9B30] text-xl font-medium tracking-wider block">Welcome to</span>
              <motion.div 
                className="absolute bottom-0 left-0 h-[1px] bg-[#BF9B30]/70"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
              />
            </motion.div>
            
            {/* Enhanced BlurText */}
            <BlurText
              text="Freedom to Live"
              delay={200}
              className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mt-2 md:-ml-2"
              animateBy="words"
              direction="top"
              stepDuration={0.35}
            />
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 leading-tight md:-ml-1" 
          >
            <motion.span 
              className="bg-gradient-to-r from-[#BF9B30] to-[#D4AF37] bg-clip-text text-transparent"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Your Trusted Investment Partner
            </motion.span>
          </motion.h2>
          
          {/* Enhanced paragraph with character staggering */}
          <motion.p 
            className="text-xl text-gray-300 mb-12 leading-relaxed max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            At Freedom to Live, we transform your financial aspirations into reality. 
            Our expert team provides personalized investment strategies that secure your 
            future and create lasting wealth for generations.
          </motion.p>
          
          {/* Enhanced buttons with shine effect */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <motion.button 
              className="group bg-[#BF9B30] text-[#0B1340] px-10 py-5 rounded-full font-semibold text-lg hover:bg-[#D4AF37] transition-all duration-300 shadow-lg hover:shadow-[#BF9B30]/20 hover:shadow-2xl backdrop-blur-sm relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Start Your Journey</span>
              <motion.div 
                className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-white/20 skew-x-12 transition-transform duration-900 ease-in-out"
                transition={{ duration: 0.8 }}
              />
            </motion.button>
            
            <motion.button 
              className="group border-2 border-[#BF9B30] text-[#BF9B30] px-10 py-5 rounded-full font-semibold text-lg hover:bg-[#BF9B30]/10 transition-all duration-300 backdrop-blur-sm relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Explore Services</span>
              <motion.div 
                className="absolute bottom-0 left-0 right-0 h-0 bg-[#BF9B30]/10 group-hover:h-full transition-all duration-300 ease-out"
              />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}