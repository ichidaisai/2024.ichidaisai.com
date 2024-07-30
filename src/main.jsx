import React from "react";
import ReactDOM from "react-dom/client";
import "reset-css/reset.css";
import "./styles/App.css";
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import { Pending } from "./components/Pending";
import Layout from "./Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Pending />,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
);
