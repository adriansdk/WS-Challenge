import React, { useEffect } from "react";

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
            <Col>
              <CreditLimit></CreditLimit>
            </Col>
          </Row>
          <Row>
            <Col>
              <Sales></Sales>
            </Col>
            <Col>
              <FinancialTitle></FinancialTitle>
            </Col>
          </Row>
        </Col>
        <Col>
          <Activities></Activities>
        </Col>
      </Row>
    </div>
  );
}

export default UserInfo;
