import { React, useEffect } from "react";
import Nav from "./NavBarStyle";
import Logo from "../../Images/nav/WB-Logo.png";

function NavBar(props) {
  useEffect(() => {
    const nav = document.getElementById("nav");
    nav.style.paddingTop = "25px";
    nav.style.width = "47.5rem";
    nav.style.transition = "all 3sec";
    nav.style.borderBottomRightRadius = "15px";
    nav.style.borderBottomLeftRadius = "15px";
    nav.style.left = "calc(50% - 30.75rem)";
    window.onscroll = () => {
      if (window.scrollY > 700) {
        nav.style.width = "100%";
        nav.style.paddingTop = "0px";
        nav.style.left = "0";
        nav.style.transform = "translateX(0)";
        nav.style.borderBottomRightRadius = "0";
        nav.style.borderBottomLeftRadius = "0";
      } else {
        nav.style.paddingTop = "25px";
        nav.style.width = "47.5rem";
        nav.style.left = "50%";
        nav.style.transform = "translateX(-30.75rem)";
        nav.style.borderBottomRightRadius = "15px";
        nav.style.borderBottomLeftRadius = "15px";
      }
    };
  });

  return (
    <Nav id="nav">
      <a className="logo-icon-container">
        <img className="logo-icon" src={Logo} />
      </a>
      <div className="nav-tool-container">
        <a className="nav-tool">ABOUT</a>
        <a className="nav-tool">TEAM MEMBERS</a>
        <a className="nav-tool">CLIENTS</a>
        <a className="nav-tool">PORTFOLIO</a>
        <a className="nav-tool">SERVICES</a>
        <a className="nav-tool">CONTACTS</a>
      </div>
    </Nav>
  );
}

export default NavBar;
