export const Login = () => {
  return (
    <div>
      <form className="w-[482px] h-[422px] bg-[#3B3B3B] rounded-4xl flex flex-col justify-center items-center gap-y-16">
        <div className="flex flex-col w-full px-12">
          <label className="text-white text-xl" htmlFor="">
            Email
          </label>
          <input
            className="bg-[#959292] h-10 mt-2 rounded-xl"
            type="email"
            required
          />
        </div>
        <div className="flex flex-col w-full px-12">
          <label className="text-white text-xl" htmlFor="">
            Password
          </label>
          <input
            className="bg-[#959292] h-10 mt-2 rounded-xl"
            type="password"
            required
          />
        </div>
        <div className="flex flex-col items-center">
          <button
            className="bg-blue-700 px-4 py-1.5 rounded-xl text-white inline w-auto"
            type="submit"
          >
            Login
          </button>
          <p className="text-blue-400">
            Don't have an account ? <a href="/signup">SignUp</a>
          </p>
        </div>
      </form>
    </div>
  );
};
