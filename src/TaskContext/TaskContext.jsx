import { createContext, useState } from "react";
import { useLocalStorage } from "../App/useLocalStorage";

const TaskContext = createContext();

function TaskProvider({ children }) {
  const {
    item: tasks,
    saveItem: saveTasks,
    loading,
    error,
  } = useLocalStorage("TASKS_V1", []);
  const [searchValue, setSearchValue] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const completedTasks = tasks.filter((task) => !!task.completed).length;
  const totalTasks = tasks.length;

  const searchedTasks = tasks.filter((task) =>
    task.text.toLowerCase().includes(searchValue.toLowerCase())
  );

  const completeTask = (text) => {
    const taskIndex = tasks.findIndex((task) => task.text === text);

    const newTasks = [...tasks];
    newTasks[taskIndex].completed = !newTasks[taskIndex].completed;
    saveTasks(newTasks);
  };

  const deleteTask = (text) => {
    const taskIndex = tasks.findIndex((task) => task.text === text);

    const newTasks = [...tasks];
    newTasks.splice(taskIndex, 1);
    saveTasks(newTasks);
  };

  const addTask = (text, completed) => {
    const newTasks = [...tasks];
    newTasks.push({
      completed,
      text,
    });
    saveTasks(newTasks);
  };

  return (
    <TaskContext.Provider
      value={{
        loading,
        error,
        totalTasks,
        completedTasks,
        searchValue,
        setSearchValue,
        searchedTasks,
        completeTask,
        deleteTask,
        openModal,
        setOpenModal,
        addTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}

export { TaskContext, TaskProvider };
