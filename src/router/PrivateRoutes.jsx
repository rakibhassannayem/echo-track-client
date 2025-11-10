import { use } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = use(AuthContext);

  if (loading) {
    return <LoadingSpinner />;
  }
  if (user && user?.email) {
    return children;
  }
  return <Navigate to={"/login"} />;
};

export default PrivateRoutes;
