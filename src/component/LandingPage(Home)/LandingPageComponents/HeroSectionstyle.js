import styled from "styled-components";
const Hero = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;

  & .hero-img {
    height: 100vh;
  }

  & .hero-img-container {
    height: 100vh;
  }

  & .back-img-container {
    position: absolute;
    left: 0;
    width: 100%;
    overflow: hidden;
  }

  & .front-img-container {
    width: 50%;
    overflow: hidden;
    position: absolute;
    right: 0;
    z-index: 2;
    animation: slidy ease-in-out 4s;
  }

  & .front-img {
    float: right;
  }

  @keyframes slidy {
    0% {
      width: 100%;
      filter: blur(10px);
    }

    100% {
      width: 50%;
      filter: blur(0px);
    }
  }

  & .blur-img-container {
    height: 100vh;
    width: 100%;
    position: absolute;
    left: 0;
    z-index: 1;
  }

  & .blur-img {
    width: 100%;
    height: 100%;
  }

  & .side-bar-container {
    height: 100vh;
    width: 100%;
    overflow: hidden;
    position: absolute;
    left: 0;
    z-index: 3;
  }

  & .side-bar {
    width: 1000px;
    height: 100%;
  }

  & .wright {
    width: calc(50% - 2.875rem);
    height: 100vh;
    position: absolute;
    background-color: transparent;
    z-index: 4;
    display: grid;
    align-content: center;
  }

  & .wright-left {
    justify-content: center;
    left: 2.875rem;
    color: white;
    transform: translateX(3%);
  }
  & .wright-right {
    right: 0;
    top: 20%;
  }

  & .pillar-word-container {
    display: flex;
    gap: 8px;
    width: 90%;
    height: 8vw;
  }
  & .letter-container {
    height: 100%;
  }
  & .letter {
    height: 100%;
  }
  & .realstate-word {
    width: 90%;
    margin: 0 auto;
  }
`;
export default Hero;
