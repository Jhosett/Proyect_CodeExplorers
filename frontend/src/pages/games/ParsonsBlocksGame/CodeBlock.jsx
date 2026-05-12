import { getBlockStyle } from "./blockStyles";
import { HiSpeakerWave } from "react-icons/hi2";
import { FaCube, FaReply, FaArrowRight, FaSearch, FaCheck } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

/**
 * Icon component map — maps block.type to a react-icon.
 * Extensible: add new types here as the game grows.
 */
const TYPE_ICONS = {
  // Module 1: Logic
  action: FaArrowRight,
  check:  FaSearch,
  result: FaCheck,
  // Module 2+: Code
  print:  HiSpeakerWave,
  var:    FaCube,
  return: FaReply,
};

/**
 * Shared block card renderer.
 * Used by both BlockTray (source) and ExecutionPath (drop zone).
 *
 * @param {object}  block       – block data ({ id, type, label, sub })
 * @param {number}  [stepNumber] – if provided, renders a step badge (path mode)
 * @param {boolean} [used]      – dims the block when already placed (tray mode)
 * @param {function} [onRemove] – renders a ✕ button when provided (path mode)
 * @param {string}  [className] – extra Tailwind classes
 * @param {object}  rest        – forwarded to the root div (draggable, onDragStart…)
 */
export default function CodeBlock({
  block,
  stepNumber,
  used = false,
  onRemove,
  className = "",
  ...rest
}) {
  const style = getBlockStyle(block.type);
  const IconComponent = TYPE_ICONS[block.type];

  return (
    <div
      {...rest}
      className={`
        flex items-center gap-1.5 sm:gap-2 md:gap-3 pl-2 sm:pl-2.5 md:pl-3 pr-2 sm:pr-3 md:pr-4 py-1.5 sm:py-2
        rounded-lg border-l-4 select-none transition-all shrink-0
        ${style.border}
        ${used
          ? "bg-slate-700/40 opacity-40 cursor-not-allowed"
          : "bg-slate-700 hover:bg-slate-600 hover:scale-[1.02] cursor-grab active:cursor-grabbing shadow-md"
        }
        ${className}
      `}
    >
      {/* Step badge (path mode only) */}
      {stepNumber != null && (
        <div
          className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center
                      text-[9px] sm:text-[10px] font-bold shrink-0 ${style.step}`}
        >
          {stepNumber}
        </div>
      )}

      {/* Icon (react-icon based on block.type) */}
      <span
        className={`text-base sm:text-lg w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 flex items-center justify-center
                    rounded-md shrink-0 ${style.iconBg}`}
      >
        {IconComponent && <IconComponent />}
      </span>

      {/* Label + code */}
      <div className="flex flex-col min-w-0 flex-1">
        <span className={`text-xs sm:text-sm font-medium text-white truncate ${used ? "line-through" : ""}`}>
          {block.label}
        </span>
        <span className={`text-[10px] sm:text-xs font-mono truncate ${style.subText}`}>
          {block.sub}
        </span>
      </div>

      {/* Remove button (path mode only) */}
      {onRemove && (
        <button
          onClick={(e) => { e.stopPropagation(); onRemove(); }}
          className="ml-auto text-slate-500 hover:text-red-400 transition-colors shrink-0 p-1"
        >
          <IoClose className="text-sm sm:text-base" />
        </button>
      )}
    </div>
  );
}
