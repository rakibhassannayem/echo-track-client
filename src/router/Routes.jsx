import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import DashboardLayout from "../layout/DashboardLayout";
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
import About from "../pages/About/About";
import DashboardHome from "../pages/Dashboard/DashboardHome";
import Profile from "../pages/Dashboard/Profile";
import Contact from "../pages/Contact/Contact";

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
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/challenges",
        element: <Challenges />,
        loader: () => fetch("https://echo-track-server.vercel.app/challenges"),
        hydrateFallbackElement: <LoadingSpinner />,
      },
      {
        path: "/challenge/details/:id",
        element: <ChallengeDetails />,
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
    path: "/dashboard",
    element: (
      <PrivateRoutes>
        <DashboardLayout />
      </PrivateRoutes>
    ),
    children: [
      {
        index: true,
        element: <DashboardHome />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "my-activities",
        element: <MyActivities />,
      },
      {
        path: "my-activities/:id",
        element: <ActivityDetails />,
        loader: ({ params }) =>
          fetch(
            `https://echo-track-server.vercel.app/userChallenges/${params.id}`
          ),
      },
      {
        path: "my-challenges",
        element: <MyChallenges />,
      },
      {
        path: "add-challenge",
        element: <AddChallenge />,
      },
      {
        path: "update-challenge/:id",
        element: <UpdateChallenge />,
        loader: ({ params }) =>
          fetch(`https://echo-track-server.vercel.app/challenge/${params.id}`),
      },
    ],
  },
  {
    path: "/*",
    element: <NotFound />,
  },
]);
