import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import PendingForm from '../components/PendingForm';
import PendingsCard from '../components/PendingsCard';
import getAllPendings from '../functions/readPendings.js';
import EditPendingModal from '../components/EditPendingModal';

function Home({ user }) {
  const [allPendings, setAllPendings] = useState(null);
  const [selectedPending, setSelectedPending] = useState(null);

  function refreshAllPendings() {
    getAllPendings()
      .then((pendings) => {
        setAllPendings(pendings);
      })
      .catch((e) => {
        alert(e);
      });
  }

  useEffect(() => {
    refreshAllPendings();
  }, []);

  return (
    <div className="min-w-screen min-h-screen flex flex-col">
      <Navbar user={user} />
      <EditPendingModal
        pending={selectedPending}
        refreshAllPendings={refreshAllPendings}
      />
      <PendingForm refreshAllPendings={refreshAllPendings} />
      {allPendings &&
        allPendings.map((pending) => (
          <PendingsCard
            pending={pending}
            setSelectedPending={setSelectedPending}
            refreshAllPendings={refreshAllPendings}
          />
        ))}
    </div>
  );
}

export default Home;
