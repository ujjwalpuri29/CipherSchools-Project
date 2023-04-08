import { React, useState } from "react";
import userIcon from "./icons8-user-48.png";
import pencilIcon from "./icons8-pencil-24.png";
import EditProfileModal from "./editProfileModal";
import "./profileHeader.css";

const ProfileHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="header">
      <div className="banner">
        <div className="user-content">
          <div className="user-pfp">
            <img className="pfp-image" src={userIcon} width="64px" />
            <div className="edit-profile" onClick={handleOpen}>
              <img src={pencilIcon} />
            </div>
          </div>
          <EditProfileModal isOpen={isOpen} handleClose={handleClose} />
          <div class="user-details">
            <div id="user-side">
              <div class="hello">Hello,</div>
              <div class="user-name">Jim Halpert</div>
              <div class="user-email">borogi9249@jthoven.com</div>
            </div>
            <div class="right-side">
              <div class="followers">
                <span>0</span> Followers
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
