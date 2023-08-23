import "./MiBlog.css"

const MiBlog = (props) => {
    //Estado - hooks
    //useState
    //const [nombreVariable,funcionActualiza] = useState(valorInicial)
    console.log(props)
    // const [mostrar, actualizarMostrar] = useState(true)
    // const manejarClick = () => {
    //     console.log("Mostrar/Ocultar elemento", !mostrar)
    //     actualizarMostrar(!mostrar)
    // }

    return <section className="miblog">
        <h4 className="title">Mi Blog</h4>
        <img className="botonadd" src="/img/agregar.png" alt="add" onClick={props.cambiarMostrar} />
    </section>
}
export default MiBlog
