import React, { useState } from "react";

const Componente1 = () => {
  //let nombre = 'Dereck Justin'
  let correo = "derjus@gmail.com";

  // eslint-disable-next-line no-unused-vars
  const [nombre, setNombre] = useState("Sohany");

  let conocimientos = [
    "Administración",
    "Organización",
    "Proyectos",
    "Auditorias",
  ];

  const cambiarNombre = (nuevoNombre) => {
    // eslint-disable-next-line no-const-assign
    setNombre = nuevoNombre;
  };

  return (
    <div>
      <h1>Mi primer Componente</h1>
      <p>Este es el texto de mi primer Componente1</p>
      <p>
        Mi nombre es:{" "}
        <strong className={nombre.length >= 7 ? "verde" : "rojo"}>
          {nombre}
        </strong>
      </p>
      <p>Mi correo es: {correo}</p>
      <input
        type="text"
        onChange={(e) => cambiarNombre(e.target.value)}
        placeholder="Cambiar Nombre"></input>
      <button onClick={(e) => cambiarNombre("Sohany")}></button>
      <h2>Conocimientos</h2>
      <u>
        {
        conocimientos.map((conocimiento, indice) => {
          return <li key={indice}>{conocimiento}</li>;
        })}
      </u>
    </div>
  );
};

export default Componente1;
