"use client";

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <footer className="bg-[#0B1340] border-t border-[#BF9B30]/20 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B1340] to-[#070b24] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={footerVariants}
        >
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Image 
                src="/bg_logo.png" 
                alt="Freedom to Live Logo" 
                width={50} 
                height={50}
                className="object-contain"
              />
              <span className="text-[#BF9B30] text-xl font-bold">Freedom to Live</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Empowering your financial journey through strategic investments and innovative solutions.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: <FaFacebookF />, name: 'facebook', color: 'hover:text-blue-600' },
                { icon: <FaInstagram />, name: 'instagram', color: 'hover:text-pink-600' },
                { icon: <FaLinkedinIn />, name: 'linkedin', color: 'hover:text-blue-500' },
                { icon: <FaWhatsapp />, name: 'whatsapp', color: 'hover:text-green-500' }
              ].map((social) => (
                <motion.a
                  key={social.name}
                  href="#"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className={`bg-[#0B1340]/80 p-3 rounded-full border border-[#BF9B30]/20 
                    hover:border-[#BF9B30] transition-all duration-300 ${social.color} 
                    text-gray-400 hover:bg-[#BF9B30]/10`}
                >
                  <div className="w-5 h-5">
                    {social.icon}
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[#BF9B30] font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {['About Us', 'Services', 'Pricing', 'Contact'].map((item) => (
                <motion.li 
                  key={item}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link
                    href={`/${item.toLowerCase().replace(' ', '-')}`}
                    className="text-gray-300 hover:text-[#BF9B30] transition-colors inline-flex items-center"
                  >
                    <span className="text-[#BF9B30] mr-2">›</span>
                    {item}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-[#BF9B30] font-semibold text-lg mb-6">Our Services</h3>
            <ul className="space-y-4">
              {[
                'KiSoft Technologies',
                'Heyyaz Marketplace',
                'Digital Marketing',
                'Ecstasy Production'
              ].map((service) => (
                <motion.li 
                  key={service}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link
                    href="#"
                    className="text-gray-300 hover:text-[#BF9B30] transition-colors inline-flex items-center"
                  >
                    <span className="text-[#BF9B30] mr-2">›</span>
                    {service}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[#BF9B30] font-semibold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start space-x-3">
                <span className="text-[#BF9B30] mt-1">›</span>
                <span>ABC </span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-[#BF9B30] mt-1">›</span>
                <span>ABC </span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-[#BF9B30] mt-1">›</span>
                <span>ABC </span>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div 
          className="border-t border-[#BF9B30]/20 mt-12 pt-8 text-center text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p>© {currentYear} Freedom to Live. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}