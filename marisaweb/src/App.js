import { useState } from 'react';
import './App.css';
import './componentes/Header/Header'
import Header from './componentes/Header/Header';
import Formulario from './componentes/Blog/Formulario';
import TipoBlog from './componentes/TipoBlog/TipoBlog';
function App() {
  const [mostrarFormulario,actualizarMostrar] = useState(true)
  //Ternario --> ? seMuestra:noseMuestra
  const cambiarMostrar = () => {
actualizarMostrar(!mostrarFormulario)
  }
  return (
     <div>
     <Header/>

{ mostrarFormulario && <Formulario/>}
   {/* <TipoBlog cambiarMostrar={cambiarMostrar}/> */}
        </div>
  );
}
export default App;
