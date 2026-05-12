import { FaBug, FaHeart, FaLightbulb } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function AvatarZone({ step, total, lives = 3, maxLives = 3 }) {
  const livesPercentage = (lives / maxLives) * 100;
  const livesColor = lives === maxLives ? "text-green-400" : lives === 2 ? "text-yellow-400" : "text-red-400";

  return (
    <div
      className="bg-slate-800 border-t md:border-t-0 md:border-l border-slate-700
                 flex flex-row md:flex-col items-center justify-between md:justify-start
                 p-3 md:p-4 gap-4 md:gap-6 overflow-y-auto"
    >
      {/* Lives Section */}
      <div className="flex flex-col items-center gap-1 w-full md:w-auto">
        <div className="flex flex-row items-center gap-1.5 md:gap-2">
          {Array.from({ length: maxLives }, (_, i) => (
            <FaHeart
              key={i}
              className={`text-lg sm:text-xl transition-all duration-300 drop-shadow-lg ${
                i < lives
                  ? "text-red-400 scale-100"
                  : "text-slate-700 scale-75 opacity-40"
              }`}
            />
          ))}
        </div>
        <div className="flex flex-col items-center gap-1 mt-1">
          <span className={`text-xs font-bold ${livesColor}`}>
            {lives}/{maxLives}
          </span>
          <div className="w-16 h-1.5 bg-slate-700 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: "100%" }}
              animate={{ width: `${livesPercentage}%` }}
              transition={{ duration: 0.5 }}
              className={`h-full rounded-full ${
                lives === maxLives ? "bg-green-400" : lives === 2 ? "bg-yellow-400" : "bg-red-400"
              }`}
            />
          </div>
        </div>
      </div>

      <div className="hidden md:block w-full h-[1px] bg-slate-700/50" />

      {/* Avatar & Step Indicator */}
      <div className="flex flex-col items-center gap-1 w-full md:w-auto md:mt-auto">
        <div className="text-xs text-slate-400 hidden md:block">
          Bug Hunter
        </div>
        <div className="text-3xl text-emerald-400 my-1">
          <FaBug />
        </div>
        <div className="text-center text-xs text-slate-400">
          Paso
          <div className="text-blue-400 text-lg font-bold leading-none mt-0.5">
            {step}/{total}
          </div>
        </div>
      </div>

    </div>
  );
}
