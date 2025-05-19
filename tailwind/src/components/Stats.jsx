function Stats(props){
    return(
        <div>
            <h2>Estadisticas</h2>
            <p>Productos totales: {props.total} productos</p>
            <p>Precio maximo: {props.max}</p>
            <p>Precio minimo: {props.min}</p>
        </div>);
}

export default Stats;