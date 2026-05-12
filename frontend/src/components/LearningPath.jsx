import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaLock, FaPlay, FaArrowLeft, FaStar, FaTrophy, FaChevronRight } from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi';

/* ─── Module-type icon + color mappings ──────────────────────── */
const moduleStyles = {
  logic:        { accent: '#818cf8', glow: 'rgba(129,140,248,.35)', gradient: 'from-indigo-500 to-violet-600',   label: 'Lógica' },
  variables:    { accent: '#34d399', glow: 'rgba(52,211,153,.35)',  gradient: 'from-emerald-500 to-teal-600',    label: 'Variables' },
  conditionals: { accent: '#60a5fa', glow: 'rgba(96,165,250,.35)', gradient: 'from-blue-500 to-cyan-600',       label: 'Condicionales' },
  loops:        { accent: '#f472b6', glow: 'rgba(244,114,182,.35)',gradient: 'from-pink-500 to-rose-600',       label: 'Ciclos' },
  functions:    { accent: '#a78bfa', glow: 'rgba(167,139,250,.35)',gradient: 'from-violet-500 to-purple-600',   label: 'Funciones' },
  arrays:       { accent: '#fb923c', glow: 'rgba(251,146,60,.35)', gradient: 'from-orange-500 to-amber-600',    label: 'Arreglos' },
  expert:       { accent: '#fbbf24', glow: 'rgba(251,191,36,.40)', gradient: 'from-amber-400 to-yellow-500',    label: 'Experto' },
};

/* ─── Animated stage card ────────────────────────────────────── */
const StageCard = ({ stage, index, total, navigate, sectionId }) => {
  const isUnlocked = stage.isUnlocked;
  const isExpert   = stage.moduleType === 'expert';
  const style      = moduleStyles[stage.moduleType] || moduleStyles.logic;
  const isLeft     = index % 2 === 0;
  const ref        = useRef(null);
  const isInView   = useInView(ref, { once: true, margin: '-60px' });

  return (
    <div
      ref={ref}
      className="relative flex items-center w-full"
      style={{ minHeight: '160px' }}
    >
      {/* ── Centre timeline node ── */}
      <div className="absolute left-1/2 -translate-x-1/2 z-30 flex flex-col items-center">
        {/* Pulse ring for unlocked nodes */}
        {isUnlocked && (
          <motion.div
            className="absolute rounded-full"
            style={{
              width: 68,
              height: 68,
              border: `2px solid ${style.accent}`,
              opacity: 0.25,
            }}
            animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0, 0.3] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        )}

        <motion.button
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ delay: 0.15, type: 'spring', stiffness: 260, damping: 20 }}
          onClick={() => isUnlocked && navigate(`/ParsonsBlocks?sectionId=${sectionId}`)}
          className={`relative w-14 h-14 rounded-full flex items-center justify-center font-black text-lg shadow-xl transition-all duration-300
            ${isUnlocked
              ? `bg-gradient-to-br ${style.gradient} text-white cursor-pointer hover:scale-110`
              : 'bg-slate-800 border-2 border-slate-700 text-slate-600 cursor-not-allowed'
            }`}
          style={isUnlocked ? { boxShadow: `0 0 24px ${style.glow}` } : {}}
        >
          {isUnlocked
            ? (isExpert ? <FaTrophy className="text-xl text-black/80" /> : <FaPlay className="text-base pl-0.5" />)
            : <FaLock className="text-base" />
          }
        </motion.button>

        {/* Step number badge */}
        <motion.span
          initial={{ opacity: 0, y: 6 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.35 }}
          className="mt-1.5 text-[10px] font-bold tracking-widest uppercase"
          style={{ color: isUnlocked ? style.accent : '#475569' }}
        >
          {index + 1}/{total}
        </motion.span>
      </div>

      {/* ── Card — alternates left / right ── */}
      <motion.div
        initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.55, ease: 'easeOut', delay: 0.1 }}
        className={`w-[calc(50%-56px)] ${isLeft ? 'mr-auto pr-4' : 'ml-auto pl-4'}`}
      >
        <div
          onClick={() => isUnlocked && navigate(`/ParsonsBlocks?sectionId=${sectionId}`)}
          className={`group relative rounded-2xl border backdrop-blur-md p-5 transition-all duration-300 
            ${isUnlocked
              ? 'bg-slate-800/60 border-slate-700/50 hover:border-opacity-80 cursor-pointer hover:-translate-y-1 hover:shadow-2xl'
              : 'bg-slate-900/40 border-slate-800/40 cursor-not-allowed opacity-60'
            }`}
          style={isUnlocked ? {
            borderColor: `${style.accent}30`,
            '--hover-shadow': `0 8px 40px ${style.glow}`,
          } : {}}
          onMouseEnter={e => { if (isUnlocked) e.currentTarget.style.boxShadow = `0 8px 40px ${style.glow}`; }}
          onMouseLeave={e => { if (isUnlocked) e.currentTarget.style.boxShadow = 'none'; }}
        >
          {/* Top row: badge + sparkle */}
          <div className="flex items-center justify-between mb-3">
            <span
              className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-lg"
              style={{
                backgroundColor: isUnlocked ? `${style.accent}18` : 'rgba(51,65,85,.4)',
                color: isUnlocked ? style.accent : '#64748b',
              }}
            >
              {isExpert && <FaStar className="text-amber-400" />}
              {style.label}
            </span>

            {isUnlocked && (
              <HiSparkles className="text-base opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ color: style.accent }} />
            )}
          </div>

          {/* Title */}
          <h3 className={`font-bold text-base mb-1.5 leading-snug ${isUnlocked ? 'text-white' : 'text-slate-500'}`}>
            {stage.title}
          </h3>

          {/* Description */}
          <p className={`text-xs leading-relaxed ${isUnlocked ? 'text-slate-400' : 'text-slate-600'}`}>
            {stage.description}
          </p>

          {/* Bottom action */}
          {isUnlocked ? (
            <div className="mt-4 flex items-center gap-1.5 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ color: style.accent }}>
              Comenzar nivel <FaChevronRight className="text-[10px]" />
            </div>
          ) : (
            <div className="mt-3 flex items-center gap-1.5 text-[11px] text-red-400/70 font-semibold">
              <FaLock className="text-[10px]" /> Completa el nivel anterior
            </div>
          )}

          {/* Connector arrow pointing to centre */}
          <div
            className={`absolute top-1/2 -translate-y-1/2 w-3 h-3 rotate-45 border backdrop-blur-sm
              ${isUnlocked ? 'bg-slate-800/60 border-slate-700/50' : 'bg-slate-900/40 border-slate-800/40'}`}
            style={{
              ...(isLeft
                ? { right: '-6px', borderLeft: 'none', borderBottom: 'none' }
                : { left: '-6px', borderRight: 'none', borderTop: 'none' }),
              borderColor: isUnlocked ? `${style.accent}30` : undefined,
            }}
          />
        </div>
      </motion.div>
    </div>
  );
};

