import React, { useState } from "react";
import "./app.scss";

interface PropsI {}

export function App(props: PropsI) {
  const {} = props;
  const [count, setCount] = useState(0);

  const decrement = () => setCount((prev) => prev + 1);

  return (
    <div>
      Привет мир
      <button onClick={decrement}>add</button>
      <div>
        <span>счётчик - </span>
        {count}
      </div>
    </div>
  );
}
