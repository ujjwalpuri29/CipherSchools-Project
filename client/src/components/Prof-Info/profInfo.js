import React, { useState } from "react";
import "./profInfo.css";

const Profinfo = () => {
  const [edit, setEdit] = useState(true);
  const [highestEducation, setEducation] = useState("");
  const [currentOccupation, setOccupation] = useState("");

  const handleSubmit = () => {
    setEdit(!edit);
    console.log(edit);
  };

  return (
    <div className="flex-container">
      <div className="top-row">
        <div className="left-header">PROFESSIONAL INFORMATION</div>
        <div className="right-header" onClick={handleSubmit}>
          {edit ? "Edit" : "Save"}
        </div>
      </div>
      <div className="input-grid">
        <div className="profInfo-input">
          <div className="profInfo-label">Highest Education</div>
          <div className="prof-input input-box">
            <select
              className="highestEdu-select input-text"
              value={highestEducation}
              disabled={edit}
              onChange={(e) => {
                setEducation(e.target.value);
              }}
            >
              <option value="Primary">Primary</option>
              <option value="Secondary">Secondary</option>
              <option value="Higher Secondary">Higher Secondary</option>
              <option value="Graduation">Graduation</option>
              <option value="Post Graduation">Post Graduation</option>
            </select>
          </div>
        </div>
        <div className="profInfo-input">
          <div className="profInfo-label">What do you do currently?</div>
          <div className="prof-input input-box">
            <select
              className="occupation-select input-text"
              value={currentOccupation}
              disabled={edit}
              onChange={(e) => {
                setOccupation(e.target.value);
              }}
            >
              <option value="Schooling" className="text-lg ">
                Schooling
              </option>
              <option value="College Student" className="text-lg ">
                College Student
              </option>
              <option value="Teaching" className="text-lg ">
                Teaching
              </option>
              <option value="Job" className="text-lg ">
                Job
              </option>
              <option value="Freelancing" className="text-lg ">
                Freelancing
              </option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profinfo;
