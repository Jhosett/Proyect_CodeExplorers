import bugHuntImg from "../assets/gameCards/bugHunts.jpg";
import triviaImg from "../assets/gameCards/trivia.jpg";
import seasonsImg from "../assets/gameCards/seasons.jpg";
import trainingImg from "../assets/gameCards/training.jpg";
import achievementImg from "../assets/gameCards/achievements.jpg";

// Iconos
import { VscDebugConsole } from "react-icons/vsc";
import { MdQuiz } from "react-icons/md";
import { FaCalendarDays } from "react-icons/fa6";
import { FaBrain } from "react-icons/fa6";
import { HiMiniTrophy } from "react-icons/hi2";



export const gameModes = [
    {
      id: 1,
      title: "Caza de Bugs",
      description:
        "Detecta y corrige errores en fragmentos de código para ganar puntos. ¡Demuestra tus habilidades de depuración!",
      difficulty: "Principal",
      color: "from-purple-500 to-indigo-500",
      image: bugHuntImg,
      icon: VscDebugConsole
    },
    {
      id: 2,
      title: "Trivia Técnica",
      description:
        "Responde preguntas rápidas sobre tecnología, programación y buenas prácticas antes de que acabe el tiempo.",
      difficulty: "Intermedio",
      color: "from-blue-500 to-cyan-500",
      image: triviaImg,
      icon: MdQuiz
    },
    {
      id: 3,
      title: "Misiones por Temporada",
      description:
        "Cumple retos temáticos y gana medallas exclusivas. Las misiones cambian cada temporada.",
      difficulty: "Variable",
      color: "from-pink-500 to-orange-500",
      image: seasonsImg,
      icon: FaCalendarDays
    },
    {
      id: 4,
      title: "Entrenamiento Libre",
      description:
        "Practica sin límite de tiempo. Mejora tus habilidades en entornos simulados y prepara tu estrategia.",
      difficulty: "Fácil",
      color: "from-green-500 to-emerald-500",
      image: trainingImg,
      icon: FaBrain
    },
    {
      id: 5,
      title: "Ranking y Recompensas",
      description:
        "Compite contra otros cazadores, escala posiciones en el ranking global y gana recompensas exclusivas.",
      difficulty: "Global",
      color: "from-yellow-500 to-amber-500",
      image: achievementImg,
      icon: HiMiniTrophy
    },
  ];
  