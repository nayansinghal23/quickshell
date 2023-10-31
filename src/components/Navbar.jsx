import React, { useState } from "react";
import { downIcon, sliderIcon } from "../assets";
import Dropbox from "./Dropbox";

const Navbar = () => {
  const [display, setDisplay] = useState(false);

  return (
    <div className="navbar-container">
      <div className="navbar-innerContainer">
        <img src={sliderIcon} alt="sliderIcon" className="sliderIcon-svg" />
        <p className="display-text">Display</p>
        <img
          src={downIcon}
          alt="downIcon"
          className="downIcon-svg"
          onClick={() => {
            setDisplay((prevDisplay) => !prevDisplay);
          }}
        />
      </div>
      {display && <Dropbox />}
    </div>
  );
};

export default Navbar;
