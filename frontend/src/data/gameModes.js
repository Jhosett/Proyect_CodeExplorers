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
      icon: VscDebugConsole,
      introduction: {
        objective: "Encuentra y corrige errores en código real para convertirte en un experto cazador de bugs.",
        howToPlay: [
          "Analiza el código presentado cuidadosamente",
          "Identifica los errores de sintaxis, lógica o buenas prácticas",
          "Corrige el código adecuadamente para llegar a la respuesta",
          "Gana puntos por cada bug corregido correctamente"
        ],
        tips: [
          "Lee el código línea por línea",
          "Presta atención a la indentación y sintaxis",
          "Considera el contexto y la lógica del programa"
        ],
        rewards: "Puntos por bug corregido, badges especiales y posición en el ranking"
      }
    },
    {
      id: 2,
      title: "Trivia Técnica",
      description:
        "Responde preguntas rápidas sobre tecnología, programación y buenas prácticas antes de que acabe el tiempo.",
      difficulty: "Intermedio",
      color: "from-blue-500 to-cyan-500",
      image: triviaImg,
      icon: MdQuiz,
      introduction: {
        objective: "Demuestra tus conocimientos técnicos respondiendo preguntas de programación contra el tiempo.",
        howToPlay: [
          "Lee cada pregunta cuidadosamente",
          "Selecciona la respuesta correcta entre las opciones",
          "Responde antes de que se agote el tiempo",
          "Acumula puntos por respuestas correctas y velocidad"
        ],
        tips: [
          "Confía en tu primer instinto",
          "Gestiona bien el tiempo disponible",
          "Repasa conceptos básicos de programación"
        ],
        rewards: "Puntos por velocidad y precisión, conocimiento técnico mejorado"
      }
    },
    {
      id: 3,
      title: "Misiones por Temporada",
      description:
        "Cumple retos temáticos y gana medallas exclusivas. Las misiones cambian cada temporada.",
      difficulty: "Variable",
      color: "from-pink-500 to-orange-500",
      image: seasonsImg,
      icon: FaCalendarDays,
      introduction: {
        objective: "Completa desafíos temáticos especiales que cambian cada temporada para ganar recompensas únicas.",
        howToPlay: [
          "Explora las misiones disponibles de la temporada actual",
          "Completa los objetivos específicos de cada misión",
          "Desbloquea misiones avanzadas progresivamente",
          "Colecciona medallas y recompensas exclusivas"
        ],
        tips: [
          "Planifica tu estrategia para cada temporada",
          "Algunas misiones tienen tiempo limitado",
          "Colabora con otros jugadores cuando sea posible"
        ],
        rewards: "Medallas exclusivas, títulos especiales y recompensas de temporada"
      }
    },
    {
      id: 4,
      title: "Entrenamiento Libre",
      description:
        "Practica sin límite de tiempo. Mejora tus habilidades en entornos simulados y prepara tu estrategia.",
      difficulty: "Fácil",
      color: "from-green-500 to-emerald-500",
      image: trainingImg,
      icon: FaBrain,
      introduction: {
        objective: "Practica y mejora tus habilidades de programación en un entorno sin presión ni límites de tiempo.",
        howToPlay: [
          "Elige el tipo de ejercicio que quieres practicar",
          "Resuelve problemas a tu propio ritmo",
          "Recibe retroalimentación inmediata",
          "Repite ejercicios para mejorar tu técnica"
        ],
        tips: [
          "Usa este modo para prepararte para otros desafíos",
          "Experimenta con diferentes enfoques",
          "No hay penalización por errores"
        ],
        rewards: "Experiencia práctica, mejora de habilidades y preparación para otros modos"
      }
    },
    {
      id: 5,
      title: "Ranking y Recompensas",
      description:
        "Compite contra otros cazadores, escala posiciones en el ranking global y gana recompensas exclusivas.",
      difficulty: "Global",
      color: "from-yellow-500 to-amber-500",
      image: achievementImg,
      icon: HiMiniTrophy,
      introduction: {
        objective: "Compite contra cazadores de todo el mundo y escala posiciones en el ranking global.",
        howToPlay: [
          "Participa en todos los modos de juego para ganar puntos",
          "Mantén una racha de victorias para multiplicadores",
          "Completa logros especiales para puntos extra",
          "Consulta tu posición en el ranking regularmente"
        ],
        tips: [
          "La consistencia es clave para mantener tu ranking",
          "Participa en eventos especiales para puntos bonus",
          "Mejora en todos los modos para ser un cazador completo"
        ],
        rewards: "Posición en ranking global, títulos de prestigio y recompensas exclusivas"
      }
    },
  ];
  