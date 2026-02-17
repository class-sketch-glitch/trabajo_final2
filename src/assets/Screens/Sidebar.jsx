import { useContext } from 'react';
import {Contact_card} from '../Contact_card.jsx';
import { ContactContext } from '../contect/Contact_contexto.jsx';
export function Sidebar(){
     const context = useContext( ContactContext)
     return (
          
         <div>
               <div><Contact_card /></div>
               
          </div>
     )
}         