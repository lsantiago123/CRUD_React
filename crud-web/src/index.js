import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AzureAD } from "react-aad-msal";
import { authProvider } from "./authProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <AzureAD provider={authProvider} forceLogin={true}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AzureAD>,
  document.getElementById("root")
);
