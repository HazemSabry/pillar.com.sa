import React from "react";

import HeroSection from "./LandingPageComponents/HeroSection";
import AboutSection from "./LandingPageComponents/AboutSection";
import ProjectsPrev from "./LandingPageComponents/ProjectsPrev";
import ContactUs from "./LandingPageComponents/ContactUs";
import OurTeamLeaders from "./LandingPageComponents/OurTeamLeaders";

import styled from "styled-components";

function LandingPage(props) {
  return (
    <>
      <HeroSection />
      <ContactUs />
      <ProjectsPrev />
      <AboutSection />
      <OurTeamLeaders />
    </>
  );
}

export default LandingPage;
