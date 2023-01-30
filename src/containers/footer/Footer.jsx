import React from "react";
import logo from "../../assets/logo.svg";
import "./footer.css";
const Footer = () => {
  return (
    <div className="gpt3__footer-section">
      <div className="footer__heading">
        <h1 className="footer__title gradient-text">
          Unlocking the Potential of Language with ChatGPT-3
        </h1>
      </div>
      <div className="footer__logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="gpt3__footer-links-divs">
        <div className="gpt3__footer-links">
          <h4>Links</h4>
          <p>Counter</p>
          <p>Social media</p>
          <p>Contact</p>
        </div>
        <div className="gpt3__footer-links">
          <h4>Company</h4>
          <p>privacy policy</p>
          <p>terms & conditions</p>
          <p>Contact</p>
        </div>
        <div className="gpt3__footer-links">
          <h4>Get in touch</h4>
          <p>24 / 7 no. at wonderland </p>
          <p>Example@info.com</p>
          <p>Contact</p>
        </div>
      </div>
      <div>
        <span className="footer__copyRight">
          © 2023 GPT-3 All rights received{" "}
        </span>
      </div>
    </div>
  );
};

export default Footer;
