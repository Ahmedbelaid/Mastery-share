import React, { useState, useEffect } from "react";
import { Button } from "../Button/Button";
import SignIn from "../../pages/SignIn";
import "./Navbar.css";
import Panel from "../../pages/Panel";
import Language from "../../pages/Language";
import { NavHashLink as Link } from "react-router-hash-link";
import { Route, useHistory } from "react-router-dom";

function Navbar() {
  const history = useHistory();
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [navbar, setNavbar] = useState(false);
  const handleClick = () => setClick((prev) => !prev);
  const closeMobileMenu = () => setClick(false);

  const links = document.querySelectorAll(".nav-links");

  links.forEach((item) => {
    console.log(item);
    item.addEventListener("click", () => {
      let el = document.getElementById(item.getAttribute("data-link"));
      console.log(el);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      } else {
        history.push(`/${item.getAttribute("data-link")}`);
      }
    });
  });

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);
  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeBackground);

  return (
    <>
      <nav className={navbar ? "navbar active" : "navbar"}>
        <div className="navbar-container">
          <img
            src="./32.png"
            className="main-logo"
            width="128"
            alt="our logo"
          />
          <Link to="/" className="navbar-logo" as={Button}>
            Mastery Share
          </Link>

          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <a
                activeClass="active"
                data-link="home"
                spy={true}
                smooth={true}
                className="nav-links"
                offset={-70}
                duration={500}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                activeClass="active"
                data-link="courses"
                spy={true}
                smooth={true}
                className="nav-links"
                offset={-70}
                duration={500}
              >
                Courses
              </a>
            </li>
            <li className="nav-item">
              <a
                activeClass="active"
                data-link="teacher"
                spy={true}
                smooth={true}
                className="nav-links"
                offset={-70}
                duration={500}
              >
                Teachers
              </a>
            </li>

            <li className="nav-item">
              <a
                activeClass="active"
                data-link="aboutus"
                spy={true}
                smooth={true}
                className="nav-links"
                offset={-70}
                duration={500}
              >
                About us
              </a>
            </li>
          </ul>

          <Panel />

          <SignIn />
        </div>
      </nav>
    </>
  );
}

export default Navbar;
