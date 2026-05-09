// ── Local "database" — mirrors Firestore document structure ──
// Key = document ID, Value = document fields

export const levelsDB = {

  // ╔══════════════════════════════════════════════════════════╗
  // ║  SEC 1 · STAGE 1 — Ordenamiento de pasos               ║
  // ╚══════════════════════════════════════════════════════════╝

  sec1_stg1_lvl1: {
    id: "sec1_stg1_lvl1", sectionId: "sec1", stageId: "sec1-stage1",
    order: 1, nextLevelId: "sec1_stg1_lvl2",
    title: "Preparar un cereal", objective: "Ordena los pasos para preparar un cereal",
    difficulty: "fácil", gameType: "parsons", points: 100, maxLives: 3,
    successMessage: "¡Algoritmo perfecto! Ya puedes desayunar.",
    blocks: [
      { id: "b1", type: "action", label: "Tomar un tazón", sub: "Paso inicial", text: "Tazón listo", bubble: "Primero el tazón" },
      { id: "b2", type: "action", label: "Servir el cereal", sub: "Verter cereal en el tazón", text: "Cereal servido", bubble: "Cereal listo" },
      { id: "b3", type: "action", label: "Agregar la leche", sub: "Verter leche sobre el cereal", text: "Leche agregada", bubble: "Con leche" },
      { id: "b4", type: "result", label: "Comer el cereal", sub: "Resultado final", text: "¡A comer!", bubble: "¡Buen provecho!" },
      { id: "d1", type: "action", label: "Calentar la leche", sub: "Paso opcional", text: "Leche caliente", bubble: "Hmm...", distractor: true },
    ],
    solution: ["b1", "b2", "b3", "b4"],
  },

  sec1_stg1_lvl2: {
    id: "sec1_stg1_lvl2", sectionId: "sec1", stageId: "sec1-stage1",
    order: 2, nextLevelId: "sec1_stg1_lvl3",
    title: "Enviar un mensaje", objective: "Ordena los pasos para enviar un mensaje de texto",
    difficulty: "fácil", gameType: "parsons", points: 100, maxLives: 3,
    successMessage: "¡Mensaje enviado correctamente!",
    blocks: [
      { id: "b1", type: "action", label: "Desbloquear el teléfono", sub: "Paso inicial", text: "Teléfono desbloqueado", bubble: "Listo" },
      { id: "b2", type: "action", label: "Abrir la app de mensajes", sub: "Buscar la aplicación", text: "App abierta", bubble: "Abriendo..." },
      { id: "b3", type: "action", label: "Seleccionar un contacto", sub: "Elegir destinatario", text: "Contacto seleccionado", bubble: "¿A quién?" },
      { id: "b4", type: "action", label: "Escribir el mensaje", sub: "Redactar texto", text: "Mensaje escrito", bubble: "Escribiendo..." },
      { id: "b5", type: "result", label: "Presionar Enviar", sub: "Resultado final", text: "Mensaje enviado", bubble: "¡Enviado!" },
      { id: "d1", type: "action", label: "Tomar una foto", sub: "Usar la cámara", text: "Foto tomada", bubble: "¿Una foto?", distractor: true },
      { id: "d2", type: "action", label: "Hacer una llamada", sub: "Llamar al contacto", text: "Llamando...", bubble: "Ring ring", distractor: true },
    ],
    solution: ["b1", "b2", "b3", "b4", "b5"],
  },

  sec1_stg1_lvl3: {
    id: "sec1_stg1_lvl3", sectionId: "sec1", stageId: "sec1-stage1",
    order: 3, nextLevelId: "sec1_stg2_lvl1",
    title: "Preparar la mochila", objective: "Ordena los pasos para alistar tu mochila para clase",
    difficulty: "medio", gameType: "parsons", points: 150, maxLives: 3,
    successMessage: "¡Mochila lista para un gran día!",
    blocks: [
      { id: "b1", type: "check", label: "Revisar el horario de clases", sub: "Verificación", text: "Horario revisado", bubble: "¿Qué toca hoy?" },
      { id: "b2", type: "action", label: "Sacar los cuadernos necesarios", sub: "Seleccionar materiales", text: "Cuadernos listos", bubble: "Estos necesito" },
      { id: "b3", type: "action", label: "Guardar los cuadernos en la mochila", sub: "Empacar", text: "Cuadernos guardados", bubble: "Empacando" },
      { id: "b4", type: "action", label: "Agregar estuche y lápices", sub: "Material de escritura", text: "Estuche listo", bubble: "¡Lápices!" },
      { id: "b5", type: "check", label: "Verificar que no falte nada", sub: "Verificación final", text: "Todo completo", bubble: "Revisando..." },
      { id: "b6", type: "result", label: "Cerrar la mochila", sub: "Resultado final", text: "¡Lista!", bubble: "¡Vámonos!" },
      { id: "d1", type: "action", label: "Guardar juguetes", sub: "Entretenimiento", text: "Juguetes guardados", bubble: "¿Juguetes?", distractor: true },
      { id: "d2", type: "action", label: "Empacar la almohada", sub: "Para dormir", text: "Almohada lista", bubble: "Zzz...", distractor: true },
    ],
    solution: ["b1", "b2", "b3", "b4", "b5", "b6"],
  },

  // ╔══════════════════════════════════════════════════════════╗
  // ║  SEC 1 · STAGE 2 — Completar algoritmos simples         ║
  // ╚══════════════════════════════════════════════════════════╝

  sec1_stg2_lvl1: {
    id: "sec1_stg2_lvl1", sectionId: "sec1", stageId: "sec1-stage2",
    order: 1, nextLevelId: "sec1_stg2_lvl2",
    title: "Cruzar la calle", objective: "Completa el algoritmo para cruzar la calle de forma segura",
    difficulty: "fácil", gameType: "parsons", points: 120, maxLives: 3,
    successMessage: "¡Cruzaste de forma segura!",
    blocks: [
      { id: "b1", type: "action", label: "Llegar al cruce peatonal", sub: "Ubicarse", text: "En el cruce", bubble: "Aquí es" },
      { id: "b2", type: "check", label: "Mirar a la izquierda", sub: "Verificar tráfico", text: "Izquierda despejada", bubble: "Mirando..." },
      { id: "b3", type: "check", label: "Mirar a la derecha", sub: "Verificar tráfico", text: "Derecha despejada", bubble: "¿Viene algo?" },
      { id: "b4", type: "check", label: "Esperar luz verde del semáforo", sub: "Señal de paso", text: "Luz verde", bubble: "¡Verde!" },
      { id: "b5", type: "result", label: "Cruzar caminando", sub: "Resultado final", text: "Calle cruzada", bubble: "¡Listo!" },
      { id: "d1", type: "action", label: "Correr rápidamente", sub: "Cruzar corriendo", text: "Corriendo", bubble: "¡Peligro!", distractor: true },
      { id: "d2", type: "action", label: "Cruzar con los ojos cerrados", sub: "Sin mirar", text: "...", bubble: "Mala idea", distractor: true },
    ],
    solution: ["b1", "b2", "b3", "b4", "b5"],
  },

  sec1_stg2_lvl2: {
    id: "sec1_stg2_lvl2", sectionId: "sec1", stageId: "sec1-stage2",
    order: 2, nextLevelId: "sec1_stg2_lvl3",
    title: "Preparar un sándwich", objective: "Completa los pasos para hacer un sándwich",
    difficulty: "medio", gameType: "parsons", points: 150, maxLives: 3,
    successMessage: "¡Un sándwich delicioso!",
    blocks: [
      { id: "b1", type: "action", label: "Sacar dos rebanadas de pan", sub: "Ingrediente base", text: "Pan listo", bubble: "Pan" },
      { id: "b2", type: "action", label: "Untar mantequilla en el pan", sub: "Preparar base", text: "Pan untado", bubble: "Untando" },
      { id: "b3", type: "action", label: "Colocar jamón y queso", sub: "Agregar relleno", text: "Relleno puesto", bubble: "¡Jamón!" },
      { id: "b4", type: "action", label: "Poner lechuga y tomate", sub: "Vegetales frescos", text: "Vegetales puestos", bubble: "Fresquito" },
      { id: "b5", type: "action", label: "Cerrar con la otra rebanada", sub: "Tapar el sándwich", text: "Sándwich cerrado", bubble: "Casi listo" },
      { id: "b6", type: "result", label: "Cortar a la mitad y servir", sub: "Resultado final", text: "¡Listo para comer!", bubble: "¡Provecho!" },
      { id: "d1", type: "action", label: "Poner helado dentro", sub: "¿Helado?", text: "Helado puesto", bubble: "¿Seguro?", distractor: true },
      { id: "d2", type: "action", label: "Meter al horno 2 horas", sub: "Cocción larga", text: "Horneando...", bubble: "No hace falta", distractor: true },
      { id: "d3", type: "action", label: "Agregar salsa de chocolate", sub: "Dulce", text: "Chocolate puesto", bubble: "Mmm no", distractor: true },
    ],
    solution: ["b1", "b2", "b3", "b4", "b5", "b6"],
  },

  sec1_stg2_lvl3: {
    id: "sec1_stg2_lvl3", sectionId: "sec1", stageId: "sec1-stage2",
    order: 3, nextLevelId: "sec1_stg3_lvl1",
    title: "Buscar un libro en la biblioteca", objective: "Ordena el algoritmo para encontrar un libro",
    difficulty: "medio", gameType: "parsons", points: 150, maxLives: 3,
    successMessage: "¡Libro encontrado! A leer se ha dicho.",
    blocks: [
      { id: "b1", type: "action", label: "Ir a la biblioteca", sub: "Desplazarse", text: "En la biblioteca", bubble: "Llegué" },
      { id: "b2", type: "check", label: "Buscar en el catálogo digital", sub: "Consultar sistema", text: "Libro localizado", bubble: "¡Lo encontré!" },
      { id: "b3", type: "action", label: "Ir al estante indicado", sub: "Ubicar sección", text: "En el estante", bubble: "Sección correcta" },
      { id: "b4", type: "action", label: "Tomar el libro", sub: "Seleccionar", text: "Libro en mano", bubble: "¡Este es!" },
      { id: "b5", type: "action", label: "Llevar al mostrador de préstamo", sub: "Registrar", text: "En el mostrador", bubble: "Para llevarlo" },
      { id: "b6", type: "result", label: "Registrar el préstamo y salir", sub: "Resultado final", text: "Libro prestado", bubble: "¡A leer!" },
      { id: "d1", type: "action", label: "Arrancar una página", sub: "Dañar el libro", text: "Página rota", bubble: "¡No hagas eso!", distractor: true },
      { id: "d2", type: "action", label: "Esconder el libro", sub: "Ocultar", text: "Libro escondido", bubble: "Eso no está bien", distractor: true },
    ],
    solution: ["b1", "b2", "b3", "b4", "b5", "b6"],
  },

  // ╔══════════════════════════════════════════════════════════╗
  // ║  SEC 1 · STAGE 3 — Identificar errores lógicos         ║
  // ╚══════════════════════════════════════════════════════════╝

  sec1_stg3_lvl1: {
    id: "sec1_stg3_lvl1", sectionId: "sec1", stageId: "sec1-stage3",
    order: 1, nextLevelId: "sec1_stg3_lvl2",
    title: "La receta equivocada", objective: "Hay pasos incorrectos. Selecciona solo los correctos y ordénalos",
    difficulty: "medio", gameType: "parsons", points: 180, maxLives: 3,
    successMessage: "¡Detectaste los errores como un verdadero explorador!",
    blocks: [
      { id: "b1", type: "action", label: "Hervir agua en una olla", sub: "Calentar agua", text: "Agua hirviendo", bubble: "Calentando" },
      { id: "b2", type: "action", label: "Agregar la pasta al agua", sub: "Cocinar pasta", text: "Pasta en el agua", bubble: "Al agua" },
      { id: "b3", type: "check", label: "Esperar 10 minutos", sub: "Tiempo de cocción", text: "Pasta lista", bubble: "Paciencia" },
      { id: "b4", type: "action", label: "Colar la pasta", sub: "Escurrir agua", text: "Pasta colada", bubble: "Sin agua" },
      { id: "b5", type: "result", label: "Servir con salsa", sub: "Resultado final", text: "¡A comer!", bubble: "¡Rico!" },
      { id: "d1", type: "action", label: "Agregar la pasta sin hervir el agua", sub: "Agua fría", text: "No se cocina", bubble: "Error lógico", distractor: true },
      { id: "d2", type: "action", label: "Colar la pasta antes de cocinarla", sub: "Sin sentido", text: "Nada que colar", bubble: "¿Antes?", distractor: true },
      { id: "d3", type: "action", label: "Congelar la pasta caliente", sub: "Cambio brusco", text: "Pasta congelada", bubble: "No tiene sentido", distractor: true },
    ],
    solution: ["b1", "b2", "b3", "b4", "b5"],
  },

  sec1_stg3_lvl2: {
    id: "sec1_stg3_lvl2", sectionId: "sec1", stageId: "sec1-stage3",
    order: 2, nextLevelId: "sec1_stg3_lvl3",
    title: "Rutina matutina confusa", objective: "Encuentra los pasos correctos de la rutina matutina",
    difficulty: "medio", gameType: "parsons", points: 180, maxLives: 3,
    successMessage: "¡Rutina perfecta! Listo para el día.",
    blocks: [
      { id: "b1", type: "action", label: "Sonar la alarma y despertar", sub: "Inicio del día", text: "Despierto", bubble: "Buenos días" },
      { id: "b2", type: "action", label: "Lavarse la cara y los dientes", sub: "Higiene", text: "Cara limpia", bubble: "Fresquito" },
      { id: "b3", type: "action", label: "Vestirse con ropa limpia", sub: "Prepararse", text: "Vestido", bubble: "Listo" },
      { id: "b4", type: "action", label: "Desayunar", sub: "Alimentarse", text: "Desayuno hecho", bubble: "Energía" },
      { id: "b5", type: "result", label: "Salir de casa", sub: "Resultado final", text: "¡En camino!", bubble: "¡Vámonos!" },
      { id: "d1", type: "action", label: "Vestirse antes de despertar", sub: "Imposible", text: "¿Dormido?", bubble: "Error lógico", distractor: true },
      { id: "d2", type: "action", label: "Salir sin vestirse", sub: "Inadecuado", text: "Sin ropa", bubble: "¡No!", distractor: true },
      { id: "d3", type: "action", label: "Desayunar acostado", sub: "Aún no despierto", text: "En la cama", bubble: "Hmm...", distractor: true },
    ],
    solution: ["b1", "b2", "b3", "b4", "b5"],
  },

  sec1_stg3_lvl3: {
    id: "sec1_stg3_lvl3", sectionId: "sec1", stageId: "sec1-stage3",
    order: 3, nextLevelId: "sec1_stg4_lvl1",
    title: "El proceso de compra", objective: "Identifica los pasos correctos para comprar en una tienda",
    difficulty: "difícil", gameType: "parsons", points: 200, maxLives: 3,
    successMessage: "¡Compra exitosa! Gran pensamiento lógico.",
    blocks: [
      { id: "b1", type: "action", label: "Entrar a la tienda", sub: "Ir de compras", text: "En la tienda", bubble: "Hola tienda" },
      { id: "b2", type: "action", label: "Tomar un carrito o canasta", sub: "Para cargar productos", text: "Carrito listo", bubble: "A comprar" },
      { id: "b3", type: "action", label: "Buscar los productos que necesitas", sub: "Recorrer pasillos", text: "Productos encontrados", bubble: "Estos son" },
      { id: "b4", type: "action", label: "Ir a la caja a pagar", sub: "Hacer la fila", text: "En la caja", bubble: "Mi turno" },
      { id: "b5", type: "action", label: "Pagar los productos", sub: "Entregar dinero", text: "Pago realizado", bubble: "Aquí tiene" },
      { id: "b6", type: "result", label: "Recoger bolsas y salir", sub: "Resultado final", text: "Compra hecha", bubble: "¡Listo!" },
      { id: "d1", type: "action", label: "Pagar antes de elegir productos", sub: "Sin sentido", text: "¿Pagar qué?", bubble: "Error", distractor: true },
      { id: "d2", type: "action", label: "Salir sin pagar", sub: "Incorrecto", text: "Alarma", bubble: "¡No!", distractor: true },
      { id: "d3", type: "action", label: "Comer productos en la tienda", sub: "Sin pagar", text: "Comiendo", bubble: "No se debe", distractor: true },
    ],
    solution: ["b1", "b2", "b3", "b4", "b5", "b6"],
  },

  // ╔══════════════════════════════════════════════════════════╗
  // ║  SEC 1 · STAGE 4 — Resolver problemas básicos          ║
  // ╚══════════════════════════════════════════════════════════╝

  sec1_stg4_lvl1: {
    id: "sec1_stg4_lvl1", sectionId: "sec1", stageId: "sec1-stage4",
    order: 1, nextLevelId: "sec1_stg4_lvl2",
    title: "Organizar una fiesta", objective: "Crea el algoritmo completo para organizar una fiesta de cumpleaños",
    difficulty: "medio", gameType: "parsons", points: 200, maxLives: 3,
    successMessage: "¡La fiesta será un éxito!",
    blocks: [
      { id: "b1", type: "check", label: "Elegir la fecha y lugar", sub: "Planificación", text: "Fecha elegida", bubble: "¿Cuándo?" },
      { id: "b2", type: "action", label: "Hacer la lista de invitados", sub: "Organización", text: "Lista hecha", bubble: "¿A quién?" },
      { id: "b3", type: "action", label: "Enviar las invitaciones", sub: "Comunicar", text: "Invitaciones enviadas", bubble: "¡Están invitados!" },
      { id: "b4", type: "action", label: "Comprar decoraciones y comida", sub: "Preparativos", text: "Todo comprado", bubble: "De compras" },
      { id: "b5", type: "action", label: "Decorar el lugar", sub: "Ambientación", text: "Lugar decorado", bubble: "¡Bonito!" },
      { id: "b6", type: "action", label: "Preparar la comida", sub: "Cocinar", text: "Comida lista", bubble: "¡Huele rico!" },
      { id: "b7", type: "result", label: "Recibir a los invitados y disfrutar", sub: "Resultado final", text: "¡Fiesta!", bubble: "¡A celebrar!" },
      { id: "d1", type: "action", label: "Decorar sin comprar decoraciones", sub: "Imposible", text: "Sin materiales", bubble: "¿Con qué?", distractor: true },
      { id: "d2", type: "action", label: "Recibir invitados sin invitar", sub: "Nadie sabe", text: "Nadie vino", bubble: "Solos...", distractor: true },
    ],
    solution: ["b1", "b2", "b3", "b4", "b5", "b6", "b7"],
  },

  sec1_stg4_lvl2: {
    id: "sec1_stg4_lvl2", sectionId: "sec1", stageId: "sec1-stage4",
    order: 2, nextLevelId: "sec1_stg4_lvl3",
    title: "Primeros auxilios", objective: "Ordena los pasos de primeros auxilios ante una cortada leve",
    difficulty: "difícil", gameType: "parsons", points: 250, maxLives: 3,
    successMessage: "¡Herida tratada correctamente! Podrías ser médico.",
    blocks: [
      { id: "b1", type: "check", label: "Evaluar la gravedad de la herida", sub: "Diagnóstico", text: "Herida leve", bubble: "Veamos..." },
      { id: "b2", type: "action", label: "Lavarse las manos", sub: "Higiene", text: "Manos limpias", bubble: "Primero higiene" },
      { id: "b3", type: "action", label: "Limpiar la herida con agua", sub: "Limpiar", text: "Herida limpia", bubble: "Con cuidado" },
      { id: "b4", type: "action", label: "Aplicar antiséptico", sub: "Desinfectar", text: "Desinfectada", bubble: "No infectar" },
      { id: "b5", type: "action", label: "Colocar una bandita o vendaje", sub: "Proteger", text: "Vendaje puesto", bubble: "Protegida" },
      { id: "b6", type: "result", label: "Vigilar la recuperación", sub: "Resultado final", text: "En recuperación", bubble: "¡Cuidado!" },
      { id: "d1", type: "action", label: "Poner vendaje sin limpiar", sub: "Riesgo de infección", text: "Infectada", bubble: "¡Error!", distractor: true },
      { id: "d2", type: "action", label: "Tocar la herida sin lavarse las manos", sub: "Antihigiénico", text: "Contaminada", bubble: "¡No!", distractor: true },
      { id: "d3", type: "action", label: "Ignorar la herida", sub: "Descuido", text: "Sin atender", bubble: "Mala idea", distractor: true },
    ],
    solution: ["b1", "b2", "b3", "b4", "b5", "b6"],
  },

  sec1_stg4_lvl3: {
    id: "sec1_stg4_lvl3", sectionId: "sec1", stageId: "sec1-stage4",
    order: 3, nextLevelId: null,
    title: "El algoritmo del detective", objective: "Resuelve un caso: ordena los pasos de investigación",
    difficulty: "difícil", gameType: "parsons", points: 300, maxLives: 3,
    successMessage: "¡Caso resuelto! Eres un verdadero Code-Explorer.",
    blocks: [
      { id: "b1", type: "check", label: "Recibir el reporte del caso", sub: "Información inicial", text: "Caso recibido", bubble: "Veamos..." },
      { id: "b2", type: "action", label: "Ir a la escena de los hechos", sub: "Investigar", text: "En la escena", bubble: "Buscando pistas" },
      { id: "b3", type: "action", label: "Recoger evidencia y pistas", sub: "Recolectar", text: "Evidencia recolectada", bubble: "Interesante" },
      { id: "b4", type: "action", label: "Entrevistar a los testigos", sub: "Testimonios", text: "Testigos entrevistados", bubble: "¿Qué vieron?" },
      { id: "b5", type: "check", label: "Analizar las pistas recolectadas", sub: "Razonamiento", text: "Pistas analizadas", bubble: "Conectando puntos" },
      { id: "b6", type: "action", label: "Formular una hipótesis", sub: "Deducción", text: "Hipótesis lista", bubble: "¡Ajá!" },
      { id: "b7", type: "check", label: "Verificar la hipótesis con evidencia", sub: "Validación", text: "Hipótesis confirmada", bubble: "¡Correcto!" },
      { id: "b8", type: "result", label: "Presentar la solución del caso", sub: "Resultado final", text: "¡Caso cerrado!", bubble: "¡Resuelto!" },
      { id: "d1", type: "action", label: "Acusar sin evidencia", sub: "Sin pruebas", text: "Acusación falsa", bubble: "¡Sin pruebas!", distractor: true },
      { id: "d2", type: "action", label: "Ignorar a los testigos", sub: "Descuido", text: "Sin testimonios", bubble: "Error grave", distractor: true },
      { id: "d3", type: "action", label: "Resolver sin ir a la escena", sub: "Desde casa", text: "Sin investigar", bubble: "Imposible", distractor: true },
    ],
    solution: ["b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8"],
  },
};
