import { TaskCounter } from "../TaskCounter/TaskCounter";
import { TaskSearch } from "../TaskSearch/TaskSearch";
import { TaskList } from "../TaskList/TaskList";
import { TaskItem } from "../TaskItem/TaskItem";

import { CreateTaskButton } from "../CreateTaskButton/CreateTaskButton";
import { TaskLoading } from "../TaskLoading/TaskLoading";
import { TaskError } from "../TaskError/TaskError";

import { TaskContext } from "../TaskContext/TaskContext";
import { CreateTask } from "../CreateTask/CreateTask";
import { useContext } from "react";
import { Modal } from "../Modal/Modal";

function AppUI() {
  const { error, loading, searchedTasks, completeTask, deleteTask, openModal } =
    useContext(TaskContext);

  return (
    <>
      <div className="container">
        <TaskCounter />
        <div className="main">
          <TaskSearch />
        </div>
        <TaskList>
          {loading && <TaskLoading />}

          {error && <TaskError />}

          {!loading && searchedTasks.length > 0 && (
            <h2 className="text-center text-light">Tareas por hacer</h2>
          )}

          {!loading && searchedTasks.length === 0 && (
            <p className="text-center text-light">
              ¡Bien! No tienes tareas por hacer
            </p>
          )}

          {searchedTasks.map((task) => (
            <TaskItem
              text={task.text}
              completed={task.completed}
              key={task.text}
              onComplete={() => completeTask(task.text)}
              onDelete={() => deleteTask(task.text)}
            />
          ))}
        </TaskList>

        <CreateTaskButton />

        {openModal && (
          <Modal>
            <CreateTask />
          </Modal>
        )}
      </div>
    </>
  );
}

export { AppUI };
