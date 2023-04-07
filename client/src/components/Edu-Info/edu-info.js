import React, { useState } from "react";
import "./web-links.css";

const WebLinks = () => {
  const [edit, setEdit] = useState(false);
  const handleSubmit = () => {
    setEdit(!edit);
    console.log(edit);
  };

  return (
    <div className="flex-container">
      <div className="top-row">
        <div className="left-header">ON THE WEB</div>
        <div className="right-header" onClick={handleSubmit}>
          {edit ? "Save" : "Edit"}
        </div>
      </div>
      <div className="input-grid">
        <div className="web-link">
          <div className="web-label">Linkedin</div>
          <div className="weblink-input input-box">
            <span>
              <img src="https://www.cipherschools.com/static/media/LinkedIn.297c3e0e0411d3b8a7946c85a72f2bc7.svg" />
            </span>
            <input
              className="weblinks-text"
              placeholder="Linkedin"
              disabled
            ></input>
            <span className="pencil-icon">
              <img src="https://www.cipherschools.com/static/media/Pencil.da4ca677ddf0145e7203662a76a85ad5.svg" />
            </span>
          </div>
        </div>
        <div className="web-link">
          <div className="web-label">Github</div>
          <div className="weblink-input input-box">
            <span>
              <img src="https://www.cipherschools.com/static/media/LinkedIn.297c3e0e0411d3b8a7946c85a72f2bc7.svg" />
            </span>
            <input
              className="weblinks-text"
              placeholder="Linkedin"
              disabled
            ></input>

            <span className="pencil-icon">
              <img src="https://www.cipherschools.com/static/media/Pencil.da4ca677ddf0145e7203662a76a85ad5.svg" />
            </span>
          </div>
        </div>
        <div className="web-link">
          <div className="web-label">Github</div>
          <div className="weblink-input input-box">
            <span>
              <img src="https://www.cipherschools.com/static/media/LinkedIn.297c3e0e0411d3b8a7946c85a72f2bc7.svg" />
            </span>
            <input
              className="weblinks-text"
              placeholder="Linkedin"
              disabled
            ></input>
            <span className="pencil-icon">
              <img src="https://www.cipherschools.com/static/media/Pencil.da4ca677ddf0145e7203662a76a85ad5.svg" />
            </span>
          </div>
        </div>
        <div className="web-link">
          <div className="web-label">Github</div>
          <div className="weblink-input input-box">
            <span>
              <img src="https://www.cipherschools.com/static/media/LinkedIn.297c3e0e0411d3b8a7946c85a72f2bc7.svg" />
            </span>
            <input
              className="weblinks-text"
              placeholder="Linkedin"
              disabled
            ></input>
            <span className="pencil-icon">
              <img src="https://www.cipherschools.com/static/media/Pencil.da4ca677ddf0145e7203662a76a85ad5.svg" />
            </span>
          </div>
        </div>
        <div className="web-link">
          <div className="web-label">Github</div>
          <div className="weblink-input input-box">
            <span>
              <img src="https://www.cipherschools.com/static/media/LinkedIn.297c3e0e0411d3b8a7946c85a72f2bc7.svg" />
            </span>
            <input
              className="weblinks-text"
              placeholder="Linkedin"
              disabled
            ></input>
            <span className="pencil-icon">
              <img src="https://www.cipherschools.com/static/media/Pencil.da4ca677ddf0145e7203662a76a85ad5.svg" />
            </span>
          </div>
        </div>
        <div className="web-link">
          <div className="web-label">Github</div>
          <div className="weblink-input input-box">
            <span>
              <img src="https://www.cipherschools.com/static/media/LinkedIn.297c3e0e0411d3b8a7946c85a72f2bc7.svg" />
            </span>
            <input
              className="weblinks-text"
              placeholder="Linkedin"
              disabled
            ></input>

            <span className="pencil-icon">
              <img src="https://www.cipherschools.com/static/media/Pencil.da4ca677ddf0145e7203662a76a85ad5.svg" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebLinks;
