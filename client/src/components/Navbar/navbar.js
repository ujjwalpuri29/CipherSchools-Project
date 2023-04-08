import { React } from "react";
import { BiBell, BiSearch } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-container">
        <div className="logo">
          <img
            className="logo-icon"
            src="https://www.cipherschools.com/static/media/Cipherschools_icon@2x.3b571d743ffedc84d039.png"
          />
          CipherSchools
        </div>
        <div className="nav-icon-container">
          <BiBell />
          <CgProfile />
          <BiSearch />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
