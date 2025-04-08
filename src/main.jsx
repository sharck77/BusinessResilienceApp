import React from "react";
import ReactDOM from "react-dom/client";
import BusinessResilienceApp from "./BusinessResilienceApp";
import "./index.css";
import { loadInitialTheme } from "./utils/theme";
loadInitialTheme();


const root = document.getElementById("root");

if (root) {
  ReactDOM.createRoot(root).render(<BusinessResilienceApp />);
} else {
  console.error("Root element not found");
}
