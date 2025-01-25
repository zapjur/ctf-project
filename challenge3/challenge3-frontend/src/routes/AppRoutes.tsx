import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import UserPage from "../pages/UserPage";
import PrivateUserRoute from "./PrivateUserRoute";
import AdminPage from "../pages/AdminPage";
import PrivateAdminRoute from "./PrivateAdminRoute";

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route
          path="/user"
          element={
            <PrivateUserRoute>
              <UserPage />
            </PrivateUserRoute>
          }
        />
        <Route
          path="/admin/:email"
          element={
            <PrivateAdminRoute>
              <AdminPage />
            </PrivateAdminRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
