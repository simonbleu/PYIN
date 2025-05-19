function StatsPanel(props) {
  return (
    <div className="border border-gray-300 rounded p-4 max-w-md">
      <h2 className="text-xl font-bold mb-2">Estadísticas</h2>
      <p>Productos totales: {props.total}</p>
      <p>Precio máximo: {props.max !== null ? `$${props.max.toFixed(2)}` : "N/A"}</p>
      <p>Producto más caro: {props.maxName || "N/A"}</p>
      <p>Precio mínimo: {props.min !== null ? `$${props.min.toFixed(2)}` : "N/A"}</p>
      <p>Producto más barato: {props.minName || "N/A"}</p>
      <p>Cant. títulos &gt; 20 caracteres: {props.longTitles}</p>
      <p>Precio total: ${props.totalPrice.toFixed(2)}</p>
      <p>Promedio descuento: {Math.round(props.avgDiscount)}%</p>
      <p>Precio promedio: ${props.avgPrice}</p>
      <p>{`Cant. títulos > 20 caracteres:`} {props.longTitles}</p>
      <p>Producto con más vocales: {props.mostVowelsName}</p>
    </div>
  );
}

export default StatsPanel;