import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { TaskContextProvide } from "./context/TaskContext.jsx"; //Renderiza el contexto, o contexto de jsx

ReactDOM.createRoot(document.getElementById("root")).render(
  //Se usa estrictamente para detectar problemas en la aplicación
  <React.StrictMode>
    <TaskContextProvide>
      <App />
    </TaskContextProvide>
  </React.StrictMode>
);
