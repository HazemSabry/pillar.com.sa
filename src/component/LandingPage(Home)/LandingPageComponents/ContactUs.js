import React from "react";

import Contact from "./ContactUsStyle";

function ContactUs(props) {
  return (
    <Contact>
      <div class="header-cta">
        <h1 class="main-header">contact us</h1>
        <p class="contact-description">
          We are honored to recieve your calls and emials through our contact
          numbers. Our working hours are 24 hours. We would be happy to assist
          you and recieve your suggestions.
        </p>
      </div>
      <form class="contact-form" name="sign-up">
        <div class="name-div">
          <label for="full-name">Name</label>
          <input id="full-name" type="text" name="full-name" required />
        </div>
        <div class="phone-div">
          <label for="phone">Phone</label>
          <input id="phone" type="tel" required name="phone" />
        </div>
        <div class="email-div">
          <label for="email">Email</label>
          <input id="email" type="email" required name="email" />
        </div>
        <div class="cat-div">
          <label for="category">Category</label>
          <select required id="category" name="category"></select>
        </div>
        <div class="city-div">
          <label for="city">City</label>
          <select required id="city" name="city"></select>
        </div>
        <div class="message-div">
          <label for="message">Message</label>
          <input type="text" required id="message" name="message"></input>
        </div>
        <button class="btn--form">Contact Us</button>
      </form>
    </Contact>
  );
}

export default ContactUs;
