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
      </div>
    </div>
  );
}

export default Activities;
