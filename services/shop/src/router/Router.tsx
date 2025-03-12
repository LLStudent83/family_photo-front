import { App } from "@/components/app";
import { createBrowserRouter } from "react-router-dom";
import { Shop } from "@/pages/shop";
import { Suspense } from "react";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/shop",
        element: (
          <Suspense fallback={"...loading"}>
            <Shop />
          </Suspense>
        ),
      },
    ],
  },
];

export const router = createBrowserRouter(routes);

export default routes;
