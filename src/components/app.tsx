import React, { useState } from "react";
import styles from "./styles.module.scss";
import { Link, Outlet } from "react-router-dom";
import rubl from "@/assets/rubl.png";

interface PropsI {}

export function App(props: PropsI) {
  console.log(styles);
  const {} = props;
  const [count, setCount] = useState(0);

  const decrement = () => setCount((prev) => prev + 1);

  return (
    <div>
      <nav>
        <Link to={"/about"}>About</Link>
        <br />
        <Link to={"/shop"}>Shop</Link>
      </nav>
      <section>
        <img src={rubl} alt="" />
      </section>
      Привет мир
      <button className={styles.button} onClick={decrement}>
        add
      </button>
      <div>
        <span className={styles.count}>счётчик - </span>
        {count}
      </div>
      <Outlet />
    </div>
  );
}
