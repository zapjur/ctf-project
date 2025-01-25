import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const AdminPage: React.FC = () => {
  const { email } = useParams<{ email: string }>();
  const [task, setTask] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    const fetchFlag = async () => {
      try {
        const response = await axios.get(`http://localhost:8083/api/v1/flag/${email}`, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        console.log("Response data:", response.data);
        setTask(response.data.task); 
        setMessage(response.data.message)
      } catch (err) {
        console.error("Error fetching flag:", err);
      }
    };

    if (email) {
      fetchFlag();
    }
  }, [email]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <h1>Welcome to the Admin Page, {email}</h1>
      <div
        style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
        }}>
        <h1>{task}</h1>
        <h1>{message}</h1>
      </div>
    </div>
  );
};

export default AdminPage;
