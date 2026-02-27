import { Link, useParams } from 'react-router-dom';
import { contactos } from '../contactos'
import "./Contacts_perfil.css";
export function Contacts_perfil({contacto_seleccionado}) {
     const { id } = useParams();

  
  // Usamos parseInt porque el ID de la URL es un texto y en tu lista es un número
  const contacto = contactos.find(c => c.id === Number(id));


  if (!contacto) {
    return <div>Contacto no encontrado</div>;
  }

  return (
   <div className="perfil-container">
    <header className="perfil-header">
      
      <span>Perfil</span>
    </header>
    
    <div className="perfil-hero">
      <img src={contacto.imagen} alt={contacto.nombre} className="perfil-avatar" />
      <h2 className="perfil-name">{contacto.nombre}</h2>
    </div>

    <div className="perfil-details-card">
      <p className="perfil-label">Número de teléfono</p>
      <p className="perfil-value">{contacto.celular}</p>
    </div>

    <div className="perfil-details-card">
      <p className="perfil-label">Info.</p>
      <p className="perfil-value">{contacto.descripcion}</p>
    </div>
  </div>
  );
}