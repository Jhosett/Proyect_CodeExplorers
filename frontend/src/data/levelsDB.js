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

  // ╔══════════════════════════════════════════════════════════╗
  // ║  SEC 2 · STAGE 1 — Identificación de variables         ║
  // ╚══════════════════════════════════════════════════════════╝

  sec2_stg1_lvl1: {
    id: "sec2_stg1_lvl1", sectionId: "sec2", stageId: "sec2-stage1",
    order: 1, nextLevelId: "sec2_stg1_lvl2",
    title: "Mi primera variable", objective: "Declara una variable y muestra su valor en pantalla",
    difficulty: "fácil", gameType: "parsons", points: 100, maxLives: 3,
    successMessage: "¡Creaste tu primera variable! Ya eres programador.",
    blocks: [
      { id: "b1", type: "var", label: 'nombre = "Carlos"', sub: "Declarar variable texto", text: 'nombre = "Carlos"', bubble: "Variable guardada" },
      { id: "b2", type: "print", label: "print(nombre)", sub: "Mostrar el valor", text: "Carlos", bubble: "Carlos" },
      { id: "d1", type: "var", label: "nombre = Carlos", sub: "Sin comillas", text: "Error: nombre no definido", bubble: "¿Sin comillas?", distractor: true },
      { id: "d2", type: "print", label: 'print("nombre")', sub: "Imprime texto literal", text: "nombre", bubble: "Imprime la palabra", distractor: true },
    ],
    solution: ["b1", "b2"],
  },

  sec2_stg1_lvl2: {
    id: "sec2_stg1_lvl2", sectionId: "sec2", stageId: "sec2-stage1",
    order: 2, nextLevelId: "sec2_stg1_lvl3",
    title: "Tipos de datos", objective: "Declara variables de tipo entero, decimal y texto, luego imprímelas",
    difficulty: "fácil", gameType: "parsons", points: 100, maxLives: 3,
    successMessage: "¡Conoces los tipos de datos básicos!",
    blocks: [
      { id: "b1", type: "var", label: "edad = 12", sub: "Entero (int)", text: "edad = 12", bubble: "Número entero" },
      { id: "b2", type: "var", label: "altura = 1.50", sub: "Decimal (float)", text: "altura = 1.50", bubble: "Número decimal" },
      { id: "b3", type: "var", label: 'nombre = "Lucía"', sub: "Texto (string)", text: 'nombre = "Lucía"', bubble: "Cadena de texto" },
      { id: "b4", type: "print", label: "print(nombre, edad, altura)", sub: "Mostrar todo", text: "Lucía 12 1.50", bubble: "Lucía 12 1.50" },
      { id: "d1", type: "var", label: 'edad = "doce"', sub: "Texto en vez de número", text: 'edad = "doce"', bubble: "Tipo incorrecto", distractor: true },
      { id: "d2", type: "var", label: 'altura = "1.50"', sub: "Texto en vez de decimal", text: 'altura = "1.50"', bubble: "Es un string", distractor: true },
    ],
    solution: ["b1", "b2", "b3", "b4"],
  },

  sec2_stg1_lvl3: {
    id: "sec2_stg1_lvl3", sectionId: "sec2", stageId: "sec2-stage1",
    order: 3, nextLevelId: "sec2_stg2_lvl1",
    title: "Verdadero o falso", objective: "Declara variables booleanas y muestra sus valores",
    difficulty: "medio", gameType: "parsons", points: 150, maxLives: 3,
    successMessage: "¡Dominas los booleanos! True o False, sin secretos.",
    blocks: [
      { id: "b1", type: "var", label: "es_de_dia = True", sub: "Booleano verdadero", text: "es_de_dia = True", bubble: "¡Es de día!" },
      { id: "b2", type: "var", label: "llueve = False", sub: "Booleano falso", text: "llueve = False", bubble: "No llueve" },
      { id: "b3", type: "print", label: "print(es_de_dia)", sub: "Mostrar booleano", text: "True", bubble: "True" },
      { id: "b4", type: "print", label: "print(llueve)", sub: "Mostrar booleano", text: "False", bubble: "False" },
      { id: "d1", type: "var", label: 'es_de_dia = "True"', sub: "Texto, no booleano", text: 'es_de_dia = "True"', bubble: "Es un string", distractor: true },
      { id: "d2", type: "var", label: "llueve = 0", sub: "Número, no booleano", text: "llueve = 0", bubble: "Es un entero", distractor: true },
    ],
    solution: ["b1", "b2", "b3", "b4"],
  },

  // ╔══════════════════════════════════════════════════════════╗
  // ║  SEC 2 · STAGE 2 — Asignación de valores               ║
  // ╚══════════════════════════════════════════════════════════╝

  sec2_stg2_lvl1: {
    id: "sec2_stg2_lvl1", sectionId: "sec2", stageId: "sec2-stage2",
    order: 1, nextLevelId: "sec2_stg2_lvl2",
    title: "Cambiar el valor", objective: "Reasigna el valor de una variable y muestra el cambio",
    difficulty: "fácil", gameType: "parsons", points: 120, maxLives: 3,
    successMessage: "¡Las variables pueden cambiar de valor!",
    blocks: [
      { id: "b1", type: "var", label: 'color = "rojo"', sub: "Asignación inicial", text: 'color = "rojo"', bubble: "Color: rojo" },
      { id: "b2", type: "print", label: "print(color)", sub: "Mostrar valor actual", text: "rojo", bubble: "rojo" },
      { id: "b3", type: "var", label: 'color = "azul"', sub: "Reasignación", text: 'color = "azul"', bubble: "Ahora es azul" },
      { id: "b4", type: "print", label: "print(color)", sub: "Mostrar nuevo valor", text: "azul", bubble: "azul" },
      { id: "d1", type: "var", label: "color = rojo", sub: "Sin comillas", text: "Error", bubble: "Falta comillas", distractor: true },
      { id: "d2", type: "print", label: 'print("color")', sub: "Imprime literal", text: "color", bubble: "No es la variable", distractor: true },
    ],
    solution: ["b1", "b2", "b3", "b4"],
  },

  sec2_stg2_lvl2: {
    id: "sec2_stg2_lvl2", sectionId: "sec2", stageId: "sec2-stage2",
    order: 2, nextLevelId: "sec2_stg2_lvl3",
    title: "Intercambio de valores", objective: "Usa una variable temporal para intercambiar dos valores",
    difficulty: "medio", gameType: "parsons", points: 150, maxLives: 3,
    successMessage: "¡Intercambio perfecto! El truco de la variable temporal.",
    blocks: [
      { id: "b1", type: "var", label: "a = 5", sub: "Primera variable", text: "a = 5", bubble: "a vale 5" },
      { id: "b2", type: "var", label: "b = 10", sub: "Segunda variable", text: "b = 10", bubble: "b vale 10" },
      { id: "b3", type: "var", label: "temp = a", sub: "Guardar a en temporal", text: "temp = 5", bubble: "Respaldo" },
      { id: "b4", type: "var", label: "a = b", sub: "a toma el valor de b", text: "a = 10", bubble: "a ahora es 10" },
      { id: "b5", type: "var", label: "b = temp", sub: "b toma el valor guardado", text: "b = 5", bubble: "b ahora es 5" },
      { id: "b6", type: "print", label: "print(a, b)", sub: "Mostrar resultado", text: "10 5", bubble: "¡Intercambiados!" },
      { id: "d1", type: "var", label: "a = b", sub: "Sin respaldo", text: "a = 10 (se pierde)", bubble: "¡Perdiste a!", distractor: true },
      { id: "d2", type: "var", label: "b = a", sub: "Sin respaldo", text: "b = 10 (no cambia)", bubble: "Ambos iguales", distractor: true },
    ],
    solution: ["b1", "b2", "b3", "b4", "b5", "b6"],
  },

  sec2_stg2_lvl3: {
    id: "sec2_stg2_lvl3", sectionId: "sec2", stageId: "sec2-stage2",
    order: 3, nextLevelId: "sec2_stg3_lvl1",
    title: "Operaciones con variables", objective: "Calcula un descuento usando operaciones aritméticas",
    difficulty: "medio", gameType: "parsons", points: 150, maxLives: 3,
    successMessage: "¡Cálculo correcto! Las variables sirven para operar datos.",
    blocks: [
      { id: "b1", type: "var", label: "precio = 100", sub: "Precio original", text: "precio = 100", bubble: "Precio base" },
      { id: "b2", type: "var", label: "descuento = 20", sub: "Valor de descuento", text: "descuento = 20", bubble: "20 de descuento" },
      { id: "b3", type: "var", label: "total = precio - descuento", sub: "Calcular total", text: "total = 80", bubble: "100 - 20 = 80" },
      { id: "b4", type: "print", label: 'print("Total:", total)', sub: "Mostrar resultado", text: "Total: 80", bubble: "Total: 80" },
      { id: "d1", type: "var", label: "total = descuento - precio", sub: "Resta invertida", text: "total = -80", bubble: "Resultado negativo", distractor: true },
      { id: "d2", type: "var", label: "total = precio + descuento", sub: "Suma en vez de resta", text: "total = 120", bubble: "¿Sumar descuento?", distractor: true },
    ],
    solution: ["b1", "b2", "b3", "b4"],
  },

  // ╔══════════════════════════════════════════════════════════╗
  // ║  SEC 2 · STAGE 3 — Completar código                    ║
  // ╚══════════════════════════════════════════════════════════╝

  sec2_stg3_lvl1: {
    id: "sec2_stg3_lvl1", sectionId: "sec2", stageId: "sec2-stage3",
    order: 1, nextLevelId: "sec2_stg3_lvl2",
    title: "Mensaje personalizado", objective: "Concatena texto para formar un saludo completo",
    difficulty: "fácil", gameType: "parsons", points: 120, maxLives: 3,
    successMessage: "¡Saludo perfecto! Concatenar texto es muy útil.",
    blocks: [
      { id: "b1", type: "var", label: 'nombre = "María"', sub: "Declarar nombre", text: 'nombre = "María"', bubble: "Variable lista" },
      { id: "b2", type: "var", label: 'saludo = "Hola, " + nombre', sub: "Concatenar textos", text: 'saludo = "Hola, María"', bubble: "Uniendo textos" },
      { id: "b3", type: "print", label: "print(saludo)", sub: "Mostrar saludo", text: "Hola, María", bubble: "Hola, María" },
      { id: "d1", type: "var", label: 'saludo = "Hola, " + "nombre"', sub: "Concatena literal", text: 'saludo = "Hola, nombre"', bubble: "No usa la variable", distractor: true },
      { id: "d2", type: "print", label: "print(nombre + saludo)", sub: "Orden incorrecto", text: "MaríaHola, María", bubble: "Desordenado", distractor: true },
    ],
    solution: ["b1", "b2", "b3"],
  },

  sec2_stg3_lvl2: {
    id: "sec2_stg3_lvl2", sectionId: "sec2", stageId: "sec2-stage3",
    order: 2, nextLevelId: "sec2_stg3_lvl3",
    title: "Calculando la edad", objective: "Calcula la edad restando el año de nacimiento al año actual",
    difficulty: "medio", gameType: "parsons", points: 150, maxLives: 3,
    successMessage: "¡Cálculo de edad correcto! Las restas son fundamentales.",
    blocks: [
      { id: "b1", type: "var", label: "anio_actual = 2025", sub: "Año en curso", text: "anio_actual = 2025", bubble: "Año actual" },
      { id: "b2", type: "var", label: "anio_nacimiento = 2010", sub: "Año de nacimiento", text: "anio_nacimiento = 2010", bubble: "Nació en 2010" },
      { id: "b3", type: "var", label: "edad = anio_actual - anio_nacimiento", sub: "Calcular diferencia", text: "edad = 15", bubble: "2025 - 2010" },
      { id: "b4", type: "print", label: 'print("Tu edad es:", edad)', sub: "Mostrar resultado", text: "Tu edad es: 15", bubble: "Tu edad es: 15" },
      { id: "d1", type: "var", label: "edad = anio_nacimiento - anio_actual", sub: "Resta al revés", text: "edad = -15", bubble: "¡Negativo!", distractor: true },
      { id: "d2", type: "print", label: "print(anio_actual)", sub: "Solo muestra el año", text: "2025", bubble: "No es la edad", distractor: true },
    ],
    solution: ["b1", "b2", "b3", "b4"],
  },

  sec2_stg3_lvl3: {
    id: "sec2_stg3_lvl3", sectionId: "sec2", stageId: "sec2-stage3",
    order: 3, nextLevelId: "sec2_stg4_lvl1",
    title: "Área del rectángulo", objective: "Calcula el área de un rectángulo usando base y altura",
    difficulty: "medio", gameType: "parsons", points: 150, maxLives: 3,
    successMessage: "¡Área calculada! Programar matemáticas es genial.",
    blocks: [
      { id: "b1", type: "var", label: "base = 8", sub: "Medida de la base", text: "base = 8", bubble: "Base: 8" },
      { id: "b2", type: "var", label: "altura = 5", sub: "Medida de la altura", text: "altura = 5", bubble: "Altura: 5" },
      { id: "b3", type: "var", label: "area = base * altura", sub: "Fórmula del área", text: "area = 40", bubble: "8 × 5 = 40" },
      { id: "b4", type: "print", label: 'print("Área:", area)', sub: "Mostrar resultado", text: "Área: 40", bubble: "Área: 40" },
      { id: "d1", type: "var", label: "area = base + altura", sub: "Suma en vez de producto", text: "area = 13", bubble: "No es multiplicar", distractor: true },
      { id: "d2", type: "var", label: "area = base / altura", sub: "División en vez de producto", text: "area = 1.6", bubble: "Operación incorrecta", distractor: true },
      { id: "d3", type: "print", label: "print(base)", sub: "Solo muestra la base", text: "8", bubble: "Falta el área", distractor: true },
    ],
    solution: ["b1", "b2", "b3", "b4"],
  },

  // ╔══════════════════════════════════════════════════════════╗
  // ║  SEC 2 · STAGE 4 — Predicción de salida                ║
  // ╚══════════════════════════════════════════════════════════╝

  sec2_stg4_lvl1: {
    id: "sec2_stg4_lvl1", sectionId: "sec2", stageId: "sec2-stage4",
    order: 1, nextLevelId: "sec2_stg4_lvl2",
    title: "¿Qué imprime?", objective: "Ordena las líneas y predice el resultado de la suma de variables",
    difficulty: "fácil", gameType: "parsons", points: 150, maxLives: 3,
    successMessage: "¡Predicción correcta! Puedes rastrear valores como un experto.",
    blocks: [
      { id: "b1", type: "var", label: "x = 10", sub: "Valor inicial de x", text: "x = 10", bubble: "x vale 10" },
      { id: "b2", type: "var", label: "y = 3", sub: "Valor inicial de y", text: "y = 3", bubble: "y vale 3" },
      { id: "b3", type: "var", label: "x = x + y", sub: "Sumar y a x", text: "x = 13", bubble: "10 + 3 = 13" },
      { id: "b4", type: "print", label: "print(x)", sub: "Mostrar resultado", text: "13", bubble: "13" },
      { id: "d1", type: "var", label: "x = x - y", sub: "Resta en vez de suma", text: "x = 7", bubble: "Operación incorrecta", distractor: true },
      { id: "d2", type: "print", label: "print(y)", sub: "Imprime variable equivocada", text: "3", bubble: "No es x", distractor: true },
    ],
    solution: ["b1", "b2", "b3", "b4"],
  },

  sec2_stg4_lvl2: {
    id: "sec2_stg4_lvl2", sectionId: "sec2", stageId: "sec2-stage4",
    order: 2, nextLevelId: "sec2_stg4_lvl3",
    title: "Siguiendo el rastro", objective: "Concatena dos cadenas con un espacio y predice la salida",
    difficulty: "medio", gameType: "parsons", points: 180, maxLives: 3,
    successMessage: "¡Rastreo perfecto! Sabes cómo se unen los textos.",
    blocks: [
      { id: "b1", type: "var", label: 'a = "Hola"', sub: "Primera cadena", text: 'a = "Hola"', bubble: "Cadena a" },
      { id: "b2", type: "var", label: 'b = "Mundo"', sub: "Segunda cadena", text: 'b = "Mundo"', bubble: "Cadena b" },
      { id: "b3", type: "var", label: 'c = a + " " + b', sub: "Concatenar con espacio", text: 'c = "Hola Mundo"', bubble: "Uniendo con espacio" },
      { id: "b4", type: "print", label: "print(c)", sub: "Mostrar resultado", text: "Hola Mundo", bubble: "Hola Mundo" },
      { id: "d1", type: "var", label: "c = a + b", sub: "Sin espacio", text: 'c = "HolaMundo"', bubble: "Falta el espacio", distractor: true },
      { id: "d2", type: "print", label: "print(a)", sub: "Solo imprime a", text: "Hola", bubble: "Falta Mundo", distractor: true },
    ],
    solution: ["b1", "b2", "b3", "b4"],
  },

  sec2_stg4_lvl3: {
    id: "sec2_stg4_lvl3", sectionId: "sec2", stageId: "sec2-stage4",
    order: 3, nextLevelId: "sec2_stg5_lvl1",
    title: "Múltiples cambios", objective: "Rastrea cómo cambia una variable tras varias operaciones",
    difficulty: "difícil", gameType: "parsons", points: 200, maxLives: 3,
    successMessage: "¡Rastreo avanzado! Seguiste cada paso sin perderte.",
    blocks: [
      { id: "b1", type: "var", label: "n = 2", sub: "Valor inicial", text: "n = 2", bubble: "n vale 2" },
      { id: "b2", type: "var", label: "n = n * 5", sub: "Multiplicar por 5", text: "n = 10", bubble: "2 × 5 = 10" },
      { id: "b3", type: "var", label: "n = n + 4", sub: "Sumar 4", text: "n = 14", bubble: "10 + 4 = 14" },
      { id: "b4", type: "var", label: "n = n / 2", sub: "Dividir entre 2", text: "n = 7", bubble: "14 ÷ 2 = 7" },
      { id: "b5", type: "print", label: "print(n)", sub: "Mostrar resultado final", text: "7", bubble: "7" },
      { id: "d1", type: "var", label: "n = n - 4", sub: "Resta en vez de suma", text: "n = 6", bubble: "Operación incorrecta", distractor: true },
      { id: "d2", type: "var", label: "n = n * 2", sub: "Multiplica en vez de dividir", text: "n = 28", bubble: "No es dividir", distractor: true },
      { id: "d3", type: "print", label: "print(n + 1)", sub: "Suma extra al imprimir", text: "8", bubble: "Valor alterado", distractor: true },
    ],
    solution: ["b1", "b2", "b3", "b4", "b5"],
  },

  // ╔══════════════════════════════════════════════════════════╗
  // ║  SEC 2 · STAGE 5 — Retos básicos                       ║
  // ╚══════════════════════════════════════════════════════════╝

  sec2_stg5_lvl1: {
    id: "sec2_stg5_lvl1", sectionId: "sec2", stageId: "sec2-stage5",
    order: 1, nextLevelId: "sec2_stg5_lvl2",
    title: "Convertir temperatura", objective: "Convierte grados Celsius a Fahrenheit usando la fórmula",
    difficulty: "medio", gameType: "parsons", points: 200, maxLives: 3,
    successMessage: "¡Conversión exitosa! Las fórmulas son poderosas.",
    blocks: [
      { id: "b1", type: "var", label: "celsius = 30", sub: "Temperatura en Celsius", text: "celsius = 30", bubble: "30 °C" },
      { id: "b2", type: "var", label: "fahrenheit = celsius * 9 / 5 + 32", sub: "Fórmula de conversión", text: "fahrenheit = 86", bubble: "30×9÷5+32 = 86" },
      { id: "b3", type: "print", label: 'print("Temperatura:", fahrenheit)', sub: "Mostrar resultado", text: "Temperatura: 86", bubble: "86 °F" },
      { id: "d1", type: "var", label: "fahrenheit = celsius + 32", sub: "Fórmula incompleta", text: "fahrenheit = 62", bubble: "Falta el factor", distractor: true },
      { id: "d2", type: "var", label: "fahrenheit = celsius * 5 / 9", sub: "Fórmula invertida", text: "fahrenheit = 16.67", bubble: "Es al revés", distractor: true },
    ],
    solution: ["b1", "b2", "b3"],
  },

  sec2_stg5_lvl2: {
    id: "sec2_stg5_lvl2", sectionId: "sec2", stageId: "sec2-stage5",
    order: 2, nextLevelId: "sec2_stg5_lvl3",
    title: "Datos de un estudiante", objective: "Crea un perfil de estudiante usando los cuatro tipos de datos",
    difficulty: "difícil", gameType: "parsons", points: 250, maxLives: 3,
    successMessage: "¡Perfil completo! Dominas int, float, string y boolean.",
    blocks: [
      { id: "b1", type: "var", label: 'nombre = "Pedro"', sub: "Texto (string)", text: 'nombre = "Pedro"', bubble: "Nombre guardado" },
      { id: "b2", type: "var", label: "edad = 14", sub: "Entero (int)", text: "edad = 14", bubble: "Edad guardada" },
      { id: "b3", type: "var", label: "promedio = 8.5", sub: "Decimal (float)", text: "promedio = 8.5", bubble: "Promedio guardado" },
      { id: "b4", type: "var", label: "aprobado = True", sub: "Booleano (bool)", text: "aprobado = True", bubble: "¡Aprobado!" },
      { id: "b5", type: "print", label: "print(nombre, edad, promedio, aprobado)", sub: "Mostrar todo", text: "Pedro 14 8.5 True", bubble: "Perfil completo" },
      { id: "d1", type: "var", label: 'edad = "14"', sub: "String en vez de int", text: 'edad = "14"', bubble: "Tipo incorrecto", distractor: true },
      { id: "d2", type: "var", label: 'aprobado = "True"', sub: "String en vez de bool", text: 'aprobado = "True"', bubble: "No es booleano", distractor: true },
      { id: "d3", type: "var", label: "promedio = 8", sub: "Int en vez de float", text: "promedio = 8", bubble: "Pierde el decimal", distractor: true },
    ],
    solution: ["b1", "b2", "b3", "b4", "b5"],
  },

  sec2_stg5_lvl3: {
    id: "sec2_stg5_lvl3", sectionId: "sec2", stageId: "sec2-stage5",
    order: 3, nextLevelId: null,
    title: "El cajero automático", objective: "Simula un retiro y un depósito, calculando el saldo final",
    difficulty: "difícil", gameType: "parsons", points: 300, maxLives: 3,
    successMessage: "¡Saldo correcto! Eres un maestro de las variables.",
    blocks: [
      { id: "b1", type: "var", label: "saldo = 1000", sub: "Saldo inicial", text: "saldo = 1000", bubble: "Saldo: $1000" },
      { id: "b2", type: "var", label: "retiro = 250", sub: "Monto a retirar", text: "retiro = 250", bubble: "Retiro: $250" },
      { id: "b3", type: "var", label: "saldo = saldo - retiro", sub: "Descontar retiro", text: "saldo = 750", bubble: "1000 - 250 = 750" },
      { id: "b4", type: "var", label: "deposito = 500", sub: "Monto a depositar", text: "deposito = 500", bubble: "Depósito: $500" },
      { id: "b5", type: "var", label: "saldo = saldo + deposito", sub: "Agregar depósito", text: "saldo = 1250", bubble: "750 + 500 = 1250" },
      { id: "b6", type: "print", label: 'print("Saldo final:", saldo)', sub: "Mostrar saldo", text: "Saldo final: 1250", bubble: "Saldo: $1250" },
      { id: "d1", type: "var", label: "saldo = retiro - saldo", sub: "Resta invertida", text: "saldo = -750", bubble: "¡Negativo!", distractor: true },
      { id: "d2", type: "var", label: "saldo = saldo - deposito", sub: "Resta en vez de suma", text: "saldo = 250", bubble: "¿Restar depósito?", distractor: true },
      { id: "d3", type: "print", label: "print(retiro)", sub: "Muestra el retiro", text: "250", bubble: "No es el saldo", distractor: true },
    ],
    solution: ["b1", "b2", "b3", "b4", "b5", "b6"],
  },

};

