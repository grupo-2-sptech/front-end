import "./CardVoluntariado.css"
import Voluntarios from "../../assets/img/imgvoluntariado.svg"
import Info from "../../assets/icon/i-info.svg"
import Coracao from "../../assets/icon/btn-heart.svg"
import Next from "../../assets/icon/btn-next.svg"
import Back from "../../assets/icon/btn-back.svg"
import Seta from "../../assets/icon/i-setabottom.svg"
import iDeletar from "../../assets/icon/i-deletar.svg"
import iEditar from "../../assets/icon/i-editar.svg"

function CardVoluntariado(){

    function mostrarInformacoes(){
        var img = document.getElementById("imgVaga");
        var qtd = document.getElementById("qtdVaga")
        var local = document.getElementById("localVaga")
        var data = document.getElementById("dataVaga")
        var frase = document.getElementById("fraseVaga")
        var btnSeta = document.getElementById("iconBtnSeta")
        var btnInfo = document.getElementById("iconBtnInfo")
        img.style.display = 'none'
        btnInfo.style.display = 'none'
        qtd.style.display = 'block'
        local.style.display = 'block'
        data.style.display = 'block'
        frase.style.display = 'block'
        btnSeta.style.display = 'block'

    }
    function mostrarMenos(){
        var img = document.getElementById("imgVaga");
        var qtd = document.getElementById("qtdVaga")
        var local = document.getElementById("localVaga")
        var data = document.getElementById("dataVaga")
        var frase = document.getElementById("fraseVaga")
        var btnSeta = document.getElementById("iconBtnSeta")
        var btnInfo = document.getElementById("iconBtnInfo")
        img.style.display = 'block'
        btnInfo.style.display = 'block'
        qtd.style.display = 'none'
        local.style.display = 'none'
        data.style.display = 'none'
        frase.style.display = 'none'
        btnSeta.style.display = 'none'

    }

    return(
        <>
            <div className="card-voluntariado p-16">
                <div className="d-flex icon-gerenciar-missao w-100">
                <img src={iDeletar} alt="Ícone com uma lixeira" className="margin-right-10px cursor-pointer w-30px" />
                <img src={iEditar} alt="Ícone com um lápis" className="w-30px cursor-pointer" />
                </div>
                <img src={Voluntarios} alt="" id="imgVaga" className="img-vaga"/>
                    <div className="tituloCard">
                        <h2 className="tituloVaga">Amigo que faz - Cozinheira</h2>
                        <img src={Seta} id="iconBtnSeta" className="btnSeta" alt="Seta apontando para baixo" onClick={mostrarMenos} />
                        <img src={Info} id="iconBtnInfo" className="btnInfo" alt="Botão redondo com letra 'i' centralizada ao meio" onClick={mostrarInformacoes} />
                    </div>
                    <div className="infoVaga">
                        <p className="txtDescricao">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                        <p id="qtdVaga" className="detalheVaga">Quantidade de vagas: <span>10</span></p>
                        <p id="localVaga" className="detalheVaga">Local: <span>São Paulo</span></p>
                        <p id="dataVaga" className="detalheVaga">Data: <span>27/11/2023</span> - <span>14:00</span></p>
                        <p id="fraseVaga" className="fraseGuia">Clique no coração e entre em contato com a ong</p>
                    </div>
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