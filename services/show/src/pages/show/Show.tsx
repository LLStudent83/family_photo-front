import React from "react";
import { Link, Outlet } from "react-router-dom";

interface PropsI {}

export default function Show() {
  return (
    <div>
      <h1> Show photos </h1>
      {/* <Link to={"/main_shop/cart"}>-Cart</Link>*/}
      <Outlet />
    </div>
  );
}
