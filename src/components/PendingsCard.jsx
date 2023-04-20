import deletePending from '../functions/deletePending';

function PendingsCard({ pending, setSelectedPending, refreshAllPendings }) {
  function mostrarModal() {
    setSelectedPending(pending);
    const modal = document.getElementById('modal-edit-pending');
    modal.showModal();
  }

  return (
    <div className="flex flex-row justify-around border-2 border-slate-500 p-10 my-5 shadow-md">
      <div>
        <h3>Priority</h3>
        <p>{pending.priority}</p>
      </div>
      <div>
        <h3>Description</h3>
        <p>{pending.description}</p>
      </div>
      <div>
        <h3>Contact</h3>
        <p>{pending.contact}</p>
      </div>
      <button
        onClick={mostrarModal}
        className="bg-slate-300 text-white py-2 px-4 rounded hover:bg-slate-500 focus:outline-none"
      >
        Editar
      </button>
      <button
        className="bg-red-300 text-white rounded px-4 py-2 hover:bg-red-500 focus:outline-none"
        onClick={() => {
          deletePending(pending.id).then((confirm) => refreshAllPendings());
        }}
      >
        Eliminar
      </button>
    </div>
  );
}

export default PendingsCard;
