import {useEffect, useRef, useState} from 'react';

import Navbar from "../../components/navbar/Navbar";
import "./Dashboard.css";
import { Navigate, useNavigate, useParams } from 'react-router';
import api from '../../api/api';
import BtnVoltar from "../../assets/icon/i-voltar.svg";
import NavbarLogout from '../../components/navbar/NavbarLogout';


function Dashboard() {
    var token = localStorage.getItem("token")
    const [meta, setMeta] = useState('')
    const [arrecadado, setArrecadado] = useState('')
    const [restante, setRestante] = useState('')
    const [nomeProjeto, setNomeProjeto] = useState('')
    const [visualizacao, setVisualizacao] = useState('')
    const [isTipoConta, setIsTipoConta] = useState(0);
    const { id } = useParams();
    const navigate = useNavigate();
    const navigateToPage = (path) =>{
        navigate(path)
    }


    function trazerInfo(){
        api.get(`/campanhas/${id}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
          )
          .then((respostaObtida) => {
              console.log(respostaObtida)
              setVisualizacao(respostaObtida.data.visulizacoes)
              setNomeProjeto(respostaObtida.data.nome)
              setMeta(respostaObtida.data.financeiroCampanha.valorMeta)
              setArrecadado(respostaObtida.data.financeiroCampanha.valorAtingido)
              setRestante(respostaObtida.data.financeiroCampanha.valorMeta - respostaObtida.data.financeiroCampanha.valorAtingido)
          })
          .catch((erroOcorrido) => { 
             console.log(erroOcorrido);
            })
    }



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
            {isTipoConta == 0 ? <NavbarLogout /> : <Navbar />}
            <section className="spaceBtns">
                <div className="container">
                    <img className="cursor-button"
                         src={BtnVoltar}
                         alt="Circulo redondo e na cor azul com seta para esquerda ao centro"
                        onClick={() => navigateToPage(`/info-campanha/${id}`)}
                    />
                </div>
            </section>
            <div className='header'>
                <div className='headerContainer'>
                    <div className='sepElem'>
                        <h2 className='nomeProjeto'>{nomeProjeto}</h2>
                        
                    </div>
                </div>
            </div>
            <main className='main'>
                <div className='containerMain'>
                    <section className='boxSup'>
                        <h2 className='tituloResumo'>Resumo Financeiro</h2>
                        <div className='divSpan'>
                            <span className='txtDash'>Meta:</span>
                            <span className='txtDash'>R${meta}</span>
                        </div>
                        <div className='divSpan'>
                            <span className='txtDash'>Arrecadado:</span>
                            <span className='txtDash'   >R${arrecadado}</span>
                        </div>
                        <div className='divSpan'>
                            <span className='txtDash'>Restante:</span>
                            <span className='txtDash'>R${restante}</span>
                        </div>
                    </section>
                    <section className='boxSup'>
                        <h2 className='tituloResumo'>Métricas</h2>
                        <div className='divSpan'>
                            <span className='txtDash'>Doadores: 0</span>
                        </div>
                        <div className='divSpan'>
                            <span className='txtDash'>Visualizações: 0</span>
                        </div>
                    </section>
                    <section className='boxInf'>
                 
                    </section>
                </div>
            </main>
        </>
    );
}

export default Dashboard;
