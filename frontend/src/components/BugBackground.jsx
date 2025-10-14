import { motion } from "framer-motion";
import bugFont from "../assets/bugFont.png";

export default function BugBackground() {
  // Generamos los "bichos" animados con propiedades aleatorias
  const bugs = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 30 + 15, // Tamaño entre 15 y 45px
    x: Math.random() * 100,        // Posición horizontal aleatoria
    y: Math.random() * 100,        // Posición vertical aleatoria
    duration: Math.random() * 20 + 10, // Duración entre 10 y 30 segundos
    delay: Math.random() * 5,      // Retardo de inicio aleatorio
  }));

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-20">
      {bugs.map((bug) => (
        <motion.div
          key={bug.id}
          className="absolute"
          style={{
            left: `${bug.x}%`,
            top: `${bug.y}%`,
            width: bug.size,
            height: bug.size,
          }}
          animate={{
            y: [0, -30, 0], // Flotación vertical
            x: [0, Math.random() * 20 - 10, 0], // Movimiento horizontal leve
            rotate: [0, 360], // Rotación completa
          }}
          transition={{
            duration: bug.duration,
            repeat: Infinity,
            delay: bug.delay,
            ease: "linear",
          }}
        >
          {/* Ícono tipo insecto o "bug" */}
          <img
            src={bugFont}
            alt="bug"
            className="w-full h-full object-contain opacity-80"
          />
        </motion.div>
      ))}
    </div>
  );
}
