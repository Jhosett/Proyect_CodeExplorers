
import { db } from "../firebase/firebaseConfig";
import { doc, getDoc, collection, query, where, getDocs }
from "firebase/firestore";



  export async function getLevelById(id) {
   const snap = await getDoc(doc(db, "levels", id));
   return snap.exists() ? { id: snap.id, ...snap.data() } : null;
  }

  export async function getLevelsByStage(stageId) {
   const q = query(
     collection(db, "levels"),
     where("stageId", "==", stageId)
   );
   const snap = await getDocs(q);
   const docs = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
   return docs.sort((a, b) => (a.order || 0) - (b.order || 0));
  }

  export async function getLevelsBySection(sectionId) {
    const q = query(
      collection(db, "levels"),
      where("sectionId", "==", sectionId)
    );
    const snap = await getDocs(q);
    const docs = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
    return docs.sort((a, b) => (a.order || 0) - (b.order || 0));
  }
