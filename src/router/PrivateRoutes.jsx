import { use } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router";

const PrivateRoutes = ({ children }) => {
  const { user } = use(AuthContext);
  if (user && user?.email) {
    return children;
  }
  return <Navigate to={"/login"} />;
};

export default PrivateRoutes;
