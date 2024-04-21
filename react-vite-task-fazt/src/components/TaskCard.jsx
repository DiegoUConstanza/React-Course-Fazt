import { useContext } from "react";
import { TaskContext } from "../context/TaskContext"; //Llamamos el nombre

function TaskCard({ tasks }) {
  //Si creo una funcion aca, se ejecutara cada vez que se renderice el componente
  //Podemos usar cualquier contexto, debemos llamarlo por su nomrbre
  const { deleteTask } = useContext(TaskContext); //Con esto ya tenemos acceso, como a X

  //const { x } = useContext(TaskContext); //Contexto
  //console.log("Desde TaskCard " + x); //Lo esta trayendo del contexto

  return (
    //El key se usa al ser llamado, no aca
    <div className="bg-gray-800 text-white p-4 rounded-md">
      <h1 className="text-xl font-bold capitalize">{tasks.title}</h1>
      <p className="text-gray-500 text-sm">{tasks.id}</p>
      <p className="text-gray-500 text-sm">{tasks.description}</p>
      {/*<button onClick={deleteTask(10)}>Eliminar</button> //Se ejecuta al cargar el componente por (10)*/}
      <button
        className="bg-green-500 px-2 py-1 rounded-md mt-4 font-bold hover:bg-green-300 transition duration-300"
        onClick={() => deleteTask(tasks.id)}
      >
        Eliminar Tarea
      </button>
    </div>
    //Todo lo que este acá sera el hijo, en children de TaskContext
  );
}

export default TaskCard;
