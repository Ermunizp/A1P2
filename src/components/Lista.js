export default function Lista({ elementos }) {
  return (
    <ul>
      {elementos.map((el, index) => (
        <li key={index}>{el}</li>
      ))}
    </ul>
  );
}