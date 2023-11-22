import Anexo from "../../assets/icon/i-anexo.svg"
import "./Textarea.css"
function Textarea(){
    return(
        <>
        <section id="campoCriarPubli" className="campoCriarPubli">
            <textarea className="entradaTexto" name="" id="" cols="30" rows="4" maxLength={530} placeholder="Digite um texto"></textarea>
            <div className="btnsPubli">
                <img src={Anexo} alt="" />
                <button className="btnPublicar">Publicar</button>
            </div>
        </section>
        </>
    )
}

export default Textarea