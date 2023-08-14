import { useState } from 'react';
import './App.css';
import './componentes/Header/Header'
import Header from './componentes/Header/Header';
import Formulario from './componentes/Blog/Formulario';
import NotasBlog from './componentes/NotasBlog/NotasBlog';
//import listaOpciones from './componentes/listaOpciones/listaOpcionesistaOpciones';
//import ListaOpciones from './componentes/ListaOpciones/ListaOpciones';
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
     <NotasBlog cambiarMostrar={cambiarMostrar}/>
        </div>
  );
}
export default App;
