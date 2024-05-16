import './logo.css';

//Crea un logo con un efecto hover, pasándole la url de una imagen y un alt.
export const logo = (url, alt) => {
   return `
   <a class="logo-container">
            <img class="logo" src="${url}" alt="${alt}" />
         </a>`;
};
