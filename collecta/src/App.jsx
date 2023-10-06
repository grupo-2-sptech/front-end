import { useState } from "react";
import "../styles/global.css";
import "./components/navbar/navbar.css";
import Logo from "./assets/logo/logo-collecta.svg";
import Pacoca from "./assets/logo/pacoca.jpg"
import Navbar from "./components/navbar/Navbar"
// import './App.css'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      <body>
        <Navbar/>
      </body>
    </>
  );
}

export default App;
