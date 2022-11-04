import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { SIGN_UP } from "../../constants/routes";

// redirects to login screen if youre not yet authenticated.
const PrivateRoute = ({ children }) => {
    let auth = useAuth();
    return auth.user ? children : <Navigate to={SIGN_UP} />;
  }

  export default PrivateRoute;