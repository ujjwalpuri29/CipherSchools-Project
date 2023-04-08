import React, { useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import userIcon from "./icons8-user-48.png";
import pencilIcon from "./icons8-pencil-24.png";
import "./editProfileModal.css";

const EditProfileModal = ({ isOpen, handleClose }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleClose();
  };

  const handleCancel = (e) => {
    setFirstName("");
    setLastName("");
    setPhoneNumber("");
    handleClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-window">
      <div className="flex-container modal-content profile-modal-content">
        <div className="top-row">
          <div className="left-header">Profile Update</div>
          <MdOutlineClose fontSize="20px" onClick={handleCancel} />
        </div>
        <div className="profile-grid">
          <div className="user-pfp">
            <img className="pfp-image" src={userIcon} width="128px" />
            <div
              className="edit-profile"
              onClick={() => {
                console.log("upload pfp");
              }}
            >
              <img src={pencilIcon} width="32px" />
            </div>
          </div>
          <div className="flex-container">
            <div className="profile-field">
              <div>First Name</div>
              <div className="modal-input-box">
                <input
                  type="text"
                  className="input-text"
                  placeholder="First Name"
                  id="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                ></input>
              </div>
            </div>
            <div className="profile-field">
              <div>Last Name</div>
              <div className="modal-input-box">
                <input
                  type="text"
                  className="input-text"
                  placeholder="Last Name"
                  id="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                ></input>
              </div>
            </div>
            <div className="profile-field">
              <div>Email Address</div>
              <div className="modal-input-box">
                <input
                  type="text"
                  className="input-text"
                  placeholder="Email Address"
                  id="userEmail"
                  value={userEmail}
                  disabled
                ></input>
              </div>
            </div>
            <div className="profile-field">
              <div>Mobile Number</div>
              <div className="modal-input-box">
                <input
                  type="text"
                  className="input-text"
                  placeholder="Mobile Number"
                  id="phoneNumber"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                ></input>
              </div>
            </div>
          </div>
        </div>

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

export default EditProfileModal;
