"use client";

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      title: "Deep Encryption",
      description: "We ensure the confidentiality of information shared with us through advanced encryption systems.",
      icon: "🔒"
    },
    {
      title: "Registered Company",
      description: "We are a registered company fulfilling all legal requirements to operate as an investment firm.",
      icon: "📋"
    },
    {
      title: "Safe & Secure",
      description: "Accredited by International Certificates ensuring quality and security of our services.",
      icon: "🛡️"
    },
    {
      title: "Fast & Simple",
      description: "Our expert team breaks down sophisticated processes into easy and quick steps.",
      icon: "⚡"
    },
    {
      title: "Full-Time Service",
      description: "We offer full-time service to solve your queries and provide the best support.",
      icon: "🕒"
    },
    {
      title: "Easy Transactions",
      description: "Secure and smooth process for deposits and withdrawals of your investments.",
      icon: "💳"
    }
  ];

  return (
    <section ref={ref} className="bg-[#0B1340] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">
            <span className="text-white">Why Choose </span>
            <span className="text-[#BF9B30]">Freedom to Live</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Discover the features that make us your trusted investment partner
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-[#0B1340]/50 p-8 rounded-xl border border-[#BF9B30]/20 hover:border-[#BF9B30] transition-all duration-300"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-[#BF9B30] text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}