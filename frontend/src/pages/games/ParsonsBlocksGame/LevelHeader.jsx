import React from "react";
import { MdDragHandle } from "react-icons/md";
import { FaHeart } from "react-icons/fa";



export default function LevelHeader() {
  return (
    <div className="w-full bg-[#0f1b2d] border-b border-slate-700 px-6 py-3 flex items-center justify-between">
      {/* Lado Izquierdo */}
      <div className="flex gap-1">
        <MdDragHandle className="text-4xl text-white" />
      </div>

      {/* Centro */}
      <div className="flex flex-col gap-1">
        {/* Nivel */}
        <div className="inline-block px-4 py-1 rounded-full border border-cyan-400 text-cyan-300 text-sm w-fit">
          Nivel 1 - Bloques
        </div>

        {/* Objetivo */}
        <div className="text-sm text-slate-200">
          Objetivo:{" "}
          <span className="text-yellow-400 font-semibold">Saluda al mundo</span>
        </div>
      </div>

      {/* Lado Derecho */}
      <div>
        {/* Estrellas */}
        <div className="flex items-center gap-1 text-red-400">
          <FaHeart/>
          <FaHeart/>
          <FaHeart/>
        </div>

      </div>
    </div>
  );
}
