import Cadeado from "../../assets/cadastro/cadeado.svg"
import Personagem from "../../assets/cadastro/personagem.svg"
import LinhaTracejada from "../../assets/cadastro/linha-tracejada.svg"
import IconInfo from "../../assets/cadastro/info.svg"
import InputCadastro from "../../components/input-cadastro/InputCadastro.jsx"
// import IconGoogle from "../../assets/cadastro/iconGoogle.svg"
import NavbarLogout from "../../components/navbar/NavbarLogout.jsx"
import Navbar from "../../components/navbar/Navbar.jsx"
import { Link } from 'react-router-dom';
import "./CadastroOng.css"
import "../../../styles/global.css"
import { useNavigate } from "react-router"
import api from "../../api/api.js"
import React, { useState, useEffect } from "react"


function cadastroOng(){
    const [isTipoConta, setIsTipoConta] = useState(0);
  
    const conta = localStorage.getItem('tipoConta'); 
    function buscarTipoConta() {
      if (conta == 'DOADOR') {
        setIsTipoConta(1);
      } else if (conta == 'ORGANIZACAO') {
        setIsTipoConta(2);
      }
    }
  
    useEffect(() => {
      buscarTipoConta();
    }, []); 

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const navigate = useNavigate();
    const navigateToPage = (path) =>{
        navigate(path)
    }

        function avancarCadastro(e){
        e.preventDefault();   
        var nome = document.getElementById("inputNome");
        var email = document.getElementById("inputEmail");
        var cpfCnpj = document.getElementById("inputCnpj");
        var razao = document.getElementById("inputRazao");
        var cep = document.getElementById("inputCep");
        var senha = document.getElementById("inputSenha");
        var telefone = document.getElementById("inputTelefone");
        var dtFund = document.getElementById("inputDtFund");
        var btnAvancar = document.getElementById("botaoAvancar");
        var btnAnterior = document.getElementById("botaoAnterior");
        var btnCadastrar = document.getElementById("botaoCadastrar");
        var numeroEtapa = document.getElementById("etapa");
        nome.style.display = 'none';
        email.style.display = 'none';
        cpfCnpj.style.display = 'none';
        razao.style.display = 'none';

        cep.style.display = 'block';
        senha.style.display = 'block';
        telefone.style.display = 'block';
        dtFund.style.display = 'block';

        btnAvancar.style.display = 'none';
        btnAnterior.style.display = 'block';
        btnCadastrar.style.display = 'block';
        numeroEtapa.innerHTML = "2";
    }

    function voltarAcao(e){
        e.preventDefault();   
        var nome = document.getElementById("inputNome");
        var email = document.getElementById("inputEmail");
        var cpfCnpj = document.getElementById("inputCnpj");
        var razao = document.getElementById("inputRazao");
        var cep = document.getElementById("inputCep");
        var senha = document.getElementById("inputSenha");
        var telefone = document.getElementById("inputTelefone");
        var dtFund = document.getElementById("inputDtFund");
        var btnAvancar = document.getElementById("botaoAvancar");
        var btnAnterior = document.getElementById("botaoAnterior");
        var btnCadastrar = document.getElementById("botaoCadastrar");
        var numeroEtapa = document.getElementById("etapa");

        nome.style.display = 'block';
        email.style.display = 'block';
        cpfCnpj.style.display = 'block';
        razao.style.display = 'block';

        cep.style.display = 'none';
        senha.style.display = 'none';
        telefone.style.display = 'none';
        dtFund.style.display = 'none';

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
        var cnpj = e.target.cnpj.value;
        var telefone = e.target.telefone.value;
        var senha = e.target.senha.value;
        var dtFund = e.target.dtFund.value;

        var razao = e.target.razao.value;
        var cep = e.target.razao.value;


        if(nome.trim() == "" || email.trim() == "" || cnpj.trim() == "" || telefone.trim() == "" || senha.trim() == "" || dtFund.trim() == ""){
            alert("preencha todos os campos")
        } else if(nome.length < 3){
            alert("Digite o nome fantasia completo")
        } else if(razao.length < 3){
            alert("Digite a razão social completa")
        } else if(cnpj.length != 18){
            alert("Digite um cnpj válido")
        } else if(email.length < 3){
            alert("Email deve ter no minimo 3 caracteres")
        }else if(telefone.length != 11){
            alert("Digite apenas o numero do seu telefone com DDD")
        }else if(!isDataNoPassado(dtFund)){
            alert("A data de fundação deve estar no passado")
        }else if(!verificaSenha(senha)){
            alert("A senha deve conter pelo menos uma letra maiúscula, uma letra minúscula, um caractere especial, um número e ter no mínimo 8 caracteres")
        }else{
            var novoUsuario = {
                nomeSocial: razao,
                nomeFantasia: nome,
                cnpj: cnpj,
                dataFundacao: dtFund + "T12:00:00",
                email: email,
                telefone: telefone,
                senha : senha
            }

            api.post("/login/cadastro/organizacao", novoUsuario).then((res) =>{
                navigateToPage("/login")
            }).catch((erro) => {
                alert("erro ao cadastrar")
                console.log(erro)
            });

        }
    }


    return(
        <>
            
        {isTipoConta == 0 ? <NavbarLogout /> : <Navbar />}
        
        <section className="formularioCadastro">
        <img src={Cadeado} className="imgCadeado" alt="Imagem de um cadeado conectado com icones de documento, configuração e compartilhamento" />
                 
        <img src={Personagem} className="imgPersonagem" alt="Imagem de uma garota branca utilizando um smartphone" />
        <img src={LinhaTracejada} className="imgLinhaTracejada" alt="Imagem de linha tracejada que percorre o fundo da tela"/>
            <form className="boxFormulario" onSubmit={cadastrar}>
                
                <span className="txtEtapaCadastro">ETAPA <span id="etapa">1</span>/2</span>
                <h2 className="txtTituloFormulario">Cadastro ONG</h2>
                <InputCadastro name="nome" id="inputNome" placeholder="Nome Fantasia"/> 
                <InputCadastro name="razao" id="inputRazao" placeholder="Razão Social"/> 
                <InputCadastro name="cnpj" id="inputCnpj" placeholder="CNPJ"/>
                <InputCadastro name="email" id="inputEmail" placeholder="Email"/>
                <InputCadastro name="cep" id="inputCep" placeholder="CEP"/>
                <InputCadastro name="telefone" id="inputTelefone" placeholder="Telefone"/>
                <InputCadastro type="date" name="dtFund" id="inputDtFund" placeholder="Data de Fundação"/>
                <InputCadastro name="senha" id="inputSenha" placeholder="Senha"/>
                <div className="campoInfo">
                    <img src={IconInfo} alt="Imagem de um circulo com a letra 'i' ao centro representando a palavra 'informação'" />
                    <Link to={"/cadastro-doador"}>
                    <span className="txtInfo">Sou um doador? Clique aqui</span>
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
                
                <span className="txtContaExiste"><Link to={"/login"} className="color-science">Já tem uma conta? Faça login</Link></span>

                {/* <div className="separador">
                    <hr className="meiaLinha" />
                    <span className="txtSeparador">ou</span>
                    <hr className="meiaLinha" />
                </div>
                <button className="btnGoogle">
                  <img src={IconGoogle} className="logoGoogle" alt="Simbolo do Google, letra 'G' maiúscula" />  Entra com Google
                </button> */}
            
            </form>
        </section>
        </>

    )
}

export default cadastroOng