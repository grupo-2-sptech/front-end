import upload from "../../assets/icon/i-upload.svg";

import Navbar from "../../components/navbar/Navbar";
import NavbarLogout from "../../components/navbar/NavbarLogout";

import "./campanha.css";
import "../../components/card/Card.css";
import api from "../../api/api";
import { useNavigate } from "react-router";
import React, { useEffect, useState } from "react";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

function CampanhaRecorrente() {
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

  var token = localStorage.getItem("token")
  const [genero, setGenero] = useState('')

  var idUsuario = localStorage.getItem("id")
  var dataHoje = new Date()
  function mudarGenero(e){
    setGenero(e.target.value)
  }
  
  const navigate = useNavigate();
  const navigateToPage = (path) =>{
      navigate(path)
  }
  
  var dataAtual = new Date();
  const dataDaqui10Anos = new Date();
  dataDaqui10Anos.setFullYear(dataAtual.getFullYear() + 10);
  var dataFimFormatada = dataDaqui10Anos.toISOString().slice(0, 19);
  var dataAtualFormatada = dataHoje.toISOString().slice(0, 19);
  
  function cadastrarFinanceiroCampanha(id, valor){

    var financeiro = {
      valorMeta: valor,
      idCampanha: id
    }
    console.log(financeiro)

    api.post("/financeiros", financeiro
    ).then((res) => {
      navigateToPage("/")
      console.log(res.data)
    }).catch((erro) =>{
      console.log(erro)
      MySwal.fire({
        title: <p>Erro ao cadastrar financeiro da campanha</p>,
        icon: 'error'
      })
    })
  }


    function cadastrarCampanha(e){
    e.preventDefault();
    var valorMeta = e.target.valorMeta.value

    var campanha = {
      nome: e.target.titulo.value,
      descricao: e.target.descricao.value,
      dataFim: dataFimFormatada,
      categoriaCampanha: genero,
      tipoCampanha: "CONTINUA",
      idOrganizacao: idUsuario, 
      urlImagem: e.target.inputImg.value,
      statusCampanha: "ATIVA",
      dataInicio: dataAtualFormatada
    }

  api.post("/campanhas", campanha, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }).then((res) => {
    // alert("deu certo cadastrar a campanha")
    console.log(res.data)
    console.log(res.data.id)
     cadastrarFinanceiroCampanha(res.data.id, valorMeta)
  }).catch((erro) => {
    console.log(erro)
    MySwal.fire({
      title: <p>Erro ao cadastrar a campanha</p>,
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
            <form onSubmit={cadastrarCampanha} className="w-770 d-flex fd-column">
              <div className="titulo text-align-center d-flex fd-column">
                <span className="head-medium">Crie sua campanha recorrente</span>
                <span>
                  Campanha recorrente é uma campanha que vai durar até que você a encerre.
                </span>
              </div>
              <div className="mmb-32">
                <div className="head-xsmall mmb-8">
                  Qual o nome do seu projeto?
                </div>
                <input
                  type="text"
                  name="titulo"
                  required={true}
                  className="w-100 br-10 h-65 border-outline p-16"
                />
              </div>
              <div className="mmb-32">
                <div className="head-xsmall mmb-8">
                  Qual a categoria do seu projeto?
                </div>
                
                <select required={true} name="" id="" onChange={mudarGenero} className="w-100 br-10 h-65 p-8">
                    <option value="AJUDA_HUMANITARIA">Ajuda Humanitária</option>
                    <option value="ALIMENTACAO">Alimentação</option>
                    <option value="ANIMAIS">Animais</option>
                    <option value="ARRECADACAO_DE_FUNDOS">Arrecadação de Fundos</option>
                    <option value="CRIANCAS">Crianças</option>
                    <option value="COMBATE_A_POBREZA">Combate a Pobreza</option>
                    <option value="CULTURA_E_ARTE">Cultura e Arte</option>
                    <option value="EDUCACAO">Educação</option>
                    <option value="EMPREENDEDORISMO">Empreendedorismo</option>
                    <option value="ESPORTES">Esportes</option>
                    <option value="HABITACAO">Habitação</option>
                    <option value="IDOSOS">Idosos</option>
                    <option value="IGUALDADE_DE_GENERO">Igualdade de Genero</option>
                    <option value="INOVACAO_SOCIAL">Inovação Social</option>
                    <option value="MEIO_AMBIENTE">Meio Ambiente</option>
                    <option value="SAUDE">Saúde</option>
                    <option value="SAUDE_MENTAL">Saúde Mental</option>
                    <option value="TECNOLOGIA">Tecnologia</option>
                    <option value="OUTROS">Outros</option>
                  </select>
              </div>
              <div className="mmb-32">
                <div className="head-xsmall mmb-8">Localidade</div>
                <input
                  type="text"
                  className="w-70 br-10 h-65 border-outline p-16"
                />
                <span className="hifen">-</span>
                <input
                  type="text"
                  className="w-20 br-10 h-65 border-outline p-16"
                />
                </div>
              <div className="mmb-32">
                <div className="head-xsmall mmb-8">Descreva seu projeto:</div>
                <textarea
                  name="descricao"
                  id=""
                  cols="30"
                  rows="7"
                  className="w-100 br-10 border-outline p-8"
                  required={true}
                ></textarea>
              </div>

              <div className="mmb-32">
                <div className="head-xsmall mmb-8">
                  Qual sua meta de arrecadação?
                </div>
                <input
                  type="number"
                  name="valorMeta"
                  className="w-100 br-10 h-65 border-outline p-16"
                  required={true}
                />
              </div>

              <div className="head-xsmall mmb-8">Foto do projeto</div>
              <div className="text-box-3 body-medium mmb-8">
                A imagem será utilizada como card do projeto
              </div>
              {/* Responsável pela integração fazer essa div ser clicável para o uploud da foto */}
              <div className="input-box-upload">
                <input required={true} className="input-box-upload " type="text" name="inputImg" id="inputImg" />
              </div>

              <div className="box-botao-criar">
                <button type="submit" className="btn-criar bg-tufts color-white w-100 head-xsmall border-none br-10 mt-32 p-16">
                  Criar projeto
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default CampanhaRecorrente;
