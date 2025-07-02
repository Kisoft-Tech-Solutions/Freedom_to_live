"use client";

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
      ]
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
      ]
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
      popular: true
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
      ]
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
            <span className="text-white">Choose Your </span>
            <span className="text-[#BF9B30]">Investment Plan</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Whether you are an experienced investor or just starting, our investment plans are made to work for you!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2 }}
              className="relative bg-[#0B1340]/50 rounded-xl border border-[#BF9B30]/20 overflow-hidden hover:border-[#BF9B30] transition-all duration-300"
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-[#BF9B30] text-[#0B1340] px-4 py-1 text-sm font-semibold">
                  Popular
                </div>
              )}
              <div className="p-8">
                <h3 className="text-[#BF9B30] text-xl font-bold mb-2">{plan.name}</h3>
                <p className="text-white text-sm mb-4">{plan.duration}</p>
                <div className="text-3xl font-bold text-white mb-6">{plan.roi}</div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.5 + idx * 0.1 }}
                      className="flex items-center text-gray-300"
                    >
                      <span className="text-[#BF9B30] mr-2">✓</span>
                      {feature}
                    </motion.li>
                  ))}
                </ul>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full py-3 px-6 bg-[#BF9B30] text-[#0B1340] rounded-full font-semibold hover:bg-[#D4AF37] transition-colors"
                >
                  Get Started
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}