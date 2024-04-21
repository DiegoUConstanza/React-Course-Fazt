import { useState } from "react";

function TaskForm({ createTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

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
    <form onSubmit={HandleSubmit}>
      <input
        type="text"
        placeholder="Ingrese su tarea"
        onChange={HandleFormTitle}
        //Agarra los valores del input y los guarda en el estado
        value={title}
        autoFocus
      />
      <textarea
        type="text"
        placeholder="Ingrese la descripcion de la tarea"
        onChange={HandleFormDescription}
        value={description}
      />
      <button>Enviar</button>
    </form>
  );
}

export default TaskForm;
