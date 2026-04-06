export default function ExecutionPath({ pathBlocks, removeBlock, onPathDragStart, onDropToPath, dragOverIndex, setDragOverIndex }) {

  const handleDragOver = (e, index) => {
    e.preventDefault();
    setDragOverIndex(index);
  };

  return (

    <div className="p-4">

      <div className="text-xs uppercase text-slate-400 mb-2">
        Ruta de ejecución
      </div>

      <div
        className="bg-slate-800 border border-dashed border-slate-600 rounded-lg min-h-[220px] p-3 flex flex-col gap-2"
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

            {/* Drop indicator line above each block */}
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
              className="flex items-center gap-2 bg-slate-700 hover:bg-slate-600 p-2 rounded cursor-grab active:cursor-grabbing select-none"
            >

              <div className="w-5 h-5 bg-slate-600 rounded-full flex items-center justify-center text-xs">
                {index + 1}
              </div>

              <div className="flex-1">
                {block.icon} {block.label}
              </div>

              <button
                onClick={() => removeBlock(block.id)}
                className="text-red-400 hover:text-red-300"
              >
                ✕
              </button>

            </div>
          </div>
        ))}

        {/* Drop indicator at the bottom */}
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