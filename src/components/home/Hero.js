"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import BlurText from '../style/BlurText';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background remains the same */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <Image
          src="/hero.jpg"
          alt="Freedom to Live Investment Background"
          fill
          className="object-cover"
          priority
        />
        <motion.div 
          className="absolute inset-0"
          animate={{ 
            background: [
              "radial-gradient(circle at 20% 50%, rgba(191, 155, 48, 0.15) 0%, transparent 70%), linear-gradient(to bottom, rgba(11, 19, 64, 0.8), rgba(11, 19, 64, 0.95))",
              "radial-gradient(circle at 80% 50%, rgba(191, 155, 48, 0.15) 0%, transparent 70%), linear-gradient(to bottom, rgba(11, 19, 64, 0.8), rgba(11, 19, 64, 0.95))"
            ]
          }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
        />
        <div className="absolute inset-0 backdrop-blur-[2px]" />
      </motion.div>

      {/* Updated Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div 
          className="max-w-4xl md:pl-0 pl-4" // Added 
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
            <span className="text-[#BF9B30] text-xl font-medium tracking-wider block">Welcome to</span>
            
            {/* BlurText Component for Freedom to Live */}
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
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <motion.button 
              className="bg-[#BF9B30] text-[#0B1340] px-10 py-5 rounded-full font-semibold text-lg hover:bg-[#D4AF37] transition-all duration-300 shadow-lg hover:shadow-[#BF9B30]/20 hover:shadow-2xl backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Journey
            </motion.button>
            <motion.button 
              className="border-2 border-[#BF9B30] text-[#BF9B30] px-10 py-5 rounded-full font-semibold text-lg hover:bg-[#BF9B30]/10 transition-all duration-300 backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Services
            </motion.button>
          </motion.div>
        </motion.div> 
      </div>
    </section>
  );
}