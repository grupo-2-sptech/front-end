
import Index from "./pages/index/index";
import Campanha from "./pages/campanha/campanha.jsx";
import Cadastro from "./components/form-cadastro/FormCadastro";
import Login from "./pages/login/Login.jsx";
import InfoCampanha from "./pages/info-campanha/info-campanha";
import Voluntariado from "./pages/voluntariado/Voluntariado";
import FeedOng from "./pages/feed/FeedOng";
import Pagamento from "./pages/pagamento/Pagamento.jsx";
import Explorar from "./pages/explorar/explorar.jsx"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard.jsx";

function Rotas() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/criar-campanha" element={<Campanha />} />
          <Route path="/cadastro-doador" element={<Cadastro />} />
          <Route path="/info-campanha/:id" element={<InfoCampanha />} />
          <Route path="/login" element={<Login />} />
          <Route path="/voluntariado" element={<Voluntariado />} />
          <Route path="/feed-ong" element={<FeedOng />} />
          <Route path="/pagamento" element={<Pagamento />} />
          <Route path="/explorar" element={<Explorar />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default Rotas;