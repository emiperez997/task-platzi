import React, { useContext } from "react";
import { TaskContext } from "../TaskContext/TaskContext";
import "./CreateTask.css";

function CreateTask() {
  const { setOpenModal, addTask } = useContext(TaskContext);

  const onClickCancel = () => {
    setOpenModal(false);
  };

  const onClickCreate = () => {
    const task = document.querySelector(".task").value;
    const completed = document.querySelector("#completed").checked;

    if (task === "") return alert("Ingrese un titulo para la tarea");

    setOpenModal(false);
    addTask(task, completed);
  };
  return (
    <div className="container text-center">
      <h1>Create Task</h1>
      <textarea
        type="text"
        className="task"
        placeholder="Ingrese la nueva tarea..."
      ></textarea>
      <label htmlFor="completed">¿Está completo?</label>
      <input type="checkbox" id="completed" />
      <div className="buttons">
        <button onClick={onClickCancel} className="btn-danger">
          Cancelar
        </button>
        <button className="btn-success" onClick={onClickCreate}>
          Crear
        </button>
      </div>
    </div>
  );
}

export { CreateTask };
