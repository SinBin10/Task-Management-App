export const SignUp = () => {
  return (
    <main className="block m-auto">
      
      <section className=" block m-auto w-9/12 h-max bg-[#3B3B3B] rounded-4xl justify-items-center p-6">
        
      
        <div className="flex flex-col w-full px-12 justify-center">
          
          {/* Header */}
          <header className="text-center">
            <h1 className="text-white text-2xl font-bold mb-4 m-auto p-0.5">Sign Up</h1>
            <p className="m-auto font-bold">Create a free account or Login</p>
          </header>

          {/* Form Section */}
          <form>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Full Name"
                required
                className="bg-[#959292] w-full p-2 rounded"
              />
            </div>

            <div className="mb-4">
              <input
                type="email"
                placeholder="Email Address"
                required
                className="bg-[#959292] w-full p-2 rounded"
              />
            </div>

            <div className="mb-4">
              <input
                type="password"
                placeholder="Password"
                required
                className="bg-[#959292] w-full p-2 rounded"
              />
            </div>

              {/* The password div will have script to validate length, charachters and all that */}
            <div className="mb-4">
              <input
                type="password"
                placeholder="Confirm Password"
                required
                className="bg-[#959292] w-full p-2 rounded"
              />
            </div>

            {/* Terms and Conditions */}
            <div className="text-white text-sm mb-4">
              <p>
                By pressing agree and continue below, I agree to (our app's name goes here) terms and conditions of service and privacy policy
              </p>
            </div>

            {/* Submit button */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-[#959292] text-black p-2 rounded m-auto font-bold"
              >
                Agree and Continue
              </button>
            </div>
          </form>
        </div>

      </section>
    </main>
  );
}