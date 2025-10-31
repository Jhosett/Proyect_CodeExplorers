import { motion } from "framer-motion";
import { useNavigate, useParams } from "react-router-dom";
import { IoHome, IoArrowBack, IoPlay } from "react-icons/io5";
import { gameModes } from "../data/gameModes";
import BugBackground from "./BugBackground";

export default function GameIntroduction() {
  const navigate = useNavigate();
  const { gameId } = useParams();
  
  // Find the game mode by ID
  const gameMode = gameModes.find(mode => mode.id === parseInt(gameId));
  
  if (!gameMode) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] text-white">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Modo de juego no encontrado</h2>
          <button onClick={() => navigate('/game-modes')} className="text-purple-400 hover:text-purple-300">
            Volver a modos de juego
          </button>
        </div>
      </div>
    );
  }

  const IconComponent = gameMode.icon;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] text-white relative overflow-hidden">
      {/* Navigation buttons */}
      <div className="absolute top-6 left-6 right-6 z-20 flex justify-between">
        <motion.button
          onClick={() => navigate('/game-modes')}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-12 h-12 bg-purple-600/20 backdrop-blur-sm border border-purple-500/30 hover:border-purple-500/60 rounded-full flex items-center justify-center text-purple-400 hover:text-white transition-all duration-200"
        >
          <IoArrowBack className="w-6 h-6" />
        </motion.button>
        
        <motion.button
          onClick={() => navigate('/')}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-12 h-12 bg-purple-600/20 backdrop-blur-sm border border-purple-500/30 hover:border-purple-500/60 rounded-full flex items-center justify-center text-purple-400 hover:text-white transition-all duration-200"
        >
          <IoHome className="w-6 h-6" />
        </motion.button>
      </div>

      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(124,58,237,0.15),transparent_50%),radial-gradient(circle_at_80%_80%,rgba(56,189,248,0.15),transparent_50%)] blur-3xl"></div>
      <BugBackground />

      {/* Main content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Game mode info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <img 
                src={gameMode.image} 
                alt={gameMode.title}
                className="w-full h-80 object-cover rounded-2xl shadow-2xl"
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${gameMode.color} opacity-40 rounded-2xl`} />
              
              {/* Icon and difficulty overlay */}
              <div className="absolute top-6 right-6">
                <div className="w-16 h-16 bg-black/30 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20">
                  <IconComponent className="text-3xl text-white" />
                </div>
              </div>
              
              <div className="absolute bottom-6 left-6">
                <span className={`inline-block px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r ${gameMode.color} text-white shadow-lg`}>
                  {gameMode.difficulty}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Introduction content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {gameMode.title}
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                {gameMode.introduction.objective}
              </p>
            </div>

            {/* How to play */}
            <div className="bg-[#1E293B]/50 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-semibold mb-4 text-yellow-400">¿Cómo Jugar?</h3>
              <ul className="space-y-2">
                {gameMode.introduction.howToPlay.map((step, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </span>
                    <span className="text-gray-300">{step}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tips */}
            <div className="bg-[#1E293B]/50 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-semibold mb-4 text-green-400">💡 Consejos</h3>
              <ul className="space-y-2">
                {gameMode.introduction.tips.map((tip, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-green-400">•</span>
                    <span className="text-gray-300">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Rewards */}
            <div className="bg-[#1E293B]/50 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-semibold mb-4 text-orange-400">🏆 Recompensas</h3>
              <p className="text-gray-300">{gameMode.introduction.rewards}</p>
            </div>

            {/* Start game button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                // TODO: Navigate to actual game
                alert(`¡Iniciando ${gameMode.title}! (Funcionalidad pendiente)`);
              }}
              className={`w-full bg-gradient-to-r ${gameMode.color} hover:shadow-2xl text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl transition-all duration-300 flex items-center justify-center gap-3`}
            >
              <IoPlay className="w-6 h-6" />
              ¡Comenzar a Jugar!
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}