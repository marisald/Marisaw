import {useState} from "react"
import ("./NotasBlog.css")
const NotasBlog =(props)=>{
    //hooks
    //useState
    //useState()
    console.log(props)
    //const[nombre,actualizarNombre]=useState("harland")
    //const[mostrar, actualizarMostrar]=useState(true)
    //const manejarClick=()=>{
     //   console.log("Mostrar/Ocultar",!mostrar)
     //   actualizarMostrar(!mostrar)
    //}
    return <section className="agregarnotas">
        <h3>Notas Blog</h3>
    <img src="./img/agregar.png" alt="Agregar" onClick={props.cambiarMostrar}></img></section>
}
export default NotasBlog