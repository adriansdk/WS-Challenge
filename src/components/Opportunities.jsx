import React from "react";
import "../styles/Style.scss";

function Opportunities(props) {
  return (
    <div className="opportunities box-card container">
      <h3 className="card-title spacing">Oportunidades (7)</h3>
      <div className="numbers">
        <div className="row">
          <div className="col">
            <h3 className="green">4</h3>
          </div>
          <div className="col">
            <h3 className="red">1</h3>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h3 className="blue">2</h3>
          </div>
          <div className="col">
            <h3 className="black">0</h3>
          </div>
        </div>
        <a href="#">Ver todas as oportunidades</a>
      </div>
    </div>
  );
}

export default Opportunities;
