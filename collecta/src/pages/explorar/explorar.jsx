import "../../../styles/global.css";

import imagens from "../../assets/img/ImagensExternas";

import NavbarLogout from "../../components/navbar/NavbarLogout";
import Card from "../../components/card/Card";
import CardPontual from "../../components/card-pontual/CardPontual";

import "../index/Index.css";
import "../../components/card/card.css";

import logoNome from "../../assets/logo/logo-collectiva-branco.png";
import iSelect from "../../assets/icon/i-select-box.svg";
// import { useEffect, useState } from "react";
// import api from "../../api/api.js"


function Index() {

  // var token = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJjcmlzdGhpYW4uc2lsdmFAc3B0ZWNoLnNjaG9vbCIsImlhdCI6MTcwMDE3NzM4OCwiZXhwIjoxNzAzNzc3Mzg4fQ.FHVM1Hc21LQbIs0GlqLq4ZyEcqd9vESqTKobZUbXPwtPeSFn--89kvykXY-G6f1dAz8TlzUPJF1smC_ShdXcIQ';

  // const [campanhas, setCampanhas] = useState([]);

  // useEffect(() => {
  //   listar();
  //   }, []);

  //   function listar() {
  //     api.get("/campanhas", {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     })
  //     .then((respostaObtida) => {
  //       console.log(respostaObtida);
  //       console.log(respostaObtida.status);
  //       console.log(respostaObtida.data);
  //       setCampanhas(respostaObtida.data)
  //     })
  //     .catch((erroOcorrido) => { 
  //      console.log(erroOcorrido);
  //     })
  //   }
  //   console.log(campanhas)



  const p = 54;
  const p1 = 24;
  const p2 = 19;
  const p3 = 129;
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

        <div className="container">
          <div className="box-projetos">
            <span className="box-projetos-text">Quero ver projetos de</span>
            <span className="box-select-box">
              <span className="selected">Animais</span>
              <img className="select-box" src={iSelect}/>
            </span>
          </div>
          <div className="projetos-encontrados">xx projetos encontrados</div>
        </div>
        <div className="container">
          <div className="card-box jc-between">
          {/* {campanhas?.map((campanha) => (
                            <Card
                              key={campanha.id}
                              titulo="campanha.nome"
                              responsavel="AUmigos Leais"
                              texto="camapanha.descricao"
                              porcentagem={p}
                              valor="7.253"
                              local="São Paulo, SP"
                              tag="{campanha.categoriaCampanha}"
                              img={imagens[4]}
                            />
                    ))} */}
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

        </div>
        <div className="container">
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

        <footer className="footer bg-chambray mt-128 d-flex jc-center ai-center">
          <img src={logoNome} className="logo-nome-collectiva" />
        </footer>
      </div>
    </>
  )
}

export default Index;