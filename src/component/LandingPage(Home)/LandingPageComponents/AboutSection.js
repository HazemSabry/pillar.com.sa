import React from "react";

import About from "./AboutSectionStyle";
import AboutImage from "../../../Images/about/About.png";

function AboutSection(props) {
  return (
    <About>
      <div className="about_image-container">
        <img className="about_image" src={AboutImage} />
      </div>
      <div className="about_text-container">
        <h1 className="about_us-title">ABOUT US</h1>
        <h4 className="about_u-side_title">Pillar Real Estate Company</h4>
        <p>
          Is a Saudi-based Real Estate Company that was established in late
          2019. Prior to Pillar's establishment, our team of professionals have
          managed several medium to mega scale projects such as the Diplomatic
          Quarter, the Digital City, Our Square & Our Dunes, Misk Schools,
          Unified Real Estate projects, and many more developments.
          <br />
          Misk Schools, Unified Real Estate projects, and many more
          developments. Pillar focuses on Consultancy, Leasing, and Property and
          Facilities Management by putting exclusive thought into selecting its
          projects, in order to ensure it upholds its distinctive vision for
          excellence. Every project is a perfect model of creative perfection.
        </p>
        <p>
          Pillar in its capacity provides world class services that cater to
          elite individuals and organizations. Our services are extensive and
          customized in accordance with the clientele and Real Estate vision
          that provides clients with a variety of services through our large
          group of local and international consultants and partners.
        </p>
        <p style={{ color: "#03A8BC" }}>
          Bringing the right tenant ... to the right property ... to serve the
          right customer
        </p>
      </div>
    </About>
  );
}

export default AboutSection;
