import { pinterestBar } from './src/components/Pinterest-Bar/pinterest-bar';
import { userBar } from './src/components/User-Bar/user-bar';
import { searchBar } from './src/components/Search-Bar/search-bar';
import { imageSection } from './src/components/Image-Section/image-section';
import { getImages, getRandomImages, setClickEvent } from './imageController';
import { generateRecommendations } from './src/components/Recommendations/recommendations.js';
import { createModal, setModalClose } from './src/components/Image-Zoom/image-zoom.js';
import './style.css';

//Al generar el HTML con un "await", lo meto en una función asíncrona para
//que no de problemas en navegadores sin configuración de "top-level" await.
async function startApp() {
   const app = document.querySelector('#app');
   app.innerHTML = `
   <header>
      <div class="flex">
      ${pinterestBar()}
      ${searchBar()}
      ${userBar()}
      </div>
   </header>
   <main>
   ${imageSection(await getRandomImages())}
   </main>
`;

   //Resto de instruciones para ciertas funcionalidades //
   //evento de click en las imagenes
   setClickEvent();

   //evento de cerrar el modal al clickar la "x"
   setModalClose();
   //Listener del buscador para hacer la query cuando se presione enter.
   const buscador = document.querySelector('#buscar');

   buscador.addEventListener('keypress', async (event) => {
      if (event.key === 'Enter') {
         const query = event.target.value;
         //Si hay query, carga los resultados.
         if (query) {
            const main = document.querySelector('main');
            var result = imageSection(await getImages(query));

            ///Ya que necesito generar las recomendaciones con listeners,
            //me parece más fácil el uso "appendChild" en vez de innerText = `${}`.
            //Por esta razón, "generateRecommendations()" devuelve elementos, y no strings.
            if (result['errors']) {
               const section = generateRecommendations();
               main.innerHTML = '';
               main.appendChild(section);
            } else {
               main.innerHTML = result;
               setClickEvent();
               setModalClose();
            }
         } else {
            //Si no hay query, genera aleatorios. Viene bien para cuando el usuario borra
            //el input y vuelve a pulsar "enter" sin recargar la página.
            var main = document.querySelector('main');
            main.innerHTML = imageSection(await getRandomImages());
            setClickEvent();
            setModalClose();
         }
      }
   });
}

startApp();
