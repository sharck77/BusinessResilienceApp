import React from "react";
import ReactDOM from "react-dom/client";
import BusinessResilienceApp from "./BusinessResilienceApp";
import { DarkModeProvider } from "./DarkModeProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DarkModeProvider>
      <BusinessResilienceApp />
    </DarkModeProvider>
  </React.StrictMode>
);
