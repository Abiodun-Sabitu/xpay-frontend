import React from "react";
import { RouterProvider } from "react-router-dom"; // Import RouterProvider
import router from "./routes"; // Import your router configuration

const App: React.FC = () => {
  return <RouterProvider router={router} />; // Wrap your routes with RouterProvider
};

export default App; // Export App component
