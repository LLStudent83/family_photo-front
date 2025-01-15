import { createRoot } from "react-dom/client";
import { App } from "./components/app";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { About } from "@/components/pages/about";
import { Shop } from "@/components/pages/shop";
import { Suspense } from "react";

const root = document.getElementById("root");

if (!root) {
  throw new Error("root not found");
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/about",
        element: (
          <Suspense fallback={"...loading"}>
            <About />
          </Suspense>
        ),
      },
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
]);

const container = createRoot(root);

container.render(<RouterProvider router={router} />);
