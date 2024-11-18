import React, { useState } from "react";
import "./home.css";
import { Box } from "@mui/material";
import emailjs from "@emailjs/browser";

function Contact({ selectedView }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState(null);
  const sendEmail = (e) => {
    e.persist();
    e.preventDefault();
    setIsSubmitting(true);
    emailjs
      .sendForm(
        "service_contactForm",
        "template_5wzpgol",
        e.target,
        // process.env.REACT_APP_PUBLIC_KEY
        "R514vjDGegoY3tqhG"
      )
      .then(
        (result) => {
          setStateMessage('Message sent!');
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000); // hide message after 5 seconds
        },
        (error) => {
          setStateMessage('Something went wrong, please try again later');
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000); // hide message after 5 seconds
        }
      );

    // Clears the form after sending the email
    e.target.reset();
  };
  console.log('Contact component rendered');
  return (
    <div className="background-container">
      <div className="abril-fatface-regular" style={{ color: 'white', fontSize: '50px' }}>
        Contact me</div>
      <div display={"flex"} flexDirection={"column"} className="contact-form">
        <form onSubmit={sendEmail} flexDirection={"column"}>
          <label>Name</label>
          <div>
          <input type="text" name="user_name" />
          </div>
          <label>Email</label>
          <div>
          <input type="email" name="user_email" />
          </div>
          <label>Message</label>
          <div>
          <textarea name="message" />
          </div>
          <div>
          <input type="submit" value="Send" disabled={isSubmitting} />
          </div>
          {stateMessage && <p>{stateMessage}</p>}
        </form></div>
    </div>
  )
};

export default Contact;
