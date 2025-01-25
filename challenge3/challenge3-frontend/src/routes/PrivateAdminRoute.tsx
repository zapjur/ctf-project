import React from "react";
import { Navigate } from "react-router-dom";

interface PrivateAdminRouteProps {
  children: React.ReactNode;
}

const PrivateAdminRoute: React.FC<PrivateAdminRouteProps> = ({ children }) => {
  // Sprawdź, czy użytkownik jest zalogowany (np. na podstawie tokena w localStorage)
  const isAuthenticated = !!localStorage.getItem("authToken") && localStorage.getItem("authToken") === "ADMIN";

  return isAuthenticated ? (
    <>{children}</>
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateAdminRoute;