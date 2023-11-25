import upload from "../../assets/icon/i-upload.svg";

import Navbar from "../../components/navbar/Navbar";

import "./CriarMissao.css";
import "../../components/card/card.css";

function CriarMissao() {

  return (
    <>
      <Navbar />
      <div className="meu-container mmb-60">
        <div className="container-pai">
          <div className="container-campanha">
            <div className="w-770 d-flex fd-column">
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
                />
              </div>
              <div className="mmb-32">
                <div className="head-xsmall mmb-8">Quantidade de vagas</div>
                <input
                  type="text"
                  className="w-100 br-10 h-65 border-outline p-16"
                />
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
                <div className="head-xsmall mmb-8">Descrição da vaga</div>
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  className="w-100 br-10 border-outline p-8"
                ></textarea>
              </div>
              <div className="mmb-32 d-flex jc-between">
                <div>
                  <div className="head-xsmall mmb-8">Data  <span className="body-medium">(dia/mes/ano)</span></div>
                  <input type="date" className="input-data-campanha" />
                </div>
                <div>
                  <div className="head-xsmall mmb-8">Horário <span className="body-medium">(dia/mes/ano)</span></div>
                  <input type="time" className="input-data-campanha" />
                </div>
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
                A imagem será utilizada como card da missão
              </div>
              {/* Responsável pela integração fazer essa div ser clicável para o uploud da foto */}
              <div className="input-box-upload">
                <img className="simbolo-upload" src={upload} />
              </div>

              <div className="box-botao-criar">
                <button className="btn-criar bg-tufts color-white w-100 head-xsmall border-none br-10 mt-32 p-16">
                  Criar Missão
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CriarMissao;
