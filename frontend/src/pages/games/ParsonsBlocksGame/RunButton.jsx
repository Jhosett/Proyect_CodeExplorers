import { FaPlay } from "react-icons/fa";

export default function RunButton({ runProgram, disabled }) {
  return (
    <button
      onClick={runProgram}
      disabled={disabled}
      className={`py-2 sm:py-2.5 md:py-3 font-bold flex items-center justify-center gap-2
                  text-xs sm:text-sm md:text-base transition-all
                  ${disabled
                    ? "bg-green-500/50 text-white/60 cursor-not-allowed"
                    : "bg-green-500 text-white hover:bg-white hover:text-blue-950"
                  }`}
    >
      <FaPlay className="text-xs sm:text-sm" /> Ejecutar programa
    </button>
  );
}