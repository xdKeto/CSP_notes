import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Hello from "./Hello.jsx";
import Header from "./components/Header.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    <Header></Header>
    <Hello ></Hello>
  </StrictMode>
);
