// import React from "react";
import NavBar from "../../components/navbar/Navbar";
import "./Voluntariado.css";

import CardVoluntariado from "../../components/card-voluntariado/CardVoluntariado";
import CampoFiltrar from "../../components/barra-voltar-filtrar/CampoFiltrar";
import api from "../../api/api";

import Navbar from "../../components/navbar/Navbar";
import NavbarLogout from "../../components/navbar/NavbarLogout";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Voluntariado() {
  const [isTipoConta, setIsTipoConta] = useState(0);

  const conta = localStorage.getItem("tipoConta");
  function buscarTipoConta() {
    if (conta == "DOADOR") {
      setIsTipoConta(1);
    } else if (conta == "ORGANIZACAO") {
      setIsTipoConta(2);
    }
  }

  useEffect(() => {
    buscarTipoConta();
  }, []);

  var vagas = [];

  function buscarVagas() {
    api
      .get("/contribuicoes/servicos")
      .then((res) => {
        console.log(res);
        vagas.push(res.data);
      })
      .catch((erro) => {
        console.log(erro);
      });
  }

  return (
    <>
      {isTipoConta == 0 ? <NavbarLogout /> : <Navbar />}
      <CampoFiltrar />
      <div className="container-nova-missao w-100 d-flex jc-center mt-32">
        {/* <Link className="link-sem-decoracao" to={`/criar-missao/${}`}> */}
          <div className="nova-missao d-flex jc-center ai-center br-10 head-xsmall fd-column">
            <span>Adicionar missão</span>
            <span>+</span>
          </div>
        {/* </Link> */}
      </div>
      <main className="main">
        <CardVoluntariado />
      </main>
    </>
  );
}

export default Voluntariado;
