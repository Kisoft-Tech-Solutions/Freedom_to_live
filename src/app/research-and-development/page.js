"use client";

import Pricing from '@/components/home/Pricing';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import { motion } from 'framer-motion';

export default function PricingPage() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="pt-20"
    >
      <Header />
      <Pricing />
      <Footer />
    </motion.main>
  );
}