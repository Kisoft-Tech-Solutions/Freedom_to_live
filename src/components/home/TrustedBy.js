"use client";

import { motion } from "framer-motion";

export default function TrustedBy() {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        staggerChildren: 0.3, 
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        duration: 0.6,
      },
    },
    hover: {
      scale: 1.05,
      y: -10,
      rotateZ: 2,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  return (
    <main className="bg-gradient-to-b from-[#0B1340] to-[#1A2238] min-h-screen flex items-center justify-center">
      <section className="py-24"> 
        <div className="max-w-7xl mx-auto px-8"> 
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              type: "spring",
              stiffness: 100,
            }}
            className="text-center mb-20" 
          >
            <motion.h3
              className="text-5xl font-extrabold text-white mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Trusted By Leading Companies
            </motion.h3>
            <motion.p
              className="text-gray-300 text-lg max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Join the growing list of companies that trust our expertise
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 md:grid-cols-5 gap-12 items-center" 
          >
            {[
              { name: "ABC", image: "/images/abc-logo.png" },
              { name: "XYZ", image: "/images/xyz-logo.png" },
              { name: "DEF", image: "/images/def-logo.png" },
              { name: "GHI", image: "/images/ghi-logo.png" },
              { name: "JKL", image: "/images/jkl-logo.png" },
              { name: "MNO", image: "/images/mno-logo.png" },
              { name: "PQR", image: "/images/pqr-logo.png" },
              { name: "STU", image: "/images/stu-logo.png" },
              { name: "VWX", image: "/images/vwx-logo.png" },
              { name: "YZA", image: "/images/yza-logo.png" },
            ].map((company, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover="hover"
                whileTap={{ scale: 0.95 }}
                className="group flex flex-col items-center justify-center bg-gradient-to-br from-[#1A2238] to-[#0B1340] p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#BF9B30]/10 hover:border-[#BF9B30] relative overflow-hidden"
              >
                {/* Gradient Overlay on Hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#BF9B30]/0 via-[#BF9B30]/5 to-[#BF9B30]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  animate={{
                    backgroundPosition: ["200% 0", "-200% 0"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
                <img
                  src={company.image}
                  alt={company.name}
                  className="h-20 object-contain mb-6 relative z-10 group-hover:brightness-110 transition-all duration-300"
                />
                <p className="text-gray-300 text-sm font-medium group-hover:text-[#BF9B30] transition-colors duration-300">
                  {company.name}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
}