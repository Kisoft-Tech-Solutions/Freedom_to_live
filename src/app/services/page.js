"use client";

import Services from '@/components/home/Services';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import { motion } from 'framer-motion';

export default function ServicesPage() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="pt-20"
    >
      <Header />
      <Services />
      <Footer />
    </motion.main>
  );
}