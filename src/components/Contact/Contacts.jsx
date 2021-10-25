import React from "react";
import "./contacts-styles.css";

const Contacts = () => {
  return (
    <div className="contacts-container">
      <div className="left">
        <h1>
          I'd love to hear
          <br />
          from you.
        </h1>
      </div>
      <div className="right">
        <p>syedsharukhhussainy@gmail.com</p>
        <div className="download-btn">
          <button className="download">Download CV</button>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
