// src/scripts/seedLevels.js
import { db } from "../firebase/firebaseConfig";
import { doc, setDoc } from "firebase/firestore";
import { levelsDB } from "../data/levelsDB";
export async function seedLevels() {
  const entries = Object.entries(levelsDB);
  console.log(`Subiendo ${entries.length} niveles a Firestore...`);
  for (const [id, data] of entries) {
    await setDoc(doc(db, "levels", id), data);
    console.log(`  ✓ ${id}`);
  }
  console.log("¡Seed completado!");
}