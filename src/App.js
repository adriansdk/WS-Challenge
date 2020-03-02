import React, { useEffect } from "react";
import './App.css';
import Map from './components/Map';
require('dotenv').config();


function App(props) {
  const apiKey = process.env.REACT_APP_TOMTOM_API_KEY
  
  useEffect(() => {
    console.log(process.env.REACT_APP_TOMTOM_API_KEY)
  })


  return (<h1><Map apiKey={apiKey}></Map></h1>);
}

export default App;