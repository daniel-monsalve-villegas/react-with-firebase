import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebase/credenciales';

export async function createPending(data) {
  try {
    const collectionRef = collection(db, 'pendings');
    const pedingsId = await addDoc(collectionRef, data);
    return pedingsId;
  } catch (e) {
    console.error(e);
  }
}
