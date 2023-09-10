import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import UssdSimulator from "./route";
import TxList from "./TxList";



const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <UssdSimulator/>



  </StrictMode>,
  rootElement
);
