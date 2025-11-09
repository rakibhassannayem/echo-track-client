import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import MyActivities from "../pages/MyActivities/MyActivities";
import Challenges from "../pages/Challenges/Challenges";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: () => fetch("http://localhost:3000/challenges"),
      },
      {
        path: "/challenges",
        element: <Challenges />,
        loader: () => fetch("http://localhost:3000/challenges"),
      },
      {
        path: "/my-activities",
        element: <MyActivities />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);
