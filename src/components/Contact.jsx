import React from "react";

function Contact() {
  return (
    <div>
      <div className="contact" id="contact">
        <div className="contact-div">
          <ul>
            <li>
              <span className="email-link">
                <ion-icon name="mail"></ion-icon>
                avinjoy51@gmail.com
              </span>
            </li>
            <li>
              <a href="https://github.com/Avin-7">
                <ion-icon name="logo-github"></ion-icon>Gitub
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/avin-joy-dcosta-b3b5b7253">
                <ion-icon name="logo-linkedin"></ion-icon>
                Linkedin
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Contact;
