import TaskForm from "./components/TaskForm.jsx";
import TaskList from "./components/TaskList.jsx";
import { tasks as data } from "./data/tasks.js";
import { useState, useEffect } from "react";

function App() {
  const [tasks, setTasks] = useState([]);

  //Se ejecuta al cargar el componente TaskList como tenian el mismo nombre causa conflicto
  useEffect(() => {
    setTasks(data);
  }, []);

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

  return (
    <>
      <TaskForm createTask={createTask /*Le estamos pasando una funcion*/} />
      <TaskList tasks={tasks} deleteTask={deleteTask} />
    </>
  );
}

export default App;
