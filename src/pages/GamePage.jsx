import React, { useState, useEffect } from "react";
import GameBoard from "../game/GameBoard.jsx";
import PrimaryButton from "../components/PrimaryButton.jsx";
import { useHanoiGame } from "../game/useHanoiGame.js";
import { useGameSettings } from "../game/GameSettingsContext.jsx";
import FinishModal from "../components/FinishModal.jsx";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addResult } from "../store/resultsSlice.js";

function GamePage() {
  const { settings } = useGameSettings();
  const navigate = useNavigate();
  const { userId } = useParams();
  const dispatch = useDispatch();

  const {
    towers,
    selectedTower,
    moves,
    isFinished,
    handleTowerClick,
    resetGame,
  } = useHanoiGame(settings.diskCount);

  const [round, setRound] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [resultSaved, setResultSaved] = useState(false);

  useEffect(() => {
    if (isFinished) {
      setShowModal(true);

      if (!resultSaved) {
        dispatch(
          addResult({
            userId,
            diskCount: settings.diskCount,
            difficulty: settings.difficulty,
            speed: settings.speed,
            moves,
            round,
          })
        );
        setResultSaved(true);
      }
    } else {
      setResultSaved(false);
    }
  }, [isFinished, resultSaved, dispatch, userId, settings, moves, round]);

  const handleRestartSameRound = () => {
    resetGame();
    setShowModal(false);
  };

  const handleNextRound = () => {
    setRound((prev) => prev + 1);
    resetGame();
    setShowModal(false);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <section className="page">
      <h2>Основна сторінка гри</h2>
      <p>
        Налаштування гри:
        <br />
        Кількість дисків: <strong>{settings.diskCount}</strong>, складність:{" "}
        <strong>{settings.difficulty}</strong>, швидкість:{" "}
        <strong>{settings.speed}</strong>
        <br />
        Поточний раунд: <strong>{round}</strong>
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
        <button
          className="secondary-button"
          onClick={() => navigate(`/${userId}/start`)}
        >
          На старт
        </button>

        <PrimaryButton onClick={resetGame}>
          Скинути гру
        </PrimaryButton>

        <PrimaryButton onClick={() => navigate(`/${userId}/results`)}>
          Перейти до результатів
        </PrimaryButton>
      </div>

      {showModal && (
        <FinishModal
          moves={moves}
          round={round}
          onRestart={handleRestartSameRound}
          onNextRound={handleNextRound}
          onClose={handleCloseModal}
        />
      )}
    </section>
  );
}

export default GamePage;
