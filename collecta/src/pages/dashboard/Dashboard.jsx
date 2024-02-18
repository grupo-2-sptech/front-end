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

    trazerInfo()

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
                        
                    />
                </div>
            </section>
            <div className='header'>
                <div className='headerContainer'>
                    <div className='sepElem'>
                        <h2 className='nomeProjeto'>{nomeProjeto}</h2>
                        <button className='btnGerarRelatorio'>Gerar relatório</button>
                    </div>
                </div>
            </div>
            <main className='main'>
                <div className='containerMain'>
                    <section className='boxSup'>
                        <h2 className='tituloResumo'>Resumo Financeiro</h2>
                        <div className='divSpan'>
                            <span>Meta:</span>
                            <span>R${meta}</span>
                        </div>
                        <div className='divSpan'>
                            <span>Arrecadado:</span>
                            <span>R${arrecadado}</span>
                        </div>
                        <div className='divSpan'>
                            <span>Restante:</span>
                            <span>R${restante}</span>
                        </div>
                    </section>
                    <section className='boxSup'>
                        <h2 className='tituloResumo'>Métricas</h2>
                        <div className='divSpan'>
                            <span>Doadores: 0</span>
                        </div>
                        <div className='divSpan'>
                            <span>Visualizações: 1</span>
                        </div>
                    </section>
                    <section className='boxInf'>
                        <h2 className='tituloBoxInf'>Últimas ações da campanha</h2>
                        <div className='divBtns'>
                            <button type='file' className='btns' >BAIXAR MODELO</button>
                            <button className='btns'>IMPORTAR .TXT</button>
                        </div>
                        <div className='tabela'>
                            <table className="table">
                            <thead>
                                <tr>
                                <th scope="col">Nome</th>
                                <th scope="col">Descrição</th>
                                <th scope="col">Data</th>
                                <th scope="col">Valor</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <th   id='rowPlanilha' scope="row">Alimentação</th>
                                <td id='rowPlanilha'>Entrega de marmitas</td>
                                <td id='rowPlanilha'>11/11/2023</td>
                                <td id='rowPlanilha'>R$2.000,00</td>
                                </tr>
                                <tr>
                                <th id='rowPlanilha' scope="row">Ajuda</th>
                                <td id='rowPlanilha'>Ajuda humanitaria</td>
                                <td id='rowPlanilha'>12/10/2023</td>
                                <td id='rowPlanilha'>R$100,00</td>
                                </tr>
                                <tr>
                                <th id='rowPlanilha' scope="row">Vestuario</th>
                                <td id='rowPlanilha'>Roupas de frio para moradores de rua</td>
                                <td id='rowPlanilha'>10/09/20203</td>
                                <td id='rowPlanilha'>R$700,00</td>
                                </tr>
                                <tr>
                                <th id='rowPlanilha' scope="row">Cesta básica</th>
                                <td id='rowPlanilha'>Entregues na favela do jacarezinho</td>
                                <td id='rowPlanilha'>26/11/2023</td>
                                <td id='rowPlanilha'>R$500,00</td>
                                </tr>
                            </tbody>
                            </table>
                        </div>
                    </section>
                </div>
            </main>
        </>
    );
}

export default Dashboard;
