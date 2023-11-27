// import React from "react";
import Logo from "../../assets/logo/logo-collecta.png";
import "../../components/navbar/Navbar.css";
import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";

function NavbarLogout() {
  const [isTipoConta, setIsTipoConta] = useState(false);
  
  const conta = localStorage.getItem('tipoConta'); 
  function buscarTipoConta() {
    if (conta == 'DOADOR') {
      setIsTipoConta(true);
    }
  }

  useEffect(() => {
    buscarTipoConta();
  }, []); 

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
            <Link to={"/explorar"} className="link-sem-decoracao">
                <section className="header-item body-small d-flex ai-center">
                    <Link to="/explorar">
                      <span className="color-white">Explorar</span>
                    </Link>
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
              <Link to={"/login"}>
              <section>
                <button className="bg-ice body-medium border-none p-8-32 br-5 cursor-pointer">ENTRAR</button>
              </section>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
export default NavbarLogout;
