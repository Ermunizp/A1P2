export default function Formulario({ children, onSubmit }) {
  return <form onSubmit={onSubmit}>{children}</form>;
}
