import React from 'react';
import { useNavigate } from "react-router-dom";
import { motion } from 'framer-motion';
import errorInformaticoImg from '../assets/error-informatico.png';
import { IoLogoGameControllerA } from "react-icons/io";
import { FaBookBookmark } from "react-icons/fa6";
import { BsFillBugFill } from "react-icons/bs";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import DotGridBackground from "./DotGridBackground";

export default function Banner() {
  const navigate = useNavigate();
  
  return (
    <DotGridBackground>
      <section className="relative min-h-screen overflow-hidden">

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-purple-900/30 border border-purple-700/50 rounded-full px-4 py-2 mb-6"
            >
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm text-purple-300 font-medium">Plataforma Educativa Gamificada</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            >
              Aprende a programar{' '}
              <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 bg-clip-text text-transparent">
                jugando con código
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl"
            >
              Domina los fundamentos básicos de la programación a través de niveles interactivos, bloques de código
              y retos de pensamiento computacional diseñados para ti a través de una experiencia de juego apoyado en Python.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(168, 85, 247, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/game-modes")}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-2xl transition-all duration-300"
              >
                <div className='flex items-center justify-center gap-3'>
                  <IoLogoGameControllerA className='w-8 h-8' />
                  <span>Comienza a jugar!!!</span>
                </div>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-purple-500 text-purple-300 hover:bg-purple-500/10 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300"
              >
                <div className='flex items-center justify-center gap-3'>
                  <FaBookBookmark className='w-8 h-8' />
                  <span>Cómo funciona</span>
                </div>
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-purple-700/30"
            >
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-yellow-400">12+</div>
                <div className="text-sm text-gray-400">Niveles Disponibles</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-green-400">5</div>
                <div className="text-sm text-gray-400">Conceptos</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-purple-400">100%</div>
                <div className="text-sm text-gray-400">Gratuito</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Elemento Visual del Banner - Espacio para agregar imagen del logo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-[340px] h-[400px] sm:w-[400px] sm:h-[460px]">

              {/* Pulsing glow backdrop */}
              <motion.div
                animate={{ scale: [1, 1.08, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-600/20 via-blue-600/15 to-emerald-600/20 blur-2xl"
              />

              {/* Terminal-style frame */}
              <div className="relative w-full h-full bg-slate-900/80 backdrop-blur-md border border-slate-700/60 rounded-2xl shadow-2xl overflow-hidden">

                {/* Terminal top bar */}
                <div className="flex items-center gap-2 px-4 py-3 bg-slate-800/90 border-b border-slate-700/50">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="ml-3 text-xs text-slate-500 font-mono">code_explorer.py</span>
                </div>

                {/* Fake code lines (background decoration) */}
                <div className="px-5 pt-4 space-y-2 font-mono text-xs">
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6, duration: 0.4 }}
                    className="flex gap-3"
                  >
                    <span className="text-slate-600 select-none w-5 text-right">1</span>
                    <span><span className="text-purple-400">def</span> <span className="text-blue-300">aprender</span><span className="text-slate-400">(</span><span className="text-orange-300">concepto</span><span className="text-slate-400">):</span></span>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8, duration: 0.4 }}
                    className="flex gap-3"
                  >
                    <span className="text-slate-600 select-none w-5 text-right">2</span>
                    <span className="pl-4"><span className="text-purple-400">if</span> <span className="text-blue-300">concepto</span> <span className="text-slate-400">==</span> <span className="text-emerald-400">"Python"</span><span className="text-slate-400">:</span></span>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.0, duration: 0.4 }}
                    className="flex gap-3"
                  >
                    <span className="text-slate-600 select-none w-5 text-right">3</span>
                    <span className="pl-8"><span className="text-yellow-300">print</span><span className="text-slate-400">(</span><span className="text-emerald-400">"¡A jugar!"</span><span className="text-slate-400">)</span></span>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 0.4, x: 0 }}
                    transition={{ delay: 1.2, duration: 0.4 }}
                    className="flex gap-3"
                  >
                    <span className="text-slate-600 select-none w-5 text-right">4</span>
                    <span className="text-slate-600">│</span>
                  </motion.div>
                </div>

                {/* Character area — replace src with your pixel art */}
                <div className="absolute bottom-8 left-0 right-0 flex justify-center items-end">
                  {/* Ground reflection */}
                  <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-purple-500/10 to-transparent" />

                  <motion.img
                    src={errorInformaticoImg}
                    alt="Code Explorer Character"
                    className="relative z-10 w-40 h-40 sm:w-52 sm:h-52 object-contain drop-shadow-[0_0_20px_rgba(168,85,247,0.3)]"
                    animate={{ y: [-6, 6, -6] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                    style={{ imageRendering: "pixelated" }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" className="w-full h-12 fill-purple-900/20">
          <path d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z" />
        </svg>
      </div>
      </section>
    </DotGridBackground>
  );
}
