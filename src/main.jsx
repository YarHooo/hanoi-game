import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { GameSettingsProvider } from "./game/GameSettingsContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <GameSettingsProvider>
    <App />
  </GameSettingsProvider>
);
