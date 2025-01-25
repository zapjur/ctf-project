import React, { useState } from "react";

interface RegisterFormProps {
  onSubmit: (data: { email: string; password: string; adminToken?: string; isAdmin: boolean }) => void;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ onSubmit }) => {
  const [registrationData, setRegistrationData] = useState({
    email: "",
    password: "",
    adminToken: "",
    isAdmin: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setRegistrationData({
      ...registrationData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(registrationData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex items-center space-x-4">
        <label className="w-32 text-sm font-medium">Email</label>
        <input
          type="email"
          name="email"
          value={registrationData.email}
          onChange={handleChange}
          className="flex-1 p-2 border rounded"
        />
      </div>
      <div className="flex items-center space-x-4">
        <label className="w-32 text-sm font-medium">Password</label>
        <input
          type="password"
          name="password"
          value={registrationData.password}
          onChange={handleChange}
          className="flex-1 p-2 border rounded"
        />
      </div>
      {registrationData.isAdmin && (
        <div className="flex items-center space-x-4">
          <label className="w-32 text-sm font-medium">Admin Token</label>
          <input
            type="text"
            name="adminToken"
            value={registrationData.adminToken}
            onChange={handleChange}
            className="flex-1 p-2 border rounded"
          />
        </div>
      )}
      <div className="flex items-center">
        <label
            htmlFor="isAdmin"
            className="text-sm font-medium flex items-center space-x-2"
        >
            <span>I am admin</span>
            <input
            id="isAdmin"
            type="checkbox"
            name="isAdmin"
            checked={registrationData.isAdmin}
            onChange={handleChange}
            className="h-5 w-5"
            />
        </label>
    </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
      >
        Register
      </button>
    </form>
  );
};

export default RegisterForm;
