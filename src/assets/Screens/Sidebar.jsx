import { Link, useSearchParams } from 'react-router-dom'
import { contactos } from '../contactos';
import { useContext } from 'react';
import { ContactContext } from '../contect/Contact_contexto';

export function Sidebar() {
  const [searchParams, setSearchParams] = useSearchParams()
  const { contacts } = useContext(ContactContext);
  return (
<div className='contact_list_container'>
      {contacts.map((contacto) => (
       
        <Link 
          key={contacto.id} 
          to={`/chat/${contacto.id}`} 
         
        >
          <div className="contact_card">
            <h3>{contacto.nombre}</h3>
            <img src={contacto.imagen} alt={contacto.nombre} />
            
            <p>{contacto.ultima_conexion}</p>
            
           
            {contacto.mensajes && contacto.mensajes.length > 0 && (
              <p>Último ID: {contacto.mensajes[contacto.mensajes.length - 1].id}</p>
            )}
          </div>
        </Link>
      ))}
    </div>
  )
}
  
