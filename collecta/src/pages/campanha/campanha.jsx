import "../styles/global.css";
import upload from "./assets/icon/i-upload.svg";
import acao from "./assets/img/acao.png";
import adapta from "./assets/img/adapta.png";
import atlantica from "./assets/img/atlantica.png";
import aujuda from "./assets/img/aujuda.png";
import banho from "./assets/img/banho.png";
import marmitada from "./assets/img/marmitada.png";


import Navbar from "./components/navbar/Navbar";
import Card from "./components/card/Card";
import CardPontual from "./components/card-pontual/CardPontual";

import "./App.css";
import "./components/card/card.css"

function App() {
  return (
    <>
      <Navbar />
      <div className="container-pai">
        <div className="container">
          <div className="titulo">
            <span className="span-titulo">Crie sua divulgação</span>
          </div>

          <div className="text-box">
            Qual o nome do seu projeto?
          </div>
          <div className="input-box">
          </div>

          <div className="text-box">
            Qual a categoria do seu projeto?
          </div>
          <div className="input-box">
          </div>

          <div className="text-box">
            Descreva seu projeto:
          </div>
          <div className="input-box-2">
          </div>

          <div className="text-box">
            Informe qual sera a utilização do dinheiro arrecadado:
          </div>
          <div className="input-box-2">
          </div>

          <div className="text-box">
            Qual sua meta de arrecadação?
          </div>
          <div className="input-box">
          </div>

          <div className="text-box">
            Meta de arrecadação avulsa ou mensal?
          </div>
          <div className="dois-botoes">
            <button className="btn-opcoes">Avulsa</button>
            <button className="btn-opcoes">Mensal</button>
          </div>

          <div className="text-box-2">
            Foto do projeto:
          </div>
          <div className="text-box-3">
            A imagem será utilizada como card do projeto
          </div>
          <div className="input-box-upload">
            <img className="simbolo-upload" src={upload} />
          </div>

          <div className="box-botao-criar">
            <button className="btn-criar">Criar projeto</button>
          </div>

        </div>
      </div>

    </>
  );
}

export default App;
