import { createBrowserRouter, Navigate } from "react-router-dom";
import BoardingLayout from "./pages/Login-Onboarding/BoardingLayout";
import LoginUI from "./pages/Login-Onboarding/Login";
import SignUpUI from "./pages/Login-Onboarding/SignUp";
import ForgotPassword from "./pages/Login-Onboarding/ForgotPassword";
import ResetPassword from "./pages/Login-Onboarding/ResetPassword";
import Dashboard from "./pages/Dashboard/DashboardPage";

const router = createBrowserRouter([
  {
    path: "/", // Parent route for Auth layout
    element: <BoardingLayout />,
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
        path: "sign-up",
        element: <SignUpUI />,
      },
      {
        path: "forgot-password",
        element: <ForgotPassword />,
      },
      {
        path: "/reset-password",
        element: <ResetPassword />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);

export default router;
