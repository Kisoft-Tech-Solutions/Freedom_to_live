"use client";

import { motion } from "framer-motion";

export default function ResearchAndDevelopmentPage() {
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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <main className="bg-gradient-to-b from-[#0B1340] to-[#1A2238] min-h-screen flex flex-col">
      {/* Research & Development Section */}
      <section className="flex-grow py-24 relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-10 w-96 h-96 bg-[#BF9B30]/20 rounded-full blur-3xl opacity-30"></div>
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-[#BF9B30]/30 rounded-full blur-2xl opacity-20"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Section Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="text-center mb-16"
          >
            <motion.h2
              variants={itemVariants}
              className="text-6xl font-extrabold text-white mb-6 tracking-wide"
            >
              Research & Development
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed"
            >
              At the forefront of innovation, we are committed to exploring
              cutting-edge technologies and sustainable solutions to shape the
              future of industries and businesses worldwide.
            </motion.p>
          </motion.div>

          {/* R&D Focus Areas */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
          >
            {[
              {
                title: "AI & Machine Learning",
                description:
                  "Exploring advanced AI solutions to revolutionize industries.",
                icon: "🤖",
              },
              {
                title: "Blockchain Technology",
                description:
                  "Innovating secure and transparent blockchain applications.",
                icon: "🔗",
              },
              {
                title: "Sustainable Solutions",
                description:
                  "Developing eco-friendly technologies for a better tomorrow.",
                icon: "🌱",
              },
              {
                title: "IoT Innovations",
                description:
                  "Creating smart, connected devices for modern living.",
                icon: "📡",
              },
              {
                title: "Cybersecurity",
                description:
                  "Enhancing digital security to protect sensitive data.",
                icon: "🔒",
              },
              {
                title: "Cloud Computing",
                description:
                  "Building scalable and efficient cloud-based solutions.",
                icon: "☁️",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="p-8 rounded-xl bg-gradient-to-br from-[#1A2238]/80 to-[#0B1340]/60 border border-[#BF9B30]/10 hover:border-[#BF9B30]/40 transition-all duration-300 shadow-lg hover:shadow-[#BF9B30]/20"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-[#BF9B30]/20 text-[#BF9B30] text-3xl font-bold rounded-full mb-6">
                  {item.icon}
                </div>
                <h3 className="text-[#BF9B30] text-2xl font-bold mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
}