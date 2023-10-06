import React, { Children } from "react";
import { useAuth } from "../contexts/AuthProvider";
import { Navigate } from "react-router-dom";

function AuthRequired({ children }) {
  const { isLogin } = useAuth();
  if (isLogin) {
    return Children;
  } else {
    return <Navigate to="/login" replace />;
  }
}

export default AuthRequired;
