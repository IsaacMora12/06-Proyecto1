
export const Editar = ({peli, conseguirpeliculas, setlistadoState, seteditar}) => {
    
    const titulo_componente = "Editar Pelicula";

    const guardaEdicion = (e, id) => {
        e.preventDefault();
       //conseguir el target del evento
        let target = e.target;

        //buscar el indece de la pelicuala a actualizar
            const pelis_almacenadas=conseguirpeliculas();
            const index = pelis_almacenadas.findIndex(peli => peli.id === id)

           // crear objeto con ese indice

           let peli_actualizada ={
            id,
            titulo: target.titulo.value,
            descripcion : target.descripcion.value,
           }

           //actualizar el elemento con este indice
           pelis_almacenadas[index] = peli_actualizada;
           // guardar el array 
           localStorage.setItem("pelis", JSON.stringify(pelis_almacenadas));
           //y actualizar estados
           setlistadoState(pelis_almacenadas);
           seteditar(0);
    }
    
  return (
    <div className='edit_form'>
        <h3 className='title'> {titulo_componente} </h3>

        <form onSubmit={ e => guardaEdicion(e, peli.id)}>
        <input type='text' name='titulo' className='titulo_editado' defaultValue={peli.titulo}/>
        <textarea name='descripcion' defaultValue={peli.descripcion} className='descripcion_editada'/>
        <input type='submit' className='editar' value="Actualizar"/>


        </form>

    </div>
  )
}
