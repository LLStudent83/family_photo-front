import { createBrowserRouter } from "react-router-dom";
import { Show } from "@/pages/show";
import { App } from "../app";
import { Suspense } from "react";

const routes = [
  {
    path: "/",
    element: (
      <Suspense fallback={"...Loading"}>
        <App />
        {/* <Show /> */}
      </Suspense>
    ),
    children: [
      // {
      //   path: "main_shop/shop",
      //   element: (
      //     <Suspense fallback={"...loading"}>
      //       <Shop />
      //     </Suspense>
      //   ),
      // },
    ],
  },
];

export const router = createBrowserRouter(routes);

export default routes;
