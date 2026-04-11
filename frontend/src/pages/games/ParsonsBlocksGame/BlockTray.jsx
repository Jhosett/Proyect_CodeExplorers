const TYPE_STYLES = {
  print: {
    border: "border-l-violet-500",
    iconBg: "bg-violet-500/20 text-violet-300",
    subText: "text-violet-400",
  },
  var: {
    border: "border-l-blue-500",
    iconBg: "bg-blue-500/20 text-blue-300",
    subText: "text-blue-400",
  },
  return: {
    border: "border-l-emerald-500",
    iconBg: "bg-emerald-500/20 text-emerald-300",
    subText: "text-emerald-400",
  },
};

const DEFAULT_STYLE = {
  border: "border-l-slate-500",
  iconBg: "bg-slate-500/20 text-slate-300",
  subText: "text-slate-400",
};

export default function BlockTray({ blocks, onTrayDragStart, setDragOverIndex, pathBlocks }) {

  const alreadyInPath = (id) => pathBlocks.some(b => b.id === id);

  return (
    <div className="bg-slate-800 border-t border-slate-700 p-5 min-h-[120px] max-h-[180px] flex flex-col">

      <div className="text-xs uppercase text-slate-400 mb-3 tracking-widest">
        Bandeja de bloques
      </div>

      <div className="flex flex-wrap gap-3 overflow-y-auto pr-1">
        {blocks.map(block => {
          const used = alreadyInPath(block.id);
          const style = TYPE_STYLES[block.type] ?? DEFAULT_STYLE;

          return (
            <div
              key={block.id}
              draggable={!used}
              onDragStart={() => onTrayDragStart(block)}
              onDragEnd={() => setDragOverIndex(null)}
              className={`
                flex items-center gap-3 pl-3 pr-4 py-2 rounded-lg border-l-4 select-none transition-all
                ${style.border}
                ${used
                  ? "bg-slate-700/40 opacity-40 cursor-not-allowed"
                  : "bg-slate-700 hover:bg-slate-600 hover:scale-[1.02] cursor-grab active:cursor-grabbing shadow-md"
                }
              `}
            >
              <span className={`text-lg w-8 h-8 flex items-center justify-center rounded-md ${style.iconBg}`}>
                {block.icon}
              </span>

              <div className="flex flex-col">
                <span className={`text-sm font-medium text-white ${used ? "line-through" : ""}`}>
                  {block.label}
                </span>
                <span className={`text-xs font-mono ${style.subText}`}>
                  {block.sub}
                </span>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
}