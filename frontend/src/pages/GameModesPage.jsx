// src/pages/GameModesPage.jsx
import { motion } from "framer-motion";
import GameModeCard from "../components/GameModeCard";
import { gameModes } from "../data/gameModes";
import BugBackground from "../components/BugBackground";

const GameModesPage = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 px-6">
      <BugBackground/>  
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-6 pb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Modos de Juego
        </motion.h2>

        <motion.p
          className="text-gray-400 max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Explora los distintos modos de juego y demuestra tus habilidades como
          cazador de bugs. ¡Cada modo ofrece un reto distinto y recompensas únicas!
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {gameModes.map((mode, index) => (
            <GameModeCard key={mode.id} mode={mode} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GameModesPage;
