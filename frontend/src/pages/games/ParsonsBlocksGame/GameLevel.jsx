import { useState, useRef } from "react";
import LevelHeader from "./LevelHeader";
import ExecutionPath from "./ExecutionPath";
import BlockTray from "./BlockTray";
import AvatarZone from "./AvatarZone";
import ConsoleOutput from "./ConsoleOutput";
import RunButton from "./RunButton";
import { BLOCKS, SOLUTION } from "./blocksData";

export default function GameLevel() {

  const [pathBlocks, setPathBlocks] = useState([]);
  const [consoleLines, setConsoleLines] = useState([
    { type: "sys", text: "// Ejecuta tu programa para ver la salida..." }
  ]);
  const [step, setStep] = useState(0);
  const [running, setRunning] = useState(false);
  const [dragOverIndex, setDragOverIndex] = useState(null);
  const dragSource = useRef(null); // { origin: "tray" | "path", block, index? }

  // Called when drag starts from the tray
  const onTrayDragStart = (block) => {
    dragSource.current = { origin: "tray", block };
  };

  // Called when drag starts from inside the path (reorder)
  const onPathDragStart = (block, index) => {
    dragSource.current = { origin: "path", block, index };
  };

  // Called when dropping onto the execution path
  const onDropToPath = (dropIndex) => {
    if (!dragSource.current) return;
    const { origin, block, index: fromIndex } = dragSource.current;

    if (origin === "tray") {
      if (pathBlocks.find(b => b.id === block.id)) return;
      const updated = [...pathBlocks];
      updated.splice(dropIndex, 0, block);
      setPathBlocks(updated);
    } else if (origin === "path") {
      if (fromIndex === dropIndex) return;
      const updated = [...pathBlocks];
      updated.splice(fromIndex, 1);
      const target = dropIndex > fromIndex ? dropIndex - 1 : dropIndex;
      updated.splice(target, 0, block);
      setPathBlocks(updated);
    }

    dragSource.current = null;
    setDragOverIndex(null);
  };

  const removeBlock = (id) => {
    setPathBlocks(pathBlocks.filter(b => b.id !== id));
  };

  const sleep = (ms) => new Promise(r => setTimeout(r, ms));

  const runProgram = async () => {

    if (running || pathBlocks.length === 0) return;

    setRunning(true);
    setConsoleLines([]);

    for (let i = 0; i < pathBlocks.length; i++) {

      const block = pathBlocks[i];

      setStep(i + 1);

      if (block.type === "print") {

        setConsoleLines(prev => [
          ...prev,
          { type: "console", text: ">>> " + block.text }
        ]);

      } else {

        setConsoleLines(prev => [
          ...prev,
          { type: "sys", text: "// " + block.text }
        ]);

      }

      await sleep(900);

    }

    const ids = pathBlocks.map(x => x.id);

    const correct =
      SOLUTION.every((s, i) => ids[i] === s) &&
      ids.length === SOLUTION.length;

    if (!correct) {

      setConsoleLines(prev => [
        ...prev,
        { type: "error", text: "✗ Revisa el orden de los bloques" }
      ]);

    }

    setRunning(false);

  };

  return (

    <div className="h-screen flex flex-col bg-slate-900 text-white">

      <LevelHeader />

      <div className="grid grid-cols-[1fr_280px] flex-1">

        <ExecutionPath
          pathBlocks={pathBlocks}
          removeBlock={removeBlock}
          onPathDragStart={onPathDragStart}
          onDropToPath={onDropToPath}
          dragOverIndex={dragOverIndex}
          setDragOverIndex={setDragOverIndex}
        />

        <AvatarZone
          step={step}
          total={pathBlocks.length}
        />

      </div>

      <ConsoleOutput consoleLines={consoleLines} />

      <RunButton
        runProgram={runProgram}
        disabled={running}
      />

      <BlockTray
        blocks={BLOCKS}
        onTrayDragStart={onTrayDragStart}
        onDropToPath={onDropToPath}
        setDragOverIndex={setDragOverIndex}
        pathBlocks={pathBlocks}
      />

    </div>
  );
}