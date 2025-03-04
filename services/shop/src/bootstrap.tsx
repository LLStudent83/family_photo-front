import { createRoot } from "react-dom/client";
import { App } from "./components/app";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Shop } from "@/pages/shop";
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
