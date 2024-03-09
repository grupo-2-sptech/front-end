import { useState } from "react";
import api from "../../api/api";
import Anexo from "../../assets/icon/i-anexo.svg"
import "./Textarea.css"
import { useParams } from "react-router-dom";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
function Textarea(){
    const MySwal = withReactContent(Swal)
    var token  = localStorage.getItem("token")

    const [tituloTextarea, setTituloTextarea] = useState('');
    const [conteudoTextarea, setConteudoTextarea] = useState('');
    const [urlImagem, setUrlImagem] = useState('');

    const getTitulo = (e) => {
        setTituloTextarea(e.target.value)
    }

    const getConteudo = (e) => {
        setConteudoTextarea(e.target.value)
    }

    const getUrlImagem = (e) => {
        setUrlImagem(e.target.value)
    }
    const { id } = useParams();
    function publicar(e){
        e.preventDefault();
        var dataHoje = new Date()

  
        console.log(dataHoje)

        var post = {
            titulo: tituloTextarea,
            conteudo:conteudoTextarea,
            idCampanha: id, 
            urlImagem: urlImagem
        }
        console.log(post)

        api.post("/posts", post, {
            headers : {
                Authorization : `Bearer ${token}`,
            },
        } ).then((res) => {
            window.location.reload();
        }).catch((erro) => {
            console.log(erro)
            MySwal.fire({
                title: <p>Erro ao criar post</p>,
                icon: 'error'
              })
        })
    }

    return(
        <>
        <form id="campoCriarPubli" className="campoCriarPubli">
            <textarea className="entradaTexto tituloFeed" value={tituloTextarea} onChange={getTitulo} id="entradaTextoTitulo" cols="30" rows="1" placeholder="Digite o titulo da publicação"></textarea>
            <textarea className="entradaTexto" value={conteudoTextarea} onChange={getConteudo}  id="" cols="30" rows="4" maxLength={530} placeholder="Digite um texto"></textarea>
            <div className="btnsPubli">
                <input type="text" onChange={getUrlImagem} name="urlImg" className="inputImg" id="" placeholder="Insira a url da imagem aqui" />
                <button onClick={publicar} className="btnPublicar">Publicar</button>
            </div>
        </form>
        </>
    )
}

export default Textarea