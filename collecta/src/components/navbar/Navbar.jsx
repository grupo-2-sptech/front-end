// import React from "react";
import Logo from "../../assets/logo/logo-collecta.png";
import Perfil from "../../assets/img/perfil.png";
import "../../components/navbar/Navbar.css";
import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";

function Navbar() {
  const [isTipoConta, setIsTipoConta] = useState(0);

  const conta = localStorage.getItem("tipoConta");
  function buscarTipoConta() {
    if (conta == "DOADOR") {
      setIsTipoConta(1);
    } else if (conta == "ORGANIZACAO") {
        setIsTipoConta(2);
    }
  }

  useEffect(() => {
    buscarTipoConta();
  }, []);
  const navigate = useNavigate();
  function sair() {
    handleCloseModal();
    localStorage.clear();
    navigate("/");
    location.reload();
  }
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
      />

      <header>
        <div className="header-bg bg-chambray">
          <div className="meu-container">
            <div className="header-container d-flex jc-between">
              <Link to="/">
                <img
                  src={Logo}
                  alt="Logo da Collecta, a letra C e O com tons de azul"
                  className="header-logo-icon"
                />
              </Link>
              <div className="dropdown">
              {isTipoConta == 2 ? <button
                  className="bg-ice dropdown-toggle border-none br-5 p-8"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Criar campanha
                </button> : null}
                
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <Link className="dropdown-item" to={"/criar-campanha"}>
                    Pontual
                  </Link>
                  <Link className="dropdown-item" to={"/criar-campanha-recorrente"}>
                    Recorrente
                  </Link>
                </div>
              </div>
              <Link to={"/explorar"} className="link-sem-decoracao">
                <section className="header-item body-small d-flex ai-center">
                  <span className="color-white">Explorar</span>
                </section>
              </Link>
              <section className="conjunto-barra-busca-projeto d-flex">
                <section>
                  <input
                    type="text"
                    className="barra-busca-projetos border-ice"
                    placeholder="Busque projetos..."
                  />
                </section>
                <button className="botao-pesquisar bg-haiti">
                  <span className="material-symbols-outlined color-white">
                    search
                  </span>
                </button>
              </section>
              <section>
                <div className="icone-perfil">
                  <img
                    src={Perfil}
                    alt=""
                    className="img-perfil"
                    onClick={handleShowModal}
                  />
                  <Modal
                    show={showModal}
                    onHide={handleCloseModal}
                    centered
                    size="sm"
                    style={{
                      display: "flex",
                      alignItems: "center"
                    }}
                  >
                    <Modal.Header closeButton>
                      <Modal.Title>Perfil</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          marginTop: "20px",
                        }}
                      >
                        <Button
                          variant="danger"
                          onClick={sair}
                          style={{
                            borderRadius: "20px",
                            width: "150px",
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          Sair
                        </Button>
                      </div>
                    </Modal.Body>
                  </Modal>
                </div>
              </section>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
export default Navbar;
