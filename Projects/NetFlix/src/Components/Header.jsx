import React from "react";
import SignOut from "./SignOut";

const Header = () => {
  return (
    <div className=" flex justify-between">
      <div>
        <img
          className="absolute w-40 ml-28 mt-8 z-10"
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt="logoImg"
        />
      </div>

      <div className="mt-8 mr-28 font-bold ">
        <SignOut />
      </div>
    </div>
  );
};

export default Header;
