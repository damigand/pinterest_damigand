import './pinterest-bar.css';
import { logo } from '../Logo/logo.js';

//Creo el ítem del menú.
export const pinterestItem = (text, selected = false) => {
   return `
   <button class="header-button ${selected ? 'selected' : ''}">
   ${text}
   </button>
   `;
};

//Creo el div con todos los items necesarios.
export const pinterestBar = () => {
   return `
   <div class="pinterest-bar">
      ${logo('assets/logo.png', 'logo pinterest')}
      ${pinterestItem('Inicio', true)}
      ${pinterestItem('Explorar')}
      ${pinterestItem('Crear')}
   </div>`;
};
