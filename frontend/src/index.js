import React from "react";
import ReactDOM from "react-dom"; //arvore de elemento

import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root") //o react dom faz uma renderização do componente e aonde ele vai aparecer
);
