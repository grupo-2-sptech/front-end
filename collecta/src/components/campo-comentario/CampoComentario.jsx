import "./CampoComentario.css"
import Perfil from "../../assets/img/perfil.png"

function CampoComentario(){
    return(
        <>
            <div className="campoComentario">
                <img src={Perfil} alt="" />
                <div className="campoInput">
                    <input className="inputComentario" type="text" placeholder="Faça um comentário"/>    
                    <button className="btnComentario">Comentar</button>
                </div>    
            </div>
        </>
    )
}

export default CampoComentario