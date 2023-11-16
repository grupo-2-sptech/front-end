
import BtnFiltrar from "../../components/btn-filtrar/BtnFiltrar"
import BtnVoltar from "../../assets/icon/i-voltar.svg"
import "./CampoFiltrar.css"

function CampoFiltrar(){
    return(
        <>
            <section className="spaceBtns">
                <div className="container">
                    <img src={BtnVoltar} alt="Circulo redondo e na cor azul com seta para esquerda ao centro" />
                    <BtnFiltrar/>
                </div>
            </section>
        </>
    )
}

export default CampoFiltrar