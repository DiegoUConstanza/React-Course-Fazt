import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../data/tasks.js";

//ABRIR EL OTRO VS CON LOS APUNTES

//En react cuando un componente habra otro componente son llamados children

//Nombre del contexto general, almacena datos
export const TaskContext = createContext();

export function TaskContextProvide(props) {
  let x = 20;

  const [tasks, setTasks] = useState([]);

  function createTask(task) {
    //Lo que hace ... es para copiar todo el arreglo y agregar el nuevo elemento al final, pero solo lo retorna no lo modifica
    setTasks([
      ...tasks,
      {
        id: tasks.length,
        title: task.title,
        description: task.description,
      },
      //No se coloca el +1 porque el arreglo empieza en 0
    ]);
    //Se trae un objeto/titulo para tener mayor facilidad de modificacion
  }

  function deleteTask(taskId) {
    //Al pasarlo solo así lo que esta recibiendo es un evento, se tiene que hacer una funcion anonima en task card
    console.log(taskId);
    //Por cada task que recorre verifica si el id es igual al que le estan pasando, si es diferente lo guarda, devuelve un nuevo arreglo sin el id que se le paso
    setTasks(tasks.filter((tasks) => tasks.id !== taskId));
    //Ej si es 1, 0 !== 1 es true lo guarda, 1 !== 1 es falso no lo guarda
  }

  useEffect(() => {
    setTasks(data); //Ya no existe
  }, []);

  //Engloba todo
  return (
    //Para crear un contexto se necesita un provider, el cual se encarga de pasar la información a los hijos, es el padre de padres
    //Para que sea global debe estar dentro de Provider
    //En Value va todo
    <TaskContext.Provider
      value={{
        //Un objeto porque son varias cosas
        x: x,
        tasks: tasks,
        createTask: createTask,
        deleteTask: deleteTask,
        //Exporta las funciones para que puedan ser usadas en otros componentes
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}

//Exportamos por individual
