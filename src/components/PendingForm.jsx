import { createPending } from '../functions/createPending';

function PendingForm({ refreshAllPendings }) {
  async function submitHandler(e) {
    e.preventDefault();
    const priority = e.target.priority.value;
    const description = e.target.description.value;
    const contact = e.target.contact.value;

    const data = { priority, description, contact };
    await createPending(data);
    e.target.priority.value =
      e.target.description.value =
      e.target.contact.value =
        '';
    refreshAllPendings();
  }

  return (
    <div className="flex flex-row min-w-full">
      <form
        onSubmit={submitHandler}
        className="flex flex-row justify-around my-5 min-w-[90%]"
      >
        <label className="flex flex-col mx-10">
          <select
            id="priority"
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
            type="text"
            id="description"
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
          />
        </label>

        <label className="flex flex-col">
          Contacto
          <input
            type="email"
            id="contact"
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
          />
        </label>

        <button className="bg-red-300 hover:bg-red-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Agregar
        </button>
      </form>

      <button
        className="bg-slate-700 text-white rounded py-2 px-4 hover:bg-slate-900 focus:outline-none"
        onClick={() => {
          const modalSearch = document.querySelector('#search-modal');
          modalSearch.showModal();
        }}
      >
        Buscar
      </button>
    </div>
  );
}

export default PendingForm;
