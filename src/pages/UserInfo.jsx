import React from "react";

import GeneralInfo from "../components/GeneralInfo";
import Opportunities from "../components/Opportunities";
import Sales from "../components/Sales";
import Location from "../components/Location";
import { Row, Col } from "react-bootstrap";
import Sidebar from "../components/Sidebar";

import "../styles/Style.scss";
import CreditLimit from "../components/CreditLimit";
import FinancialTitle from "../components/FinancialTitle";
import Activities from "../components/Activities";

function UserInfo(props) {
  return (
    <div className="user-info container-fluid">
      <Row>
        <Col xs={1}>
          <Sidebar></Sidebar>
        </Col>
        <Col>
          <Row>
            <Col>
              <GeneralInfo user={props.api}></GeneralInfo>
            </Col>
            <Col>
              <Location user={props.api}></Location>
            </Col>
          </Row>
          <Row>
            <Col>
              <Opportunities user={props.api}></Opportunities>
            </Col>
            <Col>
              <CreditLimit user={props.api}></CreditLimit>
            </Col>
          </Row>
          <Row>
            <Col>
              <Sales user={props.api}></Sales>
            </Col>
            <Col>
              <FinancialTitle user={props.api}></FinancialTitle>
            </Col>
          </Row>
        </Col>
        <Col>
          <Activities user={props.api}></Activities>
        </Col>
      </Row>
    </div>
  );
}

export default UserInfo;
