import "../styles/global.css";

import imagens from "./assets/img/ImagensExternas";


import Navbar from "./components/navbar/Navbar";
import Card from "./components/card/Card";
import CardPontual from "./components/card-pontual/CardPontual";

import "./App.css";
import "./components/card/card.css";
import costura01 from "./assets/background/costura01.svg";
import iGrafico from "./assets/icon/i-grafico.svg";
import iAjuda from "./assets/icon/i-ajuda.svg";
import iMaos from "./assets/icon/i-maos.svg";
import iOlho from "./assets/icon/i-olho.svg";
import logoNome from "./assets/logo/logo-nome.svg";
import maos from "./assets/img/maos.png";
import Rotas from "./Rotas"

import { BrowserRouter as Router } from 'react-router-dom';


function App() {
  const p = 54;
  const p1 = 24;
  const p2 = 19;
  const p3 = 129;
  return (
    <>
    <Rotas/>
    {/* <script>
      {window.addEventListener("scroll", function() {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})}
    </script>
    <Router>
      <Navbar />
      <div className="hero-container w-100 mb-100">
        <img src={maos} className="hero-background" />
        <div className="container">
          <div className="pos-absolute tet">
            <span className="color-ice texto-hero head-large">
              <span className="texto1-hero">
                Promover o <span className="color-white">bem</span> e
                <span className="color-white"> Conectar</span> pessoas
              </span>
              <br />
              <span className="color-ice">
                FAZEMOS ISSO <span className="color-white">JUNTOS</span>
              </span>
              <br />
              <button className="p-16-lateral p-8-vertical body-medium br-5 border-none bg-chambray color-white cursor-pointer">
                SAIBA MAIS
              </button>
            </span>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="card-heading d-flex jc-between ai-center mb-32">
          <span className="head-medium color-haiti">Campanhas assinatura</span>
          <div>
            <button className="body-xsmall p-8-16 bg-chambray border-none br-5 color-white">
              VER TODOS
            </button>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="card-box jc-between">
          <Card
            titulo="Projeto AUjuda"
            responsavel="AUmigos Leais"
            texto="Alimentando animais na rua de São Paulo com iniciativa da ETEC de Guaianases. Nossos animais de rua merecem tanto amor quanto qualquer outro animal."
            porcentagem={p}
            valor="7.253"
            local="São Paulo, SP"
            tag="Animais"
            img={imagens[0]}
          />

          <Card
            titulo="Abrace Marmitada"
            responsavel="Instituto Marmitada"
            texto="Fazendo o bem sem olhar a quem."
            porcentagem={p1}
            valor="46.168"
            local="Maceió, Alagoas"
            tag="Alimentação"
            img={imagens[0]}
          />

          <Card
            titulo="Adote uma muda"
            responsavel="Instituto Mata Atlântica"
            texto="Vamos juntos promover a recuperação e a preservação de matas nativas e suas nascentes!"
            porcentagem={p2}
            valor="5.312"
            local="Santa Cruz da Baixa Verde - PE"
            tag="Socioambiental"
            img={imagens[0]}
          />
        </div>

        <div className="card-heading d-flex jc-between ai-center mb-32 mt-190">
          <span className="head-medium color-haiti">Campanhas pontuais</span>
          <div>
            <button className="body-xsmall p-8-16 bg-chambray border-none br-5 color-white">
              VER TODOS
            </button>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="card-box jc-between">
          <CardPontual
            titulo="Adote uma muda"
            responsavel="Instituto Mata Atlântica"
            texto="Vamos juntos promover a recuperação e a preservação de matas nativas e suas nascentes!"
            porcentagem={p3}
            valor="5.312"
            dias="18"
            local="Santa Cruz da Baixa Verde - PE"
            tag="Socioambiental"
            img={imagens[0]}
          />

          <CardPontual
            titulo="Adapta"
            responsavel="Instituto Camaleão"
            texto="Reabilitação e inclusão para pessoas com câncer de cabeça e pescoço"
            porcentagem={p}
            valor="15.123"
            local="Santa Cruz da Baixa Verde - PE"
            tag="Socioambiental"
            dias="18"
            img={imagens[0]}
          />

          <CardPontual
            titulo="Oie"
            responsavel="Vish"
            texto="Tudo"
            porcentagem={p2}
            valor="38.365"
            local="Santa Cruz da Baixa Verde - PE"
            tag="Socioambiental"
            dias="18"
            img={imagens[0]}
          />
        </div>
      </div>

      <div className="background">
        <div className="container">
          <span className="head-large d-flex fd-column text-align-center">
            <span className="mb-16">
              A <span className="color-tufts">união coletiva</span> é a essência
              da
              <span className="color-tufts"> nossa força</span>
            </span>
            <span className="head-small mb-32">
              Venha fazer parte dessa história!
            </span>
            <div>
              <button className="btn-criar-campanha border-none bg-chambray color-white br-5 body-large">
                CRIAR CAMPANHA
              </button>
            </div>
          </span>
        </div>
      </div>
      <img src={costura01} className="w-100 mb-128" />
      <div className="container">
        <section className="text-align-center">
          <span className="color-haiti head-large">
            Sobre a <span className="color-chambray">Collectiva</span>
          </span>
          <div className="container-icones-sobre d-flex jc-between mt-100">
            <section className="sect-icone-sobre">
              <section className="">
                <img src={iMaos} className="mb-16" />
                <span className="body-xlarge texto-icone">
                  Vivenciamos de perto a mudança ativa na sociedade, fauna e
                  flora
                </span>
              </section>
            </section>
            <section className="sect-icone-sobre d-flex">
              <section className="">
                <img src={iAjuda} className="mb-16" />
                <span className="body-xlarge texto-icone">
                  Vivenciamos de perto a mudança ativa na sociedade, fauna e
                  flora
                </span>
              </section>
            </section>
            <section className="sect-icone-sobre d-flex">
              <section className="">
                <img src={iOlho} className="mb-16" />
                <span className="body-xlarge texto-icone">
                  Vivenciamos de perto a mudança ativa na sociedade, fauna e
                  flora
                </span>
              </section>
            </section>
            <section className="sect-icone-sobre d-flex">
              <section className="">
                <img src={iGrafico} className="mb-16" />
                <span className="body-xlarge texto-icone">
                  Vivenciamos de perto a mudança ativa na sociedade, fauna e
                  flora
                </span>
              </section>
            </section>
          </div>
        </section>
      </div>
      <footer className="footer bg-chambray mt-128 d-flex jc-center ai-center">
        <img src={logoNome} />
      </footer>
      </Router> */}
    </>
  );
}

export default App;
