import { Link, useSearchParams } from 'react-router-dom'
import { contactos } from '../contactos';
import { useContext } from 'react';
import { ContactContext } from '../contect/Contact_contexto';
import "./sidebar.css";
export function Sidebar({ className }) {
  const [searchParams, setSearchParams] = useSearchParams()
  const { contacts } = useContext(ContactContext);
  if (className) {
    console.log("¡SOY EL SIDEBAR Y TENGO CLASE!", className);
  } else {
    console.log("¡SOY EL SIDEBAR Y NO TENGO NADA!");
  }
  return (

<div className={`contact_list_container ${className || ''}`}>
  <div style={{color: 'white', background: 'red'}}>
  La clase es: {className ? className : "NINGUNA"}
</div>
  <div className='svg_container'>
   
<div >
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-circle-fill" viewBox="0 0 16 16">
  <circle cx="8" cy="8" r="8"/>
</svg>
</div>
<div className='svg_apart'>
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-left-fill" viewBox="0 0 16 16">
  <path d="M2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
</svg>

<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-justify" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5"/>
</svg>
</div>
 </div>
      {contacts.map((contacto) => (
       
        <Link 
          key={contacto.id} 
          to={`/chat/${contacto.id}`} 
         
        > 
        <div className="contact_card">
         <img src={contacto.imagen} alt={contacto.nombre} />
         
            <div className='contact_card_details'>
             <h3>{contacto.nombre}</h3>
          
            
         
            
           
            {contacto.mensajes && contacto.mensajes.length > 0 && (
              <p>Último mensaje: {contacto.mensajes[contacto.mensajes.length - 1].texto}</p>
            )}
          </div  >
           <p className='ultima_conexion'>{contacto.ultima_conexion}</p>
            </div>
            
        </Link>
      ))}
    </div>
  )
}
  
