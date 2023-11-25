import "./ItemPostOng.css"
import Deletar from "../../assets/icon/i-deletar.svg"
import Editar from "../../assets/icon/i-editar.svg"
import imgPost from "../../assets/img/imgPost.svg"
import CampoComentario from "../campo-comentario/CampoComentario"
import Comentario from "../comentario/Comentario"
import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function ItemPostOng() {
    const [showModal, setShowModal] = useState(false);
    const handleShowModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    return (
        <>
            <div className="cardPost">
                <div className="headerCard">
                    <div className="tituloPost">
                        <h2>Nome da ong</h2>

                        <img src={Editar} className="btnEditar" alt="" onClick={handleShowModal} />
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
                                        <Form.Control as="textarea" rows={3} placeholder="Digite a descrição..." />
                                    </Form.Group>

                                    <Form.Group controlId="formUrlImagem">
                                        <Form.Label style={{ fontWeight: 700 }}>URL da Imagem</Form.Label>
                                        <Form.Control type="text" placeholder="Digite a URL da imagem..." />
                                    </Form.Group>
                                </Form>
                            </Modal.Body>
                            <Modal.Footer style={{ justifyContent: 'center' }}>
                            <Button variant="primary" onClick={handleCloseModal} style={{ borderRadius: '20px', width: '150px', display: 'flex', justifyContent: 'center'}}>
                                    Salvar
                                </Button>
                            </Modal.Footer>
                        </Modal>


                        <img src={Deletar} className="btnDeletar" alt="" />
                    </div>
                    <span>25/10/2025</span>
                </div>
                <p className="txtPublicacao">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <img src={imgPost} className="imgPost" alt="" />
                <CampoComentario />
                <Comentario />
                <Comentario />
            </div>
        </>
    )
}

export default ItemPostOng