import { useState } from "react";
import "./App.css";
import phrases from "./infos/phrases.json";
import Button from "./components/Button";
import Cookie from "./components/Cookie";
import fondo1 from "./assets/fondo1.png";
import fondo2 from "./assets/fondo2.png";
import fondo3 from "./assets/fondo3.png";
import fondom from "./assets/fondom.png";

function App() {
  const [index, setIndex] = useState(0);
  const [fondos, setFondos] = useState(0);
  const arregloFondos = [fondo1, fondo2, fondo3, fondom];

  const changeIndex = () => {
    setIndex(Math.floor(Math.random() * phrases.length));
    setFondos(Math.floor(Math.random() * arregloFondos.length));
  };
  return (
    <div
      className="App"
      style={{ backgroundImage: "url(" + arregloFondos[fondos] + ")" }}
    >
      <h1 className="galletaStyle">Galleta de la fortuna</h1>
      <Cookie phrasesInfos={phrases[index]} />
      <p className="authorStyle">{phrases[index].author}</p>
      <Button changeIndex={changeIndex} />
    </div>
  );
}

export default App;
