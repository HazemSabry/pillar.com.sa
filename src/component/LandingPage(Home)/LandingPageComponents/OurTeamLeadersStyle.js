import React from "react";
import styled from "styled-components";

const TeamLeaders = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: start;
  height: 100vh;
  align-items: center;
  padding-top: 25px;
  left: calc(50% - 30.75rem);

  & .mantine-1trwvlz {
    height: unset;
  }
  & .leader-container {
    text-align: center;
    width: 20rem;
  }
  & .leader-name {
    color: #362853;
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 0;
  }
  & .leader-position {
    color: #03a8bc;
    font-size: 2rem;
    font-weight: 50;
    margin: 0;
  }
  & .leader-name-dropdown {
    color: #362853;
    font-size: 1rem;
    font-weight: 700;
    margin: 0;
  }
  & .leader-position-dropdown {
    color: #03a8bc;
    font-size: 0.8rem;
    font-weight: 150;
    margin: 0;
  }

  & .mantine-HoverCard-dropdown.mantine-y29df9 {
    width: 19rem;
  }

  @media (max-width: 72.75rem) {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    justify-items: center;
    padding: 1rem;
    height: fit-content;
  }
`;

export default TeamLeaders;
