import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt2 } from "react-icons/hi";
import { FaLightbulb } from "react-icons/fa";
import { useState } from "react";

export default function LevelHeader({
  onMenuClick,
  title = "Nivel",
  objective = "",
}) {
  const [showHint, setShowHint] = useState(false);

  return (
    <div className="w-full bg-gradient-to-r from-[#0f1b2d] via-[#1a2332] to-[#0f1b2d] border-b border-slate-700/50 shadow-lg">
      <div className="px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between gap-3">
        
        {/* Left Side — Menu button */}
        <div className="flex items-center gap-2 shrink-0">
          <motion.button
            onClick={onMenuClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl
                       bg-gradient-to-br from-purple-600/20 to-indigo-600/20
                       hover:from-purple-600/30 hover:to-indigo-600/30
                       border border-purple-500/30 hover:border-purple-500/50
                       flex items-center justify-center text-purple-300 hover:text-white
                       transition-all duration-200 shadow-lg"
            aria-label="Información del nivel"
          >
            <HiMenuAlt2 className="text-xl sm:text-2xl" />
          </motion.button>
        </div>

        {/* Center — Level Info */}
        <div className="flex flex-col gap-1 min-w-0 flex-1 items-center">
          {/* Level Title */}
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full 
                       bg-gradient-to-r from-cyan-500/20 to-blue-500/20 
                       border border-cyan-400/40">
            <span className="text-cyan-300 font-semibold text-xs sm:text-sm truncate">
              {title}
            </span>
          </div>

          {/* Objective */}
          {objective && (
            <div className="flex items-center gap-1.5 text-xs sm:text-sm">
              <span className="text-slate-400">Objetivo:</span>
              <span className="text-yellow-400 font-semibold truncate">{objective}</span>
            </div>
          )}
        </div>

        {/* Right Side — Hint */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="relative">
            <motion.button
              onClick={() => setShowHint(!showHint)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl
                         bg-gradient-to-br from-yellow-600/20 to-amber-600/20
                         hover:from-yellow-600/30 hover:to-amber-600/30
                         border border-yellow-500/30 hover:border-yellow-500/50
                         flex items-center justify-center text-yellow-300 hover:text-yellow-200
                         transition-all duration-200 shadow-lg"
              aria-label="Ver pista"
            >
              <FaLightbulb className="text-base sm:text-lg" />
            </motion.button>

            <AnimatePresence>
              {showHint && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: -10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: -10 }}
                  className="absolute right-0 top-12 z-50 w-64 sm:w-80
                             bg-slate-800 border border-yellow-500/30 rounded-xl p-4 shadow-2xl"
                >
                  <div className="flex items-start gap-2 mb-2">
                    <FaLightbulb className="text-yellow-400 mt-0.5 shrink-0" />
                    <h4 className="text-yellow-300 font-semibold text-sm">Pista</h4>
                  </div>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    Arrastra los bloques desde la bandeja inferior y ordénalos en la zona de ejecución. 
                    ¡Presta atención al orden lógico!
                  </p>
                  <button
                    onClick={() => setShowHint(false)}
                    className="mt-3 text-xs text-yellow-400 hover:text-yellow-300 font-medium"
                  >
                    Cerrar
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
