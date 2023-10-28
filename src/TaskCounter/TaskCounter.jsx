import { useContext } from "react";
import "./TaskCounter.css";
import { TaskContext } from "../TaskContext/TaskContext";

function TaskCounter() {
  const { totalTasks: total, completedTasks: completed } =
    useContext(TaskContext);

  return (
    <h1 className="TaskCounter">
      {total === 0 ? (
        <p className="loading">No hay tareas</p>
      ) : (
        <>
          Has completado {completed} de {total} tareas
        </>
      )}
    </h1>
  );
}

export { TaskCounter };
