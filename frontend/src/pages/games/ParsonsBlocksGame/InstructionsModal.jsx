import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlay, FaHeart, FaBug, FaGamepad } from "react-icons/fa";
import { MdDragIndicator } from "react-icons/md";
import { HiOutlineArrowPath } from "react-icons/hi2";

const STORAGE_KEY = "parsons_instructions_seen";

const STEPS = [
  {
    icon: <MdDragIndicator className="text-2xl" />,
    color: "from-violet-500 to-purple-600",
    title: "Arrastra los bloques",
    desc: "Toma los bloques de código desde la bandeja inferior y arrástralos hasta la zona de ejecución.",
  },
  {
    icon: <HiOutlineArrowPath className="text-2xl" />,
    color: "from-blue-500 to-cyan-500",
    title: "Ordénalos correctamente",
    desc: "Coloca los bloques en el orden correcto para resolver el ejercicio. ¡Cuidado con los distractores!",
  },
  {
    icon: <FaPlay className="text-xl" />,
    color: "from-emerald-500 to-green-500",
    title: "Ejecuta el programa",
    desc: "Presiona el botón \"Ejecutar programa\" para comprobar si tu solución es correcta.",
  },
  {
    icon: <FaHeart className="text-xl" />,
    color: "from-red-500 to-rose-500",
    title: "Cuida tus vidas",
    desc: "Tienes 3 vidas. Cada respuesta incorrecta te costará una vida. ¡Si las pierdes todas, deberás reiniciar!",
  },
];

export default function InstructionsModal() {
  const [visible, setVisible] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const seen = localStorage.getItem(STORAGE_KEY);
    if (!seen) setVisible(true);
  }, []);

  const dismiss = () => {
    localStorage.setItem(STORAGE_KEY, "true");
    setVisible(false);
  };

  const next = () => {
    if (currentStep < STEPS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      dismiss();
    }
  };

  const prev = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={dismiss}
          />

          {/* Modal card */}
          <motion.div
            initial={{ scale: 0.85, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 22, stiffness: 260 }}
            className="relative w-full max-w-md bg-slate-800/95 border border-slate-600/50
                       rounded-2xl shadow-2xl shadow-black/40 overflow-hidden"
          >
            {/* Top gradient bar */}
            <div className={`h-1.5 w-full bg-gradient-to-r ${STEPS[currentStep].color}`} />

            {/* Content */}
            <div className="p-6 sm:p-8">

              {/* Header */}
              <div className="text-center mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full
                                bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs
                                uppercase tracking-widest mb-3">
                  <FaBug className="inline" /> ¿Cómo jugar?
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-white">
                  Parsons Blocks
                </h2>
                <p className="text-slate-400 text-sm mt-1">
                  Aprende a programar ordenando bloques de código
                </p>
              </div>

              {/* Step indicator dots */}
              <div className="flex justify-center gap-2 mb-6">
                {STEPS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentStep(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === currentStep
                        ? "w-6 bg-cyan-400"
                        : "w-2 bg-slate-600 hover:bg-slate-500"
                    }`}
                  />
                ))}
              </div>

              {/* Step card */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.2 }}
                  className="bg-slate-700/50 border border-slate-600/40 rounded-xl p-5"
                >
                  <div className="flex items-start gap-4">
                    {/* Icon circle */}
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${STEPS[currentStep].color}
                                  flex items-center justify-center text-white shrink-0 shadow-lg`}
                    >
                      {STEPS[currentStep].icon}
                    </div>

                    <div className="min-w-0">
                      <h3 className="text-white font-semibold text-base mb-1">
                        {STEPS[currentStep].title}
                      </h3>
                      <p className="text-slate-300 text-sm leading-relaxed">
                        {STEPS[currentStep].desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Step counter */}
              <div className="text-center text-xs text-slate-500 mt-4">
                {currentStep + 1} / {STEPS.length}
              </div>

              {/* Buttons */}
              <div className="flex items-center gap-3 mt-5">
                {currentStep > 0 ? (
                  <button
                    onClick={prev}
                    className="flex-1 py-2.5 rounded-lg border border-slate-600
                               text-slate-300 hover:bg-slate-700 transition-colors
                               text-sm font-medium"
                  >
                    Anterior
                  </button>
                ) : (
                  <button
                    onClick={dismiss}
                    className="flex-1 py-2.5 rounded-lg border border-slate-600
                               text-slate-400 hover:text-slate-200 hover:bg-slate-700
                               transition-colors text-sm"
                  >
                    Saltar
                  </button>
                )}

                <button
                  onClick={next}
                  className={`flex-1 py-2.5 rounded-lg font-semibold text-sm text-white
                              transition-all shadow-lg bg-gradient-to-r
                              ${currentStep === STEPS.length - 1
                                ? "from-emerald-500 to-green-500 hover:from-emerald-400 hover:to-green-400 shadow-emerald-500/25"
                                : "from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 shadow-cyan-500/25"
                              }`}
                >
                  {currentStep === STEPS.length - 1
                    ? <span className="inline-flex items-center gap-2">¡A jugar! <FaGamepad /></span>
                    : "Siguiente"
                  }
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
