import { useEffect, useRef } from "react";

const LINE_COLORS = {
  error:   "text-red-400",
  success: "text-emerald-400 font-bold",
  sys:     "text-slate-500",
  console: "text-green-400",
};

export default function ConsoleOutput({ consoleLines }) {

  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [consoleLines]);

  return (

    <div className="bg-black border-t border-slate-700 p-3 text-sm font-mono max-h-[140px] overflow-y-auto">

      <div className="text-slate-400 text-xs mb-1">
        Consola de salida
      </div>

      {consoleLines.map((line, i) => (
        <div key={i} className={LINE_COLORS[line.type] ?? "text-slate-300"}>
          {line.text}
        </div>
      ))}

      <div ref={bottomRef} />

    </div>

  );
}