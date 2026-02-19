import { useSearchParams } from 'react-router-dom';
import { contactos } from './contactos';
import "./Contact_screen_details.css";

import { useState, useContext } from 'react'; // 1. Agregado useContext
import { ContactContext } from './contect/Contact_contexto.jsx'; // 2. Importar tu contexto

export function Contact_screen_details() {
 const [searchParams] = useSearchParams();
  const id = searchParams.get('id');
  const [mensaje, setMensaje] = useState("");
  
  const { contacts, setContacts } = useContext(ContactContext);


  const contactoSeleccionado = contacts.find(c => c.id === parseInt(id));

  const enviarAlContexto = () => {
   
    if (!contactoSeleccionado || mensaje.trim() === "") return;

    setContacts(prevContacts => {
      return prevContacts.map(c => {
        if (c.id === contactoSeleccionado.id) {
          return {
            ...c,
            mensajes: [...c.mensajes, { id: Date.now(), texto: mensaje, send_by_me: true }]
          };
        }
        return c;
      });
    });
    setMensaje("");
  };
  if (!contactoSeleccionado) {
    return <div className="seleccionador_contactos">Selecciona un contacto</div>;
  }

  return (
    <div className="details_container" >
      <h2>{contactoSeleccionado.nombre}</h2>
      <img src={contactoSeleccionado.imagen} alt={contactoSeleccionado.nombre} style={{ maxWidth: '100%' }} />
      
      <div className="messages_container" >
        {contactoSeleccionado.mensajes.map((m) => (
          <div key={m.id} className={m.send_by_me ? 'message_by_me' : 'messages_by_else'}>
            <p>{m.texto}</p>
          </div>
        ))}
      </div>

    <div className='text_area'>
      <textarea 
        value={mensaje} 
        onChange={(e) => setMensaje(e.target.value)}
        className='text_area_input'
      />
      <button onClick={enviarAlContexto}>Enviar</button>
    </div>
      
    </div>
  );
}
