import CodeBlock from "./CodeBlock";

export default function BlockTray({ blocks, onTrayDragStart, setDragOverIndex, pathBlocks }) {

  const alreadyInPath = (id) => pathBlocks.some(b => b.id === id);

  return (
    <div className="bg-slate-800 border-t border-slate-700 p-3 sm:p-5 min-h-[100px] sm:min-h-[120px] max-h-[150px] sm:max-h-[180px] flex flex-col">

      <div className="text-xs uppercase text-slate-400 mb-2 sm:mb-3 tracking-widest">
        Bandeja de bloques
      </div>

      <div className="flex flex-nowrap sm:flex-wrap gap-2 sm:gap-3 overflow-x-auto sm:overflow-y-auto pb-1 sm:pb-0 pr-0 sm:pr-1">
        {blocks.map(block => {
          const used = alreadyInPath(block.id);

          return (
            <CodeBlock
              key={block.id}
              block={block}
              used={used}
              draggable={!used}
              onDragStart={() => onTrayDragStart(block)}
              onDragEnd={() => setDragOverIndex(null)}
            />
          );
        })}
      </div>

    </div>
  );
}