import React, { useEffect } from "react";
import { auth } from "../Utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import {addUser, removeUser} from "../Utils/userSlice";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const handleSignout = () => {
    signOut(auth)
      .then(() => {
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        // ...
        navigate("/browser");
      } else {
        dispatch(removeUser());
        // User is signed out
        // ...
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="header__parent">
      <div className="container">
        <div className="row header flex justify-between	">
          <img
            src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
            style={{ width: "15rem" }}
          />
          {location.pathname === "/browser" && (
            <button onClick={handleSignout}>Sign Out</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
