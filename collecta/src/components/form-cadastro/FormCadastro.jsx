import Cadeado from "../../assets/cadastro/cadeado.svg"
import Personagem from "../../assets/cadastro/personagem.svg"
import LinhaTracejada from "../../assets/cadastro/linha-tracejada.svg"
import IconInfo from "../../assets/cadastro/info.svg"
import InputCadastro from "../input-cadastro/InputCadastro"
import IconGoogle from "../../assets/cadastro/IconGoogle.svg"



import "./FormCadastro.css"

function FormCadastro(){

    function avancarCadastro(){
        var nome = document.getElementById("inputNome")
        var email = document.getElementById("inputEmail")
        var cpfCnpj = document.getElementById("inputCpfCnpj")
        var cep = document.getElementById("inputCep")
        var senha = document.getElementById("inputSenha")
        var confirmarSenha = document.getElementById("inputConfirmarSenha")
        var btnAvancar = document.getElementById("botaoAvancar")
        var btnAnterior = document.getElementById("botaoAnterior")
        var btnCadastrar = document.getElementById("botaoCadastrar")
        var numeroEtapa = document.getElementById("etapa")
        nome.style.display = 'none'
        email.style.display = 'none'
        cpfCnpj.style.display = 'none'
        cep.style.display = 'block'
        senha.style.display = 'block'
        confirmarSenha.style.display = 'block'
        btnAvancar.style.display = 'none'
        btnAnterior.style.display = 'block'
        btnCadastrar.style.display = 'block'
        numeroEtapa.innerHTML = "2"
    }

    function voltarAcao(){
        var nome = document.getElementById("inputNome")
        var email = document.getElementById("inputEmail")
        var cpfCnpj = document.getElementById("inputCpfCnpj")
        var cep = document.getElementById("inputCep")
        var senha = document.getElementById("inputSenha")
        var confirmarSenha = document.getElementById("inputConfirmarSenha")
        var btnAvancar = document.getElementById("botaoAvancar")
        var btnAnterior = document.getElementById("botaoAnterior")
        var btnCadastrar = document.getElementById("botaoCadastrar")
        var numeroEtapa = document.getElementById("etapa")
        nome.style.display = 'block'
        email.style.display = 'block'
        cpfCnpj.style.display = 'block'
        cep.style.display = 'none'
        senha.style.display = 'none'
        confirmarSenha.style.display = 'none'
        btnAvancar.style.display = 'block'
        btnAnterior.style.display = 'none'
        btnCadastrar.style.display = 'none'
        numeroEtapa.innerHTML = "1"
    }

    return(
        <>
        <section className="formularioCadastro">
        <img src={Cadeado} className="imgCadeado" alt="Imagem de um cadeado conectado com icones de documento, configuração e compartilhamento" />
                 
        <img src={Personagem} className="imgPersonagem" alt="Imagem de uma garota branca utilizando um smartphone" />
        <img src={LinhaTracejada} className="imgLinhaTracejada" alt="Imagem de linha tracejada que percorre o fundo da tela"/>
            <div className="boxFormulario">
                <span className="txtEtapaCadastro">ETAPA <span id="etapa">1</span>/2</span>
                <h2 className="txtTituloFormulario">Cadastrar-se</h2>
                <InputCadastro id="inputNome" placeholder="Nome"/>
                <InputCadastro id="inputEmail" placeholder="Email"/>
                <InputCadastro id="inputCpfCnpj" placeholder="CPF ou CNPJ"/>
                <InputCadastro id="inputCep" placeholder="Cep"/>
                <InputCadastro id="inputSenha" placeholder="Senha"/>
                <InputCadastro id="inputConfirmarSenha" placeholder="Confirme a senha"/>
                <div className="campoInfo">
                    <img src={IconInfo} alt="Imagem de um circulo com a letra 'i' ao centro representando a palavra 'informação'" />
                    <span className="txtInfo">Sou ONG ou pessoa fisíca?</span>
                </div>
                <div className="campoBotoes">
                <button className="btnAvancar" id="botaoAvancar" onClick={avancarCadastro}>
                    PRÓXIMO
                </button>
                <button className="btnAnterior" id="botaoAnterior" onClick={voltarAcao}>ANTERIOR</button>
                <button className="btnCadastrar" id="botaoCadastrar">CADASTRAR</button>
                </div>
                <span className="txtContaExiste">Já tem uma conta? Faça login</span>
                <div className="separador">
                    <hr className="meiaLinha" />
                    <span className="txtSeparador">ou</span>
                    <hr className="meiaLinha" />
                </div>
                <button className="btnGoogle">
                  <img src={IconGoogle} className="logoGoogle" alt="Simbolo do Google, letra 'G' maiúscula" />  Entra com Google
                </button>
            </div>
        </section>
        </>

    )
}

export default FormCadastro