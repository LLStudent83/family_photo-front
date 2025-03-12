import React from "react";
import { Link, Outlet } from "react-router-dom";

interface PropsI {}

export function App() {
  return (
    <div>
      <h1>Root App</h1>
      <Link to="/admin">Admin</Link>
      <br />
      <Link to="/shop">Shop</Link>
      <Outlet />
    </div>
  );
}
