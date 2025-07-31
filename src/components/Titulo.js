export default function Titulo({ texto, nivel }) {
  const Tag = `h${nivel}`;
  return <Tag>{texto}</Tag>;
}