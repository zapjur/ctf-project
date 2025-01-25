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
          let response = null;
          if (data.isAdmin) {
            response = await axios.post("http://localhost:8083/api/v1/users/create/admin", {
              email: data.email,
              password: data.password,
              adminToken: data.adminToken,
            });
          } else {
            response = await axios.post("http://localhost:8083/api/v1/users/create/default", {
              email: data.email,
              password: data.password,
            });
          }
        
          if (response.status === 201) {
            console.log("Registration successful for:", data);
            alert("Registration successful for " + data.email);
          }
        } catch (error) {
          if (axios.isAxiosError(error)) {
            if (error.response) {
              if (error.response.status === 409) {
                alert("Conflict error: " + error.response.data.messages); 
              } else {
                alert(`API error: ${error.response.status} - ${error.response.data.messages}`);
              }
            } else {
              // Błąd bez odpowiedzi (np. problem z siecią)
              alert("Network error: " + error.message);
            }
          } else {
            // Inne typy błędów (nie Axios)
            alert("Unexpected error: " + (error as Error).message);
          }
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
