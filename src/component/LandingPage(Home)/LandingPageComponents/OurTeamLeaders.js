import React from "react";

import TeamLeaders from "./OurTeamLeadersStyle";
import LeaderHoverCard from "./LeaderHoverCard";

import Leader1 from "../../../Images/leaders/leader-1.png";
import Leader2 from "../../../Images/leaders/leader-2.png";
import Leader3 from "../../../Images/leaders/leader-3.png";

class LeadersOopData {
  constructor(leaderName, leaderPosition, leaderImages, leaderAbout) {
    this.leaderName = leaderName;
    this.leaderPosition = leaderPosition;
    this.leaderImages = leaderImages;
    this.leaderAbout = leaderAbout;
  }
}

const leaderData = [
  new LeadersOopData(
    "TURKI AL-RUSAYESS",
    "Board Member",
    Leader1,
    "As a board member at Pillar Real Estate, Turki has over 25 years of experience and exposure to all major players in the various sectors of this industry. Skilled in strategic planning, operations management, F&B, Real Estate development, finance and administration with an in-depth insight into the MENA market."
  ),
  new LeadersOopData(
    "TARIK AFTAT",
    `Chief executive Officer, CEO`,
    "",
    "As a member and certified trainer at MEFMA and BICS; Tarik is the Chief Executive Officer in charge of Operations, Properties Management and Facilities Management at Pillar Real Estate, with over 18 years of experience, internationally and locally. His main role is to develop and effectively implement short- and long-term strategies at the highest standards to ensure business goals are met. Managed over 44 commercial and residential properties, with an area of over 2.5 million sqm."
  ),
  new LeadersOopData(
    "ANAS AL-DEHESHI",
    "Board Member",
    "",
    "As a member and certified trainer at MEFMA and BICS; Tarik is the Chief Executive Officer in charge of Operations, Properties Management and Facilities Management at Pillar Real Estate, with over 18 years of experience, internationally and locally. His main role is to develop and effectively implement short- and long-term strategies at the highest standards to ensure business goals are met. Managed over 44 commercial and residential properties, with an area of over 2.5 million sqm."
  ),
];

function OurTeamLeaders(props) {
  return (
    <TeamLeaders>
      {leaderData.map((leader) => (
        <LeaderHoverCard leader={leader} />
      ))}
    </TeamLeaders>
  );
}

export default OurTeamLeaders;
