import React from "react";
import { Link, Outlet } from "react-router-dom";

interface PropsI {}

export function App() {
  return (
    <div>
      <h1>App</h1>
      <Link to="/about">About</Link>
      <br />
      <Link to="/shop">Shop</Link>
      <Outlet />
    </div>
  );
}
