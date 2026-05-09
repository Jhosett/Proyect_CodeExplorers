import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaUser, FaGlobe, FaCity, FaCalendarAlt,
  FaSignOutAlt, FaFire, FaCode, FaStar,
} from "react-icons/fa";
import {
  HiAcademicCap, HiLightningBolt,
} from "react-icons/hi";
import {
  BsLayers, BsArrowRight,
} from "react-icons/bs";
import { FaRankingStar } from "react-icons/fa6";
import { BiTargetLock } from "react-icons/bi";
import { IoLogoGameControllerA } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../firebase/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { seedLevels } from "../scripts/seedLevels";
import { getAllProgress } from "../services/progressService";
import DotGridBackground from "../components/DotGridBackground";
import Swal from "sweetalert2";
import Header from "../components/Header";
import sections from "../data/sections";

/* ─── Animation variants ──────────────────────────────────── */

const fadeInUp = {
  hidden: { opacity: 0, y: 25 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" },
  }),
};

/* ─── Helpers ─────────────────────────────────────────────── */

const TOTAL_STAGES = sections.reduce((sum, s) => sum + s.stages.length, 0);

/* ─── Component ───────────────────────────────────────────── */

export default function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(null);
  const [completedStages, setCompletedStages] = useState(0);
  const [totalPoints, setTotalPoints] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        try {
          const userDoc = await getDoc(doc(db, "users", currentUser.uid));
          if (userDoc.exists()) {
            setUserData(userDoc.data());
          }
          const progress = await getAllProgress(currentUser.uid);
          const completedCount = Object.values(progress).filter(p => p.completed).length;
          const pointsTotal = Object.values(progress).reduce((sum, p) => sum + (p.bestScore ?? 0), 0);
          setCompletedStages(completedCount);
          setTotalPoints(pointsTotal);
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      } else {
        navigate("/login");
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [navigate]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      Swal.fire({
        title: "Hasta Pronto!",
        text: "Has cerrado sesión correctamente.",
        icon: "success",
        background: "#1E293B",
        color: "#ffffff",
        confirmButtonColor: "#8B5CF6",
        confirmButtonText: "Entendido",
        timer: 2000,
        showConfirmButton: false,
      });
      navigate("/");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  const handleSeedLevels = async () => {
    const confirm = await Swal.fire({
      title: "¿Subir niveles a Firestore?",
      text: "Esto sobreescribirá los niveles existentes en la base de datos.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, subir",
      cancelButtonText: "Cancelar",
      background: "#1E293B",
      color: "#ffffff",
      confirmButtonColor: "#8B5CF6",
      cancelButtonColor: "#475569",
    });

    if (!confirm.isConfirmed) return;

    try {
      await seedLevels();
      Swal.fire({
        title: "¡Seed completado!",
        text: "Los niveles fueron subidos correctamente a Firestore.",
        icon: "success",
        background: "#1E293B",
        color: "#ffffff",
        confirmButtonColor: "#8B5CF6",
      });
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: "Ocurrió un error al subir los niveles.",
        icon: "error",
        background: "#1E293B",
        color: "#ffffff",
        confirmButtonColor: "#ef4444",
      });
    }
  };

  // Placeholder progress values (will be wired to Firestore later)
  const currentStreak = userData?.streak ?? 0;
  const progressPercent = Math.round((completedStages / TOTAL_STAGES) * 100);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A]">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
          className="w-10 h-10 border-3 border-purple-500 border-t-transparent rounded-full"
        />
      </div>
    );
  }

  return (
    <DotGridBackground>
      <div className="min-h-screen text-white relative">
        {/* Header */}
        <Header />

        {/* Main Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-8">

          {/* ── Welcome Banner ──────────────────────────────── */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="mb-8"
          >
            <div className="bg-gradient-to-r from-purple-600/20 via-indigo-600/15 to-cyan-600/10
                            border border-purple-500/20 rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h1 className="text-2xl sm:text-3xl font-bold mb-1">
                    Bienvenido,{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                      {userData?.username || "Explorador"}
                    </span>
                  </h1>
                  <p className="text-slate-400 text-sm sm:text-base">
                    Continúa tu aventura de programación en Code-Explorers
                  </p>
                </div>
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => navigate("/game-modes")}
                  className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600
                             hover:from-purple-500 hover:to-indigo-500 px-6 py-3 rounded-xl
                             font-bold text-sm shadow-lg shadow-purple-500/20 transition-all shrink-0"
                >
                  <IoLogoGameControllerA className="text-lg" />
                  Seguir aprendiendo
                  <BsArrowRight className="text-sm" />
                </motion.button>
              </div>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">

            {/* ════════════════════════════════════════════════ */}
            {/* LEFT COLUMN — Profile + Info                     */}
            {/* ════════════════════════════════════════════════ */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              custom={1}
              className="lg:col-span-1 space-y-6"
            >
              {/* Profile Card */}
              <div className="bg-slate-800/60 backdrop-blur-lg rounded-2xl shadow-2xl p-6 border border-white/10">
                <div className="text-center mb-5">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-indigo-600
                                  rounded-full flex items-center justify-center mx-auto mb-3
                                  shadow-lg shadow-purple-500/30 ring-2 ring-purple-400/30 ring-offset-2 ring-offset-slate-800">
                    <FaUser className="text-2xl text-white" />
                  </div>
                  <h2 className="text-xl font-bold text-white">
                    {userData?.username || "Usuario"}
                  </h2>
                  <p className="text-slate-400 text-sm">{user?.email}</p>
                  <div className="inline-flex items-center gap-1.5 mt-2 px-3 py-1 rounded-full
                                  bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs">
                    <FaCode className="text-[10px]" />
                    Explorador Novato
                  </div>
                </div>

                {/* Info rows */}
                <div className="space-y-3">
                  {[
                    { icon: FaGlobe, label: "País", value: userData?.country },
                    { icon: FaCity, label: "Ciudad", value: userData?.city },
                    {
                      icon: FaCalendarAlt,
                      label: "Fecha de Nacimiento",
                      value: userData?.birthDate
                        ? new Date(userData.birthDate).toLocaleDateString()
                        : null,
                    },
                  ].map(({ icon: Icon, label, value }) => (
                    <div
                      key={label}
                      className="flex items-center gap-3 p-3 bg-slate-900/50 rounded-lg"
                    >
                      <Icon className="text-purple-400 shrink-0" />
                      <div className="min-w-0">
                        <p className="text-xs text-slate-500">{label}</p>
                        <p className="text-sm text-white truncate">
                          {value || "No especificado"}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Logout */}
                <motion.button
                  onClick={handleLogout}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full mt-5 flex items-center justify-center gap-2
                             bg-red-500/10 hover:bg-red-500/20 border border-red-500/30
                             text-red-400 hover:text-red-300 px-4 py-2.5 rounded-xl
                             font-semibold text-sm transition-all"
                >
                  <FaSignOutAlt />
                  Cerrar Sesión
                </motion.button>
              </div>
            </motion.div>

            {/* ════════════════════════════════════════════════ */}
            {/* RIGHT COLUMN — Stats, Progress, Quick Actions    */}
            {/* ════════════════════════════════════════════════ */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              custom={2}
              className="lg:col-span-2 space-y-6"
            >
              {/* ── Stat Cards ─────────────────────────────── */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
                {[
                  {
                    icon: HiAcademicCap,
                    value: `${completedStages}/${TOTAL_STAGES}`,
                    label: "Niveles Completados",
                    color: "from-violet-500 to-purple-600",
                    bg: "bg-violet-500/15",
                    text: "text-violet-400",
                  },
                  {
                    icon: FaStar,
                    value: totalPoints,
                    label: "Puntos",
                    color: "from-amber-500 to-yellow-500",
                    bg: "bg-amber-500/15",
                    text: "text-amber-400",
                  },
                  {
                    icon: FaFire,
                    value: currentStreak,
                    label: "Racha de días",
                    color: "from-orange-500 to-red-500",
                    bg: "bg-orange-500/15",
                    text: "text-orange-400",
                  },
                  {
                    icon: BsLayers,
                    value: sections.length,
                    label: "Módulos",
                    color: "from-cyan-500 to-blue-500",
                    bg: "bg-cyan-500/15",
                    text: "text-cyan-400",
                  },
                ].map(({ icon: Icon, value, label, bg, text }, i) => (
                  <motion.div
                    key={label}
                    whileHover={{ scale: 1.03, y: -2 }}
                    className="bg-slate-800/60 backdrop-blur-lg rounded-xl p-4 sm:p-5
                               border border-white/10 hover:border-white/20 transition-all"
                  >
                    <div className={`w-10 h-10 ${bg} rounded-lg flex items-center justify-center mb-3`}>
                      <Icon className={`text-lg ${text}`} />
                    </div>
                    <p className="text-xl sm:text-2xl font-bold text-white">{value}</p>
                    <p className="text-xs text-slate-400 mt-0.5">{label}</p>
                  </motion.div>
                ))}
              </div>

              {/* ── Overall Progress ──────────────────────── */}
              <div className="bg-slate-800/60 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <BiTargetLock className="text-purple-400" />
                    Progreso General
                  </h3>
                  <span className="text-sm font-semibold text-purple-400">{progressPercent}%</span>
                </div>

                {/* Progress bar */}
                <div className="h-3 bg-slate-700 rounded-full overflow-hidden mb-5">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${progressPercent}%` }}
                    transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
                    className="h-full bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-500 rounded-full"
                  />
                </div>

                {/* Module progress chips */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
                  {sections.map((section, i) => {
                    const completedInModule = 0; // placeholder
                    const total = section.stages.length;
                    return (
                      <div
                        key={section.id}
                        className="flex items-center gap-2 p-2.5 bg-slate-900/50 rounded-lg
                                   border border-slate-700/50 hover:border-purple-500/30 transition-colors"
                      >
                        <div className="w-7 h-7 rounded-md bg-gradient-to-br from-purple-500/20 to-indigo-500/20
                                        flex items-center justify-center text-xs font-bold text-purple-400 shrink-0
                                        border border-purple-500/20">
                          {i + 1}
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="text-xs text-white font-medium truncate">{section.title}</p>
                          <p className="text-[10px] text-slate-500">
                            {completedInModule}/{total} niveles
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* ── Quick Actions ─────────────────────────── */}
              <div className="bg-slate-800/60 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <HiLightningBolt className="text-yellow-400" />
                  Acciones Rápidas
                </h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    {
                      icon: IoLogoGameControllerA,
                      title: "Ruta de Aprendizaje",
                      desc: "Explora los módulos y avanza en tu camino",
                      gradient: "from-purple-500 to-indigo-600",
                      border: "border-purple-500/30 hover:border-purple-500/60",
                      onClick: () => navigate("/game-modes"),
                    },
                    {
                      icon: FaCode,
                      title: "Parsons Blocks",
                      desc: "Ordena bloques de código para aprender",
                      gradient: "from-cyan-500 to-blue-600",
                      border: "border-cyan-500/30 hover:border-cyan-500/60",
                      onClick: () => navigate("/ParsonsBlocks"),
                    },
                    {
                      icon: FaRankingStar,
                      title: "Ranking",
                      desc: "Compara tu progreso con otros exploradores",
                      gradient: "from-amber-500 to-orange-600",
                      border: "border-amber-500/30 hover:border-amber-500/60",
                      onClick: () => {},
                    },
                    {
                      icon: HiAcademicCap,
                      title: "Mis Logros",
                      desc: "Revisa las insignias que has desbloqueado",
                      gradient: "from-emerald-500 to-teal-600",
                      border: "border-emerald-500/30 hover:border-emerald-500/60",
                      onClick: () => {},
                    },
                  ].map(({ icon: Icon, title, desc, gradient, border, onClick }) => (
                    <motion.button
                      key={title}
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={onClick}
                      className={`p-4 bg-slate-900/50 rounded-xl border ${border}
                                  transition-all text-left group`}
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div className={`w-9 h-9 rounded-lg bg-gradient-to-br ${gradient}
                                        flex items-center justify-center text-white shadow-lg shrink-0`}>
                          <Icon className="text-sm" />
                        </div>
                        <h4 className="font-semibold text-white text-sm">{title}</h4>
                        <BsArrowRight className="ml-auto text-slate-500 group-hover:text-white
                                                 group-hover:translate-x-1 transition-all shrink-0" />
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed">{desc}</p>
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* ── Admin Panel (temporal — quitar gate isAdmin para seed) ── */}
          {(
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              custom={3}
              className="mt-6"
            >
              <div className="bg-slate-800/60 backdrop-blur-lg rounded-2xl p-6 border border-red-500/20">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
                  Panel de Administrador
                </h3>
                <div className="flex flex-wrap gap-3">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={handleSeedLevels}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl
                               bg-purple-600/20 hover:bg-purple-600/30 border border-purple-500/30
                               hover:border-purple-500/60 text-purple-300 hover:text-white
                               text-sm font-semibold transition-all"
                  >
                    ↑ Subir niveles a Firestore
                  </motion.button>
                </div>
              </div>
            </motion.div>
          )}

        </div>
      </div>
    </DotGridBackground>
  );
}