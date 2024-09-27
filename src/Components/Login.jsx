import React, { useState } from "react";
import Header from "./Header";

import Banner from "../images/Banner.jpg";

const Login = () => {
  const [signIn, setSignUp] = useState(true);

  const handleSign = () => {
    setSignUp(!signIn);
  };

  return (
    <div>
      <Header />
      <div className="login-main">
        <img src={Banner} className="Banner" />
        <div className="login">
          <div className="login__form">
            <h2 className="text-white font-bold text-5xl mb-12">
              {signIn ? "Sign In" : "Sign Up"}
            </h2>
            <div className="login__form-inputs">

            { !signIn && (<input
                type="text"
                placeholder="Enter your name"
                required
                className="block mb-10 w-full px-5 py-7 rounded-md"
              />)}

              {!signIn && (<input
                type="number"
                placeholder="Enter your mobile number"
                required
                className="block mb-10 w-full px-5 py-7 rounded-md"
              />)}

              <input
                type="text"
                placeholder="Email or mobile number"
                required
                className="block mb-10 w-full px-5 py-7 rounded-md"
              />
              <input
                type="password"
                placeholder="Placeholder"
                required
                className="block mb-10 w-full px-5 py-7 rounded-md"
              />
              <button className="mb-10 w-full px-5 py-7 text-white bg-[#e50915] rounded-md">
                {signIn ? "Sign In" : "Sign Up"}
              </button>

              <p
                className="mb-10 text-white cursor-pointer"
                onClick={handleSign}
              >
                {signIn ? (
                  <>
                    New to Netflix?{" "}
                    <span className="font-bold">Sign up now.</span>
                  </>
                ) : (
                  <>
                    Already Registered{" "}
                    <span className="font-bold">Sign In now.</span>
                  </>
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
