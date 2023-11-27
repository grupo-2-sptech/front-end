
import BtnFiltrar from "../../components/btn-filtrar/BtnFiltrar"
import BtnVoltar from "../../assets/icon/i-voltar.svg"
import "./CampoFiltrar.css"
import { useNavigate } from "react-router";

function CampoFiltrar(){
    const navigate = useNavigate();
    const navigateToPage = (path) =>{
        navigate(path)
    }
    return(
        <>
            <section className="spaceBtns">
                <div className="container">
                    <img src={BtnVoltar} onClick={navigateToPage(-1)} alt="Circulo redondo e na cor azul com seta para esquerda ao centro" />
                    <BtnFiltrar/>
                </div>
            </section>
        </>
    )
}

export default CampoFiltrar