import React from "react";
import "../styles/Style.scss";

function CreditLimit(props) {
  return (
    <div className="credit-limit box-card">
      <div className="container">
        <h3 className="spacing card-title">Limite de crédito</h3>
        <div className="row">
          <h4 className="blue">
            R$12,000,20 <br></br> <span>Concedido</span>
          </h4>
        </div>
        <div className="row">
          <h4 className="green">
            R$3,105,00 <br></br> <span>Disponível</span>
          </h4>
        </div>
      </div>
    </div>
  );
}

export default CreditLimit;
