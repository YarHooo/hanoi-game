import React, { useState } from "react";
import Header from "./components/Header.jsx";

import StartPage from "./pages/StartPage.jsx";
import GamePage from "./pages/GamePage.jsx";
import ResultsPage from "./pages/ResultsPage.jsx";

import "./App.css";

function App() {
  const [page, setPage] = useState("start");

  let content = null;

  if (page === "start") {
    content = <StartPage onStart={() => setPage("game")} />;
  } else if (page === "game") {
    content = (
      <GamePage
        onFinish={() => setPage("results")}
        onBackToStart={() => setPage("start")}
      />
    );
  } else if (page === "results") {
    content = (
      <ResultsPage
        onRestart={() => setPage("game")}
        onBackToStart={() => setPage("start")}
      />
    );
  }

  return (
    <div className="app-root">
      {/* Спільна шапка на всіх сторінках */}
      <Header />

      {/* Сюди підставляються сторінки */}
      <main className="app-main">{content}</main>
    </div>
  );
}

export default App;
