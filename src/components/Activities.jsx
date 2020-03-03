import React from "react";
import "../styles/Style.scss";

function Activities(props) {
  return (
    <div className="activities">
      <div className="container">
        <h3 className="spacing card-title">Atividades</h3>
        <input
          class="form-control"
          type="text"
          placeholder="Pesquisar..."
          aria-label="Search"
        ></input>
        <div className="row filters">
          <div className="col">
            <button className="btn">
              <h3>
                <span className="black btn">25</span> Total
              </h3>
            </button>
          </div>
          <div className="col">
            <button className="btn">
              <h3>
                <span className="red btn">1</span> Em atraso
              </h3>
            </button>
          </div>
          <div className="col">
            <button className="btn">
              <h3>
                <span className="blue btn">0</span> Em andamento
              </h3>
            </button>
          </div>
          <div className="col">
            <button className="btn">
              <h3>
                <span className="orange btn">3</span> Previstas
              </h3>
            </button>
          </div>
          <div className="col">
            <button className="btn">
              <h3>
                <span className="green btn">21</span> Concluídas
              </h3>
            </button>
          </div>
        </div>
        <div className="ball red"></div>
        <hr
          text-align="left"
          style={{
            color: "rgba(51,51,51,0.3)",
            backgroundColor: "rgba(51,51,51,0.3)",
            width: "2px",
            height: "75px"
          }}
        />
        <div className="ball orange"></div>
        <hr
          text-align="left"
          style={{
            color: "rgba(51,51,51,0.3)",
            backgroundColor: "rgba(51,51,51,0.3)",
            width: "2px",
            height: "150px"
          }}
        />
        <div className="ball green"></div>
        <hr
          text-align="left"
          style={{
            color: "rgba(51,51,51,0.3)",
            backgroundColor: "rgba(51,51,51,0.3)",
            width: "2px",
            height: "200px"
          }}
        />
      </div>
    </div>
  );
}

export default Activities;
