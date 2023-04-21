import { useState } from 'react';
import searchPending from '../functions/searchPending';

function searchModal() {
  const [resultsList, setResultsList] = useState(null);

  function searchPendingWithString(e) {
    e.preventDefault();
    const string = e.target.searchInput.value;
    searchPending(string).then((res) => setResultsList(res));
    e.target.searchInput.value = '';
  }

  return (
    <dialog id="search-modal">
      <div className="min-w-[500px] min-h-[500px] flex flex-col justify-around items-center">
        <form onSubmit={searchPendingWithString} className="min-w-[80%]">
          <input
            id="searchInput"
            type="text"
            placeholder="¿Qué deseas buscar?"
          />
          <button type="submit">Buscar</button>
        </form>
        <div className="min-w-[80%]">
          {resultsList &&
            resultsList.map((res) => (
              <div>
                <h4>{res.description}</h4>
                <h4>{res.priority}</h4>
                <h4>{res.contact}</h4>
              </div>
            ))}
        </div>
      </div>
    </dialog>
  );
}

export default searchModal;
