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
const profilePic = require("../assets/profile.png");

function GeneralInfo(props) {
  const user = props.user;
  return (
    <div className="general-info box-card">
      <div className="container">
        <div className="section-title">
          <h3 className="card-title spacing">Informações Gerais</h3>
        </div>
        <div className="information row">
          <div className="col-3 profile-picture">
            <img
              src={profilePic}
              height="65px"
              width="65px"
              alt="Profile"
            ></img>
          </div>
          <div className="col">
            <h4>{user.user}</h4>
            <h5>{user.company}</h5>
            {user.active === true ? (
              <button className="btn">Ativo</button>
            ) : (
              <button className="btn">Desconectado</button>
            )}
          </div>
        </div>
        <div className="contact-info">
          <span>
            <FontAwesomeIcon icon={faPhoneAlt} />{" "}
          </span>
          <h5>{user.contactInfo.number}</h5>
          <br></br>
          <span>
            <FontAwesomeIcon icon={faEnvelope} />
          </span>
          <h5>{user.contactInfo.email}</h5>
        </div>
        <div className="social-media">
          <a
            href={user.socialMediaUrls.whatsapp}
            className="whats"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faWhatsapp} />{" "}
          </a>
          <a
            href={user.socialMediaUrls.facebook}
            className="facebook"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFacebook} />{" "}
          </a>
          <a
            href={user.socialMediaUrls.instagram}
            className="instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} />{" "}
          </a>
          <a
            href={user.socialMediaUrls.twitter}
            className="twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faTwitter} />{" "}
          </a>
          <a
            href={user.socialMediaUrls.linkedin}
            className="linkedin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />{" "}
          </a>
        </div>
      </div>
    </div>
  );
}

export default GeneralInfo;
