// src/services/progressService.js
import { db } from "../firebase/firebaseConfig";
import { doc, getDoc, setDoc, getDocs, collection, query, where, serverTimestamp }
  from "firebase/firestore";

/**
 * Guarda o actualiza el progreso de un nivel para un usuario.
 * @param {string} uid - ID del usuario (de Firebase Auth)
 * @param {string} levelId - ID del nivel (ej: "sec1_stg1_lvl1")
 * @param {object} result - { completed, livesLeft, points }
 */
export async function saveProgress(uid, levelId, result) {
  const ref = doc(db, "users", uid, "progress", levelId);
  const existing = await getDoc(ref);
  const prev = existing.exists() ? existing.data() : null;

  const stars = result.livesLeft >= 3 ? 3 : result.livesLeft >= 2 ? 2 : 1;

  await setDoc(ref, {
    completed: result.completed,
    stars: Math.max(stars, prev?.stars ?? 0),        // guardar mejor resultado
    bestScore: Math.max(result.points, prev?.bestScore ?? 0),
    attempts: (prev?.attempts ?? 0) + 1,
    completedAt: result.completed ? serverTimestamp() : (prev?.completedAt ?? null),
    lastAttemptAt: serverTimestamp(),
  });
}

/** Obtiene el progreso de un nivel específico */
export async function getLevelProgress(uid, levelId) {
  const snap = await getDoc(doc(db, "users", uid, "progress", levelId));
  return snap.exists() ? snap.data() : null;
}

/** Obtiene todo el progreso de un usuario (para Dashboard) */
export async function getAllProgress(uid) {
  const snap = await getDocs(collection(db, "users", uid, "progress"));
  const progress = {};
  snap.forEach((d) => { progress[d.id] = d.data(); });
  return progress;
}

/** Cuenta niveles completados en una etapa */
export async function getStageProgress(uid, stageId) {
  const q = query(
    collection(db, "users", uid, "progress"),
    where("completed", "==", true)
  );
  const snap = await getDocs(q);
  // Filtrar client-side por stageId (el levelId contiene el stage)
  const completed = snap.docs.filter((d) => d.id.includes(
    stageId.replace("sec", "sec").replace("-stage", "_stg")
  ));
  return completed.length;
}
