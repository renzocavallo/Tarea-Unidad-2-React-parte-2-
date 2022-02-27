import React from "react"

const GaleriaPage = (props) => {
    return(
        <main>
        <h2>Galeria</h2>
        <div className="galeria">
            <ul>
            <li className="foto">
                <img src="img/galeria/img01.jpg" alt="img01"/>
            </li>
            <li className="foto">
                <img src="img/galeria/img02.jpg" alt="img02"/>
            </li>
            <li className="foto">
                <img src="img/galeria/img03.jpg" alt="img03"/>
            </li>
            <li className="foto">
                <img src="img/galeria/img04.jpg" alt="img04"/>
            </li>
            <li className="foto">
                <img src="img/galeria/img05.jpg" alt="img05"/>
            </li>
            <li className="foto">
                <img src="img/galeria/img06.jpg" alt="img06"/>
            </li>
            <li className="foto">
                <img src="img/galeria/img07.jpg" alt="img07"/>
            </li>
            </ul>
        </div>
    </main>

    )
}

export default GaleriaPage