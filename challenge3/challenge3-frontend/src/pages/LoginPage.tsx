import React from "react";
import LoginForm from "../components/LoginForm";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const LoginPage: React.FC = () => {
    const navigate = useNavigate();
    const handleLogin = async (data: { email: string; password: string }) => {
        try {
          const response = await axios.post("http://localhost:8080/api/v1/users/login", data, {
            headers: {
              "Content-Type": "application/json",
            },
          });
          console.log(response);
          if (response.status === 200) {
            console.log("Login successful:", response.data);
            console.log("user type: ", response.data.userType);
            localStorage.setItem("authToken", response.data.userType)
            if(response.data.userType === "USER"){
                navigate("/user")
            }
            if (response.data.userType === "ADMIN") {
                navigate(`/admin/${data.email}`);
              }
              
            console.log("User logged in successfully!");
          } else {
            console.error("Unexpected response:", response);
          }
        } catch (error) {
          if (axios.isAxiosError(error)) {
            console.error("Axios error:", error.response?.data || error.message);
          } else {
            console.error("Unexpected error:", error);
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
