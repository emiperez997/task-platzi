import "./TaskList.css";

function TaskList({ children }) {
  return (
    <div className="p-2 bg-blue mt-2 rounded-2">
      <ul className="TaskList">{children}</ul>
    </div>
  );
}

export { TaskList };
