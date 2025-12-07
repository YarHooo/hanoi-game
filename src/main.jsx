import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { GameSettingsProvider } from "./game/GameSettingsContext.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <GameSettingsProvider>
      <App />
    </GameSettingsProvider>
  </BrowserRouter>
);
