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
    

    return(
        <>
            <NavBar/>
            <CampoFiltrar />
            <div className="container-nova-missao w-100 d-flex jc-center mt-32">
                <div className="nova-missao d-flex jc-center ai-center br-10 head-xsmall fd-column">
                    <span>Adicionar missão</span>
                    <span>+</span>
                </div>
            </div>
            <main className="main">
                <CardVoluntariado/>
            </main>
        </>
    )
}

export default Voluntariado