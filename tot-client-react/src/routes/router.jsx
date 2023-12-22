import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import MainLayout from "../Pages/MainLayout";
import LoginPage from "../Pages/login-signup/LoginPage";
import SignUp from "../components/SignUp";
import ErrorPage from "../Pages/errorpage/ErrorPage";
import TaskBoard from "../Pages/taskboard/TaskBoard";
import AddTask from "../Pages/taskboard/AddTask";
import AllTasks from "../Pages/taskboard/AllTasks";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/taskboard",
        element: <TaskBoard />,
        children: [
          {
            path: "add-task",
            element: <AddTask />,
          },
          {
            path: "tasks",
            element: <AllTasks />,
          },
        ],
      },
    ],
  },
  { path: "/join", element: <SignUp /> },
  { path: "/login", element: <LoginPage /> },
]);
