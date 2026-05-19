import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaTrophy, FaStar, FaUsers } from "react-icons/fa";
import { IoArrowBack } from "react-icons/io5";
import DotGridBackground from "../components/DotGridBackground";
import Header from "../components/Header";
import { getLeaderboard } from "../services/progressService";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" } }),
};

const formatDate = (value) => {
  if (!value) return "Nunca";
  const date = new Date(value);
  return date.toLocaleDateString("es-ES", { day: "numeric", month: "short", year: "numeric" });
};

const getInitials = (name) => {
  if (!name) return "EX";
  const words = name.trim().split(" ");
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
  return (words[0][0] + words[words.length - 1][0]).toUpperCase();
};

export default function RankingPage() {
  const navigate = useNavigate();
  const [leaderboard, setLeaderboard] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadLeaderboard = async () => {
      try {
        const data = await getLeaderboard(20);
        setLeaderboard(data);
      } catch (err) {
        console.error("Error loading ranking:", err);
        setError("No se pudo cargar el ranking. Intenta nuevamente más tarde.");
      } finally {
        setLoading(false);
      }
    };

    loadLeaderboard();
  }, []);

  const bestScore = leaderboard.length > 0 ? leaderboard[0].totalScore : 0;
  const averageStars = leaderboard.length ? Math.round(
    leaderboard.reduce((sum, user) => sum + user.totalStars, 0) / leaderboard.length
  ) : 0;

  return (
    <DotGridBackground>
      <div className="min-h-screen text-white relative">
        <Header />

        <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between mb-8">
            <div className="space-y-4">
              <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
                <span className="inline-flex items-center gap-2 bg-purple-900/30 border border-purple-700/40 rounded-full px-4 py-2 text-purple-300 text-sm font-semibold">
                  <FaTrophy className="text-yellow-300" />
                  Ranking Global
                </span>
              </motion.div>

              <motion.div initial="hidden" animate="visible" variants={fadeInUp} custom={1}>
                <h1 className="text-2xl sm:text-4xl font-bold tracking-tight">
                  Tabla de líderes de Code-Explorers
                </h1>
                <p className="max-w-2xl text-slate-400 text-xs sm:text-base">
                  Consulta los puntajes, niveles completados y progreso de los usuarios registrados. El ranking se actualiza con los mejores resultados guardados en Firestore.
                </p>
              </motion.div>
            </div>

            <motion.button
              onClick={() => navigate(-1)}
              className="inline-flex items-center gap-2 self-start rounded-2xl border border-slate-700 bg-slate-900/70 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-purple-500/50 hover:bg-slate-800"
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.98 }}
            >
              <IoArrowBack className="text-lg" />
              Volver
            </motion.button>
          </div>

          <div className="grid gap-4 xl:grid-cols-[1.4fr_1fr] mb-8">
            <div className="bg-slate-800/80 border border-slate-700 rounded-3xl p-4 sm:p-6 shadow-lg shadow-slate-900/20">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div>
                  <p className="text-xs sm:text-sm uppercase tracking-[0.24em] text-slate-400 font-semibold">Resumen del ranking</p>
                  <h2 className="mt-1 sm:mt-2 text-xl sm:text-2xl font-bold">Mejores exploradores</h2>
                </div>
                <div className="inline-flex items-center justify-center rounded-3xl bg-purple-600/15 px-3 py-2 sm:px-4 sm:py-3 text-purple-300 text-xs sm:text-sm font-semibold self-start sm:self-auto">
                  En vivo desde Firestore
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2 sm:gap-4">
                <div className="rounded-2xl sm:rounded-3xl border border-slate-700 bg-slate-950/40 p-3 sm:p-4">
                  <p className="text-[10px] sm:text-xs uppercase tracking-[0.24em] text-slate-500">Usuarios</p>
                  <p className="mt-1 sm:mt-3 text-2xl sm:text-3xl font-semibold text-white">{leaderboard.length || "0"}</p>
                </div>
                <div className="rounded-2xl sm:rounded-3xl border border-slate-700 bg-slate-950/40 p-3 sm:p-4">
                  <p className="text-[10px] sm:text-xs uppercase tracking-[0.24em] text-slate-500">Mejor puntaje</p>
                  <p className="mt-1 sm:mt-3 text-2xl sm:text-3xl font-semibold text-cyan-300">{bestScore}</p>
                </div>
                <div className="rounded-2xl sm:rounded-3xl border border-slate-700 bg-slate-950/40 p-3 sm:p-4">
                  <p className="text-[10px] sm:text-xs uppercase tracking-[0.24em] text-slate-500">Estrellas</p>
                  <p className="mt-1 sm:mt-3 text-2xl sm:text-3xl font-semibold text-amber-300">{averageStars}</p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-700 bg-slate-800/80 p-4 sm:p-6 shadow-lg shadow-slate-900/10">
              <p className="text-xs sm:text-sm uppercase tracking-[0.24em] text-slate-400 font-semibold mb-3 sm:mb-5">Mejores posiciones</p>
              <div className="grid gap-3 sm:gap-4">
                {loading ? (
                  <div className="rounded-3xl border border-slate-700 bg-slate-950/40 p-6 text-center text-slate-400">Cargando posiciones...</div>
                ) : leaderboard.length === 0 ? (
                  <div className="rounded-3xl border border-slate-700 bg-slate-950/40 p-6 text-center text-slate-400">No hay datos disponibles todavía.</div>
                ) : (
                  leaderboard.slice(0, 3).map((player, index) => (
                    <div key={player.uid} className="flex items-center gap-3 sm:gap-4 rounded-2xl sm:rounded-3xl border border-slate-700 bg-slate-950/40 p-3 sm:p-4">
                      <div className="flex h-10 w-10 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-xl sm:rounded-2xl bg-gradient-to-br from-purple-500 to-cyan-500 text-sm sm:text-lg font-bold text-white">
                        {getInitials(player.username)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs text-slate-400 uppercase tracking-[0.16em]">#{index + 1}</p>
                        <p className="truncate text-sm sm:text-lg font-semibold text-white">{player.username}</p>
                        <p className="text-slate-500 text-xs sm:text-sm">{player.completedLevels} niveles · {player.totalStars} estrellas</p>
                      </div>
                      <div className="text-right shrink-0">
                        <p className="text-lg sm:text-2xl font-semibold text-cyan-300">{player.totalScore}</p>
                        <p className="text-[10px] sm:text-xs text-slate-500">{formatDate(player.lastActivity)}</p>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-slate-700 bg-slate-800/90">
            {/* ── Desktop table header (hidden on mobile) ── */}
            <div className="hidden sm:grid grid-cols-[52px_2fr_140px_120px_120px_160px] gap-4 px-6 py-4 text-xs uppercase tracking-[0.22em] text-slate-500 font-semibold bg-slate-900/80">
              <span>#</span>
              <span>Usuario</span>
              <span>Puntos</span>
              <span>Completados</span>
              <span>Estrellas</span>
              <span>Última actividad</span>
            </div>
            <div className="divide-y divide-slate-700">
              {loading ? (
                <div className="p-8 text-center text-slate-400">Cargando ranking...</div>
              ) : error ? (
                <div className="p-8 text-center text-red-400">{error}</div>
              ) : leaderboard.length === 0 ? (
                <div className="p-8 text-center text-slate-400">Aún no hay jugadores en la tabla.</div>
              ) : (
                leaderboard.map((player, index) => (
                  <motion.div
                    key={player.uid}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: index * 0.03 }}
                  >
                    {/* ── Desktop row (sm+) ── */}
                    <div className="hidden sm:grid grid-cols-[52px_2fr_140px_120px_120px_160px] gap-4 px-5 py-4 items-center">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 text-lg font-semibold text-cyan-300">
                        {getInitials(player.username)}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-white truncate">{player.username}</p>
                        <p className="text-xs text-slate-500">{player.country}</p>
                      </div>
                      <div className="text-slate-100 font-semibold">{player.totalScore}</div>
                      <div className="text-slate-100 font-semibold">{player.completedLevels}</div>
                      <div className="text-amber-300 font-semibold">{player.totalStars}</div>
                      <div className="text-slate-400 text-xs">{formatDate(player.lastActivity)}</div>
                    </div>

                    {/* ── Mobile card (< sm) ── */}
                    <div className="sm:hidden px-4 py-4">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-cyan-500 text-sm font-bold text-white">
                          {getInitials(player.username)}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-semibold text-white truncate">{player.username}</p>
                          <p className="text-xs text-slate-500">{formatDate(player.lastActivity)}</p>
                        </div>
                        <span className="shrink-0 text-xs font-bold text-slate-500 bg-slate-900/60 rounded-full px-2.5 py-1">#{index + 1}</span>
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        <div className="rounded-xl bg-slate-900/50 border border-slate-700/50 px-3 py-2 text-center">
                          <p className="text-[10px] uppercase tracking-wider text-slate-500">Puntos</p>
                          <p className="text-sm font-semibold text-cyan-300 mt-0.5">{player.totalScore}</p>
                        </div>
                        <div className="rounded-xl bg-slate-900/50 border border-slate-700/50 px-3 py-2 text-center">
                          <p className="text-[10px] uppercase tracking-wider text-slate-500">Niveles</p>
                          <p className="text-sm font-semibold text-white mt-0.5">{player.completedLevels}</p>
                        </div>
                        <div className="rounded-xl bg-slate-900/50 border border-slate-700/50 px-3 py-2 text-center">
                          <p className="text-[10px] uppercase tracking-wider text-slate-500">Estrellas</p>
                          <p className="text-sm font-semibold text-amber-300 mt-0.5">{player.totalStars}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </div>
          </div>
        </main>
      </div>
    </DotGridBackground>
  );
}
