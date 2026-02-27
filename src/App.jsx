import { useState } from 'react'
import { Routes, Route, useSearchParams } from 'react-router-dom';
import { Sidebar } from './assets/Screens/Sidebar';
import { Contact_screen_details } from './assets/Contact_screen_details';
import ContactProvider from './assets/contect/Contact_contexto';
import './estilos.css'
import { Contacts_perfil } from './assets/Screens/contacts_perfil';
function App() {
  return (
   <ContactProvider>
      <div className="app-container">
        {/* Eliminamos el div 'screen_details' de aquí porque ya lo controlan las rutas internamente */}
        <Routes>
         {/* Agrega la palabra 'index' aquí. Esto le dice a React: 
      "Solo muestra esto si la ruta es EXACTAMENTE /" */}
  <Route 
    index 
    element={
      <div className="layout-principal">
        <Sidebar /> 
        <div className="desktop-only-placeholder">
          <div className="logo-container">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/512px-WhatsApp.svg.png" alt="Logo de WhatsApp" className="whatsapp-logo" />
        </div>
 <p>Seleccione un contacto para comenzar</p>
  </div>
      </div>
    } 
  />

  <Route 
    path="/chat/:id" 
    element={
      <div className="vista-chat">
        <Sidebar className="hide-on-mobile" /> 
        <Contact_screen_details />
      </div>
    } 
  />
  <Route 
    path="/perfil/:id" 
    element={
        <Contacts_perfil />
    } 
  />
        </Routes>
      </div>
    </ContactProvider>
  );
}
export default App
