import NavbarLogout from "../../components/navbar/NavbarLogout";
import "./login.css"
import "../../../styles/global.css"
import InputCadastro from "../../components/input-cadastro/InputCadastro"

function Login() {

    return (
        <>
        
            <NavbarLogout />
        <div className="body-login">
            <div className="box-login bg-seashell border-outline br-10 middle-shadow head-xsmall w-fit">
                <span className="text-align-center d-flex jc-center">Entrar na Collecta</span>
                <InputCadastro
                placeholder="E-mail"/>
            </div>
        </div>
        </>
    );
}

export default Login;