export default function BlockTray({ blocks, onTrayDragStart, setDragOverIndex, pathBlocks }) {

  const alreadyInPath = (id) => pathBlocks.some(b => b.id === id);

  return (

    <div className="bg-slate-800 border-t border-slate-700 p-5 min-h-[120px]">

      <div className="text-xs uppercase text-slate-400 mb-2">
        Bandeja de bloques
      </div>

      <div className="flex flex-wrap gap-2">

        {blocks.map(block => (

          <div
            key={block.id}
            draggable={!alreadyInPath(block.id)}
            onDragStart={() => onTrayDragStart(block)}
            onDragEnd={() => setDragOverIndex(null)}
            className={`px-3 py-2 rounded text-sm select-none transition-all ${
              alreadyInPath(block.id)
                ? "bg-slate-600 opacity-40 cursor-not-allowed"
                : "bg-slate-700 hover:bg-slate-600 cursor-grab active:cursor-grabbing"
            }`}
          >
            {block.icon} {block.label}
          </div>

        ))}

      </div>

    </div>

  );
}