import CodeBlock from "./CodeBlock";

export default function BlockTray({ blocks, onTrayDragStart, setDragOverIndex, pathBlocks, selectedBlockId }) {

  const alreadyInPath = (id) => pathBlocks.some(b => b.id === id);

  return (
    <div className="bg-slate-800 border-t border-slate-700 p-2 sm:p-3 md:p-4 min-h-[120px] sm:min-h-[140px] md:min-h-[160px] max-h-[180px] sm:max-h-[200px] md:max-h-[220px] flex flex-col">

      <div className="text-[10px] sm:text-xs uppercase text-slate-400 mb-1.5 sm:mb-2 md:mb-3 tracking-widest font-semibold">
        Bandeja de bloques
      </div>

      <div className="flex flex-nowrap gap-1.5 sm:gap-2 md:gap-3 overflow-x-auto overflow-y-hidden pb-1 sm:pb-2">
        {blocks.map(block => {
          const used = alreadyInPath(block.id);

          return (
            <CodeBlock
              key={block.id}
              block={block}
              used={used}
              draggable={!used}
              onPointerDown={!used ? () => onTrayDragStart(block) : undefined}
              onTouchStart={!used ? () => onTrayDragStart(block) : undefined}
              onClick={!used ? () => onTrayDragStart(block) : undefined}
              onDragStart={!used ? () => onTrayDragStart(block) : undefined}
              onDragEnd={() => setDragOverIndex(null)}
              className={selectedBlockId === block.id ? "ring-2 ring-cyan-400" : ""}
            />
          );
        })}
      </div>

    </div>
  );
}