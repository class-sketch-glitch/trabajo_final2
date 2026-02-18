import { createContext, useState } from "react";
import { contactos as datosIniciales } from '../contactos';

// 1. Creamos el contexto
export const ContactContext = createContext(
     {
          contacts: [],
          nombre_favorito: 'pepe',
     }
);

const ContactProvider = ({ children }) => {
    // 2. Definimos el estado correctamente en la raíz del componente
    const [contacts, setContacts] = useState(datosIniciales);
    // 3. Si necesitas una función para cargar datos, defínela aparte
    // o usa un useEffect para inicializarlos.
    const provider_values = { 
        contacts, 
        setContacts 
    };

    return (
        <ContactContext.Provider value={provider_values}>
            {children}
        </ContactContext.Provider>
    );
};

export default ContactProvider;

