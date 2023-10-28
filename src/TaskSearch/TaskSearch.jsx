import React, { useContext } from "react";
import "./TaskSearch.css";
import { TaskContext } from "../TaskContext/TaskContext";

function TaskSearch() {
  const { searchValue, setSearchValue } = useContext(TaskContext);

  const search = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <input
      onChange={search}
      className="TaskSearch"
      value={searchValue}
      type="text"
      placeholder="Cortar morron"
    />
  );
}

export { TaskSearch };
