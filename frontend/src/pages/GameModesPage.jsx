import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft } from "react-icons/fa";
import { HiAcademicCap } from "react-icons/hi";
import { BsLayers } from "react-icons/bs";
import GameModeCard from "../components/GameModeCard";
import LearningPath from "../components/LearningPath";
import DotGridBackground from "../components/DotGridBackground";
import sections from "../data/sections";
import { gameModes } from "../data/gameModes";

/* ─── Animation variants ───────────────────────────────────────── */

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

/* ─── Component ────────────────────────────────────────────────── */

const GameModesPage = () => {
  const navigate = useNavigate();
  const { sectionId } = useParams();
  const [selectedSection, setSelectedSection] = useState(null);

  useEffect(() => {
    if (sectionId) {
      const found = sections.find(s => s.id === sectionId);
      if (found) setSelectedSection(found);
    }
  }, [sectionId]);

  const mappedSections = sections.map((section, index) => {
    const styleSource = gameModes[index % gameModes.length];
    return {
      id: section.id,
      title: section.title,
      description: section.objective,
      difficulty: `Módulo ${index + 1}`,
      moduleNumber: index + 1,
      totalStages: section.stages.length,
      color: styleSource.color,
      image: styleSource.image,
      icon: styleSource.icon,
      originalSectionData: section,
    };
  });

  return (
    <AnimatePresence mode="wait">
      {!selectedSection ? (
        <DotGridBackground key="grid-page">

          {/* ── Back to Home button ── */}
          <div className="fixed top-6 left-6 z-50">
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              onClick={() => navigate("/")}
              className="group flex items-center gap-3 text-gray-300 hover:text-white bg-gray-900/80 hover:bg-gray-800 px-5 py-3 rounded-2xl transition-all duration-300 shadow-xl backdrop-blur-md border border-gray-700 hover:border-purple-500/50"
            >
              <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
              <span className="font-semibold text-sm tracking-wide">Inicio</span>
            </motion.button>
          </div>

          <section className="relative min-h-screen text-white flex flex-col overflow-hidden">
            <div className="flex-1 w-full py-20 px-6 relative z-10">
              <div className="max-w-7xl mx-auto">

                {/* ── Header ── */}
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-center mb-14"
                >
                  <span className="inline-flex items-center gap-2 bg-purple-900/30 border border-purple-700/40 rounded-full px-4 py-1.5 text-purple-300 text-sm font-medium mb-5">
                    <HiAcademicCap className="text-base" />
                    {sections.length} Módulos disponibles
                  </span>

                  <h2 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                    Ruta de Aprendizaje
                  </h2>

                  <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                    Explora los distintos módulos de aprendizaje y desarrolla tus habilidades
                    de programación paso a paso.
                  </p>
                </motion.div>

                {/* ── Progress overview bar ── */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="max-w-3xl mx-auto mb-14"
                >
                  <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/40 rounded-2xl p-5 flex items-center justify-between gap-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-white shadow-lg">
                        <BsLayers className="text-lg" />
                      </div>
                      <div>
                        <p className="text-white font-semibold text-sm">Progreso general</p>
                        <p className="text-gray-500 text-xs">Completa cada módulo para avanzar</p>
                      </div>
                    </div>
                    <div className="flex-1 max-w-[200px]">
                      <div className="flex justify-between text-xs text-gray-400 mb-1.5">
                        <span>0 / {sections.length}</span>
                        <span>0%</span>
                      </div>
                      <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full transition-all duration-500" style={{ width: "0%" }} />
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* ── Cards grid ── */}
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-10"
                >
                  {mappedSections.map((mode, index) => (
                    <motion.div key={mode.id} variants={cardVariants}>
                      <GameModeCard
                        mode={mode}
                        index={index}
                        onClick={() => setSelectedSection(mode.originalSectionData)}
                      />
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </section>

        </DotGridBackground>
      ) : (
        <motion.div
          key="learning-path"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-50 bg-gray-900 w-full h-full overflow-y-auto"
        >
          <LearningPath
            selectedSection={selectedSection}
            onBack={() => { setSelectedSection(null); navigate("/game-modes"); }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default GameModesPage;