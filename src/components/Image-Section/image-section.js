import './image-section.css';
import { imageArticle } from '../Image-Article/image-article.js';
import { createModal } from '../Image-Zoom/image-zoom.js';

//Crea los elementos necesarios para las imágenes
//usando el componente "imageArticle" y después
//lo une todo en un "section".
export const imageSection = (images) => {
   var allImages = '';

   if (images['errors']) {
      return images;
   }

   if (images) {
      for (const img of images) {
         var url = img.urls.regular;
         var alt = img.description ? img.description : 'no description';
         allImages += imageArticle(url, alt);
      }
   }
   return `
         <section class="images">
            ${allImages}
         </section>
         ${createModal()}
   `;
};
