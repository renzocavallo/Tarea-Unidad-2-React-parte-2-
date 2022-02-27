import ReactDOM from "react-dom"
import Header from "./component/layout/Header"
import Nav from "./component/layout/Nav"
import Footer from "./component/layout/Footer"
import "./styles/component/layout/Header.css"
import "./styles/component/layout/Nav.css"
import "./styles/component/layout/Footer.css"
import HomePage from "./component/page/HomePage"
import NosotrosPage from "./component/page/NosotrosPage"
import ServiciosPage from "./component/page/ServiciosPage"
import GaleriaPage from "./component/page/GaleriaPage"
import NovedadesPage from "./component/page/NovedadesPage"
import ContactoPage from "./component/page/ContactoPage"
import "./styles/component/page/HomePage.css"
import "./styles/component/page/NosotrosPage.css"
import "./styles/component/page/ServiciosPage.css"
import "./styles/component/page/GaleriaPage.css"
import "./styles/component/page/NovedadesPage.css"
import "./styles/component/page/ContactoPage.css"
import "./index.css"

ReactDOM.render(
  <Header/>,
  document.getElementById("Header")
)

ReactDOM.render(
  <Nav/>,
  document.getElementById("Nav")
)

var botonHome = document.getElementById("btonHome")
var botonNosotros = document.getElementById("btonNosotros")
var botonServicios = document.getElementById("btonServicios")
var botonGaleria = document.getElementById("btonGaleria")
var botonNovedades = document.getElementById("btonNovedades")
var botonContacto = document.getElementById("btonContacto")

botonHome.addEventListener("click",function(){
  botonHome.style.backgroundColor = "#253439"
  botonNosotros.style.backgroundColor = "#7c898b"
  botonServicios.style.backgroundColor = "#7c898b"
  botonGaleria.style.backgroundColor = "#7c898b"
  botonNovedades.style.backgroundColor = "#7c898b"
  botonContacto.style.backgroundColor = "#7c898b"

  ReactDOM.render(
    <HomePage/>,
    document.getElementById("ContenedorMain")
  )
})

botonNosotros.addEventListener("click",function(){
  botonNosotros.style.backgroundColor = "#253439"
  botonHome.style.backgroundColor = "#7c898b"
  botonServicios.style.backgroundColor = "#7c898b"
  botonGaleria.style.backgroundColor = "#7c898b"
  botonNovedades.style.backgroundColor = "#7c898b"
  botonContacto.style.backgroundColor = "#7c898b"

  ReactDOM.render(
    <NosotrosPage/>,
    document.getElementById("ContenedorMain")
  )
})

botonServicios.addEventListener("click",function(){
  botonServicios.style.backgroundColor = "#253439"
  botonHome.style.backgroundColor = "#7c898b"
  botonNosotros.style.backgroundColor = "#7c898b"
  botonGaleria.style.backgroundColor = "#7c898b"
  botonNovedades.style.backgroundColor = "#7c898b"
  botonContacto.style.backgroundColor = "#7c898b"

  ReactDOM.render(
    <ServiciosPage/>,
    document.getElementById("ContenedorMain")
  )
})

botonGaleria.addEventListener("click",function(){
  botonGaleria.style.backgroundColor = "#253439"
  botonHome.style.backgroundColor = "#7c898b"
  botonNosotros.style.backgroundColor = "#7c898b"
  botonServicios.style.backgroundColor = "#7c898b"
  botonNovedades.style.backgroundColor = "#7c898b"
  botonContacto.style.backgroundColor = "#7c898b"

  ReactDOM.render(
    <GaleriaPage/>,
    document.getElementById("ContenedorMain")
  )
})

botonNovedades.addEventListener("click",function (){
  botonNovedades.style.backgroundColor = "#253439"
  botonHome.style.backgroundColor = "#7c898b"
  botonNosotros.style.backgroundColor = "#7c898b"
  botonServicios.style.backgroundColor = "#7c898b"
  botonGaleria.style.backgroundColor = "#7c898b"
  botonContacto.style.backgroundColor = "#7c898b"

  ReactDOM.render(
    <NovedadesPage/>,
    document.getElementById("ContenedorMain")
  )
})

botonContacto.addEventListener("click",function(){
  botonContacto.style.backgroundColor = "#253439"
  botonHome.style.backgroundColor = "#7c898b"
  botonNosotros.style.backgroundColor = "#7c898b"
  botonServicios.style.backgroundColor = "#7c898b"
  botonGaleria.style.backgroundColor = "#7c898b"
  botonNovedades.style.backgroundColor = "#7c898b"

  ReactDOM.render(
    <ContactoPage/>,
    document.getElementById("ContenedorMain")
  )
})

ReactDOM.render(
  <Footer/>,
  document.getElementById("Footer")
)