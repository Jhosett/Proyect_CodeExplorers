import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { IoLogoGameControllerA } from "react-icons/io";
import { HiLightningBolt } from "react-icons/hi";
import { GiSupersonicArrow } from "react-icons/gi";
import { PiBugBeetleFill } from "react-icons/pi";
import { FaRankingStar } from "react-icons/fa6";
import { FaUser, FaGlobe, FaCity, FaCalendarAlt, FaTrophy, FaBug, FaFire, FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../firebase/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import { onAuthStateChanged, signOut } from "firebase/auth";
import BugBackground from "../components/BugBackground";
import Swal from 'sweetalert2';
import Header from "../components/Header";

export default function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        // Get user data from Firestore
        try {
          const userDoc = await getDoc(doc(db, "users", currentUser.uid));
          if (userDoc.exists()) {
            setUserData(userDoc.data());
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      } else {
        navigate('/login');
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [navigate]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      Swal.fire({
        title: '¡Hasta Pronto!',
        text: 'Has cerrado sesión correctamente.',
        icon: 'success',
        background: '#1E293B',
        color: '#ffffff',
        confirmButtonColor: '#8B5CF6',
        confirmButtonText: 'Entendido',
        timer: 2000,
        showConfirmButton: false
      });
      navigate('/');
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A]">
        <div className="text-white text-xl">Cargando...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] text-white relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(124,58,237,0.15),transparent_50%),radial-gradient(circle_at_80%_80%,rgba(56,189,248,0.15),transparent_50%)] blur-3xl"></div>
      <BugBackground />

      {/* Header */}
      <Header/>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* User Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <div className="bg-[#1E293B]/70 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-white/10">
              <div className="text-center mb-6">
                <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaUser className="text-3xl text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-2">
                  {userData?.username || 'Usuario'}
                </h2>
                <p className="text-gray-400">{user?.email}</p>
              </div>

              {/* User Info */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-[#0F172A]/50 rounded-lg">
                  <FaGlobe className="text-purple-400" />
                  <div>
                    <p className="text-sm text-gray-400">País</p>
                    <p className="text-white">{userData?.country || 'No especificado'}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-[#0F172A]/50 rounded-lg">
                  <FaCity className="text-purple-400" />
                  <div>
                    <p className="text-sm text-gray-400">Ciudad</p>
                    <p className="text-white">{userData?.city || 'No especificado'}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-[#0F172A]/50 rounded-lg">
                  <FaCalendarAlt className="text-purple-400" />
                  <div>
                    <p className="text-sm text-gray-400">Fecha de Nacimiento</p>
                    <p className="text-white">
                      {userData?.birthDate ? new Date(userData.birthDate).toLocaleDateString() : 'No especificado'}
                    </p>
                  </div>
                </div>
                <div className="flex justify-center">
                <motion.button
                    onClick={handleLogout}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-500 px-4 py-2 rounded-xl font-semibold transition-all"
                >
                    <FaSignOutAlt />
                    Cerrar Sesión
                </motion.button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Stats and Activities */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            
            {/* Stats Cards */}
            <div className="grid md:grid-cols-3 gap-6">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-[#1E293B]/70 backdrop-blur-lg rounded-xl p-6 border border-white/10"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                    <PiBugBeetleFill className="text-2xl text-yellow-400" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-white">0</p>
                    <p className="text-sm text-gray-400">Bugs Cazados</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-[#1E293B]/70 backdrop-blur-lg rounded-xl p-6 border border-white/10"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                    <FaTrophy className="text-2xl text-purple-400" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-white">0</p>
                    <p className="text-sm text-gray-400">Puntos</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-[#1E293B]/70 backdrop-blur-lg rounded-xl p-6 border border-white/10"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center">
                    <FaFire className="text-2xl text-orange-400" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-white">0</p>
                    <p className="text-sm text-gray-400">Racha</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Recent Activity */}
            <div className="bg-[#1E293B]/70 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-6">Actividad Reciente</h3>
              <div className="text-center py-12">
                <FaBug className="text-6xl text-gray-600 mx-auto mb-4" />
                <p className="text-gray-400 text-lg">¡Aún no has cazado ningún bug!</p>
                <p className="text-gray-500 text-sm mt-2">Comienza tu aventura de depuración</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-6 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white px-8 py-3 rounded-xl font-bold shadow-lg transition-all"
                >
                  <div className='flex items-center gap-3'>
                    <IoLogoGameControllerA className='w-8 h-8' />
                    <span>Comienza a cazar!!!</span>
                  </div>
                </motion.button>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-[#1E293B]/70 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-6">Acciones Rápidas</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="p-4 bg-[#0F172A]/50 rounded-lg border border-purple-500/30 hover:border-purple-500/60 transition-all text-left"
                >
                  <div className="flex items-center gap-2">
                    <GiSupersonicArrow className="mb-2" />
                    <h4 className="font-semibold text-white mb-2">Modo Práctica</h4>
                  </div>
                  <p className="text-sm text-gray-400">Practica con ejercicios básicos</p>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="p-4 bg-[#0F172A]/50 rounded-lg border border-purple-500/30 hover:border-purple-500/60 transition-all text-left"
                >
                  <div className="flex items-center gap-2">
                    <HiLightningBolt className="mb-2" />
                    <h4 className="font-semibold text-white mb-2">Desafío Rápido</h4>
                  </div>
                  <p className="text-sm text-gray-400">Resuelve un bug en 5 minutos</p>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="p-4 bg-[#0F172A]/50 rounded-lg border border-purple-500/30 hover:border-purple-500/60 transition-all text-left"
                >
                  <div className="flex items-center gap-2">
                    <FaTrophy className="mb-2" />
                    <h4 className="font-semibold text-white mb-2">Ranking</h4>
                  </div>
                  <p className="text-sm text-gray-400">Ver tabla de posiciones</p>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="p-4 bg-[#0F172A]/50 rounded-lg border border-purple-500/30 hover:border-purple-500/60 transition-all text-left"
                >
                  <div className="flex items-center gap-2">
                    <FaRankingStar className="mb-2" />
                    <h4 className="font-semibold text-white mb-2">Estadísticas</h4>
                  </div>
                  <p className="text-sm text-gray-400">Analiza tu progreso</p>
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}