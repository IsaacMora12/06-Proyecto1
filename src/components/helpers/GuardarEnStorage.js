export const GuardarEnStorage = (key, item) => {
    //conseguir alementos del localstorage
    let elementos = JSON.parse(localStorage.getItem(key));
   
    // comprobar si hay un array
    if(Array.isArray(elementos)){
        // Añadir dentro de un array un elemento nuevo 
        elementos.push(item);
    }else{
        //crear un array con el elemento nuevo
        elementos = [item];
    }
    //guardar en el localstorage
    localStorage.setItem(key, JSON.stringify(elementos));
    //devolver objeto
   return item;
}