import React, { useEffect, useState } from "react";
import { downIcon, sliderIcon } from "../assets";
import Dropbox from "./Dropbox";

const Navbar = () => {
  const [display, setDisplay] = useState(false);
  const [clicked, setClicked] = useState(0);

  useEffect(() => {
    if (clicked > 0 && clicked % 2 === 0) {
      setDisplay((prevDisplay) => !prevDisplay);
    }
  }, [clicked]);

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
      {display && <Dropbox setClicked={setClicked} />}
    </div>
  );
};

export default Navbar;
