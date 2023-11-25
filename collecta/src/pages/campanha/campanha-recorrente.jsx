import upload from "../../assets/icon/i-upload.svg";

import Navbar from "../../components/navbar/Navbar";

import "./campanha.css";
import "../../components/card/Card.css";

function CampanhaRecorrente() {
  return (
    <>
      <Navbar />
      <div className="meu-container mmb-60">
        <div className="container-pai">
          <div className="container-campanha">
            <div className="w-770 d-flex fd-column">
              <div className="titulo text-align-center d-flex fd-column">
                <span className="head-medium">Crie sua campanha recorrente</span>
                <span>
                  Campanha recorrente é uma campanha que vai durar até que você a encerre.
                </span>
              </div>
              <div className="mmb-32">
                <div className="head-xsmall mmb-8">
                  Qual o nome do seu projeto ?
                </div>
                <input
                  type="text"
                  className="w-100 br-10 h-65 border-outline p-16"
                />
              </div>
              <div className="mmb-32">
                <div className="head-xsmall mmb-8">
                  Qual a categoria do seu projeto ?
                </div>
                <select name="" id="" className="w-100 br-10 h-65 p-8">
                  <option value="0">tal</option>
                  <option value="1">tal</option>
                  <option value="2">tal</option>
                </select>
              </div>
              <div className="mmb-32">
                <div className="head-xsmall mmb-8">Descreva seu projeto:</div>
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="7"
                  className="w-100 br-10 border-outline p-8"
                ></textarea>
              </div>
              <div className="mmb-32">
                <div className="head-xsmall mmb-8">
                  Informe qual será a utilização do dinheiro arrecadado:
                </div>
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="7"
                  className="w-100 br-10 border-outline p-8"
                ></textarea>
              </div>
              <div className="mmb-32">
                <div className="head-xsmall mmb-8">
                  Qual sua meta de arrecadação ?
                </div>
                <input
                  type="text"
                  className="w-100 br-10 h-65 border-outline p-16"
                />
              </div>
              {/*<div className="mmb-32">
                                <div className="head-xsmall mmb-8">
                                    Meta de arrecadação avulsa ou mensal?
                                </div>
                                <div className="dois-botoes d-flex w-100 jc-evenly">
                                    <button className="btn-opcoes bg-sky p-16-vertical w-270 body-medium br-5 border-none color-white">Avulsa</button>
                                    <button className="btn-opcoes bg-sky p-16-vertical w-270 body-medium br-5 border-none color-white">Mensal</button>
                                </div>
                            </div>*/}
              <div className="head-xsmall mmb-8">Foto do projeto</div>
              <div className="text-box-3 body-medium mmb-8">
                A imagem será utilizada como card do projeto
              </div>
              {/* Responsável pela integração fazer essa div ser clicável para o uploud da foto */}
              <div className="input-box-upload">
                <img className="simbolo-upload" src={upload} />
              </div>

              <div className="box-botao-criar">
                <button className="btn-criar bg-tufts color-white w-100 head-xsmall border-none br-10 mt-32 p-16">
                  Criar projeto
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CampanhaRecorrente;