
import Index from "./pages/index/Index";
import Campanha from "./pages/campanha/Campanha";
import Cadastro from "./components/form-cadastro/FormCadastro";
import Login from "./pages/login/login";
import Voluntariado from "./pages/voluntariado/Voluntariado";
import FeedOng from "./pages/feed/FeedOng";
import Pagamento from "./pages/pagamento/Pagamento.jsx";
import CadastroOng from "./pages/cadastro-ong/CadastroOng"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Rotas() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/segundaPagina" element={<Campanha />} />
          <Route path="/terceiraPagina" element={<Cadastro />} />
          <Route path="/login" element={<Login />} />
          <Route path="/voluntariado" element={<Voluntariado />} />
          <Route path="/feed-ong" element={<FeedOng />} />
          <Route path="/pagamento" element={<Pagamento />} />
          <Route path="/cadastro-ong" element={<CadastroOng/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default Rotas;