import React from "react";
import { Fade } from "react-reveal";

import Hero from "./HeroSectionstyle";

import BackImg from "../../../Images/hero/back-image-background-hero.png";
import FrontImg from "../../../Images/hero/front-image-background-hero.png";
import BlurImg from "../../../Images/hero/blur-img.png";
import SideBar from "../../../Images/hero/side-bar.png";
import REALSTATE from "../../../Images/hero/REALSTATE.png";
import PLetter from "../../../Images/PILLAR-WORD/P.png";
import ILetter from "../../../Images/PILLAR-WORD/I.png";
import L__1Letter from "../../../Images/PILLAR-WORD/L__1.png";
import L__2Letter from "../../../Images/PILLAR-WORD/L__2.png";
import ALetter from "../../../Images/PILLAR-WORD/A.png";
import RLetter from "../../../Images/PILLAR-WORD/R.png";

function HeroSection(props) {
  return (
    <Hero>
      <div className="side-bar-container">
        <img className="side-bar" src={SideBar} />
      </div>
      <div className="blur-img-container">
        <img className="blur-img" src={BlurImg} />
      </div>
      <div className="hero-img-container back-img-container">
        <img className="hero-img back-img" src={BackImg} />
      </div>
      <div className="hero-img-container front-img-container">
        <img className="hero-img front-img" src={FrontImg} />
      </div>
      <div className="wright wright-left">
        <p>Discover</p>
        <div className="pillar-word-container">
          <div className="letter-container">
            <img className="letter" src={PLetter} />
          </div>
          <div className="letter-container">
            <img className="letter" src={ILetter} />
          </div>
          <div className="letter-container">
            <img className="letter" src={L__1Letter} />
          </div>
          <div className="letter-container">
            <img className="letter" src={L__2Letter} />
          </div>
          <div className="letter-container">
            <img className="letter" src={ALetter} />
          </div>
          <div className="letter-container">
            <img className="letter" src={RLetter} />
          </div>
        </div>
        <p>Lorem</p>
      </div>
      <div className="wright wright-right">
        <Fade bottom>
          <img className="realstate-word" src={REALSTATE}></img>
        </Fade>
      </div>
    </Hero>
  );
}

export default HeroSection;
