import React from "react";

import FooterStyle from "./FooterStyle";
import Footer01 from "../../Images/footer/footer-01.png";
import Footer01Text from "../../Images/footer/footer-01-text.png";
import Footer02 from "../../Images/footer/footer-02.png";
import bottomLayer from "../../Images/footer/bottom-layer.png";
import topLayer from "../../Images/footer/top-layer.png";

import Fade from "react-reveal/Fade";

function Footer(props) {
  return (
    <FooterStyle>
      <div className="top-layer-container">
        <img className="top-layer" src={topLayer} />
      </div>
      <div className="footer-01-container">
        <img className="footer-01-text" src={Footer01Text} />
      </div>
      <div className="footer-02-container">
        <div className="footer-contact"></div>
      </div>
      <div className="bottom-layer-container">
        <img className="bottom-layer" src={bottomLayer} />
      </div>
      <div className="copy-writes">
        <span> &#169; All Rights Reserved 2020</span>
      </div>
    </FooterStyle>
  );
}

export default Footer;
