import upload from "../../assets/icon/i-upload.svg";

import Navbar from "../../components/navbar/Navbar";

import "./campanha.css";
import "../../components/card/Card.css";

function Campanha() {

  return (
    <>
      <Navbar />
      <div className="meu-container mmb-60">
        <div className="container-pai">
          <div className="container-campanha">
            <div className="w-770 d-flex fd-column">
              <div className="titulo text-align-center d-flex fd-column">
                <span className="head-medium">Crie sua campanha pontual</span>
                <span>
                  Campanha pontual é uma campanha que possui uma data de início
                  e fim, onde será encerrada independente se bateu a meta ou não
                </span>
              </div>
              <div className="mmb-32">
                <div className="head-xsmall mmb-8">Nome do projeto</div>
                <input
                  type="text"
                  className="w-100 br-10 h-65 border-outline p-16"
                />
              </div>
              <div className="mmb-32">
                <div className="head-xsmall mmb-8">Categoria</div>
                <select name="" id="" className="w-100 br-10 h-65 p-8">
                  <option value="0">tal</option>
                  <option value="1">tal</option>
                  <option value="2">tal</option>
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
                <div className="head-xsmall mmb-8">Descrição do projeto</div>
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  className="w-100 br-10 border-outline p-8"
                ></textarea>
              </div>

              <div className="mmb-32 d-flex jc-between">
                <span>
                  <div className="head-xsmall mmb-8">
                    Data fim <span className="body-medium">(dia/mes/ano)</span>
                  </div>
                  <input
                    type="date"
                    className="br-10 h-65 border-outline p-16 input-meta-dia"
                  />
                </span>
                <span>
                  <div className="head-xsmall mmb-8">Meta de arrecadação</div>
                  <input
                    type="text"
                    className=" br-10 h-65 border-outline p-16 input-meta-dia"
                  />
                </span>
              </div>
              {/* <div className="mmb-32">
                <div className="head-xsmall mmb-8">
                  Meta de arrecadação avulsa ou mensal?
                </div>
                <div className="dois-botoes d-flex w-100 jc-evenly">
                  <button className="btn-opcoes bg-sky p-16-vertical w-270 body-medium br-5 border-none color-white">Avulsa</button>
                  <button className="btn-opcoes bg-sky p-16-vertical w-270 body-medium br-5 border-none color-white">Mensal</button>
                </div>
              </div> */}
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

export default Campanha;
