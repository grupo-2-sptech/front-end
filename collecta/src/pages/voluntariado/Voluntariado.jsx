// import React from "react";
import NavBar from "../../components/navbar/Navbar"
import "./Voluntariado.css"

import CardVoluntariado from "../../components/card-voluntariado/CardVoluntariado"
import CampoFiltrar from "../../components/barra-voltar-filtrar/CampoFiltrar"
import api from "../../api/api"
function Voluntariado(){

    var vagas = [];

    function buscarVagas(){
        api.get("/contribuicoes/servicos").then((res) => {
            console.log(res);
            vagas.push(res.data)
        }).catch((erro) => {
            console.log(erro);
        })
    }
    window.onload(buscarVagas)

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