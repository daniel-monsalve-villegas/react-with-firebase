import { db } from '../firebase/credenciales';
import { collection, doc, setDoc } from 'firebase/firestore';

export default async function editPending(id, data) {
  try {
    const collectionRef = collection(db, 'pendings');
    const docuRef = doc(collectionRef, id);
    const result = await setDoc(docuRef, data, { merge: true });
    return result;
  } catch (e) {
    console.error(e);
  }
}
