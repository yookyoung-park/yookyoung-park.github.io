import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ChartPage from "./routes/Chart";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ChartPage />,
  },
  {
    path: "/chart",
    element: <ChartPage />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
