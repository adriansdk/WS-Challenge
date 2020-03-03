import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
  faWhatsapp
} from "@fortawesome/free-brands-svg-icons";
import { faPhoneAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "../styles/Style.scss";
const profilePic = require("../assets/logo.jpg");

function GeneralInfo(props) {
  return (
    <div className="general-info box-card">
      <div className="container">
        <div className="section-title">
          <h3 className="card-title spacing">Informações Gerais</h3>
        </div>
        <div className="information row">
          <div className="col-3 profile-picture">
            <img src={profilePic} height="65px" width="65px"></img>
          </div>
          <div className="col">
            <h4>Justine Robinson</h4>
            <h5>Acme Inc</h5>
            <button className="btn">Ativo</button>
          </div>
        </div>
        <div className="contact-info">
          <span>
            <FontAwesomeIcon icon={faPhoneAlt} />{" "}
          </span>
          <h5>45 9 984058900</h5>
          <br></br>
          <span>
            <FontAwesomeIcon icon={faEnvelope} />
          </span>
          <h5>justine@gmail.com</h5>
        </div>
        <div className="social-media">
          <a href="#" class="whats">
            <FontAwesomeIcon icon={faWhatsapp} />{" "}
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faFacebook} />{" "}
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faInstagram} />{" "}
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faTwitter} />{" "}
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faLinkedin} />{" "}
          </a>
        </div>
      </div>
    </div>
  );
}

export default GeneralInfo;
