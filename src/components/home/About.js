"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section ref={ref} className="relative bg-[#0B1340] py-24 overflow-hidden">
      {/* Background Animation */}
      <motion.div 
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1.5 }}
        style={{
          background: "radial-gradient(circle at 20% 50%, #BF9B30 0%, transparent 70%)"
        }}
      />

      <motion.div 
        className="max-w-7xl mx-auto px-6 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          variants={itemVariants}
        >
          <span className="text-[#BF9B30] text-sm font-semibold tracking-wider uppercase mb-4 block">
            About Freedom to Live
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Your Partner in </span>
            <span className="text-[#BF9B30]">Financial Growth</span>
          </h2>
        </motion.div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="relative h-[500px] rounded-xl overflow-hidden shadow-2xl"
            initial={{ x: -100, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Image
              src="/logo.jpeg"
              alt="About Us"
              fill
              className="object-cover hover:scale-110 transition-transform duration-700"
            />
            <motion.div 
              className="absolute inset-0 bg-gradient-to-t from-[#0B1340]/80 to-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            />
            <motion.div 
              className="absolute bottom-8 right-8 bg-[#BF9B30] p-8 rounded-xl shadow-lg backdrop-blur-sm"
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ 
                delay: 0.5,
                duration: 0.4,
                type: "spring",
                stiffness: 200
              }}
            >
              <h3 className="text-[#0B1340] text-4xl font-bold">5+</h3>
              <p className="text-[#0B1340] font-medium">Years of Excellence</p>
            </motion.div>
          </motion.div>
          
          <motion.div 
            variants={containerVariants}
            className="backdrop-blur-sm bg-[#0B1340]/50 p-8 rounded-xl border border-[#BF9B30]/10"
          >
            <motion.h3 
              className="text-3xl font-bold mb-6"
              variants={itemVariants}
            >
              <span className="text-[#BF9B30]">Leading the Way</span>
              <span className="text-white"> in Investment Excellence</span>
            </motion.h3>
            
            <motion.p 
              className="text-gray-300 mb-8 leading-relaxed"
              variants={itemVariants}
            >
              With over two decades of experience in investment management, we&apos;ve helped countless clients achieve their financial goals through strategic planning and expert guidance. Our commitment to excellence and innovation drives us to deliver exceptional results for our investors.
            </motion.p>
            
            <motion.ul 
              className="space-y-4 mb-8"
              variants={containerVariants}
            >
              {[
                'Expert Financial Advisory',
                'Personalized Investment Strategies',
                'Wealth Management Solutions',
                'Risk-Managed Portfolios',
                'Global Investment Opportunities'
              ].map((item, index) => (
                <motion.li 
                  key={index} 
                  className="flex items-center text-gray-300 group"
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <motion.span 
                    className="text-[#BF9B30] mr-3 text-lg group-hover:scale-125 transition-transform"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    ✓
                  </motion.span>
                  {item}
                </motion.li>
              ))}
            </motion.ul>
            
            <motion.button 
              className="bg-[#BF9B30] text-[#0B1340] px-8 py-4 rounded-full font-semibold hover:bg-[#D4AF37] transition-all duration-300 shadow-lg hover:shadow-[#BF9B30]/20 hover:shadow-2xl"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More About Us
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}