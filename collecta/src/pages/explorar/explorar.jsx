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
import logoNome from "../../assets/logo/logo-collectiva-branco.png";
import iSelect from "../../assets/icon/i-select-box.svg";
import Navbar from "../../components/navbar/Navbar.jsx";

function Index() {
  var token = localStorage.getItem('token');
 
  const [campanhas, setCampanhas] = useState([]);
  // var qtdCampanhas = document.getElementById("qtdCampanhas")
  const [qtdCampanhas, setQtdCampanhas] = useState(0);

  const [genero, setGenero] = useState('')

  function mudarGenero(e){
    setGenero(e.target.value)
  }


  useEffect(() => {
    listar();
    }, [genero]);

    function listar() {
      var corpo = "SAUDE"
      api.get(`/campanhas/genero/${genero}`,  {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
      )
      .then((respostaObtida) => {
        setCampanhas(respostaObtida.data)
        setQtdCampanhas(respostaObtida.data.length);
   
      })
      .catch((erroOcorrido) => { 
       console.log(erroOcorrido);
       if(erroOcorrido.status == 404){
        console.log("Não foi encontrado campanha deste genero")
       }
      })
    }


    const navigate = useNavigate();
    const navigateToPage = (path) =>{
        navigate(path)
    }

    const [isTipoConta, setIsTipoConta] = useState(0);
  
    const conta = localStorage.getItem('tipoConta'); 
    function buscarTipoConta() {
      if (conta == 'DOADOR') {
        setIsTipoConta(1);
      } else if (conta == 'ORGANIZACAO') {
        setIsTipoConta(2);
      }
    }
    useEffect(() => {
      buscarTipoConta();
      }, []);


  return (
    <>
      <script>
        {window.addEventListener("scroll", function () {
          var header = document.querySelector("header");
          header.classList.toggle("sticky", window.scrollY > 0);
        })}
      </script>


      {isTipoConta == 0 ? <NavbarLogout /> : <Navbar />}
      <div className="body-index">

        <div className="container">
          <div className="box-projetos">
            <span className="box-projetos-text">Quero ver projetos de</span>
            <select value={genero} onChange={mudarGenero} className="box-select-box">
              <option value="AJUDA_HUMANITARIA">Ajuda Humanitária</option>
              <option value="ALIMENTACAO">Alimentação</option>
              <option value="ANIMAIS">Animais</option>
              <option value="ARRECADACAO_DE_FUNDOS">Arrecadação de Fundos</option>
              <option value="CRIANCAS">Crianças</option>
              <option value="COMBATE_A_POBREZA">Combate a Pobreza</option>
              <option value="CULTURA_E_ARTE">Cultura e Arte</option>
              <option value="EDUCACAO">Educação</option>
              <option value="EMPREENDEDORISMO">Empreendedorismo</option>
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
          <div className="projetos-encontrados"><span id="qtdCampanhas">{qtdCampanhas}</span> projetos encontrados:</div>
        </div>
        <div className="container">
          <div className="card-box jc-between">
          {campanhas && campanhas.length > 0 ? (
                campanhas.map((campanha) => (
                  <Card
                    key={campanha.id}
                    titulo={campanha.nome}
                    responsavel={campanha.organizacao.nomeFantasia}
                    texto={campanha.descricao}
                    porcentagem={(campanha.financeiroCampanha.valorAtingido * 100) / campanha.financeiroCampanha.valorMeta}
                    valor={campanha.financeiroCampanha.valorAtingido}
                    local="São Paulo, SP"
                    tag={campanha.categoriaCampanha}
                    img={campanha.urlImagem}
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