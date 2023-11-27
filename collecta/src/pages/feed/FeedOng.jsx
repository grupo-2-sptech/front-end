import CampoFiltrar from "../../components/barra-voltar-filtrar/CampoFiltrar.jsx"
import NavBar from "../../components/navbar/Navbar.jsx"
import "./FeedOng.css"
import Anexo from "../../assets/icon/i-anexo.svg"
import ItemPostOng from "../../components/item-post/ItemPostOng.jsx"

function FeedOng(){
    return(
        <>
            <NavBar/>
            <CampoFiltrar/>
            <main className="main"> 
                <section className="campoCriarPubli">
                    <textarea className="entradaTexto" name="" id="" cols="30" rows="4" maxLength={530} placeholder="Digite um texto"></textarea>
                    <div className="btnsPubli">
                        <img src={Anexo} alt="" />
                        <button className="btnPublicar">Publicar</button>
                    </div>
                </section>
                <ItemPostOng/>
            </main>
        </>
    )
}

export default FeedOng