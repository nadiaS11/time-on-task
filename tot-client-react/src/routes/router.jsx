import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import MainLayout from "../Pages/MainLayout";
import SignUp from "../components/SignUp";
import LoginPage from "../Pages/login-signup/LoginPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  { path: "/register", element: <SignUp /> },
  { path: "/login", element: <LoginPage /> },
]);
