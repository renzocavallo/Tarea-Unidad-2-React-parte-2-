import React from "react"

const ServiciosPage = (props) => {
    return(
        <main className="holderServicios">
        <h2>Servicios</h2>
        <div className="servicio">
          <img src="img/servicios/imgAeropuerto.jpg" alt="Aeropuerto"/>
          <div className="info">
              <h4>Reserva de Vuelos</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eveniet sequi a, nihil, quibusdam, quis dicta veniam cumque quae aut ad modi. 
                Laudantium natus cupiditate et reprehenderit deleniti repellendus.
            </p>
          </div>
      </div>
      <div className="servicio">
          <img src="img/servicios/imgTraslados.jpg" alt="Trafic"/>
          <div className="info">
              <h4>Servicio de Traslados</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eveniet sequi a, nihil, quibusdam, quis dicta veniam cumque quae aut ad modi. 
                Laudantium natus cupiditate et reprehenderit deleniti repellendus.
            </p>
          </div>
      </div>
      <div className="servicio">
          <img src="img/servicios/imgExcursion.jpg" alt="Excursion Glaciar"/>
          <div className="info">
              <h4>Excursiones</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eveniet sequi a, nihil, quibusdam, quis dicta veniam cumque quae aut ad modi. 
                Laudantium natus cupiditate et reprehenderit deleniti repellendus.
            </p>
          </div>
      </div>
      <div className="servicio">
          <img src="img/servicios/imgServicio2.jpg" alt="Museo"/>
          <div className="info">
              <h4>Visita Lugares Historicos</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eveniet sequi a, nihil, quibusdam, quis dicta veniam cumque quae aut ad modi. 
                Laudantium natus cupiditate et reprehenderit deleniti repellendus.
            </p>
          </div>
      </div>
      </main>
  
    )
}

export default ServiciosPage