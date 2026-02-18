import { useSearchParams } from 'react-router-dom'
import {contactos} from './contactos'

export function Contact_card() {
  const [searchParams, setSearchParams] = useSearchParams()
  
  return (
    <div className='contact_card'>
     {contactos.map((contacto) =>(
          <div key={contacto.id}  onClick={() => setSearchParams({ id: contacto.id })}>
              <h3>{contacto.nombre}</h3>
               <img src={contacto.imagen} alt={contacto.nombre}/>
             
               <p>{contacto.mensaje}</p>
                <p>{contacto.ultima_conexion}</p>
                <p>{contacto.mensajes[contacto.mensajes.length - 1].id}</p>
          </div>
     ))}


    </div>
  )
}
