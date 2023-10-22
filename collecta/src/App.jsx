import "../styles/global.css";

import imagens from "./assets/img/ImagensExternas";


import Navbar from "./components/navbar/Navbar";
import Card from "./components/card/Card";
import CardPontual from "./components/card-pontual/CardPontual";

import "./App.css";
import "./components/card/card.css";
import Rotas from "./Rotas"

import { BrowserRouter as Router } from 'react-router-dom';


function App() {
  return (
    <>
    <Rotas/>
    </>
  );
}

export default App;
