import React from "react";
import "../styles/Style.scss";

function FinancialTitle(props) {
  return (
    <div className="financial-title box-card">
      <div className="container">
        <h4 className="spacing card-title">Títulos financeiros</h4>
        <div className="row">
          <div className="col-3">
            <h3 className="red">1</h3>
          </div>
          <div className="col">
            <h2>
              R$3,000,00
              <br></br>
              <span>Vencidos</span>
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <h3 className="orange">2</h3>
          </div>
          <div className="col">
            <h2>
              R$2,500,000
              <br></br>
              <span>A vencer</span>
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <h3 className="green">3</h3>
          </div>
          <div className="col">
            <h2>
              R$2,459,00
              <br></br>
              <span>Pagos</span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FinancialTitle;
