import React, { useState } from 'react';

import Imagen from './components/Imagen';
import miImagen from './Logo Espe.jpg';
import Titulo from './components/Titulo';
import Parrafo from './components/Parrafo';
import Enlace from './components/Enlace';
import Lista from './components/Lista';
import Tabla from './components/Tabla';
import Formulario from './components/Formulario';
import Boton from './components/Boton';
import InputText from './components/InputText';
import InputPassword from './components/InputPassword';
import InputEmail from './components/InputEmail';
import InputTel from './components/InputTel';
import InputURL from './components/InputURL';
import InputSearch from './components/InputSearch';

function App() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    url: '',
    password: '',
    busqueda: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos enviados:', formData);
    alert('Formulario enviado con éxito');
  };

  return (
    <div className="container py-4">
      <Titulo texto="Mi Proyecto React con Componentes HTML" nivel={1} />
      <Parrafo texto="Este es un ejemplo de cómo representar elementos HTML como componentes reutilizables en React." />
      
      <Titulo texto="Imagen de muestra" nivel={2} />
      <Imagen src={miImagen} alt="Logo" width="120" height="80" />
      <Titulo texto="Lista de elementos" nivel={2} />
      <Lista elementos={['React', 'HTML', 'CSS', 'JavaScript']} />
      <Titulo texto="Tabla de ejemplo" nivel={2} />
      <Tabla
        cabecera={['Nombre', 'Edad', 'Carrera']}
        datos={[
          ['Ana', '22', 'Ingeniería'],
          ['Luis', '24', 'Informática'],
        ]}
      />

      <Titulo texto="Enlace" nivel={2} />
      <Enlace href="https://react.dev" texto="Visita la documentación oficial de React" />

      <Titulo texto="Formulario" nivel={2} />
      <Formulario onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <InputText
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            placeholder="Tu nombre"
            required
            minLength={2}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <InputEmail
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="correo@example.com"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Teléfono</label>
          <InputTel
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
            placeholder="+593 9xxx xxx"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Sitio web</label>
          <InputURL
            name="url"
            value={formData.url}
            onChange={handleChange}
            placeholder="https://ejemplo.com"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Contraseña</label>
          <InputPassword
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="********"
            required
            minLength={6}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Buscar</label>
          <InputSearch
            name="busqueda"
            value={formData.busqueda}
            onChange={handleChange}
            placeholder="Buscar..."
          />
        </div>
        <Boton texto="Enviar formulario" />
      </Formulario>
    </div>
  );
}

export default App;
