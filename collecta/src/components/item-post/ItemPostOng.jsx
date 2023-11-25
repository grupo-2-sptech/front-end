import "./ItemPostOng.css"
import Deletar from "../../assets/icon/i-deletar.svg"
import Editar from "../../assets/icon/i-editar.svg"
import imgPost from "../../assets/img/imgPost.svg"
import CampoComentario from "../campo-comentario/CampoComentario"
import Comentario from "../comentario/Comentario"
import api from "../../api/api"
function ItemPostOng({titulo, postId, data, conteudo}){

    var token = localStorage.getItem("token")

    function deletar(id){
        api.delete(`/posts/${id}`, {
            headers: {
                Authorization : `Bearer ${token}`,
            },
        }).then((res) => {
            window.location.reload();
        }).catch((erro) => {
            console.log(erro)
        })
    }
    
    return(
        <>
            <div className="cardPost">
                <div className="headerCard">
                    <div className="tituloPost">
                        <h2>
                        {titulo}
                        </h2>
                        <img src={Editar} id="btnEditar" className="btnEditar" alt="Botão azul em forma quadrada com pontas arredondadas e icone de lápis ao centro" />
                        <img src={Deletar} id="btnDeletar" onClick={() => deletar(postId)} className="btnDeletar" alt="Botão vermelho em forma quadrada com pontas arredondadas e icone de 'X' ao centro" />
                    </div>
                    <span>{data}</span>
                </div>
                <p className="txtPublicacao">{conteudo}</p>
                <img src={imgPost} className="imgPost" alt="" />
                <CampoComentario/>
                <Comentario />
                <Comentario />
            </div>
        </>
    )
}

export default ItemPostOng