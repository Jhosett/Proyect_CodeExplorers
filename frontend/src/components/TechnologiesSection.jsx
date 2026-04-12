import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaPython, FaGraduationCap, FaRocket } from "react-icons/fa";
import { SiTailwindcss, SiFirebase, SiVite } from "react-icons/si";
import { HiPuzzle, HiLightningBolt, HiAcademicCap } from "react-icons/hi";
import { BsCodeSlash, BsLayers, BsController, BsArrowRight } from "react-icons/bs";
import { IoGameController, IoExtensionPuzzle } from "react-icons/io5";
import { TbDragDrop } from "react-icons/tb";
import { MdOutlineTimeline } from "react-icons/md";
import DotGridBackground from "./DotGridBackground";

/* ─── Data ─────────────────────────────────────────────────────── */

const features = [
  {
    icon: <IoExtensionPuzzle className="text-3xl" />,
    title: "Bloques de Código",
    description:
      "Aprende lógica de programación arrastrando bloques visuales que representan instrucciones reales de Python.",
    gradient: "from-purple-500 to-indigo-600",
    glow: "shadow-purple-500/20",
  },
  {
    icon: <TbDragDrop className="text-3xl" />,
    title: "Problemas Parsons",
    description:
      "Ordena fragmentos de código para construir soluciones — un método probado para reforzar la comprensión de la estructura.",
    gradient: "from-blue-500 to-cyan-500",
    glow: "shadow-blue-500/20",
  },
  {
    icon: <IoGameController className="text-3xl" />,
    title: "Aprendizaje Gamificado",
    description:
      "Avanza a través de niveles progresivos, desbloquea nuevos módulos y consolida tus habilidades paso a paso.",
    gradient: "from-emerald-500 to-green-500",
    glow: "shadow-emerald-500/20",
  },
  {
    icon: <FaPython className="text-3xl" />,
    title: "Fundamentos de Python",
    description:
      "Variables, condicionales, ciclos y funciones — cubre los fundamentos del lenguaje de programación más popular.",
    gradient: "from-yellow-400 to-orange-500",
    glow: "shadow-yellow-500/20",
  },
];

const steps = [
  {
    number: "01",
    icon: <FaGraduationCap className="text-2xl text-purple-400" />,
    title: "Selecciona un módulo",
    description: "Explora los módulos disponibles y elige el concepto que quieras aprender.",
  },
  {
    number: "02",
    icon: <HiPuzzle className="text-2xl text-blue-400" />,
    title: "Resuelve los niveles",
    description: "Arrastra y organiza bloques de código para completar cada desafío correctamente.",
  },
  {
    number: "03",
    icon: <HiLightningBolt className="text-2xl text-yellow-400" />,
    title: "Ejecuta y verifica",
    description: "Ejecuta tu programa paso a paso y observa el resultado en la consola.",
  },
  {
    number: "04",
    icon: <FaRocket className="text-2xl text-emerald-400" />,
    title: "Avanza y desbloquea",
    description: "Completa niveles para desbloquear nuevos retos y seguir mejorando tus habilidades.",
  },
];

const technologies = [
  {
    icon: <FaReact className="text-5xl" />,
    name: "React",
    description: "Interfaces dinámicas",
    color: "text-cyan-400",
    borderColor: "border-cyan-500/30",
    bgGlow: "bg-cyan-500/5",
  },
  {
    icon: <SiTailwindcss className="text-5xl" />,
    name: "Tailwind CSS",
    description: "Diseño moderno",
    color: "text-sky-400",
    borderColor: "border-sky-500/30",
    bgGlow: "bg-sky-500/5",
  },
  {
    icon: <SiFirebase className="text-5xl" />,
    name: "Firebase",
    description: "Autenticación y datos",
    color: "text-yellow-400",
    borderColor: "border-yellow-500/30",
    bgGlow: "bg-yellow-500/5",
  },
  {
    icon: <SiVite className="text-5xl" />,
    name: "Vite",
    description: "Desarrollo ultrarrápido",
    color: "text-purple-400",
    borderColor: "border-purple-500/30",
    bgGlow: "bg-purple-500/5",
  },
  {
    icon: <FaPython className="text-5xl" />,
    name: "Python",
    description: "Lenguaje de referencia",
    color: "text-blue-400",
    borderColor: "border-blue-500/30",
    bgGlow: "bg-blue-500/5",
  },
];

