import './search-bar.css';

//Crea la barra de búsqueda.
export const searchBar = () => {
   return `
   <div class="search-bar">
      <img class="search-logo" src="assets/search.png" alt="search" />
      <input type="text" name="buscar" id="buscar" placeholder="Buscar" />
   </div>
   `;
};
