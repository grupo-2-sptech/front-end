import NavbarLogout from "../../components/navbar/NavbarLogout";
import "./login.css";
import "../../../styles/global.css";
import InputCadastro from "../../components/input-cadastro/InputCadastro";
import IconGoogle from "../../assets/cadastro/IconGoogle.svg";
import api from "../../api/api.js"
import { Link, useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();
  const navigateToPage = (path) =>{
      navigate(path)
  }

  function logar(e){
    e.preventDefault();

    const usuario ={
      email: e.target.email.value,
      senha: e.target.senha.value 
    }

    api.post("/login", usuario).then((res) => {
      console.log(res)
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('tipoConta', res.data.tipoConta);
      localStorage.setItem('id', res.data.id);
      navigateToPage("/")
      
    }).catch((erro) => {
      console.log(erro)
    })

    
  }

  return (
    <>
      <NavbarLogout />
      
      <div className="body-login d-flex jc-center ai-center">

        <form onSubmit={logar} className="box-login bg-seashell border-outline br-10 middle-shadow">
          <span className="text-align-center d-flex jc-center head-xsmall">
            Entrar na Collecta
          </span>
          <div className="mb-32">
            <InputCadastro name="email" placeholder="E-mail" />
            <div className="mb-32" />
            <InputCadastro name="senha" placeholder="Senha" />
          </div>

          <button type="submit" className="bg-tufts br-5 w-100 border-none p-16-vertical color-white mb-32 mg-top-5">
            ENTRAR
          </button>
          <Link to={"/cadastro-doador"}>
          <span className="link-underline text-align-center d-flex jc-center color-science mb-32">Não tem uma conta? Cadastre-se aqui!</span>
          </Link>
          <div className="ou-container d-flex jc-center ai-center color-haiti mb-32">
            <div className="hr-ou bg-haiti"></div>
            <span className="m-0-8" >ou</span>
            <div className="hr-ou bg-haiti"></div>
          </div>
          <button className="btnGoogle">
                  <img src={IconGoogle} className="logoGoogle" alt="Simbolo do Google, letra 'G' maiúscula" />  Entra com Google
          </button>
        </form>
        
      </div>
    </>
  );
}

export default Login;
