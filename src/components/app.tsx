import React, { useState } from "react";
import styles from "./styles.module.scss";
import { Link, Outlet } from "react-router-dom";
import rublPng from "@/assets/rublPng.png";
import rublJpg from "@/assets/rublJpg.jpg";
import RublSvg from "@/assets/rublSvg.svg";

const todo = (id: number) => {
  console.log(id);
};

interface PropsI {}

export function App(props: PropsI) {
  console.log(styles);
  const {} = props;
  const [count, setCount] = useState(0);

  todo(12);

  const decrement = () => setCount((prev) => prev + 1);

  return (
    <div>
      <h1>platform {__PLATFORM__}</h1>
      <nav>
        <Link to={"/about"}>About</Link>
        <br />
        <Link to={"/shop"}>Shop</Link>
      </nav>
      <section>
        <img src={rublPng} alt="" />
        <img src={rublJpg} alt="" />
        <RublSvg color={"red"} width={100} height={100} />
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
