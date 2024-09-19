import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App"; // Import your App component
import "./index.css"; // Import any global styles

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App /> {/* Render App, which now contains RouterProvider */}
  </React.StrictMode>
);
