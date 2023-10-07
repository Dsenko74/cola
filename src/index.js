import React from "react";
import { createRoot } from "react-dom/client";
import router from "./router";
//import App from "./App";
import { RouterProvider as Router } from "react-router-dom";
import "./index.scss";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Router router={router} />
  </React.StrictMode>,
);
