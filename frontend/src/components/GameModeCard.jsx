import { motion } from "framer-motion";
import { IoLogoGameControllerA } from "react-icons/io";

const GameModeCard = ({ mode, index, onClick }) => {
  const IconComponent = mode.icon;

  return (
    <motion.div
      className="relative group cursor-pointer"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -6, scale: 1.02, transition: { duration: 0.2, ease: "easeOut" } }}
      whileTap={{ scale: 0.98, transition: { duration: 0.1 } }}
      onClick={onClick}
    >
      <div className="relative bg-[#1E293B]/90 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/10 group-hover:border-white/20 transition-all duration-200 shadow-xl group-hover:shadow-2xl h-full flex flex-col">

        <div className="relative h-44 overflow-hidden shrink-0">
          <img
            src={mode.image}
            alt={mode.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 will-change-transform"
          />

          <div className={`absolute inset-0 bg-gradient-to-t ${mode.color} opacity-60 group-hover:opacity-30 transition-opacity duration-200`} />

          <div className="absolute top-4 right-4 z-10">
            <div className="w-12 h-12 bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 shadow-lg">
              <IconComponent className="text-2xl text-white" />
            </div>
          </div>

          <div className="absolute bottom-4 left-4 z-10">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-black/60 backdrop-blur-md text-white border border-white/20 shadow-sm">
              {mode.difficulty}
            </span>
          </div>
        </div>

        <div className="p-6 flex flex-col flex-1">
          <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300 text-left mb-3 leading-tight">
            {mode.title}
          </h3>

          <p className="text-gray-300 text-sm leading-relaxed mb-6 text-left flex-1 line-clamp-3">
            {mode.description}
          </p>

          <motion.div
            className={`mt-auto flex gap-2 items-center justify-center w-full bg-gradient-to-r ${mode.color} hover:shadow-lg hover:shadow-purple-500/20 text-white px-6 py-3 rounded-xl font-bold transition-all duration-300 border border-white/10`}
          >
            <IoLogoGameControllerA className="w-6 h-6" />
            <span>Explorar Módulo</span>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default GameModeCard;