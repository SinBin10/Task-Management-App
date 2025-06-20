import { useState } from "react";
import axios from "axios";

export const Dashboard = () => {
  const [message, setMessage] = useState("");

  const handleDashboard = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get("http://localhost:5000/dashboard", {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log(res);
      setMessage(res.data.msg);
    } catch (error) {
      console.log(error);
      console.log("something went wrong in displaying the dashboard");
    }
  };

  handleDashboard();

  return <h1 className="text-5xl text-white">{message}</h1>;
};
