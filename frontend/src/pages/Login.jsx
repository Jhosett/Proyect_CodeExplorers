import { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaLock, FaEyeSlash, FaEye } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import BugBackground from "../components/BugBackground";
import Swal from 'sweetalert2';
import { loginUser } from '../services/authService';

export default function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  // Form state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  // Validation functions
  const validateEmail = (value) => {
    if (!value.trim()) {
      setEmailError("El correo electrónico es requerido");
    } else {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!regex.test(value)) {
        setEmailError("Por favor, ingresa un correo electrónico válido");
      } else {
        setEmailError("");
      }
    }
  };

  const validatePassword = (value) => {
    if (!value.trim()) {
      setPasswordError("La contraseña es requerida");
    } else {
      setPasswordError("");
    }
  };

  // Check if form is valid
  const isFormValid =
    email.trim() && password.trim() && !emailError && !passwordError;

  const handleLogin = async (e) => {
    e.preventDefault();
    if (isFormValid) {
      try {
        console.log("Login attempt for:", email);
        const result = await loginUser(email, password);
        
        if (result.success) {
          Swal.fire({
            title: '¡Bienvenido de Vuelta!',
            text: 'Has iniciado sesión correctamente.',
            icon: 'success',
            background: '#1E293B',
            color: '#ffffff',
            confirmButtonColor: '#8B5CF6',
            confirmButtonText: 'Continuar',
            timer: 2000,
            showConfirmButton: false
          }).then(() => {
            navigate('/dashboard'); // Redirect to dashboard
          });
        } else {
          Swal.fire({
            title: 'Error al Iniciar Sesión',
            text: 'Correo electrónico o contraseña incorrectos.',
            icon: 'error',
            background: '#1E293B',
            color: '#ffffff',
            confirmButtonColor: '#EF4444',
            confirmButtonText: 'Intentar de Nuevo'
          });
        }
      } catch (error) {
        console.error("Login error:", error);
        Swal.fire({
          title: 'Error Inesperado',
          text: 'Ocurrió un error inesperado. Por favor, inténtalo de nuevo.',
          icon: 'error',
          background: '#1E293B',
          color: '#ffffff',
          confirmButtonColor: '#EF4444',
          confirmButtonText: 'Entendido'
        });
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] text-white relative overflow-hidden">
      {/* Home button */}
      <motion.button
        onClick={() => navigate('/')}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="absolute top-6 right-6 z-20 w-12 h-12 bg-purple-600/20 backdrop-blur-sm border border-purple-500/30 hover:border-purple-500/60 rounded-full flex items-center justify-center text-purple-400 hover:text-white transition-all duration-200"
      >
        <IoHome className="w-6 h-6" />
      </motion.button>
      
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(124,58,237,0.15),transparent_50%),radial-gradient(circle_at_80%_80%,rgba(56,189,248,0.15),transparent_50%)] blur-3xl"></div>
      <BugBackground />

      {/* Main container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 bg-[#1E293B]/70 backdrop-blur-lg rounded-2xl shadow-2xl p-10 w-[550px] border border-white/30"
      >
        {/* Title */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
            ✦ Bienvenido de Vuelta ✦
          </h1>
          <p className="text-gray-300 text-sm mt-2">
            Inicia sesión para continuar cazando bugs
          </p>
        </div>

        {/* Login form */}
        <motion.form
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="space-y-6"
          onSubmit={handleLogin}
        >
          {/* Email field */}
          <div className="relative">
            <FaEnvelope className="absolute top-4 left-3 text-gray-400" />
            <input
              type="email"
              placeholder="Correo electrónico"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                validateEmail(e.target.value);
              }}
              className={`w-full pl-10 pr-3 py-3 bg-[#0F172A]/60 border rounded-lg focus:ring-2 outline-none transition-all duration-300 ${
                emailError
                  ? "border-red-500 focus:ring-red-500"
                  : "border-white/10 focus:ring-purple-500"
              }`}
            />
            {emailError && (
              <p className="text-red-400 text-sm mt-1 ml-1 transition-all duration-300">
                {emailError}
              </p>
            )}
          </div>

          {/* Password field */}
          <div className="relative">
            <FaLock className="absolute top-4 left-3 text-gray-400" />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Contraseña"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                validatePassword(e.target.value);
              }}
              className={`w-full pl-10 pr-10 py-3 bg-[#0F172A]/60 border rounded-lg focus:ring-2 outline-none transition-all duration-300 ${
                passwordError
                  ? "border-red-500 focus:ring-red-500"
                  : "border-white/10 focus:ring-purple-500"
              }`}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute top-4 right-3 text-gray-400 hover:text-purple-400 transition-colors"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
            {passwordError && (
              <p className="text-red-400 text-sm mt-1 ml-1 transition-all duration-300">
                {passwordError}
              </p>
            )}
          </div>

          {/* Forgot password link */}
          <div className="text-right">
            <button
              type="button"
              className="text-sm text-purple-400 hover:text-purple-300 transition-colors"
            >
              ¿Olvidaste tu contraseña?
            </button>
          </div>

          {/* Login button */}
          <motion.button
            type="submit"
            whileHover={isFormValid ? { scale: 1.02 } : {}}
            whileTap={isFormValid ? { scale: 0.97 } : {}}
            disabled={!isFormValid}
            className={`w-full py-3 rounded-lg font-semibold shadow-lg transition-all ${
              isFormValid
                ? "bg-gradient-to-r from-purple-500 to-blue-500 hover:opacity-90 cursor-pointer"
                : "bg-gray-600 cursor-not-allowed opacity-50"
            }`}
          >
            Iniciar Sesión
          </motion.button>
        </motion.form>

        {/* Register link */}
        <p className="text-sm text-center text-gray-400 mt-6">
          ¿No tienes cuenta?{" "}
          <button
            onClick={() => navigate("/register")}
            className="text-purple-400 hover:text-purple-300 font-medium transition-colors"
          >
            Regístrate aquí
          </button>
        </p>
      </motion.div>
    </div>
  );
}
