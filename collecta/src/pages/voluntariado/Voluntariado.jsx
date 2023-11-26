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
            <CardVoluntariado
                nome="Nome da Vaga"
                descricao="Descrição da Vaga"
                estado="São Paulo"
                diaMesAno="01/12/2023"
                horas="10:00"
            />
            </main>
        </>
    )
}

export default Voluntariado