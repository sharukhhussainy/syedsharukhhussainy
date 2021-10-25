import React from "react";
import "./main-styles.css";

const Main = () => {
  return (
    <div className="main-container">
      <div className="main-image">
        <div className="image-overlay">
          <div className="text">
            <h3>HELLO, I'M</h3>
            <h1>Syed Hussain.</h1>
            <h4>Front-end Web Developer.</h4>
          </div>
        </div>
      </div>
      <div className="user-info">
        <div className="image-container"></div>
        <div className="info-text">
          <h1>Syed Hussain.</h1>
          <p>​Bachelore of Technology in Computer Science & Engineering</p>
          <div className="user-address">
            <span>syedsharukhhussainy@gmail.com</span>
            <br />
            <span>+91 7893304506</span>
          </div>
          <div className="download-btn">
            <button className="btn">Download CV</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
