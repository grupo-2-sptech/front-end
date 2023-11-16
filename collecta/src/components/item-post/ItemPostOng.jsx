import "./ItemPostOng.css"
import Deletar from "../../assets/icon/i-deletar.svg"
import Editar from "../../assets/icon/i-editar.svg"
import imgPost from "../../assets/img/imgPost.svg"
import CampoComentario from "../campo-comentario/CampoComentario"
import Comentario from "../comentario/Comentario"
function ItemPostOng(){
    return(
        <>
            <div className="cardPost">
                <div className="headerCard">
                    <div className="tituloPost">
                        <h2>Nome da ong</h2>
                        <img src={Editar} className="btnEditar" alt="" />
                        <img src={Deletar} className="btnDeletar" alt="" />
                    </div>
                    <span>25/10/2025</span>
                </div>
                <p className="txtPublicacao">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <img src={imgPost} className="imgPost" alt="" />
                <CampoComentario/>
                <Comentario />
                <Comentario />
            </div>
        </>
    )
}

export default ItemPostOng