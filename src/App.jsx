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
        <div className='sidebar'>
          <Sidebar />
        </div>
        
        <div className='screen_details'>
       
          <Routes>
           
            <Route path="/Contact_screen_details" element={<p className="placeholder-text">Selecciona un contacto para comenzar</p>} />
          
            <Route path="/chat/:id" element={<Contact_screen_details />} />
            
        
            <Route path="*" element={<p className="placeholder-text">Ruta no válida</p>} />
          </Routes>
        </div>
      </div>
    </ContactProvider>
  );
}
export default App
