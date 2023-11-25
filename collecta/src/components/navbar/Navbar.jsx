// import React from "react";
import Logo from "../../assets/logo/logo-collecta.png";
import Perfil from "../../assets/img/perfil.png";
import "../../components/navbar/navbar.css";

import { Link } from "react-router-dom";

function Navbar() {
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
              <Link to={"/segundaPagina"}>
                <section className="header-item body-small d-flex ai-center">
                  <span className="color-white">Criar campanha</span>
                </section>
              </Link>
              <Link to={"/explorar"}>
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
                  <img src={Perfil} alt="" className="img-perfil" />
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
