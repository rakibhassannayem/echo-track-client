import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import MyActivities from "../pages/MyActivities/MyActivities";
import Challenges from "../pages/Challenges/Challenges";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ChallengeDetails from "../pages/ChallengeDetails/ChallengeDetails";
import NotFound from "../pages/NotFound/NotFound";
import PrivateRoutes from "./PrivateRoutes";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";
import AddChallenge from "../pages/AddChallenge/AddChallenge";

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
        hydrateFallbackElement: <LoadingSpinner />,
      },
      {
        path: "/add-challenge",
        element: (
          <PrivateRoutes>
            <AddChallenge />
          </PrivateRoutes>
        ),
      },
      {
        path: "/challenge-details/:id",
        element: <ChallengeDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/challenge/${params.id}`),
        hydrateFallbackElement: <LoadingSpinner />,
      },
      {
        path: "/my-activities",
        element: (
          <PrivateRoutes>
            <MyActivities />
          </PrivateRoutes>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/loading",
        element: <LoadingSpinner />,
      },
    ],
  },
  {
    path: "/*",
    element: <NotFound />,
  },
]);
