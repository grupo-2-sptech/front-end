// import React from "react";
import NavBar from "../../components/navbar/Navbar"
import "./Voluntariado.css"

import CardVoluntariado from "../../components/card-voluntariado/CardVoluntariado"
import CampoFiltrar from "../../components/barra-voltar-filtrar/CampoFiltrar"
function Voluntariado(){
    return(
        <>
            <NavBar/>
            <CampoFiltrar />
            <main className="main">
                <CardVoluntariado/>
            </main>
        </>
    )
}

export default Voluntariado