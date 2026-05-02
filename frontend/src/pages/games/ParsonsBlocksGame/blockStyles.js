// ── Shared block type styles ──────────────────────────────
// Single source of truth used by CodeBlock, BlockTray, and ExecutionPath.

export const TYPE_STYLES = {
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
