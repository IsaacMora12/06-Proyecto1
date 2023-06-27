import { useState } from "react";

export const Buscador = ({ listadoState, setlistadoState }) => {
  const [busqueda, setbusqueda] = useState("");
  const [noencontrado, setnoencontrado] = useState(false);
  const buscarPeli = (e) => {
    //crear estado actualizarlo
    setbusqueda(e.target.value);
    console.log(busqueda);
    //listado completo de peliculas llamar probs
    let pelis_encontradas = listadoState.filter((peli) => {
      return peli.titulo.toLowerCase().includes(busqueda.toLowerCase());
    });
    // filtrar para buscar considencias
    if (busqueda.length <= 1 || pelis_encontradas <= 0) {
      pelis_encontradas = JSON.parse(localStorage.getItem("pelis"));
      setnoencontrado(true);
    } else {
      setnoencontrado(false);
    }
    setlistadoState(pelis_encontradas);
    //comprobar si hay resultado

    // dar valor del local

    // actualizar el estado del listado
  };

  return (
    <div className="search">
      <h3 className="title">Buscador: {busqueda}</h3>
      {(noencontrado == true && busqueda.length > 1) && (
        <span className="no_encontrado">
          No se a enconrado ninguna considencia
        </span>
      )}

      <form>
        <input
          type="text"
          id="serch_field"
          name="busqueda"
          autoComplete="off"
          onChange={buscarPeli}
        />
        <button id="serch">Buscar</button>
      </form>
    </div>
  );
};
