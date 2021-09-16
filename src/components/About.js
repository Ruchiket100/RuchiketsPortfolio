import React from "react";

const About = ({ about, about_sec }) => {
  return (
    <div data-aos="fade-up" className="About">
      <h3>About me</h3>
      <div className="text">
        <h4>{about}</h4>
        <h4>{about_sec}</h4>
      </div>
      <div></div>
      <div className="social-tags">
        {/* instagram */}
        <a href="https://www.instagram.com/ruchikets_world/">
          <img
            className="social-logo"
            alt="instagram"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Instagram.svg/1200px-Instagram.svg.png"
          />
        </a>

        {/* Linkdin */}
        <a href="#">
          <img
            className="social-logo"
            alt="Linkdin"
            src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
          />
        </a>

        {/* Twitter */}
        <a href="#">
          <img
            className="social-logo"
            alt="Twitter"
            src="https://upload.wikimedia.org/wikipedia/sco/thumb/9/9f/Twitter_bird_logo_2012.svg/743px-Twitter_bird_logo_2012.svg.png"
          />
        </a>
      </div>
    </div>
  );
};

export default About;
