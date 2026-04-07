const sections = [
    {
      id: "sec1",
      title: "Fundamentos de Lógica y Pensamiento Computacional",
      objective: "Enseñar a los estudiantes a pensar lógicamente antes de programar.",
      topics: [
        "Algoritmos",
        "Pasos secuenciales",
        "Resolución de problemas básicos",
        "Diagramas simples"
      ],
      stages: [
        {
          id: "sec1-stage1",
          title: "Ordenamiento de pasos",
          description: "Ordenamiento de pasos (tipo Parsons sin código).",
          moduleType: "logic",
          isUnlocked: true,
          unlockRequirements: [],
          nextStage: "sec1-stage2",
          pathPosition: { x: 50, y: 150 }
        },
        {
          id: "sec1-stage2",
          title: "Completar algoritmos simples",
          description: "Completar los pasos faltantes en algoritmos cotidianos simples.",
          moduleType: "logic",
          isUnlocked: false,
          unlockRequirements: ["sec1-stage1"],
          nextStage: "sec1-stage3",
          pathPosition: { x: 200, y: 100 }
        },
        {
          id: "sec1-stage3",
          title: "Identificar errores lógicos",
          description: "Encontrar fallas en la lógica secuncial de un algoritmo.",
          moduleType: "logic",
          isUnlocked: false,
          unlockRequirements: ["sec1-stage2"],
          nextStage: "sec1-stage4",
          pathPosition: { x: 350, y: 150 }
        },
        {
          id: "sec1-stage4",
          title: "Resolver problemas básicos",
          description: "Aplicar la lógica para alcanzar una solución usando pasos predefinidos.",
          moduleType: "logic",
          isUnlocked: false,
          unlockRequirements: ["sec1-stage3"],
          nextStage: "sec2-stage1",
          pathPosition: { x: 500, y: 100 }
        }
      ]
    },
    {
      id: "sec2",
      title: "Variables y Tipos de Datos",
      objective: "Comprender cómo se almacena y manipula la información.",
      topics: [
        "Variables",
        "Tipos de datos (int, float, string, boolean)",
        "Entrada y salida de datos"
      ],
      stages: [
        {
          id: "sec2-stage1",
          title: "Identificación de variables",
          description: "Reconocer variables y sus diferentes tipos en fragmentos de código.",
          moduleType: "variables",
          isUnlocked: true,
          unlockRequirements: [],
          nextStage: "sec2-stage2",
          pathPosition: { x: 50, y: 300 }
        },
        {
          id: "sec2-stage2",
          title: "Asignación de valores",
          description: "Lógica de asignaciones utilizando herramientas de bloques.",
          moduleType: "variables",
          isUnlocked: false,
          unlockRequirements: ["sec2-stage1"],
          nextStage: "sec2-stage3",
          pathPosition: { x: 200, y: 250 }
        },
        {
          id: "sec2-stage3",
          title: "Completar código",
          description: "Problemas tipo Parsons enfocados en organizar variables.",
          moduleType: "variables",
          isUnlocked: false,
          unlockRequirements: ["sec2-stage2"],
          nextStage: "sec2-stage4",
          pathPosition: { x: 350, y: 300 }
        },
        {
          id: "sec2-stage4",
          title: "Predicción de salida",
          description: "Analizar el flujo para deducir qué valdrán las variables al final.",
          moduleType: "variables",
          isUnlocked: false,
          unlockRequirements: ["sec2-stage3"],
          nextStage: "sec2-stage5",
          pathPosition: { x: 500, y: 250 }
        },
        {
          id: "sec2-stage5",
          title: "Retos básicos",
          description: "Resolver retos simples sobre declaración y manipulación de datos.",
          moduleType: "variables",
          isUnlocked: false,
          unlockRequirements: ["sec2-stage4"],
          nextStage: "sec3-stage1",
          pathPosition: { x: 650, y: 300 }
        }
      ]
    },
    {
      id: "sec3",
      title: "Condicionales (if, else)",
      objective: "Permitir la toma de decisiones en programación.",
      topics: [
        "Sentencias if",
        "Lógica if-else",
        "Condiciones múltiples"
      ],
      stages: [
        {
          id: "sec3-stage1",
          title: "Lógica de decisiones",
          description: "Tomar decisiones visuales sin usar código.",
          moduleType: "conditionals",
          isUnlocked: true,
          unlockRequirements: [],
          nextStage: "sec3-stage2",
          pathPosition: { x: 50, y: 450 }
        },
        {
          id: "sec3-stage2",
          title: "Condicionales con bloques",
          description: "Armar sentencias if-else arrastrando bloques.",
          moduleType: "conditionals",
          isUnlocked: false,
          unlockRequirements: ["sec3-stage1"],
          nextStage: "sec3-stage3",
          pathPosition: { x: 200, y: 400 }
        },
        {
          id: "sec3-stage3",
          title: "Ordenamiento de código",
          description: "Ordenar fragmentos sueltos (Parsons) de estructuras if-else.",
          moduleType: "conditionals",
          isUnlocked: false,
          unlockRequirements: ["sec3-stage2"],
          nextStage: "sec3-stage4",
          pathPosition: { x: 350, y: 450 }
        },
        {
          id: "sec3-stage4",
          title: "Completar código",
          description: "Rellenar las condiciones en sentencias if-else incompletas.",
          moduleType: "conditionals",
          isUnlocked: false,
          unlockRequirements: ["sec3-stage3"],
          nextStage: "sec3-stage5",
          pathPosition: { x: 500, y: 400 }
        },
        {
          id: "sec3-stage5",
          title: "Depuración (debugging)",
          description: "Identificar y arreglar condiciones booleanas defectuosas.",
          moduleType: "conditionals",
          isUnlocked: false,
          unlockRequirements: ["sec3-stage4"],
          nextStage: "sec3-stage6",
          pathPosition: { x: 650, y: 450 }
        },
        {
          id: "sec3-stage6",
          title: "Problemas del mundo real",
          description: "Resolver retos del tipo mundo real utilizando condicionales.",
          moduleType: "conditionals",
          isUnlocked: false,
          unlockRequirements: ["sec3-stage5"],
          nextStage: "sec4-stage1",
          pathPosition: { x: 800, y: 400 }
        }
      ]
    },
    {
      id: "sec4",
      title: "Ciclos (for, while)",
      objective: "Comprender la repetición e iteración.",
      topics: [
        "Bucles for",
        "Bucles while",
        "Contadores e iteraciones"
      ],
      stages: [
        {
          id: "sec4-stage1",
          title: "Lógica de repetición visual",
          description: "Entender el concepto de iteración de manera puramente gráfica.",
          moduleType: "loops",
          isUnlocked: true,
          unlockRequirements: [],
          nextStage: "sec4-stage2",
          pathPosition: { x: 50, y: 600 }
        },
        {
          id: "sec4-stage2",
          title: "Bucles con bloques",
          description: "Construir iteraciones utilizando programación orientada a bloques.",
          moduleType: "loops",
          isUnlocked: false,
          unlockRequirements: ["sec4-stage1"],
          nextStage: "sec4-stage3",
          pathPosition: { x: 200, y: 550 }
        },
        {
          id: "sec4-stage3",
          title: "Problemas tipo Parsons",
          description: "Ordenar las líneas de bucles desordenados.",
          moduleType: "loops",
          isUnlocked: false,
          unlockRequirements: ["sec4-stage2"],
          nextStage: "sec4-stage4",
          pathPosition: { x: 350, y: 600 }
        },
        {
          id: "sec4-stage4",
          title: "Completar código",
          description: "Rellenar las condiciones de parada y de incremento de bucles.",
          moduleType: "loops",
          isUnlocked: false,
          unlockRequirements: ["sec4-stage3"],
          nextStage: "sec4-stage5",
          pathPosition: { x: 500, y: 550 }
        },
        {
          id: "sec4-stage5",
          title: "Depuración de bucles",
          description: "Encontrar y arreglar bucles infinitos u *off-by-one errors*.",
          moduleType: "loops",
          isUnlocked: false,
          unlockRequirements: ["sec4-stage4"],
          nextStage: "sec4-stage6",
          pathPosition: { x: 650, y: 600 }
        },
        {
          id: "sec4-stage6",
          title: "Retos avanzados",
          description: "Ejercicios iterativos combinados que prueban tu dominio.",
          moduleType: "loops",
          isUnlocked: false,
          unlockRequirements: ["sec4-stage5"],
          nextStage: "sec5-stage1",
          pathPosition: { x: 800, y: 550 }
        }
      ]
    },
    {
      id: "sec5",
      title: "Funciones",
      objective: "Fomentar la programación modular.",
      topics: [
        "Definición de funciones",
        "Parámetros",
        "Valores de retorno"
      ],
      stages: [
        {
          id: "sec5-stage1",
          title: "Comprensión del concepto",
          description: "Introducción a los conceptos de entrada, proceso modular y salida.",
          moduleType: "functions",
          isUnlocked: true,
          unlockRequirements: [],
          nextStage: "sec5-stage2",
          pathPosition: { x: 50, y: 750 }
        },
        {
          id: "sec5-stage2",
          title: "Funciones con bloques",
          description: "Agrupar secuencias lógicas utilizando bloques visuales de funciones.",
          moduleType: "functions",
          isUnlocked: false,
          unlockRequirements: ["sec5-stage1"],
          nextStage: "sec5-stage3",
          pathPosition: { x: 200, y: 700 }
        },
        {
          id: "sec5-stage3",
          title: "Problemas tipo Parsons",
          description: "Organizar la estructura para definir y llamar a métodos correctamente.",
          moduleType: "functions",
          isUnlocked: false,
          unlockRequirements: ["sec5-stage2"],
          nextStage: "sec5-stage4",
          pathPosition: { x: 350, y: 750 }
        },
        {
          id: "sec5-stage4",
          title: "Completar funciones",
          description: "Llenar los parámetros o los valores de retorno que faltan.",
          moduleType: "functions",
          isUnlocked: false,
          unlockRequirements: ["sec5-stage3"],
          nextStage: "sec5-stage5",
          pathPosition: { x: 500, y: 700 }
        },
        {
          id: "sec5-stage5",
          title: "Resolución de problemas con funciones",
          description: "Retos de creación de funciones pequeñas que cumplan un objetivo.",
          moduleType: "functions",
          isUnlocked: false,
          unlockRequirements: ["sec5-stage4"],
          nextStage: "sec6-stage1",
          pathPosition: { x: 650, y: 750 }
        }
      ]
    },
    {
      id: "sec6",
      title: "Listas / Arreglos",
      objective: "Trabajar con colecciones de datos.",
      topics: [
        "Listas / arreglos",
        "Acceso a elementos",
        "Recorrido de colecciones"
      ],
      stages: [
        {
          id: "sec6-stage1",
          title: "Introducción al concepto",
          description: "Visualizar arreglos, sus elementos y la importancia de los índices n-0.",
          moduleType: "arrays",
          isUnlocked: true,
          unlockRequirements: [],
          nextStage: "sec6-stage2",
          pathPosition: { x: 50, y: 900 }
        },
        {
          id: "sec6-stage2",
          title: "Manipulación con bloques",
          description: "Agregar, eliminar o acceder a datos desde un entorno de bloques.",
          moduleType: "arrays",
          isUnlocked: false,
          unlockRequirements: ["sec6-stage1"],
          nextStage: "sec6-stage3",
          pathPosition: { x: 200, y: 850 }
        },
        {
          id: "sec6-stage3",
          title: "Problemas tipo Parsons",
          description: "Armar código para consultar elementos dentro de un rango límite (bounds).",
          moduleType: "arrays",
          isUnlocked: false,
          unlockRequirements: ["sec6-stage2"],
          nextStage: "sec6-stage4",
          pathPosition: { x: 350, y: 900 }
        },
        {
          id: "sec6-stage4",
          title: "Recorridos con ciclos",
          description: "Uniendo ciclos con listas para visitar o modificar cada posición iterativamente.",
          moduleType: "arrays",
          isUnlocked: false,
          unlockRequirements: ["sec6-stage3"],
          nextStage: "sec6-stage5",
          pathPosition: { x: 500, y: 850 }
        },
        {
          id: "sec6-stage5",
          title: "Retos combinados",
          description: "Operaciones complejas sobre arreglos, como sumatorias, búsquedas simples y fltros.",
          moduleType: "arrays",
          isUnlocked: false,
          unlockRequirements: ["sec6-stage4"],
          nextStage: "sec7-stage1",
          pathPosition: { x: 650, y: 900 }
        }
      ]
    },
    {
      id: "sec7",
      title: "Integración de Conceptos (Nivel Experto)",
      objective: "Integrar todos los conceptos aprendidos para resolver problemas.",
      topics: [
        "Problemas integrados",
        "Mini-proyectos"
      ],
      stages: [
        {
          id: "sec7-stage1",
          title: "Problemas guiados",
          description: "Resolver retos que requerirán utilizar todos los conceptos adquiridos paso a paso.",
          moduleType: "expert",
          isUnlocked: true,
          unlockRequirements: [],
          nextStage: "sec7-stage2",
          pathPosition: { x: 50, y: 1050 }
        },
        {
          id: "sec7-stage2",
          title: "Problemas semi-guiados",
          description: "Mini-proyectos con instrucciones menores y mayores libertades.",
          moduleType: "expert",
          isUnlocked: false,
          unlockRequirements: ["sec7-stage1"],
          nextStage: "sec7-stage3",
          pathPosition: { x: 200, y: 1000 }
        },
        {
          id: "sec7-stage3",
          title: "Depuración avanzada",
          description: "Proyectos grandes con errores lógicos difíciles y silenciosos para descubrir.",
          moduleType: "expert",
          isUnlocked: false,
          unlockRequirements: ["sec7-stage2"],
          nextStage: "sec7-stage4",
          pathPosition: { x: 350, y: 1050 }
        },
        {
          id: "sec7-stage4",
          title: "Reto final",
          description: "El último desafío para convertirte en un Maestro Bug Hunter de tu promoción.",
          moduleType: "expert",
          isUnlocked: false,
          unlockRequirements: ["sec7-stage3"],
          nextStage: null,
          pathPosition: { x: 500, y: 1000 }
        }
      ]
    }
  ];
  
  export default sections;