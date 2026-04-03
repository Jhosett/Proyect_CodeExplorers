import React from 'react';
import { motion } from 'framer-motion';
import { FaLock, FaPlay, FaArrowLeft } from 'react-icons/fa';

const LearningPath = ({ selectedSection, onBack }) => {
  if (!selectedSection) return null;

  const stages = selectedSection.stages;


  const startY = Math.min(...stages.map(s => s.pathPosition.y));

  const getNormalizedPos = (stage) => ({
    x: stage.pathPosition.x,
    y: stage.pathPosition.y - startY + 250
  });

  const mapHeight = Math.max(...stages.map(s => getNormalizedPos(s).y)) + 300;

  return (
    <div className="w-full relative min-h-screen bg-[#0B1120] flex flex-col items-center py-24 overflow-x-hidden">

      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-purple-900/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="fixed top-6 left-6 z-50">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={onBack}
          className="group flex items-center gap-3 text-gray-300 hover:text-white bg-gray-900/80 hover:bg-gray-800 px-5 py-3 rounded-2xl transition-all duration-300 shadow-xl backdrop-blur-md border border-gray-700 hover:border-purple-500/50"
        >
          <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-semibold text-sm tracking-wide">Volver Módulos</span>
        </motion.button>
      </div>

      <div className="relative w-[1000px] my-auto shrink-0" style={{ minHeight: `${mapHeight}px` }}>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute w-full flex flex-col items-center top-24 z-10"
        >
          <div className="max-w-2xl text-center px-6">
            <h1 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400 mb-3 drop-shadow-sm">
              {selectedSection.title}
            </h1>
            <p className="text-gray-400 text-base leading-relaxed">
              {selectedSection.objective}
            </p>
          </div>
        </motion.div>

        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
          {stages.map((stage) => {
            if (!stage.nextStage) return null;
            const nextNode = stages.find(s => s.id === stage.nextStage);
            if (!nextNode) return null;

            const pos1 = getNormalizedPos(stage);
            const pos2 = getNormalizedPos(nextNode);
            const isPathUnlocked = stage.isUnlocked && nextNode.isUnlocked;

            return (
              <motion.line
                key={`line-${stage.id}`}
                x1={pos1.x}
                y1={pos1.y}
                x2={pos2.x}
                y2={pos2.y}
                stroke={isPathUnlocked ? "#8b5cf6" : "#1F2937"}
                strokeWidth={isPathUnlocked ? "5" : "4"}
                strokeDasharray="8 10"
                strokeLinecap="round"
                className={isPathUnlocked ? "animate-pulse" : ""}
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
              />
            );
          })}
        </svg>

        {stages.map((stage, index) => {
          const isUnlocked = stage.isUnlocked;
          const pos = getNormalizedPos(stage);
          const isExpert = stage.moduleType === "expert";

          return (
            <motion.div
              key={stage.id}
              className="absolute z-20 group"
              style={{
                left: pos.x,
                top: pos.y,
                transform: "translate(-50%, -50%)"
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 + (index * 0.1), type: "spring", stiffness: 250, damping: 20 }}
            >
              <div
                className="relative cursor-pointer"
                onClick={() => {
                  if (isUnlocked) {
                    console.log(`[Seleccionado] Iniciando nivel: ${stage.title} (${stage.id})`);
                  }
                }}
              >
                <div
                  className={`w-20 h-20 md:w-28 md:h-28 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 transform 
                    ${isUnlocked
                      ? isExpert
                        ? 'bg-gradient-to-br from-amber-400 to-orange-600 border-4 border-yellow-300 hover:scale-110 shadow-yellow-500/40 hover:shadow-yellow-500/60'
                        : 'bg-gradient-to-br from-purple-500 to-indigo-600 border-4 border-purple-300 hover:scale-110 shadow-purple-500/40 hover:shadow-purple-500/60 z-10'
                      : 'bg-[#111827] border-4 border-gray-800 hover:border-gray-600 shadow-none'}`}
                >
                  {isUnlocked ? (
                    <FaPlay className={`text-2xl md:text-3xl pl-1 ${isExpert ? 'text-black' : 'text-white'}`} />
                  ) : (
                    <FaLock className="text-gray-600 text-2xl md:text-3xl" />
                  )}
                </div>

                <div className="absolute top-full mt-4 left-1/2 -translate-x-1/2 w-64 text-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-y-0 translate-y-2 bg-gray-900/95 backdrop-blur-xl px-5 py-4 rounded-2xl border border-gray-700 shadow-2xl pointer-events-none z-50">
                  <p className={`font-black text-sm uppercase tracking-wide mb-1 ${isUnlocked ? 'text-white' : 'text-gray-500'}`}>
                    {stage.title}
                  </p>
                  <p className="text-gray-400 text-xs leading-relaxed">
                    {stage.description}
                  </p>

                  {!isUnlocked && (
                    <div className="mt-3 text-xs text-red-500/90 font-bold flex items-center justify-center gap-1.5 bg-red-500/10 py-1.5 rounded-lg border border-red-500/20">
                      <FaLock size={12} /> Requiere desbloquear previo
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default LearningPath;
