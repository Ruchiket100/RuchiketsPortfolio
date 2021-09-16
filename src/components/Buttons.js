import React from "react";
import { Link } from "react-router-dom";

const Buttons = () => {
  // --background-color : #2C394B;
  // --text-color: #EEEEEE;
  // --special-text-color:#00C1D4;
  // --premium-text-color:#F8485E;
  // --made-by-name-color:#47566b;
  const setTheme = (
    background,
    textColor,
    speTextColor,
    preTextColor,
    madeNameColor
  ) => {
    // set value of the variable style
    document.documentElement.style.setProperty(
      "--background-color",
      background
    );
    // text
    document.documentElement.style.setProperty("--text-color", textColor);
    // special text
    document.documentElement.style.setProperty(
      "--special-text-color",
      speTextColor
    );
    // premium Text
    document.documentElement.style.setProperty(
      "--premium-text-color",
      preTextColor
    );
    // made by color
    document.documentElement.style.setProperty(
      "--made-by-name-color",
      madeNameColor
    );
  };

  return (
    <div data-aos="fade-down" className="buttons">
      {/* programmer */}
      <Link to="/">
        <button
          className=" btn programmer-btn"
          onClick={() => {
            setTheme("#2c394b", "#EEEEEE", "#00C1D4", "#F8485E", "#47566B");
          }}
        >
          Programmer
        </button>
      </Link>

      {/* Artist */}
      <Link to="/Artist">
        <button
          className="btn artist-btn"
          onClick={() => {
            setTheme("#E8F6EF", "#27343A", "#456268", "#79A3B1", "#95AAB1");
          }}
        >
          Artist
        </button>
      </Link>
      {/* Founder
      <button className="btn" type="text">
        Founder
      </button> */}
    </div>
  );
};

export default Buttons;
