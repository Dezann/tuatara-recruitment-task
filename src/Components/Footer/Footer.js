import React from "react";
import Form from "../../UtilityComponents/Form/Form";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__left">
        <div className="footer__links">
          <h1>ABOUT LOREM IPSUM</h1>
          <div className="links-wrapper">
            <div>
              <ul>
                <li>Know more</li>
                <li>Advantages</li>
                <li>Tips & tricks</li>
                <li>Pricing</li>
              </ul>
            </div>
            <div>
              <ul>
                <li>About us</li>
                <li>FAQ</li>
                <li>Terms and Conditions</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="contact-form">
          <Form title="Can we help you?" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
