import "../styles/global.css";
import "./components/navbar/navbar.css";
import "./components/card/Card.css";

import Navbar from "./components/navbar/Navbar";

import Pacoca from "./assets/logo/pacoca.jpg";
import iRecorrente from "./assets/icon/i-recorrente.svg";
import iLocal from "./assets/icon/i-local.svg";
import iTag from "./assets/icon/i-tag.svg";
// import './App.css'

function App() {
  return (
    <>
      <body>
        <Navbar />
        <div className="card border-ice">
          <section className="card-thumbnail mb-16">
            <img src={Pacoca} className="card-thumb-img" />
           
              <span className="card-pin-destaque body-xsmall color-haiti bg-ice">Projeto destaque</span>
            
          </section>
          <section className="p-16">
            <section className="card-texto d-flex fd-column">
              <span className="card-titulo body-large mb-22">Título</span>
              <span className="card-responsavel body-small mb-22">
                por responsavel
              </span>
              <span className="body-small mb-32">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Quaerat, officiis voluptatibus ur soluta recusandae veniam! Ex
                voluptatibus doloribus nobis aspernatur accusamus, eaque
                debitis! Nulla eaque asperiores, eveniet omnis{" "}
              </span>
            </section>
            <progress className="mb-32 card-progress-bar" id="file" value="32" max="100">
              {" "}
              32%{" "}
            </progress>
            <section className="card-numeros mb-22 d-flex jc-between ai-center">
              <span className="body-large">0%</span>
              <section className="d-flex fd-column">
                <span className="body-large">R$ 0.000</span>
                <span className="body-xsmall">Levantados</span>
              </section>
              <img src={iRecorrente} />
            </section>
          </section>
          <section className="card-rodape p-16-lateral p-8-vertical bg-ice">
            <section className="card-local mb-8 d-flex">
              <img src={iLocal} />
              <span className="body-xsmall ml-8">São Paulo - SP</span>
            </section>
            <section className="card-tag d-flex">
              <img src={iTag} />
              <span className="body-xsmall ml-8">Animais</span>
            </section>
          </section>
        </div>
      </body>
    </>
  );
}

export default App;
