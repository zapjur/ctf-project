import React from "react";
import LoginForm from "../components/LoginForm";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const LoginPage: React.FC = () => {
    const navigate = useNavigate();
    const handleLogin = async (data: { email: string; password: string }) => {
      try {
          const response = await axios.post("http://localhost:8083/api/v1/users/login", data, {
            headers: {
              "Content-Type": "application/json",
            },
          });
      
          if (response.status === 200) {
            localStorage.setItem("authToken", response.data.userType);
      
            if (response.data.userType === "USER") {
              navigate("/user");
            } else if (response.data.userType === "ADMIN") {
              navigate(`/admin/${data.email}`);
            }
          } else {
            alert("Unexpected response: " + JSON.stringify(response));
          }
        } catch (error) {
          if (axios.isAxiosError(error)) {
            if (error.response) {
              alert(`Axios Error: ${error.response.status} - ${error.response.data.messages || "Unknown error"}`);
            } else if (error.request) {
              alert("No response from server. Please check your network connection.");
            } else {
              alert("Error creating request: " + error.message);
            }
          } else {
            alert("Unexpected error: " + (error as Error).message);
          }
        }
      };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
    <div className="w-full max-w-md p-6 bg-white shadow-lg rounded-2xl">
    <h1 className="text-2xl font-bold text-center mb-6">Login</h1>
      <LoginForm onSubmit={handleLogin} />
      <div className="mt-4 text-center">
        <p className="text-sm">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-blue-500 hover:underline"
          >
            Register here
          </Link>
        </p>
      </div>
    </div>
  </div>
  );
};

export default LoginPage;
