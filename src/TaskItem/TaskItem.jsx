import {
  BsCheckCircle,
  BsCheckCircleFill,
  BsXCircleFill,
} from "react-icons/bs";
import "./TaskItem.css";

function TaskItem({ text, completed, onComplete, onDelete }) {
  return (
    <li className={`TaskItem ${completed ? "bg-success" : "bg-light"}`}>
      {!completed ? (
        <BsCheckCircle className={`Icon Icon-check`} onClick={onComplete} />
      ) : (
        <BsCheckCircleFill className={`Icon Icon-check`} onClick={onComplete} />
      )}

      <p className={`TaskItem-p ${completed && "TaskItem-p--complete"}`}>
        {text}
      </p>
      <BsXCircleFill className="Icon Icon-delete" onClick={onDelete} />
    </li>
  );
}

export { TaskItem };
