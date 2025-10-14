import React from "react";
import { motion } from "framer-motion";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss, SiFirebase } from "react-icons/si";

export default function TechnologiesSection() {
  // Variantes de animación para los íconos
  const iconVariants = {
    hidden: { opacity: 0, scale: 0.5, y: 30 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        type: "spring",
        stiffness: 120,
      },
    }),
  };

  return (
    <section className="bg-gradient-to-b from-[#1E293B] via-[#111827] to-[#0F172A] text-gray-300 py-16 border-t-2 border-purple-700/30">
      <div className="max-w-5xl mx-auto px-6 text-center">
        {/* Título */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-white mb-6"
        >
          🚀 Tecnologías Utilizadas
        </motion.h2>

        {/* Descripción */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-400 mb-12 max-w-2xl mx-auto"
        >
          Nuestra plataforma está desarrollada con tecnologías modernas que garantizan 
          una experiencia fluida, atractiva y optimizada para todos los usuarios.
        </motion.p>

        {/* Íconos animados */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-12">
          {[ 
            { icon: <FaReact className="text-6xl text-cyan-400" />, name: "React" },
            { icon: <SiTailwindcss className="text-6xl text-sky-400" />, name: "Tailwind CSS" },
            { icon: <SiFirebase className="text-6xl text-yellow-400" />, name: "Firebase" },
          ].map((tech, i) => (
            <motion.div
              key={tech.name}
              custom={i}
              variants={iconVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              className="flex flex-col items-center hover:scale-110 transition-transform duration-300"
            >
              {tech.icon}
              <p className="mt-3 text-sm text-gray-300">{tech.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
