import "./CardVoluntariado.css"
import Voluntarios from "../../assets/img/imgvoluntariado.svg"
import Info from "../../assets/icon/i-info.svg"
import Coracao from "../../assets/icon/btn-heart.svg"
import Next from "../../assets/icon/btn-next.svg"
import Back from "../../assets/icon/btn-back.svg"

function CardVoluntariado(){
    return(
        <>
            <div className="card-voluntariado">
                <img src={Voluntarios} alt="" className="img-vaga"/>
                <div className="tituloCard">
                    <h2 className="tituloVaga">Amigo que faz - Cozinheira</h2>
                    <img src={Info} alt="Botão redondo com letra 'i' centralizada ao meio" />
                </div>
                <p className="txtDescricao">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <div className="buttonsCard">
                    <img src={Back} alt="Botão redondo com seta apontando para esquerda" />
                    <img src={Coracao} alt="Botão em formato de coração" />
                    <img src={Next} alt="Botão redondo com seta apontando para direita" />
                </div>
            </div>
        </>
    )
}

export default CardVoluntariado