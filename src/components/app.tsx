import React, { useState } from "react";
import styles from "./styles.module.scss";

interface PropsI {}

export function App(props: PropsI) {
  console.log(styles);
  const {} = props;
  const [count, setCount] = useState(0);

  const decrement = () => setCount((prev) => prev + 1);

  return (
    <div>
      Привет мир
      <button className={styles.button} onClick={decrement}>
        add
      </button>
      <div>
        <span className={styles.count}>счётчик - </span>
        {count}
      </div>
    </div>
  );
}
