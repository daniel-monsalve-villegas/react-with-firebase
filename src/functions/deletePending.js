import { collection, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../firebase/credenciales';

export default async function deletePending(id) {
  try {
    const collectionRef = collection(db, 'pendings');
    const docuRef = doc(collectionRef, id);
    const confirm = await deleteDoc(docuRef);
    return confirm;
  } catch (e) {
    console.error(e);
  }
}
