import React, { useState } from "react";
import styles from "./styles.module.scss";
import { Link, Outlet } from "react-router-dom";
import rublPng from "@/assets/rublPng.png";
import rublJpg from "@/assets/rublJpg.jpg";
import RublSvg from "@/assets/rublSvg.svg";

const error = () => {
  throw new Error("моя ошибка");
};

const getError = () => {
  error();
};

interface PropsI {}

export function App(props: PropsI) {
  const {} = props;
  const [count, setCount] = useState(0);

  const decrement = () => setCount((prev) => prev + 1);

  const handlerClick = () => getError();

  return (
    <div>
      <h1 style={{ color: "black" }}>platform {__PLATFORM__}</h1>
      <nav>
        <Link to={"/about"}>About</Link>
        <br />
        <Link to={"/shop"}>Shop</Link>
      </nav>
      <section data-testid="imagesSection">
        <img src={rublPng} alt="" />
        <img src={rublJpg} alt="" />
        <RublSvg color={"red"} width={100} height={100} />
      </section>
      Привет мир
      <button className={styles.button} onClick={decrement}>
        add
      </button>
      <button onClick={handlerClick}>Получить ошибку</button>
      <div>
        <span className={styles.count}>счётчик - </span>
        {count}
      </div>
      <Outlet />
    </div>
  );
}
