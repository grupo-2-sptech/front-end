// import React from "react";
import NavBar from "../../components/navbar/Navbar"
import "./Voluntariado.css"

import CardVoluntariado from "../../components/card-voluntariado/CardVoluntariado"
import CampoFiltrar from "../../components/barra-voltar-filtrar/CampoFiltrar"
import api from "../../api/api"
import { useParams } from 'react-router-dom';
function Voluntariado(){

    var vagas = [];
    const urlParams = new URLSearchParams(window.location.search);
    const campanhaId = urlParams.get('id');
    const { id } = useParams();


    function buscarVagas(){
        api.get(`/eventos/campanha/${campanhaContinua.id}`).then((res) => {
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
            <main className="main">
                <CardVoluntariado/>
            </main>
        </>
    )
}

export default Voluntariado