import { useState } from "react";
import api from "../../api/api";
import Anexo from "../../assets/icon/i-anexo.svg"
import "./Textarea.css"
function Textarea(){

    var token  = localStorage.getItem("token")

    const [tituloTextarea, setTituloTextarea] = useState('');
    const [conteudoTextarea, setConteudoTextarea] = useState('');

    const getTitulo = (e) => {
        setTituloTextarea(e.target.value)
    }

    const getConteudo = (e) => {
        setConteudoTextarea(e.target.value)
    }

    function publicar(e){
        e.preventDefault();
        var dataHoje = new Date()

  
        console.log(dataHoje)

        var post = {
            titulo: tituloTextarea,
            conteudo:conteudoTextarea,
            data: dataHoje
        }

        api.post("/posts", post, {
            headers : {
                Authorization : `Bearer ${token}`,
            },
        } ).then((res) => {
            window.location.reload();
        }).catch((erro) => {
            console.log(erro)
        })
    }

    return(
        <>
        <form id="campoCriarPubli" className="campoCriarPubli">
            <textarea className="entradaTexto titulo" value={tituloTextarea} onChange={getTitulo} id="entradaTextoTitulo" cols="30" rows="1" placeholder="Digite o titulo da publicação"></textarea>
            <textarea className="entradaTexto" value={conteudoTextarea} onChange={getConteudo}  id="" cols="30" rows="4" maxLength={530} placeholder="Digite um texto"></textarea>
            <div className="btnsPubli">
                <img src={Anexo} alt="" />
                <button onClick={publicar} className="btnPublicar">Publicar</button>
            </div>
        </form>
        </>
    )
}

export default Textarea