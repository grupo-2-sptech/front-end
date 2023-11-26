import Cadeado from "../../assets/cadastro/cadeado.svg"
import Personagem from "../../assets/cadastro/personagem.svg"
import LinhaTracejada from "../../assets/cadastro/linha-tracejada.svg"
import IconInfo from "../../assets/cadastro/info.svg"
import InputCadastro from "../input-cadastro/InputCadastro"
import IconGoogle from "../../assets/cadastro/iconGoogle.svg"
import NavbarLogout from "../navbar/NavbarLogout"
import "../../../styles/global.css"
import api from "../../api/api"
import { useNavigate } from "react-router"
import "./FormCadastro.css"
import { Link } from "react-router-dom"


function FormCadastro(){

    const navigate = useNavigate();
    const navigateToPage = (path) =>{
        navigate(path)
    }

        function avancarCadastro(e){
        e.preventDefault();   
        var nome = document.getElementById("inputNome");
        var email = document.getElementById("inputEmail");
        var cpfCnpj = document.getElementById("inputCpfCnpj");
        var telefone = document.getElementById("inputTelefone");
        var senha = document.getElementById("inputSenha");
        var dtNasc = document.getElementById("inputDtNasc");
        var btnAvancar = document.getElementById("botaoAvancar");
        var btnAnterior = document.getElementById("botaoAnterior");
        var btnCadastrar = document.getElementById("botaoCadastrar");
        var numeroEtapa = document.getElementById("etapa");
        nome.style.display = 'none';
        email.style.display = 'none';
        cpfCnpj.style.display = 'none';
        telefone.style.display = 'block';
        senha.style.display = 'block';
        dtNasc.style.display = 'block';
        btnAvancar.style.display = 'none';
        btnAnterior.style.display = 'block';
        btnCadastrar.style.display = 'block';
        numeroEtapa.innerHTML = "2";
    }

    function voltarAcao(e){
        e.preventDefault();
        var nome = document.getElementById("inputNome");
        var email = document.getElementById("inputEmail");
        var cpfCnpj = document.getElementById("inputCpfCnpj");
        var telefone = document.getElementById("inputTelefone");
        var senha = document.getElementById("inputSenha");
        var dtNasc = document.getElementById("inputDtNasc");
        var btnAvancar = document.getElementById("botaoAvancar");
        var btnAnterior = document.getElementById("botaoAnterior");
        var btnCadastrar = document.getElementById("botaoCadastrar");
        var numeroEtapa = document.getElementById("etapa");
        nome.style.display = 'block';
        email.style.display = 'block';
        cpfCnpj.style.display = 'block';
        telefone.style.display = 'none';
        senha.style.display = 'none';
        dtNasc.style.display = 'none';
        btnAvancar.style.display = 'block';
        btnAnterior.style.display = 'none';
        btnCadastrar.style.display = 'none';
        numeroEtapa.innerHTML = "1";
    }

    function verificaSenha(senha) {
        // Regex para verificar os critérios
        var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      
        // Testa a senha com a regex
        return regex.test(senha);
      }

      function isDataNoPassado(data) {
        // Obtém a data atual
        var dataAtual = new Date();
      
        // Converte a string da data para um objeto Date
        var dataInformada = new Date(data);
      
        // Compara as datas
        return dataInformada < dataAtual;
      }
    
    function cadastrar(e){
        e.preventDefault();

        var nome = e.target.nome.value;
        var email = e.target.email.value;
        var cpf = e.target.cpf.value;
        var telefone = e.target.telefone.value;
        var senha = e.target.senha.value;
        var dtNasc = e.target.dtNasc.value;

        if(nome.trim() == "" || email.trim() == "" || cpf.trim() == "" || telefone.trim() == "" || senha.trim() == "" || dtNasc.trim() == ""){
            alert("preencha todos os campos")
        } else if(nome.length < 10){
            alert("Digite seu nome completo")
        } else if(cpf.length != 11){
            alert("Digite um cpf válido")
        } else if(email.length < 3){
            alert("Email deve ter no minimo 3 caracteres")
        }else if(telefone.length != 11){
            alert("Digite apenas o numero do seu telefone com DDD")
        }else if(!isDataNoPassado(dtNasc)){
            alert("A data de nascimento deve estar no passado")
        }else if(!verificaSenha(senha)){
            alert("A senha deve conter pelo menos uma letra maiúscula, uma letra minúscula, um caractere especial, um número e ter no mínimo 8 caracteres")
        }else{
            var novoUsuario = {
                nome: nome,
                sobrenome: nome,
                cpf: cpf,
                dataNascimento: dtNasc,
                email: email,
                telefone: telefone,
                senha : senha
            }

            api.post("/login/cadastro/doador", novoUsuario).then((res) =>{
                navigateToPage("/login")
            }).catch((erro) => {
                alert("erro ao cadastrar")
                console.log(erro)
            });

        }
    }
    


    return(
        <>
        <NavbarLogout />
        <section className="formularioCadastro">
        <img src={Cadeado} className="imgCadeado" alt="Imagem de um cadeado conectado com icones de documento, configuração e compartilhamento" />
                 
        <img src={Personagem} className="imgPersonagem" alt="Imagem de uma garota branca utilizando um smartphone" />
        <img src={LinhaTracejada} className="imgLinhaTracejada" alt="Imagem de linha tracejada que percorre o fundo da tela"/>
            <form onSubmit={cadastrar} className="boxFormulario">
                
                <span className="txtEtapaCadastro">ETAPA <span id="etapa">1</span>/2</span>
                <h2 className="txtTituloFormulario">Cadastro Doador</h2>
                <InputCadastro name="nome" id="inputNome" placeholder="Nome"/>
                <InputCadastro name="email" id="inputEmail" placeholder="Email"/>
                <InputCadastro name="cpf" id="inputCpfCnpj" placeholder="CPF"/>
                <InputCadastro name="telefone" id="inputTelefone" placeholder="Telefone"/>
                <InputCadastro type="date" name="dtNasc" id="inputDtNasc" placeholder="Data de nascimento"/>
                <InputCadastro name="senha" id="inputSenha" placeholder="Senha"/>

                <div className="campoInfo">
                    <img src={IconInfo} alt="Imagem de um circulo com a letra 'i' ao centro representando a palavra 'informação'" />
                    <Link to={"/cadastro-ong"}>
                    <span className="txtInfo">Sou uma ONG? Clique aqui</span>
                    </Link>
                </div>
                <div className="campoBotoes">
                <button className="btnAvancar" id="botaoAvancar" onClick={avancarCadastro}>
                    PRÓXIMO
                </button>
                <button className="btnAnterior" id="botaoAnterior" onClick={voltarAcao}>ANTERIOR</button>
                
                <button className="btnCadastrar color-white" id="botaoCadastrar" type="submit" >
                        CADASTRAR
                </button>
                
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
            
            </form>
        </section>
        </>

    )
}

export default FormCadastro