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
import { Link } from "react-router-dom";

import api from "../../api/api";

function Index() {
  const [campanhasPontuais, setCampanhasPontuais] = useState([]);
  const [campanhasContinuas, setCampanhasContinuas] = useState([]);
  const [porcentagem, setPorcentagem] = useState(0);

  useEffect(() => {
    buscarCampanhasPontuais();
    buscarCampanhasContinuas();
  }, []);

  function buscarCampanhasPontuais() {
    const token =
      "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJlbWlvbGVAc3B0ZWNoLnNjaG9vbCIsImlhdCI6MTcwMDkzMTU0MiwiZXhwIjoxNzA0NTMxNTQyfQ.K3kEW1ySPMCeVW4rCFT7_6cohK-aQzWw4KryfsiMHQ5G2VF050U76ByNoeIMhClu2smqNpa4Y9s_49dtewWINQ";

    api
      .get("/campanhas/top3", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          tipoCampanha: "POR_DATA",
        },
        withCredentials: true,
      })
      .then((resposta) => {
        setCampanhasPontuais(resposta.data);
        const valorMeta = resposta.data[0].financeiroCampanha.valorMeta;
        const valorAtingido = resposta.data[0].financeiroCampanha.valorAtingido;
        var novaPorcentagem = (valorAtingido / valorMeta) * 100;
        setPorcentagem(novaPorcentagem);
      })
      .catch((erro) => {
        console.error("Erro ao buscar campanhas:", erro);
      });
  }

  function buscarCampanhasContinuas() {
    const token =
      "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJlbWlvbGVAc3B0ZWNoLnNjaG9vbCIsImlhdCI6MTcwMDkzMTU0MiwiZXhwIjoxNzA0NTMxNTQyfQ.K3kEW1ySPMCeVW4rCFT7_6cohK-aQzWw4KryfsiMHQ5G2VF050U76ByNoeIMhClu2smqNpa4Y9s_49dtewWINQ";

    api
      .get("/campanhas/top3", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          tipoCampanha: "CONTINUA",
        },
        withCredentials: true,
      })
      .then((resposta) => {
        setCampanhasContinuas(resposta.data);
        console.log(resposta.data);
        const valorMeta = resposta.data[0].financeiroCampanha.valorMeta;
        const valorAtingido = resposta.data[0].financeiroCampanha.valorAtingido;
        var novaPorcentagem = (valorAtingido / valorMeta) * 100;
        setPorcentagem(novaPorcentagem);
      })
      .catch((erro) => {
        console.error("Erro ao buscar campanhas:", erro);
      });
  }
  return (
    <>
      <script>
        {window.addEventListener("scroll", function () {
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
              </span>
            </div>
          </div>
        </div>
        <div className="meu-container">
          <div className="card-heading d-flex jc-between ai-center mmb-32">
            <span className="head-medium color-haiti">Campanhas contínuas</span>
          </div>
        </div>
        <div className="meu-container">
          <div className="card-box jc-between">
            {campanhasContinuas.map((campanhaContinua) => (
              <Link className="link-sem-decoracao" to={`/info-campanha/${campanhaContinua.id}`} key={campanhaContinua.id}>
                <Card
                  
                  titulo={campanhaContinua.nome}
                  responsavel={campanhaContinua.organizacao.nomeFantasia}
                  texto={campanhaContinua.descricao}
                  porcentagem={porcentagem}
                  valor={campanhaContinua.financeiroCampanha.valorAtingido}
                  local={campanhaContinua.local}
                  tag={campanhaContinua.categoriaCampanha}
                  img={imagens[3]}
                />
              </Link>
            ))}
          </div>
          <div className="card-heading d-flex jc-between ai-center mmb-32 mt-190">
            <span className="head-medium color-haiti">Campanhas pontuais</span>
          </div>
        </div>
        <div className="meu-container">
          <div className="card-box jc-between">
            {campanhasPontuais.map((campanhaPontual) => (
              <CardPontual
                key={campanhaPontual.id}
                titulo={campanhaPontual.nome}
                responsavel={campanhaPontual.organizacao.nomeFantasia}
                texto={campanhaPontual.descricao}
                porcentagem={porcentagem}
                valor={campanhaPontual.financeiroCampanha.valorAtingido}
                local={campanhaPontual.local}
                tag={campanhaPontual.categoriaCampanha}
                img={imagens[3]}
              />
            ))}
          </div>
        </div>

        <div className="background">
          <div className="meu-container">
            <span className="head-large d-flex fd-column text-align-center">
              <span className="mmb-16">
                A <span className="color-tufts">união coletiva</span> é a
                essência da
                <span className="color-tufts"> nossa força</span>
              </span>
              <span className="head-small mmb-32">
                Venha fazer parte dessa história!
              </span>
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
  );
}

export default Index;
