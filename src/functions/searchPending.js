import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebase/credenciales';

export default async function searchPending() {
  try {
    const collectionRef = collection(db, 'pendings');
    const queryDescription = query(
      collectionRef,
      where('description', '==', string)
    );
    const docsCrypt = await getDocs(queryDescription);
    const docs = docsCrypt.docs.map((d) => d.data());
    return docs;
  } catch (e) {}
}
