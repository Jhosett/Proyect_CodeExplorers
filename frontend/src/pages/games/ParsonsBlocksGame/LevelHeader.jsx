import { MdDragHandle } from "react-icons/md";
import { FaHeart } from "react-icons/fa";

export default function LevelHeader({ lives = 3, maxLives = 3 }) {
  return (
    <div
      className="w-full bg-[#0f1b2d] border-b border-slate-700
                 px-4 sm:px-6 py-2 sm:py-3
                 flex items-center justify-between gap-2"
    >
      {/* Lado Izquierdo */}
      <div className="flex gap-1 shrink-0">
        <MdDragHandle className="text-3xl sm:text-4xl text-white" />
      </div>

      {/* Centro */}
      <div className="flex flex-col gap-0.5 sm:gap-1 min-w-0">
        {/* Nivel */}
        <div className="inline-block px-3 sm:px-4 py-0.5 sm:py-1 rounded-full border border-cyan-400 text-cyan-300 text-xs sm:text-sm w-fit truncate">
          Nivel 1 - Bloques
        </div>

        {/* Objetivo */}
        <div className="text-xs sm:text-sm text-slate-200 truncate">
          Objetivo:{" "}
          <span className="text-yellow-400 font-semibold">Saluda al mundo</span>
        </div>
      </div>

      {/* Lado Derecho – Hearts wired to lives state */}
      <div className="shrink-0">
        <div className="flex items-center gap-1">
          {Array.from({ length: maxLives }, (_, i) => (
            <FaHeart
              key={i}
              className={`text-base sm:text-lg transition-all duration-300 ${
                i < lives
                  ? "text-red-400 scale-100"
                  : "text-slate-600 scale-75 opacity-50"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
