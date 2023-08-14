import {useState} from "react";
import "./Formulario.css";
import CampoTexto from "../CampoTexto";
import listaOpciones from "./ListaOpciones/listaOpciones";
import Boton from "../Boton/Boton";

const Formulario=()=>{
    const[titulo,actualizartitulo] = useState("")
    const[subtitulo,actualizarSubtitulo] = useState("")
    const[contenido,actualizarContenido] = useState("")
    const[foto,actualizarFoto] = useState("")
    const[listaopciones,actualizarlistaOpciones]=useState("")
    const manejarEnvio=(e)=>{
        e.preventDefault()
        console.log("Manejar Envio")
    /*let datosaEnviar={
        titulo:titulo,
        subtitulo:subtitulo,
        foto:foto,
        contenido:contenido,
        fecha:fecha,
    } decir lo mismo que abajo*/
    let datosaEnviar={
        titulo,
        subtitulo,
        foto,
        contenido,
        listaopciones,
    }
console.log(datosaEnviar)}

    return < section className="formu">
                <form onSubmit={manejarEnvio}>
                <h1>Agregar Notas para el Blog</h1>
                <CampoTexto titulo="Titulo" 
                placeholder="Ingresar Titulo"
                 required
                 valor={titulo}
                 actualizarValor={actualizartitulo}
                 />
                <CampoTexto titulo="Subtitulo" placeholder="Ingresar Subtitulo" required
                valor={subtitulo}
                actualizarValor={ actualizarSubtitulo }
                />
                <CampoTexto titulo="Foto"
                placeholder="Foto"
                required
                valor={foto}
                actualizarValor={actualizarFoto}
                />
                <CampoTexto titulo="contenido"
                placeholder="Ingresar Contenido"
                required
                valor={contenido}
                actualizarValor={actualizarContenido}
                />
                <listaOpciones/>
                 
                <Boton texto="Crear"/>    
        </form>
    </section>
}
export default Formulario