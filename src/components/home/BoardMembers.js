"use client";

import Image from 'next/image';
import { motion, useInView, animate } from 'framer-motion'; // Changed imports
import { useRef, useEffect } from 'react';

function Counter({ value, duration = 2 }) {
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      const numeric = parseInt(value.replace(/\D/g, ''));
      
      const controls = animate(0, numeric, {
        duration: duration,
        onUpdate: (latest) => {
          if (ref.current) {
            ref.current.textContent = value.startsWith('$') ? 
              `$${Math.round(latest)}` : 
              `${Math.round(latest)}${value.includes('+') ? '+' : ''}`;
          }
        },
        ease: "easeOut",
      });

      return controls.stop;
    }
  }, [isInView, value, duration]);

  return <span ref={ref} className="inline-block">0</span>;
}

export default function BoardMembers() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const boardMembers = [
    {
      name: "def",
      position: "def",
      image: "/def.jpg",
      description: "def"
    },
    {
      name: "ghi",
      position: "ghi", 
      image: "/ghi.jpg",
      description: "ghi"
    },
    {
      name: "abc",
      position: "abc",
      image: "/abc.jpg", 
      description: "bcd"
    },
    {
      name: "bcd",
      position: "bcd",
      image: "/bcd.jpg",
      description: "bcd"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 }
    }
  };

  const memberVariants = {
    hidden: { 
      y: 50, 
      opacity: 0,
      scale: 0.9
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        mass: 1
      }
    }
  };

  const imageVariants = {
    hidden: { scale: 1.2, opacity: 0 },
    visible: { 
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section ref={ref} className="bg-[#0B1340] py-24 relative overflow-hidden">
      {/* Background Animation */}
      <motion.div 
        className="absolute top-0 left-0 w-full h-full opacity-10"
        animate={{ 
          background: [
            "radial-gradient(circle at 0% 0%, #BF9B30 0%, transparent 50%)",
            "radial-gradient(circle at 100% 100%, #BF9B30 0%, transparent 50%)",
            "radial-gradient(circle at 0% 0%, #BF9B30 0%, transparent 50%)"
          ]
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">
            <span className="text-white">Leadership </span>
            <span className="text-[#BF9B30]">Team</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Meet our experienced professionals who guide Freedom to Live towards excellence 
            and ensure secure financial growth for our clients.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {boardMembers.map((member, index) => (
            <motion.div
              key={member.name}
              variants={memberVariants}
              whileHover={{ 
                y: -15,
                scale: 1.02,
                transition: { type: "spring", stiffness: 300 }
              }}
              className="bg-[#0B1340]/50 rounded-xl border border-[#BF9B30]/20 overflow-hidden hover:border-[#BF9B30] transition-all duration-300 shadow-lg group"
            >
              <motion.div 
                className="relative h-64 w-full overflow-hidden"
                variants={imageVariants}
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-[#0B1340] via-transparent to-transparent"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.7 }}
                  transition={{ duration: 0.5 }}
                />
              </motion.div>
              <motion.div 
                className="p-6 relative"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-[#BF9B30] text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-white text-sm mb-4 font-medium">{member.position}</p>
                <p className="text-gray-300 text-sm leading-relaxed">{member.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Updated Stats Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20"
        >
          {[
            { number: "20+", label: "Team Members" },
            { number: "50+", label: "Partner Companies" },
            { number: "100+", label: "Satisfied Clients" },
            { number: "$5M+", label: "Total Invested" }
          ].map((stat, index) => (
            <div
              key={index}
              className="p-6 rounded-lg border border-[#BF9B30]/20 bg-[#0B1340]/50 backdrop-blur-sm"
            >
              <h4 className="text-[#BF9B30] text-3xl font-bold mb-2">
                <Counter value={stat.number} />
              </h4>
              <p className="text-gray-300">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}