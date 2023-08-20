import { useState } from "react"
import "./CampoTexto.css"

const CampoTexto=(props)=>{
    //const[valor,actualizar]=useState("")
        const manejarCambio=(e)=>{
        // en vez de esta uso la de abajo actualizarValor(e,target.value)
        props.actualizarValor(e.target.value)
    }
    return <div className="campo-texto"> 
        <label>
            {props.titulo}</label>
            <input 
            placeholder={props.placeholder} 
            required={props.required}
            value={props.valor}
            onChange={manejarCambio}/>
    </div>

}
export default CampoTexto