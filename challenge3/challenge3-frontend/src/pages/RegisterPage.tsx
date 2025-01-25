import React from "react";
import RegisterForm from "../components/RegisterForm";
import { Link } from "react-router-dom";
import axios from "axios";

const RegisterPage: React.FC = () => {
    const handleRegister = async (data: {
        email: string;
        password: string;
        adminToken?: string;
        isAdmin: boolean;
      }) => {
        try {
          if (data.isAdmin) {
            // Wyślij zapytanie do endpointu dla administratora
            await axios.post("http://localhost:8080/api/v1/users/create/admin", {
              email: data.email,
              password: data.password,
              adminToken: data.adminToken, 
            });
          } else {
            await axios.post("http://localhost:8080/api/v1/users/create/default", {
              email: data.email,
              password: data.password,
            });
          }
          console.log("Registration successful for:", data);
        } catch (error) {
          console.error("Registration error:", error);
        }
      };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="w-full max-w-md p-4 bg-white shadow-lg rounded-2xl">
        <h1 className="text-2xl font-bold text-center mb-6">Register</h1>
            <RegisterForm onSubmit={handleRegister} />
            <div className="mt-4 text-center">
                <p className="text-sm">
                Already have an account?{" "}
                <Link
                    to="/login"
                    className="text-blue-500 hover:underline"
                >
                    Login here
                </Link>
                </p>
        </div>
    </div>
  </div>
  );
};

export default RegisterPage;
