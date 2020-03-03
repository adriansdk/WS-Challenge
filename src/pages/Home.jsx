import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const dog = require("../assets/dog.jpg");

function Home(props) {
  return (
    <div>
      <div className="row" style={{textAlign:"center"}}>
        <h1>Essa route só existe pra mostrar que é uma SPA. Clique no doguinho para voltar pra home.</h1>        
      </div>
      <div className="row justify-content-center">
        <Link to="/">
          <img src={dog} height="600px" width="auto"></img>
        </Link>
      </div>
    </div>
  );
}

export default Home;
