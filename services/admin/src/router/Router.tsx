import { App } from "@/components/app";
import { createBrowserRouter } from "react-router-dom";
import { About } from "@/pages/about";
import { Suspense } from "react";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/admin",
        element: (
          <Suspense fallback={"...loading"}>
            <About />
          </Suspense>
        ),
      },
    ],
  },
];

export const router = createBrowserRouter(routes);

export default routes;
