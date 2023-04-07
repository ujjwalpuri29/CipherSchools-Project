import React, { useState } from "react";
import "./about.css";

const About = () => {
  const [edit, setEdit] = useState(true);
  const [aboutMe, setAboutMe] = useState("");

  const handleSubmit = () => {
    setEdit(!edit);
    console.log(aboutMe);
  };

  return (
    <div className="flex-container">
      <div className="top-row">
        <div className="left-header">ABOUT ME</div>
        <div className="right-header" onClick={handleSubmit}>
          {edit ? "Edit" : "Save"}
        </div>
      </div>
      <div className="input-box">
        <textarea
          readOnly={edit}
          className="input-textarea input-text"
          placeholder="Add something about you."
          type="text"
          value={aboutMe}
          rows={4}
          onChange={(e) => {
            setAboutMe(e.target.value);
          }}
        ></textarea>
        <img
          className="pencil-icon"
          hidden={edit}
          alt="edit"
          src="https://www.cipherschools.com/static/media/Pencil.da4ca677ddf0145e7203662a76a85ad5.svg"
        />
      </div>
    </div>
  );
};

export default About;
