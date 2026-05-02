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
    <div className="p-3 sm:p-4">

      <div className="text-xs uppercase text-slate-400 mb-2 sm:mb-3 tracking-widest">
        Ruta de ejecución
      </div>

      <div
        className="bg-slate-800 border border-dashed border-slate-600 rounded-lg min-h-[160px] md:min-h-[220px] p-2 sm:p-3 flex flex-col gap-1"
        onDragOver={(e) => handleDragOver(e, pathBlocks.length)}
        onDrop={() => onDropToPath(pathBlocks.length)}
      >

        {pathBlocks.length === 0 && dragOverIndex === null && (
          <div className="text-center text-slate-500 text-sm mt-4">
            Arrastra los bloques aquí
          </div>
        )}

        {pathBlocks.map((block, index) => (
          <div key={block.id}>

            {/* Drop indicator line */}
            <div
              onDragOver={(e) => handleDragOver(e, index)}
              onDrop={(e) => { e.stopPropagation(); onDropToPath(index); }}
              className={`h-1 rounded transition-all mb-1 ${
                dragOverIndex === index ? "bg-purple-500" : "bg-transparent"
              }`}
            />

            {/* Block card */}
            <CodeBlock
              block={block}
              stepNumber={index + 1}
              onRemove={() => removeBlock(block.id)}
              className="w-fit"
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
          className={`h-1 rounded transition-all ${
            dragOverIndex === pathBlocks.length ? "bg-purple-500" : "bg-transparent"
          }`}
        />

      </div>
    </div>
  );
}