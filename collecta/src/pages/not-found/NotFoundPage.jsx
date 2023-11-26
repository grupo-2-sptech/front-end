import "./NotFoundPage.css";
import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <>
      <div className="body-nf color-haiti">
        <h1 className="h1-nf">Erro 404</h1>
        <p class="zoom-area">
          <span>A PÁGINA BUSCADA <b>NÃO FOI ENCONTRADA!</b></span>
        </p>
        <section class="error-container">
          <span>4</span>
          <span>
            <span class="screen-reader-text">0</span>
          </span>
          <span>4</span>
        </section>
        <div class="link-container">
            <Link to={"/"}>
          <span className="color-science">
            Voltar para a página inicial
            </span>
            </Link>
        </div>
      </div>
    </>
  );
}

export default NotFoundPage;
