import { useEffect, useState } from "react";
import { Editar } from "./Editar";

export const Listado = ({ listadoState, setlistadoState }) => {
  //const [listadoState, setlistadoState] = useState([]);
  const [editar, seteditar] = useState(0);

  useEffect(() => {
    conseguirpeliculas();
  }, []);

  const conseguirpeliculas = () => {
    let peliculas = JSON.parse(localStorage.getItem("pelis"));

    setlistadoState(peliculas);

    return peliculas;
  };
  const borrarPeli = (id) => {
    // conseguir pelicula almacenada
    let pelis_almacenadas = conseguirpeliculas();
    // filtar para elimonar del array la que no quiero
    let nuevo_array_pelis = pelis_almacenadas.filter(
      (peli) => peli.id !== parseInt(id)
    );

    // actualizar estrado
    setlistadoState(nuevo_array_pelis);
    //actualizar local storage
    localStorage.setItem("pelis", JSON.stringify(nuevo_array_pelis));
  };

  return (
    <>
      {listadoState != null ? (
        listadoState.map((peli) => {
          return (
            <article key={peli.id} className="peli_item">
              <h3 className="titel">{peli.titulo}</h3>
              <p className="descripcion">{peli.descripcion}</p>
              <button
                className="edit"
                onClick={() => {
                  seteditar(peli.id);
                }}
              >
                Editar
              </button>
              <button className="delete" onClick={() => borrarPeli(peli.id)}>
                Borrar
              </button>

              {editar === peli.id && (
                <Editar
                  peli={peli}
                  conseguirpeliculas={conseguirpeliculas}
                  seteditar={seteditar}
                  setlistadoState={setlistadoState}
                />
              )}
            </article>
          );
        })
      ) : (
        <h2>No hay peliculas para mostrar</h2>
      )}
    </>
  );
};
