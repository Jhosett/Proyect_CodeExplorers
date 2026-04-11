const TYPE_STYLES = {
  print: {
    border: "border-l-violet-500",
    iconBg: "bg-violet-500/20 text-violet-300",
    subText: "text-violet-400",
    step: "bg-violet-500/20 text-violet-300 border border-violet-500/40",
  },
  var: {
    border: "border-l-blue-500",
    iconBg: "bg-blue-500/20 text-blue-300",
    subText: "text-blue-400",
    step: "bg-blue-500/20 text-blue-300 border border-blue-500/40",
  },
  return: {
    border: "border-l-emerald-500",
    iconBg: "bg-emerald-500/20 text-emerald-300",
    subText: "text-emerald-400",
    step: "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40",
  },
};

const DEFAULT_STYLE = {
  border: "border-l-slate-500",
  iconBg: "bg-slate-500/20 text-slate-300",
  subText: "text-slate-400",
  step: "bg-slate-600 text-slate-300 border border-slate-500",
};

export default function ExecutionPath({ pathBlocks, removeBlock, onPathDragStart, onDropToPath, dragOverIndex, setDragOverIndex }) {

  const handleDragOver = (e, index) => {
    e.preventDefault();
    setDragOverIndex(index);
  };

  return (
    <div className="p-4">

      <div className="text-xs uppercase text-slate-400 mb-3 tracking-widest">
        Ruta de ejecución
      </div>

      <div
        className="bg-slate-800 border border-dashed border-slate-600 rounded-lg min-h-[220px] p-3 flex flex-col gap-1"
        onDragOver={(e) => handleDragOver(e, pathBlocks.length)}
        onDrop={() => onDropToPath(pathBlocks.length)}
      >

        {pathBlocks.length === 0 && dragOverIndex === null && (
          <div className="text-center text-slate-500 text-sm mt-4">
            Arrastra los bloques aquí
          </div>
        )}

        {pathBlocks.map((block, index) => {
          const style = TYPE_STYLES[block.type] ?? DEFAULT_STYLE;
          return (
            <div key={block.id}>

              <div
                onDragOver={(e) => handleDragOver(e, index)}
                onDrop={(e) => { e.stopPropagation(); onDropToPath(index); }}
                className={`h-1 rounded transition-all mb-1 ${
                  dragOverIndex === index ? "bg-purple-500" : "bg-transparent"
                }`}
              />

              <div
                draggable
                onDragStart={() => onPathDragStart(block, index)}
                onDragEnd={() => setDragOverIndex(null)}
                onDragOver={(e) => handleDragOver(e, index)}
                onDrop={(e) => { e.stopPropagation(); onDropToPath(index); }}
                className={`
                  w-fit flex items-center gap-2 pl-3 pr-3 py-2 rounded-lg border-l-4 select-none transition-all
                  bg-slate-700 hover:bg-slate-600 hover:scale-[1.01] shadow-md
                  cursor-grab active:cursor-grabbing
                  ${style.border}
                `}
              >

                <div className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold ${style.step}`}>
                  {index + 1}
                </div>

                <span className={`text-base w-7 h-7 flex items-center justify-center rounded-md ${style.iconBg}`}>
                  {block.icon}
                </span>

                <div className="flex flex-col">
                  <span className="text-sm font-medium text-white">{block.label}</span>
                  <span className={`text-xs font-mono ${style.subText}`}>{block.sub}</span>
                </div>

                <button
                  onClick={() => removeBlock(block.id)}
                  className="ml-2 text-slate-500 hover:text-red-400 transition-colors text-xs"
                >
                  ✕
                </button>

              </div>
            </div>
          );
        })}

        <div
          onDragOver={(e) => handleDragOver(e, pathBlocks.length)}
          onDrop={() => onDropToPath(pathBlocks.length)}
          className={`h-1 rounded transition-all ${
            dragOverIndex === pathBlocks.length ? "bg-purple-500" : "bg-transparent"
          }`}
        />

      </div>
    </div>
  );
}