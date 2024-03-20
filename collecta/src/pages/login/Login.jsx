import NavbarLogout from "../../components/navbar/NavbarLogout";
import "../../../styles/global.css";
import InputCadastro from "../../components/input-cadastro/InputCadastro";

import api from "../../api/api.js"
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

function Login() {
  const MySwal = withReactContent(Swal)
  const navigate = useNavigate();
  const navigateToPage = (path) =>{
      navigate(path)
  }

  function navegarCadastroOng() {
    window.location.href = '/cadastro-ong';
  }

  function navegarCadastroDoador() {
    window.location.href = '/cadastro-doador';

  }

  function logar(e){
    e.preventDefault();

    const usuario ={
      email: e.target.email.value,
      senha: e.target.senha.value 
    }

    api.post("/login", usuario).then((res) => {
      
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('tipoConta', res.data.tipoConta);
      localStorage.setItem('id', res.data.id);
      navigateToPage("/")
      
    }).catch((erro) => {
      console.log(erro)
      MySwal.fire({
        title: <p>Usuário ou senha incorreto</p>,
        icon: 'error'
      })

    })

    
  }

  return (
    <>




<div className="modal fade" id="ExemploModalCentralizado" tabIndex="-1" role="dialog" aria-labelledby="TituloModalCentralizado" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="TituloModalCentralizado">Como gostaria de se cadastrar?</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Fechar">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body d-flex jc-between">

          <button type="button" onClick={navegarCadastroOng}  className="bg-science border-none p-8 br-5 color-white p-16 w-205px">Sou uma ONG</button>
          <button type="button" onClick={navegarCadastroDoador} className="bg-science border-none p-8 br-5 color-white p-16 w-205px">Sou um(a) contribuinte</button>

      </div>
    </div>
  </div>
</div>
      <NavbarLogout />
      
      <div className="body-login d-flex jc-center ai-center">

        <form onSubmit={logar} className="box-login bg-seashell border-outline br-10 middle-shadow">
          <span className="text-align-center d-flex jc-center head-xsmall">
            Entrar na Collecta
          </span>
          <div className="mmb-32">
            <InputCadastro name="email" placeholder="E-mail" />
            <div className="mmb-32" />
            <InputCadastro type="password" name="senha" placeholder="Senha" />
          </div>


          <button type="submit" className="bg-tufts br-5 w-100 border-none p-16-vertical color-white mb-32 ">
            ENTRAR
          </button>
          <Link to={"/cadastro-doador"}>
          <span className="link-underline text-align-center d-flex jc-center color-science mmb-32 mg-top-5" data-toggle="modal" data-target="#ExemploModalCentralizado">Não tem uma conta? Cadastre-se aqui!</span>
          </Link>
        </form>
      </div>
    </>
  );
}

export default Login
