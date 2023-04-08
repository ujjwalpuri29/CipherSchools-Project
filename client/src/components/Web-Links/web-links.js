import React, { useState } from "react";
import "./web-links.css";

const WebLinks = () => {
  const [edit, setEdit] = useState(true);
  const handleSubmit = () => {
    //if (valid || edit)
    setEdit(!edit);
    console.log(edit, valid);
  };

  const [urlList, setUrlList] = useState({});
  const [valid, setValid] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const isUrl = urlPatternValidation(value);
    if (isUrl) {
      const newList = { ...urlList }; // make a copy of the list
      newList[name] = value; // update the input value at the given index
      setUrlList(newList); // update the state with the new list
      e.target.style.color = "inherit";
    } else {
      e.target.style.color = "red";
    }
  };

  const urlPatternValidation = (URL) => {
    const regex = new RegExp(
      "(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?"
    );
    return regex.test(URL);
  };

  return (
    <div className="flex-container">
      <div className="top-row">
        <div className="left-header">ON THE WEB</div>
        <div className="validation">
          <img
            title="Links should have 'http(s)://' and a '.co'"
            hidden={edit}
            src="https://img.icons8.com/external-febrian-hidayat-basic-outline-febrian-hidayat/24/FF0000/external-exclamation-mark-ui-essential-febrian-hidayat-basic-outline-febrian-hidayat.png"
          />
          <div className="right-header" onClick={handleSubmit}>
            {edit ? "Edit" : "Save"}
          </div>
        </div>
      </div>
      <div className="input-grid">
        <div className="web-link">
          <div className="web-label">Linkedin</div>
          <div className="weblink-input input-box">
            <img src="https://www.cipherschools.com/static/media/LinkedIn.297c3e0e0411d3b8a7946c85a72f2bc7.svg" />
            <input
              className="weblinks-text input-text"
              placeholder="Linkedin"
              name="linkedin"
              disabled={edit}
              onChange={(e) => {
                handleInputChange(e);
              }}
            ></input>
            <img
              className="pencil-icon"
              hidden={edit}
              src="https://www.cipherschools.com/static/media/Pencil.da4ca677ddf0145e7203662a76a85ad5.svg"
            />
          </div>
        </div>
        <div className="web-link">
          <div className="web-label">Github</div>
          <div className="weblink-input input-box">
            <img src="https://www.cipherschools.com/static/media/Github.2d6b6c0c10a3b3aa7e3c7438770688f8.svg" />
            <input
              className="weblinks-text input-text"
              placeholder="Github"
              name="github"
              disabled={edit}
              onChange={(e) => {
                handleInputChange(e);
              }}
            ></input>
            <img
              className="pencil-icon"
              hidden={edit}
              src="https://www.cipherschools.com/static/media/Pencil.da4ca677ddf0145e7203662a76a85ad5.svg"
            />
          </div>
        </div>
        <div className="web-link">
          <div className="web-label">Facebook</div>
          <div className="weblink-input input-box">
            <img src="https://www.cipherschools.com/static/media/Facebook.766939726b802e2c4354f9629feba07f.svg" />
            <input
              className="weblinks-text input-text"
              placeholder="Facebook"
              name="facebook"
              disabled={edit}
              onChange={(e) => {
                handleInputChange(e);
              }}
            ></input>
            <img
              className="pencil-icon"
              hidden={edit}
              src="https://www.cipherschools.com/static/media/Pencil.da4ca677ddf0145e7203662a76a85ad5.svg"
            />
          </div>
        </div>
        <div className="web-link">
          <div className="web-label">Twitter</div>
          <div className="weblink-input input-box">
            <img src="https://www.cipherschools.com/static/media/Twitter.8dec5dacebf84c0be8bcaa33dee4a7a0.svg" />
            <input
              className="weblinks-text input-text"
              placeholder="Twitter"
              name="twitter"
              disabled={edit}
              onChange={(e) => {
                handleInputChange(e);
              }}
            ></input>
            <img
              className="pencil-icon"
              hidden={edit}
              src="https://www.cipherschools.com/static/media/Pencil.da4ca677ddf0145e7203662a76a85ad5.svg"
            />
          </div>
        </div>
        <div className="web-link">
          <div className="web-label">Instagram</div>
          <div className="weblink-input input-box">
            <img src="https://www.cipherschools.com/static/media/Instagram.31ac5927c40b6d948dc3369a313cb7c9.svg" />
            <input
              className="weblinks-text input-text"
              placeholder="Instagram"
              name="instagram"
              disabled={edit}
              onChange={(e) => {
                handleInputChange(e);
              }}
            ></input>
            <img
              className="pencil-icon"
              hidden={edit}
              src="https://www.cipherschools.com/static/media/Pencil.da4ca677ddf0145e7203662a76a85ad5.svg"
            />
          </div>
        </div>
        <div className="web-link">
          <div className="web-label">Website</div>
          <div className="weblink-input input-box">
            <img src="https://www.cipherschools.com/static/media/Website.cd72366beefca5afbc5259237cf87838.svg" />
            <input
              className="weblinks-text input-text"
              placeholder="Your Website"
              name="website"
              disabled={edit}
              onChange={(e) => {
                handleInputChange(e);
              }}
            ></input>
            <img
              className="pencil-icon"
              hidden={edit}
              src="https://www.cipherschools.com/static/media/Pencil.da4ca677ddf0145e7203662a76a85ad5.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebLinks;
