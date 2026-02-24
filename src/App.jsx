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

        <Sidebar />


        <div className='screen_details'>

          <Routes>

            <Route path="/Contact_screen_details" element={<p className="placeholder-text">Selecciona un contacto para comenzar</p>} />

            <Route path="/chat/:id" element={<Contact_screen_details />} />


            <Route path="*" element={<div className="placeholder-text-container">
             <div>
            <img 
  src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
  alt="Logo de WhatsApp"
  style={{ width: '50px', height: '50px' }} 
/>
             </div>
             
              <p>   Empiza una aventura</p>

            </div>
            } />
          </Routes>
        </div>
      </div>
    </ContactProvider>
  );
}
export default App
