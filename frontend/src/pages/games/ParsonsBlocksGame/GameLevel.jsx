import { useState, useRef } from "react";
import Swal from "sweetalert2";
import LevelHeader from "./LevelHeader";
import ExecutionPath from "./ExecutionPath";
import BlockTray from "./BlockTray";
import AvatarZone from "./AvatarZone";
import ConsoleOutput from "./ConsoleOutput";
import RunButton from "./RunButton";
import InstructionsModal from "./InstructionsModal";
import { BLOCKS, SOLUTION } from "./blocksData";

const MAX_LIVES = 3;

export default function GameLevel() {

  const [pathBlocks, setPathBlocks] = useState([]);
  const [consoleLines, setConsoleLines] = useState([
    { type: "sys", text: "// Ejecuta tu programa para ver la salida..." }
  ]);
  const [step, setStep] = useState(0);
  const [running, setRunning] = useState(false);
  const [lives, setLives] = useState(MAX_LIVES);
  const [completed, setCompleted] = useState(false);
  const [dragOverIndex, setDragOverIndex] = useState(null);
  const dragSource = useRef(null);

  // ── Drag handlers ────────────────────────────────────────

  const onTrayDragStart = (block) => {
    dragSource.current = { origin: "tray", block };
  };

  const onPathDragStart = (block, index) => {
    dragSource.current = { origin: "path", block, index };
  };

  const onDropToPath = (dropIndex) => {
    if (!dragSource.current || completed) return;
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
    if (completed) return;
    setPathBlocks(pathBlocks.filter(b => b.id !== id));
  };

  // ── Game reset ───────────────────────────────────────────

  const resetGame = () => {
    setPathBlocks([]);
    setStep(0);
    setLives(MAX_LIVES);
    setCompleted(false);
    setConsoleLines([
      { type: "sys", text: "// Ejecuta tu programa para ver la salida..." }
    ]);
  };

  // ── Run program ──────────────────────────────────────────

  const sleep = (ms) => new Promise(r => setTimeout(r, ms));

  const runProgram = async () => {
    if (running || pathBlocks.length === 0 || completed) return;

    setRunning(true);
    setConsoleLines([]);

    // Animate execution step by step
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

    // Check solution
    const ids = pathBlocks.map(x => x.id);
    const correct =
      SOLUTION.every((s, i) => ids[i] === s) &&
      ids.length === SOLUTION.length;

    setRunning(false);

    if (correct) {
      // ✅ Success path
      setCompleted(true);
      setConsoleLines(prev => [
        ...prev,
        { type: "success", text: "✓ ¡Programa correcto! ¡Bien hecho!" }
      ]);

      await Swal.fire({
        title: "¡Nivel completado!",
        text: "Has ordenado los bloques correctamente.",
        icon: "success",
        confirmButtonText: "¡Genial!",
        background: "#1e293b",
        color: "#f1f5f9",
        confirmButtonColor: "#22c55e",
      });

    } else {
      // ❌ Failure path – lose a life
      const newLives = Math.max(0, lives - 1);
      setLives(newLives);

      setConsoleLines(prev => [
        ...prev,
        {
          type: "error",
          text: `✗ Revisa el orden de los bloques (${newLives} vidas restantes)`
        }
      ]);

      if (newLives <= 0) {
        // 💔 Game over
        await Swal.fire({
          title: "¡Sin vidas!",
          text: "No te preocupes, puedes intentar de nuevo.",
          icon: "error",
          confirmButtonText: "Reiniciar",
          background: "#1e293b",
          color: "#f1f5f9",
          confirmButtonColor: "#ef4444",
        });
        resetGame();
      }
    }
  };

  // ── Render ───────────────────────────────────────────────

  return (

    <div className="h-screen flex flex-col bg-slate-900 text-white overflow-hidden">

      <InstructionsModal />

      <LevelHeader lives={lives} maxLives={MAX_LIVES} />

      {/* Main area: single column on mobile, two columns on md+ */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr_280px] flex-1 min-h-0 overflow-y-auto md:overflow-hidden">

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
        disabled={running || completed}
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