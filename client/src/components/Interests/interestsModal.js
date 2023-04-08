import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const PasswordModal = ({ isOpen, handleClose }) => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showCurrPass, setShowCurrPass] = useState(false);
  const [showNewPass, setShowNewPass] = useState(false);
  const [showConfPass, setShowConfPass] = useState(false);

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      setError("New password and confirm password do not match");
      return;
    }
    //handleClose();
  };

  const handleCancel = (e) => {
    setOldPassword("");
    setNewPassword("");
    setConfirmPassword("");
    handleClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-window">
      <div className="flex-container modal-content">
        <div>
          <div>Current Password</div>
          <div className="modal-input-box">
            <input
              type={showCurrPass ? "text" : "password"}
              className="input-text pass-text"
              placeholder="Current Password"
              id="oldPassword"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
            ></input>
            <div onClick={() => setShowCurrPass(!showCurrPass)}>
              {showCurrPass ? <FaEyeSlash /> : <FaEye />}
            </div>
          </div>
        </div>
        <div>
          <div>New Password</div>
          <div className="modal-input-box">
            <input
              type={showNewPass ? "text" : "password"}
              className="input-text pass-text"
              placeholder="New Password"
              id="newPassword"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            ></input>
            <div onClick={() => setShowNewPass(!showNewPass)}>
              {showNewPass ? <FaEyeSlash /> : <FaEye />}
            </div>
          </div>
        </div>
        <div>
          <div>Confirm New Password</div>
          <div className="modal-input-box">
            <input
              type={showConfPass ? "text" : "password"}
              className="input-text pass-text"
              placeholder="Confirm Password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            ></input>
            <div onClick={() => setShowConfPass(!showConfPass)}>
              {showConfPass ? <FaEyeSlash /> : <FaEye />}
            </div>
          </div>
        </div>
        {error && <div className="passError">{error}</div>}
        <div className="modal-btns">
          <div
            className="right-header cancel-btn"
            onClick={(e) => {
              handleCancel(e);
            }}
          >
            Cancel
          </div>
          <div
            className="right-header"
            onClick={(e) => {
              handleSubmit(e);
            }}
          >
            Save
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordModal;
