import { motion } from "framer-motion";
import { IoLogoGameControllerA } from "react-icons/io";
import { BsArrowRight } from "react-icons/bs";

const GameModeCard = ({ mode, index, onClick }) => {
  const IconComponent = mode.icon;

  return (
    <motion.div
      className="relative group cursor-pointer h-full"
      whileHover={{ y: -6, scale: 1.02, transition: { duration: 0.2, ease: "easeOut" } }}
      whileTap={{ scale: 0.98, transition: { duration: 0.1 } }}
      onClick={onClick}
    >
      <div className="relative bg-slate-800/60 backdrop-blur-lg rounded-2xl overflow-hidden border border-slate-700/50 group-hover:border-purple-500/30 transition-all duration-300 shadow-xl group-hover:shadow-2xl group-hover:shadow-purple-500/10 h-full flex flex-col">

        {/* Image area */}
        <div className="relative h-44 overflow-hidden shrink-0">
          <img
            src={mode.image}
            alt={mode.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 will-change-transform"
          />

          {/* Color overlay */}
          <div className={`absolute inset-0 bg-gradient-to-t ${mode.color} opacity-50 group-hover:opacity-25 transition-opacity duration-300`} />

          {/* Icon badge (top right) */}
          <div className="absolute top-4 right-4 z-10">
            <div className="w-11 h-11 bg-black/50 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/15 shadow-lg group-hover:scale-110 transition-transform duration-300">
              <IconComponent className="text-xl text-white" />
            </div>
          </div>

          {/* Module number badge (top left) */}
          <div className="absolute top-4 left-4 z-10">
            <div className={`px-3 py-1 rounded-lg text-xs font-bold bg-gradient-to-r ${mode.color} text-white shadow-lg`}>
              {mode.difficulty}
            </div>
          </div>

          {/* Stages count (bottom right) */}
          {mode.totalStages && (
            <div className="absolute bottom-4 right-4 z-10">
              <span className="inline-block px-2.5 py-1 rounded-lg text-[11px] font-semibold bg-black/50 backdrop-blur-md text-gray-200 border border-white/10">
                {mode.totalStages} niveles
              </span>
            </div>
          )}
        </div>

        {/* Card body */}
        <div className="p-6 flex flex-col flex-1">
          <h3 className="text-lg font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 transition-all duration-300 text-left mb-2 leading-tight">
            {mode.title}
          </h3>

          <p className="text-gray-400 text-sm leading-relaxed mb-6 text-left flex-1 line-clamp-3">
            {mode.description}
          </p>

          {/* CTA button */}
          <div
            className="mt-auto flex gap-2 items-center justify-center w-full bg-slate-700/60 hover:bg-gradient-to-r hover:from-purple-600 hover:to-indigo-600 text-gray-300 hover:text-white px-5 py-3 rounded-xl font-bold text-sm transition-all duration-300 border border-slate-600/50 hover:border-purple-500/50 group-hover:shadow-lg group-hover:shadow-purple-500/10"
          >
            <IoLogoGameControllerA className="w-5 h-5" />
            <span>Explorar Módulo</span>
            <BsArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default GameModeCard;