import "./listaOpciones.css"
const listaOpciones=() =>{
    //Metodo map => arreglo.map (equipo,index)=>{
       // return <option></option>
//})
const tiposNotas=[
    "MTB",
    "Rutera",
    "Viajes",
    "Running",
    "Carreras",
    "Lista Opciones",
]
const manejarCambio=(e)=>{
console.log("cambio".target.value)
}
return <div className="lista-opciones">
<label> Notas</label>
<select // value={} onChange={//manejarCambio}>  
>
        <option // value="" disabled defaultValue="" hidden>
        > Seleccionar Tipo Nota</option>
        {tiposNotas.map((tiposNotas,index)=><option key={index}> {tiposNotas}</option>
        )}
    </select>
</div>
}
export default listaOpciones