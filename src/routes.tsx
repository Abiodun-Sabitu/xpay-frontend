import { createBrowserRouter, Navigate } from "react-router-dom";
import Auth from "./pages/Auth";
import LoginUI from "./components/LoginForm";
import RegisterUI from "./components/Register";

const router = createBrowserRouter([
  {
    path: "/", // Parent route for Auth layout
    element: <Auth />,
    children: [
      {
        index: true, // This makes it the default child route for "/"
        element: <Navigate to="login" replace />, // Redirect to /login
      },
      {
        path: "login",
        element: <LoginUI />,
      },
      {
        path: "register",
        element: <RegisterUI />,
      },
    ],
  },
]);

export default router;
