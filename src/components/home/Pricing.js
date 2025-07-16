"use client";

import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

export default function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  const controls = useAnimation();
  
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const plans = [
    {
      name: "BRONZE PLAN",
      duration: "FOR 3 YEAR",
      roi: "10% ROI",
      features: [
        "Basic Investment Advisory",
        "Monthly Portfolio Review",
        "Email Support",
        "Basic Market Reports"
      ],
      color: "from-amber-700/20 to-amber-600/10"
    },
    {
      name: "SILVER PLAN",
      duration: "FOR 5 YEAR",
      roi: "30% ROI",
      features: [
        "Advanced Investment Strategy",
        "Quarterly Portfolio Review",
        "Priority Support",
        "Detailed Market Analysis"
      ],
      color: "from-gray-400/20 to-gray-500/10"
    },
    {
      name: "GOLD PLAN",
      duration: "FOR 10 YEAR",
      roi: "50% ROI",
      features: [
        "Premium Investment Strategy",
        "Monthly Portfolio Review",
        "24/7 Priority Support",
        "Complete Market Analysis",
        "Tax Planning Support"
      ],
      popular: true,
      color: "from-[#BF9B30]/30 to-[#D4AF37]/20",
      highlight: true
    },
    {
      name: "PRO PLAN",
      duration: "FOR 15 YEAR+",
      roi: "120% ROI",
      features: [
        "Custom Investment Strategy",
        "Weekly Portfolio Review",
        "Dedicated Account Manager",
        "Advanced Analytics Access",
        "Full Tax Planning"
      ],
      color: "from-indigo-600/20 to-indigo-800/10"
    }
  ];

  const headingVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0 },
    visible: index => ({
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: index * 0.2,
        ease: "easeOut"
      }
    })
  };

  const featureVariants = {
    hidden: { opacity: 0 },
    visible: index => ({
      opacity: 1,
      transition: {
        duration: 0.4,
        delay: 0.3 + index * 0.1,
        ease: "easeOut"
      }
    })
  };

  return (
    <section ref={ref} className="bg-gradient-to-b from-[#0B1340] to-[#0A1030] py-16 px-4 md:py-24 md:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <motion.div
          variants={headingVariants}
          initial="hidden"
          animate={controls}
          className="text-center mb-12 md:mb-20"
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-4 md:mb-6"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-white">Choose Your </span>
            <span className="text-[#BF9B30]">Investment Plan</span>
          </motion.h2>
          
          <motion.p 
            className="text-gray-300 max-w-2xl mx-auto text-base md:text-lg"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Whether you are an experienced investor or just starting, our investment plans are designed to maximize your financial growth.
          </motion.p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate={controls}
              whileHover={{ 
                scale: 1.03, 
                boxShadow: plan.highlight 
                  ? '0 10px 25px -5px rgba(191, 155, 48, 0.4), 0 8px 10px -6px rgba(191, 155, 48, 0.2)'
                  : '0 10px 25px -5px rgba(0, 0, 0, 0.3), 0 8px 10px -6px rgba(0, 0, 0, 0.2)'
              }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                duration: 0.2
              }}
              className={`relative rounded-xl overflow-hidden ${
                plan.highlight 
                  ? `border-2 border-[#BF9B30]/40 bg-gradient-to-b ${plan.color}`
                  : `border border-[#BF9B30]/10 bg-gradient-to-b ${plan.color}`
              }`}
              style={{
                boxShadow: plan.highlight 
                  ? `0 4px 15px -3px rgba(191, 155, 48, 0.3)` 
                  : `0 4px 15px -5px rgba(0, 0, 0, 0.3)`
              }}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -right-12 top-7 bg-[#BF9B30] text-[#0B1340] px-10 py-1 text-sm font-bold transform rotate-45 shadow-lg z-10">
                  POPULAR
                </div>
              )}
              
              {/* Card Content */}
              <div className="p-6 md:p-8">
                {/* Plan Name */}
                <h3 className="text-[#BF9B30] text-xl font-bold mb-2">
                  {plan.name}
                </h3>
                
                {/* Plan Duration */}
                <p className="text-white/80 text-sm mb-4">
                  {plan.duration}
                </p>
                
                {/* ROI */}
                <div className="text-3xl md:text-4xl font-bold text-white mb-6 md:mb-8">
                  {plan.roi}
                  <div className="mt-1 h-[2px] bg-[#BF9B30]/50 w-16" />
                </div>
                
                {/* Features List */}
                <ul className="space-y-4 mb-6 md:mb-8">
                  {plan.features.map((feature, idx) => (
                    <motion.li
                      key={idx}
                      custom={idx}
                      variants={featureVariants}
                      initial="hidden"
                      animate={controls}
                      className="flex items-center text-gray-300"
                    >
                      <span className="flex items-center justify-center w-5 h-5 rounded-full mr-3 text-[#BF9B30] bg-[#BF9B30]/10">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      {feature}
                    </motion.li>
                  ))}
                </ul>
                
                {/* Button */}
                <motion.button
                  whileHover={{ 
                    backgroundColor: plan.highlight ? "#D4AF37" : "#BF9B30",
                    scale: 1.02
                  }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-3 px-6 ${
                    plan.highlight
                      ? "bg-[#BF9B30] text-[#0B1340]" 
                      : "bg-[#BF9B30]/80 text-[#0B1340]"
                  } rounded-full font-semibold transition-colors duration-300`}
                >
                  Get Started
                </motion.button>
              </div>
              
              {/* Hover glow effect - only visible on larger screens */}
              <div className="hidden md:block">
                <motion.div 
                  className="absolute inset-0 opacity-0 bg-gradient-to-b from-transparent to-[#BF9B30]/20 pointer-events-none"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Additional Info */}
        <div className="mt-12 md:mt-16 text-center">
          <p className="text-gray-400 text-sm">
            All plans include our money-back guarantee. Not sure which plan to choose? <br className="hidden md:block" />
            <a href="#contact" className="text-[#BF9B30] font-medium underline hover:text-[#D4AF37] transition-colors">
              Contact our team for a personalized recommendation.
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}