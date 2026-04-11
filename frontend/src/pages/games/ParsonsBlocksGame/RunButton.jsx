import { FaPlay } from "react-icons/fa";

export default function RunButton({ runProgram, disabled }) {
  return (
    <button
      onClick={runProgram}
      disabled={disabled}
      className="bg-green-500 text-white hover:bg-white hover:text-blue-950  py-3 font-bold flex items-center justify-center gap-2"
    >
      <FaPlay /> Ejecutar programa
    </button>
  );
}