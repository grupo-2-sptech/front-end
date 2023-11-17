
import Index from "./pages/index/Index";
import Campanha from "./pages/campanha/Campanha";
import Cadastro from "./components/form-cadastro/FormCadastro";
import InfoCampanha from "./pages/info-campanha/info-campanha";
import Login from "./pages/login/login";
import Voluntariado from "./pages/voluntariado/Voluntariado";
import FeedOng from "./pages/feed/FeedOng";
import Pagamento from "./pages/pagamento/Pagamento.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Rotas() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/criarCampanha" element={<Campanha />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/infoCampanha" element={<InfoCampanha />} />
          <Route path="/login" element={<Login />} />
          <Route path="/voluntariado" element={<Voluntariado />} />
          <Route path="/feedOng" element={<FeedOng />} />
          <Route path="/pagamento" element={<Pagamento />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default Rotas;