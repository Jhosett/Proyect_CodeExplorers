import React from 'react';
import { useNavigate } from "react-router-dom";
import { motion } from 'framer-motion';
import errorInformaticoImg from '../assets/error-informatico.png';
import { IoLogoGameControllerA } from "react-icons/io";
import { FaRankingStar } from "react-icons/fa6";
import { BsFillBugFill } from "react-icons/bs";
import { IoShieldCheckmarkSharp } from "react-icons/io5";




export default function Banner() {
  const navigate = useNavigate();
  
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
        <div className="absolute top-40 right-20 w-1 h-1 bg-purple-400 rounded-full animate-ping" />
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-pink-400 rounded-full animate-bounce" />
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-blue-400 rounded-full animate-pulse" />
      </div>

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
              Conviértete en un{' '}
              <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
                Cazador de Bugs
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl"
            >
              Desarrolla tus habilidades de depuración encontrando y corrigiendo errores en códigos mágicos. 
              ¡Aprende programación de forma divertida con retos cronometrados y recompensas!
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
                <div className='flex items-center gap-3'>
                  <IoLogoGameControllerA className='w-8 h-8' />
                  <span>Comienza a cazar!!!</span>
                </div>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-purple-500 text-purple-300 hover:bg-purple-500/10 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300"
              >
                <div className='flex items-center gap-3'>
                  <FaRankingStar className='w-8 h-8' />
                  <span>Ranklist</span>
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
                <div className="text-2xl sm:text-3xl font-bold text-yellow-400">500+</div>
                <div className="text-sm text-gray-400">Retos Disponibles</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-green-400">1.2K+</div>
                <div className="text-sm text-gray-400">Cazadores Activos</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-purple-400">95%</div>
                <div className="text-sm text-gray-400">Tasa de Éxito</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Glowing circle */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-xl scale-110"
              />
              
              {/* Main visual */}
              <motion.div
                whileHover={{ scale: 1.05, rotate: 5 }}
                className="relative bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-sm border border-purple-500/30 rounded-3xl p-8 shadow-2xl"
              >
                <motion.img
                  src={errorInformaticoImg}
                  alt="Bug Hunter"
                  className="w-48 h-48 sm:w-64 sm:h-64 mx-auto"
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
                
                {/* Floating elements */}
                <motion.div
                  animate={{ y: [-5, 5, -5], rotate: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-4 -right-4 bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-bold shadow-lg"
                >
                  <div className='flex items-center gap-2'>
                    <BsFillBugFill className='w-6 h-6' />
                    <span>+100</span>
                  </div>
                </motion.div>
                
                <motion.div
                  animate={{ y: [5, -5, 5], rotate: [0, -10, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="absolute -bottom-2 -left-4 bg-green-400 text-black px-3 py-1 rounded-full text-sm font-bold shadow-lg"
                >
                  <div className='flex items-center gap-2 text-white'>
                    <IoShieldCheckmarkSharp className='w-6 h-6' />
                    <span>Fixed!</span>
                  </div>
                </motion.div>
              </motion.div>
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
  );
}
