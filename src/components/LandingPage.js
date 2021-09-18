import React from "react";
import Typing from "react-typing-animation";
// Components
import Buttons from "./Buttons";

const LandingPage = ({ img_url }) => {
  return (
    <div className="my-info">
      <div className="info">
        {/* ----------------- img-div ------------- */}
        <div className="my-img">
          <img alt="Profile-img" src={`${img_url}`} />
        </div>
        <div className="my-name">
          <Typing>
            <h5>Hello</h5>
          </Typing>
          <Typing>
            <h2>
              <span>I'm</span> Ruchiket
            </h2>
          </Typing>
        </div>
      </div>
      {/* -------------- buttons -----------------*/}
      <Buttons />
    </div>
  );
};

export default LandingPage;
