import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GameModeCard from "../components/GameModeCard";
import LearningPath from "../components/LearningPath";
import BugBackground from "../components/BugBackground";
import sections from "../data/sections";
import { gameModes } from "../data/gameModes";

const GameModesPage = () => {
  const [selectedSection, setSelectedSection] = useState(null);

  const mappedSections = sections.map((section, index) => {
    const styleSource = gameModes[index % gameModes.length];
    return {
      id: section.id,
      title: section.title,
      description: section.objective,
      difficulty: `Módulo ${index + 1}`,
      color: styleSource.color,
      image: styleSource.image,
      icon: styleSource.icon,
      originalSectionData: section,
    };
  });

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white flex flex-col relative overflow-hidden">
      {!selectedSection && <BugBackground />}

      <AnimatePresence mode="wait">
        {!selectedSection ? (
          <motion.div
            key="grid"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30, scale: 0.98 }}
            transition={{ duration: 0.4 }}
            className="flex-1 w-full py-16 px-6 relative z-10"
          >
            <div className="max-w-7xl mx-auto text-center">
              <motion.h2
                className="text-4xl md:text-5xl font-bold mb-6 pb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Ruta de Aprendizaje
              </motion.h2>

              <motion.p
                className="text-gray-400 max-w-2xl mx-auto mb-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Explora los distintos módulos de aprendizaje y desarrolla tus habilidades paso a paso.
                ¡Completa cada etapa para convertirte en un experto cazador de bugs!
              </motion.p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-10">
                {mappedSections.map((mode, index) => (
                  <GameModeCard
                    key={mode.id}
                    mode={mode}
                    index={index}
                    onClick={() => setSelectedSection(mode.originalSectionData)}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="learning-path"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 z-50 bg-gray-900 w-full h-full overflow-y-auto"
          >
            <LearningPath
              selectedSection={selectedSection}
              onBack={() => setSelectedSection(null)}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GameModesPage;
