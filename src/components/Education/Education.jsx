import React from "react";
import "./education-styles.css";

const Education = () => {
  return (
    <div className="edu-exp-container">
      <div className="edu-container">
        <div className="edu-heading">
          <h1>Education</h1>
          <h3>WHAT I’VE LEARNED</h3>
        </div>
        <div className="edu-details">
          <div className="edu">
            <p className="year">2015-2019</p>
            <p className="school">
              ​Riverview University – Boston, MA; Class of 2018 Bachelor of
              Science; International Business & Management <br />
              GPA: 3.85/4.0
            </p>
          </div>
          <div className="edu">
            <p className="year">2015-2019</p>
            <p className="school">
              ​Riverview University – Boston, MA; Class of 2018 Bachelor of
              Science; International Business & Management <br />
              GPA: 3.85/4.0
            </p>
          </div>
          <div className="edu">
            <p className="year">2015-2019</p>
            <p className="school">
              ​Riverview University – Boston, MA; Class of 2018 Bachelor of
              Science; International Business & Management <br />
              GPA: 3.85/4.0
            </p>
          </div>
        </div>
      </div>
      <div className="exp-container">
        <div className="exp-heading">
          <h1>Experience</h1>
          <h3>WHERE I’VE WORKED</h3>
        </div>
        <div className="edu">
          <p className="year">2015-2019</p>
          <p className="school">​Cognizant - Programmer Analyst</p>
        </div>
      </div>
    </div>
  );
};

export default Education;
