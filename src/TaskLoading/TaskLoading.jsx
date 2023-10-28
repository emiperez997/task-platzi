import "./TaskLoading.css";

function TaskLoading() {
  return (
    <div className="task-loading">
      <div className="task-loading__spinner"></div>
      <span className="task-loading__text">Cargando...</span>
    </div>
  );
}

export { TaskLoading };
