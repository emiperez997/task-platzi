import { useState } from "react";

function TaskClick() {
  let [click, setClick] = useState(0);

  return (
    <>
      <p>Dise click {click} veces</p>
      <button onClick={() => setClick(click++)}>Click</button>
    </>
  );
}

export { TaskClick };
