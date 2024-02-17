import logo from './logo.svg';
import './App.css';

import Boton from "./componentes/Boton";

function App() {
  return (
    <div className="App">
      <div className="logo-contenedor">
        <img
        className="logo"
        src={logo}
        alt="logo"
        />

</div>
<div className="contenedor-principal">
<div className="titulo ">
      <h1>
        gracias
      </h1>
     </div>
     </div>
<div className="contenedor-principal">
<div className="titulo ">
      <h1>
        hola
      </h1>
     </div>
     
     <Boton/>
     <Boton/>
     <Boton/>
     <Boton/>
    

     </div>
     </div>
  );
}

export default App;


