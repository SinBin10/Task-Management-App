import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export const SignUp = () => {
  const [fullName, setFullName] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/signup", {
        name: fullName,
        email: emailValue,
        confirmPassword,
      });
      console.log(res);
      alert(res.data.msg);
    } catch (error) {
      console.error("Error during signup:", error);
      alert("Something went wrong during signup.");
    }
  };

  return (
    <main className="block m-auto">
      <section className="block m-auto w-[482px] h-max bg-[#3B3B3B] rounded-4xl justify-items-center p-6">
        <div className="flex flex-col w-full px-12 justify-center">
          {/* Header */}
          <header className="text-center">
            <h1 className="text-white text-2xl font-bold mb-4 m-auto p-0.5">
              Sign Up
            </h1>
            <p className="m-auto font text-blue-400">
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </header>

          {/* Form Section */}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Full Name"
                required
                className="bg-[#959292] w-full p-2 rounded-xl"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <input
                type="email"
                placeholder="Email Address"
                required
                className="bg-[#959292] w-full p-2 rounded-xl"
                value={emailValue}
                onChange={(e) => setEmailValue(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <input
                type="password"
                placeholder="Password"
                required
                className="bg-[#959292] w-full p-2 rounded-xl"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <input
                type="password"
                placeholder="Confirm Password"
                required
                className="bg-[#959292] w-full p-2 rounded-xl"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>

            {/* Terms and Conditions */}
            <div className="text-white text-sm mb-4 flex items-start gap-2">
              <input className="mt-1" type="checkbox" required />
              <p>
                By pressing agree and continue below, I agree to (your app's
                name) terms and conditions of service and privacy policy.
              </p>
            </div>

            {/* Submit button */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-700 text-white p-2 m-auto font-bold rounded-xl"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};