/* ─── Main component ─────────────────────────────────────────── */
const LearningPath = ({ selectedSection, onBack }) => {
  if (!selectedSection) return null;

  const navigate = useNavigate();
  const stages   = selectedSection.stages;
  const style    = moduleStyles[stages[0]?.moduleType] || moduleStyles.logic;

  /* Compute progress */
  const completed  = stages.filter(s => s.isUnlocked).length;
  const percentage = Math.round((completed / stages.length) * 100);

  return (
    <div className="w-full min-h-screen bg-[#0B1120] text-white overflow-x-hidden relative">

      {/* ── Ambient glow blobs ── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 right-1/4 w-[700px] h-[700px] rounded-full blur-[180px] opacity-[0.07]"
          style={{ background: style.accent }} />
        <div className="absolute bottom-0 -left-40 w-[500px] h-[500px] rounded-full blur-[150px] opacity-[0.05]"
          style={{ background: style.accent }} />
      </div>

      {/* ── Subtle grid overlay ── */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      {/* ── Back button ── */}
      <div className="fixed top-6 left-6 z-50">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={onBack}
          className="group flex items-center gap-3 text-gray-300 hover:text-white bg-gray-900/80 hover:bg-gray-800 px-5 py-3 rounded-2xl transition-all duration-300 shadow-xl backdrop-blur-md border border-gray-700 hover:border-purple-500/50"
        >
          <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-semibold text-sm tracking-wide">Volver Módulos</span>
        </motion.button>
      </div>

      {/* ── Header section ── */}
      <div className="relative z-10 pt-28 pb-8 px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          {/* Badge */}
          <span
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium mb-5 border"
            style={{
              backgroundColor: `${style.accent}12`,
              borderColor: `${style.accent}30`,
              color: style.accent,
            }}
          >
            <HiSparkles />
            {stages.length} Niveles
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400 mb-3 leading-tight">
            {selectedSection.title}
          </h1>

          <p className="text-slate-400 text-base md:text-lg leading-relaxed max-w-xl mx-auto">
            {selectedSection.objective}
          </p>

          {/* Progress bar */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-8 max-w-md mx-auto"
          >
            <div className="flex items-center justify-between text-xs text-slate-500 mb-2 font-medium">
              <span>Progreso del módulo</span>
              <span style={{ color: style.accent }}>{completed}/{stages.length} completados</span>
            </div>
            <div className="h-2 bg-slate-800 rounded-full overflow-hidden border border-slate-700/50">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${percentage}%` }}
                transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
                className="h-full rounded-full"
                style={{ background: `linear-gradient(to right, ${style.accent}, ${style.accent}aa)` }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* ── Timeline section ── */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 pb-32">

        {/* Centre vertical line */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px]">
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: '100%' }}
            transition={{ duration: 1.5, ease: 'easeOut', delay: 0.3 }}
            className="w-full rounded-full"
            style={{
              background: `linear-gradient(to bottom, ${style.accent}40, ${style.accent}10, transparent)`,
            }}
          />
        </div>

        {/* Stage cards */}
        <div className="flex flex-col gap-6 md:gap-10">
          {stages.map((stage, index) => (
            <StageCard
              key={stage.id}
              stage={stage}
              index={index}
              total={stages.length}
              navigate={navigate}
              sectionId={selectedSection.id}
            />
          ))}
        </div>

        {/* End marker */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 + stages.length * 0.1, type: 'spring' }}
          className="flex justify-center mt-12"
        >
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center border-2 shadow-lg"
            style={{
              borderColor: `${style.accent}50`,
              backgroundColor: `${style.accent}10`,
              boxShadow: `0 0 20px ${style.glow}`,
            }}
          >
            <FaTrophy className="text-lg" style={{ color: style.accent }} />
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 + stages.length * 0.1 }}
          className="text-center text-sm text-slate-500 mt-4 font-medium"
        >
          ¡Completa todos los niveles para dominar este módulo!
        </motion.p>
      </div>
    </div>
  );
};

export default LearningPath;