"use client";

import { motion } from 'framer-motion';
import { FaWhatsapp, FaInstagram, FaFacebookF, FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';

export default function Contact() {
  const socialLinks = [
    {
      icon: <FaWhatsapp className="w-8 h-8" />,
      href: "#",
      label: "WhatsApp",
      color: "hover:bg-green-600",
      description: "Chat with us on WhatsApp"
    },
    {
      icon: <FaInstagram className="w-8 h-8" />,
      href: "#",
      label: "Instagram",
      color: "hover:bg-pink-600",
      description: "Follow us on Instagram"
    },
    {
      icon: <FaFacebookF className="w-8 h-8" />,
      href: "#",
      label: "Facebook",
      color: "hover:bg-blue-600",
      description: "Connect on Facebook"
    }
  ];

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt className="w-8 h-8" />,
      title: "Visit Us",
      details: ["", ""],
      color: "text-red-400"
    },
    {
      icon: <FaEnvelope className="w-8 h-8" />,
      title: "Email Us",
      details: ["", ""],
      color: "text-blue-400"
    },
    {
      icon: <FaPhone className="w-8 h-8" />,
      title: "Call Us",
      details: ["", ""],
      color: "text-green-400"
    }
  ];

  return (
    <section className="bg-[#0B1340] py-24 border-t border-[#BF9B30]/20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold mb-6">
            <span className="text-white">Get in </span>
            <span className="text-[#BF9B30]">Touch</span>
          </h2>
          <p className="text-gray-300 mb-16 max-w-2xl mx-auto">
            Connect with us through our various channels for any questions about our investment services
          </p>

          {/* Social Links */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="flex flex-col items-center p-8 rounded-xl border border-[#BF9B30]/20 hover:border-[#BF9B30] transition-all duration-300"
              >
                <div className={`p-4 rounded-full ${social.color} bg-opacity-10 mb-4`}>
                  {social.icon}
                </div>
                <h3 className="text-[#BF9B30] font-semibold mb-2">{social.label}</h3>
                <p className="text-gray-400 text-sm">{social.description}</p>
              </motion.a>
            ))}
          </div>

          {/* Contact Info */}
          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                whileHover={{ scale: 1.05 }}
                className="p-8 rounded-xl border border-[#BF9B30]/20 hover:border-[#BF9B30] transition-all duration-300"
              >
                <div className="flex justify-center mb-4">
                  <div className={`${info.color} opacity-80`}>{info.icon}</div>
                </div>
                <h3 className="text-[#BF9B30] font-semibold mb-4">{info.title}</h3>
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-gray-300">{detail}</p>
                ))}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}