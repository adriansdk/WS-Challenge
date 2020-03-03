import React from "react";

//COMPONENTS
import { Route, Switch } from 'react-router-dom'
import HomePage from "./pages/Home";
import UserInfoPage from "./pages/UserInfo";
import Navbar from "./components/Navbar";

// JSON WITH API SIMULATION
import api from './seed.json';

// STYLING
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

//REQUIREMENTS
require('dotenv').config();


function App(props) {
  return (
    <React.Fragment>
      <Navbar api={api}></Navbar>
      <Switch>
        <Route exact path="/" render={(props) => <HomePage {...props} api={api} />} />
        <Route path="/user-info" render={(props) => <UserInfoPage {...props} api={api} />} />
      </Switch>
    </React.Fragment>
  )
}

export default App;