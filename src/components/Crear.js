import {useState} from 'react'
import { GuardarEnStorage } from './helpers/GuardarEnStorage';

export const Crear = ({setlistadoState}) => {
    const titulocomponente ="Añadir pelicula";
    const [peliState, setpeliState] = useState({
        titulo:'',
        descripcion: '',
    })
    const {titulo, descripcion } = peliState;
    const conseguirDatosForm = e =>{
             
        e.preventDefault();

        //conseguir datos del form
        let target = e.target;
        let titulo = target.titulo.value;
        let descripcion = target.descripcion.value;

        //crear objeto  a guardar
       let peli ={
        id: new Date().getTime(),
        titulo,
        descripcion,
       };
       //guardar estado
       setpeliState(peli);
        //actualizar estado
        setlistadoState(elementos => {
          return [...elementos, peli];
        });
       //guardar en almacenamiento local
       GuardarEnStorage("pelis", peli);
      
       
    }
   
  return (
    <div className="add">
      <h3 className="titel">{titulocomponente}</h3>
      <strong>
      {(titulo && descripcion) && "Has creado la pelicula: " +titulo}
      </strong>
      <form onSubmit={conseguirDatosForm} >
        <input type="text" id="titulo" name="titulo" placeholder="Titulo" />
        <textarea id="descripcion" name="descripcion" placeholder="Descripcion"></textarea>
        <input type="submit" id="salve" value="Guardar" />
      </form>
    </div>
  );
};
