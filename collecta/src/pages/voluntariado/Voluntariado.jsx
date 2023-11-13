// import React from "react";
import NavBar from "../../components/navbar/Navbar"
import "./Voluntariado.css"
import BtnFiltrar from "../../components/btn-filtrar/BtnFiltrar"
import BtnVoltar from "../../assets/icon/i-voltar.svg"
import CardVoluntariado from "../../components/card-voluntariado/CardVoluntariado"
function Voluntariado(){
    return(
        <>
            <NavBar/>
            <section className="spaceBtns">
                <div className="container">
                    <img src={BtnVoltar} alt="Circulo redondo e na cor azul com seta para esquerda ao centro" />
                    <BtnFiltrar/>
                </div>
            </section>
            <main className="main">
                <CardVoluntariado/>

            </main>
        </>
    )
}

export default Voluntariado