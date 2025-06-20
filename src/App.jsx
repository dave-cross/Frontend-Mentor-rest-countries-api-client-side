import { createBrowserRouter, RouterProvider } from "react-router";
import Index, { loader as indexLoader } from "./Index";
import Details, { loader as detailsLoader } from "./Details";
// import Layout from "./Layout";

import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    // Component: Layout,
    children: [
      {
        index: true,
        Component: Index,
        loader: indexLoader,
      },
      {
        path: ":id",
        Component: Details,
        loader: detailsLoader,
        errorElement: <div>404</div>,
      },
    ],
  },
]);

export default function () {
  return <RouterProvider router={router}></RouterProvider>;
}
