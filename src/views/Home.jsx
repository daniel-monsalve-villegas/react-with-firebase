import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import PendingForm from '../components/PendingForm';
import PendingsCard from '../components/PendingsCard';
import logout from '../functions/logout';
import getAllPendings from '../functions/readPendings.js';

function Home({ user }) {
  const [allPendings, setAllPendings] = useState(null);

  useEffect(() => {
    getAllPendings()
      .then((pendings) => {
        setAllPendings(pendings);
      })
      .catch((e) => {
        alert(e);
      });
  }, []);

  return (
    <div className="min-w-screen min-h-screen flex flex-col">
      <Navbar user={user} />
      <PendingForm />
      {allPendings &&
        allPendings.map((pending) => <PendingsCard pendings={pending} />)}
    </div>
  );
}

export default Home;
