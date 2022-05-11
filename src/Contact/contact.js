import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_tmedze6",
        "template_v9m6ed3",
        form.current,
        "Mpkzy0IwL1BhW85wM"
      )
      .then(
        () => {
          alert("You email Successfulyy sent");
          window.location.reload(false);
        },
        () => {
          alert("Error While sending and Email");
        }
      );
  };
  return (
    <div className="contact-page">
      <h1 className="animate__animated  animate__bounce  home-content">
        Contact Me
      </h1>
      <div className="contact-form">
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" required />
          <label>Email</label>
          <input type="email" name="user_email" required />
          <label>Message</label>
          <textarea name="message" required />
          <input type="submit" value="Send" className="submit-btn" />
        </form>
      </div>
      <br/>
      <div className="footer-contact">
        <p>&#169; Sanjay. All right reserved</p>
        </div>
    </div>
  );
};
export default Contact;
