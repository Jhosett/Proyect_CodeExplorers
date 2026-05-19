import { useState, useRef, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import LevelHeader from "./LevelHeader";
import LevelInfoDrawer from "./LevelInfoDrawer";
import ExecutionPath from "./ExecutionPath";
import BlockTray from "./BlockTray";
import AvatarZone from "./AvatarZone";
import ConsoleOutput from "./ConsoleOutput";
import RunButton from "./RunButton";
import InstructionsModal from "./InstructionsModal";
import { getLevelById } from "../../../services/levelService";
import { saveProgress } from "../../../services/progressService";
import { auth } from "../../../firebase/firebaseConfig";

const DEFAULT_LEVEL_ID = "sec1_stg1_lvl1";

export default function GameLevel() {
  const { levelId } = useParams();
  const navigate = useNavigate();
  const currentLevelId = levelId || DEFAULT_LEVEL_ID;

  // ── Level data from Firestore ─────────────────────────────
  const [levelData, setLevelData] = useState(null);
  const [loadingLevel, setLoadingLevel] = useState(true);
  const [loadError, setLoadError] = useState(null);

  // ── Game state ────────────────────────────────────────────
  const [pathBlocks, setPathBlocks] = useState([]);
  const [consoleLines, setConsoleLines] = useState([
    { type: "sys", text: "// Ejecuta tu programa para ver la salida..." }
  ]);
  const [step, setStep] = useState(0);
  const [running, setRunning] = useState(false);
  const [lives, setLives] = useState(3);
  const [completed, setCompleted] = useState(false);
  const [dragOverIndex, setDragOverIndex] = useState(null);
  const [selectedBlock, setSelectedBlock] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const dragSource = useRef(null);

  // ── Load level from Firestore ─────────────────────────────

  useEffect(() => {
    let cancelled = false;
    setLoadingLevel(true);
    setLoadError(null);

    getLevelById(currentLevelId).then((data) => {
      if (cancelled) return;
      if (!data) {
        setLoadError("Nivel no encontrado");
      } else {
        setLevelData(data);
        setLives(data.maxLives || 3);
      }
      setLoadingLevel(false);
    }).catch((err) => {
      if (cancelled) return;
      console.error("Error loading level:", err);
      setLoadError("Error al cargar el nivel");
      setLoadingLevel(false);
    });

    // Reset game state when level changes
    setPathBlocks([]);
    setStep(0);
    setCompleted(false);
    setSelectedBlock(null);
    setConsoleLines([
      { type: "sys", text: "// Ejecuta tu programa para ver la salida..." }
    ]);

    return () => { cancelled = true; };
  }, [currentLevelId]);

  // ── Derived values ────────────────────────────────────────

  const blocks = levelData?.blocks || [];
  const solution = levelData?.solution || [];
  const maxLives = levelData?.maxLives || 3;

  // ── Drag handlers ────────────────────────────────────────

  const clearBlockSelection = () => {
    dragSource.current = null;
    setDragOverIndex(null);
    setSelectedBlock(null);
  };

  const onTrayDragStart = (block) => {
    dragSource.current = { origin: "tray", block };
    setSelectedBlock(block);
  };

  const onPathDragStart = (block, index) => {
    dragSource.current = { origin: "path", block, index };
    setSelectedBlock(block);
  };

  const onDropToPath = (dropIndex) => {
    if (!dragSource.current || completed) return;
    const { origin, block, index: fromIndex } = dragSource.current;

    if (origin === "tray") {
      if (pathBlocks.find(b => b.id === block.id)) {
        clearBlockSelection();
        return;
      }
      const updated = [...pathBlocks];
      updated.splice(dropIndex, 0, block);
      setPathBlocks(updated);
    } else if (origin === "path") {
      if (fromIndex === dropIndex) {
        clearBlockSelection();
        return;
      }
      const updated = [...pathBlocks];
      updated.splice(fromIndex, 1);
      const target = dropIndex > fromIndex ? dropIndex - 1 : dropIndex;
      updated.splice(target, 0, block);
      setPathBlocks(updated);
    }

    clearBlockSelection();
  };

  const removeBlock = (id) => {
    if (completed) return;
    setPathBlocks(pathBlocks.filter(b => b.id !== id));
  };

  // ── Game reset ───────────────────────────────────────────

  const resetGame = () => {
    setPathBlocks([]);
    setStep(0);
    setLives(maxLives);
    setCompleted(false);
    setConsoleLines([
      { type: "sys", text: "// Ejecuta tu programa para ver la salida..." }
    ]);
  };

  // ── Navigate to next level ───────────────────────────────

  const goToNextLevel = () => {
    if (levelData?.nextLevelId) {
      navigate(`/ParsonsBlocks/${levelData.nextLevelId}`);
    } else {
      // Last level of the module — go back to game modes
      navigate("/game-modes");
    }
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
      solution.every((s, i) => ids[i] === s) &&
      ids.length === solution.length;

    setRunning(false);

    if (correct) {
      // ✅ Success path
      setCompleted(true);
      setConsoleLines(prev => [
        ...prev,
        { type: "success", text: `✓ ${levelData.successMessage || "¡Correcto!"}` }
      ]);

      // Save progress to Firestore
      if (auth.currentUser) {
        try {
          await saveProgress(auth.currentUser.uid, currentLevelId, {
            completed: true,
            livesLeft: lives,
            points: levelData.points || 100,
          });
        } catch (err) {
          console.error("Error saving progress:", err);
        }
      }

      // Show success dialog with "Next Level" option
      const hasNext = !!levelData.nextLevelId;
      const result = await Swal.fire({
        title: "¡Nivel completado!",
        text: levelData.successMessage || "Has ordenado los bloques correctamente.",
        icon: "success",
        showCancelButton: hasNext,
        confirmButtonText: hasNext ? "Siguiente nivel" : "¡Genial!",
        cancelButtonText: "Quedarse aquí",
        background: "#1e293b",
        color: "#f1f5f9",
        confirmButtonColor: "#22c55e",
        cancelButtonColor: "#475569",
      });

      if (result.isConfirmed && hasNext) {
        goToNextLevel();
      }

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

  // ── Loading / Error states ───────────────────────────────

  if (loadingLevel) {
    return (
      <div className="h-screen flex items-center justify-center bg-slate-900">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-cyan-400 border-t-transparent rounded-full
                          animate-spin mx-auto mb-4" />
          <p className="text-slate-400 text-sm">Cargando nivel...</p>
        </div>
      </div>
    );
  }

  if (loadError || !levelData) {
    return (
      <div className="h-screen flex items-center justify-center bg-slate-900">
        <div className="text-center space-y-4">
          <p className="text-red-400 text-lg font-semibold">
            {loadError || "Nivel no encontrado"}
          </p>
          <button
            onClick={() => navigate("/game-modes")}
            className="px-6 py-2.5 rounded-xl bg-slate-700 hover:bg-slate-600
                       text-white text-sm font-medium transition-colors"
          >
            Volver a los módulos
          </button>
        </div>
      </div>
    );
  }

  // ── Build info for drawer ────────────────────────────────

  const drawerInfo = levelData.info || {
    title: levelData.title,
    difficulty: levelData.difficulty,
    topic: levelData.stageId,
    concepts: [],
    introduction: levelData.objective,
    tip: null,
  };

  // ── Render ───────────────────────────────────────────────

  return (
    <div className="h-screen flex flex-col bg-slate-900 text-white overflow-hidden">

      <InstructionsModal />

      <LevelInfoDrawer
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        info={drawerInfo}
      />

      <LevelHeader
        onMenuClick={() => setDrawerOpen(true)}
        title={levelData.title}
        objective={levelData.objective}
      />

      {/* Main area - Responsive layout */}
      <div className="flex flex-col md:grid md:grid-cols-[1fr_200px] lg:grid-cols-[1fr_280px] flex-1 min-h-0 overflow-hidden">

        <ExecutionPath
          pathBlocks={pathBlocks}
          removeBlock={removeBlock}
          onPathDragStart={onPathDragStart}
          onDropToPath={onDropToPath}
          dragOverIndex={dragOverIndex}
          setDragOverIndex={setDragOverIndex}
          selectedBlockId={selectedBlock?.id}
        />

        <AvatarZone
          step={step}
          total={pathBlocks.length}
          lives={lives}
          maxLives={maxLives}
        />

      </div>

      <ConsoleOutput consoleLines={consoleLines} />

      <RunButton
        runProgram={runProgram}
        disabled={running || completed}
      />

      <BlockTray
        blocks={blocks}
        onTrayDragStart={onTrayDragStart}
        setDragOverIndex={setDragOverIndex}
        pathBlocks={pathBlocks}
        selectedBlockId={selectedBlock?.id}
      />

    </div>
  );
}