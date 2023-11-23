import "../../../styles/global.css";

import imagens from "../../assets/img/ImagensExternas";

import NavbarLogout from "../../components/navbar/NavbarLogout";
import Card from "../../components/card/Card";
import CardPontual from "../../components/card-pontual/CardPontual";

import "./Index.css";
import "../../components/card/card.css";
import costura01 from "../../assets/background/costura01.svg";
import iGrafico from "../../assets/icon/i-grafico.svg";
import iAjuda from "../../assets/icon/i-ajuda.svg";
import iMaos from "../../assets/icon/i-maos.svg";
import iOlho from "../../assets/icon/i-olho.svg";
import logoNome from "../../assets/logo/logo-collectiva-branco.png";
import maos from "../../assets/img/maos.png";

import api from "../../api/api"


function Index() {

  function buscarCampanhas() {
    const token = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJleGVtcGxvQGVtYWlsLmNvbSIsImlhdCI6MTcwMDQyMTAzNiwiZXhwIjoxNzA0MDIxMDM2fQ.4ptQP7YFCvmJiZbIT7C0XiplEOwEp0MHhiMIc6oEvcXze8tvHCx7veYSLGHfd2H9asWnz_qpJGnw5W-aVPPVxw';
  
    api
      .get('/campanhas', {
        headers: {
          'Authorization': `Bearer ${token}`,
        }
      })            
      .then((resposta) => {
        // Atualize o estado do componente ou faça algo com os dados aqui
        console.log(resposta.data);
      })
      .catch((erro) => {
        // Trate o erro aqui, por exemplo, exibindo uma mensagem ao usuário
        console.error('Erro ao buscar campanhas:', erro);
      });
  }
    const p = 54;
    const p1 = 24;
    const p2 = 19;
    const p3 = 129; 
    return (
        <>
            <script>
      {window.addEventListener("scroll", function() {
        var header = document.querySelector("header");
        header.classList.toggle("sticky", window.scrollY > 0);
      })}
    </script>
      
    
      <NavbarLogout />
      <button onClick={buscarCampanhas}>CLICA AQUI</button>
      <div className="body-index">
      <div className="hero-container w-100 mmb-100">
        <img src={maos} className="hero-background" />
        <div className="meu-container">
          <div className="pos-absolute tet">
            <span className="color-ice texto-hero head-large">
              <span className="texto1-hero color-ice">
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
      <div className="meu-container">
        <div className="card-heading d-flex jc-between ai-center mmb-32">
          <span className="head-medium color-haiti">Campanhas assinatura</span>
          <div>
            <button className="body-xsmall p-8-16 bg-chambray border-none br-5 color-white">
              VER TODOS
            </button>
          </div>
        </div>
      </div>
      <div className="meu-container">
        <div className="card-box jc-between">
          <Card
            titulo="Projeto AUjuda"
            responsavel="AUmigos Leais"
            texto="Alimentando animais na rua de São Paulo com iniciativa da ETEC de Guaianases. Nossos animais de rua merecem tanto amor quanto qualquer outro animal."
            porcentagem={p}
            valor="7.253"
            local="São Paulo, SP"
            tag="Animais"
            img={imagens[4]}
          />

          <Card
            titulo="Abrace Marmitada"
            responsavel="Instituto Marmitada"
            texto="Fazendo o bem sem olhar a quem."
            porcentagem={p1}
            valor="46.168"
            local="Maceió, Alagoas"
            tag="Alimentação"
            img={imagens[2]}
          />

          <Card
            titulo="Adote uma muda"
            responsavel="Instituto Mata Atlântica"
            texto="Vamos juntos promover a recuperação e a preservação de matas nativas e suas nascentes!"
            porcentagem={p2}
            valor="5.312"
            local="Santa Cruz da Baixa Verde - PE"
            tag="Socioambiental"
            img={imagens[5]}
          />
        </div>

        <div className="card-heading d-flex jc-between ai-center mmb-32 mt-190">
          <span className="head-medium color-haiti">Campanhas pontuais</span>
          <div>
            <button className="body-xsmall p-8-16 bg-chambray border-none br-5 color-white">
              VER TODOS
            </button>
          </div>
        </div>
      </div>
      <div className="meu-container">
        <div className="card-box jc-between">
        <CardPontual
            titulo="Adapta"
            responsavel="Instituto Camaleão"
            texto="Reabilitação e inclusão para pessoas com câncer de cabeça e pescoço"
            porcentagem={p}
            valor="15.123"
            local="Santa Cruz da Baixa Verde - PE"
            tag="Saúde"
            dias="18"
            img={imagens[3]}
          />
          <CardPontual
            titulo="Ação de rua - SP"
            responsavel="Ação de rua - SP"
            texto="Ação de combate à fome nas ruas de São Paulo"
            porcentagem={p3}
            valor="120.239"
            dias="90"
            local="Santa Cruz da Baixa Verde - PE"
            tag="Rua"
            img={imagens[0]}
          />

          

          <CardPontual
            titulo="Banho de dignidade"
            responsavel="Amigos da Rua e Seus Pets"
            texto="Comprar um ônibus e adequá-lo para que moradores de rua tomem banho, cortem cabelo, façam barba, etc"
            porcentagem={p2}
            valor="13.623"
            local="Santa Cruz da Baixa Verde - PE"
            tag="Rua"
            dias="55"
            img={imagens[1]}
          />
        </div>
      </div>

      <div className="background">
        <div className="meu-container">
          <span className="head-large d-flex fd-column text-align-center">
            <span className="mmb-16">
              A <span className="color-tufts">união coletiva</span> é a essência
              da
              <span className="color-tufts"> nossa força</span>
            </span>
            <span className="head-small mmb-32">
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
      <img src={costura01} className="w-100 mmb-128" />
      <div className="meu-container">
        <section className="text-align-center">
          <span className="color-haiti head-large">
            Sobre a <span className="color-chambray">Collectiva</span>
          </span>
          <div className="container-icones-sobre d-flex jc-between mt-100">
            <section className="sect-icone-sobre">
              <section className="">
                <img src={iMaos} className="mmb-16" />
                <span className="body-xlarge texto-icone">
                  Vivenciamos de perto a mudança ativa na sociedade, fauna e
                  flora
                </span>
              </section>
            </section>
            <section className="sect-icone-sobre d-flex">
              <section className="">
                <img src={iAjuda} className="mmb-16" />
                <span className="body-xlarge texto-icone">
                  Vivenciamos de perto a mudança ativa na sociedade, fauna e
                  flora
                </span>
              </section>
            </section>
            <section className="sect-icone-sobre d-flex">
              <section className="">
                <img src={iOlho} className="mmb-16" />
                <span className="body-xlarge texto-icone">
                  Vivenciamos de perto a mudança ativa na sociedade, fauna e
                  flora
                </span>
              </section>
            </section>
            <section className="sect-icone-sobre d-flex">
              <section className="">
                <img src={iGrafico} className="mmb-16" />
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
        <img src={logoNome} className="logo-nome-collectiva" />
      </footer>
      </div>
        </>
    )
}

export default Index;