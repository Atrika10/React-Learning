import React, { useRef, useState } from "react";
import Header from "./Header";
import { validateData } from "../Utils/Validate";
import { auth } from "../Utils/Firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { addUser } from "../slices/userSlice";
import { useDispatch } from "react-redux";
import { MAIN_BACKGROUND, USER_AVATAR } from "../Utils/Constant";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null); // to show the error msg if it is not validate
  const dispatch = useDispatch();

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm); // opposite value will be set
  };

  //references of those input boxes
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleBtnClick = (e) => {
    const message = validateData(email.current.value, password.current.value);
    setErrorMessage(message);

    if (message) return; // if msg is present, then we'll not signin/signup

    //  sign-in/ sign-up logic

    if (!isSignInForm) {
      // sign up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;

          // update user profile after creating an account
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVATAR, // default avatar image
          })
            .then(() => {
              // once profile updated, then dispatch addUser to the store 
              const { uid, email, displayName, photoURL } = auth.currentUser; //we can't use 'user' here because it is not updated yet that's why we are using auth.currentUser as it is updated
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              
              console.log(user);
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode + " - " + errorMessage);
          setErrorMessage(errorCode + " - " + errorMessage);
        });
    } else {
      // sign in logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage);
        });
    }
  };

  return (
    <div>
      <Header /> {/* contains logo */}
      <div className="relative w-full h-full">
        <img
          src= {MAIN_BACKGROUND}
          alt="backgroundImg"
        />
        <div className=" absolute inset-0 bg-black opacity-50"></div>

        <div className="w-1/3 bg-black opacity-80 flex justify-center items-center absolute top-32 left-1/3">
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
            className="w-2/3 flex flex-col gap-5 pt-14 pb-14 "
          >
            <div className="text-white font-bold text-3xl mb-4">
              {isSignInForm ? "Sign In" : "Sign Up"}{" "}
              {/*if isSignInForm true then sign in text will be shown else signup */}
            </div>

            {!isSignInForm && (
              <input
                ref={name}
                type="text"
                name="name"
                placeholder="Enter your Full name"
                className="p-4 w-full  border text-lg bg-transparent rounded-lg text-white"
              />
            )}

            <input
              ref={email}
              type="email"
              name="email"
              placeholder="Enter your Email"
              className="p-4 w-full  border text-lg bg-transparent rounded-lg text-white"
            />

            <input
              ref={password}
              type="password"
              name="password"
              placeholder="Enter your Password"
              className="p-4 w-full bg-transparent border text-lg rounded-lg text-white"
            />

            <p className="text-red-600 font-bold">{errorMessage}</p>

            <button
              onClick={handleBtnClick}
              className="text-white bg-[#FF0000] font-bold text-xl p-2 rounded-lg"
            >
              {isSignInForm ? "Sign In" : "Sign Up"}{" "}
            </button>

            <div
              className="text-white mt-4 cursor-pointer"
              onClick={toggleSignInForm}
            >
              {isSignInForm
                ? "New to Netflix ? Sign Up"
                : "Already a member ? Sign In"}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
