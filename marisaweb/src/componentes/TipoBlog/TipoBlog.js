import "./TipoBlog.css"

const TipoBlog=(props) =>{
    // map => arreglo.map (tiposNotas,index)=>{ return <option></option>})
    const tiposNotas = [
        "Ruta",
        "Mtb",
        "Viajes"
    ]
const manejarCambio = (e) => { 
console.log("cambio", e.target.value);props.actualizartiposNotas(e.target.value)}

return <div className="tipos-Notas">
<label> Tipos Notas</label>
<select className="Notas" value={props.valor} onChange={manejarCambio}>  
        <option value="" disabled defaultValue="" hidden>
        Seleccionar Tipo Nota</option>
        {tiposNotas.map((tiposNotas,index)=><option key={index} value={tiposNotas}>{tiposNotas}</option>)}
    </select>
</div>
}

export default TipoBlog
