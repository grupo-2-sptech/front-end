import {useEffect, useRef, useState} from 'react';

import NavBar from "../../components/navbar/Navbar";
import "./Dashboard.css";
import { Navigate, useNavigate, useParams } from 'react-router';
import api from '../../api/api';
import BtnVoltar from "../../assets/icon/i-voltar.svg";

function Dashboard() {
    var token = localStorage.getItem("token")
    const [meta, setMeta] = useState('')
    const [arrecadado, setArrecadado] = useState('')
    const [restante, setRestante] = useState('')
    const [nomeProjeto, setNomeProjeto] = useState('')
    const [visualizacao, setVisualizacao] = useState('')
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

    return (
        <>
            <NavBar/>
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
                            <span>Doadores: 2</span>
                        </div>
                        <div className='divSpan'>
                            <span>Visualizações: 33</span>
                        </div>
                    </section>
                    <section className='boxInf'>
                        <h2 className='tituloBoxInf'>Últimas ações da campanha</h2>
                        <div className='divBtns'>
                            <input type='file' className='btns' placeholder='BAIXAR MODELO'/>
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
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                </tr>
                                <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                                </tr>
                                <tr>
                                <th scope="row">3</th>
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td>@twitter</td>
                                </tr>
                                <tr>
                                <th scope="row">4</th>
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td>@twitter</td>
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
