import React from "react";
import Map from "./Map";
import "../styles/Style.scss";

function Location(props) {
  return (
    <div className="location box-card">
      <div className="container">
        <h3 className="spacing card-title">Local</h3>
        <div style={{ height: "90%", width: "100%" }}>
          <Map></Map>
        </div>
      </div>
    </div>
  );
}

export default Location;
