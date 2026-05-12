import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, useSearchParams } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { HiAcademicCap, HiLightBulb } from "react-icons/hi";
import { BsBookHalf } from "react-icons/bs";
import { FaStar, FaArrowLeft, FaHome } from "react-icons/fa";

/**
 * Slide-in side drawer triggered by the hamburger icon.
 * Shows thematic introduction, key concepts, and a tip for the level.
 *
 * @param {boolean}  isOpen   – whether the drawer is visible
 * @param {function} onClose  – callback to close the drawer
 * @param {object}   info     – { title, topic, concepts[], introduction, tip, difficulty }
 */
export default function LevelInfoDrawer({ isOpen, onClose, info }) {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const sectionId = searchParams.get("sectionId");
  if (!info) return null;

  const diffColors = {
    "fácil":   "text-emerald-400 bg-emerald-500/15 border-emerald-500/30",
    "medio":   "text-amber-400 bg-amber-500/15 border-amber-500/30",
    "difícil": "text-red-400 bg-red-500/15 border-red-500/30",
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Drawer panel */}
          <motion.aside
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 300 }}
            className="fixed top-0 left-0 z-50 h-full w-[320px] sm:w-[360px]
                       bg-slate-800/95 backdrop-blur-lg border-r border-slate-700/60
                       shadow-2xl shadow-black/40 overflow-y-auto"
          >
            {/* ── Header ── */}
            <div className="flex items-center justify-between p-4 border-b border-slate-700/50">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-600
                                flex items-center justify-center text-white shadow-md">
                  <BsBookHalf className="text-sm" />
                </div>
                <h2 className="text-white font-bold text-sm">Info del Nivel</h2>
              </div>
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-lg bg-slate-700/60 hover:bg-slate-600
                           flex items-center justify-center text-slate-400 hover:text-white
                           transition-colors"
              >
                <IoClose className="text-lg" />
              </button>
            </div>

            <div className="p-5 space-y-5">
              {/* ── Title & difficulty ── */}
              <div>
                <h3 className="text-lg font-bold text-white mb-2">{info.title}</h3>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full
                                    text-xs font-semibold border
                                    ${diffColors[info.difficulty] || diffColors["medio"]}`}>
                    <FaStar className="text-[10px]" />
                    {info.difficulty}
                  </span>
                  {info.topic && (
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full
                                     text-xs font-medium bg-purple-500/15 text-purple-300
                                     border border-purple-500/30">
                      <HiAcademicCap className="text-xs" />
                      {info.topic}
                    </span>
                  )}
                </div>
              </div>

              {/* ── Concepts ── */}
              {info.concepts?.length > 0 && (
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-slate-500 font-semibold mb-2">
                    Conceptos clave
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {info.concepts.map((concept) => (
                      <span
                        key={concept}
                        className="px-2.5 py-1 rounded-lg bg-slate-700/60 border border-slate-600/50
                                   text-xs text-cyan-300 font-medium"
                      >
                        {concept}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* ── Introduction ── */}
              <div>
                <h4 className="text-xs uppercase tracking-widest text-slate-500 font-semibold mb-2">
                  Introducción
                </h4>
                <div className="bg-slate-900/50 border border-slate-700/50 rounded-xl p-4">
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {info.introduction}
                  </p>
                </div>
              </div>

              {/* ── Tip ── */}
              {info.tip && (
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-slate-500 font-semibold mb-2">
                    Consejo
                  </h4>
                  <div className="bg-amber-500/5 border border-amber-500/20 rounded-xl p-4
                                  flex gap-3 items-start">
                    <div className="w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center
                                    shrink-0 mt-0.5">
                      <HiLightBulb className="text-amber-400" />
                    </div>
                    <p className="text-sm text-amber-200/90 leading-relaxed">
                      {info.tip}
                    </p>
                  </div>
                </div>
              )}
              {/* ── Action Buttons ── */}
              <div className="space-y-3">
                <button
                  onClick={() => navigate("/dashboard")}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl
                             bg-gradient-to-r from-cyan-600/20 to-blue-600/20
                             hover:from-cyan-600/30 hover:to-blue-600/30
                             border border-cyan-500/30 hover:border-cyan-500/50
                             text-cyan-300 hover:text-white
                             text-sm font-semibold transition-all group"
                >
                  <FaHome className="text-xs group-hover:scale-110 transition-transform" />
                  Ir al Dashboard
                </button>
                
                <button
                  onClick={() => navigate(sectionId ? `/game-modes/${sectionId}` : "/game-modes")}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl
                             bg-slate-700/50 hover:bg-slate-700 border border-slate-600/50
                             hover:border-purple-500/40 text-slate-300 hover:text-white
                             text-sm font-semibold transition-all group"
                >
                  <FaArrowLeft className="text-xs group-hover:-translate-x-1 transition-transform" />
                  Salir a la ruta de niveles
                </button>
              </div>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
