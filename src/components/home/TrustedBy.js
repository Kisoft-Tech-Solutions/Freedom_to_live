"use client";

import { motion } from "framer-motion";

export default function TrustedBy() {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
    hover: { scale: 1.1, rotate: 2, transition: { duration: 0.3 } },
  };

  return (
    <main className="bg-gradient-to-b from-[#0B1340] to-[#1A2238] min-h-screen flex items-center justify-center">
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          {/* Section Header */}
          <motion.h3
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-extrabold text-white mb-12"
          >
            Trusted By Leading Companies
          </motion.h3>

          {/* Animated Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center"
          >
            {[
              { name: "ABC Corp", image: "/images/abc-logo.png" },
              { name: "XYZ Ltd", image: "/images/xyz-logo.png" },
              { name: "DEF Inc", image: "/images/def-logo.png" },
              { name: "GHI Group", image: "/images/ghi-logo.png" },
              { name: "JKL Enterprises", image: "/images/jkl-logo.png" },
              { name: "MNO Solutions", image: "/images/mno-logo.png" },
              { name: "PQR Innovations", image: "/images/pqr-logo.png" },
              { name: "STU Technologies", image: "/images/stu-logo.png" },
              { name: "VWX Systems", image: "/images/vwx-logo.png" },
              { name: "YZA Networks", image: "/images/yza-logo.png" },
            ].map((company, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover="hover"
                className="flex flex-col items-center justify-center bg-gradient-to-br from-[#1A2238] to-[#0B1340] p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-[#BF9B30]/10 hover:border-[#BF9B30]/40"
              >
                <img
                  src={company.image}
                  alt={company.name}
                  className="h-16 object-contain mb-4"
                />
                <p className="text-gray-300 text-sm font-medium">
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