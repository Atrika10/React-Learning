import React from "react";
import SignOut from "./SignOut";
import { useSelector } from "react-redux";
import store from "../store/store";

const Header = () => {
  const user = useSelector((state) => state.user);
  return (
    <div className=" flex justify-between">
      <div>
        <img
          className="absolute w-40 ml-28 mt-8 z-10"
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt="logoImg"
        />
      </div>

      {user && <div className="mt-8 mr-28 font-bold flex gap-2">
        <div>
          <img className="w-11 rounded-lg" src={user.photoURL} alt="" />
        </div>
        <SignOut />
      </div>}

    </div>
  );
};

export default Header;
