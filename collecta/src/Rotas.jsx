
import Index from "./pages/index/index";
import Campanha from "./pages/campanha/Campanha";
import Cadastro from "./components/form-cadastro/FormCadastro";
import InfoCampanha from "./pages/info-campanha/info-campanha";
import Login from "./pages/login/login";
import Voluntariado from "./pages/voluntariado/Voluntariado";
import FeedOng from "./pages/feed/FeedOng";
import Pagamento from "./pages/pagamento/Pagamento.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard.jsx";

function Rotas() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/segundaPagina" element={<Campanha />} />
          <Route path="/terceiraPagina" element={<Cadastro />} />
          <Route path="/infoCampanha" element={<InfoCampanha />} />
          <Route path="/login" element={<Login />} />
          <Route path="/voluntariado" element={<Voluntariado />} />
          <Route path="/feed-ong" element={<FeedOng />} />
          <Route path="/pagamento" element={<Pagamento />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default Rotas;