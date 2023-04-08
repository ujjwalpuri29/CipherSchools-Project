import React, { useState } from "react";
import InterestsModal from "./interestsModal";

const Interests = () => {
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
        <div className="left-header">INTERESTS</div>
        <div className="right-header" onClick={handleOpen}>
          Edit
        </div>
        <InterestsModal isOpen={isOpen} handleClose={handleClose} />
      </div>
      <div className="interests-list">
        <div></div>
      </div>
    </div>
  );
};

export default Interests;
