import { FaPlay } from "react-icons/fa";

export default function RunButton({ runProgram, disabled }) {
  return (
    <button
      onClick={runProgram}
      disabled={disabled}
      className={`py-2.5 sm:py-3 font-bold flex items-center justify-center gap-2
                  text-sm sm:text-base transition-all
                  ${disabled
                    ? "bg-green-500/50 text-white/60 cursor-not-allowed"
                    : "bg-green-500 text-white hover:bg-white hover:text-blue-950"
                  }`}
    >
      <FaPlay /> Ejecutar programa
    </button>
  );
}