import React from "react";
import Home from "./App";
import Campanha from "./pages/campanha/Campanha";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function Rotas() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/segundaPagina" element={<Campanha />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default Rotas;