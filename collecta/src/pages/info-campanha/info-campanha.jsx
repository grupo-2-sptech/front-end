import Navbar from "../../components/navbar/Navbar.jsx";
import ItemPostOng from "../../components/item-post/ItemPostOng";
import Textarea from "../../components/textarea-feed/Textarea";

import "../../../styles/global.css";
import iMissao from "../../assets/icon/i-missao.svg";
import iDashboard from "../../assets/icon/i-dashboard.svg";
import iLocalizacao from "../../assets/icon/i-localizacao.svg";
import iCategoria from "../../assets/icon/i-categoria.svg";
import iRecorrente from "../../assets/icon/i-recorrente.svg";
import iFace from "../../assets/icon/i-face.svg";
import iTwitter from "../../assets/icon/i-twitter.svg";
import iInstagram from "../../assets/icon/i-instagram.svg";
import iEdit from "../../assets/icon/i-edit.svg";

import { Modal, Button, Form } from "react-bootstrap";

import api from "../../api/api";
import Footer from "../../components/footer/Footer";
import  React, { useEffect, useState } from 'react';
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import "./info-campanha.css";
import NavbarLogout from "../../components/navbar/NavbarLogout.jsx";


function InfoCampanha() {
  var token = localStorage.getItem('token');
  const [esconderComponente, setEsconderComponente] = useState(false);
  const [isTipoConta, setIsTipoConta] = useState(0);
  
  const conta = localStorage.getItem('tipoConta'); 
  function buscarTipoConta() {
    if (conta == 'DOADOR') {
      setIsTipoConta(1);
    } else if (conta == 'ORGANIZACAO') {
      setIsTipoConta(2);
    }
  }

  
  

  const navigate = useNavigate();
  const navigateToPage = (path) =>{
      navigate(path)
  }

  // função para copiar url em um botão

    const [url, setUrl] = useState(window.location.href);
  
    const copiarParaAreaDeTransferencia = async () => {
      try {
        await navigator.clipboard.writeText(url);
      } catch (err) {
        console.error('Erro ao copiar para a área de transferência:', err);
      }
    };
  



  // pegando os dados da campanha
  const { id } = useParams();


  api.get(`/campanhas/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  )
  .then((respostaObtida) => {
    atualizarInfo(respostaObtida.data);
    // setDataInicio(respostaObtida.data.dataInicio)
    // setStatusCampanha(respostaObtida.data.statusCampanha)
  })
  .catch((erroOcorrido) => { 
     console.log(erroOcorrido);
    })

const [progresso, setProgresso] = useState(0);
const [urlImg, setUrlImg] = useState('');
    function atualizarInfo(respostaObtida){
        var porcentagem = (respostaObtida.financeiroCampanha.valorAtingido * 100) / respostaObtida.financeiroCampanha.valorMeta;
        var titulo = document.getElementById("tituloCampanha")
        var categoria = document.getElementById("descricaoCampanha")
        var descricao = document.getElementById("descricaoProjeto")
        var respCamp = document.getElementById("responsavelCampanha")
        var valorMeta = document.getElementById("valorMeta")
        var valorArrecadado = document.getElementById("valorArrecadado")
        var porcentagemAtual = document.getElementById("porcentagemAtual")
        var tipoCampanha = document.getElementById("tipoCampanha")
        
        titulo.innerHTML = respostaObtida.nome;
        tipoCampanha.innerHTML = respostaObtida.tipoCampanha;
        categoria.innerHTML = respostaObtida.categoriaCampanha;
        descricao.innerHTML = respostaObtida.descricao;
        respCamp.innerHTML = respostaObtida.organizacao.nomeFantasia;
        valorMeta.innerHTML = respostaObtida.financeiroCampanha.valorMeta;
        valorArrecadado.innerHTML = respostaObtida.financeiroCampanha.valorAtingido;
        porcentagemAtual.innerHTML = porcentagem;
        setProgresso(porcentagem)
        setUrlImg(respostaObtida.urlImagem)
      }

// renderizando posts no feed
const [posts, setPosts] = useState([]);

useEffect(() => {
  listar();
  buscarTipoConta();
  }, []);

  function listar() {
    api.get(`/posts/campanha/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
    )
    .then((respostaObtida) => {
      setPosts(respostaObtida.data)

 
    })
    .catch((erroOcorrido) => { 
     console.log(erroOcorrido);
    })
  }

  // conversão de data 

  function formatarData(dataString) {
    const data = new Date(dataString);
  
    const options = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    };
  
    return new Intl.DateTimeFormat('pt-BR', options).format(data);
  }

  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  // edição de campanha modal
  

  const [titulo, setTitulo] = useState('')
  const [descricao, setDescricao] = useState('')
  const [categoria, setCategoria] = useState('')
  const [dataFim, setDataFim] = useState('')
  const [dataInicio, setDataInicio] = useState('')
  const [tipoCampanha, setTipoCampanha] = useState('')
  const [statusCampanha, setStatusCampanha] = useState('')



  const handleChangeTitulo = (e) => {
    setTitulo(e.target.value)
    console.log(titulo)
  };

  const handleChangeDescricao = (e) => {
    setDescricao(e.target.value)
    console.log(descricao)
  };

  const handleChangeCategoria = (e) => {
    setCategoria(e.target.value)
    console.log(categoria)
  };

  const handleChangeDataFim = (e) => {
    setDataFim(e.target.value)
    console.log(dataFim)
  };
  const handleChangeTipoCampanha = (e) => {
    setTipoCampanha(e.target.value)
  
  };

  // endpoint de edição

  function editarCampanha(){
    console.log("editando")
    var campanhaEditada = {
      nome: titulo, 
      descricao: descricao,
      categoriaCampanha: categoria,
      dataFim: dataFim + "T23:59:00",
      tipoCampanha: tipoCampanha,
      statusCampanha: statusCampanha,
      dataInicio: dataInicio
    }
    console.log(campanhaEditada)

    api.put(`/campanhas/${id}`, campanhaEditada, {
      headers: {
        Authorization: `Bearer ${token}`
      },
    }).then((res) => {
      alert("editou")
      handleCloseModal()
    }).catch((erro) => {
      console.log(erro)
    })

  }

  
  function deletarCampanha(id){
    api.delete(`/campanhas/${id}`, {
        headers: {
            Authorization : `Bearer ${token}`,
        },
    }).then((res) => {
        navigateToPage("/");
    }).catch((erro) => {
        console.log(erro)
    })
  }

  return (
    <>
      {isTipoConta == 0 ? <NavbarLogout /> : <Navbar />}
      <div className="hero-campanha mmb-60">
        <div className="meu-container">
          <div className="head-campanha d-flex w-100 jc-between ai-center mt-64">
          {isTipoConta == 0 || isTipoConta == 1 ? null: <button style={{ display: esconderComponente ? 'none' : 'block' }}  onClick={() => navigateToPage(`/criar-missao/${id}`)} className="btn-campanha-adm d-flex jc-center ai-center br-5 border-none border-outline bg-white mr-32">
              <span>
                <img src={iMissao} />
              </span>
              <span className="body-medium ml-16">Gerenciar missões</span>
            </button>}
            
            <div className="titulo-info-campanha d-flex fd-column ai-center jc-center w-100">
              <div
                id="tituloCampanha"
                className="w-100 text-align-center head-medium color-haiti"
              >
                campanha - SP
              </div>
              <div
                
                className="w-100 text-align-center body-xlarge color-haiti"
              >
                por <span id="responsavelCampanha">Ação de Rua</span>
              </div>
            </div>
            {isTipoConta == 0 || isTipoConta == 1 ? null : <button onClick={() => navigateToPage(`/dashboard/${id}`)}  className="btn-campanha-adm d-flex jc-center ai-center br-5 border-none border-outline bg-white ml-32">
              <img src={iDashboard} />
              <span className="body-medium ml-16">Dashboard</span>
            </button>}
            
          </div>
        </div>
        <div className="meu-container mt-56">
          <div className="d-flex jc-between">
            <div className="info-campanha">
              <div className="meu-container container-imagem">
                <div className="thumb-campanha-container d-flex jc-center">
                  <img src={urlImg} className="thumb-campanha" />
                </div>
              </div>
            </div>

            <div className="d-flex jc-between fd-column">
              <div className="cards-campanha bg-white p-16 color-haiti mmb-8 br-5 border-outline">
                <div className="head-medium d-flex jc-between">
                  <span>
                  <span>R$ </span>
                  <span id="valorArrecadado">9.999</span>
                  <span className="body-large"> Arrecadado</span>
                  </span>
                  <span>
                  {isTipoConta == 0 || isTipoConta == 1 ? null : <span className="btn-edit d-flex ai-center">
                      <img
                        src={iEdit}
                        className="icon-editar"
                        onClick={handleShowModal}
                      />
                    </span> }
                    
                    <Modal
                      show={showModal}
                      onHide={handleCloseModal}
                      centered
                      size="lg"
                    >
                      <Modal.Header closeButton>
                        <Modal.Title>Editar Campanha</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <Form>
                          <Form.Group controlId="formTitulo">
                            <Form.Label style={{ fontWeight: 700 }}>
                              Título da campanha
                            </Form.Label>
                            <Form.Control 
                            type="text"
                            name="titulo"
                            // value={titulo}
                            onChange={handleChangeTitulo}
                            />
                          </Form.Group>

                          <Form.Group controlId="formDescricao">
                            <Form.Label style={{ fontWeight: 700 }}>
                              Descrição da campanha
                            </Form.Label>
                            <Form.Control
                              as="textarea"
                              rows={3}
                              name="descricao"
                              onChange={handleChangeDescricao}
                              />
                          </Form.Group>

                          <Form.Group controlId="formUrlImagem">
                            <Form.Label style={{ fontWeight: 700 }}>
                              Tipo da Campanha
                            </Form.Label>
                            <Form.Control
                            type="text"
                            name="tipoCampanha"
                            onChange={handleChangeTipoCampanha}
                            />
                          </Form.Group>

                          <Form.Group controlId="formCategoria">
                            <Form.Label style={{ fontWeight: 700 }}>
                              Categoria da campanha
                            </Form.Label>
                            <Form.Control 
                              type="text"
                              name="categoria"
                              // value={categoria}
                              onChange={handleChangeCategoria}
                              />
                          </Form.Group>

                          <Form.Group controlId="formUtilizacaoDinheiro">
                            <Form.Label style={{ fontWeight: 700 }}>
                              Data final da campanha
                            </Form.Label>
                            <Form.Control 
                            type="date"
                            name="dataFim"
                            onChange={handleChangeDataFim}
                            />
                          </Form.Group>
                        </Form>
                      </Modal.Body>
                      <Modal.Footer style={{ justifyContent: "center" }}>
                        <Button
                          variant="primary"
                          onClick={() => deletarCampanha(id)}
                          style={{
                            borderRadius: "20px",
                            width: "150px",
                            display: "flex",
                            justifyContent: "center",
                            backgroundColor: "#FF4545",
                            border: "none"
                          }}
                        >
                          Deletar
                        </Button>
                        <Button
                          variant="primary"
                          onClick={editarCampanha}
                          style={{
                            borderRadius: "20px",
                            width: "150px",
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          Salvar
                        </Button>
                      </Modal.Footer>
                    </Modal>
                  </span>
                </div>
                <div className="body-large mmb-22">
                  <span>Arrecadação em andamento </span>
                </div>
                <div>
                  <progress
                    className="mmb-32 card-progress-bar"
                    id="file"
                    value={progresso}
                    max="100"
                  ></progress>
                </div>
                <div className="body-large mmb-22">
                  <span id="porcentagemAtual">44</span>
                  <span>%</span>
                  <span> de R$ </span>
                  <span>R$ </span>
                  <span id="valorMeta">99.000</span>
                </div>
                <div className="mmb-22 d-flex ai-center">
                  <span>
                    <img src={iRecorrente} />
                  </span>
                  <span className="body-large ml-16">Assinatura</span>
                </div>
                <div className="color-yonder body-small">
                  Apoie esta campanha recorrentemente a cada mês
                </div>
              </div>
              <div className="container-btn-campanha d-flex jc-between">
                <button onClick={() => navigateToPage(`/pagamento/${id}`)} className="btn-campanha br-5 border-none p-32-0 head-xsmall bg-science color-white">
                  Doar
                </button>
                <button onClick={() => navigateToPage(`/voluntariado/${id}`)} className="btn-campanha br-5 border-none p-32-0 head-xsmall bg-blueberry color-white">
                  Voluntariar-se
                </button>
              </div>
            </div>
          </div>
          <div className="d-flex jc-between">
            <div>
              <div className="mt-16 d-flex">
                <span className="d-flex ai-center">
                  <img src={iLocalizacao} />
                  <span className="ml-8 body-xsmall">São Paulo - SP</span>
                </span>
                <span className="ml-32 d-flex ai-center">
                  <img src={iCategoria} />
                  <span id="tipoCampanha" className="ml-8 body-xsmall">Urbano</span>
                </span>
              </div>
              <div>
                <div className="mt-32 mmb-32">
                  <span id="descricaoCampanha" className="body-xlarge">
                    Ação de combate à fome nas ruas de São Paulo
                  </span>
                </div>
                <div>
                  <span className="body-medium">Compartilhar</span>
                  <button onClick={copiarParaAreaDeTransferencia} className="btn-copiar body-tiny bg-seashell">
                    COPIAR LINK
                  </button>
                </div>
              </div>
            </div>
            <div className="w-470 d-flex jc-between mt-60">
              <div className="icone-perfil">
                <img src={urlImg} className="img-perfil" />
              </div>
              <div>
                <div>
                  <div className="mmb-22">
                    <div>
                      <span id="responsavelCampanha" className="body-small">Ação de rua</span>
                    </div>
                    <div>
                      <span className="body-tiny">19 projetos</span>
                    </div>
                  </div>
                  <div className="d-flex jc-between w-388 ai-center">
                    <span>
                      <img src={iFace} />
                    </span>
                    <span>
                      <img src={iTwitter} />
                    </span>
                    <span>
                      <img src={iInstagram} />
                    </span>
                    <button className="btn-copiar body-tiny bg-seashell">
                      SEGUIR
                    </button>
                    <button className="btn-copiar body-tiny bg-seashell">
                      CONTATO
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="meu-container">
        <ul className="nav nav-tabs mmb-3" id="ex-with-icons" role="tablist">
          <li className="nav-item" role="presentation">
            <a
              className="nav-link active"
              id="ex-with-icons-tab-1"
              data-mdb-toggle="tab"
              href="#ex-with-icons-tabs-1"
              role="tab"
              aria-controls="ex-with-icons-tabs-1"
              aria-selected="true"
            >
              <i className="fa fa-thumb-tack icon-tab" aria-hidden="true"></i>Sobre
            </a>
          </li>
          <li className="nav-item" role="presentation">
            <a
              className="nav-link"
              id="ex-with-icons-tab-2"
              data-mdb-toggle="tab"
              href="#ex-with-icons-tabs-2"
              role="tab"
              aria-controls="ex-with-icons-tabs-2"
              aria-selected="false"
            >
              <i className="fa fa-comments icon-tab" aria-hidden="true"></i>Feed
            </a>
          </li>
          <li className="nav-item" role="presentation">
            <a
              className="nav-link"
              id="ex-with-icons-tab-3"
              data-mdb-toggle="tab"
              href="#ex-with-icons-tabs-3"
              role="tab"
              aria-controls="ex-with-icons-tabs-3"
              aria-selected="false"
            >
              <i className="fa fa-users icon-tab" aria-hidden="true"></i>Apoiadores
            </a>
          </li>
        </ul>

        <div className="tab-content" id="ex-with-icons-content">
          <div
            className="tab-pane fade show active"
            id="ex-with-icons-tabs-1"
            role="tabpanel"
            aria-labelledby="ex-with-icons-tab-1"
          >
            <div className="mt-64">
              <div className="head-xsmall mmb-32">
                <span>O projeto</span>
              </div>
              <div id="descricaoProjeto" className="body-medium">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque
                maxime quo deleniti nisi aspernatur non eveniet possimus
                delectus tenetur aliquid pariatur ipsam consequatur, sunt,
                corporis nobis nulla! Veniam quo in sequi atque minima explicabo
                nemo harum a officia! Quia voluptate amet, assumenda dolorem
                earum esse voluptatum laboriosam soluta illum non vitae natus
                deleniti maxime dolores in unde quidem nam nihil, voluptates
                iure, animi laborum molestias sed. Magni amet sed cumque facilis
                perferendis laboriosam, explicabo vel tempore quisquam suscipit
                culpa distinctio nemo eligendi obcaecati nobis, iste quas
                quibusdam illo nihil rerum. Est officiis mollitia, deleniti
                obcaecati nostrum ipsum eveniet corporis, eius iusto at incidunt
                quo quos voluptates nam commodi dolorum tenetur quis omnis non
                molestiae similique, dolor modi! Ratione fuga tenetur voluptates
                facilis. Veniam eveniet sapiente quasi possimus assumenda, ab
                non perferendis aut repudiandae fuga unde autem saepe doloribus
                minus officia quae delectus porro! Voluptatum minima totam
                doloribus? Provident aliquid molestias repellendus, dolorum
                voluptas, incidunt sint, vitae inventore iusto atque eligendi
                pariatur porro debitis? Possimus cumque, non excepturi cum,
                fugit ut soluta tempore animi voluptatem totam nulla officia
                quas! Ut aut sed facere saepe pariatur maxime quaerat sunt,
                velit, dolores in explicabo fugit vero officia esse molestiae
                voluptates! Fugiat, quaerat consequuntur?
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade campoFeed"
            id="ex-with-icons-tabs-2"
            role="tabpanel"
            aria-labelledby="ex-with-icons-tab-2"
          >
            
            {isTipoConta == 0 || isTipoConta == 1 ? null : <Textarea/> }
            {posts && posts.length > 0 ? (
                posts.map((post) => (
                  <ItemPostOng
                    key={post.id}
                    postId={post.id}
                    titulo={post.titulo}
                    nomeOng="AUmigos Leais"
                    urlImg={post.urlImagem}
                    conteudo={post.conteudo}
                    data={formatarData(post.data)}
                  />
                ))
              ) : (
                <p className="txtNoContent">Não há publicações no feed</p>
              )}
          </div>
          <div
            className="tab-pane fade"
            id="ex-with-icons-tabs-3"
            role="tabpanel"
            aria-labelledby="ex-with-icons-tab-3"
          >
            <div>
              <div className="text-align-center head-xsmall mt-32 mmb-32">
                <span>Mural de apoiadores do projeto, muito obrigado!</span>
              </div>
              <div className="d-flex jc-around">
                <div className="d-flex ai-center">
                  <div className="icone-perfil">
                    <img src={urlImg} className="img-perfil" />
                  </div>
                  <div className="ml-16">
                    <span>Nome apoiador</span>
                  </div>
                </div>
                <div className="d-flex ai-center">
                  <div className="icone-perfil">
                    <img src={urlImg} className="img-perfil" />
                  </div>
                  <div className="ml-16">
                    <span>Nome apoiador</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default InfoCampanha