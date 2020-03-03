import React from "react";
import "../styles/Style.scss";

function Opportunities(props) {
  return (
    <div className="opportunities box-card container">
      <h3 className="card-title spacing">Oportunidades (7)</h3>
      <div className="numbers">
        <div className="row">
          <div className="col">
            <div className="row">
              <div className="col-4">
                <h3 className="green">4</h3>
              </div>
              <div className="col">
                <h2>
                  Ganhas
                  <br></br>
                  <span>R$20,000,000</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <div className="col-4">
                <h3 className="red">4</h3>
              </div>
              <div className="col">
                <h2>
                  Perdidas
                  <br></br>
                  <span>R$4,300,000</span>
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="row">
              <div className="col-4">
                <h3 className="blue">4</h3>
              </div>
              <div className="col">
                <h2>
                  Abertas
                  <br></br>
                  <span>Várias moedas</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <div className="col-4">
                <h3 className="black">4</h3>
              </div>
              <div className="col">
                <h2>
                  Descartadas
                  <br></br>
                  <span>-</span>
                </h2>
              </div>
            </div>
          </div>
        </div>
        <a href="https://wealthsystems.gupy.io/">Ver todas as oportunidades</a>
      </div>
    </div>
  );
}

export default Opportunities;
