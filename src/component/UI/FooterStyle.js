import React from "react";

import styled from "styled-components";

import FooterBackgroundImge from "../../Images/footer/footer-background_imge.png";
import footerContactBackground from "../../Images/footer/footer-contact-background.jpg";

const FooterStyle = styled.footer`
  width: 100%;
  height: 445.5px;
  background-image: url(${FooterBackgroundImge});
  background-size: cover;
  background-position: center;
  position: relative;

  & .footer-01-container {
    width: 370.5px;
    height: 445.5px;
    position: relative;
    display: inline-block;
  }
  & .footer-01 {
    width: 370.5px;
    height: 445.5px;
    opacity: 0.6;
  }
  & .footer-01-text {
    width: 324.5px;
    height: 449.1px;
    position: absolute;
    left: 12px;
    top: 35.1px;
    z-index: 2;
  }
  & .footer-02-container {
    width: calc(100% - 370.5px);
    height: 445.5px;
    position: relative;
    display: inline-block;
  }
  & .footer-02 {
    width: 100%;
    height: 445.5px;
    opacity: 0.6;
  }

  & .footer-contact {
    background-image: url(${footerContactBackground});
    background-size: cover;
    background-position: bottom;
    width: 100%;
    height: 328.5px;
    position: absolute;
    top: 58.5px;
  }
  & .copy-writes {
    background-color: #333333;
    font-size: small;
    padding: 20px;
    margin-top: -5px;
  }
  & .bottom-layer-container {
    position: absolute;
    bottom: 0;
    overflow: hidden;
    bottom: 0px;
    height: 59px;
    opacity: 0.5;
  }
  & .top-layer-container {
    position: absolute;
    top: 0;
    width: 100%;
    overflow: hidden;
    height: 59px;
    opacity: 0.7;
  }
  & .bottom-layer {
    width: 100%;
  }
  & .top-layer {
    width: 100%;
    height: 100%;
  }
`;

export default FooterStyle;
