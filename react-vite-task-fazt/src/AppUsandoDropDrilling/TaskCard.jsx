function TaskCard({ tasks, deleteTask }) {
  //Si creo una funcion aca, se ejecutara cada vez que se renderice el componente

  return (
    //El key se usa al ser llamado, no aca
    <div>
      <h1>{tasks.title}</h1>
      <p>{tasks.id}</p>
      <p>{tasks.description}</p>
      {/*<button onClick={deleteTask(10)}>Eliminar</button> //Se ejecuta al cargar el componente por (10)*/}
      <button onClick={() => deleteTask(tasks.id)}>Eliminar</button>
      <hr />
    </div>
  );
}

export default TaskCard;
