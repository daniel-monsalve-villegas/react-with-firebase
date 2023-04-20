import { addDoc, collection } from 'firebase/firestore';
import { firestore } from '../firebase/credenciales';

export async function createPending(data) {
  try {
    const collectionRef = collection(firestore, 'pendings');
    const pedingsId = await addDoc(collectionRef, data);
    return pedingsId;
  } catch (e) {
    console.error(e);
  }
}
