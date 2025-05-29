export const Login = () => {
  return (
    <div>
      <div className="w-[482px] h-[422px] bg-[#3B3B3B] rounded-4xl flex flex-col justify-center items-center gap-y-32">
        <div className="flex flex-col w-full px-12">
          <label className="text-white text-xl" htmlFor="">
            Email
          </label>
          <input className="bg-[#959292] h-10 mt-2 rounded-xl" type="text" />
        </div>
        <div className="flex flex-col w-full px-12">
          <label className="text-white text-xl" htmlFor="">
            Password
          </label>
          <input className="bg-[#959292] h-10 mt-2 rounded-xl" type="text" />
        </div>
        <a href="/">Login</a>
      </div>
    </div>
  );
};
