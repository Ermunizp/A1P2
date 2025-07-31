export default function Tabla({ cabecera, datos }) {
  return (
    <table className="table">
      <thead>
        <tr>
          {cabecera.map((col, index) => (
            <th key={index}>{col}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {datos.map((fila, i) => (
          <tr key={i}>
            {fila.map((dato, j) => (
              <td key={j}>{dato}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}