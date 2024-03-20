import Index from "./pages/index/Index";
import CriarCampanhaPontual from "./pages/campanha/campanha.jsx";
import CampanhaRecorrente from "./pages/campanha/campanha-recorrente.jsx";
import Cadastro from "./components/form-cadastro/FormCadastro";
import Login from "./pages/login/Login.jsx";
import InfoCampanha from "./pages/info-campanha/info-campanha";
import Voluntariado from "./pages/voluntariado/Voluntariado";
import FeedOng from "./pages/feed/FeedOng";
import Pagamento from "./pages/pagamento/Pagamento.jsx";
import CadastroOng from "./pages/cadastro-ong/CadastroOng"
import Explorar from "./pages/explorar/explorar.jsx"
import NotFoundPage from "./pages/not-found/NotFoundPage.jsx"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard.jsx";
import CriarMissao from "./pages/criar-missao/CriarMissao.jsx";


function Rotas() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/criar-campanha" element={<CriarCampanhaPontual />} />
          <Route path="/criar-campanha-recorrente" element={<CampanhaRecorrente />} />
          <Route path="/cadastro-doador" element={<Cadastro />} />
          <Route path="/info-campanha/:id" element={<InfoCampanha />} />
          <Route path="/login" element={<Login />} />
          <Route path="/voluntariado/:id" element={<Voluntariado />} />
          <Route path="/feed-ong" element={<FeedOng />} />
          <Route path="/pagamento/:id" element={<Pagamento />} />
          <Route path="/cadastro-ong" element={<CadastroOng/>}/>
          <Route path="/explorar" element={<Explorar />} />
          <Route path="/dashboard/:id" element={<Dashboard />} /> 
          <Route path="/criar-missao/:id" element={<CriarMissao />} /> 
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default Rotas;