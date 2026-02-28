import { useParams, useSearchParams } from 'react-router-dom';
import { contactos } from './contactos';
import "./Contact_screen_details.css";
import { Link } from 'react-router-dom';
import { useState, useContext } from 'react';
import { ContactContext } from './contect/Contact_contexto.jsx';
import { NewMessage } from '../Newmessage.jsx';
import { Contacts_perfil } from './Screens/Contacts_perfil.jsx';

export function Contact_screen_details() {

  const { id } = useParams();

const [perfilAbierto, setPerfilAbierto] = useState(false);
  const { contacts } = useContext(ContactContext);


  const contactoSeleccionado = contacts.find(c => c.id === parseInt(id));

  if (!contactoSeleccionado) {
    return <div className="seleccionador_contactos">Selecciona un contacto</div>;
  }

  return (
 <div className="details_container chat_window">
    
    
    <div className="chat_main_wrapper">
      
      <div className='data_container'>
        <Link to="/" className="boton-volver">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left-short" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5" />
          </svg>
        </Link>
        
        <img 
          src={contactoSeleccionado.imagen} 
          onClick={() => setPerfilAbierto(true)}
          style={{cursor: 'pointer'}}
        />
        
        <div>
          <h2>{contactoSeleccionado.nombre}</h2>
          <p>Última conexión: {contactoSeleccionado.ultima_conexion}</p>
        </div>
      </div>

      <div className="messages_container">
        {contactoSeleccionado.mensajes.map((mensaje) => (
          <div key={mensaje.id} className={mensaje.send_by_me ? 'message_by_me' : 'messages_by_else'}>
            <p>{mensaje.texto}</p>
          </div>
        ))}
      </div>

      <NewMessage contacto={contactoSeleccionado} />
    </div>

  
    {perfilAbierto && (
      <div className="profile-panel">
        <header className="profile-header-bar">
          <button onClick={() => setPerfilAbierto(false)}>✕</button>
          <span>Información</span>
        </header>
        <Contacts_perfil contacto_seleccionado={contactoSeleccionado} />
      </div>
    )}

  </div>
  );
}