import React from "react";
import "../styles/Style.scss";

function FinancialTitle(props) {
  const user = props.user;

  return (
    <div className="financial-title box-card">
      <div className="container">
        <h4 className="spacing card-title">Títulos financeiros</h4>
        <div className="row">
          <div className="col-3">
            <h3 className="red">{user.financialTitles.expired.quantity}</h3>
          </div>
          <div className="col">
            <h2>
              {user.financialTitles.expired.amount}
              <br></br>
              <span>Vencidos</span>
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <h3 className="orange">{user.financialTitles.toBeExpired.quantity}</h3>
          </div>
          <div className="col">
            <h2>
              {user.financialTitles.toBeExpired.amount}
              <br></br>
              <span>A vencer</span>
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <h3 className="green">{user.financialTitles.paid.quantity}</h3>
          </div>
          <div className="col">
            <h2>
              {user.financialTitles.paid.amount}
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
