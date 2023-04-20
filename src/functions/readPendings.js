import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/credenciales';

async function getAllPendings() {
  try {
    const collectionRef = collection(db, 'pendings');
    const docsCrypts = await getDocs(collectionRef);
    const docs = docsCrypts.docs.map((d) => {
      return {
        id: d.id,
        ...d.data(),
      };
    });
    return docs;
  } catch (e) {
    console.error(e);
  }
}

export default getAllPendings;
