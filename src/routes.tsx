import { createBrowserRouter, Navigate } from "react-router-dom";
import Layout from "./pages/Login-Onboarding/BoardingLayout";
import LoginUI from "./pages/Login-Onboarding/LoginForm";
import RegisterUI from "./pages/Login-Onboarding/Register";

const router = createBrowserRouter([
  {
    path: "/", // Parent route for Auth layout
    element: <Layout />,
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
