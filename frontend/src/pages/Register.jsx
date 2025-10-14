import { useState } from "react";
import { motion } from "framer-motion";
import { FaUser, FaEnvelope, FaLock, FaGlobe, FaCalendarAlt, FaEyeSlash, FaEye, FaCity } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import BugBackground from "../components/BugBackground";
import Swal from 'sweetalert2';
import { registerUser } from '../services/authService';


export default function Register() {
  const [tab, setTab] = useState("account");
  const navigate = useNavigate();

  // Mostrar/ocultar contraseñas
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Validaciones para los datos del formuhlario de registro
  const [username, setUsername] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [country, setCountry] = useState("");
  const [countryError, setCountryError] = useState("");
  const [city, setCity] = useState("");
  const [cityError, setCityError] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [birthDateError, setBirthDateError] = useState("");

  // Validar nombre de usuario
  const validateUsername = (value) => {
    if (!value.trim()) {
      setUsernameError("El nombre de usuario es requerido");
    } else if (value.length < 3) {
      setUsernameError("Mínimo 3 caracteres");
    } else {
      setUsernameError("");
    }
  };

  // Validar correo electrónico
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

  // Validar contraseña
  const validatePassword = (value) => {
    if (!value.trim()) {
      setPasswordError("La contraseña es requerida");
    } else {
      const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{8,}$/;
      if (!regex.test(value)) {
        setPasswordError("Debe tener 8 caracteres, una mayúscula, un número y un símbolo");
      } else {
        setPasswordError("");
      }
    }
  };

  // Validar confirmación de contraseña
  const validateConfirmPassword = (value) => {
    if (!value.trim()) {
      setConfirmPasswordError("Confirma tu contraseña");
    } else if (value !== password) {
      setConfirmPasswordError("Las contraseñas no coinciden");
    } else {
      setConfirmPasswordError("");
    }
  };

  // Validar país
  const validateCountry = (value) => {
    if (!value.trim()) {
      setCountryError("El país es requerido");
    } else {
      setCountryError("");
    }
  };

  // Validar ciudad
  const validateCity = (value) => {
    if (!value.trim()) {
      setCityError("La ciudad es requerida");
    } else {
      setCityError("");
    }
  };

  // Validar fecha de nacimiento
  const validateBirthDate = (value) => {
    if (!value) {
      setBirthDateError("La fecha de nacimiento es requerida");
    } else {
      setBirthDateError("");
    }
  };

  // Verificar si el tab de cuenta está completo
  const isAccountTabValid = 
    username.trim() && 
    email.trim() && 
    password.trim() && 
    confirmPassword.trim() &&
    !usernameError && 
    !emailError && 
    !passwordError && 
    !confirmPasswordError
  ;

  // Verificar si el tab personal está completo
  const isPersonalTabValid = 
    country.trim() && 
    city.trim() &&
    birthDate &&
    !countryError && 
    !cityError &&
    !birthDateError
  ;

  // Enviar datos a Firebase
  const handleRegister = async () => {
    if (isPersonalTabValid) {
      console.log("Starting registration process...");
      try {
        const userData = {
          username,
          email,
          password,
          country,
          city,
          birthDate
        };
        
        console.log("User data to register:", { ...userData, password: "[HIDDEN]" });
        const result = await registerUser(userData);
        console.log("Registration result:", result);
        //Mensaje emergente de Sweet Alert
        if (result.success) {
          Swal.fire({
            title: '¡Registro Exitoso!',
            text: `Bienvenido ${username}, tu cuenta ha sido creada correctamente.`,
            icon: 'success',
            background: '#1E293B',
            color: '#ffffff',
            confirmButtonColor: '#8B5CF6',
            confirmButtonText: 'Continuar',
            showClass: {
              popup: 'animate__animated animate__fadeInUp'
            }
          }).then(() => {
            navigate('/login');
          });
        } else {
          Swal.fire({
            title: 'Error al Registrar',
            text: result.error,
            icon: 'error',
            background: '#1E293B',
            color: '#ffffff',
            confirmButtonColor: '#EF4444',
            confirmButtonText: 'Intentar de Nuevo'
          });
        }
      } catch (error) {
        console.error("Error al registrar:", error);
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
      {/* Efectos de fondo suaves */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(124,58,237,0.15),transparent_50%),radial-gradient(circle_at_80%_80%,rgba(56,189,248,0.15),transparent_50%)] blur-3xl"></div>
      <BugBackground/>

      {/* Contenedor principal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 bg-[#1E293B]/70 backdrop-blur-lg rounded-2xl shadow-2xl p-10 w-[550px] border border-white/30"
      >
        {/* Título */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
            ✦ Cazadores de Bugs ✦
          </h1>
          <p className="text-gray-300 text-sm mt-2">
            Únete a la aventura de depuración
          </p>
        </div>

        {/* Pestañas */}
        <div className="flex bg-[#0F172A]/70 rounded-xl p-1 mb-6">
          <button
            onClick={() => setTab("account")}
            className={`flex-1 py-2 text-sm font-semibold rounded-xl transition-all duration-300 ${
              tab === "account"
                ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-md"
                : "text-gray-400 hover:text-gray-200"
            }`}
          >
            Información de Cuenta
          </button>
          <button
            onClick={() => isAccountTabValid && setTab("personal")}
            disabled={!isAccountTabValid}
            className={`flex-1 py-2 text-sm font-semibold rounded-xl transition-all duration-300 ${
              tab === "personal"
                ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-md"
                : isAccountTabValid
                ? "text-gray-400 hover:text-gray-200 cursor-pointer"
                : "text-gray-600 cursor-not-allowed opacity-50"
            }`}
          >
            Información Personal
          </button>
        </div>

        {/* Formulario dinámico */}
        {tab === "account" ? (
          <motion.form
            key="account"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="space-y-4"
          >
            {/* Input del usuario */}
            <div className="relative">
              <FaUser className="absolute top-3 left-3 text-gray-400" />
              <input
                type="text"
                placeholder="Nombre de usuario"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                  validateUsername(e.target.value);
                }}
                className={`w-full pl-10 pr-3 py-2 bg-[#0F172A]/60 border rounded-lg focus:ring-2 outline-none transition-all duration-300 ${
                  usernameError ? "border-red-500 focus:ring-red-500" : "border-white/10 focus:ring-purple-500"
                }`}
              />
              {/* Mensaje de Error si están mal los datos */}
              {usernameError && (
                <p className="text-red-400 text-sm mt-1 ml-1 transition-all duration-300">
                  {usernameError}
                </p>
              )}
            </div>
            
            {/* Input del correo electrónico */}
            <div className="relative">
              <FaEnvelope className="absolute top-3 left-3 text-gray-400" />
              <input
                type="email"
                placeholder="Correo electrónico"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  validateEmail(e.target.value);
                }}
                className={`w-full pl-10 pr-3 py-2 bg-[#0F172A]/60 border rounded-lg focus:ring-2 outline-none transition-all duration-300 ${
                  emailError ? "border-red-500 focus:ring-red-500" : "border-white/10 focus:ring-purple-500"
                }`}
              />

              {/* Mensaje de error */}
              {emailError && (
                <p className="text-red-400 text-sm mt-1 ml-1 transition-all duration-300">
                  {emailError}
                </p>
              )}
            </div>
            
            {/* Input de la contraseña */}
            <div className="relative">
              <FaLock className="absolute top-3 left-3 text-gray-400" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Contraseña"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  validatePassword(e.target.value);
                }}
                className={`w-full pl-10 pr-10 py-2 bg-[#0F172A]/60 border rounded-lg focus:ring-2 outline-none transition-all duration-300 ${
                  passwordError ? "border-red-500 focus:ring-red-500" : "border-white/10 focus:ring-purple-500"
                }`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-3 right-3 text-gray-400 hover:text-purple-400 transition-colors"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            {/* Mensaje de error contraseña */}
            {passwordError && (
              <p className="text-red-500 text-sm mb-3">{passwordError}</p>
            )}

            {/* Input de confirmación de contraseña */}
            <div className="relative">
              <FaLock className="absolute top-3 left-3 text-gray-400" />
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirmar contraseña"
                value={confirmPassword}
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                  validateConfirmPassword(e.target.value);
                }}
                className={`w-full pl-10 pr-10 py-2 bg-[#0F172A]/60 border rounded-lg focus:ring-2 outline-none transition-all duration-300 ${
                  confirmPasswordError ? "border-red-500 focus:ring-red-500" : "border-white/10 focus:ring-purple-500"
                }`}
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute top-3 right-3 text-gray-400 hover:text-purple-400 transition-all duration-200 active:scale-90"
              >
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            {/* Mensaje de error confirmación */}
            {confirmPasswordError && (
              <p className="text-red-500 text-sm mb-3">{confirmPasswordError}</p>
            )}

            {/* Botón de siguiente pestaña */}
            <motion.button
              whileHover={isAccountTabValid ? { scale: 1.02 } : {}}
              whileTap={isAccountTabValid ? { scale: 0.97 } : {}}
              onClick={(e) => {
                e.preventDefault();
                if (isAccountTabValid) {
                  setTab("personal");
                }
              }}
              disabled={!isAccountTabValid}
              className={`w-full py-2 rounded-lg font-semibold shadow-lg transition-all ${
                isAccountTabValid 
                  ? "bg-gradient-to-r from-purple-500 to-blue-500 hover:opacity-90 cursor-pointer" 
                  : "bg-gray-600 cursor-not-allowed opacity-50"
              }`}
            >
              Siguiente →
            </motion.button>
          </motion.form>
        ) : (
          <motion.form
            key="personal"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="space-y-4"
          > 
            {/* Input de Pais */}
            <div className="relative">
              <FaGlobe className="absolute top-3 left-3 text-gray-400" />
              <input
                type="text"
                placeholder="País"
                value={country}
                onChange={(e) => {
                  setCountry(e.target.value);
                  validateCountry(e.target.value);
                }}
                className={`w-full pl-10 pr-3 py-2 bg-[#0F172A]/60 border rounded-lg focus:ring-2 outline-none transition-all duration-300 ${
                  countryError ? "border-red-500 focus:ring-red-500" : "border-white/10 focus:ring-purple-500"
                }`}
              />
              {countryError && (
                <p className="text-red-400 text-sm mt-1 ml-1 transition-all duration-300">
                  {countryError}
                </p>
              )}
            </div>

            {/* Input de ciudad */}
            <div className="relative">
              <FaCity className="absolute top-3 left-3 text-gray-400" />
              <input
                type="text"
                placeholder="Ciudad"
                value={city}
                onChange={(e) => {
                  setCity(e.target.value);
                  validateCity(e.target.value);
                }}
                className={`w-full pl-10 pr-3 py-2 bg-[#0F172A]/60 border rounded-lg focus:ring-2 outline-none transition-all duration-300 ${
                  cityError ? "border-red-500 focus:ring-red-500" : "border-white/10 focus:ring-purple-500"
                }`}
              />
              {cityError && (
                <p className="text-red-400 text-sm mt-1 ml-1 transition-all duration-300">
                  {cityError}
                </p>
              )}
            </div>
            
            {/* Input de fecha */}
            <div className="relative">
              <FaCalendarAlt className="absolute top-3 left-3 text-gray-400" />
              <input
                type="date"
                value={birthDate}
                onChange={(e) => {
                  setBirthDate(e.target.value);
                  validateBirthDate(e.target.value);
                }}
                className={`w-full pl-10 pr-3 py-2 bg-[#0F172A]/60 border rounded-lg focus:ring-2 outline-none text-gray-300 transition-all duration-300 ${
                  birthDateError ? "border-red-500 focus:ring-red-500" : "border-white/10 focus:ring-purple-500"
                }`}
              />
              {birthDateError && (
                <p className="text-red-400 text-sm mt-1 ml-1 transition-all duration-300">
                  {birthDateError}
                </p>
              )}
            </div>
            
            {/* Botón de registrarse */}
            <motion.button
              whileHover={isPersonalTabValid ? { scale: 1.02 } : {}}
              whileTap={isPersonalTabValid ? { scale: 0.97 } : {}}
              onClick={(e) => {
                e.preventDefault();
                handleRegister();
              }}
              disabled={!isPersonalTabValid}
              className={`w-full py-2 rounded-lg font-semibold shadow-lg transition-all ${
                isPersonalTabValid 
                  ? "bg-gradient-to-r from-purple-500 to-blue-500 hover:opacity-90 cursor-pointer" 
                  : "bg-gray-600 cursor-not-allowed opacity-50"
              }`}
            >
              Registrarse
            </motion.button>
          </motion.form>
        )}

        {/* Enlace de login */}
        <p className="text-sm text-center text-gray-400 mt-6">
          ¿Ya tienes cuenta?{" "}
          <button
            onClick={() => navigate("/login")}
            className="text-purple-400 hover:text-purple-300 font-medium"
          >
            Inicia sesión
          </button>
        </p>
      </motion.div>
    </div>
  );
}
