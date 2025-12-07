import React from "react";
import GameBoard from "../game/GameBoard.jsx";
import PrimaryButton from "../components/PrimaryButton.jsx";
import { useHanoiGame } from "../game/useHanoiGame.js";

function GamePage({ onFinish, onBackToStart }) {
  const {
    towers,
    selectedTower,
    moves,
    isFinished,
    handleTowerClick,
    resetGame,
  } = useHanoiGame(3);

  return (
    <section className="page">
      <h2>Основна сторінка гри</h2>
      <p>
        Логіка переміщення дисків реалізована
        за допомогою кастомного хука <code>useHanoiGame</code>.
      </p>

      <p>
        Ходи: <strong>{moves}</strong>{" "}
        {isFinished && <span>— гра завершена!</span>}
      </p>

      <GameBoard
        towers={towers}
        selectedTower={selectedTower}
        onTowerClick={handleTowerClick}
      />

      <div className="page-actions">
        <button className="secondary-button" onClick={onBackToStart}>
          На старт
        </button>

        <PrimaryButton onClick={resetGame}>
          Скинути гру
        </PrimaryButton>

        <PrimaryButton onClick={onFinish}>
          Перейти до результатів (плейсхолдер)
        </PrimaryButton>
      </div>
    </section>
  );
}

export default GamePage;
