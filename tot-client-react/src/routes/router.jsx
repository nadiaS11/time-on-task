import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import MainLayout from "../Pages/MainLayout";
import LoginPage from "../Pages/login-signup/LoginPage";
import SignUp from "../components/SignUp";
import ErrorPage from "../Pages/errorpage/ErrorPage";
import TaskBoard from "../Pages/taskboard/TaskBoard";
import AddTask from "../Pages/taskboard/AddTask";
import AllTasks from "../Pages/taskboard/AllTasks";
import UpdateTask from "../Pages/taskboard/UpdateTask";
import PrivateRoute from "./PrivateRoute";
import Pricing from "../Pages/others/Pricing";
import Features from "../Pages/others/Features";

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
        path: "/features",
        element: <Features />,
      },
      {
        path: "/pricing",
        element: <Pricing />,
      },
      {
        path: "/taskboard",
        element: (
          <PrivateRoute>
            <TaskBoard />
          </PrivateRoute>
        ),
        children: [
          {
            path: "add-task",
            element: (
              <PrivateRoute>
                <AddTask />{" "}
              </PrivateRoute>
            ),
          },
          {
            path: "update-task/:id",
            element: (
              <PrivateRoute>
                <UpdateTask />
              </PrivateRoute>
            ),
          },
          {
            path: "/taskboard",
            element: (
              <PrivateRoute>
                <AllTasks />{" "}
              </PrivateRoute>
            ),
          },
        ],
      },
    ],
  },
  { path: "/join", element: <SignUp /> },
  { path: "/login", element: <LoginPage /> },
]);
