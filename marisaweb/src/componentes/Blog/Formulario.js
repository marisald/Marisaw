import {useState} from "react"
import "./Formulario.css"
import CampoTexto from "../CampoTexto"
import TipoBlog from "../TipoBlog/TipoBlog"
import Boton from "../Boton/Boton"

const Formulario=()=>{
    const[titulo,actualizarTitulo] = useState("")
    const[subtitulo,actualizarSubtitulo] = useState("")
    const[contenido,actualizarContenido] = useState("")
    const[foto,actualizarFoto] = useState("")
    const[tiposnotas,actualizartiposNotas]= useState("")
    const manejarEnvio = (e) => {
        e.preventDefault()
        console.log("Manejar Envio")
    let datosAEnviar={
        titulo,
        subtitulo,
        foto,
        contenido,
        tiposnotas
    }   
console.log (datosAEnviar)}

    return <section className="formu">
                <form onSubmit={manejarEnvio}>
                <h2>Agregar Notas para el Blog</h2>
                <CampoTexto titulo="Titulo"
                placeholder="Ingresar Titulo"
                 required
                 valor={titulo}
                 actualizarValor={actualizarTitulo}
                 />
                <CampoTexto titulo="Subtitulo" placeholder="Ingresar Subtitulo" required
                valor={subtitulo}
                actualizarValor={ actualizarSubtitulo }
                />
                <CampoTexto titulo="Foto"
                placeholder="Ingresa enlace Foto"
                required
                valor={foto}
                actualizarValor={actualizarFoto}
                />
                <CampoTexto titulo="Contenido"
                placeholder="Ingresar Contenido"
                required
                valor={contenido}
                actualizarValor={actualizarContenido}
                />
                <TipoBlog valor={tiposnotas} actualizartiposNotas={actualizartiposNotas}/>
    <Boton texto="Crear"/>    
        </form>
    </section>
}
export default Formulario