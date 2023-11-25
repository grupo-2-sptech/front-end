import "./CampoComentario.css"
import Perfil from "../../assets/img/perfil.png"
import { useState } from "react"
import api from "../../api/api"

function CampoComentario(){
    var token = localStorage.getItem("token")
    const [comentario, setComentario] = useState('')
    var data = new Date();

    const getComentario = (e) => {
        setComentario(e.target.value)
    }

    var corpo = {
        comentario: comentario,
        data: data
    }

    function comentar(){
        api.post("/comentarios/organizacoes", corpo, {
            headers:{
                Authorization : `Bearer ${token}`
            }
        }).then((res) => {
            console.log(res)
        }).catch((erro) => {
            console.log(erro)
        })
    }


    return(
        <>
            <div className="campoComentario">
                <img src={Perfil} alt="" />
                <div className="campoInput">
                    <input onChange={getComentario} className="inputComentario" type="text" placeholder="Faça um comentário"/>    
                    <button onClick={comentar} className="btnComentario">Comentar</button>
                </div>    
            </div>
        </>
    )
}

export default CampoComentario