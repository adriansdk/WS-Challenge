import React from "react";
import "../styles/Style.scss";

function Opportunities(props) {
  const user = props.user;

  function getTotal(){
    let opportunities = user.opportunities
    let total = opportunities.won.quantity + opportunities.lost.quantity + opportunities.open.quantity + opportunities.discarded.quantity
    return total
  }
  return (
    <div className="opportunities box-card container">
      <h3 className="card-title spacing">Oportunidades ({getTotal()})</h3>
      <div className="numbers">
        <div className="row">
          <div className="col">
            <div className="row">
              <div className="col-4">
                <h3 className="green">{user.opportunities.won.quantity}</h3>
              </div>
              <div className="col">
                <h2>
                  Ganhas
                  <br></br>
                  <span>{user.opportunities.won.amount}</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <div className="col-4">
                <h3 className="red">{user.opportunities.lost.quantity}</h3>
              </div>
              <div className="col">
                <h2>
                  Perdidas
                  <br></br>
                  <span>{user.opportunities.lost.amount}</span>
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="row">
              <div className="col-4">
                <h3 className="blue">{user.opportunities.open.quantity}</h3>
              </div>
              <div className="col">
                <h2>
                  Abertas
                  <br></br>
                  <span>{user.opportunities.open.amount}</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <div className="col-4">
                <h3 className="black">{user.opportunities.discarded.quantity}</h3>
              </div>
              <div className="col">
                <h2>
                  Descartadas
                  <br></br>
                  <span>{user.opportunities.discarded.amount}</span>
                </h2>
              </div>
            </div>
          </div>
        </div>
        <a
          href="https://wealthsystems.gupy.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ver todas as oportunidades
        </a>
      </div>
    </div>
  );
}

export default Opportunities;
