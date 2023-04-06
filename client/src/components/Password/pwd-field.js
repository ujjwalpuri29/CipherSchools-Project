import React from "react";
import "./pwd-field.css";

const PasswordSection = () => {
  return (
    <div className="flex-container">
      <div className="top-row">
        <div className="left-header">PASSWORD AND SECURITY</div>
        <div className="right-header">Change</div>
      </div>
      <div className="pass-div">
        <div className="pass-label">Password</div>
        <div className="pass-input input-box">
          <input
            type="password"
            className="input-text pass-text"
            placeholder="Password"
            value=".........."
            disabled
          ></input>
        </div>
      </div>
    </div>
  );
};

export default PasswordSection;
