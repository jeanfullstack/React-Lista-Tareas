import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './componentes/Header';
import FormularioTareas from './componentes/FormularioTareas';
import ListaTareas from './componentes/ListaTareas';




//Funcion de tipo flecha
const App = () => {

  //Creacion de una variable
  //Obtenemos las tareas guardadas de localstorage
  const tareasGuardadas = 
  localStorage.getItem('tareas') ? 
  JSON.parse(localStorage.getItem('tareas')) : [];
  //console.log(tareasGuardadas);
  //localStorage.getItem('tareas'): cadena de texto

  
  //Creacion de nuevo estado (Estado general de la aplicación)
  //Establecemos el estado de las tareas 
  const [tareas, cambiarTareas] = useState(tareasGuardadas);
  


  //useEffect
  //Guardando el estado dentro de localstorage
  useEffect(() => {

    localStorage.setItem('tareas', JSON.stringify(tareas));
    
    //console.log(JSON.stringify(tareas));
    //console.log('Las tareas cambiaron');

  }, [tareas]);


  //Accedemos a localstorage y comprobamos si mostrarCompletadas es null
  let configMostrarCompletadas = ''; //Cadena de texto vacia
  if(localStorage.getItem('mostrarCompletadas') === null){

    configMostrarCompletadas = true;

  } else {

    configMostrarCompletadas = localStorage.getItem('mostrarCompletadas') === 'true';

  }


  //Creación de nuevo estado
  //El estado de mostrarCompletadas
  const [mostrarCompletadas, cambiarMostrarCompletadas] = useState(configMostrarCompletadas); 
  //mostrarCompletadas es un valor booleano

  useEffect(() => {
    localStorage.setItem('mostrarCompletadas', mostrarCompletadas.toString());
  }, [mostrarCompletadas]);

  /* useEffect(() => {
    localStorage.setItem('mostrarCompletadas', mostrarCompletadas.toString());
  }, [mostrarCompletadas]); */


  //console.log(tareas); 18:45


  return (

    <div className="contenedor">

      <Header 
        mostrarCompletadas={ mostrarCompletadas }
        cambiarMostrarCompletadas={ cambiarMostrarCompletadas }
      />

      <FormularioTareas tareas={tareas} cambiarTareas={cambiarTareas} />

      <ListaTareas 
        tareas={tareas} 
        cambiarTareas={ cambiarTareas } 
        mostrarCompletadas={ mostrarCompletadas }
      />

    </div>

  );
}

export default App;


/* [
      {
        id: 1,
        texto: 'Lavar la ropa',
        completada: false
      },
      {
        id: 2,
        texto: 'Grabar tutorial',
        completada: true
      } 
    ] */