/* ─── Animation variants ───────────────────────────────────────── */

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

/* ─── Component ────────────────────────────────────────────────── */

export default function TechnologiesSection() {
  return (
    <DotGridBackground className="min-h-0">

      {/* ═══════════ FEATURES SECTION ═══════════ */}
      <section className="relative py-24 overflow-hidden">

        {/* Subtle background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-6">

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 bg-purple-900/30 border border-purple-700/40 rounded-full px-4 py-1.5 text-purple-300 text-sm font-medium mb-5">
              <BsLayers className="text-base" />
              Características
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Todo lo que necesitas para{" "}
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                aprender a programar
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Una experiencia interactiva diseñada para que domines conceptos de
              programación sin escribir código desde cero.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {features.map((feature) => (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                className={`group relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-slate-600/80 transition-all duration-300 shadow-lg hover:shadow-xl ${feature.glow}`}
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-white mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Separator ── */}
      <div className="max-w-4xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-purple-500/40 to-transparent" />
      </div>

      {/* ═══════════ HOW IT WORKS ═══════════ */}
      <section className="relative py-24">

        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-6">

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 bg-blue-900/30 border border-blue-700/40 rounded-full px-4 py-1.5 text-blue-300 text-sm font-medium mb-5">
              <MdOutlineTimeline className="text-base" />
              Cómo funciona
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Aprende en{" "}
              <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                4 simples pasos
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Nuestra plataforma está diseñada para que puedas aprender de forma
              progresiva y sin complicaciones.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                variants={itemVariants}
                className="relative group"
              >
                <div className="bg-slate-800/40 border border-slate-700/40 rounded-2xl p-6 h-full hover:border-slate-600/60 transition-all duration-300">
                  {/* Step number */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl font-black text-slate-700 group-hover:text-slate-600 transition-colors">
                      {step.number}
                    </span>
                    <div className="w-9 h-9 rounded-lg bg-slate-700/50 flex items-center justify-center">
                      {step.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Connector arrow (hidden on last item and on mobile) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-3 -translate-y-1/2 z-10 text-slate-700">
                    <BsArrowRight className="text-lg" />
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Separator ── */}
      <div className="max-w-4xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />
      </div>

      {/* ═══════════ TECH STACK ═══════════ */}
      <section className="relative py-24">

        <div className="relative max-w-5xl mx-auto px-6">

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 bg-emerald-900/30 border border-emerald-700/40 rounded-full px-4 py-1.5 text-emerald-300 text-sm font-medium mb-5">
              <BsCodeSlash className="text-base" />
              Stack Tecnológico
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Construido con{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-yellow-400 bg-clip-text text-transparent">
                tecnologías modernas
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Nuestra plataforma está desarrollada con herramientas de vanguardia
              que garantizan una experiencia fluida y optimizada.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-wrap justify-center gap-6"
          >
            {technologies.map((tech) => (
              <motion.div
                key={tech.name}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -4 }}
                className={`${tech.bgGlow} border ${tech.borderColor} rounded-2xl px-8 py-6 flex flex-col items-center gap-3 hover:border-opacity-60 transition-all duration-300 backdrop-blur-sm min-w-[150px]`}
              >
                <span className={tech.color}>{tech.icon}</span>
                <div className="text-center">
                  <p className="text-white font-bold text-sm">{tech.name}</p>
                  <p className="text-gray-500 text-xs mt-0.5">{tech.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

    </DotGridBackground>
  );
}
