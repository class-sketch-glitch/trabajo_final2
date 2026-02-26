import React, { useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ContactContext } from './assets/contect/Contact_contexto';
import "./Newmessage.css";




export function NewMessage() {
  const { contacts, setContacts } = useContext(ContactContext);
  const { id } = useParams();
  const [mensaje, setMensaje] = useState("");

  const contactoSeleccionado = contacts.find(c => c.id === parseInt(id));

 
  function enviarAlContexto() {
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
  }

  
  if (!contactoSeleccionado) {
    return <div className="seleccionador_contactos">Selecciona un contacto</div>;
  }


  return (
    <div className='text_area'>
      <textarea
        value={mensaje}
        onChange={(e) => setMensaje(e.target.value)}
        className='text_area_input'
        placeholder="Escribe un mensaje..."
      />
      <button onClick={enviarAlContexto}>Enviar</button>
    </div>
  );
}