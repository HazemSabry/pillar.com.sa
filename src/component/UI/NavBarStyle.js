import React from "react";

import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  gap: 7rem;
  padding-left: 7rem;
  padding-right: 7rem;
  align-items: center;
  height: 4.6875rem;
  position: fixed;
  top: 0;
  z-index: 999;
  background-color: white;
  transition: all 0.5s linear;

  & .logo-icon {
    height: 50px;
    cursor: pointer;
  }

  & .logo-icon-container {
  }

  & .nav-tool {
    color: #dadad8;
    cursor: pointer;
  }

  & .nav-tool-container {
    display: flex;
    gap: 2rem;
    align-items: center;
  }
  & .nav-tool::after {
    content: "";
    display: block;
    position: relative;
    width: 0;
    top: 0.5em;
    opacity: 0;
    height: 3px;
    background: #362853;
    margin: auto;
    -webkit-transition: all 0.5s ease-in-out;
    -o-transition: all 0.5s ease-in-out;
    transition: all 0.5s ease-in-out;
  }

  & .nav-tool:hover::after {
    width: 90%;
    height: 3px;
    opacity: 1;
    position: relative;
    margin: auto;
    -webkit-transition: all 0.5s ease-in-out;
    -o-transition: all 0.5s ease-in-out;
    transition: all 0.5s ease-in-out;
  }
`;

export default Nav;
