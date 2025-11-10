import { useState } from "react";
import { AuthContext } from "./AuthContext";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: 'nayem',
    email: 'rajhk@gamil.com'
  });
  const [loading, setLoading] = useState(true);


  const authInfo = {
    user,
    setUser,
    loading,
    setLoading,
  };

  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
