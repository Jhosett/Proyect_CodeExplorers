export default function ConsoleOutput({ consoleLines }) {

  return (

    <div className="bg-black border-t border-slate-700 p-3 text-sm font-mono">

      <div className="text-slate-400 text-xs mb-1">
        Consola de salida
      </div>

      {consoleLines.map((line, i) => (

        <div
          key={i}
          className={
            line.type === "error"
              ? "text-red-400"
              : line.type === "sys"
              ? "text-slate-500"
              : "text-green-400"
          }
        >
          {line.text}
        </div>

      ))}

    </div>

  );
}