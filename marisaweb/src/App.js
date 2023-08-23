import { useState } from 'react';
import './App.css';
import './componentes/Header/Header'
import Header from './componentes/Header/Header';
import MiBlog from './componentes/MiBlog/MiBlog'
import Formulario from './componentes/Blog/Formulario';
// import TipoBlog from './componentes/TipoBlog/TipoBlog';
//import TiposNotas from './componentes/tiposNotas/tiposNotas';

function App() {
  const [mostrarFormulario,actualizarMostrar] = useState(false)
  //Ternario --> ? seMuestra:noseMuestra
  const cambiarMostrar = () => {
actualizarMostrar(!mostrarFormulario)
  }
  return (
     <div>
     <Header/>

{ mostrarFormulario && <Formulario/>}
{/* {<TipoBlog cambiarMostrar={cambiarMostrar}/>} */}
<MiBlog cambiarMostrar={cambiarMostrar} />
   {/* <TiposNotas/> */}
        </div>
  );

}
export default App;
