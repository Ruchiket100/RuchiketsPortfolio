import React from "react";

const Projects = () => {
  return (
    <div className="main-projects-container">
      {/* prjects */}
      <h4>Featured Projects</h4>
      <div className="projects">
        <div className="project" data-aos="flip-up">
          <a
            className="link-url"
            target="_blank"
            rel="noopener noreferrer"
            href="https://bookly-by-ruchiket.herokuapp.com/"
          >
            <img
              alt="url"
              src="http://simpleicon.com/wp-content/uploads/link-2.png"
            />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="git-url"
            href="https://github.com/Ruchiket100/Bookly"
          >
            <img
              alt="url"
              src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
