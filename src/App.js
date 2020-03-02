import React, { useEffect } from "react";

//COMPONENTS
import { Route, Switch } from 'react-router-dom'
import { LinkContainer } from "react-router-bootstrap";
import HomePage from "./pages/Home";
import UserInfoPage from "./pages/UserInfo";
import Navbar from "./components/Navbar";
import { Nav, Row, Col } from "react-bootstrap";
import UseAnimations from "react-useanimations";

// STYLING
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

//REQUIREMENTS
const logo = require("./assets/logo.jpg");
require('dotenv').config();


function App(props) {
  return (
    <React.Fragment>
      <Navbar></Navbar>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/user-info" component={UserInfoPage} />
      </Switch>
    </React.Fragment>
  )
}

export default App;