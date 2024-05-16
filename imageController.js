import { insertImage } from './src/components/Image-Zoom/image-zoom.js';

const imagesPerQuery = 20;

//Función que recoge las imágenes de Unsplash mediante una query por parámetro en el input de buscar.
export async function getImages(q) {
   if (q) {
      const url = `https://api.unsplash.com/photos/random?count=${imagesPerQuery}&query=${q}&client_id=jYoqX63PFRXMjk48F6B1DUHboWo1WwcUt07tcImMcLE`;
      const data = await fetch(url);
      const json = await data.json();
      return json;
   }
}

//Función que recoge imágenes de Unsplash mediante la llamada "random" junto con el parámetro "count".
export async function getRandomImages() {
   const url = `https://api.unsplash.com/photos/random?count=${imagesPerQuery}&client_id=jYoqX63PFRXMjk48F6B1DUHboWo1WwcUt07tcImMcLE`;
   const data = await fetch(url);
   const json = await data.json();
   return json;
}

//Función que majena los clicks en las imágenes.
export async function setClickEvent() {
   var images = document.querySelectorAll('.image');
   for (const img of images) {
      img.addEventListener('click', () => {
         const src = img.src;
         insertImage(src);
      });
   }
}
