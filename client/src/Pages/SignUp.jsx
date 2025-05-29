export const SignUp = () => {

  return (
    <div>
      <div className="w-[482px] h-[422px] bg-[#3B3B3B] rounded-4xl flex justify-center items-center">
        <div className="flex flex-col">
          <h1 className="text-white text-2xl mb-4 ">Sign Up</h1>
          <label className="text-white" htmlFor="">
            Name
          </label>
           <input className="bg-[#959292]" type="text" />
          <label className="text-white" htmlFor="">
            Email
          </label>
           <input className="bg-[#959292]" type="text" />
          <label className="text-white" htmlFor="">
            Password
          </label>
          <input className="bg-[#959292]" type="text" />
        </div>
      </div>
    </div>
  );
}