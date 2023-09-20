import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [signIn, setSignIn] = useState(true);
  return (
    <div>
      <Header />
      <div className="relative text-white flex justify-center items-center">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/dc1cf82d-97c9-409f-b7c8-6ac1718946d6/14a8fe85-b6f4-4c06-8eaf-eccf3276d557/IN-en-20230911-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="login-background"
        />
        <div className="absolute bg-black/80 rounded-md w-[25%] top-32 p-8">
          <div className="grid gap-4 m-8 ">
            <h1 className="font-semibold text-3xl m-3">
              {signIn ? "Sign In" : "Sign Up"}
            </h1>
            <form className="">
              {!signIn && (
                <input
                  className="p-3 my-3 w-full bg-zinc-800 rounded-md"
                  type="text"
                  placeholder="Full Name"
                />
              )}
              <input
                className="p-3 my-3 w-full bg-zinc-800 rounded-md"
                type="text"
                placeholder="Email Address"
              />
              <input
                className="p-3 my-3 w-full bg-zinc-800 rounded-md"
                type="password"
                placeholder="Password"
              />
              <button className="p-3 my-3 w-full bg-[#e50914] font-semibold rounded-md">
                {signIn ? "Sign In" : "Sign Up"}
              </button>
            </form>
            <span className="p-3">
              {signIn ? "New to Netflix?" : "Already an User?"}

              <span
                className="cursor-pointer hover:underline underline-offset-1"
                onClick={() => setSignIn(!signIn)}
              >
                {signIn ? " Sign up now." : " Sign In now."}
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
