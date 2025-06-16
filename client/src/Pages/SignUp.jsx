import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export const SignUp = () => {
//   const [fullName, setFullName] = useState("");
//   const [emailValue, setEmailValue] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (password !== confirmPassword) {
//       alert("Passwords do not match!");
//       return;
//     }

//     try {
//       const res = await axios.post("http://localhost:5000/signup", {
//         name: fullName,
//         email: emailValue,
//         confirmPassword,
//       });
//       console.log(res);
//       alert(res.data.msg);
//     } catch (error) {
//       console.error("Error during signup:", error);
//       alert("Something went wrong during signup.");
//     }
//   };

//   return (
//     <main className="block m-auto">
//       <section className="block m-auto w-[482px] h-max bg-[#3B3B3B] rounded-4xl justify-items-center p-6">
//         <div className="flex flex-col w-full px-12 justify-center">
//           {/* Header */}
//           <header className="text-center">
//             <h1 className="text-white text-2xl font-bold mb-4 m-auto p-0.5">
//               Sign Up
//             </h1>
//             <p className="m-auto font text-blue-400">
//               Already have an account? <Link to="/login">Login</Link>
//             </p>
//           </header>

//           {/* Form Section */}
//           <form onSubmit={handleSubmit}>
//             <div className="mb-4">
//               <input
//                 type="text"
//                 placeholder="Full Name"
//                 required
//                 className="bg-[#959292] w-full p-2 rounded-xl"
//                 value={fullName}
//                 onChange={(e) => setFullName(e.target.value)}
//               />
//             </div>

//             <div className="mb-4">
//               <input
//                 type="email"
//                 placeholder="Email Address"
//                 required
//                 className="bg-[#959292] w-full p-2 rounded-xl"
//                 value={emailValue}
//                 onChange={(e) => setEmailValue(e.target.value)}
//               />
//             </div>

//             <div className="mb-4">
//               <input
//                 type="password"
//                 placeholder="Password"
//                 required
//                 className="bg-[#959292] w-full p-2 rounded-xl"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//             </div>

//             <div className="mb-4">
//               <input
//                 type="password"
//                 placeholder="Confirm Password"
//                 required
//                 className="bg-[#959292] w-full p-2 rounded-xl"
//                 value={confirmPassword}
//                 onChange={(e) => setConfirmPassword(e.target.value)}
//               />
//             </div>

//             {/* Terms and Conditions */}
//             <div className="text-white text-sm mb-4 flex items-start gap-2">
//               <input className="mt-1" type="checkbox" required />
//               <p>
//                 By pressing agree and continue below, I agree to (your app's
//                 name) terms and conditions of service and privacy policy.
//               </p>
//             </div>

//             {/* Submit button */}
//             <div className="text-center">
//               <button
//                 type="submit"
//                 className="bg-blue-700 text-white p-2 m-auto font-bold rounded-xl"
//               >
//                 Sign Up
//               </button>
//             </div>
//           </form>
//         </div>
//       </section>
//     </main>
//   );
const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState(""); // Only for signup

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = { username, password };
    if (!isLogin) payload.email = email;

    // Replace with actual login/signup API call
    console.log(isLogin ? "Logging in:" : "Signing up:", payload);
  };

  return (
    <div
      className="relative flex min-h-screen flex-col bg-[#141414] overflow-x-hidden"
      style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}
    >
      <div className="layout-container flex h-full grow flex-col">
        <header className="flex items-center justify-between whitespace-nowrap border-b border-[#303030] px-10 py-3">
          <div className="flex items-center gap-4 text-white">
            <div className="size-4">
              <svg
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 6H42L36 24L42 42H6L12 24L6 6Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">
              TaskMaster
            </h2>
          </div>
        </header>

        <div className="px-40 flex flex-1 justify-center py-5">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col w-[512px] max-w-[512px] py-5 flex-1"
          >
            <h2 className="text-white text-[28px] font-bold leading-tight px-4 text-center pb-3 pt-5">
              {isLogin ? "Welcome back" : "Create your account"}
            </h2>

            {!isLogin && (
              <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                <label className="flex flex-col min-w-40 flex-1">
                  <input
                    type="email"
                    placeholder="Email"
                    className="form-input flex w-full resize-none rounded-lg text-white focus:outline-0 focus:ring-0 border-none bg-[#303030] h-14 placeholder:text-[#ababab] p-4 text-base"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </label>
              </div>
            )}

            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <input
                  type="text"
                  placeholder="Username"
                  className="form-input flex w-full resize-none rounded-lg text-white focus:outline-0 focus:ring-0 border-none bg-[#303030] h-14 placeholder:text-[#ababab] p-4 text-base"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </label>
            </div>

            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <input
                  type="password"
                  placeholder="Password"
                  className="form-input flex w-full resize-none rounded-lg text-white focus:outline-0 focus:ring-0 border-none bg-[#303030] h-14 placeholder:text-[#ababab] p-4 text-base"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </label>
            </div>

            <div className="flex px-4 py-3">
              <button
                type="submit"
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 flex-1 bg-[#141414] text-white text-sm font-bold leading-normal tracking-[0.015em]"
              >
                <span className="truncate">
                  {isLogin ? "Log in" : "Sign up"}
                </span>
              </button>
            </div>

            <p className="text-[#ababab] text-sm font-normal leading-normal pb-3 pt-1 px-4 text-center">
              {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
              <button
                type="button"
                onClick={() => setIsLogin(!isLogin)}
                className="underline text-white"
              >
                {isLogin ? "Sign up" : "Log in"}
              </button>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};
