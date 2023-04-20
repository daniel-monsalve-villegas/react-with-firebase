import { useEffect, useState } from 'react';
import editPending from '../functions/editPending';

function EditPendingModal({ pending, refreshAllPendings }) {
  const [pendingEdit, setPendingEdit] = useState({ ...pending });

  useEffect(() => {
    setPendingEdit(pending);
  }, [pending]);

  function submitHandler(e) {
    e.preventDefault();
    editPending(pendingEdit.id, pendingEdit).then((confirm) => {
      const modal = document.getElementById('modal-edit-pending');
      refreshAllPendings();
      modal.close();
    });
  }

  return (
    <dialog id="modal-edit-pending">
      <form onSubmit={submitHandler}>
        <label className="flex flex-col mx-10">
          <select
            id="priority"
            value={pendingEdit?.priority}
            onChange={(e) =>
              setPendingEdit({ ...pendingEdit, priority: e.target.value })
            }
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </label>

        <label className="flex flex-col">
          Descripción
          <input
            value={pendingEdit?.description}
            onChange={(e) =>
              setPendingEdit({ ...pendingEdit, description: e.target.value })
            }
            type="text"
            id="description"
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
          />
        </label>

        <label className="flex flex-col">
          Contacto
          <input
            value={pendingEdit?.contact}
            onChange={(e) =>
              setPendingEdit({ ...pendingEdit, contact: e.target.value })
            }
            type="email"
            id="contact"
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
          />
        </label>

        <button
          type="submit"
          className="bg-red-300 hover:bg-red-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Editar
        </button>
      </form>
    </dialog>
  );
}

export default EditPendingModal;
