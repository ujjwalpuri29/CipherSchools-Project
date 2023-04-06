import React from "react";
import "./about.css";

const About = () => {
  return (
    <div className="flex-container">
      <div className="top-row">
        <div className="left-header">ABOUT ME</div>
        <div className="right-header">Edit</div>
      </div>
      <div className="input-box">
        <textarea
          className="input-textarea input-text"
          placeholder="Add something about you."
          rows={4}
        ></textarea>
        <span className="pencil-icon">
          <img src="https://www.cipherschools.com/static/media/Pencil.da4ca677ddf0145e7203662a76a85ad5.svg" />
        </span>
      </div>
    </div>
  );
};

export default About;
