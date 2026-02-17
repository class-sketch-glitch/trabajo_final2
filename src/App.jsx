import { useState } from 'react'
import { Routes, Route, useSearchParams } from 'react-router-dom';
import { Sidebar } from './assets/Screens/Sidebar';
import { Contact_screen_details } from './assets/Contact_screen_details';
import ContactProvider from './assets/contect/Contact_contexto';
import './estilos.css'
function App() {
  const [searchParams] = useSearchParams()
  const contactoId = searchParams.get('id')

  return (
    <ContactProvider>
      <div className="app-container" >
        <div className='sidebar'>
          <Sidebar />
        </div>
        <div className='screen_details' >

          {contactoId ? <Contact_screen_details id={contactoId} /> : <p>Selecciona un contacto</p>}
        </div>
      </div>
    </ContactProvider>
  )
}

export default App
