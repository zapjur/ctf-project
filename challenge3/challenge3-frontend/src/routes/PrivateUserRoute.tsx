import React from "react";
import { Navigate } from "react-router-dom";

interface PrivateUserRouteProps {
  children: React.ReactNode;
}

const PrivateUserRoute: React.FC<PrivateUserRouteProps> = ({ children }) => {
  const isAuthenticated = !!localStorage.getItem("authToken") && localStorage.getItem("authToken") === "USER";

  return isAuthenticated ? (
    <>{children}</>
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateUserRoute;
