import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth, db } from "../firebase/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import errorInformaticoImg from "../assets/error-informatico.png";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

// Importación de los íconos de React-icons
import {
  IoHome,
  IoGameController,
  IoTrophy,
  IoInformationCircle,
  IoPersonCircle,
  IoLogOut,
  IoSpeedometer,
} from "react-icons/io5";

export default function Header() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(null);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  // Función para detectar si un usuario está autenticado o no
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        // Get user data from Firestore
        try {
          // Accede a firestore y verifica si el usuario se encuentra con el id
          const userDoc = await getDoc(doc(db, "users", currentUser.uid));
          if (userDoc.exists()) {
            setUserData(userDoc.data());
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      } else {
        setUser(null);
        setUserData(null);
      }
    });

    return () => unsubscribe();
  }, []);


  // Notificación de cierre de sesión
  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUserMenuOpen(false);
      Swal.fire({
        title: "¡Hasta Pronto!",
        text: "Has cerrado sesión correctamente.",
        icon: "success",
        background: "#1E293B",
        color: "#ffffff",
        confirmButtonColor: "#8B5CF6",
        confirmButtonText: "Entendido",
        timer: 2000,
        showConfirmButton: false,
      });
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  // Items del header con sus rutas y atributos
  const navItems = [
    { href: "/", label: "Inicio", icon: IoHome },
    { href: "/game-modes", label: "Modulos de aprendizaje", icon: IoGameController },
    { href: "#ranking", label: "Ranking", icon: IoTrophy },
    { href: "#about", label: "Sobre el juego", icon: IoInformationCircle },
  ];

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-[#0F172A]/90 backdrop-blur-md border-b border-purple-700/50 text-white px-4 sm:px-6 py-4 sticky top-0 z-50 shadow-xl"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo y título */}
        <motion.div
          className="flex items-center gap-3"
          whileHover={{ scale: 1.02 }}
        >
          <motion.img
            src={errorInformaticoImg}
            alt="Bug-Hunts Logo"
            className="w-10 h-10 rounded-lg shadow-md"
            whileHover={{ rotate: 5 }}
          />
          <h1 className="text-xl sm:text-2xl font-bold tracking-wide bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Bug-Hunts
          </h1>
        </motion.div>

        {/* Navegación Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <motion.div
              key={item.href}
              whileHover={{ y: -2 }}
              className="relative"
            >
              <Link
                to={item.href}
                className="flex items-center text-sm font-medium text-gray-300 hover:text-yellow-400 transition-colors"
              >
                <item.icon className="inline-block mr-1" />
                {item.label}
              </Link>
              <motion.div
                className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400"
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.2 }}
              />
            </motion.div>
          ))}
        </nav>

        {/* Botones Desktop */}
        <div className="hidden md:flex items-center gap-3">
          {user ? (
            // User is logged in
            <div className="relative">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setUserMenuOpen(!userMenuOpen)}
                className="flex items-center gap-2 bg-purple-600/20 border border-purple-500/30 hover:border-purple-500/60 px-4 py-2 rounded-xl font-semibold transition-all"
              >
                <IoPersonCircle className="w-5 h-5" />
                {userData?.username || "Usuario"}
              </motion.button>

              {/* User dropdown menu */}
              <AnimatePresence>
                {userMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute right-0 mt-2 w-48 bg-[#1E293B]/90 backdrop-blur-lg border border-purple-700/50 rounded-xl shadow-xl py-2"
                  >
                    <motion.button
                      onClick={() => {
                        navigate("/dashboard");
                        setUserMenuOpen(false);
                      }}
                      className="w-full flex items-center gap-3 px-4 py-2 text-gray-300 hover:text-white hover:bg-purple-700/30 transition-colors"
                      whileHover={{ x: 4 }}
                    >
                      <IoSpeedometer className="w-4 h-4" />
                      Dashboard
                    </motion.button>
                    <motion.button
                      onClick={handleLogout}
                      className="w-full flex items-center gap-3 px-4 py-2 text-gray-300 hover:text-red-400 hover:bg-red-700/20 transition-colors"
                      whileHover={{ x: 4 }}
                    >
                      <IoLogOut className="w-4 h-4" />
                      Cerrar Sesión
                    </motion.button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ) : (
            // User is not logged in
            <>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/register")}
                className="text-purple-400 hover:text-purple-300 px-4 py-2 rounded-xl font-semibold transition-colors"
              >
                Registrarse
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/login")}
                className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 px-6 py-2 rounded-xl font-semibold shadow-lg transition-all duration-200"
              >
                Iniciar Sesión
              </motion.button>
            </>
          )}
        </div>

        {/* Botón menú móvil */}
        <motion.button
          className="md:hidden p-2 rounded-lg hover:bg-purple-700/30 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          whileTap={{ scale: 0.95 }}
        >
          <div className="w-6 h-6 flex flex-col justify-center items-center">
            <motion.span
              className="w-5 h-0.5 bg-white mb-1 transition-all"
              animate={isMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            />
            <motion.span
              className="w-5 h-0.5 bg-white mb-1 transition-all"
              animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
            />
            <motion.span
              className="w-5 h-0.5 bg-white transition-all"
              animate={
                isMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }
              }
            />
          </div>
        </motion.button>
      </div>

      {/* Menú móvil */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-purple-700/50 mt-4 pt-4"
          >
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  className="text-gray-300 hover:text-yellow-400 transition-colors py-2 px-4 rounded-lg hover:bg-purple-700/30"
                  onClick={() => setIsMenuOpen(false)}
                  whileHover={{ x: 4 }}
                >
                  {item.label}
                </motion.a>
              ))}
              {/* Mobile auth buttons */}
              <div className="flex flex-col gap-2 mt-2">
                {user ? (
                  // User is logged in (mobile)
                  <>
                    <motion.button
                      onClick={() => {
                        navigate("/dashboard");
                        setIsMenuOpen(false);
                      }}
                      className="flex items-center gap-2 text-purple-400 hover:text-purple-300 px-4 py-2 rounded-xl font-semibold transition-colors border border-purple-600 hover:bg-purple-700/20"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <IoSpeedometer className="w-4 h-4" />
                      Dashboard
                    </motion.button>
                    <motion.button
                      onClick={() => {
                        handleLogout();
                        setIsMenuOpen(false);
                      }}
                      className="flex items-center gap-2 text-red-400 hover:text-red-300 px-4 py-2 rounded-xl font-semibold transition-colors border border-red-600 hover:bg-red-700/20"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <IoLogOut className="w-4 h-4" />
                      Cerrar Sesión
                    </motion.button>
                  </>
                ) : (
                  // User is not logged in (mobile)
                  <>
                    <motion.button
                      onClick={() => {
                        navigate("/register");
                        setIsMenuOpen(false);
                      }}
                      className="text-purple-400 hover:text-purple-300 px-4 py-2 rounded-xl font-semibold transition-colors border border-purple-600 hover:bg-purple-700/20"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Registrarse
                    </motion.button>
                    <motion.button
                      onClick={() => {
                        navigate("/login");
                        setIsMenuOpen(false);
                      }}
                      className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-4 py-2 rounded-xl font-semibold"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Iniciar Sesión
                    </motion.button>
                  </>
                )}
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
