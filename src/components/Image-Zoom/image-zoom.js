import './image-zoom.css';

export function createModal() {
   return `
      <div id="modal">
         <div class="modal-content">
         <img src="" class="modal-image" />
            <span class="close">&times;</span>
         </div>
      </div>
   `; //&times; es la "x" de multiplicación, que queda muy chula
}

export function insertImage(src) {
   var image = document.querySelector('.modal-image');
   image.src = src;

   var modal = document.querySelector('#modal');
   modal.style.display = 'block';
}

//Funcion ejecutada solo una vez para que se cierre el modal al hacer click
//sobre la "x" o fuera de la imagen.
export function setModalClose() {
   const modal = document.querySelector('#modal');
   var close = document.querySelector('#modal .close');
   close.addEventListener('click', () => (modal.style.display = 'none'));

   window.onclick = function (event) {
      const content = modal.querySelector('.modal-content');
      if (event.target == content || event.target == modal) {
         modal.style.display = 'none';
      }
   };
}
