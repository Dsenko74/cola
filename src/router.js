import * as React from "react";
import { createBrowserRouter } from "react-router-dom";

import Login from "./pages/Login";
import Input from "./components/Input";
import Button from "./components/Button";
import ErrorPage from "./error-page";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/input",
    element: (
      <Input
        margin="margin32"
        label="Username"
        type="primary"
        state="disable"
      />
    ),
  },
  {
    path: "/button",
    element: (
      <Button type="primary" size="normal">
        Button
      </Button>
    ),
  },
]);

export default router;
