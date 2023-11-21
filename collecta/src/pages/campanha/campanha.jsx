import upload from "../../assets/icon/i-upload.svg";

import Navbar from "../../components/navbar/Navbar";

import "./Campanha.css";
import "../../components/card/card.css";

function Campanha() {

  
  return (
    <>
        <Navbar />
        <div className="container-pai">
          <div className="container-campanha">
            <div className="titulo">
              <span className="span-titulo">Crie sua divulgação</span>
            </div>

            <div className="text-box">Qual o nome do seu projeto?</div>
            <div className="input-box"></div>

            <div className="text-box">Qual a categoria do seu projeto?</div>
            <div className="input-box"></div>

            <div className="text-box">Descreva seu projeto:</div>
            <div className="input-box-2"></div>

            <div className="text-box">
              Informe qual sera a utilização do dinheiro arrecadado:
            </div>
            <div className="input-box-2"></div>

            <div className="text-box">Qual sua meta de arrecadação?</div>
            <div className="input-box"></div>

            <div className="text-box">
              Meta de arrecadação avulsa ou mensal?
            </div>
            <div className="dois-botoes">
              <button className="btn-opcoes">Avulsa</button>
              <button className="btn-opcoes">Mensal</button>
            </div>

            <div className="text-box-2">Foto do projeto:</div>
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

export default Campanha;
