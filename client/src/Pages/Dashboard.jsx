import { useState } from "react";
import axios from "axios";

export const Dashboard = async () => {
  const [message, setMessage] = useState("yooooooooo");

  try {
    const token = localStorage.getItem("token");
    const res = await axios.get("https://localhost:5000/dashboard", {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log(res);
  } catch (error) {}

  return <h1 className="text-5xl text-white">{message}</h1>;
};
