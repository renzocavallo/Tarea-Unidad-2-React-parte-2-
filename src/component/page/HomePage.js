import React from "react"

const HomePage = (props) => {
    return(
        <main className="holderHome">
        <div className="homeimg">
            <img src="img/imgHome.jpg"  alt="PeritoMoreno"/>
        </div>
        <div className="columnas">
            <div className="bienvenidos left">
                <h2>Bienvenidos</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                   Ullam a minus voluptatem saepe repellat? Nisi iste a saepe, 
                   magni fugiat tempore ratione eaque, enim sequi, totam modi? Nisi, deleniti debitis!
                </p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Impedit porro earum sunt corrupti, 
                    tenetur asperiores adipisci distinctio dicta consectetur libero accusantium saepe
                    veniam expedita fugiat iusto.
                    Obcaecati excepturi harum debitis?
                </p>
            </div>
            <div className="testimonios right">
                <h2>Testimonio</h2>
                <div class="testimonio">
                    <span className="cita">Simplemente Excelente</span>
                    <span className="autor">Maximiliano Antuña MaxAntunia@gmail.com</span>
                </div>
            </div>
        </div>
    </main>

    )
}

export default HomePage