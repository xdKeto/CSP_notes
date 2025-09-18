import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home.jsx";
import About from "./About.jsx";
import NotFound from "./NotFound.jsx";
import Dashboard from "./Dashboard.jsx";
import DashboardItems from "./DashboardItems.jsx";
import Profile from "./Profile.jsx";
import Layout from "./Layout.jsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/home", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "*", element: <NotFound /> },
  { path: "/dashboard", element: <Dashboard /> },
  { path: "/dashboard/:id", element: <DashboardItems /> },
  { path: "/profile", element: <Profile /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
