import React from "react";
import { Link } from "react-scroll";

const NavBar = () => {
  return (
    <nav className="nav nav-bar">
      <ul className="nav nav-items">
        <li className=" nav nav-list">
          <Link
            activeClass="active"
            to="Home"
            spy={true}
            smooth={true}
            duration={800}
          >
            <i className="nav bx bxs-home-alt-2"></i>
            <span className="nav nav-name">Home</span>
          </Link>
        </li>
        <li className="nav nav-list">
          <Link
            activeClass="active"
            to="About"
            spy={true}
            smooth={true}
            duration={800}
          >
            <i className="nav bx bxs-user"></i>
            <span className="nav nav-name">About</span>
          </Link>
        </li>
        <li className="nav nav-list">
          <Link
            activeClass="active"
            to="Skills"
            spy={true}
            smooth={true}
            duration={800}
          >
            <i className="nav bx bxs-briefcase"></i>
            <span className=" nav nav-name">Skills</span>
          </Link>
        </li>
        <li className="nav nav-list">
          <Link
            activeClass="active"
            to="Projects"
            spy={true}
            smooth={true}
            duration={800}
          >
            <i className="nav bx bxs-devices"></i>
            <span className="nav nav-name">Projects</span>
          </Link>
        </li>
        <li className="nav nav-list">
          <Link
            activeClass="active"
            to="Contact"
            spy={true}
            smooth={true}
            duration={800}
          >
            <i className="nav bx bxs-message-alt"></i>
            <span className="nav nav-name">Contact</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
