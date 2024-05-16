import './image-article.css';

//Crea y devuelve un articulo con la imagen y el alt pasados por parámetro.
export const imageArticle = (imgUrl, alt) => {
   return `
      <article>
         <img class="image" src="${imgUrl}" alt="${alt}" />
      </article>
   `;
};
