// IMPORTING REACT FOR USE IN THIS FILE
import React from "react";
// IMPORTING REACT DOM FOR USE IN THIS FILE
import ReactDOM from "react-dom";
// IMPORTING STYLING TP USE IN THIS FILE
import './index.css';
// IMPORTING ENTRY POINT OF THS APP TO USE IN THIS FILE
import App from "./App";
// DEFINE REACT ROUTER
import { BrowserRouter as Router } from "react-router-dom";

// RENDER LANDING PAGE IN ROUTER CONTEXT ON root ELEMENT IN THE ORIGINAL DOM
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);