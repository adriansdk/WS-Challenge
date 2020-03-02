import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookSquare,
  faTwitterSquare,
  faInstagramSquare,
  faLinkedin,
  faWhatsappSquare,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";

import "../styles/Style.scss";

function GeneralInfo(props) {
  return (
    <div className="general-info">
      <div className="row section-title">
        <h3>Informações Gerais</h3>
      </div>
      <div className="information">
        <div className="col profile-picture">
          <img></img>
        </div>
        <div className="col">
          <h4>Justine Robinson</h4>
          <h5>Acme Inc</h5>
          <button>Active</button>
        </div>
      </div>
      <div className="row contact-info">
        <div className="row">
          <h5> phone number</h5>
        </div>
        <div className="row">
          <h5>email</h5>
        </div>
      </div>
      <div className="row social-media">
        <a href="#">
          <FontAwesomeIcon icon={faWhatsappSquare} />{" "}
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faFacebookSquare} />{" "}
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faInstagramSquare} />{" "}
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faTwitterSquare} />{" "}
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faLinkedin} />{" "}
        </a>
      </div>
    </div>
  );
}

export default GeneralInfo;
