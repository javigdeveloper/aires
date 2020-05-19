import React from "react";
import "./App.css";
import Servicios from "./servicios.js";
import Solicitud from "./solicitud.js";
import Header from "./Header"
import Footer from "./Footer"
function App() {
  fetch("http://localhost:3000/appointments.json")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((e) => console.log(e));
  return (
    <>
    <Header/>
    <section className="jumbotron">
        <div className="container">
          <h1 className="jumbotron-heading">Bienvenidos a ReparAire</h1>
          <p className="lead text-muted">Agende su cita de mantenimiento, reparación o instalación en segundos...</p>
          <p>
          </p>
        </div>
      </section>
    <div className="App">
      
      <div className="back">
        <div className="content">
          <Servicios />
          <Solicitud />
        </div>
        <div className="overlay"></div>
      </div>
    </div>
    
    </>
  );
}

export default App;
