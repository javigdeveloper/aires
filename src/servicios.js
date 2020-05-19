import React from "react";

function Servicios() {
  const servUno = "Reparación";
  const servDos = "Mantenimiento";
  const servTres = "Instalación";
  const servCuatro = "Otros Servicios";

  return (
    <div className="services">
      <h2>Nuestros Servicios:</h2>
      <ul className="list">
        <li>
          <a href="#servUno">{servUno}</a>
        </li>
        <li>
          <a href="#servDos">{servDos}</a>
        </li>
        <li>
          <a href="#servTres">{servTres}</a>
        </li>
        <li>
          <a href="#servCuatro">{servCuatro}</a>
        </li>
      </ul>
      <div>
        <h3 id="servUno">{servUno}</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quia
          dolores similique iure non iusto ex tempora eveniet obcaecati mollitia
          modi quae magni enim incidunt, dolorum ratione voluptates nostrum
          illo!
        </p>
      </div>
      <div>
        <h3 id="servDos">{servDos}</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,
          odio. Inventore neque natus amet dicta delectus laborum impedit minima
          enim optio quibusdam, possimus officia eveniet adipisci reprehenderit
          facilis voluptatem illo!
        </p>
      </div>
      <div>
        <h3 id="servTres">{servTres}</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
          consequatur error sequi atque dolore nemo recusandae quam natus
          exercitationem doloremque hic fuga ipsa quo possimus quas
          reprehenderit fugit repellendus illum.
        </p>
      </div>
      <div>
        <h3 id="servCuatro">{servCuatro}</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          accusantium quis beatae architecto enim ad at provident voluptate
          assumenda a, quo dolor ab, veritatis doloremque ipsa reprehenderit!
          Amet, aspernatur in?
        </p>
      </div>
    </div>
  );
}

export default Servicios;
