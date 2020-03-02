import React, { useEffect } from "react";
import GeneralInfo from "../components/GeneralInfo";
import Opportunities from "../components/Opportunities";
import Sales from "../components/Sales";
import Location from "../components/Location";
import { Row, Col, Button } from "react-bootstrap";
import Navbar from "../components/Navbar";
import "../styles/Style.scss";

function UserInfo(props) {
  return (
    <div className="user-info">
      <Row>
        <Col>
          <GeneralInfo></GeneralInfo>
        </Col>
        <Col>
          <Location></Location>
        </Col>
      </Row>
      <Row>
        <Col>
          <Opportunities></Opportunities>
        </Col>
        <Col></Col>
      </Row>

      <Row>
        <Col>
          <Sales></Sales>
        </Col>
        <Col></Col>
      </Row>
    </div>
  );
}

export default UserInfo;
