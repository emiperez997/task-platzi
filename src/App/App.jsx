import React from "react";
import { AppUI } from "../App/AppUI";
import { TaskProvider } from "../TaskContext/TaskContext";

function App() {
  return (
    <TaskProvider>
      <AppUI />
    </TaskProvider>
  );
}

export default App;
