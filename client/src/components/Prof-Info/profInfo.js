import React, { useState } from "react";

const Profinfo = () => {
  const [edit, setEdit] = useState(false);
  const handleSubmit = () => {
    setEdit(!edit);
    console.log(edit);
  };

  return (
    <div className="flex-container">
      <div className="top-row">
        <div className="left-header">Highest Education</div>
        <div className="right-header" onClick={handleSubmit}>
          {edit ? "Save" : "Edit"}
        </div>
      </div>
      <div className="input-grid">
        <div className="profInfo-input">
          <div className="web-label">Linkedin</div>
          <div className="weblink-input input-box">
            <input
              className="weblinks-text"
              placeholder="Linkedin"
              disabled
            ></input>
          </div>
        </div>
        <div className="web-link">
          <div className="web-label">Github</div>
          <div className="weblink-input input-box">
            <input
              className="weblinks-text"
              placeholder="Linkedin"
              disabled
            ></input>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profinfo;
