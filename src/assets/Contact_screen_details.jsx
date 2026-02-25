import { useParams, useSearchParams } from 'react-router-dom';
import { contactos } from './contactos';
import "./Contact_screen_details.css";
import { Link } from 'react-router-dom';
import { useState, useContext } from 'react'; 
import { ContactContext } from './contect/Contact_contexto.jsx';
import { NewMessage } from '../Newmessage.jsx';

export function Contact_screen_details() {

  const { id } = useParams();

  
  const { contacts } = useContext(ContactContext);


  const contactoSeleccionado = contacts.find(c => c.id === parseInt(id)); 

  if (!contactoSeleccionado) {
    return <div className="seleccionador_contactos">Selecciona un contacto</div>;
  }

  return (
    <div className="details_container">
      <div className='data_container'>
        <img src={contactoSeleccionado.imagen} alt={contactoSeleccionado.nombre} />
        <div>
          <h2>{contactoSeleccionado.nombre}</h2>
          <p>Última conexión: {contactoSeleccionado.ultima_conexion}</p>
        <Link  className="volver_button" to="/Sidebar">Volver a la lista</Link>
        </div>
        <div className='svg_part'>
         
        </div>
      </div>

      <div className="messages_container">
        {contactoSeleccionado.mensajes.map((mensaje) => (
          <div key={mensaje.id} className={mensaje.send_by_me ? 'message_by_me' : 'messages_by_else'}>
            <p>{mensaje.texto}</p>
          </div>
        ))}
      </div>
      
    
      <NewMessage />
    </div>
  );
}