import { useContext } from "react";
import "./CreateTaskButton.css";
import { TaskContext } from "../TaskContext/TaskContext";

function CreateTaskButton() {
  const { setOpenModal } = useContext(TaskContext);

  const click = () => {
    setOpenModal((state) => !state);
  };

  return (
    <button className="CreateTaskButton" onClick={click}>
      +
    </button>
  );
}

export { CreateTaskButton };
