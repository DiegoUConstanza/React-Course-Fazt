import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

//Ya no recibe nada
function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const { createTask } = useContext(TaskContext);

  //const { x } = useContext(TaskContext);
  //console.log("Desde TaskForm" + x);

  const HandleSubmit = (e) => {
    e.preventDefault();
    //Llama a la funcion que esta en App.jsx y lo ejecuta
    createTask({
      title: title,
      description: description,
    });
    //En vez de traer una funcion aca, enviamos un string u objeto para que haya se modifique todo en un solo lugar

    setTitle("");
    setDescription("");
    //Despues de enviar limpiar los datos
  };

  const HandleFormTitle = (e) => {
    setTitle(e.target.value);
  };

  const HandleFormDescription = (e) => {
    setDescription(e.target.value);
  };

  return (
    <div className="max-w-md mx-auto">
      <form
        className="bg-slate-800 p-10 mb-4 rounded-md"
        onSubmit={HandleSubmit}
      >
        <h1 className="text-2xl font-bold text-white mb-3">
          Crea tu nueva tarea{" "}
        </h1>
        <input
          className=" bg-slate-100 p-3 w-full mb-2 rounded-md"
          type="text"
          placeholder="Ingrese su tarea"
          onChange={HandleFormTitle}
          //Agarra los valores del input y los guarda en el estado
          value={title}
          autoFocus
        />
        <textarea
          className=" bg-slate-100 p-3 w-full mb-2 rounded-md"
          type="text"
          placeholder="Ingrese la descripcion de la tarea"
          onChange={HandleFormDescription}
          value={description}
        />
        <button className="bg-indigo-500 px-3 py-1 text-white rounded-md hover:bg-indigo-300 transition duration-300">
          Enviar Tarea
        </button>
      </form>
    </div>
  );
}

export default TaskForm;
