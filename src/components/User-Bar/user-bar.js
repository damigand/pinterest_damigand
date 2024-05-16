import './user-bar.css';
import { logo } from '../Logo/logo.js';

//Crea la barra de usuario al lado del buscador.
export const userBar = () => {
   return `
   <div class="user-bar">
      ${logo('assets/bell.png', 'Notificaciones')}
      ${logo('assets/message.png', 'Mensajes')}
      ${logo('assets/letter-d.png', 'Perfil')}
   </div>
   `;
};
