import { useState } from 'react'
import { Routes, Route, useSearchParams } from 'react-router-dom';
import { Sidebar } from './assets/Screens/Sidebar';
import { Contact_screen_details } from './assets/Contact_screen_details';
import ContactProvider from './assets/contect/Contact_contexto';
import './estilos.css'
function App() {
  return (
    <ContactProvider>
      <div className="app-container">

       


        <div className='screen_details'>

          <Routes>
<Route 
    path="/" 
    element={
      <div className="layout-principal">
        
        <div className="placeholder-text-container desktop-only">
          <div>
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
              alt="Logo de WhatsApp"
              
            />
          </div>
          <p className="placeholder-text">Selecciona un contacto para comenzar</p>
          <p>Empieza una aventura</p>
          <Sidebar /> 
        </div>
      </div>
    } 
  />

  {/* 2. RUTA DEL CHAT (/chat/:id): Cuando entras a un chat específico */}
  <Route 
    path="/chat/:id" 
    element={
      <div className="layout-principal">
  
        <Sidebar className="hide-on-mobile" /> 
        <Contact_screen_details />
      </div>
    } 
  />

  
</Routes>
         
        </div>
      </div>
    </ContactProvider>
  );
}
export default App
