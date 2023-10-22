
import "../styles/global.css";
import "./components/navbar/navbar.css";
import Navbar from "./components/navbar/Navbar"
import FormCadastro from "./components/form-cadastro/FormCadastro";

// import './App.css'

function App() {

  return (
    <>
      <body>
        <Navbar/>
        <FormCadastro/>
      </body>
    </>
  );
}

export default App;
