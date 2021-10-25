import React from "react";
import "./skills-styles.css";

const Skills = () => {
  return (
    <div className="skills-container">
      <div className="skills-heading">
        <h1>Skills & Languages</h1>
        <h3>WHAT I BRING TO THE TABLE</h3>
      </div>
      <div className="skills-details">
        <div className="single-skills">
          <h3>HTML & CSS</h3>
          <div className="percentage">
            <div className="active-html"></div>
            <div className="not-active-html"></div>
          </div>
        </div>
        <div className="single-skills">
          <h3>JAVASCRIPT</h3>
          <div className="percentage">
            <div className="active-js"></div>
            <div className="not-active-js"></div>
          </div>
        </div>
        <div className="single-skills">
          <h3>REACT JS</h3>
          <div className="percentage">
            <div className="active-react"></div>
            <div className="not-active-react"></div>
          </div>
        </div>
        <div className="single-skills">
          <h3>JAVA</h3>
          <div className="percentage">
            <div className="active-java"></div>
            <div className="not-active-java"></div>
          </div>
        </div>
      </div>
      <div className="divider"></div>
      <div className="languages">
        <h3>English</h3>
        <div className="percentage">
          <div className="active-html"></div>
          <div className="not-active-html"></div>
        </div>
      </div>
      <div className="languages">
        <h3>Telugu</h3>
        <div className="percentage">
          <div className="active-html"></div>
          <div className="not-active-html"></div>
        </div>
      </div>
      <div className="languages">
        <h3>Hindi</h3>
        <div className="percentage">
          <div className="active-html"></div>
          <div className="not-active-html"></div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
