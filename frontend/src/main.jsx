import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import {
  Home,
  CreateExpense,
  ShowExpense,
  EditExpense,
  DeleteExpense,
} from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/expense/create",
    element: <CreateExpense />,
  },
  {
    path: "/expense/details/:id",
    element: <ShowExpense />,
  },
  {
    path: "/expense/edit/:id",
    element: <EditExpense />,
  },
  {
    path: "/expense/delete/:id",
    element: <DeleteExpense />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SnackbarProvider>
      <RouterProvider router={router} />
    </SnackbarProvider>
  </React.StrictMode>
);
