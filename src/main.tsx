import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import BusinessResilienceApp from "./App";
import { loadInitialTheme } from './utils/theme';
loadInitialTheme();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BusinessResilienceApp />
  </React.StrictMode>
);