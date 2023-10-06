import { useState } from "react";
import "../styles/global.css";
import "./components/navbar/navbar.css";
import Logo from "./assets/logo/logo-collecta.svg";
import Pacoca from "./assets/logo/pacoca.jpg"
// import './App.css'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      <body>
        <header>
          <div className="header-bg">
            <div className="container">
              <div className="header-container d-flex jc-between">
                <img
                  src={Logo}
                  alt="Logo da Collecta, a letra C e O com tons de azul"
                />
                <section className="header-item body-medium-bold d-flex ai-center">
                  <span className="color-white">Criar campanha</span>
                </section>
                <section className="header-item body-medium-bold d-flex ai-center">
                  <span className="color-white">Explorar</span>
                </section>
                <section className="conjunto-barra-busca-projeto d-flex">
                  <section>
                    <input type="text" className="barra-busca-projetos" placeholder="Busque projetos..."/>
                  </section>
                  <button className="botao-pesquisar">
                  <span class="material-symbols-outlined color-white">search</span>
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
      </body>
    </>
  );
}

export default App;
