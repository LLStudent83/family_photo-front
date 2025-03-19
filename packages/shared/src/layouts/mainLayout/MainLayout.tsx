import classes from "./mainLayout.module.scss";
import { Link } from "react-router-dom";

export const MainLayout = () => {
  return (
    <>
      <header className={classes.header}>
        <Link to={"/show"}>Посмотреть фото</Link>
        <Link to={"/downLoad"}>Загрузить фото</Link>
        <Link to={"/user"}>Личный кабинет</Link>
        <Link to={"/adminPanel"}>Админ панель</Link>
      </header>
      <main className={classes.main}></main>
      <footer className={classes.footer}></footer>
    </>
  );
};
