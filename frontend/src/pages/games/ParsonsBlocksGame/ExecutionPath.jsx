import CodeBlock from "./CodeBlock";

export default function ExecutionPath({
  pathBlocks,
  removeBlock,
  onPathDragStart,
  onDropToPath,
  dragOverIndex,
  setDragOverIndex,
}) {

  const handleDragOver = (e, index) => {
    e.preventDefault();
    setDragOverIndex(index);
  };

  return (
    <div className="p-2 sm:p-3 md:p-4 flex flex-col min-h-0 h-full">

      <div className="text-[10px] sm:text-xs uppercase text-slate-400 mb-1.5 sm:mb-2 md:mb-3 tracking-widest font-semibold">
        Ruta de ejecución
      </div>

      <div
        className="bg-slate-800 border border-dashed border-slate-600 rounded-lg p-2 sm:p-2.5 md:p-3 flex flex-col gap-1 sm:gap-1.5 flex-1 min-h-0 overflow-y-auto overflow-x-hidden hide-scrollbar"
        onDragOver={(e) => handleDragOver(e, pathBlocks.length)}
        onDrop={() => onDropToPath(pathBlocks.length)}
      >

        {pathBlocks.length === 0 && dragOverIndex === null && (
          <div className="text-center text-slate-500 text-xs sm:text-sm mt-2 sm:mt-4">
            Arrastra los bloques aquí
          </div>
        )}

        {pathBlocks.map((block, index) => (
          <div key={block.id}>

            {/* Drop indicator line */}
            <div
              onDragOver={(e) => handleDragOver(e, index)}
              onDrop={(e) => { e.stopPropagation(); onDropToPath(index); }}
              className={`h-0.5 sm:h-1 rounded transition-all mb-0.5 sm:mb-1 ${
                dragOverIndex === index ? "bg-purple-500" : "bg-transparent"
              }`}
            />

            {/* Block card */}
            <CodeBlock
              block={block}
              stepNumber={index + 1}
              onRemove={() => removeBlock(block.id)}
              className="w-full"
              draggable
              onDragStart={() => onPathDragStart(block, index)}
              onDragEnd={() => setDragOverIndex(null)}
              onDragOver={(e) => handleDragOver(e, index)}
              onDrop={(e) => { e.stopPropagation(); onDropToPath(index); }}
            />
          </div>
        ))}

        {/* Trailing drop indicator */}
        <div
          onDragOver={(e) => handleDragOver(e, pathBlocks.length)}
          onDrop={() => onDropToPath(pathBlocks.length)}
          className={`h-0.5 sm:h-1 rounded transition-all ${
            dragOverIndex === pathBlocks.length ? "bg-purple-500" : "bg-transparent"
          }`}
        />

      </div>
    </div>
  );
}