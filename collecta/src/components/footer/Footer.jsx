import logoNome from "../../assets/logo/logo-collectiva-branco.png"

function Footer(){
    return(
        <>
        <footer className="footer bg-chambray mt-128 d-flex jc-center ai-center">
            <img src={logoNome} className="logo-nome-collectiva" />
        </footer>
        </>
    )
}

export default Footer