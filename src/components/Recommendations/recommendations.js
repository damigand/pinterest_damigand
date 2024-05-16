import './recommendations.css';

//Palabras aleatorias
const randomWords = ['Frutas', 'Coches', 'Naturaleza', 'Comida', 'Postres', 'Cumpleaños', 'Invierno', 'Carnaval', 'Vacaciones', 'Arte'];

//evento que simula el pulsar la tecla "enter"
const enterEvent = new KeyboardEvent('keypress', {
   key: 'Enter',
   code: 'Enter',
   which: 13,
   keyCode: 13,
});

//Genera tres palabras aleatorias y crea sus elementos HTML para devolverlos
//todos juntos en un "section".
export function generateRecommendations() {
   var recommendations = [];
   for (var a = 0; a < 3; a++) {
      var word = randomWords[Math.floor(Math.random() * randomWords.length)];
      if (!recommendations.includes(word)) {
         recommendations.push(word);
      } else {
         a--;
      }
   }

   var section = document.createElement('section');
   section.classList.add('not-found');

   var firstTitle = document.createElement('h3');
   firstTitle.innerText = '¡Vaya! Parece que no hay resultados con tu búsqueda.';
   var secondTitle = document.createElement('h3');
   secondTitle.innerText = '¿Qué tal si pruebas con alguna de estas?';

   var div = document.createElement('div');
   div.classList.add('recommendations');

   for (const word of recommendations) {
      var element = generateArticle(word);
      div.appendChild(element);
   }

   section.appendChild(firstTitle);
   section.appendChild(secondTitle);
   section.appendChild(div);

   return section;
}

//Genera cada elemento "article" con su palabra y su "listener"
//para buscarlo al dar click sobre el elemento.
function generateArticle(word) {
   var article = document.createElement('article');
   article.classList.add('recommendation');

   var a = document.createElement('a');
   a.innerText = word;

   a.addEventListener('click', (event) => {
      const busqueda = document.querySelector('#buscar');
      busqueda.value = event.target.innerText;
      busqueda.dispatchEvent(enterEvent);
   });

   article.appendChild(a);
   return article;
}
