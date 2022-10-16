import React from "react";

import styled from "styled-components";

const About = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-size: 1.2rem;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 5vh 0 5vh 5vh;
  height: fit-content;
  & .about_image-container {
    height: 70vh;
  }

  & .about_image {
    height: 100%;
    width: 100%;
    transform: scale(1.1);
    border-radius: 2rem;
  }

  & .about_text-container {
    height: 70vh;
    padding-left: 3rem;
    padding-right: 2rem;
    width: 45rem;
    background-color: #dadad8;
  }

  & .about_us-title {
    text-align: center;
    color: #362853;
  }

  & .about_u-side_title {
  }

  @media (max-width: 100rem) {
    padding: 5vh 5vw;
    gap: 3rem;

    & .about_text-container {
      height: fit-content;
      border-radius: 2rem;
    }
  }
  @media (max-width: 50rem) {
    padding: 5vh 5vw;
    gap: 1rem;

    & .about_text-container {
      font-size: 0.7rem;
      height: fit-content;
      border-radius: 2rem;
    }
    & .about_image-container {
      height: auto;
      width: 100%;
    }
    & .about_image {
      transform: scale(1);
    }
  } ;
`;

export default About;
