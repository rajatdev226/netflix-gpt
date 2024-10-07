import React, { useRef, useState } from "react";
import Header from "./Header";

import Banner from "../images/Banner.jpg";
import { validateEmail, validateName, validatePassword } from "../Utils/validate";

const Login = () => {
  const [signIn, setSignUp] = useState(true);

  const [errorMessage, setErrorMessage] = useState(null)
  const [errorMessagePass, setErrorMessagePass] = useState(null)
//   const [errorMessageName, setErrorMessageName] = useState(null)

  const handleSign = () => {
    setSignUp(!signIn);
  };

  const email = useRef(null);
  const password = useRef(null);
//   const name = useRef(null);

  const handleSigningbtn = () => {
    const emailValue = email.current.value;
    const passwordValue = password.current.value;
    // const nameValue = password.current.value;
  
    const emailMessage = validateEmail(emailValue);
    setErrorMessage(emailMessage);
  
    const passwordMessage = validatePassword(passwordValue);
    setErrorMessagePass(passwordMessage);

    // const nameMessage = validateName(nameValue);
    // setErrorMessageName(nameMessage);

  };

  return (
    <div>
      <Header />
      <div className="login-main">
        <img src={Banner} className="Banner" />
        <div className="login">
          <form
            action=""
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <div className="login__form">
              <h2 className="text-white font-bold text-5xl mb-12">
                {signIn ? "Sign In" : "Sign Up"}
              </h2>
              <div className="login__form-inputs">
                {!signIn && (
                  <input
                    // ref={name}
                    type="text"
                    placeholder="Enter your name"
                    required
                    className="block mb-10 w-full px-5 py-7 rounded-md"
                  />
                )}
                {/* <p className="text-[#e50915] font-bold mb-4">{errorMessageName}</p> */}

                {!signIn && (
                  <input
                    type="number"
                    placeholder="Enter your mobile number"
                    required
                    className="block mb-10 w-full px-5 py-7 rounded-md"
                  />
                )}

                <input
                  ref={email}
                  type="email"
                  placeholder="Email or mobile number"
                  required
                  className="block mb-10 w-full px-5 py-7 rounded-md"
                />
                <p className="text-[#e50915] font-bold mb-4">{errorMessage}</p>
                <input
                  ref={password}
                  type="password"
                  placeholder="Placeholder"
                  required
                  className="block mb-10 w-full px-5 py-7 rounded-md"
                />
                <p className="text-[#e50915] font-bold mb-4">{errorMessagePass}</p>                
                <button
                  className="mb-10 w-full px-5 py-7 text-white bg-[#e50915] rounded-md"
                  onClick={handleSigningbtn}
                >  
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
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
