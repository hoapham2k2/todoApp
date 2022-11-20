import React from "react";
import ReactDOM from "react-dom/client";
import "../src/styles/main.scss";
import TodoApp from "./components/TodoApp";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TodoApp />
  </React.StrictMode>
);
