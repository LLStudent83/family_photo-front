import React from "react";
import { Link, Outlet } from "react-router-dom";

interface PropsI {}

export function App() {
  return (
    <div>
      <h1>APP ADMIN</h1>
      <Outlet />
    </div>
  );
}
