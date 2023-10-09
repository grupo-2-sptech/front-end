import "../styles/global.css";
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
      <div className="container">
          <div className="card-box jc-between">
            {/* <Card
              titulo="Projeto AUjuda"
              responsavel="AUmigos Leais"
              texto="Alimentando animais na rua de São Paulo com iniciativa da ETEC de Guaianases. Nossos animais de rua merecem tanto amor quanto qualquer outro animal."
              porcentagem="87"
              valor="7.253"
              local="São Paulo, SP"
              tag="Animais"
              img={aujuda}
            />

            <Card
              titulo="Abrace Marmitada"
              responsavel="Instituto Marmitada"
              texto="Fazendo o bem sem olhar a quem."
              porcentagem="81"
              valor="46.168"
              local="Maceió, Alagoas"
              tag="Alimentação"
              img={marmitada}
            />

            <Card
              titulo="Adote uma muda"
              responsavel="Instituto Mata Atlântica"
              texto="Vamos juntos promover a recuperação e a preservação de matas nativas e suas nascentes!"
              porcentagem="82"
              valor="5.312"
              local="Santa Cruz da Baixa Verde - PE"
              tag="Socioambiental"
              img={atlantica}
            /> */}

            {/* <CardPontual
              titulo="Adote uma muda"
              responsavel="Instituto Mata Atlântica"
              texto="Vamos juntos promover a recuperação e a preservação de matas nativas e suas nascentes!"
              porcentagem="82"
              valor="5.312"
              dias="18"
              local="Santa Cruz da Baixa Verde - PE"
              tag="Socioambiental"
              img={atlantica}
            /> */}
          </div>

          {/* <div className="card-box jc-between">
            <Card
              titulo="Adapta"
              responsavel="Instituto Camaleão"
              texto="Reabilitação e inclusão para pessoas com câncer de cabeça e pescoço"
              porcentagem="82"
              valor="15.123"
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
          </div> */}
        </div>
      
    </>
  );
}

export default App;
