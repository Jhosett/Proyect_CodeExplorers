export const BLOCKS = [

  // ── Correct blocks ──────────────────────────────────────
  {
    id: "b1",
    type: "print",
    icon: "📢",
    label: "imprimir()",
    sub: 'print("Hola Mundo")',
    text: "Hola Mundo",
    bubble: "Hola Mundo"
  },
  {
    id: "b2",
    type: "var",
    icon: "📦",
    label: 'nombre = "Ana"',
    sub: 'nombre = "Ana"',
    text: 'nombre = "Ana"',
    bubble: "Variable guardada"
  },
  {
    id: "b3",
    type: "print",
    icon: "📢",
    label: "imprimir(nombre)",
    sub: "print(nombre)",
    text: "Ana",
    bubble: "Ana"
  },

  // ── Distractor blocks ───────────────────────────────────
  {
    id: "d1",
    type: "print",
    icon: "📢",
    label: 'imprimir("Ana")',
    sub: 'print("Ana")',
    text: "Ana",
    bubble: "Ana",
    distractor: true
  },
  {
    id: "d2",
    type: "var",
    icon: "📦",
    label: 'nombre = "Hola"',
    sub: 'nombre = "Hola"',
    text: 'nombre = "Hola"',
    bubble: "Variable guardada",
    distractor: true
  },
  {
    id: "d3",
    type: "print",
    icon: "📢",
    label: "imprimir(mundo)",
    sub: "print(mundo)",
    text: "mundo",
    bubble: "mundo",
    distractor: true
  },
  {
    id: "d4",
    type: "var",
    icon: "📦",
    label: 'saludo = "Hola Mundo"',
    sub: 'saludo = "Hola Mundo"',
    text: 'saludo = "Hola Mundo"',
    bubble: "Variable guardada",
    distractor: true
  },
  {
    id: "d5",
    type: "return",
    icon: "↩️",
    label: "retornar(nombre)",
    sub: "return nombre",
    text: "return nombre",
    bubble: "Retornando",
    distractor: true
  },

];

export const SOLUTION = ["b1", "b2", "b3"];