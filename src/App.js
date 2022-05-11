import "./css/styles.css";
import logo from "../src/img/logo.png";
import React from "react";

function App() {
  return (
    <div className="App">
      <head>
        <meta charSet="utf-8" />
        <title>Mi proyecto web CSS</title>
      </head>
      <body>
        inicio de la cabecera
        <header id="header">
          <div id="logotipo">
            <img src={logo} alt="logotipo"></img>
          </div>
          <h1>
            <a href="app.js">MASTER EN CSS</a>
          </h1>
        </header>
        fin de la cabecera
      </body>
    </div>
  );
}

export default App;
