// import React from "react";
import NavBar from "../../components/navbar/Navbar";
import "./Voluntariado.css";

import CardVoluntariado from "../../components/card-voluntariado/CardVoluntariado";
import CampoFiltrar from "../../components/barra-voltar-filtrar/CampoFiltrar";
import api from "../../api/api";

import Navbar from "../../components/navbar/Navbar";
import NavbarLogout from "../../components/navbar/NavbarLogout";
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

function Voluntariado() {
  const [isTipoConta, setIsTipoConta] = useState(0);
  var token = localStorage.getItem("token")
  const conta = localStorage.getItem("tipoConta");
  function buscarTipoConta() {
    if (conta == "DOADOR") {
      setIsTipoConta(1);
    } else if (conta == "ORGANIZACAO") {
      setIsTipoConta(2);
    }
  }
  const [vagas, setVagas] = useState([]);
  useEffect(() => {
    buscarVagas()
    buscarTipoConta();
   
  }, []);
  

  const { id } = useParams();
  function buscarVagas() {
    api
      .get(`eventos/campanha/${id}`, {
        headers : {
          Authorization : `Bearer ${token}`
        }
      })
      .then((res) => {
        console.log(res);
        setVagas(res.data);
      })
      .catch((erro) => {
        console.log(erro);
      });
  }

  console.log("mostrando aqui")
  console.log(vagas)
  function formatarData(dataString) {
    const data = new Date(dataString);
  
    const options = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    };
  
    return new Intl.DateTimeFormat('pt-BR', options).format(data);
  }

  var [contador, setContador] = useState(0) ;
  

  function aumentar(){
    if(contador < vagas.length -1){

      setContador(contador + 1)
    }
    console.log(contador)
  }

  function diminuir(){
    if(contador > 0){
      setContador(contador - 1)
    }
  }

  return (
    <>
      {isTipoConta == 0 ? <NavbarLogout /> : <Navbar />}
      <CampoFiltrar />
      <main className="main">
        
        {vagas.length == 0 ? <p>Não há vaga de missão para esta campanha</p> : 
        <CardVoluntariado
        descricao={vagas[contador].descricao}
        qtdVaga={vagas[contador].qtdVaga}
        titulo={vagas[contador].nome}
        img={vagas[contador].urlImagem}
        local={vagas[contador].local}
        data={formatarData(vagas[contador].dataHora)}
        proximo={aumentar}
        voltar={diminuir}
      />
        }
      </main>
    </>
  );
}

export default Voluntariado;
