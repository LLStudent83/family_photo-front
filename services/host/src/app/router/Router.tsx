import { App } from "@/app/app";
import { createBrowserRouter } from "react-router-dom";
// @ts-ignore
import showRoutes from "show/Router";
//@ts-ignore
import adminRoutes from "admin/Router";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [...showRoutes, ...adminRoutes],
  },
]);
