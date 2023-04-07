import React, { useState } from "react";
import PasswordModal from "./passwordModal";
import "./pwd-field.css";

const PasswordSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="flex-container">
      <div className="top-row">
        <div className="left-header">PASSWORD & SECURITY</div>
        <div className="right-header" onClick={handleOpen}>
          Change
        </div>
      </div>
      <div className="pass-div">
        <PasswordModal isOpen={isOpen} handleClose={handleClose} />
        <div className="pass-label">Password</div>
        <div className="input-box">
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
