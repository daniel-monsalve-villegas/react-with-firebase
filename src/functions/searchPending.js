import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebase/credenciales';

export default async function searchPending(string) {
  try {
    const collectionRef = collection(db, 'pendings');
    const queryDescription = query(
      collectionRef,
      where('description', '==', string)
    );
    const queryContact = query(collectionRef, where('contact', '==', string));
    const queryPriority = query(collectionRef, where('priority', '==', string));
    const docsCrypt = await Promise.all([
      getDocs(queryDescription),
      getDocs(queryContact),
      getDocs(queryPriority),
    ]);
    /* const docs = docsCrypt.docs.map((d) => d.data()); */
    const allResults = [];
    docsCrypt.forEach((query) =>
      query.docs.forEach((doc) => allResults.push(doc.data()))
    );
    const setResults = new Set(...allResults);
    return setResults;
  } catch (e) {
    console.error(e);
  }
}
