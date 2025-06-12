import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const Login = () => {
  const navigate = useNavigate();
  const [emailValue, setEmailValue] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/login", {
        email: emailValue,
        password: password,
      });
      localStorage.setItem("token", res.data.token);
      navigate("/dashboard");
      console.log(res);
      alert(res.data.msg);
    } catch (error) {
      console.log("some error occured in the post request...");
    }
  };

  return (
    <div>
      <form
        onSubmit={handleLogin}
        className="w-[482px] h-[500px] bg-[#3B3B3B] rounded-4xl flex flex-col justify-center items-center gap-y-11"
      >
        <h1 className="text-3xl text-white">Login</h1>
        <div className="flex flex-col w-full px-12">
          <label className="text-white text-xl" htmlFor="">
            Email
          </label>
          <input
            value={emailValue}
            className="bg-[#959292] h-10 mt-2 rounded-xl"
            type="email"
            required
            onChange={(e) => setEmailValue(e.target.value)}
          />
        </div>
        <div className="flex flex-col w-full px-12">
          <label className="text-white text-xl" htmlFor="">
            Password
          </label>
          <input
            value={password}
            className="bg-[#959292] h-10 mt-2 rounded-xl"
            type="password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex flex-col items-center">
          <button
            className="bg-blue-700 px-4 py-1.5 rounded-xl text-white inline w-auto"
            type="submit"
          >
            Login
          </button>
          <p className="text-blue-400 mt-4">
            Don't have an account ? <Link to="/signup">SignUp</Link>
          </p>
          <p className="text-blue-400 mt-4">
            <Link to="/reset">Reset your password</Link>
          </p>
        </div>
      </form>
    </div>
  );
};
