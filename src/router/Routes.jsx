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
import ForgotPassword from "../pages/ForgotPassword/ForgotPassword";
import ActivityDetails from "../pages/ActivityDetails/ActivityDetails";
import MyChallenges from "../pages/MyChallenges/MyChallenges";
import UpdateChallenge from "../pages/UpdateChallenge/UpdateChallenge";
import SkeletonLoading from "../components/SkeletonLoading/SkeletonLoading";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/challenges",
        element: <Challenges />,
        loader: () => fetch("https://echo-track-server.vercel.app/challenges"),
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
        path: "/challenge/details/:id",
        element: <ChallengeDetails />,
        loader: ({ params }) =>
          fetch(`https://echo-track-server.vercel.app/challenge/${params.id}`),
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
        path: "/my-activities/:id",
        element: (
          <PrivateRoutes>
            <ActivityDetails />
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(
            `https://echo-track-server.vercel.app/userChallenges/${params.id}`
          ),
        hydrateFallbackElement: <SkeletonLoading />,
      },
      {
        path: "/my-challenges",
        element: (
          <PrivateRoutes>
            <MyChallenges />
          </PrivateRoutes>
        ),
      },
      {
        path: "/update-challenge/:id",
        element: (
          <PrivateRoutes>
            <UpdateChallenge />
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`https://echo-track-server.vercel.app/challenge/${params.id}`),
        hydrateFallbackElement: <LoadingSpinner />,
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
        path: "/forgot-password",
        element: <ForgotPassword />,
      },
    ],
  },
  {
    path: "/*",
    element: <NotFound />,
  },
]);
