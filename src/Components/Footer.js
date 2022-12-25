import React from "react";
import "./Footer.css";
import IconFacebook from "../Assets/icon_facebook.png";
import IconInstagram from "../Assets/icon_instagram.png";
import IconTwitter from "../Assets/icon_twitter.png";
import IconMail from "../Assets/icon_mail.png";
import IconTwitch from "../Assets/icon_twitch.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div class="d-flex flex-column">
        <div class="contact">
          <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
          <p>binarcarrental@gmail.com</p>
          <p>081-233-334-808</p>
        </div>
        <div class="nav-footer">
          <p>Our services</p>
          <p>Why us</p>
          <p>Testimonial</p>
          <p>FAQ</p>
        </div>
        <div class="socmed">
          <p>Connect with us</p>
          <img src={IconFacebook} alt="facebook" />
          <img src={IconInstagram} alt="instagram" />
          <img src={IconTwitter} alt="twitter" />
          <img src={IconMail} alt="mail" />
          <img src={IconTwitch} alt="twitch" />
        </div>
        <div class="cr-binar">
          <p>Copyright Binar 2022</p>
          <div class="box"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
