
import { db } from "../firebase/firebaseConfig";
import { doc, getDoc, collection, query, where, getDocs, orderBy }
from "firebase/firestore";



  export async function getLevelById(id) {
   const snap = await getDoc(doc(db, "levels", id));
   return snap.exists() ? { id: snap.id, ...snap.data() } : null;
  }

  export async function getLevelsByStage(stageId) {

   const q = query(
     collection(db, "levels"),
     where("stageId", "==", stageId),
     orderBy("order")
   );
   const snap = await getDocs(q);
   return snap.docs.map((d) => ({ id: d.id, ...d.data() }));
  }
