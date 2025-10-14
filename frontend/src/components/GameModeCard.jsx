// src/components/GameModeCard.jsx
import { motion } from "framer-motion";
import { IoLogoGameControllerA } from "react-icons/io";

const GameModeCard = ({ mode, index }) => {
  const IconComponent = mode.icon;

  return (
    <motion.div
      key={mode.id}
      className="relative group cursor-pointer"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2 }}
      whileHover={{ y: -6, scale: 1.01, transition: { duration: 0.2, ease: "easeOut" } }}
      whileTap={{ scale: 0.98, transition: { duration: 0.1 } }}
    >
      {/* Main card */}
      <div className="relative bg-[#1E293B]/90 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/10 group-hover:border-white/20 transition-all duration-200 shadow-xl group-hover:shadow-2xl will-change-transform">
        
        {/* Image section */}
        <div className="relative h-48 overflow-hidden">
          <img 
            src={mode.image} 
            alt={mode.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 will-change-transform"
          />
          
          {/* Gradient overlay */}
          <div className={`absolute inset-0 bg-gradient-to-t ${mode.color} opacity-60 group-hover:opacity-30 transition-opacity duration-200`} />
          
          {/* Icon overlay */}
          <div className="absolute top-4 right-4">
            <div className="w-12 h-12 bg-black/30 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20">
              <IconComponent className="text-2xl text-white" />
            </div>
          </div>
          
          {/* Difficulty badge */}
          <div className="absolute bottom-4 left-4">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-black/50 backdrop-blur-sm text-white border border-white/20">
              {mode.difficulty}
            </span>
          </div>
        </div>

        {/* Content section */}
        <div className="p-6 space-y-4">
          <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
            {mode.title}
          </h3>
          
          <p className="text-gray-300 text-sm leading-relaxed min-h-[60px]">
            {mode.description}
          </p>

          {/* Action button */}
          <motion.button
            whileHover={{ scale: 1.03, transition: { duration: 0.15 } }}
            whileTap={{ scale: 0.97, transition: { duration: 0.1 } }}
            className={`flex gap-2 items-center justify-center w-full bg-gradient-to-r ${mode.color} hover:shadow-lg text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200 shadow-md`}
          >
            <IoLogoGameControllerA className="w-6 h-6" />
            <span>Jugar!</span>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default GameModeCard;