// import React from "react";
import Index from "./pages/index/index";
import Campanha from "./pages/campanha/Campanha";
import Cadastro from "./components/form-cadastro/FormCadastro";
import Login from "./pages/login/login";
import Voluntariado from "./pages/voluntariado/Voluntariado";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import FeedOng from "./pages/feed/FeedOng";
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
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default Rotas;