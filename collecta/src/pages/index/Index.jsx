import "../../../styles/global.css";

import imagens from "../../assets/img/ImagensExternas";

import NavbarLogout from "../../components/navbar/NavbarLogout";
import Card from "../../components/card/Card";
import CardPontual from "../../components/card-pontual/CardPontual";

import "./Index.css";
import "../../components/card/Card.css";
import costura01 from "../../assets/background/costura01.svg";
import iGrafico from "../../assets/icon/i-grafico.svg";
import iAjuda from "../../assets/icon/i-ajuda.svg";
import iMaos from "../../assets/icon/i-maos.svg";
import iOlho from "../../assets/icon/i-olho.svg";
import logoNome from "../../assets/logo/logo-collectiva-branco.png";
import maos from "../../assets/img/maos.png";
import React, { useEffect, useState } from "react";

import api from "../../api/api"


function Index() {
  const [campanhas, setCampanhas] = useState([]);

  useEffect(() => {
    buscarCampanhas();
  }, []);

  function buscarCampanhas() {
    const token = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJleGVtcGxvQGVtYWlsLmNvbSIsImlhdCI6MTcwMDQyMTAzNiwiZXhwIjoxNzA0MDIxMDM2fQ.4ptQP7YFCvmJiZbIT7C0XiplEOwEp0MHhiMIc6oEvcXze8tvHCx7veYSLGHfd2H9asWnz_qpJGnw5W-aVPPVxw';

    api.get('/campanhas', {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
      withCredentials: true,
    })
      .then((resposta) => {
        setCampanhas(resposta.data);
      })
      .catch((erro) => {
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
        {campanhas.map((campanha) => (
            <Card
              key={campanha.id}
              titulo={campanha.nome}
              responsavel={campanha.responsavel}
              texto={campanha.descricao}
              porcentagem={campanha.porcentagem}
              valor={campanha.valor}
              local={campanha.local}
              tag={campanha.categoriaCampanha}
              img={imagens[3]}
            />
          ))}


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
        {campanhas.map((campanha) => (
            <CardPontual
              key={campanha.id}
              titulo={campanha.nome}
              responsavel={campanha.responsavel}
              texto={campanha.descricao}
              porcentagem={campanha.porcentagem}
              valor={campanha.valor}
              dias={campanha.dias}
              local={campanha.local}
              tag={campanha.categoriaCampanha}
              img={imagens[3]}
            />
          ))}

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