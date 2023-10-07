import "../styles/global.css";
import acao from "./assets/img/acao.png";
import adapta from "./assets/img/adapta.png";
import atlantica from "./assets/img/atlantica.png";
import aujuda from "./assets/img/aujuda.png";
import banho from "./assets/img/banho.png";
import marmitada from "./assets/img/marmitada.png";

import Navbar from "./components/navbar/Navbar";
import Card from "./components/card/Card";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
          <div className="card-box jc-between">
            <Card
              titulo="Oie"
              responsavel="Vish"
              texto="Tudo"
              porcentagem="89"
              valor="38.365"
              local="Santa Cruz da Baixa Verde - PE"
              tag="Socioambiental"
              img={acao}
            />

            <Card
              titulo="Oie"
              responsavel="Vish"
              texto="Tudo"
              porcentagem="89"
              valor="38.365"
              local="Santa Cruz da Baixa Verde - PE"
              tag="Socioambiental"
              img={acao}
            />

            <Card
              titulo="Oie"
              responsavel="Vish"
              texto="Tudo"
              porcentagem="89"
              valor="38.365"
              local="Santa Cruz da Baixa Verde - PE"
              tag="Socioambiental"
              img={acao}
            />
          </div>
          <div className="card-box">
            <Card
              titulo="Oie"
              responsavel="Vish"
              texto="Tudo"
              porcentagem="89"
              valor="38.365"
              local="Santa Cruz da Baixa Verde - PE"
              tag="Socioambiental"
              img={acao}
            />

            <Card
              titulo="Oie"
              responsavel="Vish"
              texto="Tudo"
              porcentagem="89"
              valor="38.365"
              local="Santa Cruz da Baixa Verde - PE"
              tag="Socioambiental"
              img={acao}
            />

            <Card
              titulo="Oie"
              responsavel="Vish"
              texto="Tudo"
              porcentagem="89"
              valor="38.365"
              local="Santa Cruz da Baixa Verde - PE"
              tag="Socioambiental"
              img={acao}
            />
          </div>
        </div>
      
    </>
  );
}

export default App;
