import React from "react";
import "./interest-styles.css";

const Interest = () => {
  return (
    <div className="interest-container">
      <div className="interest-heading">
        <h1>Interests</h1>
        <h3>OUT OF OFFICE</h3>
      </div>
      <div className="interest-details">
        <div className="left">
          <p>Singing</p>
          <p>Cooking</p>
          <p>Reading Books</p>
        </div>
      </div>
    </div>
  );
};

export default Interest;
