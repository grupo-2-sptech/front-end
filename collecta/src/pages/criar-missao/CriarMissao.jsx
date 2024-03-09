import upload from "../../assets/icon/i-upload.svg";

import Navbar from "../../components/navbar/Navbar";
import NavbarLogout from "../../components/navbar/NavbarLogout";

import "./CriarMissao.css";
import "../../components/card/card.css";
import api from "../../api/api";
import { useNavigate, useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

function CriarMissao() {
  const MySwal = withReactContent(Swal)
  const [isTipoConta, setIsTipoConta] = useState(0);
  
  const conta = localStorage.getItem('tipoConta'); 
  function buscarTipoConta() {
    if (conta == 'DOADOR') {
      setIsTipoConta(1);
    } else if (conta == 'ORGANIZACAO') {
      setIsTipoConta(2);
    }
  }

  useEffect(() => {
    buscarTipoConta();
  }, []); 

  const { id } = useParams();

  const navigate = useNavigate();
  const navigateToPage = (path) =>{
      navigate(path)
  }

  function cadastrarMissao(e){
    e.preventDefault();

    var missao = {
      nome: e.target.titulo.value,
      qtdVaga: e.target.qtdVaga.value,
      urlImagem: e.target.urlImg.value,
      local: e.target.cidade.value + " - " + e.target.estado.value,
      descricao: e.target.descricao.value,
      dataHora: e.target.data.value + "T" + e.target.hora.value,
      idCampanha: id
    }

    console.log(missao)
    var token = localStorage.getItem("token")

    api.post("/eventos", missao, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => {
      console.log(res)
      navigate(-1)
    }).catch((erro) => {
      console.log(erro)
      MySwal.fire({
        title: <p>Erro ao cadastrar missão</p>,
        icon: 'error'
      })
    })

  }

  return (
    <>
      {isTipoConta == 0 ? <NavbarLogout /> : <Navbar />}
      <div className="meu-container mmb-60">
        <div className="container-pai">
          <div className="container-campanha">
            <form onSubmit={cadastrarMissao} className="w-770 d-flex fd-column">
              <div className="titulo text-align-center d-flex fd-column">
                <span className="head-medium">Crie uma missão</span>
                <span>
                  As missões é um meio de voluntários contribuirem com o seu projeto de uma forma pontual através de algum serviço
                </span>
              </div>
              <div className="mmb-32">
                <div className="head-xsmall mmb-8">Titulo da vaga</div>
                <input
                  type="text"
                  className="w-100 br-10 h-65 border-outline p-16"
                  name="titulo"
                  required="true"
                />
              </div>
              <div className="mmb-32">
                <div className="head-xsmall mmb-8">Quantidade de vagas</div>
                <input
                  type="number"
                  className="w-100 br-10 h-65 border-outline p-16"
                  name="qtdVaga"
                  required="true"
                />
              </div>
              <div className="mmb-32">
                <div className="head-xsmall mmb-8">Localidade</div>
                <input
                  type="text"
                  className="w-70 br-10 h-65 border-outline p-16"
                  name="cidade"
                  required="true"
                />
                <span className="hifen">-</span>
                <input
                  type="text"
                  className="w-20 br-10 h-65 border-outline p-16"
                  name="estado"
                  required="true"
                />
              </div>
              <div className="mmb-32">
                <div className="head-xsmall mmb-8">Descrição da vaga</div>
                <textarea
                  name="descricao"
                  id=""
                  cols="30"
                  rows="10"
                  className="w-100 br-10 border-outline p-8"
                  required="true"
                ></textarea>
              </div>
              <div className="mmb-32 d-flex jc-between">
                <div>
                  <div className="head-xsmall mmb-8">Data  <span className="body-medium">(dia/mes/ano)</span></div>
                  <input type="date" name="data" className="input-data-campanha" required="true"/>
                </div>
                <div>
                  <div className="head-xsmall mmb-8">Horário <span className="body-medium">(dia/mes/ano)</span></div>
                  <input type="time" name="hora" className="input-data-campanha" required="true"/>
                </div>
              </div>

              <div className="head-xsmall mmb-8">Foto do projeto</div>
              <div className="text-box-3 body-medium mmb-8">
                Insira uma url existente
              </div>
              {/* Responsável pela integração fazer essa div ser clicável para o uploud da foto */}
              <div className="input-box-upload">
                <input className="input-box-upload input-url" type="text" name="urlImg" id="" required="true" />

              </div>

              <div className="box-botao-criar">
                <button type="submit" className="btn-criar bg-tufts color-white w-100 head-xsmall border-none br-10 mt-32 p-16">
                  Criar Missão
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default CriarMissao;
