import TaskCard from "./TaskCard";

function TaskList({ tasks, deleteTask }) {
  if (tasks.length === 0) {
    return <h1>No hay archivos por mostrar</h1>;
  }
  return (
    <div>
      {tasks.map((tasks) => (
        <TaskCard key={tasks.id} tasks={tasks} deleteTask={deleteTask} />
      ))}
    </div>
  );
}

export default TaskList;
