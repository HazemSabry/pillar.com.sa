import React from "react";

import styled from "styled-components";
import contactUsBackground from "../../../Images/contact-us/contact-us-background-img.png";

const Contact = styled.div`
  line-height: 1;
  display: grid;
  justify-content: center;
  align-items: center;
  background-image: url(${contactUsBackground});
  background-size: cover;
  background-position: center;
  color: #DADAD8;
  width: 100%;
  height: 100vh;
  box-sizing: border-box;


& .header-cta {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

& .main-header {
  text-transform: uppercase;
  margin-bottom: 1.2rem;
  font-size: 4.8rem;
  font-weight: 700;
  letter-spacing: -2px;
}

& .contact-description {
  font-size: 1rem;
  width: 70%;
  text-align: center;
}

& .contact-form {
  display: grid;
  width:100%;
  margin: 0 auto;
  grid-template-columns: 1.5fr 1fr;
  column-gap: 2.4rem;
  row-gap: 2.4rem;
  justify-content: center;
  align-items: center;
  margin-bottom: 2.4rem;
  padding-top: 4.8rem;
}

&.contact-form div {
  display: inline-block;
  display: flex;
}

& .name-div,
& .phone-div,
& .email-div {
  grid-column: 1;
  display: flex;
  justify-content: space-between;
}

& .cat-div {
  grid-column: 2/3;
  display: grid;
  grid-template-columns: 1fr 3fr;
  box-sizing: border-box;
  grid-row: 1;
}
& .city-div {
  grid-column: 2/3;
  grid-row: 2;
}
& .message-div {
  grid-column: 1/-1;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 2.4rem;
}

& .btn--form {
  grid-column: 2/3;
  cursor: pointer;
}

& .contact-form label {
  display: inline-block;
  width: 6rem;
  text-transform: uppercase;
  font-weight: 700;
  cursor: pointer;
}

& .contact-form div input {
  flex-grow: 1;
  border: none;
  background-color: transparent;
  border-bottom: 1px solid #DADAD8;
  color:#DADAD8;
  outline: none;
}

& .message-div input {
  width: 70%;
  color:#DADAD8;
}

& .contact-form select {
  flex-grow: 1;
  color: #DADAD8;
  background-color: transparent;
  width: 50%;
  border: none;
  border-bottom: 1px solid #DADAD8;
  cursor: pointer;
}

& .cat-div,
& .city-div {
  width: 70%;
  justify-self: end;
  display: grid;
  grid-template-columns: 1fr 3fr;
}

& .btn--form {
  color: #fff;
  font-size: 1.8rem;
  text-transform: uppercase;
  background-color: #e3e43a;
  width: 12rem;
  height: 5rem;
  border: none;
  justify-self: center;
  cursor: pointer;
}

@media (max-width: 56em) {
  & .contact-form {
    grid-template-columns: 1fr;
    width: 80%;
  }
  & .name-div,
  & .phone-div,
  & .email-div,
  & .cat-div,
  & .city-div,
  & .message-div,
  & .btn--form {
    grid-column: 1;
    justify-self: start;
  }
  & .cat-div {
    grid-row: 4;
  }
  & .city-div {
    grid-row: 5;
  }
  & .main-header {
    font-size: 3.2rem;
  }
  & .contact-description {
    font-size: 1rem;
    width: 80%;
  }
  & .btn--form {
    justify-self: center;
  }
  & .message-div input {
    width: 200%;
  }

  & .contact-form select {
  color: #DADAD8;
  width: 100%;

}
`;

export default Contact;
