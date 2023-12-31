import "./ItemPostOng.css"
import Deletar from "../../assets/icon/i-deletar.svg"
import Editar from "../../assets/icon/i-editar.svg"
import imgPost from "../../assets/img/imgPost.svg"
import CampoComentario from "../campo-comentario/CampoComentario"
import Comentario from "../comentario/Comentario"
import React, { useEffect, useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import api from "../../api/api"
function ItemPostOng({titulo, postId, data, conteudo, urlImg}){

    var token = localStorage.getItem("token")

    function deletar(id){
        api.delete(`/posts/${id}`, {
            headers: {
                Authorization : `Bearer ${token}`,
            },
        }).then((res) => {
            window.location.reload();
        }).catch((erro) => {
            console.log(erro)
        })
    }


    const [showModal, setShowModal] = useState(false);
    const handleShowModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    const [tituloEditado, setTituloEditado] = useState('')
    const [conteudoEditado, setConteudoEditado] = useState('')

    const handleChangeTitulo = (e) => {
        setTituloEditado(e.target.value)
        console.log(titulo)
      };

      const handleChangeConteudo = (e) => {
        setConteudoEditado(e.target.value)
        console.log(titulo)
      };

    function editarPost(id){
        console.log("editando")
        var postEditado = {
          titulo: tituloEditado, 
          conteudo: conteudoEditado
        }
        console.log(postEditado)
    
        api.put(`/posts/${id}`, postEditado, {
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
            <div className="cardPost">
                <div className="headerCard">
                    <div className="tituloPost">

                        <h2>
                        {titulo}
                        </h2>
                        {isTipoConta == 0 || isTipoConta == 1 ? null : <img src={Editar} id="btnEditar" className="btnEditar" alt="Botão azul em forma quadrada com pontas arredondadas e icone de lápis ao centro" onClick={handleShowModal} />
                        }
                        <Modal
                            show={showModal}
                            onHide={handleCloseModal}
                            centered
                            style={{width: '100%'}}
                        >
                            <Modal.Header closeButton>
                                <Modal.Title>Editar Publicação</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Form>
                                    <Form.Group controlId="formDescricao">
                                        <Form.Label style={{ fontWeight: 700 }}>Descrição da Publicação</Form.Label>
                                        <Form.Control onChange={handleChangeConteudo} as="textarea" rows={3} placeholder="Digite a descrição..." />
                                    </Form.Group>

                                    <Form.Group controlId="formUrlImagem">
                                        <Form.Label style={{ fontWeight: 700 }}>URL da Imagem</Form.Label>
                                        <Form.Control onChange={handleChangeTitulo} type="text" placeholder="Digite a URL da imagem..." />
                                    </Form.Group>
                                </Form> 
                            </Modal.Body>
                            <Modal.Footer style={{ justifyContent: 'center' }}>
                            <Button variant="primary" onClick={editarPost} style={{ borderRadius: '20px', width: '150px', display: 'flex', justifyContent: 'center'}}>
                                    Salvar
                                </Button>
                            </Modal.Footer>
                        </Modal>

                        {isTipoConta == 0 || isTipoConta == 1 ? null : <img src={Deletar} id="btnDeletar" onClick={() => deletar(postId)} className="btnDeletar" alt="Botão vermelho em forma quadrada com pontas arredondadas e icone de 'X' ao centro" />
 }
                        
                    </div>
                    <span>{data}</span>
                </div>
                <p className="txtPublicacao">{conteudo}</p>
                <img src={urlImg} className="imgPost" alt="" />
                {/* <CampoComentario />
                <Comentario />
                <Comentario /> */}
            </div>
        </>
    )
}

export default ItemPostOng