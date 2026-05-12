// ── Shared block type styles ──────────────────────────────
// Single source of truth used by CodeBlock, BlockTray, and ExecutionPath.

export const TYPE_STYLES = {
  // ── Module 1: Logic (no code) ──────────────────────────
  action: {
    border: "border-l-cyan-500",
    iconBg: "bg-cyan-500/20 text-cyan-300",
    subText: "text-cyan-400",
    step: "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40",
  },
  check: {
    border: "border-l-amber-500",
    iconBg: "bg-amber-500/20 text-amber-300",
    subText: "text-amber-400",
    step: "bg-amber-500/20 text-amber-300 border border-amber-500/40",
  },
  result: {
    border: "border-l-emerald-500",
    iconBg: "bg-emerald-500/20 text-emerald-300",
    subText: "text-emerald-400",
    step: "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40",
  },

  // ── Module 2+: Code (Python) ───────────────────────────
  print: {
    border: "border-l-violet-500",
    iconBg: "bg-violet-500/20 text-violet-300",
    subText: "text-violet-400",
    step: "bg-violet-500/20 text-violet-300 border border-violet-500/40",
  },
  var: {
    border: "border-l-blue-500",
    iconBg: "bg-blue-500/20 text-blue-300",
    subText: "text-blue-400",
    step: "bg-blue-500/20 text-blue-300 border border-blue-500/40",
  },
  return: {
    border: "border-l-emerald-500",
    iconBg: "bg-emerald-500/20 text-emerald-300",
    subText: "text-emerald-400",
    step: "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40",
  },
};

export const DEFAULT_STYLE = {
  border: "border-l-slate-500",
  iconBg: "bg-slate-500/20 text-slate-300",
  subText: "text-slate-400",
  step: "bg-slate-600 text-slate-300 border border-slate-500",
};

export const getBlockStyle = (type) => TYPE_STYLES[type] ?? DEFAULT_STYLE;
