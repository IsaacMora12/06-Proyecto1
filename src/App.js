import { useState } from "react";
import { Buscador } from "./components/Buscador";
import { Crear } from "./components/Crear";
import { Listado } from "./components/Listado";

function App() {
  const [listadoState, setlistadoState] = useState([]);

  return (
    <div className="layuot">
      <header className="header">
        
        <div className="logo">
            <div className="play"></div>
        </div>
        <h1>Mispelis</h1>
      </header>

      <nav className="nav">
        <ul>
          <li><a href="/#">Ini cio</a></li>
          <li><a href="/#">Blo ck</a></li>
          <li><a href="/#">Pelicu las</a></li>
          <li><a href="/#">Co ntacto</a></li>
        </ul>
      </nav>
      <section className="content">
        <Listado listadoState={listadoState} setlistadoState={setlistadoState} />
      </section>
      <aside className="lateral">
        <Buscador listadoState={listadoState} setlistadoState={setlistadoState}/>
        
        <Crear setlistadoState={setlistadoState}/>
      </aside>
      <footer className="footer">&copy; Isaac Mora</footer>
    </div>
  );
}

export default App;
