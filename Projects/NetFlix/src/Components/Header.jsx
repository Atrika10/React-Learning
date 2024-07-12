import React, { useEffect } from "react";
import SignOut from "./SignOut";
import { useDispatch, useSelector } from "react-redux";
import store from "../store/store";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../slices/userSlice";
import { auth } from "../Utils/Firebase";
import { useNavigate } from "react-router-dom";
import { LOGO } from "../Utils/Constant";
import { toggleGptSearch } from "../slices/gptSlice";

const Header = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // if user is signed in/ signed up => user will be added to the store
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );

        // redirect to the browse page after signin/signup (it is handled from Login page)
        navigate("/browse");
      } else {
        dispatch(removeUser());
        // redirect to the login page if user is not signed in/ signed up (it is handled from Login page)
        navigate("/");
      }
    });

    // cleanup function; it will unsubscribe the user when the component is unmounted
    return () => unsubscribe();
  }, []);

  const handleGptSearch = () =>{
    dispatch(toggleGptSearch());
  }

  return (
    <div>
      <div className=" flex justify-between absolute w-full">
        <div>
          <img
            className="relative w-40 ml-28 mt-8 z-10"
            src={LOGO}
            alt="logoImg"
          />
        </div>

        {user && (
          <div className="relative mt-8 mr-28 font-bold flex gap-2 z-10">
            <div>
              <button onClick={handleGptSearch}
              className="bg-rose-500 text-white px-5 py-2 rounded-md tracking-wide">
                {" "}
                 GPT Search
              </button>
            </div>
            <div>
              <img className="w-11 rounded-lg" src={user.photoURL} alt="" />
            </div>
            <SignOut />
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
