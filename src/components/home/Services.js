"use client";

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  FaCode, 
  FaShoppingCart, 
  FaBullhorn, 
  FaVideo, 
  FaMobile, 
  FaServer, 
  FaChartLine, 
  FaRobot, 
  FaPaintBrush, 
  FaCamera, 
  FaInstagram, 
  FaSearch 
} from 'react-icons/fa';

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const businessDivisions = [
    {
      name: "KiSoft Technologies",
      description: "Enterprise-grade technology solutions for modern businesses",
      services: [
        {
          title: "Web Development",
          description: "Custom web applications and enterprise solutions",
          icon: <FaCode className="w-6 h-6" />
        },
        {
          title: "Mobile Apps",
          description: "iOS and Android app development",
          icon: <FaMobile className="w-6 h-6" />
        },
        {
          title: "Cloud Solutions",
          description: "Scalable cloud infrastructure and services",
          icon: <FaServer className="w-6 h-6" />
        }
      ]
    },
    {
      name: "Heyyaz Marketplace",
      description: "Your premier online shopping destination",
      services: [
        {
          title: "E-commerce Platform",
          description: "Advanced online marketplace solution",
          icon: <FaShoppingCart className="w-6 h-6" />
        },
        {
          title: "Vendor Management",
          description: "Multi-vendor platform with analytics",
          icon: <FaChartLine className="w-6 h-6" />
        },
        {
          title: "AI-Powered Search",
          description: "Smart product discovery and recommendations",
          icon: <FaRobot className="w-6 h-6" />
        }
      ]
    },
    {
      name: "Digital Marketing Division",
      description: "Strategic digital marketing solutions for growth",
      services: [
        {
          title: "Social Media Marketing",
          description: "Comprehensive social media management",
          icon: <FaInstagram className="w-6 h-6" />
        },
        {
          title: "SEO & SEM",
          description: "Search engine optimization and marketing",
          icon: <FaSearch className="w-6 h-6" />
        },
        {
          title: "Digital Strategy",
          description: "Custom digital marketing campaigns",
          icon: <FaBullhorn className="w-6 h-6" />
        }
      ]
    },
    {
      name: "Ecstasy Production",
      description: "Professional media production services",
      services: [
        {
          title: "Video Production",
          description: "High-quality video content creation",
          icon: <FaVideo className="w-6 h-6" />
        },
        {
          title: "Photography",
          description: "Professional photo shoots and editing",
          icon: <FaCamera className="w-6 h-6" />
        },
        {
          title: "Visual Design",
          description: "Creative design and branding solutions",
          icon: <FaPaintBrush className="w-6 h-6" />
        }
      ]
    }
  ];

  return (
    <section ref={ref} className="bg-[#0B1340] py-24 relative overflow-hidden">
      <motion.div 
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: [0.1, 0.15, 0.1],
          background: [
            "radial-gradient(circle at 0% 0%, #BF9B30 0%, transparent 50%), linear-gradient(to bottom right, #0B1340, #0B1340)",
            "radial-gradient(circle at 100% 100%, #BF9B30 0%, transparent 50%), linear-gradient(to bottom right, #0B1340, #0B1340)",
            "radial-gradient(circle at 0% 0%, #BF9B30 0%, transparent 50%), linear-gradient(to bottom right, #0B1340, #0B1340)"
          ]
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity,
          ease: "linear" 
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.span 
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-[#BF9B30] text-sm font-semibold tracking-wider uppercase mb-4 block"
          >
            Our Business Divisions
          </motion.span>
          <motion.h2 
            className="text-5xl font-bold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-[#BF9B30]"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Comprehensive Solutions
          </motion.h2>
          <motion.p 
            className="text-gray-300 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
          >
            Driving innovation across technology, e-commerce, marketing, and media
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {businessDivisions.map((division, index) => (
            <motion.div
              key={division.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                delay: index * 0.2,
                duration: 0.6,
                ease: [0.215, 0.61, 0.355, 1]
              }}
              className="group relative backdrop-blur-xl rounded-2xl border border-[#BF9B30]/10 overflow-hidden hover:border-[#BF9B30]/30 transition-all duration-500"
            >
              <motion.div
                className="absolute inset-0 opacity-50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.1 }}
                style={{
                  background: `linear-gradient(135deg, rgba(191, 155, 48, 0.1) 0%, rgba(11, 19, 64, 0.1) 100%)`
                }}
              />

              <motion.div 
                className="p-8 border-b border-[#BF9B30]/10 relative z-10"
                whileHover={{ backgroundColor: "rgba(191, 155, 48, 0.05)" }}
                transition={{ duration: 0.3 }}
              >
                <motion.h3 
                  className="text-2xl font-bold text-[#BF9B30] mb-3"
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {division.name}
                </motion.h3>
                <p className="text-gray-400 leading-relaxed">{division.description}</p>
              </motion.div>
              
              <div className="grid md:grid-cols-3 gap-4 p-8 relative z-10">
                {division.services.map((service, serviceIndex) => (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ 
                      delay: (index * 0.2) + (serviceIndex * 0.1),
                      type: "spring",
                      stiffness: 100
                    }}
                    whileHover={{ 
                      y: -5,
                      scale: 1.05,
                      transition: { duration: 0.2 }
                    }}
                    className="p-6 rounded-xl bg-gradient-to-br from-[#0B1340]/90 to-[#0B1340]/60 border border-[#BF9B30]/5 hover:border-[#BF9B30]/20 transition-all duration-300 hover:shadow-lg hover:shadow-[#BF9B30]/5 group/card"
                  >
                    <motion.div 
                      className="text-[#BF9B30] mb-4 opacity-80 group-hover/card:opacity-100"
                      whileHover={{ 
                        scale: 1.2,
                        rotate: [0, 10, -10, 0],
                        transition: { duration: 0.5 }
                      }}
                    >
                      {service.icon}
                    </motion.div>
                    <h4 className="text-[#BF9B30] font-semibold mb-2 text-lg group-hover/card:translate-x-1 transition-transform duration-300">
                      {service.title}
                    </h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}