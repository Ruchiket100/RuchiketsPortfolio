import React from "react";

const Languages = () => {
  return (
    <div className="langs-box">
      <h4>Technologies I am working with recently</h4>
      <div className="boxes">
        <div className="box" data-aos="zoom-in">
          <img
            alt="React"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png"
          />
          <p>React</p>
        </div>

        <div className="box" data-aos="zoom-in">
          <img
            alt="Node"
            src="https://www.pngkit.com/png/full/66-667065_js-club-new-balance-png-logo-node-js.png"
          />
          <p>Node</p>
        </div>

        <div className="box" data-aos="zoom-in">
          <img
            alt="Javascript"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png"
          />
          <p>javascript (ES6+)</p>
        </div>

        <div className="box" data-aos="zoom-in">
          <img
            alt="MongoDB"
            src="https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg"
          />
          <p>MongoDB</p>
        </div>
        <div className="box" data-aos="zoom-in">
          <img
            alt="Tailwind.css"
            src="https://cdn.worldvectorlogo.com/logos/tailwindcss.svg"
          />
          <p>Tailwind.css</p>
        </div>
      </div>
    </div>
  );
};

export default Languages;
