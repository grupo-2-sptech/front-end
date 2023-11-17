import NavbarLogout from "../../components/navbar/NavbarLogout";
import "./login.css";
import "../../../styles/global.css";
import InputCadastro from "../../components/input-cadastro/InputCadastro";
import IconGoogle from "../../assets/cadastro/IconGoogle.svg";
// import backgroundIllustration from "../../assets/background/background-illustration-login.svg"

function Login() {
  return (
    <>
      <NavbarLogout />
      
      <div className="body-login d-flex jc-center ai-center">

        <div className="box-login bg-seashell border-outline br-10 middle-shadow">
          <span className="text-align-center d-flex jc-center head-xsmall">
            Entrar na Collecta
          </span>
          <div className="mb-32">
            <InputCadastro placeholder="E-mail" />
            <div className="mb-32" />
            <InputCadastro placeholder="Senha" />
          </div>

          <button className="bg-tufts br-5 w-100 border-none p-16-vertical color-white mb-32">
            ENTRAR
          </button>

          <span className="link-underline text-align-center d-flex jc-center color-science mb-32">Não tem uma conta? Cadastre-se aqui!</span>
          <div className="ou-container d-flex jc-center ai-center color-haiti mb-32">
            <div className="hr-ou bg-haiti"></div>
            <span className="m-0-8" >ou</span>
            <div className="hr-ou bg-haiti"></div>
          </div>
          <button className="btnGoogle">
                  <img src={IconGoogle} className="logoGoogle" alt="Simbolo do Google, letra 'G' maiúscula" />  Entra com Google
                </button>
        </div>
        
      </div>
    </>
  );
}

export default Login;
