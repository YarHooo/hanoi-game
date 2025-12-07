import React from "react";
import Header from "./components/Header.jsx";
import StartPage from "./pages/StartPage.jsx";
import GamePage from "./pages/GamePage.jsx";
import ResultsPage from "./pages/ResultsPage.jsx";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <div className="app-root">
      <Header />
      <main className="app-main">
        <Routes>
          {/* редірект з / на /user-1/start */}
          <Route path="/" element={<Navigate to="/user-1/start" replace />} />

          {/* динамічний userId у шляху */}
          <Route path="/:userId/start" element={<StartPage />} />
          <Route path="/:userId/game" element={<GamePage />} />
          <Route path="/:userId/results" element={<ResultsPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
