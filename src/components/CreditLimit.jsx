import React from "react";
import "../styles/Style.scss";

function CreditLimit(props) {
  const user = props.user;

  return (
    <div className="credit-limit box-card">
      <div className="container">
        <h3 className="spacing card-title">Limite de crédito</h3>
        <div className="row">
          <h4 className="blue">
            {user.credit.creditLimit} <br></br> <span>Concedido</span>
          </h4>
        </div>
        <div className="row">
          <h4 className="green">
            {user.credit.available} <br></br> <span>Disponível</span>
          </h4>
        </div>
      </div>
    </div>
  );
}

export default CreditLimit;
