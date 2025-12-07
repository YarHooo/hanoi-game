import React from "react";
import ReactDOM from "react-dom";
import "./FinishModal.css";

function FinishModal({ moves, round, onRestart, onNextRound, onClose }) {
  return ReactDOM.createPortal(
    <div className="modal-backdrop">
      <div className="modal-window">
        <h2>Гру завершено!</h2>
        <p>
          Ви завершили раунд <strong>{round}</strong> за{" "}
          <strong>{moves}</strong> ходів.
        </p>

        <div className="modal-actions">
          <button className="primary-button" onClick={onRestart}>
            Почати раунд заново
          </button>
          <button className="secondary-button" onClick={onNextRound}>
            Наступний раунд
          </button>
        </div>

        <button className="modal-close" onClick={onClose}>
          Закрити
        </button>
      </div>
    </div>,
    document.body
  );
}

export default FinishModal;
