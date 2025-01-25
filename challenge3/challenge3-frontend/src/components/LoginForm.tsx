import React, { useState } from "react";

interface LoginFormProps {
  onSubmit: (data: { email: string; password: string }) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
  const [loginData, setLoginData] = useState({ email: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(loginData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex items-center space-x-4">
        <label className="w-32 text-sm font-medium">Email</label>
        <input
          type="email"
          name="email"
          value={loginData.email}
          onChange={handleChange}
          className="flex-1 p-2 border rounded"
        />
      </div>
      <div className="flex items-center space-x-4">
        <label className="w-32 text-sm font-medium">Password</label>
        <input
          type="password"
          name="password"
          value={loginData.password}
          onChange={handleChange}
          className="flex-1 p-2 border rounded"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600"
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;
