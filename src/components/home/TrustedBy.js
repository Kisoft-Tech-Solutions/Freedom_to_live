"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import Image from "next/image";

export default function TrustedBy() {
  // Ref for intersection observer
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 40 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 12,
        duration: 0.8,
      },
    },
    hover: {
      scale: 1.08,
      y: -12,
      rotateZ: 1.5,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 20,
        duration: 1,
      },
    },
  };

  const companies = [
    { name: "ABC Corp", image: "/images/abc-logo.png" },
    { name: "XYZ Industries", image: "/images/xyz-logo.png" },
    { name: "DEF Group", image: "/images/def-logo.png" },
    { name: "GHI Solutions", image: "/images/ghi-logo.png" },
    { name: "JKL Technologies", image: "/images/jkl-logo.png" },
    { name: "MNO Partners", image: "/images/mno-logo.png" },
    { name: "PQR Ventures", image: "/images/pqr-logo.png" },
    { name: "STU Global", image: "/images/stu-logo.png" },
    { name: "VWX Systems", image: "/images/vwx-logo.png" },
    { name: "YZA Network", image: "/images/yza-logo.png" },
  ];

  return (
    <main className="bg-gradient-to-b from-[#0B1340] to-[#1A2238] min-h-screen flex items-center justify-center relative">
      {/* Background animated elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-[#BF9B30]/5"
            style={{
              width: (i + 1) * 100,
              height: (i + 1) * 100,
              left: `${(i * 15) % 100}%`,
              top: `${(i * 20) % 100}%`,
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.15, 0.1],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <section className="py-24 w-full relative z-10" ref={sectionRef}> 
        <div className="max-w-7xl mx-auto px-8"> 
          <motion.div
            variants={titleVariants}
            initial="hidden"
            animate={controls}
            className="text-center mb-24"
          >
            {/* Decorative line */}
            <motion.div 
              className="h-[3px] w-20 bg-gradient-to-r from-transparent via-[#BF9B30] to-transparent mx-auto mb-8"
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 80, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            />
            
            <motion.h3
              className="text-5xl md:text-6xl font-extrabold text-white mb-6 relative"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-300 to-white">
                Trusted By Leading Companies
              </span>
              <motion.span
                className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-transparent via-[#BF9B30] to-transparent"
                initial={{ width: 0 }}
                animate={{ width: "50%" }}
                transition={{ delay: 0.6, duration: 0.8 }}
              />
            </motion.h3>
            
            <motion.p
              className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              Join the growing list of organizations that trust our expertise to deliver exceptional results
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12 items-center"
          >
            {companies.map((company, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover="hover"
                whileTap={{ scale: 0.95 }}
                className="group flex flex-col items-center justify-center bg-gradient-to-br from-[#1A2238] to-[#0B1340] p-8 rounded-xl border border-[#BF9B30]/10 hover:border-[#BF9B30] relative overflow-hidden"
                style={{
                  boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                }}
              >
                {/* Gradient Overlay on Hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#BF9B30]/0 via-[#BF9B30]/10 to-[#BF9B30]/0 opacity-0 group-hover:opacity-100"
                  animate={{
                    backgroundPosition: ["200% 0", "-200% 0"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />

                {/* Pulsing ring effect on hover */}
                <motion.div 
                  className="absolute inset-0 rounded-xl border-2 border-[#BF9B30]/0 group-hover:border-[#BF9B30]/30 opacity-0 group-hover:opacity-100"
                  initial={{ scale: 0.8 }}
                  whileHover={{ 
                    scale: [0.8, 1.08, 1], 
                    opacity: [0, 0.5, 0],
                    transition: { duration: 1.5, repeat: Infinity }
                  }}
                />

                <div className="relative w-28 h-20 mb-6">
                  <Image
                    src={company.image}
                    alt={company.name}
                    fill
                    className="object-contain relative z-10 group-hover:brightness-110 transition-all duration-300"
                  />
                </div>

                <p className="text-gray-300 text-sm font-medium group-hover:text-[#BF9B30] transition-colors duration-300">
                  {company.name}
                </p>

                {/* Bottom border animation */}
                <motion.div 
                  className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-[#BF9B30]/0 via-[#BF9B30] to-[#BF9B30]/0 w-full"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.4 }}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Call to action */}
          <motion.div 
            className="mt-20 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "#D4AF37" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-[#BF9B30] text-[#0B1340] rounded-full font-semibold transition-all duration-300 shadow-lg"
            >
              Become Our Partner
            </motion.button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}