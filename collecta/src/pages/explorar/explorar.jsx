import "../../../styles/global.css";

import imagens from "../../assets/img/ImagensExternas";
import "./explorar.css"
import NavbarLogout from "../../components/navbar/NavbarLogout";
import Card from "../../components/card/Card";
import CardPontual from "../../components/card-pontual/CardPontual";

import "../index/Index.css";
import "../../components/card/card.css";
import { useEffect, useState } from "react";
import api from "../../api/api.js"
import { useNavigate } from "react-router";
import Footer from "../../components/footer/Footer.jsx";


function Index() {
  var token = localStorage.getItem('token');
 
  const [campanhas, setCampanhas] = useState([]);
  var qtdCampanhas = document.getElementById("qtdCampanhas")

  useEffect(() => {
    listar();
    }, []);

    function listar() {
      api.get("/campanhas", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
      )
      .then((respostaObtida) => {

        
        setCampanhas(respostaObtida.data)
        qtdCampanhas.innerHTML = campanhas.length 
   
      })
      .catch((erroOcorrido) => { 
       console.log(erroOcorrido);
      })
    }
    console.log(campanhas)

    const navigate = useNavigate();
    const navigateToPage = (path) =>{
        navigate(path)
    }



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
            <select className="box-select-box">
              <option value="AJUDA_HUMANITARIA">Ajuda Humanitária</option>
              <option value="ALIMENTACAO">Alimentação</option>
              <option value="ANIMAIS">Animais</option>
              <option value="ARRECADACAO_DE_FUNDOS">Arrecadação de Fundos</option>
              <option value="CRIANCAS">Crianças</option>
              <option value="COMBATE_A_POBREZA">Combate a Pobreza</option>
              <option value="CULTURA_E_ARTE">Cultura e Arte</option>
              <option value="EDUCACAO">Educação</option>
              <option value="EMPREENDEDORISMO">Empreendedorismp</option>
              <option value="ESPORTES">Esportes</option>
              <option value="HABITACAO">Habitação</option>
              <option value="IDOSOS">Idosos</option>
              <option value="IGUALDADE_DE_GENERO">Igualdade de Genero</option>
              <option value="INOVACAO_SOCIAL">Inovação Social</option>
              <option value="MEIO_AMBIENTE">Meio Ambiente</option>
              <option value="SAUDE">Saúde</option>
              <option value="SAUDE_MENTAL">Saúde Mental</option>
              <option value="TECNOLOGIA">Tecnologia</option>
              <option value="OUTROS">Outros</option>
            </select>
          </div>
          <div className="projetos-encontrados"><span id="qtdCampanhas"></span> projetos encontrados:</div>
        </div>
        <div className="container">
          <div className="card-box jc-between">
          {campanhas && campanhas.length > 0 ? (
                campanhas.map((campanha) => (
                  <Card
                    key={campanha.id}
                    titulo={campanha.nome}
                    responsavel="AUmigos Leais"
                    texto={campanha.descricao}
                    porcentagem={p}
                    valor="7.253"
                    local="São Paulo, SP"
                    tag={campanha.categoriaCampanha}
                    img={imagens[4]}
                    onClick={() => navigateToPage(`/info-campanha/${campanha.id}`)}
                  />
                ))
                
              ) : (
                <p className="txtStatus204">Nenhuma campanha encontrada</p>
              )}
            
          </div>
        </div>

        <Footer/>
      </div>
    </>
  )
}

export default Index;