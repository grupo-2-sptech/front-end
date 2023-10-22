import React from "react";
import Index from "./pages/index/index";
import Campanha from "./pages/campanha/Campanha";
import Cadastro from "./components/form-cadastro/FormCadastro"
import { BrowserRouter, Routes, Route } from "react-router-dom";
function Rotas() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/segundaPagina" element={<Campanha />} />
          <Route path="/terceiraPagina" element={<Cadastro />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default Rotas;