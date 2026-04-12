import React from 'react';
import { motion } from 'framer-motion';
import { IoHome, IoGameController, IoTrophy, IoInformationCircle, IoLogoGithub, IoLogoTwitter, IoLogoInstagram, IoMail, IoHeart } from 'react-icons/io5';
import errorInformaticoImg from '../assets/error-informatico.png';

export default function Footer() {
  const navItems = [
    { href: "#home", label: "Inicio", icon: IoHome },
    { href: "#modes", label: "Modulos de aprendizaje", icon: IoGameController },
    { href: "#ranking", label: "Ranking", icon: IoTrophy },
    { href: "#about", label: "Sobre el juego", icon: IoInformationCircle }
  ];

  const socialLinks = [
    { href: "#", icon: IoLogoGithub, label: "GitHub" },
    { href: "#", icon: IoLogoTwitter, label: "Twitter" },
    { href: "#", icon: IoLogoInstagram, label: "Instagram" },
    { href: "mailto:contact@bughunts.com", icon: IoMail, label: "Email" }
  ];

  return (
    <footer className="bg-[#0F172A] border-t border-purple-700/30 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo y descripción */}
          <div className="md:col-span-2">
            <motion.div 
              className="flex items-center gap-3 mb-4"
              whileHover={{ scale: 1.02 }}
            >
              <img 
                src={errorInformaticoImg} 
                alt="Bug-Hunts Logo" 
                className="w-10 h-10 rounded-lg shadow-md"
              />
              <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Code-Explorers
              </h3>
            </motion.div>
            <p className="text-gray-400 mb-6 max-w-md">
              Plataforma educativa gamificada para desarrollar pensamiento computacional. 
              Aprende programación de forma divertida a través de actividades interactivas.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon className="w-6 h-6" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navegación */}
          <div>
            <h4 className="text-lg font-semibold text-purple-400 mb-4">Navegación</h4>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <motion.a
                    href={item.href}
                    className="flex items-center gap-2 text-gray-400 hover:text-yellow-400 transition-colors"
                    whileHover={{ x: 4 }}
                  >
                    <item.icon className="w-4 h-4" />
                    {item.label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Información */}
          <div>
            <h4 className="text-lg font-semibold text-purple-400 mb-4">Información</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  Términos de Uso
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  Política de Privacidad
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  Ayuda
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-purple-700/30 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2025 Code-Explorers. Todos los derechos reservados.
            </p>
            <motion.p 
              className="text-gray-400 text-sm flex items-center gap-1"
              whileHover={{ scale: 1.05 }}
            >
              Hecho con <IoHeart className="text-red-400 w-4 h-4" /> para estudiantes
            </motion.p>
          </div>
        </div>
      </div>
    </footer>
  );
}
