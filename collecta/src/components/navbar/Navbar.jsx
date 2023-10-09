// import React from "react";
import Logo from "../../assets/logo/logo-collecta.svg";
import Pacoca from "../../assets/logo/pacoca.jpg";
import "../../components/navbar/navbar.css";

function Navbar() {
  return (
    <>
    
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      
      <header>
          <div className="header-bg bg-chambray">
            <div className="container">
              <div className="header-container d-flex jc-between">
                <img
                  src={Logo}
                  alt="Logo da Collecta, a letra C e O com tons de azul"
                  className="header-logo-icon"
                />
                <section className="header-item body-small d-flex ai-center">
                  <span className="color-white">Criar campanha</span>
                </section>
                <section className="header-item body-small d-flex ai-center">
                  <span className="color-white">Explorar</span>
                </section>
                <section className="conjunto-barra-busca-projeto d-flex">
                  <section>
                    <input type="text" className="barra-busca-projetos border-ice" placeholder="Busque projetos..."/>
                  </section>
                  <button className="botao-pesquisar bg-haiti">
                  <span className="material-symbols-outlined color-white">search</span>
                  </button>
                </section>
                <section>
                  <div className="icone-perfil">
                    <img src={Pacoca} alt="" className="img-perfil"/>
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
